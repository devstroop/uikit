# Planning — 2026-08 Foundation (react-ui)

**Cycle:** 2026-08 · **Milestone:** v0.1.0 · **Issue:** #1

## Context

Devstroop runs 500+ projects, ~40+ web apps on the Cloudflare Workers stack.
`@devstroop/react-ui` becomes the org's shared React component library —
generic, presentational, project-agnostic. Distribution is git-tagged
(`github:devstroop/react-ui#vX.Y.Z`), no npm registry.

## Decisions

- **Genericity first**: no auth/routing/data/domain coupling; no project-flavored
  component names (`AdminCard` etc. are explicitly rejected); pure primitives.
- **Styling**: CSS modules per component (collision-proof across consumer apps) +
  namespaced design tokens (`--se-*`) as the only source of values — components
  never hardcode colors/radii/spacing. Dark scheme via `[data-theme="dark"]`.
- **API surface**: `forwardRef` + `className` passthrough + full DOM attributes.
- **Build**: vite lib mode (es + cjs + d.ts via `vite-plugin-dts`), single
  `style.css` (cssCodeSplit off), `sideEffects: ["*.css"]`.
- **Tooling**: eslint 9 + typescript-eslint, strict tsc, vitest 4 + jsdom +
  testing-library. React peer range `^18 || ^19`.
- **Distribution**: dist committed in release commits (deterministic installs);
  consumers pin tags. No npm publish.

## Scope

- docs/DEVELOPMENT_STRATEGY.md (org protocol, per-repo table) + this planning record
- Package scaffold: package.json exports map, tsconfig, vite config, eslint, vitest
- Design tokens + CSS modules architecture
- Component core: Button, Card, Badge, Icon, Stat, Table, EmptyState, Field,
  Label, Input, Select, Checkbox, Switch (13)
- Barrel exports, CI (lint → typecheck → test → build → export smoke check)
- Representative component tests; README

## Out of scope (next iteration)

- Org-app integration (SoftEther-Web wiring as first consumer)
- App-shell components (Header/Sidebar/layouts — per-app)
- Storybook docs site
- Tooltip/Modal/Toast layer

## Definition of done (milestone v0.1.0)

- [ ] Issue #1 closed by merged PR (CI green)
- [ ] develop → master release PR merged and tagged `v0.1.0`
- [ ] Accumulators re-synced with develop
- [ ] Branch protection on master/develop (org admin)