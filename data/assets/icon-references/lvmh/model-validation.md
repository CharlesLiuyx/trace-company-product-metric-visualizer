# LVMH FY25 icon-crop validation

Source: `input/processed/lvmh-fy25.png` (resolved from the active
`input/processing/lvmh-fy25.png` claim while this Build is open).

Reviewed after `scripts/extract_icon_crops.py` generated
`crop-report.json` and validation sheets on 2026-07-13.

| crop | acceptance |
| --- | --- |
| `company-wordmark` | Accepted — complete centered LVMH wordmark; title and Revenue text excluded. |
| `business-wines-spirits-cluster` | Accepted — complete Hennessy, Moët & Chandon, and Dom Pérignon marks. |
| `business-fashion-leather-goods-cluster` | Accepted — complete Louis Vuitton, Christian Dior, and Givenchy marks; adjacent segment-label pixels excluded. |
| `business-perfumes-cosmetics-cluster` | Accepted — complete Sephora, Kenzo, and Guerlain marks. |
| `business-watches-jewelry-cluster` | Accepted — complete Bulgari, Hublot, and Tiffany & Co. marks. |
| `business-selective-retailing-cluster` | Accepted — complete DFS and La Grande Épicerie de Paris marks. |
| `business-other-cluster` | Accepted — complete Le Parisien and Les Echos marks. |

All seven extraction validations pass: every subject is complete and centered,
with no chart bars, connectors, labels, publisher branding, or unrelated
adjacent material retained. The assets are approved for the matching
`data/assets/raster-annotations/lvmh/` runtime placements only.

## H1 FY26 incremental validation

Source: `input/processed/lvmh-h1-fy26.png` (resolved from the active
`input/processing/lvmh-h1-fy26.png` claim while this Build is open).

The company wordmark plus Wines & Spirits, Fashion & Leather Goods, Watches &
Jewelry, and Other brand clusters are materially identical to the previously
accepted LVMH assets and reuse those runtime files. The Perfumes & Cosmetics
cluster changed from Sephora/Kenzo/Guerlain to Fenty/Kenzo/Guerlain, while the
Selective Retailing cluster adds a Sephora wordmark; both therefore use new
dataset-specific crops.

| crop | acceptance |
| --- | --- |
| `business-perfumes-cosmetics-cluster-h1-fy26` | Accepted — complete Fenty, Kenzo, and Guerlain marks; no adjacent segment label, chart bar, connector, publisher mark, or unrelated cluster pixels. |
| `business-selective-retailing-cluster-h1-fy26` | Accepted — complete DFS, Sephora, and La Grande Épicerie de Paris marks; no adjacent segment label, chart bar, connector, publisher mark, or unrelated cluster pixels. |
