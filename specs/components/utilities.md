---
name: Utilities
status: implemented
category: utilities
frameworks:
  react: v0.19.0
  htmx: v0.17.0
tokens:
  - "space.0"
  - "space.05"
  - "space.1"
  - "space.2"
  - "space.3"
  - "space.4"
  - "space.5"
  - "space.6"
  - "space.7"
  - "space.8"
  - "space.9"
  - "space.10"
  - "space.11"
  - "space.12"
  - "radius.full"
  - "color.text"
  - "color.text-muted"
  - "color.text-primary"
  - "color.text-success"
  - "color.text-warning"
  - "color.text-danger"
  - "color.text-info"
  - "color.border-primary"
  - "color.border-primary-light"
  - "color.border-primary-darker"
  - "color.border-secondary"
  - "color.border-secondary-light"
  - "color.border-secondary-darker"
  - "color.border-info"
  - "color.border-info-light"
  - "color.border-info-darker"
  - "color.border-success"
  - "color.border-success-light"
  - "color.border-success-darker"
  - "color.border-warning"
  - "color.border-warning-light"
  - "color.border-warning-darker"
  - "color.border-danger"
  - "color.border-danger-light"
  - "color.border-danger-darker"
a11y:
  - "Utility classes are presentational only — they never change semantics, focus order, or keyboard behavior."
  - "Visually-hidden content must pair a utility (e.g. dx-display-none is not for a11y-only text); use dx-sr-only semantics in the component or markup instead."
---

# Utilities

Radzen theme utilities parity: layout helper classes applied through the
`class` attribute — flex/grid display, justify-content, align-items,
overflow, width/height helpers, and the full spacing scale (margins +
padding), all with breakpoint suffixes.

## Class surface

| Family | Classes | Values |
|---|---|---|
| Display | `.dx-display-{value}` | `none`, `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid` |
| Justify-content | `.dx-justify-content-{value}` | `normal`, `stretch`, `center`, `start`, `end`, `flex-start`, `flex-end`, `left`, `right`, `space-between`, `space-around`, `space-evenly` |
| Align-items | `.dx-align-items-{value}` | `normal`, `stretch`, `center`, `start`, `end`, `flex-start`, `flex-end` |
| Overflow | `.dx-overflow-{value}` | `auto`, `scroll`, `visible`, `hidden` |
| Width | `.dx-w-{pct}` | `25`, `50`, `75`, `100` (%) |
| Width viewport | `.dx-vw-{pct}` | `25`, `50`, `75`, `100` (vw) |
| Width keywords | `.dx-w-{keyword}` | `auto`, `fit-content`, `min-content`, `max-content`, `stretch` |
| Min/max width | `.dx-min-w-{pct}` / `.dx-max-w-{pct}` | `25`, `50`, `75`, `100` (%) |
| Height | `.dx-h-{pct}` | `25`, `50`, `75`, `100` (%) |
| Height viewport | `.dx-vh-{pct}` | `25`, `50`, `75`, `100` (vh) |
| Height keyword | `.dx-h-auto` | `auto` |
| Min/max height | `.dx-min-h-{pct}` / `.dx-max-h-{pct}` | `25`, `50`, `75`, `100` (%) |
| Margin | `.dx-m-{size}` | `0`, `05`, `1`–`12` (`var(--dx-space-{size})`) |
| Margin axis | `.dx-mx-{size}` / `.dx-my-{size}` | inline / block axes, sizes as margin |
| Margin side | `.dx-mt-{size}` / `.dx-mr-{size}` / `.dx-mb-{size}` / `.dx-ml-{size}` / `.dx-ms-{size}` / `.dx-me-{size}` | sizes as margin |
| Margin auto | `.dx-m-auto`, `.dx-mx-auto`, `.dx-my-auto`, `.dx-mt-auto`, `.dx-mr-auto`, `.dx-mb-auto`, `.dx-ml-auto`, `.dx-ms-auto`, `.dx-me-auto` | `auto` |
| Padding | `.dx-p-{size}` | `0`, `05`, `1`–`12` (`var(--dx-space-{size})`) |
| Padding axis | `.dx-px-{size}` / `.dx-py-{size}` | inline / block axes, sizes as padding |
| Padding side | `.dx-pt-{size}` / `.dx-pr-{size}` / `.dx-pb-{size}` / `.dx-pl-{size}` / `.dx-ps-{size}` / `.dx-pe-{size}` | sizes as padding |

The spacing sizes mirror Radzen's `$rz-*` scale: `0` = 0px, `05` = 2px,
then `1`–`12` in 4px steps (4px … 48px) — the uikit space tier
(`space.0` … `space.12`).

Every family also ships breakpoint variants with Radzen's breakpoint map
inserted before the value: `.dx-{family}-{bp}-{value}`, e.g.
`.dx-display-md-flex`, `.dx-w-lg-50`, `.dx-justify-content-xl-space-between`.

## Breakpoints

Radzen parity (theme `$rz-breakpoints-map`):

| Suffix | Min-width |
|---|---|
| `xs` | 576px |
| `sm` | 768px |
| `md` | 1024px |
| `lg` | 1280px |
| `xl` | 1920px |
| `xx` | 2560px |

> Note: these are the Radzen utility breakpoints. The Row/Column/Stack
> component tiers use the grid breakpoints (sm 576 … xxl 2560) — the two
> scales coexist deliberately (Radzen has the same split).

## Behavior

- All rules use `!important` (Radzen parity) so utilities always win over
  component styles.
- Spacing utilities resolve `var(--dx-space-{size})` — the scale is defined
  once in the space tier and shared by every theme; margins additionally
  ship `auto` (axis/side/`m`-only, Radzen parity — padding has no `auto`).
- Purely presentational — no JS, no `data-*` hooks, no state.
- Radzen does NOT ship flex-direction/wrap/gap/container/gutter or a
  `rz-g` grid utility; direction/wrap/gap live on `dx-row`, `dx-column`,
  and `dx-stack` component modifiers instead, and containers are the
  `dx-layout` shell.
- react ships the class list as `lib/utilities.css` (bundled into the
  package entry); the parity suite asserts the react surface is identical
  to the htmx stylesheet.

## Keyboard

Not focusable or interactive.

## Accessibility

Presentational only — utilities must not be used to hide content from
assistive technology. For visually-hidden-but-readable content, use a
component or markup that ships `dx-sr-only` semantics.

## Tests

| Suite | File | Status |
|---|---|---|
| react | `lib/components/Utilities/Utilities.test.tsx` (class-surface parity vs htmx, breakpoint map, spacing scale) | passing |
| htmx | reference markup only (presentational) | passing |