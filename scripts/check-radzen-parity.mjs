#!/usr/bin/env node
/**
 * Radzen Blazor reference parity (report-only).
 *
 * For every spec with status "implemented", resolve its Radzen Blazor
 * counterpart (Radzen<Name>.razor / .razor.cs, its component SCSS in
 * themes/components/blazor/) and report:
 *
 *   tokens   var(--rz-*) refs in the component SCSS, translated via
 *            scripts/radzen-tokens.mjs and diffed against the spec
 *            frontmatter token list — both directions are informational.
 *   api      [Parameter] properties in the .razor.cs file diffed against
 *            the spec's `## API` table props — radzen-only candidates
 *            (features the spec has not captured) and spec-only props
 *            (intentional adaptations).
 *
 * The mapping is deliberately asymmetric by design: radzen is the
 * reference vocabulary, the spec is ours. This script reports
 * divergences to guide porting into react/htmx; it never fails the
 * build (exit 0). Component-scoped --rz-* variables without schema
 * equivalents are counted but not enumerated per name.
 *
 *   node scripts/check-radzen-parity.mjs
 */

import { readFile, readdir, access } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { extractRzRefs, mapRzRefs } from "./radzen-tokens.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPECS_DIR = join(ROOT, "specs/components");
const RZ_DIR = join(ROOT, "frameworks/blazor/Radzen.Blazor");
const RZ_THEMES = join(RZ_DIR, "themes/components/blazor");

/** Spec-name -> radzen candidates. Radzen ships RadzenText, not
 * RadzenTypography; mirrors componentDirCandidates in the dx engine. */
const RZ_NAME_ALIASES = { typography: ["text", "typography"] };

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function readFrontmatter(markdown) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(markdown);
  return match ? parseYaml(match[1]) : null;
}

function candidatePoms(specName) {
  const kebab = specName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
  return RZ_NAME_ALIASES[kebab] ?? [kebab];
}

