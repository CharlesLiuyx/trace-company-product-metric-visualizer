# Abbott Q4 FY25 icon validation

Validated against `input/processing/abbott-q4-fy25.png` on 2026-07-13.

| Crop | Result | Review notes |
| --- | --- | --- |
| `company-wordmark.png` | accepted | Contains the complete Abbott symbol and wordmark; it excludes the Net sales label and all flow geometry. |
| `established-pharma.png` | accepted | Contains the complete purple pharmaceutical-bottle tile without nearby text or source ribbon. |
| `nutritionals.png` | accepted | Contains the complete purple nutritional-bottle tile without nearby text or source ribbon. |
| `diagnostics.png` | accepted | Contains the complete purple diagnostics-analyzer tile without nearby text or source ribbon. |
| `medical-devices.png` | accepted | Contains the complete purple medical-devices tile without nearby text or source ribbon. |

All crop-report validations pass; the generated runtime copies are the only raster
assets referenced by the Abbott adapter. Publisher watermark, URL, social badge,
and App Economy Insights footer branding are intentionally skipped as attribution.
