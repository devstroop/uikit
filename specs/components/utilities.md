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
a11y:
  - "Utility classes are presentational only — they never change semantics, focus order, or keyboard behavior."
  - "Visually-hidden content must pair a utility (e.g. dt-display-none is not for a11y-only text); use dt-sr-only semantics in the component or markup instead."
---

# Utilities

Radzen theme utilities parity: layout helper classes applied through the
`class` attribute — flex/grid display, justify-content, align-items,
overflow, width/height helpers, and the full spacing scale (margins +
padding), all with breakpoint suffixes.

## Class surface

| Family | Classes | Values |
|---|---|---|
| Display | `.dt-display-{value}` | `none`, `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid` |
| Justify-content | `.dt-justify-content-{value}` | `normal`, `stretch`, `center`, `start`, `end`, `flex-start`, `flex-end`, `left`, `right`, `space-between`, `space-around`, `space-evenly` |
| Align-items | `.dt-align-items-{value}` | `normal`, `stretch`, `center`, `start`, `end`, `flex-start`, `flex-end` |
| Overflow | `.dt-overflow-{value}` | `auto`, `scroll`, `visible`, `hidden` |
| Width | `.dt-w-{pct}` | `25`, `50`, `75`, `100` (%) |
| Width viewport | `.dt-vw-{pct}` | `25`, `50`, `75`, `100` (vw) |
| Width keywords | `.dt-w-{keyword}` | `auto`, `fit-content`, `min-content`, `max-content`, `stretch` |
| Min/max width | `.dt-min-w-{pct}` / `.dt-max-w-{pct}` | `25`, `50`, `75`, `100` (%) |
| Height | `.dt-h-{pct}` | `25`, `50`, `75`, `100` (%) |
| Height viewport | `.dt-vh-{pct}` | `25`, `50`, `75`, `100` (vh) |
| Height keyword | `.dt-h-auto` | `auto` |
| Min/max height | `.dt-min-h-{pct}` / `.dt-max-h-{pct}` | `25`, `50`, `75`, `100` (%) |
| Margin | `.dt-m-{size}` | `0`, `05`, `1`–`12` (`var(--dt-space-{size})`) |
| Margin axis | `.dt-mx-{size}` / `.dt-my-{size}` | inline / block axes, sizes as margin |
| Margin side | `.dt-mt-{size}` / `.dt-mr-{size}` / `.dt-mb-{size}` / `.dt-ml-{size}` / `.dt-ms-{size}` / `.dt-me-{size}` | sizes as margin |
| Margin auto | `.dt-m-auto`, `.dt-mx-auto`, `.dt-my-auto`, `.dt-mt-auto`, `.dt-mr-auto`, `.dt-mb-auto`, `.dt-ml-auto`, `.dt-ms-auto`, `.dt-me-auto` | `auto` |
| Padding | `.dt-p-{size}` | `0`, `05`, `1`–`12` (`var(--dt-space-{size})`) |
| Padding axis | `.dt-px-{size}` / `.dt-py-{size}` | inline / block axes, sizes as padding |
| Padding side | `.dt-pt-{size}` / `.dt-pr-{size}` / `.dt-pb-{size}` / `.dt-pl-{size}` / `.dt-ps-{size}` / `.dt-pe-{size}` | sizes as padding |

The spacing sizes mirror Radzen's `$rz-*` scale: `0` = 0px, `05` = 2px,
then `1`–`12` in 4px steps (4px … 48px) — the uikit space tier
(`space.0` … `space.12`).

Every family also ships breakpoint variants with Radzen's breakpoint map
inserted before the value: `.dt-{family}-{bp}-{value}`, e.g.
`.dt-display-md-flex`, `.dt-w-lg-50`, `.dt-justify-content-xl-space-between`.

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
- Spacing utilities resolve `var(--dt-space-{size})` — the scale is defined
  once in the space tier and shared by every theme; margins additionally
  ship `auto` (axis/side/`m`-only, Radzen parity — padding has no `auto`).
- Purely presentational — no JS, no `data-*` hooks, no state.
- Radzen does NOT ship flex-direction/wrap/gap/container/gutter or a
  `rz-g` grid utility; direction/wrap/gap live on `dt-row`, `dt-column`,
  and `dt-stack` component modifiers instead, and containers are the
  `dt-layout` shell.
- react ships the class list as `lib/utilities.css` (bundled into the
  package entry); the parity suite asserts the react surface is identical
  to the htmx stylesheet.

## Keyboard

Not focusable or interactive.

## Accessibility

Presentational only — utilities must not be used to hide content from
assistive technology. For visually-hidden-but-readable content, use a
component or markup that ships `dt-sr-only` semantics.

## Tests

| Suite | File | Status |
|---|---|---|
| react | `lib/components/Utilities/Utilities.test.tsx` (class-surface parity vs htmx, breakpoint map, spacing scale) | passing |
| htmx | reference markup only (presentational) | passing |