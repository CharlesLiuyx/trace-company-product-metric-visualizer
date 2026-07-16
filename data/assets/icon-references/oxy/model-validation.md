# Oxy icon crop validation

## `oxy-q3-fy25`

- `oxy-company-logo` — accepted. The complete OXY roundel and wordmark are
  centered with clean margins and no title, Revenue label, or Sankey pixels.
- `oxy-oil-icon` — accepted. The complete pumpjack is isolated with no Oil
  label or source-node pixels.
- `oxy-ngl-icon` — accepted. The complete natural-gas-liquid canister is
  isolated with no adjacent text.
- `oxy-gas-icon` — accepted. The complete flame is isolated with clean
  margins.
- `oxy-chemical-icon` — accepted. The complete test-tube icon is isolated;
  the crop starts immediately above its antenna because the nearby Other
  ribbon crosses the preceding scanlines.
- `oxy-midstream-icon` — accepted. The complete pipeline valve is isolated
  with no label or source-node pixels.

The Source publisher badge, URL, and footer lockup are intentionally skipped.
`crop-report-q3-fy25.json` records passing validation for all six semantic
clusters, and approved runtime copies are generated under
`data/assets/raster-annotations/oxy/`.
