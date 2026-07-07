# DoorDash Icon Crop Validation

Dataset: `doordash-q4-fy25`

## Accepted Crops

- `doordash-company-mark` -> `crops/company-mark.png`
  - Validation sheet: `validation-sheets/doordash-company-mark.png`
  - Result: pass
  - Visual check: the DoorDash red company mark above the revenue hub is complete, centered, and free of revenue labels, flow ribbons, KPI cards, and publisher marks.
- `doordash-left-wordmark` -> `crops/left-wordmark.png`
  - Validation sheet: `validation-sheets/doordash-left-wordmark.png`
  - Result: pass
  - Visual check: the left DoorDash wordmark is complete, centered, and free of the United States label, value label, node, and connector fragments.
- `wolt-deliveroo-cluster` -> `crops/wolt-deliveroo-cluster.png`
  - Validation sheet: `validation-sheets/wolt-deliveroo-cluster.png`
  - Result: pass
  - Visual check: the Wolt and Deliveroo cluster is complete, centered, and free of the International label, value label, node, and connector fragments.

## Runtime Use

- The dataset uses pure SVG/text approximations for these brand annotations.
- No runtime raster annotations were generated or referenced.

## Skipped Regions

- Publisher "How they make money" footer mark: skipped as source publisher branding.
- App Economy Insights website, social badge, and footer logo: skipped as source publisher branding.
