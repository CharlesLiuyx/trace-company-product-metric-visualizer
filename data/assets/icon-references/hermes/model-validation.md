# Hermès FY25 Icon Crop Validation

Source: `input/processed/hermes-fy25.png`
Spec: `input/icon-crop-specs/hermes-fy25.json`
Report: `data/assets/icon-references/hermes/crop-report.json`

Accepted crops:

- `hermes-brandmark.png`: carriage-and-wordmark cluster is complete, centered, and excludes the title, revenue label, and ribbons.
- `leather-goods-saddlery.png`: handbag product image is complete and isolated from the label and source bar.
- `ready-to-wear-accessories.png`: belt product image is complete and isolated from the label and source bar.
- `silk-textiles.png`: scarf product image is complete, centered, and has no neighbouring chart marks.
- `perfume-beauty.png`: perfume bottle is complete and excludes the adjacent watch image.
- `watches.png`: watch image is complete and excludes the lower `Other products` label.

Skipped:

- The "HOW THEY MAKE MONEY" badge, miniature Sankey mark, website URL, and App Economy Insights footer wordmark are publisher attribution rather than Hermès income-statement content.

Runtime raster status:

- Approved runtime copies were generated under `data/assets/raster-annotations/hermes/`.
- The dataset enables `render.allowRasterAnnotations` and references only the runtime copies; it never references icon-reference crops.
