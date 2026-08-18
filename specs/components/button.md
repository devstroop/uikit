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
| `size` | `xs` \| `sm` \| `md` \| `lg` | `md` | Density tier (Radzen `ButtonSize` parity: ExtraSmall…Large) |
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
- Sizes: `xs` 12px text / 4px 8px padding, `sm` 12px / 6px 12px, `md`
  14px / 9px 16px, `lg` 16px / 12px 20px — all derived from the spacing
  and type scales.
- Icon-only: `padding: 0`, `border-radius: radius.full`, `aspect-ratio:
  1`, glyph centered; tier widths: `xs` 24px, `sm` 32px, `md` 40px,
  `lg` 48px.

## Keyboard

Native button semantics: Enter and Space activate; focus follows the
document order; `:focus-visible` ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with default primary variant | `role="button"` with accessible name |
| Default `type` | attribute is `button` |
| Variant/size/fullWidth | class names applied |
| `size="xs"` | xs class applied |
| `iconOnly` | icon-only class applied |
| Disabled + click | click handler not invoked |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).