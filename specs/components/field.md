---
name: Field
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
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
  - "When the child is a single element, it is cloned with `aria-describedby` pointing at the visible message (error id wins over hint id); consumer-supplied `aria-describedby` on the child is preserved and space-joined."
  - "When `error` is set and the child is a single element, the clone also receives `aria-invalid=\"true\"` (a consumer-supplied `aria-invalid` is preserved)."
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
| Label + `htmlFor` | a `<label for="...">` is rendered |
| Label click | focuses the associated control (native label behavior) |
| Required marker | a `*` span with `aria-hidden="true"` |
| Error | renders in a `role="alert"` div |
| Hint without error | hint text renders, no alert role |
| Error + hint | error wins; hint is not rendered |
| ARIA wiring | no `aria-describedby`/`aria-invalid` added to the child control |
| No label | children render without a `<label>` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
