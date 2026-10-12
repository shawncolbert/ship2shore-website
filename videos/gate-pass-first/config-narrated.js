/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 35.2,
  "scenes": [
    {
      "start": 0,
      "end": 4.2,
      "items": [
        {
          "kind": "hook",
          "text": "Showing up at the Wilmington gate?",
          "at": 0.14,
          "size": 112
        },
        {
          "kind": "hook",
          "text": "Get the gate pass first.",
          "at": 2.38,
          "yellow": true,
          "size": 112
        }
      ]
    },
    {
      "start": 4.2,
      "end": 10.62,
      "items": [
        {
          "kind": "body",
          "text": "In our experience, you need a gate pass issued before you arrive.",
          "at": 4.2,
          "size": 62
        },
        {
          "kind": "body",
          "text": "Without one, you won't be admitted.",
          "at": 7.92,
          "size": 62,
          "yellow": true
        }
      ]
    },
    {
      "start": 10.62,
      "end": 17.5,
      "items": [
        {
          "kind": "body",
          "text": "Before anything is scheduled, we check:",
          "at": 10.62,
          "size": 62
        },
        {
          "kind": "check",
          "text": "Steamship line payments are paid",
          "at": 12.97
        },
        {
          "kind": "check",
          "text": "Customs has cleared the vehicle",
          "at": 15.04
        }
      ]
    },
    {
      "start": 17.5,
      "end": 22.18,
      "items": [
        {
          "kind": "body",
          "text": "Once verified and cleared, we request the gate pass with your Delivery Order.",
          "at": 17.5,
          "size": 62
        }
      ]
    },
    {
      "start": 22.18,
      "end": 27.76,
      "items": [
        {
          "kind": "body",
          "text": "Pickup day: our TWIC-credentialed escort goes in and brings your vehicle to the gate.",
          "at": 22.18,
          "size": 60,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 27.76,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 27.78,
      "brand": 27.84,
      "call": 27.9,
      "web": 31.46
    }
  },
  "finePrintFrom": 4.2,
  "finePrint": "Release is always up to the steamship line, customs and the port. We never promise a vehicle will be released."
};
