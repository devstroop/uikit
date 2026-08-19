---
name: Header
status: implemented
category: layout
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "color.surface"
  - "color.border"
  - "space.4"
a11y:
  - "Renders a <header> landmark. The element itself is never focusable and adds no aria."
  - "If several <header> landmarks exist on a page, each needs a distinct accessible name (author responsibility)."
---

# Header

Structural top bar of an app shell — a dumb container, Radzen
`RadzenHeader`-style: the layout supplies the content via children.
Content height is intrinsic (the SoftEther-Web admin shell uses a 56px
row inside the header); the shell only provides surface background,
bottom border and padding.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Header content |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLElement>` are spread onto the `<header>`.

## Behavior

- DOM: `header[class~=dt-header]` with `display: flex;
  flex-shrink: 0; padding: var(--dt-space-4);
  background: var(--dt-color-surface);
  border-bottom: 1px solid var(--dt-color-border)`.
- No JS, no `data-*` hooks.

## Keyboard

Not keyboard- or focus-relevant: plain landmark container.

## Tests

| Scenario | Assertion |
|---|---|
| Default | `<header>` with header class and surface background |
| Attributes spread | `id` / `aria-*` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).