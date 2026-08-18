---
name: Alert
status: implemented
category: feedback
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "space.3"
  - "space.4"
  - "radius.md"
  - "color.border"
  - "font.size-sm"
  - "font.size-md"
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
a11y:
  - "Root carries role=\"alert\" so the message is announced on mount."
  - "Dismiss control is a native <button> with aria-label=\"Dismiss alert\" and a visible focus-visible ring (--se-color-focus outline) when keyboard-focused."
  - "Tone variants use a 12% tone tint — color-mix(in srgb, <tone> 12%, transparent), the same painted tint the text-{tone} tokens are derived against (scripts/derive-tone-tokens.mjs), matching the badge soft variant. The alert foreground (title + body) uses text-{tone} (>= 4.5:1 on the tint over both bg and surface per the derivation); the title is differentiated by size (size-md) and weight (bold) only, Radzen-style. Tone variants also paint the 1px border with the tone color."
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
| `title` | `ReactNode` | `undefined` | Bold title line |
| `icon` | `ReactNode` | `undefined` | Severity glyph rendered before the content (rendered `aria-hidden`; tone color inherited) |
| `children` | `ReactNode` | `undefined` | Body text |
| `dismissible` | `boolean` | `false` | Show a dismiss (×) button |
| `className` | `string` | `undefined` | Extra class on the root |

Not forwardRef'd; all remaining DOM props are not forwarded (the component
accepts only the props above).

## Behavior

- Renders `<div role="alert">` with tone class. Only `.icon`, `.title` and
  `.body` parts are emitted when the corresponding content is provided.
- Tones paint a 12% `color-mix` tint of the tone over `color.surface`; the
  alert foreground (title + body) uses the matching `text-{tone}` token.
  Title is `size-md` / `weight-bold`; body is `size-sm` regular weight — same
  color, differentiated by size and weight only (Radzen pattern). The border
  takes the tone color (`border-color: <tone>`) on tone variants.
- The severity icon (`se-alert-icon` / react `icon` prop, typically 18px,
  `stroke="currentColor"`) inherits the tone foreground; it is rendered
  `aria-hidden` because the `role="alert"` text carries the message.
- The alert carries `margin: 0 0 space.3` (theme spacing) so stacked alerts
  and surrounding content are separated; internal padding is `space.3` with
  `space.2` between icon/content.
- `dismissible` renders a 22×22px × button; clicking sets internal dismissed
  state and the whole alert returns `null`.
- Dismiss button hover: `surface-hover` background, `color.text` foreground.

## Keyboard

The alert itself is non-interactive. The dismiss button is a native button:
Enter and Space activate it; it receives the document focus order but has no
custom `:focus-visible` ring defined.

## Tests

| Scenario | Assertion |
|---|---|
| Renders title + body | `role="alert"` contains both texts |
| Tone prop | tone class (e.g. `danger`) present on the alert |
| Dismissible + click dismiss | alert is removed from the document |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).