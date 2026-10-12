/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 62.33,
  "scenes": [
    {
      "type": "text",
      "start": 0,
      "end": 3.45,
      "items": [
        {
          "kind": "label",
          "text": "The 4 documents for your pickup",
          "at": 0.15
        },
        {
          "kind": "hook",
          "text": "Getting a vehicle out of the port",
          "at": 0.28,
          "size": 92
        },
        {
          "kind": "hook",
          "text": "starts with paperwork.",
          "at": 1.7,
          "size": 92,
          "yellow": true
        }
      ]
    },
    {
      "type": "doc",
      "start": 3.45,
      "end": 13.52,
      "card": "arrival",
      "label": "1 · ARRIVAL NOTICE",
      "captions": [
        {
          "text": "Tells you the vessel, the date, and what you owe.",
          "at": 5.74
        },
        {
          "text": "It also says whether the original Bill of Lading is needed.",
          "at": 9.65
        }
      ],
      "zoomAt": 9.35
    },
    {
      "type": "doc",
      "start": 13.52,
      "end": 21.4,
      "card": "bol",
      "label": "2 · BILL OF LADING",
      "captions": [
        {
          "text": "A stamp like this means the original was surrendered overseas.",
          "at": 16.38
        }
      ],
      "zoomAt": 16.38
    },
    {
      "type": "doc",
      "start": 21.4,
      "end": 31.2,
      "card": "order",
      "label": "3 · DELIVERY ORDER",
      "captions": [
        {
          "text": "It should name Ship2Shore Booking in the 'Local Delivery or Transfer By' box.",
          "at": 23.96
        }
      ],
      "zoomAt": 24.56
    },
    {
      "type": "doc",
      "start": 31.2,
      "end": 40.34,
      "card": "gate",
      "label": "4 · GATE PASS",
      "captions": [
        {
          "text": "Once everything is cleared, the terminal issues a gate pass with your driver's name and time window.",
          "at": 33.8
        }
      ],
      "zoomAt": 35.6
    },
    {
      "type": "text",
      "start": 40.34,
      "end": 53.39,
      "items": [
        {
          "kind": "body",
          "text": "Most holds come down to four things: steamship line charges, RoRo charges, customs clearance, or the original Bill of Lading.",
          "at": 40.34,
          "size": 62
        },
        {
          "kind": "body",
          "text": "We find out which one and tell you what to do.",
          "at": 50.28,
          "size": 62,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 53.39,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 53.41,
      "brand": 53.47,
      "call": 53.53,
      "web": 58.5
    }
  },
  "sampleBadge": "SAMPLE",
  "sampleStrip": "SAMPLE - NOT A REAL DOCUMENT",
  "finePrintFrom": 3.45,
  "finePrint": "Sample documents for illustration. Release decisions are made by the steamship line, customs and the port.",
  "cards": {
    "arrival": {
      "title": "ARRIVAL NOTICE",
      "invoice": "INVOICE NO. SAMPLE-000",
      "agent": "SAMPLE STEAMSHIP AGENT",
      "banner": "ENDORSED ORIGINAL BILL OF LADING REQUIRED FOR RELEASE UNLESS SURRENDERED AT THE OVERSEAS LOADING PORT OR A WAYBILL WAS ISSUED",
      "bar": "PLEASE HAVE CUSTOMS CLEARANCE COMPLETED BEFORE YOU PICK UP YOUR CARGO",
      "fields": [
        [
          "SHIPPER",
          "SAMPLE SHIPPER CO., LTD."
        ],
        [
          "CONSIGNEE",
          "JANE DOE"
        ],
        [
          "NOTIFY PARTY",
          "SAME AS CONSIGNEE"
        ],
        [
          "TERMINAL",
          "SAMPLE TERMINAL"
        ],
        [
          "VESSEL",
          "SAMPLE VESSEL"
        ],
        [
          "VOYAGE",
          "0000A"
        ],
        [
          "LOADING PORT",
          "SAMPLE PORT, JAPAN"
        ],
        [
          "DISCHARGE PORT",
          "LOS ANGELES, CA, USA"
        ],
        [
          "DATE OF ARRIVAL",
          "JAN 1, 2026"
        ],
        [
          "",
          ""
        ]
      ],
      "tableHead": [
        "B/L",
        "QTY",
        "WEIGHT",
        "COMMODITY",
        "DESCRIPTION",
        "CHASSIS/VIN"
      ],
      "tableRow": [
        "000000000",
        "1",
        "0 KGS",
        "Used Vehicle(s)",
        "SAMPLE VEHICLE",
        "SAMPLE-0000000"
      ],
      "total": "TOTAL CHARGES DUE: $0.00"
    },
    "bol": {
      "carrier": "SAMPLE CARRIER LINES, LTD.",
      "title": "BILL OF LADING",
      "fields": [
        [
          "BOOKING NO.",
          "000000000"
        ],
        [
          "B/L NO.",
          "SAMP00000000"
        ],
        [
          "SHIPPER",
          "SAMPLE SHIPPER CO., LTD."
        ],
        [
          "CONSIGNEE",
          "JANE DOE, 123 SAMPLE ST, ANYTOWN"
        ],
        [
          "OCEAN VESSEL",
          "SAMPLE VESSEL 0000A"
        ],
        [
          "PORT OF LOADING",
          "SAMPLE PORT, JAPAN"
        ],
        [
          "PORT OF DISCHARGE",
          "LOS ANGELES"
        ],
        [
          "",
          ""
        ]
      ],
      "goodsLabel": "DESCRIPTION OF GOODS",
      "goods": "1 UNIT USED VEHICLE, SAMPLE VEHICLE",
      "originals": "No. of originals: THREE",
      "void": "VOID",
      "stampTop": "SURRENDERED",
      "stampMid": "'26. 1. 1",
      "stampBottom": "SAMPLE PORT"
    },
    "order": {
      "title": "DELIVERY ORDER",
      "forwarder": "SAMPLE FORWARDER",
      "date": "1-Jan-26",
      "shipper": [
        "SHIPPER",
        "SAMPLE SHIPPER"
      ],
      "carrier": [
        "IMPORTING CARRIER",
        "SAMPLE VESSEL 0000A"
      ],
      "location": [
        "LOCATION",
        "SAMPLE TERMINAL"
      ],
      "bl": [
        "B/L OR AWB NO",
        "SAMP00000000"
      ],
      "local": [
        "LOCAL DELIVERY OR TRANSFER BY (DELIVERY ORDER ISSUED TO)",
        "SHIP2SHORE BOOKING"
      ],
      "deliverTo": [
        "FOR DELIVERY TO",
        "JANE DOE, 123 SAMPLE ST, ANYTOWN"
      ],
      "desc": "1 PC / SAMPLE VEHICLE / VIN #SAMPLE-0000000",
      "small": "THESE DELIVERY INSTRUCTIONS DO NOT CONSTITUTE RELEASE OF THE CARGO. PLEASE CHECK WITH THE PIER OR RELEASING STATION FOR CONFIRMATION OF RELEASE PRIOR TO PICK UP OF CARGO."
    },
    "gate": {
      "head": "SAMPLE TERMINAL",
      "top": [
        "Truck Inland Delivery 0000000-0",
        "Voyage: SAMPLE VESSEL v.0000A",
        "BL: 000000000",
        "Cargo: 1 SAMPLE VEHICLE"
      ],
      "highlight": [
        "Start: 1/1/2026 8:00 AM",
        "Finish: 1/1/2026 4:00 PM",
        "Driver: SAMPLE DRIVER"
      ]
    }
  }
};
