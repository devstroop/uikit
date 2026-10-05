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
 * Props and behavior ride the same contract (spec is source of truth,
 * implementations may extend):
 *
 *   props    every `## API` table prop must be covered by the react
 *            interface (or native/spread) and by the htmx markup surface
 *            (modifier, attribute, or documented value). Render-control
 *            props (REACT_ONLY_PROPS) are react-side by design. Specs
 *            without an API table are reported, not failed.
 *   behavior every `## Tests` row must share a probe word with the test
 *            suite(s) its scope marker selects ((htmx), (react), or
 *            either when unmarked). Specs without a Tests table are
 *            reported, not failed.
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
  componentDirCandidates,
  kebabCase,
  dirKey,
  isKnownPinGap,
  isKnownPropGap,
  isKnownBehaviorGap,
  tokenUsed,
  dottedFromReactName,
  extractVarRefs,
  extractSpecProps,
  extractReactProps,
  collectReactTypes,
  extractHtmxSurface,
  reactCoversProp,
  htmxCoversProp,
  scenarioSuites,
  scenarioProbes,
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
  if (match) return join(base, match.name);

  // Utility-level specs (hooks, behavioral attributes) do not have a
  // component directory. Resolve them against the hook module dir (react)
  // or the htmx behaviors bundle, so parity enforces their declared/used
  // token contract the same way. Neither contributes var() token usage,
  // so a spec here declares token/st: [].
  if (technology === "react") {
    const hooksDir = join(FRAMEWORKS_DIR, "react", "lib", "hooks");
    try {
      const hookFiles = await readdir(hooksDir, { withFileTypes: true });
      const hook = hookFiles.find(
        (f) =>
          f.isFile() &&
          candidates.includes(dirKey(f.name.replace(/\.[^.]+$/, "").replace(/^use/, "")))
      );
      if (hook) return hooksDir;
    } catch {
      /* hooks dir may not exist in older pins */
    }
    return null;
  }

  if (technology === "htmx") {
    const behaviors = join(FRAMEWORKS_DIR, "htmx", "lib", "behaviors.js");
    try {
      const src = await readFile(behaviors, "utf8");
      // Match the canonical attribute spellings: the component dir
      // candidate list ported into a `data-dx-<kebab>` attribute probe.
      const reg = componentDirCandidates(componentName);
      for (const name of reg) {
        if (src.includes(`data-dx-${name}`)) {
          return dirname(behaviors);
        }
      }
    } catch {
      /* no behaviors bundle in older pins */
    }
  }
  return null;
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

async function dirSources(dir, exts) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (e.isFile() && exts.test(e.name)) {
      out.push(await readFile(join(dir, e.name), "utf8"));
    }
  }
  return out;
}

