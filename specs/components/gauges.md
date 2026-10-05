---
name: Gauges
status: implemented
category: data-display
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.primary"
  - "color.text"
  - "color.text-muted"
  - "font.size-md"
  - "font.size-sm"
  - "font.weight-bold"
  - "space.1"
a11y:
  - "Each gauge is a meter with aria-valuenow/min/max and an accessible name."
  - "The value label is plain text (not SVG text), so it participates in normal AT text flow."
---

# Gauges

Display-only meters: server/static SVG, no behavior, no JS. Linear and
radial gauges plus the range navigator follow in later slices.

## ArcGauge

240° value arc with stepped color stops and a value label. `value` /
`min` / `max` drive the fraction (clamped); the value arc takes the
last stop at or below the fraction, else `color` (default primary), and
is omitted at the minimum. `arcWidth` (default 16), `size` (diameter,
default 200), `showValue` (default true), `formatValue`.

```tsx
<ArcGauge value={40} min={0} max={100} colorStops={[{ offset: 0, color: "green" }, { offset: 0.75, color: "red" }]} />
```

```html
<div class="dx-gauge" role="meter" aria-label="Speed" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">…</div>
```

## LinearGauge

Horizontal/vertical scale with ticks + labels, range bands, value fill +
pointer, and a value label. `value`/`min`/`max` drive the fraction
(clamped); `ticks: { count?, showLabels? }` (default 5 shown);
`ranges: [{ from, to, color }]` render under the fill; `color` (default
primary), `length` (default 280/220), `thickness` (default 20). Vertical
grows bottom-up.

```tsx
<LinearGauge value={40} min={0} max={100} ranges={[{ from: 0, to: 50, color: "green" }]} />
```

## RadialGauge

Circular scale with ticks + labels, range bands, needle pointer(s), and
a value label. `startAngle`/`endAngle` in degrees from top, clockwise
(default full circle; a 360° sweep stops a hair short so the track
paints). Extra `pointers: [{ value, color? }]` render alongside the
value needle.

```tsx
<RadialGauge value={40} min={0} max={100} />
```

## LinearGauge

Horizontal/vertical scale with ticks + labels, range bands, value fill +
pointer, and a value label. `value`/`min`/`max` drive the fraction
(clamped); `ticks: { count?, showLabels? }` (default 5 shown);
`ranges: [{ from, to, color }]` render under the fill; `color` (default
primary), `length` (default 280/220), `thickness` (default 20).

```tsx
<LinearGauge value={40} min={0} max={100} ranges={[{ from: 0, to: 50, color: "green" }]} />
```

```html
<div class="dx-gauge" role="meter" aria-label="Load" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">…</div>
```

## Tests

| Scenario | Assertion |
|---|---|
| Meter contract (both) | role=meter with valuenow/min/max + accessible name |
| Partial arc (react) | value path differs from track; omitted at minimum; clamps above max |
| Color stops (react) | stepped pick by fraction |
| Label (react) | formatted text shown; hidden on demand |
| Proportional fill (react) | fill width scales with value; vertical grows bottom-up |
| Range bands (react) | band rects render under the fill |
| Clamp (react) | fill capped at the track end above max |
| Linear proportional fill (react) | fill scales with value; vertical grows bottom-up |
| Linear ranges (react) | band rects render under the fill |
| Radial needle (react) | endpoint matches value fraction exactly |
| Radial bands/pointers (react) | band strokes + extra needles render |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
