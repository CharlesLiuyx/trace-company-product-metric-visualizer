# Chipotle Q4 FY25 Icon Crop Validation

Source: `input/processed/chipotle-q4-fy25.png`

Spec: `input/icon-crop-specs/chipotle-q4-fy25.json`

Generated report: `data/assets/icon-references/chipotle/crop-report.json`

## Accepted Crops

- `company-logo.png`: the Chipotle Mexican Grill logo is complete, centered, and excludes the Revenue label and flow ribbons.
- `business-in-restaurant.png`: the restaurant exterior is complete, centered, and excludes its value, label, flow, and publisher marks.
- `business-digital-sales.png`: the phone and digital ordering cluster is complete, centered, and excludes its value, label, and surrounding flow.

All three crops have `passes: true` in `crop-report.json`, zero edge foreground pixels, and zero forbidden foreground pixels. Their transparent runtime copies were generated under `data/assets/raster-annotations/chipotle/` and are used only through the dataset's explicit raster-annotation allowlist.

## Explicitly Skipped

- App Economy Insights watermark, website URL, social/publisher branding, and the `HOW THEY MAKE MONEY` mark.
- The comparable-sales cards, which are text annotation containers rather than reusable icon clusters.
