# Lyft FY25 Icon Crop Validation

Dataset: `lyft-fy25`

Source image: `input/processed/lyft-fy25.png`

Spec: `input/icon-crop-specs/lyft-fy25.json`

Generated report: `data/assets/icon-references/lyft/crop-report.json`

Validated on: 2026-07-08

## Accepted Crops

- `lyft-company-app-logo` -> `crops/lyft-company-app-logo.png`
  - Pass: Lyft app logo is complete, centered, and isolated from the title, revenue label, and Sankey marks.
- `lyft-rideshare-car-cluster` -> `crops/lyft-rideshare-car-cluster.png`
  - Pass: rideshare car illustration and shadow are complete and centered. The Rideshare text label and adjacent Sankey node are excluded.
- `lyft-rentals-phone-cluster` -> `crops/lyft-rentals-phone-cluster.png`
  - Pass: rentals phone cluster is complete and centered. The Rentals text label, value annotation, and Sankey marks are excluded.

All accepted crops have `validation.passes: true` in `crop-report.json`, and the generated validation sheets were visually reviewed against the source image and crop previews.

## Skipped Source Regions

- `publisher-how-they-make-money`: source publisher branding and mini Sankey mark, not part of Lyft income-statement semantics.
- `publisher-app-economy-insights`: source publisher URL, social badge, and footer lockup.

## Runtime Use

These crops are reusable reference assets only. `lyft-fy25` renders its logo, business icons, annotations, and Sankey chart with pure SVG/text and does not embed runtime raster annotations.
