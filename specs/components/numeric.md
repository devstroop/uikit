---
name: Numeric
status: implemented
category: forms
frameworks:
  react: v0.18.0
  htmx: v0.16.0
tokens:
  - "color.border-strong"
  - "radius.md"
  - "radius.sm"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "font.sans"
  - "transition.fast"
  - "color.text-muted"
  - "color.primary"
  - "color.danger"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
  - "color.outline-primary"

a11y:
  - "Renders a native <input type=\"text\" inputmode=\"decimal\"> (no native spinner), so the value can be read and entered directly; label association applies."
  - "Stepper buttons are native <button type=\"button\"> elements with accessible names (default 'Increment'/'Decrement', overridable), reachable in tab order."
  - "ArrowUp/ArrowDown step the value and prevent the default caret move, so keyboard users get the same clamp/snap behavior as the buttons."
  - "Focus indicators: :focus-visible draws the input ring (3px outline-primary) and each stepper a 2px outline-primary ring."
  - "Disabled state disables the input and both steppers at opacity 0.55."
---

# Numeric

Number entry with increment/decrement stepper buttons and keyboard arrow
support. The value is clamped to `min`/`max` and snapped to the `step`
grid (anchored at `min`, matching native number-input stepping).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale; padding-right grows to clear the steppers) |
| `invalid` | `boolean` | `false` | Marks the control invalid (danger border) and sets `aria-invalid` |
| `value` | `number \| null` | — | Controlled numeric value (`null` = empty) |
| `defaultValue` | `number \| null` | — | Initial value (uncontrolled mode) |
| `onChange` | `(value: number \| null) => void` | — | Fires with the parsed/clamped number on every commit |
| `min` | `number` | — | Lower clamp (no clamp when omitted) |
| `max` | `number` | — | Upper clamp (no clamp when omitted) |
| `step` | `number` | `1` | Increment/decrement amount; the value snaps to `min + n * step` on stepping and blur |
| `incrementLabel` / `decrementLabel` | `string` | `"Increment"` / `"Decrement"` | Accessible names of the stepper buttons |

The component is `forwardRef`d to `HTMLInputElement`. Remaining input
attributes (id, name, aria-*, disabled, placeholder, onKeyDown, ...) are
forwarded; `disabled` also disables both steppers.

## Behavior

- DOM is `<div class="numeric"><input …/><button up/><button down/></div>`;
  the input carries the textbox visual language with extra right padding;
  the steppers are absolutely positioned chevron buttons (radius.sm,
  `text-muted`, hovering to `text` on `surface-hover`).
- Steppers and ArrowUp/ArrowDown compute `min + ceil((value − min)/step)·step`
  for up and `min + floor((value − min)/step)·step` for down, then clamp to
  `min`/`max` — the same stepping as a native number input (3 → 5 with
  `step=5`, never 8).
- Typing sanitizes to digits, one leading `-`, one `.`; the string stays
  editable while typing. Blur parses, snaps to the nearest `step` multiple
  of `min`, clamps, and commits; an empty field commits `null`/empty.
- Invalid state: `color.danger` border plus a 25% danger `color-mix` halo;
  `:disabled` renders at `opacity 0.55`.

## Keyboard

ArrowUp/ArrowDown step the value (default prevented, so the caret does not
move); all other keys keep native input semantics. The steppers are native
buttons (Enter/Space). `:focus-visible` rings are the only focus
indicators.

## Tests

| Scenario | Assertion |
|---|---|
| Renders input + steppers | `textbox` with `inputmode="decimal"` plus `Increment`/`Decrement` buttons |
| Increment/clamp | up goes 3 → 4 → 5 and stays 5 at `max=5` |
| Decrement/clamp | down stays 0 at `min=0` |
| Step grid | with `step=5`, up from 0 → 5 → 10; up from 3 → 5 |
| Arrows | ArrowUp/ArrowDown step and prevent the default |
| Typing sanitize | letters dropped; `12.5` stays editable |
| Blur clamp/snap | 99 with `max=5` blurs to 5; 2.6 with `step=1` blurs to 3 |
| Controlled mode | `value`/`onChange` round-trip numeric values |
| Disabled | input and both steppers disabled; typing ignored |
| Size/invalid/attrs | size + invalid classes, `aria-invalid`, placeholder forwarded |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).