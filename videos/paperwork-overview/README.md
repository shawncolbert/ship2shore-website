# paperwork-overview video

A 41-second vertical video (1080x1920, silent, on-screen text only) called
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
