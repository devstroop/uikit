---
name: Slider
status: implemented
category: forms
frameworks:
  react: v0.20.0
  htmx: v0.18.0
tokens:
  - "color.border"
  - "color.primary"
  - "color.primary-hover"
  - "color.outline-primary"
  - "radius.full"
  - "font.sans"
  - "shadow.sm"

a11y:
  - "Each handle is a role=\"slider\" with aria-valuemin, aria-valuemax, aria-valuenow, aria-orientation, a localized aria-label, and aria-disabled."
  - "Roving tabindex on handles: only the focused handle has tabindex=0; the rest are -1."
  - "Keyboard: ArrowLeft/ArrowDown decrement by step, ArrowRight/ArrowUp increment; Home jumps to Min, End to Max; range mode adjusts each handle's own bound and clamps min ≤ max."
  - "The track itself is not interactive; only the handles are — pointer drag uses pointer events with touch-action none."
  - "Disabled state sets tabindex=-1, aria-disabled=true, and removes pointer events."
---

# Slider

A track with draggable handle(s) for numeric input (RadzenSlider parity).
Single handle by default; `range` mode renders two handles with a filled
track between them.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `Value` | `number` | `0` | Current value (single mode). |
| `valueMin` / `valueMax` / `ValueMin` / `ValueMax` | `number` | `0` / `100` | Range-mode values; when `range`, `Value` is ignored and the two bounds are bound individually. |
| `min` / `Min` | `number` | `0` | Minimum value (inclusive). |
| `max` / `Max` | `number` | `100` | Maximum value (inclusive). |
| `step` / `Step` | `number` | `1` | Step increment (0 disables stepping / free drag). |
| `range` / `Range` | `boolean` | `false` | Two-handle range mode. |
| `orientation` / `Orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Track orientation. |
| `disabled` / `Disabled` | `boolean` | `false` | Disables the control. |
| `label` / `Label` | `string` | `"Value"` | Handle aria-label. |
| `minLabel` / `minLabel` / `MinLabel` | `string` | `"Min"` | Min handle aria-label (range mode). |
| `maxLabel` / `MaxLabel` | `string` | `"Max"` | Max handle aria-label (range mode). |
| `tabIndex` / `TabIndex` | `number` | `0` | Handle tabindex. |

## Events

| Event | Fires when |
|---|---|---|
| `onChange` / `onValueChange` | Value changes on drag release or keyboard adjust (not continuously during drag; `onInput`/`onValueChange` fire continuously while dragging). |
| `onInput` / `onInputChange` | Continuous value updates during drag / keyboard repeat. |

## Keyboard

See a11y block above.

## Behavior

- The handle position is `((value - min) * 100) / (max - min)`; vertical orientation uses the inverse for bottom-up fill.
- Values are clamped to min/max; range mode clamps min ≤ max (dragging the min handle past the max clamps to max, and vice versa).
- The filled portion of the track uses the primary color in single mode and the secondary-lighter color between handles in range mode.
- The component is display-only (no numeric input box) — Radzen parity.