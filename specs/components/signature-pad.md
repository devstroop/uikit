---
name: SignaturePad
status: implemented
category: forms
frameworks:
  react: v0.21.0
  htmx: v0.19.0
tokens:
  - "color.border-strong"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "color.outline-primary"
  - "radius.md"
  - "radius.sm"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "space.05"
  - "space.1"
  - "space.2"
  - "transition.fast"

a11y:
  - "The drawing surface is a real <canvas> with role=\"img\" and an aria-label ('Signature'), so the control is identifiable to screen readers."
  - "A visible 'Clear' button (native <button type=\"button\">) with an accessible name empties the pad and refocuses the canvas."
  - "Pointer input uses pointer events with setPointerCapture, so mouse, pen, and touch all draw on the same path."
  - "Focus indicators: :focus-visible draws the 3px outline-primary ring on the canvas border; the Clear button gets its own 2px ring."
  - "The exported value is a PNG data URL, matching Radzen SignaturePad's Value; the change event fires once per stroke."
  - "Disabled state renders at opacity 0.55 and blocks drawing; the Clear button is disabled too."
---

# SignaturePad

Freehand signature capture on a `<canvas>` (Radzen SignaturePad parity:
`Value` (data URL), `Change`, `Clear`, `PenColor`). Pointer events draw the
stroke; `onChange` fires with a PNG data URL once per completed stroke.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled image (PNG data URL); setting it redraws the canvas |
| `defaultValue` | `string` | — | Initial image (uncontrolled mode) |
| `onChange` | `(value: string) => void` | — | Fires with the PNG data URL after each stroke (`""` after Clear) |
| `penColor` | `string` | `"#1c1c1c"` | Stroke color (any CSS color; Radzen `PenColor`) |
| `penWidth` | `number` | `2.5` | Stroke width in CSS pixels |
| `clearLabel` | `string` | `"Clear"` | Accessible name of the Clear button |
| `ariaLabel` | `string` | `"Signature"` | Accessible name of the canvas (`role="img"`) |
| `width` | `number` | — | Canvas CSS width (defaults to the container width) |
| `height` | `number` | `140` | Canvas CSS height |
| `disabled` | `boolean` | `false` | Blocks drawing and disables the Clear button |

The component is `forwardRef`d to a handle exposing `clear()` and `toDataURL()`
on the underlying canvas. Remaining canvas attributes are not forwarded
(pointer handling is owned by the component).

## Behavior

- DOM is `<div class="signaturepad"><canvas role="img" aria-label=…/><button clear/></div>`;
  the canvas is 1:1 for its CSS size on load and on resize (DPR-aware).
- `pointerdown` starts a stroke (with `setPointerCapture`), `pointermove`
  draws quadratic segments through the pointer path, `pointerup`/`pointercancel`
  end the stroke and fire `onChange` with `canvas.toDataURL("image/png")`.
- Empty strokes (tap without movement) never fire `onChange`; clearing via the
  button or a programmatic `clear()` fires `onChange("")`.
- A controlled `value` that differs from the current drawing redraws the
  canvas from the data URL; uncontrolled mode keeps its own canvas bitmap.
- The Clear button sits in the pad header (right-aligned) with `text-muted`
  styling, hovering to `text` on `surface-hover`.
- Invalid state is not part of the API (a signature can always be cleared);
  the wrapper accepts an optional `className`.

## Keyboard

The canvas is not focusable by default; the Clear button is the tab stop.
Drawing is pointer-driven (mouse/pen/touch) per Radzen parity; the aria-label
explains the control's purpose for assistive tech.

## Tests

| Scenario | Assertion |
|---|---|
| Renders | canvas with `role="img"` + `aria-label` and a `Clear` button |
| Draw stroke | dispatching pointerdown/move/up produces a non-empty data URL in `onChange` |
| Empty stroke | a pointerdown/up without movement does not fire `onChange` |
| Clear | clicking Clear fires `onChange("")` and the canvas is blank |
| Pen color | stroke uses `penColor` (canvas context strokeStyle) |
| Controlled value | setting `value` (data URL) draws the image onto the canvas |
| Disabled | pointer events do not draw; Clear is disabled |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).