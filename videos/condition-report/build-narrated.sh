#!/usr/bin/env bash
# Builds out/<folder>-narrated.mp4 = re-timed scenes (index-narrated.html + config-narrated.js)
# with narration.mp3 laid over them (loudness -16 LUFS, 0.2s fade-in, 0.5s fade-out, AAC 192k stereo 44.1kHz).
# Needs Node 22+, ffmpeg, and `npm install` once. Run from this folder:  npm run render:narrated
set -euo pipefail
cd "$(dirname "$0")"
NAME="$(basename "$PWD")"
DUR=$(node -p "require('./timing.json').videoSeconds")
DELAY_MS=$(node -p "Math.round(require('./timing.json').delaySeconds*1000)")
mkdir -p out
npx hyperframes render -c index-narrated.html -o out/.silent-timed.mp4
M=$(ffmpeg -hide_banner -i narration.mp3 -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null - 2>&1)
g() { echo "$M" | grep "\"$1\"" | sed -E 's/.*: "([^"]*)".*/\1/'; }
LN="loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=$(g input_i):measured_TP=$(g input_tp):measured_LRA=$(g input_lra):measured_thresh=$(g input_thresh):offset=$(g target_offset):linear=true"
AF="aformat=channel_layouts=stereo,${LN},aresample=44100,adelay=${DELAY_MS}|${DELAY_MS},afade=t=in:st=0:d=0.2,apad=whole_dur=${DUR},afade=t=out:st=$(node -p "(${DUR}-0.5).toFixed(3)"):d=0.5"
ffmpeg -y -hide_banner -loglevel error -i out/.silent-timed.mp4 -i narration.mp3 -filter_complex "[1:a]${AF}[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -ar 44100 -ac 2 -t "${DUR}" -movflags +faststart "out/${NAME}-narrated.mp4"
rm -f out/.silent-timed.mp4
echo "Wrote out/${NAME}-narrated.mp4"
