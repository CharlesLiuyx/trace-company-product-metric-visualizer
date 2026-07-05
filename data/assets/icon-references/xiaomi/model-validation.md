# Xiaomi Q4 FY25 Icon Crop Validation

Source: `input/processed/xiaomi-q4-fy25.png`

Validated on 2026-07-05 against `input/icon-crop-specs/xiaomi-q4-fy25.json`.

Accepted crops:

- `company-logo.png`: Xiaomi rounded-square Mi logo. Complete, centered, and free of title, Revenue label, chart links, and publisher marks.
- `smartphones-product-cluster.png`: four smartphone product image cluster for the Smartphones revenue line. Complete and isolated from the segment label, value block, and flow.
- `iot-lifestyle-tablet-laptop.png`: tablet/laptop image for the IoT & Lifestyle revenue line. Complete and isolated from value text.
- `iot-lifestyle-appliance.png`: speaker/appliance image for the IoT & Lifestyle revenue line. Complete and isolated from labels, values, and flow marks.
- `iot-lifestyle-watch.png`: watch image for the IoT & Lifestyle revenue line. Complete and isolated from adjacent value/Y/Y text.
- `smart-ev-car.png`: blue Xiaomi EV photo for the Smart EV, AI and other revenue line. Complete and isolated from the segment label, value block, and publisher marks.

All six final crops have `validation.passes: true` in `crop-report.json`, with zero edge foreground pixels and zero forbidden foreground pixels. The IoT & Lifestyle source cluster was intentionally split into three runtime crops because a single wide crop would either include the adjacent Y/Y annotation or clip the watch. Runtime copies are generated under `data/assets/raster-annotations/xiaomi/` and may be referenced only through a dataset with `render.allowRasterAnnotations = true`.

Skipped:

- Bottom-left HOW THEY MAKE MONEY publisher badge and mini sankey mark.
- `appeconomyinsights.com` watermark and bottom-right APP ECONOMY INSIGHTS attribution.
