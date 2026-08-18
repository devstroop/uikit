---
name: Input
status: implemented
category: forms
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "color.border-strong"
  - "radius.md"
  - "color.surface"
  - "color.text"
  - "font.sans"
  - "transition.fast"
  - "color.text-muted"
  - "color.primary"
  - "color.focus"
  - "color.danger"
  - "font.size-xs"
  - "control.height"
  - "font.size-sm"
  - "font.size-md"
a11y:
  - "Renders a native <input>, so all native semantics (text entry, label association via htmlFor/id) apply; remaining InputHTMLAttributes are forwarded."
  - "aria-invalid is set to \"true\" when `invalid` is true (and omitted otherwise), giving screen readers a state cue."
  - "Keyboard focus indicator: :focus-visible draws a 3px --se-color-focus ring plus primary border (no :focus outline removal without the ring)."
  - "Placeholder text uses color.text-muted (>= 4.5:1 on color.surface per theme contrastRules)."
  - "Text on surface >= 4.5:1 (color.text on color.surface); disabled state lowers opacity to 0.55."
---

# Input

Text-entry control with size and validation states, wrapping the native
`<input>` element.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `sm` \| `md` \| `lg` | `md` | Density tier (`sm` 6/10px padding, `md` 8/12px + control height, `lg` 10/16px + control-height + 8px) |
| `invalid` | `boolean` | `false` | Marks the control invalid (danger border) and sets `aria-invalid` |
| ... | `InputHTMLAttributes<HTMLInputElement>` (minus `size`) | — | Forwarded to the native input (`type`, `value`, `placeholder`, `disabled`, `aria-*`, ...) |

The component is `forwardRef`d to `HTMLInputElement`.

## Behavior

- `size="md"` uses `height: var(--se-control-height)` with `font.size-sm`;
  `size="sm"` uses tighter padding with `font.size-xs`; `size="lg"` uses
  `height: calc(var(--se-control-height) + 8px)` with `font.size-md`.
  Default `type` is
  whatever the consumer passes (no default set).
- Invalid state: `color.danger` border plus a 25% danger `color-mix` halo,
  applied both at rest and on `:focus-visible`.
- `:focus-visible` replaces the default outline with a primary border +
  `color.focus` ring; `:disabled` renders at `opacity 0.55` with
  `cursor: not-allowed`.
- Full-width (`width: 100%`) block-level input with `border-strong`,
  `radius.md`, and `surface` background.

## Keyboard

Native input semantics: text entry, cursor movement, and label activation
behave exactly like the underlying `<input>`. The `:focus-visible` ring is
the keyboard focus indicator; pointer focus shows no ring.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a native input with an accessible name | `role="textbox"` with accessible name from `aria-label` |
| Default size | `md` size class applied; `size="sm"` applies the `sm` class |
| Invalid state | `aria-invalid="true"` only when `invalid` (omitted otherwise); `invalid` class applied |
| Forwarded attributes | `type`, `placeholder`, `disabled` reach the native input |
| Custom `className` | merged onto the input |
| Text entry | typing fires `onChange`; a disabled input ignores typing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
