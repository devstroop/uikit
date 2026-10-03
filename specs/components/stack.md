---
name: Stack
status: implemented
category: layout
frameworks:
  react: v0.13.0
  htmx: v0.11.0
tokens:
  - "space.1"
  - "space.2"
  - "space.3"
  - "space.4"
  - "space.5"
a11y:
  - "Renders a plain <div>; purely a layout container — no semantic role, no aria, no keyboard behavior."
  - "Children remain in source order for screen readers regardless of visual order."
---

# Stack

Radzen `RadzenStack` parity. Flex stack of items in one direction with an
optional wrap, gap, alignment, and justification.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `"horizontal"` \| `"vertical"` | `"vertical"` | Direction of the stack (`flex-direction`) |
| `reverse` | `boolean` | `false` | Reverse the stack order (row-reverse / column-reverse) |
| `wrap` | `boolean` \| `"nowrap"` \| `"wrap"` \| `"wrap-reverse"` | `true` | Wrap mode (`flex-wrap`) |
| `gap` | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `number` \| `string` | `16` | Spacing between items; tiers map to `--dx-space-1..5`, numbers become `px`, other strings pass through (CSS default `space.4`) |
| `align` | `start` \| `center` \| `end` \| `stretch` \| `baseline` \| `normal` | `undefined` | Cross-axis alignment (`align-items`) |
| `justify` | `start` \| `center` \| `end` \| `between` \| `around` \| `evenly` \| `normal` | `undefined` | Main-axis distribution (`justify-content`) |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLDivElement>` are spread onto the `<div>`.

## Behavior

- DOM: `div[class~=dx-stack]` with `display: flex; flex-direction: column;
  gap: var(--dx-space-4)` — the default gap (`space.4`, 16px) is CSS-level, so a
  bare stack spaces itself with no gap prop (Radzen `--rz-gap: 1rem`
  parity); gap modifier classes override it.
- Orientation/reverse compile to `dx-stack--row`, `--row-reverse`,
  `--column`, `--column-reverse`; wrap adds `--nowrap` / `--wrap-reverse`;
  gap tiers map to `--gap-xs` … `--gap-xl` (4, 8, 12, 16, 20 px).
- Align/justify map to `--align-*` / `--justify-*` modifier classes
  (`start`, `center`, `end`, `between`, `around`, `evenly`, `normal`).
- React renders a single `<div>`; htmx ships `stack.html` reference markup
  plus `stack.css` modifier classes.
- No JS, no `data-*` hooks.

## Keyboard

Not a focusable or interactive element.

## Accessibility

- "Renders a plain `<div>`; purely a layout container — no semantic role, no aria, no keyboard behavior."
- "Children remain in source order for screen readers regardless of visual order."

## Tests

| Suite | File | Status |
|---|---|---|
| react | `lib/components/Stack/Stack.test.tsx` | passing |
| htmx | reference markup only (presentational) | passing |