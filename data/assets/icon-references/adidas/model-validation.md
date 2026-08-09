# Adidas Q4 FY25 Icon Crop Validation

Source: `input/processed/adidas-q4-fy25.png`
Spec: `input/icon-crop-specs/adidas-q4-fy25.json`
Report: `data/assets/icon-references/adidas/crop-report.json`

Accepted crops:

- `company-logo.png`: adidas mountain mark and wordmark are complete and centered; crop excludes title text, revenue label, and flow marks.
- `business-footwear.png`: white sneaker product photo is complete and centered enough for runtime placement; crop excludes the Footwear value/label and the source bar.
- `business-apparel.png`: red track jacket product photo is complete and centered; crop excludes the Apparel value/label and the source bar.
- `business-accessories-gear.png`: duffle bag product photo is complete with source-proportional right/bottom whitespace; crop excludes the Accessories & Gear value/label and the source bar.

Skipped:

- Publisher "HOW THEY MAKE MONEY" badge, mini Sankey icon, website URL, and "APP ECONOMY INSIGHTS" footer attribution are source branding, not Adidas income-statement semantics.

Runtime raster status:

- Runtime copies were generated under `data/assets/raster-annotations/adidas/`.
- The dataset must set `render.allowRasterAnnotations = true` and reference only the runtime copies, not the icon-reference crops.

## Adidas Q3 FY25

Source: `input/processed/adidas-q3-fy25.png`
Spec: `input/icon-crop-specs/adidas-q3-fy25.json`
Report: `data/assets/icon-references/adidas/crop-report-q3-fy25.json`

Accepted crops:

- `q3-fy25-business-footwear.png`: the full white sneaker is centered, including sole and toe, with no value text, label, or chart mark.
- `q3-fy25-business-apparel.png`: the full red track jacket and both sleeves are centered, with no neighboring text or source bar.
- `q3-fy25-business-accessories-gear.png`: the complete duffle bag, straps, handles, and Adidas mark are retained without neighboring label or chart pixels.

Reused asset:

- `company-logo.png`: the Q3 source logo crop is pixel-identical to the previously validated Adidas company logo, so the existing runtime copy is reused.

Skipped:

- Publisher "HOW THEY MAKE MONEY" badge, mini Sankey icon, website URL, and "APP ECONOMY INSIGHTS" footer attribution are non-semantic publisher branding.

Runtime raster status:

- Q3 product runtime copies were generated under `data/assets/raster-annotations/adidas/`.
- The dataset references only those runtime copies and the previously validated Adidas logo runtime asset.