/** Lowercased test text per component dirKey, per technology. */
async function testCorpora() {
  const corpora = { react: new Map(), htmx: new Map() };
  const reactBase = join(FRAMEWORKS_DIR, "react", "lib", "components");
  // alias targets: InputProps = TextBoxProps shares TextBox's coverage.
  // Applied after the per-dir corpora are built, below.
  const aliasTo = new Map(); // dirKey -> dirKey
  try {
    const dirs = new Map();
    for (const e of await readdir(reactBase, { withFileTypes: true })) {
      if (e.isDirectory()) dirs.set(dirKey(e.name), e.name);
    }
    for (const [dkey, dname] of dirs) {
      for (const src of await dirSources(join(reactBase, dname), /\.(tsx|ts)$/)) {
        for (const m of src.matchAll(
          /(?:export\s+)?type\s+\w*(?:Props|Options)\w*[^=]*=\s*(\w+)\s*;/g
        )) {
          const target = dirs.get(dirKey(m[1].replace(/(Props|Options)$/, "")));
          if (target && dirKey(target) !== dkey) aliasTo.set(dkey, dirKey(target));
        }
      }
    }
  } catch {
    /* alias resolution is best-effort */
  }
  try {
    for (const e of await readdir(reactBase, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      const texts = await dirSources(join(reactBase, e.name), /\.test\.(tsx|ts|jsx|js)$/);
      if (texts.length) {
        corpora.react.set(
          dirKey(e.name),
          (corpora.react.get(dirKey(e.name)) ?? "") + "\n" + texts.join("\n").toLowerCase()
        );
      }
    }
  } catch {
    /* no react pin */
  }
  for (const [from, to] of aliasTo) {
    if (corpora.react.has(to)) {
      corpora.react.set(
        from,
        (corpora.react.get(from) ?? "") + "\n" + corpora.react.get(to)
      );
    }
  }
  // hooks: useLiveRegion.test.ts covers the live-region spec (same
  // strip-use-prefix rule as validate-specs.mjs).
  try {
    const hooksBase = join(FRAMEWORKS_DIR, "react", "lib", "hooks");
    for (const e of await readdir(hooksBase, { withFileTypes: true })) {
      if (!e.isFile() || !/\.test\.(ts|tsx|js|jsx)$/.test(e.name)) continue;
      const key = dirKey(
        e.name.replace(/\.[^.]+$/, "").replace(/^use/, "").replace(/\.[^.]+$/, "")
      );
      const text = (await readFile(join(hooksBase, e.name), "utf8")).toLowerCase();
      corpora.react.set(key, (corpora.react.get(key) ?? "") + "\n" + text);
    }
  } catch {
    /* no hooks dir in older pins */
  }
  // re-export following: entrypoint dirs (DialogService -> Dialog)
  // share the underlying dir's tests, mirroring the props logic.
  try {
    const dirs = new Map();
    for (const e of await readdir(reactBase, { withFileTypes: true })) {
      if (e.isDirectory()) dirs.set(dirKey(e.name), e.name);
    }
    for (const [dkey, dname] of dirs) {
      const dirPath = join(reactBase, dname);
      for (const src of await dirSources(dirPath, /\.(tsx|ts)$/)) {
        for (const m of src.matchAll(
          /export\s+(?:type\s+)?\{[^}]*\}\s*from\s*['"](\.[^'"]+)['"]/g
        )) {
          const base = join(dirPath, m[1]);
          for (const cand of [`${base}.tsx`, `${base}.ts`, join(base, "index.tsx"), join(base, "index.ts")]) {
            const hit = [...dirs.values()].find(
              (d) => cand.startsWith(join(reactBase, d) + "/") || cand === join(reactBase, d)
            );
            if (hit && hit !== dname) {
              const extra = corpora.react.get(dirKey(hit));
              if (extra) {
                corpora.react.set(dkey, (corpora.react.get(dkey) ?? "") + "\n" + extra);
              }
              break;
            }
          }
        }
      }
    }
  } catch {
    /* re-export following is best-effort */
  }
  const htmxBase = join(FRAMEWORKS_DIR, "htmx", "tests");
  // Attribute by content, not filename: form-field-error-rendering.test.js
  // covers the field spec; form-validation-rules covers validators.
  // A test file belongs to every component whose data-dx-* attribute
  // or dx-* class it references (dirKey-normalized), plus every spec
  // whose htmx reference documents a data-dx-* attribute the test uses.
  const htmxDirs = new Map(); // dirKey -> true
  const attrToSpecs = new Map(); // data-dx-* -> [dirKey]
  try {
    const compBase = join(FRAMEWORKS_DIR, "htmx", "lib", "components");
    for (const e of await readdir(compBase, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      htmxDirs.set(dirKey(e.name), true);
      const surface = (
        await dirSources(join(compBase, e.name), /\.(html|css|js)$/)
      )
        .join("\n")
        .toLowerCase();
      for (const m of surface.matchAll(/data-dx-([a-z][a-z-]*)/g)) {
        const attr = m[0];
        if (!attrToSpecs.has(attr)) attrToSpecs.set(attr, []);
        attrToSpecs.get(attr).push(dirKey(e.name));
      }
    }
  } catch {
    /* no htmx pin */
  }
  try {
    const walk = async (dir) => {
      for (const e of await readdir(dir, { withFileTypes: true })) {
        const p = join(dir, e.name);
        if (e.isDirectory()) await walk(p);
        else if (/\.test\.(js|ts)$/.test(e.name)) {
          const text = (await readFile(p, "utf8")).toLowerCase();
          const keys = new Set([
            dirKey(e.name.replace(/\.test\.(js|ts)$/, "")),
          ]);
          for (const m of text.matchAll(/data-dx-([a-z-]+)/g)) {
            const k = dirKey(m[1]);
            if (htmxDirs.has(k)) keys.add(k);
            for (const s of attrToSpecs.get(m[0]) ?? []) keys.add(s);
          }
          for (const m of text.matchAll(/\.dx-([a-z-]+)/g)) {
            const k = dirKey(m[1].split("--")[0].split("__")[0]);
            if (htmxDirs.has(k)) keys.add(k);
          }
          for (const k of keys) {
            corpora.htmx.set(k, (corpora.htmx.get(k) ?? "") + "\n" + text);
          }
        }
      }
    };
    await walk(htmxBase);
  } catch {
    /* no htmx tests */
  }
  return corpora;
}

let corporaCache = null;
async function corpora() {
  if (!corporaCache) corporaCache = await testCorpora();
  return corporaCache;
}

/** Whole-lib index: Props/Options type name -> body text. */
let propsIndexCache = null;
async function reactPropsIndex() {
  if (propsIndexCache) return propsIndexCache;
  const bodies = new Map();
  const base = join(FRAMEWORKS_DIR, "react", "lib");
  const walk = async (dir) => {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (/\.(tsx|ts)$/.test(e.name) && !/\.test\./.test(e.name)) {
        const { bodies: b } = collectReactTypes([await readFile(p, "utf8")]);
        for (const [k, v] of b) {
          if (!bodies.has(k)) bodies.set(k, v);
        }
      }
    }
  };
  await walk(base);
  propsIndexCache = bodies;
  return bodies;
}

