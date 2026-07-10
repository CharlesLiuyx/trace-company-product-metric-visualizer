# The New York Times Q1 FY26 Icon Crop Validation

Validated on 2026-06-20 against `input/processed/nyt-q1-fy26.png`.

## Accepted Crops

- `nyt-company-wordmark`: complete The New York Times company wordmark; centered; no title text, revenue labels, connectors, or publisher marks included.
- `nyt-business-digital-device`: complete Digital device icon; centered; no Digital label, revenue value, or connector fragments included.
- `nyt-business-print-newspapers`: complete Print newspaper stack icon; centered; no Print label, revenue value, or connector fragments included.
- `nyt-business-wirecutter-wordmark`: complete Wirecutter wordmark semantic cue for Other revenue; centered; no Other label, stats cards, or publisher marks included.

## Explicitly Skipped

- Publisher "How They Make Money" logo and mini Sankey mark.
- Publisher website `appeconomyinsights.com`.
- App Economy Insights footer logo/social badge.

All crop entries in `crop-report.json` show `passes: true`.

## Q4 FY25 Reuse

Validated on 2026-07-10 against `input/processed/nyt-q4-fy25.png`.

- The Q4 FY25 source reuses the same four icon/wordmark artworks at a uniform
  lower resolution, so the accepted Q1 FY26 crops are materially similar and
  no duplicate Q4 crop spec is needed.
- The crop spec now writes separate compressed runtime copies to
  `data/assets/raster-annotations/nyt/`; the Q4 adapter references only those
  whitelisted runtime files, never the reference crops.
- Digital device, Print newspapers, The New York Times wordmark, and
  Wirecutter wordmark were visually rechecked against Q4 and accepted.
- The three publisher/attribution areas remain intentionally skipped.
