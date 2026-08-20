---
name: Checkboxlist
status: implemented
category: forms
frameworks:
  react: v0.15.0
  htmx: v0.13.0
tokens:
  - "color.border-strong"
  - "color.surface"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.sm"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "transition.fast"
  - "space.2"

a11y:
  - "Renders a <fieldset> with a <legend> for a group-level accessible name."
  - "Each option is a native <label> wrapping a checkbox (native semantics, form-submittable)."
  - "Disabled options use the native disabled attribute (opacity 0.55, cursor not-allowed)."
  - "Keyboard-only focus ring via :focus-visible on each checkbox."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface, primary-fg on primary)."
---

# Checkboxlist

A fieldset of checkboxes generated from an options array. Native checkbox
semantics so the group works in any `<form>`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `readonly { value, label, disabled? }[]` | `[]` | Options; `label` may be a ReactNode/string |
| `value` | `readonly string[]` | `undefined` | Checked values (controlled) |
| `defaultValue` | `readonly string[]` | `[]` | Initial checked values (uncontrolled) |
| `onChange` | `(values: string[]) => void` | `undefined` | Fired with the new checked set |
| `legend` | `string` | `undefined` | Fieldset legend (group label) |
| `name` | `string` | `undefined` | `name` applied to every checkbox |

## Behavior

- Checkboxes are generated from `options`; each is paired with its label in
  a `<label>`.
- Controlled mode derives checked state from `value`; otherwise internal
  state tracks the toggles.
- `onChange` always receives the full ordered array of checked values.
- A `legend` renders inside the fieldset for the group's accessible name.

## Keyboard

Native checkbox semantics: Space toggles, focus follows document order,
`:focus-visible` ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a fieldset | `role="group"` with a legend text |
| Renders an option per entry | each option renders a checkbox + label text |
| Toggle updates value | checking an option calls `onChange` including its value |
| Multi-select | multiple options can be checked independently |
| Controlled value | checked state reflects the `value` prop |
| Disabled option | disabled option checkbox is disabled |
| name propagation | `name` attribute reaches each checkbox |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).