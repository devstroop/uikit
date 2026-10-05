---
name: AutoGrid
status: implemented
category: layout
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "space.3"
a11y:
  - "No semantics of its own: a generic container, so it adds no roles or tab stops."
  - "Content order is DOM order in every viewport width; reflowing tracks never reorders meaning."
---

# AutoGrid

Responsive track grid for card rows, galleries, and dashboards.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `min` | `number` \| `string` | `240` | Minimum track width — px number or any CSS length |
| `gap` | `number` \| `string` | `12` | Gap between tracks — px number or CSS length |
| `visible` | `boolean` | `true` | Render nothing when false |

All remaining props are forwarded to the wrapping `<div>`. The htmx
reference is `.dx-auto-grid`; per-instance minimum via the
`--dx-auto-grid-min` custom property (default 240px).

## Behavior

- Tracks fill the row and wrap (`auto-fit`); a lone track spans full
  width via `min(100%, …)`.
- Default track gap is the `space.3` token; an explicit `gap` prop (or
  inline `gap` in htmx) overrides per instance.
- The `min` prop only sets `--dx-auto-grid-min` — the track math
  follows the prop with no JS measuring.
- Presentational only: no focus, no activation, no JS behavior.

## Keyboard

Not focusable; keyboard behavior is whatever the tracks contain.

## Tests

| Scenario | Assertion |
|---|---|
| Renders children in a grid container | grid class applied |
| Default min | `--dx-auto-grid-min: 240px` |
| Custom `min`/`gap` | custom property / gap applied |
| `visible={false}` | renders nothing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
