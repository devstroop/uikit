---
name: Avatar
status: implemented
category: data-display
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "color.surface-hover"
  - "font.weight-bold"
  - "color.surface"
  - "color.success"
  - "color.text-muted"
  - "color.warning"
  - "color.palette-0"
  - "color.palette-1"
  - "color.palette-2"
  - "color.palette-3"
  - "color.palette-4"
  - "color.palette-5"
a11y:
  - "Root is a span with role=\"img\" and aria-label (alt ?? name ?? \"avatar\")."
  - "Initials and the status dot are aria-hidden=\"true\" (decorative)."
  - "Image fallback: `<img alt={alt ?? name ?? \"\"}>` for a real image."
  - "Initials text is color.surface on a deterministic tokenized palette (color.palette-0..5, per-mode values); surface-on-palette contrast >= 4.5:1 per schema contrastRules."
  - "Status dot contrast uses a color.surface border ring against the success / text-muted / warning fill."
---
# Avatar

A circular identity representation: image when `src` is given, otherwise
derived initials on a deterministic hash-based background color.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | `undefined` | Source for initials and fallback label |
| `src` | `string` | `undefined` | Image URL; renders `<img>` when set |
| `alt` | `string` | `undefined` | Overrides the aria-label and img alt |
| `size` | `sm` \| `md` \| `lg` | `md` | Diameter tier (28 / 36 / 48px) |
| `status` | `online` \| `offline` \| `away` | `undefined` | Presence dot |
| `className` | `string` | `undefined` | Extra class on the root |

## Behavior

- DOM: `<span role="img">` wrapping either an `<img>` or an `aria-hidden`
  initials span; the presence dot is an extra `aria-hidden` span when
  `status` is set.
- Initials: first letters of up to the first two whitespace-separated words,
  uppercased; no name → `?`.
- Background: deterministic hash of the name selects one of six per-mode
  palette tokens (`color.palette-0..5`, defined in `tokens.css` and derived
  by `scripts/derive-tone-tokens.mjs` so surface on the fill >= 4.55), applied
  via inline `style={{ background }}` in React and a `--palette-N` modifier
  class in htmx. Initials text is `color.surface`.
- Sizes are hardcoded px (sm 28, md 36, lg 48); the root also anchors a
  per-size `font-size` (sm 16, md 20, lg 26) so the initials (`0.72em`,
  ≈ 11.5 / 14.4 / 18.7px) scale with the avatar; the status dot scales per
  size (sm 10, md 12, lg 14) with a 2px `color.surface` ring positioned at
  the bottom-right.
- Status fill colors: online → success, offline → text-muted, away → warning.

## Keyboard

Non-interactive; no focus handling, no role beyond `img`.

## Tests

| Scenario | Assertion |
|---|---|
| Two-part name | `role="img"` has `aria-label="Jane Doe"`; text `JD` rendered |
| One-part name | single initial `A` rendered |
| `src` provided | `<img>` with matching `src` and `alt` |
| `status="online"` | root class contains `online` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).