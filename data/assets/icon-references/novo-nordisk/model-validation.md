# Novo Nordisk Q4 FY25 Icon Crop Validation

Validated against the generated sheets in `validation-sheets/` and the source image.

## Accepted crops

- `novo-nordisk-diabetes-care-products` → `crops/diabetes-care-products.png` — Ozempic wordmark is complete and centered.
- `novo-nordisk-victoza` → `crops/victoza.png` — Victoza wordmark is complete and centered.
- `novo-nordisk-insulin-products` → `crops/insulin-products.png` — Tresiba and Levemir marks are both complete, centered as a single insulin cluster, and free of adjacent chart labels.
- `novo-nordisk-wegovy` → `crops/obesity-care-products.png` — Wegovy wordmark is complete and centered.
- `novo-nordisk-saxenda` → `crops/saxenda.png` — Saxenda wordmark is complete and centered.
- `novo-nordisk-rare-disease-products` → `crops/rare-disease-products.png` — NovoSeven RT mark and the adjacent blue 7 symbol are complete and centered.

All six entries pass `crop-report.json`; their backgrounds were removed and their runtime copies are limited to `data/assets/raster-annotations/novo-nordisk/`.

## Skipped source regions

- The bottom-left “HOW THEY MAKE MONEY” mark, bottom website URL, and App Economy Insights footer are publisher attribution rather than Novo Nordisk business semantics.
- The Novo Nordisk company mark is represented by the dataset's pure-SVG `meta.logoSvg`, rather than a raster crop.
