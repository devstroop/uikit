# Token Specification

Canonical design-token model for every devstroop/uikit theme. All components in
every framework consume tokens exclusively — no hardcoded colors, radii,
spacing, or shadows. This document is the human contract; the machine-enforced
vocabulary lives in [`tokens.schema.json`](./tokens.schema.json).

## Model

A **theme** is a `tokens.json` file under `themes/<name>/`. It defines values
for every token in the schema. Tokens are grouped into **tiers**; the tier and
token name combine into the CSS custom property: `--dt-<tier>-<token>`
(e.g. tier `color` + token `bg` → `--dt-color-bg`).

### Value forms

| Form | Meaning | Example |
|---|---|---|
| `"value"` | Theme-invariant — emitted once under `:root` | `"md": "8px"` |
| `{ "light": v, "dark": v }` | Mode-dependent — `light` under `:root`, `dark` under `[data-theme="dark"]` | `"bg": { "light": "#f8fafc", "dark": "#0f172a" }` |

A token without a `dark` variant (plain string) is inherited from `:root`
in dark mode — use this when a value is genuinely mode-agnostic (e.g. a color
that works on both surfaces), not as an omission.

## Tiers

| Tier | Tokens | Kind | Semantics |
|---|---|---|---|
| `color` | `bg`, `surface`, `surface-hover`, `border`, `border-strong`, `text`, `text-muted`, `primary`, `primary-hover`, `primary-fg`, `secondary`, `secondary-hover`, `secondary-fg`, `danger`, `danger-hover`, `danger-fg`, `success`, `success-hover`, `success-fg`, `info`, `info-hover`, `info-fg`, `warning`, `border-{primary,secondary,info,success,warning,danger}({-light,-darker})`, `outline-{primary,secondary,info,success,warning,danger}({-light,-darker})`, `text-primary`, `text-success`, `text-warning`, `text-danger`, `palette-0`…`palette-5`, `focus`, `backdrop` | color | Semantic color roles. `bg` = page canvas, `surface` = elevated containers, `*-fg` = foreground on the paired fill, `border-*`/`outline-*` = per-tone line/focus-ring families (Radzen parity), `focus` = neutral focus-visible ring (may be translucent), `backdrop` = overlay scrim |
| `radius` | `sm`, `md`, `lg`, `full` | length | Corner radii, `full` = pill/circle |
| `space` | `0`, `05`, `1`…`12` | length | Spacing scale (gaps, paddings, margins). Radzen parity: `0` = 0px, `05` = 2px, then `1`…`12` in 4px steps (4px … 48px). Exposed to markup through the `.dt-m-*`/`.dt-p-*` utilities and consumed by component gaps/paddings |
| `font` | `sans`, `size-xs`…`size-xl`, `display-1`…`display-6`, `weight-regular`…`weight-bold` | font | Family stack, type scale (fixed sizes + fluid display clamp scale), weights |
| `letterspacing` | `display-1`…`display-6`, `overline` | length | Letter-spacing in `em`; negative values tighten the display headings, `overline` widens the overline |
| `shadow` | `sm`, `md`, `lg` | shadow | Elevation — dark variants expected for depth visibility |
| `transition` | `fast`, `base`, `slow` | duration | Motion durations |
| `ease` | `out` | easing | Standard easing curve |
| `z` | `tooltip`, `popover`, `modal`, `toast` | integer | Layer order (ascending; `toast` highest) |
| `control` | `height` | length | Default control height |

## Dark mode

The dark scheme is activated by `[data-theme="dark"]` on any ancestor (typically
the `<html>` element). Only tokens that declare a `dark` value are re-emitted
there; everything else inherits from `:root`. Theme authors must give `dark`
values to every color that changes meaning in dark mode (see `default` theme
for the reference set: all surface/line/text roles, brand colors, shadows,
`focus`, `backdrop`).

## Contrast policy (WCAG 2.1 AA)

The validator enforces minimum contrast between text-on-background pairs.
Rules are declared in the schema (`contrastRules`): foreground token vs.
background token, both in the same mode. Default rules:

| Foreground | Background | Minimum ratio |
|---|---|---|
| `text` | `bg` | 4.5 |
| `text-muted` | `bg` | 4.5 |
| `text` | `surface` | 4.5 |
| `primary-fg` | `primary` | 4.5 |
| `danger-fg` | `danger` | 4.5 |

Derived tokens carry their own contracts (see
`scripts/derive-tone-tokens.mjs`):

- `text-{primary,success,warning,danger}` walk the tone's lightness until
  >= 4.55 on the 12% color-mix tint painted over **both** `bg` and `surface`
  (soft badges and tinted alerts can sit on either container).
