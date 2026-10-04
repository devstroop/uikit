---
name: Popup
status: implemented
category: feedback
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.surface"
  - "color.text"
  - "radius.md"
  - "shadow.md"
  - "z.popover"
a11y:
  - "The panel is a labelled dialog: focus moves in on open and returns to the invoker on close."
  - "Escape closes; outside pointer, resize, and route change dismiss without stealing focus."
---

# Popup

Anchored panel service: content positions against an anchor element,
flipping above near the bottom edge and clamping horizontally. Single
panel at a time; open/close events fire on every transition. React
exposes a provider + hook; htmx exposes an imperative API plus
declarative triggers.

Unlike ContextMenu (cursor-anchored, item-list oriented), Popup anchors
to an element and carries arbitrary content with no item semantics.

## react

`usePopup()` inside `<PopupProvider>` — `open({ anchor, content, width?,
height?, className?, ariaLabel?, onOpen?, onClose? })` returns a close
handle for the opened panel; `close()`; `isOpen`. Focus moves into the
labelled panel on open and returns to the invoker on close. Dismiss on
outside pointer, Escape, resize, and hash change.

```tsx
const popup = usePopup();
<button onClick={(e) => popup.open({ anchor: e.currentTarget, content: <Filters /> })}>
```

## htmx

`window.dxPopup.open(anchor|selector, content|node, options?)` with the
same options shape (`cssClass` instead of `className`); returns a close
handle; `close()`; `isOpen`. `dx:popup-open` / `dx:popup-close` fire on
the panel. Declarative triggers open against themselves:
`[data-dx-popup]` (selector whose innerHTML becomes the content) or
`[data-dx-popup-html]` (inline HTML), with `data-dx-popup-label` for the
accessible name.

```html
<button data-dx-popup="#filters-tpl">Filters</button>
```

## Tests

| Scenario | Assertion |
|---|---|
| Open (both) | labelled panel builds against the anchor |
| Missing anchor (htmx) | null, stays closed |
| Events (both) | open/close fire with the right payload |
| Escape (both) | closes + restores invoker focus |
| Outside dismiss (both) | pointer outside closes |
| Returned handle (both) | closes only its own panel |
| Options (both) | width/height/className applied |
| Trigger forms (htmx) | selector + inline-html triggers open |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
