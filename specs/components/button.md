---
name: Button
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "radius.md"
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
---

# Button

Primary action control for forms, toolbars, and empty states.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary` \| `secondary` \| `ghost` \| `danger` | `primary` | Visual emphasis tier |
| `size` | `sm` \| `md` \| `lg` | `md` | Density tier |
| `fullWidth` | `boolean` | `false` | Stretch to fill the parent's width |

All remaining props are forwarded to the native `<button>` element
(`onClick`, `disabled`, `aria-label`, ...). The component is `forwardRef`d.

## Behavior

- Default `type="button"` — a button that submits must opt in with
  `type="submit"` (never change the default).
- `variant="danger"` is reserved for destructive actions; no confirmation
  dialog is implied by the component itself.
- Disabled: `opacity 0.55`, `cursor: not-allowed`, native activation
  suppression. Hover styles never apply while disabled.
- Sizes: `sm` 12px text / 6px padding, `md` 14px / 9px 16px, `lg` 16px /
  12px 20px — all derived from the spacing and type scales.

## Keyboard

Native button semantics: Enter and Space activate; focus follows the
document order; `:focus-visible` ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with default primary variant | `role="button"` with accessible name |
| Default `type` | attribute is `button` |
| Variant/size/fullWidth | class names applied |
| Disabled + click | click handler not invoked |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).