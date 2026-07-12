# Hershey Q1 FY26 Icon Crop Validation

Dataset: `hershey-q1-fy26`

Source: `input/processed/hershey-q1-fy26.png`

Validation command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/hershey-q1-fy26.json
```

## Accepted crops

- `q1-fy26-company-wordmark.png`: full burgundy Hershey wordmark and
  chocolate-kiss lock-up; excludes the title, labels, and chart ribbons.
- `q1-fy26-north-america-confectionery-products.png`: complete Jolly Rancher
  and Reese's product-pack cluster, centered with no chart text.
- `q1-fy26-north-america-salty-snacks-products.png`: complete Dot's Pretzels
  and SkinnyPop product-pack cluster, centered with no segment-margin text.
- `q1-fy26-international-products.png`: complete Kisses and beverage
  product-pack cluster, centered with no adjacent segment label.

Every crop passed the spec validation (`passes: true`), uses a transparent
edge-connected background removal, and is emitted separately into the approved
runtime raster directory.

## Intentionally skipped

- The HOW THEY MAKE MONEY badge and mini-Sankey are publisher branding.
- The `appeconomyinsights.com` URL, APP ECONOMY INSIGHTS lock-up, and social
  badge are publisher attribution.
