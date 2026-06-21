# Starbucks Q2 FY26 Icon Crop Validation

Source: `input/processed/starbucks-q2-fy26.png`

Spec: `input/icon-crop-specs/starbucks-q2-fy26.json`

Generated report: `data/assets/icon-references/starbucks/crop-report.json`

## Accepted Crops

- `company-siren.png`: Starbucks siren company mark is complete and centered. It excludes the title, revenue label, flows, and publisher marks.
- `business-beverage.png`: iced beverage product image is complete and centered. It excludes the Beverage label, value text, and flow marks.
- `business-food.png`: food product image is complete and centered. It excludes the Food label, value text, and flow marks.
- `business-packaged-beverages.png`: packaged beverage cluster is accepted with a tight lower boundary to avoid the adjacent `Other` text. It excludes revenue note text, label text, and flow marks.

All four crops have `passes: true` in `crop-report.json`, with zero edge foreground pixels and zero forbidden foreground pixels.

## Explicitly Skipped

- App Economy Insights watermark, website URL, and social/publisher branding.
- The `HOW THEY MAKE MONEY` mark and attribution block.
- KPI cards (`Store count`, `Same Store Sale`) because they are text cards, not reusable business icon clusters.
