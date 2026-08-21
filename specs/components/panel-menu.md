---
name: PanelMenu
status: implemented
category: navigation
frameworks:
  react: v0.23.0
  htmx: v0.21.0
tokens:
  - "color.border"
  - "color.outline-primary"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.md"
  - "radius.sm"
  - "space.1"
  - "space.2"
  - "space.3"
  - "transition.fast"
a11y:
  - "Root is a <nav> landmark with aria-label; each top-level item is a button with aria-expanded and aria-controls pointing at its submenu (role='menu')."
  - "Submenu items are role='menuitem' with aria-disabled; keyboard: Enter/Space toggles expand, ArrowUp/Down move, Escape collapses."
  - "When Multiple is false only one root can be expanded at a time; ShowArrow false hides carets but keeps expand behavior."
  - "Focus indicators: :focus-visible draws the outline-primary ring."
---

# PanelMenu

Sidebar accordion navigation (RadzenPanelMenu parity). Renders a vertical stack of expandable items with optional icons and nested children. Supports Multiple expand and DisplayStyle.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `PanelMenuItem[]` | — | Items (required). |
| `multiple` / `Multiple` | `boolean` | `false` | Allow multiple roots expanded. |
| `showArrow` / `ShowArrow` | `boolean` | `true` | Show expand carets. |
| `displayStyle` / `DisplayStyle` | `"icon" \| "iconAndText"` | `"iconAndText"` | Icon-only vs icon+text. |
| `onClick` / `Click` | `(args: PanelMenuItemEventArgs) => void` | `undefined` | Called when an item is activated. |
| `ariaLabel` | `string` | `"Panel menu"` | aria-label on the nav. |
| `className` | `string` | `undefined` | Extra class. |

`PanelMenuItem` = `{ text: string; icon?: string; value?: string; path?: string; disabled?: boolean; children?: PanelMenuItem[] }`
