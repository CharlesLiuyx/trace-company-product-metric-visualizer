# Home Depot Q1 FY26 icon validation

Source: `input/processing/home-depot-q1-fy26.png` (stable authored locator:
`input/processed/home-depot-q1-fy26.png`).

Reviewed against the generated validation sheets on 2026-07-12:

| crop | acceptance | notes |
| --- | --- | --- |
| `home-depot-company-logo` | accepted | Complete orange Home Depot square wordmark; centered with no Net Sales label or Sankey node pixels. |
| `home-depot-building-materials-icons` | accepted | Complete orange line-art helicopter, plug, and plumbing cluster; no segment text or source-bar pixels. |
| `home-depot-decor-icons` | accepted | Complete orange lamp, bedroom, storage, and plant cluster; no Décor label or financial text. |
| `home-depot-hardlines-icons` | accepted | Complete orange mower and power-tool cluster; no Hardlines label or financial text. |
| `home-depot-other-distributor-logos` | accepted | Complete SRS Distribution and GMS logo lockup; no Other label, source bar, or publisher footer. |

All accepted crops are transparent reference assets. Their compressed copies in
`data/assets/raster-annotations/home-depot/` are the approved runtime surfaces;
the source publisher's badges, URL, and footer lockup remain intentionally
excluded.

## Home Depot Q3 FY25 icon validation

Source: `input/processing/home-depot-q3-fy25.png` (stable authored locator:
`input/processed/home-depot-q3-fy25.png`). Reviewed against the generated
validation sheets on 2026-07-15.

| crop / asset | acceptance | notes |
| --- | --- | --- |
| `home-depot-company-logo` | accepted | New Q3 crop: complete, centered enlarged orange square wordmark; excludes the Net Sales label and Sankey node pixels. |
| `home-depot-building-materials-icons` | reused | Q3 source surface is materially identical to the accepted Q1 cluster. |
| `home-depot-decor-icons` | reused | Q3 source surface is pixel-identical to the accepted Q1 cluster. |
| `home-depot-hardlines-icons` | reused | Q3 source surface is pixel-identical to the accepted Q1 cluster. |
| `home-depot-other-distributor-logos` | accepted | New Q3 crop contains only the complete SRS Distribution mark; the Q3 source does not show the prior GMS companion mark. |

The Q3 accepted runtime copies are `company-logo-q3-fy25.png` and
`other-distributor-logos-q3-fy25.png`; the reused Q1 runtime annotations
remain the approved surfaces for the three unchanged business-icon clusters.
