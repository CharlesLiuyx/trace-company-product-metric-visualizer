# Figma icon crop validation

Dataset: `figma-q1-fy26`

Source image: `input/processed/figma-q1-fy26.png`

Spec: `input/icon-crop-specs/figma-q1-fy26.json`

Command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/figma-q1-fy26.json
```

Validated crops:

- `figma-company-app-icon` -> `data/assets/icon-references/figma/crops/company-app-icon.png`
  - Validation sheet: `data/assets/icon-references/figma/validation-sheets/figma-company-app-icon.png`
  - Script validation: passes.
  - Visual validation: complete Figma app icon is included, visually centered, and free of unrelated text, chart marks, connector fragments, watermarks, neighboring icon parts, or publisher attribution.

Skipped source regions:

- App Economy Insights wordmark, appeconomyinsights.com URL, social/attribution badge, and How They Make Money mark are publisher/source attribution and are intentionally excluded.
- No independent company-internal business, product-line, or segment icon clusters are present in the source image.
