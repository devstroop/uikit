# uikit

Framework-agnostic UI kit for Devstroop web apps. One contract — many
deliveries.

```
specs/          component contracts + token schema (source of truth)
themes/         design tokens per design system (data, validated, generated)
scripts/        token generator + theme validator
frameworks/     per-technology implementations of the same contracts
```

- **Specs first** — every component and every token starts in `specs/`; a
  framework is a faithful implementation, not a re-invention.
- **Tokens as data** — `themes/<name>/tokens.json` is validated against
  `specs/tokens.schema.json` (completeness + WCAG 2.1 AA contrast) and
  compiled to CSS by `scripts/generate-css.mjs`. See `specs/tokens.md`.
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
node scripts/validate-theme.mjs   # all themes must validate before commit
node scripts/generate-css.mjs     # regenerate tokens.css (+ framework syncs)

# react framework
npm run lint && npm run typecheck && npm test && npm run build --prefix frameworks/react
```

## License

MIT