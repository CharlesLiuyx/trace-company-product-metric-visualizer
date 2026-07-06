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
