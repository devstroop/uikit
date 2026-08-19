---
name: Form
status: implemented
category: forms
frameworks:
  react: v0.4.0
  htmx: v0.2.0
tokens:
  - "font.sans"
a11y:
  - "Renders a semantic <form> element — native submit semantics, labels, and autofill apply without framework intervention."
  - "When action/method are set the form performs a native browser submit (SPA events are not fired); this is the no-JS fallback."
  - "Validation state is surfaced on fields (aria-invalid / aria-describedby via the field contract); the container itself never hides content or moves focus."
  - "Disabled fields are excluded from submit validation (native behavior)."
---

# Form

Container that owns submit semantics for a set of fields. Mirrors
RadzenTemplateForm: submit only fires when every registered field
validates; otherwise an invalid-submit callback receives the errors.

## API (react)

| Prop | Type | Default | Description |
|---|---|---|---|
| `model` | `unknown` | — | Data model passed back to `onSubmit` (Radzen `Data` equivalent) |
| `onSubmit` | `(model) => void` | — | Fired on submit when every registered field validates |
| `onInvalidSubmit` | `(errors) => void` | — | Fired when any field fails; `errors` maps field name → message list |
| `action` | `string` | — | Native action attribute; when set with `method`, submit is native (no SPA events) |
| `method` | `"get" \| "post"` | — | Native method attribute (requires `action`) |
| `children` | `ReactNode` | — | Form content; fields register via `useFormContext()` |
| `className` | `string` | — | Extra class |

Consumed via `useFormContext()`: `registerField({ name, validate })`,
`unregisterField(name)`, `submit()` (programmatic submit — runs the same
validation gate, firing `onSubmit`/`onInvalidSubmit`).

## Behavior

- `registerField` keeps a `validate: () => string[]` descriptor per name;
  empty list = valid. Validators come from the built-in set (validators
  spec) or a custom function.
- On submit with no `action`/`method`: `preventDefault()` is called, all
  registered fields are validated, and either `onSubmit(model)` (all
  valid) or `onInvalidSubmit(errors)` (any invalid) fires. Radzen
  semantics: invalid submit is an explicit event, never a silent pass.
- With `action` + `method`: no interception, no events — the browser
  submits natively (JS-disabled fallback).
- A field that unmounts unregisters itself and no longer participates.

## htmx usage

Reference markup (`lib/components/form/form.html`):

```html
<form class="dt-form" data-dt-form action="/login" method="post">
  <div class="dt-field">
    <label class="dt-field-label" for="email">Email</label>
    <input id="email" class="dt-input dt-input--md" type="email" name="email" data-dt-field />
  </div>
  <button class="dt-button dt-button--primary" type="submit">Login</button>
</form>
```

`data-dt-form` (behaviors.js) runs on submit:

- Rules declared on `[data-dt-field]` elements are evaluated at submit
  time (`data-dt-required`, `data-dt-email`, `data-dt-pattern`,
  `data-dt-min`, `data-dt-max`, `data-dt-minlength`, `data-dt-maxlength` —
  see the validators spec); native constraints (required/min/max/...)
  are respected via the validity API. Empty values pass every rule
  except required.
- Failing fields get `aria-invalid="true"` + `data-dt-invalid` and block
  the submit: `preventDefault()` + `dt:invalid` event with
  `detail: { fields: [{ name, element, messages }] }`. Messages are also
  written into the field's `[data-dt-field-error]` element (see the
  field spec) and its id is merged into `aria-describedby`.
- All valid: `dt:submit` event, `detail: { form, data: FormData }`; the
  native submit proceeds (server round-trip or htmx attributes).
- Editing a field after an invalid submit clears its invalid state;
  validity is re-evaluated on the next submit.

Events bubble for delegation:

| Event | detail | When |
|---|---|---|
| `dt:submit` | `{ form, data: FormData }` | Valid submit, not blocked |
| `dt:invalid` | `{ fields: [{ name, element, messages }] }` | Invalid fields blocked the submit |

## Keyboard

Native form semantics: Enter in a text control submits; `type="submit"`
buttons activate with Enter/Space. The container adds no key handling.

## Tests

| Scenario | Assertion |
|---|---|
| Renders | `role="form"` (or `form` element) with children |
| Valid submit (react) | `onSubmit` called with `model`; `onInvalidSubmit` not called |
| Invalid field (react) | `onInvalidSubmit` receives `{ name: ["message"] }`; `onSubmit` not called |
| Errors update between submits | second submit reflects latest `validate` results |
| Unmounted field | unregisters; later submits ignore it |
| `useFormField` validates | field registers with the form; invalid submit reports rule errors |
| `useFormField` reveals errors | errors appear only after an invalid submit, clear on change, re-appear on the next invalid submit |
| `action` + `method` (react) | native attributes rendered; no SPA events fired |
| `useFormContext` outside `<Form>` | throws |
| Valid submit (htmx) | `dt:submit` dispatched with `FormData`; default not prevented |
| Invalid field (htmx) | `dt:invalid` dispatched with the field's `name`; default prevented; `dt:submit` not dispatched |
| Error element (htmx) | messages written into `[data-dt-field-error]`; error id merged into `aria-describedby` |
| `data-dt-invalid` without aria | treated as invalid |
| Disabled invalid field (htmx) | skipped; submit proceeds |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).