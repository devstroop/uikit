---
name: DataGrid
status: proposed
category: data
frameworks:
  react: v0.7.0
  htmx: v0.5.0
tokens: []
a11y:
  - "Grid table carries role=grid with aria-rowcount on the data region; sorted columns expose aria-sort (ascending/descending/none) on the th."
  - "Sorting is triggered by a keyboard-focusable control (button in th) and announces the new order via an aria-live result summary."
  - "Per-column filter UI is a labelled form control (label element + value input + operator select), never color- or icon-only state."
  - "The pager is a labelled navigation landmark region: page buttons carry aria-current=page, ellipsis spans are aria-hidden, and the page summary is announced via the same live region."
  - "Empty message and loading overlay are announced (aria-live=polite); loading state exposes aria-busy on the grid region."
---

# DataGrid

Radzen `RadzenDataGrid<TItem>` core parity (client-side data), the data-bound
engine distinct from `Table` (plain layout, RadzenTable parity). The grid
binds a column model to an item array and provides in-memory sorting,
per-column filtering, and paging, reusing the shared descriptor pipeline
from `data-filter.md`.

## Column model

Radzen `RadzenDataGridColumn<TItem>` parity subset:

| Type | Shape |
|---|---|
| `GridColumn<TItem>` | `{ property?, title?, header?, width?, minWidth?, maxWidth?, format?, align?, sortable?, filterable?, visible?, frozen?, render? }` |
| `property` | dotted path binding (e.g. `"address.city"`), resolved with the shared path resolver; column without `property` is template-only (actions column) |
| `title` / `header` | header text (title preferred, header alias) |
| `width` / `minWidth` / `maxWidth` | CSS length strings applied to the colgroup |
| `format` | display format string for number/date values (Radzen `FormatString` parity) |
| `align` | `left` \| `center` \| `right` (th + td alignment, Radzen `TextAlign` parity) |
| `sortable` / `filterable` | per-column overrides of the grid-wide toggles (default: grid-wide) |
| `frozen` | frozen column (left-edge sticky, `--dt-datagrid-frozen-width` for row backgrounds) |
| `render` | react render prop `(row, { index }) => ReactNode`; htmx: inline slot via `data-dt-col-render` or a `Template` child |

## Sorting

- Single + multi-column sorting (`allowSorting`/`allowMultiColumnSorting`,
  Radzen parity). Click cycles `Ascending → Descending → none` per column;
  multi mode keeps prior sort columns (Radzen sequence parity).
- `aria-sort` on the th (`ascending`/`descending`/`none`); the sort control
  is a button inside the th (keyboard accessible).
- Multi-column sort index shown when `showSortIndex` (Radzen
  `ShowMultiColumnSortingIndex` parity).
- `sortItems(items, sorts)` helper (already in the shared pipeline) applies
  the sort descriptor array.

## Filtering

- `allowFiltering` + per-column filter row (Radzen `FilterMode=Simple`
  parity): operator select + value input under each column header.
- Default operator per type: string `Contains`, number/date `Equals`
  (Radzen defaults parity); operators come from the shared
  `FILTER_OPERATORS`/`DEFAULT_OPERATOR_BY_TYPE` maps.
- Descriptors flow through the shared pipeline
  (`applyFilters`/`matchesFilters`/`toFilterString`/`toODataFilterString`);
  `filterCaseSensitivity` (default CaseInsensitive) and `logicalOperator`
  (default And) grid-wide, Radzen parity.
- Filtering is applied client-side to the full item set before
  sorting/paging (Radzen order parity: filter → sort → page).
- htmx: `data-dt-filter-*` attributes on the grid plus a hidden
  `dt:filter-change` payload re-served by the server; client-side filter
  row is rendered by the behavior.

## Paging

- `allowPaging` + `pageSize` (default 10), `pageSizeOptions`, `pageNumber`
  (controlled), `pageNumbersCount` (default 5), Radzen parity.
- Pager top and/or bottom (`pagerPosition`: `Top` \| `Bottom` |
  `TopAndBottom`, Radzen `PagerPosition` flags parity), `showPagingSummary`
  (`Page x of y`), `showPageSizeSelector` (PageSizeText label).
- Page is clamped after filter/sort changes (radzen resets to page 1 on
  filter change; keeps page on sort).

## Grid DOM

- `.dt-datagrid` wrapper > optional top pager > `.dt-datagrid-data`
  (role=grid, aria-rowcount = visible row count + 1) > `table.dt-datagrid-table`
  with colgroup (sticky widths) > thead (header row + optional filter row)
  > tbody (tr per row, hover row bg) > empty message
  `.dt-datagrid-empty` > loading overlay `.dt-datagrid-loading`
  (aria-busy) > optional bottom pager.
- Grid-level `aria-label`/`aria-labelledby`; row count announced via live
  region when sort/filter/page changes.

## Server-side (deferred)

`LoadData({ skip, top, orderBy, filters, sorts })` + `Count` round-trip is
explicitly out of scope for #74; the client pipeline (filter → sort →
page) and the OData string helpers give consumers a server path via
`dt:filter-change`/viewChanged without built-in data loading.

## react

- `DataGrid<TItem>` component (generic, `viewChanged`-style optional
  `onStateChange`); columns via `columns` prop; `rows` prop (readonly
  array); internal state: pageNumber, sorts, filters; derived view =
  filter → sort → page. Loading overlay when `isLoading`.
- `Pager` component (`pageNumber`, `pageSize`, `pageSizeOptions`, `count`,
  `onPageChange`) with `pageNumbersCount`, ellipsis, prev/next,
  aria-current, summary — reused as top/bottom pager.
- exports: `DataGrid`, `GridColumn`, `GridSortDescriptor`,
  `GridFilterState`, `Pager` (+ existing pipeline exports).

## htmx

- `dt-datagrid` behavior: `data-dt-datagrid` root with
  `data-dt-datagrid-properties` (column JSON), `data-dt-datagrid-sortable`,
  `data-dt-datagrid-filterable`, `data-dt-datagrid-pagesize`,
  `data-dt-datagrid-pagesize-options`; sort controls
  (`data-dt-sort`, `data-dt-sort-desc`, cycling on click), filter row
  (`data-dt-filter-property` select, `data-dt-filter-value` input),
  pager (`data-dt-page`, `data-dt-page-size`, `data-dt-page-summary`).
- Events: `dt:grid-change` with detail
  `{ pageNumber, pageSize, sorts, filters, filterString, oDataFilterString }`
  for server round-trips; `dt:grid-sort`, `dt:grid-filter`, `dt:grid-page`
  granular events.
- Reference markup `data-grid.html`/`data-grid.css`.

## Tests

| Area | react | htmx |
|---|---|---|
| column model: dotted paths, format, align, template | DataGrid + grid tests | behavior init/populate |
| sorting: single/multi cycle, aria-sort, sort index | grid tests | `dt:grid-sort` + th classes |
| filtering: per-column, default ops, pipeline reuse, case sensitivity | grid tests | `dt:grid-filter` + hidden payload |
| paging: pageSize options, clamp, summary, pager positions | Pager tests | pager clicks + summary text |
| empty message, loading overlay, aria roles | DataGrid tests | markup assertions |