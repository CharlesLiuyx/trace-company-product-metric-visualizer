# HubSpot Icon Crop Validation

Dataset: `hubspot-q1-fy26`
Source: `input/processed/hubspot-q1-fy26.png`
Spec: `input/icon-crop-specs/hubspot-q1-fy26.json`

## Accepted Crops

- `hubspot-company-wordmark`
  - Reference crop: `data/assets/icon-references/hubspot/crops/company-wordmark.png`
  - Runtime raster: `data/assets/raster-annotations/hubspot/company-wordmark.png`
  - Validation sheet: `data/assets/icon-references/hubspot/validation-sheets/hubspot-company-wordmark.png`
  - Result: Pass. The HubSpot wordmark and sprocket logo are complete, visually centered, and free of unrelated chart marks, labels, connector fragments, website text, and publisher attribution.

## Skipped Source Marks

- Bottom-left "How They Make Money" badge, bottom-center website URL, and bottom-right App Economy Insights attribution are source publisher marks and are intentionally excluded.
- The image contains no independent HubSpot business or segment icon clusters. Subscription and Professional services are text labels only.
