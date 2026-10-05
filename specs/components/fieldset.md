---
name: Fieldset
status: implemented
category: forms
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "space.4"
a11y:
  - "Native fieldset/legend grouping: AT announces the legend with every control in the group."
  - "Collapsible toggle carries aria-expanded + aria-controls; the button content is the accessible name (WCAG 2.5.3 Label in Name), custom labels only name the icon-only toggle."
  - "Collapse only exists when allowed: without allowCollapse the section stays expanded and content can never become unreachable."
  - "Focus visible ring on the toggle (keyboard-only, :focus-visible)."
---

# Fieldset

Grouped form section with a legend, optional icon, and optional collapse.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `ReactNode` | — | Legend text (hidden only when empty, untitled, and not collapsible) |
| `headerTemplate` | `ReactNode` | — | Custom legend content (replaces text + icon) |
| `icon` | `IconName` | — | Legend icon glyph |
| `iconColor` | `string` | `currentColor` | Icon tint |
| `allowCollapse` | `boolean` | `false` | Show the collapse toggle |
| `collapsed` / `defaultCollapsed` | `boolean` | — / `false` | Controlled / initial collapsed state |
| `summary` | `ReactNode` | — | Content shown in place of children while collapsed |
| `expandTitle` / `collapseTitle` | `string` | `Expand` / `Collapse` | Toggle button title |
| `expandAriaLabel` / `collapseAriaLabel` | `string` | `Expand` / `Collapse` | Names the icon-only toggle |
| `onExpand` / `onCollapse` | `() => void` | — | Collapse transition callbacks |
| `visible` | `boolean` | `true` | Render nothing when false |

The htmx reference is `.dx-fieldset` with `.dx-fieldset__legend`,
`.dx-fieldset__toggle`, `.dx-fieldset__content`, and
`.dx-fieldset__summary`; collapse wiring is app-owned.

## Behavior

- Static by default: `fieldset` + `legend` + padded (`space.4`) content.
- Collapse is opt-in (`allowCollapse`): the toggle flips expanded
  state, `hidden` on the content, and swaps children for `summary`.
- Controlled (`collapsed`) and uncontrolled (`defaultCollapsed`) modes;
  `onExpand`/`onCollapse` fire on transition.
- Legend text uses `font.size-sm` + `font.weight-medium` in
  `color.text`; the summary uses `color.text-muted`.
- Toggle hover fill is `color.surface-hover`.

## Keyboard

Native fieldset semantics; the collapse toggle is a real
`<button type="button">` (Enter/Space) with `:focus-visible` ring.

## Tests

| Scenario | Assertion |
|---|---|
| Renders legend text | legend content present |
| No text, not collapsible | no legend rendered |
| `allowCollapse` toggle click | content hidden, `aria-expanded` flips |
| Collapsed + summary | summary shown in place of children |
| `visible={false}` | renders nothing |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
