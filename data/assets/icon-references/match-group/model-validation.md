# Match Group icon crop validation

## `match-group-q4-fy25`

- `match-group-company-logo` — accepted. The complete MG mark is centered with clear margins and no title, revenue label, or flow pixels.
- `match-group-brand-tinder` — accepted. The complete rounded-square Tinder flame icon is centered and excludes the adjacent wordmark and value text.
- `match-group-brand-hinge` — accepted. The complete rounded-square Hinge icon is centered and excludes the adjacent wordmark and value text.
- `match-group-brand-asia-cluster` — accepted. All three app icons are complete, visually centered as one cluster, and free of the Asia label and flow marks.
- `match-group-brand-evergreen-emerging-cluster` — accepted after narrowing the right crop edge from 200 px to 190 px. All six visible app tiles are complete and the orange business-label fragment from the first attempt is removed.

The source-publisher marks (`HOW THEY MAKE MONEY`, the website URL, and the App Economy Insights footer attribution) are intentionally skipped. The final `crop-report.json` records `validation.passes: true`, zero forbidden foreground pixels, and non-zero transparent-background ratios for all five accepted crops. Runtime copies are generated under `data/assets/raster-annotations/match-group/` for the dataset's explicit raster-annotation whitelist.
