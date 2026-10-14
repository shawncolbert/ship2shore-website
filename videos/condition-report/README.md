# condition-report video

A 26.8-second narrated vertical video (1080x1920, 30fps) built with
[HyperFrames](https://github.com/heygen-com/hyperframes). It is a standalone video
project, NOT part of the website, and must never be merged into `main`.

**Finished video:** `out/condition-report-narrated.mp4` (H.264 + AAC stereo 44.1kHz, about -16 LUFS, under 3 MB).
Preview pictures: `out/still-1-start.png`, `still-2-middle.png`, `still-3-end.png`.

## What it shows
1. "Picking up at the port?"
2. "Your vehicle's condition, documented."
3. "At pickup, we take four photos and one walkaround video." with four plain photo tiles (PHOTO 1 to PHOTO 4) and a WALKAROUND VIDEO tile (simple drawings only, no real photos).
4. "A condition report, signed at handoff."
5. "It's yours to keep."
6. End card: brand mark, "We handle the port side. You don't have to.", "Call or text (310) 748-0040", "ship2shorebooking.com".

Small fine print from scene 2 on: "The condition report, photos and video are provided for the customer's information."

## Files
- `narration.mp3` – the voice, unchanged and not sped up.
- `timing.json` – each spoken phrase with its start/end second and the scene shown.
- `config.js` / `config-narrated.js` – every word on screen in plain text. The narrated file holds the voice-matched times; if you change words, change both.
- `index-narrated.html` – the layout. `build-narrated.sh` – renders the scenes, then adds the voice (-16 LUFS, 0.2s fade-in, 0.5s fade-out).

## Re-render
Needs Node 22+ and FFmpeg. From this folder:

```
npm install
npm run render:narrated
```

## End card logo

The end card shows the real Ship2Shore logo (`logo.png`, copied from `../_shared/logo.png`) on a solid white circle, fading in with the end card. The logo already contains the name, so the separate SHIP2SHORE wordmark text was removed (`brandName` is no longer in the config files). To swap the logo, replace `logo.png` here and in `_shared/`, then re-render.
