---
name: Datepicker
status: implemented
category: forms
frameworks:
  react: v0.20.0
  htmx: v0.18.0
tokens:
  - "color.surface"
  - "color.surface-hover"
  - "color.border"
  - "color.border-primary"
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
  - "space.05"
  - "space.2"
  - "space.3"
  - "space.4"
  - "transition.fast"
  - "shadow.lg"
  - "z.popover"

a11y:
  - "Renders a native <input type=\"text\"> plus a trigger button, so input semantics and label association via htmlFor/id apply; the calendar popup is a <dialog> with role=\"dialog\" and aria-label."
  - "The trigger button carries aria-haspopup=\"dialog\", aria-expanded, aria-controls, and a localized aria-label; the input keeps its own aria-label/placeholder."
  - "Day cells are gridcells in a role=\"grid\" with aria-selected and aria-disabled; the focused day is tracked with roving tabindex (tabindex=0 only on the focused cell)."
  - "Prev/next month buttons, time fields, and the OK/clear buttons all carry aria-labels."
  - "Keyboard: Alt+ArrowDown opens the popup; Enter toggles it; Escape closes and refocuses the input; arrows navigate days (Left/Right ±1 day, Up/Down ±7 days, Home/End week ends, PageUp/PageDown ±1 month, Shift+PageUp/PageDown ±1 year); Enter/Space selects."
  - "Disabled state removes pointer events and sets aria-disabled on the trigger; invalid state sets aria-invalid on the input."
---

# Datepicker

Date selection with an input + calendar popup (RadzenDatePicker parity).
Supports optional time panel (hours/minutes/seconds), min/max range
restriction, clear button, and a standalone inline calendar.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `Value` | `string` (ISO `YYYY-MM-DD[ HH:mm[:ss]]`) | `""` | Bound value; empty means no date selected. |
| `format` / `Format` | `string` | `"yyyy-MM-dd"` | Input/display format (JS token subset: `yyyy`, `yy`, `MM`, `M`, `dd`, `d`, `HH`, `H`, `mm`, `m`, `ss`, `s`, `tt`). |
| `min` / `Min` | `string` (ISO date) | `""` | Earliest selectable date (inclusive). |
| `max` / `Max` | `string` (ISO date) | `""` | Latest selectable date (inclusive). |
| `showTime` / `ShowTime` | `boolean` | `false` | Show the time panel below the calendar; day selection then stages the date and time is confirmed on OK. |
| `showButton` / `ShowButton` | `boolean` | `true` | Show the calendar trigger button. When false, clicking the input opens the popup. |
| `showInput` / `ShowInput` | `boolean` | `true` | Show the text input. |
| `allowClear` / `AllowClear` | `boolean` | `false` | Show a clear button when a value is present. |
| `disabled` / `Disabled` | `boolean` | `false` | Disables input, button, and calendar. |
| `readOnly` / `ReadOnly` | `boolean` | `false` | Readonly input; calendar still opens on click. |
| `invalid` / `Invalid` | `boolean` | `false` | Marks the control invalid (red border + aria-invalid). |
| `placeholder` / `Placeholder` | `string` | `""` | Input placeholder. |
| `size` / `Size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Control size class `--xs/--sm/--md/--lg/--xl`. |
| `inline` / `Inline` | `boolean` | `false` | Render the calendar inline instead of in a popup (no input/button). |
| `locale` / `Locale` | `string` | `"en-US"` | Locale for month/day names and first day of week. |
| `disabledDates` / `DisabledDates` | `string[]` | `[]` | Exact dates to disable (ISO). |
| `tabIndex` / `TabIndex` | `number` | `0` | Input tabindex. |

## Events

| Event | Fires when |
|---|---|---|
| `onChange` / `onValueChange` | Value changes (day picked, time confirmed, input parsed, cleared). |
| `onOpen` / `onClose` | Popup opens / closes. |

## Keyboard

See a11y block above.

## Behavior

- Input is a plain text input (not masked); the value is parsed on blur/Enter using `format`; unparseable text with a nullable value clears it, otherwise it reverts to the formatted value.
- Min/max and disabledDates cells render `aria-disabled="true"` and are not selectable; the focused day never lands on a disabled cell.
- When `showTime`, picking a day stages the date; the OK button commits date+time. When `showTime=false`, picking a day commits immediately and closes.
- The popup closes on outside click, Escape, or Tab; focus returns to the input.
- Inline mode renders only the calendar with the value's month/year pre-selected.