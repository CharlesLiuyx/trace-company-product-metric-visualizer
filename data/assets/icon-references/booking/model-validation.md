# Booking Holdings Icon Crop Validation

Dataset: `booking-q4-fy25`

## Accepted Crops

- `booking-company-logo` → `crops/company-logo.png`: pass. The dot-grid and complete two-line Booking Holdings lockup are centered and exclude the title, flow labels, and profit text.
- `booking-merchant-brands` → `crops/merchant-brands.png`: pass. The complete Booking.com, priceline, Rentalcars.com, agoda, and color-dot cluster is centered and excludes the Merchant label and revenue bar.
- `booking-agency-brand` → `crops/agency-brand.png`: pass. The rounded Booking.com Agency icon is complete and excludes the Agency label and ribbon.
- `booking-advertising-brands` → `crops/advertising-brands.png`: pass. The KAYAK and OpenTable cluster is complete and excludes the Advertising & Other label and source bar.

All accepted crops have `passes: true` in `crop-report.json`; their matching runtime copies live under `data/assets/raster-annotations/booking/`.

## Skipped Regions

- The “How they make money” footer mark and App Economy Insights URL/logo are publisher attribution, not income-statement semantics.
- Gross bookings and Nights booked are chart KPI annotations, recreated as SVG rather than reusable icon assets.
