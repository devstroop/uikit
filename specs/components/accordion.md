---
name: Accordion
status: implemented
frameworks:
  react: v0.2.0
tokens:
  - "color.border"
  - "radius.md"
  - "space.3"
  - "space.4"
  - "color.text"
  - "font.size-sm"
  - "font.weight-medium"
  - "transition.fast"
  - "color.surface-hover"
  - "color.focus"
  - "font.size-xs"
  - "color.text-muted"
  - "transition.base"
  - "ease.out"
a11y:
  - "Each trigger is a semantic native <button> inside a fixed <h3> heading (Enter/Space activation; disabled triggers use the native disabled attr)."
  - "Triggers expose aria-expanded and aria-controls; panels are role=\"region\" with aria-labelledby pointing at their trigger."
  - "Decorative chevron is aria-hidden=\"true\"."
  - "Focus visible ring via --se-color-focus on :focus-visible only."
  - "Text contrast on page background: color.text on color.bg >= 4.5:1; color.text-muted on color.bg >= 4.5:1 (per schema contrastRules)."
  - "Panel content is hidden with the native `hidden` attribute when closed."
---
# Accordion

A vertically stacked list of expandable panels, each with a title trigger and
collapsible content region.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `AccordionItem[]` | — (required) | Panels to render |
| `multiple` | `boolean` | `false` | Allow more than one panel open at once |
| `value` | `string[]` | `undefined` | Controlled set of open panel keys |
| `defaultValue` | `string[]` | `[]` | Initial set of open panel keys |
| `onChange` | `(keys: string[]) => void` | `undefined` | Fired with open keys after every toggle |
| `className` | `string` | `undefined` | Extra class on the root |

`AccordionItem` is `{ key: string; title: ReactNode; content: ReactNode;
disabled?: boolean }`. The component is controlled when `value` is passed;
otherwise it manages state internally seeded from `defaultValue`.

## Behavior

- Renders `<div class="root">` containing one `.item` per entry; items are
  separated by a top border.
- Trigger is a native `<button type="button">` inside a fixed `<h3>`. Clicking
  toggles the key: with `multiple`, keys are added/removed; without it, the
  clicked key replaces the selection (single open panel).
- Open panels keep `role="region"` and `aria-labelledby`; closed panels are
  removed via the native `hidden` attribute, so `region` only exists while open.
- Chevron (literal `▾` glyph) rotates 180° when open, `aria-hidden="true"`.
- Disabled items: `opacity 0.5`, `cursor: not-allowed`, hover styles skipped
  (`.trigger:hover:not(.disabled)`).
- Content animates in (opacity + translateY) on open via keyframes
  `se-accordion-in`.

## Keyboard

Native button semantics only: Enter and Space activate a trigger; disabled
triggers cannot be activated. No arrow-key or Home/End navigation is
implemented — panel switching is by focus + Enter/Space. `:focus-visible`
outline is the only focus indicator.

## Tests

| Scenario | Assertion |
|---|---|
| Renders collapsed by default | trigger has `aria-expanded="false"` |
| Click then click again | `aria-expanded` goes `true` then `false`; region shows panel content |
| `multiple` is false | opening a second item leaves exactly one `region` |
| `multiple` is true | two items open → two `region`s |
| Toggle an item | `onChange` called with the open keys, e.g. `["one"]` |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).