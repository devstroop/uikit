---
name: QRCode
status: implemented
category: data
frameworks:
  react: v0.27.0
  htmx: v0.25.0
tokens:
  - "color.surface"
  - "color.text"
  - "font.sans"
a11y:
  - "The rendered code is an <svg> or <canvas> with role='img' and an aria-label describing the encoded value ('QR code for <value>')."
---

# QRCode

QR code renderer (RadzenQRCode parity). Encodes a value into a QR matrix rendered as SVG.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Value to encode (required). |
| `size` | `number` | `128` | Width/height in px. |
| `render` | `"svg" \| "canvas"` | `"svg"` | Render mode. |
| `ariaLabel` | `string` | `"QR code for <value>"` | aria-label on the image. |
| `className` | `string` | `undefined` | Extra class. |

Implementation note: a small dependency-free QR encoder (byte mode, error correction L/M) is acceptable; the contract is the rendered matrix, not the encoder internals.
