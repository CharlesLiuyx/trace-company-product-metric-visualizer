# Intuit Icon Crop Validation

Dataset: `intuit-q3-fy26`

## Accepted Crops

- `intuit-company-wordmark` -> `crops/company-wordmark.png`
  - Validation sheet: `validation-sheets/intuit-company-wordmark.png`
  - Result: pass
  - Visual check: the INTUIT corporate wordmark (six custom geometric letterforms in Intuit blue) is complete, visually centered, and free of the chart title above, the Revenue label below, and any flow-band pixels. Used as the tracing reference for the vector `meta.logoSvg` letterform paths.
- `intuit-quickbooks-icon` -> `crops/quickbooks-icon.png`
  - Validation sheet: `validation-sheets/intuit-quickbooks-icon.png`
  - Result: pass
  - Visual check: the QuickBooks app icon (green circle with the white qb monogram) is complete, visually centered, and free of the adjacent Mailchimp mascot and the intuit quickbooks wordmark below. Used as the tracing reference for the vector qb monogram in the dataset annotations.
- `intuit-mailchimp-icon` -> `crops/mailchimp-icon.png`
  - Validation sheet: `validation-sheets/intuit-mailchimp-icon.png`
  - Result: pass
  - Visual check: the Mailchimp Freddie mascot head (black-and-white winking monkey with cap) is complete, visually centered, and free of the adjacent QuickBooks icon and the intuit mailchimp wordmark below. The mascot art is too complex for faithful vector tracing, so the runtime copy `data/assets/raster-annotations/intuit/mailchimp-icon.png` is embedded via `data.rasterAnnotations` with `render.allowRasterAnnotations = true`.
- `intuit-turbotax-icon` -> `crops/turbotax-icon.png`
  - Validation sheet: `validation-sheets/intuit-turbotax-icon.png`
  - Result: pass
  - Visual check: the TurboTax check icon (red circle with white checkmark) is complete, visually centered, and free of the intuit and turbotax wordmark text. Two adjustments were needed: the bottom 2px strip is excluded because the turbotax "t" ascenders start 1px below the circle, and the spec pins `backgroundRemoval.color` to `[242, 242, 242]` because corner-block sampling on this small crop was skewed by the red circle (sampled `(237, 212, 212)`), which had left the top background opaque. Used as the tracing reference for the vector check icon in the dataset annotations.
- `intuit-credit-karma-wordmark` -> `crops/credit-karma-wordmark.png`
  - Validation sheet: `validation-sheets/intuit-credit-karma-wordmark.png`
  - Result: pass
  - Visual check: the green credit karma wordmark including the small trademark mark is complete, visually centered, and free of the +15% Y/Y note above and the blue Credit Karma source bar 35px to the right. Rebuilt as vector SVG text in the dataset annotations.

## Skipped Regions

- ProTax segment: labeled with plain text only; no business icon exists in the source chart.
- Publisher "How they make money" badge and mini sankey logo: skipped as source publisher branding.
- App Economy Insights website URL watermark and footer logo: skipped as source publisher branding.
