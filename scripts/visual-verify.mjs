import { mkdirSync, rmSync, readFileSync } from "node:fs";
import { createServer } from "node:http";
import { join, extname } from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const ROOT = join(import.meta.dirname, "..");
const OUT = join(ROOT, "visual", "screenshots");
const THEMES = ["default", "fluent", "github", "material", "material-3", "shadcn"];
const MODES = ["light", "dark"];
const REACT_PORT = 4199;
const HTMX_PORT = 4198;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
};

function serve(dir, port) {
  const server = createServer((req, res) => {
    const path = req.url === "/" ? "/index.html" : req.url.split("?")[0];
    let file = join(dir, decodeURIComponent(path));
    if (file.endsWith("/")) file += "index.html";
    try {
      const body = readFileSync(file);
      res.writeHead(200, {
        "content-type": MIME[extname(file)] ?? "application/octet-stream",
        "cache-control": "no-store",
      });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("not found");
    }
  });
  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

function waitFor(url, timeoutMs = 60_000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {}
      if (Date.now() - start > timeoutMs) return reject(new Error(`timeout waiting for ${url}`));
      setTimeout(tick, 300);
    };
    tick();
  });
}

function waitForExit(child) {
  return new Promise((resolve, reject) => {
    child.once("exit", (code) => (code === 0 ? resolve() : reject(new Error(`exit ${code}`))));
    child.once("error", reject);
  });
}

const CONTRAST_PAIRS = [
  ["body", "background-color", "color"],
  [".se-button--primary", "background-color", "color"],
  [".se-button--secondary", "background-color", "color"],
  [".se-button--ghost", "background-color", "color"],
  [".se-button--danger", "background-color", "color"],
  [".se-alert--success", "background-color", "color"],
  [".se-alert--success .se-alert-title", "background-color", "color"],
  [".se-badge--solid.se-badge--primary", "background-color", "color"],
  [".se-badge--soft.se-badge--success", "background-color", "color"],
  [".se-badge--outline.se-badge--primary", "background-color", "color"],
  [".se-card-header", "background-color", "color"],
  [".se-table th", "background-color", "color"],
  [".se-table td", "background-color", "color"],
  [".se-stat-value", "background-color", "color"],
  [".se-stat-label", "background-color", "color"],
  [".se-field-label", "background-color", "color"],
  [".se-input--md", "background-color", "color"],
  [".se-textarea--md", "background-color", "color"],
  [".se-tabs-tab--active", "background-color", "color"],
  [".se-accordion-trigger", "background-color", "color"],
  [".se-dialog-title", "background-color", "color"],
  [".se-empty-state-title", "background-color", "color"],
  [".chrome-header h1", "background-color", "color"],
];

