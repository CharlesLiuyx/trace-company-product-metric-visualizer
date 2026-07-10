# Axon Q4 FY25 crop validation

Validated from `input/processed/axon-q4-fy25.png` on 2026-07-11.

| crop key | result | visual validation |
| --- | --- | --- |
| `axon-business-personal-sensors-taser-cluster-q4-fy25` | accepted | The TASER device, bolt roundel, and wordmark are complete and centered; no flow, value label, publisher mark, or neighboring content is present. |
| `axon-company-mark-q4-fy25` | accepted | The black Axon mark is complete, centered, and cleanly isolated from the Revenue label and title. |
| `axon-business-platform-solutions-evidence-wordmark-q4-fy25` | accepted | The Evidence.com wordmark is complete and isolated; the Platform Solutions label, flow ribbon, and attribution are excluded. |

All three `crop-report.json` validation entries pass. Their runtime copies are
the only raster assets referenced by the Axon Sankey adapter; reference crops
remain conversion/validation inputs only.
