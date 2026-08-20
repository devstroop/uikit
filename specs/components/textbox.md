---
name: Textbox
status: implemented
category: forms
frameworks:
  react: v0.15.0
  htmx: v0.13.0
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
  - "Renders a native <input type=\"text\">, so all native semantics (text entry, label association via htmlFor/id, form submission) apply; remaining InputHTMLAttributes are forwarded."
  - "aria-invalid is set to \"true\" when `invalid` is true (and omitted otherwise), giving screen readers a state cue."
  - "Keyboard focus indicator: :focus-visible draws a 3px --dt-color-outline-primary ring plus primary border (no :focus outline removal without the ring)."
  - "Placeholder text uses color.text-muted (>= 4.5:1 on color.surface per theme contrastRules)."
  - "Text on surface >= 4.5:1 (color.text on color.surface); disabled state lowers opacity to 0.55."
---

# Textbox

Single-line text entry control with size and validation states — the base
text input of the input family (password, mask, numeric build on this
visual language). Defaults to `type="text"`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale: `control.height-xs` 20px → `xl` 52px in default theme) |
| `invalid` | `boolean` | `false` | Marks the control invalid (danger border) and sets `aria-invalid` |
| ... | `InputHTMLAttributes<HTMLInputElement>` (minus `size`) | — | Forwarded to the native input (`type` defaults to `text`, `placeholder`, `disabled`, `aria-*`, ...) |

The component is `forwardRef`d to `HTMLInputElement`.

## Behavior

- Sizes set `height` from the `control.height-{tier}` scale with the
  tier−1 `font.size` pairing: `xs` 12px text, `sm` 12px, `md` 14px,
  `lg` 16px, `xl` 18px; horizontal padding is 10/10/12/14/16px and
  vertical padding 6/6/8/10/12px. Default `type` is `text`.
- Invalid state: `color.danger` border plus a 25% danger `color-mix` halo,
  applied both at rest and on `:focus-visible`.
- `:focus-visible` replaces the default outline with a primary border +
  `color.outline-primary` ring; `:disabled` renders at `opacity 0.55` with
  `cursor: not-allowed`.
- Full-width (`width: 100%`, `min-width: 0`) block-level input with
  `border-strong`, `radius.md`, and `surface` background. `min-width: 0`
  lets the control shrink inside flex/grid rows.

## Keyboard

Native input semantics: text entry, cursor movement, and label activation
behave exactly like the underlying `<input>`. The `:focus-visible` ring is
the keyboard focus indicator; pointer focus shows no ring.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a native input with an accessible name | `role="textbox"` with accessible name from `aria-label` |
| Default type/size | `type="text"` and `md` size class applied; `size="lg"` applies the `lg` class |
| Invalid state | `aria-invalid="true"` only when `invalid` (omitted otherwise); `invalid` class applied |
| Forwarded attributes | `type`, `placeholder`, `disabled` reach the native input |
| Custom `className` | merged onto the input |
| Text entry | typing fires `onChange`; a disabled input ignores typing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).