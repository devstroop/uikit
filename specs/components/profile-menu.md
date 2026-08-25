---
name: ProfileMenu
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
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.full"
  - "radius.md"
  - "radius.sm"
  - "shadow.sm"
  - "space.1"
  - "space.2"
  - "space.3"
  - "transition.fast"
  - "z.popover"
a11y:
  - "Trigger is a <button> with aria-haspopup='menu', aria-expanded, and aria-controls pointing at the dropdown (role='menu')."
  - "Dropdown items are role='menuitem' with aria-disabled; keyboard: Tab moves into menu, ArrowUp/Down move, Enter/Space activate, Escape closes and returns focus to trigger."
  - "Focus indicators: :focus-visible draws the outline-primary ring on trigger and items."
  - "Click outside or Escape closes the menu; the trigger's template (avatar/email) is not aria-hidden."
---

# ProfileMenu

User avatar/trigger with a dropdown menu (RadzenProfileMenu parity). The trigger is a custom template (typically avatar + email) that toggles a menu of items.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `ProfileMenuItem[]` | — | Menu items (required). |
| `trigger` / `Template` | `ReactNode` | `undefined` | Custom trigger content (avatar/email). When omitted a default trigger is rendered. |
| `onClick` / `Click` | `(args: ProfileMenuItemEventArgs) => void` | `undefined` | Called when an item is activated. |
| `ariaLabel` | `string` | `"Profile menu"` | aria-label on the nav. |
| `className` | `string` | `undefined` | Extra class. |

`ProfileMenuItem` = `{ text: string; path?: string; icon?: string; disabled?: boolean }`
