---
name: Splitbutton
status: implemented
category: actions
frameworks:
  react: v0.15.0
  htmx: v0.13.0
tokens:
  - "color.primary"
  - "color.primary-hover"
  - "color.primary-fg"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "color.border-strong"
  - "color.danger"
  - "color.danger-hover"
  - "color.outline-primary"
  - "color.outline-danger"
  - "radius.md"
  - "font.sans"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.weight-medium"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "transition.fast"
  - "shadow.md"
  - "z.popover"
  - "space.1"
  - "space.2"
  - "space.3"

a11y:
  - "Primary button is a semantic <button>; the caret trigger has aria-haspopup=\"menu\", aria-expanded, and aria-controls pointing at the menu."
  - "Menu is role=\"menu\"; items are role=\"menuitem\" with aria-disabled for disabled actions."
  - "Active item follows via aria-activedescendant on the menu; the menu closes on Escape, outside click, or item activation."
  - "Keyboard-only focus rings via :focus-visible (outline-primary on the buttons, outline-danger on danger items)."
  - "Text-on-fill contrast >= 4.5:1 (primary-fg on primary, danger-fg on danger)."
  - "Danger items are reserved for destructive actions."
---

# Splitbutton

A primary action button paired with a caret trigger that opens a menu of
additional actions.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `ReactNode` | `undefined` | Primary button content |
| `onClick` | `() => void` | `undefined` | Primary action handler |
| `items` | `readonly { key, label, danger?, disabled?, onClick? }[]` | `[]` | Menu actions |
| `size` | `sm` \| `md` \| `lg` | `md` | Density tier (`control.height-*`) |
| `disabled` | `boolean` | `false` | Disables both buttons and the menu |
| `aria-label` | `string` | `undefined` | Accessible name for the caret trigger (defaults to "More actions") |

## Behavior

- Renders a primary button and a caret button joined into one control; the
  caret toggles the menu.
- The menu opens below the control (`z-index: z.popover`) and closes on
  outside click, Escape, or item activation.
- Activating a non-disabled item fires its `onClick` and closes the menu.
- Menu items with `danger` get the danger text color and danger focus ring.

## Keyboard

- `ArrowDown`/`Enter`/`Space` on the caret open the menu.
- Inside the menu: `ArrowDown`/`ArrowUp` move the active item (skipping
  disabled), `Home`/`End` jump to first/last, `Enter` activates, `Escape`
  closes and returns focus to the caret.

## Tests

| Scenario | Assertion |
|---|---|
| Renders primary + caret | two buttons; caret has `aria-haspopup="menu"` and `aria-expanded="false"` |
| Opens on caret click | menu appears with `role="menu"` and items with `role="menuitem"` |
| Primary action | clicking the primary button fires `onClick` and never opens the menu |
| Activates an item | clicking a menu item fires its `onClick` and closes the menu |
| Keyboard menu navigation | ArrowDown/ArrowUp move `aria-activedescendant`; Enter activates the active item |
| Escape closes | Escape closes the menu and returns focus to the caret |
| Disabled item | disabled item has `aria-disabled="true"` and is skipped by nav |
| Disabled control | both buttons are disabled and the menu never opens |
| Danger item | danger item gets the danger class |
| Sizes | `md` class by default; `size="sm"` applies the `sm` class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).