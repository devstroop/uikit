---
name: Mask
status: implemented
category: forms
frameworks:
  react: v0.18.0
  htmx: v0.16.0
tokens:
  - "color.border-strong"
  - "radius.md"
  - "color.surface"
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
  - "Renders a native <input type=\"text\">, so label association and form semantics apply; the formatted value is plain text and is read by screen readers as typed."
  - "The mask is visible in the control itself (separators are literal characters), so no aria-live region is needed to announce formatting."
  - "aria-invalid is set to \"true\" when `invalid` is true (and omitted otherwise)."
  - "Focus indicator: :focus-visible draws a 3px --dt-color-outline-primary ring plus primary border."
  - "Text on surface >= 4.5:1 (color.text on color.surface); disabled state lowers opacity to 0.55."
---

# Mask

Text input that formats digits as the user types against a format
template — dependency-free. `#` in the mask is a digit placeholder; every
other character is a literal separator (e.g. `(###) ###-####` for phones,
`##/##/####` for dates).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `mask` | `string` | — | Format template: `#` = digit slot, other chars = literal separators |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale) |
| `invalid` | `boolean` | `false` | Marks the control invalid (danger border) and sets `aria-invalid` |
| `value` | `string` | — | Controlled masked value (consumer updates via `onChange`) |
| `defaultValue` | `string` | `""` | Initial masked value (uncontrolled mode) |
| `onChange` | `(value: string) => void` | — | Fires with the formatted masked value on every edit |

The component is `forwardRef`d to `HTMLInputElement`. `formatMasked`
is exported for reuse. Remaining input attributes are forwarded.

## Behavior

- The simple mask model: typing extracts the digits from the raw value and
  re-fills the template `#` slots left to right. Separators appear only
  while more digits remain, so a half-typed phone shows `(123` and a full
  one `(123) 456-7890`.
- Non-digit characters are dropped; characters beyond the last `#` slot
  are ignored (the control never exceeds the mask length).
- Backspace over a literal separator removes the separator and the digit
  before it in one press (so clearing `(123) 456` needs two presses of
  Backspace, one per digit).
- Editing re-formats the whole digit sequence (caret returns to the end) —
  a deliberate trade-off of the simple model.
- Controlled (`value`) and uncontrolled (`defaultValue`) modes behave like
  a native input; `onChange` always delivers the masked value.
- Visual language matches Textbox (border-strong, radius.md, surface,
  text, size tiers, invalid danger ring, disabled 0.55).

## Keyboard

Native text input semantics for typing and navigation; Backspace gets the
separator-aware override above. `:focus-visible` ring is the keyboard
focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a native input | `type="text"` with accessible name |
| Formats as you type | typing `1234567890` into `(###) ###-####` yields `(123) 456-7890` |
| Strips non-digits | typing `ab1cd23` yields `(123` |
| Caps at mask length | typing 13 digits yields the 10-digit mask only |
| Backspace over separator | Backspace removes the separator and the digit before it |
| Controlled mode | `value`/`onChange` round-trip the masked value |
| Size/invalid/attrs | size + invalid classes, `aria-invalid`, disabled forwarded |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).