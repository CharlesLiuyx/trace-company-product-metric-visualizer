# Nintendo FY26 Icon Crop Validation

Source image: `input/processed/nintendo-fy26.png`
Spec: `input/icon-crop-specs/nintendo-fy26.json`
Report: `data/assets/icon-references/nintendo/crop-report.json`

## Accepted Crops

All accepted crops were reviewed against their validation sheets on 2026-06-27. The icon subject is complete, visually centered, and free of unrelated chart text, connector fragments, publisher marks, neighboring icons, and attribution content.

| Crop | Validation sheet | Runtime copy | Result |
| --- | --- | --- | --- |
| Nintendo company logo | `data/assets/icon-references/nintendo/validation-sheets/nintendo-company-logo.png` | `data/assets/raster-annotations/nintendo/company-logo.png` | Pass |
| Nintendo Switch controller icon | `data/assets/icon-references/nintendo/validation-sheets/nintendo-switch-console-icon.png` | `data/assets/raster-annotations/nintendo/switch-console-icon.png` | Pass |
| Nintendo Switch wordmark | `data/assets/icon-references/nintendo/validation-sheets/nintendo-switch-wordmark.png` | `data/assets/raster-annotations/nintendo/switch-wordmark.png` | Pass |
| App Store and Google Play icon cluster | `data/assets/icon-references/nintendo/validation-sheets/nintendo-mobile-store-icons.png` | `data/assets/raster-annotations/nintendo/mobile-store-icons.png` | Pass |

## Accounted Skips

- Mario character artwork: skipped as a decorative Nintendo IP illustration rather than an independent financial line or segment icon. A complete rectangular crop also intersects the App Economy Insights controller attribution at the lower right, so it cannot be accepted as a clean reusable crop.
- "HOW THEY MAKE MONEY", `appeconomyinsights.com`, and "APP ECONOMY INSIGHTS": skipped as source publisher attribution.
- Bottom-left miniature Sankey mark and bottom-right controller badge: skipped as source publisher branding.

## Nintendo 9M FY26

Source image: `input/processed/nintendo-9m-fy26.png`
Spec: `input/icon-crop-specs/nintendo-9m-fy26.json`
Report: `data/assets/icon-references/nintendo/nintendo-9m-fy26-crop-report.json`

The three dataset-specific crops were reviewed against their validation sheets on 2026-07-10. Each subject is complete, visually centered, and free of unrelated text, connector fragments, publisher marks, and neighboring icons.

| Crop | Validation sheet | Runtime copy | Result |
| --- | --- | --- | --- |
| Nintendo Switch controller icon | `data/assets/icon-references/nintendo/validation-sheets/nintendo-9m-fy26-switch-console-icon.png` | `data/assets/raster-annotations/nintendo/switch-console-icon-9m-fy26.png` | Pass |
| Nintendo Switch wordmark | `data/assets/icon-references/nintendo/validation-sheets/nintendo-9m-fy26-switch-wordmark.png` | `data/assets/raster-annotations/nintendo/switch-wordmark-9m-fy26.png` | Pass |
| App Store and Google Play icon cluster | `data/assets/icon-references/nintendo/validation-sheets/nintendo-9m-fy26-mobile-store-icons.png` | `data/assets/raster-annotations/nintendo/mobile-store-icons-9m-fy26.png` | Pass |

The Nintendo company logo is materially identical to the already validated FY26 logo and reuses `data/assets/raster-annotations/nintendo/company-logo.png`. A new clean crop was not retained because the current source places the `Gross profit` label against the logo crop boundary; reusing the clean validated asset avoids unrelated chart text.

### Accounted Skips

- Mario character artwork: skipped as a decorative Nintendo IP illustration rather than an independent financial line or segment icon.
- "HOW THEY MAKE MONEY", `appeconomyinsights.com`, and "APP ECONOMY INSIGHTS": skipped as source publisher attribution.
- Bottom-left miniature Sankey mark and bottom-right controller badge: skipped as source publisher branding.
