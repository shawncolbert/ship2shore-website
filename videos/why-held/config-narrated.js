/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 28.47,
  "scenes": [
    {
      "start": 0,
      "end": 3.07,
      "items": [
        {
          "kind": "hook",
          "text": "Vehicle not released at the port?",
          "at": 0.29,
          "size": 112,
          "yellow": true
        }
      ]
    },
    {
      "start": 3.07,
      "end": 15.01,
      "keep": true,
      "items": [
        {
          "kind": "big",
          "text": "Four things hold up most vehicles.",
          "at": 3.07,
          "size": 76
        },
        {
          "kind": "list",
          "text": "The steamship line hasn't been paid.",
          "at": 5.39
        },
        {
          "kind": "list",
          "text": "The port's roll-on, roll-off (RoRo) charge hasn't been paid.",
          "at": 7.33
        },
        {
          "kind": "list",
          "text": "Customs hasn't cleared the vehicle.",
          "at": 10.23
        },
        {
          "kind": "list",
          "text": "The original Bill of Lading hasn't been surrendered.",
          "at": 12.07
        }
      ]
    },
    {
      "start": 15.01,
      "end": 19.91,
      "items": [
        {
          "kind": "body",
          "text": "We contact the port, find out which one it is, and tell you exactly what's needed.",
          "at": 15.01,
          "size": 64
        }
      ]
    }
  ],
  "end": {
    "start": 19.91,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 19.93,
      "brand": 19.99,
      "call": 20.05,
      "web": 24.51
    }
  },
  "finePrintFrom": 3.07,
  "finePrint": "Release decisions are made by the steamship line, customs and the port."
};
