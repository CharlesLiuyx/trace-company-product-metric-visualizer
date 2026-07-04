# Nike Q4 FY26 Icon Crop Validation

Source: `input/processed/nike-q4-fy26.png`

Spec: `input/icon-crop-specs/nike-q4-fy26.json`

Generated report: `data/assets/icon-references/nike/crop-report.json`

## Accepted Crops

- `company-logo.png`: Nike wordmark + swoosh is complete and centered above the revenue hub. It excludes the title, revenue text, and flows.
- `business-footwear.png`: running shoe product photo is complete and centered. It excludes the `$7.1B` / `(1%) Y/Y` value text above and the `Footwear` label below.
- `business-apparel.png`: black t-shirt product photo is complete and centered. It excludes the `$3.0B` / `+1% Y/Y` value text above and the `Apparel` label below.
- `business-equipment.png`: basketball product photo is complete and centered. It excludes the `$0.6B` / `(3%) Y/Y` value text above and the `Equipment` label below.
- `business-converse.png`: Converse high-top sneaker product photo is complete and centered. It excludes the `$0.2B` / `(32%) Y/Y` value text above and the `Converse` label below.

All five crops have `passes: true` in `crop-report.json`, with zero edge foreground pixels and zero forbidden foreground pixels. All five are synced to `data/assets/raster-annotations/nike/` via `runtimeOutputDir` and used as approved runtime raster annotations (`render.allowRasterAnnotations = true`, `data.rasterAnnotations`), since each is a photographic product image rather than a simple flat icon.

## Explicitly Skipped

- App Economy Insights watermark, website URL, and social/publisher branding.
- The `HOW THEY MAKE MONEY` mark and attribution block.
- The `China (12%) Y/Y` / `RoW +1% Y/Y` callout box, which is a text-only annotation, not a business icon cluster.
