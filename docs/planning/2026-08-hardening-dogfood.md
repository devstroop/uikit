# Planning — 2026-08 Hardening & Dogfood Cycle

**Cycle:** 2026-08 · **Milestones:** `v0.18.0 — Hardening & dogfood` (devstroop/uikit #158) paired with `v0.11 — Hardening & dogfood` (SoftEther-Web #95) · **Strategy:** `frameworks/react/docs/DEVELOPMENT_STRATEGY.md`

Companion to `SoftEther-Web/docs/planning/cycle-2-hardening-dogfood.md`. All changes gated at `develop` — no `master` until release PR.

---

## 1. Re-validation (2026-08-25, `bash`, not guess)

| Gate | Command | Result |
|---|---|---|
| Theme schema + WCAG AA | `node scripts/validate-theme.mjs` (`scripts/validate-theme.mjs:1`) | `✓ 6 themes` default/fluent/github/material/material-3/shadcn |
| Spec contract | `node scripts/validate-specs.mjs` (`scripts/validate-specs.mjs:1`) | `✓ 33 specs` (`specs/taxonomy.md:1` 8 lanes) |
| Token parity (spec ↔ impl) | `node scripts/validate-parity.mjs` (`scripts/validate-parity.mjs:1`) | `✓ 66 checks` react+htmx |
| React tests | `npm test --prefix frameworks/react` (`lib/components/*/*.test.tsx:1`) | `34 files · 227 tests` pass |
| React build | `npm run build --prefix frameworks/react` (`vite.config.ts:1`) | `style.css 46kB / main.es.js 53kB` |
| Web build | `npm run build` in `SoftEther-Web` (`vite.config.ts:1`) | `client 78kB + 347kB` ok |

Despite green gates, drift remains (below) — hardening targets drift, not parity.

---

## 2. Hardening gaps — `uikit` (`frameworks/react` submodule `@devstroop/react-uikit@0.6.0` at `21e0389`)

1. **Pin/drift (p0).** Web `package.json:15` pins `git+https://github.com/devstroop/react-uikit.git#v0.1.0` (pre `--dt-` rename #57) vs current `frameworks/react/package.json:3` `0.6.0` (`--dt-` prefix `lib/styles/tokens.css:14`, `specs/tokens.schema.json:1`). Web still bridges `--se-`/`--blurple` in `SoftEther-Web/src/app/index.css:8` and imports `@devstroop/react-ui` (old name `frameworks/react/uikit.yml:4`) in `src/app/main.tsx:3`. Consumers must import per-theme `themes/<name>/tokens.css` — docs unclear.
2. **Demos vite alias typo (p0).** `demos/react/vite.config.ts:6` alias `"@devstroop/react-uikitkit"` extra `kit` — dead, but wrong if ever used.
3. **README drift (p1).** `frameworks/react/README.md:38` Button table `primary/secondary/ghost/danger` omits `success/info` now in spec `specs/components/button.md:15` + impl `lib/components/Button/Button.tsx:5` (cycle #6, #68). Size `xs..xl` + `iconOnly` + `aria-label` note missing.
4. **Playwright thin (p1).** Only `scripts/visual-verify.mjs:1` → 24 screenshots (6 themes × light/dark × react/htmx) + `AxeBuilder` `visual-verify.mjs:113`. No per-component Playwright in `frameworks/react` (JSDOM vitest only) for Dialog focus-trap/Esc, Tooltip delay+Esc, Field `aria-live=polite` `Field.tsx:31`, Form pipeline `Form.tsx:34`, Switch `role=switch`.
5. **Token-sync docs (p1).** `scripts/generate-css.mjs:79` syncs only `default` to `tokens.sync:lib/styles/tokens.css` (`frameworks/react/uikit.yml:13`). Consumer guide says “pick a theme by importing its `tokens.css`” but not that only `default` is vendored.
6. **Stale branches.** `feat/70-datafilter … feat/85-text-inputs` + `fix/dialog-visible-3` behind/ahead `features` — pruned or rebased next cycle, not in this hardening scope (harden core 33 first).

---

## 3. Dogfood gaps — `SoftEther-Web` (validates hardening; see companion plan)

- 24× raw `.btn` (`grep -c btn:24`) across `HomePage.tsx:23`, `LibraryPage.tsx:112`, `DocsPage.tsx`, `ChangelogPage.tsx`, `VerifyEmailPage.tsx` vs `<Button>` `lib/components/Button/Button.tsx:15`.
- 5× `.password-toggle` `shared.css:259` `LoginPage.tsx:70` `RegisterPage.tsx:112` `ResetPasswordPage.tsx:111`.
- Auth forms manual `FormEvent/useState` `LoginPage.tsx:20` vs `<Form model>` + `useFormField` + `Validators`.
- Admin shell raw `<aside>` `layouts/AdminLayout.tsx:32` vs `Layout/Sidebar/Header/Body/Row/Column`.
- `ThemeToggle.tsx:24` custom vs `ThemeSwitcher`.

Dogfood proves hardening (focus-visible `--dt-color-focus`, contrast, keyboard).

---

## 4. Branch topology (per `DEVELOPMENT_STRATEGY.md §2`)

```
master                           protected — releases only
└── develop                      protected — integration gate
    ├── fixes      accumulator   fix/<issue#>-<slug>   (uikit #159, #160)
    ├── features   accumulator   feat/<issue#>-<slug>  (none this cycle — hardening only)
    ├── chores     accumulator   chore/<issue#>-<slug> (uikit #161, #162)
    └── docs       accumulator   doc/<issue#>-<slug>   (uikit #158)
```

- Every impl branch from its **accumulator**, never `master`/`develop` directly.
- Worktrees as siblings: `../uikit.<accumulator>` and `../uikit.<issue#>-<slug>` (#103).
- Max 3 levels nesting (not used this cycle); PR chain would be unit → part → epic → accumulator with squash merges; accumulator → `develop` merge commits.
- `dist/` + `demos/vendor` regenerated on branches touching framework, CI in-sync gates.

```
Worktree layout:
/Volumes/EXT/softether-workspace/
├── uikit/                         master
├── uikit.develop/  uikit.fixes/  uikit.features/  uikit.chores/  uikit.docs/
├── uikit.doc-158-hardening-plan/
├── uikit.fix-159-demos-alias/
├── uikit.fix-160-readme-button-sync/
├── uikit.chore-161-playwright-axe/
└── uikit.chore-162-token-sync-docs/
```

---

## 5. Cycle backlog (re-derived from §2 — verified open)

### uikit — milestone `v0.18.0` (#158 epic)

| # | Item | Label | Branch | Accumulator |
|---|---|---|---|---|
| 158 | **docs: planning** this file | docs | `doc/158-hardening-plan` | docs |
| 159 | **fix: demos vite alias** `demos/react/vite.config.ts:6` typo | fix | `fix/159-demos-alias` | fixes |
| 160 | **fix: README Button variants** `success/info` + `size`/`iconOnly` | fix | `fix/160-readme-button-sync` | fixes |
| 161 | **chore: Playwright+axe** per-component (`Dialog`/`Tooltip`/`Field`/`Form`) | chore | `chore/161-playwright-axe` | chores |
| 162 | **chore: token-sync docs** `specs/tokens.md` + `README` theming | chore | `chore/162-token-sync-docs` | chores |

No `feature` this cycle — harden core 33 before breadth (data-grid/scheduler/chart families deferred to existing milestones v0.10–v0.17).

### SoftEther-Web — milestone `v0.11` (#95 epic, companion)

| # | Item | Label | Branch | Depends |
|---|---|---|---|---|
| 95 | docs: planning `cycle-2-hardening-dogfood.md` | docs | `doc/95-dogfood-plan` | — |
| 96 | **chore: uikit dt-bridge** bump to `0.6.0` (or `0.7.0` after uikit merge) + `--dt-` | chore | `chore/96-uikit-dt-bridge` | — (blocks 97–99) |
| 97 | **feat: Button** replace `.btn`/`.password-toggle` | feature | `feat/97-dogfood-buttons` | 96 merged to `develop` |
| 98 | **feat: Form+Validators** auth + invite | feature | `feat/98-dogfood-forms` | 96 |
| 99 | **feat: Layout/Sidebar/Row/Column + ThemeSwitcher** | feature | `feat/99-dogfood-layout` | 96 |

`96` is the unblocker — all `feat` branches created from `features` **after** `96` lands in `develop` + `features` resynced.

---

## 6. Work per issue (DoD per `DEVELOPMENT_STRATEGY.md §3`)

### #158 `doc/158-hardening-plan` (docs)
- This file committed; `tokens:validate`/`specs:validate`/`parity:validate` green.
- PR `docs(planning): 2026-08 hardening & dogfood` squash into `docs`, then `docs→develop` merge commit.

### #159 `fix/159-demos-alias`
- Edit `demos/react/vite.config.ts:6` alias → `"@devstroop/react-uikit"`.
- Verify `npm run demos:typecheck` + `vite build demos/react` green; no `docs/planning` churn.

### #160 `fix/160-readme-button-sync`
- Update `frameworks/react/README.md:38` table: `primary/secondary/ghost/danger/success/info`, size `xs..xl`, `fullWidth`, `iconOnly` + `aria-label` note per `specs/components/button.md`.

### #161 `chore/161-playwright-axe`
- Add `frameworks/react/e2e/*.spec.ts` using `playwright:1` + `@axe-core/playwright:4.13.0` already in `package.json:17`.
- Cases: Dialog `showModal`/`close`/`Esc` focus-restore; Tooltip `mouseEnter` delay 300ms + `Esc`; Field `error` `aria-describedby` + `aria-live=polite`; Form `submit` collects errors, `submitCount` increments; Button disabled blocks click; Switch `role=switch`.
- Script `test:e2e` + CI job PR-only (like `visual.yml`), keep push gates lean.
- 6 themes × light/dark axe zero violations, contrast `>=4.5` for `primary-fg/danger-fg/success-fg/info-fg` etc (`specs/tokens.schema.json:contrastRules`).

### #162 `chore/162-token-sync-docs`
- Update `specs/tokens.md` + `frameworks/react/README.md` theming: generated `--dt-*` contract, `scripts/generate-css.mjs:79` only `default` vendored, other themes via `uikit/themes/<name>/tokens.css` or generator, `[data-theme="dark"]` pairing, override example.

---

## 7. Playwright strategy

- **Existing:** `scripts/visual-verify.mjs:1` serves `demos/react` on `4199` (`vite demos`) + static `demos/htmx` on `4198`, takes 24 screenshots to `visual/screenshots`, runs `auditTokens` + `auditContrast` + `AxeBuilder` `visual-verify.mjs:45/113`.
- **Hardening add:** per-component Playwright in `frameworks/react` (not demos) — `playwright.config.ts` + `e2e/`. CI: new `e2e.yml` triggers `pull_request` only, caches `~/.cache/ms-playwright` keyed on `package-lock.json`, `timeout-minutes:30`.
- **Web dogfood:** `SoftEther-Web` `scripts/test-auth.mjs` + custom `playwright_browser_*` manual spot-checks: `npm run dev` → snapshot `http://127.0.0.1:5173/login` etc., evaluate computed `--dt-*` vars like prior `check-gap2.mjs`/`dashboard-audit.mjs`.

---

## 8. Definition of done (milestone `v0.18.0`)

- [ ] #158 merged `docs→develop`
- [ ] #159, #160 merged `fixes→develop` (squash, conventional `fix(...)`)
- [ ] #161, #162 merged `chores→develop`
- [ ] `develop` → `master` **not** in this cycle — all changes gated at `develop` per user instruction; release `v0.18.0` tagged after `SoftEther-Web` dogfood validates on `develop` (next milestone close).
- [ ] Accumulators re-synced after `develop` merges.
- [ ] No `dist/` hand-edits; submodule `frameworks/react` pointer updated only via generated `dist/`.
- [ ] Web companion milestone `v0.11` #95–#99 tracked separately, but #96 pin waits for this milestone’s `develop` to be green.

---

## 9. Guardrails

| Failure | Prevention |
|---|---|
| Accumulator drift | `git switch fixes && git merge develop && git push` before each `fix/` branch (and after batch) |
| Silent CI outage | Workflows trigger on `master` + PRs — verified `libsoftether` style; do not retarget to `main` |
| Lockfile churn | Only `96` touches `package-lock.json`; uikit `fixes/chores` keep lockfile stable |
| Dist conflicts | Rebuild from merged tree (`npm run build --prefix frameworks/react`), never hand-merge `dist/` |
| Secrets | No commits of `.env`/`wrangler` secrets; `softether-web-secrets.env` stays ignored |

---

## 10. References

- Strategy: `frameworks/react/docs/DEVELOPMENT_STRATEGY.md:1`
- Prior planning: `frameworks/react/docs/planning/2026-08-cycle-1-branch-plan.md`, `.../2026-08-v020-extension.md`, `.../2026-08-foundation.md`
- Token schema: `specs/tokens.schema.json:1`, generator: `scripts/generate-css.mjs:1`
- Web companion: `SoftEther-Web/docs/planning/cycle-2-hardening-dogfood.md`, `SoftEther-Web/docs/planning/cycle-1.md`
