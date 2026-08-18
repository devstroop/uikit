---
name: Card
status: implemented
category: surfaces
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "radius.lg"
  - "color.surface"
  - "font.sans"
  - "shadow.md"
  - "color.border"
  - "transition.fast"
  - "color.border-strong"
  - "shadow.sm"
  - "color.focus"
  - "space.4"
  - "font.size-md"
  - "font.size-sm"
  - "font.weight-bold"
  - "color.text"
  - "space.3"
a11y:
  - "Plain <div> with no semantic role; text-on-surface contrast >= 4.5:1 (color.text on color.surface) per schema contrastRules."
  - "`interactive` variant adds keyboard operability: `tabIndex={0}`, Enter/Space dispatch a click on the card, and a focus-visible ring uses `--se-color-focus`. The card carries no implicit role, so consumers may layer their own semantics (e.g. role=button or a nested link)."
  - "Header is styled as a bold title but has no heading element; consumers should provide one for structure."
---
# Card

A surface container grouping related content into header, body, and footer
sections, with three visual variants.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `elevated` \| `outlined` \| `interactive` | `elevated` | Visual treatment |
| `header` | `ReactNode` | `undefined` | Renders `.header` section |
| `footer` | `ReactNode` | `undefined` | Renders `.footer` section |

All remaining props extend `HTMLAttributes<HTMLDivElement>` and are spread
onto the root `<div>`. The component is forwardRef'd to the div. Children are
always wrapped in `.body`.

## Behavior

- DOM: `<div class="card">` containing optional `.header`, `.body`
  (children), optional `.footer`. `overflow: hidden` clips corners.
- `elevated`: `shadow.md` + 1px border; `outlined`: 1px border, no shadow;
  `interactive`: border + `cursor: pointer`, hover swaps border to
  `border-strong` and lifts to `shadow.sm`.
- Header spacing collapses into body (`header + body` reduces top padding to
  `space.3`); body padding is `space.4`.
- Typography: header is `font.size-md` / `weight-bold` (heading-md tier);
  body text is `font.size-sm` (body tier) — it no longer inherits the page
  size.

## Keyboard

No keyboard support: the `interactive` variant adds no focus handling, no
`tabindex`, and no activation semantics. Only content placed inside the card
(buttons, links) is keyboard-reachable.

## Tests

| Scenario | Assertion |
|---|---|
| Renders with header/footer | `Title`, `Body`, `Footer` text all present |
| Header/footer omitted | only the card root and body div render (2 divs) |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).