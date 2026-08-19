---
name: Button
status: implemented
category: actions
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "radius.md"
  - "radius.full"
  - "space.2"
  - "font.sans"
  - "font.weight-medium"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
  - "color.primary"
  - "color.primary-hover"
  - "color.primary-fg"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.border-strong"
  - "color.danger"
  - "color.danger-hover"
  - "color.danger-fg"
  - "color.focus"
  - "transition.fast"
a11y:
  - "Renders a semantic <button> element (native Enter/Space activation)."
  - "Focus visible ring via --se-color-focus (keyboard-only, :focus-visible)."
  - "Disabled state blocks activation (native disabled attribute)."
  - "Text-on-fill contrast >= 4.5:1 (primary-fg on primary, danger-fg on danger)."
  - "Icon-only buttons MUST carry an accessible name (aria-label or aria-labelledby); there is no visible text to derive one."
---

# Button

Primary action control for forms, toolbars, and empty states.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary` \| `secondary` \| `ghost` \| `danger` | `primary` | Visual emphasis tier |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale: `control.height-xs` 20px → `xl` 52px in default theme) |
| `fullWidth` | `boolean` | `false` | Stretch to fill the parent's width |
| `iconOnly` | `boolean` | `false` | Circular icon button: no text, square aspect ratio sized to the tier (Radzen FAB pattern); requires `aria-label` |

All remaining props are forwarded to the native `<button>` element
(`onClick`, `disabled`, `aria-label`, ...). The component is `forwardRef`d.

## Behavior

- Default `type="button"` — a button that submits must opt in with
  `type="submit"` (never change the default).
- `variant="danger"` is reserved for destructive actions; no confirmation
  dialog is implied by the component itself.
- Disabled: `opacity 0.55`, `cursor: not-allowed`, native activation
  suppression. Hover styles never apply while disabled.
- Sizes set `height` from the `control.height-{tier}` scale and the label
  font from the tier−1 `font.size` pairing: `xs` 12px text, `sm` 12px,
  `md` 14px, `lg` 16px, `xl` 18px; horizontal padding is 8/12/16/20/24px
  (tier index × 4 + 4).
- Icon-only: `padding: 0`, `border-radius: radius.full`, `aspect-ratio:
  1`, glyph centered; width equals the tier's `control.height-{tier}`.

## Keyboard

Native button semantics: Enter and Space activate; focus follows the
document order; `:focus-visible` ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with default primary variant | `role="button"` with accessible name |
| Default `type` | attribute is `button` |
| Variant/size/fullWidth | class names applied |
| `size="xs"` | xs class applied || `iconOnly` | icon-only class applied |
| Disabled + click | click handler not invoked |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).