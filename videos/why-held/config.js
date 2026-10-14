/* ================================================================
   EDIT HERE. Every word on screen comes from this file.
   "at" = the second a line appears. "start"/"end" = when the scene is on screen.
   kinds: hook (huge caps), big (large caps), body (sentence), list (yellow square marker; stays on screen).
   Add yellow: true to make a line yellow. Keep the quotation marks and commas.
   After editing, re-render (see README.md).
   ================================================================ */
window.VIDEO_CONFIG = {
  duration: 38,
  scenes: [
    { start: 0, end: 4, items: [
      { kind: "hook", text: "Vehicle not released at the port?", at: 0.2, size: 112, yellow: true }
    ]},
    { start: 4, end: 29, keep: true, items: [
      { kind: "big", text: "Four things hold up most vehicles.", at: 4.2, size: 76 },
      { kind: "list", text: "The steamship line hasn't been paid.", at: 8.2 },
      { kind: "list", text: "The port's roll-on, roll-off (RoRo) charge hasn't been paid.", at: 13.2 },
      { kind: "list", text: "Customs hasn't cleared the vehicle.", at: 19.2 },
      { kind: "list", text: "The original Bill of Lading hasn't been surrendered.", at: 24.2 }
    ]},
    { start: 29, end: 35, items: [
      { kind: "body", text: "We contact the port, find out which one it is, and tell you exactly what's needed.", at: 29.3, size: 64 }
    ]}
  ],
  end: {
    start: 35,
\1\2: "Call or text (310) 748-0040",\n\1tagline: "We handle the port side. You don\'t have to.",\n    website: "ship2shorebooking.com"
  },
  finePrintFrom: 4,
  finePrint: "Release decisions are made by the steamship line, customs and the port."
};
