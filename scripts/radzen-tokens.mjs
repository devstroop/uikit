/**
 * Radzen Blazor (--rz-*) -> uikit schema (color.primary, radius.sm, ...)
 * mapping, used by scripts/check-radzen-parity.mjs.
 *
 * This module is intentionally standalone: it must keep working whether
 * specs are validated against legacy --dt- pins (master) or the --dx-
 * generation (feat/dt-dx-align-v028), so it does not share code with the
 * parity scripts.
 *
 * The two vocabularies are NOT a mechanical prefix swap. Confident,
 * value-verified equivalences are mapped explicitly:
 *
 *   semantic colors   --rz-primary        -> color.primary
 *   foregrounds       --rz-on-primary     -> color.primary-fg
 *   text ramp         --rz-text-color     -> color.text
 *                     --rz-text-secondary-color / -tertiary-color
 *                                         -> color.text-muted  (approximate)
 *   base surface      --rz-base-background-color, --rz-base-100
 *                                         -> color.bg
 *   semantic borders  --rz-border-primary -> color.border-primary
 *   outlines          --rz-outline-primary-> color.outline-primary
 *   radius            --rz-border-radius  -> radius.sm (both 4px)
 *
 * Everything else is unmapped on purpose, because values cannot be
 * translated name-for-name: component-scoped variables (--rz-button-*,
 * --rz-alert-*, --rz-grid-*), the base-50..900 gray ramp, series
 * palettes, shadows (rz 0..10 scale vs dx sm/md/lg), durations/easings,
 * sizing tokens. Unmapped refs are reported as one bucket per component.
 */

const SEMANTIC = ["primary", "secondary", "info", "success", "danger"];

const RZ_TO_DOTTED = {
  "base-background-color": "color.bg",
  "base-100": "color.bg",
  "text-color": "color.text",
  "text-title-color": "color.text",
  "text-secondary-color": "color.text-muted",
  "text-tertiary-color": "color.text-muted",
  "border-radius": "radius.sm",
};
for (const c of SEMANTIC) {
  RZ_TO_DOTTED[c] = `color.${c}`;
  RZ_TO_DOTTED[`on-${c}`] = `color.${c}-fg`;
  RZ_TO_DOTTED[`border-${c}`] = `color.border-${c}`;
  RZ_TO_DOTTED[`outline-${c}`] = `color.outline-${c}`;
}
// Radzen ships `warning` + `on-warning` but the schema has no
// `color.warning-fg`; --rz-warning maps, --rz-on-warning stays unmapped.
RZ_TO_DOTTED["warning"] = "color.warning";
RZ_TO_DOTTED["border-warning"] = "color.border-warning";
RZ_TO_DOTTED["outline-warning"] = "color.outline-warning";

/** Map one full custom property name to a schema dotted token, or null. */
export function mapRzProperty(propName) {
  const name = propName.replace(/^--rz-/, "");
  return RZ_TO_DOTTED[name] ?? null;
}

/** Extract var(--rz-*) references from SCSS/CSS source. Interpolation
 * leftovers (e.g. `var(--rz-alert-#{$x})` -> `--rz-alert-`) are dropped. */
export function extractRzRefs(source) {
  const refs = new Set();
  for (const m of source.matchAll(/var\(\s*(--rz-[a-z0-9-]+)/gi)) {
    const name = m[1];
    if (name === "--rz-" || name.endsWith("-")) continue;
    refs.add(name);
  }
  return refs;
}

/** Split extracted refs into mapped (prop -> dotted) and unmapped lists. */
export function mapRzRefs(refs) {
  const mapped = new Map();
  const unmapped = [];
  for (const ref of [...refs].sort()) {
    const dotted = mapRzProperty(ref);
    if (dotted) mapped.set(ref, dotted);
    else unmapped.push(ref);
  }
  return { mapped, unmapped };
}

/** Every dotted token this module can produce (self-test aid). */
export function mappedTargets() {
  return new Set(Object.values(RZ_TO_DOTTED));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const cases = [
    ["--rz-primary", "color.primary"],
    ["--rz-on-primary", "color.primary-fg"],
    ["--rz-warning", "color.warning"],
    ["--rz-on-warning", null],
    ["--rz-base-background-color", "color.bg"],
    ["--rz-base-100", "color.bg"],
    ["--rz-text-secondary-color", "color.text-muted"],
    ["--rz-border-radius", "radius.sm"],
    ["--rz-border-danger", "color.border-danger"],
    ["--rz-outline-info", "color.outline-info"],
    ["--rz-button-padding", null],
    ["--rz-shadow-3", null],
    ["--rz-gap", null],
  ];
  let failed = 0;
  for (const [prop, expected] of cases) {
    const actual = mapRzProperty(prop);
    const ok = actual === expected;
    console.log(`${ok ? "✓" : "✗"} ${prop} -> ${actual}${ok ? "" : ` (expected ${expected})`}`);
    if (!ok) failed++;
  }
  const sample = 'a { color: var(--rz-primary); background:var(--rz-base-100); padding: var(--rz-alert-padding); x: var(--rz-gap); z: var(--rz-alert-#{$i}) }';
  const refs = [...extractRzRefs(sample)].sort();
  const expected = ["--rz-alert-padding", "--rz-base-100", "--rz-gap", "--rz-primary"];
  const okRefs = JSON.stringify(refs) === JSON.stringify(expected);
  console.log(`${okRefs ? "✓" : "✗"} extractRzRefs -> ${JSON.stringify(refs)}`);
  if (!okRefs) failed++;
  if (failed) process.exit(1);
  console.log("\nradzen token map self-test passed.");
}
