---
name: Chart
status: implemented
category: data-display
frameworks:
  react: v0.29.0
  htmx: v0.27.0
tokens:
  - "font.weight-bold"
  - "color.border"
  - "color.danger"
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

SVG chart core (RadzenChart parity subset): cartesian chart with category/value axes, line/area/bar/column/scatter/bubble/pie/donut/gauge/radar/funnel/heatmap series, stacking (incl. full-stacked percent mode), range bands, markers, tooltips, data labels, and SeriesClick.

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
| `stacked100Percent` | `boolean` | `false` | Normalize every stack group to percentages; axis ticks and value labels carry a `%` suffix. Unstacked series keep raw values. |
| `onSeriesClick` / `SeriesClick` | `(args: SeriesClickArgs) => void` | `undefined` | Called when a bar/column/point is clicked. |
| `ariaLabel` | `string` | `"Chart"` | aria-label on the figure. |
| `className` | `string` | `undefined` | Extra class. |

`ChartSeries` = `{ type: "line" \| "area" \| "bar" \| "column" \| "scatter" \| "bubble" \| "pie" \| "donut" \| "gauge" \| "radar" \| "funnel" \| "heatmap" \| "candlestick" \| "ohlc" \| "highlow" \| "trendline" \| "movingaverage" \| "treemap" \| "pyramid" \| "spider" \| "sankey"; data: Record<string, unknown>[]; categoryProperty: string; valueProperty: string; title?: string; color?: string; stack?: string; labels?: { visible?: boolean }; minProperty?: string; maxProperty?: string; markers?: { shape?: "circle" \| "square" \| "diamond" \| "triangle"; size?: number; visible?: boolean }; dash?: string \| number[]; lineWidth?: number; innerRadius?: number; sizeProperty?: string; rowProperty?: string }`
`SeriesClickArgs` = `{ seriesTitle: string; category: string; value: number; item: Record<string, unknown> }`

## Behavior

- Series colors cycle through palette-0..5 tokens.
- Scales are computed from data (nice min/max/step) unless overridden by valueAxis. Stacked series fit the scale by per-category totals.
- Stacking: series sharing `stack` accumulate per category (line/area offsets, single-slot columns/bars). With `stacked100Percent`, each stack group normalizes to 0..100 (scale domain becomes percent; tooltips, labels, and SeriesClick values are the plotted percentages).
- Range bands: series with `minProperty` + `maxProperty` render a min/max band (line/area polygon) or span bars/columns from min to max.
- Markers: line/area/scatter/bubble points render configurable shapes (circle default, square/diamond/triangle; size override; `visible: false` keeps hit areas). Line/area strokes take `lineWidth` (default 2) and `dash`.
- OHLC family: `openProperty`/`highProperty`/`lowProperty`/`closeProperty` feed candlestick bodies (filled rising, hollow falling; `upColor`/`downColor`, danger default for falling), ohlc open/close ticks, and highlow range lines. Points without a complete quad fall back to the close marker. Scales include high/low extremes; clicks report the close value.
- Derived series: `trendline` (least-squares fit) and `movingaverage` (rolling mean, `period` default 3) compute from a `source` series title (default: nearest previous cartesian series) and render through the line path, so stroke/markers/labels/tooltips/clicks behave identically; markers default hidden. Clicks carry source items. Missing sources render nothing.
- Treemap: squarified value-proportional tiling with `childrenProperty` nesting (children tile inside the parent rect); labels skip tiny rects; leaf clicks report the leaf item.
- Pyramid: stepped segments widening toward the base for ascending data (own width up top, next width below, no last-row shrink); shares the funnel tooltip/click/label contract.
- Spider: radar geometry with per-category (per-spoke) scaling instead of the shared value scale — each spoke normalizes to its own maximum across spider series, so mixed-magnitude series stay comparable. Reuses the radar web grid; polygon, markers, labels, tooltips, and clicks follow the line contract.
- Sankey: nodes laid in depth columns (longest-path, cycle-guarded), node height is max(inflow, outflow), links stack inside endpoints as proportional ribbons (`sourceProperty`/`targetProperty`, self-links and non-positive flows skipped).
- Tooltips: single shared tooltip div positioned near the hovered point showing `title: value`; hidden on leave.
- htmx variant: `<div class="dx-chart" data-dx-chart data-dx-series='<json>' ...>`; charts are server-rendered reference markup (see lib/components/chart/chart.html for stacked/full-stacked/range/marker examples); the behavior wires tooltip + click dispatching dx:chart-point-click and is series-type agnostic.
