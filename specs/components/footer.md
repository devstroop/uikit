---
name: Footer
status: implemented
frameworks:
  react: v0.3.4
  htmx: v0.1.5
tokens:
  - "color.surface"
  - "color.border"
  - "space.4"
a11y:
  - "Renders a <footer> landmark. The element itself is never focusable and adds no aria."
  - "If several <footer> landmarks exist on a page, each needs a distinct accessible name (author responsibility)."
---

# Footer

Structural bottom bar of an app shell — a dumb container in the Radzen
model (`RadzenFooter`): content is supplied by the layout, the shell
provides surface background, top border and padding (SoftEther-Web's
footer composes links + copyright + legal text inside it).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Footer content |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLElement>` are spread onto the `<footer>`.

## Behavior

- DOM: `footer[class~=se-footer]` with `display: flex;
  flex-shrink: 0; padding: var(--se-space-4);
  background: var(--se-color-surface);
  border-top: 1px solid var(--se-color-border)`.
- No JS, no `data-*` hooks.

## Keyboard

Not keyboard- or focus-relevant: plain landmark container.

## Tests

| Scenario | Assertion |
|---|---|
| Default | `<footer>` with footer class and surface background |
| Attributes spread | `id` / `aria-*` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).