# Salesforce Icon Crop Validation

Source: `input/processed/salesforce-q4-fy26.png`

Spec: `input/icon-crop-specs/salesforce-q4-fy26.json`

Run: `python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/salesforce-q4-fy26.json`

Result: pass. `crop-report.json` shows every crop `passes: true`.

Accepted crops:

- `company-cloud-logo.png`: pass. The Salesforce cloud logo is complete, centered, and excludes chart title text, revenue labels, flows, website marks, and publisher attribution.
- `business-sales-icon.png`: pass. The Sales chart icon is complete, centered, and excludes the adjacent Sales label, value block, source bar, and connector.
- `business-service-icon.png`: pass. The Service heart icon is complete, centered, and excludes the adjacent Service label, value block, source bar, and connector.
- `business-platform-slack-icon.png`: pass. The Slack-style Platform icon is complete, centered, and excludes the adjacent Platform / Slack & Other text.
- `business-marketing-commerce-icon.png`: pass. The Marketing & Commerce magnifier icon is complete, centered, and excludes the adjacent business label text.
- `business-integration-mulesoft-icon.png`: pass. The MuleSoft-style circular Integration & Analytics icon is complete, centered, and excludes adjacent text.
- `business-integration-tableau-icon.png`: pass. The Tableau mark is complete, centered, and excludes the MuleSoft icon, adjacent text, publisher marks, and connector.

Skipped:

- `publisher-how-they-make-money`: source publisher branding, not Salesforce income-statement semantics.
- `publisher-app-economy-insights`: source publisher branding, website URL, and social badge intentionally excluded.

Runtime use: none. These crops are reference/conversion assets only; the Q4 FY26 adapter uses pure SVG/vector annotations and does not reference crop PNGs at runtime.
