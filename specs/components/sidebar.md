---
name: Sidebar
status: implemented
frameworks:
  react: v0.3.4
  htmx: v0.1.5
tokens:
  - "color.surface"
  - "color.border"
  - "space.4"
a11y:
  - "Renders an <aside> landmark. The element itself is never focusable and adds no aria."
  - "Collapse is a visual-only state: the aside stays in the accessibility tree, so collapsed navigation must also be hidden with hidden/inert by the author if it must not be reachable."
  - "The collapse toggle must set aria-expanded and aria-controls on itself, pointing at the sidebar."
---

# Sidebar

Collapsible flank of an app shell — Radzen `RadzenSidebar` model: a
fixed-width aside that can sit left or right of the body, with its own
scroll region and a width driven by the component-level custom property
`--se-layout-sidebar-width` (default `240px`, Radzen's
`--rz-sidebar-width` pattern; overridable inline or per theme).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `position` | `left` \| `right` | `left` | Which flank of the body the aside occupies |
| `expanded` | `boolean` | `true` | Collapse state; `false` renders the aside collapsed |
| `children` | `ReactNode` | — | Sidebar content (nav, user chip, …) |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLElement>` are spread onto the `<aside>`.

## Behavior

- DOM: `aside[class~=se-sidebar]`, plus `se-sidebar--right` for
  `position="right"` and `se-sidebar--collapsed` when
  `expanded=false`.
- CSS: `width: var(--se-layout-sidebar-width, 240px); flex-shrink: 0;
  padding: var(--se-space-4); background: var(--se-color-surface);
  overflow-y: auto`; left position adds `border-right`, right position
  `border-left` (`1px solid var(--se-color-border)`).
- Collapsed: `width: 0; padding: 0; border: none; overflow: hidden` —
  the owning `Layout` row shrinks automatically (flex).
- The preview/site toggle button sets `aria-expanded`/`aria-controls`
  (see a11y) and flips the `expanded` prop; the component itself is
  fully controlled and does not listen to events.
- htmx: `se-sidebar--collapsed` on the aside is the initial state; the
  `[data-se-sidebar-toggle]` behavior (behaviors.js) toggles the class
  and mirrors `aria-expanded` on the trigger. Selector syntax:
  `data-se-sidebar-toggle="#id"`.

## Keyboard

Not focusable itself; the collapse toggle is an author-supplied button
that must be keyboard-operable (native `<button>`).

## Tests

| Scenario | Assertion |
|---|---|
| Default | `<aside>` with sidebar class, left border |
| `position="right"` | right class + left border instead of right |
| `expanded=false` | collapsed class applied |
| Attributes spread | `id` / `aria-*` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).