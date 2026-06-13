# vibe-theme-web

Landing page for [Vibe Theme](https://github.com/hector-mendoza/vibe-theme) — a family of 8 dark themes for VS Code & Cursor built around 2026 design trends.

Built as a portfolio piece and deployed as a standalone SPA.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — page loader, scroll reveals, theme transitions
- [Animate Icons](https://animateicons.in/) (`@animateicons/react/lucide`) — animated feature icons

## Features

- **Theme switcher** — 8 interactive palette pills that update the entire page's colors in real time
- **Live code previews** — each theme card renders syntax-highlighted code in that theme's exact colors
- **Page loader** — cinematic curtain-lift entrance showcasing all 8 palette colors as ambient blobs + glowing chips
- **Scroll-driven animations** — CSS `animation-timeline: view()` for section reveals (no JS scroll listeners)
- **Mobile-first** — fully responsive from 375px up

## Development

```bash
npm install
npm run dev
```

## Related

- Extension repo: [hector-mendoza/vibe-theme](https://github.com/hector-mendoza/vibe-theme)
- VS Code Marketplace: [Vibe Theme](https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme)
- Portfolio: [hectormendoza.me](https://hectormendoza.me)
