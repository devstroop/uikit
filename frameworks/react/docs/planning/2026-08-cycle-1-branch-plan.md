# Planning — 2026-08 Cycle 1: branch topology + backlog (uikit)

**Cycle:** 2026-08 · **Milestones:** v0.4.0 (react) paired with v0.2.0 (htmx) · **Epics:** #10 (cycle 2)

Supersedes the draft branch plan reviewed 2026-08-19. Corrections applied:
backlog re-derived from current specs (the cross-learning chain of fixes was
largely shipped by the size-tier + alert/toast batches), lane mislabels fixed,
nested-branch PR chain defined, strategy doc extended (§2.1).

## Branch topology (per DEVELOPMENT_STRATEGY §2.1)

```
master                                  protected — releases only
└── develop                             protected — integration gate
    ├── fixes            accumulator    fix/<issue#>-<slug>
    ├── features         accumulator    feat/<issue#>-<epic>[/<part>[/<unit>]]
    ├── chores           accumulator    chore/<issue#>-<slug>
    └── docs             accumulator    doc/<issue#>-<slug>   (doc/, not docs/ — git ref collision)
```

- Max 3 levels below the accumulator; deeper work splits into a new epic.
- Every branch PRs into its immediate parent (CI runs on every pull_request).
- Nested branches branch from their parent, never from the accumulator directly.
- Worktrees: `<repo>.<accumulator>` for accumulators, `<repo>.<issue#>-<slug>` for implementations.

## Component lanes (8-bucket taxonomy, specs/taxonomy.md)

| Lane | Components | Cycle 1 work |
|---|---|---|
| actions | Button | #6 Button success/info tones |
| data-display | Avatar, Badge, EmptyState, Icon, Stat, Table | — |
| feedback | Alert, Dialog, Progress, Skeleton, Toast, Tooltip | #7 Alert size tiers |
| forms | Checkbox, Field, Input, Label, Select, Switch, Textarea | — |
| layout | Body, Column, Footer, Header, Layout, Row | — |
| navigation | Sidebar, Tabs | #8 Tabs side/bottom positions |
| surfaces | Accordion, Card | #9 Card text/flat variant |
| utilities | ThemeSwitcher | — |

Roadmap placement (not yet scheduled): DropdownMenu, Popover → actions;
Breadcrumb, Drawer/Sheet, Pagination → navigation; DataTable → data-display;
DatePicker, ToggleGroup → forms; Command palette → utilities.

## Cycle 1 backlog (re-derived from current specs — verified open)

| # | Item | Lane | Branch |
|---|---|---|---|
| 6 | Button `success`/`info` variant tones | actions | `feat/6-button-success-info` |
| 7 | Alert `size` tiers (xs..xl) | feedback | `feat/7-alert-size-tiers` |
| 8 | Tabs `position` (top/left/right/bottom) | navigation | `feat/8-tabs-positions` |
| 9 | Card `text`/flat variant | surfaces | `feat/9-card-text-variant` |

Verified SHIPPED (excluded): Field helper (`hint`), Sidebar `responsive` +
`overlay`, Toast tone + per-toast position, Button sizes + `iconOnly` +
`danger`, Progress circular, ThemeSwitcher, Checkbox indeterminate (native
passthrough). Roadmap-deferred (excluded): dialog geometry/drag, custom
select listbox, validators, sticky tooltip, data-grid.

## Worktree layout

```
/Volumes/EXT/softether-workspace/
├── uikit/                        main checkout — master
├── uikit.develop/  uikit.fixes/  uikit.features/  uikit.chores/  uikit.docs/
├── uikit.doc-5-strategy-nesting/
└── uikit.feat-6-…  uikit.feat-7-…  uikit.feat-8-…  uikit.feat-9-…   (per issue)
```

## Definition of done (v0.4.0)

- [ ] #6–#9 merged into `features` with CI green (each: specs → react + htmx → tests → dist/vendor regen)
- [ ] `features` batched into `develop` (merge commit)
- [ ] `develop` → `master` release PR merged (human gate) and tagged v0.4.0 / v0.2.0
- [ ] #5 strategy extension merged (doc → develop)
- [ ] Accumulators re-synced with develop
- [ ] Cycle 2 (#10 examples restructure) sub-issues filed