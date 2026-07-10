# Roblox Icon Crop Validation

Dataset: `roblox-q1-fy26`

Source: `input/processed/roblox-q1-fy26.png`

## Accepted Crops

- `roblox-company-wordmark` -> `crops/company-wordmark.png`
  - Main structure is fully included.
  - Wordmark is visually centered in the crop.
  - Crop excludes the title, flow bands, labels, KPI cards, and publisher marks.
  - Script validation: passes.

## Accounted Skips

- `roblox-avatar-illustration-cluster`: decorative product/avatar artwork, not an independent business or segment icon. It also overlaps source flow bands, so it is not a clean reusable icon crop and is not used in d3 runtime output.
- `publisher-how-they-make-money`: source publisher branding, excluded.
- `publisher-app-economy-insights`: source publisher branding, website URL, and social badge, excluded.

## Q4 FY25 reuse review

Dataset: `roblox-q4-fy25`

Source: `input/processed/roblox-q4-fy25.png`

- The Q4 FY25 Roblox wordmark has the same semantic form and placement role as the accepted Q1 FY26 vector. It is recreated as a pure-SVG wordmark in the dataset annotation; no runtime raster is used.
- The Q4 FY25 product/avatar artwork remains decorative platform artwork rather than a separately reported business or segment icon. It overlaps a source flow, so it is intentionally not cropped, vectorized, or rendered.
- Publisher marks, URL, social badge, and attribution remain intentional skips.
