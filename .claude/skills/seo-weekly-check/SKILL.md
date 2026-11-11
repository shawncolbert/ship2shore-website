---
name: seo-weekly-check
description: Read-only search check for ship2shorebooking.com and ship2shorelogistics.com using OpenSEO (Search Console). Shows which pages are indexed, clicks and impressions per page, and the next three actions in plain English. Use when Shawn asks how the website is doing in Google.
---

# SEO check (read-only)

Changes nothing on either site. Does not set up schedules or anything that runs in the background (Shawn's rule: nothing running that costs money) unless he asks for it.

## Projects (OpenSEO)
- ship2shorebooking.com: project `87b74bac-4780-4a7c-beb2-e2ae6900cca0` (the main site: TWIC escort, port pages, military, import, Hawaii, Los Angeles)
- ship2shorelogistics.com: project `0e5c3322-4bd4-4a91-9eff-7f24d6090d17` (car shipping, routes, cities; about 50 pages)
- Google Analytics is not connected to either project, so total visits by source are not available. Say so if asked.

## Steps
1. Get the page list: the site's `sitemap.xml` (main site: `/home/user/ship2shore-website` or the live file).
2. `inspect_urls` in batches of 10. Record the status of each page: "Submitted and indexed", "Crawled - currently not indexed" (read but not added yet: wait, add internal links), "Discovered - currently not indexed" (known, not visited yet: wait), "URL is unknown to Google" (not found yet).
3. `get_search_console_performance` with `dimensions: ["page"]` for `last_28_days` and `last_3_months`. Search Console data lags about 3 days and hides most search words, so use page-level clicks for totals.
4. `get_search_console_performance` with `dimensions: ["query"]` and `minPosition: 5, maxPosition: 20, minImpressions: 5` for near-page-one searches.
5. Keyword research (`get_keyword_metrics`, `research_keywords`) uses credits: only run it when Shawn asks, and report the credits used.

## Report (short, plain words)
- Indexed pages / not indexed pages (with the reason).
- Clicks and impressions per page, compared with last time if known.
- Top searches and any near page one.
- **Three next actions**, in order. Examples: request indexing for pages still unknown (Search Console, one at a time, the correct site in the top-left dropdown, about 10 a day per site; Claude cannot do this step), add internal links, add a review or photo, wait.
- Do not request indexing twice for the same page. New pages commonly take 1-2 weeks, ranking takes weeks more; do not promise results.
