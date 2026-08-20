---
name: Rating
status: implemented
category: forms
frameworks:
  react: v0.20.0
  htmx: v0.18.0
tokens:
  - "color.text"
  - "color.text-muted"
  - "color.warning"
  - "color.surface-hover"
  - "color.outline-primary"
  - "radius.sm"
  - "font.sans"
  - "space.05"
  - "space.1"
  - "transition.fast"

a11y:
  - "Renders a role=\"radiogroup\" with aria-label and aria-readonly (when readOnly); each star is a <button role=\"radio\"> with aria-checked, aria-posinset, aria-setsize, and a localized aria-label."
  - "Roving tabindex: only the focused star has tabindex=0; the rest are -1."
  - "Keyboard: ArrowRight/ArrowUp move to and set the next star (up to Stars); ArrowLeft/ArrowDown move to the previous (down to 1); Space/Enter select via native button click."
  - "The clear button has a localized aria-label; it is hidden when readOnly."
  - "Disabled state sets tabindex=-1, aria-disabled=true, and removes pointer events."
---

# Rating

Star rating input with optional clear (RadzenRating parity). Integer rating
from 0..Stars with keyboard support.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `Value` | `number` | `0` | Current rating (0 = none). |
| `stars` / `Stars` | `number` | `5` | Total stars rendered. |
| `readOnly` / `ReadOnly` | `boolean` | `false` | Readonly: hides clear, disables interaction, sets aria-readonly. |
| `disabled` / `Disabled` | `boolean` | `false` | Disables the control. |
| `ariaLabel` / `AriaLabel` | `string` | `"Rating"` | Radiogroup aria-label. |
| `clearLabel` / `ClearLabel` | `string` | `"Clear"` | Clear button aria-label. |
| `rateLabel` / `RateLabel` | `string` | `"Rate"` | Per-star aria-label template (`{label} {index}`). |
| `tabIndex` / `TabIndex` | `number` | `0` | Focused star tabindex. |

## Events

| Event | Fires when |
|---|---|---|
| `onChange` / `onValueChange` | Value changes on click, clear, or arrow-key selection. |

## Keyboard

See a11y block above.

## Behavior

- Clicking star *i* sets the value to *i*; clicking the clear button sets it to 0.
- Filled stars use the primary color; empty stars use the secondary color (outline style); the clear icon is a ban glyph.
- Focus follows the value: after arrow selection, focus moves to the newly selected star.
- Integer-only (no half stars) — Radzen parity.