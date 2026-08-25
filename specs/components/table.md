---
name: Table
status: implemented
category: data-display
frameworks:
  react: v0.12.0
  htmx: v0.10.0
tokens:
  - "font.sans"
  - "color.border"
  - "radius.md"
  - "font.size-sm"
  - "color.surface-hover"
  - "color.text-muted"
  - "font.weight-medium"
  - "font.size-xs"
  - "space.2"
  - "space.3"
  - "color.text"
  - "space.6"
a11y:
  - "Semantic <table>/<thead>/<tbody> structure with <th scope=\"col\"> header cells."
  - "Column header cells exposed as `columnheader` roles with the rendered header content as accessible name."
  - "Row cells are <td> with no implicit interactive semantics (data display only)."
  - "Text-on-fill contrast >= 4.5:1 (text on bg; text-muted on surface-hover for headers)."
---

# Table

Tabular data display with a bordered, rounded wrapper, column alignment control, and a custom empty state.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `readonly Column<T>[]` | — | Column definitions (required) |
| `rows` | `readonly T[]` | — | Row data (required) |
| `rowKey` | `(row: T) => string` | — | Key extractor used for `<tr>` keys (required) |
| `empty` | `ReactNode` | `undefined` | Rendered in place of the table body area when `rows` is empty |
| `caption` | `ReactNode` | `undefined` | Rendered as a `<caption>` (Radzen `Caption` parity) |
| `gridLines` | `"default" \| "both" \| "none" \| "horizontal" \| "vertical"` | `"default"` | Border scheme (Radzen `GridLines` parity); `default` = horizontal + vertical |
| `allowAlternatingRows` | `boolean` | `true` | Zebra striping on even rows (Radzen `AllowAlternatingRows` parity) |
| `className` | `string` | `undefined` | Extra class applied to the wrapper `<div>` |

`Column<T>` fields: `key: string`, `header: ReactNode`, `align?: "start" \| "center" \| "end"`, `render?: (row: T) => ReactNode`. When `render` is omitted, the cell shows `row[column.key]`.

## Behavior

- DOM: `div.wrap > table.table > thead/tr/th[scope="col"] + tbody/tr/td`, plus an optional sibling `div.empty` when `rows.length === 0`.
- Alignment: `align` on a column adds a `start`/`center`/`end` class to the header and cells; unspecified columns are left-aligned (`text-align: left`).
- Wrapper has `border`, `radius.md`, and `overflow: hidden`; header row is `surface-hover` background with uppercase `xs` text-muted text.
- Row hover applies `surface-hover` background to `<tbody>` rows.
- Cell borders removed on the last row; body cells render `text` color on the default background.
- `gridLines`: `default`/`both` render horizontal row separators + vertical cell separators;
  `none` removes all internal borders; `horizontal` keeps row lines only; `vertical` keeps
  column lines only. htmx: `dt-table--grid-none` / `-grid-horizontal` / `-grid-vertical` on the wrapper.
- `allowAlternatingRows` stripes even body rows (`surface-hover`); disabling adds no visual
  alternation. htmx: alternating is default, disabled with `dt-table--no-alternating`.
- `caption` renders inside the `<table>` with `caption-side: top` styling (htmx `dt-table-caption`).
- Alternating stripes are never the sole conveyer of meaning (content remains in cells).

## Keyboard

No interactive elements — the component is display-only. Native table semantics only; no sorting, selection, or focus management.

## Tests

| Scenario | Assertion |
|---|---|
| Renders headers and cell content | `columnheader` roles present with accessible names "Name"/"Status"; cell text rendered |
| Uses the render function when provided | Cell renders the `render` output (e.g. uppercased value) |
| Shows the empty slot when there are no rows | `empty` content rendered when `rows` is empty |
| Caption + `scope=col` | `caption` content rendered; header cells carry `scope="col"` |
| Grid line variants | `gridLines` none/vertical/horizontal switch the table's line classes |
| Alternating rows | even rows striped by default; disabled with `allowAlternatingRows={false}` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).