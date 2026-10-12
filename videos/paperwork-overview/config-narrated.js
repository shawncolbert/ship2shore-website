/* ================================================================
   NARRATED VERSION. Same words as config.js; only the TIMES differ, so each
   scene lines up with the voice in narration.mp3 (see timing.json for the
   spoken phrase behind every time). Do not change wording here; edit config.js
   for words and keep both files in sync.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  "duration": 56.0,
  "scenes": [
    {
      "type": "text",
      "start": 0,
      "end": 4.04,
      "items": [
        {
          "kind": "label",
          "text": "The 4 documents for your pickup",
          "at": 0.19
        },
        {
          "kind": "hook",
          "text": "Getting a vehicle out of the port",
          "at": 0.32,
          "size": 92
        },
        {
          "kind": "hook",
          "text": "starts with paperwork.",
          "at": 2.29,
          "size": 92,
          "yellow": true
        }
      ]
    },
    {
      "type": "doc",
      "start": 4.04,
      "end": 13.65,
      "card": "arrival",
      "label": "1 · ARRIVAL NOTICE",
      "captions": [
        {
          "text": "Tells you the vessel, the date, and what you owe.",
          "at": 5.8
        },
        {
          "text": "It also says whether the original Bill of Lading is needed.",
          "at": 9.23
        }
      ],
      "zoomAt": 8.93
    },
    {
      "type": "doc",
      "start": 13.65,
      "end": 19.32,
      "card": "bol",
      "label": "2 · BILL OF LADING",
      "captions": [
        {
          "text": "A stamp like this means the original was surrendered overseas.",
          "at": 15.68
        }
      ],
      "zoomAt": 15.68
    },
    {
      "type": "doc",
      "start": 19.32,
      "end": 26.43,
      "card": "order",
      "label": "3 · DELIVERY ORDER",
      "captions": [
        {
          "text": "It should name Ship2Shore Booking in the 'Local Delivery or Transfer By' box.",
          "at": 21.29
        }
      ],
      "zoomAt": 21.89
    },
    {
      "type": "doc",
      "start": 26.43,
      "end": 33.47,
      "card": "gate",
      "label": "4 · GATE PASS",
      "captions": [
        {
          "text": "Once everything is cleared, the terminal issues a gate pass with your driver's name and time window.",
          "at": 27.89
        }
      ],
      "zoomAt": 29.69
    },
    {
      "type": "text",
      "start": 33.47,
      "end": 45.98,
      "items": [
        {
          "kind": "body",
          "text": "Most holds come down to four things: steamship line charges, RoRo charges, customs clearance, or the original Bill of Lading.",
          "at": 33.47,
          "size": 62
        },
        {
          "kind": "body",
          "text": "We find out which one and tell you what to do.",
          "at": 43.2,
          "size": 62,
          "yellow": true
        }
      ]
    }
  ],
  "end": {
    "start": 45.98,
    "brandName": "SHIP2SHORE",
    "callLine": "Call or text (310) 748-0040",
    "tagline": "We handle the port side. You don't have to.",
    "website": "ship2shorebooking.com",
    "times": {
      "mark": 46.0,
      "brand": 46.04,
      "tagline": 46.03,
      "call": 48.35,
      "web": 52.32
    }
  },
  "sampleBadge": "SAMPLE",
  "sampleStrip": "SAMPLE - NOT A REAL DOCUMENT",
  "finePrintFrom": 4.04,
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
