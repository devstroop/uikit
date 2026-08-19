# Radzen Blazor — component reference & uikit gap map

Consolidated research (source: `radzenhq/radzen-blazor` master sources + docs,
2026-08). Used to harden implementation issues. Component counts: ~371 `.razor`
files, ~150 public components.

## 1. Forms & inputs

### RadzenTemplateForm / RadzenFormField
- `RadzenTemplateForm<TItem>`: `Data` (model), `Submit` fires only when valid,
  `InvalidSubmit(FormInvalidSubmitEventArgs{Errors})`, `Method`/`Action` native
  attrs, `ResetValues`, `LogName`/`LogScope`. EditContext-based. ✓ mapped to
  uikit Form (#62).
- `RadzenFormField`: renders a `<div class="rz-form-field">` wrapper around a
  form component; `Text` label + `Required` `*`; looks up the component by
  context (name) for validation state. ✓ mapped to Field (#64).
- `IRadzenFormComponent`: `Name`, `Value`, `HasValue`, `IsValid` — implemented
  by all input components; validators attach via component `Name`.
- Validators: `RadzenRequiredValidator` (`Component`, `Text`, `DefaultValue`),
  `RadzenCompareValidator`, `RadzenEmailValidator`, `RadzenLengthValidator`,
  `RadzenPatternValidator`, `RadzenRangeValidator`, `RadzenRegexValidator`,
  `RadzenRequiredEnumValidator`, `RadzenCustomValidator`. ✓ mapped (#63).

### Text inputs
- `RadzenTextBox`: `Value` string, `Change` fires on blur by default —
  `Immediate="true"` fires per keystroke, `MaxLength`, `Placeholder`,
  `AutoComplete` (html attr), `ReadOnly`, `InputAttributes`.
- `RadzenTextArea`: `Rows`, `Cols`, `MaxLength`, same Change/Immediate model.
- `RadzenPassword`: toggles visibility, `Change`, `Immediate`.
- `RadzenMask`: `Mask` (e.g. `(999) 000-0000`), `MaskChar`, `StrictMode`,
  `Change`, `Immediate`.
- `RadzenNumeric<T>`: `Value`, `Min`, `Max`, `Step`, `Format`, `Culture`,
  `Change`, `InputAttributes`.

### Pickers
- `RadzenDatePicker`: `Value DateTime?/DateOnly?/TimeOnly?`, `DateFormat`,
  `ShowTime`, `ShowButton`, `ParseInput(Func<string,DateTime?>)` for custom
  free-text parsing, `AllowInput`, `Change`; inline mode for grid filters.
- `RadzenTimeSpanPicker`: `Value TimeSpan?`, `ParseInput`, `Change`.
- `RadzenColorPicker`: `Value`, `Change`, palettes.
- `RadzenSlider`: `Value` (double), `Min`, `Max`, `Step`, `ShowLimits`,
  `ShowInput`.
- `RadzenRating`: `Value`, `MaxRating`, `RatingChange`, `ReadOnly`, `ShowLabel`.

### Selection controls
- `RadzenDropDown<T>`: `Data`, `TextProperty`, `ValueProperty`, `TValue`,
  `@bind-Value`, `Change`, `Open`/`Close` events, `Multiple`,
  `AllowClear`, `AllowFiltering`, `FilterCaseSensitivity`, `MaxSelectedLabels`,
  `SelectedItemsText`, `Placeholder`, `Template` (item), `SelectedItemTemplate`,
  `HeaderTemplate`/`FooterTemplate`, `SelectAllText`/`AllowSelectAll`,
  `Virtualization` + `LoadData` (args.Filter), `Disabled`.
- `RadzenDropDownDataGrid`: DropDown with mini-grid popup — `Columns`
  (RadzenDropDownDataGridColumn: Property/Title/Template), `ItemTemplate`,
  `ValueTemplate`, `LoadData`, `AllowVirtualization` + `Count`, `AllowFiltering`.
- `RadzenListBox<T>`: `Data`, `Value`/`Multiple`, `Template`, `Change`,
  `AllowFiltering`, `SelectionMode`? (single/multiple), `MoveUp`/`MoveDown`.
- `RadzenCheckBoxList<T>`: `Data`+`TextProperty`/`ValueProperty` OR static
  `RadzenCheckBoxListItem` children (inline items ignore Data props), `Value`
  (IEnumerable<T>), `Change`, `Template` per item, `Orientation`,
  `AllowFiltering`, `SelectAll`.
- `RadzenRadioButtonList<T>`: `Data`/`Items` (static `RadzenRadioButtonListItem`
  with Text/Value/Disabled), `Value`, `Change`, `Orientation`.
- `RadzenSelectBar<T>`: segmented control — `Data`/`TextProperty`/`ValueProperty`,
  `Value`, `Change`, `Multiple`.
- `RadzenSwitch`: `Value`, `Change`, `Disabled`, `TriState` (bool?).
- `RadzenCheckBox`: `Value`, `TriState` (bool?), `Change`, `Indeterminate`.
- `RadzenToggleButton`: pressed-state button — `Pressed`/`PressedChanged`,
  `Change`, `Click`.
- `RadzenSplitButton`: main button + dropdown items — `Click(RadzenSplitButtonItem)` —
  **args null = main button click**, items `Text`/`Value`/`Icon`; `Items`.
- `RadzenAutoComplete<T>`: `Data`, `LoadData(args.Filter)`, `Value`,
  `Template` (item context), `Change`, `Open`/`Close`, `MaxItems`,
  `MinLength`, `Debounce`.
- `RadzenSecurityCode`: OTP input, `Value`, `Length`, `Change`.
- `RadzenSignaturePad`: `Value` (data URL), `Change`, `Clear`, `PenColor`.
- `RadzenUpload`: `Url`, `Multiple` (param name "files"), `ParameterName`,
  `Auto`, `Headers`, `ChooseText`, events `Complete`/`Error`/`Progress`,
  custom `Template`, `Select` (FileInfo[]).

## 2. Data

### DataGrid / DataList / DataFilter / Table / Pager
Full reference in `docs/research/radzen-data.md` (DataGrid LoadData args
`{Skip,Top,OrderBy,Filters,Sorts}`, FilterOperator/LogicalFilterOperator/
FilterDescriptor/CompositeFilterDescriptor, DOM classes, Pager params,
QueryableExtension Where/OrderBy/Select/GroupByMany/ToODataFilterString).

### Tree
- `RadzenTree`: `Data`, `Children` (Func<TItem, IEnumerable<TItem>>),
  `TextProperty`, `SelectionMode` (Single/Multiple), `SelectedItem`/
  `SelectedItems` + `SelectedItemsChanged`, `Change(TreeEventArgs{Text,Value})`,
  `Expand`/`Collapse` events, `LoadChildData` (async children), `Template`,
  `KeyProperty`. Caret clicks fire Expand/Collapse, NOT Change.

### PickList
- `RadzenPickList<T>`: two lists + move buttons — `Data`, `TargetData`,
  `Value` (source list), `TargetValue`, `MoveUp`/`MoveDown`/`MoveAll`,
  `Template`, `ItemRender`, `Disabled`, events `Change`/`TargetChange`,
  `Move`/`Moved`/`MoveAll`/`MoveAllToTarget` (programmatic via args).
  Item identity via `KeyProperty`.

### VirtualGrid (the "lazy grid")
- `RadzenVirtualGrid<T>`: windowed rows — `Data`, `Count`, `LoadData`,
  `RowTemplate`, `Columns` (templates), `RowHeight`, `VirtualizationOverscan`.
  Not used by DataGrid (that uses native Virtualize).

### Scheduler
- `RadzenScheduler<TItem>`: `Data`, `StartProperty`, `EndProperty`,
  `TextProperty`, views as children (`RadzenDayView`, `RadzenWeekView`,
  `RadzenMonthView`, `RadzenMultiDayView{NumberOfDays, AdvanceDays}`,
  `RadzenAgendaView`, `RadzenYearView`, `RadzenYearPlannerView`,
  `RadzenYearTimelineView`), `AppointmentSelect`, `AppointmentRender` (set
  args.Attributes — never StateHasChanged inside), `AppointmentMove`/`MoveEnd`,
  `AppointmentResize`, `SlotSelect`, `SlotRender`, `LoadData` (virtualized).

### Gantt
- `RadzenGantt<TItem>`: `Data`, `StartProperty`, `EndProperty`, `TextProperty`,
  `ParentProperty` (hierarchy), `View` (Day/Week/Month/Year views as children),
  `LoadData`, `ProgressProperty`, `TaskSelect`/`TaskRender`, `Columns`
  (`RadzenGanttColumn`).

### PivotDataGrid
- `RadzenPivotDataGrid<TItem>`: rows/columns/values via `RadzenPivotRow`/
  `RadzenPivotColumn`/`RadzenPivotAggregate` (AggregateFunction Sum/Average/
  Count/Min/Max + `Property` + `Title`), `PivotField` for layout, drag fields.

### Timeline
- `RadzenTimeline`: static `Items` (RadzenTimelineItem with `LabelContent` +
  `ChildContent`) or dynamic; vertical line layout.

### Charts & gauges
- `RadzenChart`: series children — Line, Area, Bar, Column, Scatter, Bubble,
  Pie, Donut, Radar (Spider), BoxPlot, Waterfall, Candlestick, OHLC, HighLow,
  Funnel, Pyramid, Contour, Heatmap, Treemap, Sankey + Stacked/FullStacked/
  Range variants of line/area/bar/column. Series: `Data`, `CategoryProperty`,
  `ValueProperty`, `Title`, `Stack` (same name = stacked), `TooltipTemplate`,
  `RadzenSeriesDataLabels{Visible}`, `RadzenSeriesTrendLine`.
  Chart: `SeriesClick(SeriesClickEventArgs{Item})`, `Legend`, axes children
  (`RadzenCategoryAxis`, `RadzenValueAxis`, `RadzenAxisTitle`, `RadzenGridLines
  {Visible}`), `RadzenChartTooltipOptions{Visible}`.
- Gauges: `RadzenArcGauge`, `RadzenLinearGauge`, `RadzenRadialGauge` + scales/
  pointers/ranges; `RadzenRangeNavigator` (with `RadzenRangeNavigatorLineSeries`).

### Codes & misc
- `RadzenQRCode`/`RadzenBarcode`: `Value`, `Width`/`Height`.
- `RadzenTree`, `RadzenDropZone{Item,Container}` (HTML5 drag-drop), `RadzenImage`.

## 3. Navigation

- `RadzenMenu`: horizontal/vertical — `RadzenMenuItem{Text,Value,Icon,Path,
  Target,Disabled}`, `Click(MenuItemEventArgs{Text,Value})`, `ExpandMode`,
  `Selectable`, `Template`.
- `RadzenPanelMenu`: sidebar accordion — `Multiple` (true = expand several
  roots), `ShowArrow` (false hides carets), `DisplayStyle` (Icon /
  IconAndText), `Click`, `RadzenPanelMenuItem{Text,Icon,Value,Path}`,
  `Template`.
- `RadzenProfileMenu`: avatar/user dropdown — `Template` (trigger),
  `RadzenProfileMenuItem{Text,Path,Icon}`, full keyboard nav (Tab/Enter/Arrows/
  Esc).
- `RadzenBreadCrumb`: `RadzenBreadCrumbItem{Text,Path,Icon,Disabled}`,
  `Click`.
- `RadzenSteps`: wizard — `RadzenStepsItem{Text,Icon,Disabled}`, `SelectedIndex`,
  `SelectedIndexChanged`, `Change`, `Linear` (require sequential).
- `RadzenTabs`: `RadzenTabsItem{Text,Icon,Disabled}`, `SelectedIndex`,
  `RenderMode` (All/Selected), `Change`, per-item `Visible`.
- `RadzenAccordion`: `RadzenAccordionItem{Text,Icon,Disabled}`, `Multiple`,
  `ExpandMode` (multiple/single + collapse-all), `SelectedIndex`/`ExpandedItems`.
- `RadzenSplitter`: `Orientation` (Horizontal/Vertical),
  `RadzenSplitterPane{Size,Min,Max,Collapsible,Content}`; events
  `Resize(ResizeEventArgs{PaneIndex,NewSize})`, `Collapse`/`Expand` — all
  cancelable via args.Cancel.
- `RadzenFabMenu`: floating action button — `FabMenuPosition`, `Items`
  (`RadzenFabMenuItem{Text,Icon,Value}`), `Click`.
- `RadzenSidebar` + `RadzenSidebarToggle`: app-shell drawer (collapse/expand).
- `RadzenToc`: table of contents — `Orientation`, `Selector` (scroll scope),
  `RadzenTocItem{Text,Selector}`, active-section tracking.
- `RadzenCarousel`: `Items` (children), `ShowArrows`/`ShowIndicators`/`Auto`,
  `Interval`, `PauseOnMouseover`, `Change`.
- `RadzenTree`: see Data.
- `RadzenPager`: standalone — `Count`, `PageSize`, `PageSizeOptions`,
  `PageNumbersCount`, `PageChanged(PagerEventArgs{Page,Skip,Top,PageCount,
  PageSize})`, `PageSizeChanged`, `PageReload`, `AlwaysVisible`,
  `HorizontalAlign`, `Density`, `ShowPagingSummary`, `PagingSummaryTemplate`,
  `PagingSummaryFormat`, i18n props (First/Prev/Next/Last titles+aria labels,
  PageTitleFormat, PageAriaLabelFormat).

## 4. Feedback & overlays

- `RadzenAlert`: inline banner — `Severity` (Info/Success/Warning/Error),
  `Variant` (Primary/Secondary/Flat/Outline/Text), `AlertStyle`, `Closable`,
  `Close`, `Icon`.
- `RadzenBadge`: `Text` (ignored when child content present), `BadgeStyle`
  (primary/secondary/success/danger/info/warning), `BadgePosition`, `BadgeVariant`.
- `RadzenChip`: `Text`, `Icon`, `Click`, `Visible`, `Disabled`,
  `Selected`/`SelectedChanged` (filter chip), `Removable` + `Remove`.
- `RadzenChipList`: `Data`/`TextProperty`/`ValueProperty`/`Value`, `Change`,
  `Template`, `AllowFiltering`, `MaxSelectedLabels`.
- `RadzenProgressBar`: `Value` (clamped to [Min,Max]), `Min`, `Max`, `Mode`
  (Determinate/Indeterminate), `ShowValue`, `ProgressBarStyle`
  (Primary/Secondary/Success/Info/Warning/Danger).
- `RadzenProgressBarCircular`: `Value`, `Mode`, `Size` (XS..Large), `ShowValue`,
  `ProgressBarStyle`.
- `RadzenSkeleton`: `Shape` (Rectangle/Circle/Text), `Width`/`Height`, `Style`.
- `RadzenDialog` + `DialogService` (host `<RadzenDialog/>` in layout):
  `OpenAsync<T>(title, content, DialogOptions{CssClass, WrapperCssClass,
  CloseDialogOnOverlayClick, Draggable, Resizable, Width, Height, Modal,
  ShowCloseButton})`, `OpenSideAsync(title, content, SideDialogOptions
  {Position, ShowMask, CloseDialogOnOverlayClick})`, `Alert(msg, title,
  AlertOptions{OkButtonText})`, `Confirm`, `Close(result)`, `Refresh()`,
  `CloseAll`, `Dispose`; returns awaited result.
- `RadzenNotification` + `NotificationService`: `Notify(NotificationMessage
  {Summary, Detail, SummaryContent/DetailContent (templates), Severity, Duration,
  Click, CloseOnClick, Payload})`, `NotifyError/NotifyInfo/NotifySuccess/
  NotifyWarning`, position on host, `Style`, `HorizontalAlign`, `VerticalAlign`.
- `RadzenPopup` + `PopupService`: `OpenAsync(RenderFragment, PopupOptions{...})`,
  anchored popovers, `Close()`.
- `RadzenTooltip`: `Position`, `Duration`, `MouseEnterDelay`, `Style`,
  `ChildContent`.
- `RadzenContextMenu` + `ContextMenuService`: `OpenAsync(x,y,items,Template)`,
  `Close()`, `MouseEnterDelay`, `Style`.
- `RadzenLiveRegion`: `Notify` method — SR-only announcements.
- `RadzenDropZone{Item,Container}`: drag-drop zones.

## 5. Layout & surfaces

- `RadzenLayout`: app shell — direct children `RadzenHeader`, `RadzenSidebar`,
  `RadzenBody`, `RadzenFooter` (regions, optional).
- `RadzenRow`/`RadzenColumn`: 12-col grid — Column `Size` (1-12), `Offset`,
  `XS`/`SM`/`MD`/`LG`/`XL`/`XXL` responsive sizes, `Style`, `Gutter`? (row).
- `RadzenStack`: `Orientation`, `Wrap`, `Spacing`, `AlignItems`, `JustifyContent`.
- `RadzenCard`: `Variant` (Outlined/Text), `CardStyle`? , `Header`/`Footer`/
  `Content` render fragments, `Style`, `Class`. Width/overflow/utility classes
  (`rz-w-*`, `rz-vw-*`, `rz-border`, `rz-overflow-*`).
- `RadzenCardGroup`: `Responsive` wrap of cards, `Layout`?.
- `RadzenFieldset`: `Text` (legend), `LegendTemplate`, `AllowCollapse` +
  `Collapsed`/`CollapsedChanged`, `Change`.
- `RadzenPanel`: `Header`/`Footer` templates, `Expandable`, `Collapsed`/
  `CollapsedChanged`.
- `RadzenTileLayout`: dashboard tiles — `Columns`, `Rows`, `RadzenTileLayoutItem
  {ColSpan, RowSpan, Col, Row}`, `Template`.
- `RadzenHeading`: semantic h1-h6 `Text`/`Size` (1-6).
- `RadzenCarousel`: see Navigation.
- `RadzenSplitter`: see Navigation.
- `RadzenContent`/`RadzenContentContainer`: page padding container.
- `RadzenGridRow`: content row in Scheduler etc. (internal-ish).

## 6. Content & specialized

- `RadzenHtmlEditor`: `Value` (html), `@bind-Value`, tool children compose
  toolbar (`RadzenHtmlEditorBold` etc. — only declared tools show),
  `RadzenHtmlEditorCustomTool{Text, Icon, Template(editor), Execute}`,
  `ExecuteCommandAsync(command, value)`, `UploadUrl` (image tool), `Execute`,
  `Change`.
- `RadzenSpreadsheet`: full grid editor — `Value` (state), `Data`, `Sheet`
  changes via args, ribbon tools, `Save`, formulas.
- `RadzenMarkdown`: `Value` → rendered markdown, `Resize`.
- `RadzenLogin`: `User`, `Password`, `Action` (endpoint), `Login` event,
  `Register`/`ForgotPassword` templates + events.
- `RadzenAIChat`: `Data` (message list), `Send`/`Receive`, `Placeholder`,
  `ConversationSession`, `InputTemplate`, `MessageTemplate`.
- `RadzenSpeechToTextButton`: mic input → text, `Change`.
- `RadzenTheme` + `RadzenAppearanceToggle` + `ThemeService`: app-level theming,
  light/dark appearance switching (auto/manual, `ThemeInput`).
- `RadzenMediaQuery`: `Query` string, `OnChange(bool)`, `Mode` — responsive
  detection.
- `RadzenGoogleMap`: `Latitude`/`Longitude`/`Zoom`/`Markers`, `Change`.
- `RadzenGravatar`, `RadzenImage`, `RadzenIcon`, `RadzenLink`, `RadzenLabel`.
- `RadzenAccordion`, `RadzenProfileMenu`, `RadzenToc` — see Navigation.

## 7. Services (singletons, host component in layout)

| Service | Host | Key API |
|---|---|---|
| `DialogService` | `RadzenDialog` | `OpenAsync<T>`, `OpenSideAsync`, `Alert`, `Confirm`, `Close`, `Refresh`, `CloseAll` |
| `NotificationService` | `RadzenNotification` | `Notify(msg)`, `NotifyError/Info/Success/Warning` |
| `ContextMenuService` | `RadzenContextMenu` | `OpenAsync(x,y,items,content)`, `Close` |
| `PopupService` | `RadzenPopup` | `OpenAsync(content, options)`, `Close` |
| `ThemeService` | — | `SetTheme`, `SetAppearance`, `SetInput` |

## 8. uikit gap map (uikit 33 components vs ~150 Radzen)

### Covered (uikit exists, upgrade pending)
accordion, alert, avatar, badge, button, card, checkbox, dialog, empty-state,
field, form, header/sidebar/body/footer (layout shell), icon, input, label,
progress (→ ProgressBar parity), row/column (→ 12-col parity), select
(→ DropDown parity), skeleton, stat, switch, table (→ RadzenTable parity),
tabs, textarea, theme-switcher, toast (→ Notification parity), tooltip,
validators.

### Gaps (no uikit equivalent) — grouped by proposed milestone
- **v0.12.0 Inputs**: textbox(value/Immediate/Change), password, mask,
  numeric, datepicker(+ParseInput/ShowTime/ShowButton), timespanpicker,
  dropdown upgrade (Open/Close, Multiple, filtering, SelectedItemTemplate,
  virtualization), autocomplete (LoadData+debounce), listbox, checkboxlist,
  radiobuttonlist (items model), selectbar, togglebutton, splitbutton,
  colorpicker, slider, rating, securitycode, signaturepad, upload,
  dropzonedata.
- **v0.13.0 Navigation**: menu (horizontal), panelmenu (Multiple/ShowArrow/
  DisplayStyle), breadcrumb, steps (Linear), splitter (Orientation, cancelable
  Collapse/Resize), fabmenu, profilemenu, toc, carousel, pager standalone.
- **v0.14.0 Data advanced**: tree (selection modes, loadChildData), picklist,
  virtualgrid, scheduler (views+appointment events), gantt, pivotdatagrid,
  timeline, qrcode, barcode.
- **v0.15.0 Charts & gauges**: chart (line/area/bar/column/pie/donut/scatter/
  bubble + stacking, axes/gridlines/data-labels/tooltips/SeriesClick),
  gauges (arc/linear/radial), rangenavigator.
- **v0.16.0 Content & editors**: htmleditor, markdown, spreadsheet, login,
  securitycode? (already v0.12), aiChat, speechToTextButton.
- **v0.17.0 Services & theming**: DialogService parity (side dialog, alert/
  confirm, draggable/resizable), NotificationService (templates, click),
  ContextMenuService, PopupService, ThemeService + AppearanceToggle,
  MediaQuery, LiveRegion.