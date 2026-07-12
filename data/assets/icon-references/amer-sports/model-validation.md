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

## Q1 FY26 reuse validation

Dataset: `amer-sports-q1-fy26`

Source: `input/processing/amer-sports-q1-fy26.png` (active Build working
claim; the final SSOT locator is `input/processed/amer-sports-q1-fy26.png`).

The five accepted raster subjects above were checked against the Q1 reference
and are materially identical to the Q4 source art. The existing approved
runtime files are therefore reused rather than duplicated. Their Q1 placements
are: company logo `(748, 264)`, Technical Apparel cluster `(18, 477)`,
Salomon `(18, 839)`, Atomic `(50, 952)`, and Ball & Racquet `(15, 1079)`.
Each subject remains complete, centered, and separate from adjacent financial
labels and links. No new crop output was created; the same publisher marks
remain explicit skips.
