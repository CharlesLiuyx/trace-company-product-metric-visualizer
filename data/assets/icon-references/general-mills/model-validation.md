# General Mills icon-crop validation — Q3 FY26

Source: `input/processing/general-mills-q3-fy26.png` (active Build claim;
authored references retain the stable `input/processed/` locator).

All five crops were visually reviewed against the native Source and their
validation sheets and accepted:

- `company-logo-q3-fy26.png` — complete General Mills monogram, heart, and
  wordmark; no title, Net sales label, or flow pixels.
- `north-america-retail-product-cluster-q3-fy26.png` — complete product-pack
  collage; no adjacent business label or source-node pixels.
- `pet-product-cluster-q3-fy26.png` — complete Blue Buffalo and pet-food
  product collage; no Pet label or source-node pixels.
- `north-america-foodservice-product-cluster-q3-fy26.png` — complete
  Pillsbury/Cheerios/Nature Valley cluster; no segment-margin, business-label,
  or source-node pixels.
- `international-product-cluster-q3-fy26.png` — complete international
  product cluster; no business-label or publisher pixels.

The extractor's border, centering, forbidden-pixel, background-removal, and
compression checks pass in `crop-report-q3-fy26.json`. Only the derived
runtime copies under `data/assets/raster-annotations/general-mills/` are
referenced by the dataset Adapter; the `crops/` directory remains
reference-only.
