# Airbus icon crop — model validation

Source: `input/processed/airbus-q1-fy26.png` (2667×1500)
Spec: `input/icon-crop-specs/airbus-q1-fy26.json`
Report: `data/assets/icon-references/airbus/crop-report.json`

All four crops are kept as **opaque, background-matched rectangular patches**
(background removal disabled): every subject sits on the uniform #f2f2f2 chart
background, so each patch blends seamlessly when re-placed at its exact source
`cropBox` coordinates. `borderBand` is 0 on all four — the edge-foreground
clipping check (meant for transparent die-cut icons) does not apply to
intentional background-matched patches; `threshold: 18` still detects the photo
subject so each crop is centered and `centerOffset` is validated. Sampled
background `[242, 242, 242]`.

## airbus-a380-tile

- Crop: `crops/commercial-aircraft-a380.png` (402×160), runtime copy
  `data/assets/raster-annotations/airbus/commercial-aircraft-a380.png`.
- Source placement (`cropBox`): x=6, y=378, w=402, h=160. The A380 nose reaches
  ~x399; the crop right edge (x408) leaves a clean gap before the "(11%) Y/Y"
  note at ~x409 and the navy segment node bar at x435. Top edge y378 clears the
  "€8.4B" value (bottom ~y366); bottom edge y538 clears the "Airbus" name
  (top ~y540).
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (0.0, 0.031).
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the full A380 (fuselage, house livery, "A380 AIRBUS"
    titles, wings, four engine nacelles) is intact.
  - No unrelated content: the "€8.4B"/"(11%) Y/Y" value block, the "Airbus"
    segment name, the AIRBUS wordmark, and the segment node bar are excluded.

## airbus-h160-tile

- Crop: `crops/helicopters-h160.png` (364×134), runtime copy
  `data/assets/raster-annotations/airbus/helicopters-h160.png`.
- Source placement (`cropBox`): x=28, y=671, w=364, h=134. The tail rotor
  reaches ~x379; the crop right edge (x392) clears the "€1.6B"/"+0% Y/Y" value
  block at ~x417. Bottom edge y805 clears the "Helicopters" name (top ~y818).
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (-0.006, -0.004).
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the full H160 (fenestron tail rotor, main rotor mast,
    fuselage with "AIRBUS" titling, landing gear) is intact.
  - No unrelated content: the value block, the "Helicopters" name, and the
    segment node bar are excluded.

## airbus-satellite-tile

- Crop: `crops/defense-space-satellite.png` (178×95), runtime copy
  `data/assets/raster-annotations/airbus/defense-space-satellite.png`.
- Source placement (`cropBox`): x=180, y=944, w=178, h=95. The two solar arrays
  span x189-345; the crop right edge (x358) clears the "€2.8B"/"+7% Y/Y" value
  block at ~x417, and the bottom edge y1039 stops just above the
  "Defense & Space" name (top ~y1040).
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (-0.011, 0.047).
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the full satellite (central bus, gold antenna dishes,
    both deployed solar arrays) is intact.
  - No unrelated content: the value block and the "Defense & Space" name are
    excluded.

## airbus-wordmark

- Crop: `crops/company-wordmark.png` (560×125), runtime copy
  `data/assets/raster-annotations/airbus/company-wordmark.png`.
- Source placement (`cropBox`): x=711, y=287, w=560, h=125. The wordmark spans
  x721-1261, y297-402, isolated on background with clear margins to the chart
  title above (baseline ~y198) and the Sankey flows below (~y500).
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (0.0, 0.0).
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the AIRBUS custom navy logotype is intact at full source
    width (540px), replacing the prior bold-Arial vector approximation that
    under-rendered the mark (textLength 286).
  - No unrelated content: the chart title and all Sankey flows/nodes are
    excluded. Company name is exempt from i18n fallback checks.

All semantically relevant marks in the source are extracted: the three
segment illustration photos (A380 commercial aircraft, H160 helicopter,
Defense & Space satellite) and the AIRBUS company wordmark. The publisher /
"HOW THEY MAKE MONEY" / "appeconomyinsights.com" / "APP ECONOMY INSIGHTS" marks
and the "Deliveries" stat card are skipped (attribution content or text-only
card — no crops). All four runtime copies are embedded as whitelisted runtime
raster annotations (`render.allowRasterAnnotations = true`,
`data.rasterAnnotations`), following the Boeing/DiDi/Meituan segment-tile
precedent, because the photographic imagery and the custom wordmark logotype
cannot be reproduced with the Montserrat text/vector stack used for labels.

## FY25 additions

Source: `input/processed/airbus-fy25.png` (2667×1500)
Spec: `input/icon-crop-specs/airbus-fy25.json`
Report: `data/assets/icon-references/airbus/crop-report-fy25.json`

The FY25 source reuses the same H160 helicopter tile and AIRBUS wordmark as
the validated Q1 FY26 source, so it reuses those existing runtime assets. Its
commercial-aircraft and satellite labels sit closer to the photos, requiring
two tighter, opaque background-matched patches.

### airbus-a380-fy25-tile

- Crop: `crops/commercial-aircraft-a380-fy25.png` (402×142); runtime copy
  `data/assets/raster-annotations/airbus/commercial-aircraft-a380-fy25.png`.
- Source placement: x=6, y=378, w=402, h=142. The A380 is complete and the
  crop ends at y=520, above the FY25 Airbus label.
- Script validation: **passes** — zero edge/forbidden foreground pixels and
  center offset `(0.0, -0.0563)`.
- Visual/model check (validation sheet reviewed): **accepted**. The crop has
  the complete aircraft and contains no label, value block, link, or node.

### airbus-satellite-fy25-tile

- Crop: `crops/defense-space-satellite-fy25.png` (178×70); runtime copy
  `data/assets/raster-annotations/airbus/defense-space-satellite-fy25.png`.
- Source placement: x=180, y=944, w=178, h=70. It preserves the satellite
  bus and both solar-array ends while stopping above the FY25 segment label.
- Script validation: **passes** — zero edge/forbidden foreground pixels and
  center offset `(-0.1039, -0.05)`.
- Visual/model check (validation sheet reviewed): **accepted**. The crop has
  no value text, segment label, or navy source node.
