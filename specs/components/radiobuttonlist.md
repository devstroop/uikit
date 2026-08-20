---
name: Radiobuttonlist
status: implemented
category: forms
frameworks:
  react: v0.17.0
  htmx: v0.15.0
tokens:
  - "color.border-strong"
  - "color.surface"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.full"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "transition.fast"
  - "space.2"

a11y:
  - "Renders a <fieldset> with a <legend> for a group-level accessible name."
  - "Each option is a native <label> wrapping a radio; the group shares a single `name` so browsers enforce single selection."
  - "Disabled options use the native disabled attribute (opacity 0.55, cursor not-allowed)."
  - "Keyboard-only focus ring via :focus-visible on each radio."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface, primary-fg on primary)."
---

# Radiobuttonlist

A fieldset of radio buttons generated from an options array. Native radio
semantics with a shared `name` for single selection inside any `<form>`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `readonly { value, label, disabled? }[]` | `[]` | Options; `label` may be a ReactNode/string |
| `value` | `string` | `undefined` | Selected value (controlled) |
| `defaultValue` | `string` | `undefined` | Initial selection (uncontrolled) |
| `onChange` | `(value: string) => void` | `undefined` | Fired with the selected value |
| `legend` | `string` | `undefined` | Fieldset legend (group label) |
| `name` | `string` | `required` | Shared radio group name |

## Behavior

- Radios are generated from `options`; each is paired with its label in a
  `<label>` and shares the `name` prop.
- Controlled mode derives the checked radio from `value`; otherwise internal
  state tracks the selection.
- `onChange` fires with the selected option's value.

## Keyboard

Native radio-group semantics: arrow keys move selection within the group,
Space selects the focused radio, `:focus-visible` ring is the only focus
indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a fieldset | `role="radiogroup"` with a legend text |
| Renders an option per entry | each option renders a radio + label text |
| Shares a name | every radio carries the `name` prop |
| Selects on change | selecting a radio calls `onChange` with its value |
| Single selection | selecting one radio clears the previous one |
| Controlled value | checked state reflects the `value` prop |
| Disabled option | disabled option radio is disabled |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).