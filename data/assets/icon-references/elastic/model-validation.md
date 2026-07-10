# Elastic Icon Crop Validation

Current validated source: `input/processed/elastic-q3-fy26.png`.

## Accepted Crops

| crop | validation sheet | result | notes |
|---|---|---|---|
| `crops/company-logo-wordmark.png` | `validation-sheets/elastic-company-logo-wordmark.png` | Pass | Elastic company icon and wordmark are complete, visually centered, and free of unrelated chart marks, labels, connector fragments, title text, watermarks, or neighboring icon parts. |

## Semantic Coverage

- Extracted: Elastic company logo and wordmark. The Q3 FY26 crop replaces the materially identical Q4 FY26 reference; the dataset adapters reuse the existing pure-SVG approximation rather than embedding this crop at runtime.
- No company-internal business or segment icon clusters appear in the source chart for Cloud, Other subscription, Subscription, or Service; those are text-only labels.
- Skipped as attribution/non-semantic marks: How They Make Money badge, appeconomyinsights.com URL, and App Economy Insights mark.

## Runtime Use

The crop is a reference/conversion asset only. The d3 runtime uses a pure SVG approximation in the dataset adapter and does not reference this PNG crop.
