# Boeing icon crop — model validation

Source: `input/processed/boeing-q1-fy26.png` (2667×1500)
Spec: `input/icon-crop-specs/boeing-q1-fy26.json`
Report: `data/assets/icon-references/boeing/crop-report.json`

## boeing-737-tile

- Crop: `crops/commercial-airplanes-737.png` (291×98), runtime copy
  `data/assets/raster-annotations/boeing/commercial-airplanes-737.png`.
- Source placement (`cropBox`): x0=99, y0=325, x1=390, y1=423. The searchBox
  right edge spans to x390 so the airplane's forward nose (which reaches ~x380)
  is captured in full; the "$9.2B" value block begins at ~x414, leaving a clean
  ~30px background gap, so no text is pulled into the crop.
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (0.0, 0.0), 10px margins all sides.
- Kept as an **opaque, background-matched rectangular patch** (background
  removal disabled): the photographic Boeing 737 MAX sits on the uniform
  #f2f2f2 chart background, so the padded corners blend seamlessly when the
  patch is re-placed at the source coordinates. `borderBand` is 0 — the
  edge-foreground clipping check (meant for transparent die-cut icons) does not
  apply; `threshold: 14` still detects the airplane as the subject so the crop
  is centered and centerOffset is validated.
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the full 737 (fuselage, blue livery, "737" tail, both
    winglets, engine nacelle) is intact and centered with even 10px margins.
  - No unrelated content: the "$9.2B"/"+13% Y/Y" value block, the "Commercial
    Airplanes" name, and the Boeing wordmark logo are excluded.

## boeing-starliner-tile

- Crop: `crops/defense-starliner.png` (136×129, padding 8), runtime copy
  `data/assets/raster-annotations/boeing/defense-starliner.png`.
- Raw `cropBox`: x0=197, y0=588, x1=333, y1=717. In the dataset the tile is
  placed a few px higher (`y: 574`) than its raw source y so the opaque patch
  bottom clears the "Defense, Space" name top (~y705); the capsule photo sits on
  the uniform #f2f2f2 background so the padded corners still blend. This small
  upward nudge is a deliberate de-clash from the label (the source die-cut photo
  overlaps the name top, which an opaque patch cannot reproduce without erasing
  the text).
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (0.0, 0.0), 10px margins all sides.
- Kept as an **opaque, background-matched rectangular patch** for the same
  reason as the 737 tile: the photographic CST-100 Starliner crew capsule sits
  on the uniform #f2f2f2 chart background, so the padded corners blend
  seamlessly at the source coordinates. `borderBand` is 0 (intentional patch,
  not a transparent die-cut); `threshold: 14` detects the capsule as the
  subject and centerOffset is validated.
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the full Starliner capsule (docking ring, service-module
    base, thruster ports) is intact and centered.
  - No unrelated content: the "$7.6B"/"+21% Y/Y" value block and the "Defense,
    Space & Security" name below the capsule are excluded.

Both semantically relevant business/segment icon clusters in the source are
extracted: the Commercial Airplanes 737 photo and the Defense, Space & Security
Starliner photo. The Global Services and Other segments are text-only (no
independent icon). The Boeing company wordmark is reproduced as a vector logo
(`meta` / `annotationsSvg`), not a crop. The publisher / "HOW THEY MAKE MONEY" /
"appeconomyinsights.com" / "APP ECONOMY INSIGHTS" marks are skipped attribution
content — none require crops.

Both runtime copies are embedded as whitelisted runtime raster annotations
(`render.allowRasterAnnotations = true`, `data.rasterAnnotations`), following
the DiDi/Meituan segment-tile precedent, because the photographic 737 and
Starliner imagery cannot be reproduced with the Montserrat text/vector stack
used for labels.

## Q4 FY25 validation

Source: `input/processed/boeing-q4-fy25.png` (2667×1500)
Spec: `input/icon-crop-specs/boeing-q4-fy25.json`
Report: `data/assets/icon-references/boeing/boeing-q4-fy25-crop-report.json`

### boeing-q4-737-tile

- Crop: `crops/boeing-q4-commercial-airplanes-737.png` (291×97); runtime
  copy: `data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png`.
- Source placement: x0=99, y0=368, x1=390, y1=465. It retains the full
  airframe, tail, winglets and engine while excluding the $11.4B value,
  segment text and wordmark.
- Script validation: `passes: true`, with zero edge/forbidden foreground
  pixels and centered 10px margins. The reviewed validation sheet confirms a
  complete subject and no unrelated content. **Accepted.**

### boeing-q4-starliner-tile

- Crop: `crops/boeing-q4-defense-starliner.png` (136×129); runtime copy:
  `data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png`.
- Source placement: x0=197, y0=657, x1=333, y1=786. It retains the complete
  crew capsule and its service-module base while excluding the $7.4B value
  and segment label.
- Script validation: `passes: true`, with zero edge/forbidden foreground
  pixels and centered 8px margins. The reviewed validation sheet confirms a
  complete subject and no unrelated content. **Accepted.**

Both Q4 crops are intentionally opaque, background-matched rectangular
patches on the source's uniform `#f2f2f2` canvas; removing the photographic
background would introduce visible edge noise. The remaining source images
are either the vector-reproduced Boeing wordmark or publisher attribution and
are not runtime crop targets.
