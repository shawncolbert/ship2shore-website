# Wilmington gate fees video (test)

A 30-second vertical video (1080x1920, silent, on-screen text only) built with
[HyperFrames](https://github.com/heygen-com/hyperframes) (open source, Apache-2.0).
This folder is a standalone video project. It is NOT part of the website and
should never be merged into `main`.

**Finished video:** `out/wilmington-gate-fees.mp4`
Preview pictures: `out/still-1-start.png`, `still-2-middle.png`, `still-3-end.png`.

## Change the words or prices

Open **`config.js`**. Every word and price is there, in plain text.

- Change a price: edit the number only (for example `price: 100`). Do not type a `$`.
- The **$175** total and the comparison are added up automatically from the three gate fees.
- Change the call-to-action, website, or fine print in the same file.
- Keep the quotation marks (`"..."`) and commas as they are.

## Re-render

You need Node 22 or newer and FFmpeg installed. In a terminal, from this folder:

```
npm install
npm run check     # optional: checks the video for mistakes
npm run render    # makes out/wilmington-gate-fees.mp4 (about 1 minute)
```

(The first run downloads a small browser the renderer uses.) The fonts
(Oswald, Source Sans 3, IBM Plex Mono) and the animation library are included
in this folder, so rendering does not depend on the internet for them.

## Files

- `index.html` – the video (layout, colors, animation timing)
- `config.js` – all text and prices
- `fonts/`, `gsap.min.js` – bundled fonts and animation library
- `package.json` – pins HyperFrames at exact version 0.8.149
