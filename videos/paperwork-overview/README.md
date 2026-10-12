# paperwork-overview video

A 47-second vertical video (1080x1920, silent, on-screen text only) called
"The 4 documents for your pickup". It shows four SAMPLE paperwork cards (Arrival
Notice, Bill of Lading, Delivery Order, Gate Pass), zooms in on the part being explained
and outlines it in yellow. Built with [HyperFrames](https://github.com/heygen-com/hyperframes).
It is a standalone video project, NOT part of the website, and must never be merged.

**Finished video:** `out/paperwork-overview.mp4`
Preview pictures: `out/still-1-hook.png`, `still-2-arrival-notice.png`, `still-3-surrendered-stamp.png`.

## Change the words

Open **`config.js`**. Everything on screen is there in plain text, in the order it appears.

- Edit only the text between the quotation marks. Keep the quotes and commas.
- `start` / `end` = seconds a scene is on screen. `at` = the second a line appears.
- The captions under each card are the `captions` lines; the small gray fine print is `finePrint`.
- The words printed ON the sample cards are in the `cards` section at the bottom.
  Everything there is invented (SAMPLE / JANE DOE / 0000). Never type real names, numbers or
  addresses into it.

## Re-render

Needs Node 22+ and FFmpeg. In a terminal, from this folder:

```
npm install
npm run render    # makes out/paperwork-overview.mp4 (about 1 minute)
```

Fonts and the animation library are included in this folder.

## Narrated version (voice + scenes in sync)

**Finished video:** `out/paperwork-overview-narrated.mp4` (62.33s, 1080x1920, 30fps, H.264 + AAC stereo 44.1kHz, about -16 LUFS).
The original silent MP4 is kept as it was.

- `narration.mp3` – the woman's voice (text-to-speech), unchanged and not sped up.
- `config-narrated.js` – same words as `config.js`; only the scene TIMES differ so every line appears as it is spoken. Change words in `config.js` and mirror the edit here.
- `timing.json` – the map: each spoken phrase with its start/end second, the scene it belongs to, and the video length (narration + ~1.5s of end card).
- `index-narrated.html` – the video layout used for the narrated version.
- `build-narrated.sh` – renders the scenes, then lays the voice over them (loudness -16 LUFS, 0.2s fade-in, 0.5s fade-out).

To re-render (Node 22+, FFmpeg, after `npm install`):

```
npm run render:narrated    # makes out/paperwork-overview-narrated.mp4
```
