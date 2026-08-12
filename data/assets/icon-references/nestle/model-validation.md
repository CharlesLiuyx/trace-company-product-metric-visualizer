# Nestlé FY23 icon-crop validation

Source: `input/processed/nestle-fy23.png` (resolved from the active
`input/processing/nestle-fy23.png` claim while this Build is open).

Reviewed after `scripts/extract_icon_crops.py` generated `crop-report.json`
and the eight validation sheets on 2026-08-12.

| crop | acceptance |
| --- | --- |
| `company-wordmark` | Accepted — complete Nestlé nest emblem and wordmark; Sales text and chart geometry excluded. |
| `business-powdered-liquid-beverages-cluster` | Accepted — complete Nescafé and Nespresso marks; adjacent category label excluded. |
| `business-water-cluster` | Accepted — complete S.Pellegrino and Perrier marks; adjacent category label excluded. |
| `business-milk-ice-cream-cluster` | Accepted — complete Häagen-Dazs mark; adjacent label pixels excluded. |
| `business-nutrition-health-science-cluster` | Accepted — complete Nestlé Health Science mark; the adjacent category-label `H` is explicitly excluded. |
| `business-prepared-dishes-cluster` | Accepted — complete Maggi mark; overlapping `Prepared dishes` label pixels are explicitly excluded. |
| `business-confectionery-cluster` | Accepted — complete KitKat mark; adjacent category label excluded. |
| `business-petcare-cluster` | Accepted — complete Purina mark; adjacent category label excluded. |

All eight extraction validations pass. Each accepted subject is complete and
centered, with no connector, node face, publisher mark, source caption, URL,
or unrelated neighboring cluster retained. These crops are approved for the
matching `data/assets/raster-annotations/nestle/` runtime placements only.

## H1 FY23 Source-specific crops

Source: `input/processed/nestle-h1-fy23.png` (resolved from the active
`input/processing/nestle-h1-fy23.png` claim while this Build is open).

Reviewed after `scripts/extract_icon_crops.py` generated
`crop-report-h1-fy23.json` and the eight H1 FY23 validation sheets on
2026-08-12.

| crop | acceptance |
| --- | --- |
| `company-wordmark-h1-fy23` | Accepted — complete Nestlé nest emblem and wordmark; Sales text and chart geometry excluded. |
| `powdered-liquid-beverages-brands-h1-fy23` | Accepted — complete Nescafé and Nespresso marks; adjacent category label excluded. |
| `water-brands-h1-fy23` | Accepted — complete S.Pellegrino and Perrier marks; adjacent category label excluded. |
| `milk-ice-cream-brand-h1-fy23` | Accepted — complete Häagen-Dazs mark; adjacent label pixels excluded. |
| `nutrition-health-science-brand-h1-fy23` | Accepted after a manual isolation correction — the right crop edge was tightened from 190 px to 160 px to remove two fragments of the neighboring category label while retaining the complete brand mark. |
| `prepared-dishes-brand-h1-fy23` | Accepted — complete Maggi mark; the crop starts below the adjacent category-label isolation row. |
| `confectionery-brand-h1-fy23` | Accepted — complete KitKat mark; adjacent category label excluded. |
| `petcare-brand-h1-fy23` | Accepted — complete Purina mark; adjacent category label excluded. |

All eight H1 FY23 extraction validations pass after the manual isolation
review. No connector, node face, publisher mark, source caption, URL, or
unrelated neighboring cluster is retained. These crops are approved only for
the H1 FY23 runtime placements named in `data/datasets/nestle-h1-fy23.js`.
