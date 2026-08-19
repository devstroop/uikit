---
name: Tabs
status: implemented
category: navigation
frameworks:
  react: v0.3.5
  htmx: v0.1.6
tokens:
  - "space.1"
  - "space.4"
  - "color.border"
  - "space.2"
  - "color.text-muted"
  - "font.size-sm"
  - "font.weight-medium"
  - "space.3"
  - "transition.fast"
  - "color.primary"
  - "color.text-primary"
  - "radius.full"
  - "color.primary-fg"
  - "color.text"
  - "color.focus"
a11y:
  - "Container div has `role=\"tablist\"`; each tab button has `role=\"tab\"` with `aria-selected` and `aria-controls`."
  - "Active tab is the only one in the tab order (`tabIndex={0}` vs `-1` roving tabindex)."
  - "Only the active tabpanel is rendered, with `role=\"tabpanel\"` and `aria-labelledby` pointing at its tab id."
  - "Arrow Left/Right (top/bottom) or Up/Down (left/right) and Home/End keyboard navigation (ARIA tabs pattern, orientation-aware); disabled tabs skipped."
  - "`:focus-visible` ring via `--se-color-focus` (2px outline, 2px offset)."
  - "Text-on-fill contrast >= 4.5:1 (primary-fg on primary for active pills; text-primary on surface for active underline tabs; text-muted on bg for inactive tabs)."
---

# Tabs

Sectioned content switcher with an underline or pills variant and full ARIA tabs-pattern keyboard support.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `TabItem[]` | — | Tab definitions (required) |
| `value` | `string` | `undefined` | Controlled active key |
| `defaultValue` | `string` | `items[0]?.key` | Initial active key (uncontrolled) |
| `onChange` | `(key: string) => void` | `undefined` | Called with the newly selected key |
| `variant` | `"underline" \| "pills"` | `"underline"` | Visual treatment |
| `position` | `"top" \| "left" \| "right" \| "bottom"` | `"top"` | Where the tablist sits relative to the panel |
| `className` | `string` | `undefined` | Extra class on the root |

`TabItem` fields: `key: string`, `label: ReactNode`, `content: ReactNode`, `disabled?: boolean`.

## Behavior

- Active key resolves as `value ?? internalValue`; `select()` updates internal state and fires `onChange`.
- Underline variant: 2px transparent border on the tablist-edge side of tabs, turning `primary` with `text-primary` text on the active tab.
- Pills variant: `radius.full` tabs; the active tab gets `primary` background with `primary-fg` text.
- Hover (non-active, non-disabled) shifts tab text from `text-muted` to `text`; disabled tabs are `opacity 0.5` with `cursor: not-allowed`.
- Only the active panel exists in the DOM; ids are generated via `useId` (`{baseId}-tab-{key}` / `{baseId}-panel-{key}`).
- `position` layouts the tablist beside (left/right: vertical column, panel on the other side) or below (bottom) the panel; the underline indicator tracks the tablist edge (`border-right`/`border-left`/`border-top`).

## Keyboard

- `top`/`bottom`: `ArrowRight`/`ArrowLeft`; `left`/`right`: `ArrowDown`/`ArrowUp` move focus and selection to the next/previous enabled tab (wrapping).
- `Home`/`End` jump to the first/last enabled tab.
- Enter/Space activate via the native `<button>` (selection is click-driven).
- Roving tabindex: only the active tab is reachable via Tab. No Up/Down arrow support (horizontal pattern only).

## Tests

| Scenario | Assertion |
|---|---|
| Renders the tablist and active panel | `role="tablist"` present; active tab has `aria-selected="true"`; tabpanel shows the default tab's content |
| Switches tabs on click and notifies onChange | Panel content updates; `onChange` called with the tab key |
| Arrow-key navigation with roving tabindex | `ArrowRight` moves focus, sets `aria-selected`, updates panel |
| Ignores disabled tabs in keyboard navigation | `ArrowRight` keeps focus on the enabled tab (disabled tab skipped) |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).