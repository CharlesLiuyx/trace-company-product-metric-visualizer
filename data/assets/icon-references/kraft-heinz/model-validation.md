# Kraft Heinz Q4 FY25 Icon Crop Validation

Source: `input/processed/kraft-heinz-q4-fy25.png`

Spec: `input/icon-crop-specs/kraft-heinz-q4-fy25.json`

Generated report: `data/assets/icon-references/kraft-heinz/crop-report.json`

## Accepted Crops

- `company-logo.png`: the full Kraft Heinz wordmark is centered and excludes the title and net-sales label.
- `accelerate-sauces.png` and `accelerate-home-bake.png`: the two Accelerate product clusters are complete and separate from the strategy text.
- `protect-products.png`: the Kool-Aid cluster is complete and centered.
- `balance-products.png`: the Maxwell House can is complete and centered.

All five crops pass validation with no edge or forbidden foreground pixels and are synced to `data/assets/raster-annotations/kraft-heinz/` through `runtimeOutputDir`. They are approved runtime rasters because they are photographic product packs and a multicolor company wordmark.

## Explicitly Skipped

- The HOW THEY MAKE MONEY badge, mini-Sankey mark, website URL, and APP ECONOMY INSIGHTS footer branding are publisher attribution, not financial semantics.
