#!/usr/bin/env node
/**
 * Generate the shared utilities CSS for both frameworks.
 *
 *   node scripts/generate-utilities.mjs
 *
 * Writes:
 *   frameworks/htmx/lib/components/utilities/utilities.css
 *   frameworks/react/lib/utilities.css
 *
 * Class and var prefixes follow each framework's registry
 * (frameworks/<name>/uikit.yml -> tokens.prefix, default "dt" for legacy
 * pins) — see scripts/generate-css.mjs.
 *
 * Radzen parity (issues #75 + #79):
 *   - display / justify-content / align-items / overflow / w/vw/min-w/max-w /
 *     h/vh/min-h/max-h families with breakpoint suffixes
 *   - spacing: margin + padding families with sizes 0..12 (4px step, "05" = 2px)
 *     plus auto margins; breakpoint suffixes on every family
 * Breakpoint map (Radzen): xs 576, sm 768, md 1024, lg 1280, xl 1920, xx 2560.
 */

import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = [
  ["htmx", "lib/components/utilities/utilities.css"],
  ["react", "lib/utilities.css"],
];

async function targetPrefix(framework) {
  const registryPath = join(ROOT, "frameworks", framework, "uikit.yml");
  try {
    const registry = parseYaml(await readFile(registryPath, "utf8"));
    const prefix = registry?.tokens?.prefix ?? "dt";
    if (prefix !== "dx" && prefix !== "dt") {
      throw new Error(
        `frameworks/${framework}/uikit.yml: tokens.prefix must be "dx" or "dt"`,
      );
    }
    return prefix;
  } catch (err) {
    if (err.code === "ENOENT") return "dt";
    throw err;
  }
}

const BREAKPOINTS = [
  ["xs", 576],
  ["sm", 768],
  ["md", 1024],
  ["lg", 1280],
  ["xl", 1920],
  ["xx", 2560],
];

const SIZES = ["0", "05", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// family -> [property, values] with plain values (no tokens)
const VALUE_FAMILIES = [
  ["display", "display", ["none", "block", "inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid"]],
  ["justify-content", "justify-content", ["normal", "stretch", "center", "start", "end", "flex-start", "flex-end", "left", "right", "space-between", "space-around", "space-evenly"]],
  ["align-items", "align-items", ["normal", "stretch", "center", "start", "end", "flex-start", "flex-end"]],
  ["overflow", "overflow", ["auto", "scroll", "visible", "hidden"]],
  ["w", "width", ["25%", "50%", "75%", "100%"]],
  ["vw", "width", ["25vw", "50vw", "75vw", "100vw"]],
  ["w", "width", ["auto", "fit-content", "min-content", "max-content", "stretch"]],
  ["min-w", "min-width", ["25%", "50%", "75%", "100%"]],
  ["max-w", "max-width", ["25%", "50%", "75%", "100%"]],
  ["h", "height", ["25%", "50%", "75%", "100%"]],
  ["vh", "height", ["25vh", "50vh", "75vh", "100vh"]],
  ["h", "height", ["auto"]],
  ["min-h", "min-height", ["25%", "50%", "75%", "100%"]],
  ["max-h", "max-height", ["25%", "50%", "75%", "100%"]],
];

const MARGIN_FAMILIES = [
  ["m", "margin"],
  ["mx", "margin-inline"],
  ["my", "margin-block"],
  ["mt", "margin-top"],
  ["mr", "margin-right"],
  ["mb", "margin-bottom"],
  ["ml", "margin-left"],
  ["ms", "margin-inline-start"],
  ["me", "margin-inline-end"],
];

const PADDING_FAMILIES = [
  ["p", "padding"],
  ["px", "padding-inline"],
  ["py", "padding-block"],
  ["pt", "padding-top"],
  ["pr", "padding-right"],
  ["pb", "padding-bottom"],
  ["pl", "padding-left"],
  ["ps", "padding-inline-start"],
  ["pe", "padding-inline-end"],
];

function rule(className, declaration, prefix) {
  return `.${prefix}-${className} { ${declaration} !important; }`;
}

function valueFamilies(suffix = "", prefix = "dt") {
  const lines = [];
  for (const [family, property, values] of VALUE_FAMILIES) {
    for (const value of values) {
      const suffixPart = suffix ? `${suffix}-` : "";
      lines.push(rule(`${family}-${suffixPart}${value === "25%" ? "25" : value.replace("%", "").replace("vw", "").replace("vh", "")}`, `${property}: ${value}`, prefix));
    }
  }
  return lines;
}

function spacingFamilies(suffix = "", prefix = "dt") {
  const lines = [];
  const suffixPart = suffix ? `${suffix}-` : "";
  for (const [family, property] of MARGIN_FAMILIES) {
    for (const size of SIZES) {
      lines.push(rule(`${family}-${suffixPart}${size}`, `${property}: var(--${prefix}-space-${size})`, prefix));
    }
    lines.push(rule(`${family}-${suffixPart}auto`, `${property}: auto`, prefix));
  }
  for (const [family, property] of PADDING_FAMILIES) {
    for (const size of SIZES) {
      lines.push(rule(`${family}-${suffixPart}${size}`, `${property}: var(--${prefix}-space-${size})`, prefix));
    }
  }
  return lines;
}

function build(prefix = "dt") {
  const header = `/* layout utilities — Radzen theme utilities parity (issues #75, #79)
 * Flex/grid/overflow/sizing/spacing helpers as class names with breakpoint
 * suffixes. Spacing scale mirrors Radzen: 0..12 in 4px steps ("05" = 2px)
 * plus auto margins.
 * Breakpoint map (Radzen): xs 576, sm 768, md 1024, lg 1280, xl 1920, xx 2560.
 */

`;

  const lines = [
    ...valueFamilies("", prefix),
    ...spacingFamilies("", prefix),
  ];
  for (const [bp, minWidth] of BREAKPOINTS) {
    lines.push("", `@media (min-width: ${minWidth}px) {`);
    for (const line of [...valueFamilies(bp, prefix), ...spacingFamilies(bp, prefix)]) {
      lines.push(`  ${line}`);
    }
    lines.push("}");
  }
  return header + lines.join("\n") + "\n";
}

for (const [framework, relPath] of TARGETS) {
  const prefix = await targetPrefix(framework);
  const css = build(prefix);
  await writeFile(join(ROOT, "frameworks", framework, relPath), css);
  console.log(`wrote ${css.split("\n").length} lines to ${framework} utilities css (--${prefix}-)`);
}