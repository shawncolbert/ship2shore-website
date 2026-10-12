/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 33.9,
  "scenes": [
    {
      "start": 0,
      "end": 3.56,
      "items": [
        {
          "kind": "hook",
          "text": "Need a port pickup?",
          "at": 0.28
        },
        {
          "kind": "hook",
          "text": "Send us 4 things.",
          "at": 1.7,
          "yellow": true
        }
      ]
    },
    {
      "start": 3.56,
      "end": 11.75,
      "items": [
        {
          "kind": "num",
          "text": "1. Delivery Order",
          "at": 3.56
        },
        {
          "kind": "num",
          "text": "2. Vessel name",
          "at": 5.42
        },
        {
          "kind": "num",
          "text": "3. Bill of Lading number",
          "at": 7.4
        },
        {
          "kind": "num",
          "text": "4. VIN",
          "at": 9.66
        }
      ]
    },
    {
      "start": 11.75,
      "end": 17.95,
      "items": [
        {
          "kind": "body",
          "text": "Your Delivery Order must name Ship2Shore Booking",
          "at": 11.75,
          "size": 62
        },
        {
          "kind": "body",
          "text": "in the 'Local Delivery or Transfer By' box.",
          "at": 14.72,
          "size": 62,
          "yellow": true
        }
      ]
    },
    {
      "start": 17.95,
      "end": 25.04,
      "items": [
        {
          "kind": "body",
          "text": "We verify payments and customs.",
          "at": 17.95,
          "size": 62
        },
        {
          "kind": "body",
          "text": "24 hours' notice. Wilmington is closed Wednesdays.",
          "at": 20.46,
          "size": 62,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 25.04,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 25.06,
      "brand": 25.12,
      "call": 25.18,
      "web": 30.18
    }
  },
  "finePrintFrom": 3.56,
  "finePrint": "Pickup days: Long Beach and Matson Mon–Fri; Wilmington Mon, Tue, Thu, Fri. Closed weekends. Release is up to the steamship line, customs and the port."
};
