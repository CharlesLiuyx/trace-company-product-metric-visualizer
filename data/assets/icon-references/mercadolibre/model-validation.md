# MercadoLibre Q4 FY25 Icon Crop Validation

Source image: `input/processed/mercadolibre-q4-fy25.png`
Spec: `input/icon-crop-specs/mercadolibre-q4-fy25.json`
Report: `data/assets/icon-references/mercadolibre/crop-report.json`

## Accepted crops

- `mercadolibre-corporate-handshake` → `crops/corporate-handshake.png`
- `mercadolibre-commerce-brand` → `crops/commerce-brand.png`
- `mercadolibre-ads-brand` → `crops/ads-brand.png`
- `mercadolibre-envios-brand` → `crops/envios-brand.png`
- `mercadolibre-pago-brand` → `crops/pago-brand.png`
- `mercadolibre-credito-brand` → `crops/credito-brand.png`

All six crops passed `scripts/extract_icon_crops.py`: each reports zero forbidden foreground pixels and a centered, complete subject. I visually reviewed the extracted transparent assets and their validation sheets. The Envios, Pago, and Credito boxes were tightened after the first review to remove adjacent growth figures or descriptive copy; the accepted versions contain only their intended brand clusters. The runtime copies under `data/assets/raster-annotations/mercadolibre/` are the only image assets used by `mercadolibre-q4-fy25`.

## Skipped source elements

- Commerce and Fintech labels, descriptions, and financial values are localized SVG text, not reusable icon assets.
- The `HOW THEY MAKE MONEY` mark, mini-Sankey, `appeconomyinsights.com`, social badge, and App Economy Insights footer are publisher attribution and intentionally skipped.

## Notes

- Background removal uses edge-connected sampling of the source `#f2f2f2` page background.
- Reference crops stay under `icon-references/`; the dataset declares the separate `raster-annotations/` files with explicit image embedding enabled.

## MercadoLibre Q1 FY26

Source image: `input/processed/mercadolibre-q1-fy26.png`
Spec: `input/icon-crop-specs/mercadolibre-q1-fy26.json`
Report: `data/assets/icon-references/mercadolibre/q1-fy26-crop-report.json`

I visually reviewed all six Q1 validation sheets. The corporate handshake,
Mercado Libre, Mercado Ads, Mercado Envios, Mercado Pago, and Mercado Credito
subjects are complete, centered, and isolated from the nearby financial labels,
flow ribbons, descriptive copy, and publisher attribution. Every crop passed
the script checks with zero forbidden foreground pixels. Q1 runtime copies use
the isolated `raster-annotations/mercadolibre/q1-fy26/` path, so the existing
Q4 runtime assets remain unchanged.
