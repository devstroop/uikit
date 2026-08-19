---
name: ThemeSwitcher
status: implemented
category: utilities
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "space.2"
  - "font.size-sm"
  - "color.text"
a11y:
  - "Flipping the appearance must not lose focus: the trigger is a native control and stays focused after the theme change."
  - "The control reflects the current appearance (switch checked = dark) so the state is perceivable without color."
  - "Theme changes are announced through the control's native semantics (checkbox/switch); no aria-live region is required."
---

# ThemeSwitcher

Light/dark appearance toggle that flips the `data-theme` attribute on
`<html>` — Radzen `RadzenAppearanceToggle` parity (paired with
`RadzenTheme`'s preset switch; here the preset system is the themes
folder + `data-theme="dark"`).

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `defaultTheme` | `"light"` \| `"dark"` | `"light"` | Initial appearance; uncontrolled |
| `onChange` | `(theme: "light" \| "dark") => void` | `undefined` | Called after the attribute flips |
| `label` | `ReactNode` | `"Dark mode"` | Accessible label for the switch |
| `className` | `string` | `undefined` | Extra class on the wrapper |

## Behavior

- React: renders a wrapper with a labelled native checkbox styled as a
  switch (reuses the Switch control surface); checking it sets
  `document.documentElement.dataset.theme = "dark"`, unchecking sets
  `"light"`. Reads the current theme once on mount to initialize the
  checked state (when the consumer already applied a theme).
- The component owns no tokens and no visual chrome beyond the switch —
  it is a behavior with a minimal shell; consumers place it in headers,
  toolbars, or shell chrome.
- htmx: `<input type="checkbox" data-dt-theme-switch>` — the behavior
  mirrors `data-theme` on `<html>` on `change`; the initial checked state
  is read from the attribute at load.
- No persistence (localStorage) by default — the consumer owns storage.

## Keyboard

Native checkbox semantics: Space toggles, focus ring via the switch.

## Tests

| Scenario | Assertion |
|---|---|
| Default light | `<html>` has `data-theme="light"`; checkbox unchecked |
| Toggle on | checking the box sets `data-theme="dark"` |
| Toggle off | unchecking sets `data-theme="light"` |
| Initial dark | with `data-theme="dark"` already on `<html>`, checkbox is checked on mount |
| `onChange` | called with `"dark"`/`"light"` after each flip |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).