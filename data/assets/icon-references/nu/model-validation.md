# Nu Q4 FY25 Icon Crop Validation

Dataset: `nu-q4-fy25`
Source image: `input/processed/nu-q4-fy25.png`
Spec: `input/icon-crop-specs/nu-q4-fy25.json`

## Accepted Crops

- `nu-company-symbol` -> `crops/company-symbol.png`
  - Validation sheet: `validation-sheets/nu-company-symbol.png`
  - Result: Pass. The complete Nu symbol is centered with balanced margins and is free of title text, Revenue label text, flows, and publisher marks.
  - Runtime treatment: Rebuilt as pure SVG in `data/datasets/nu-q4-fy25.js`. The final vector outer bounds are within 1–2 px of the validated crop; no raster asset is embedded.
- `nu-credit-card-cluster` -> `crops/credit-card-cluster.png`
  - Validation sheet: `validation-sheets/nu-credit-card-cluster.png`
  - Result: Pass. Both cards are fully included, visually centered, and separated from the nearby amount, Credit card label, title, and flow.
  - Runtime treatment: Rebuilt as a simplified pure-SVG two-card cluster. The card count, overlap, rotation, brand color, chip/payment marks, and placement are preserved; photographic texture remains an accepted vector residual.

## Skipped Regions

- Bottom-left "How They Make Money" mark: publisher branding.
- Bottom-center `appeconomyinsights.com`: publisher URL.
- Bottom-right App Economy Insights wordmark and social badge: publisher attribution.

All semantically relevant company and credit-card icon clusters in the source image are accounted for. No runtime raster annotations are used.
