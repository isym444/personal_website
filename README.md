# isym.uk

Personal website of Ian Samir Yep Manzano. One page that mirrors my [GitHub profile](https://github.com/isym444): about, experience, projects, highlights and live progress stats.

Built with Next.js 15, Tailwind CSS and TypeScript, deployed to Cloudflare Pages with `@cloudflare/next-on-pages`.

## Live stats

The numbers and charts under "Live stats" come from the profile repo, which refreshes them daily from my study-progress API:

- `https://raw.githubusercontent.com/isym444/isym444/main/assets/stats/stats.json`
- `https://raw.githubusercontent.com/isym444/isym444/main/assets/stats/*.png`

`content/stats.snapshot.json` is a bundled copy shown instantly (and if the fetch fails); the page replaces it with the live JSON in the browser.

## Develop

```bash
npm install
npm run dev
```

Page content lives in `lib/content.ts`.

## Deploy

```bash
npm run deploy
```
