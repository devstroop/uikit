---
name: Pivot
status: implemented
category: data
frameworks:
  react: v0.27.0
  htmx: v0.25.0
tokens:
  - "color.border"
  - "color.outline-primary"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.sm"
  - "space.1"
  - "space.2"
a11y:
  - "Root is a <table> with role='grid' and aria-label; aggregate cells expose aria-label with the computed value."
  - "Field chips are <button> with aria-label (e.g. 'Remove row field Category'); totals row/column are th with scope."
  - "Keyboard: Tab moves between field chips; Enter/Space removes a field from its zone."
  - "Focus indicators: :focus-visible draws the outline-primary ring on field chips."
---

# Pivot

Pivot table with row/column/aggregate fields (RadzenPivotDataGrid parity). Aggregates data by row and column fields using Sum/Average/Count/Min/Max, with grand totals.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `Record<string, unknown>[]` | — | Flat data rows (required). |
| `rowFields` | `PivotField[]` | — | Fields grouped as rows. |
| `columnFields` | `PivotField[]` | — | Fields grouped as columns. |
| `aggregateFields` | `PivotAggregate[]` | — | Aggregates applied to values. |
| `onFieldsChange` | `(args: { rowFields; columnFields; aggregateFields }) => void` | `undefined` | Called when a chip is removed. |
| `ariaLabel` | `string` | `"Pivot table"` | aria-label on the grid. |
| `className` | `string` | `undefined` | Extra class. |

`PivotField` = `{ property: string; title?: string }`
`PivotAggregate` = `PivotField & { aggregate: "Sum" \| "Average" \| "Count" \| "Min" \| "Max" }`
