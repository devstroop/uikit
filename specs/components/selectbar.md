---
name: Selectbar
status: implemented
category: actions
frameworks:
  react: v0.15.0
  htmx: v0.13.0
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
  - "space.1"

a11y:
  - "Container is a role=\"group\" (or radiogroup) wrapping buttons; each button carries aria-pressed to reflect selection."
  - "Selected button has aria-pressed=\"true\" and the primary fill; others are aria-pressed=\"false\"."
  - "Keyboard-only focus ring via :focus-visible on each button."
  - "Text-on-fill contrast >= 4.5:1 (primary-fg on primary; text on surface)."
  - "Disabled buttons use the native disabled attribute."
---

# Selectbar

A horizontal bar of selectable option buttons — single-selection segmented
control.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `readonly { value, label, disabled? }[]` | `[]` | Options |
| `value` | `string` | `undefined` | Selected value (controlled) |
| `defaultValue` | `string` | `undefined` | Initial selection (uncontrolled) |
| `onChange` | `(value: string) => void` | `undefined` | Fired with the selected value |
| `size` | `sm` \| `md` \| `lg` | `md` | Density tier (`control.height-*`) |
| `aria-label` / `aria-labelledby` | `string` | `undefined` | Accessible name for the group |

## Behavior

- Buttons are generated from `options`; the selected one is the only one
  with `aria-pressed="true"` and the primary fill.
- Clicking an option selects it and deselects the rest (single-select).
- Disabled options are skipped and cannot be selected.

## Keyboard

Native button semantics: Tab moves into/out of the bar, arrow keys move
between buttons, Enter/Space activate (select) the focused button.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a group | `role="group"` with an accessible name |
| Renders an option per entry | each option renders a button with its label |
| Default selection | first option has `aria-pressed="true"` by default |
| Selects on click | clicking an option sets its `aria-pressed="true"` and clears others |
| Controlled value | changing `value` updates `aria-pressed` |
| Disabled option | disabled option button is disabled |
| Sizes | `md` class by default; `size="sm"` applies the `sm` class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).