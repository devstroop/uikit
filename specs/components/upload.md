---
name: Upload
status: implemented
category: forms
frameworks:
  react: v0.21.0
  htmx: v0.19.0
tokens:
  - "color.surface"
  - "color.surface-hover"
  - "color.border"
  - "color.border-strong"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.danger"
  - "color.success"
  - "color.outline-primary"
  - "radius.md"
  - "radius.sm"
  - "radius.full"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "control.height-sm"
  - "space.1"
  - "space.2"
  - "space.3"
  - "transition.fast"

a11y:
  - "The trigger is a native <button type=\"button\"> with an accessible name (default 'Upload'), or a custom template that must keep its own accessible name."
  - "The hidden <input type=\"file\"> is labelled by the trigger and opened on button click, keeping a single tab stop."
  - "Each queued file row names the file, its size, and state (uploading/complete/error) in visible text; the remove control is a native button with aria-label ('Remove <name>')."
  - "Progress is exposed visually (fill bar) and as aria-valuenow on a role=\"progressbar\" while a file is uploading."
  - "Errors are announced via a role=\"status\" aria-live=\"polite\" region ('Failed to upload <name>')."
  - "Focus indicators: :focus-visible draws the 3px outline-primary ring on the trigger, each remove button 2px."
---

# Upload

File upload control with an XHR-driven progress/complete/error lifecycle
(Radzen Upload parity: `Url`, `Multiple` (param "files"), `ParameterName`,
`Auto`, `Headers`, `ChooseText`, events `Progress`/`Complete`/`Error`,
custom `Template`). The hidden file input is opened by a trigger button;
selected files upload over XHR with `FormData` when `auto` is set.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `url` | `string` | — | POST target for the uploads (required for `auto` uploads) |
| `multiple` | `boolean` | `false` | Allows selecting more than one file (param is always `files`) |
| `parameterName` | `string` | `"files"` | Field name of each file in the `FormData` payload |
| `auto` | `boolean` | `true` | Uploads immediately on selection; when `false`, rows wait for an explicit Upload button per row |
| `headers` | `Record<string, string>` | — | Extra request headers sent on each upload |
| `accept` | `string` | — | `accept` filter of the file input (e.g. `"image/*"`) |
| `chooseText` | `string` | `"Upload"` | Accessible name of the trigger button |
| `children`/`template` | `ReactNode` | — | Custom trigger/content template; default renders the built-in button + file list |
| `onProgress` | `(name: string, progress: number) => void` | — | Fires with 0–100 while a file uploads (Radzen `Progress`) |
| `onComplete` | `(name: string) => void` | — | Fires when a file finished uploading (Radzen `Complete`) |
| `onError` | `(name: string, message: string) => void` | — | Fires when a file upload failed (Radzen `Error`) |

The component is `forwardRef`d to a handle exposing `open()` (opens the file
picker) and `upload()` (starts pending uploads).

## Behavior

- DOM is `<div class="upload"><button class="upload-trigger">…</button><input type="file" hidden/></div>`
  plus a list of `upload-row`s (one per selected file) when not using a
  custom template.
- Selecting files adds a row per file and, when `auto`, immediately starts
  the XHR upload for each. `FormData` field name is `parameterName`
  (`"files"` default, matching Radzen); `headers` are set on the request.
- Each row shows the file name, formatted size, and state: uploading
  (`role="progressbar"` fill), complete (`color.success` check), or error
  (`color.danger` + retry/remove). A per-row remove button (`aria-label`)
  drops the file from the queue (cancelling an in-flight XHR).
- Non-`auto` mode adds an Upload button per row; rows sit in `--pending`
  until clicked.
- The hidden input is reset after selection so picking the same file again
  re-fires `change`. `multiple` mirrors `input.multiple`.
- The `x-www-form-urlencoded` vs multipart decision is not exposed: uploads
  always use `multipart/form-data` via XHR, matching Radzen's default.

## Keyboard

The trigger button is the single tab stop (Enter/Space opens the picker);
each remove/upload row control is a native button. `:focus-visible` rings
are the only focus indicators.

## Tests

| Scenario | Assertion |
|---|---|
| Renders | trigger button + hidden file input wired to open on click |
| Select | picking files adds one row per file with name and size |
| Auto upload | selection fires `onComplete` per file with a mocked XHR |
| Progress | `onProgress` receives 0–100 during the upload |
| Error | a failed request fires `onError` and renders the error state |
| Non-auto | rows stay pending until the row Upload button is clicked |
| Remove | clicking the row remove drops the file and cancels in-flight upload |
| Multiple/param | `multiple` mirrors the input; FormData field is `files` (or `parameterName`) |
| Custom template | `children` replaces the default trigger/content |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).