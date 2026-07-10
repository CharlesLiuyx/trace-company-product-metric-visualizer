# Coupang Icon Crop Validation

Dataset: `coupang-q4-fy25`

Source: `input/processed/coupang-q4-fy25.png`

## Accepted Crops

- `coupang-developing-offerings-brands` → `crops/developing-offerings-brands.png`
  - The complete Coupang Eats app icon and Coupang Play wordmark are retained.
  - The combined business-brand cluster is visually centered and excludes the Developing Offerings label, source bar, KPI card, ribbons, and publisher marks.
  - Script validation: passes; the accepted runtime copy is `data/assets/raster-annotations/coupang/developing-offerings-brands.png`.

## Accounted Skips

- The large Coupang wordmark is reproduced as a vector `meta.logoSvg`, so no duplicate raster logo asset is needed.
- The “How They Make Money” mark, App Economy Insights URL/logo, social badge, and attribution strip are publisher branding and are intentionally skipped.