async function auditTokens(page) {
  return page.evaluate(() => {
    const parse = (str) => {
      const hex = str.match(/^#([0-9a-f]{8}|[0-9a-f]{6})$/i);
      if (hex) {
        const h = hex[1];
        const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
        return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a };
      }
      const m = str.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
      if (!m) return null;
      return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
    };
    const blend = (fg, bg) => ({
      r: fg.r * fg.a + bg.r * (1 - fg.a),
      g: fg.g * fg.a + bg.g * (1 - fg.a),
      b: fg.b * fg.a + bg.b * (1 - fg.a),
    });
    const lum = (c) => {
      const f = (v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    };
    const ratio = (a, b) => {
      const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
      return (l1 + 0.05) / (l2 + 0.05);
    };
    const root = getComputedStyle(document.documentElement);
    const get = (name) => parse(root.getPropertyValue(`--se-color-${name}`).trim());
    const rules = [
      ["text", "bg", 4.5],
      ["text-muted", "bg", 4.5],
      ["text", "surface", 4.5],
      ["primary-fg", "primary", 4.5],
      ["danger-fg", "danger", 4.5],
    ];
    const violations = [];
    for (const [fgName, bgName, min] of rules) {
      let fg = get(fgName);
      let bg = get(bgName);
      if (!fg || !bg) {
        violations.push(`${fgName}/${bgName}: unresolvable (${fgName}=${fg}, ${bgName}=${bg})`);
        continue;
      }
      if (bg.a < 1) bg = blend(bg, { r: 255, g: 255, b: 255 });
      if (fg.a < 1) fg = blend(fg, bg);
      const r = ratio(bg, fg);
      if (r < min) violations.push(`token ${fgName} on ${bgName}: ${r.toFixed(2)} (< ${min})`);
    }
    return violations;
  });
}

async function auditContrast(page) {
  return page.evaluate((pairs) => {
    const parse = (str) => {
      const m = str.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
      if (!m) return null;
      return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
    };
    const blend = (fg, bg) => {
      const a = fg.a;
      return { r: fg.r * a + bg.r * (1 - a), g: fg.g * a + bg.g * (1 - a), b: fg.b * a + bg.b * (1 - a) };
    };
    const paintedBg = (el) => {
      let cur = el;
      while (cur) {
        const c = parse(getComputedStyle(cur).getPropertyValue("background-color"));
        if (c && c.a > 0) return blend(c, paintedBg(cur.parentElement));
        cur = cur.parentElement;
      }
      return { r: 255, g: 255, b: 255 };
    };
    const lum = (c) => {
      const f = (v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    };
    const ratio = (a, b) => {
      const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
      return (l1 + 0.05) / (l2 + 0.05);
    };
    const violations = [];
    for (const [sel, bgProp, fgProp] of pairs) {
      const el = document.querySelector(sel);
      if (!el) {
        violations.push(`${sel}: element not found`);
        continue;
      }
      const cs = getComputedStyle(el);
      const bgRaw = parse(cs.getPropertyValue(bgProp));
      const fgRaw = parse(cs.getPropertyValue(fgProp));
      if (!bgRaw || !fgRaw) continue;
      const bg = bgRaw.a > 0 ? bgRaw : paintedBg(el);
      const fg = fgRaw.a > 0 ? fgRaw : blend(fgRaw, bg);
      const r = ratio(bg, fg);
      if (r < 4.5) violations.push(`${sel}: ${r.toFixed(2)} (< 4.5)`);
    }
    return violations;
  }, CONTRAST_PAIRS);
}

const preview = spawn(
  process.execPath,
  [join(ROOT, "node_modules", "vite", "bin", "vite.js"), "preview", "demo/react", "--port", String(REACT_PORT), "--strictPort"],
  { cwd: ROOT, stdio: "ignore" },
);
await waitFor(`http://localhost:${REACT_PORT}/`);
const htmx = await serve(join(ROOT, "demo", "htmx"), HTMX_PORT);

async function auditAxe(page) {
  const results = await new AxeBuilder({ page }).analyze();
  return results.violations.map((v) => {
    const targets = [...new Set(v.nodes.flatMap((n) => n.target.join(" ")))].slice(0, 4);
    return `${v.id} [${v.impact}] (${v.nodes.length}): ${targets.join(" · ")}`;
  });
}

const errors = [];
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage({ viewport: { width: 1440, height: 900 } });
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`[console] ${msg.text()}`);
});
page.on("pageerror", (err) => errors.push(`[pageerror] ${err.message}`));

for (const demo of ["react", "htmx"]) {
  const url = demo === "react" ? `http://localhost:${REACT_PORT}/` : `http://localhost:${HTMX_PORT}/`;
  await page.goto(url, { waitUntil: "networkidle" });
  for (const theme of THEMES) {
    for (const mode of MODES) {
      await page.selectOption("select", theme);
      const dark = page.locator(".dark-toggle input");
      mode === "dark" ? await dark.check() : await dark.uncheck();
      await page.waitForTimeout(200);
      const violations = demo === "htmx" ? await auditContrast(page) : [];
      const tokenViolations = await auditTokens(page);
      const axeViolations = await auditAxe(page);
      if (violations.length || tokenViolations.length || axeViolations.length) {
        errors.push(
          `${demo} ${theme}/${mode}: ${[...violations, ...tokenViolations, ...axeViolations].join(" | ")}`,
        );
      }
      await page.screenshot({
        path: join(OUT, `${demo}-${theme}-${mode}.png`),
        fullPage: true,
      });
    }
  }
}

await browser.close();
htmx.close();
preview.kill();
await new Promise((resolve) => setTimeout(resolve, 800));

if (errors.length) {
  console.error("visual-verify FAILED:\n" + errors.join("\n"));
  process.exit(1);
}
console.log(`visual-verify OK — 24 screenshots in ${OUT}`);
