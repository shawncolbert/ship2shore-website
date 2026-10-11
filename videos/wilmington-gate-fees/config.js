/* ================================================================
   EDIT HERE. Every word and price in the video comes from this file.
   Change a price: edit the number only (no $ sign). The $175 total
   is added up automatically from the three gate fees.
   After editing, re-render (see README.md).
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
    "Prices as posted at the Wilmington terminal gate in July 2026; they can change. Ship2Shore Booking is not affiliated with any terminal."
};
