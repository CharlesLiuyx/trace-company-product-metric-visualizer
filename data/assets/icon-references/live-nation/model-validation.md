# Live Nation FY25 asset validation

Validated from `input/processed/live-nation-fy25.png` on 2026-07-11.

| crop | result | evidence |
| --- | --- | --- |
| `company-logo.png` | accepted | Complete Live Nation Entertainment red frame and wordmark; centered, no title, values, flows, or publisher attribution. `transparentPixelRatio=0.5811`; visual validation sheet reviewed. |
| `concerts-brand-cluster.png` | accepted | Complete stacked Live Nation, Ticketmaster, House of Blues, and VIP Nation marks; centered and clear of the Concerts label, bar, values, flows, and publisher attribution. `transparentPixelRatio=0.5076`; visual validation sheet reviewed. |

Both crop-report entries have `passes: true`; the matching compressed runtime copies are permitted only through `data.rasterAnnotations` with `render.allowRasterAnnotations` enabled.