- `border-strong` walks its lightness until >= 3.1 on both `bg` and `surface`
  — WCAG 2.1 non-text contrast for interactive control boundaries (inputs,
  selects, textareas, secondary buttons, checkboxes, outline badges). The
  `border` token stays decorative (container separators only).
- `border-*` and `outline-*` per-tone families (Radzen `--rz-border-*` /
  `--rz-outline-*` parity): the base token is the tone color itself, held
  at >= 3.1 against **both** `bg` and `surface`; `-light` is a 30% tint
  toward `bg` and `-darker` a 35% shade toward black, each walked (lightness
  up then down) until the 3.1 non-text threshold holds in the current mode.
  Every member of both families is a schema `contrastRules` pair (>= 3.0)
  and is re-checked by `scripts/audit-colors.mjs` wherever components use
  it. Tone-specific focus-visible rings (`outline-primary`,
  `outline-danger`, …) replace the neutral `focus` token on tonal controls.
- `secondary` (Radzen's second brand color) is derived per theme: its fill
  is walked so `secondary-fg` (white in light mode, light in dark mode)
  clears 4.5, and `secondary-hover` walks one step further.

Only opaque colors are checked; translucent values (`focus`, `backdrop`,
alpha-bearing colors) are skipped.

## Typography scale

Component text draws from the `font.size-*` and `font.display-*` tokens.
Every text role maps to exactly one tier, so sizes stay consistent across
components (learned from Radzen's single `TextStyle` scale — components never
pick sizes ad hoc):

| Tier | Token | Value | Roles |
|---|---|---|---|
| `heading-lg` | `size-lg` | 18px | Overlay titles: dialog, stat value |
| `heading-md` | `size-md` | 16px | Block titles: card header, empty-state title; default buttons, icon glyphs (md) |
| `heading-sm` | `size-sm` | 14px | Section labels: accordion header, tabs; form labels, control text, body copy (alert, card body, table cells, dialog content), toast title |
| `caption` | `size-xs` | 12px | Meta: badge, stat label/delta/hint, table headers, field hints/errors, tooltip, toast description, xs/sm buttons |
| relative | — | `0.72em` | Avatar initials (scales with the avatar size) |

### Display scale (`font.display-*`)

The display headings are fluid: each value is a `clamp(min, vw + offset, max)`
expression that scales with the viewport (`--dt-font-display-1` ~ 3rem down to
`--dt-font-display-6` ~ 1.125rem). Same values in every theme — the type scale
is font-face independent; only `font.sans` changes per theme. The largest
headings carry negative tracking via the `letterspacing.display-*` tokens
(`-0.04em` on `display-1` tapering to `-0.01em` on `display-6`), and `overline`
uses the positive `letterspacing.overline` (`0.08em`).

| Heading | `font.display-*` | `letterspacing.display-*` |
|---|---|---|
| `display-1` (`h1`) | `clamp(2.5rem, 4vw + 1rem, 3rem)` | `-0.04em` |
| `display-2` (`h2`) | `clamp(2.25rem, 3.75vw + 0.9rem, 2.75rem)` | `-0.035em` |
| `display-3` (`h3`) | `clamp(2rem, 3.5vw + 0.8rem, 2.5rem)` | `-0.03em` |
| `display-4` (`h4`) | `clamp(1.75rem, 3vw + 0.7rem, 2.25rem)` | `-0.02em` |
| `display-5` (`h5`) | `clamp(1.5rem, 2.5vw + 0.625rem, 2rem)` | `-0.015em` |
| `display-6` (`h6`) | `clamp(1.125rem, 1.5vw + 0.75rem, 1.5rem)` | `-0.01em` |

Two rules keep the scale honest:

- **No raw pixel sizes in component CSS.** Every `font-size` must be a token;
  icon glyphs in dismiss buttons use the matching token
  (`size-md` in alert/toast, `size-lg` in dialog).
- **Body copy never inherits the page size.** Containers that carry prose
  (card body, dialog content, table cells, tabs panels) set `size-sm`
  explicitly.

## Authoring a theme

1. Copy `themes/default/tokens.json` to `themes/<name>/tokens.json`.
2. Adjust values; keep every token present (the schema is the complete list).
3. Run `node scripts/validate-theme.mjs` — must pass before CI.
4. Run `node scripts/generate-css.mjs themes/<name>` — emits `tokens.css`
   and syncs it into every framework that consumes it.

No hardcoded values in framework code: if a component needs a value that is not
expressible with this vocabulary, extend the schema first (all tiers are
opt-in per theme, but the token list is the full vocabulary).