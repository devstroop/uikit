---
name: HtmlEditor
status: implemented
category: forms
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.surface"
  - "color.text"
  - "color.surface-hover"
  - "color.focus"
  - "font.size-sm"
  - "radius.md"
  - "radius.sm"
  - "space.1"
  - "space.2"
  - "space.3"
a11y:
  - "Toolbar is a labelled toolbar; every tool is a named button (glyphs are decorative)."
  - "Source mode is a labelled textarea; toggling preserves content both ways."
  - "Ctrl/Cmd+B/I/U mirror the toolbar; the editable region is a labelled multiline textbox."
---

# HtmlEditor

Core rich-text surface: contenteditable host, full toolbar, source
toggle, sanitized HTML value. Slice 1 shipped text styling +
undo/redo/remove-format + source; this slice adds colors, block and
font selects, lists, indent, alignment, link/unlink, image (+upload),
table, custom tools, and the executeCommand API.

## react

`<HtmlEditor value?/defaultValue?/onChange?/toolbar?/readOnly?/disabled?/
ariaLabel?/sanitize?>` — controlled or uncontrolled; `onChange` always
receives DOMPurify-sanitized HTML (`sanitize: false` opts out). Toolbar
buttons run guarded `execCommand`s (engines without it skip silently);
mousedown is blur-guarded so the selection survives tool clicks.
Source mode swaps a textarea mirror; toggling round-trips through the
committed-HTML ref so remounts never show stale content.

```tsx
<HtmlEditor defaultValue="<p>hi</p>" onChange={(html) => save(html)} />
```

Extended toolbar (all tools emit through the same guarded execCommand
path, so engines without it skip silently):

- colors: inline color inputs run `foreColor` / `hiliteColor` (`backColor`
  fallback) with the picked value
- `formatBlock` (bracket-tolerant: `<h1>` with `h1` fallback), `fontName`,
  `fontSize` selects reset after applying
- lists (`insertUnorderedList` / `insertOrderedList`), `indent` /
  `outdent`, `justifyLeft/Center/Right/Full` buttons
- `link` opens a URL dialog (`createLink`); `unlink` removes; `image`
  opens a URL dialog (`insertImage`) or uploads when `imageUpload`
  (`{ url, headers?, parameterName?, parseUrl? }`, default parses a
  `{url}` JSON field or plain text; failures report through `onError`)
- `table` opens a rows/columns dialog and inserts an RxC table
- custom tools (`{ id, label, glyph?, title?, onExecute }`) receive
  `{ execCommand, getHtml, insertHtml, focus }`
- `ref` exposes `{ execCommand(command, value?), getHtml() }`

## htmx

`[data-dx-htmleditor]` contenteditable host + `[data-dx-htmleditor-tool]`
buttons (`bold|italic|underline|strikethrough|undo|redo|removeFormat|
source`, same guarded execCommand contract). Input emits
`dx:htmleditor-change{value}`; `data-dx-htmleditor-input="#id"` mirrors
the HTML into a form input. The source tool swaps a textarea mirror
(`[data-dx-htmleditor-source]`, created on demand or paired by id).
No client-side sanitize (dependency-free bundle) — sanitize server-side.

```html
<div data-dx-htmleditor-toolbar>
  <button data-dx-htmleditor-tool="bold">B</button>
</div>
<div contenteditable data-dx-htmleditor><p>hi</p></div>
```

## Tests

| Scenario | Assertion |
|---|---|
| Render (both) | toolbar + labelled editable region |
| Toolbar ops (both) | execCommand called with the right command |
| Missing execCommand (both) | skips silently, no throw |
| Value/change (both) | input emits the current HTML; react output sanitized |
| Input sync (htmx) | configured target input mirrors the HTML |
| Source round-trip (both) | toggle preserves content both ways |
| Shortcuts (both) | ctrl/cmd+b/i/u dispatch the matching op |
| Controlled (react) | external value mirrors into the region |
| Colors/selects/lists/align (both) | picked values dispatch with the right command |
| Link/image/table dialogs (both) | URL dialogs insert; table builds RxC markup |
| Upload (both) | file posts to the configured URL; returned URL inserts; failures surface (onError / dx:htmleditor-error) |
| Custom tools (both) | consumer handlers fire with the editor api |
| executeCommand API (both) | ref handle (react) / dxHtmlEditor (htmx) drive a host |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
