---
name: Login
status: implemented
category: forms
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.text-primary"
  - "font.size-sm"
  - "font.size-md"
  - "font.weight-bold"
  - "space.2"
  - "space.3"
a11y:
  - "Username/password are labelled fields; submit-time errors render with aria-invalid and live-region messages."
  - "Loading disables the form and announces busy state on the submit button."
---

# Login

Credential form with two integration modes: SPA (`onLogin` event, submit
intercepted) or native (`action` endpoint, plain post). Remember-me
persists the username; register/forgot-password slots fire events.

## react

`<Login action?/method?/onLogin?/onRegister?/onForgotPassword?/
registerContent?/forgotPasswordContent?/rememberMe?/loading?/title?/
usernameLabel?/passwordLabel?/submitText?/storageKey?>` — empty submit
fails per-field; valid submit calls `onLogin({ username, password,
rememberMe })` (awaited: pending state disables + loads the submit
button) or posts natively when `action` is set without `onLogin`.

```tsx
<Login onLogin={async ({ username, password }) => signIn(username, password)} />
```

## htmx

Plain form on purpose: `[data-dx-form]` + per-input `[data-dx-field]`
required rules; a valid submit dispatches `dx:submit` with the
serialized FormData and proceeds natively to `action`. See
`lib/components/login/login.html` for the reference markup.

```html
<form data-dx-form action="/login" method="post">…</form>
```

## Tests

| Scenario | Assertion |
|---|---|
| Empty submit (both) | per-field errors; no submit/login call |
| Valid submit (both) | credentials (+rememberMe / FormData) delivered; native proceeds |
| Remember me (react) | username persisted + prefilled |
| Loading (react) | submit disabled while pending, enabled after |
| Register/forgot (react) | events fire |
| Native form (react) | action/method attributes present |
| Error clear (htmx) | editing clears aria-invalid |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
