#!/usr/bin/env node
/**
 * Generate per-component screenshots for every spec in specs/components/.
 * Reuses the preview servers and selectors from scripts/visual-verify.mjs
 * but writes clipped images to visual/components/<kebab>/ instead of
 * full-page screenshots.
 *
 * Usage:
 *   node scripts/generate-component-images.mjs              # all components, all themes
 *   node scripts/generate-component-images.mjs --component pager
 *   node scripts/generate-component-images.mjs --theme default --mode light
 *
 * Output:
 *   visual/components/<kebab>/<app>-<theme>-<mode>.png
 *   e.g. visual/components/pager/react-default-light.png
 *        visual/components/pager/htmx-default-dark.png
 *
 * The script will reuse already-running dev servers at REACT_PORT=5173 and
 * HTMX_PORT=8000 if they are up (as started in the current session), otherwise
 * it will spawn its own preview servers on 4199/4198 like visual-verify.mjs.
 */

import { mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { spawn } from "node:child_process";
import { parse as parseYaml } from "yaml";
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPECS_DIR = join(ROOT, "specs/components");
const OUT_ROOT = join(ROOT, "visual", "components");
const THEMES = ["default", "fluent", "github", "material", "material-3", "shadcn"];
const MODES = ["light", "dark"];

// Try to reuse already-running dev servers (started in this session at 5173/8000),
// fallback to visual-verify's ports 4199/4198 if not available.
const REACT_CANDIDATES = [5173, 4199];
const HTMX_CANDIDATES = [8000, 4198];
const REACT_DIST = join(ROOT, "preview", "react");
const HTMX_DIR = join(ROOT, "preview", "htmx");

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
};

