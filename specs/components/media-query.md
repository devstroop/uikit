---
name: MediaQuery
status: implemented
category: utilities
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens: []
a11y:
  - "Gated content is removed, not hidden with aria-hidden: when content must stay tab-reachable while invisible, prefer CSS hiding instead of this gate."
  - "The match result is the single source: `hidden` (htmx) and null-render (react) mean the same thing — no half-rendered hybrids."
---

# MediaQuery

Media-query visibility gate: content exists only while the query matches.
React exposes the `useMediaQuery` hook (`MediaQuery` slot delegates to
it); htmx exposes the `[data-dx-media-query]` attribute contract.

Neither framework stores an opinion about non-matching content — the
content is absent, not hidden, in both implementations.

## react

`useMediaQuery(query)` — reactive `window.matchMedia` binding: eager seed
(no first-render flash), `change` listener with an `addListener` fallback
for older engines, `false` server-side and when `matchMedia` is missing.

```tsx
const wide = useMediaQuery("(min-width: 768px)");
```

`<MediaQuery query>` — slot renderer on the same hook; renders children
only while the query matches, `null` otherwise (SSR-safe).

```tsx
<MediaQuery query="(min-width: 768px)">
  <DesktopRail />
</MediaQuery>
```

## htmx

`[data-dx-media-query="(min-width: 768px)"]` hides the host (`hidden`)
while the query does not match, removes `hidden` when it matches, and
re-evaluates whenever the media list changes. Idempotent per element
(WeakSet guard), so re-inits after htmx swaps are safe. Each evaluation
dispatches `dx:media-change` with `{ query, matches }`.

```html
<div data-dx-media-query="(min-width: 768px)">…</div>
```

## Tests

| Scenario | Assertion |
|---|---|
| Match at init (react/htmx) | children rendered / no `hidden` |
| No match at init (react/htmx) | null render / `hidden=""` |
| Query flips (react/htmx) | gate re-renders / `hidden` flips + `dx:media-change` fires with `{ query, matches }` |
| No matchMedia engine (both) | react renders nothing; htmx leaves the element alone |
| Repeated inits (htmx) | one listener per element (single change dispatch) |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
