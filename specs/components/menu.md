---
name: Menu
status: implemented
category: navigation
frameworks:
  react: v0.23.0
  htmx: v0.21.0
tokens:
  - "color.border"
  - "color.outline-primary"
  - "color.primary"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.md"
  - "radius.sm"
  - "shadow.sm"
  - "space.1"
  - "space.2"
  - "space.3"
  - "transition.fast"
a11y:
  - "Root is a <nav> landmark with aria-label; the menubar has role='menubar' and each item role='menuitem' with aria-disabled and aria-current where applicable."
  - "Submenus are role='menu' with aria-expanded on the parent trigger; keyboard: ArrowLeft/Right move top-level, ArrowDown opens submenu, ArrowUp/Down move within, Enter/Space activate, Escape closes."
  - "Focus indicators: :focus-visible draws the 3px outline-primary ring on each item."
  - "Disabled items are aria-disabled and not focusable; active item uses aria-current='page' when it has a path."
---

# Menu

Horizontal (or vertical) navigation bar with dropdown submenus (RadzenMenu parity). Items carry text/value/icon/path/disabled and optional children for submenus. Click fires with MenuItemEventArgs.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `MenuItem[]` | — | Top-level items (required). |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Bar orientation. |
| `onClick` / `Click` | `(args: MenuItemEventArgs) => void` | `undefined` | Called when an item is activated. |
| `ariaLabel` | `string` | `"Menu"` | aria-label on the nav landmark. |
| `className` | `string` | `undefined` | Extra class on root. |

`MenuItem` = `{ text: string; value?: string; icon?: string; path?: string; disabled?: boolean; children?: MenuItem[] }`
`MenuItemEventArgs` = `{ text: string; value?: string; path?: string }`

## Behavior

- Submenus open on hover (horizontal) or click; keyboard ArrowDown opens, Escape closes.
- htmx variant: markup is server-rendered with data-dt-menu, data-dt-menu-item, data-dt-menu-submenu; behavior toggles aria-expanded and dispatches dt:menu-click{ text, value, path }.
