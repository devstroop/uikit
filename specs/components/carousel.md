---
name: Carousel
status: implemented
category: navigation
frameworks:
  react: v0.24.0
  htmx: v0.22.0
tokens:
  - "color.border"
  - "color.border-strong"
  - "color.outline-primary"
  - "color.primary"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.sans"
  - "font.size-sm"
  - "radius.full"
  - "radius.md"
  - "shadow.sm"
  - "space.1"
  - "space.2"
  - "space.4"
  - "transition.fast"
a11y:
  - "Root has role='region' aria-roledescription='carousel' and aria-label; each slide has role='group' aria-roledescription='slide' and aria-label 'Slide X of Y'."
  - "Prev/next buttons are <button> with aria-labels ('Previous slide'/'Next slide') and aria-controls pointing at the slides container."
  - "Indicators are <button> with aria-label 'Go to slide X' and aria-current='true' on the active indicator."
  - "Auto-play has a pause/resume <button> with aria-pressed and aria-label; pause on hover/focus is also supported."
  - "Focus indicators: :focus-visible draws the outline-primary ring on all controls."
  - "Keyboard: ArrowLeft/Right move slides, Home/End jump to first/last."
---

# Carousel

Slideshow with auto-play and manual controls (RadzenCarousel parity). Renders a list of items with arrows and indicators; auto-play can be paused on hover or via a control.

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `ReactNode[]` | — | Slides (required). |
| `selectedIndex` / `SelectedIndex` | `number` | `0` | Controlled active index. |
| `defaultIndex` | `number` | `0` | Initial index (uncontrolled). |
| `auto` / `Auto` | `boolean` | `false` | Enable auto-play. |
| `interval` / `Interval` | `number` | `3000` | Auto-play interval in ms. |
| `pauseOnHover` / `PauseOnHover` | `boolean` | `true` | Pause auto-play on hover/focus. |
| `showArrows` / `ShowArrows` | `boolean` | `true` | Show prev/next arrows. |
| `showIndicators` / `ShowIndicators` | `boolean` | `true` | Show dot indicators. |
| `onChange` / `Change` | `(index: number) => void` | `undefined` | Called when active slide changes. |
| `ariaLabel` | `string` | `"Carousel"` | aria-label on the region. |
| `className` | `string` | `undefined` | Extra class. |