/** Parse ## API table rows; first-cell backticked prop names. */
function specApiProps(markdown) {
  const section = markdown.match(/## API\n([\s\S]*?)(?=\n## |\n*$)/);
  if (!section) return new Set();
  const props = new Set();
  for (const m of section[1].matchAll(/^\|\s*`([^`]+)`/gm)) props.add(m[1]);
  return props;
}

/** Extract [Parameter] property names from a .cs/.razor.cs source. */
function radzenParameters(source) {
  const props = new Set();
  for (const m of source.matchAll(
    /\[\s*Parameter[\s\S]*?\]\s*\r?\n\s*public\s+[\w<>\[\]\.,\?\s]+?\s+(\w+)\s*\{\s*get/g,
  )) {
    props.add(m[1]);
  }
  return props;
}

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function razorAndParamsFor(candidateNorms, razorFiles, csFiles) {
  for (const f of razorFiles) {
    const stem = f.replace(/^Radzen/, "").replace(/\.razor$/, "");
    if (!candidateNorms.has(norm(stem))) continue;
    let source = null;
    for (const pf of [f.replace(/\.razor$/, ".razor.cs"), `${stem}.cs`.replace(/^/, "Radzen")]) {
      try { source = await readFile(join(RZ_DIR, pf), "utf8"); break; } catch {}
    }
    return { razor: f, paramsSource: source };
  }
  for (const f of csFiles) {
    if (f.endsWith(".razor.cs")) continue; // handled via its .razor file
    const stem = f.replace(/^Radzen/, "").replace(/\.cs$/, "");
    if (!candidateNorms.has(norm(stem))) continue;
    try {
      const paramsSource = await readFile(join(RZ_DIR, f), "utf8");
      return { razor: null, paramsSource };
    } catch {}
  }
  return null;
}

async function scssFor(candidateNorms, scssFiles) {
  for (const f of scssFiles) {
    const stem = f.replace(/^_/, "").replace(/\.scss$/, "");
    if (candidateNorms.has(norm(stem))) return f;
  }
  return null;
}

async function main() {
  const razorFiles = (await readdir(RZ_DIR)).filter((f) => f.endsWith(".razor"));
  const scssFiles = (await readdir(RZ_THEMES)).filter((f) => f.endsWith(".scss"));
  const csFiles = (await readdir(RZ_DIR)).filter((f) => f.endsWith(".cs") && !f.endsWith(".razor.cs"));
  const specs = (await readdir(SPECS_DIR)).filter((f) => f.endsWith(".md"));

  let native = 0, covered = 0, tokensFullMatch = 0, apiFullMatch = 0;
  const lines = [];

  for (const file of specs.sort()) {
    const markdown = await readFile(join(SPECS_DIR, file), "utf8");
    const meta = readFrontmatter(markdown);
    if (!meta || meta.status !== "implemented" || !Array.isArray(meta.tokens)) continue;
    const specName = meta.name ?? file.replace(/\.md$/, "");
    const candidateNorms = new Set(candidatePoms(specName).map(norm));

    const razor = await razorAndParamsFor(candidateNorms, razorFiles, csFiles);
    const scss = await scssFor(candidateNorms, scssFiles);
    if (!razor && !scss) {
      lines.push(`  · ${file} — no Radzen counterpart (uikit-native)`);
      native++;
      continue;
    }
    covered++;

    const problems = [];

    // --- tokens ---
    if (scss) {
      const refs = extractRzRefs(await readFile(join(RZ_THEMES, scss), "utf8"));
      const { mapped, unmapped } = mapRzRefs(refs);
      const mappedDotted = new Set(mapped.values());
      const declared = new Set(meta.tokens.filter((t) => typeof t === "string" && t.includes(".")));
      const radzenOnly = [...mappedDotted].filter((t) => !declared.has(t));
      const specUnreferenced = [...declared].filter((t) => !mappedDotted.has(t));
      if (radzenOnly.length === 0 && specUnreferenced.length === 0) tokensFullMatch++;
      if (radzenOnly.length) problems.push(`    radzen uses but spec lacks: ${radzenOnly.join(", ")}`);
      if (specUnreferenced.length) {
        const byTier = {};
        for (const t of specUnreferenced) {
          const tier = t.split(".")[0];
          byTier[tier] = (byTier[tier] ?? 0) + 1;
        }
        const summary = Object.entries(byTier).map(([k, v]) => `${k}: ${v}`).join(", ");
        problems.push(`    spec tokens with no rz equivalent: ${specUnreferenced.length} (${summary})`);
      }
      if (unmapped.length) problems.push(`    ${unmapped.length} component-scoped/unmappable --rz refs (e.g. ${unmapped[0]})`);
    }

    // --- api ---
    if (razor && razor.paramsSource) {
      const params = radzenParameters(razor.paramsSource);
      const apiProps = specApiProps(markdown);
      const normProps = new Map();
      for (const p of params) normProps.set(norm(p), p);
      const radzenOnly = [...params].filter((p) => !apiProps.has(p) && ![...apiProps].some((s) => norm(s) === norm(p)));
      const specOnly = [...apiProps].filter((p) => !normProps.has(norm(p)));
      if (radzenOnly.length === 0 && specOnly.length === 0) apiFullMatch++;
      if (radzenOnly.length) problems.push(`    Radzen-only props (porting candidates): ${radzenOnly.join(", ")}`);
      if (specOnly.length) problems.push(`    spec-only props (intended or missing): ${specOnly.join(", ")}`);
    } else {
      problems.push("    no .razor.cs parameter source found");
    }

    if (problems.length === 0) {
      lines.push(`  ✓ ${file} — tokens and API match`);
    } else {
      lines.push(`  ! ${file} — divergence report:`);
      lines.push(...problems);
    }
  }

  console.log(`radzen-parity report (frameworks/blazor @ ${await gitSha()}):`);
  console.log(`  specs checked: ${covered + native}, covered: ${covered}, uikit-native: ${native}`);
  console.log(`  full token match: ${tokensFullMatch}, full API match: ${apiFullMatch}\n`);
  console.log(lines.join("\n"));
  console.log("\n(report-only — exit 0)");
}

async function gitSha() {
  try {
    const { execFile } = await import("node:child_process");
    return await new Promise((done) => {
      execFile("git", ["-C", join(ROOT, "frameworks", "blazor"), "rev-parse", "--short", "HEAD"], (e, out) => done(e ? "unknown" : out.trim()));
    });
  } catch { return "unknown"; }
}

main().catch((err) => {
  // A crash is not a clean report — exit 1 so drift between the script
  // and the radzen pin surfaces as CI red instead of a silent pass.
  console.error(err);
  process.exit(1);
});
