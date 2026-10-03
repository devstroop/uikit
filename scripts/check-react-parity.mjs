#!/usr/bin/env node
/**
 * Spec <-> react-uikit token parity: naming and usage.
 *
 * For every component spec with a token list:
 *
 *   naming  every declared token has a react-side equivalent anywhere in
 *           react's sources (shape rules from scripts/token-names.mjs);
 *           definitions count — this checks react's vocabulary
 *   usage   every declared token is actually consumed via var() by the
 *           spec's react component directory plus react's shared files
 *           (utilities). Token definitions in styles/tokens.css are the
 *           contract, not usage, and never count. Usage is checked for
 *           `status: implemented` specs only — proposed specs are
 *           aspirational, matching validate-parity's scope.
 *
 * Component directories match the spec frontmatter `name`
 * case-insensitively and separator-insensitively with the rename aliases
 * from scripts/token-names.mjs, so pinned (`Autocomplete`, `Typography`) and
 * current (`Text`) react layouts both resolve. An implemented spec with no
 * matching directory is a violation, never skipped. Usage follows the
 * component's own files plus the components it imports — a composition like
 * ToggleButton -> Button consumes Button's stylesheet in the browser, so
 * Button's tokens are ToggleButton's tokens. Known gaps that exist only in
 * the legacy react pin are listed in KNOWN_PIN_GAPS (scripts/token-names.mjs)
 * and apply only when the pin is being checked; they must be removed at the
 * submodule repoint.
 *
 *   node scripts/check-react-parity.mjs                    # frameworks/react pin
 *   node scripts/check-react-parity.mjs --react ../react-uikit/lib
 *
 * Exit 1 on any violation.
 */

import { statSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import {
  componentDirKeys,
  dirKey,
  extractVars,
  extractVarRefs,
  isKnownPinGap,
  tokenUsed,
} from "./token-names.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPECS_DIR = join(ROOT, "specs/components");
const PIN_REACT_ROOT = join(ROOT, "frameworks", "react", "lib");

const args = process.argv.slice(2);
let reactRoot = PIN_REACT_ROOT;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--react") {
    if (!args[i + 1]) {
      console.error("--react requires a path");
      process.exit(2);
    }
    reactRoot = resolve(args[++i]);
  } else {
    console.error(`unknown argument: ${args[i]}`);
    process.exit(2);
  }
}

function readFrontmatter(markdown) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(markdown);
  return match ? parseYaml(match[1]) : null;
}

const emptyBundle = () => ({ dotted: new Set(), flat: new Set() });

function addAll(target, source) {
  for (const t of source.dotted) target.dotted.add(t);
  for (const t of source.flat) target.flat.add(t);
}

const SOURCE_RE = /\.(css|tsx|jsx|html|ts)$/;

/** Relative module specifiers written in a source file. */
function relativeImports(source) {
  const out = new Set();
  for (const m of source.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)) out.add(m[1]);
  for (const m of source.matchAll(/@import\s+['"](\.[^'"]+)['"]/g)) out.add(m[1]);
  return out;
}

/** Resolve a relative specifier against the importing file's directory. */
function resolveRelative(fromDir, spec) {
  const base = resolve(fromDir, spec);
  const tries = [
    base,
    `${base}.tsx`,
    `${base}.ts`,
    `${base}.jsx`,
    `${base}.js`,
    `${base}.css`,
    join(base, "index.tsx"),
    join(base, "index.ts"),
    join(base, "index.js"),
    join(base, "index.css"),
  ];
  for (const candidate of tries) {
    try {
      if (statSync(candidate).isFile()) return candidate;
    } catch {
      /* not this shape, try the next */
    }
  }
  return null;
}

/**
 * global    — every custom-property NAME react ships (definitions count):
 *             the naming check.
 * components/shared — tokens react actually CONSUMES via var() (definitions
 *             excluded, styles/tokens.css excluded — it is the token
 *             contract, not usage): the usage check.
 *
 * `collect` starts at a component directory and follows relative imports, so
 * a composed component's bundle includes the stylesheets it pulls in
 * (ToggleButton imports ../Button/Button, which imports Button.module.css).
 * Everything under one directory stays one bundle; only imports crossing a
 * directory boundary widen it.
 */
