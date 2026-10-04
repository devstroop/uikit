---
name: LiveRegion
status: implemented
category: utilities
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens: []
a11y:
  - "Announcements are appended to a single polite status panel (role=\"status\"), so updates interrupt neither the previous announcement mid-flow nor ongoing reading."
  - "The panel is visually hidden by construction and exists for AT only; it never intercepts keyboard focus."
---

# LiveRegion

Imperative screen-reader announcement channel — a single visually-hidden
`role="status"` + `aria-live="polite"` lease announced-only-reserved; a
callback/anchor that writes the new message. React exposes a hook; htmx
exposes the attribute contract and a global announce helper.

Per-component a11y payloads (alerts, form errors) must not depend on this
directly — they own their own inline live regions (see Field/Form/DataFilter
specs). LiveRegion is the cross-cutting channel for components that
report state but don't have inline room for it.

## react

`useLiveRegion()` — mounts a visually-hidden status panel on `<body>` and
returns the announce callback.

```tsx
const announce = useLiveRegion();
// later, e.g. in an event handler:
announce("Saved successfully");
```

- Returns a stable `(text: string) => void` callback (`useCallback` on an
  empty dep list); safe to use in dependency arrays.
- No options; per-channel separation is done by mounting a second
  `useLiveRegion` wherever an independent channel is needed.
- SSR-safe and render-safe: the DOM node is created inside `useEffect` and
  removed on unmount.

## htmx

`[data-dx-live-region]` marks a polite status panel; every marked element
receives `role="status"` and `aria-live="polite"` from init and from each
`htmx:afterSettle` sweep. `window.dxLiveRegion.announce(text, root?)` fills
the nearest marked panel relative to `root` (or the document), or creates
a fresh bare one on `<body>` when none exists.

```html
<div data-dx-live-region></div>
<script>dxLiveRegion.announce("Row added")</script>
```

## Tests

| Scenario | Assertion |
|---|---|
| Mount & announce (react) | region exists with `role="status"` + `aria-live="polite"`; text updates on each announce |
| Unmount cleanup (react) | region removed from `<body>` |
| Empty document (htmx) | announce creates one marked element on `<body>`; second announce overwrites it (only one element) |
| Existing marked element (htmx) | receives `role`/`aria-live` during announce + the text is written |
| Caller-supplied container (htmx) | announce scoped to a root writes the region inside it only |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
