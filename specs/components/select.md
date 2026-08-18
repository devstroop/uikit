---
name: Select
status: implemented
frameworks:
  react: v0.2.0
tokens:
  - "color.border-strong"
  - "radius.md"
  - "color.surface"
  - "color.text"
  - "font.sans"
  - "transition.fast"
  - "color.primary"
  - "color.focus"
  - "color.danger"
  - "font.size-xs"
  - "control.height"
  - "font.size-sm"
a11y:
  - "Renders a native <select>, preserving single-line combobox semantics, value change events, and form behavior."
  - "aria-invalid=\"true\" is set when the invalid prop is true (omitted otherwise)."
  - "Focus indicator via border-color primary plus a 3px focus ring (--se-color-focus), keyboard-only (:focus-visible)."
  - "Accessible name comes from a native <label> or aria-label forwarded through the native element."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface)."
  - "Disabled state via the native disabled attribute (opacity 0.55, cursor not-allowed)."
---

# Select

Native single-select dropdown for forms and filters.
Renders a styled native `<select>` so behavior, keyboard support, and
assistive technology semantics come from the platform.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `sm` \| `md` | `md` | Density tier |
| `invalid` | `boolean` | `false` | Marks the control invalid (danger border + ring, `aria-invalid`) |
| `options` | `readonly SelectOption[]` | `undefined` | Renders `<option>` elements from `{ value, label, disabled? }` |
| `children` | `ReactNode` | `undefined` | Alternative way to supply `<option>` elements when `options` is omitted |

All remaining props are forwarded to the native `<select>` (`name`,
`value`, `onChange`, `disabled`, `aria-label`, ...). The component is
`forwardRef`d to the `<select>` element.

## Behavior

- `options` takes precedence: when provided, `<option>` elements are mapped
  from it (value, label, optional disabled); otherwise `children` are
  rendered as-is.
- Native chevron replaced by an inline SVG data-URI (hardcoded stroke
  `#64748b`, not a theme token); `appearance: none`, padding-right 32px.
- Sizes: `sm` 12px text / 6px 10px padding, `md` 14px text / control-height
  height / 8px 12px padding.
- `invalid`: danger border and a 25% danger ring (`color-mix`), applied to
  the `:focus-visible` state too.
- Disabled: `opacity 0.55`, `cursor: not-allowed`, native activation
  suppression.

## Keyboard

Native select semantics: arrow keys change the value, Enter/Space open the
option list, focus follows document order, and the `:focus-visible` ring is
the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| — no test file present in `frameworks/react/lib/components/Select/` | Tests must be added per `docs/DEVELOPMENT_STRATEGY.md` |
