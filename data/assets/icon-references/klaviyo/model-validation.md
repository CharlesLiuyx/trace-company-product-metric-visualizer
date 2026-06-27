# Klaviyo Q1 FY26 Icon Crop Validation

Source image: `input/processed/klaviyo-q1-fy26.png`

Crop spec: `input/icon-crop-specs/klaviyo-q1-fy26.json`

Validation command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/klaviyo-q1-fy26.json
```

## Accepted Crops

| Crop | Reference | Validation sheet | Result |
| --- | --- | --- | --- |
| Klaviyo company wordmark | `data/assets/icon-references/klaviyo/crops/company-wordmark.png` | `data/assets/icon-references/klaviyo/validation-sheets/klaviyo-company-wordmark.png` | Pass: wordmark structure is included and no adjacent label text is included. |
| United States flag | `data/assets/icon-references/klaviyo/crops/region-united-states-flag.png` | `data/assets/icon-references/klaviyo/validation-sheets/klaviyo-region-united-states-flag.png` | Pass: flag is complete, centered, and free of adjacent text. |
| Americas globe | `data/assets/icon-references/klaviyo/crops/region-americas-globe.png` | `data/assets/icon-references/klaviyo/validation-sheets/klaviyo-region-americas-globe.png` | Pass: globe is complete, centered, and excludes the neighboring gray flow band. |
| APAC globe | `data/assets/icon-references/klaviyo/crops/region-apac-globe.png` | `data/assets/icon-references/klaviyo/validation-sheets/klaviyo-region-apac-globe.png` | Pass: globe is complete, centered, and free of neighboring APAC label text. |
| EMEA globe | `data/assets/icon-references/klaviyo/crops/region-emea-globe.png` | `data/assets/icon-references/klaviyo/validation-sheets/klaviyo-region-emea-globe.png` | Pass: globe is complete, centered, and free of neighboring EMEA label text. |

All accepted crops have `passes: true` in `data/assets/icon-references/klaviyo/crop-report.json`.

## Skipped Source Marks

- `Other Americas` has no independent business or segment icon in the source image.
- `appeconomyinsights.com`, the bottom-right APP ECONOMY INSIGHTS badge, the bottom-left "HOW THEY MAKE MONEY" graphic, and social/publisher branding are attribution marks, not Klaviyo income-statement semantics.

## Vectorization Result

The runtime d3 chart uses pure SVG/vector approximations for the Klaviyo wordmark and regional markers. The validated PNG crops remain reference assets only and are not referenced by the runtime chart.
