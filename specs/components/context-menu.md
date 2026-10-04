---
name: ContextMenu
status: implemented
category: navigation
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.surface"
  - "color.text"
  - "font.sans"
  - "radius.md"
  - "shadow.md"
  - "space.1"
  - "z.popover"
a11y:
  - "The menu is a single role=menu popup: focus moves to the first enabled item on open and returns to the invoker on close."
  - "ArrowUp/Down + Home/End cycle (disabled items skipped), Enter/Space activate, Escape closes; Tab closes without stealing focus."
  - "The popup carries an accessible name (ariaLabel/aria-label), defaulting to 'Context menu'."
---

# ContextMenu

Cursor-anchored menu: `open` at (x, y) with items or arbitrary content,
single popup at a time, keyboard-complete. React exposes a provider +
hook; htmx exposes an imperative API plus a declarative trigger.

## react

`useContextMenu()` inside `<ContextMenuProvider>` — `open(event, options)`
from an `onContextMenu` handler (prevents the native menu), `close()`,
`isOpen`. Options take `items` (nestable `{ text, value?, disabled?, children? }`)
or arbitrary `content`, an `onClick` that does NOT auto-close (call
`close()` like Radzen), and an `ariaLabel`. The provider clamps to the
viewport, focuses the first item, restores invoker focus, and dismisses
on outside press, Escape, resize, and hash change.

```tsx
const menu = useContextMenu();
<div onContextMenu={(e) => menu.open(e, { items, onClick: (a) => { log(a.text); menu.close(); } })}>
```

## htmx

`window.dxContextMenu.open(x, y, { items?, content?, onClick?, ariaLabel? })`
builds a `role=menu` popup (flat `{ text, value?, disabled? }` items render
as menuitem buttons reusing the menu item surface; `content` takes
arbitrary HTML). Item activation calls `onClick({ value, text })` and
dispatches `dx:contextmenu-select`; open/close dispatch
`dx:contextmenu-open`/`dx:contextmenu-close`. Declarative triggers via
`[data-dx-contextmenu]` (JSON items array, or `data-dx-contextmenu-menu`
selector cloning a referenced element).

```html
<div data-dx-contextmenu='[{"text": "Cut", "value": "cut"}]'>…</div>
```

## Tests

| Scenario | Assertion |
|---|---|
| Open (both) | labelled menu builds; focus lands on the first item |
| Keyboard (both) | arrows cycle skipping disabled; Home/End jump; Enter activates; Escape closes + restores focus |
| Outside dismiss (both) | outside press closes |
| Activation (both) | onClick/select carries { value, text }; menu closes |
| Content mode (both) | arbitrary markup renders, no items required |
| Trigger forms (htmx) | JSON items + menu-selector reference both open |
| Nesting (react) | nested children render as submenus |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
