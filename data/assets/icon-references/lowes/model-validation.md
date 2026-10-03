# Lowe's business icon source comparison

2026-10-03 — Codex visual crop validation; dataset acceptance remains pending operator review.

The operator highlighted the Home Décor, Building Products and Hardlines clusters in Q1 FY26 and Q2 FY26. The old SVG approximations omitted defining shapes. Each replacement is extracted from the Q1 original at native resolution, with transparent background and compressed runtime bytes. The three validation sheets were inspected against the complete original: every subject is included, with no labels, amounts, flow marks or publisher attribution. All crop validations pass, including zero forbidden foreground pixels and clear crop borders.

- `home-decor.png`: bedside lamp, two nightstands, bed with pillows and plant; complete baseline retained.
- `building-products.png`: ceiling fan including pull chain, plug and curved plumbing pipe.
- `hardlines.png`: lawn mower including handle and wheels, and handheld power drill.

Q2 uses the same original icon artwork and native positions. Q4 uses the same artwork with Home Décor 22px lower and Hardlines 16px higher; its separate FBM mark is retained. Reuse is scoped to these three business clusters; the company logo is outside this feedback's highlighted scope.
