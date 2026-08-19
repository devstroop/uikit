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
  - "color.focus"
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
|---|---|---|---|
| `ToastProvider.children` | `ReactNode` | — | App tree that may call `useToast` (required) |
| `ToastProvider.durationMs` | `number` | `4000` | Default auto-dismiss delay; `0` disables it |
| `ToastProvider.position` | `"top-left"` \| `"top-right"` \| `"bottom-left"` \| `"bottom-right"` | `"bottom-right"` | Default viewport corner (Radzen Notification `Position` parity) |
| `ToastProvider.pauseOnHover` | `boolean` | `true` | Pause every auto-dismiss timer while a toast is hovered or the tab is hidden (sonner parity) |
| `ToastProvider.className` | `string` | `undefined` | Extra class on the viewport |

`useToast(): { toast(options) }` where `ToastOptions` (sonner + Radzen parity):

| Option | Type | Default | Description |
|---|---|---|---|
| `title` / `description` | `ReactNode` | `undefined` | Content lines |
| `tone` | `"info"` \| `"success"` \| `"warning"` \| `"danger"` | `"info"` | Severity tone |
| `durationMs` | `number` | provider default (`4000`) | Auto-dismiss delay; `0` = persistent (dismiss-only) |
| `id` | `number` \| `string` | auto-increment | Reuse an id to update an existing toast in place instead of appending (loading → done pattern) |
| `action` / `cancel` | `{ label: ReactNode; onClick?: () => void }` | `undefined` | Action buttons; activating one runs its callback then dismisses the toast (sonner/M3 action parity; M3: a single action) |
| `dismissible` | `boolean` | `true` | Show the × button (sonner `dismissible` parity) |
| `closeOnClick` | `boolean` | `false` | Dismiss when the toast body is clicked (Radzen `CloseOnClick` parity); pointer convenience — the × stays the keyboard path |
| `showProgress` | `boolean` | `false` | Bottom duration bar, tone-colored, animating `durationMs` linear; pauses with the timer (Radzen `ShowProgress` parity) |
| `position` | `"top-left"` \| ... | provider default | Per-toast corner override; the provider renders one viewport per corner in use (sonner per-toast position parity) |
| `onDismiss` | `() => void` | `undefined` | Called on manual dismissal (button, action, cancel, or `closeOnClick`) |
| `onAutoClose` | `() => void` | `undefined` | Called when the timer expires |

Throws when used outside `<ToastProvider>`.

## Behavior

- `toast()` appends an item with an incrementing id (or updates the item
  matching `id` in place — content, tone, callbacks and timer are replaced)
  and schedules auto-dismiss via `window.setTimeout` when `durationMs > 0`.
- Viewport: `position: fixed`, `z.toast`, `pointer-events: none`; toasts
  re-enable pointer events. One viewport per corner in use, each anchored
  `space.5` from its edges (`se-toast-viewport--top-left` etc. modifiers;
  the base class is bottom-right).
- Each toast: `surface` background tinted 12% of the tone via `color-mix`
  (the same tint language as Alert) with a 1px tone-colored border
  (`border-color: <tone>`); the title takes the matching `text-{tone}`
  foreground and the description stays `text-muted`. `shadow.lg`, entry
  animation (fade + 12px translateX, `transition.base` / `ease.out`).
- Layout: `title` (bold `sm`) with optional `description` (`xs`,
  `text-muted`), optional `actions` row (primary `se-toast-action` +
  secondary `se-toast-cancel`, `xs` bold text buttons), plus a 22×22px `×`
  dismiss button with `aria-label` (omitted when `dismissible: false`).
- `action`/`cancel` click: run `onClick`, then dismiss the toast (sonner:
  the toast closes; M3: an action means the user decided).
- `showProgress` renders a 3px bottom bar (tone fill, bottom corners of
  `radius.md`) animating `scaleX(1 → 0)` over exactly `durationMs`; the
  animation pauses whenever the timer is paused.
- Pause/resume: `pauseOnHover` pauses every running timer while the pointer
  is over any toast (and while the tab is hidden); remaining time is
  preserved and the timer resumes on leave/visible. Dismissal of a paused
  toast clears its timer.
- Removal: items animate out (fade + 12px translateX, `transition.fast` /
  `ease.out`, ~200ms) before leaving the DOM; the leaving item is
  `pointer-events: none`. `onAutoClose` fires at timer expiry, `onDismiss`
  on any manual dismissal.
- htmx: `window.seToast(options)` mirrors the react API (static server
  markup uses the same classes/hooks; `data-se-toast-id` enables in-place
  updates, `data-paused` reflects the paused state, `data-se-dismiss`
  animates out).

## Keyboard

The dismiss button and the action/cancel buttons are native `<button>`s
(Enter/Space). `closeOnClick` is pointer-only; the × remains the keyboard
path. No other keyboard handling — toasts are announced via `aria-live`,
not focused.

## Tests

| Scenario | Assertion |
|---|---|
| Exposes toast via useToast and renders the notification | No text before click; after click the title renders inside a `role="status"` element (danger toasts use `role="alert"`) |
| Renders description and dismisses on button click | Clicking "Dismiss notification" removes the toast |
| Position default | viewport has no position modifier (anchored bottom-right) |
| `position="top-left"` | top-left modifier class applied |
| Per-toast `position` override | a second viewport appears in the overridden corner |
| Throws when useToast is used outside the provider | Render throws "useToast must be used within a <ToastProvider>" |
| `id` update | calling `toast({ id })` twice renders one toast with the updated title |
| `action` / `cancel` | buttons render; clicking runs the callback and removes the toast |
| `dismissible: false` | no "Dismiss notification" button |
| `durationMs: 0` | toast persists until dismissed |
| `showProgress` | progress bar element present with `animation-duration` matching `durationMs` |
| `onDismiss` / `onAutoClose` | called respectively on manual dismiss and on timer expiry |
| `pauseOnHover` | hovering the toast delays auto-dismiss; leaving resumes it |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).