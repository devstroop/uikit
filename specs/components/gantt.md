---
name: Gantt
status: proposed
category: data
frameworks:
  react: v0.26.0
  htmx: v0.24.0
tokens:
  - "color.surface"
  - "color.border"
  - "color.text"
  - "color.text-muted"
  - "color.primary"
  - "color.primary-fg"
  - "color.outline-primary"
  - "radius.sm"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "space.1"
  - "space.2"
  - "transition.fast"
a11y:
  - "Root has role='grid' with aria-label and aria-rowcount; each task row is role='row' with aria-selected."
  - "Task bar is <div> with role='button' aria-label from task name + dates, aria-pressed for selected, and aria-valuenow/valuemin/valuemax for progress."
  - "Keyboard: ArrowUp/Down move between tasks, ArrowLeft/Right adjust dates (when editable), Enter/Space select task."
  - "Focus indicators: :focus-visible draws the outline-primary ring on task bars and rows."
  - "Dependencies are <line> in an SVG overlay with aria-hidden, not focusable."
---

# Gantt

Gantt chart with tasks, dependencies, and progress (RadzenGantt parity). Renders a timeline with task bars, supports drag and progress.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `tasks` | `GanttTask[]` | — | Tasks (required). |
| `view` | `"day" \| "week"` | `"week"` | Timeline view. |
| `onTaskClick` | `(args: GanttTaskClickArgs) => void` | `undefined` | Called when a task is clicked. |
| `onTaskChange` | `(args: GanttTaskChangeArgs) => void` | `undefined` | Called on task drag/progress change. |
| `onDependencyChange` | `(args: GanttDependencyChangeArgs) => void` | `undefined` | Called when a dependency is changed. |
| `ariaLabel` | `string` | `"Gantt"` | aria-label on the grid. |
| `className` | `string` | `undefined` | Extra class. |

`GanttTask` = `{ id: string; name: string; start: Date; end: Date; progress?: number; dependencies?: string[]; resource?: string }`
