# GameStop Q1 FY26 crop validation

Validated against the source at native scale on 2026-07-13.

| crop | verdict | validation |
| --- | --- | --- |
| `hardware-consoles-q1-fy26.png` | accepted | The complete PlayStation/Xbox console cluster is centered, all controllers are intact, and no source labels or Sankey geometry are present. |
| `packaged-software-games-q1-fy26.png` | accepted | The two game cases are complete and centered; the crop excludes the associated dollar value, label, and ribbons. |
| `collectibles-figure-q1-fy26.png` | accepted | The full figure, cape, and base are visible with clean transparent margins and no neighboring chart content. |

The GameStop wordmark is rendered as a dataset-owned vector wordmark. Regional flags are decorative geographic markers and the publisher watermarks, URL, and footer lockup remain intentionally skipped.

## Q4 FY25

Validated against `input/processing/gamestop-q4-fy25.png` at native scale on
2026-07-26.

| crop | verdict | validation |
| --- | --- | --- |
| `hardware-consoles-q4-fy25.png` | accepted | The complete PlayStation/Xbox console and controller cluster is centered; no labels or Sankey geometry are present. |
| `packaged-software-games-q4-fy25.png` | accepted | Both game cases are complete and isolated from the value, label, and ribbon. |
| `collectibles-figure-q4-fy25.png` | accepted | The full Batman figure and cape are preserved with transparent margins and no neighboring chart content. |

The GameStop wordmark remains dataset-owned vector text. Regional flags are
decorative annotations; creator branding, the publisher URL, and the footer
lockup remain intentionally skipped.
