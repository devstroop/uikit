---
name: DataList
status: implemented
category: data
frameworks:
  react: v0.11.0
  htmx: v0.9.0
tokens:
  - "color.border"
  - "color.primary"
  - "color.text"
  - "color.text-muted"
a11y:
  - "The list container carries an aria-label (react) or the markup provides its own label; item boundaries are structural (each item is a distinct child element)."
  - "The pager is a labelled navigation region: page buttons carry aria-current=page, ellipsis spans are aria-hidden, and the page summary is announced via a live region."
  - "Empty and loading states are announced (aria-live=polite); no item content is conveyed by color or icon alone."
---

# DataList

Paged list/grid of items with a per-item template (Radzen `RadzenDataList`
parity). A data-bound pagination primitive distinct from `DataGrid` — it has
no sorting, filtering, or selection.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `readonly T[]` | — | Item collection (required) |
| `pageSize` | `number` | `10` | Items per page (Radzen `PageSize` parity) |
| `pageSizeOptions` | `readonly number[]` | `undefined` | Selectable page sizes in the pager |
| `wrapItems` | `boolean` | `false` | Wrap items in a CSS grid instead of stacking (Radzen `WrapItems` parity) |
| `itemTemplate` | `(item: T, index: number) => ReactNode` | `String(item)` | Per-item renderer (Radzen `ItemTemplate` parity) |
| `emptyMessage` | `ReactNode` | `"No records found"` | Shown when `data` is empty |
| `emptyTemplate` | `ReactNode` | `undefined` | Custom empty-state renderer (Radzen `EmptyTemplate` parity) |
| `loadingTemplate` | `ReactNode` | `undefined` | Custom loading renderer (Radzen `LoadingTemplate` parity) |
| `isLoading` | `boolean` | `false` | When true, renders the loading template |
| `showPageSizeSelector` | `boolean` | `true` | Show the page-size selector in the pager |
| `ariaLabel` | `string` | `"Data list"` | Accessible label for the container |

## Behavior

- Paging is client-side: `view = data.slice((pageNumber-1)*pageSize, pageNumber*pageSize)`;
  the reusable `Pager` component renders summary, numbered pages (ellipsis),
  prev/next, and an optional page-size selector. Changing the page size
  resets to page 1.
- `wrapItems` renders the items container as a CSS grid
  (`repeat(auto-fill, minmax(14rem, 1fr))`); otherwise items stack
  vertically.
- Empty: `data.length === 0` renders `emptyMessage` or `emptyTemplate`.
  Loading: `isLoading` renders `loadingTemplate`.
- htmx: `data-dx-datalist` root with a `data-dx-datalist-items` container of
  `data-dx-datalist-item` children and a `data-dx-datalist-pager` slot;
  `data-dx-datalist-pagesize` / `-pagesize-options` / `-pagenumbers`;
  `data-dx-datalist-wrap` switches to grid layout;
  `data-dx-datalist-empty` message element.

## Server-side (deferred)

Radzen's `LoadData({ skip, top })` + `Count` round-trip is out of scope;
consumers drive server pagination via the `dx:datalist-change` /
`dx:datalist-page` events (htmx) or by slicing `data` themselves (react).

## Events

- react: none emitted (controlled via props + `Pager` callbacks).
- htmx: `dx:datalist-change` with `{ pageNumber, pageSize, pageCount,
  total }`; `dx:datalist-page` with `{ pageNumber }` on page clicks.

## Tests

| Area | react | htmx |
|---|---|---|
| default page (pageSize) | DataList tests | visibility of first page items |
| paging + page-change event | DataList tests | `dx:datalist-page` + item visibility |
| page-size change resets to page 1 | DataList tests | pager summary after select |
| wrap vs stacked layout | DataList tests | `data-dx-datalist-wrap` class |
| empty message / empty template | DataList tests | `data-dx-datalist-empty` unhidden |
| loading template | DataList tests | markup assertion |