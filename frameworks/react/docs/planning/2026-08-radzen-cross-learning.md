# Planning — 2026-08 Radzen cross-learning (uikit)

**Cycle:** 2026-08 · **Method:** Radzen MCP (`radzen_radzen_search`) · **Date:** 2026-08-18

Cross-learning pass over every area of the uikit against Radzen Blazor.
Purpose: verify parity where claimed, surface real gaps, and build the
chain-of-fixes backlog. Per user directive, the color audit is NOT the
arbiter — component-parity learnings drive the fix chain.

---

## Coverage map

| Area | Radzen approach | Ours | Verdict |
|---|---|---|---|
| Layout | CSS grid named areas (`rz-header`/`rz-body`/`rz-sidebar`/`rz-footer`), any arrangement via `Style` grid-template-areas; sections optional | Flex column, auto-categorized header/footer/body, sidebar flanks body, `--se-layout-sidebar-width` | **Delta:** grid-areas flexibility; sidebar responsive auto-collapse; overlay/drawer mode |
| Sidebar | `Expanded` (bindable) + `Responsive` (auto-collapses at breakpoint); overlay = `Responsive=false` + absolute + manual mask (reuses `rz-dialog-mask`) | `position` left/right, `expanded` collapsed state, `[data-se-sidebar-toggle]` behavior | **Delta (high):** responsive collapse + overlay mode (mask + Esc) |
| Row | `Gap` property | `gap`, `align`, `justify`, `wrap` | Parity ✓ |
| Column | 12-unit `Size` + `SizeMD`/`OffsetMD` (2 tiers) | 12-unit `size`/`offset` + 5 tiers (`sm/md/lg/xl`) | Ahead ✓ |
| Alert | `AlertStyle` (tones) + `Variant` + `Shade` (Lighter..Darker) + `Size` + `Visible` binding + `Close` | tones + tint bg + dismiss + icon | **Delta (med):** `Size` tiers, controllable `Visible` |
| Badge | `BadgeStyle` + `Variant` (Filled/Outlined/Text), docs note outlined needs contrast | tones + soft/solid/outline (contrast-fixed) | Parity ✓ |
| Button | `ButtonStyle` (Primary/Secondary/Base/Info/Success/Warning/Danger/Light/Dark), `Size` (L/M/S/XS), FAB icon-only circular | primary/secondary/ghost + sm | **Delta (med):** sizes lg/xs, icon-only, success/danger/info styles |
| Checkbox | TriState (indeterminate) + `Change` | basic checkbox | **Delta (low):** indeterminate |
| Switch | `bool?` (nullable) + `Change` | role=switch over checkbox, native props | Parity ✓ |
| Field | RadzenFormField: `Text` label + `Helper` region (help text + validation messages) | label + required marker only | **Delta (high):** helper slot + validation message region |
| Label | RadzenLabel (associated control) | label | Parity ✓ |
| Input | TextBox: `AutoCompleteType` enum, validators, `Name` wiring | native input, sizes, `invalid` | **Delta (roadmap):** validator ecosystem (RadzenTemplateForm) |
| Select | RadzenDropDown: Data/TextProperty/ValueProperty, Item/ValueTemplate, filter, clear, multiple, virtualization, validators | native select + sizes + invalid | **Delta (roadmap):** custom listbox — deliberate, native stays |
| Textarea | TextArea | styled native | Parity ✓ |
| Dialog | DialogService + DialogOptions: `Width`/`Height`/`Left`/`Top`, `Draggable`, `Resizable`, `CssClass`/`WrapperCssClass`, `CloseOnEsc`/`CloseOnOverlayClick`; Drag/Resize event persistence | native `<dialog>` showModal, sizes sm/md/lg, title/description/footer | **Delta (roadmap):** per-instance width/height/position, draggable/resizable |
| Tooltip | `TargetSelector` (plain HTML), `Position`, TooltipService with `Duration=null` sticky | placement top/right/bottom/left, aria-describedby | **Delta (low):** imperative/sticky — roadmap |
| Toast | Notification host + NotificationService.Notify({Severity, Summary, Detail, Duration}), position enum, per-message Style | ToastProvider + useToast + durationMs | **Delta (med-high):** severity tones + position + summary/detail |
| Tabs | `Position` (top/left/right/bottom), tablist wrap | underline/pills, arrow/Home/End keyboard | **Delta (low-med):** side/bottom positions |
| Accordion | `Multiple`, per-item `Expanded` | `multiple` + controlled keys | Parity ✓ |
| Progress | linear + **circular** (Size XS–L, ProgressBarStyle tones) | linear + indeterminate + tones | **Delta (med):** circular variant |
| Avatar | Image/size/shape | name initials + src + alt | Parity ✓ |
| Table | RadzenTable (semantic) + RadzenDataGrid (sort/filter/page/row-expand/virtualize/selection) | semantic table, columns/rows/rowKey | **Delta (roadmap):** data-grid features out of scope for uikit |
| Skeleton | none found | text/circle/rect + width/height | Ahead ✓ |
| Stat | none surfaced | label + value + delta | Ahead ✓ |
| Empty-state | none (DataGrid EmptyTemplate only) | icon + title + description | Ahead ✓ |
| Card | `Variant` (Filled/Outlined/Text) + width utilities | elevated/outlined/interactive + header/footer | **Delta (low):** text/flat variant |
| Icon | Material icon font by name + `IconColor` (theme palette) | 40-glyph inline SVG set, size/strokeWidth | **Delta (low):** color prop, bigger set — out of scope |
| Theming | RadzenTheme (presets, custom theme), `--rz-*` vars, **RadzenAppearanceToggle** (light/dark UI control) | `--se-*` tokens per theme, `[data-theme="dark"]`, switcher only in preview | **Delta (med-high):** ship first-class ThemeSwitcher/appearance-toggle |

---

## Chain of fixes (prioritized backlog)

Executed one batch at a time, each validated: specs → parity → htmx build + vendor copy → react build + tests → preview:build → audit-colors exit 0 → visual-verify.

### P0 — small, high value
1. **Field helper + validation region** — `helper`/`hint` slot + validation message styling (RadzenFormField Helper parity).
2. **Sidebar responsive auto-collapse** — breakpoint class so `expanded` yields to a media query (RadzenSidebar Responsive parity).
3. **Sidebar overlay/drawer mode** — absolute panel + mask + Esc close (Radzen overlay pattern).

### P1 — medium value
4. **Toast severity + position** — tone variants (icon + tint like Alert) and viewport positions (Radzen Notification parity).
5. **Button extensions** — sizes `lg`/`xs`, icon-only circular (aria-label), `success`/`danger`/`info` styles.
6. **Progress circular** — `circular` variant with `size` tiers (Radzen ProgressBarCircular parity).
7. **ThemeSwitcher utility** — react component + htmx behavior from preview switcher logic (RadzenAppearanceToggle parity).

### P2 — low priority / roadmap
8. Alert `size` tiers + controlled `Visible`.
9. Tabs side/bottom positions.
10. Card `text`/flat variant.
11. Checkbox indeterminate.
12. Roadmap (deferred): dialog per-instance geometry + drag/resize; custom dropdown (RadzenDropDown class features); validator components (Required/Pattern); imperative/sticky tooltip; data-grid features.