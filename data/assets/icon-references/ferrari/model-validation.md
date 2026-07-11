# Ferrari Q4 FY25 crop validation

Reviewed against the generated validation sheets on 2026-07-11.

| Crop | Result | Notes |
| --- | --- | --- |
| `company-crest-and-wordmark-q4-fy25.png` | accepted | Complete Ferrari crest and wordmark; the crop excludes the title, chart labels, ribbons, and publisher marks. |
| `cars-and-spare-parts-q4-fy25.png` | accepted | Complete yellow road-car illustration, centered with no text, bar, or ribbon residue. |
| `sponsorships-commercial-brands-q4-fy25.png` | accepted | Complete Formula One car illustration, centered with no source label or chart geometry. |
| `other-engine-q4-fy25.png` | accepted | Complete engine illustration, centered with no source label or chart geometry. |

All four crops pass the extractor's foreground, edge, center-offset, and forbidden-pixel checks in `crop-report.json`. The runtime copies under `data/assets/raster-annotations/ferrari/` are the approved d3 assets; the crops under this directory remain conversion/reference assets only.
