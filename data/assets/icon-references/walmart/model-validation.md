# Walmart icon crop validation

Company asset folder: `data/assets/icon-references/walmart/`

Spec: `input/icon-crop-specs/walmart-q1-fy27.json`

Report: `data/assets/icon-references/walmart/crop-report.json`

## Result

- `walmart-company-wordmark`: pass. The Walmart wordmark and spark are complete, centered, and isolated from the title, values, flows, and publisher marks.
- `walmart-business-sams-club-wordmark`: pass. The Sam's Club wordmark and diamond icon are complete, centered, and isolated from the value, operating margin text, flow marks, and bottom publisher marks.

## Skipped source marks

- Bottom-left "How They Make Money" publisher mark: skipped as source publisher branding.
- Bottom-center `appeconomyinsights.com`: skipped as source publisher branding.
- Bottom-right App Economy Insights social/creator block: skipped as source publisher branding.
- Walmart U.S. and Walmart International labels: no independent business icon cluster appears in the source image, so no crop was extracted.
