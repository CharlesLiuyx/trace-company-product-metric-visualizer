# Input Assets

New inputs are PNG images and UTF-8 TXT/MD files. Original files are immutable.
The [asset workflow](../docs/asset-workflow.md) is the only process owner:
`record:workflow start` claims a Source, and only the operator's completion
signal (its §7) archives it. The directories are operational locators, not
`DatasetBuild` states.

- `pending/` — new Sources waiting for processing. Git-tracked, so the shared
  queue moves between checkouts.
- `processing/` — Sources claimed by active Builds, renamed to
  `<dataset-key>.<ext>`. Also Git-tracked; a relocation therefore appears to
  Git as a removal from this queue and ships with the hand-off commit.
- `processed/` — the local archive of stable reference images used by
  `verify:d3` and render regression; never runtime assets. Git-ignored; never
  force-add a processed Source.
- `icon-crop-specs/` — per-dataset icon crop specs; the crop workflow is owned
  by [data/assets/README.md](../data/assets/README.md).

Naming:

- A processed filename equals its dataset key, e.g. `nvidia-q1-fy27.png`. Once
  materialized it is never renamed or overwritten; a changed company or period
  gets a new key and a new file.
- Before choosing a key, make sure it is unused in `processing/`,
  `processed/`, `data/datasets/`, `data/income-statements/` and
  `data/dataset-manifest.js`.
- Authored references (`meta.referenceImage`, SSOT Source fields) use the
  final path `input/processed/<dataset-key>.png`; while the Build is active,
  local tools resolve it to the same-key claim in `processing/`.
