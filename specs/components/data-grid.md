---
name: DataGrid
status: implemented
category: data
frameworks:
  react: v0.10.0
  htmx: v0.8.0
tokens: []
a11y:
  - "Grid table carries role=grid with aria-rowcount on the data region; sorted columns expose aria-sort (ascending/descending/none) on the th."
  - "Sorting is triggered by a keyboard-focusable control (button in th) and announces the new order via an aria-live result summary."
  - "Per-column filter UI is a labelled form control (label element + value input + operator select), never color- or icon-only state."
  - "The pager is a labelled navigation landmark region: page buttons carry aria-current=page, ellipsis spans are aria-hidden, and the page summary is announced via the same live region."
  - "Empty message and loading overlay are announced (aria-live=polite); loading state exposes aria-busy on the grid region."
  - "Selectable rows expose aria-selected on the tr; frozen columns keep sticky cells in the accessibility tree (role gridcell, not aria-hidden)."
  - "Column resize handles are separator roles with aria-orientation=vertical and per-column aria-labels; the column picker is an aria-expanded menu of labelled checkboxes."
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

## Selection

- `selectionMode`: `None` \| `Single` \| `Multiple` (Radzen `SelectionMode`
  parity). Rows expose `aria-selected` and a `selected` row class.
- Controlled keys via `selectedKeys` + `onSelectionChange(keys)` (react);
  htmx: `data-dt-datagrid-select="single|multiple"`, `data-dt-row-key` per
  row, event `dt:grid-select` with `{ keys }`.
- Row clicks that land on interactive controls (sort buttons, filter
  inputs, resize handles, links) do not toggle selection.

## Column picker

- `showColumnPicker` (react) / `data-dt-datagrid-column-picker` (htmx):
  toolbar button toggling an `aria-expanded` menu of labelled checkboxes.
- `column.visible: false` columns are hidden initially but still listed in
  the picker (Radzen `Columns` visibility parity); picker text customizable
  via `columnPickerText` / `data-dt-datagrid-picker-text`.

## Column resize / reorder / frozen

- `allowColumnResize` (react) / `data-dt-datagrid-resize` (htmx): separator
  handle per column header; dragging updates the colgroup width
  (min 48px).
- `allowColumnReorder` (react) / `data-dt-datagrid-reorder` (htmx):
  drag-and-drop on headers reorders columns; htmx fires
  `dt:grid-column-reorder` with `{ from, to }`.
- Frozen columns: `frozen: true` pins the column to the left edge with
  sticky positioning; multiple frozen columns stack offsets computed from
  their widths (react helper `gridFrozenOffsets`, htmx synced to body
  cells on every view change).

## Grouping

- `allowGrouping` (react) / `data-dt-datagrid-groupable` (htmx): a group
  panel in the toolbar; drag a column header onto the panel to group by it
  (reorder + resize must be enabled for drag). The grouped column is
  hidden from the grid body while grouping is active.
- Group header rows render `Title: value (count)` with a toggle button
  (`aria-expanded`, ▼/▶ indicator) collapsing/expanding the group's rows;
  the panel shows an active-group chip with a remove (×) button.
- React: `groupPanelText`, `groupExpanded` props. htmx events:
  `dt:grid-group-change {property}` (null on clear).

## Inline editing

- `editMode="EditRow"` (react) / `data-dt-datagrid-edit` (htmx): command
  column (Actions) with Edit/Save/Cancel per row; editing swaps the row's
  cells for typed inputs (number/checkbox/text per column type). Only one
  row edits at a time; cancel restores original cell text.
- `allowRowCreate` (react) / `data-dt-datagrid-create` (htmx): Add row
  button in the toolbar opens a new-row input row (Save/Cancel).
  `data-dt-datagrid-delete` (htmx) adds a per-row Delete button.
- Events: react `onRowUpdate(original, updated)`, `onRowCreate(row)`,
  `onRowDelete(row)`; htmx `dt:grid-row-update {original, updated}`,
  `dt:grid-row-create {row}`, `dt:grid-row-delete {row}` — consumers
  persist to their data store (grid holds rows in the DOM only).

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
  array); internal state: pageNumber, sorts, filters, groupBy, expanded
  groups, editKey; derived view = filter → sort → group → page. Loading
  overlay when `isLoading`.
- Grouping/editing props: `allowGrouping`, `groupPanelText`,
  `groupExpanded`, `editMode` (`None`/`Single`/`EditRow`),
  `allowRowCreate`, `onRowUpdate(original, updated)`,
  `onRowCreate(row)`, `onRowDelete(row)`.
- `Pager` component (`pageNumber`, `pageSize`, `pageSizeOptions`, `count`,
  `onPageChange`) with `pageNumbersCount`, ellipsis, prev/next,
  aria-current, summary — reused as top/bottom pager.
- exports: `DataGrid`, `GridColumn`, `GridSortDescriptor`,
  `GridFilterState`, `Pager`, `GridGroup`, `GridGroupedItem`,
  `groupItems` (+ existing pipeline exports).

## htmx

- `dt-datagrid` behavior: `data-dt-datagrid` root with
  `data-dt-datagrid-properties` (column JSON), `data-dt-datagrid-sortable`,
  `data-dt-datagrid-filterable`, `data-dt-datagrid-pagesize`,
  `data-dt-datagrid-pagesize-options`, `data-dt-datagrid-groupable`,
  `data-dt-datagrid-edit`, `data-dt-datagrid-delete`,
  `data-dt-datagrid-create`; sort controls (`data-dt-sort`,
  `data-dt-sort-desc`, cycling on click), filter row
  (`data-dt-filter-property` select, `data-dt-filter-value` input),
  pager (`data-dt-page`, `data-dt-page-size`, `data-dt-page-summary`).
- Events: `dt:grid-change` with detail
  `{ pageNumber, pageSize, sorts, filters, filterString, oDataFilterString }`
  for server round-trips; `dt:grid-sort`, `dt:grid-filter`, `dt:grid-page`,
  `dt:grid-group-change {property}`, `dt:grid-row-update {original,
  updated}`, `dt:grid-row-create {row}`, `dt:grid-row-delete {row}`
  granular events.
- Reference markup `data-grid.html`/`data-grid.css`.

## Tests

| Area | react | htmx |
|---|---|---|
| column model: dotted paths, format, align, template | DataGrid + grid tests | behavior init/populate |
| sorting: single/multi cycle, aria-sort, sort index | grid tests | `dt:grid-sort` + th classes |
| filtering: per-column, default ops, pipeline reuse, case sensitivity | grid tests | `dt:grid-filter` + hidden payload |
| paging: pageSize options, clamp, summary, pager positions | Pager tests | pager clicks + summary text |
| selection: single/multiple, aria-selected, interactive-target guard | DataGrid tests | `dt:grid-select` + aria-selected |
| column picker: toggle visibility, visible=false initial, picker text | DataGrid tests | `dt:grid-column-pick` + panel render |
| resize: drag to colgroup width, min clamp | DataGrid tests | handle mousedown/mousemove |
| reorder: drag/drop order change | DataGrid tests | dragstart/drop + `dt:grid-column-reorder` |
| grouping: panel drop, group rows, collapse/expand, clear | DataGrid tests | `dt:grid-group-change` + aria-expanded |
| inline editing: edit/save/cancel, create, delete | DataGrid tests | `dt:grid-row-update`/`-create`/`-delete` |
| frozen: sticky offsets stacking | DataGrid tests | th/td sticky + left offsets |
| empty message, loading overlay, aria roles | DataGrid tests | markup assertions |