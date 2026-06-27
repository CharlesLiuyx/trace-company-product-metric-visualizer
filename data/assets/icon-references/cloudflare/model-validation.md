# Cloudflare Q1 FY26 Icon Crop Validation

Source image: `input/processed/cloudflare-q1-fy26.png`

Spec: `input/icon-crop-specs/cloudflare-q1-fy26.json`

Generated report: `data/assets/icon-references/cloudflare/crop-report.json`

## Accepted Crops

- `company-cloud-mark.png`
  - Validation sheet: `data/assets/icon-references/cloudflare/validation-sheets/cloudflare-company-cloud-mark.png`
  - Result: accepted as a reference crop.
  - Checks: transparent background, visible cloud mark centered, no chart flow, label, website, or attribution content included.
  - Note: the source title descender overlaps the full rectangular cloud-mark crop area. The crop starts at `x=923` to exclude that blue title fragment; this creates a tight left edge but keeps the visible cloud mark semantically recognizable for reference use.

- `company-wordmark.png`
  - Validation sheet: `data/assets/icon-references/cloudflare/validation-sheets/cloudflare-company-wordmark.png`
  - Result: accepted.
  - Checks: wordmark is complete, centered, and free of unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts.

## Scope

Extracted semantically relevant company branding from the source chart:

- Cloudflare orange cloud mark.
- Cloudflare wordmark.

No company-internal business or segment icon clusters appear in the source chart. The App Economy Insights attribution, `appeconomyinsights.com`, social badge, and "How They Make Money" mark are publisher/attribution elements and were intentionally excluded.

The accepted crops are reference/conversion assets only. The Cloudflare dataset uses pure SVG/text logo markup and does not reference these PNG crops at runtime.
