---
name: Toast
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "z.toast"
  - "space.5"
  - "space.2"
  - "space.3"
  - "space.4"
  - "radius.md"
  - "color.border"
  - "color.surface"
  - "color.text"
  - "shadow.lg"
  - "transition.base"
  - "ease.out"
  - "color.primary"
  - "color.success"
  - "color.warning"
  - "color.danger"
  - "font.size-sm"
  - "font.weight-bold"
  - "space.1"
  - "font.size-xs"
  - "color.text-muted"
  - "radius.sm"
  - "transition.fast"
  - "color.surface-hover"
a11y:
  - "Viewport container is `aria-live=\"polite\"` with `aria-atomic=\"false\"`; each toast carries `role=\"status\"` (announced on insertion)."
  - "Dismiss control is a native <button> with accessible name via `aria-label=\"Dismiss notification\"`."
  - "No focus is moved into toasts on insertion; toasts are not focusable except the dismiss button."
  - "Text-on-fill contrast >= 4.5:1 (text on surface; text-muted on surface for description)."
---

# Toast

Transient notification system: a provider, a `useToast()` hook, auto-dismiss timers, and a fixed bottom-right viewport.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `ToastProvider.children` | `ReactNode` | — | App tree that may call `useToast` (required) |
| `ToastProvider.durationMs` | `number` | `4000` | Default auto-dismiss delay; `0` disables it |
| `ToastProvider.className` | `string` | `undefined` | Extra class on the viewport |

`useToast(): { toast(options) }` where `ToastOptions` = `{ title?: ReactNode; description?: ReactNode; tone?: "info" \| "success" \| "warning" \| "danger"; durationMs?: number }`. Defaults per toast: `tone: "info"`, `durationMs` falls back to the provider default. Throws when used outside `<ToastProvider>`.

## Behavior

- `toast()` appends an item with an incrementing id and schedules `window.setTimeout(remove, durationMs)` when `durationMs > 0`.
- Viewport: `position: fixed`, bottom-right, `z.toast`, `pointer-events: none`; toasts re-enable pointer events.
- Each toast: `surface` background, `border` with a 3px left border in the tone color (`info`→primary, `success`, `warning`, `danger`), `shadow.lg`, entry animation (fade + 12px translateX, `transition.base` / `ease.out`).
- Layout: `title` (bold `sm`) with optional `description` (`xs`, `text-muted`), plus a 22×22px `×` dismiss button with `aria-label`.
- Dismiss removes the toast immediately; there is no exit animation and no pause-on-hover for the timer.

## Keyboard

Only the dismiss button is interactive (native `<button>`: Enter/Space). No other keyboard handling — toasts are announced via `aria-live`, not focused.

## Tests

| Scenario | Assertion |
|---|---|
| Exposes toast via useToast and renders the notification | No text before click; after click the title renders inside a `role="status"` element |
| Renders description and dismisses on button click | Clicking "Dismiss notification" removes the toast |
| Throws when useToast is used outside the provider | Render throws "useToast must be used within a <ToastProvider>" |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).