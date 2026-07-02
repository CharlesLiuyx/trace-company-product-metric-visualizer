# Expedia Icon Crop Validation

Dataset: `expedia-q1-fy26`

## Accepted Crops

- `expedia-company-logo` -> `crops/company-logo.png`
  - Validation sheet: `validation-sheets/expedia-company-logo.png`
  - Result: pass
  - Visual check: the Expedia logo lockup (navy circle with yellow aircraft plus the full "Expedia" wordmark through the final "a") is complete, visually centered, and free of title fragments, revenue labels, source-value labels, or publisher branding. Two earlier crop attempts clipped the wordmark right edge (`edgeForegroundPixels` 163/100); the crop box was widened until the full wordmark cleared the border band.
- `expedia-lodging-app-expedia` -> `crops/lodging-app-expedia.png`
  - Validation sheet: `validation-sheets/expedia-lodging-app-expedia.png`
  - Result: pass
  - Visual check: the Expedia app icon (yellow rounded square, navy circle, yellow aircraft) is complete, visually centered, and free of the adjacent Vrbo icon, the Lodging label, values, or connector fragments.
- `expedia-lodging-app-vrbo` -> `crops/lodging-app-vrbo.png`
  - Validation sheet: `validation-sheets/expedia-lodging-app-vrbo.png`
  - Result: pass
  - Visual check: the Vrbo app icon (navy rounded square with the multicolor striped "V") is complete, visually centered, and free of the adjacent Expedia app icon, the Lodging label, values, or connector fragments.
- `expedia-air-plane` -> `crops/air-plane.png`
  - Validation sheet: `validation-sheets/expedia-air-plane.png`
  - Result: pass
  - Visual check: the emoji-style airplane icon is complete, visually centered, and free of the "Air" label text (which begins 27px to the right of the subject), values, or the source bar.
- `expedia-advertising-trivago` -> `crops/advertising-trivago.png`
  - Validation sheet: `validation-sheets/expedia-advertising-trivago.png`
  - Result: pass
  - Visual check: the trivago app icon (white rounded square with the tri/va/go tri-color wordmark) is complete, visually centered, and free of the Advertising label text or neighboring chart content.

## Skipped Regions

- Publisher "How they make money" footer mark: skipped as source publisher branding.
- App Economy Insights website URL and footer logo: skipped as source publisher branding.
- "Other" revenue segment: no business icon exists for this segment in the source chart.
- Gross bookings / Nights booked stat cards: chart annotations rebuilt as vector SVG in the dataset, not reusable icon reference assets.
