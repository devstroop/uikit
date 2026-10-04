---
name: NotificationService
status: implemented
category: feedback
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens: []
a11y:
  - "Items announce through role=status (info/success/warning) or role=alert (danger); viewports are aria-live polite regions."
  - "Auto-dismiss never strands focus: toasts are non-interactive except for explicit action buttons, which keep focus until dismissed."
---

# NotificationService

Imperative notification channel over the toast surface: `notify()` takes
a Radzen NotificationMessage shape and maps it onto toast options;
severity helpers cover the four tones. Payloads ride along for click
handlers; `closeOnClick` still dismisses.

## react

`useToast()` gains `notify(message)` plus `notifyInfo` / `notifySuccess` /
`notifyWarning` / `notifyError`. Message shape:

```tsx
await notify({
  severity: "warning", // info | success | warning | danger
  summary: "Heads up", // -> title (+ summaryContent template)
  detail: "Read this.", // -> description (+ detailContent template)
  duration: 6000, // -> durationMs
  payload: { id: 7 }, // -> click(payload)
  click: (payload) => open(payload.id),
  closeOnClick: true,
});
```

`ToastOptions` gains `payload?: unknown` and `click?: (payload) => void`
(body activation; independent of the dismiss-on-click flag).

## htmx

`window.dxToast.notify(message)` with the same Radzen shape
(`severity/summary/detail/duration/click/closeOnClick/payload`),
`severity` mapping to `tone`; plus `notifyInfo/Success/Warning/Error`
`(summary, detail?, options?)`. Item payloads work the same way.

```js
dxToast.notifyError("Boom", "Broke.");
dxToast.notify({ summary: "Hi", payload: { id: 7 }, click: open, closeOnClick: true });
```

## Tests

| Scenario | Assertion |
|---|---|
| Map message (both) | summary/detail/duration land on title/description/durationMs |
| Severity helpers (both) | matching tone class; danger role=alert |
| Payload + click (both) | click receives payload; closeOnClick dismisses |
| Click without dismiss (both) | handler fires, item stays |
| Entrypoint (react) | full notify path through the service import |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
