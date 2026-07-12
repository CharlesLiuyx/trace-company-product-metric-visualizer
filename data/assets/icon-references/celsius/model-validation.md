# Celsius Q1 FY26 asset validation

Validated against `input/processing/celsius-q1-fy26.png` on 2026-07-12.

| asset | decision | evidence |
| --- | --- | --- |
| `company-logo` | accepted | Complete CELSIUS Live Fit lockup; centered, with no title, label, or flow pixels. |
| `celsius-product-cluster` | accepted | All four product cans are complete and centered; no value or source-label pixels are included. |
| `pepsico-wordmark` | accepted | Complete PEPSICO wordmark; no financial-label pixels are included. |
| `amazon-wordmark` | accepted | Complete Amazon wordmark and smile; no financial-label pixels are included. |

Each crop's validation sheet is in `validation-sheets/`, and every crop has
`passes: true` in `crop-report.json`. The matching runtime assets are the only
raster files referenced by the Celsius Sankey adapter.