function serve(dir, port) {
  const server = createServer((req, res) => {
    const urlPath = req.url === "/" ? "/index.html" : req.url.split("?")[0];
    let file = join(dir, decodeURIComponent(urlPath));
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

async function findWorkingPort(candidates, path = "/") {
  for (const port of candidates) {
    try {
      const res = await fetch(`http://localhost:${port}${path}`, { signal: AbortSignal.timeout(1000) });
      if (res.ok || res.status === 404) {
        // 404 still means server is up (just not that path), but we check for 200 for index
        if (res.ok) return port;
      }
    } catch {}
  }
  return null;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--component" && args[i + 1]) out.component = args[++i].toLowerCase();
    else if (args[i] === "--theme" && args[i + 1]) out.theme = args[++i];
    else if (args[i] === "--mode" && args[i + 1]) out.mode = args[++i];
  }
  return out;
}

function readSpecs() {
  const files = readdirSync(SPECS_DIR).filter((f) => f.endsWith(".md"));
  const specs = [];
  for (const file of files) {
    const raw = readFileSync(join(SPECS_DIR, file), "utf8");
    const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(raw);
    if (!m) continue;
    const meta = parseYaml(m[1]);
    if (!meta || !meta.name) continue;
    const kebab = file.replace(/\.md$/, "");
    specs.push({ file, kebab, name: meta.name, category: meta.category });
  }
  return specs.sort((a, b) => a.kebab.localeCompare(b.kebab));
}

// Map kebab -> htmx data attribute selector (primary) and fallback aria-label
function htmxSelector(kebab) {
  // Most htmx components use data-dt-<kebab> on the root
  // Special cases: drop-zone was renamed but data attr is still data-dt-dropzone
  return `[data-dt-${kebab}]`;
}

// For React, the root is often a landmark with aria-label containing the
// component's display name. We try a few strategies in order:
// 1. [aria-label*="<Name>" i] (case-insensitive, e.g. "Pagination" for Pager)
// 2. section that contains an h2/h3 with the name
// 3. fallback to the whole section.row / Section
function reactSelectorCandidates(specs) {
  const map = {
    pager: 'nav[aria-label*="pag" i]',
    menu: 'nav[aria-label*="menu" i]',
    panelmenu: 'nav[aria-label*="panel" i]',
    "panel-menu": 'nav[aria-label*="panel" i]',
    profilemenu: 'nav[aria-label*="profile" i]',
    "profile-menu": 'nav[aria-label*="profile" i]',
    fabmenu: '[aria-label*="fab" i], [aria-label*="open menu" i]',
    "fab-menu": '[aria-label*="fab" i], [aria-label*="open menu" i]',
    breadcrumb: 'nav[aria-label*="breadcrumb" i]',
    steps: 'nav[aria-label*="step" i]',
    splitter: '[aria-label*="splitter" i], [role="separator"]',
    toc: 'nav[aria-label*="toc" i], nav[aria-label*="table of" i]',
    carousel: '[aria-roledescription="carousel"], [aria-label*="carousel" i]',
  };
  return map[specs] || null;
}

async function ensureServers() {
  let reactPort = await findWorkingPort(REACT_CANDIDATES, "/");
  let htmxPort = await findWorkingPort(HTMX_CANDIDATES, "/");
  let reactServer = null;
  let htmxServer = null;

  if (reactPort === null) {
    // Spawn vite preview as visual-verify does (port 4199)
    reactPort = 4199;
    const preview = spawn(
      process.execPath,
      [join(ROOT, "node_modules", "vite", "bin", "vite.js"), "preview", "preview/react", "--port", String(reactPort), "--strictPort"],
      { cwd: ROOT, stdio: "ignore" },
    );
    await waitFor(`http://localhost:${reactPort}/`);
    reactServer = preview;
  } else {
    console.log(`Reusing React preview at :${reactPort}`);
  }

  if (htmxPort === null) {
    htmxPort = 4198;
    htmxServer = await serve(HTMX_DIR, htmxPort);
    await waitFor(`http://localhost:${htmxPort}/`);
  } else {
    console.log(`Reusing HTMX preview at :${htmxPort}`);
  }

  return { reactPort, htmxPort, reactServer, htmxServer };
}

async function main() {
  const { component: filterKebab, theme: filterTheme, mode: filterMode } = parseArgs();
  const allSpecs = readSpecs();
  const specs = filterKebab ? allSpecs.filter((s) => s.kebab === filterKebab || s.name.toLowerCase() === filterKebab) : allSpecs;
  if (filterKebab && specs.length === 0) {
    console.error(`No spec found for "${filterKebab}". Available: ${allSpecs.map((s) => s.kebab).join(", ")}`);
    process.exit(1);
  }

  const themes = filterTheme ? [filterTheme] : THEMES;
  const modes = filterMode ? [filterMode] : MODES;

  console.log(`Generating per-component images for ${specs.length} component(s) × ${themes.length} theme(s) × ${modes.length} mode(s) × 2 apps`);
  console.log(`Output: ${OUT_ROOT}/<kebab>/<app>-<theme>-<mode>.png`);

  // Clean only the filtered kebabs if filtering, otherwise full clean
  if (filterKebab) {
    for (const { kebab } of specs) rmSync(join(OUT_ROOT, kebab), { recursive: true, force: true });
  } else {
    rmSync(OUT_ROOT, { recursive: true, force: true });
  }
  for (const { kebab } of specs) mkdirSync(join(OUT_ROOT, kebab), { recursive: true });

  const { reactPort, htmxPort, reactServer, htmxServer } = await ensureServers();

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  let total = 0;
  let missing = [];

  for (const app of ["react", "htmx"]) {
    const port = app === "react" ? reactPort : htmxPort;
    const url = `http://localhost:${port}/`;
    await page.goto(url, { waitUntil: "networkidle" });

    for (const theme of themes) {
      for (const mode of modes) {
        // Switch theme/mode as visual-verify does
        await page.selectOption("select", theme).catch(() => {});
        const dark =
          app === "react"
            ? page.locator(".chrome-controls input[type='checkbox']")
            : page.locator(".dark-toggle input");
        try {
          if (mode === "dark") await dark.check();
          else await dark.uncheck();
          await page.waitForTimeout(200);
        } catch {}

        for (const { kebab, name } of specs) {
          const outDir = join(OUT_ROOT, kebab);
          const outPath = join(outDir, `${app}-${theme}-${mode}.png`);

          // Try htmx selector first (data-dt), then React aria-label
          let locator = null;
          let found = false;

          if (app === "htmx") {
            const sel = htmxSelector(kebab);
            locator = page.locator(sel).first();
            found = (await locator.count()) > 0;
            // Fallback: try section containing h2 with name
            if (!found) {
              locator = page.locator(`section:has(h2:has-text("${name}"))`).first();
              found = (await locator.count()) > 0;
            }
          } else {
            // React
            const custom = reactSelectorCandidates(kebab);
            if (custom) {
              locator = page.locator(custom).first();
              found = (await locator.count()) > 0;
            }
            if (!found) {
              // Fallback: aria-label contains name
              locator = page.locator(`[aria-label*="${name}" i]`).first();
              found = (await locator.count()) > 0;
            }
            if (!found) {
              // Fallback: section with heading
              locator = page.locator(`section:has(h2:has-text("${name}"))`).first();
              found = (await locator.count()) > 0;
            }
            if (!found) {
              // Last resort: any element with data-dt fallback (for components that also have data attr in React preview)
              locator = page.locator(`[data-dt-${kebab}]`).first();
              found = (await locator.count()) > 0;
            }
          }

          if (!found || !locator) {
            missing.push(`${app}/${kebab} (${theme}-${mode}): not found`);
            continue;
          }

          try {
            await locator.screenshot({ path: outPath });
            total++;
          } catch (e) {
            missing.push(`${app}/${kebab} (${theme}-${mode}): screenshot failed — ${e.message}`);
          }
        }
      }
    }
  }

  await browser.close();
  if (htmxServer) htmxServer.close();
  if (reactServer) {
    reactServer.kill();
    await new Promise((r) => setTimeout(r, 800));
  }

  console.log(`\nDone — ${total} images written to ${OUT_ROOT}/`);
  if (missing.length) {
    console.log(`\n${missing.length} missing/skipped (expected for components not in the shell or with combined sections):`);
    for (const m of missing.slice(0, 20)) console.log(`  - ${m}`);
    if (missing.length > 20) console.log(`  ... and ${missing.length - 20} more`);
  }
  console.log(`\nPreview remains at http://localhost:${reactPort}/ (react) and http://localhost:${htmxPort}/ (htmx) if you started dev servers at 5173/8000.`);
  console.log(`To attach to a spec, add to specs/components/<kebab>.md:\n  ## Preview\n  ![${specs[0]?.name ?? "Component"}](../../visual/components/${specs[0]?.kebab ?? "kebab"}/react-default-light.png)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
