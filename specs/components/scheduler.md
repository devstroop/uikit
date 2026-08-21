---
name: Scheduler
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
  - "radius.md"
  - "font.sans"
  - "font.size-sm"
  - "font.weight-medium"
  - "space.1"
  - "space.2"
  - "transition.fast"
a11y:
  - "Root has role='grid' with aria-label and aria-multiselectable false; each time slot is role='gridcell' with aria-selected for the selected event."
  - "Events are <button> with aria-label from title + time, aria-pressed for selected, and aria-disabled for disabled events."
  - "Keyboard: ArrowLeft/Right move days, ArrowUp/Down move slots, Enter/Space activate event or slot, Home/End jump to start/end of day."
  - "Focus indicators: :focus-visible draws the outline-primary ring on slots and events."
  - "Resource headers are <div> with role='columnheader' and aria-label from resource name."
---

# Scheduler

Calendar scheduler with day/week/month views and resource grouping (RadzenScheduler parity). Renders a grid of time slots with events, supports drag/resize and click handlers.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `SchedulerEvent[]` | — | Events (required). |
| `view` | `"day" \| "week" \| "month"` | `"week"` | Current view. |
| `date` | `Date` | `new Date()` | Current date (controlled). |
| `onDateChange` | `(date: Date) => void` | `undefined` | Called when date changes (prev/next). |
| `resources` | `SchedulerResource[]` | `undefined` | Resources for grouping. |
| `onEventClick` | `(args: SchedulerEventClickArgs) => void` | `undefined` | Called when an event is clicked. |
| `onSlotClick` | `(args: SchedulerSlotClickArgs) => void` | `undefined` | Called when a slot is clicked. |
| `onEventChange` | `(args: SchedulerEventChangeArgs) => void` | `undefined` | Called on drag/resize. |
| `ariaLabel` | `string` | `"Scheduler"` | aria-label on the grid. |
| `className` | `string` | `undefined` | Extra class. |

`SchedulerEvent` = `{ id: string; title: string; start: Date; end: Date; resource?: string; allDay?: boolean }`