async function scanReact() {
  const global = emptyBundle();
  const components = new Map(); // dirKey -> usage bundle
  const shared = emptyBundle(); // usage bundle for non-component files/dirs

  const skipForUsage = (path) => path === join(reactRoot, "styles", "tokens.css");

  const collect = async (dir) => {
    const vars = emptyBundle();
    const refs = emptyBundle();
    const seenDirs = new Set();
    const seenFiles = new Set();
    const queue = [dir];

    const addFile = async (path) => {
      if (seenFiles.has(path)) return;
      seenFiles.add(path);
      const source = await readFile(path, "utf8");
      addAll(vars, extractVars(source));
      if (!skipForUsage(path)) addAll(refs, extractVarRefs(source));
      for (const spec of relativeImports(source)) {
        const resolved = resolveRelative(dirname(path), spec);
        if (resolved) queue.push(resolved);
      }
    };

    while (queue.length) {
      const path = queue.shift();
      let isDir = false;
      try {
        isDir = statSync(path).isDirectory();
      } catch {
        continue;
      }
      if (isDir) {
        if (seenDirs.has(path)) continue;
        seenDirs.add(path);
        for (const entry of await readdir(path, { withFileTypes: true })) {
          if (entry.isDirectory() || SOURCE_RE.test(entry.name)) {
            queue.push(join(path, entry.name));
          }
        }
      } else if (SOURCE_RE.test(basename(path))) {
        await addFile(path);
      }
    }

    return { vars, refs };
  };

  const top = await readdir(reactRoot, { withFileTypes: true });
  for (const entry of top) {
    const path = join(reactRoot, entry.name);
    if (entry.isFile()) {
      if (!SOURCE_RE.test(entry.name)) continue;
      const source = await readFile(path, "utf8");
      addAll(global, extractVars(source));
      addAll(shared, extractVarRefs(source));
    } else if (entry.name === "components") {
      const dirs = await readdir(path, { withFileTypes: true });
      for (const comp of dirs) {
        if (!comp.isDirectory()) continue;
        const { vars, refs } = await collect(join(path, comp.name));
        addAll(global, vars);
        components.set(dirKey(comp.name), refs);
      }
    } else {
      const { vars, refs } = await collect(path);
      addAll(global, vars);
      addAll(shared, refs);
    }
  }

  return { global, components, shared };
}

async function main() {
  let react;
  try {
    react = await scanReact();
  } catch (err) {
    console.error(`cannot scan react sources at ${reactRoot}: ${err.message}`);
    process.exit(2);
  }

  // Known pin gaps only describe the pinned snapshot; against current react
  // sources they would hide real drift instead of excusing pin lag.
  const usingPin = resolve(reactRoot) === PIN_REACT_ROOT;

  const files = (await readdir(SPECS_DIR)).filter((f) => f.endsWith(".md"));
  let namingTotal = 0;
  let namingPass = 0;
  let usageTotal = 0;
  let usagePass = 0;
  let violations = 0;
  let specsGreen = 0;
  let specsCounted = 0;

  for (const file of files.sort()) {
    const markdown = await readFile(join(SPECS_DIR, file), "utf8");
    const meta = readFrontmatter(markdown);
    if (!meta || !Array.isArray(meta.tokens)) continue;
    const tokens = meta.tokens.filter((t) => typeof t === "string" && t.includes("."));
    const spec = file.replace(/\.md$/, "");
    const name = typeof meta.name === "string" && meta.name ? meta.name : spec;
    const implemented = meta.status === "implemented";
    specsCounted++;

    const matchedKey = componentDirKeys(name).find((k) => react.components.has(k));
    const dirBundle = matchedKey ? react.components.get(matchedKey) : null;
    const usageBundle = emptyBundle();
    if (dirBundle) {
      for (const t of dirBundle.dotted) usageBundle.dotted.add(t);
      for (const t of dirBundle.flat) usageBundle.flat.add(t);
    }
    for (const t of react.shared.dotted) usageBundle.dotted.add(t);
    for (const t of react.shared.flat) usageBundle.flat.add(t);

    let specViolations = 0;
    let specTokens = 0;

    if (implemented && !dirBundle && tokens.length > 0) {
      console.error(`✗ ${spec} (react): no component directory for "${name}" in ${reactRoot}`);
      violations++;
      specViolations++;
    }

    for (const token of tokens) {
      specTokens++;

      namingTotal++;
      const naming = tokenUsed(token, react.global);
      if (naming) namingPass++;
      else {
        violations++;
        specViolations++;
        console.error(`✗ ${spec} naming: ${token} has no react equivalent (shape rules tried)`);
      }

      // Usage mirrors validate-parity scope: only implemented specs are in
      // contract — a proposed spec's tokens are aspirational, not drift.
      if (implemented && dirBundle) {
        usageTotal++;
        const usage = tokenUsed(token, usageBundle);
        if (usage) usagePass++;
        else if (usingPin && isKnownPinGap(spec, token)) {
          usagePass++;
          console.log(
            `✓ ${spec} usage: ${token} — known react-pin gap, fixed in current react (remove at repoint)`,
          );
        } else {
          violations++;
          specViolations++;
          console.error(`✗ ${spec} usage: react ${name} never uses ${token}`);
        }
      }
    }

    if (specViolations === 0) {
      specsGreen++;
      if (specTokens > 0) console.log(`✓ ${spec} parity (${specTokens} tokens, react ${name})`);
    }
  }

  console.log(
    `\nnaming ${namingPass}/${namingTotal} · usage ${usagePass}/${usageTotal} · ` +
      `${specsGreen}/${specsCounted} specs green against ${reactRoot}`,
  );
  if (violations > 0) {
    console.error(`${violations} react parity violation(s) — reconcile the spec, the token rules, or react.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
