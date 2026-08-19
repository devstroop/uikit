# Development Strategy

The canonical development workflow for the **Devstroop Technologies** organization —
applies to every repository in the org (SoftEther-App, SoftEther-Web, libsoftether,
SoftEtherZig, react-ui). This document is the referring standard: planning, branching,
worktrees, pull requests, CI, and releases all follow the rules below.

## 1. Principles

1. **Everything waits behind `develop`** — `master` is the only production branch
   and moves exclusively through release pull requests.
2. **One issue → one branch → one PR.** Every unit of work is traceable end to
   end (issue number appears in branch name, PR title, and merge commit).
3. **Plan first, code second.** Each cycle starts as a locally drafted plan,
   is finalized into issues/sub-issues on the repository host (GitHub or Codeberg), and only then does implementation
   begin.
4. **Parallel work is free** — development happens in dedicated worktrees, so
   multiple branches are never blocked by a dirty working tree.
5. **CI is the gate.** Nothing merges without lint, typecheck, build, and the
   repository's scripted tests passing on the PR.

## 2. Branch topology

```
master                 production — protected; only via release PR from develop
└── develop            THE integration gate — protected; all work accumulates here
    ├── fixes           accumulator for corrective work (bugs, regressions, hotfixes)
    │   └── fix/<issue#>-<slug>
    ├── features        accumulator for product work (features, improvements)
    │   └── feat/<issue#>-<slug>
    ├── chores          accumulator for maintenance (deps, CI, refactors, tooling)
    │   └── chore/<issue#>-<slug>
    └── docs            accumulator for documentation (guides, strategy, policies)
        └── doc/<issue#>-<slug>
```

> Git branch names cannot end in `/` — accumulators are slash-free (`fixes`,
> `features`, ...) while implementation branches carry the slash prefix
> (`fix/…`, `feat/…`, `chore/…`, `doc/…`). Documentation branches use the
> singular `doc/` prefix because git refs cannot nest under an existing branch:
> `refs/heads/docs/…` is impossible while the `docs` accumulator branch exists.

### Branch rules

| Rule | Detail |
|---|---|
| Source | Every implementation branch is created **from its accumulator branch**, never from `master` or `develop` directly |
| Naming | `feat/123-profile-page`, `fix/45-header-spacing`, `chore/67-ci-triggers`, `doc/12-strategy` — slug is kebab-case, issue number first |
| Freshness | Before creating a new branch, merge `develop` into the accumulator (accumulators must never drift behind `develop`) |
| Lifecycle | Implementation branches are short-lived (hours–days). Accumulator branches live for a cycle. `develop` is permanent. `master` is permanent |
| Protection | `master` and `develop` require green CI (strict, all required checks); direct pushes are rejected — no mandatory human review; merges are automated once CI passes |

### 2.1 Nesting (large work)

Large issues decompose into a hierarchy under the accumulator. Nested branches
carry their own issue number at each level and are created from the **branch
one level up**:

```
features                          accumulator
└── feat/10-examples              epic branch (issue #10)  ← PR into features
    ├── feat/10-shell             part branch               ← PR into feat/10-examples
    │   └── feat/10-shell-app     unit branch               ← PR into feat/10-shell
    ├── feat/10-forms             part branch               ← PR into feat/10-examples
    ├── feat/10-feedback          part branch               ← PR into feat/10-examples
    │   └── feat/10-feedback-alert unit branch              ← PR into feat/10-feedback
    └── feat/10-data-display      part branch               ← PR into feat/10-examples
```

