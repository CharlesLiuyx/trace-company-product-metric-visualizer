# Warby Parker Q3 FY25 icon crop — model validation

Source: `input/processed/warby-parker-q3-fy25.png` (2667×1500)
Spec: `input/icon-crop-specs/warby-parker-q3-fy25.json`
Report: `data/assets/icon-references/warby-parker/crop-report.json`

All three semantically relevant product/channel image clusters were reviewed in
their validation sheets and accepted. Each crop contains the complete subject,
keeps an 8px clear margin on every side, and excludes financial values, labels,
Sankey nodes/links, publisher marks, and neighboring assets.

| key | accepted subject | crop box | validation |
| --- | --- | --- | --- |
| `warby-parker-eyewear-cluster` | complete five-row eyeglass and sunglass frame cluster | 99,514–303,767 | pass; 48.28% transparent background |
| `warby-parker-vision-care-phone` | complete tilted eye-chart phone | 157,916–253,1092 | pass; 31.69% transparent background |
| `warby-parker-ecommerce-phone` | complete tilted Warby Parker shopping phone | 1164,261–1355,509 | pass; 50.83% transparent background |

The runtime copies under `data/assets/raster-annotations/warby-parker/` are the
only raster assets referenced by the dataset. The WP company mark is recreated
as dataset-owned vector geometry. The publisher URL, creator mark, social badge,
and APP ECONOMY INSIGHTS footer lockup are intentionally skipped.
