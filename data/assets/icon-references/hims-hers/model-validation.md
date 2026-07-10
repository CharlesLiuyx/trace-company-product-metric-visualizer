# Hims & Hers Q4 FY25 icon-crop validation

- Source: `input/processed/hims-hers-q4-fy25.png`
- Crop spec: `input/icon-crop-specs/hims-hers-q4-fy25.json`
- Reviewed: 2026-07-11

| Crop | Result | Review |
| --- | --- | --- |
| `hims-hers-company-wordmark-q4-fy25` | accepted | Complete Hims & Hers wordmark, centered with transparent background; no title, labels, ribbons, KPI cards, or publisher attribution. Its runtime rendering is a vector wordmark. |
| `hims-hers-online-revenue-hims-card-q4-fy25` | accepted | Complete rounded Hims brand card, visually centered; no source label, value, growth note, flow ribbon, or footer content. |
| `hims-hers-online-revenue-hers-card-q4-fy25` | accepted | Complete rounded Hers brand card, visually centered; no source label, value, growth note, flow ribbon, or footer content. |

All three report `passes: true`; transparent-pixel ratios are 0.7134, 0.1206, and 0.1404 respectively. The publisher mark, URL, and App Economy Insights attribution are intentionally skipped in the crop spec.
