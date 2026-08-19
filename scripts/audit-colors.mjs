#!/usr/bin/env node
/**
 * Audit every color-bearing declaration in all component stylesheets
 * (htmx + react) against every theme, light + dark.
 *
 * For each rule: resolves var(--dt-*) references and color-mix() against
 * the theme values, then verifies:
 *   fg    (color / fill / stroke)    vs background >= 4.5
 *   border / outline                 vs background >= 3.0
 *   alpha < 1 backgrounds are composited over both `bg` and `surface`
 *   containers — the worst ratio wins.
 *
 * Usage: node scripts/audit-colors.mjs   (exit 1 on violations)
 */

import { readdir, readFile } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TEXT_MIN = 4.5;
const UI_MIN = 3.0;
const CONTAINERS = ["bg", "surface"];

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 1 };
}

function rgba(r, g, b, a = 1) {
  return { r, g, b, a };
}

function parseColor(str) {
  str = str.trim();
  let m = str.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (m) {
    let h = m[1];
    if (h.length === 3) h = [...h].map((c) => c + c).join("");
    const n = parseInt(h, 16);
    return {
      r: (n >> 16) & 255,
      g: (n >> 8) & 255,
      b: n & 255,
      a: h.length === 8 ? ((n >> 24) & 255) / 255 : 1,
    };
  }
  m = str.match(/^rgba?\(([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\)$/i);
  if (m) {
    let a = m[4] === undefined ? 1 : parseFloat(m[4]);
    if (m[4] && m[4].endsWith("%")) a /= 100;
    return rgba(Number(m[1]), Number(m[2]), Number(m[3]), a);
  }
  if (str === "transparent") return rgba(0, 0, 0, 0);
  return null;
}

function mix(fg, bg, pct) {
  const f = fg.a ?? 1;
  const b = bg.a ?? 1;
  const a = f * pct + b * (1 - pct);
  if (a === 0) return { ...bg, a: 0 };
  return {
    r: Math.round((fg.r * f * pct + bg.r * b * (1 - pct)) / a),
    g: Math.round((fg.g * f * pct + bg.g * b * (1 - pct)) / a),
    b: Math.round((fg.b * f * pct + bg.b * b * (1 - pct)) / a),
    a,
  };
}

function over(fg, bg) {
  const f = fg.a ?? 1;
  const a = f + bg.a * (1 - f);
  if (a === 0) return rgba(0, 0, 0, 0);
  return {
    r: Math.round((fg.r * f + bg.r * bg.a * (1 - f)) / a),
    g: Math.round((fg.g * f + bg.g * bg.a * (1 - f)) / a),
    b: Math.round((fg.b * f + bg.b * bg.a * (1 - f)) / a),
    a,
  };
}

function luminance({ r, g, b }) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

function colorMixResolve(value, themeColors, mode) {
  let m = value.match(/^color-mix\(in srgb,\s*(.+?)\s+([\d.]+)%,\s*(.+?)\)$/i);
  if (!m) return null;
  const a = resolveColor(m[1], themeColors, mode);
  const b = resolveColor(m[3], themeColors, mode);
  if (!a || !b) return null;
  return mix(a, b, parseFloat(m[2]) / 100);
}

function resolveColor(value, themeColors, mode) {
  value = value.trim();
  if (value === "currentColor") return null;
  const m = value.match(/^var\(--dt-(.+?)\)$/);
  if (m) {
    const token = themeColors[m[1].replace(/^color-/, "")];
    if (!token) return null;
    if (typeof token === "string") return parseColor(token);
    if (token && typeof token === "object" && mode in token) return parseColor(token[mode]);
    return null;
  }
  return parseColor(value);
}

function resolveDecl(value, themeColors, mode) {
  const resolved = resolveColor(value, themeColors, mode);
  if (resolved) return resolved;
  return colorMixResolve(value, themeColors, mode);
}

function colorFromShorthand(value, themeColors, mode) {
  const parts = value.trim().split(/\s+/);
  const candidates = parts.filter((p) => /^var\(|^#|^rgb|^color-mix|^transparent/.test(p));
  if (candidates.length !== 1) return null;
  return resolveDecl(candidates[0], themeColors, mode);
}

const RULE_RE = /([^{}]+)\{([^{}]*)\}/g;
const PROP_RE = /([a-z-]+)\s*:\s*([^;]+);?/gi;

function extractRules(css) {
  const rules = [];
  let m;
  while ((m = RULE_RE.exec(css))) {
    const selector = m[1].trim();
    const decls = {};
    let d;
    PROP_RE.lastIndex = 0;
    while ((d = PROP_RE.exec(m[2]))) {
      decls[d[1].toLowerCase()] = d[2].trim();
    }
    rules.push({ selector, decls });
  }
  return rules;
}

function auditFile(file, rel, theme, mode) {
  const colors = theme.values.color;
  const violations = [];
  RULE_RE.lastIndex = 0;
  const rules = extractRules(file);

  const containerBase = {};
  for (const c of CONTAINERS) {
    const base = resolveColor(`var(--dt-${c})`, colors, mode);
    containerBase[c] = { rgb: base, alpha: base.a };
  }

  for (const rule of rules) {
    const { selector, decls } = rule;
    const fgRaw = decls.color || decls.fill || decls.stroke;
    let fg = fgRaw ? resolveDecl(fgRaw, colors, mode) : null;

    let bgRaw = decls["background-color"] || decls.background;
    let bg = bgRaw ? resolveDecl(bgRaw, colors, mode) : null;
    if (bgRaw && bgRaw === "transparent") bg = rgba(0, 0, 0, 0);

    const borderRaw =
      decls["border-color"] ||
      decls["border-top-color"] ||
      decls["border"] ||
      decls["border-top"];
    const border = borderRaw
      ? colorFromShorthand(borderRaw, colors, mode) ||
        resolveDecl(borderRaw, colors, mode)
      : null;

    const outlineRaw = decls["outline-color"] || decls.outline;
    const outline = outlineRaw
      ? colorFromShorthand(outlineRaw, colors, mode) ||
        resolveDecl(outlineRaw, colors, mode)
      : null;

    const pairs = [];
    if (fg && bg) pairs.push({ kind: "fg/bg", a: fg, b: bg, min: TEXT_MIN });
    if (border && bg) pairs.push({ kind: "border/bg", a: border, b: bg, min: UI_MIN });
    if (outline && bg) pairs.push({ kind: "outline/bg", a: outline, b: bg, min: UI_MIN });

    for (const pair of pairs) {
      let worst = Infinity;
      let worstContainer = null;
      let resolvedBg = pair.b;
      if (pair.b.a < 1) {
        for (const c of CONTAINERS) {
          const stacked = over(pair.b, containerBase[c].rgb);
          const ratio = contrast(pair.a, stacked);
          if (ratio < worst) {
            worst = ratio;
            worstContainer = c;
          }
        }
        resolvedBg = { composited: true, container: worstContainer };
      } else {
        worst = contrast(pair.a, pair.b);
      }
      if (worst < pair.min) {
        let status = "FAIL";
        if (pair.kind === "border/bg") {
          const same = pair.a.r === pair.b.r && pair.a.g === pair.b.g && pair.a.b === pair.b.b;
          const tintBg = /color-mix/.test(bgRaw || "");
          const toneBorder = /var\(--dt-color-(primary|success|warning|danger)\)/.test(
            borderRaw || "",
          );
          const decorBorder = /var\(--dt-color-border\)/.test(borderRaw || "");
          if (same) continue;
          if (tintBg && toneBorder) status = "INFO";
          if (!tintBg && decorBorder) status = "INFO";
        }
        violations.push({
          selector,
          kind: pair.kind,
          props: Object.entries(decls)
            .filter(([k]) => /color|background|border|outline|fill|stroke/.test(k))
            .map(([k, v]) => `${k}: ${v}`)
            .join(" "),
          ratio: worst.toFixed(2),
          need: pair.min,
          container: resolvedBg.composited ? resolvedBg.container : "self",
          status,
        });
      }
    }
  }
  return violations;
}

const themeDirs = (await readdir(join(ROOT, "themes"), { withFileTypes: true })).filter(
  (d) => d.isDirectory(),
);

let failures = 0;
let advisories = 0;

for (const dir of themeDirs) {
  const theme = JSON.parse(
    await readFile(join(ROOT, "themes", dir.name, "tokens.json"), "utf8"),
  );

  for (const mode of ["light", "dark"]) {
    for (const fw of ["htmx", "react"]) {
      const base = join(
        ROOT,
        "frameworks",
        fw,
        "lib",
        "components",
      );
      const walk = async (p) => {
        for (const e of await readdir(p, { withFileTypes: true })) {
          const full = join(p, e.name);
          if (e.isDirectory()) await walk(full);
          else if (e.name.endsWith(".css")) {
            const css = await readFile(full, "utf8");
            const rel = full.replace(join(ROOT, "frameworks", fw, "lib/") + "components/", "");
            for (const v of auditFile(css, rel, theme, mode)) {
              if (v.status === "INFO") advisories++;
              else failures++;
              console.log(
                `${v.status} ${dir.name}/${mode} ${fw} ${rel} ${v.selector} | ${v.kind} | ${v.props} | ${v.ratio} < ${v.need} (on ${v.container})`,
              );
            }
          }
        }
      };
      await walk(base);
    }
  }
}

if (failures) {
  console.log(`\n${failures} contrast violation(s), ${advisories} advisory.`);
  process.exit(1);
}
console.log(
  `all color pairs meet AA (4.5 text / 3.0 UI); ${advisories} advisory (decorative / tone-on-tint).`,
);