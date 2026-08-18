---
name: Label
status: implemented
frameworks:
  react: v0.2.0
tokens:
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "color.text"
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

## Keyboard

Native label semantics: activating the label (click/Enter on associated
controls per browser behavior) transfers focus to the labeled control via
`htmlFor`. No custom key handling.

## Tests

| Scenario | Assertion |
|---|---|
| No automated tests shipped with v0.2.0 (no `Label.test.tsx` in `frameworks/react/lib/components/Label/`) | — |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
