# Restaurant Brands International Q1 FY26 Icon Crop Validation

Dataset: `rbi-q1-fy26`

Source image: `input/processed/rbi-q1-fy26.png`

Spec: `input/icon-crop-specs/rbi-q1-fy26.json`

Validated on: 2026-07-05

## Accepted Crops

- `rbi-company-logo` -> `crops/rbi-logo.png` (runtime `rbi-logo.png`)
- `rbi-tim-hortons-logo` -> `crops/tim-hortons-logo.png` (runtime `tim-hortons-logo.png`)
- `rbi-burger-king-logo` -> `crops/burger-king-logo.png` (runtime `burger-king-logo.png`)
- `rbi-popeyes-logo` -> `crops/popeyes-logo.png` (runtime `popeyes-logo.png`)
- `rbi-firehouse-subs-logo` -> `crops/firehouse-subs-logo.png` (runtime `firehouse-subs-logo.png`)

## Visual Checks

All generated validation sheets were reviewed against the original source image and
extracted crop preview. `crop-report.json` reports `passes: true` for every crop with
`edgeForegroundPixels: 0` and `transparentPixelRatio` between 0.30 and 0.76 (page
background removed while each brand's own badge/plate is retained).

- Main logo structures are fully included (rbi wordmark plus "restaurant brands
  international"; Tim Hortons script; Burger King bun plate; Popeyes Louisiana Kitchen
  emblem and wordmark; Firehouse Subs badge).
- Main logo structures are visually centered in their crops.
- No unrelated text, Sankey marks, connector fragments, watermarks, neighboring icon
  parts, source values, the blue title, the "Revenue" hub label, website text, social
  badges, or publisher branding are included. The rbi crop was tightened to exclude the
  blue title fragment above and the "Revenue" label below after a first-pass edge-overlap
  failure.

## Explicitly Skipped

- `International` and `Restaurant Holdings` segments: text-only rows with no brand icon.
- `HOW THEY MAKE MONEY` footer mark and mini Sankey: source publisher/series branding.
- `appeconomyinsights.com` URL: source publisher branding.
- `APP ECONOMY INSIGHTS` footer lockup and social badge: source publisher branding.
