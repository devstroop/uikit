#!/usr/bin/env node
/**
 * Derive readable tone-text, tone-fill, and avatar-palette tokens per theme.
 *
 *   success, warning            — fill values walked (hue-preserving) so that
 *                                 surface text on the fill >= 4.55
 *                                 (light: darker, dark: lighter)
 *   text-{primary,success,...}  — hue of the theme's own mode-specific tone,
 *                                 lightness walked (darker first, then
 *                                 lighter) until >= 4.55 on the painted
 *                                 12% color-mix tint of that tone over BOTH
 *                                 bg and surface (soft badges / tinted
 *                                 alerts live on either container)
 *   border-strong               — hue-preserving walk until >= 3.1 on both
 *                                 bg and surface (interactive control
 *                                 boundaries per WCAG 2.1 non-text contrast)
 *   palette-0..5                — fixed hue families walked so that surface
 *                                 on the palette fill >= 4.55 per mode
 *
 * Usage: node scripts/derive-tone-tokens.mjs
 */

import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MARGIN = 4.55;

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  const c = (v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

function rgbToHsl({ r, g, b }) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / d + 2) * 60;
    else h = ((r - g) / d + 4) * 60;
  }
  return { h, s: s * 100, l: l * 100 };
}

function hslToRgb({ h, s, l }) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let rgb;
  if (h < 60) rgb = [c, x, 0];
  else if (h < 120) rgb = [x, c, 0];
  else if (h < 180) rgb = [0, c, x];
  else if (h < 240) rgb = [0, x, c];
  else if (h < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  return { r: (rgb[0] + m) * 255, g: (rgb[1] + m) * 255, b: (rgb[2] + m) * 255 };
}

function luminance({ r, g, b }) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(fg, bg) {
  const [l1, l2] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}

function walkLightness(hsl, target, dir) {
  let l = hsl.l;
  if (contrast(hslToRgb(hsl), target) >= MARGIN) return hslToRgb(hsl);
  for (let i = 0; i < 100; i++) {
    l += dir;
    if (l < 3 || l > 97) return hslToRgb({ ...hsl, l: Math.min(97, Math.max(3, l)) });
    const rgb = hslToRgb({ ...hsl, l });
    if (contrast(rgb, target) >= MARGIN) return rgb;
  }
  return hslToRgb(hsl);
}

const PALETTE_HUES = {
  "palette-0": "#2563eb",
  "palette-1": "#7c3aed",
  "palette-2": "#059669",
  "palette-3": "#d97706",
  "palette-4": "#dc2626",
  "palette-5": "#0ea5e9",
};

const themeDir = join(ROOT, "themes");
const dirs = (await readdir(themeDir, { withFileTypes: true })).filter((d) =>
  d.isDirectory(),
);

for (const dir of dirs) {
  const path = join(themeDir, dir.name, "tokens.json");
  const theme = JSON.parse(await readFile(path, "utf8"));
  const color = theme.values.color;

  for (const mode of ["light", "dark"]) {
    const surface = hexToRgb(color.surface[mode]);
    const bg = hexToRgb(color.bg[mode]);
    const darkerFill = mode === "light";

    for (const tone of ["success", "warning"]) {
      const val = color[tone];
      const hex = typeof val === "string" ? val : val[mode];
      const derived = rgbToHex(
        walkLightness(rgbToHsl(hexToRgb(hex)), surface, darkerFill ? -1 : 1),
      );
      if (typeof val === "string") {
        color[tone] = { light: derived, dark: derived };
      } else {
        color[tone][mode] = derived;
      }
    }

    for (const [name, baseHex] of Object.entries(PALETTE_HUES)) {
      color[name] ??= {};
      color[name][mode] = rgbToHex(
        walkLightness(rgbToHsl(hexToRgb(baseHex)), surface, darkerFill ? -1 : 1),
      );
    }

    for (const tone of ["primary", "success", "warning", "danger"]) {
      const val = color[tone];
      const base = hexToRgb(typeof val === "string" ? val : val[mode]);
      const tintOf = (container) => ({
        r: 0.12 * base.r + 0.88 * container.r,
        g: 0.12 * base.g + 0.88 * container.g,
        b: 0.12 * base.b + 0.88 * container.b,
      });
      const tints = [tintOf(bg), tintOf(surface)];
      const fits = (rgb) => tints.every((t) => contrast(rgb, t) >= MARGIN);
      const hsl = rgbToHsl(base);
      const dir = mode === "light" ? -1 : 1;
      let l = hsl.l;
      if (!fits(hslToRgb(hsl))) {
        for (let i = 0; i < 100; i++) {
          l += dir;
          if (l < 3 || l > 97) break;
          if (fits(hslToRgb({ ...hsl, l }))) break;
        }
      }
      color[`text-${tone}`] ??= {};
      color[`text-${tone}`][mode] = rgbToHex(
        hslToRgb({ ...hsl, l: Math.min(97, Math.max(3, l)) }),
      );
    }

    const borderStrong = hexToRgb(color["border-strong"][mode]);
    const bsHsl = rgbToHsl(borderStrong);
    const bsFits = (rgb) => [bg, surface].every((t) => contrast(rgb, t) >= 3.1);
    let bsL = bsHsl.l;
    if (!bsFits(borderStrong)) {
      const step = darkerFill ? -1 : 1;
      for (let i = 0; i < 100; i++) {
        bsL += step;
        if (bsL < 3 || bsL > 97) break;
        if (bsFits(hslToRgb({ ...bsHsl, l: bsL }))) break;
      }
    }
    color["border-strong"][mode] = rgbToHex(
      hslToRgb({ ...bsHsl, l: Math.min(97, Math.max(3, bsL)) }),
    );
  }

  await writeFile(path, `${JSON.stringify(theme, null, 2)}\n`);
  console.log(`derived tone tokens -> themes/${dir.name}/tokens.json`);
}