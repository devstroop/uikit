---
name: Timespanpicker
status: implemented
category: forms
frameworks:
  react: v0.20.0
  htmx: v0.18.0
tokens:
  - "color.surface"
  - "color.surface-hover"
  - "color.border"
  - "color.border-strong"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-hover"
  - "color.primary-fg"
  - "color.danger"
  - "color.outline-primary"
  - "radius.md"
  - "radius.sm"
  - "font.sans"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "font.weight-medium"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
  - "space.2"
  - "space.3"
  - "space.4"
  - "transition.fast"
  - "shadow.lg"
  - "z.popover"

a11y:
  - "Renders a native <input type=\"text\"> plus a trigger button; the input is label-associable via htmlFor/id and keeps aria-label/placeholder."
  - "The trigger button carries aria-haspopup=\"dialog\", aria-expanded, aria-controls, and a localized aria-label."
  - "The popup is a <dialog> with role=\"dialog\" and aria-label; each unit field (days/hours/minutes/seconds) is wrapped in a <label> with a visible unit label."
  - "Keyboard: Enter toggles the popup; Escape closes it and refocuses the input; unit fields are numeric steppers (arrow up/down ±step, Home/End min/max)."
  - "Disabled state removes pointer events and sets aria-disabled on the trigger; invalid sets aria-invalid on the input."
---

# Timespanpicker

Time-span selection with an input + numeric unit panel (RadzenTimeSpanPicker
parity). Each unit is a stepper with optional sign handling.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `Value` | `string` | `""` | Bound value as ISO 8601 duration (`PT...`) or `HH:MM:SS`; empty means zero/unset. |
| `min` / `Min` | `string` | `"-10675199.02:48:05"` | Earliest value (inclusive). |
| `max` / `Max` | `string` | `"10675199.02:48:05"` | Latest value (inclusive). |
| `step` / `Step` | `string` | `"1"` | Step per unit tick (seconds by default; `step` applies to the smallest visible unit). |
| `precision` / `Precision` | `"second" \| "minute" \| "hour" \| "day"` | `"second"` | Smallest unit shown in the panel. |
| `showDays` / `ShowDays` | `boolean` | `true` | Show the days field. |
| `showHours` / `ShowHours` | `boolean` | `true` | Show the hours field. |
| `showMinutes` / `ShowMinutes` | `boolean` | `true` | Show the minutes field. |
| `showSeconds` / `ShowSeconds` | `boolean` | `true` | Show the seconds field. |
| `allowClear` / `AllowClear` | `boolean` | `false` | Show a clear button when a value is present. |
| `disabled` / `Disabled` | `boolean` | `false` | Disables input, button, and panel. |
| `readOnly` / `ReadOnly` | `boolean` | `false` | Readonly input; panel still opens on click. |
| `invalid` / `Invalid` | `boolean` | `false` | Marks the control invalid (red border + aria-invalid). |
| `placeholder` / `Placeholder` | `string` | `""` | Input placeholder. |
| `size` / `Size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Control size class. |
| `inline` / `Inline` | `boolean` | `false` | Render the panel inline instead of in a popup. |
| `tabIndex` / `TabIndex` | `number` | `0` | Input tabindex. |

## Events

| Event | Fires when |
|---|---|---|
| `onChange` / `onValueChange` | Value changes (panel edit confirmed, input parsed, cleared). |
| `onOpen` / `onClose` | Popup opens / closes. |

## Keyboard

See a11y block above.

## Behavior

- Input parses on blur/Enter; unparseable text with a nullable value clears it, otherwise it reverts.
- The panel edits are staged; closing without confirmation (outside click/Escape) reverts to the committed value.
- Unit fields clamp to min/max and per-unit maxima (hours ≤ 23, minutes/seconds ≤ 59); negative values are shown as a leading minus and stepped from zero.
- Inline mode renders only the panel with the value's units pre-filled.