---
name: Label
status: implemented
category: forms
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "color.text"
  - "space.2"
a11y:
  - "Renders a native <label>, so `htmlFor`/`for` association and click-to-focus of the associated control are native behavior."
  - "All LabelHTMLAttributes are forwarded (htmlFor, id, aria-*, onClick, ...)."
  - "Text uses color.text on color.bg >= 4.5:1 (per theme contrastRules)."
---

# Label

Typographic label primitive for form controls.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `htmlFor` | `string` (via `LabelHTMLAttributes`) | `undefined` | Associates the label with a control id |
| `className` | `string` | `undefined` | Extra class on the `<label>` |
| ... | `LabelHTMLAttributes<HTMLLabelElement>` | — | Forwarded to the native `<label>` (`children`, `id`, `aria-*`, `onClick`, ...) |

The component is `forwardRef`d to `HTMLLabelElement`.

## Behavior

- Renders a single `<label>` styled with `font.sans`, `font.size-sm`,
  `weight-medium`, and `color.text`. No variants, no state handling.
- The label is an `inline-flex` row (`align-items: center`, `space.2` gap)
  so a wrapped control (checkbox/switch) and its text share one vertical
  center line; a plain-text label is unaffected.

## Keyboard

Native label semantics: activating the label (click/Enter on associated
controls per browser behavior) transfers focus to the labeled control via
`htmlFor`. No custom key handling.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a native label | `<label>` element in the DOM with the given text |
| Label association | a control is discoverable via `getByLabelText` when `htmlFor` matches its `id` |
| Click activation | clicking the label transfers focus to the associated control |
| Forwarded attributes | `id`, `aria-*`, `onClick` reach the native `<label>` |
| Custom `className` | merged onto the label |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
