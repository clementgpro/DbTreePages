# DbTree website

Marketing site for DbTree (https://dbtree.app), a Windows desktop app that explores PostgreSQL databases as a tree of foreign key relationships. The app itself is not in this repo; GitHub releases of this repo host the app zip.

## Stack

- Astro (static output) + React islands (`client:load`) + Tailwind + shadcn/ui
- Pages: `src/pages/*.astro`, each wrapping a React view from `src/views/`
- Copy lives in `src/i18n/locales/en.json` (English only)
- SEO guide pages: content in `src/data/guides.ts`, rendered by `src/pages/[slug].astro` + `src/views/Guide.tsx`
- Deployed to GitHub Pages (`postbuild.js` writes the CNAME)

## Build

The default Node on this machine is too old for Astro (fails with `ERR_REQUIRE_ESM`). Switch first with fnm:

```powershell
fnm env | Out-String | Invoke-Expression; fnm use 22
npm run build
```

## Conventions

- When changing a price or plan, update every place it appears: `en.json` (pricing, FAQ, legal texts), JSON-LD in `src/pages/index.astro`, `src/pages/pricing.astro` description, `public/llms.txt`. Payments are handled in Lemon Squeezy, which must be updated separately.
- Analytics: Umami (EU cloud). Download clicks are tracked with `data-umami-event="Click on Download"`.
- `gh` CLI is not installed on this machine.
