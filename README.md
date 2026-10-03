# UIKit

Framework-agnostic UI kit for Devstroop app front-ends. One contract — many
deliveries.

```
specs/          component contracts + token schema (source of truth)
themes/         design tokens per design system (data, validated, generated)
scripts/        token generator + validators
frameworks/     per-technology implementations of the same contracts
preview/        per-stack playgrounds (preview/react/ showcases all themes)
```

- **Specs first** — every component and every token starts in `specs/`
  (`specs/components/*.md` with YAML frontmatter: API, tokens, a11y,
  test matrix); a framework is a faithful implementation, not a
  re-invention. `npm run specs:validate` cross-checks specs against the
  token schema and the implementations; `npm run parity:validate` enforces
  that a component uses exactly the tokens its spec declares.
- **Tokens as data** — `themes/<name>/tokens.json` is validated against
  `specs/tokens.schema.json` (completeness + WCAG 2.1 AA contrast) and
  compiled to CSS by `scripts/generate-css.mjs`. See `specs/tokens.md`.
- **Framework registry** — each framework declares its metadata in
  `frameworks/<name>/uikit.yml` (package name, token sync target, local
  commands). The generator syncs tokens.css into every registered target.
- **Theme-agnostic frameworks** — components consume `--dx-*` custom
  properties exclusively; consumers pick a theme by importing its
  `tokens.css`.
- **React + htmx, same contracts** — `frameworks/react` ships the 23
  components as a JS package (`@devstroop/react-ui`); `frameworks/htmx`
  ships them as server-rendered HTML fragments + plain CSS + a 4 KB
  behaviors script (`@devstroop/uikit-htmx`). Both frameworks are
  validated against the same specs (token parity enforced).
  `frameworks/blazor` pins the upstream Radzen Blazor depot as our
  behavioral reference — `npm run radzen:parity` diffs each spec against
  it (report-only).

## Repositories

- GitHub: `devstroop/uikit` — canonical source and CI (`.github/workflows/`).

## CI

Two workflows: `CI` (`.github/workflows/ci.yml`) runs on PRs, pushes to
`master`/`develop`, and a weekly cron on master; `Visual verification`
(`.github/workflows/visual.yml`) runs on PRs only.

| Job | What it gates |
|---|---|
| Tokens & specs | tokens:validate → tokens:generate in-sync → specs:validate → parity:validate (react+htmx) → radzen:parity (report-only, into the run summary) |
| htmx framework | build, tests, dist/vendor sync checks |
| Preview (react) | preview typecheck + production build |
| React framework | lint, typecheck, tests, build, export list |
| Visual verification | axe + WCAG contrast (6 themes × light/dark), Playwright artifacts uploaded |

All jobs run Node 22.23.3 + npm 10.9.9 (pinned in the workflows), fail
loudly (`✗` errors become `::error::` annotations), and run under
`timeout-minutes` with per-branch concurrency cancellation. Protected
branches require all jobs.

Run the whole gate locally before pushing:

```bash
npm run ci:local   # tokens → generate-diff → specs → parity → radzen → preview typecheck+build
```

Local submodules not matching the recorded pins produce the same red:
`git submodule status` (no `+`/`M` prefixes) and `npm run ci:local`.

## Development

Branch/PR/release protocol follows the org standard — see
`frameworks/react/docs/DEVELOPMENT_STRATEGY.md`.

```bash
npm ci                        # tooling + preview deps
npm run tokens:validate       # all themes must validate before commit
npm run tokens:generate       # regenerate tokens.css (+ framework syncs)
npm run specs:validate        # component specs vs. token schema + impls
npm run parity:validate       # spec token lists vs. actual component usage

# react framework
npm run lint && npm run typecheck && npm test && npm run build --prefix frameworks/react

# htmx framework
npm run build --prefix frameworks/htmx        # dist/uikit.js + uikit.css

# theme playgrounds (preview/react, preview/htmx): all 6 themes, light/dark
npm run preview                # react dev server
npm run preview:build          # react production build
npm run preview:typecheck      # preview sources type-checked
(cd preview/htmx && python3 -m http.server)  # static htmx showcase
```

## License

MIT