#!/usr/bin/env node
/**
 * Spec <-> implementation token parity.
 *
 * For every spec with status "implemented", diff the tokens declared in its
 * frontmatter against the token references actually used by the pinned
 * framework implementation (frameworks/react, frameworks/htmx):
 *
 *   missing  tokens the component uses but the spec does not declare  (spec drift)
 *   extra    tokens the spec declares but no listed framework uses      (spec overreach)
 *
 * Extraction and shape rules come from scripts/token-names.mjs, so all
 * naming conventions are understood: --dt- tier vars (legacy submodule
 * pins), --dx- tier vars (current uikit implementations), and react's
 * --dx- flat names (the react pin switches conventions when the
 * submodule is repointed), including fallback references such as
 * var(--dt-color-border, currentColor). Only schema tokens are in
 * contract: references to non-schema properties (--dt-layout-*, legacy
 * --dt-color-fg names in old pins) are out of scope and skipped.
 * Component directories match the spec frontmatter `name`
 * case-insensitively and separator-insensitively, with rename aliases from
 * scripts/token-names.mjs applied, so one spec resolves against the pinned
 * snapshots and against current sources alike; an unresolved directory is a
 * violation, never a silent skip. Because one spec frontmatter serves every
 * framework, `extra` is union semantics: a token must be used by at least one
 * implementation. Declarations no pin consumes yet are listed in
 * KNOWN_PIN_GAPS (scripts/token-names.mjs) — they are current-source facts
 * the pins predate, printed so they cannot rot silently, and must be removed
 * when the submodules are repointed.
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
import {
  componentDirKeys,
  dirKey,
  isKnownPinGap,
  tokenUsed,
  dottedFromReactName,
  extractVarRefs,
} from "./token-names.mjs";
import "./ci-annotations.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPECS_DIR = join(ROOT, "specs/components");
const FRAMEWORKS_DIR = join(ROOT, "frameworks");
const SCHEMA_PATH = join(ROOT, "specs/tokens.schema.json");

function readFrontmatter(markdown) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(markdown);
  return match ? parseYaml(match[1]) : null;
}

async function knownTokens() {
  const schema = JSON.parse(await readFile(SCHEMA_PATH, "utf8"));
  const known = new Set();
  for (const [tier, def] of Object.entries(schema.tiers ?? {})) {
    for (const token of def.tokens ?? []) known.add(`${tier}.${token}`);
  }
  return known;
}

async function implDir(technology, componentName) {
  const base =
    technology === "react"
      ? join(FRAMEWORKS_DIR, "react", "lib", "components")
      : technology === "htmx"
        ? join(FRAMEWORKS_DIR, "htmx", "lib", "components")
        : null;
  if (!base) return null;

  const candidates = componentDirKeys(componentName);

  let entries;
  try {
    entries = await readdir(base, { withFileTypes: true });
  } catch {
    return null;
  }
  const match = entries.find(
    (e) => e.isDirectory() && candidates.includes(dirKey(e.name)),
  );
  return match ? join(base, match.name) : null;
}

async function usedTokens(dir) {
  const bundle = { dotted: new Set(), flat: new Set() };
  const files = (await readdir(dir, { withFileTypes: true })).filter(
    (e) => e.isFile() && /\.(css|tsx|jsx|html)$/.test(e.name),
  );
  for (const file of files) {
    const vars = extractVarRefs(await readFile(join(dir, file.name), "utf8"));
    for (const t of vars.dotted) bundle.dotted.add(t);
    for (const t of vars.flat) bundle.flat.add(t);
  }
  return bundle;
}

async function main() {
  const known = await knownTokens();
  const files = (await readdir(SPECS_DIR)).filter((f) => f.endsWith(".md"));
  let violations = 0;

  for (const file of files) {
    const name = file.replace(/\.md$/, "");
    const markdown = await readFile(join(SPECS_DIR, file), "utf8");
    const meta = readFrontmatter(markdown);
    if (!meta || meta.status !== "implemented" || !Array.isArray(meta.tokens)) {
      continue;
    }

    const declared = new Set(meta.tokens.filter((t) => typeof t === "string" && t.includes(".")));
    const bundles = new Map(); // technology -> used-token bundle (resolved dirs only)
    const violationsBefore = violations;

    for (const [technology] of Object.entries(meta.frameworks ?? {})) {
      const dir = await implDir(technology, meta.name ?? name);
      if (!dir) {
        console.error(
          `✗ ${name} (${technology}): implementation directory not found for "${meta.name ?? name}"`,
        );
        violations++;
        continue;
      }
      bundles.set(technology, await usedTokens(dir));
    }

    // missing (per framework): used by the component but not declared.
    // Derivations must land on a schema token — non-schema properties are
    // out of contract (see header).
    for (const [technology, actual] of bundles) {
      const missing = new Set();
      for (const t of actual.dotted) {
        if (known.has(t) && !declared.has(t)) missing.add(t);
      }
      for (const t of actual.flat) {
        const guess = dottedFromReactName(t);
        if (guess && known.has(guess) && !declared.has(guess)) missing.add(guess);
      }
      for (const t of [...missing].sort()) {
        console.error(
          `✗ ${name} (${technology}): uses ${t} but spec does not declare it`,
        );
        violations++;
      }
    }

    // extra (union across frameworks): declared but unused by every
    // implementation — one shared spec may legitimately be implemented
    // with different token subsets per framework. Declarations the pins
    // predate are known gaps, not violations (see header).
    if (bundles.size > 0) {
      const unused = [...declared]
        .filter((t) => [...bundles.values()].every((b) => !tokenUsed(t, b)))
        .sort();
      for (const t of unused.filter((t) => isKnownPinGap(name, t))) {
        console.log(
          `✓ ${name}: ${t} — known pin gap, current sources use it (remove at repoint)`,
        );
      }
      for (const t of unused.filter((t) => !isKnownPinGap(name, t))) {
        console.error(`✗ ${name}: spec declares ${t} but no implementation uses it`);
        violations++;
      }
    }

    if (violations === violationsBefore && bundles.size > 0) {
      for (const technology of bundles.keys()) {
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
