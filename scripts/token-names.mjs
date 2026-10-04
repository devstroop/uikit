/**
 * Shared token-naming rules for parity tooling.
 *
 * uikit and react-uikit express the same contract under two naming
 * conventions. This module is the single source of truth for translating
 * between them; every parity validator must use it instead of ad-hoc
 * string surgery.
 *
 * Prefixes:
 *   uikit legacy pin  --dt-*   dotted tier tokens   --dt-color-primary = color.primary
 *   uikit current     --dx-*   dotted tier tokens   --dx-color-primary = color.primary
 *   react (any pin)   --dx-*   flat names           --dx-primary-color = color.primary
 *
 * Extraction (extractVars / extractVarRefs) classifies --dt- as dotted
 * and --dx- as flat. This matches today's pins: legacy htmx --dt- (dotted)
 * and react --dx- (flat). When the htmx pin is repointed its --dx- tier
 * refs must additionally be classified by source technology — handled
 * with the pin bump.
 *
 * Shape rules (uikit token -> accepted react flat names):
 *   color.<x>          -> <x>-color          color.primary   -> primary-color
 *   color.<x>-fg       -> on-<x>-color        color.primary-fg -> on-primary-color
 *                     also -> <x>-fg-color   (react ships both aliases)
 *   color.bg           -> background-color    react aliases --dx-bg-color to
 *                                             --dx-background-color
 *   color.<x>          -> <x>                 color.border-strong -> border-strong
 *                        (react keeps unprefixed aliases for some colors)
 *   <tier>.<x>         -> <tier>-<x>          space.4 -> space-4, font.size-sm -> font-size-sm
 *   radius.*           -> radius accept-list  react's radius scale is numeric/semantic
 *                        (radius, radius-0..10, radius-button, ...); any accepted
 *                        react radius name covers a uikit radius token — value
 *                        mapping between the scales is out of scope here.
 *
 * Self-test (no arguments):   node scripts/token-names.mjs
 * Exit 0 when every documented example holds, 1 otherwise.
 */

import { pathToFileURL } from "node:url";

export const UIKIT_PREFIX = "--dt-";
export const REACT_PREFIX = "--dx-";

/** Token tiers, mirroring specs/tokens.schema.json. */
export const TIERS = [
  "color",
  "radius",
  "space",
  "font",
  "letterspacing",
  "shadow",
  "transition",
  "motion",
  "ease",
  "z",
  "control",
];

/**
 * React-side radius names accepted as equivalents for any uikit radius
 * token (see the radius shape rule above).
 */
export const RADIUS_ACCEPT = [
  "radius",
  "radius-full",
  "radius-button",
  "radius-checkbox",
  "radius-input",
  "radius-surface",
  "radius-0",
  "radius-1",
  "radius-2",
  "radius-3",
  "radius-4",
  "radius-5",
  "radius-6",
  "radius-7",
  "radius-8",
  "radius-9",
  "radius-10",
];

/** Parse a dotted spec token ("color.primary") into { tier, rest }. */
export function parseToken(dotted) {
  const i = dotted.indexOf(".");
  if (i <= 0 || i === dotted.length - 1) return null;
  const tier = dotted.slice(0, i);
  const rest = dotted.slice(i + 1);
  if (!TIERS.includes(tier)) return null;
  return { tier, rest };
}

/**
 * Component directory renames that landed in current implementations while
 * the spec still carries its old frontmatter name (the spec rename follows
 * when the submodules are repointed): current sources ship `text/`, the
 * pinned snapshots still ship `typography/`. Resolution therefore tries the
 * alias and then the original name — see componentDirCandidates().
 */
export const COMPONENT_DIR_ALIASES = { typography: "text" };

/** PascalCase/camelCase/kebab name -> kebab-case. */
export function kebabCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * Candidate directory names for a spec frontmatter name, best-first:
 * rename alias first, then the original kebab name. Matching must accept
 * any candidate so the same spec resolves against a pin (which still uses
 * the old name) and against current sources (which use the new one).
 * @returns {string[]} lowercase directory names
 */
export function componentDirCandidates(componentName) {
  const kebab = kebabCase(componentName);
  const alias = COMPONENT_DIR_ALIASES[kebab];
  return alias && alias !== kebab ? [alias, kebab] : [kebab];
}

/**
 * Case- and separator-insensitive key for comparing a directory name with a
 * candidate: react ships PascalCase (`VirtualGrid`), htmx ships kebab-case
 * (`virtual-grid`), and a spec frontmatter name may use either.
 */
