/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 28.88,
  "scenes": [
    {
      "start": 0,
      "end": 3.38,
      "items": [
        {
          "kind": "hook",
          "text": "Vehicle stuck at the port?",
          "at": 0.29
        },
        {
          "kind": "hook",
          "text": "No TWIC card?",
          "at": 1.88,
          "yellow": true
        }
      ]
    },
    {
      "start": 3.38,
      "end": 4.91,
      "items": [
        {
          "kind": "big",
          "text": "You never need a TWIC card.",
          "at": 3.38,
          "size": 120
        }
      ]
    },
    {
      "start": 4.91,
      "end": 9.97,
      "items": [
        {
          "kind": "body",
          "text": "You don't go inside the port.",
          "at": 4.91,
          "size": 66
        },
        {
          "kind": "body",
          "text": "A TWIC-credentialed Ship2Shore escort goes in for you.",
          "at": 6.51,
          "size": 66,
          "yellow": true
        }
      ]
    },
    {
      "start": 9.97,
      "end": 15.29,
      "items": [
        {
          "kind": "step",
          "text": "Locates your vehicle",
          "at": 9.97
        },
        {
          "kind": "step",
          "text": "Brings it to the gate",
          "at": 11.08
        },
        {
          "kind": "step",
          "text": "Condition report with photos, signed at handoff",
          "at": 12.26
        }
      ]
    },
    {
      "start": 15.29,
      "end": 17.55,
      "items": [
        {
          "kind": "price",
          "text": "Port escort from",
          "price": "$95",
          "at": 15.29
        }
      ]
    }
  ],
  "end": {
    "start": 17.55,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "tagline": "We handle the port side. You don't have to.",
    "website": "ship2shorebooking.com",
    "extraLine": "Long Beach · Wilmington · Matson",
    "times": {
      "mark": 17.57,
      "brand": 17.61,
      "tagline": 19.75,
      "call": 21.96,
      "web": 25.53,
      "ports": 17.6
    }
  },
  "finePrintFrom": 3.38,
  "finePrint": "Release is up to the steamship line, customs and the port. We check first and never promise a vehicle will be released."
};
