---
name: Sidebar
status: implemented
category: navigation
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "color.surface"
  - "color.border"
  - "space.4"
  - "color.backdrop"
  - "shadow.lg"
a11y:
  - "Renders an <aside> landmark. The element itself is never focusable and adds no aria."
  - "Collapse is a visual-only state: the aside stays in the accessibility tree, so collapsed navigation must also be hidden with hidden/inert by the author if it must not be reachable."
  - "The collapse toggle must set aria-expanded and aria-controls on itself, pointing at the sidebar."
  - "The overlay mask is a decorative scrim: aria-hidden and never focusable; closing the drawer is its only role and must also flip the author's expanded state (react: onClose; htmx: the data-se-sidebar-mask behavior)."
---

# Sidebar

Collapsible flank of an app shell — Radzen `RadzenSidebar` model: a
fixed-width aside that can sit left or right of the body, with its own
scroll region and a width driven by the component-level custom property
`--se-layout-sidebar-width` (default `240px`, Radzen's
`--rz-sidebar-width` pattern; overridable inline or per theme).

## API

| Prop | Type | Default | Description |
|---|---|---|---|---|
| `position` | `left` \| `right` | `left` | Which flank of the body the aside occupies |
| `expanded` | `boolean` | `true` | Collapse state; `false` renders the aside collapsed |
| `responsive` | `boolean` | `false` | Below `768px` the aside visually collapses via media query, regardless of `expanded` (RadzenSidebar `Responsive` parity) |
| `overlay` | `boolean` | `false` | Drawer mode: the aside is absolutely positioned over the body with `shadow.lg` elevation (Radzen overlay pattern: `Responsive=false` + absolute + scrim) |
| `onClose` | `() => void` | `undefined` | React only: called when the auto-rendered mask (visible only when `overlay && expanded`) is clicked; the author must flip `expanded` |
| `children` | `ReactNode` | — | Sidebar content (nav, user chip, …) |
| `className` | `string` | `undefined` | Extra classes |

All other `HTMLAttributes<HTMLElement>` are spread onto the `<aside>`.

## Behavior

- DOM: `aside[class~=se-sidebar]`, plus `se-sidebar--right` for
  `position="right"`, `se-sidebar--collapsed` when `expanded=false`,
  `se-sidebar--responsive` when `responsive=true`, and
  `se-sidebar--overlay` when `overlay=true`. React also emits
  `se-sidebar--overlay` as a global class (the `:has()` hook for the
  owning Layout row — module-scoped classes cannot cross files).
- CSS: `width: var(--se-layout-sidebar-width, 240px); flex-shrink: 0;
  padding: var(--se-space-4); background: var(--se-color-surface);
  overflow-y: auto`; left position adds `border-right`, right position
  `border-left` (`1px solid var(--se-color-border)`).
- Collapsed: `width: 0; padding: 0; border: none; overflow: hidden` —
  the owning `Layout` row shrinks automatically (flex).
- Responsive: `@media (max-width: 767.98px)` applies the collapsed rule
  to `se-sidebar--responsive` on top of any `expanded` state; no JS.
- Overlay: the aside becomes `position: absolute; top: 0; bottom: 0;
  z-index: 20; box-shadow: var(--se-shadow-lg)` — out of flow, so the
  body takes the full row width. Horizontal anchoring follows the side:
  `se-sidebar--left.se-sidebar--overlay { left: 0 }` and
  `se-sidebar--right.se-sidebar--overlay { right: 0 }`. The owning row
  needs `position: relative` (react: `.se-layout-row:has(.se-sidebar--overlay)`,
  htmx: `.se-layout-row:has(.se-sidebar--overlay)`), applied via CSS —
  no prop needed on Layout. The collapsed overlay drops its shadow
  (`se-sidebar--collapsed.se-sidebar--overlay { box-shadow: none }`) so a
  closed drawer does not paint a blur band along the edge.
- Stacking contract: mask `z-index: 10` < drawer panel `z-index: 20` <
  drawer toggle `z-index: 30`. The drawer's own trigger stays clickable
  above the scrim; the panel overlays the page but never the control
  that opens it. htmx applies the toggle elevation automatically
  (`[data-se-sidebar-toggle] { position: relative; z-index: 30 }`);
  React consumers whose trigger is a plain `<Button>` must elevate it
  themselves (e.g. `className` with `position: relative; z-index: 30`)
  while the drawer is open.
- Mask (react): when `overlay && expanded`, a fixed, `aria-hidden` scrim
  (`se-layout-mask`, `color.backdrop`, `z-index: 10`) is rendered as a
  sibling of the aside; clicking it calls `onClose`.
- Mask (htmx): the author renders `<div class="se-layout-mask"
  data-se-sidebar-mask="#id">` next to the aside; the
  `[data-se-sidebar-mask]` behavior toggles `se-sidebar--collapsed` on
  the target and `se-layout-mask--hidden` on the mask. The
  `[data-se-sidebar-toggle]` behavior keeps the linked mask in sync
  (finds `[data-se-sidebar-mask="#target"]` and mirrors the collapsed
  state), so no per-page JS is needed to show/hide the scrim.
- The preview/site toggle button sets `aria-expanded`/`aria-controls`
  (see a11y) and flips the `expanded` prop; the component itself is
  fully controlled and does not listen to events.
- htmx: `se-sidebar--collapsed` on the aside is the initial state; the
  `[data-se-sidebar-toggle]` behavior (behaviors.js) toggles the class
  and mirrors `aria-expanded` on the trigger. Selector syntax:
  `data-se-sidebar-toggle="#id"`.

## Keyboard

Not focusable itself; the collapse toggle is an author-supplied button
that must be keyboard-operable (native `<button>`). The overlay mask is
`aria-hidden` and not focusable — the drawer closes via mask click,
Escape, or by toggling the author's button; it does not trap focus.
Escape: react registers a document `keydown` listener while
`overlay && expanded` and calls `onClose`; htmx's behaviors close every
open mask (`[data-se-sidebar-mask]:not(.se-layout-mask--hidden)`) on
Escape via the mask click path.

## Tests

| Scenario | Assertion |
|---|---|---|
| Default | `<aside>` with sidebar class, left border |
| `position="right"` | right class + left border instead of right |
| `expanded=false` | collapsed class applied |
| `responsive` | responsive class applied |
| `overlay` | overlay class applied |
| Mask (react) | `overlay && expanded` renders an `aria-hidden` mask sibling |
| Mask hidden (react) | `overlay && !expanded` renders no mask |
| Mask click (react) | clicking the mask calls `onClose` |
| Escape (react) | `overlay && expanded` + Escape calls `onClose`; closed drawer ignores Escape |
| Attributes spread | `id` / `aria-*` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).