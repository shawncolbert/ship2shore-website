/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 32.33,
  "scenes": [
    {
      "start": 0,
      "end": 3.8,
      "items": [
        {
          "kind": "hook",
          "text": "Vehicle stuck at the port?",
          "at": 0.22
        },
        {
          "kind": "hook",
          "text": "No TWIC card?",
          "at": 2.08,
          "yellow": true
        }
      ]
    },
    {
      "start": 3.8,
      "end": 5.66,
      "items": [
        {
          "kind": "big",
          "text": "You never need a TWIC card.",
          "at": 3.8,
          "size": 120
        }
      ]
    },
    {
      "start": 5.66,
      "end": 11.76,
      "items": [
        {
          "kind": "body",
          "text": "You don't go inside the port.",
          "at": 5.66,
          "size": 66
        },
        {
          "kind": "body",
          "text": "A TWIC-credentialed Ship2Shore escort goes in for you.",
          "at": 7.5,
          "size": 66,
          "yellow": true
        }
      ]
    },
    {
      "start": 11.76,
      "end": 18.76,
      "items": [
        {
          "kind": "step",
          "text": "Locates your vehicle",
          "at": 11.76
        },
        {
          "kind": "step",
          "text": "Brings it to the gate",
          "at": 13.48
        },
        {
          "kind": "step",
          "text": "Condition report with photos, signed at handoff",
          "at": 15.1
        }
      ]
    },
    {
      "start": 18.76,
      "end": 21.46,
      "items": [
        {
          "kind": "price",
          "text": "Port escort from",
          "price": "$95",
          "at": 18.76
        }
      ]
    }
  ],
  "end": {
    "start": 21.46,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "website": "ship2shorebooking.com",
    "extraLine": "Long Beach · Wilmington · Matson",
    "times": {
      "mark": 21.48,
      "brand": 21.54,
      "call": 23.94,
      "web": 28.94,
      "ports": 21.51
    }
  },
  "finePrintFrom": 3.8,
  "finePrint": "Release is up to the steamship line, customs and the port. We check first and never promise a vehicle will be released."
};