| Rule | Detail |
|---|---|
| Depth | Max 3 levels below the accumulator (`feat/<issue#>-<epic>` + part + unit). Anything deeper splits into a new epic |
| Prefix | Nesting lives under the singular prefix refs (`feat/…`), never under the accumulator name (`features/…`) — the accumulator branch occupies that ref namespace |
| Flattening | Ref names are flattened to one slash level — `feat/10-examples` + `feat/10-examples/shell` is impossible (a ref cannot nest under another ref: `refs/heads/feat/10-examples` is a file, `refs/heads/feat/10-examples/shell` needs a directory at the same path). The hierarchy is expressed by **PR targets** (unit → part → epic → accumulator), not by literal slash nesting |
| Source | Each level branches from its parent branch, not from the accumulator directly |
| PR chain | Every branch — including units and parts — opens a PR into its **immediate parent**. CI runs on every `pull_request`, so intermediate merges are always verified. Push-triggered CI only fires on trunk branches; nested branches rely on PRs |
| Examples | Preview/demo-site work is a normal feature: `feat/<issue#>-examples` under `features` |
| Dist | Branches touching a framework rebuild `dist/` + preview vendor copies before their PR (CI in-sync gates). A parent regenerates after absorbing children and before its own PR; merged trees are regenerated after `develop` merges (resolve dist conflicts by rebuilding from the merged tree, never by hand) |

## 3. Issue lifecycle (repository host)

```
Draft (local) → Finalize (GitHub) → Assign (labels + milestone) → Implement → Review → Close
```

| Phase | What happens |
|---|---|
| **Draft** | Planning rounds happen in discussion first. Each draft is categorized (feature / fix / chore / refactor / docs) and recorded under `docs/planning/` (one file per cycle) |
| **Finalize** | The finalized breakdown becomes GitHub issues. Large work becomes an **epic** (parent) with native **sub-issues**; each sub-issue is independently branchable |
| **Label taxonomy** | `feature` · `fix` · `chore` · `refactor` · `docs` · `tech-debt` · `release` |
| **Milestones** | One milestone per release cycle (e.g. `v0.10`). Every issue in the cycle is attached to it. Milestone closes = release ships. Repos shipping two packages (uikit) name the milestone after the primary package and pair it with the secondary's version in the planning record |
| **Estimation** | Keep issues small — any issue that cannot be described in a few sentences or finished in days is split into sub-issues |

### Definition of Done (every issue)

- [ ] Implementation branch created from the correct accumulator, linked to the issue
- [ ] Code follows repo conventions (linter clean, typed, no dead code)
- [ ] Scripted tests relevant to the change pass locally (and in CI)
- [ ] PR opened against the accumulator with `Closes #<issue>` in the description
- [ ] CI green on the PR (sole merge gate)
- [ ] Issue closed automatically by the merged PR; sub-issues closed as they land

## 4. Local workflow (worktrees)

Implementation never happens on `master` or `develop` directly.

```bash
# 1. Fresh accumulator, then branch for the issue
git switch develop && git pull
git switch fixes && git merge develop && git push

# 2. Create the implementation branch in its own worktree
git worktree add ../SoftEther-Web.fix-123 fix/123-header-spacing

# 3. Work in the worktree — other worktrees stay untouched
cd ../SoftEther-Web.fix-123
```

- One worktree per active branch → **parallel tasks never need stashing**.
- Worktrees live as siblings of the checkout (`../<repo>.<issue#>-<slug>`).
- Accumulator worktrees use `<repo>.<accumulator>` (e.g. `uikit.features` — no issue number exists for them); implementation worktrees keep `<repo>.<issue#>-<slug>`.
- Each worktree builds and tests independently.
- Remove the worktree after the branch merges: `git worktree remove <path>` then delete the branch.

## 5. Pull requests & merge protocol

### Merge style

| Merge into | Style | Why |
|---|---|---|
| Implementation → accumulator | **Squash** | One clean, conventional-commit message per issue; the accumulator history reads as a changelog |
| Accumulator → `develop` | **Merge commit** | The batch lands as a visible unit; easy to revert a whole batch |
| `develop` → `master` | **Merge commit + tag** | Release unit; tagged with the version |

### Squash message convention (Conventional Commits)

```
feat(profile): add profile page                     # type(scope): subject
fix(header): fix top spacing under fixed header
chore(ci): retarget workflows to master/develop
docs(strategy): add development strategy
```

