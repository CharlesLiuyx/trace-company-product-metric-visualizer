# Salesforce Q2 FY24 icon crop validation

Source: input/processed/salesforce-q2-fy24.png (2667 × 1500).

2026-10-19 — Codex model visual comparison against the complete source, crop images and alpha-composited contact sheet.

All seven subjects are complete: Salesforce cloud wordmark, Sales chart icon, Service heart, Slack roundel, Marketing & Commerce magnifier, MuleSoft roundel and Tableau mark. Each contains only the icon subject, with no chart label, connector, watermark or neighboring icon. The Marketing crop uses an explicit top-right transparent exclusion for an adjacent label fragment; the icon is untouched. The MuleSoft crop includes margin around its full outline. Solid source backgrounds are removed with edge-connected transparency; runtime PNG compression uses the extractor's quality limits. All seven extraction validations pass.

Reference crops, report and this record are isolated under q2-fy24/. Runtime filenames use q2-fy24-. Model asset validation is recorded separately from the pending operator review of the complete dataset.
