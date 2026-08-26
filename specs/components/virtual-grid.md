---
name: VirtualGrid
status: implemented
category: data
frameworks:
  react: v0.27.0
  htmx: v0.25.0
tokens:
  - "color.border"
  - "color.border-strong"
  - "color.outline-primary"
  - "color.surface"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "space.2"
a11y:
  - "Root is a <div> with role='grid' aria-label and aria-rowcount set to the total count; visible rows are role='row' with role='gridcell' cells."
  - "The scroll container is focusable (tabindex=0) with an aria-label; windowed rendering keeps aria-rowcount stable so screen readers see the full size."
  - "Keyboard: ArrowUp/Down scroll by row, PageUp/PageDown by page; focus stays on the container."
---

# VirtualGrid

Windowed virtual rows over a large dataset (RadzenVirtualGrid parity). Renders only the visible slice (`loadData({skip, top})`) inside a fixed-height scroll container with `rowHeight`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `count` | `number` | — | Total row count (required). |
| `rowHeight` | `number` | `40` | Fixed row height in px. |
| `height` | `number` | `320` | Container height in px. |
| `loadData` | `(args: { skip: number; top: number }) => Promise<VirtualRow[]>` | — | Async slice loader (required). |
| `columns` | `VirtualColumn[]` | — | Column definitions `{ property, title, width? }`. |
| `ariaLabel` | `string` | `"Virtual grid"` | aria-label on the grid. |
| `className` | `string` | `undefined` | Extra class. |

`VirtualRow` = `Record<string, unknown>`
