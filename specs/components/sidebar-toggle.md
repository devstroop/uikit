---
name: SidebarToggle
status: implemented
category: navigation
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.text"
a11y:
  - "Icon-only trigger MUST carry an accessible name (aria-label, default \"Toggle sidebar\"); there is no visible text to derive one."
  - "Expansion state is exposed (aria-expanded + aria-controls) so AT tracks the sidebar it flips."
  - "Focus visible ring (keyboard-only, :focus-visible); the 40px target meets touch-size guidance."
---

# SidebarToggle

Hamburger toggle for collapsible sidebars, usually placed in the header.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `IconName` | `menu` | Icon glyph |
| `label` | `string` | `Toggle sidebar` | Accessible label (aria-label) |

All remaining props forward to the native `<button>` (which defaults
to `type="button"`). Custom children replace the default icon. The
htmx reference is `.dx-sidebar-toggle`; pair with the
`data-dx-sidebar-toggle` behavior or wire `aria-expanded` app-side.

## Behavior

- 40px square target, transparent chrome, inherits text color.
- Hover washes the inherited text color at 8% (`color.text`).
- Flips `expanded` on the Sidebar; it carries no sidebar state
  itself.

## Keyboard

Native button semantics: Enter and Space activate; `:focus-visible`
ring is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Default render | button with `aria-label="Toggle sidebar"` |
| Custom icon/label | glyph and name applied |
| Click | `onClick` invoked |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
