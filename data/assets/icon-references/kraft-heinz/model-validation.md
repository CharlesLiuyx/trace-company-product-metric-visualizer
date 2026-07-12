# Kraft Heinz Q1 FY26 Icon Crop Validation

Source: `input/processed/kraft-heinz-q1-fy26.png`

Spec: `input/icon-crop-specs/kraft-heinz-q1-fy26.json`

Generated report: `data/assets/icon-references/kraft-heinz/crop-report.json`

## Accepted Crops

- `company-logo.png`: the complete two-color Kraft Heinz wordmark is centered above the net-sales hub and excludes the title and Net sales label.
- `north-america-kool-aid.png`: the Kool-Aid pack is complete, centered, and contains no regional label or flow pixels.
- `north-america-condiments.png`: the Heinz ketchup, French's mustard, and Miracle Whip cluster is complete and separate from the adjacent Kool-Aid and brand wordmark.
- `international-developed-maxwell-house.png`: the Maxwell House coffee can is complete, centered, and clear of the International Developed Markets label.
- `emerging-markets-home-bake.png`: the Home Bake product pack is complete, centered, and clear of the Emerging Markets label.

All five crops pass validation with zero edge and forbidden foreground pixels. They have transparent backgrounds and are synced to `data/assets/raster-annotations/kraft-heinz/` through `runtimeOutputDir`. The company wordmark and photographic product packs are approved runtime rasters; their source-reference counterparts remain under `icon-references/` only.

## Explicitly Skipped

- The HOW THEY MAKE MONEY badge, mini-Sankey mark, website URL, and APP ECONOMY INSIGHTS footer branding are publisher attribution, not financial semantics.
