# Chevron Q1 FY26 icon-crop validation

Source image: `input/processed/chevron-q1-fy26.png`
Spec: `input/icon-crop-specs/chevron-q1-fy26.json`
Report: `data/assets/icon-references/chevron/crop-report.json`

| crop | result | review note |
| --- | --- | --- |
| `chevron-company-logo` | accepted | The Chevron wordmark and complete red/blue chevron symbol are centered; the Revenue label and surrounding Sankey content are excluded. |
| `chevron-business-upstream-pumpjack` | accepted | The full pumpjack, counterweight, derrick, and base line are centered with no upstream label, value, or flow pixels. |
| `chevron-business-downstream-service-station` | accepted | The service station, hose, nozzle, and base line are complete and centered with no downstream label, value, or flow pixels. |

All three semantically relevant icon clusters pass `crop-report.json` validation. They are reference/conversion assets only; the dataset reconstructs them as SVG and contains no runtime raster annotations. Publisher watermark, website URL, App Economy Insights badge, social marks, and the "HOW THEY MAKE MONEY" mark are intentional non-semantic skips.
