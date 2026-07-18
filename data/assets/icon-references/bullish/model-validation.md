# Bullish Q3 FY25 Icon Crop Validation

Dataset: `bullish-q3-fy25`

Source image: `input/processing/bullish-q3-fy25.png`

Spec: `input/icon-crop-specs/bullish-q3-fy25.json`

Validated on: 2026-07-18

## Accepted Crops

- `bullish-company-logo` → `crops/company-logo.png`
- `bullish-trading-wordmark` → `crops/trading-wordmark.png`
- `bullish-coindesk-wordmark` → `crops/coindesk-wordmark.png`

## Visual Checks

All three validation sheets were reviewed against the full native Source.

- Each logo or wordmark is complete and visually centered.
- The central Bullish mark excludes the adjacent green income ribbon.
- The trading wordmark excludes the Trading label, amount, notes, and node face.
- The CoinDesk wordmark excludes the subscription/services label, amount, notes, and node face.
- No crop contains publisher attribution, website text, social badges, neighboring chart marks, or unrelated labels.

The accepted crops are conversion references only. The dataset renders pure SVG
reconstructions and does not reference these PNGs at runtime.

## Explicitly Skipped

- `HOW THEY MAKE MONEY` footer badge and miniature Sankey.
- `appeconomyinsights.com` footer URL.
- `APP ECONOMY INSIGHTS` footer lockup and social badge.
