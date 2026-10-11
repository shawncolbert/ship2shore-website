/* ================================================================
   EDIT HERE. Every word on screen comes from this file.
   "at" = the second the line appears. "start"/"end" = when the scene is on screen.
   kinds: hook (huge caps), big (large caps), body (sentence), step (numbered box),
          num (list box), check (box with a check mark), price (big price).
   Add yellow: true to make a line yellow. Keep the quotation marks and commas.
   After editing, re-render (see README.md).
   ================================================================ */
window.VIDEO_CONFIG = {
  duration: 30,
  scenes: [
    { start: 0, end: 4, items: [
      { kind: "hook", text: "Need a port pickup?", at: 0.2 },
      { kind: "hook", text: "Send us 4 things.", at: 1.9, yellow: true }
    ]},
    { start: 4, end: 14, items: [
      { kind: "num", text: "1. Delivery Order", at: 4.3 },
      { kind: "num", text: "2. Vessel name", at: 6.8 },
      { kind: "num", text: "3. Bill of Lading number", at: 9.3 },
      { kind: "num", text: "4. VIN", at: 11.8 }
    ]},
    { start: 14, end: 21, items: [
      { kind: "body", text: "Your Delivery Order must name Ship2Shore Booking", at: 14.2, size: 62 },
      { kind: "body", text: "in the 'Local Delivery or Transfer By' box.", at: 16.8, size: 62, yellow: true }
    ]},
    { start: 21, end: 26, items: [
      { kind: "body", text: "We verify payments and customs.", at: 21.2, size: 62 },
      { kind: "body", text: "24 hours' notice. Wilmington is closed Wednesdays.", at: 23.2, size: 62, yellow: true }
    ]}
  ],
  end: {
    start: 26,
    brandName: "SHIP2SHORE",
    callLine: "Call or text (310) 748-0040",
    website: "ship2shorebooking.com"
  },
  finePrintFrom: 4,
  finePrint: "Pickup days: Long Beach and Matson Mon–Fri; Wilmington Mon, Tue, Thu, Fri. Closed weekends. Release is up to the steamship line, customs and the port."
};
