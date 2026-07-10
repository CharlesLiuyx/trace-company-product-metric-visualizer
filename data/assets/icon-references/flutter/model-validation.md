# Flutter Q4 FY25 Icon Crop Validation

Dataset: `flutter-q4-fy25`

## Accepted Crops

- `flutter-company-wordmark` → `crops/company-wordmark.png`: pass. The full Flutter glyph-and-wordmark lockup is centered, with clear margins to the title and Sportsbook label.
- `fanduel-us-brand` → `crops/fanduel-us-brand.png`: pass. The FanDuel shield and wordmark are complete, centered, and exclude the separate US locale marker and revenue label.
- `flutter-international-brand-cluster` → `crops/international-brand-cluster.png`: pass. The complete Betfair, Sportsbet, Sky Betting & Gaming, Paddy Power, Sisal, and PokerStars cluster is centered and excludes the International label, source node, and footer marks.

All three crop-report entries have `passes: true`. Their approved runtime copies
are under `data/assets/raster-annotations/flutter/`; the adapter does not use
the reference-crop directory at runtime.

## Skipped Regions

- The US flag/country marker is a generic locale label rebuilt as vector/text, not a reusable company or business asset.
- The “How they make money” mark, App Economy Insights URL, and footer logo are source publisher attribution rather than Flutter income-statement semantics.
