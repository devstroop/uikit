---
name: Alert
status: implemented
frameworks:
  react: v0.3.0
  htmx: v0.1.0
tokens:
  - "space.3"
  - "space.4"
  - "radius.md"
  - "color.border"
  - "font.size-sm"
  - "color.primary"
  - "color.success"
  - "color.warning"
  - "color.danger"
  - "color.focus"
  - "font.weight-bold"
  - "space.1"
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
  - "Tone variants use a full 1px tone-colored border (all sides) on a 12% tone tint — color-mix(in srgb, <tone> 12%, transparent), the same painted tint the text-{tone} tokens are derived against (scripts/derive-tone-tokens.mjs), matching the badge soft variant. The alert foreground takes the tone: title/content use text-{tone} (>= 4.5:1 on the tint over both bg and surface per the derivation), body copy stays text-muted."
  - "Tone distinction is carried by the full border color and the tinted background; with the border plus the alert title/icon, tone is not conveyed by color alone for color-vision-impaired users (icon/emoji still optional; border is structural)."
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
| `children` | `ReactNode` | `undefined` | Body text |
| `dismissible` | `boolean` | `false` | Show a dismiss (×) button |
| `className` | `string` | `undefined` | Extra class on the root |

Not forwardRef'd; all remaining DOM props are not forwarded (the component
accepts only the props above).

## Behavior

- Renders `<div role="alert">` with tone class. Only `.title` and `.body`
  wrappers are emitted when the corresponding content is provided.
- Tones set a full 1px `border-color` per tone (info → primary, success,
  warning, danger) on a `color.surface` background — fully tokenized, no
  `color-mix` tint, no left accent bar.
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