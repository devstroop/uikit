---
name: Layout
status: implemented
category: layout
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens: []
a11y:
  - "Renders a plain <div>; landmarks come from the section components (Header <header>, Body <main>, Footer <footer>, Sidebar <aside>)."
  - "Sections are authored in any order; visual arrangement is not source order, so screen readers follow the authored order."
  - "Multiple <header>/<main>/<footer> landmarks per page require distinct accessible names on the sections (author responsibility)."
---

# Layout

Application shell container in the Radzen model: composes optional
`Header`, `Sidebar` (left/right), `Body` and `Footer` regions into a
full-height flex skeleton. All regions are optional and can appear in
any combination; child order does not matter — the shell always renders
header on top, footer at the bottom, and sidebars flanking the body.
Inspired by Radzen `RadzenLayout` and the shell composition used by
SoftEther-Web's `PublicLayout`/`AdminLayout`/`AuthLayout`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `Header` \| `Body` \| `Footer` \| `Sidebar` | — | Section components in any order; other nodes render in the body region |
| `className` | `string` | `undefined` | Extra classes |
| `style` | `CSSProperties` | `undefined` | Inline styles (e.g. height override for embedded shells) |

All other `HTMLAttributes<HTMLDivElement>` are spread onto the `<div>`.

## Behavior

- DOM: `div[class~=dt-layout]` containing an inner
  `div[class~=dt-layout-row]` that holds the sidebars and body; the
  header and footer sit directly in the layout, above and below the row.
- CSS: `.dt-layout { display: flex; flex-direction: column;
  min-height: 100vh }`; `.dt-layout-row { display: flex; flex: 1;
  min-width: 0 }`. `min-height: 100vh` is a layout default and can be
  overridden via `style` for embedded shells.
- An overlay sidebar (see `Sidebar`) becomes absolutely positioned, so
  the row turns into its positioning context:
  `.dt-layout-row:has(.dt-sidebar--overlay) { position: relative }` —
  pure CSS, no prop.
- Collapsing a sidebar (see `Sidebar`) shrinks the row automatically —
  flex adjusts, no re-render of siblings needed.
- No JS, no `data-*` hooks; the skeleton is pure flex arrangement
  (declares no tokens).

## Keyboard

Not keyboard- or focus-relevant: plain container, never interactive.

## Tests

| Scenario | Assertion |
|---|---|
| Canonical order | header above, footer below, sidebars flanking body |
| Out-of-order children | same regions regardless of authored order |
| Body only | layout with just the body row |
| Multiple sidebars | left and right sidebars flank the body |
| `style` override | forwarded to the layout `<div>` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).