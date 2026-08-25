---
name: Tree
status: implemented
category: data
frameworks:
  react: v0.25.0
  htmx: v0.23.0
tokens:
  - "color.border"
  - "color.border-primary"
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
  - "Root has role='tree' with aria-label and aria-multiselectable for multiple selection; each node has role='treeitem' with aria-expanded (when has children), aria-selected, aria-level, and aria-setsize/aria-posinset."
  - "Keyboard: ArrowDown/ArrowUp move focus, ArrowRight expands (or moves to first child), ArrowLeft collapses (or moves to parent), Home/End jump to first/last visible, Enter/Space toggles selection, typeahead jumps to next matching label."
  - "Expand/collapse is via a caret <button> with aria-label and aria-expanded; lazy children show a loading indicator with aria-busy on the node."
  - "Focus indicators: :focus-visible draws the outline-primary ring on the treeitem."
---

# Tree

Hierarchical tree with expand/collapse and selection (RadzenTree parity). Renders nested items with lazy async loading and single/multiple selection.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `TreeItem[]` | — | Root items (required). |
| `children` | `(item: TreeItem) => TreeItem[] \| undefined` | `undefined` | Getter for children; when omitted uses `item.children`. |
| `textProperty` | `string` | `"text"` | Property for label text. |
| `keyProperty` | `string` | `"id"` | Property for unique key. |
| `selectionMode` | `"single" \| "multiple"` | `"single"` | Selection mode. |
| `selectedItem` | `TreeItem` | `undefined` | Controlled single selection. |
| `selectedItems` | `TreeItem[]` | `undefined` | Controlled multiple selection. |
| `onChange` / `Change` | `(args: TreeChangeArgs) => void` | `undefined` | Called on selection change. |
| `onExpand` / `Expand` | `(args: TreeExpandArgs) => void` | `undefined` | Called on expand. |
| `onCollapse` / `Collapse` | `(args: TreeCollapseArgs) => void` | `undefined` | Called on collapse. |
| `loadChildData` | `(item: TreeItem) => Promise<TreeItem[]>` | `undefined` | Async loader for lazy children; shows loading state. |
| `ariaLabel` | `string` | `"Tree"` | aria-label on the tree. |
| `className` | `string` | `undefined` | Extra class. |

`TreeItem` = `{ id: string; text: string; children?: TreeItem[]; disabled?: boolean; expanded?: boolean; selected?: boolean }`
