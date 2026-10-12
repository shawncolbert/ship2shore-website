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
  tagline: "We handle the port side. You don't have to.",
  website: "ship2shorebooking.com",

  // Shown on screen from scene 2 to the end
  finePrint:
    "Prices as posted at the Wilmington terminal gate in July 2026; they can change. Ship2Shore Booking is not affiliated with any terminal.",

  // ---- narrated timing (seconds on the video timeline) ----
  timing: {
    duration: 36.01,
    s1: { start: 0, end: 3.5, hook1: 0.31, hook2: 1.96 },
    s2: { start: 3.5, end: 15.74, label: 3.5, rule: 3.65,
          fees: [ { row: 6.65, price: 8.45 }, { row: 9.55, price: 10.35 }, { row: 11.1, price: 12.55 } ],
          totalBox: 13.8, totalCount: 14.05, totalPulse: 14.85 },
    s3: { start: 15.74, end: 26.75, label: 15.74, rule: 15.9, card: 16.57, price: 17.8, line1: 19.1, line2: 22.5 },
    s5: { start: 26.75, mark: 26.77, brand: 26.81, tagline: 26.85, call: 29.1, web: 32.25 },
    finePrintFrom: 3.5
  }
};
