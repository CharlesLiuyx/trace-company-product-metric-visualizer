# Pfizer Q4 FY25 Icon Crop Validation

Source: `input/processed/pfizer-q4-fy25.png`<br>
Spec: `input/icon-crop-specs/pfizer-q4-fy25.json`

## Accepted crops

- `company-wordmark.png`: complete Pfizer icon and wordmark, centered and isolated from the title and chart geometry.
- `primary-care-products.png`: complete Eliquis, Paxlovid, and Prevnar 20 product cluster; excludes the segment label, value, notes, and source bar.
- `specialty-care-vyndaqel.png`: complete Vyndaqel mark; excludes all financial labels and chart geometry.
- `oncology-ibrance.png`: complete Ibrance mark; excludes the segment label, value, notes, and source bar.

All four generated validation sheets were visually reviewed. `crop-report.json` reports `passes: true` with no edge or forbidden foreground pixels for every crop. The derived runtime copies in `data/assets/raster-annotations/pfizer/` are the only raster assets referenced by the dataset.

## Intentionally skipped

- The How They Make Money mark, App Economy Insights URL, social badge, and publisher wordmark are attribution, not Pfizer income-statement semantics.
- Business Innovation has no independent icon cluster.
