# Intuitive Icon Crop Validation

Dataset: `intuitive-q4-fy25`

## Accepted crops

- `intuitive-company-wordmark` → `crops/intuitive-company-wordmark.png`
  - Validation sheet: `validation-sheets/intuitive-company-wordmark.png`
  - Result: pass — 0 edge foreground pixels, 0 forbidden foreground pixels, center offsets `(-0.0045, -0.0114)`.
  - Visual check: the complete Intuitive wordmark, including the dot above the second `I`, is centered and excludes the report title, Revenue label, and ribbons. Its letterforms are retained through the generated runtime copy `data/assets/raster-annotations/intuitive/intuitive-company-wordmark.png` rather than approximated with a font.
- `intuitive-instruments-accessories-cluster` → `crops/intuitive-instruments-accessories-cluster.png`
  - Validation sheet: `validation-sheets/intuitive-instruments-accessories-cluster.png`
  - Result: pass — 0 edge foreground pixels, 0 forbidden foreground pixels, center offsets `(0.0167, -0.0448)`.
  - Visual check: all visible instrument arms are complete and centered; the crop excludes the Instruments & Accessories label, value, and source ribbon. It is used only through `data/assets/raster-annotations/intuitive/intuitive-instruments-accessories-cluster.png`.
- `intuitive-systems-cluster` → `crops/intuitive-systems-cluster.png`
  - Validation sheet: `validation-sheets/intuitive-systems-cluster.png`
  - Result: pass — 0 edge foreground pixels, 0 forbidden foreground pixels, center offsets `(0.0152, -0.0040)`.
  - Visual check: the full surgical-system cluster and its base are complete and centered; the crop excludes the Systems label, value, and source ribbon. It is used only through `data/assets/raster-annotations/intuitive/intuitive-systems-cluster.png`.

The wordmark and two photographic business clusters use the explicit approved-raster route: `render.allowRasterAnnotations = true` and this dataset's `rasterAnnotations` allowlist. All Sankey geometry, text, and connectors remain native SVG.

## Intentionally skipped

- The bottom-left “How They Make Money” badge and mini-Sankey, `appeconomyinsights.com`, and App Economy Insights footer lockup are publisher attribution rather than semantic chart assets.
- Services has no independent icon cluster in the reference image.
