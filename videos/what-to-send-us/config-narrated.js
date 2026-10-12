/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 35.55,
  "scenes": [
    {
      "start": 0,
      "end": 3.21,
      "items": [
        {
          "kind": "hook",
          "text": "Need a port pickup?",
          "at": 0.29
        },
        {
          "kind": "hook",
          "text": "Send us 4 things.",
          "at": 1.62,
          "yellow": true
        }
      ]
    },
    {
      "start": 3.21,
      "end": 10.69,
      "items": [
        {
          "kind": "num",
          "text": "1. Delivery Order",
          "at": 3.21
        },
        {
          "kind": "num",
          "text": "2. Vessel name",
          "at": 4.93
        },
        {
          "kind": "num",
          "text": "3. Bill of Lading number",
          "at": 6.75
        },
        {
          "kind": "num",
          "text": "4. VIN",
          "at": 8.9
        }
      ]
    },
    {
      "start": 10.69,
      "end": 16.52,
      "items": [
        {
          "kind": "body",
          "text": "Your Delivery Order must name Ship2Shore Booking",
          "at": 10.69,
          "size": 62
        },
        {
          "kind": "body",
          "text": "in the 'Local Delivery or Transfer By' box.",
          "at": 13.27,
          "size": 62,
          "yellow": true
        }
      ]
    },
    {
      "start": 16.52,
      "end": 23.41,
      "items": [
        {
          "kind": "body",
          "text": "We verify payments and customs.",
          "at": 16.52,
          "size": 62
        },
        {
          "kind": "body",
          "text": "24 hours' notice. Wilmington is closed Wednesdays.",
          "at": 18.66,
          "size": 62,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 23.41,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "tagline": "We handle the port side. You don't have to.",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 23.43,
      "brand": 23.47,
      "tagline": 23.46,
      "call": 26.24,
      "web": 31.59
    }
  },
  "finePrintFrom": 3.21,
  "finePrint": "Pickup days: Long Beach and Matson Mon–Fri; Wilmington Mon, Tue, Thu, Fri. Closed weekends. Release is up to the steamship line, customs and the port."
};
