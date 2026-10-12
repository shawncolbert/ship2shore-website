/* ================================================================
   NARRATED VERSION. Same words and prices as config.js; only the TIMES differ
   (the "timing" block at the bottom), so each scene lines up with the voice in
   narration.mp3. timing.json lists the spoken phrase behind every time.
   The silent "$175 vs $95" comparison scene has no narration and does not fit
   between the spoken sentences, so it is left out of the narrated version only.
   Render with:  npm run render:narrated
   ================================================================ */
window.VIDEO_CONFIG = {
  // Scene 1: opening hook
  hookLine1: "Picking up a vehicle at Wilmington?",
  hookLine2: "Check the gate fees first.",

  // Scene 2: fees posted at the terminal gate
  gateLabel: "POSTED AT THE WILMINGTON TERMINAL GATE (JULY 2026)",
  gateFees: [
    { text: "Terminal access without a TWIC:", price: 100 },
    { text: "Jump start:", price: 50 },
    { text: "Gas, 2 gallons:", price: 25 }
  ],

  // Scene 3: Ship2Shore
  ourLabel: "WITH SHIP2SHORE",
  ourText: "TWIC escort:",
  ourPrice: 95,
  ourLine1: "Jump start, air and gas included if your vehicle needs them.",
  ourLine2: "You never go inside the port. Our TWIC-credentialed escort goes in for you.",

  // Scene 4: comparison
  compareCaption: "Typical Wilmington pickup",

  // Scene 5: end card
  brandName: "SHIP2SHORE",
  callLine: "Call or text (310) 748-0040",
  website: "ship2shorebooking.com",

  // Shown on screen from scene 2 to the end
  finePrint:
    "Prices as posted at the Wilmington terminal gate in July 2026; they can change. Ship2Shore Booking is not affiliated with any terminal.",

  // ---- narrated timing (seconds on the video timeline) ----
  timing: {
    duration: 38.4,
    s1: { start: 0, end: 4.2, hook1: 0.26, hook2: 2.18 },
    s2: { start: 4.2, end: 18.14, label: 4.2, rule: 4.35,
          fees: [ { row: 8.08, price: 10.1 }, { row: 11.5, price: 12.3 }, { row: 13.3, price: 14.65 } ],
          totalBox: 16.0, totalCount: 16.2, totalPulse: 17.0 },
    s3: { start: 18.14, end: 29.7, label: 18.14, rule: 18.3, card: 18.97, price: 20.0, line1: 21.0, line2: 24.54 },
    s5: { start: 29.7, mark: 29.72, brand: 29.76, call: 29.8, web: 34.59 },
    finePrintFrom: 4.2
  }
};
