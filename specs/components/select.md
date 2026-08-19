---
name: Select
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
  - "color.primary"
  - "color.focus"
  - "color.danger"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
a11y:
  - "Renders a native <select>, preserving single-line combobox semantics, value change events, and form behavior."
  - "aria-invalid=\"true\" is set when the invalid prop is true (omitted otherwise)."
  - "Focus indicator via border-color primary plus a 3px focus ring (--dt-color-focus), keyboard-only (:focus-visible)."
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
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale: `control.height-xs` 20px → `xl` 52px in default theme) |
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
- Full-width (`width: 100%`, `min-width: 0`) so the select fills its
  container and can shrink inside flex/grid rows instead of locking to the
  longest option's intrinsic width.
- Sizes set `height` from the `control.height-{tier}` scale with the
  tier−1 `font.size` pairing: `xs`/`sm` 12px text, `md` 14px, `lg` 16px,
  `xl` 18px; horizontal padding 10/10/12/14/16px, right padding always
  32px for the chevron.
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
| Options from `options` prop | native `role="combobox"`; each `<option>` carries its `value` and label text |
| Disabled option | option with `disabled: true` is disabled; others are not |
| Children fallback | `<option>` children render when `options` is omitted |
| Options precedence | `options` win over `children` when both are provided |
| Invalid state | `aria-invalid="true"` only when `invalid` (omitted otherwise); `invalid` class applied |
| Sizes | `md` class by default; `size="sm"` applies the `sm` class |
| Forwarded attributes | `name`, `disabled` reach the native select |
| Selection | `selectOptions` fires `onChange` and updates the selected value |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
