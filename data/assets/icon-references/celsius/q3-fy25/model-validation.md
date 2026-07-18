# Celsius Q3 FY25 incremental asset validation

Validated against `input/processing/celsius-q3-fy25.png` on 2026-07-18.

The existing company logo, product cluster, PepsiCo wordmark, and Amazon
wordmark are materially identical to the accepted Celsius Q1 FY26 assets and
are reused without creating duplicates.

| asset | decision | evidence |
| --- | --- | --- |
| `costco-wordmark` | accepted | Complete COSTCO WHOLESALE wordmark; the adjacent financial growth-note glyph is excluded and no node, link, publisher, or value-label pixels remain. |

The crop validation sheet is in `validation-sheets/`; the crop must also have
`passes: true` in `crop-report.json`. The matching runtime asset is the only
new Celsius raster file referenced by the Q3 FY25 Sankey adapter.
