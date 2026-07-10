# Merck Q4 FY25 Icon Crop Validation

Source: `input/processed/merck-q4-fy25.png`<br>
Spec: `input/icon-crop-specs/merck-q4-fy25.json`

## Accepted crops

- `company-wordmark.png`: complete Merck emblem and wordmark, centered above the income-statement flow and isolated from the title and financial labels.
- `keytruda.png`: complete Keytruda and pembrolizumab cluster for Oncology; no segment label, value, note, or source-bar pixels.
- `gardasil-9.png`: complete Gardasil 9 cluster for Vaccines; no adjacent financial text or chart geometry.
- `bridion.png`: complete Bridion and sugammadex cluster for Hospital Acute Care; no adjacent segment label, value, note, or source-bar pixels.
- `januvia.png`: complete Januvia, sitagliptin, and dosage cluster for Diabetes; no adjacent financial text or chart geometry.

All five generated validation sheets were visually reviewed. `crop-report.json` reports `passes: true`, centered subjects, clean crop edges, and no forbidden foreground pixels for every asset. The derived runtime copies in `data/assets/raster-annotations/merck/` are the only raster assets that the Merck dataset may reference.

## Intentionally skipped

- The How They Make Money badge and miniature Sankey, App Economy Insights URL, social badge, and footer wordmark are publisher attribution rather than Merck income-statement semantics.
- Pharma, Animal Health, and Other are business/segment labels without independent source icon clusters.
