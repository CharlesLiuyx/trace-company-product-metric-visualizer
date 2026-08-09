# Sanofi icon reference validation

Source: `input/processed/sanofi-q1-fy26.png` (resolved through the active processing claim during extraction).

Validated at native scale on 2026-07-22:

- `sanofi-q1-company-wordmark`: accepted; complete Sanofi wordmark and purple dots, with title and chart labels excluded.
- `sanofi-q1-dupixent`: accepted; complete Dupixent wordmark, generic name, and arrow mark.
- `sanofi-q1-fabrazyme`: accepted; complete Fabrazyme wordmark, product mark, and generic name.
- `sanofi-q1-sarclisa`: accepted; complete Sarclisa wordmark and generic name.
- `sanofi-q1-toujeo`: accepted; complete Toujeo symbol and wordmark.
- `sanofi-q1-vaccine-products`: accepted; Lantus and the three Source-listed vaccine product-name lines are complete; the adjacent `Other` and `Vaccines` financial labels are excluded.

Publisher/creator marks at the bottom of the Source are intentionally skipped and are not runtime assets.

Source: `input/processed/sanofi-q2-fy26.png` (resolved through the active processing claim during extraction).

Validated at native scale on 2026-08-09:

- `sanofi-q2-company-wordmark`: accepted; complete Sanofi wordmark and purple dots, with the title and chart labels excluded.
- `sanofi-q2-dupixent`: accepted after native-scale review; complete Dupixent wordmark, generic name, and arrow mark.
- `sanofi-q2-rare-disease-products`: accepted after tightening the first crop; complete Fabrazyme and Sarclisa product clusters with the adjacent `Rare diseases` financial label excluded.
- `sanofi-q2-toujeo`: accepted after tightening the first crop; complete Toujeo symbol and wordmark with the adjacent `Other` financial label excluded.
- `sanofi-q2-vaccine-products`: accepted; Lantus and the three Source-listed vaccine product-name lines are complete, while the adjacent `Vaccines` financial label is excluded.

The Q2 publisher/creator marks remain intentionally skipped and are not runtime assets.
