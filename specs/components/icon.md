---
name: Icon
status: implemented
frameworks:
  react: v0.2.0
tokens: []
a11y:
  - "Renders an inline <svg> with defaults aria-hidden=\"true\" and focusable=\"false\" — decorative by default and skipped by assistive tech."
  - "stroke=\"currentColor\" and fill=\"none\" makes the glyph inherit the surrounding text color (no hardcoded fill)."
  - "Because remaining SVGProps are spread after the defaults, consumers can override aria-hidden/role when an icon must carry semantics (paired with a separate accessible name)."
  - "No token-based colors — relies on inherited `currentColor`; no contrast rule applies to the glyph itself."
---

# Icon

Stroke-based inline SVG icon set with 40 named glyphs.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `IconName` (union of 40 names, e.g. `"check"`, `"chevron-down"`, `"settings"`) | — (required) | Which glyph to render |
| `size` | `number` | `16` | `width`/`height` in px |
| `strokeWidth` | `number` | `2` | SVG stroke width |
| ... | `SVGProps<SVGSVGElement>` (minus `name`) | — | Forwarded to the `<svg>` (className, aria-*, etc.) |

The component is `forwardRef`d to `SVGSVGElement`.

## Behavior

- 24×24 `viewBox`, stroke-based line icons with round caps/joins;
  `fill="none"`, `stroke="currentColor"`.
- `size` sets `width` and `height` (px); no CSS module, no tokens, no
  variants — appearance is fully inherited or overridden via props.
- All 40 glyphs are inline JSX path data keyed by `name`:
  check, close, chevron-down/left/right/up, search, plus, minus, alert,
  info, arrow-right/left, external-link, copy, trash, edit, settings,
  user, users, download, upload, menu, more-horizontal, mail, lock, eye,
  eye-off, refresh, calendar, clock, check-circle, x-circle, shield,
  globe, file, folder, home, key, link.

## Keyboard

Not keyboard- or focus-relevant: `focusable="false"` by default, so the
SVG is never a tab stop.

## Tests

| Scenario | Assertion |
|---|---|
| No automated tests shipped with v0.2.0 (no `Icon.test.tsx` in `frameworks/react/lib/components/Icon/`) | — |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
