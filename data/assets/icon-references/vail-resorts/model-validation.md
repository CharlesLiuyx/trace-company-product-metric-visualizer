# Vail Resorts Icon Crop Validation

Dataset: `vail-resorts-q3-fy26`

## Accepted Crops

- `vail-resorts-lift-resort-brands` → `crops/lift-resort-brands-q3-fy26.png`
  - Validation sheet: `validation-sheets/q3-fy26/vail-resorts-lift-resort-brands.png`
  - Result: pass. The Vail, Beaver Creek, and Whistler Blackcomb marks are complete and centered as a Lift-source cluster, without label, source-bar, or ribbon pixels.
- `vail-resorts-lift-gondola` → `crops/lift-gondola-q3-fy26.png`
  - Validation sheet: `validation-sheets/q3-fy26/vail-resorts-lift-gondola.png`
  - Result: pass. The gondola subject is complete; a right-edge exclusion removes the clipped Lift-label fragment, leaving no label, value, node-face, or flow pixels.
- `vail-resorts-mountain-skier` → `crops/mountain-skier-q3-fy26.png`
  - Validation sheet: `validation-sheets/q3-fy26/vail-resorts-mountain-skier.png`
  - Result: pass. The skier and skis are complete; the muted blue-gray Sankey ribbon behind the subject is transparent.
- `vail-resorts-mountain-icon` → `crops/mountain-icon-q3-fy26.png`
  - Validation sheet: `validation-sheets/q3-fy26/vail-resorts-mountain-icon.png`
  - Result: pass. The mountain subject is complete and free of the Vail Resorts wordmark or Mountain text.
- `vail-resorts-lodging-icon` → `crops/lodging-icon-q3-fy26.png`
  - Validation sheet: `validation-sheets/q3-fy26/vail-resorts-lodging-icon.png`
  - Result: pass. The house subject is complete and excludes the Lodging text, source bar, and ribbon.

## Skipped Regions

- The lower-left HOW THEY MAKE MONEY mark and miniature Sankey are publisher branding.
- The appeconomyinsights.com URL and APP ECONOMY INSIGHTS footer lockup are source attribution.
