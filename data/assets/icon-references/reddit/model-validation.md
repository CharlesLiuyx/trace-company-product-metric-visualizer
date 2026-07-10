# Reddit Q1 FY26 Icon Crop Validation

Validated on 2026-06-20 against `input/processed/reddit-q1-fy26.png`.

## Accepted Crops

- `reddit-company-wordmark`: complete Reddit wordmark and mascot-head logo; centered; no revenue labels, title fragments, connectors, or publisher marks included.
- `reddit-region-united-states-flag`: complete United States flag icon; centered; no region label or value text included.
- `reddit-region-rest-of-world-globe`: complete globe icon; centered; no Rest of World label or value text included.
- `reddit-company-snoo-mascot`: complete Snoo mascot illustration; centered; no website URL or attribution marks included.

## Explicitly Skipped

- Publisher "How They Make Money" logo and mini Sankey mark.
- Publisher website `appeconomyinsights.com`.
- App Economy Insights footer logo/social badge.

All crop entries in `crop-report.json` show `passes: true`.

## Q4 FY25 Runtime Raster Acceptance

Validated on 2026-07-10 against `input/processed/reddit-q4-fy25.png`.

- `reddit-q4-fy25-company-wordmark`: complete Reddit mascot-head logo and wordmark; centered; excludes the chart title and financial labels.
- `reddit-q4-fy25-united-states-flag`: complete United States flag; centered; excludes the region label and values.
- `reddit-q4-fy25-rest-of-world-globe`: complete globe icon; centered; excludes the Rest of World label and values.
- `reddit-q4-fy25-snoo-mascot`: complete Snoo mascot; centered; excludes chart labels, website URL, and publisher attribution.

All four Q4 FY25 entries pass `reddit-q4-fy25-crop-report.json`. Their compressed runtime copies are intentionally used only by `reddit-q4-fy25` through the approved `rasterAnnotations` allowlist.
