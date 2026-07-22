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

## Q3 FY26

All six Q3 crops were visually reviewed against their validation sheets and
accepted. The P&G orb, Beauty cluster, and Grooming cluster are pixel-identical
to Q2 at the measured source boxes; Q3-specific runtime copies keep the Source
lineage explicit. Health Care, Fabric & Home Care, and Baby, Feminine & Family
Care changed in the Q3 Source and therefore use newly extracted Q3 assets.

- `company-logo-q3-fy26.png` — accepted. Complete circular P&G orb and white
  wordmark; no title, Net sales label, or flow pixels.
- `beauty-product-cluster-q3-fy26.png` — accepted. Complete Beauty product
  collage; no label or source-node pixels.
- `grooming-product-cluster-q3-fy26.png` — accepted. Complete Grooming product
  collage; no label or source-node pixels.
- `health-care-product-cluster-q3-fy26.png` — accepted. Complete Health Care
  product collage; no adjacent text or Sankey marks.
- `fabric-home-care-product-cluster-q3-fy26.png` — accepted. Complete product
  row; the rightmost pack is intact and no label or node pixels are present.
- `baby-feminine-family-care-product-cluster-q3-fy26.png` — accepted. Charmin,
  Bounty, and Puffs packs are complete; no adjacent label or publisher mark.
