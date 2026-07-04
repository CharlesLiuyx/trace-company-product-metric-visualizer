# Adobe Q2 FY26 Icon Crop Validation

Source: `input/processed/adobe-q2-fy26.png`

Validated against generated sheets in `data/assets/icon-references/adobe/validation-sheets/`.
`crop-report.json` reports `passes: true` for every crop (forbiddenForegroundPixels 0, center offset within tolerance).

## Accepted Crops

- `adobe-company-logo`: complete Adobe flag mark + "Adobe" wordmark lockup beside the revenue hub, centered, no title text, Q2 FY26 stamp, or flows.
- `adobe-business-creative-cloud`: complete Creative Cloud rainbow-gradient app icon for the Creative & Marketing Professionals source, centered, no Acrobat icon or label text.
- `adobe-business-acrobat`: complete Acrobat red app icon for the Creative & Marketing Professionals source, centered, no Creative Cloud icon or label text.
- `adobe-business-consumers`: complete Adobe flag app icon for the Business Professionals & Consumers source, centered, no label text or flows.

## Vectorization

All four icons are reused as hand-authored SVG/vector assets inside the dataset
(`meta.logoSvg` for the company logo lockup; `creativeCloudIcon` / `acrobatIcon` /
`adobeAIcon` helpers in `annotationsSvg`), not as runtime rasters. The crops
above are the visual reference standard for that vector conversion:

- Company logo: two mirrored red pennant triangles plus a small connecting
  triangle forming the Adobe flag mark, followed by the "Adobe" wordmark,
  matched to the crop's proportions and gap between mark and word.
- Creative Cloud: rounded square with a diagonal magenta-to-green gradient
  (simplified from the source's four-corner magenta/orange/green/blue sweep)
  and two overlapping white ring outlines standing in for the cloud/"cc" mark.
- Acrobat: red rounded square with a simplified white cursive flourish stroke
  standing in for the Acrobat pen/loop glyph.
- Business consumers icon: red rounded square with a bold white "A" glyph
  (outer triangle with a triangular crossbar cutout), matching the flag mark's
  simpler app-icon variant.

Semantic structure, dominant colors, and centering match the crops; the
Creative Cloud gradient (2-stop diagonal instead of the source's 4-corner
sweep) and the Acrobat flourish's exact curve are simplified approximations,
accepted per the icon sub-loop rules (brand-mark detail differences are not
duplicated, cropped, or semantically wrong).

## Explicitly Skipped

- Bottom-left "How They Make Money" badge and mini sankey glyph.
- Bottom-center `appeconomyinsights.com` URL.
- Bottom-right App Economy Insights logo/wordmark.

All relevant Adobe company and business/segment icon clusters in the source
image were extracted.
