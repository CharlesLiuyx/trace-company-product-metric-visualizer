# Global-e icon reference validation

## `global-e-company-logo`

- Source: `input/processed/global-e-q4-fy25.png`
- Crop: `crops/company-logo-q4-fy25.png`
- Validation sheet: `validation-sheets/global-e-company-logo.png`
- Result: accepted.
- Evidence: the full Global-e wordmark is present; foreground touches no crop edge; margins are 20/24/18/25 px; center offset is `x=-0.0031`, `y=-0.02`; `transparentPixelRatio=0.5941`; forbidden foreground pixels are zero.
- Scope: this is the only semantically relevant company/segment icon cluster in the source. The three publisher-attribution groups are explicitly skipped in the crop spec.
- Runtime decision: the validated crop is reference-only. The dataset uses a pure SVG `meta.logoSvg` approximation with no `<image>` or runtime raster. The round-05 polish render aligns the vector wordmark to the crop's subject bounds; remaining custom-letterform differences are accepted vector residuals under I7/I10.
