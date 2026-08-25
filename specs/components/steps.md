---
name: Steps
status: implemented
category: navigation
frameworks:
  react: v0.24.0
  htmx: v0.22.0
tokens:
  - "color.border"
  - "color.border-primary"
  - "color.outline-primary"
  - "color.primary"
  - "color.primary-fg"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "color.text-primary"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "radius.full"
  - "radius.md"
  - "space.1"
  - "space.2"
  - "space.3"
  - "transition.fast"
a11y:
  - "Root is a <nav> landmark with aria-label; the list has role='list' and each step role='listitem' with aria-current='step' on the active step."
  - "Each step is a <button> when clickable (linear false) or when completed, with aria-disabled for disabled steps; linear true prevents skipping ahead."
  - "Completed steps show a check icon with aria-hidden and the text remains accessible."
  - "Keyboard: Tab moves between steps, Enter/Space activate, ArrowLeft/Right move focus where applicable."
  - "Focus indicators: :focus-visible draws the outline-primary ring on each step button."
---

# Steps

Wizard/stepper header with progress (RadzenSteps parity). Renders a horizontal list of steps with icons, text, disabled and completed states, plus content for the active step.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `StepsItem[]` | — | Steps (required). |
| `selectedIndex` / `SelectedIndex` | `number` | `0` | Controlled active index (0-based). |
| `defaultIndex` | `number` | `0` | Initial index (uncontrolled). |
| `linear` / `Linear` | `boolean` | `false` | When true, only completed + next step are clickable (sequential). |
| `onChange` / `Change` | `(index: number) => void` | `undefined` | Called when active step changes. |
| `onSelectedIndexChange` | `(index: number) => void` | `undefined` | Alias for onChange (react). |
| `ariaLabel` | `string` | `"Steps"` | aria-label on the nav. |
| `className` | `string` | `undefined` | Extra class. |

`StepsItem` = `{ text: string; icon?: string; disabled?: boolean }`
