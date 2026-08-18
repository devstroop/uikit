---
name: Stat
status: implemented
category: data-display
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "font.sans"
  - "space.2"
  - "font.size-xs"
  - "font.weight-medium"
  - "color.text-muted"
  - "font.size-lg"
  - "font.weight-bold"
  - "color.text"
  - "color.text-success"
  - "color.text-danger"
a11y:
  - "Non-interactive, not focusable; no keyboard or focus-visible behavior."
  - "label and value are plain text (no aria or semantic pairing like <dl>)."
  - "Text contrast >= 4.5:1 (color.text-muted on color.bg for label/hint, color.text on color.bg for value, text-{tone} on color.bg for deltas)."
---

# Stat

Displays a metric — label, value, optional delta, and optional hint — for
dashboards and summary panels.
Non-interactive read-only composition of text slots.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — (required) | Short uppercase caption above the value |
| `value` | `ReactNode` | — (required) | The metric itself |
| `delta` | `ReactNode` | `undefined` | Trend indicator rendered beside the value |
| `deltaTone` | `success` \| `danger` \| `neutral` | `neutral` | Color of the delta |
| `hint` | `ReactNode` | `undefined` | Context line below the value row |

All remaining props are forwarded to the outer `<div>` (`className`, `id`,
...). The component is `forwardRef`d.

## Behavior

- DOM slots: `div.stat > div.label`, `div.row > div.value (+ div.delta)`,
  optional `div.hint`.
- `delta` renders only when non-null; tone classes map to colors — success,
  danger, neutral (`text-muted`).
- Label is uppercased with `0.04em` letter-spacing, `size-xs` /
  `weight-medium`, `text-muted`; value is `size-lg` / `weight-bold`,
  `color.text`; hint is `size-xs`, `text-muted`.
- Layout: flex column, `space.2` gap between label, row, and hint.

## Keyboard

None — the element is not focusable and exposes no keyboard interaction.

## Tests

| Scenario | Assertion |
|---|---|
| Label + value | both texts are rendered |
| ReactNode value | rendered as-is |
| Delta | rendered only when provided; default `neutral` tone class applied |
| Delta tones | `success` / `danger` tone classes applied |
| Hint | rendered only when provided |
| DOM slots | label and hint are direct children of the root; value and delta share the row container |
| Forwarded props | `className`, `data-*` reach the outer div |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
