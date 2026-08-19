---
name: Row
status: implemented
category: layout
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "space.1"
  - "space.2"
  - "space.3"
  - "space.4"
  - "space.5"
a11y:
  - "Renders a plain <div>; purely a layout container — no semantic role, no aria, no keyboard behavior."
  - "Screen readers announce children in source order regardless of visual arrangement; alignment modifiers are visual-only."
---

# Row

Flex layout row that wraps columns or arbitrary content with a consistent
gutter (default `space.4`), following the Radzen Row/Column grid model.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `gap` | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `number` \| `string` | `undefined` | Row gutter override; `xs`–`xl` map to `--se-space-1..5`, numbers become `px`, other strings pass through (defaults to `space.4`) |
| `align` | `start` \| `center` \| `end` \| `stretch` \| `baseline` | `stretch` | Cross-axis alignment (`align-items`) |
| `justify` | `start` \| `center` \| `end` \| `between` \| `around` \| `evenly` | `start` | Main-axis distribution (`justify-content`) |
| `wrap` | `boolean` | `true` | Allow items to wrap (`flex-wrap`) |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLDivElement>` are spread onto the `<div>`.

## Behavior

- DOM: `div[class~=se-row]` with `display: flex; flex-wrap: wrap;
  gap: var(--se-space-4)`.
- Modifier classes map one-to-one to alignment/justification (`center`,
  `end`, `baseline`, `justify-between`, `justify-around`, `justify-evenly`,
  `no-wrap`).
- Gap modifiers (htmx): `se-row--gap-xs` … `se-row--gap-xl` map to the
  `--se-space-1..5` token scale (4, 8, 12, 16, 24 px); react `gap` takes the
  same `xs`–`xl` tiers (class-based) plus numbers (px) and arbitrary CSS
  length strings; Radzen parity is a CSS-length gap on the row.
- Works with plain content as well as `Column` children; `Column` width math
  is relative to the row width.
- No JS, no `data-*` hooks.

## Keyboard

Not keyboard- or focus-relevant: plain container, never interactive.

## Tests

| Scenario | Assertion |
|---|---|
| Defaults | `<div>` with row class, `wrap` flex, `space.4` gap |
| `gap` | numeric gap becomes `px`; string gap passes through |
| `gap` (tier) | `xs`–`xl` gap (react) / `se-row--gap-xs…xl` (htmx) maps to `--se-space-1..5` |
| `align` / `justify` | matching modifier class applied |
| `wrap=false` | `no-wrap` class applied |
| Attributes spread | `id` / `aria-*` forwarded to the `<div>` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).