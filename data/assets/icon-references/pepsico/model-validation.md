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

## PepsiCo Q4 FY22 source-specific annotations

Source: `input/processed/pepsico-q4-fy22.png`

Spec: `input/icon-crop-specs/pepsico-q4-fy22.json`

Generated report: `data/assets/icon-references/pepsico/crop-report-q4-fy22.json`

The nine Q4 FY22 crops all pass with zero edge and forbidden foreground
pixels. Visual review confirms that the Lay's and Quaker marks are complete
and isolated from their labels; the PEPSICO wordmark and multicolor revenue
globe are separate; and the North America, LATAM, Europe, AMESA, and APAC
globe subjects contain no neighboring chart text. The period reuses the
already accepted `beverages-pepsi.png` crop for the unchanged Pepsi mark.

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

## Q1 FY24 separated icon set

Source: `input/processing/pepsico-q1-fy24.png`

Spec: `input/icon-crop-specs/pepsico-q1-fy24.json`

Generated report: `data/assets/icon-references/pepsico/crop-report-q1-fy24.json`

- `lays-q1-fy24.png`: complete Lay's round mark with balanced clear space;
  excludes the Frito-Lay label and chart geometry.
- `quaker-q1-fy24.png`: complete Quaker portrait, wordmark, and founding-year
  line; excludes the adjacent Quaker Foods label and connector.
- `globe-europe-q1-fy24.png`: complete Europe globe with no adjacent label or
  bar pixels.
- `globe-amesa-q1-fy24.png`: complete Africa, Middle East, and South Asia globe
  with no portion of the long AMESA label.

All four crops pass the extractor's edge, centering, and forbidden-pixel
checks. The four validation sheets were visually reviewed at native scale:
subjects are complete, transparent backgrounds are clean, and no neighboring
text, watermark, or flow pixel remains. The Q1 FY24 Adapter reuses the six
already validated PepsiCo assets for the company wordmark, Pepsi logo, Revenue
globe, North America globe, LATAM globe, and APAC globe; the separated Source
layout requires the four Q1-specific crops above.

## Q4 FY24 source-specific crops

Source: `input/processed/pepsico-q4-fy24.png`

Spec: `input/icon-crop-specs/pepsico-q4-fy24.json`

Generated report: `data/assets/icon-references/pepsico/crop-report-q4-fy24.json`

- `lays-q4-fy24.png`: accepted; the complete round Lay's mark is centered and
  excludes the Frito-Lay label, node, and flow.
- `quaker-q4-fy24.png`: accepted; the portrait, QUAKER wordmark, and EST. 1877
  line are complete, with no adjacent label or chart geometry.
- `globe-europe-q4-fy24.png`: accepted; the complete Europe globe is isolated
  from the Europe label, value, and source bar.
- `globe-amesa-q4-fy24.png`: accepted; the complete Africa, Middle East, and
  South Asia globe is isolated from the long adjacent label and chart marks.

All four crops pass the extractor's foreground-edge, centering, forbidden-pixel,
background-removal, and compression checks. Visual inspection of their generated
validation sheets confirms complete subjects and no unrelated text, connectors,
watermarks, or neighboring icons. The adapter reuses the already accepted
company wordmark, Pepsi mark, revenue globe, and North America/LATAM/APAC globes.

## Q4 FY23 additions

Source: `input/processing/pepsico-q4-fy23.png`

Spec: `input/icon-crop-specs/pepsico-q4-fy23.json`

Generated report: `data/assets/icon-references/pepsico/crop-report-q4-fy23.json`

The four new crops pass native-scale visual validation:

- `frito-lay-q4-fy23.png` contains the complete Lay's mark with no adjacent
  Frito-Lay label or flow pixels.
- `quaker-q4-fy23.png` contains the complete Quaker portrait, wordmark, and
  founding line with no adjacent label or flow pixels.
- `globe-europe-q4-fy23.png` contains only the Europe globe.
- `globe-amesa-q4-fy23.png` contains only the Africa, Middle East and South
  Asia globe.

All four report `passes: true`, have zero forbidden foreground pixels, and
use the pinned `[242, 242, 242]` Source background. They are synchronized to
`data/assets/raster-annotations/pepsico/` as approved runtime copies. The
company wordmark, Pepsi mark, revenue globe, North America globe, LATAM globe,
and APAC globe are materially the same as the already accepted PepsiCo assets
and are reused rather than duplicated.
