---
name: Markdown
status: implemented
category: data-display
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "color.text-primary"
  - "font.size-sm"
  - "radius.md"
  - "space.2"
  - "space.3"
  - "space.5"
a11y:
  - "Rendered output is a labelled article landmark; headings inside keep their levels so AT navigation works."
  - "Links keep their destinations; javascript: targets never survive either implementation."
---

# Markdown

Markdown source rendered to sanitized HTML. Both frameworks implement
the same subset contract (headings, bold, italic, strikethrough, inline
code, links, lists, quotes, rules, fenced code): raw HTML is escaped
unless `allowHtml` is set, and link targets are scheme-checked either
way. Shared test vectors live in both suites — keep the two lists in
sync when the contract grows.

## react

`<Markdown value allowHtml? resize? />` — parses with the shared
subset, then runs DOMPurify over the output (scripts never survive,
even with `allowHtml`). Renders an `article` landmark; `resize` adds a
resizable shell. The pure `renderMarkdown(source, { allowHtml? })` is
exported for programmatic use.

```tsx
<Markdown value="# Hi" />
```

## htmx

`[data-dx-markdown]` hosts render their own text content on init (never
twice — rendered hosts are marked); `data-dx-markdown-source="#id"`
renders a referenced script/text template instead, and
`data-dx-markdown-allow-html` passes raw HTML through.
`window.dxMarkdown.render(source, { allowHtml? })` is the programmatic
twin. No client-side DOMPurify (dependency-free bundle): the parser
itself escapes HTML and scheme-checks links; richer sanitizing stays
server-side.

```html
<div data-dx-markdown># Hi</div>
```

## Tests

| Scenario | Assertion |
|---|---|
| Shared vectors (both) | identical input/output pairs, incl. javascript: drop |
| allowHtml (both) | raw tags pass through |
| Sanitize (react) | script payloads stripped from rendered output |
| Scoped render (htmx) | host + referenced-source + never-twice forms |
| Resize shell (react) | resizable class present |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
