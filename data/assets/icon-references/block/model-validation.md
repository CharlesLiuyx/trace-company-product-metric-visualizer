# Block icon crop validation

## `block-fy25`

- `block-company-logo` — accepted after moving the crop top from y=198 to y=205 to remove title antialias pixels. The complete multicolor cube and `BLOCK` wordmark are centered, with no title, Revenue label, or ribbon pixels.
- `block-commerce-enablement-icon` — accepted. The complete Square-style tile is centered and excludes the adjacent business label, margin note, and source bar.
- `block-financial-solutions-icon` — accepted. The complete green dollar tile is centered and excludes the adjacent business label, margin note, and source bar.
- `block-bitcoin-ecosystem-icon` — accepted. The complete orange bitcoin tile is centered and excludes the adjacent business label, margin note, and source bar.

The source-publisher `HOW THEY MAKE MONEY` mark, the `appeconomyinsights.com` URL, and the App Economy Insights footer attribution are intentionally skipped. The final `crop-report.json` records `validation.passes: true`, zero forbidden foreground pixels, and non-zero transparent-background ratios for all four accepted crops. Runtime copies are generated under `data/assets/raster-annotations/block/` for the dataset's explicit raster-annotation whitelist.

## `block-q3-fy25`

- `block-square-wordmark` — accepted. The complete Square icon and wordmark are
  inside the crop with no value, growth note, node, or ribbon pixels.
- `block-bitcoin-wordmark` — accepted. The complete orange bitcoin mark and
  wordmark are centered with clean margins and no gross-margin note or node.
- `block-hardware-icon` — accepted. The complete gray hardware tile is centered
  and excludes the adjacent label and margin note.
- Cash App reuses the already validated
  `block-financial-solutions-icon` asset because the Source shows the same green
  dollar tile; `Cash App` remains live localized text in the Adapter.
- The Block cube and `BLOCK` wordmark reuse the already validated
  `block-company-logo` asset because the Q3 Source uses the same identity lockup.

The Q3 Source publisher badge, URL, and footer lockup remain intentionally
skipped. `crop-report-q3-fy25.json` records `validation.passes: true`, zero
forbidden foreground pixels, and accepted compressed runtime copies for all
three new crops.
