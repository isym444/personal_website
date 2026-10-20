# isym.uk

Personal website of Ian Samir Yep Manzano. One page that mirrors my [GitHub profile](https://github.com/isym444): about, experience, projects, highlights and live progress stats.

Built with Next.js 15, Tailwind CSS and TypeScript, deployed to Cloudflare Pages with `@cloudflare/next-on-pages`.

## Live stats

The numbers and charts under "Live stats" come from the profile repo, which refreshes them daily from my study-progress API:

- `https://raw.githubusercontent.com/isym444/isym444/main/assets/stats/stats.json`
- `https://raw.githubusercontent.com/isym444/isym444/main/assets/stats/*.png`

`content/stats.snapshot.json` is a bundled copy shown instantly (and if the fetch fails); the page replaces it with the live JSON in the browser.

## Repertoire clips

Each piece in the repertoire list can open a short looping clip of me playing it, with sound. A piece only becomes clickable once it has a clip, so there is nothing to edit in the page code:

```bash
npm run clip -- chopin-polonaise ~/Movies/polonaise.mov --start 0:42 --dur 8
```

- The first argument is the piece's `id` in `lib/content.ts`; the second is the raw recording (any orientation).
- `--start` and `--dur` pick the segment (default: first 8 seconds); `--full` keeps the whole recording. Short loops (~5 to 10 seconds) are best, and clips over 20 seconds only preload metadata on hover and stream after the click. `--size` caps the longest side (default 960). `--mute` drops the audio. `--autocrop` strips black bars baked into the recording (e.g. a phone video pillarboxed inside a 16:9 file).
- It writes `public/repertoire/<id>.mp4` (H.264 + AAC audio, loudness-normalised across clips, short fades so the loop point doesn't click, faststart, ~350 to 700 KB) and `<id>.jpg` (poster), and records the size in `content/clips.json`. Needs `ffmpeg` on PATH.
- Re-running it for the same id replaces the clip and busts the cache. Commit the three files.

Clips cost nothing on page load: they are fetched on hover, focus or touch, then handed to the popup already buffered. Playback starts inside the click so browsers allow sound; it respects the site-wide mute button, the popup has its own sound toggle, and audio pauses when the tab is hidden. To move them off the repo (e.g. a Cloudflare R2 bucket), upload `public/repertoire/` and set `NEXT_PUBLIC_CLIP_BASE` to its URL at build time.

## Document popups

A highlight can open a document in the same terminal-style popup as the clips (JLPT N1 does). Define the document in `lib/docs.ts` and point a highlight at it with `doc: { id, label }` in `lib/content.ts`.

Documents are shown as images, never the original PDF. Check them before they go in: printed web pages often carry a URL in the footer, and results-portal URLs can contain the login (the JLPT printout's does). Crop that out, hide ID numbers, and keep the original out of the repo. Strip photo metadata too (phone photos carry GPS): `magick in.jpg -auto-orient -strip -quality 85 public/docs/name.webp`.

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
