# Workday Q1 FY27 Icon Crop Validation

Source: `input/processed/workday-q1-fy27.png`

Spec: `input/icon-crop-specs/workday-q1-fy27.json`

## Accepted Crops

- `workday-company-logo` -> `data/assets/icon-references/workday/crops/company-logo.png`
  - Validation sheet: `data/assets/icon-references/workday/validation-sheets/workday-company-logo.png`
  - Result: pass
  - Checks: Workday wordmark, registered mark, and orange arch are complete; subject is visually centered; no chart marks, connector fragments, publisher watermark, website URL, social badge, or bottom attribution content is visible in the transparent crop.
  - Note: the source Revenue label sits directly below the logo. The crop spec uses a recorded `excludeBoxes` region to make that overlapping label transparent while keeping the company logo structure complete.

## Skipped Source Marks

- Bottom-left "How They Make Money" mark: publisher/source branding, not a Workday business icon.
- Bottom-center website URL: publisher attribution, not a semantic chart object.
- Bottom-right App Economy Insights badge and wordmark: publisher attribution, not a Workday business icon.
- Business/segment icon clusters: none present in this source image.

## Vectorization Record

- Runtime approach: reusable SVG logo in `src/icons.js`, referenced by the dataset metadata.
- Crop role: reference/conversion asset only; it is not referenced directly by runtime d3 output.
