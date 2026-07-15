# GM icon-crop validation

## gm-fy25

- `gm-company-logo`: accepted. The complete rounded-square blue-gradient "gm" corporate mark (outline, wordmark, and underline) is fully captured and centered above the Revenue node; the crop excludes the Revenue label/value text and all chart/flow ribbons. Automated validation passed with zero edge and zero forbidden foreground pixels and a center offset of 0.0% horizontal / 1.22% vertical (well within the 5% limit). Visual inspection of the crop and validation sheet confirms a clean transparent background with no stray chart geometry or text.
- `gm-north-america-brand-cluster`: accepted. All four disconnected sub-brand logos (Chevrolet bowtie + wordmark, Buick tri-shield + wordmark, GMC block wordmark, Cadillac crest + script wordmark) are fully captured in their 2x2 arrangement below the GM North America node; the crop excludes the GM North America label text and the adjacent segment ribbon. Automated validation passed with zero edge and zero forbidden foreground pixels and a center offset of 0.35% horizontal / 1.87% vertical (well within the 8% limit, which was intentionally set looser than the single-logo crop above to accommodate the four-logo cluster, per this repo's multi-brand cluster convention). Visual inspection confirms all four logos are complete and uncropped, with clean transparent background and no stray title text or ribbon color bleeding in.

Both accepted transparent crops have a byte-identical compressed runtime annotation under
`data/assets/raster-annotations/gm/` and are used only by `gm-fy25`.

The bottom-left HOW THEY MAKE MONEY mark with its miniature Sankey icon, and the
appeconomyinsights.com / APP ECONOMY INSIGHTS footer lockup, are source-publisher
attribution and were skipped rather than turned into reusable assets (see `skipped[]`
in `input/icon-crop-specs/gm-fy25.json`).
