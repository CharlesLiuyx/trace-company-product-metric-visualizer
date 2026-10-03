# NIO icon validation

- `nio-vehicle-sales-cars` — accepted from `input/processed/nio-q1-fy26.png`.
  The crop contains the complete three-vehicle cluster, is visually centered,
  has transparent source background, and excludes the Vehicle sales label,
  chart ribbons, values, and publisher marks. Runtime output is the matching
  validated asset at `data/assets/raster-annotations/nio/vehicle-sales-cars.png`.
- The NIO horizon symbol and wordmark are re-authored as a dataset-owned SVG.
- Publisher marks, site attribution, and social badge are intentionally not
  assets because they are not NIO business semantics.

## 2026-10-03 · Original company logo crop

- Source: `input/processing/nio-q2-fy26.png`; recipe: `input/icon-crop-specs/nio-company-logo.json`.
- Inspected `validation-sheets/nio-company-logo-source.png`: complete horizon symbol and original NIO wordmark, centered, no title, values, connectors or publisher marks. Crop isolation and compression checks passed.
- The Q3 FY25, Q4 FY25 and Q1 FY26 Source logo regions have identical pixel hashes; Q2 FY26 has the same silhouette, bounds and placement with minor raster differences. Reuse this source crop in all four adapters at its original coordinates.
- This visual extraction check does not record operator acceptance of the review candidate.

- Clearance adjustment: keep native 615×220 dimensions and move the logo up 4 viewBox units to keep its transparent crop margin clear of the existing financial label bbox.
