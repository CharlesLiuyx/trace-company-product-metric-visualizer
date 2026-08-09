# PepsiCo Q1 FY26 Icon Crop Validation

Source: `input/processed/pepsico-q1-fy26.png`

Spec: `input/icon-crop-specs/pepsico-q1-fy26.json`

Generated report: `data/assets/icon-references/pepsico/crop-report.json`

## Accepted Crops

- `company-logo.png`: PEPSICO navy wordmark is complete and centered above the revenue hub. Excludes the title, the multicolor globe below it, and the Revenue label.
- `foods-lays-quaker.png`: Lay's and Quaker brand marks (both components) are complete and centered for the Foods revenue line. Excludes the `Foods` label text to the right.
- `beverages-pepsi.png`: round Pepsi globe logo is complete and centered for the PepsiCo Beverages revenue line. Excludes the `PepsiCo Beverages` label text.
- `ib-sodastream.png`: SodaStream Pepsi bottle is complete and centered for the IB franchise revenue line. A later Q2 audit found that its wide right margin also retained the first `I` glyph from the adjacent `IB franchise` label, so it is not reused by the Q2 adapter.
- `revenue-globe.png`: multicolor wireframe globe above the Revenue hub is complete and centered. Excludes the PEPSICO wordmark above and the Revenue label below.
- `globe-north-america.png`: North America globe is complete and centered above the North America node.
- `globe-latam.png`: Latin America globe is complete and centered, left of the LATAM label.
- `globe-emea.png`: both EMEA globes (Europe and Africa/Middle East) are complete and centered, left of the EMEA label.
- `globe-apac.png`: Asia Pacific globe is complete and centered, left of the APAC label.

All nine crops have `passes: true` in `crop-report.json`, with zero edge foreground pixels and zero forbidden foreground pixels. The chart background `[242, 242, 242]` is pinned in `backgroundRemoval.color` so the PEPSICO wordmark (which fills its frame) removes the true background rather than an auto-sampled navy. All nine are synced to `data/assets/raster-annotations/pepsico/` via `runtimeOutputDir` and used as approved runtime raster annotations (`render.allowRasterAnnotations = true`, `data.rasterAnnotations`), since each is a photographic brand mark or globe illustration rather than a flat vector icon.

## Explicitly Skipped

- App Economy Insights watermark, `appeconomyinsights.com` website URL, and the bottom-right APP ECONOMY INSIGHTS footer logo.
- The bottom-left `HOW THEY MAKE MONEY` badge and mini sankey mark.

No segment is icon-less: every drawn revenue line (Foods, PepsiCo Beverages, IB franchise, LATAM, EMEA, APAC) and the North America aggregate plus the Revenue hub has a corresponding accepted crop.

## Q2 FY26 derivative

Source asset: `data/assets/raster-annotations/pepsico/ib-sodastream.png`

Spec: `input/icon-crop-specs/pepsico-q2-fy26.json`

Generated report: `data/assets/icon-references/pepsico/crop-report-q2-fy26.json`

- `ib-sodastream-q2-fy26.png`: accepted after tightening the tracked Q1
  raster's right edge. The complete bottle is preserved while the stray `I`
  glyph is excluded. The crop has `passes: true`, zero edge foreground
  pixels, and balanced source margins; visual inspection of the validation
  sheet confirms that no label, node, or flow pixels remain.

The Q2 adapter references only this clean derivative for the IB franchise
annotation. The other eight PepsiCo annotations remain the reviewed reusable
company assets.
