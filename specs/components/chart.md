---
name: Chart
status: implemented
category: data-display
frameworks:
  react: v0.28.0
  htmx: v0.26.0
tokens:
  - "color.border"
  - "color.palette-0"
  - "color.palette-1"
  - "color.palette-2"
  - "color.palette-3"
  - "color.palette-4"
  - "color.palette-5"
  - "color.surface"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.md"
  - "radius.sm"
  - "shadow.sm"
  - "space.1"
  - "space.2"
a11y:
  - "Root is a <figure> with role='img' and an aria-label (chart title or explicit prop) describing what the chart shows."
  - "Each series is a <g role='list'> with a <title> element naming the series; data points are focusable <button role='listitem'> equivalents only in the accessible fallback table (visually-hidden), keeping the SVG itself pointer-driven."
  - "A visually-hidden data table (caption + rows of category/value per series) is rendered for screen readers, announced via the figure's aria-describedby."
  - "Focus indicators: the hidden table cells are not focusable; tooltips appear on hover/focus of point hit-areas (transparent rects/circles with tabindex=-1)."
---

# Chart

SVG chart core (RadzenChart parity subset): cartesian chart with category/value axes, line/area/bar/column series, tooltips, data labels, and SeriesClick.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `series` | `ChartSeries[]` | — | Series definitions (required). |
| `width` | `number` | `600` | SVG width. |
| `height` | `number` | `400` | SVG height. |
| `valueAxis` | `{ min?, max?, step?, title?, gridlines? }` | auto | Value axis config; gridlines default true. |
| `categoryAxis` | `{ title?, gridlines? }` | — | Category axis config; gridlines default false. |
| `showLegend` / `Legend` | `boolean` | `true` | Render legend under the plot. |
| `tooltipVisible` | `boolean` | `true` | Enable hover tooltips. |
| `onSeriesClick` / `SeriesClick` | `(args: SeriesClickArgs) => void` | `undefined` | Called when a bar/column/point is clicked. |
| `ariaLabel` | `string` | `"Chart"` | aria-label on the figure. |
| `className` | `string` | `undefined` | Extra class. |

`ChartSeries` = `{ type: "line" \| "area" \| "bar" \| "column"; data: Record<string, unknown>[]; categoryProperty: string; valueProperty: string; title?: string; color?: string; labels?: { visible?: boolean } }`
`SeriesClickArgs` = `{ seriesTitle: string; category: string; value: number; item: Record<string, unknown> }`

## Behavior

- Series colors cycle through palette-0..5 tokens.
- Scales are computed from data (nice min/max/step) unless overridden by valueAxis.
- Tooltips: single shared tooltip div positioned near the hovered point showing `title: value`; hidden on leave.
- htmx variant: `<div class="dt-chart" data-dt-chart data-dt-series='<json>' ...>`; behavior renders the same SVG client-side from the JSON attribute, wires tooltip + click dispatching dt:chart-point-click.
