# GE Vernova Q4 FY25 Icon Crop Validation

Dataset: `ge-vernova-q4-fy25`
Source image: `input/processed/ge-vernova-q4-fy25.png` (resolved through the active processing claim)
Spec: `input/icon-crop-specs/ge-vernova-q4-fy25.json`
Generated report: `data/assets/icon-references/ge-vernova/crop-report.json`

## Accepted Crops

- `ge-vernova-company-logo` → `crops/company-logo.png`
  - Validation sheet: `validation-sheets/ge-vernova-company-logo.png`
  - Pass. The GE circular monogram and GE VERNOVA wordmark are complete,
    centered, and exclude the title, Revenue label, flows, and publisher marks.
- `ge-vernova-power-icon` → `crops/power-icon.png`
  - Validation sheet: `validation-sheets/ge-vernova-power-icon.png`
  - Pass. The complete teal circle and lime lightning icon are centered and
    exclude the Power label, value text, node bar, and publisher material.
- `ge-vernova-wind-icon` → `crops/wind-icon.png`
  - Validation sheet: `validation-sheets/ge-vernova-wind-icon.png`
  - Pass. The complete teal circle and lime wind-turbine line art are centered
    and exclude the Wind label, value text, node bar, and publisher material.
- `ge-vernova-electrification-icon` → `crops/electrification-icon.png`
  - Validation sheet: `validation-sheets/ge-vernova-electrification-icon.png`
  - Pass. The complete teal circle and lime transmission-tower line art are
    centered and exclude the Electrification label, value text, node bar, and
    publisher material.

All four validated source crops are compressed runtime rasters under
`data/assets/raster-annotations/ge-vernova/`, and the dataset explicitly opts
in through `render.allowRasterAnnotations = true`.

## Skipped Regions

- The lower-left HOW THEY MAKE MONEY mark and miniature Sankey, the central
  `appeconomyinsights.com` URL, and the lower-right APP ECONOMY INSIGHTS
  lockup are publisher attribution rather than GE Vernova chart objects.
- Revenue, profit, cost, and segment labels are financial data/text rendered by
  the Sankey adapter, rather than reusable visual assets.

Every company and business icon cluster in the source is accounted for.
