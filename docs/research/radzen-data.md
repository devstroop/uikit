# Radzen data visualization — reference

Source: `radzenhq/radzen-blazor` master (`Radzen.Blazor/`), 2026-08.
Supplements `docs/research/radzen-reference.md` (section 2 links here).

## DataGrid (`RadzenDataGrid<TItem>`)

### Data flow
- Client-side: bind `Data`; grid sorts/filters/pages in memory.
- Server-side: `Data` + `Count` + `LoadData(LoadDataArgs{Skip, Top, OrderBy,
  Filters, Sorts})`. **Gotcha: always set both Data and Count in the handler —
  missing Count breaks paging.** Consumer applies
  `query.Skip(args.Skip).Take(args.Top).OrderBy(args.OrderBy)`; Filter/OrderBy
  helpers in QueryableExtension.
- `LoadData` fires on page change, sort, filter, grouping.

### Key parameters
- AllowSorting / AllowMultiColumnSorting / ShowMultiColumnSortingIndex
- AllowFiltering + FilterMode (Simple / SimpleWithMenu / Advanced /
  CheckBoxList), FilterAsYouType, FilterDelay, FilterCaseSensitivity,
  FilterDateFormat, AutoApplyCheckBoxListFilter
- AllowGrouping + HideGroupedColumn, GroupHeaderTemplate,
  GroupFootersAlwaysVisible, ShowGroupExpandColumn
- AllowPaging + PageSize, PageSizeOptions, PageNumbersCount, PagerPosition
  (Top=1/Bottom=2/TopAndBottom=3), PagerAlwaysVisible, PagerHorizontalAlign,
  ShowPagingSummary, PagingSummaryFormat, PagingSummaryTemplate, PageSizeText
- SelectionMode (Single/Multiple), `@bind-Value IList<TItem>` (or Value+
  ValueChanged), AllowRowSelectOnRowClick
- EditMode (Single/Multiple), RowEdit/RowUpdate/RowCreate,
  `EditRow(item)/UpdateRow(item)/InsertRow(item)` methods
- AllowColumnResize / AllowColumnReorder / AllowColumnPicking /
  AllowSortingColumnPicker / ColumnsPickerMaxSelectedLabels
- AllowVirtualization + VirtualizationOverscanCount, AllowAlternatingRows,
  GridLines (Default/Both/None/Horizontal/Vertical), Responsive, KeyProperty,
  ShowHeader, ShowEmptyMessage, IsLoading, AllGroupsExpanded, TabIndex,
  LogicalFilterOperator, ColumnWidth

### Events
LoadData, Page, PageSizeChanged, Sort(DataGridColumnSortEventArgs{Column,
Order, Sorts}), Filter/FilterCleared(DataGridColumnFilterEventArgs), Group,
RowClick/RowDoubleClick/RowSelect/RowDeselect, CellClick/CellDoubleClick/
CellContextMenu, RowExpand/RowCollapse/GroupRowExpand/GroupRowCollapse,
ColumnResized/ColumnReordering/ColumnReordered, RowRender/GroupRowRender/
CellRender/HeaderCellRender/FooterCellRender (set args.Attributes, never
StateHasChanged), SettingsChanged(DataGridSettings), PickedColumnsChanged.

### Templates
HeaderTemplate (custom header bar), FooterTemplate, EmptyTemplate,
LoadingTemplate, GroupHeaderTemplate(Group), plus per-column
HeaderTemplate/FooterTemplate/GroupFooterTemplate (context = group items —
aggregate via Sum/Average/Count)/FilterTemplate/FilterValueTemplate/
Template/EditTemplate (per-row EditTemplate renders EditTemplate of each
column in edit mode; column IsInEditMode override).

### DOM/classes
`.rz-data-grid` > `.rz-group-header` (.rz-custom-header, .rz-group-header-
items/.item/.item-title, .rz-column-picker) > pager (top) > `.rz-data-grid-
data` (role=grid|treegrid, aria-multiselectable, aria-rowcount, aria-activedescendant) >
`table.rz-grid-table.rz-grid-table-fixed[.rz-grid-table-striped]` (+
rz-grid-gridlines-* mods) with colgroup (col ids `<id>-col`) > thead (multi-
level rows, `.rz-sortable-column`, `.rz-col-icon`, `.rz-cell-filter`,
`.rz-cell-filter-content`, `.rz-cell-filter-label`, `.rz-grid-filter-active`,
`.rz-current-filter`, `.rz-cell-filter-clear`, filter buttons `.rz-apply-
filter`/`.rz-clear-filter`) > tbody (`.rz-col-icon`, `.rz-cell-toggle`,
`.rz-cell-data rz-text-truncate`) > tfoot.rz-datatable-tfoot > empty
`.rz-datatable-emptymessage(-row)` > loading `.rz-datatable-loading(-content)` >
pager (bottom) > `.rz-custom-footer`.

## DataGridColumn (`RadzenDataGridColumn<TItem>`)

Property (dotted paths), Title, UseDisplayName (DisplayAttribute), FormatString
+ FormatProvider, Width/MinWidth/MaxWidth, TextAlign, Frozen + FrozenPosition
(Left/Right; stacking via `inset-inline-start/end: calc(...)` of prior widths),
Resizable/Reorderable/Groupable/Sortable/Filterable/Pickable/Visible (+
responsive visibility), SortOrder + SortOrderSequence (Asc→Desc→none), SortProperty/
FilterProperty/GroupProperty, FilterValue/SecondFilterValue + FilterOperator/
SecondFilterOperator + LogicalFilterOperator + CollectionFilterMode,
FilterPlaceholder, CustomFilterExpression, Template/EditTemplate/IsInEditMode,
HeaderTemplate/FooterTemplate/GroupFooterTemplate/FilterTemplate/
FilterValueTemplate/SecondFilterValueTemplate, CssClass/CalculatedCssClass/
HeaderCssClass/FooterCssClass, HeaderWhiteSpace/WhiteSpace (truncate),
UniqueID, OrderIndex, child `Columns` for composite multi-level headers.
Per-type filter UI: textbox (default Contains for strings), date popup,
enum dropdown, numeric, bool tri-state checkbox, CheckBoxList of distinct
values (FilterLookupData/TextProperty/ValueProperty, virtualized).

