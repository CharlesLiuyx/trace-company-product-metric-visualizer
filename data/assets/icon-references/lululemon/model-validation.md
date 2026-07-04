# Lululemon Q1 FY26 Icon Crop Validation

Dataset: `lululemon-q1-fy26`
Source image: `input/processed/lululemon-q1-fy26.png`
Spec: `input/icon-crop-specs/lululemon-q1-fy26.json`
Generated report: `data/assets/icon-references/lululemon/crop-report.json`

## Accepted Crops

- `lululemon-operated-stores-wordmark` -> `crops/operated-stores-wordmark.png`
  - Validation sheet: `validation-sheets/lululemon-operated-stores-wordmark.png`
  - Result: Pass. The full lululemon omega mark plus "lululemon" wordmark beside the
    Operated stores revenue line is included, centered, and separated from the
    "Operated stores" label below, the node bar to its right, chart flows, and
    publisher marks. `passes: true`, zero edge foreground pixels, zero forbidden
    foreground pixels, center offset (0.0, -0.0064).
- `lululemon-direct-to-consumer-phones` -> `crops/direct-to-consumer-phones.png`
  - Validation sheet: `validation-sheets/lululemon-direct-to-consumer-phones.png`
  - Result: Pass. All three app-screenshot phones tied to the Direct to consumer
    revenue line are fully included with their frames intact, centered, and
    separated from the "Direct to consumer" label below, chart flows, KPI cards,
    and publisher marks. Background removal is disabled for this crop because it is
    a photograph whose grey phone bezels are subject, not page background.
    `passes: true`, zero edge foreground pixels, center offset (-0.0016, -0.0027).

Both accepted crops are photographic/wordmark raster clusters rather than flat
vector icons, so both are synced to `data/assets/raster-annotations/lululemon/`
via `runtimeOutputDir` and used as approved runtime raster annotations
(`render.allowRasterAnnotations = true`, `data.rasterAnnotations`).

## Rendered as Vector (not a crop)

- The large lululemon omega mark above the Revenue hub is reproduced as an inline
  vector `meta.logoSvg` in `data/datasets/lululemon-q1-fy26.js`, following the
  fidelity-loop preference for vector conversion over raster embedding for clean
  geometric logos. It is therefore intentionally not extracted as a raster crop.

## Skipped Regions

- Bottom-left "HOW THEY MAKE MONEY" mark, bottom-center `appeconomyinsights.com`
  website, and bottom-right "APP ECONOMY INSIGHTS" mark are publisher/attribution
  elements and intentionally excluded.
- The bottom "816 stores +6% Y/Y" and "Comparable sales / Americas / International"
  KPI cards and the "Women / Men / Other" revenue callout are text-only chart
  annotations, not reusable company or business icon assets.
- The "Other revenue" line has no independent business icon and is skipped.

All semantically relevant company and business/segment icon clusters in the
source image are accounted for.
