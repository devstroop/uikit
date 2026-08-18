---
name: Alert
status: implemented
frameworks:
  react: v0.3.0
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
  - "radius.sm"
  - "transition.fast"
  - "color.surface-hover"
  - "color.text"
a11y:
  - "Root carries role=\"alert\" so the message is announced on mount."
  - "Dismiss control is a native <button> with aria-label=\"Dismiss alert\" and a visible focus-visible ring (--se-color-focus outline) when keyboard-focused."
  - "Tone backgrounds are 8% color-mix tints of the tone color over transparent; text contrast holds via color.text / color.text-muted on page background (bg) at >= 4.5:1 per schema contrastRules."
  - "Left accent border (3px) plus tint distinguishes tones beyond color alone for color-vision-impaired users."
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
- Tones set `border-left-color` and an 8% `color-mix` tinted background per
  tone (info → primary, success, warning, danger).
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