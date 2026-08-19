#!/usr/bin/env node
/**
 * Spec <-> implementation token parity.
 *
 * For every spec with status "implemented", diff the tokens declared in its
 * frontmatter against the var(--dt-*) references actually used by the
 * framework implementation:
 *
 *   missing  tokens the component uses but the spec does not declare  (spec drift)
 *   extra    tokens the spec declares but the component never uses     (spec overreach)
 *
 * The spec is the contract: both directions are violations.
 *
 *   node scripts/validate-parity.mjs
 *
 * Exit 1 on any violation.
 */

import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPECS_DIR = join(ROOT, "specs/components");
const FRAMEWORKS_DIR = join(ROOT, "frameworks");

const VAR_RE = /var\(--dt-([a-z0-9-]+)\)/g;

function readFrontmatter(markdown) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(markdown);
  return match ? parseYaml(match[1]) : null;
}

function tokenToVar(token) {
  const [tier, ...rest] = token.split(".");
  return `--dt-${tier}-${rest.join("-")}`;
}

function varToToken(variable) {
  const [tier, ...rest] = variable.split("-");
  return `${tier}.${rest.join("-")}`;
}

function implDir(technology, componentName) {
  if (technology === "react") {
    return join(FRAMEWORKS_DIR, "react", "lib", "components", componentName);
  }
  if (technology === "htmx") {
    const kebab = componentName
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase();
    return join(FRAMEWORKS_DIR, "htmx", "lib", "components", kebab);
  }
  return null;
}

async function usedTokens(dir) {
  const files = (await readdir(dir, { withFileTypes: true }))
    .filter((e) => e.isFile() && /\.(css|tsx|jsx|html)$/.test(e.name));
  const tokens = new Set();
  for (const file of files) {
    const source = await readFile(join(dir, file.name), "utf8");
    for (const match of source.matchAll(VAR_RE)) {
      tokens.add(varToToken(match[1]));
    }
  }
  return tokens;
}

async function main() {
  const files = (await readdir(SPECS_DIR)).filter((f) => f.endsWith(".md"));
  let violations = 0;

  for (const file of files) {
    const name = file.replace(/\.md$/, "");
    const markdown = await readFile(join(SPECS_DIR, file), "utf8");
    const meta = readFrontmatter(markdown);
    if (!meta || meta.status !== "implemented" || !Array.isArray(meta.tokens)) {
      continue;
    }

    for (const [technology] of Object.entries(meta.frameworks ?? {})) {
      const dir = implDir(technology, meta.name);
      if (!dir) continue;
      let actual;
      try {
        actual = await usedTokens(dir);
      } catch {
        continue;
      }

      const declared = new Set(meta.tokens);
      const missing = [...actual].filter((t) => !declared.has(t)).sort();
      const extra = [...declared].filter((t) => !actual.has(t)).sort();

      for (const t of missing) {
        console.error(
          `✗ ${name} (${technology}): uses ${t} (${tokenToVar(t)}) but spec does not declare it`,
        );
        violations++;
      }
      for (const t of extra) {
        console.error(
          `✗ ${name} (${technology}): spec declares ${t} but ${technology} never uses it`,
        );
        violations++;
      }
      if (missing.length === 0 && extra.length === 0) {
        console.log(`✓ ${name} (${technology}) token parity`);
      }
    }
  }

  if (violations > 0) {
    console.error(
      `\n${violations} parity violation(s) — update the spec (or the component) before committing.`,
    );
    process.exit(1);
  }
  console.log("\nall implemented specs in token parity.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});