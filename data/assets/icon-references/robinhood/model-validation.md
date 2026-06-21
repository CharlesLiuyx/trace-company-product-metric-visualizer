# Robinhood Q1 FY26 Icon Crop Validation

Validated on 2026-06-21 against `input/processed/robinhood-q1-fy26.png`.

- `robinhood-company-feather`: Pass. The company feather mark is fully included, centered within the crop, and free of unrelated text, Sankey connector fragments, watermark pixels, or neighboring icon parts.

Skipped source elements:

- `publisher-how-they-make-money`: Source publisher branding, not part of Robinhood's income-statement semantics.
- `publisher-app-economy-insights`: Source publisher website URL, social badge, and attribution, intentionally excluded from runtime output.

