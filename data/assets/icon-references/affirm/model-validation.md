# Affirm icon crop validation

## `affirm-q2-fy26`

- `affirm-company-logo` — accepted. The crop contains the complete black `affirm` wordmark and purple arch, with 20–24px horizontal and 13px vertical margins. It contains no title, Revenue label, connector, or publisher mark. `crop-report.json` records `validation.passes: true`, zero edge/forbidden foreground pixels, a center offset of `-0.0034 / 0.0`, and a transparent-background ratio of `0.7095`.
- The dataset recreates this asset as pure SVG text/path geometry in `meta.logoSvg`; the validated crop is reference-only and is not used by the runtime renderer.

The source-publisher `HOW THEY MAKE MONEY` mark, the `appeconomyinsights.com` URL, and the App Economy Insights footer attribution are intentionally skipped.
