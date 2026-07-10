# Take-Two Q3 FY26 Icon Crop Validation

Source image: `input/processed/take-two-q3-fy26.png`

Spec: `input/icon-crop-specs/take-two-q3-fy26.json`

Report: `data/assets/icon-references/take-two/crop-report.json`

All five semantic icon clusters were visually checked against their validation
sheets on 2026-07-10. Each accepted crop contains the complete subject, is
visually centered, and excludes financial labels, connectors, nearby chart
elements, watermarks, and publisher attribution.

| Crop | Validation sheet | Runtime copy | Result |
| --- | --- | --- | --- |
| T2 corporate logo | `validation-sheets/take-two-company-logo.png` | `data/assets/raster-annotations/take-two/company-logo.png` | Pass |
| App Store and Google Play cluster | `validation-sheets/take-two-mobile-store-icons.png` | `data/assets/raster-annotations/take-two/mobile-store-icons.png` | Pass |
| PlayStation, Xbox, and Nintendo Switch cluster | `validation-sheets/take-two-console-cluster.png` | `data/assets/raster-annotations/take-two/console-cluster.png` | Pass |
| Steam icon | `validation-sheets/take-two-steam-icon.png` | `data/assets/raster-annotations/take-two/steam-icon.png` | Pass |
| Rockstar Games, Private Division, 2K, and Zynga cluster | `validation-sheets/take-two-studio-portfolio.png` | `data/assets/raster-annotations/take-two/studio-portfolio.png` | Pass |

## Accounted skips

- The blue `Net bookings` capsule is re-created as a semantic SVG annotation,
  not treated as an icon crop.
- The bottom-left "HOW THEY MAKE MONEY" mark and miniature Sankey, the centre
  website URL, and the bottom-right App Economy Insights controller mark are
  source publisher attribution and are intentionally excluded from d3 output.