export function dirKey(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** componentDirCandidates() mapped through dirKey(). */
export function componentDirKeys(componentName) {
  return componentDirCandidates(componentName).map(dirKey);
}

/** htmx component directory for a spec name (kebab-case + rename aliases). */
export function htmxComponentDir(componentName) {
  return componentDirCandidates(componentName)[0];
}

/**
 * Token declarations that no pinned framework implementation consumes yet
 * (the pins predate the rename/contract that current sources already
 * satisfy). Suppressed in the `extra` direction only — a pin still using a
 * token the spec omits remains a `missing` violation. Every entry must be
 * removed when the submodules are repointed (Phase 5); entries print so
 * they cannot rot silently.
 */
export const KNOWN_PIN_GAPS = [
  ["data-list", "color.primary"],
  ["data-list", "color.text"],
  ["data-list", "color.text-muted"],
  ["data-filter", "color.text-muted"],
  ["data-grid", "color.text"],
  ["data-grid", "color.text-muted"],
  ["form", "space.3"],
];

/** Does this (spec, token) pair sit on the known pin-gap list? */
export function isKnownPinGap(spec, token) {
  return KNOWN_PIN_GAPS.some(([s, t]) => s === spec && t === token);
}

/** uikit custom property for a dotted token ("color.primary" -> "--dt-color-primary"). */
export function toUikitVar(dotted) {
  const t = parseToken(dotted);
  if (!t) return null;
  return `${UIKIT_PREFIX}${t.tier}-${t.rest}`;
}

/** Does this react flat name sit on the radius accept-list? */
export function isRadiusAccept(name) {
  return RADIUS_ACCEPT.includes(name);
}

/**
 * Accepted react flat names for a uikit token, best-first, each tagged
 * with the shape rule that produced it.
 * @returns {{name: string, rule: string}[]}
 */
export function reactCandidates(dotted) {
  const t = parseToken(dotted);
  if (!t) return [];
  const { tier, rest } = t;
  const out = [];
  if (tier === "color") {
    out.push({ name: `${rest}-color`, rule: "color-suffix" });
    if (rest === "bg") {
      // react defines `--dx-bg-color` as an alias of `--dx-background-color`
      // and consumes the long spelling, so it must count as a match.
      out.push({ name: "background-color", rule: "alias-name" });
    }
    if (rest.endsWith("-fg")) {
      out.push({ name: `on-${rest.slice(0, -3)}-color`, rule: "fg-on-color" });
    }
    out.push({ name: rest, rule: "bare-alias" });
    return out;
  }
  out.push({ name: `${tier}-${rest}`, rule: "identity" });
  if (tier === "radius") {
    for (const name of RADIUS_ACCEPT) out.push({ name, rule: "radius-accept" });
  }
  return out;
}

/**
 * Find the react-side match for a uikit token inside a set of react flat
 * names. Returns { name, rule } of the first accepted alias present, or
 * null when react provides no equivalent.
 */
export function matchReactToken(dotted, flatNames) {
  for (const { name, rule } of reactCandidates(dotted)) {
    if (flatNames.has(name)) return { name, rule };
  }
  return null;
}

/**
 * Best-effort dotted token a react flat name refers to. Callers must
 * validate the result against the schema: names that do not map to a
 * schema token are react extensions and must be ignored, not flagged.
 */
export function dottedFromReactName(flat) {
  if (flat.endsWith("-color")) {
    const inner = flat.slice(0, -"-color".length);
    if (inner.startsWith("on-")) return `color.${inner.slice(3)}-fg`;
    // react spells the uikit `color.bg` token `background-color`.
    return `color.${inner === "background" ? "bg" : inner}`;
  }
  const i = flat.indexOf("-");
  if (i > 0 && TIERS.includes(flat.slice(0, i))) {
    return `${flat.slice(0, i)}.${flat.slice(i + 1)}`;
  }
  return `color.${flat}`; // unprefixed color alias guess
}

/** Blind dotted conversion of a --dt- suffix (first segment = tier), as validate-parity historically did. */
export function varToToken(suffix) {
  const i = suffix.indexOf("-");
  if (i <= 0) return suffix;
  return `${suffix.slice(0, i)}.${suffix.slice(i + 1)}`;
}

/**
 * Collect token references from a source file: every occurrence of a
 * --dt-/--dx- custom property (uses, definitions, declarations).
 * @returns {{dotted: Set<string>, flat: Set<string>}}
 *   dotted — uikit --dt-* names converted to spec tokens
 *   flat   — react --dx-* flat names (match via reactCandidates)
 */
export function extractVars(source) {
  const dotted = new Set();
  const flat = new Set();
  for (const m of source.matchAll(/--dt-([a-z0-9-]+)/g)) dotted.add(varToToken(m[1]));
  for (const m of source.matchAll(/--dx-([a-z0-9-]+)/g)) flat.add(m[1]);
  return { dotted, flat };
}

/**
 * Collect only var(--dt-*)/var(--dx-*) references — what a component
 * actually consumes, ignoring custom-property definitions and raw
 * occurrences. This is the historic validate-parity semantics.
 */
export function extractVarRefs(source) {
  const dotted = new Set();
  const flat = new Set();
  for (const m of source.matchAll(/var\(\s*--dt-([a-z0-9-]+)/g)) dotted.add(varToToken(m[1]));
  for (const m of source.matchAll(/var\(\s*--dx-([a-z0-9-]+)/g)) flat.add(m[1]);
  return { dotted, flat };
}

/**
 * Was this uikit token found in a used-token bundle from extractVars()?
 * Matches the dotted --dt-* form directly, then tries the react aliases.
 * @returns {{name: string, rule: string} | null}
 */
export function tokenUsed(dotted, used) {
  if (used.dotted.has(dotted)) return { name: dotted, rule: "dotted" };
  const react = matchReactToken(dotted, used.flat);
  if (react) return react;
  // Uikit-convention refs parse as flat but mean this token: `--dx-color-primary`
  // has suffix "color-primary" (tier-first), which is how dx-era htmx sources
  // reference `color.primary`. Only tier-first suffixes qualify, so react's own
  // flat names (e.g. "primary-color", "radius-input") keep their react rules.
  const parsed = parseToken(dotted);
  if (parsed && used.flat.has(`${parsed.tier}-${parsed.rest}`)) {
    return { name: `${parsed.tier}-${parsed.rest}`, rule: "tier-flat" };
  }
  return null;
}

/* ------------------------------- self-test ------------------------------- */

function selfTest() {
  const failures = [];
  const eq = (label, actual, expected) => {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a !== e) failures.push(`${label}\n    expected ${e}\n    actual   ${a}`);
  };

  eq("parseToken(color.primary)", parseToken("color.primary"), { tier: "color", rest: "primary" });
  eq("parseToken(rejects unknown tier)", parseToken("sidebar.width"), null);
  eq("parseToken(rejects dotless)", parseToken("primary"), null);
  eq("kebabCase(DataGrid)", kebabCase("DataGrid"), "data-grid");
  eq("htmxComponentDir(DataGrid)", htmxComponentDir("DataGrid"), "data-grid");
  eq("htmxComponentDir(Text) stays text", htmxComponentDir("Text"), "text");
  eq(
    "componentDirCandidates(Typography) prefers the rename alias",
    componentDirCandidates("Typography"),
    ["text", "typography"],
  );
  eq(
    "componentDirCandidates(DataGrid) has one candidate",
    componentDirCandidates("DataGrid"),
    ["data-grid"],
  );
  eq(
    "componentDirCandidates resolves a pin and current sources alike",
    componentDirCandidates("Typography").includes("typography") &&
      componentDirCandidates("Typography").includes("text"),
    true,
  );
  eq("dirKey(VirtualGrid) matches kebab", dirKey("VirtualGrid"), dirKey("virtual-grid"));
  eq("dirKey(DataFilter) matches kebab", dirKey("DataFilter"), dirKey("data-filter"));
  eq(
    "componentDirKeys(Typography) covers pin and current",
    componentDirKeys("Typography"),
    ["text", "typography"],
  );
  eq(
    "componentDirKeys(VirtualGrid) matches the react pin dir",
    componentDirKeys("VirtualGrid").includes(dirKey("VirtualGrid")),
    true,
  );
  eq(
    "isKnownPinGap(form, space.3)",
    isKnownPinGap("form", "space.3"),
    true,
  );
  eq(
    "isKnownPinGap rejects unknown pairs",
    isKnownPinGap("form", "color.bg"),
    false,
  );
  eq(
    "tokenUsed matches tier-first flat suffix",
    tokenUsed("color.primary", { dotted: new Set(), flat: new Set(["color-primary"]) }),
    { name: "color-primary", rule: "tier-flat" },
  );
  eq(
    "tokenUsed ignores non-schema dotted",
    tokenUsed("color.primary", { dotted: new Set(), flat: new Set() }),
    null,
  );
  eq("toUikitVar(color.primary)", toUikitVar("color.primary"), "--dt-color-primary");
  eq("toUikitVar(radius.md)", toUikitVar("radius.md"), "--dt-radius-md");

  eq(
    "reactCandidates(color.primary) names",
    reactCandidates("color.primary").map((c) => c.name),
    ["primary-color", "primary"],
  );
  eq(
    "reactCandidates(color.primary-fg) names",
    reactCandidates("color.primary-fg").map((c) => c.name),
    ["primary-fg-color", "on-primary-color", "primary-fg"],
  );
  eq(
    "reactCandidates(color.primary-fg) on-rule tag",
    reactCandidates("color.primary-fg").find((c) => c.name === "on-primary-color").rule,
    "fg-on-color",
  );
  eq(
    "reactCandidates(space.4) names",
    reactCandidates("space.4").map((c) => c.name),
    ["space-4"],
  );
  eq(
    "reactCandidates(color.bg) names",
    reactCandidates("color.bg").map((c) => c.name),
    ["bg-color", "background-color", "bg"],
  );
  eq(
    "reactCandidates(color.bg) alias rule tag",
    reactCandidates("color.bg").find((c) => c.name === "background-color").rule,
    "alias-name",
  );
  eq(
    "reactCandidates(radius.md) starts identity then accept-list",
    reactCandidates("radius.md").map((c) => c.rule),
    ["identity", ...RADIUS_ACCEPT.map(() => "radius-accept")],
  );
  eq("reactCandidates rejects non-token", reactCandidates("nope"), []);

  const flat = new Set(["primary-color", "on-primary-fg-color", "radius-input", "space-4"]);
  eq("matchReactToken via color-suffix", matchReactToken("color.primary", flat), {
    name: "primary-color",
    rule: "color-suffix",
  });
  eq("matchReactToken via bare misses -> null", matchReactToken("color.border-strong", flat), null);
  eq("matchReactToken radius accept", matchReactToken("radius.md", flat)?.rule, "radius-accept");
  eq("matchReactToken identity", matchReactToken("space.4", flat)?.name, "space-4");

  eq("dottedFromReactName(primary-color)", dottedFromReactName("primary-color"), "color.primary");
  eq("dottedFromReactName(primary-fg-color)", dottedFromReactName("primary-fg-color"), "color.primary-fg");
  eq("dottedFromReactName(on-primary-color)", dottedFromReactName("on-primary-color"), "color.primary-fg");
  eq("dottedFromReactName(space-4)", dottedFromReactName("space-4"), "space.4");
  eq("dottedFromReactName(border-strong)", dottedFromReactName("border-strong"), "color.border-strong");
  eq("dottedFromReactName(background-color)", dottedFromReactName("background-color"), "color.bg");
  eq(
    "tokenUsed matches react's background-color spelling of color.bg",
    tokenUsed("color.bg", { dotted: new Set(), flat: new Set(["background-color"]) }),
    { name: "background-color", rule: "alias-name" },
  );

  const src = 'a{color:var(--dt-color-primary);gap:var(--dx-space-4);border:var(--dx-primary-color)}';
  const ex = extractVars(src);
  if (ex.dotted.size !== 1 || !ex.dotted.has("color.primary")) {
    failures.push(`extractVars dotted: got ${[...ex.dotted]}`);
  }
  if ([...ex.flat].sort().join(",") !== "primary-color,space-4") {
    failures.push(`extractVars flat: got ${[...ex.flat]}`);
  }

  const refs = extractVarRefs(
    'a{x:var(--dt-color-primary)} b{--dx-space-4:1px} c{y:var(--dx-primary-color)}',
  );
  if (refs.dotted.size !== 1 || !refs.dotted.has("color.primary")) {
    failures.push(`extractVarRefs dotted: got ${[...refs.dotted]}`);
  }
  if ([...refs.flat].join(",") !== "primary-color") {
    failures.push(`extractVarRefs flat (definition excluded): got ${[...refs.flat]}`);
  }

  const used = extractVars(src);
  eq("tokenUsed via dotted", tokenUsed("color.primary", used)?.rule, "dotted");
  eq(
    "tokenUsed via react alias (no dotted form)",
    tokenUsed("color.border", { dotted: new Set(), flat: new Set(["border-color"]) }),
    { name: "border-color", rule: "color-suffix" },
  );
  eq(
    "tokenUsed miss",
    tokenUsed("color.border", { dotted: new Set(), flat: new Set() }),
    null,
  );

  return failures;
}

// Run the self-test only when executed directly (node scripts/token-names.mjs),
// never when imported by a validator.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const failures = selfTest();
  if (failures.length > 0) {
    console.error(`✗ token-names self-test: ${failures.length} failure(s)`);
    for (const f of failures) console.error(`  ${f}`);
    process.exit(1);
  }
  console.log("✓ token-names self-test (all documented examples hold)");
}

