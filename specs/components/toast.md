---
name: Toast
status: implemented
category: feedback
frameworks:
  react: v0.3.5
  htmx: v0.1.6
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
  - "color.text-primary"
  - "color.text-success"
  - "color.text-warning"
  - "color.text-danger"
  - "font.size-sm"
  - "font.size-md"
  - "font.weight-bold"
  - "space.1"
  - "font.size-xs"
  - "color.text-muted"
  - "radius.sm"
  - "transition.fast"
  - "color.surface-hover"
a11y:
  - "Viewport container is `aria-live=\"polite\"` with `aria-atomic=\"false\"`; each toast carries `role=\"status\"` (announced on insertion). Danger toasts carry `role=\"alert\"` (assertive) instead."
  - "Dismiss control is a native <button> with accessible name via `aria-label=\"Dismiss notification\"`."
  - "No focus is moved into toasts on insertion; toasts are not focusable except the dismiss button."
  - "Text-on-fill contrast >= 4.5:1 (text on surface; text-muted on surface for description)."
---

# Toast

Transient notification system: a provider, a `useToast()` hook, auto-dismiss timers, and a fixed bottom-right viewport.

## API

| Prop | Type | Default | Description |
|---|---|---|---|---|
| `ToastProvider.children` | `ReactNode` | — | App tree that may call `useToast` (required) |
| `ToastProvider.durationMs` | `number` | `4000` | Default auto-dismiss delay; `0` disables it |
| `ToastProvider.position` | `"top-left"` \| `"top-right"` \| `"bottom-left"` \| `"bottom-right"` | `"bottom-right"` | Viewport corner (Radzen Notification `Position` parity) |
| `ToastProvider.className` | `string` | `undefined` | Extra class on the viewport |

`useToast(): { toast(options) }` where `ToastOptions` = `{ title?: ReactNode; description?: ReactNode; tone?: "info" \| "success" \| "warning" \| "danger"; durationMs?: number }`. Defaults per toast: `tone: "info"`, `durationMs` falls back to the provider default. Throws when used outside `<ToastProvider>`.

## Behavior

- `toast()` appends an item with an incrementing id and schedules `window.setTimeout(remove, durationMs)` when `durationMs > 0`.
- Viewport: `position: fixed`, `z.toast`, `pointer-events: none`; toasts
  re-enable pointer events. Anchored `bottom-right` by default; the other
  corners via viewport modifier classes
  (`se-toast-viewport--top-left` etc., all at `space.5` from the edge).
- Each toast: `surface` background tinted 12% of the tone via `color-mix` (the same tint language as Alert) with a 1px tone-colored border (`border-color: <tone>`); the title takes the matching `text-{tone}` foreground and the description stays `text-muted`. `shadow.lg`, entry animation (fade + 12px translateX, `transition.base` / `ease.out`).
- Layout: `title` (bold `sm`) with optional `description` (`xs`, `text-muted`), plus a 22×22px `×` dismiss button with `aria-label`.
- Dismiss removes the toast immediately; there is no exit animation and no pause-on-hover for the timer.

## Keyboard

Only the dismiss button is interactive (native `<button>`: Enter/Space). No other keyboard handling — toasts are announced via `aria-live`, not focused.

## Tests

| Scenario | Assertion |
|---|---|---|
| Exposes toast via useToast and renders the notification | No text before click; after click the title renders inside a `role="status"` element (danger toasts use `role="alert"`) |
| Renders description and dismisses on button click | Clicking "Dismiss notification" removes the toast |
| Position default | viewport has no position modifier (anchored bottom-right) |
| `position="top-left"` | top-left modifier class applied |
| Throws when useToast is used outside the provider | Render throws "useToast must be used within a <ToastProvider>" |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).