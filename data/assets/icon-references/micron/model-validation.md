# Micron Q3 FY26 Icon Crop Validation

Source: `input/processed/micron-q3-fy26.png`

Validated against generated sheets in `data/assets/icon-references/micron/validation-sheets/`.
`crop-report.json` reports `passes: true` for every extracted crop
(`edgeForegroundPixels: 0`, `centerOffset` within tolerance, `forbiddenForegroundPixels: 0`).

## Accepted Crops

- `micron-company-wordmark`: complete lowercase `micron®` wordmark, centered,
  background removed, no title, values, flows, or publisher marks.
- `micron-business-cloud-memory`: complete render of the three Micron
  SSD / memory-module drives, centered, no Cloud Memory label, values, notes,
  or flow marks.
- `micron-business-core-data-center`: complete stacked server-rack icon with
  magenta activity bars, centered, no Core Data Center label, values, or flows.
- `micron-business-mobile-client`: complete smartphone outline with the magenta
  diagonal reflection, centered, no Mobile & Client label, values, or flows.

## Vectorization

All accepted crops are reused as hand-authored SVG/vector assets inside the
dataset (`meta.logoSvg` for the company wordmark; `CLOUD_MEMORY_ICON`,
`DATA_CENTER_ICON`, `MOBILE_ICON`, and `AUTO_ICON` in `annotationsSvg`), not as
runtime rasters. The crops above are the visual reference standard for that
vector conversion:

- Company wordmark: rounded lowercase `micron` letterforms with the trailing
  `®`, matched to the crop's stroke weight and letter spacing.
- Cloud Memory: three stacked/angled dark drives with faint magenta trace
  accents, matched to the crop's SSD render.
- Core Data Center: three rounded server bars with status dot + magenta bar per
  unit, matched to the crop's line icon.
- Mobile & Client: rounded phone body with speaker notch, home dot, and two
  magenta diagonal reflection strokes.
- Automotive & Embedded: steering wheel with center hub, three spokes, inside a
  black + magenta double ring (see exception below).

Semantic structure, key negative forms, and centering match the crops; minor
glyph-shape differences from the source raster are accepted per the icon
sub-loop rules.

## Crop Exception

- `micron-business-automotive-embedded` (steering wheel): extracted cleanly on
  visual/model review (complete, centered, clean subject), but cannot satisfy
  the automated `edgeForegroundPixels == 0` gate. The magenta double ring is
  effectively edge-filling (~127 px diameter with a diffuse outer glow) and the
  "Automotive & Embedded" label sits directly beneath it (~6 px clearance), so
  any crop with the required 4 px clear border either clips the ring or captures
  the label text. It is therefore omitted from `input/icon-crop-specs/micron-q3-fy26.json`
  rather than shipped as a failing crop. The icon is still authored as the inline
  vector `AUTO_ICON`, matched directly to the source steering-wheel shape.

## Explicitly Skipped

- `micron®` black wordmark is the company logo and is rendered via
  `meta.logoSvg` (accepted crop above); the title text uses the chart title.
- Bottom-left "How They Make Money" mark.
- Bottom-center `appeconomyinsights.com` URL.
- Bottom-right App Economy Insights social/account badge and wordmark.

All relevant Micron company and business/segment icon clusters in the source are
either extracted and vectorized, or documented as a crop exception (automotive)
or an intentional attribution skip.
