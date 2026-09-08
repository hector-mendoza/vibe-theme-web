<p align="center">
  <img src="public/logo.svg" alt="Vibe Theme" width="64" height="64" />
</p>

<h1 align="center">Vibe Theme</h1>

<p align="center">
  <strong>Eight meticulously crafted dark themes for VS Code & Cursor.</strong><br />
  Built around the design language shaping modern software in 2026.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme">Install</a>
  ·
  <a href="https://github.com/hector-mendoza/vibe-theme">Extension</a>
  ·
  <a href="https://hectormendoza.me">Portfolio</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/themes-8-8B5CF6?style=flat-square" alt="8 themes" />
  <img src="https://img.shields.io/badge/license-MIT-06B6D4?style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/badge/platform-VS%20Code%20%26%20Cursor-111118?style=flat-square" alt="VS Code and Cursor" />
</p>

---

## Overview

This repository powers the **Vibe Theme** marketing site — a single-page experience where every palette, animation, and code preview mirrors the extension itself. Switch themes in real time, explore live syntax previews, and install directly from the Marketplace without leaving the page.

Designed as a portfolio-grade product surface: cinematic on first load, fast under the hood, and responsive from 375px to ultrawide.

## The Collection

| Theme | Character |
| --- | --- |
| **Mood Mode Dark** | The 2026 SaaS dashboard standard — violet and cyan, refined and confident |
| **Transformative Teal** | Clean, resilient, Earth-forward |
| **AI Iridescence** | Fuchsia-to-violet with emerald pops |
| **Warm Biophilic** | Organic warmth for long sessions |
| **Soft-Tech Pastel** | Calm focus without sacrificing contrast |
| **Midnight Moss** | Terminal-grade contrast with electric green |
| **Arid Stone** | Desert canyon darks, electric coral |
| **Vibe Theme** | Material Ocean — where it all started |

## Experience

- **Live theme switcher** — palette pills update the entire page instantly, from ambient glows to syntax tokens
- **Syntax-accurate previews** — each card renders code in that theme's exact accent, secondary, and muted colors
- **Cinematic loader** — a curtain-lift entrance with all eight palette colors as ambient light
- **Scroll-driven reveals** — CSS `animation-timeline: view()` for section entrances, no scroll listeners
- **One-click install** — copy the extension ID or jump straight to the Marketplace

## Stack

| Layer | Choice |
| --- | --- |
| Build | [Vite](https://vite.dev/) |
| UI | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Animate Icons](https://animateicons.in/) |

## Development

```bash
npm install
npm run dev
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Related

- **Extension source** — [github.com/hector-mendoza/vibe-theme](https://github.com/hector-mendoza/vibe-theme)
- **VS Code Marketplace** — [HectorMendoza.vibe-theme](https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme)
- **Author** — [hectormendoza.me](https://hectormendoza.me)

---

<p align="center">
  <sub>MIT License · Made by <a href="https://hectormendoza.me">Hector Mendoza</a></sub>
</p>
