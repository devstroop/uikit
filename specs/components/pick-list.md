---
name: PickList
status: implemented
category: data
frameworks:
  react: v0.25.0
  htmx: v0.23.0
tokens:
  - "color.border"
  - "color.border-strong"
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
  - "radius.md"
  - "radius.sm"
  - "space.1"
  - "space.2"
  - "transition.fast"
a11y:
  - "Source and target lists are <div> with role='listbox' and aria-label ('Source'/'Target'); each option has role='option' with aria-selected."
  - "Move buttons are <button> with aria-labels ('Move selected to target', 'Move all', 'Move up', 'Move down') and aria-disabled when no selection."
  - "Keyboard: ArrowUp/Down move within a listbox, Enter/Space toggles selection, Tab moves between source, buttons, and target."
  - "Focus indicators: :focus-visible draws the outline-primary ring on options and buttons."
---

# PickList

Dual listbox for moving items between source and target (RadzenPickList parity). Supports single/multiple selection, move selected/all, and reorder within target.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `source` | `PickListItem[]` | — | Source items (required). |
| `target` | `PickListItem[]` | — | Target items (required). |
| `onSourceChange` | `(items: PickListItem[]) => void` | `undefined` | Called when source changes. |
| `onTargetChange` | `(items: PickListItem[]) => void` | `undefined` | Called when target changes. |
| `keyProperty` | `string` | `"id"` | Property for identity. |
| `onMove` | `(args: PickListMoveArgs) => void` | `undefined` | Called on any move (selected/all/up/down). |
| `ariaLabel` | `string` | `"PickList"` | aria-label on the root. |
| `className` | `string` | `undefined` | Extra class. |

`PickListItem` = `{ id: string; text: string; disabled?: boolean }`
`PickListMoveArgs` = `{ source: PickListItem[]; target: PickListItem[]; moved: PickListItem[]; direction: "toTarget" | "toSource" | "up" | "down" | "allToTarget" | "allToSource" }`
