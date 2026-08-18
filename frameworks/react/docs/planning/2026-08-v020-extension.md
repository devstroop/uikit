# Planning — 2026-08 v0.2.0 extension (react-ui)

**Cycle:** 2026-08 · **Milestone:** v0.2.0 · **Epic:** #4 · **Sub-issues:** #5–#15

## Context

react-ui v0.1.0 shipped the 13-component core and was dogfooded by
SoftEther-Web (v0.1.2–v0.1.4). This cycle extends the library with the
feedback/overlay layer explicitly deferred from the foundation
(Tooltip/Modal/Toast) plus structure and data-display primitives.

## Decisions

- **Self-built, zero runtime deps** — no Radix/Base UI; native APIs do the
  heavy lifting: `<dialog>.showModal()` (focus trap, Esc, scroll-lock, inert
  background), `aria-live` regions for toasts, CSS animations for transitions.
- **Full 11-component batch** (confirmed): Tooltip, Dialog, Toast, Alert,
  Skeleton, Progress, Avatar, Tabs, Accordion, Textarea + tokens extension.
- **No Storybook** this cycle — verification via vitest + jsdom (role/aria +
  keyboard interaction assertions) and SoftEther-Web dogfooding next cycle.
- **Documented limitation**: Tooltip/Toast positions are fixed (4 sides), no
  viewport collision flipping — app composition handles overflow.
- Tokens remain the only source of values; dark parity via
  `[data-theme="dark"]`.
- Distribution unchanged: git-tagged (`github:devstroop/react-ui#v0.2.0`),
  dist committed in the release commit.

## Scope

| # | Item | Notes |
|---|------|-------|
| #5 | Tokens extension | `--se-z-*` (tooltip 1000 / popover 1500 / modal 2000 / toast 3000), `--se-shadow-lg`, `--se-color-backdrop`, `--se-transition-base/slow`, `--se-ease-out` |
| #6 | Tooltip | hover+focus, `aria-describedby`, arrow, 4 positions |
| #7 | Dialog | native `<dialog>`, 3 sizes, header/body/footer slots, backdrop, `onClose`, focus restore |
| #8 | Toast | `ToastProvider` + `useToast()`, viewport, `aria-live`, 4 tones, auto-dismiss |
| #9 | Alert | inline banner, 4 tones, dismiss, `role="alert"` |
| #10 | Skeleton | shimmer, text/circle/rect variants |
| #11 | Progress | determinate + indeterminate, `role="progressbar"` |
| #12 | Avatar | initials fallback, status dot, name-hash background |
| #13 | Tabs | roving tabindex, arrow keys, underline/pills variants |
| #14 | Accordion | single/multiple, animated expand, aria wiring |
| #15 | Textarea | matches Input/Select sizing, resize opt-in |

Implementation batches (one branch per batch):

- `feat/5-v020-tokens` — tokens + this planning record
- `feat/6-v020-feedback-layer` — Tooltip, Dialog, Toast, Alert
- `feat/10-v020-data-display` — Skeleton, Progress, Avatar
- `feat/13-v020-structure-forms` — Tabs, Accordion, Textarea

## Out of scope (next iteration)

- DropdownMenu, Popover, Drawer/Sheet, Command palette, DataTable,
  DatePicker, ToggleGroup, Pagination, Breadcrumb
- Storybook docs site
- App-shell components (Header/Sidebar — per-app)

## Definition of done (milestone v0.2.0)

- [ ] All sub-issues #5–#15 merged into `features` with CI green
- [ ] `features` batched into `develop`
- [ ] `develop` → `master` release PR merged (human gate) and tagged `v0.2.0`
- [ ] dist committed with release; consumers re-pin `github:devstroop/react-ui#v0.2.0`
- [ ] Accumulators re-synced with develop
- [ ] SoftEther-Web dogfood cycle (next) consumes new components