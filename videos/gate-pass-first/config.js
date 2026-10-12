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
      { kind: "hook", text: "Showing up at the Wilmington gate?", at: 0.2, size: 112 },
      { kind: "hook", text: "Get the gate pass first.", at: 1.9, yellow: true, size: 112 }
    ]},
    { start: 4, end: 10, items: [
      { kind: "body", text: "In our experience, you need a gate pass issued before you arrive.", at: 4.2, size: 62 },
      { kind: "body", text: "Without one, you won't be admitted.", at: 7.2, size: 62, yellow: true }
    ]},
    { start: 10, end: 17, items: [
      { kind: "body", text: "Before anything is scheduled, we check:", at: 10.2, size: 62 },
      { kind: "check", text: "Steamship line payments are paid", at: 12.4 },
      { kind: "check", text: "Customs has cleared the vehicle", at: 14.6 }
    ]},
    { start: 17, end: 22, items: [
      { kind: "body", text: "Once verified and cleared, we request the gate pass with your Delivery Order.", at: 17.2, size: 62 }
    ]},
    { start: 22, end: 26, items: [
      { kind: "body", text: "Pickup day: our TWIC-credentialed escort goes in and brings your vehicle to the gate.", at: 22.2, size: 60, yellow: true }
    ]}
  ],
  end: {
    start: 26,
    brandName: "SHIP2SHORE",
\1\2: "Call or text (310) 748-0040",\n\1tagline: "We handle the port side. You don\'t have to.",\n    website: "ship2shorebooking.com"
  },
  finePrintFrom: 4,
  finePrint: "Release is always up to the steamship line, customs and the port. We never promise a vehicle will be released."
};
