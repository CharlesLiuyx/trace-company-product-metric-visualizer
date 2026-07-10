# Chime Q4 FY25 icon-crop validation

- Source: `input/processed/chime-q4-fy25.png`
- Crop spec: `input/icon-crop-specs/chime-q4-fy25.json`
- Reviewed: 2026-07-10

| Crop | Result | Review |
| --- | --- | --- |
| `chime-company-wordmark` | accepted | Complete Chime wordmark, centered with transparent background; no title or chart content. Its runtime rendering is an SVG wordmark. |
| `chime-payment-revenue-card` | accepted | Complete tilted Chime Card, centered with its chip and card-network details intact; no segment text, values, or flow pixels. |
| `chime-platform-related-revenue-phone` | accepted | Complete tilted mobile-app illustration, centered with no label, value, source bar, or footer content. |

All three report `passes: true`; transparent-pixel ratios are 0.6904, 0.6619, and 0.6729 respectively. The publisher mark, URL, and App Economy Insights attribution are intentionally skipped in the crop spec.
