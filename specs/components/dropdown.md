---
name: Dropdown
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
  - "color.text-muted"
  - "color.primary"
  - "color.primary-fg"
  - "color.danger"
  - "color.outline-primary"
  - "radius.md"
  - "font.sans"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "font.weight-medium"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
  - "transition.fast"
  - "shadow.md"
  - "z.popover"
  - "space.1"
  - "space.2"
  - "space.3"

a11y:
  - "Trigger is a <button role=\"combobox\"> with aria-haspopup=\"listbox\", aria-expanded, and aria-controls pointing at the popup id."
  - "Popup is role=\"listbox\"; options are role=\"option\" with aria-selected; the active option follows focus via aria-activedescendant on the listbox."
  - "Option labels are announced through the combobox pattern (aria-activedescendant); the trigger label reflects the selected option's text."
  - "Keyboard-only focus ring via :focus-visible (3px outline-primary ring + primary border on the trigger)."
  - "Escape closes and returns focus to the trigger; Tab closes the popup and moves on."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface, primary-fg on primary)."
  - "Disabled state: opacity 0.55, cursor not-allowed, popup never opens."
  - "aria-invalid=\"true\" when invalid (danger border + 25% danger ring), omitted otherwise."
---

# Dropdown

Custom combobox: a button trigger that opens a popup listbox with keyboard
navigation and active-option following. Upgrades the native `Select` into a
richer, stylable popup while the native `Select` component stays as-is.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `readonly { value, label, disabled? }[]` | `[]` | Selectable options; a `label` of `""` renders a non-selectable header placeholder |
| `value` | `string` | `undefined` | Selected option value (controlled) |
| `defaultValue` | `string` | `undefined` | Initial selection (uncontrolled) |
| `onChange` | `(value: string) => void` | `undefined` | Fired when an option is selected |
| `placeholder` | `string` | `"Select…"` | Label shown when nothing is selected |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (`control.height-*` with tier-1 font sizing) |
| `invalid` | `boolean` | `false` | Danger border + ring, `aria-invalid` |
| `disabled` | `boolean` | `false` | Disables the trigger and selection |

## Behavior

- Trigger renders a `<button>`; when an option is selected its label is the
  trigger text, otherwise the placeholder (muted) is shown.
- Clicking the trigger toggles the popup; the popup positions below the
  trigger (absolute, `z-index: z.popover`) and closes on outside click,
  Escape, or selection.
- On open the active option follows the current value if present, else the
  first non-disabled option.
- The chevron is an inline SVG data-URI (hardcoded stroke, not a theme
  token); it flips when open.
- `aria-activedescendant` on the listbox tracks the highlighted option;
  highlighted options get the primary fill for a visible "following"
  indicator.
- Disabled options are skipped by keyboard navigation and cannot be selected.

## Keyboard

- `Enter` / `Space` / `ArrowDown` on the trigger open the popup.
- Inside the popup: `ArrowDown`/`ArrowUp` move the active option (skipping
  disabled), `Home`/`End` jump to first/last, `Enter`/`Space` select and
  close, `Escape` closes, `Tab` closes and moves on.

## Tests

| Scenario | Assertion |
|---|---|
| Renders trigger + closed popup | trigger has `aria-expanded="false"`, `aria-haspopup="listbox"`; options are not visible |
| Opens on trigger click | popup listbox appears; `aria-expanded="true"`; `aria-controls` points at the popup |
| Selects by click | clicking an option fires `onChange` with its value and closes the popup |
| Keyboard open + select | ArrowDown opens; ArrowDown/ArrowUp move the active option (`aria-activedescendant`); Enter selects and closes |
| Escape closes | Escape closes the popup and returns focus to the trigger |
| Placeholder | trigger text is the placeholder while nothing is selected |
| Selected label | trigger text becomes the selected option's label |
| Invalid | `aria-invalid="true"` only when `invalid`; invalid class applied |
| Disabled | trigger is disabled and clicking it never opens the popup |
| Disabled option | a disabled option is skipped by keyboard nav and never selected by click |
| Sizes | `md` class by default; `size="sm"` applies the `sm` class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).