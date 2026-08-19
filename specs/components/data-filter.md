---
name: DataFilter
status: proposed
category: data-display
frameworks:
  react: v0.7.0
  htmx: v0.5.0
tokens: []
a11y:
  - "Filter rows are form controls with labels: property/operator select lists and the value input get visible labels (Radzen uses label text above each control)."
  - "Adding/removing a filter row moves focus to the new row's property select; removing focuses the adjacent row or the add button."
  - "The AND/OR toggle is a group of radio buttons with a visible label, not a silent switch — the resulting predicate is always announced via the live region tied to the result summary."
  - "Filter state is conveyed by structure, never color alone; the active filter row count is exposed to assistive tech (aria-live=polite result summary)."
---

# DataFilter

Declarative filter-expression builder with Radzen `RadzenDataFilter`
parity: consumers declare `properties` (name/title/type), the component
renders property + operator + value editors, composes them with AND/OR,
and reports the applied predicate. It shares the descriptor pipeline with
DataGrid filtering (#74), so the filter model lives apart from the UI.

## Descriptor pipeline (shared)

Framework-agnostic filter model (Radzen `FilterDescriptor` /
`CompositeFilterDescriptor` parity, see docs/research/radzen-data.md):

| Type | Shape |
|---|---|
| `FilterOperator` | `Equals`, `NotEquals`, `LessThan`, `LessThanOrEquals`, `GreaterThan`, `GreaterThanOrEquals`, `Contains`, `StartsWith`, `EndsWith`, `DoesNotContain`, `In`, `NotIn`, `IsNull`, `IsEmpty`, `IsNotNull`, `IsNotEmpty`, `Custom` |
| `LogicalFilterOperator` | `And` \| `Or` |
| `FilterDescriptor` | `{ property, operator, value?, secondOperator?, secondValue?, logicalOperator? }` (second* = between-style pairs) |
| `CompositeFilterDescriptor` | `{ operator: "And" \| "Or", logicalOperator?, filters: FilterNode[] }` where `FilterNode = FilterDescriptor \| CompositeFilterDescriptor` (recursive groups) |
| `SortDescriptor` | `{ property, sortOrder: "Ascending" \| "Descending" }` (consumed by DataGrid; lives with the model) |

Helpers:

- `applyFilters(items, filters, { logicalOperator?, caseSensitivity? })` —
  applies a descriptor tree to an array (Radzen `Queryable.Where` parity:
  string ops honor case sensitivity, `In` matches arrays, null/empty ops
  test null/"" — type-coerced compares for number/date/boolean).
- `toFilterString(filters)` — Linq-style expression, e.g.
  `(Name.Contains("jo") And Age.GreaterThan(21))` (Radzen
  `ToFilterString` parity).
- `toODataFilterString(filters)` — OData `$filter`-compatible expression,
  e.g. `(contains(Name, 'jo') and Age gt 21)` (Radzen
  `ToODataFilterString` parity, used by server round-trips).

## react

`DataFilter` renders the builder; `viewChanged` fires with the applied
filter result on every change (Radzen `ViewChanged(IQueryable)` parity —
here an array).

```tsx
<DataFilter
  properties={[
    { name: "name", title: "Name", type: "string" },
    { name: "age", title: "Age", type: "number" },
    { name: "active", title: "Active", type: "boolean" },
    { name: "joinedAt", title: "Joined", type: "date" },
  ]}
  logicalOperator="And"
  filterCaseSensitivity="CaseInsensitive"
  viewChanged={(items) => setFiltered(items)}
/>
```

- `properties`: `{ name, title?, type: "string" | "number" | "boolean" |
  "date" | "enum", values? (enum options), editor? }` — `editor` allows a
  custom value editor (react render prop, `{ value, onChange }`).
- Default operator per type: string `Contains`, number/date/bool `Equals`
  (Radzen parity).
- Row = property select + operator select + value editor + remove button;
  `+ Add filter` appends a row; rows combine with the global
  `logicalOperator`; value editors render per type (number step, date
  input, boolean select, enum select).
- `initialFilters` seeds rows; `value` (controlled) + `onChange` optional
  for full control; `viewChanged(items)` on every committed change.
- `uniqueFilters` restricts operator choices per property (Radzen parity,
  default off).
- Descriptor exports: `FilterOperator`, `LogicalFilterOperator`,
  `FilterDescriptor`, `CompositeFilterDescriptor`, `applyFilters`,
  `toFilterString`, `toODataFilterString`, `SortDescriptor` +
  `sortItems`.

## htmx

Markup in `lib/components/datafilter/datafilter.html`; behavior
`[data-dt-datafilter]` in behaviors.js. The builder renders server-side;
the behavior keeps UI state (rows, AND/OR) and re-requests data.

```html
<div data-dt-datafilter data-dt-datafilter-target="#rows">
  <form data-dt-datafilter-form>
    <div data-dt-datafilter-rows>
      <div data-dt-datafilter-row>
        <select data-dt-datafilter-property aria-label="Property">…</select>
        <select data-dt-datafilter-operator aria-label="Operator">…</select>
        <input data-dt-datafilter-value aria-label="Value">
        <button type="button" data-dt-datafilter-remove aria-label="Remove">×</button>
      </div>
    </div>
    <button type="button" data-dt-datafilter-add>Add filter</button>
    <div data-dt-datafilter-operator-bar role="radiogroup" aria-label="Join filters">
      <label><input type="radio" name="op" value="And" checked> AND</label>
      <label><input type="radio" name="op" value="Or"> OR</label>
    </div>
  </form>
</div>
```

- Behavior maintains the row list (clone `data-dt-datafilter-row` template
  — property options copied from `data-dt-datafilter-properties`),
  swaps operator options per property type (`data-dt-datafilter-operators`
  per type), serializes rows into descriptors, and fires
  `dt:filter-change` (`detail: { filters, filterString, oDataFilterString }`)
  on the container. Consumers `hx-get` with `hx-vals` from
  `oDataFilterString` (or submit a form containing a
  `data-dt-datafilter-output` hidden input holding the JSON descriptors).
- Server applies `filters` (any Linq/OData layer) and swaps the result
  region; the swap target re-renders the whole `data-dt-datafilter` shell
  so property options stay in sync.
- No keyboard handling beyond native form controls; remove/add buttons are
  native `<button>`s.

## Tests

| Scenario | Assertion |
|---|---|
| apply: string Contains | case-sensitive/insensitive respects `filterCaseSensitivity` |
| apply: numeric/date/bool ops | Equals/LessThan/GreaterThan coerce and compare typed values |
| apply: In / IsNull / IsEmpty | arrays match; null and "" semantics |
| apply: composite groups | nested And/Or trees evaluate with correct precedence |
| toFilterString | renders `(Name.Contains("jo") And Age.GreaterThan(21))` |
| toODataFilterString | renders `(contains(Name, 'jo') and Age gt 21)` with proper quoting/escaping |
| react: builder rows | add/remove rows, per-type default operators, value editors |
| react: viewChanged | fires with filtered result on each committed change |
| htmx: serialize | `dt:filter-change` detail carries descriptors + both string forms |
| htmx: operator swap | changing property type swaps the operator option set |