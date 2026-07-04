# Broadcom Q2 FY26 Icon Crop Validation

Source: `input/processed/broadcom-q2-fy26.png`

Validated against generated sheets in `data/assets/icon-references/broadcom/validation-sheets/`.
`crop-report.json` reports `passes: true` for every crop (forbiddenForegroundPixels 0, center offset within tolerance).

## Accepted Crops

- `broadcom-company-logo`: complete Broadcom circular signal-wave mark, centered, no Revenue label, values, flows, or publisher marks.
- `broadcom-business-semiconductor-solutions`: complete crimson chip / circuit-board icon, centered, no Semiconductor solutions label, values, notes, or flow marks.
- `broadcom-business-infrastructure-software`: complete blue page + code-brackets + cloud icon, centered, no Infrastructure software label, values, notes, or flow marks.

## Vectorization

All three icons are reused as hand-authored SVG/vector assets inside the dataset
(`meta.logoSvg` for the company logo; `SEMI_ICON` / `INFRA_ICON` in
`annotationsSvg`), not as runtime rasters. The crops above are the visual
reference standard for that vector conversion:

- Company logo: circle + white central-peak signal wave, matched to the crop's
  tall central spike and symmetric flanking humps.
- Semiconductor: crimson rounded square with negative-space square cutouts,
  circuit traces, and pad dots.
- Infrastructure: blue page shape with white `</>` code brackets and an
  overlapping cloud.

Semantic structure, key negative forms, and centering match the crops; minor
glyph-shape differences from the source raster are accepted per the icon
sub-loop rules.

## Explicitly Skipped

- `BROADCOM®` black wordmark below the title (company name text, not an icon;
  rendered as the chart title instead).
- Bottom-left "How They Make Money" mark.
- Bottom-center `appeconomyinsights.com` URL.
- Bottom-right App Economy Insights social/account badge and wordmark.

All relevant Broadcom company and business/segment icon clusters in the source
image were extracted.
