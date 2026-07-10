# Dynatrace Icon Crop Validation

Source image: `input/processed/dynatrace-q3-fy26.png`

Crop spec: `input/icon-crop-specs/dynatrace-q3-fy26.json`

| crop | reference | validation sheet | result |
| --- | --- | --- | --- |
| `dynatrace-company-logo` | `data/assets/icon-references/dynatrace/crops/company-logo.png` | `data/assets/icon-references/dynatrace/validation-sheets/dynatrace-company-logo.png` | Pass |

- The cube and the complete Dynatrace wordmark are included as one centered company-logo cluster.
- The crop excludes the title, Revenue label, chart geometry, URL, and all publisher/attribution branding.
- The crop report records `transparentPixelRatio: 0.7283`, zero forbidden foreground pixels, and a `0.0029` horizontal center offset; it passes the crop-spec validation.
- The compressed runtime copy is the only raster asset used by the adapter. The reference crop itself is never rendered at runtime.
