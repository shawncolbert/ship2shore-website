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
      { kind: "hook", text: "Vehicle stuck at the port?", at: 0.2 },
      { kind: "hook", text: "No TWIC card?", at: 1.9, yellow: true }
    ]},
    { start: 4, end: 9, items: [
      { kind: "big", text: "You never need a TWIC card.", at: 4.2, size: 120 }
    ]},
    { start: 9, end: 15, items: [
      { kind: "body", text: "You don't go inside the port.", at: 9.2, size: 66 },
      { kind: "body", text: "A TWIC-credentialed Ship2Shore escort goes in for you.", at: 11.4, size: 66, yellow: true }
    ]},
    { start: 15, end: 22, items: [
      { kind: "step", text: "Locates your vehicle", at: 15.3 },
      { kind: "step", text: "Brings it to the gate", at: 17.3 },
      { kind: "step", text: "Condition report with photos, signed at handoff", at: 19.3 }
    ]},
    { start: 22, end: 26, items: [
      { kind: "price", text: "Port escort from", price: "$95", at: 22.2 }
    ]}
  ],
  end: {
    start: 26,
    brandName: "SHIP2SHORE",
\1\2: "Call or text (310) 748-0040",\n\1tagline: "We handle the port side. You don\'t have to.",\n    website: "ship2shorebooking.com",
    extraLine: "Long Beach · Wilmington · Matson"
  },
  finePrintFrom: 4,
  finePrint: "Release is up to the steamship line, customs and the port. We check first and never promise a vehicle will be released."
};
