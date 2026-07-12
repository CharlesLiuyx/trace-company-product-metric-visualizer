# On Q1 FY26 Icon Crop Validation

Dataset: `on-q1-fy26`
Source image: `input/processed/on-q1-fy26.png`
Spec: `input/icon-crop-specs/on-q1-fy26.json`
Generated report: `data/assets/icon-references/on/crop-report.json`

## Accepted Crops

- `on-company-logo` -> `crops/company-logo.png`
  - Validation sheet: `validation-sheets/on-company-logo.png`
  - Result: Pass. The complete black On mark is centered with no title, Revenue
    label, flow, or publisher material. `passes: true`, zero edge and forbidden
    foreground pixels, center offset (0, 0).
- `on-shoes-product` -> `crops/shoes-product.png`
  - Validation sheet: `validation-sheets/on-shoes-product.png`
  - Result: Pass. The whole blue running shoe is centered and excludes the
    product label, value text, node bar, and publisher marks. `passes: true`,
    zero edge and forbidden foreground pixels, center offset (0, 0).
- `on-apparel-product` -> `crops/apparel-product.png`
  - Validation sheet: `validation-sheets/on-apparel-product.png`
  - Result: Pass. The complete orange shirt is centered and excludes the
    Apparel label, value text, node bar, and publisher marks. `passes: true`,
    zero edge and forbidden foreground pixels, center offset (0, -0.0026).
- `on-accessories-product` -> `crops/accessories-product.png`
  - Validation sheet: `validation-sheets/on-accessories-product.png`
  - Result: Pass. The complete black cap is centered and excludes the
    Accessories label, value text, node bar, and publisher marks. `passes:
    true`, zero edge and forbidden foreground pixels, center offset (0, 0).

All accepted crops are source photographic or brand raster clusters. They are
written as compressed runtime assets under `data/assets/raster-annotations/on/`
and are explicitly declared by `on-q1-fy26` with
`render.allowRasterAnnotations = true`.

## Skipped Regions

- The bottom-left "HOW THEY MAKE MONEY" mark, bottom-center
  `appeconomyinsights.com`, and bottom-right "APP ECONOMY INSIGHTS" lockup are
  publisher attribution rather than chart or company assets.
- Revenue, wholesale, direct-to-consumer, profit, cost, and other labels are
  data/visual text, not reusable icon clusters.

Every company or business/product image cluster relevant to the source chart is
accounted for.
