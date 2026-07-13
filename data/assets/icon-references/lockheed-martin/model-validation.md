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
