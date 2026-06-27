# Autodesk Q1 FY27 Icon Crop Validation

Source: `input/processed/autodesk-q1-fy27.png`

## Accepted Crops

- `autodesk-company-logo` -> `crops/company-logo.png`
  - Complete subject structure: pass.
  - Centered subject: pass.
  - No unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts: pass.
  - Script validation: pass (`edgeForegroundPixels: 0`, `centerOffset: { "x": -0.0207, "y": -0.0161 }`).

## Scope Notes

- The source image contains the Autodesk company logo/wordmark as the only semantically relevant company or business icon cluster.
- The Architecture, Engineering & Construction, AutoCAD, Manufacturing, Media & Entertainment, and Other revenue labels are text-only and have no independent business icons.
- Publisher/creator marks, the website URL, social/attribution badges, and the "How They Make Money" mark were intentionally skipped.
- The crop is retained as a reference/conversion asset only and is not used as a runtime raster asset.
