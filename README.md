# UIKit

Framework-agnostic UI kit for Devstroop app front-ends. One contract — many
deliveries.

```
specs/          component contracts + token schema (source of truth)
themes/         design tokens per design system (data, validated, generated)
scripts/        token generator + theme validator
frameworks/     per-technology implementations of the same contracts
```

- **Specs first** — every component and every token starts in `specs/`
  (`specs/components/*.md` with YAML frontmatter: API, tokens, a11y,
  test matrix); a framework is a faithful implementation, not a
  re-invention. `npm run specs:validate` cross-checks specs against the
  token schema and the implementations.
- **Tokens as data** — `themes/<name>/tokens.json` is validated against
  `specs/tokens.schema.json` (completeness + WCAG 2.1 AA contrast) and
  compiled to CSS by `scripts/generate-css.mjs`. See `specs/tokens.md`.
- **Framework registry** — each framework declares its metadata in
  `frameworks/<name>/uikit.yml` (package name, token sync target, local
  commands). The generator syncs tokens.css into every registered target.
- **Theme-agnostic frameworks** — components consume `--se-*` custom
  properties exclusively; consumers pick a theme by importing its
  `tokens.css`.

## Repositories

- GitHub: `devstroop/uikit` — canonical source.
- Forgejo mirror: CI (see `.forgejo/workflows/`).

## Development

Branch/PR/release protocol follows the org standard — see
`frameworks/react/docs/DEVELOPMENT_STRATEGY.md`.

```bash
npm ci                        # tooling deps (yaml parser)
npm run tokens:validate       # all themes must validate before commit
npm run tokens:generate       # regenerate tokens.css (+ framework syncs)
npm run specs:validate        # component specs vs. token schema + impls

# react framework
npm run lint && npm run typecheck && npm test && npm run build --prefix frameworks/react
```

## License

MIT