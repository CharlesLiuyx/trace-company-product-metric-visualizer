# Amgen Q4 FY25 icon-crop validation

Validated against `input/processed/amgen-q4-fy25.png` on 2026-07-10.

| crop | result | review note |
| --- | --- | --- |
| `amgen-company-logo` | accepted | The complete Amgen wordmark is centered and excludes the title and financial labels. |
| `amgen-product-repatha` | accepted | The complete Repatha wordmark, circular motif, and evolocumab descriptor are centered; no label, value, or flow pixels remain. |
| `amgen-product-prolia` | accepted | The complete Prolia mark, symbol, and denosumab descriptor are centered; adjacent labels and ribbons are excluded. |
| `amgen-product-evenity` | accepted | The EVENITY mark, icon, and romosozumab descriptor are complete and centered. |
| `amgen-product-blincyto` | accepted | The BLINCYTO mark, motif, and blinatumomab descriptor are complete and centered. |
| `amgen-product-tezspire` | accepted | The TEZSPIRE mark, icon, and tezepelumab-ekko descriptor are complete and centered. |
| `amgen-product-tepezza` | accepted | The TEPEZZA wordmark, chevrons, and teprotumumab-trbw descriptor are complete and centered after expanding the right crop boundary. |

The company wordmark and all six semantically relevant product-icon clusters passed `crop-report.json` validation. Runtime copies under `data/assets/raster-annotations/amgen/` are the only raster assets referenced by the dataset; the reference crops remain conversion/validation assets.
