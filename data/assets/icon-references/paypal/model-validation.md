# PayPal icon crop validation

Dataset: `paypal-q4-fy25`

- `paypal-company-wordmark`: accepted. The complete PayPal symbol and wordmark are centered with even padding; the title, chart labels, flows, URL, and publisher attribution are excluded.
- `paypal-transaction-revenues-paypal-venmo-icons`: accepted. Both rounded-square PayPal and Venmo icons are complete and centered as one semantic cluster; the nearby value, label, description, source bar, and publisher marks are excluded.

The generated `crop-report.json` reports `passes: true` for both crops, zero edge-foreground pixels, zero forbidden-foreground pixels, and zero center offset. Runtime copies are generated under `data/assets/raster-annotations/paypal/` and are the only raster assets referenced by the dataset.
