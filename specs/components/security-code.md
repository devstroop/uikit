---
name: SecurityCode
status: implemented
category: forms
frameworks:
  react: v0.21.0
  htmx: v0.19.0
tokens:
  - "color.border"
  - "color.surface"
  - "color.text"
  - "color.text-muted"
  - "color.danger"
  - "color.primary"
  - "color.outline-primary"
  - "radius.sm"
  - "font.sans"
  - "font.size-md"
  - "font.weight-medium"
  - "control.height-sm"
  - "control.height-md"
  - "control.height-lg"
  - "space.05"
  - "transition.fast"

a11y:
  - "Each cell is a native <input inputmode=\"numeric\"> with an explicit aria-label (e.g. 'Digit 1 of 6'), so every slot is individually nameable and announced."
  - "The group is wrapped in a labelled container; a single hidden <input> is NOT used — each cell is focusable and the active cell carries the focus indicator (:focus-visible 3px outline-primary)."
  - "A role=\"status\" aria-live=\"polite\" region announces 'Code complete' when all cells are filled, so the finish state is announced without moving focus."
  - "Keyboard: digits auto-advance, Backspace returns to the previous cell, ArrowLeft/ArrowRight/Home/End move between cells, Tab moves into and out of the group as one stop."
  - "Pasted text is split across the cells, so clipboard entry works without extra steps."
  - "Invalid state sets aria-invalid on the filled cells and draws the danger border; disabled cells are skipped in tab order (the first cell keeps focus instead)."
---

# SecurityCode

One-time code entry as a row of single-digit cells (Radzen SecurityCode
parity: `Value`, `Length`, `Change`). Typing auto-advances, Backspace steps
back, and pasting a full code splits it across the cells.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `length` | `number` | `6` | Number of digit cells (1–12) |
| `value` | `string` | — | Controlled full code (`""` = empty); only digits are kept |
| `defaultValue` | `string` | — | Initial code (uncontrolled mode) |
| `onChange` | `(value: string) => void` | — | Fires with the full digit string on every edit |
| `invalid` | `boolean` | `false` | Marks the cells invalid (danger border) and sets `aria-invalid` |
| `size` | `sm` \| `md` \| `lg` | `md` | Density tier (`ComponentSize`); maps to `control.height-*` and font size |
| `autoFocus` | `boolean` | `false` | Focuses the first empty cell on mount |
| `disabled` | `boolean` | `false` | Disables every cell |
| `label` | `string` | `"Security code"` | Accessible name of the group (`aria-label` on the wrapper) |
| `liveAnnounce` | `boolean` | `true` | Announces "Code complete" in a `role="status"` region when filled |

The component is `forwardRef`d to the first `<input>` element. Remaining
input attributes (id, name, aria-*, onKeyDown, ...) are forwarded to every
cell; `aria-label` on a cell, when provided, overrides the generated one.

## Behavior

- DOM is `<div class="securitycode" role="group" aria-label=…>` containing
  `<input class="securitycode-cell securitycode-cell--<size>" inputmode="numeric" maxlength="1">`
  cells plus a trailing `role="status"` live region. Cells carry
  `aria-label="Digit n of length"`.
- Typing a digit fills the current cell and advances to the next empty one;
  if all cells are filled it commits (`onChange` with the full code) and the
  live region announces completion.
- Backspace on a filled cell clears it and stays; Backspace on an empty cell
  moves to the previous cell and clears it. ArrowLeft/ArrowRight move by one,
  Home/End jump to the first/last cell.
- Paste: digits are extracted from the clipboard text and written left to
  right starting at the focused cell, filling subsequent cells (and only
  those), then the focus moves to the cell after the last written digit.
- Non-digit keystrokes are ignored. The cell value is always a single digit.
- Invalid state: `color.danger` border; `:disabled` cells render at
  `opacity 0.55`. `:focus-visible` draws the 3px `outline-primary` ring.

## Keyboard

Digits (0–9) fill and advance; Backspace clears/back-steps; ArrowLeft/Right,
Home, End navigate; Tab moves in/out of the group as one stop. Each cell is
its own focus stop so screen-reader users can read slot-by-slot.

## Tests

| Scenario | Assertion |
|---|---|
| Renders cells | `length` textbox inputs, each `inputmode="numeric"` `maxlength="1"` with `Digit n of N` labels |
| Type + advance | typing `1` fills cell 0 and focuses cell 1 |
| Backspace | clears the filled cell; on an empty cell moves back and clears the previous |
| Paste split | pasting `123456` fills all cells and commits the full code |
| Value/change | controlled `value`/`onChange` round-trip the digit string |
| Invalid | cells carry `aria-invalid`, danger class applied |
| Disabled | all cells disabled; typing ignored |
| Complete announce | filling the last cell fires `onChange` with the full code and the live region text is "Code complete" |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).