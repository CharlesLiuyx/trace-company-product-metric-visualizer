# DiDi icon crop — model validation

Source: `input/processed/didi-q1-fy26.png` (2667×1500)
Spec: `input/icon-crop-specs/didi-q1-fy26.json`
Report: `data/assets/icon-references/didi/crop-report.json`

## didi-company-logo

- Crop: `crops/company-logo.png` (530×172), runtime copy
  `data/assets/raster-annotations/didi/company-logo.png`.
- Source placement (`cropBox`): x0=565, y0=262, x1=1095, y1=434.
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (0.0, 0.0), 6px margins all sides.
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the orange DiDi glyph plus the full grey "DiDi" wordmark
    are intact; the glyph's negative-space bowl and all wordmark strokes are
    present.
  - Centered: subject sits centered in the crop with even 6px margins.
  - No unrelated content: the title, "in RMB" note, Revenue label, segment
    text, and publisher/attribution marks are excluded; the gray page
    background was removed to transparency (edge-connected).

## didi-china-mobility-tile

- Crop: `crops/china-mobility-tile.png` (176×146), runtime copy
  `data/assets/raster-annotations/didi/china-mobility-tile.png`.
- Source placement (`cropBox`): x0=139, y0=490, x1=315, y1=636.
- Script validation: `passes: true` — centerOffset (0.0, 0.0),
  forbiddenForegroundPixels 0.
- Kept as an **opaque, background-matched rectangular patch** (background
  removal disabled) rather than a transparent die-cut icon: the near-white tile
  (only ~13/255 from the #f2f2f2 page background) cannot be threshold-separated
  from the page and its soft drop shadow without either erasing the tile or
  leaving edge speckle. Because the tile sits on the uniform #f2f2f2 chart
  background, the gray corners and soft shadow blend seamlessly when the patch
  is re-placed at the source coordinates. `borderBand` is therefore 0 — the
  edge-foreground clipping check (meant for transparent icons) does not apply;
  `threshold: 8` still detects the tile as the subject so the crop is centered
  and centerOffset is validated.
- Visual/model check (crop + validation sheet reviewed): **accepted**.
  - Complete subject: the white rounded app-icon tile with the orange DiDi
    glyph and soft shadow is intact and centered.
  - No unrelated content: the "China Mobility" label, the "52.2B"/"+9% Y/Y"
    value block, the segment node bar, and the Revenue flow are excluded.

Both semantically relevant icon clusters in the source are extracted: the DiDi
company brand lockup and the China Mobility segment app-icon tile. The
International and Other-initiatives segments are text-only (no independent
icon), and the publisher/"HOW THEY MAKE MONEY"/"APP ECONOMY INSIGHTS" marks are
skipped attribution content — none require crops.

Both runtime copies are embedded as whitelisted runtime raster annotations
(`render.allowRasterAnnotations = true`, `data.rasterAnnotations`), following
the Meituan/Tencent company-logo precedent, because the DiDi glyph and wordmark
cannot be reproduced with the Montserrat text/vector stack used for labels.
