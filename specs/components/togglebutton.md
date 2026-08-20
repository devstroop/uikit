---
name: Togglebutton
status: implemented
category: actions
frameworks:
  react: v0.17.0
  htmx: v0.15.0
tokens:
  - "color.border-strong"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.primary"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.md"
  - "font.sans"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.weight-medium"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "transition.fast"
  - "space.2"

a11y:
  - "Renders a semantic <button> with aria-pressed reflecting the state (true/false)."
  - "Pressed state uses the primary fill with primary-fg text; unpressed uses surface with border-strong."
  - "Keyboard-only focus ring via :focus-visible (outline-primary)."
  - "Text-on-fill contrast >= 4.5:1 (primary-fg on primary; text on surface)."
  - "Disabled state: opacity 0.55, cursor not-allowed, activation blocked."
---

# Togglebutton

A pressable button with a pressed/aria-pressed state — for feature toggles,
bold/italic toolbar buttons, and filter chips.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `pressed` | `boolean` | `undefined` | Controlled pressed state |
| `defaultPressed` | `boolean` | `false` | Initial state (uncontrolled) |
| `onChange` | `(pressed: boolean) => void` | `undefined` | Fired after each toggle |
| `size` | `sm` \| `md` \| `lg` | `md` | Density tier (`control.height-*`) |
| `fullWidth` | `boolean` | `false` | Stretch to fill the parent's width |

All remaining props forward to the native `<button>` (children, `disabled`,
`aria-label`, ...). The component is `forwardRef`d.

## Behavior

- Default `type="button"`.
- Uncontrolled mode toggles internal state on click; controlled mode
  (`pressed`) defers to the prop and still fires `onChange`.
- `aria-pressed` mirrors the state; the pressed fill switches to primary.
- Disabled: native suppression + opacity 0.55.

## Keyboard

Native button semantics: Enter and Space activate (toggle); `:focus-visible`
ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a button | `role="button"` with the accessible name |
| Default state | `aria-pressed="false"` by default |
| Toggles on click | clicking flips `aria-pressed` to `true` and fires `onChange(true)` |
| Controlled state | `pressed` prop wins over clicks |
| Disabled + click | click does not toggle and `onChange` is not fired |
| Sizes | `md` class by default; `size="sm"` applies the `sm` class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).