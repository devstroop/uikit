---
name: Icon
status: implemented
category: data-display
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "font.size-xl"
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
| `size` | `number` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | `width`/`height` in px (number), or a shared `ComponentSize` tier sized from the `font.size-{tier}` scale (`md` = 16px) |
| `strokeWidth` | `number` | `2` | SVG stroke width |
| ... | `SVGProps<SVGSVGElement>` (minus `name`) | — | Forwarded to the `<svg>` (className, aria-*, etc.) |

The component is `forwardRef`d to `SVGSVGElement`.

## Behavior

- 24×24 `viewBox`, stroke-based line icons with round caps/joins;
  `fill="none"`, `stroke="currentColor"`.
- `size` accepts a number (`width`/`height` in px) or a shared
  `ComponentSize` tier: tier classes size the box from
  `font.size-{tier}` (`--dt-font-size-xs` 12px → `xl` 22px in the default
  theme) so icons stay aligned with adjacent label text; the tier value is
  NOT inherited from the parent font — it is always resolved from the
  token. Default is `md` (16px).
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
| Defaults | inline `<svg>` with `aria-hidden="true"` and `focusable="false"` |
| Default size/stroke | tier `md` class with no `width`/`height` attributes, `viewBox="0 0 24 24"`, `stroke-width` 2 |
| `size` / `strokeWidth` | attributes updated to the given values |
| Glyph | one or more `<path>` elements for the requested name |
| Override a11y | `aria-hidden={false}` + `role` override the defaults |
| className / ref | forwarded to the `<svg>` |
| `iconNames` export | array of 40 names including `check`, `settings`, `link` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
