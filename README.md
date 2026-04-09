# Menu Maker

A live menu designer. Build restaurant/café menus with sections, columns, 28 themes, 25+ fonts, adjustable sizing, and optional food images. Preview updates instantly and you can download the result as PNG or JPG at any canvas size.

## Features

- **Live preview** — every change reflects immediately on the canvas
- **28 themes** — from Classic Cream to Neon Diner to Brutal Mono
- **25+ Google Fonts** — override title/body fonts per menu
- **Adjustable sizing** — title, item name, description, and price sizes all tunable
- **Flexible canvas** — A4/Letter portrait & landscape, square, Instagram story, wide banner, or fully custom width × height
- **1–5 columns** — sections distribute automatically
- **Optional food images** — toggle on and upload per item
- **PNG / JPG download** — rendered at 2× pixel ratio for crisp export

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

This project is Vercel-ready. Two options:

**Option 1 — GitHub + Vercel dashboard (recommended)**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → Import your repo.
3. Vercel auto-detects Vite. Click Deploy.

**Option 2 — Vercel CLI**
```bash
npm i -g vercel
vercel
```

The included `vercel.json` handles routing for the SPA.

## Project structure

```
menu-maker/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── src/
│   ├── main.jsx
│   ├── App.jsx              # Main editor + state
│   ├── styles.css           # Editor chrome styling
│   ├── themes.js            # 28 themes, fonts, canvas presets
│   └── components/
│       └── MenuPreview.jsx  # The rendered menu canvas
```

## How to use

1. **Content tab** — edit title, subtitle, footer, and add/remove sections and items. Toggle "Show food images" to upload photos per item.
2. **Design tab** — pick a theme, optionally override fonts, and adjust all four text sizes.
3. **Layout tab** — choose a canvas preset or set custom width/height, adjust columns and padding, zoom the preview.
4. Hit **↓ PNG** or **↓ JPG** to download.

## Tech

- React 18 + Vite
- `html-to-image` for canvas export
- Google Fonts via `<link>` in index.html
