---
name: Validators
status: implemented
category: forms
frameworks:
  react: v0.5.0
  htmx: v0.3.0
tokens: []
a11y:
  - "Validation runs at submit time only (Radzen semantics) — no inline feedback that could interrupt typing or screen-reader flow."
  - "Failing fields surface state via aria-invalid=\"true\" on the control; message rendering and aria-describedby wiring are the field contract's job."
  - "Messages are human-readable sentences (\"At least 8 characters\") rather than code; consumers may override every default message."
---

# Validators

Declarative, Radzen-parity validation for form fields. Radzen ships
required/email/length/min-max-length/pattern/range/custom validators;
uikit mirrors them with the same failure semantics (evaluate on submit,
empty values pass everything except required).

## react

Standalone functions that produce `Validator`s:

| Validator | Signature | Default message |
|---|---|---|
| `required` | `(message?)` | `Required` |
| `email` | `(message?)` | `Invalid email` |
| `pattern` | `(regexp, message?)` | `Invalid format` |
| `minLength` | `(n, message?)` | `Minimum {n} characters` |
| `maxLength` | `(n, message?)` | `Maximum {n} characters` |
| `range` | `(min, max, message?)` | `Between {min} and {max}` |

A `Validator` is `(value, model) => string | null`. Custom validators are
plain functions of the same shape (Radzen `CustomValidator` equivalent).
`runValidators(list, value, model)` returns the collected messages.

```tsx
import { email, required } from "@devstroop/react-uikit";
// register via the field contract (useFormField): validate={[required(), email()]}
```

## htmx

Rules are attributes on `[data-dt-field]`; the `data-dt-form` behavior
evaluates them on submit:

| Rule | Attribute | Value |
|---|---|---|
| required | `data-dt-required` | (present) |
| email | `data-dt-email` | (present) |
| pattern | `data-dt-pattern` | JS regexp source |
| min | `data-dt-min` | number |
| max | `data-dt-max` | number |
| minlength | `data-dt-minlength` | number |
| maxlength | `data-dt-maxlength` | number |

Messages: `data-dt-<rule>-message` (per rule), else
`data-dt-error-message` (field-wide), else the default above. Native
constraints on the same element (`required`, `min`, `max`, `minlength`,
`maxlength`, `pattern`, `type="email"`, `type="number"`) are also
respected through the browser's validity API (message = native
`validationMessage`). Empty values pass every rule except required.

## Behavior

- Validation runs on submit, once, for every enabled `[data-dt-field]` /
  registered field. There is no keystroke validation (Radzen parity).
- A failing field reports every message from its rules
  (`onInvalidSubmit` errors map / `dt:invalid` detail `messages`).
- Re-submit recomputes state: a fixed field clears its invalid state.

## Keyboard

None — validation never consumes keys or focus.

## Tests

| Scenario | Assertion |
|---|---|
| required | empty/whitespace fails; non-empty passes; custom message honored |
| email | valid/invalid addresses; empty passes |
| pattern | regexp match decides; empty passes |
| min/max (number) | bounds enforced; non-numeric fails; empty passes |
| minlength/maxlength | length bounds; empty passes |
| messages (htmx) | `data-dt-<rule>-message` beats `data-dt-error-message` beats default |
| native bridge (htmx) | native `required` blocks with `validationMessage` |
| revalidation (htmx) | stale `aria-invalid` cleared when the value is fixed |
| `dt:invalid` detail | per-field `messages` array present |
| custom validator (react) | `(value, model)` receives the form model |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).