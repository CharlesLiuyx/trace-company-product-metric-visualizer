# P&G icon-crop validation — Q2 FY26

Source: `input/processing/p-g-q2-fy26.png` (active Build claim; authored
references retain the stable `input/processed/` locator).

- `company-logo-q2-fy26.png` — accepted. The complete circular P&G orb, its
  bevel, and the white P&G wordmark are centered with no title, label, or flow
  pixels included.
- `beauty-product-cluster-q2-fy26.png` — accepted. The Beauty product-pack
  collage is complete and isolated from the business label and source bar.
- `grooming-product-cluster-q2-fy26.png` — accepted after tightening the
  right crop edge to remove adjacent label pixels while retaining all packs.
- `health-care-product-cluster-q2-fy26.png` — accepted. The health-care
  product collage is complete, centered, and contains no node or text pixels.
- `fabric-home-care-product-cluster-q2-fy26.png` — accepted after tightening
  the right crop edge to remove the nearby Home Care label.
- `baby-feminine-family-care-product-cluster-q2-fy26.png` — accepted after
  tightening the right crop edge to remove the adjacent business label.

All six crops pass the extractor's border, centering, and forbidden-pixel
checks in `crop-report-q2-fy26.json`. The derived runtime copies are the only
raster files referenced by the dataset adapter; the `crops/` folder remains
reference-only.
