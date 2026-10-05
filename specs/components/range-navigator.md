---
name: RangeNavigator
status: implemented
category: data-display
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.primary"
  - "color.focus"
  - "color.surface"
  - "color.text-muted"
  - "radius.md"
  - "space.1"
a11y:
  - "Handles are sliders with valuenow/min/max and labels; the window position is perceivable without color."
  - "Arrow keys move the focused handle (Shift for coarse steps), Home/End jump; focus never leaves the control."
---

# RangeNavigator

Zoom/pan window over a value domain: two slider handles bound the
window, with pointer drag, keyboard, and clamping. Wire `onChange` /
`dx:range-change` into a chart's value axis for linked zooming — the
linkage itself stays consumer-side by design.

## react

`<RangeNavigator min?/max?/value?/defaultValue?/onChange?/data?/minSpan?/
ariaLabel?/className?>` — controlled when `value` is set. `data`
renders a sparkline overview. Pointer: drag handles, click-drag the
span to pan, click outside to jump the nearest edge. Every commit
clamps to the domain (and `minSpan`) and fires `onChange{start, end}`.

```tsx
const [window, setWindow] = useState({ start: 20, end: 80 });
<RangeNavigator min={0} max={100} value={window} onChange={setWindow} />
<Chart series={series} valueAxis={{ min: window.start, max: window.end }} />
```

## htmx

`[data-dx-range-navigator="min max"]` with optional
`data-dx-range-start/end` seeds. Handles (`[data-dx-range-handle]`)
drag, the track pans the span, arrows/Home/End nudge; one commit path
clamps and dispatches `dx:range-change{start, end}`. Re-inits are
idempotent (WeakSet guard). `window.dxRangeNav.commit(host|selector,
start, end)` drives hosts programmatically.

```html
<div data-dx-range-navigator="0 100" data-dx-range-start="20" data-dx-range-end="80">…</div>
```

## Tests

| Scenario | Assertion |
|---|---|
| Seed/render (both) | handles carry valuenow; window painted by percent |
| Keyboard (both) | arrows move focused handle + fire change |
| Clamp (both) | window stays in domain; minSpan honored |
| Pointer (both) | drag moves the handle (geometry stubbed) |
| Controlled (react) | value prop drives the window |
| Commit API (htmx) | programmatic writes + events; null on missing host |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
