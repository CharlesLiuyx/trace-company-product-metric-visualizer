# Roku Q4 FY25 icon-crop validation

Source: `input/processed/roku-q4-fy25.png`
Spec: `input/icon-crop-specs/roku-q4-fy25.json`

Validated on 2026-07-11 against the generated validation sheets and
`crop-report.json`.

## Accepted crops

- `company-wordmark.png`: complete purple Roku wordmark, visually centered,
  with no title text, node label, connector, or publisher material.
- `platform-tv-screen.png`: complete television screen and stand, visually
  centered, with no Platform label, value, margin note, flow ribbon, or
  publisher material. The page background is explicitly set to `#f2f2f2` in
  the crop spec so the dark screen is not misidentified as background.
- `devices-remote-cluster.png`: complete remote/player cluster, visually
  centered, with no Devices label, value, flow ribbon, or publisher material.

All three crops pass the extractor's boundary, centering, and forbidden-pixel
validation. The accepted runtime copies are kept under
`data/assets/raster-annotations/roku/` and are referenced only through the
dataset's explicit raster-annotation allowlist.

## Skipped source regions

- `HOW THEY MAKE MONEY` mark.
- `appeconomyinsights.com` URL.
- `APP ECONOMY INSIGHTS` social/attribution mark.

These are publisher attribution rather than Roku income-statement semantics.
