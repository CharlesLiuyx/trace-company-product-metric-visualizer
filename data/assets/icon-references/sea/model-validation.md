# Sea Q4 FY25 Icon Crop Validation

Source: `input/processed/sea-q4-fy25.png`  
Spec: `input/icon-crop-specs/sea-q4-fy25.json`  
Report: `data/assets/icon-references/sea/crop-report.json`

Accepted crops:

- `company-logo-lockup.png` - Sea company logo lockup is complete and centered: multicolor globe, `sea` wordmark, and `connecting the dots` tagline. It excludes the title, revenue label, flow ribbons, operating-profit callout, and publisher marks.
- `business-shopee-lockup.png` - Shopee business logo lockup is complete and centered: orange shopping-bag icon, Shopee wordmark, and E-commerce descriptor. It excludes the revenue value block and node.
- `business-monee-lockup.png` - Monee business logo lockup is complete and centered: blue wordmark, wave accent, and Digital Financial Services descriptor. It excludes the revenue value block and node.
- `business-garena-lockup.png` - Garena business logo lockup is complete and centered: red dragon mark, Garena wordmark, and Digital Entertainment descriptor. It excludes the revenue value block and node.

All four crops pass script validation (`passes: true`) with zero edge foreground pixels, zero forbidden foreground pixels, and centered subject boxes.

Scope notes:

- The smaller Shopee, Monee, and Garena marks inside the operating-profit callout are duplicate brand instances and are rendered from the same vectorized brand approximations rather than cropped separately.
- `Other Services` has no independent icon cluster.
- Publisher marks, the `appeconomyinsights.com` URL, the `HOW THEY MAKE MONEY` mark, and the `APP ECONOMY INSIGHTS` footer are intentionally skipped as non-semantic attribution content.

Runtime usage:

- The dataset uses pure SVG/vector annotations and does not reference any `icon-references` crop or runtime raster annotation.
