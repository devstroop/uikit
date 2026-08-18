---
name: Body
status: implemented
frameworks:
  react: v0.3.4
  htmx: v0.1.5
tokens:
  - "space.4"
a11y:
  - "Renders a <main> landmark by default. The element itself is never focusable and adds no aria."
  - "Axe enforces exactly one main landmark per page; embedded shell previews must pass as=\"div\" (or label the extra landmark — main cannot be labeled)."
  - "Long bodies scroll inside the shell; focusable content remains reachable and the scroll region is natively announced."
---

# Body

Main content region of an app shell — a dumb container in the Radzen
model (`RadzenBody`): fills the remaining row width, scrolls
independently of the sidebar, and pads content with `space.4`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `"main"` \| `"div"` | `"main"` | Element to render; `div` for shells embedded inside an existing `<main>` (axe allows one main landmark per page) |
| `children` | `ReactNode` | — | Page content |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLElement>` are spread onto the `<main>`.

## Behavior

- DOM: `main[class~=se-body]` with `display: flex;
  flex: 1; min-width: 0; padding: var(--se-space-4);
  overflow-y: auto`.
- No JS, no `data-*` hooks.

## Keyboard

Not keyboard- or focus-relevant: plain landmark container.

## Tests

| Scenario | Assertion |
|---|---|
| Default | `<main>` with body class and `space.4` padding |
| `as="div"` | `<div>` with body class |
| Attributes spread | `id` / `aria-*` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).