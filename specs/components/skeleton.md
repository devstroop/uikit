---
name: Skeleton
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "color.surface-hover"
  - "radius.sm"
  - "color.border"
  - "transition.slow"
  - "radius.md"
a11y:
  - "Renders a <span> with aria-hidden=\"true\" — purely decorative, excluded from the accessibility tree."
  - "Not focusable and never interactive; no keyboard or focus-visible behavior."
  - "Shimmer uses color.surface-hover with a color.border sweep — a non-text visual indicator (no text contrast pair involved)."
---

# Skeleton

Placeholder block that mimics text, circle, or rectangle shapes while
content loads.
Used for loading screens, dashboards, and card placeholders.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `text` \| `circle` \| `rect` | `text` | Shape of the placeholder |
| `width` | `number` \| `string` | `undefined` | Inline width; numbers become `px` |
| `height` | `number` \| `string` | `undefined` | Inline height; numbers become `px` |
| `className` | `string` | `undefined` | Extra classes |

No props are spread onto the DOM element (plain function component, not
`forwardRef`d).

## Behavior

- DOM: `span[aria-hidden=true]` with inline `width`/`height` when provided
  (numeric values are suffixed with `px`).
- Variants: `text` — 1em height, `radius.sm`; `circle` — `border-radius: 50%`
  (width/height must be supplied); `rect` — `radius.md`.
- Defaults to `text`; a shimmer sweeps `200% → -200%` background-position on
  a repeating `transition.slow` loop, using `surface-hover` fill with a
  `border`-mixed highlight.

## Keyboard

None — the element is hidden from assistive technology and not focusable.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with default variant | `aria-hidden="true"`, `text` class applied |
| Applies variant/width/height | `circle` class, inline `width: 48px` and `height: 3rem` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
