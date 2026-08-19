# Themes

Every theme is a `themes/<name>/tokens.json` data file plus the generated
`themes/<name>/tokens.css`. The `default` theme is bundled with the react
framework (`@devstroop/react-ui/style.css`); every other theme is consumed
by importing its generated CSS directly.

## Available themes

| Theme        | Source design system          | Dark mode | Notes |
| ------------ | ----------------------------- | :-------: | ----- |
| `default`    | Devstroop baseline            |    yes    | bundled with the react package |
| `fluent`     | Fluent 2 web tokens           |    yes    | Segoe UI Variable stack, 4px scale |
| `github`     | Primer                        |    yes    | green primary `#1f883d` (AA) |
| `material`   | Material Design 2             |    yes    | classic purple baseline |
| `material-3` | Material Design 3 tonal       |    yes    | seed `#6750a4`, 40px controls |
| `shadcn`     | shadcn/ui neutral theme       |    yes    | HSL -> hex conversion |

Every palette is validated against the token schema and WCAG AA
(`npm run tokens:validate`). Where a canonical design-system value fails
AA contrast, the theme uses the nearest AA-passing value and documents the
deviation in the theme file's `description`.

## Consuming a non-default theme

Devstroop distributes packages by git tag (no npm registry). Pin the theme
to the release tag that matches your framework version, e.g. for
`@devstroop/react-ui` v0.3.0:

```css
/* app.css */
@import url("https://raw.githubusercontent.com/devstroop/uikit/v0.3.0/themes/material-3/tokens.css");
@import url("https://unpkg.com/@devstroop/react-ui@0.3.0/style.css"); /* or your vendored copy */
```

Prefer vendoring: copy `themes/<name>/tokens.css` into your app and commit
it, so app builds never depend on a network fetch at runtime.

Themes override any subset of `--dt-*` custom properties, so an app can
also define a partial theme inline after the default import:

```css
@import "@devstroop/react-ui/style.css";

:root {
  --dt-color-primary: #0f6cbd;
  --dt-radius-sm: 2px;
}
```

## Authoring

1. Copy `themes/default/tokens.json` to `themes/<name>/tokens.json`.
2. Replace every value; keep the structure — the validator requires
   **every** tier.token from `specs/tokens.schema.json`.
3. Values are either a single string (invariant across modes) or
   `{ light, dark }` (dark applied under `[data-theme="dark"]`).
4. Run `npm run tokens:validate` — it enforces schema completeness and
   WCAG AA contrast for every text-on-fill pair in `contrastRules`.
5. Run `npm run tokens:generate` to emit `tokens.css` and commit it (CI
   re-checks that the committed CSS matches the generator output).