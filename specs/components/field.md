---
name: Field
status: implemented
category: forms
frameworks:
  react: v0.6.0
  htmx: v0.4.0
tokens:
  - "space.1"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "color.text"
  - "color.text-danger"
  - "font.size-xs"
  - "color.text-muted"
a11y:
  - "Renders a native <label> with `htmlFor` association when `label` is provided (click focuses the target control)."
  - "Required marker is a <span aria-hidden=\"true\">*</span> so it is not announced; consumers must convey requiredness on the control (e.g. aria-required)."
  - "Error message renders in a <div aria-live=\"polite\"> so it is announced without interrupting other speech."
  - "When the child is a single element, it is cloned with `aria-describedby` pointing at the visible message (error id wins over hint id); consumer-supplied `aria-describedby` on the child is preserved and space-joined."
  - "When `error` is set and the child is a single element, the clone also receives `aria-invalid=\"true\"` (a consumer-supplied `aria-invalid` is preserved)."
  - "Label uses color.text on color.bg >= 4.5:1; hint uses color.text-muted on color.bg >= 4.5:1; required marker and error use color.text-danger on color.bg."
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
- When the child is a single element, it is cloned with
  `aria-describedby` pointing at the visible message (error id wins over
  hint id); a consumer-supplied `aria-describedby` on the child is
  preserved and space-joined.
- When `error` is set and the child is a single element, the clone also
  receives `aria-invalid="true"` (a consumer-supplied `aria-invalid` is
  preserved).

## htmx semantics

Reference markup: `lib/components/field/field.html`. The wrapper root is
`.dt-field`; a message element is `<div class="dt-field-error"
id="<error-id>" aria-live="polite" data-dt-field-error>`.

- A server template composes the wrapper and may pre-render an error
  (then `aria-invalid="true"` on the control).
- Inside a `[data-dt-form]`, submit-time validation messages are written
  into the closest (within `.dt-field`) or next-sibling
  `[data-dt-field-error]` element; multiple messages are joined with
  ` · `. The error id is merged into the control's `aria-describedby`
  (a consumer-supplied hint id is preserved and space-joined) and the
  error element gets `aria-live="polite"`.
- A passing field clears the error text and restores the original
  `aria-describedby`.
- Editing a field after an invalid submit clears `data-dt-invalid`,
  `aria-invalid`, the error text, and the described-by merge; validity
  is re-evaluated on the next submit.
- Without a `[data-dt-field-error]` element the field still receives
  `aria-invalid="true"` / `data-dt-invalid` and messages stay available
  via the `dt:invalid` detail.

## Keyboard

No interactive elements or key handling in the component itself. Label
click-to-focus is native `<label>` + `htmlFor` behavior.

## Tests

| Scenario | Assertion |
|---|---|
| Label + `htmlFor` | a `<label for="...">` is rendered |
| Label click | focuses the associated control (native label behavior) |
| Required marker | a `*` span with `aria-hidden="true"` |
| Error | renders in an `aria-live="polite"` region (no alert role) |
| Hint without error | hint text renders |
| Error + hint | error wins; hint is not rendered |
| ARIA wiring | child control receives `aria-describedby` pointing at the visible message (error id wins) |
| ARIA invalid | `error` adds `aria-invalid="true"` to the child control |
| ARIA merge | consumer-supplied `aria-describedby`/`aria-invalid` on the child are preserved |
| No label | children render without a `<label>` |
| htmx message render | invalid submit writes messages into `[data-dt-field-error]` and merges its id into `aria-describedby` |
| htmx multi-message | multiple failing rules join with ` · ` |
| htmx passing field | error text clears; original `aria-describedby` restored |
| htmx edit | `input` after an invalid submit clears invalid state and error text |
| htmx no error element | field still gets `aria-invalid="true"` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
