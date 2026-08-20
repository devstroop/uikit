---
name: Listbox
status: implemented
category: forms
frameworks:
  react: v0.15.0
  htmx: v0.13.0
tokens:
  - "color.border-strong"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.md"
  - "font.sans"
  - "font.size-sm"
  - "transition.fast"
  - "space.2"
  - "space.3"

a11y:
  - "Container is role=\"listbox\" (aria-multiselectable=\"true\" when multiple); options are role=\"option\" with aria-selected."
  - "The selected option carries aria-selected=\"true\" and the primary fill; the container is tabbable and uses a roving active-option pattern."
  - "Disabled options are present in the DOM with aria-disabled=\"true\" but are skipped by keyboard navigation and never selectable."
  - "Keyboard-only focus ring via :focus-visible on the container and options."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface, primary-fg on primary)."
  - "Container carries aria-label/aria-labelledby for its accessible name."
---

# Listbox

A standalone selection list. Supports single selection and multi
selection (checkbox-style toggling).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `readonly { value, label, disabled? }[]` | `[]` | Options |
| `value` | `string \| string[]` | `undefined` | Selected value(s) (controlled) |
| `defaultValue` | `string \| string[]` | `undefined` | Initial selection (uncontrolled) |
| `multiple` | `boolean` | `false` | Multi-select mode (`aria-multiselectable`) |
| `onChange` | `(value: string \| string[]) => void` | `undefined` | Fired on selection change |
| `aria-label` / `aria-labelledby` | `string` | `undefined` | Accessible name for the listbox |

## Behavior

- Single mode: clicking an option selects it and deselects the rest;
  keyboard navigation moves the active option and selects on Enter/Space.
- Multiple mode: clicking toggles an option; Space toggles without moving
  focus; arrows move the active option without selecting.
- The active option follows via the roving tabindex + `aria-activedescendant`
  on the container.
- Disabled options render muted and are unreachable.

## Keyboard

- `ArrowDown`/`ArrowUp` move the active option (skipping disabled).
- `Home`/`End` jump to first/last.
- `Enter`/`Space` select (single) or toggle (multiple).
- Single type-ahead: typing a letter jumps to the next option starting with it.

## Tests

| Scenario | Assertion |
|---|---|
| Renders listbox | container has `role="listbox"`; options have `role="option"` |
| Single select by click | clicking an option sets its `aria-selected="true"` and clears the others |
| Multiple select | with `multiple`, clicking toggles independent `aria-selected` states |
| Keyboard single select | ArrowDown moves active; Enter selects |
| Keyboard multiple toggle | Space toggles the active option without moving it |
| Disabled option | disabled option has `aria-disabled="true"` and is skipped by arrows |
| Controlled value | changing the `value` prop updates `aria-selected` |
| Accessible name | `aria-label` reaches the container |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).