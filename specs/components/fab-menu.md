---
name: FabMenu
status: implemented
category: navigation
frameworks:
  react: v0.23.0
  htmx: v0.21.0
tokens:
  - "color.border"
  - "color.outline-primary"
  - "color.primary"
  - "color.primary-fg"
  - "color.primary-hover"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.full"
  - "radius.md"
  - "shadow.sm"
  - "space.1"
  - "space.2"
  - "space.6"
  - "transition.fast"
  - "z.popover"
a11y:
  - "Main FAB is a <button> with aria-haspopup='menu', aria-expanded, and aria-label (e.g. 'Open menu')."
  - "Each FAB item is a <button> with aria-label from its text; keyboard: Tab moves between items when open, Escape closes."
  - "Focus indicators: :focus-visible draws the outline-primary ring on the main button and items."
  - "Position is via CSS classes (bottom-right etc.) not aria; the menu container is role='menu' when open."
---

# FabMenu

Floating action button with an expandable radial/vertical menu (RadzenFabMenu parity). The main button toggles a set of icon+text items.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `FabMenuItem[]` | — | Items (required). |
| `position` / `Position` | `"bottom-right" \| "bottom-left" \| "top-right" \| "top-left"` | `"bottom-right"` | Screen position. |
| `icon` | `string` | `"+"` | Main button icon/text. |
| `onClick` / `Click` | `(args: FabMenuItemEventArgs) => void` | `undefined` | Called when an item is clicked. |
| `ariaLabel` | `string` | `"Open menu"` | aria-label on the main button. |
| `className` | `string` | `undefined` | Extra class. |

`FabMenuItem` = `{ text: string; icon?: string; value?: string; disabled?: boolean }`
