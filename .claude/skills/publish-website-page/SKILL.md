---
name: publish-website-page
description: Rules and steps for adding or changing a page on ship2shorebooking.com (static HTML, Netlify site "ship2shore"). Use for any new page, rewrite, link change or visual change. Never merges without Shawn saying "merge".
---

# Publish a website page

Shawn owns the business and decides what goes live. If he only described something, ask before building it. **Never merge a PR until he says "merge N".**

## Facts to reuse (copy from existing pages, never invent)
- Prices: TWIC escort **$95** per vehicle, military / PCS **$80**, hotshot port service **from $200**, heavy equipment **$325**. No hidden fees.
- Notice: **24 hours** for Long Beach and Wilmington; Matson pickups run on a booking number we get from Matson.
- Days: Wilmington open Mon, Tue, Thu, Fri (closed Wednesdays); Long Beach and Matson Terminal (Long Beach) Mon-Fri; all closed weekends.
- Name: "Matson Terminal (Long Beach)". Phone (310) 748-0040. Booking: https://dispatch.ship2shorebooking.com/book
- **List ports in this order: Wilmington, Long Beach, Matson** (Wilmington is where most jobs come from).
- Do not invent numbers, reviews, awards, photos, logos, transit times or carrier prices.

## Hard rules
- **Keep wording, headings, titles and URLs** unless Shawn asks to change them (the home page ranks about 4.9).
- **Long hauls and Hawaii go to licensed carriers (Val E, Paul).** Write "we connect you with a licensed carrier; the carrier sets its own price and operates under its own authority." Never quote carrier prices, take a cut, or say Ship2Shore ships the car.
- **No DOT, MC or MCP number on the site** unless Shawn asks for one.
- Deliveries Shawn hauls himself: "priced before you book", no starting price unless he gives one.
- Leave `card.html` and `ship2shore-invoice.html` alone unless asked.

## Build
1. `git checkout main && git pull`, then a new branch.
2. Copy the structure of a recent page (`military-vehicle-shipping/index.html`): title 60 characters or fewer, description 160 or fewer, one H1, short sections, steps, a prices block, a FAQ, a call and a book button, the "Before you book" callout.
3. The visible FAQ text and the FAQPage JSON-LD must be the same strings. Add Service and BreadcrumbList JSON-LD. All JSON-LD must parse.
4. Add the page to `sitemap.xml` and link it from the home page footer and one related page.
5. Colours come from the existing CSS variables; body and label text must stay readable (about 4.5:1); no sideways scroll at 390 px.

## Check
1. Render at 390 px and 1280 px (Playwright if available) and confirm no sideways scroll, no script errors, one H1.
2. For any change to an existing page, run `python3 .claude/skills/publish-website-page/check_text_unchanged.py <copy-of-before> . ` (add `--allow-reorder` if sections moved). It must show only the differences you meant.

## PR
Open a PR with: why (search numbers if relevant), what changed, checks, and "after merging". Do not merge.

## After Shawn merges
1. Search Console: pick the right site in the top-left dropdown (ship2shorebooking.com or ship2shorelogistics.com, they are separate), paste one full address into URL inspection, click **Request indexing**. About 10 requests a day per site; "Quota exceeded" means stop and continue tomorrow.
2. Do not request the same page twice. The sitemap covers the rest.
3. Check indexing again in about a week (OpenSEO `inspect_urls`), clicks per page after 2-4 weeks.
