---
name: DialogService
status: implemented
category: feedback
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens: []
a11y:
  - "Host dialogs are native <dialog> modals: focus is trapped, ESC closes, focus returns to the opener."
  - "Every host carries an accessible name (explicit title or a Confirm/Alert/Dialog default) so unnamed dialogs never ship."
  - "Service flips never move focus: closing restores the opener with preventScroll."
---

# DialogService

Imperative dialog host + service: open arbitrary content without host
markup, with promise-on-close semantics. The provider (react) / host
registry (htmx) queues requests FIFO behind a single host dialog.

Draggable dialogs are out of scope (no drag primitive exists yet); the
dialog stays put. Non-modal dialogs are out of scope (hosts are always
modal via showModal).

## react

`useDialog()` inside `<DialogProvider>` — `confirm`/`alert` helpers plus
the generic surface:

```tsx
const dialog = useDialog();
const result = await dialog.open({
  title: "Pick",
  content: <Picker onPick={(v) => dialog.close(v)} />,
});
await dialog.openSide({ position: "right", title: "Rail", content });
dialog.close(result?); // top only
dialog.closeAll(); // everything, promises settle undefined
dialog.refresh(); // re-render the open host
```

`confirm` resolves its boolean, `alert` resolves void, custom opens
resolve `close(result)`. `openSide` presets `side` + `showMask` (default
true). The host renders the X button unless `showCloseButton: false`,
plus a default Close footer when no footer is given.

## htmx

`window.dxDialog` — same verbs, same queue semantics; `dx:close`
carries `{ result }` on every close:

```js
const result = await dxDialog.open({ title, content | url, options });
const ok = await dxDialog.confirm({ title, message, confirmText, cancelText, tone });
await dxDialog.alert({ title?, message?, okText? });
dxDialog.close(result?); dxDialog.closeAll(); dxDialog.refresh(html?);
```

`url` fetches a server fragment into the body. ESC routes through settle
(preventDefault, never silent; `closeOnEsc: false` swallows it). Static
hosts (`data-dx-dialog-open` flow) are untouched; service hosts created
by `open` are ephemeral.

## Tests

| Scenario | Assertion |
|---|---|
| Open custom (both) | host renders title + content |
| close(result) (both) | promise resolves result + `dx:close{result}` (htmx) |
| closeAll (both) | queue empties, every promise settles |
| alert/confirm (both) | OK resolves void; confirm true/false on buttons |
| Fetch fragment (htmx) | body carries the fetched markup |
| Side dock (both) | panel class applied, contract identical |
| ShowCloseButton=false (react) | no header X |
| ESC (both) | settles, never closes silently |
| Focus (both) | trapped while open, opener restored on close |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
