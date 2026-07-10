# Hershey Q4 FY25 Icon Crop Validation

Dataset: `hershey-q4-fy25`

Source: `input/processed/hershey-q4-fy25.png`

Validation command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/hershey-q4-fy25.json
```

## Accepted crops

- `company-wordmark.png`: the burgundy Hershey wordmark and chocolate-kiss
  mark above net sales. The crop includes the full lock-up, remains centred,
  and excludes the title, labels, and chart ribbons.
- `north-america-confectionery-products.png`: the complete Jolly Rancher and
  Reese's product-pack cluster for North America Confectionery.
- `north-america-salty-snacks-products.png`: the complete Dot's Pretzels and
  SkinnyPop product-pack cluster for North America Salty Snacks.
- `international-products.png`: the complete Kisses and snack product-pack
  cluster for International. After feedback review, the crop was tightened to
  y1105–1250: it starts below the Salty Snacks margin and ends above the
  International label, so no source text is embedded in the runtime asset.

The validation sheets were visually reviewed. All four report `passes: true`,
zero edge/forbidden foreground pixels, and centred complete subjects without
labels, connector fragments, or attribution content.

## Runtime use

The wordmark and product photography remain raster annotations because their
branded/package detail is not appropriate for a hand-drawn vector substitute.
The crop script generated runtime copies under
`data/assets/raster-annotations/hershey/`; the adapter opts in through
`render.allowRasterAnnotations` and references only those runtime copies.

## Skipped source marks

- Bottom-left How They Make Money publisher mark and mini Sankey logo.
- Bottom-centre `appeconomyinsights.com` URL.
- Bottom-right App Economy Insights logo and attribution.

These are publisher/creator attribution, not Hershey or business-segment
semantics.
