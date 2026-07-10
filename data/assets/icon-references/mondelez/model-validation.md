# Mondelēz Q4 FY25 Icon Crop Validation

Source: `input/processed/mondelez-q4-fy25.png`

Spec: `input/icon-crop-specs/mondelez-q4-fy25.json`

Generated report: `data/assets/icon-references/mondelez/crop-report.json`

## Accepted Crops

- `company-wordmark.png`: Mondelēz International wordmark is complete, centered, and excludes the title and chart labels.
- `oreo.png`, `clif-bar.png`, and `chips-ahoy.png`: complete business-brand cluster for Biscuits & Baked Snacks.
- `milka.png`, `cadbury.png`, and `toblerone.png`: complete business-brand cluster for Chocolate.
- `sour-patch-kids.png`: complete Gum & Candy brand mark.
- `ritz.png`: complete Cheese & Grocery brand mark.

All nine crops have `passes: true` in `crop-report.json`. The reference crops are not used directly at runtime; `data/assets/raster-annotations/mondelez/` contains the separately generated, approved runtime copies.

## Explicitly Skipped

- App Economy Insights watermark, website URL, social badge, and `HOW THEY MAKE MONEY` publisher branding.
- The source has no independent icon cluster for Beverages.
