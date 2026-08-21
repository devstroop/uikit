---
name: Pager
status: implemented
category: navigation
frameworks:
  react: v0.22.0
  htmx: v0.20.0
tokens:
  - "color.surface"
  - "color.surface-hover"
  - "color.border"
  - "color.border-strong"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-hover"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.sm"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "control.height-sm"
  - "space.1"
  - "space.2"
  - "transition.fast"
a11y:
  - "The pager is a <nav> landmark with an aria-label (default 'Pagination'), so the navigation region is discoverable."
  - "Each page number is a native <button> with aria-current='page' on the active page; first/prev/next/last buttons carry aria-labels and titles."
  - "Ellipsis separators are aria-hidden and not focusable."
  - "When showPagingSummary is true, the summary text lives in an aria-live='polite' region so page changes are announced without moving focus."
  - "ArrowLeft/ArrowRight (and Home/End) move focus between page buttons where focusable, matching the Radzen pager keyboard pattern."
  - "Focus indicators: :focus-visible draws the 3px outline-primary ring on every button."
  - "Page size selector is a native <select> with an accessible label ('Items per page')."
---

# Pager

Standalone paging control reused by DataGrid and DataList (RadzenPager parity). Renders a navigable set of page numbers with first/prev/next/last controls, an optional paging summary, and an optional page-size selector.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `count` / `Count` | `number` | `0` | Total item count. |
| `pageSize` / `PageSize` | `number` | `10` | Items per page. |
| `page` / `Page` | `number` | `1` | 1-indexed current page (controlled). |
| `defaultPage` | `number` | `1` | Initial page (uncontrolled, React only). |
| `pageSizeOptions` / `PageSizeOptions` | `number[]` | `undefined` | When provided, renders a page-size <select>. |
| `pageNumbersCount` / `PageNumbersCount` | `number` | `5` | Max visible page number buttons (Radzen PageNumbersCount parity; ellipsis collapses the rest). |
| `alwaysVisible` / `AlwaysVisible` | `boolean` | `false` | When false, the pager hides itself when count <= pageSize (single page). |
| `horizontalAlign` / `HorizontalAlign` | `"left" \| "center" \| "right" \| "justify"` | `"left"` | Content alignment inside the nav. |
| `showPagingSummary` / `ShowPagingSummary` | `boolean` | `true` | Show the "Page X of Y (N items)" summary. |
| `pagingSummaryFormat` / `PagingSummaryFormat` | `string` | `"Page {0} of {1} ({2} items)"` | Format string for the summary; {0}=page, {1}=pageCount, {2}=count. |
| `pagingSummaryTemplate` / `PagingSummaryTemplate` | `ReactNode \| (info: PagingInformation) => ReactNode` | `undefined` | Custom summary render (React render prop; htmx uses template slot). |
| `firstPageTitle` / `PrevPageTitle` etc. | `string` | `"First page"` etc. | i18n titles + aria-labels for first/prev/next/last. |
| `pageTitleFormat` | `string` | `"Page {0}"` | Title format for each page button. |
| `pageAriaLabelFormat` | `string` | `"Page {0}"` | aria-label format for each page button. |
| `onPageChange` / `PageChanged` | `(args: PageEventArgs) => void` | `undefined` | Called when page changes; args = { page, skip, top, pageCount, pageSize }. |
| `onPageSizeChange` / `PageSizeChanged` | `(pageSize: number) => void` | `undefined` | Called when the page-size selector changes. |
| `ariaLabel` | `string` | `"Pagination"` | aria-label on the nav landmark. |
| `className` | `string` | `undefined` | Extra class on root. |

`PageEventArgs` = `{ page: number; skip: number; top: number; pageCount: number; pageSize: number }` where `skip = (page-1)*pageSize`, `top = pageSize`.

`PagingInformation` = `{ count: number; pageNumber: number; pageSize: number; pageCount: number }`.

## Behavior

- `pageCount = max(1, ceil(count / pageSize))`; current page is clamped to 1..pageCount.
- Visible numbers are produced by `pageItems(current, pageCount, pageNumbersCount)` — up to N buttons with leading/trailing "1 …" and "… N" ellipsis where the window does not touch the ends.
- When `alwaysVisible` is false and `pageCount <= 1`, the pager renders nothing (hidden, not `aria-hidden` — removed from the tree).
- Horizontal alignment maps to flex justify: left=start, center=center, right=end, justify=space-between (summary and controls spread).
- htmx variant: markup is server-rendered with `data-dt-pager` + `data-dt-page` attrs; behavior reads `data-dt-*` (count, page-size, page, page-numbers-count, always-visible, horizontal-align, paging-summary-format) and dispatches `dt:page-change{page, skip, top}` on the root; page-size selector dispatches `dt:page-size-change{pageSize}`.
