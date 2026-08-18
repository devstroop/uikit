---
name: Dialog
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "z.modal"
  - "color.border"
  - "radius.lg"
  - "color.surface"
  - "color.text"
  - "shadow.lg"
  - "transition.base"
  - "ease.out"
  - "color.backdrop"
  - "space.3"
  - "space.4"
  - "space.5"
  - "font.size-lg"
  - "font.weight-bold"
  - "space.1"
  - "font.size-sm"
  - "color.text-muted"
  - "radius.sm"
  - "transition.fast"
  - "color.surface-hover"
  - "space.2"
a11y:
  - "Renders a native <dialog> element opened via showModal() (implicit role=\"dialog\", top-layer modal semantics, background made inert by the browser)."
  - "aria-labelledby=\"se-dialog-title\" links the dialog to its <h2> title."
  - "aria-describedby=\"se-dialog-desc\" is set only when a description is rendered."
  - "Close button is a native <button type=\"button\"> with aria-label=\"Close dialog\" and onClick={onClose}."
  - "No custom focus trap or focus restore — focus entry/containment is delegated to native showModal()."
  - "Text-on-surface contrast >= 4.5:1 (color.text on color.surface); description uses color.text-muted on color.surface (>= 4.5:1)."
---

# Dialog

Modal container for focused tasks and confirmations, built on the native
`<dialog>` element with `showModal()`.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — (required) | Whether the dialog is shown; mounts/dismounts via `showModal()` / `close()` |
| `onClose` | `() => void` | — (required) | Called on the native `close` event and by the close button |
| `title` | `ReactNode` | `undefined` | Rendered as the `h2` dialog title (enables `aria-labelledby`) |
| `description` | `ReactNode` | `undefined` | Subtitle paragraph (enables `aria-describedby`) |
| `children` | `ReactNode` | `undefined` | Body content |
| `footer` | `ReactNode` | `undefined` | Action row at the bottom |
| `size` | `sm` \| `md` \| `lg` | `md` | Max-width tier: 360 / 520 / 720px |
| `className` | `string` | `undefined` | Extra class on the `<dialog>` |

## Behavior

- Controlled by `open`: a `useEffect` calls `showModal()` or `close()` on
  the native element, keeping it in sync with the prop.
- Header renders only when `title` is set; it holds the `h2` title,
  optional description, and a `×` close button. Body and footer render
  only when their props are non-null.
- Sizes: `sm` 360px, `md` 520px, `lg` 720px `max-width`; shared
  `max-height: min(85vh, 720px)` with `overflow: auto`.
- Entry animation `se-dialog-in` (fade + translate/scale) using
  `transition.base` + `ease.out`; `::backdrop` uses `color.backdrop`.
- Header/footer separated by `color.border` rules; close button shifts to
  `surface-hover`/`text` on hover.

## Keyboard

No custom key handling. Native modal `<dialog>` behavior applies: Escape
closes the dialog (fires `cancel` then `close`), which triggers `onClose`.
Close button and all focusable content remain in tab order.

## Tests

| Scenario | Assertion |
|---|---|
| Closed then re-rendered open | no `role="dialog"` in document; appears after rerender with `open` |
| Renders title, description, body, footer | dialog contains all text; `Save` button present |
| Click close button | `onClose` called once |
| Re-render with `open={false}` (programmatic close) | `onClose` called once via the `close` event |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
