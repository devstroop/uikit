---
name: Checkbox
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "color.border-strong"
  - "radius.sm"
  - "color.surface"
  - "transition.fast"
  - "color.primary-fg"
  - "color.primary"
  - "color.focus"
a11y:
  - "Native <input type=\"checkbox\">: checked/indeterminate/disabled state semantics, Space toggle, and form integration come from the browser."
  - "Checkmark glyph is primary-fg on primary fill — contrast >= 4.5:1 per schema contrastRules (primary-fg on primary)."
  - "Focus visible ring via --se-color-focus on :focus-visible only."
  - "Disabled uses native disabled attribute plus opacity 0.55."
  - "No built-in <label>: consumers must associate one (wrapping label or htmlFor/id) for an accessible name."
---
# Checkbox

A native-styled checkbox control for single toggles and forms.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| (all) | `InputHTMLAttributes<HTMLInputElement>` | — | Every native input prop is accepted |

`CheckboxProps` is an alias of `InputHTMLAttributes<HTMLInputElement>` — all
standard input props (`checked`, `indeterminate`, `disabled`, `onChange`,
`aria-*`, `name`, `id`, ...) are forwarded. `type` is fixed to `"checkbox"`
(class-name overrides it); the component is forwardRef'd to the input.

## Behavior

- Native input with `appearance: none`; 18×18px box (hardcoded px) with a
  `border-strong` border and `surface` fill.
- Checkmark is a `::before` pseudo-element using a clip-path polygon, scaled
  in/out on `:checked`; checked state swaps fill and border to `primary`.
- Disabled: `opacity 0.55` + `cursor: not-allowed`; `:checked` styles still
  apply.
- Layout is `inline-grid` with the pseudo centered via `place-content`.

## Keyboard

Native checkbox semantics: Space toggles when focused; focus follows document
order; `:focus-visible` outline (2px, `--se-color-focus`) is the focus
indicator; disabled inputs cannot be focused or toggled.

## Tests

| Scenario | Assertion |
|---|---|
| Renders control | `role="checkbox"` with `type="checkbox"` |
| Default state + click | unchecked by default; click fires `onChange` and checks it |
| Controlled `checked` | checked state reflected |
| Disabled + click | `toBeDisabled`; click does not fire `onChange` or check it |
| Native props | `id`/`name`/`value` forwarded |
| Ref | forwarded to the `<input>` element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).