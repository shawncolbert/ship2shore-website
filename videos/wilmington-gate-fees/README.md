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

## Narrated version (voice + scenes in sync)

**Finished video:** `out/wilmington-gate-fees-narrated.mp4` (38.4s, 1080x1920, 30fps, H.264 + AAC stereo 44.1kHz, about -16 LUFS).
The original silent MP4 is kept as it was.

- `narration.mp3` – the woman's voice (text-to-speech), unchanged and not sped up.
- `config-narrated.js` – same words as `config.js`; only the scene TIMES differ so every line appears as it is spoken. Change words in `config.js` and mirror the edit here.
- `timing.json` – the map: each spoken phrase with its start/end second, the scene it belongs to, and the video length (narration + ~1.5s of end card).
- `index-narrated.html` – the video layout used for the narrated version.
- `build-narrated.sh` – renders the scenes, then lays the voice over them (loudness -16 LUFS, 0.2s fade-in, 0.5s fade-out).
The silent version's $175-vs-$95 comparison scene has no narration and no gap to fit in, so the narrated version leaves it out (the silent MP4 keeps it).

To re-render (Node 22+, FFmpeg, after `npm install`):

```
npm run render:narrated    # makes out/wilmington-gate-fees-narrated.mp4
```

## End card logo

The end card shows the real Ship2Shore logo (`logo.png`, copied from `../_shared/logo.png`) on a solid white circle, fading in with the end card. The logo already contains the name, so the separate SHIP2SHORE wordmark text was removed (`brandName` is no longer in the config files). To swap the logo, replace `logo.png` here and in `_shared/`, then re-render.
