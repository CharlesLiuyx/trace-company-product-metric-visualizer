# Monday.com Q1 FY26 Icon Crop Validation

Source: `input/processed/monday-com-q1-fy26.png`

## Accepted Crops

- `monday-com-company-logo-wordmark` -> `crops/company-logo-wordmark.png`
  - Complete subject structure: pass.
  - Centered subject: pass.
  - No unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts: pass.
  - Script validation: pass (`edgeForegroundPixels: 0`, `centerOffset: { "x": 0.0104, "y": 0.0033 }`).

## Vector Asset

- Reusable vector: inline `mondayLogo()` SVG helper in `data/datasets/monday-com-q1-fy26.js`.
- Rendered reference: `validation-sheets/company-logo-vector.png`.
- Vector diff image: `validation-sheets/company-logo-vector-diff-x4.png`.
- Crop-aligned vector diff over the source background:
  - `mae`: 17.9796
  - `similarity`: 0.929492
  - `maxChannelDiff`: 242
  - `samePixelRatio`: 0.611833
  - `changedPixelRatio`: 0.388167
  - `diffBoundingBox`: `{ "x": 23, "y": 23, "width": 310, "height": 261 }`
- Accepted residuals: the three-color mark is approximated with pure SVG rounded rectangles/circle and the wordmark uses local Montserrat text rather than a proprietary logo font. The vector remains complete, centered, unclipped, and visually recognizable.

## Scope Notes

- The source image has no company-internal business or segment icon clusters.
- Publisher/creator marks, the website URL, social/attribution badge, and the "How They Make Money" mark were intentionally skipped.
- The crop is retained as a reference/conversion asset only and is not used as a runtime raster asset.
