# Tripadvisor Icon Crop Validation

Dataset: `tripadvisor-q4-fy25`

## Accepted Crops

- `tripadvisor-company-logo` → `crops/company-logo.png`: pass. The owl roundel and complete Tripadvisor wordmark are centered; the nearby source ribbon is excluded.
- `tripadvisor-hotel-other-icon` → `crops/hotel-other-icon.png`: pass. The full Hotel & Other Tripadvisor app icon is centered and excludes its label and source node.
- `tripadvisor-experiences-icon` → `crops/experiences-icon.png`: pass. The Viator mark and its white rounded-square container are complete and exclude the adjacent Experiences text.
- `tripadvisor-thefork-icon` → `crops/thefork-icon.png`: pass. The full TheFork rounded-square icon is centered and excludes the label and source ribbon.

All four crops have `passes: true` in `crop-report.json`. Their matching, compressed runtime copies live under `data/assets/raster-annotations/tripadvisor/`.

## Skipped Regions

- The “How they make money” footer mark and the App Economy Insights URL/logo are publisher attribution, not Tripadvisor income-statement semantics.
