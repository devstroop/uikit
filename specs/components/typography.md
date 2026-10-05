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
  - "font.size-md"
  - "font.size-lg"
  - "font.size-xl"
  - "font.display-1"
  - "font.display-2"
  - "font.display-3"
  - "font.display-4"
  - "font.display-5"
  - "font.display-6"
  - "font.weight-medium"
  - "font.weight-bold"
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
  - "Caption uses --dx-color-text-muted, which the theme validator holds >= 4.5:1 against bg and surface."
  - "All tiers set font-family from --dx-font-sans so headings never fall back to the browser serif default."
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
| `textStyle` | `DisplayH1`…`DisplayH6` \| `H1`…`H6` \| `Subtitle1` \| `Subtitle2` \| `Body1` \| `Body2` \| `Button` \| `Caption` \| `Overline` | `Body1` | Text-presentation tier (Radzen `TextStyle` parity) |
| `tagName` | `Auto` \| `Div` \| `Span` \| `P` \| `H1`…`H6` \| `A` \| `Button` \| `Pre` \| `Strong` | `Auto` | Override the element mapped from `textStyle` (Radzen `TagName` parity; `Strong` is a uikit addition) |
| `textAlign` | `Left` \| `Right` \| `Center` \| `Justify` \| `Start` \| `End` \| `JustifyAll` | — | Horizontal alignment as a composable class |
| `text` | `ReactNode` | — | Plain text content; takes precedence over children (Radzen `Text` parity) |
| `visible` | `boolean` | `true` | Render nothing when false (Radzen `Visible` parity) |

All remaining `HTMLAttributes<HTMLElement>` are spread onto the rendered
element (`id`, `aria-*`, `className`, ...). The component is `forwardRef`d.

## Behavior

- Element mapping (`tagName="Auto"`): `DisplayH1`…`DisplayH6` → `<h1>`…`<h6>`;
  `H1`…`H6` → their own `<hN>`; `Subtitle1`/`Subtitle2` → `<h6>`;
  `Body1`/`Body2` → `<p>`; `Button`/`Caption`/`Overline` → `<span>`.
- Class contract (shared with htmx): every tier also emits a kebab-case
  class — `display-1`…`display-6`, `subtitle-1`, `subtitle-2`, `body-1`,
  `body-2`, `button`, `caption`, `overline` — so the two frameworks style
  from the same vocabulary.
- Display tiers use the fluid `font.display-*` clamp() scale with the
  matching negative `letterspacing.display-*` tracking (tightest on the
  largest heading).
- `Body1` = `font.size-sm` (0.875rem) at 1.429 line-height; `Body2` =
  same size at 1.5 line-height.
- `Caption` = `font.size-xs` at 1.429, muted via `color.text-muted`.
- `Overline` = `font.size-xs`, uppercase, `letterspacing.overline` (0.08em)
  tracking, `font.weight-medium`.
- All tiers set `font-family: var(--dx-font-sans)` — the type scale is
  font-face independent but the stack is theme-specific.
- Margin policy: every tier **owns its box** — `margin: 0`, so UA
  `h1`–`h6`/`p` margins never leak. Spacing around text is the parent's
  job (layout `gap` or `dx-m-*` utilities), never the text element's.
- htmx markup presets: `.dx-h1`…`.dx-h6` apply the standard heading ramp
  (h1/h2 = `font.display-5`/`display-6` bold, h3/h4 = `font.size-xl`/`size-lg`
  bold, h5/h6 = `font.size-md` medium) with `margin: 0`; `.dx-text-muted`
  applies `color.text-muted` standalone (composes with any element).

## Keyboard

Static text — no interactive behavior, focus, or activation semantics.

## Tests

| Scenario | Assertion |
|---|---|
| Default textStyle | `Body1` renders a `<p>` with the `body-1` class |
| Display textStyles | `DisplayN` renders `<hN>` with the `display-N` class |
| H1–H6 styles | each renders its own heading element |
| Subtitles | `Subtitle1`/`Subtitle2` render `<h6>` (Radzen parity) |
| Body2/Button/Caption/Overline | `Body2` renders `<p>`; the rest render `<span>` elements |
| `tagName` override | overrides the mapped element (Radzen TagName parity) |
| `textAlign` | applies the alignment as a composable class; none by default |
| `text` prop | takes precedence over children (Radzen parity) |
| `visible={false}` | renders nothing |
| Attributes spread | `id` / `aria-*` / `className` forwarded to the element |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).