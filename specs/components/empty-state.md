---
name: EmptyState
status: implemented
category: data-display
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "space.2"
  - "space.6"
  - "font.sans"
  - "color.text-muted"
  - "space.1"
  - "font.size-md"
  - "font.weight-bold"
  - "color.text"
  - "font.size-sm"
  - "space.3"
a11y:
  - "Renders a plain <div> container — no landmark, heading, or live region role; consumers must supply semantics for embedded content."
  - "Slot order (icon, title, description, action) matches DOM order, so tab order follows visual order."
  - "Title uses color.text on color.bg >= 4.5:1; icon and description use color.text-muted on color.bg >= 4.5:1 (per theme contrastRules)."
  - "Interactive content inside the `action` slot stays focusable; nothing is inert or hidden from AT by the component."
---

# EmptyState

Centered placeholder used when a list or panel has no content to show.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | `undefined` | Icon node above the title; omitted when null |
| `title` | `string` | — (required) | Main heading text |
| `description` | `ReactNode` | `undefined` | Supporting copy; omitted when null |
| `action` | `ReactNode` | `undefined` | Call-to-action content; omitted when null |
| `className` | `string` | `undefined` | Extra class on the container |

## Behavior

- Single `div` laid out as a centered flex column (`align-items: center`,
  `gap: space.2`, `padding: space.6`, `text-align: center`). The root is
  `width: 100%`, so the centered column centers within the whole
  containing block, not just the content box.
- Slots render in fixed order — icon, title, description, action — and
  only when non-null. No variants, tones, or state handling.
- Title: `font.size-md` / `weight-bold` in `color.text`; description:
  `font.size-sm` in `color.text-muted`, `max-width: 40ch`.

## Keyboard

The component itself has no keyboard behavior — no focusable elements are
rendered. Keyboard access depends entirely on content passed via `action`.

## Tests

| Scenario | Assertion |
|---|---|
| Renders title | title text is in the document |
| All slots provided | icon, description, and action render (action keeps its button role) |
| Optional slots omitted | only the title slot renders (single child div) |
| Slot order | children render in fixed order: icon, title, description, action |
| `className` | applied to the container div |
| Action interactivity | button inside `action` is not disabled and remains clickable |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
