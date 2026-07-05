# Meituan icon crop — model validation

Source: `input/processed/meituan-q1-fy26.png` (2667×1500)
Spec: `input/icon-crop-specs/meituan-q1-fy26.json`
Report: `data/assets/icon-references/meituan/crop-report.json`

## meituan-company-logo

- Crop: `crops/company-logo.png` (225×224), runtime copy
  `data/assets/raster-annotations/meituan/company-logo.png`.
- Source placement (`cropBox`): x0=783, y0=233, x1=1008, y1=457.
- Script validation: `passes: true` — edgeForegroundPixels 0,
  forbiddenForegroundPixels 0, centerOffset (0.0, 0.0), 6px margins all sides.
- Visual/model check (validation sheet reviewed): **accepted**.
  - Complete subject: the rounded yellow app-icon square with the full black
    美团 wordmark is intact; both characters and all inner strokes are present.
  - Centered: subject sits centered in the crop with even 6px margins.
  - No unrelated content: title, "in RMB" note, the Revenue hub label, segment
    text, KPI cards, and publisher/attribution marks are all excluded; the gray
    page background was removed to transparency (edge-connected, rounded corners
    clean).

Meituan's source has no business/segment icons (Delivery services, Marchant
services, Product sales, Other are text-only), so the company logo is the only
semantically relevant icon cluster. No other crops required.

The runtime copy is embedded as a whitelisted runtime raster annotation
(`render.allowRasterAnnotations = true`, `data.rasterAnnotations`), following the
Tencent company-wordmark precedent, because the 美团 CJK wordmark cannot be
rendered with the Montserrat text stack used for vector labels.
