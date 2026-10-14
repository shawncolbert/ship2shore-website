/* NARRATED VERSION. Same words as config.js; only the TIMES differ so each scene lines up with
   the voice in narration.mp3 (see timing.json). Render: npm run render:narrated */
window.VIDEO_CONFIG = {
  "duration": 26.79,
  "scenes": [
    {
      "start": 0,
      "end": 2.06,
      "items": [
        {
          "kind": "hook",
          "text": "Picking up at the port?",
          "at": 0.73
        }
      ]
    },
    {
      "start": 2.06,
      "end": 4.8,
      "items": [
        {
          "kind": "big",
          "text": "Your vehicle's condition, documented.",
          "at": 2.06,
          "size": 96
        }
      ]
    },
    {
      "start": 4.8,
      "end": 9.15,
      "items": [
        {
          "kind": "body",
          "text": "At pickup, we take four photos and one walkaround video.",
          "at": 4.8,
          "size": 56
        },
        {
          "kind": "photos",
          "at": 5.7,
          "tiles": [
            5.8,
            6.3,
            6.8,
            7.3
          ],
          "video": 7.95
        }
      ]
    },
    {
      "start": 9.15,
      "end": 12.22,
      "items": [
        {
          "kind": "big",
          "text": "A condition report, signed at handoff.",
          "at": 9.15,
          "size": 96
        }
      ]
    },
    {
      "start": 12.22,
      "end": 13.45,
      "items": [
        {
          "kind": "big",
          "text": "It's yours to keep.",
          "at": 12.22,
          "size": 110,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 13.45,
    "callLine": "Call or text (310) 748-0040",
    "tagline": "We handle the port side. You don't have to.",
    "website": "ship2shorebooking.com",
    "extraLine": "",
    "times": {
      "mark": 13.47,
      "brand": 13.55,
      "tagline": 13.65,
      "call": 16.6,
      "web": 21.08,
      "ports": 99
    }
  },
  "finePrintFrom": 2.06,
  "finePrint": "The condition report, photos and video are provided for the customer's information."
};
