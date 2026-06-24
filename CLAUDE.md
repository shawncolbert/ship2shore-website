# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-file static website for **Ship2Shore Booking** — a TWIC-credentialed port escort and vehicle pickup service operating at Port of Long Beach, Port of Wilmington (CA), and Port of Matson. Owner/operator is Shawn Colbert, phone (310) 748-0040, booking via Calendly at `calendly.com/ship2shore`.

There is no build system, no framework, no package manager, and no tests. The entire site is `index.html`.

## File Structure

```
index.html       — entire site: HTML, CSS (<style>), and JS (<script>) in one file
og-image.jpg     — Open Graph / social share image (1200×630)
robots.txt       — allows all crawlers, references sitemap
sitemap.xml      — six URLs: /, #rates, #ports, #process, #faq, #contact
```

## Developing and Previewing

Open `index.html` directly in a browser — no server required. For a local HTTP server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

There is no lint, build, or test command. The site deploys as-is to static hosting.

## Architecture Inside `index.html`

The file is organized in three blocks, each internally sectioned with `/* ====… */` comments:

### 1. `<head>` — SEO and Structured Data
- Primary SEO meta, Open Graph, Twitter Card, geo/mobile meta
- Three JSON-LD blocks: `LocalBusiness`, `FAQPage`, `BreadcrumbList`
- Google Fonts preconnect: **Oswald** (headings), **Source Sans 3** (body), **IBM Plex Mono** (labels/mono)

### 2. `<style>` — All CSS
Design tokens are defined in `:root` and used throughout:

| Token group | Key vars |
|---|---|
| Background | `--steel-dark`, `--steel`, `--steel-raised` |
| Borders | `--steel-line`, `--steel-line-soft` |
| Text | `--text`, `--text-dim`, `--text-faint` |
| Accent | `--yellow`, `--yellow-dim`, `--red`, `--red-bright`, `--green` |
| Paper (light surfaces) | `--paper`, `--paper-dim`, `--ink` |
| Layout | `--radius: 3px`, `--maxw: 1180px` |

Typography conventions:
- Headings (`h1`–`h4`): Oswald, weight 600
- Eyebrows/labels/mono values: IBM Plex Mono — use class `.mono` or `.eyebrow`
- Body: Source Sans 3

Responsive breakpoints: 980px, 880px, 860px, 780px, 720px, 560px, 520px. Most section grids collapse at 860px.

### 3. `<body>` — HTML Sections (in order)

| Section / id | Purpose |
|---|---|
| `.topbar` | Sticky nav with phone + "Book Now" CTA |
| `#mobileDrawer` | Off-canvas mobile nav (toggle at ≤880px) |
| `.hero` | Headline + decorative gate-pass card (`.gatepass`) |
| `.banner` | Red "you never call the port" trust strip |
| `#process` `.chain-section` | Four-step clearance chain explainer |
| `#rates` `.rates-section` | Three rate cards + military discount strip |
| `#ports` `.ports-section` | Three port cards with status badges |
| Who We Serve `.who-section` | Four client-type cards |
| `.authority-section` | Port-vs-broker comparison columns |
| `.do-section` | Delivery order field explainer with before/after doc mock |
| `#faq` `.faq-section` | Accordion FAQ (11 items) |
| `#contact` `.cta-section` | Final CTA with three contact buttons |
| `footer` | Brand, contact, office address, payment handles |
| `.call-bar` | Fixed mobile bottom bar (visible ≤720px) |

### 4. `<script>` — Inline JavaScript
Two behaviors, both vanilla JS:
- **Mobile drawer**: toggled by `#navToggle` / `#drawerClose`; all drawer links close it on click
- **FAQ accordion**: one-open-at-a-time; uses `scrollHeight` to animate `max-height`

## Key Content Details

**Services and pricing** (keep consistent across HTML, JSON-LD, and FAQ):
- TWIC Vehicle Escort: $85/vehicle (military/PCS rate: $70)
- Hotshot Delivery: $200/job
- Semi / Container Load-Unload: $325/unit

**Port operating notes** (must stay accurate):
- Port of Wilmington (CA): closed every Wednesday
- Port of Long Beach: appointment pier, 24-hour advance notice required
- Port of Matson: open daily

**Payment handles** (footer "Pay Your Invoice" column):
- Cash App: `$shawncolbert`
- Venmo: `@Shawn-Colbert-2`
- Zelle / Apple Pay: `(310) 748-0040`

## SEO / Schema Conventions

Both the JSON-LD blocks and the visible FAQ section must stay in sync — each FAQ answer appears in both places. When adding or editing an FAQ item, update both the `FAQPage` JSON-LD in `<head>` and the corresponding `.faq-item` in the FAQ section.

The canonical URL and `og:url` are `https://ship2shorebooking.com/`. The `sitemap.xml` `<lastmod>` dates should be updated when content changes.
