---
name: Typography
status: implemented
category: typography
frameworks:
  react: v0.16.0
  htmx: v0.14.0
tokens:
  - "font.sans"
  - "font.size-xs"
  - "font.size-sm"
  - "font.display-1"
  - "font.display-2"
  - "font.display-3"
  - "font.display-4"
  - "font.display-5"
  - "font.display-6"
  - "font.weight-medium"
  - "letterspacing.display-1"
  - "letterspacing.display-2"
  - "letterspacing.display-3"
  - "letterspacing.display-4"
  - "letterspacing.display-5"
  - "letterspacing.display-6"
  - "letterspacing.overline"
  - "color.text-muted"
a11y:
  - "Display variants map to real heading levels h1-h6 so the document outline is preserved."
  - "Body copy renders as a semantic <p>; caption/overline render as inline <span>s."
  - "Caption uses --dt-color-text-muted, which the theme validator holds >= 4.5:1 against bg and surface."
  - "All tiers set font-family from --dt-font-sans so headings never fall back to the browser serif default."
  - "The display scale is fluid (clamp() with vw) — no fixed sizes that break at narrow viewports."
---

# Typography

Text presentation primitives — display headings, body copy, captions, and
overlines (Radzen `TextStyle` parity). This is the cross-cutting
text-presentation primitive: every component's type should draw from these
tiers instead of picking sizes ad hoc.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `display-1`…`display-6` \| `body-1` \| `body-2` \| `caption` \| `overline` | `body-1` | Text-presentation tier |
| `as` | element | auto | Override the element mapped from `variant` |

All remaining `HTMLAttributes<HTMLElement>` are spread onto the rendered
element (`id`, `aria-*`, `className`, ...). The component is `forwardRef`d.

## Behavior

- Element mapping: `display-1`…`display-6` → `<h1>`…`<h6>`;
  `body-1`/`body-2` → `<p>`; `caption`/`overline` → `<span>`.
- Display tiers use the fluid `font.display-*` clamp() scale with the
  matching negative `letterspacing.display-*` tracking (tightest on the
  largest heading).
- `body-1` = `font.size-sm` (0.875rem) at 1.429 line-height; `body-2` =
  same size at 1.5 line-height.
- `caption` = `font.size-xs` at 1.429, muted via `color.text-muted`.
- `overline` = `font.size-xs`, uppercase, `letterspacing.overline` (0.08em)
  tracking, `font.weight-medium`.
- All tiers set `font-family: var(--dt-font-sans)` — the type scale is
  font-face independent but the stack is theme-specific.

## Keyboard

Static text — no interactive behavior, focus, or activation semantics.

## Tests

| Scenario | Assertion |
|---|---|
| Default variant | renders a `<p>` with the `body-1` class |
| Display variants | `display-N` renders `<hN>` with its class |
| `body-2` | renders a `<p>` with the `body-2` class |
| `caption` / `overline` | render `<span>` elements |
| `as` override | overrides the mapped element |
| Attributes spread | `id` / `aria-*` / `className` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).