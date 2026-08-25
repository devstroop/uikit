---
name: Barcode
status: implemented
category: data
frameworks:
  react: v0.27.0
  htmx: v0.25.0
tokens:
  - "color.surface"
  - "color.text"
  - "font.sans"
  - "font.size-sm"
  - "space.1"
a11y:
  - "The rendered barcode is an <svg> with role='img' and an aria-label describing the encoded value ('Barcode <value>')."
---

# Barcode

Code 128 barcode renderer (RadzenBarcode parity). Encodes a value into Code 128 bars rendered as SVG.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Value to encode (required). |
| `format` | `"Code128"` | `"Code128"` | Barcode format (Code 128 only for parity scope). |
| `height` | `number` | `60` | Bar height in px. |
| `showValue` | `boolean` | `false` | Render the value as text under the bars. |
| `ariaLabel` | `string` | `"Barcode <value>"` | aria-label on the image. |
| `className` | `string` | `undefined` | Extra class. |

Implementation note: a small dependency-free Code 128 encoder (B/C subsets, checksum) is acceptable.
