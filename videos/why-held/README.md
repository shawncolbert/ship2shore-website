# why-held video

A 38-second vertical video (1080x1920, silent, on-screen text only) explaining the four
common reasons a vehicle is not released at the port. Built with
[HyperFrames](https://github.com/heygen-com/hyperframes). It is a standalone video
project, NOT part of the website, and must never be merged into `main`.

**Finished video:** `out/why-held.mp4`
Preview pictures: `out/still-1-hook.png`, `still-2-list.png`, `still-3-end.png`.

## Change the words

Open **`config.js`**. Every word on screen is there in plain text, in the order it appears.

- Edit only the text between the quotation marks. Keep the quotes and commas.
- `at` is the second a line appears; `start`/`end` is when its screen is shown.
- The four reasons are the `list` lines (yellow square markers); they stay on screen once shown.
- The small gray fine print at the bottom is `finePrint` in the same file.

## Re-render

Needs Node 22+ and FFmpeg. In a terminal, from this folder:

```
npm install
npm run render    # makes out/why-held.mp4 (about 1 minute)
```

Fonts and the animation library are included in this folder.
