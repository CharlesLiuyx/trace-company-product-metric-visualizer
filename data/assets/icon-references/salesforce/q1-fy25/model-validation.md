# Salesforce Q1 FY25 crop validation

Source: `input/processed/salesforce-q1-fy25.png` (2667 × 1500; resolved from the active Build Source).
Recipe: `input/icon-crop-specs/salesforce-q1-fy25.json`.
Reviewer: Codex, 2026-10-19, model inspection of all seven original-with-box validation sheets and extracted crops.

- Company cloud Logo: complete silhouette and Salesforce wordmark; no title, values or connectors.
- Sales: complete chart icon; no Sales label or revenue bar.
- Service: complete heart; no Service label or links.
- Platform & Other / Slack: complete circular Slack icon; no segment name, Slack caption or links.
- Marketing & Commerce: complete magnifier/person icon, including handle; the adjacent label is excluded in the upper-right corner.
- MuleSoft: complete circular mark; no Integration label or neighboring Tableau mark.
- Tableau: complete multicolor mark; the adjacent Analytics text is excluded in the upper-right corner without removing any part of Tableau.

All extractor checks pass: complete subjects, transparent background, centered crops, no foreground on the crop boundary and no forbidden foreground. All runtime outputs are compressed PNGs. Source placement and native crop size are preserved; label spacing is adjusted only as needed for English and Chinese clearance. This model crop comparison records asset QA; dataset acceptance remains pending operator review.
