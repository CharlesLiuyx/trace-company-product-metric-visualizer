# Novartis Q1 FY26 icon crop validation

Source: `input/processed/novartis-q1-fy26.png` (2667×1500), via
`input/icon-crop-specs/novartis-q1-fy26.json`.

| crop | acceptance | review |
| --- | --- | --- |
| `company-wordmark.png` | accepted | The complete Novartis flame and wordmark are centered, with no title or chart-label pixels. |
| `cardiovascular-entresto.png` | accepted | The complete Entresto lockup and product subtitle are centered; no segment text or source bar is present. |
| `immunology-cosentyx.png` | accepted | The complete Cosentyx symbol, wordmark, and parenthetical subtitle are centered; no category label is present. |
| `neuroscience-kesimpta.png` | accepted | The complete Kesimpta mark, wordmark, and dosage text are centered; no category label is present. |
| `oncology-kisqali.png` | accepted | The complete Kisqali mark, wordmark, and product subtitle are centered; the crop was tightened vertically to exclude the Oncology category label. |

The validation sheets were visually inspected. `crop-report.json` records passing
centering, border, and forbidden-foreground checks for every crop. The separate
`data/assets/raster-annotations/novartis/q1-fy26/` copies are the only crop-derived
runtime assets; reference crops are never used directly at runtime.
