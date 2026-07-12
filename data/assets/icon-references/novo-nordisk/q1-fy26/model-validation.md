# Novo Nordisk Q1 FY26 Icon Crop Validation

Validated against the generated sheet in `validation-sheets/` and the active
Q1 FY26 source claim.

## Accepted crop

- `novo-nordisk-q1-fy26-company-logo` → `crops/company-logo.png` — the Apis-bull symbol, `novo nordisk` wordmark, and registered mark are complete, centered as one company-logo lockup, and free of chart labels, connectors, publisher material, and title text.

`crop-report.json` reports `passes: true` with edge-connected #f2f2f2
background removal. The emitted runtime copy is restricted to
`data/assets/raster-annotations/novo-nordisk/q1-fy26/company-logo.png` and is
used only by the Q1 FY26 dataset under its explicit raster allowlist.

## Reused and skipped source regions

- The six product-mark clusters (Ozempic, Victoza, Tresiba/Levemir, Wegovy,
  Saxenda, and NovoSeven RT) are materially identical to the already accepted
  Novo Nordisk runtime assets and are reused without creating near-duplicate
  crops.
- The lower-left HOW THEY MAKE MONEY badge, website URL, and App Economy
  Insights footer are publisher attribution rather than Novo Nordisk business
  semantics and remain skipped.
