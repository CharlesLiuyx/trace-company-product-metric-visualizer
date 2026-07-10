# Procore icon crop validation

Dataset: `procore-q4-fy25`

Source image: `input/processed/procore-q4-fy25.png`

Spec: `input/icon-crop-specs/procore-q4-fy25.json`

Command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/procore-q4-fy25.json
```

Validated crop:

- `procore-company-wordmark` → `data/assets/icon-references/procore/crops/company-wordmark.png`
  - Validation sheet: `data/assets/icon-references/procore/validation-sheets/procore-company-wordmark.png`
  - Script validation: passes; the background removal leaves a `0.5113` transparent-pixel ratio.
  - Visual validation: the complete Procore wordmark and orange hexagonal mark are centered and free of chart flow, labels, watermarks, publisher branding, URL, or attribution artifacts.
  - Runtime decision: this crop is a reference/conversion asset only. The adapter uses a pure-SVG wordmark reconstruction and does not embed the raster crop.

Skipped source regions:

- The How They Make Money mark, appeconomyinsights.com URL, App Economy Insights badge, and related watermark/attribution are publisher branding and intentionally excluded.
- No independent Procore business, product-line, or segment icon clusters are present in the source image.
