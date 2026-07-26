# Birkenstock Q1 FY26 icon crop validation

Source: `input/processed/birkenstock-q1-fy26.png` (2667×1500)  
Spec: `input/icon-crop-specs/birkenstock-q1-fy26.json`  
Report: `data/assets/icon-references/birkenstock/crop-report.json`

All three accepted assets are opaque, background-matched raster patches. The
source has a uniform `#f2f2f2` chart background, so placing each generated
runtime copy at its original crop coordinates preserves the intended visual
without treating the source image as a chart overlay.

## birkenstock-business-to-business-sandal

- Crop: `crops/business-to-business-sandal.png` (365×190); runtime copy:
  `data/assets/raster-annotations/birkenstock/business-to-business-sandal.png`.
- Placement: x=52, y=365, w=365, h=190.
- Script validation: **pass** — `edgeForegroundPixels: 0`,
  `forbiddenForegroundPixels: 0`, `centerOffset: { x: 0.0212, y: 0.0368 }`.
- Visual check: **accepted**. The complete two-strap sandal, footbed, outsole,
  and buckles are intact and centered. No revenue value, label text, source
  bar, connector, attribution, or watermark is present.

## birkenstock-direct-to-consumer-store

- Crop: `crops/direct-to-consumer-store.png` (350×228); runtime copy:
  `data/assets/raster-annotations/birkenstock/direct-to-consumer-store.png`.
- Placement: x=58, y=720, w=350, h=228.
- Script validation: **pass** — `edgeForegroundPixels: 0`,
  `forbiddenForegroundPixels: 0`, `centerOffset: { x: 0.0214, y: 0.0175 }`.
- Visual check: **accepted**. The storefront’s roofline, facade, lettering,
  windows, entrance, and base are complete and centered. It excludes the DTC
  value block, segment text, source bar, and all publisher attribution.

## birkenstock-company-wordmark

- Crop: `crops/company-wordmark.png` (646×135); runtime copy:
  `data/assets/raster-annotations/birkenstock/company-wordmark.png`.
- Placement: x=618, y=278, w=646, h=135.
- Script validation: **pass** — `edgeForegroundPixels: 0`,
  `forbiddenForegroundPixels: 0`, `centerOffset: { x: 0.0008, y: -0.0185 }`.
- Visual check: **accepted**. The custom blue BIRKENSTOCK logotype, including
  the registered-mark detail, is complete and centered. It excludes the title,
  the revenue hub, and all Sankey flows. Raster is retained because the custom
  wordmark cannot be accurately represented by the available font stack.

## Scope accounting

- Relevant image clusters: company wordmark, Business-to-Business sandal, and
  Direct-to-Consumer storefront — all extracted and accepted.
- `Other revenue` has no standalone visual icon and is intentionally skipped.
- The `HOW THEY MAKE MONEY` mark, `appeconomyinsights.com`, App Economy
  Insights badge, and social/attribution fragments are publisher content and
  intentionally skipped; none is used at runtime.

## Q4 FY25 refresh

Source: `input/processed/birkenstock-q4-fy25.png` (2667×1500)
Spec: `input/icon-crop-specs/birkenstock-q4-fy25.json`
Report: `data/assets/icon-references/birkenstock/crop-report-q4-fy25.json`

- `birkenstock-business-to-business-sandal-q4-fy25`: accepted at
  x=60, y=365, w=352, h=171. The full sandal, footbed, outsole and buckles
  are intact and centered. The crop ends on the blank scanlines before the
  Business-to-Business label and contains no value, connector or attribution.
- `birkenstock-direct-to-consumer-store-q4-fy25`: accepted at
  x=58, y=710, w=350, h=224. The full roofline, facade, lettering, windows,
  entrance and base are intact with blank margins above and below. The crop
  ends before the Direct-to-Consumer label and contains no value or connector.
- The company wordmark is pixel-identical to the accepted Q1 FY26 wordmark
  crop at its original x=618, y=278, w=646, h=135 placement, so the existing
  `birkenstock-company-wordmark` runtime asset is reused under I9.
- The Q4 Source has no independent icon for Other revenue. Publisher marks,
  URL, social badge and mini-Sankey remain explicitly skipped.
