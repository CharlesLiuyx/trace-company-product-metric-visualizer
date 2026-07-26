# Aramco icon crop — model validation

Source: `input/processing/aramco-q1-fy26.png` (2667×1500; authored source reference remains `input/processed/aramco-q1-fy26.png`)

Spec: `input/icon-crop-specs/aramco-q1-fy26.json`

Report: `data/assets/icon-references/aramco/crop-report.json`

## aramco-company-lockup

- Crop: `crops/company-lockup.png` (740×220); runtime copy: `data/assets/raster-annotations/aramco/company-lockup.png`.
- Source placement: x=750, y=210, w=740, h=220. The crop contains the complete bilingual Saudi Aramco lockup (Arabic and English wordmarks plus the green-and-blue square mark), with source-background margins on all sides.
- Script validation: **passes** — edgeForegroundPixels 0, forbiddenForegroundPixels 0, centerOffset `(0.0027, -0.0182)`.
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: both wordmarks and the complete dot-pattern square mark are present.
  - Centered: the detected subject has 10–15px clear crop margins and is centered within 0.02 of the crop dimensions.
  - No unrelated content: the title, `In SAR billion` subtitle, Revenue labels, nodes, links, publisher marks, URL, and App Economy Insights attribution are excluded.

The logo is an opaque, background-matched runtime raster annotation because its bilingual custom typography and detailed mark cannot be faithfully represented by the renderer’s product-text font stack. No business or segment icon is present in the source. Publisher marks, URL, and attribution are intentionally excluded.

## aramco-company-mark-fy25

- Source: `input/processing/aramco-fy25.png` (2667×1500; authored source reference remains `input/processed/aramco-fy25.png`).
- Spec: `input/icon-crop-specs/aramco-fy25.json`; report: `crop-report-fy25.json`.
- Crop: `crops/company-mark-fy25.png` (200×198); runtime copy: `data/assets/raster-annotations/aramco/company-mark-fy25.png`.
- Source placement: x=1282, y=231, w=200, h=198.
- Script validation: **passes** — edgeForegroundPixels 0, forbiddenForegroundPixels 0, centerOffset `(-0.0025, 0.0000)`.
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the full green-and-blue square and white dot-pattern mark are present.
  - Centered: the detected subject is centered to within 0.003 of the crop dimensions.
  - No unrelated content: the chart title, financial labels, nodes, links, footer URL, creator mark, and App Economy Insights attribution are excluded.

The FY25 Source contains the standalone square mark rather than the bilingual
Q1 FY26 lockup, so the two runtime assets remain distinct. The FY25 mark keeps
an opaque source-background edge to preserve its dense white-dot antialiasing.
