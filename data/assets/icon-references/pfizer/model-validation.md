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

## Pfizer Q1 FY26 Icon Crop Validation

Source: `input/processed/pfizer-q1-fy26.png`<br>
Spec: `input/icon-crop-specs/pfizer-q1-fy26.json`

## Accepted crops

- `pfizer-q1-company-wordmark.png`: complete Pfizer emblem and wordmark, centered and isolated from the chart title and Biopharma label.
- `pfizer-q1-primary-care-products.png`: complete Eliquis, Paxlovid, and Prevnar 20 cluster; excludes the Primary Care label, value, notes, and source bar.
- `pfizer-q1-specialty-care-vyndaqel.png`: complete Vyndaqel mark; excludes the Specialty Care label, value, notes, and source bar.
- `pfizer-q1-oncology-ibrance.png`: complete Ibrance mark; excludes the Oncology label, value, notes, and source bar.

All four generated validation sheets were visually reviewed. `pfizer-q1-fy26-crop-report.json` reports `passes: true` with no edge or forbidden foreground pixels for every crop. The derived, Q1-specific runtime copies in `data/assets/raster-annotations/pfizer/` are the only raster assets referenced by this dataset.

## Intentionally skipped

- The How They Make Money mark, App Economy Insights URL, social badge, and publisher wordmark are attribution, not Pfizer income-statement semantics.
- Hospital & Biosimilars and Business Innovation have no independent icon cluster.
