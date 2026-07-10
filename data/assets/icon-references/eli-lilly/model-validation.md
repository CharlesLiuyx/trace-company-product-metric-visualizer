# Eli Lilly Q4 FY25 Icon Crop Validation

Source: `input/processed/eli-lilly-q4-fy25.png`<br>
Spec: `input/icon-crop-specs/eli-lilly-q4-fy25.json`

All five crops pass in `crop-report.json` and were visually reviewed: the Lilly wordmark, the four-medicine Cardiometabolic cluster, Verzenio, Taltz, and Emgality are complete, centered, and do not include their financial labels or source bars. After review feedback, the Cardiometabolic crop was shortened to `31,269–381,514`; its upper-right adjacent financial-value region is explicitly transparent, so it preserves the complete Jardiance icon without reproducing `$14.5B`, growth notes, or the `Cardiometabolic Health` label. The wordmark's overlapping gray source ribbon is likewise transparent in the spec. Runtime copies live under `data/assets/raster-annotations/eli-lilly/` and are used only through the approved raster-annotation allowlist.

Skipped: the bottom-left HOW THEY MAKE MONEY badge, the website URL watermark, and the APP ECONOMY INSIGHTS footer logo are publisher attribution rather than chart semantics.
