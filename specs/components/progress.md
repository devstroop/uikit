---
name: Progress
status: implemented
category: feedback
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "radius.full"
  - "color.surface-hover"
  - "transition.base"
  - "ease.out"
  - "color.primary"
  - "color.success"
  - "color.warning"
  - "color.danger"
  - "motion.sweep"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
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
| `variant` | `"linear"` \| `"circular"` | `"linear"` | Shape (Radzen `ProgressBarCircular` parity) |
| `size` | `number` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Circular diameter in px, or a shared `ComponentSize` tier (`control.height-{tier}`, default 36px); linear tiers map to track thickness 4/5/6/8/10px |

All remaining props are forwarded to the native `<div>` for linear
(`className`, `id`, ...). The circular variant forwards only the common
attribute subset `id` / `style` / `aria-label` / `aria-labelledby` (SVG
element typing); other HTML attributes are not forwarded on the ring. The
component is a plain function component (not `forwardRef`d).

## Behavior

- Linear DOM: `div[role="progressbar"] > div.bar`. Width of `.bar` is set
  inline to `(value / max) * 100` clamped to `[0, 100]`; `aria-valuenow` is
  `Math.round(value)` **unclamped**.
- Circular DOM: `svg[role="progressbar"]` with a fixed normalized
  `viewBox="0 0 24 24"` (CSS scales the box via `control.height-{tier}` or
  inline px), a `circle` track (`surface-hover`) plus a `circle` fill
  stroked in the tone color, rotated `-90deg` so progress starts at
  12 o'clock.
- Circular sizes: the default is the `md` tier (`control.height-md`, 36px
  in the default theme) with the full `xs..xl` set — `circular-{tier}`
  classes in react, `se-progress--{tier}` modifiers in htmx. Numeric sizes
  remain available for pixel-perfect geometry (react `size` prop; htmx
  servers may set `width`/`height` attributes with a matching
  `viewBox="0 0 <size> <size>"`).
- Circular geometry (normalized viewBox units): stroke width `2`; the
  fill circle's `stroke-dasharray` is the circumference
  (`2π · 10.5`) and `stroke-dashoffset` is
  `circumference · (1 − value/max)` — computed in JS (react) or inline by
  the server template (htmx, formula documented in the reference markup).
  The stroke stays proportional at any diameter because box and geometry
  share the same 24-unit coordinate space.
- Tones map to fill backgrounds (linear) / stroke (circular): primary,
  success, warning, danger.
- Indeterminate: linear keeps the 40% sliding bar; circular rotates the
  ring continuously.
- Track is 6px tall by default (`control.height` linear scale: 4/5/6/8/10px
  for xs/xl), full width, `radius.full`, with `surface-hover` fill; bar
  transitions width on `transition.base` / `ease.out`; circular fill
  transitions `stroke-dashoffset` on the same easing.

## Keyboard

None — the element is not focusable and exposes no keyboard interaction.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with value/max | `role="progressbar"` with `aria-valuenow=40`, `aria-valuemin=0`, `aria-valuemax=100` |
| "Clamps value to the max" | `aria-valuenow` is `100` (clamped to max) |
| Indeterminate | no `aria-valuenow`, `indeterminate` class applied |
| Tone | `tone="success"` adds `success` class |
| Circular | `role="progressbar"` on an `<svg>` with tone class and `aria-valuenow` |
| Circular geometry | fill circle has inline `stroke-dasharray` (circumference) and `stroke-dashoffset` (remaining arc) |
| Circular indeterminate | ring rotates (indeterminate class) |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
