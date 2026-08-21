# Component Taxonomy

Every component spec carries a `category` in its frontmatter. This document
is the single source of truth: `scripts/validate-specs.mjs` parses the
category -> members map below and fails any spec whose `category` is unknown
or whose component is not listed (or listed twice).

The categories synthesize the grouping conventions of three industry
references:

- **Radzen Blazor** — Buttons, Inputs, Data, Layout, Navigation,
  Notifications, Overlays (feature-grouped docs)
- **Material UI (MUI)** — Inputs, Data Display, Feedback, Surfaces,
  Navigation, Layout, Utils
- **shadcn/ui** — Actions, Forms, Data Display, Feedback, Navigation,
  Layout, Surfaces

The uikit taxonomy is intentionally small (8 buckets): a component belongs to
the bucket that answers "what does a consumer build with this?" A category
with a single member signals a core primitive that warrants its own bucket
(actions) or a cross-cutting concern (utilities) — not a taxonomy failure.

## Taxonomy

actions: button, dropdown, selectbar, splitbutton, togglebutton
data: data-grid, data-list
data-display: avatar, badge, data-filter, empty-state, icon, stat, table
feedback: alert, dialog, progress, skeleton, toast, tooltip
forms: autocomplete, checkbox, checkboxlist, colorpicker, datepicker, drop-zone, field, form, input, label, listbox, mask, numeric, password, radiobuttonlist, rating, security-code, select, signature-pad, slider, switch, textarea, textbox, timespanpicker, upload, validators
layout: body, column, footer, header, layout, row, stack
navigation: breadcrumb, carousel, fab-menu, menu, pager, panel-menu, profile-menu, sidebar, splitter, steps, tabs, toc
surfaces: accordion, card
typography: typography
utilities: theme-switcher, utilities

## Placement notes

- **layout** — the app shell and its composition primitives (Radzen's
  RadzenLayout regions: header/sidebar/body/footer; MUI's Grid/Stack). The
  Sidebar shell region is the exception: it lands in navigation because its
  purpose is wayfinding (MUI places Drawer under Navigation).
- **forms** — everything a `<form>` consumes (Radzen Inputs; MUI Inputs).
  `field`/`label` are the composition parts around the controls.
- **data-display** — presentational components that render data without
  input semantics (MUI Data Display: Avatar, Badge, Table, Tooltip).
  `tooltip` stays in feedback here because it is transient feedback, not a
  static display (Radzen's Notifications; shadcn Feedback).
- **feedback** — transient or stateful messaging: alerts, dialogs,
  progress, skeletons, toasts, tooltips (MUI Feedback: Alert, Dialog,
  Progress, Skeleton, Snackbar; Radzen Notifications + Overlays).
- **surfaces** — static content containers (MUI Surfaces: Accordion, Card).
  `accordion` is a static container, not navigation, in this system.
- **actions** — the single interactive trigger primitive (Radzen Buttons;
  shadcn Actions). Menus/dropdowns belong here when they ship.
- **typography** — the cross-cutting text-presentation primitive (display
  headings, body copy, captions, overlines; MUI Typography). Every component
  type should draw from its tiers instead of picking sizes ad hoc.
- **utilities** — cross-cutting, non-visual concerns (theme switching).