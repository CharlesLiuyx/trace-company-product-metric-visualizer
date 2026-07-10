# Novartis icon crop validation

Source: `input/processed/novartis-q4-fy25.png` (2667×1500), via `input/icon-crop-specs/novartis-q4-fy25.json`.

| crop | acceptance | review |
| --- | --- | --- |
| `company-wordmark.png` | accepted | Flame mark and complete NOVARTIS wordmark are centered; no title or chart labels included. |
| `cardiovascular-entresto.png` | accepted | Complete Entresto mark and product/subtitle cluster; no segment text or bar included. |
| `immunology-cosentyx.png` | accepted | Complete Cosentyx symbol, wordmark, and parenthetical subtitle; no segment text or bar included. |
| `neuroscience-kesimpta.png` | accepted | Complete Kesimpta mark, wordmark, and dosage text; no segment text or bar included. |
| `oncology-kisqali.png` | accepted | Complete Kisqali mark, wordmark, and product subtitle; no segment text or bar included. |

All validation sheets were visually inspected. The Cosentyx, Kesimpta, and Kisqali boxes were tightened after the first visual pass to exclude blue category-label residue at their upper edges; the final sheets contain only the product clusters. `crop-report.json` reports zero forbidden foreground pixels and passing centering/border checks for every crop. The separate `raster-annotations/novartis/` copies are the only crop-derived runtime assets; reference crops are never used directly at runtime.
