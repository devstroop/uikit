---
name: Toc
status: implemented
category: navigation
frameworks:
  react: v0.24.0
  htmx: v0.22.0
tokens:
  - "color.border"
  - "color.outline-primary"
  - "color.primary"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "color.text-primary"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.md"
  - "space.1"
  - "space.2"
  - "transition.fast"
a11y:
  - "Root is a <nav> landmark with aria-label; the list is <ol> with each item as <li> containing an <a> with href to the target selector."
  - "Active item has aria-current='location' and is styled with text-primary; inactive uses text-muted."
  - "Click scrolls smoothly to the target and moves focus to the target element for screen readers."
  - "Focus indicators: :focus-visible draws the outline-primary ring on links."
  - "Orientation vertical (default) stacks items; horizontal renders inline."
---

# Toc

Table of contents with scroll-spy active tracking (RadzenToc parity). Renders a list of links to selectors on the page; the active item updates on scroll.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `TocItem[]` | — | Items (required). |
| `selector` / `Selector` | `string` | `undefined` | Scope selector for scroll tracking (e.g. "#content"). When omitted tracks window scroll. |
| `orientation` / `Orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Layout. |
| `onClick` / `Click` | `(args: TocItemEventArgs) => void` | `undefined` | Called when an item is clicked. |
| `ariaLabel` | `string` | `"Table of contents"` | aria-label on the nav. |
| `className` | `string` | `undefined` | Extra class. |

`TocItem` = `{ text: string; selector: string; }`
`TocItemEventArgs` = `{ text: string; selector: string }`
