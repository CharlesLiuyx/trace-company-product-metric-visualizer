# Align Icon Crop Validation

Dataset: `align-q4-fy25`

## Accepted crops

- `align-company-wordmark` → `crops/align-company-wordmark.png`
  - Validation sheet: `validation-sheets/align-company-wordmark.png`
  - Result: pass — 0 edge foreground pixels, 0 forbidden foreground pixels, center offsets `(-0.0291, -0.0200)`.
  - Visual check: the lowercase Align wordmark, including its cyan dot and the `g` descender, is complete and excludes the report title above and Revenue label below. The proprietary letterforms were materially inaccurate as a font approximation, so the validated runtime copy `data/assets/raster-annotations/align/align-company-wordmark.png` is the logo's single rendered instance.
- `clear-aligners-product` → `crops/clear-aligners-product.png`
  - Validation sheet: `validation-sheets/clear-aligners-product.png`
  - Result: pass — 0 edge foreground pixels, 0 forbidden foreground pixels, center offsets `(0.0429, 0.0293)`.
  - Visual check: the open black case and blue clear aligner are complete, visually centered, and exclude the `$838M` value, Clear Aligners label, and source ribbon. This photographic product cluster is used only through the generated runtime copy `data/assets/raster-annotations/align/clear-aligners-product.png`.
- `systems-services-scanner` → `crops/systems-services-scanner.png`
  - Validation sheet: `validation-sheets/systems-services-scanner.png`
  - Result: pass — 0 edge foreground pixels, 0 forbidden foreground pixels, center offsets `(0.0286, 0.0251)`.
  - Visual check: the scanner/cart and its shadow are complete, visually centered, and exclude the `$209M` value, Systems & Services label, and source ribbon. This photographic product cluster is used only through the generated runtime copy `data/assets/raster-annotations/align/systems-services-scanner.png`.

The company wordmark and both product clusters are used only through the explicit approved-raster route: `render.allowRasterAnnotations = true` plus this dataset's `rasterAnnotations` allowlist. The product clusters are photographic; the proprietary wordmark is retained as a crop because its font approximation was materially inaccurate.

## Intentionally skipped

- The publisher's bottom-left "How They Make Money" badge and mini-Sankey, `appeconomyinsights.com`, and App Economy Insights footer branding are attribution, not semantic chart assets.
