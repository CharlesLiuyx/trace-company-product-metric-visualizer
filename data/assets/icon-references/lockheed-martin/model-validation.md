# Lockheed Martin Q4 FY25 Icon Crop Validation

Source: `input/processed/lockheed-martin-q4-fy25.png`
Spec: `input/icon-crop-specs/lockheed-martin-q4-fy25.json`

## Accepted Crops

- `aeronautics-jet-q4-fy25.png`: pass. The supersonic-jet render is complete, centered, and excludes the $8.5B value block and the Aeronautics label.
- `missile-fire-control-q4-fy25.png`: pass. The guided-missile render is complete, centered, and excludes the segment-margin note above and the Missile and label below.
- `rotary-mission-systems-q4-fy25.png`: pass. The black compound-helicopter render is complete, centered, and excludes the neighboring labels.
- `space-spacecraft-q4-fy25.png`: pass. The crew-capsule-with-solar-array render is complete, centered, and excludes the Space label below.

## Skipped Source Elements

- LOCKHEED MARTIN wordmark and star: reproduced as vector annotation text in the dataset adapter, not a raster crop.
- Publisher marks, website URL, social lockup, and "HOW THEY MAKE MONEY" branding: skipped as non-company attribution content.

## Q1 FY26 transparent runtime crops

Source: `input/processed/lockheed-martin-q1-fy26.png`  
Spec: `input/icon-crop-specs/lockheed-martin-q1-fy26.json`

- `aeronautics-jet-q1-fy26.png`: pass. The complete aircraft is centered, excludes the adjacent value and label, and has an edge-connected transparent background.
- `missile-fire-control-q1-fy26.png`: pass. The complete missile is centered, excludes adjacent text, and has an edge-connected transparent background.
- `rotary-mission-systems-q1-fy26.png`: pass. The complete aircraft is centered, excludes neighboring text, and has an edge-connected transparent background.
- `space-spacecraft-q1-fy26.png`: pass after feedback correction. The crop begins on the empty y=1006 scanline, so it retains the complete spacecraft while excluding the adjacent Rotary margin-text pixels ending at y=1005.

All four crop reports have `passes: true`, zero forbidden foreground pixels,
zero edge foreground pixels, and substantial transparent coverage (70.0%–82.1%).
The Lockheed Martin wordmark remains vector-authored; publisher marks, URL,
social lockup, and creator branding remain skipped residuals.
