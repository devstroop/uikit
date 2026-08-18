#!/usr/bin/env node
/**
 * Validate every component spec under specs/components/:
 *   1. required frontmatter fields with correct types
 *   2. each listed token exists in the token schema (tier.token)
 *   3. status === "implemented" requires an implementation: the component
 *      source dir must exist for every framework listed in `frameworks`,
 *      and the react implementation must ship a test file covering it
 *
 *   node scripts/validate-specs.mjs
 *
 * Exit 1 on any violation.
 */

import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPECS_DIR = join(ROOT, "specs/components");
const SCHEMA_PATH = join(ROOT, "specs/tokens.schema.json");
const FRAMEWORKS_DIR = join(ROOT, "frameworks");

const VALID_STATUSES = ["proposed", "implemented"];

function readFrontmatter(markdown) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(markdown);
  if (!match) return null;
  return parseYaml(match[1]);
}

function implDirFor(technology, componentName) {
  if (technology === "react") {
    return join(FRAMEWORKS_DIR, "react", "lib", "components", componentName);
  }
  if (technology === "htmx") {
    const kebab = componentName
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase();
    return join(FRAMEWORKS_DIR, "htmx", "lib", "components", kebab);
  }
  return null;
}

async function validateSpec(file) {
  const name = file.replace(/\.md$/, "");
  const errors = [];
  const fail = (msg) => {
    errors.push(msg);
    console.error(`  ✗ ${msg}`);
  };

  let meta;
  try {
    const markdown = await readFile(join(SPECS_DIR, file), "utf8");
    meta = readFrontmatter(markdown);
    if (!meta) {
      fail(`missing YAML frontmatter block`);
      return { name, errors };
    }
  } catch (err) {
    fail(`cannot read spec ${file}: ${err.message}`);
    return { name, errors };
  }

  if (typeof meta.name !== "string" || !meta.name) fail("missing name");
  else {
    const kebab = meta.name
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase();
    if (kebab !== name) {
      fail(`name "${meta.name}" does not match file "${file}" (expected ${kebab}.md)`);
    }
  }

  if (!VALID_STATUSES.includes(meta.status)) {
    fail(`status must be one of ${VALID_STATUSES.join("/")}`);
  }

  if (!meta.frameworks || typeof meta.frameworks !== "object") {
    fail("missing frameworks map (technology -> version)");
  } else {
    for (const [technology, version] of Object.entries(meta.frameworks)) {
      if (typeof version !== "string") {
        fail(`frameworks.${technology} must be a version string`);
      }
      if (meta.status === "implemented") {
        const dir = implDirFor(technology, meta.name);
        if (dir) {
          try {
            await readdir(dir);
          } catch {
            fail(
              `implemented in ${technology} but no source dir: ` +
                `frameworks/${technology}/lib/components/${meta.name}/`,
            );
            continue;
          }
          if (technology === "react") {
            try {
              await access(join(dir, `${meta.name}.test.tsx`));
            } catch {
              fail(
                `implemented in ${technology} but no test file: ` +
                  `${meta.name}.test.tsx`,
              );
            }
          }
          if (technology === "htmx") {
            const kebab = meta.name
              .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
              .toLowerCase();
            for (const ext of ["html", "css"]) {
              try {
                await access(join(dir, `${kebab}.${ext}`));
              } catch {
                fail(
                  `implemented in ${technology} but no ${ext} file: ` +
                    `${kebab}.${ext}`,
                );
              }
            }
          }
        }
      }
    }
  }

  const schema = await readFile(SCHEMA_PATH, "utf8").then(JSON.parse);
  if (!Array.isArray(meta.tokens)) {
    fail("missing tokens list");
  } else {
    for (const token of meta.tokens) {
      if (typeof token !== "string") {
        fail(`token must be a string: ${JSON.stringify(token)}`);
        continue;
      }
      const [tier, ...rest] = token.split(".");
      const name = rest.join(".");
      if (!schema.tiers[tier] || !schema.tiers[tier].tokens.includes(name)) {
        fail(`unknown token in schema: ${token}`);
      }
    }
  }

  if (!Array.isArray(meta.a11y) || meta.a11y.length === 0) {
    fail("missing a11y checklist (non-empty array)");
  }

  if (errors.length === 0) console.log(`✓ ${name} valid`);
  return { name, errors };
}

async function main() {
  const files = (await readdir(SPECS_DIR)).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.error("no specs found under specs/components/");
    process.exit(1);
  }
  let failed = 0;
  for (const file of files) {
    const { errors } = await validateSpec(file);
    failed += errors.length;
  }
  if (failed > 0) {
    console.error(`\n${failed} violation(s) — fix the spec(s) before committing.`);
    process.exit(1);
  }
  console.log(`\nall ${files.length} spec(s) valid.`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});