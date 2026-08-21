---
name: Breadcrumb
status: implemented
category: navigation
frameworks:
  react: v0.23.0
  htmx: v0.21.0
tokens:
  - "color.outline-primary"
  - "color.text"
  - "color.text-muted"
  - "color.text-primary"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.sm"
  - "space.1"
  - "transition.fast"
a11y:
  - "Root is a <nav> landmark with aria-label='Breadcrumb'; the list is an ordered list (<ol>) with each item as <li>."
  - "Each link is an <a> with href from path; the last item (current page) has aria-current='page' and is not a link when it has no path."
  - "Disabled items are aria-disabled and not focusable; separators are aria-hidden."
  - "Focus indicators: :focus-visible draws the outline-primary ring on links."
---

# Breadcrumb

Trail of links showing the navigation hierarchy (RadzenBreadCrumb parity). Renders an ordered list of items with separators; clicking fires with the item context. The last item is marked aria-current.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `BreadcrumbItem[]` | — | Items (required). |
| `onClick` / `Click` | `(args: BreadcrumbItemEventArgs) => void` | `undefined` | Called when an item is clicked. |
| `ariaLabel` | `string` | `"Breadcrumb"` | aria-label on the nav. |
| `className` | `string` | `undefined` | Extra class. |

`BreadcrumbItem` = `{ text: string; path?: string; icon?: string; disabled?: boolean }`
`BreadcrumbItemEventArgs` = `{ text: string; path?: string }`
