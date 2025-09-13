# Han Park — Portfolio (Astro + Tailwind)

Inspired-by rebuild of rauno.me aesthetics (clean-room). All code/fonts/assets here are original.

## Quick start
```bash
npm i         # or: pnpm i / yarn
npm run dev   # http://localhost:4321
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel)
- Build Command: `astro build`
- Output Directory: `dist`
- Or use CLI: `vercel` then `vercel --prod`

## Edit content
- Home hero: `src/pages/index.astro`
- Mantra lines: `src/components/LoopMantra.astro`
- Projects grid: edit arrays in `index.astro` and `projects/index.astro` (can switch to MDX later)
- Email button: footer in `src/layouts/Base.astro`

## Fonts
- Noto Sans KR via Google Fonts is pre-wired.
