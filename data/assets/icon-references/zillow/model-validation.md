# Zillow Q4 FY25 Icon Crop Validation

Source: `input/processed/zillow-q4-fy25.png`
Spec: `input/icon-crop-specs/zillow-q4-fy25.json`
Generated report: `data/assets/icon-references/zillow/crop-report.json`

## Accepted Crops

- `crops/company-wordmark-q4-fy25.png`
  - Subject: Zillow Group company wordmark.
  - Validation sheet: `validation-sheets/zillow-company-wordmark.png`.
  - Result: accepted after a localization-round recrop. The complete wordmark and registered mark retain 16px left/top/bottom and 17px right clear margins; the adjacent `Gross profit` label is excluded together with the title, links, and publisher marks.

- `crops/premier-agent-wordmark-q4-fy25.png`
  - Subject: Zillow Premier Agent business wordmark for Residential revenue.
  - Validation sheet: `validation-sheets/zillow-premier-agent-wordmark.png`.
  - Result: accepted. The house mark, Zillow wordmark, yellow rule, and Premier Agent line are complete and centered with 15px clear margins; the Residential label and chart marks are excluded.

- `crops/rentals-wordmark-q4-fy25.png`
  - Subject: Zillow Rentals business wordmark.
  - Validation sheet: `validation-sheets/zillow-rentals-wordmark.png`.
  - Result: accepted. The complete mark and two-line wordmark are centered with 15px clear margins and contain no value text, node, link, or attribution pixels.

- `crops/home-loans-wordmark-q4-fy25.png`
  - Subject: Zillow Home Loans business wordmark.
  - Validation sheet: `validation-sheets/zillow-home-loans-wordmark.png`.
  - Result: accepted. The complete mark and wordmark are centered with 15px clear margins and contain no value text, node, link, or attribution pixels.

All four crops pass the extractor validation, have edge-connected source-background removal, and have runtime copies generated under `data/assets/raster-annotations/zillow/`.

## Skipped Source Elements

- The "How They Make Money" mark and mini Sankey graphic are publisher branding and intentionally excluded.
- `appeconomyinsights.com` is a publisher URL and intentionally excluded.
- The App Economy Insights account badge and footer wordmark are publisher attribution and intentionally excluded.

All semantically relevant Zillow company and business/segment icon clusters in the source image are accounted for.
