---
name: Timeline
status: implemented
category: data
frameworks:
  react: v0.27.0
  htmx: v0.25.0
tokens:
  - "color.border"
  - "color.primary"
  - "color.surface"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.full"
  - "space.1"
  - "space.2"
  - "space.3"
a11y:
  - "Root is an <ol> with role='list' and aria-label; each item is <li> with the label and content."
  - "The marker dot is decorative (aria-hidden); the label is real text so sequence is announced by list semantics."
  - "Focus indicators: :focus-visible draws the outline-primary ring on interactive content if present."
---

# Timeline

Vertical sequence of labelled items with a connecting line and markers (RadzenTimeline parity). Labels and content are both templateable.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `TimelineItem[]` | — | Items (required). |
| `reverse` | `boolean` | `false` | Reverse order display. |
| `ariaLabel` | `string` | `"Timeline"` | aria-label on the list. |
| `className` | `string` | `undefined` | Extra class. |

`TimelineItem` = `{ label: ReactNode; content?: ReactNode }`
