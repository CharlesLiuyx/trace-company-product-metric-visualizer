# BlackRock Q1 FY26 Icon Crop Validation

Source: `input/processed/blackrock-q1-fy26.png`

## Accepted Crops

- `blackrock-company-wordmark` -> `crops/company-wordmark.png`
  - Complete subject structure: pass.
  - Centered subject: pass.
  - No unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts: pass.
  - Script validation: pass (`edgeForegroundPixels: 0`, `centerOffset: { "x": 0.0013, "y": -0.0141 }`).

## Scope Notes

- The source image has no company-internal business or segment icons.
- Publisher/creator marks, the website URL, social/attribution badges, and the "How They Make Money" mark were intentionally skipped.
- The crop is retained as a reference/conversion asset only and is not used as a runtime raster asset.
