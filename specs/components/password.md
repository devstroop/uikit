---
name: Password
status: implemented
category: forms
frameworks:
  react: v0.15.0
  htmx: v0.13.0
tokens:
  - "color.border-strong"
  - "radius.md"
  - "radius.full"
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
  - "Renders a native <input type=\"password\"> inside a wrapper; the input keeps native semantics (label association, autofill hints, form submission)."
  - "The visibility toggle is a native <button type=\"button\"> with a dynamic accessible name ('Show password'/'Hide password') and aria-pressed mirroring the visible state."
  - "While visible the value is editable text; the toggle returns the field to password masking (type=password) so the value is never left readable by default."
  - "Focus indicators: :focus-visible draws the input ring (3px outline-primary) and the toggle gets a 2px outline-primary ring with 1px offset."
  - "Disabled state disables both the input and the toggle at opacity 0.55."
---

# Password

Password entry control with a visibility toggle. The toggle is a real
button (keyboard focusable, `aria-pressed` state) that flips the native
input between `type="password"` and `type="text"`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale; padding-right grows to clear the toggle) |
| `invalid` | `boolean` | `false` | Marks the control invalid (danger border) and sets `aria-invalid` |
| `showLabel` | `string` | `"Show password"` | Accessible name of the toggle while the value is masked |
| `hideLabel` | `string` | `"Hide password"` | Accessible name of the toggle while the value is visible |

All remaining props are forwarded to the native `<input>` (which is the
`forwardRef` target; `type` is managed internally). `disabled` disables
both the input and the toggle.

## Behavior

- DOM is `<div class="password"><input …/><button …/></div>`; the input
  carries the input visual language (border-strong, radius.md, surface,
  text, size tiers) with extra right padding so text never runs under the
  toggle.
- The toggle sits absolutely at the right edge (radius.full, circular),
  `height: calc(100% - 8px)` so it scales with every size tier; glyphs are
  the eye / eye-off icons at `text-muted`, hovering to `text` on
  `surface-hover`.
- Toggling sets `aria-pressed`, swaps the accessible name between
  `showLabel`/`hideLabel`, and shows the eye-off glyph while the value is
  readable (state mirror).
- Invalid state: `color.danger` border plus a 25% danger `color-mix` halo,
  applied both at rest and on `:focus-visible`; `:disabled` renders at
  `opacity 0.55`.

## Keyboard

The input behaves like a native password input (masked entry). The toggle
is a native button: Enter/Space activate it and it is reachable in tab
order right after the input. `:focus-visible` rings are the only focus
indicators.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a masked input | native input with `type="password"` and an accessible name |
| Toggle initial state | button named `Show password`, `aria-pressed="false"` |
| Toggle interaction | click flips input to `type="text"`, sets `aria-pressed="true"` and names the button `Hide password`; second click restores masking |
| Size + className | `lg` class and custom class merged onto the input |
| Invalid state | `aria-invalid="true"` and `invalid` class only when `invalid` |
| Disabled | input and toggle both `disabled` |
| Forwarded attributes | `placeholder` etc. reach the native input |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).