# @devstroop/react-ui

Generic React UI primitives for Devstroop web apps. Presentational, themeable,
and project-agnostic — no auth, routing, data, or domain coupling. Composable
building blocks that any app styles through design tokens.

## Install

Git-tagged distribution (no npm registry). Pin an exact release tag:

```json
"dependencies": {
  "@devstroop/react-ui": "github:devstroop/react-ui#v0.1.0"
}
```

```bash
npm install
```

Import the stylesheet once, then use components:

```tsx
import "@devstroop/react-ui/style.css";
import { Button, Card, Field, Input } from "@devstroop/react-ui";

export function SignInForm() {
  return (
    <Card header="Sign in">
      <Field label="Email" htmlFor="email" required>
        <Input id="email" type="email" />
      </Field>
      <Button type="submit">Continue</Button>
    </Card>
  );
}
```

## Components

| Component | Purpose |
|---|---|
| `Button` | variant (`primary`/`secondary`/`ghost`/`danger`), size, `fullWidth` |
| `Card` | `elevated`/`outlined`/`interactive` with `header`/`footer` slots |
| `Badge` | tone (`neutral`/`primary`/`success`/`warning`/`danger`) × variant (`soft`/`solid`/`outline`) |
| `Icon` | 40 stroke icons — `name`, `size`, `strokeWidth` |
| `Stat` | label + value + optional `delta`/`hint`; composes inside `Card` |
| `Table` | generic controlled — `columns` + `rows` + `rowKey` + `empty` slot |
| `EmptyState` | icon + title + description + action |
| `Field` | label + control + `hint`/`error` wiring |
| `Label` / `Input` / `Select` / `Checkbox` / `Switch` | form primitives |

All interactive components: `forwardRef`, `className` passthrough, full DOM
attribute support. A11y baseline: semantic elements, `aria-invalid` on invalid
controls, `role="switch"` for `Switch`, keyboard focus-visible rings.

## Theming

Components consume design tokens exclusively — no hardcoded values. Override
any subset on your `:root` (or a scoped container):

```css
:root {
  --se-color-primary: #7c3aed;
  --se-color-primary-hover: #6d28d9;
  --se-radius-md: 6px;
}
```

A dark scheme is available via `[data-theme="dark"]`. See
`lib/styles/tokens.css` for the full token list (`--se-*`).

## Development

See `docs/DEVELOPMENT_STRATEGY.md` for branch/PR/release protocol.

```bash
npm install
npm run lint      # eslint
npm run typecheck # tsc --noEmit
npm test          # vitest
npm run build     # vite lib build → dist/ (es + cjs + d.ts + style.css)
```

## License

MIT
