---
name: Field
status: implemented
frameworks:
  react: v0.2.0
tokens:
  - "space.1"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "color.text"
  - "color.danger"
  - "font.size-xs"
  - "color.text-muted"
a11y:
  - "Renders a native <label> with `htmlFor` association when `label` is provided (click focuses the target control)."
  - "Required marker is a <span aria-hidden=\"true\">*</span> so it is not announced; consumers must convey requiredness on the control (e.g. aria-required)."
  - "Error message renders in a <div role=\"alert\"> for immediate AT announcement."
  - "Label uses color.text on color.bg >= 4.5:1; hint uses color.text-muted on color.bg >= 4.5:1; required marker and error use color.danger on color.bg."
---

# Field

Form wrapper that composes a label, control, and hint/error messaging.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `ReactNode` | `undefined` | Label content; renders a `<label>` only when set |
| `htmlFor` | `string` | `undefined` | Passed to the label for control association |
| `required` | `boolean` | `undefined` | When `true`, appends an `aria-hidden` `*` marker |
| `hint` | `ReactNode` | `undefined` | Helper text shown when no error is present |
| `error` | `ReactNode` | `undefined` | Error text; takes precedence over `hint` |
| `children` | `ReactNode` | — (required) | The control(s), rendered between label and messaging |
| `className` | `string` | `undefined` | Extra class on the container |

## Behavior

- Flex column container with `gap: space.1`; label styled with
  `font.size-sm` / `weight-medium`, hint and error with `font.size-xs`.
- `error` and `hint` are mutually exclusive — error wins when both set.
- No `aria-describedby`/`aria-invalid` wiring: error/hint text is not
  automatically linked to the child control.

## Keyboard

No interactive elements or key handling in the component itself. Label
click-to-focus is native `<label>` + `htmlFor` behavior.

## Tests

| Scenario | Assertion |
|---|---|
| No automated tests shipped with v0.2.0 (no `Field.test.tsx` in `frameworks/react/lib/components/Field/`) | — |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
