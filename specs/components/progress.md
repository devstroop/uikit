---
name: Progress
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "radius.full"
  - "color.surface-hover"
  - "transition.base"
  - "ease.out"
  - "color.primary"
  - "color.success"
  - "color.warning"
  - "color.danger"
  - "transition.slow"
a11y:
  - "Container carries role=\"progressbar\" with aria-valuemin=\"0\", aria-valuemax, and aria-valuenow (the raw value rounded and clamped to [0, max]).\""
  - "aria-valuenow is omitted when indeterminate, matching the ARIA pattern for unknown progress."
  - "Component is non-interactive and not focusable (no keyboard or focus-visible handling)."
  - "Tone fill is a non-text visual indicator; the fill color on the track background is not a text pair (3:1 non-text contrast target applies)."
---

# Progress

Displays determinate or indeterminate progress as a track-and-bar indicator.
Designed for loading states, uploads, and multi-step tasks.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Current value; bar width is clamped to `0..100%` of `max` |
| `max` | `number` | `100` | Maximum value; `0` yields an empty bar |
| `tone` | `primary` \| `success` \| `warning` \| `danger` | `primary` | Fill color tier |
| `indeterminate` | `boolean` | `false` | Animated sliding bar with no numeric state |

All remaining props are forwarded to the native `<div>` (`className`, `id`,
...). The component is a plain function component (not `forwardRef`d).

## Behavior

- DOM: `div[role="progressbar"] > div.bar`. Width of `.bar` is set inline to
  `(value / max) * 100` clamped to `[0, 100]`; `aria-valuenow` is
  `Math.round(value)` **unclamped**.
- Tones map to fill backgrounds: primary, success, warning, danger.
- Indeterminate: `.bar` fixed at 40% width, animated
  `translateX(-100%) → 350%` loop using the slow transition.
- Track is 6px tall, full width, `radius.full`, with `surface-hover` fill;
  bar transitions width on `transition.base` / `ease.out`.

## Keyboard

None — the element is not focusable and exposes no keyboard interaction.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with value/max | `role="progressbar"` with `aria-valuenow=40`, `aria-valuemin=0`, `aria-valuemax=100` |
| "Clamps value to the max" | `aria-valuenow` is `100` (clamped to max) |
| Indeterminate | no `aria-valuenow`, `indeterminate` class applied |
| Tone | `tone="success"` adds `success` class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
