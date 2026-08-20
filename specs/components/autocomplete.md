---
name: Autocomplete
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
  - "color.danger"
  - "color.outline-primary"
  - "radius.md"
  - "font.sans"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
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
  - "Input is a <input role=\"combobox\"> with aria-expanded, aria-controls, aria-autocomplete=\"list\", and aria-activedescendant pointing at the active option."
  - "Popup is role=\"listbox\"; options are role=\"option\" with aria-selected; only matching options are rendered."
  - "The input's value is announced via the combobox pattern; a status region (aria-live=\"polite\") announces result counts."
  - "Keyboard-only focus ring via :focus-visible (3px outline-primary ring + primary border)."
  - "Escape closes the popup and returns focus to the input; Tab commits the active option or closes."
  - "aria-invalid=\"true\" when invalid (danger border + 25% danger ring), omitted otherwise."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface, primary-fg on primary)."
---

# Autocomplete

Combobox with a text input and a filtered option popup. Filtering is
case-insensitive substring matching over option labels.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `readonly { value, label, disabled? }[]` | `[]` | Full option set (filtering happens against these) |
| `value` | `string` | `undefined` | Input value (controlled) |
| `defaultValue` | `string` | `""` | Initial input value (uncontrolled) |
| `onChange` | `(value: string) => void` | `undefined` | Fired on every input change |
| `onSelect` | `(value: string, option) => void` | `undefined` | Fired when an option is picked |
| `placeholder` | `string` | `""` | Input placeholder |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (`control.height-*` with tier-1 font sizing) |
| `invalid` | `boolean` | `false` | Danger border + ring, `aria-invalid` |
| `disabled` | `boolean` | `false` | Disables the input and popup |
| `filter` | `(option, query) => boolean` | substring match | Custom option filter |

## Behavior

- Typing filters the option list (case-insensitive substring on the label,
  customizable via `filter`); the popup opens while the input has text.
- The popup lists the matching options; with an empty query it lists the
  full option set, and with no matches it renders a muted empty message.
- Selecting an option (click or Enter) sets the input value to the option's
  label and fires `onSelect`.
- An inline clear affordance (a small ×) appears when the input has text;
  clicking it empties the input, reopens the full list, and keeps the
  input focused.
- Active option follows via `aria-activedescendant`; highlighted options
  get the primary fill.
- Disabled options render but are not selectable nor keyboard-navigable.

## Keyboard

- `ArrowDown` opens the popup (or moves active down when open); `ArrowUp`
  moves active up.
- `Enter` selects the active option (if any) and closes; `Escape` closes;
  `Tab` commits the active option and moves on.
- `Backspace`/typing re-filters live; focus leaving the input closes the popup.

## Tests

| Scenario | Assertion |
|---|---|
| Renders input + closed popup | input has `role="combobox"`, `aria-expanded="false"`, `aria-controls`; no options visible |
| Filters on type | typing filters options to matches; non-matching options disappear |
| Opens when matches exist | popup appears with matching options only |
| Selects by click | clicking an option calls `onSelect` with its value and sets input text |
| Keyboard navigation | ArrowDown/ArrowUp move `aria-activedescendant`; Enter selects the active option |
| Escape closes | Escape closes the popup and keeps the input focused |
| Clear affordance | clearing resets the input and re-opens the full option list |
| Empty result | a query with no matches renders a muted empty message inside the popup |
| Invalid | `aria-invalid="true"` only when `invalid`; invalid class applied |
| Disabled | input is disabled and typing never opens the popup |
| Sizes | `md` class by default; `size="sm"` applies the `sm` class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).