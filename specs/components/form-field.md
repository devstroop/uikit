---
name: FormField
status: implemented
category: forms
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border-strong"
  - "color.danger"
  - "color.outline-primary"
  - "color.primary"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-danger"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.size-xs"
  - "font.weight-medium"
  - "space.1"
  - "transition.fast"
a11y:
  - "Label association never dangles: htmlFor points only at an id that will exist (explicit child id, explicit component id, or a backfilled clone); otherwise no htmlFor."
  - "Helper messages attach via aria-describedby; invalid reaches AT via aria-invalid on the control."
  - "Blank-placeholder float trigger only on text-like controls (never checkbox, radio, date, select); explicit placeholders always win."
  - "Only labelable elements (button, input except hidden, meter, output, progress, select, textarea) are association targets — wrapper ids are never backfilled."
  - "The box owns focus indication (:focus-within ring); inner controls paint no outline or shadow, so focus never shows two nested rings."
---

# FormField

Label + control + helper composition with floating or fixed labels.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `ReactNode` | — | Label text (or template), floating or fixed |
| `start` / `end` | `ReactNode` | — | Leading / trailing adornments inside the box |
| `helper` | `ReactNode` | — | Hint or validation message below the box |
| `component` | `string` | — | Explicit id for label association (Radzen `Component` parity) |
| `allowFloatingLabel` | `boolean` | `true` | Float the label on focus/filled |
| `variant` | `filled` \| `outlined` \| `flat` | `outlined` | Box chrome |
| `invalid` | `boolean` | `false` | Error state: danger border + danger helper |
| `required` | `boolean` | `false` | Show the required marker |

Children are the control (or a render-prop receiving `{ inputId }`).
The htmx reference mirrors the structure with
`.dx-form-field__box`, `.dx-form-field__label`,
`.dx-form-field__start/end`, `.dx-form-field__helper`, and
`--filled` / `--flat` / `--invalid` / `--fixed` modifiers.

## Behavior

- Floating (default): the box owns the height (`control`-scale tiers
  per inner control size); the label rests inside and floats on
  focus/filled content (`:placeholder-shown` driven).
- Fixed (`allowFloatingLabel={false}` / `.dx-form-field--fixed`):
  classic label-above-the-box in `font.weight-medium`.
- `outlined` (default): `color.border-strong` box on
  `color.surface`; focus ring is `color.primary` border +
  `color.outline-primary` halo. `filled` tints the box with
  `color.surface-hover`; `flat` keeps only the bottom border.
- `invalid`: `color.danger` border, `color.text-danger` helper.
- Adornments render in `color.text-muted`; helper text in
  `font.size-xs` + `color.text-muted`.
- Only a directly disabled control dims the field; adornment buttons
  keep their own states.

## Keyboard

The wrapper is not focusable; the inner control keeps its native
keyboard behavior and the box reflects `:focus-within`.

## Tests

| Scenario | Assertion |
|---|---|
| Floating label floats on focus/fill | label class/position state |
| `variant` filled / flat | variant class applied |
| `invalid` + helper | danger styling, `aria-invalid`, describedby |
| Label association | `for` matches the control id; no dangling `for` |
| `visible={false}` | renders nothing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
