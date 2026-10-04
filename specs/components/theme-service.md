---
name: ThemeService
status: implemented
category: utilities
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens: []
a11y:
  - "Service flips never move focus: the consumer's control keeps focus; screen readers pick up the change through the control's own semantics."
  - "Null clears (not defaults): clearing a choice removes the attribute and the stored value so the host's own default visibly returns."
---

# ThemeService

Imperative theme ownership: the service module owns `<html data-palette>`
(theme name) and `<html data-theme>` (appearance) plus `dx-palette` /
`dx-theme` storage, and notifies subscribers on every change. Controls
(ThemeSwitcher/ThemeToggle, `[data-dx-theme-switch]`) carry their own
richer local logic on the same keys; the service reads the live DOM on
every get, so control-initiated writes are visible immediately.

`AppearanceToggle` parity is carried by the existing ThemeToggle control
(state icon included); this service is the programmatic counterpart.

DOM wins over storage: an explicitly applied attribute is the source of
truth; storage seeds the DOM once per process when no attribute is set.

## react

`useThemeService()` — reactive binding: re-renders on every change and
returns the state plus the service verbs. Module verbs
(`getTheme`/`setTheme`/`getAppearance`/`setAppearance`/`subscribe`) work
without a component.

```tsx
const { theme, appearance, setTheme, setAppearance } = useThemeService();
setTheme("github"); // <html data-palette="github"> (+ storage)
setAppearance(null); // clears attribute + storage
```

## htmx

`window.dxTheme` — same verbs, same keys, same precedence. The
`[data-dx-theme-switch]` behavior writes through the service, so flips
persist and notify subscribers.

```js
dxTheme.setTheme("github");
dxTheme.setAppearance("dark");
const off = dxTheme.subscribe(({ theme, appearance }) => { ... });
```

## Tests

| Scenario | Assertion |
|---|---|
| Start unset (both) | `getTheme`/`getAppearance` are null |
| Apply (both) | attributes flip + storage persists |
| Clear with null (both) | attributes removed + storage cleared |
| Subscribe (both) | notified on change, silent after unsubscribe |
| DOM over storage (both) | explicit attribute wins over a stored choice |
| Switch integration (htmx) | all 7 existing theme-switch tests still green |
| Hook re-render (react) | state updates surface in the component |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
