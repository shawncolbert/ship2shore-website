/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 45.18,
  "scenes": [
    {
      "start": 0,
      "end": 4.74,
      "items": [
        {
          "kind": "hook",
          "text": "Showing up at the Wilmington gate?",
          "at": 0.21,
          "size": 112
        },
        {
          "kind": "hook",
          "text": "Get the gate pass first.",
          "at": 2.45,
          "yellow": true,
          "size": 112
        }
      ]
    },
    {
      "start": 4.74,
      "end": 12.21,
      "items": [
        {
          "kind": "body",
          "text": "In our experience, you need a gate pass issued before you arrive.",
          "at": 4.74,
          "size": 62
        },
        {
          "kind": "body",
          "text": "Without one, you won't be admitted.",
          "at": 9.09,
          "size": 62,
          "yellow": true
        }
      ]
    },
    {
      "start": 12.21,
      "end": 20.65,
      "items": [
        {
          "kind": "body",
          "text": "Before anything is scheduled, we check:",
          "at": 12.21,
          "size": 62
        },
        {
          "kind": "check",
          "text": "Steamship line payments are paid",
          "at": 15.23
        },
        {
          "kind": "check",
          "text": "Customs has cleared the vehicle",
          "at": 17.81
        }
      ]
    },
    {
      "start": 20.65,
      "end": 25.71,
      "items": [
        {
          "kind": "body",
          "text": "Once verified and cleared, we request the gate pass with your Delivery Order.",
          "at": 20.65,
          "size": 62
        }
      ]
    },
    {
      "start": 25.71,
      "end": 32.35,
      "items": [
        {
          "kind": "body",
          "text": "Pickup day: our TWIC-credentialed escort goes in and brings your vehicle to the gate.",
          "at": 25.71,
          "size": 60,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 32.35,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "tagline": "We handle the port side. You don't have to.",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 32.37,
      "brand": 32.41,
      "tagline": 32.4,
      "call": 35.65,
      "web": 41.23
    }
  },
  "finePrintFrom": 4.74,
  "finePrint": "Release is always up to the steamship line, customs and the port. We never promise a vehicle will be released."
};
