# AMC Q4 FY25 icon crop — model validation

Source: `input/processed/amc-q4-fy25.png` (2667×1500)
Spec: `input/icon-crop-specs/amc-q4-fy25.json`
Report: `data/assets/icon-references/amc/crop-report.json`

All three semantically relevant business/segment icon clusters were reviewed in
their validation sheets and accepted. Each crop has complete subject matter,
an 8px clear margin on every side, no unrelated label, value, connector, or
publisher content, and a passing script validation result.

| key | accepted subject | crop box | validation |
| --- | --- | --- | --- |
| `amc-admissions-tickets` | angled pair of AMC admissions tickets | 241,426–421,564 | pass; 53.80% transparent background |
| `amc-food-beverage` | Coke cup and popcorn tub | 268,649–398,807 | pass; 36.90% transparent background |
| `amc-other-theatre-seat` | red reclining cinema seat | 268,920–400,1039 | pass; 51.73% transparent background |

The runtime copies under `data/assets/raster-annotations/amc/` are the only
assets referenced by the dataset. The crop references themselves remain
conversion/validation inputs. The AMC wordmark is rendered as a vector logo;
publisher watermarks, the `HOW THEY MAKE MONEY` mark, the source URL, and the
App Economy Insights attribution are intentionally skipped.
