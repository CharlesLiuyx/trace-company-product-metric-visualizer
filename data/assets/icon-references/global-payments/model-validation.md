# Global Payments icon reference validation

## `global-payments-q4-fy25-company-wordmark`

- Source dataset: `global-payments-q4-fy25`
- Reference crop: `crops/company-wordmark-q4-fy25.png`
- Validation sheet: `validation-sheets/global-payments-q4-fy25-company-wordmark.png`
- Crop report: `global-payments-q4-fy25-crop-report.json`
- Decision: accepted
- Review: the full `globalpayments` wordmark is present, visually centered,
  and isolated from the chart title, financial labels, connectors, and
  publisher attribution. The report records zero edge or forbidden foreground
  pixels and a passing center-offset check.
- Runtime use: pure SVG path derived from the official-sourced Global Payments
  wordmark; the reference crop is not used at runtime.

All semantically relevant icon clusters in the source are accounted for. The
three publisher/website attribution groups at the bottom of the image are
intentionally skipped under the workflow's no-attribution rule.