## DataList (`RadzenDataList<TItem>`)
PagedDataBoundComponent: Data OR LoadData+Count; AllowPaging/PageSize/
PageSizeOptions/PageNumbersCount/PagerPosition; Template (per item, context
TItem), WrapItems (row wrap), ShowEmptyMessage/EmptyTemplate/IsLoading/
LoadingTemplate. DOM: `.rz-datalist-data` > `.rz-g` (grid) > rows. No sorting/
filtering/selection.

## DataFilter (`RadzenDataFilter<TItem>`)
Expression builder UI. `Properties` = RenderFragment of
`RadzenDataFilterProperty{Property, Title, FilterOperator(default Contains for
string), FilterOperators, Editor (DateTime/Number/Enum/String)}`. Params:
LogicalFilterOperator (And/Or), UniqueFilters, AllowColumnFiltering,
FilterCaseSensitivity, FilterDateFormat, `ViewChanged(EventCallback
<IQueryable<TItem>>)` fires per change. DOM: `.rz-datafilter-group` >
`.rz-datafilter-item` (property/operator/editor/clear) + nested groups +
`.rz-datafilter-operator-bar` (AND/OR), `.rz-datafilter-all-items-clear`.
Apply: `query.Where(filters, logicalFilterOperator, filterCaseSensitivity)`;
serialize: `ToFilterString()` / `ToODataFilterString()`.

## Filter model
- `FilterOperator`: Equals, NotEquals, LessThan, LessThanOrEquals, GreaterThan,
  GreaterThanOrEquals, Contains, StartsWith, EndsWith, DoesNotContain, In,
  NotIn, IsNull, IsEmpty, IsNotNull, IsNotEmpty, Custom.
- `LogicalFilterOperator`: And, Or.
- `FilterDescriptor{Property, FilterOperator, Value, SecondFilterOperator,
  SecondValue, LogicalFilterOperator}`.
- `CompositeFilterDescriptor{FilterOperator, LogicalFilterOperator, Filters}`.
- `SortDescriptor{Property, SortOrder}`; `SortOrder`: Ascending/Descending.

## QueryableExtension (IQueryable helpers)
`Where(filters, logicalOperator, caseSensitivity)`, `Where(columns)`,
`Where(dataFilter)`, `Where(property, value, StringFilterOperator, cs)`,
`OrderBy(selector)`, `OrderBy(sortDescriptors)`, `Select(propertyNames)`,
`SelectMany`, `Distinct`, `GroupByMany(properties)` (GroupResult{Key, Items,
Count, Subgroups}), aggregates `Sum/Average/Min/Max(type)`,
`ToFilterString<T>(columns)`, `ToFilterString(filters)`,
`ToODataFilterString<T>(columns|dataFilter|filters)`, `AsODataEnumerable`.

## Table (`RadzenTable<TItem>`)
Layout-only. `Columns`/`Rows` render fragments built from `RadzenTableHeader`,
`RadzenTableHeaderRow`, `RadzenTableHeaderCell`, `RadzenTableRow`,
`RadzenTableCell`. Params: `AllowAlternatingRows`, `GridLines` (Default/Both/
None/Horizontal/Vertical). No data binding, no events.

## Pager (`RadzenPager`)
Standalone. `Count`, `PageSize`, `PageSizeOptions`, `PageNumbersCount`,
`PageChanged(PagerEventArgs{Page, Skip, Top, PageCount, PageSize})`,
`PageSizeChanged`, `PageReload` (reload button), `AlwaysVisible`,
`HorizontalAlign`, `Density`, `InputSize`, `ShowPagingSummary`/
`PagingSummaryTemplate(PagingInformation)`/`PagingSummaryFormat`,
`FirstPageTitle/PrevPageLabel/NextPageLabel/LastPageTitle` + aria-label props,
`PageTitleFormat`, `PageAriaLabelFormat`. DOM: `.rz-pager-element` classes
(first/prev/next/last/reload/pages), `.rz-pager-item`, `.rz-pager-summary`,
`.rz-pagesize-text`, icons `rzi-caret-left/right`, `rzi-step-backward/forward`.

## DropDownDataGrid
DropDown whose popup is a mini grid. `Columns` (RadzenDropDownDataGridColumn
{Property, Title, Template}), `ItemTemplate`, `ValueTemplate`,
`HeaderTemplate`, `FooterTemplate`, `TextProperty`, `ValueProperty`,
`AllowVirtualization` + `Count` + `LoadData(args.Skip/args.Top/args.Filter)`
(bind Data to the page slice; selected item may need appending to Data so the
input shows its text), `AllowFiltering`, `AllowSelectAll` + `SelectAllText`.

## Tree (`RadzenTree`)
`Data`, `Children(Func<TItem, IEnumerable<TItem>>)`, `TextProperty`,
`KeyProperty`, `SelectionMode` (Single/Multiple), `SelectedItem`/`SelectedItems`
+ `Changed` events, `Change(TreeEventArgs)`, `Expand`/`Collapse` (caret clicks),
`LoadChildData` (async lazy children), `Template`, `ContextMenu`.