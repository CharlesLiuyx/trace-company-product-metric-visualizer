# Marvell Icon Crop Validation

Dataset: `marvell-q4-fy26`

## marvell-company-logo

- Source: `input/processed/marvell-q4-fy26.png`
- Crop: `data/assets/icon-references/marvell/crops/company-logo.png`
- Validation sheet: `data/assets/icon-references/marvell/validation-sheets/marvell-company-logo.png`
- Script result: `passes: true`
- Model review: accepted. The company logo subject is complete, visually centered, and free of unrelated text, connector lines, publisher marks, and neighboring icons.
- Runtime use: not used as a raster annotation. The dataset uses a pure inline SVG approximation in `meta.logoSvg`.

Skipped source marks: the bottom "HOW THEY MAKE MONEY" mark, `appeconomyinsights.com`, and App Economy Insights attribution are publisher/creator marks and are not reusable semantic assets.
