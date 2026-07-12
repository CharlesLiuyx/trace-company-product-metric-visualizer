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
