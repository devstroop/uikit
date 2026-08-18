---
name: Tooltip
status: implemented
frameworks:
  react: v0.3.0
tokens:
  - "z.tooltip"
  - "color.text"
  - "color.bg"
  - "font.size-xs"
  - "font.weight-medium"
  - "space.1"
  - "space.2"
  - "radius.sm"
  - "shadow.md"
  - "transition.fast"
a11y:
  - "Tooltip element has `role=\"tooltip\"` with a `useId`-generated id."
  - "When open, the trigger element is cloned with `aria-describedby` pointing at the tooltip id (attribute absent while closed); a consumer-supplied `aria-describedby` on the child is preserved and space-joined."
  - "Opens on both hover and keyboard focus (wrapper `onMouseEnter`/`onFocus`), closes on leave/blur, and on Escape keydown while open."
  - "Arrow span is `aria-hidden=\"true\"`; the tooltip has `pointer-events: none`."
  - "Text-on-fill contrast >= 4.5:1 (bg on text — inverted tooltip: `color.bg` foreground on `color.text` background)."
---

# Tooltip

Hover/focus-triggered label that positions itself around a single trigger child, with a delay and four placements.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `ReactNode` | — | Tooltip contents (required) |
| `children` | `ReactNode` | — | Trigger element; a single valid element is cloned to receive `aria-describedby` (required) |
| `placement` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Side the tooltip renders on |
| `delayMs` | `number` | `300` | Hover/focus-to-show delay |
| `className` | `string` | `undefined` | Extra class on the wrapper span |

## Behavior

- Wrapper is a `position: relative` inline-flex `<span>`; show/hide are driven by `onMouseEnter`/`onFocus` (show) and `onMouseLeave`/`onBlur` (hide).
- Show is debounced by a `delayMs` timeout; hide clears the pending timer. Focus and hover share the same delay.
- The trigger is cloned with `aria-describedby` only while open; non-element children render as-is without the attribute (no merge of existing handlers or props beyond the single attribute).
- Tooltip: absolutely positioned by placement class, `z.tooltip`, `color.bg` text on `color.text` background, `radius.sm`, `shadow.md`, `white-space: nowrap`, fade-in animation with a 2px translateY.
- A 6px rotated arrow span sits on the edge of the tooltip per placement.

## Keyboard

No custom key handling — Escape is not supported. Keyboard users get the tooltip via native focus (the wrapper's `onFocus`/`onBlur` bubble from the trigger child). The tooltip itself is not focusable.

## Tests

| Scenario | Assertion |
|---|---|
| Shows on hover with role=tooltip | No tooltip initially; after hover, a `role="tooltip"` element with the content appears |
| Hides on unhover | Tooltip is removed from the DOM after unhovering |
| Wires aria-describedby to the trigger when open | Trigger's `aria-describedby` equals the tooltip element's id |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).