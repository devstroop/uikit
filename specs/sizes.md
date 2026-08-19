---
name: sizes
status: standard
category: cross-cutting
frameworks:
  react: v0.3.6
  htmx: v0.1.7
---

# Size Tiers

A single, cross-component size scale. Every component that offers a `size`
prop uses exactly the same enum — never a component-specific subset:

```
ExtraSmall   xs
Small        sm
Medium       md   (default)
Large        lg
ExtraLarge   xl
```

In the react framework the enum is the shared `ComponentSize` type
(`lib/sizes.ts`); each component re-exports its own alias
(`ButtonSize = ComponentSize`, ...). The htmx framework mirrors the tiers as
`--xs --sm --md --lg --xl` modifier classes on every sizeable component.

## Token mapping

Sizes are theme-derived, never hardcoded in components:

| Dimension | Token per tier | CSS variable |
|---|---|---|
| Control height (button, input, select, avatar diameter, circular progress diameter) | `control.height-{tier}` | `--dt-control-height-{tier}` |
| Icon pixels | `font.size-{tier}` | `--dt-font-size-{tier}` |

Labels use the **tier−1 pairing**: a `md` control renders 14px (`font.size-sm`)
text, `lg` 16px (`font.size-md`), `xl` 18px (`font.size-lg`); `xs`/`sm` both use
`font.size-xs`. This keeps controls compact (see textarea for the one exception
that drives font-size from the tier directly). Avatar initials use a fixed px
scale (10/12/15/18/22), not font tokens.

`--dt-control-height` remains the legacy alias for the `md` tier — consumers
that override it (app token bridges) keep controlling the default size.

### Tier values (default theme, 36px base)

| Tier | control.height | font.size |
|---|---|---|
| `xs` | 20px | 12px |
| `sm` | 28px | 14px |
| `md` | 36px | 16px |
| `lg` | 44px | 18px |
| `xl` | 52px | 22px |

Heights are offsets of ±8px/±16px from each theme's base `control.height`,
so every theme keeps its own density (fluent/github base 32px → 16/24/32/40/48;
material-3 base 40px → 24/32/40/48/56). `font.size-xl` = `font.size-lg` + 4px
per theme (22px default, 24px fluent/github, 26px material-3).

## Per-component application

| Component | `size` shape | What the tier drives |
|---|---|---|
| Button | `ComponentSize` | height, font-size, horizontal padding; icon-only width = height |
| Input / Select | `ComponentSize` | height, font-size, padding |
| Textarea | `ComponentSize` | min-height, font-size (content grows past the min) |
| Badge | `ComponentSize` | font-size, padding, radius |
| Avatar | `ComponentSize` | diameter = control height, initials font |
| Icon | `number \| ComponentSize` | px = font-size tier value; numbers keep pixel-perfect control |
| Progress | `number \| ComponentSize` | circular: diameter = control height, normalized 24-unit viewBox (stroke 2/24, stays proportional at any diameter); linear: track thickness |

### Icons: variants, not font inheritance

Icons do **not** inherit the surrounding font-size. They take the same
`xs..xl` variants with explicit pixel values sourced from the font-size
tokens — so an `md` icon always renders 16px (default theme) regardless of
the text around it, and pairs optically with `md` text. Numeric sizes stay
available for pixel-perfect geometry (chart legends, inline glyphs).
