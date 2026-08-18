#!/usr/bin/env node
/**
 * Validate every theme under themes/ against the token schema:
 *   1. every tier/token from the schema is present, no unknown tokens
 *   2. value forms are valid (string or { light, dark })
 *   3. WCAG 2.1 AA contrast for schema contrastRules (opaque colors only)
 *
 *   node scripts/validate-theme.mjs          # all themes
 *   node scripts/validate-theme.mjs themes/default
 *
 * Exit 1 on any violation.
 */

import { readFile, readdir } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const THEMES_DIR = join(ROOT, "themes");
const SCHEMA_PATH = join(ROOT, "specs/tokens.schema.json");

const HEX_RE = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

function parseHex(hex) {
  let h = hex.slice(1);
  if (h.length === 3) h = h.replace(/./g, (c) => c + c);
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
    h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
  ];
}

function luminance([r, g, b]) {
  const f = (c) => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(fgHex, bgHex) {
  const [fr, fg, fb, fa] = parseHex(fgHex);
  const [br, bg, bb, ba] = parseHex(bgHex);
  if (fa !== 1 || ba !== 1) return null;
  const l1 = luminance([fr, fg, fb]);
  const l2 = luminance([br, bg, bb]);
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

function isOpaqueColor(value) {
  return typeof value === "string" && HEX_RE.test(value);
}

async function listThemes(targetArg) {
  if (targetArg) {
    const p = resolve(ROOT, targetArg);
    if (!p.startsWith(THEMES_DIR + "/")) {
      throw new Error(`theme must live under themes/: ${targetArg}`);
    }
    return [p];
  }
  const entries = await readdir(THEMES_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => join(THEMES_DIR, e.name));
}

function validateTheme(themeDir, schema) {
  const name = themeDir.split(/[\\/]/).pop();
  const errors = [];
  const warn = (msg) => console.error(`  ! ${msg}`);
  const fail = (msg) => {
    errors.push(msg);
    console.error(`  ✗ ${msg}`);
  };

  let tokens;
  try {
    tokens = JSON.parse(readFileSync(join(themeDir, "tokens.json"), "utf8"));
  } catch (err) {
    fail(`cannot read tokens.json: ${err.message}`);
    return { name, errors };
  }

  for (const [tier, def] of Object.entries(schema.tiers)) {
    const values = tokens.values?.[tier];
    for (const token of def.tokens) {
      if (!values || !(token in values)) {
        fail(`missing token: ${tier}.${token}`);
        continue;
      }
      const value = values[token];
      if (typeof value !== "string") {
        const has = (k) =>
          typeof value === "object" && value !== null && typeof value[k] === "string";
        if (!has("light") || !has("dark")) {
          fail(
            `invalid value for ${tier}.${token}: must be string or { light, dark }`,
          );
        }
      }
    }
    for (const token of Object.keys(values ?? {})) {
      if (!def.tokens.includes(token)) {
        fail(`unknown token in tier ${tier}: ${token}`);
      }
    }
  }
  for (const tier of Object.keys(tokens.values ?? {})) {
    if (!(tier in schema.tiers)) fail(`unknown tier: ${tier}`);
  }

  for (const mode of ["light", "dark"]) {
    for (const rule of schema.contrastRules) {
      const fg = tokens.values?.color?.[rule.fg];
      const bg = tokens.values?.color?.[rule.bg];
      const fgHex = typeof fg === "string" ? fg : fg?.[mode];
      const bgHex = typeof bg === "string" ? bg : bg?.[mode];
      if (!isOpaqueColor(fgHex) || !isOpaqueColor(bgHex)) continue;
      const ratio = contrast(fgHex, bgHex);
      if (ratio !== null && ratio < rule.min) {
        fail(
          `contrast ${mode}: ${rule.fg} (${fgHex}) on ${rule.bg} (${bgHex}) = ` +
            `${ratio.toFixed(2)} < ${rule.min}`,
        );
      }
    }
  }

  if (errors.length === 0) console.log(`✓ ${name} valid`);
  return { name, errors };
}

async function main() {
  const schema = JSON.parse(await readFile(SCHEMA_PATH, "utf8"));
  const themes = await listThemes(process.argv[2]);
  let failed = 0;
  for (const themeDir of themes) {
    const { errors } = validateTheme(themeDir, schema);
    failed += errors.length;
  }
  if (failed > 0) {
    console.error(`\n${failed} violation(s) — fix the theme(s) before committing.`);
    process.exit(1);
  }
  console.log(`\nall ${themes.length} theme(s) valid.`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});