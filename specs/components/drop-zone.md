---
name: DropZone
status: implemented
category: forms
frameworks:
  react: v0.21.0
  htmx: v0.19.0
tokens:
  - "color.surface"
  - "color.surface-hover"
  - "color.border-strong"
  - "color.border-primary"
  - "color.text-muted"
  - "color.text-primary"
  - "color.outline-primary"
  - "radius.md"
  - "radius.sm"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "control.height-sm"
  - "space.1"
  - "space.2"
  - "space.4"
  - "transition.fast"

a11y:
  - "The zone is a labelled region (visible caption text + aria-label on the wrapper) so its purpose is announced."
  - "The zone is keyboard-operable: it contains a hidden file input whose picker opens on the zone's trigger button; the trigger is a native <button>."
  - "Drag state is announced via the visible caption ('Drop files here' flips to 'Drop to attach') — not color alone."
  - "Focus indicators: :focus-visible draws the 3px outline-primary ring on the trigger and the zone border."
  - "Dropped files are handed to the onDrop callback as a FileList; no files are transferred silently."
---

# DropZone

Drag-and-drop file drop target with a fallback file picker (Radzen
DropZone{Container,Item} parity: HTML5 drag-drop zones). Dragging a file
over the zone flips a visible drag state; dropping fires `onDrop` with the
`FileList`. `accept` filters which files are eligible.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `accept` | `string` | — | `accept` filter (e.g. `"image/*"`); files failing it are ignored on drop |
| `multiple` | `boolean` | `false` | Allows dropping/selecting more than one file |
| `onDrop` | `(files: FileList) => void` | — | Fires with the dropped/selected files |
| `label` | `string` | `"Drop files here or browse"` | Visible caption inside the zone |
| `dragLabel` | `string` | `"Drop to attach"` | Caption shown while a drag is over the zone |
| `browseText` | `string` | `"Browse"` | Accessible name of the browse trigger |
| `disabled` | `boolean` | `false` | Blocks drag/drop and the picker |

The component is `forwardRef`d to a handle exposing `open()` (opens the
picker).

## Behavior

- DOM is `<div class="dropzone" role="region" aria-label=…><p class="dropzone-caption">…</p><button class="dropzone-browse">Browse</button><input type="file" hidden/></div>`.
- `dragenter`/`dragover` on the zone add the `--dragging` modifier (dashed
  `border-primary` + `surface-hover` wash + `dragLabel` caption) and
  `dragleave`/`drop` remove it; `dragover` calls `preventDefault()` so the
  browser permits the drop.
- `drop` reads `dataTransfer.files`, filters by `accept` (extension/MIME
  match; no filter = all), and fires `onDrop` with the resulting `FileList`.
  The zone stays mounted — files are not uploaded by the zone itself.
- The browse trigger opens the hidden input; picking files is treated as a
  drop (same `onDrop` path). The input is reset after selection so re-picking
  the same files re-fires.
- Disabled state ignores drag events, hides the trigger, and renders at
  `opacity 0.55`.
- `:focus-visible` draws the 3px `outline-primary` ring on the zone border
  when the trigger or zone receives keyboard focus.

## Keyboard

The browse button is the tab stop (Enter/Space opens the picker). Drag
interaction is a pointer affordance; the picker is the keyboard path.

## Tests

| Scenario | Assertion |
|---|---|
| Renders | region with caption + browse button + hidden input |
| Drag over | `dragenter`/`dragover` add `--dragging`, `dragleave` removes it |
| Drop | a synthetic `drop` fires `onDrop` with the FileList |
| Accept filter | dropped files failing `accept` are excluded |
| Browse | clicking Browse opens the picker; selection fires `onDrop` |
| Multiple | `multiple` mirrors the input |
| Disabled | drag events ignored, trigger hidden, opacity applied |
| Re-pick | input reset after selection so the same files can be picked again |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).