function testRows(markdown) {
  const lines = markdown.split("\n");
  const start = lines.findIndex((l) => l.startsWith("## Tests"));
  if (start < 0) return null;
  let end = lines.findIndex((l, i) => i > start && l.startsWith("## "));
  if (end < 0) end = lines.length;
  const pipes = lines.slice(start + 1, end).filter((l) => l.startsWith("|"));
  if (pipes.length < 3) return [];
  const header = pipes[0].split("|").map((c) => c.trim());
  if (/^suite$/i.test(header[1] ?? "")) return "meta";
  const rows = [];
  for (const line of pipes.slice(2)) {
    const cells = line.split("|").map((c) => c.trim());
    if (cells.length < 3 || /^-+$/.test(cells[1])) continue;
    rows.push(cells.slice(1, -1));
  }
  return rows;
}

async function checkProps(spec, componentName, markdown, violations) {
  const declared = extractSpecProps(markdown);
  if (!declared) {
    console.log(`○ ${spec}: no API table — props unchecked`);
    return violations;
  }
  if (declared.length === 0) {
    console.log(`○ ${spec}: empty API table — props unchecked`);
    return violations;
  }
  const before = violations;
  const reactDir = await implDir("react", componentName);
  const htmxDir = await implDir("htmx", componentName);
  let reactSources = reactDir
    ? await dirSources(reactDir, /\.(tsx|ts|jsx|js)$/)
    : [];
  // follow `export … from './types'` re-exports (Chart pattern)
  if (reactDir) {
    const extra = [];
    for (const src of reactSources) {
      for (const m of src.matchAll(
        /export\s+(?:type\s+)?\{[^}]*\}\s*from\s*['"](\.[^'"]+)['"]/g
      )) {
        for (const cand of [
          m[1],
          `${m[1]}.ts`,
          `${m[1]}.tsx`,
          `${m[1]}/index.ts`,
          `${m[1]}/index.tsx`,
        ]) {
          try {
            extra.push(await readFile(join(reactDir, cand), "utf8"));
            break;
          } catch {
            /* try next candidate */
          }
        }
      }
    }
    reactSources = reactSources.concat(extra);
  }
  const reactBundle = reactDir
    ? extractReactProps(reactSources, await reactPropsIndex())
    : null;
  const htmxSurface = htmxDir
    ? extractHtmxSurface(await dirSources(htmxDir, /\.(html|css|js)$/))
    : null;
  for (const { name: prop, values } of declared) {
    if (reactBundle) {
      if (!reactCoversProp(prop, reactBundle)) {
        if (isKnownPropGap(spec, prop, "react")) {
          console.log(`✓ ${spec} (react): \`${prop}\` — known prop gap`);
        } else {
          console.error(`✗ ${spec} (react): spec prop \`${prop}\` not in interface`);
          violations++;
        }
      }
    }
    if (htmxSurface) {
      const hit = htmxCoversProp(spec, prop, values, htmxSurface);
      if (!hit) {
        if (isKnownPropGap(spec, prop, "htmx")) {
          console.log(`✓ ${spec} (htmx): \`${prop}\` — known prop gap`);
        } else {
          console.error(`✗ ${spec} (htmx): spec prop \`${prop}\` not in markup surface`);
          violations++;
        }
      }
    }
  }
  if (violations === before) console.log(`✓ ${spec} props parity`);
  return violations;
}

async function checkBehavior(spec, componentName, markdown, violations) {
  const rows = testRows(markdown);
  if (!rows) {
    console.log(`○ ${spec}: no Tests table — behavior unchecked`);
    return violations;
  }
  if (rows === "meta") {
    console.log(`○ ${spec}: suite-index Tests table — behavior unchecked`);
    return violations;
  }
  const before = violations;
  const { react, htmx } = await corpora();
  const keys = componentDirKeys(componentName);
  const bodies = {
    react: keys.map((k) => react.get(k) ?? "").join("\n"),
    htmx: keys.map((k) => htmx.get(k) ?? "").join("\n"),
  };
  for (const cells of rows) {
    const scenario = cells[0] ?? "";
    const suites = scenarioSuites(scenario);
    const probes = scenarioProbes(cells);
    const haystacks = suites.map((s) => bodies[s]).filter(Boolean);
    if (probes.length === 0 || haystacks.length === 0) continue;
    const hit = probes.some((w) => haystacks.some((h) => h.includes(w)));
    if (!hit) {
      if (isKnownBehaviorGap(spec, scenario)) {
        console.log(`✓ ${spec}: "${scenario}" — known behavior gap`);
      } else {
        console.error(`✗ ${spec}: Tests row "${scenario}" unreferenced by ${suites.join("/")} tests`);
        violations++;
      }
    }
  }
  if (violations === before) console.log(`✓ ${spec} behavior parity`);
  return violations;
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

    // props (per framework, spec ⊆ impl): every API-table prop must be
    // covered by the react interface and by the htmx markup surface.
    violations = await checkProps(
      name,
      meta.name ?? name,
      markdown,
      violations
    );

    // behavior: every Tests row must share a probe with its suite(s).
    violations = await checkBehavior(name, meta.name ?? name, markdown, violations);
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
