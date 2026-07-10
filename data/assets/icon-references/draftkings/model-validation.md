# DraftKings Q4 FY25 icon-crop validation

Source: `input/processed/draftkings-q4-fy25.png` via
`input/icon-crop-specs/draftkings-q4-fy25.json`.

All three semantic clusters passed `scripts/extract_icon_crops.py` validation
and their validation sheets were visually reviewed:

- `draftkings-company-wordmark` — complete orange crown plus green/black
  wordmark, centered with the page-title overlap transparently excluded. The
  crop contains no Revenue-label pixels. Automated result: pass; edge
  foreground pixels `0`; transparent pixel ratio `0.70`.
- `draftkings-online-gaming-badge` — complete green Sportsbook & Casino badge,
  including crown, monogram, and descriptive text. It is centered and contains
  no Online Gaming label pixels. Automated result: pass; edge foreground
  pixels `0`.
- `draftkings-gaming-software-badge` — complete black Fantasy badge, including
  crown, monogram, and descriptive text. It is centered and contains no Gaming
  Software label pixels. Automated result: pass; edge foreground pixels `0`.

The reference crops are conversion evidence only. The separate, matching
files in `data/assets/raster-annotations/draftkings/` are the approved runtime
annotations; no other source pixels are used at runtime.