Types: `feat` · `fix` · `chore` · `refactor` · `docs` · `ci` · `test` · `perf` ·
`build` · `revert`. The PR title must equal the intended squash message.

### PR checklist (every PR)

- [ ] Description references the issue: `Closes #123`
- [ ] Title is the final squash message (Conventional Commits)
- [ ] CI green (lint → typecheck → build → scripted tests)
- [ ] Reviewed and approved
- [ ] Scope contained — no unrelated changes, no secret material, no lockfile churn

## 6. CI gates

| Gate | Runs on | Blocks |
|---|---|---|
| lint | every PR + push to accumulators/develop | merge |
| typecheck | every PR + push to accumulators/develop | merge |
| build | every PR + push to accumulators/develop | merge |
| scripted tests (`test:*` package scripts) | every PR + push to accumulators/develop | merge |
| **visual verification** | **pull_request only** (`visual.yml`) | merge |
| deploy | push to `master` (post-release) | — |

The visual job lives in its own workflow triggered **only by pull_request**.
Push-triggered runs (post-merge verification on accumulators/develop) run the
four core gates; they must not include the visual job — duplicate visual runs
on the same commit have been observed to stall in runner provisioning and the
stale/failed check context then blocks PR mergeability.

The visual job is hardened against stalls: Playwright browsers are cached
(`~/.cache/ms-playwright`, keyed on `package-lock.json`), the job drops
`--with-deps` (runners already ship the deps) and sets `timeout-minutes: 30`
so a zombie run fails fast instead of hanging. With the cache the job finishes
in ~1.5 min; the pre-cache 1.5–4.5 min log-less provisioning window looked
like a stall and caused repeated manual cancels — do not cancel a run purely
because it shows no log output within the first few minutes; wait for
`timeout-minutes` to elapse first.

Workflow triggers must match the repo's real default branch (see per-repo table).
A workflow triggered on a branch that does not exist is a silent CI outage.

## 7. Release process

1. All cycle issues are merged into `develop`; milestone shows 100% complete.
2. A **release PR** `develop → master` is prepared with:
   - Version bump (conventional commit `chore: release vX.Y.Z`)
   - Changelog summary (collected from squash messages of the cycle)
3. The release PR is merged once CI is green — the sole gate (no mandatory human review).
4. The merge is tagged `vX.Y.Z` and the milestone is closed.
5. Accumulators are rebased onto the new `master`/`develop` state so the next
   cycle starts clean.

## 8. Guardrails (common failure modes)

| Failure mode | Prevention |
|---|---|
| Accumulator drift | Merge `develop` into the accumulator before every branch + after every batch |
| Long-lived implementation branches | Issues are small; branches live hours–days; stale branches get closed |
| CI not running | Workflows must trigger on the real default branch (check the per-repo table) |
| Lockfile churn / unrelated edits | PR checklist; build only on CI-verified platforms |
| Secrets in commits | Never commit keys/tokens (env vars only); CI lint + secret scan |
| Releases without CI | Release PRs merge only after green CI — releases are never automated past the CI gate |

## 9. Per-repository mapping

| Repository | Stack | Host | Default branch | Accumulators | CI trigger |
|---|---|---|---|---|---|---|
| **SoftEther-App** | Flutter + Zig (libsoftether) | GitHub | `master` | `fixes/` `features/` `chores/` `docs/` | `master` + PRs |
| **SoftEther-Web** | React + Vite + Hono + Cloudflare Workers | GitHub | `master` | `fixes/` `features/` `chores/` `docs/` | `master` + PRs |
| **react-ui** | React UI library (vite lib mode) | Codeberg (`codeberg.org/devstroop/react-ui`) | `master` | `fixes/` `features/` `chores/` `docs/` | `master` + PRs (Forgejo Actions, `.forgejo/workflows`) |
| **libsoftether** | Zig | GitHub | `master` | `fixes/` `features/` | `master` + PRs |

> Note: legacy branches named `fix/…`, `feat/…` and `develop` exist in history;
> they are pre-strategy. All new work follows this document.