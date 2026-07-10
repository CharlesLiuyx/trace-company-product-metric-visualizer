# Amer Sports Q4 FY25 Icon Crop Validation

Dataset: `amer-sports-q4-fy25`

Source: `input/processed/amer-sports-q4-fy25.png`

Validation command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/amer-sports-q4-fy25.json
```

## Accepted crops

- `company-logo.png`: Amer Sports sail mark and wordmark; complete, centered,
  and separate from the title, Revenue label, and ribbons.
- `technical-apparel-brands.png`: Technical Apparel's puffer, beanie,
  Arc’teryx, and Peak Performance cluster; no values, business label, or link
  fragment is present.
- `outdoor-performance-salomon.png`: Salomon shoe and wordmark; complete and
  separate from the adjacent business label and Atomic marks.
- `outdoor-performance-atomic.png`: Atomic skis, mark, and wordmark. The
  source's adjacent `Performance` label overlaps the crop's empty upper-right
  corner; the dataset-specific `excludeBoxes` mask makes that non-semantic
  text transparent while keeping the complete Atomic cluster.
- `ball-racquet-brands.png`: basketball, racket, and Wilson wordmark; complete
  and separate from the Ball & Racquet label and values.

All five validation sheets were visually reviewed. `crop-report.json` records
`passes: true`, zero edge/forbidden foreground pixels, and substantial
background transparency for each crop.

## Runtime use

The branded product imagery and proprietary wordmarks remain validated runtime
raster annotations under `data/assets/raster-annotations/amer-sports/` because
hand-drawn vector substitutes would materially reduce fidelity. The adapter
opts in through `render.allowRasterAnnotations` and references only those
runtime copies, never the crop-reference directory.

## Skipped source marks

- Bottom-left How They Make Money publisher mark and mini Sankey logo.
- Bottom-centre `appeconomyinsights.com` URL.
- Bottom-right App Economy Insights logo and attribution.
