---
name: ThemeToggle
status: implemented
category: utilities
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.text"
a11y:
  - "Icon-only toggle MUST carry an accessible name (aria-label, default \"Dark mode\"); the name follows the state (\"Light mode\" while dark)."
  - "Pressed state is exposed (aria-pressed) so AT tracks the active appearance."
  - "Appearance flips never move focus: the toggle keeps focus; the stylesheet fallback owns first paint, so there is no flash-of-wrong-theme on load."
---

# ThemeToggle

Appearance toggle: light / dark / system with persistence.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `light` \| `dark` \| `system` | — | Controlled appearance (omit for uncontrolled) |
| `defaultValue` | `ThemeName` | OS-following | Uncontrolled initial appearance |
| `storageKey` | `string` \| `null` | `dx-theme` | localStorage key for the explicit choice (`null` disables persistence) |
| `onChange` | `(theme) => void` | — | Fires with the resolved `light` / `dark` (never `system`) |
| `label` | `string` | `Dark mode` | Accessible name for the icon-only button |
| `size` | `ToggleButtonSize` | — | Forwarded to the underlying toggle button |

Uncontrolled mode owns `<html data-theme>`; controlled mode is pure
UI so the parent stays the single writer. The htmx reference is
`.dx-theme-toggle` on the same `dx-theme` key / `data-theme`
contract.

## Behavior

- Explicit choice precedence: controlled prop, persisted choice,
  initial default. Absent all three the OS is followed and nothing
  is written, so the stylesheet fallback stays in charge.
- Blocked storage (private mode, disabled cookies) never crashes
  render — persistence is best-effort.
- State icon (Radzen AppearanceToggle parity): moon while light, sun
  while dark — the glyph previews the mode a click applies.
- Ghost-button chrome (text-variant toggle): transparent, inherits
  text color, hover washes `color.text` at 8%.

## Keyboard

Native button semantics: Enter and Space activate; `:focus-visible`
ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Default render | toggle button with accessible name |
| Click in light | flips to dark, persists under `dx-theme` |
| Controlled `value` | follows the prop, writes nothing to the DOM |
| Blocked storage | renders and toggles without throwing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
