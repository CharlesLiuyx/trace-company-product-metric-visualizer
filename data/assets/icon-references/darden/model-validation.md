# Darden icon-crop validation

Validated from `input/processing/darden-q4-fy26.png` on 2026-07-12.

- `darden-company-logo`: accepted. The corporate wordmark is complete and centered; the title, revenue label, and ribbons are excluded.
- `darden-olive-garden-logo`: accepted. The Olive Garden wordmark and olive branch are complete; financial labels and the source ribbon are excluded.
- `darden-longhorn-logo`: accepted. The LongHorn Steakhouse wordmark and steer illustration are complete; the segment-margin label and source ribbon are excluded.
- `darden-fine-dining-brand-cluster`: accepted. The Capital Grille and Ruth's Chris brand cluster is complete and free of the Fine Dining label and financial text.
- `darden-other-business-brand-cluster`: accepted. The Cheddar's Scratch Kitchen and Yard House brand cluster is complete and free of the Other Business label and financial text.

All five crops passed the extractor's centering, edge-content, and forbidden-foreground checks. The matching compressed runtime copies in `data/assets/raster-annotations/darden/` are the only raster assets the dataset may reference.
