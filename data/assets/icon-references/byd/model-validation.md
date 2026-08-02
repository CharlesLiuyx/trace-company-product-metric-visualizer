# BYD icon crop validation

## `byd-automobiles-product-cluster`

- Decision: accepted for reference and runtime raster use.
- Source subject: three passenger-car images associated with the Automobiles revenue segment.
- Structure: all three vehicles, including wheels, shadows, and body edges, are fully included.
- Framing: the cluster is visually centered with stable surrounding whitespace.
- Exclusions: no amount, label, node face, connector, watermark, publisher mark, or neighboring semantic object is present.
- Background removal: the edge-connected `#f2f2f2` Source background is transparent; vehicle interiors and shadows remain intact.

Validated against `validation-sheets/byd-automobiles-product-cluster.png` and `crop-report.json`.

## `byd-wordmark`

- Decision: accepted for reference and runtime raster use.
- Source subject: the complete BYD oval wordmark, including its outer ring and custom letterforms.
- Structure: the oval and all three letters are fully included without clipping.
- Framing: six pixels of stable Source background surround the measured 490×295px wordmark.
- Exclusions: no title, financial label, node, connector, product image, watermark, or publisher mark is present.
- Background removal: only the edge-connected `#f2f2f2` exterior is transparent; the enclosed wordmark field remains intact.

Validated against `validation-sheets/byd-wordmark.png` and `crop-report.json`.
