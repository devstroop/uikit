---
name: Colorpicker
status: implemented
category: forms
frameworks:
  react: v0.20.0
  htmx: v0.18.0
tokens:
  - "color.surface"
  - "color.border"
  - "color.border-strong"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-hover"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.full"
  - "radius.md"
  - "radius.sm"
  - "font.sans"
  - "font.size-xs"
  - "font.weight-medium"
  - "control.height-xs"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "control.height-xl"
  - "space.1"
  - "space.2"
  - "space.3"
  - "space.4"
  - "transition.fast"
  - "shadow.lg"
  - "shadow.sm"
  - "z.popover"

a11y:
  - "Renders a trigger with role=\"button\", aria-haspopup=\"dialog\", aria-expanded, aria-controls, and a localized aria-label; the swatch chip communicates the current color."
  - "The popup is a <dialog> with role=\"dialog\" and aria-label."
  - "The saturation/brightness area is a 2D role=\"slider\" with aria-roledescription=\"2D slider\", aria-valuemin=0, aria-valuemax=100, aria-valuenow for saturation and brightness in aria-valuetext, and aria-label."
  - "Hue and alpha strips are horizontal role=\"slider\" controls with aria-valuemin/aria-valuemax/aria-valuenow and aria-label."
  - "Palette swatches are role=\"button\" with aria-label (hex value) and aria-disabled; keyboard Space/Enter selects."
  - "Keyboard: Space/Enter on the trigger toggles the popup; Escape closes and refocuses; arrows adjust saturation/brightness/hue/alpha; Escape closes from any panel control."
  - "Disabled state sets aria-disabled on the trigger and removes pointer events."
---

# Colorpicker

Color selection with a swatch trigger + a popup containing a saturation/
brightness area, hue and alpha strips, hex/RGB numeric inputs, and a palette
grid (RadzenColorPicker parity). The value is a CSS color string (`#RRGGBB`
or `rgb()/rgba()`).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `Value` | `string` | `"#000000"` | CSS color (hex or rgb()/rgba()); empty means unset. |
| `showSaturation` / `ShowSaturation` | `boolean` | `true` | Show the saturation/brightness area. |
| `showRgba` / `ShowRgba` | `boolean` | `true` | Show the hex + R/G/B/A numeric inputs. |
| `showPalette` / `ShowPalette` | `boolean` | `true` | Show the palette grid. |
| `palette` / `Palette` | `string[]` | default 22 swatches | Custom palette hex values (defaults to the Radzen 22-swatch grid). |
| `showButton` / `ShowButton` | `boolean` | `false` | Show an OK button; when false, changes commit immediately and the popup closes on swatch pick. |
| `showArrow` / `ShowArrow` | `boolean` | `true` | Show the dropdown arrow on the trigger. |
| `disabled` / `Disabled` | `boolean` | `false` | Disables the control. |
| `invalid` / `Invalid` | `boolean` | `false` | Marks the control invalid (red border + aria-invalid). |
| `placeholder` / `Placeholder` | `string` | `""` | Input placeholder. |
| `size` / `Size` | `"sm" \| "md" \| "lg"` | `"md"` | Control size class. |
| `tabIndex` / `TabIndex` | `number` | `0` | Trigger tabindex. |

## Events

| Event | Fires when |
|---|---|---|
| `onChange` / `onValueChange` | Value changes (drag, input, palette pick, OK). |
| `onOpen` / `onClose` | Popup opens / closes. |

## Keyboard

See a11y block above.

## Behavior

- The value is normalized to CSS `rgb(r, g, b)` / `rgba(r, g, b, a)` on output; hex is accepted on input and converted.
- With `showButton=false` (default), dragging or typing updates the value immediately; the popup closes on swatch pick or outside click.
- With `showButton=true`, edits are staged and only committed on OK; closing without OK reverts.
- The default palette is the Radzen 22-swatch grid (17 base colors + black/white + 4 pastels).
- The alpha input accepts 0–100 (percent) or 0–1; the hex input accepts 3 or 6 digits with optional `#`.