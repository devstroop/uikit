---
name: Switch
status: implemented
frameworks:
  react: v0.3.0
tokens:
  - "radius.full"
  - "color.border-strong"
  - "transition.fast"
  - "color.surface"
  - "shadow.sm"
  - "color.primary"
  - "color.focus"
a11y:
  - "Renders a native <input type=\"checkbox\"> with role=\"switch\", preserving native toggle semantics (aria-checked derived from :checked)."
  - "Accessible name must be supplied by the consumer (aria-label or a wrapping <label>)."
  - "Focus-visible ring: 2px outline in --se-color-focus with 2px offset (keyboard-only, :focus-visible)."
  - "Disabled state blocks toggling (native disabled attribute, opacity 0.55)."
  - "Track/thumb are non-text indicators; thumb (color.surface) on track (border-strong unchecked / primary checked) is a non-text contrast pair."
---

# Switch

On/off toggle control for settings and preferences.
A native checkbox input restyled as a sliding switch, keeping form and
accessibility semantics from the platform.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| — | `Omit<InputHTMLAttributes<HTMLInputElement>, "type">` | — | All native input props are accepted (`checked`/`defaultChecked`, `disabled`, `onChange`, `aria-label`, ...) |

`type` is fixed to `"checkbox"` and `role` is fixed to `"switch"`; the
component is `forwardRef`d to the `<input>` element.

## Behavior

- DOM: single `input[type=checkbox][role=switch]`; the thumb is a
  `::before` pseudo-element (hardcoded 16px on a 38x22px track).
- `:checked` — track turns `color.primary` and thumb translates 16px.
- Disabled: `opacity 0.55`, `cursor: not-allowed`, native activation
  suppression.
- Transitions run on `transition.fast`; thumb shadow uses `shadow.sm`.

## Keyboard

Native checkbox semantics with role `switch`: Space toggles when focused;
focus follows document order; the `:focus-visible` outline is the only focus
indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders as a switch input | `role="switch"` with accessible name, `type="checkbox"` |
| Reflects checked state | `defaultChecked` renders as checked (`toBeChecked`) |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
