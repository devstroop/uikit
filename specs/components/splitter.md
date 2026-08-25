---
name: Splitter
status: implemented
category: navigation
frameworks:
  react: v0.24.0
  htmx: v0.22.0
tokens:
  - "color.border"
  - "color.border-strong"
  - "color.outline-primary"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "font.sans"
  - "font.size-sm"
  - "radius.md"
  - "space.1"
  - "space.2"
  - "transition.fast"
a11y:
  - "Panes are <div> with role='group' and aria-label from the pane's label; the splitter container is not a landmark."
  - "Resize handle is a <div> with role='separator' aria-orientation='horizontal|vertical', aria-valuemin, aria-valuemax, aria-valuenow (percent), tabindex=0, and aria-label."
  - "Keyboard: ArrowLeft/ArrowRight (horizontal) or ArrowUp/ArrowDown (vertical) resize by 5% within min/max; Home/End jump to min/max; Enter/Space toggles collapse when collapsible."
  - "Focus indicators: :focus-visible draws the outline-primary ring on the handle."
  - "Collapse/expand buttons (when collapsible) are <button> with aria-label and aria-expanded."
---

# Splitter

Resizable pane layout with draggable handles (RadzenSplitter parity). Supports horizontal/vertical orientation, collapsible panes, and cancelable resize/collapse events.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` / `Orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Split direction. |
| `panes` | `SplitterPane[]` | — | Panes (required, at least 2). |
| `onResize` / `Resize` | `(args: SplitterResizeArgs) => void` | `undefined` | Called on resize; args { paneIndex, newSize, cancel } — set cancel=true to prevent. |
| `onCollapse` / `Collapse` | `(args: SplitterCollapseArgs) => void` | `undefined` | Called on collapse toggle; args { paneIndex, collapse, cancel }. |
| `ariaLabel` | `string` | `"Splitter"` | aria-label on the container. |
| `className` | `string` | `undefined` | Extra class. |

`SplitterPane` = `{ size?: string; min?: string; max?: string; collapsible?: boolean; collapsed?: boolean; label?: string; children: ReactNode }`
`SplitterResizeArgs` = `{ paneIndex: number; newSize: number; cancel: boolean }`
