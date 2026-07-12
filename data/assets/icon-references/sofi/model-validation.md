# SoFi Q4 FY25 icon-crop validation

- Source: `input/processed/sofi-q4-fy25.png` (resolved from the active Build's same-key processing claim while under review)
- Crop spec: `input/icon-crop-specs/sofi-q4-fy25.json`
- Reviewed: 2026-07-12

| Crop | Result | Review |
| --- | --- | --- |
| `sofi-company-wordmark` | accepted | The complete SoFi wordmark, nine-dot device, and registered mark are centered with transparent background. It excludes the title, Net revenue label, Sankey ribbons, KPI cards, and publisher attribution. It is a validated, whitelisted runtime raster annotation. |

The crop report passes with edge-connected background removal. The publisher mark, website URL, and App Economy Insights attribution are intentionally skipped in the crop spec; the source contains no other semantically relevant company or segment icon clusters.
