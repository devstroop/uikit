---
name: Row
status: implemented
frameworks:
  react: v0.3.3
  htmx: v0.1.4
tokens:
  - "space.4"
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
| `gap` | `number` \| `string` | `undefined` | Row gutter override; numbers become `px` (defaults to `space.4`) |
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
| `align` / `justify` | matching modifier class applied |
| `wrap=false` | `no-wrap` class applied |
| Attributes spread | `id` / `aria-*` forwarded to the `<div>` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).