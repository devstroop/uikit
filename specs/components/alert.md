---
name: Alert
status: implemented
category: feedback
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "space.1"
  - "space.2"
  - "space.3"
  - "space.4"
  - "radius.sm"
  - "radius.md"
  - "radius.lg"
  - "color.border"
  - "font.size-xs"
  - "font.size-sm"
  - "font.size-md"
  - "font.size-lg"
  - "color.primary"
  - "color.success"
  - "color.warning"
  - "color.danger"
  - "color.focus"
  - "font.weight-bold"
  - "space.1"
  - "space.2"
  - "color.text-muted"
  - "transition.fast"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-primary"
  - "color.text-success"
  - "color.text-warning"
  - "color.text-danger"
  - "color.primary-fg"
  - "color.danger-fg"
a11y:
  - "Root carries role=\"alert\" so the message is announced on mount."
  - "Dismiss control is a native <button> with aria-label=\"Dismiss alert\" and a visible focus-visible ring (--se-color-focus outline) when keyboard-focused."
  - "The soft variant paints a 12% tone tint — color-mix(in srgb, <tone> 12%, transparent), the same painted tint the text-{tone} tokens are derived against (scripts/derive-tone-tokens.mjs), matching the badge soft variant. The alert foreground (title + body) uses text-{tone} (>= 4.5:1 on the tint over both bg and surface per the derivation); the title is differentiated by size (size-md) and weight (bold) only, Radzen-style. Tone variants also paint the 1px border with the tone color."
  - "Variant paint rules (Badge parity): outline = transparent fill, tone border, text-{tone} foreground; solid = tone fill with `--se-color-primary-fg` (info) / `--se-color-danger-fg` (danger) / `--se-color-surface` (success, warning) foreground, all >= 4.5:1 on the tone fill."
  - "Tone distinction is carried by the tinted background, the tone-colored text, and the severity icon — three redundant cues, so tone is not conveyed by color alone for color-vision-impaired users (the icon glyph differs per tone)."
  - "Dismissing removes the element from the DOM entirely (no stale region)."
---
# Alert

A transient message banner for status, warning, or error information, with an
optional dismiss action.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `info` \| `success` \| `warning` \| `danger` | `info` | Status tone |
| `variant` | `soft` \| `outline` \| `solid` | `soft` | Paint variant (Badge parity; Radzen `Variant` parity) |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Density tier (shared `ComponentSize` scale; Radzen `AlertStyle.Size` parity) — scales padding, title/body type, corner radius, and dismiss hitbox |
| `title` | `ReactNode` | `undefined` | Bold title line |
| `icon` | `ReactNode` | `undefined` | Severity glyph rendered before the content (rendered `aria-hidden`; tone color inherited) |
| `children` | `ReactNode` | `undefined` | Body text |
| `dismissible` | `boolean` | `false` | Show a dismiss (×) button |
| `onDismiss` | `() => void` | `undefined` | Called after the alert is dismissed (Radzen `Close` event parity) |
| `className` | `string` | `undefined` | Extra class on the root |

Not forwardRef'd; all remaining DOM props are not forwarded (the component
accepts only the props above).

## Behavior

- Renders `<div role="alert">` with tone and variant classes. Only `.icon`,
  `.title` and `.body` parts are emitted when the corresponding content is
  provided.
- Tones paint a 12% `color-mix` tint of the tone over `color.surface`; the
  alert foreground (title + body) uses the matching `text-{tone}` token.
  Title is `size-md` / `weight-bold`; body is `size-sm` regular weight — same
  color, differentiated by size and weight only (Radzen pattern). The border
  takes the tone color (`border-color: <tone>`) on tone variants.
- `variant` paint (same language as Badge):
  - `soft` (default) — 12% tint fill, tone border, `text-{tone}` foreground.
  - `outline` — transparent fill, tone border, `text-{tone}` foreground.
  - `solid` — tone fill; foreground `--se-color-primary-fg` (info),
    `--se-color-danger-fg` (danger), `--se-color-surface` (success, warning).
    The dismiss button dims to 75% `currentColor` and hovers to full.
- The severity icon (`se-alert-icon` / react `icon` prop, typically 18px,
  `stroke="currentColor"`) inherits the tone foreground; it is rendered
  `aria-hidden` because the `role="alert"` text carries the message.
- The alert carries `margin: 0 0 space.3` (theme spacing) so stacked alerts
  and surrounding content are separated; internal padding is `space.3` with
  `space.2` between icon/content.
- `size` scales the whole banner through root-level custom properties
  (`--alert-pad`, `--alert-gap`, `--alert-radius`, `--alert-title-size`,
  `--alert-body-size`, `--alert-dismiss-size`, `--alert-dismiss-font`):
  `xs`/`sm` use `space.2` padding + `radius.sm`; `md` is the default
  (`space.3` + `radius.md`); `lg`/`xl` use `space.4` + `radius.lg`. Title
  type runs `size-sm` (xs/sm) → `size-md` (md) → `size-lg` (lg/xl); body
  runs `size-xs` (xs/sm) → `size-sm` (md/lg) → `size-md` (xl). The dismiss
  hitbox scales 18/20/22/26/30px per tier.
- `dismissible` renders a 22×22px × button; clicking sets internal dismissed
  state, calls `onDismiss` (if given), and the whole alert returns `null`.
- Dismiss button hover: `surface-hover` background, `color.text` foreground.
- htmx: the dismiss button carries `data-se-dismiss`; behaviors.js removes
  the alert on activation. Server-side follow-up (Radzen `Close` parity) is
  achieved by adding hx-* attributes to the dismiss button.

## Keyboard

The alert itself is non-interactive. The dismiss button is a native button:
Enter and Space activate it; it receives the document focus order and shows
a `--se-color-focus` outline on `:focus-visible`.

## Tests

| Scenario | Assertion |
|---|---|
| Renders title + body | `role="alert"` contains both texts |
| Tone prop | tone class (e.g. `danger`) present on the alert |
| Variant prop | variant class (e.g. `solid`) present on the alert |
| Size prop | size class (e.g. `lg`) present on the alert |
| Dismissible + click dismiss | alert is removed from the document |
| `onDismiss` callback | called once when the alert is dismissed |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).