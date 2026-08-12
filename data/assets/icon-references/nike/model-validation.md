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

## Nike Q2 FY26 Converse Cleanup

User feedback found two neighboring text fragments at the top edge of the
shared Converse crop when used by `nike-q2-fy26`. This is classified as an I4/R2
execution gap: the original validation checked the crop geometry but missed
the two boundary-connected fragments.

- Source: `input/processed/nike-q2-fy26.png`
- Spec: `input/icon-crop-specs/nike-q2-fy26.json`
- Report: `data/assets/icon-references/nike/crop-report-q2-fy26.json`
- Accepted runtime: `data/assets/raster-annotations/nike/business-converse-q2-fy26.png`

The corrected crop is intentionally dataset-specific so the fix does not
silently change other Nike Builds that reference the shared runtime. Native
visual review confirms that the complete shoe is preserved and that the top,
right, and remaining borders contain no unrelated text, connector, watermark,
or neighboring chart mark. The crop report also records a quantified Source
isolation audit: the horizontal separator at `y=1159` and vertical separator at
`x=330` both contain exactly zero foreground pixels. This implements the CB-032
recurrence upgrade instead of relying on crop geometry and visual review alone.

## Explicitly Skipped

- App Economy Insights watermark, website URL, and social/publisher branding.
- The `HOW THEY MAKE MONEY` mark and attribution block.
- The `China (12%) Y/Y` / `RoW +1% Y/Y` callout box, which is a text-only annotation, not a business icon cluster.
