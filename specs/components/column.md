---
name: Column
status: implemented
category: layout
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens: []
a11y:
  - "Renders a plain <div>; purely a layout container — no semantic role, no aria, no keyboard behavior."
  - "Grid widths are visual-only; screen readers announce children in source order."
---

# Column

Twelve-column grid cell for use inside a `Row`. Width and offset are
fractions of the row width (`size / 12`), with optional responsive tiers
`sm` / `md` / `lg` / `xl` at the Radzen breakpoints 576 / 768 / 992 / 1200px.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `1`–`12` | `undefined` | Base (mobile-first) width in columns |
| `offset` | `0`–`11` | `undefined` | Base left offset in columns |
| `sizeSm` / `offsetSm` | as above | `undefined` | Tier ≥ 576px |
| `sizeMd` / `offsetMd` | as above | `undefined` | Tier ≥ 768px |
| `sizeLg` / `offsetLg` | as above | `undefined` | Tier ≥ 992px |
| `sizeXl` / `offsetXl` | as above | `undefined` | Tier ≥ 1200px |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLDivElement>` are spread onto the `<div>`.

## Behavior

- DOM: `div[class~=dt-column]`; `width: calc(size / 12 * 100%)`,
  `margin-left: calc(offset / 12 * 100%)`.
- No `size` renders `flex: 1` (fills remaining space).
- Responsive tiers compile to `@media (min-width: …)` rules; the base
  classes apply below the first tier.
- Grid math is not token-driven (pure CSS arithmetic); the component
  declares no tokens (reference markup cells use `currentColor` borders,
  not theme tokens).

## Keyboard

Not keyboard- or focus-relevant: plain container, never interactive.

## Tests

| Scenario | Assertion |
|---|---|
| Default | `<div>` with column class, `flex: 1` |
| `size` | `width: calc(6 / 12 * 100%)` for `size=6` |
| `offset` | `margin-left: calc(2 / 12 * 100%)` for `offset=2` |
| Responsive | tier classes applied only for the provided props |
| Attributes spread | `id` / `aria-*` forwarded to the `<div>` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).