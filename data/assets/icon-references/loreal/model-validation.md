# L’Oréal FY25 Icon Crop Validation

Source: `input/processed/loreal-fy25.png`

Spec: `input/icon-crop-specs/loreal-fy25.json`

Generated report: `data/assets/icon-references/loreal/crop-report.json`

## Accepted Crops

- `professional-products-brands.png`: L’Oréal Professionnel, Kérastase, and Redken are complete, visually centered, and exclude the Professional Products label and source bar.
- `consumer-products-brands.png`: L’Oréal Paris, Garnier, and Maybelline New York are complete, visually centered, and exclude the Consumer Products label and source bar.
- `loreal-luxe-brands.png`: Lancôme, Giorgio Armani Beauty, and Helena Rubinstein are complete, visually centered, and exclude the L’Oréal Luxe label and source bar.
- `active-cosmetics-brands.png`: La Roche-Posay, Vichy, and CeraVe are complete, visually centered, and exclude the Active Cosmetics label and source bar.

All four crops have `passes: true` in `crop-report.json`. The reference crops are not used directly at runtime; separately generated runtime copies are in `data/assets/raster-annotations/loreal/`.

## Explicitly Skipped

- The `HOW THEY MAKE MONEY` badge and its miniature Sankey mark.
- `appeconomyinsights.com`, the App Economy Insights footer wordmark, social marks, and other publisher attribution.
