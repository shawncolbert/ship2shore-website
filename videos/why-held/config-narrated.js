/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 30.3,
  "scenes": [
    {
      "start": 0,
      "end": 2.83,
      "items": [
        {
          "kind": "hook",
          "text": "Vehicle not released at the port?",
          "at": 0.32,
          "size": 112,
          "yellow": true
        }
      ]
    },
    {
      "start": 2.83,
      "end": 15.95,
      "keep": true,
      "items": [
        {
          "kind": "big",
          "text": "Four things hold up most vehicles.",
          "at": 2.83,
          "size": 76
        },
        {
          "kind": "list",
          "text": "The steamship line hasn't been paid.",
          "at": 5.29
        },
        {
          "kind": "list",
          "text": "The port's roll-on, roll-off (RoRo) charge hasn't been paid.",
          "at": 7.64
        },
        {
          "kind": "list",
          "text": "Customs hasn't cleared the vehicle.",
          "at": 10.64
        },
        {
          "kind": "list",
          "text": "The original Bill of Lading hasn't been surrendered.",
          "at": 12.72
        }
      ]
    },
    {
      "start": 15.95,
      "end": 20.82,
      "items": [
        {
          "kind": "body",
          "text": "We contact the port, find out which one it is, and tell you exactly what's needed.",
          "at": 15.95,
          "size": 64
        }
      ]
    }
  ],
  "end": {
    "start": 20.82,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "tagline": "We handle the port side. You don't have to.",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 20.84,
      "brand": 20.88,
      "tagline": 20.87,
      "call": 23.34,
      "web": 26.92
    }
  },
  "finePrintFrom": 2.83,
  "finePrint": "Release decisions are made by the steamship line, customs and the port."
};
