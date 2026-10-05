---
name: Link
status: implemented
category: navigation
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.focus"
  - "color.primary"
  - "color.primary-hover"
  - "space.1"
a11y:
  - "With href renders a real anchor (native link semantics, context-menu, open-in-new-tab)."
  - "Without href renders a button with link styling — action semantics stay honest, never a fake link."
  - "Focus visible ring via color.focus (keyboard-only, :focus-visible)."
  - "Disabled links are truly inert (native disabled on the button form); aria-disabled mirrors the state."
---

# Link

Text link in the primary role color, as an anchor or a button.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Destination URL. Present → renders an anchor; absent → renders a `<button type="button">` |
| `icon` | `IconName` | — | Leading icon glyph |
| `visible` | `boolean` | `true` | Render nothing when false |

All remaining props forward to the rendered element. The htmx
reference is `.dx-link` on either element. There is deliberately no
router coupling: active-route matching stays app-side, and SPA
interception (e.g. plain-left-click takeover) stays app-side too.

## Behavior

- Primary-role text color (`color.primary`), hover darkens to
  `color.primary-hover` with underline (2px offset).
- Icon + text gap is `space.1`; icons never shrink.
- Button form exists for actions that must read as links
  (disclosures like "Forgot password?") while keeping button
  keyboard behavior.
- Disabled: reduced opacity, `not-allowed` cursor, no underline,
  no activation.

## Keyboard

Native element semantics: anchors Tab-focusable with Enter
activation; the button form activates on Enter and Space;
`:focus-visible` ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| With `href` | renders an anchor with the href |
| Without `href` | renders `button type="button"` |
| Icon | icon + text gap applied |
| Disabled + click | click handler not invoked |
| `visible={false}` | renders nothing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
