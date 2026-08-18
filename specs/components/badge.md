---
name: Badge
status: implemented
frameworks:
  react: v0.3.2
  htmx: v0.1.3
tokens:
  - "space.1"
  - "radius.full"
  - "font.sans"
  - "font.size-xs"
  - "font.weight-medium"
  - "color.surface-hover"
  - "color.text-muted"
  - "color.primary"
  - "color.success"
  - "color.warning"
  - "color.danger"
  - "color.primary-fg"
  - "color.danger-fg"
  - "color.text"
  - "color.surface"
  - "color.border-strong"
  - "color.text-primary"
  - "color.text-success"
  - "color.text-warning"
  - "color.text-danger"
a11y:
  - "Renders a semantic <span>; no interactive role — must not be used for interactive controls."
  - "Text-on-fill contrast >= 4.5:1: primary-fg on primary (solid primary), text on surface (solid neutral/success/warning/danger) per schema contrastRules."
  - "Soft tones pair the tone color with a 12% color-mix tint background; the label uses the matching text-{tone} token (>= 4.5:1 on bg per schema contrastRules); outline tones carry the tone only in the border and use color.text for the label."
  - "Non-solid danger uses color.text-danger on tint (soft); solid danger uses color.danger-fg on color.danger (>= 4.5:1 per schema contrastRules in both modes)."
---
# Badge

A compact status or count label in soft, solid, or outline styles.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `neutral` \| `primary` \| `success` \| `warning` \| `danger` | `neutral` | Color tone |
| `variant` | `soft` \| `solid` \| `outline` | `soft` | Fill style |

All remaining props extend `HTMLAttributes<HTMLSpanElement>` and are spread
onto the `<span>` (aria-label, className, ...). The component is forwardRef'd
to the span.

## Behavior

- Single `<span>`; classes are `badge` + tone + variant. Soft is the base
  style; `solid` and `outline` override it.
- Soft: `surface-hover`/`text-muted` for neutral; 12% `color-mix` tint
  background with the matching `text-{tone}` color as text for the other
  tones.
- Solid: filled with `primary` + `primary-fg`; all other solid tones use the
  tone color fill with `surface` text (neutral uses `text` fill on `surface`).
- Outline: 1px `border-strong` + `text` for neutral; tone-colored border with a `text`-colored label for other tones.
- Layout: `inline-flex`, `radius.full`, xs font, 2px 8px padding (hardcoded).

## Keyboard

Non-interactive span; no focus or activation semantics.

## Tests

| Scenario | Assertion |
|---|---|
| Renders children | a `<span>` with the child text |
| Default tone/variant | class names include `neutral` and `soft` |
| Tone prop | class name includes the tone (`primary`, `success`, `danger`, `warning`) |
| Variant prop | class name includes the variant (`solid`, `outline`) |
| Extra props + className | forwarded to the span (`aria-label`, custom class) |
| Ref | forwarded to the `<span>` element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).