---
name: Textarea
status: implemented
frameworks:
  react: v0.2.0
tokens:
  - "color.surface"
  - "color.border-strong"
  - "radius.md"
  - "color.text"
  - "font.sans"
  - "font.size-sm"
  - "space.2"
  - "space.3"
  - "transition.fast"
  - "color.text-muted"
  - "color.primary"
  - "color.focus"
a11y:
  - "Renders a native <textarea>; all textarea attributes (`aria-label`, `aria-describedby`, `required`, `disabled`, ...) are forwarded."
  - "Focus indicator on `:focus`: `primary` border plus 3px `focus` box-shadow ring."
  - "Placeholder text rendered in `text-muted` (never a substitute for a label; no auto-labeling)."
  - "Text-on-fill contrast >= 4.5:1 (text on surface; text-muted on surface for placeholder)."
---

# Textarea

Multiline text input with size and resize control, used for long-form entry in forms.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Height tier (min-height 56 / 84 / 128px) |
| `resize` | `"none" \| "vertical" \| "horizontal" \| "both"` | `"none"` | CSS `resize` behavior |

The component extends `TextareaHTMLAttributes<HTMLTextAreaElement>`; all remaining props are forwarded to the native element. It is `forwardRef`d.

## Behavior

- DOM is a single `<textarea>` with `width: 100%`, `surface` background, `border-strong` border, `radius.md`, `sm` text.
- Size classes set `min-height` only; the element grows with content up to the given minimum.
- Resize classes map 1:1 to the CSS `resize` property (`resize-none` is the default).
- Focus: `outline: none`, border flips to `primary`, and a 3px `focus`-colored box-shadow ring is applied on `:focus` (any focus, not keyboard-only).
- Placeholder uses `text-muted`; padding is `space.2` vertical / `space.3` horizontal.

## Keyboard

Native textarea semantics: full text editing, Tab/Shift+Tab navigation, and form association as provided by the host form.

## Tests

| Scenario | Assertion |
|---|---|
| Renders a textarea and forwards value/onChange | Element found by label has the given value |
| Defaults to md size with no resize | Class list contains `md` and `resize-none` |
| Applies size and resize classes | Class list contains `lg` and `resize-vertical` |
| Forwards className passthrough | Class list contains the custom class |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).