# Input Assets

New inputs support PNG images and UTF-8 TXT/MD files. Format and content type
are separate: generic observations use the metric-observation Adapter; specialized
Income Statement and Revenue Metric processing retain their existing data rules.
The [asset workflow](../docs/asset-workflow.md) is the current operator entry point.
Original files remain immutable. Explicit operator completion, not publication by
itself, authorizes their no-clobber local archive move.

Use these folders to keep Source working locations separate from stable
verification references. The directories are operational locators, not
`DatasetBuild` states.

- `pending/` contains newly added source images that still need processing.
  Its Source files are Git-tracked so the shared queue can move between
  project checkouts.
- `processing/` contains Sources claimed by active Dataset Builds. Its Source
  files are also Git-tracked so active claims remain visible across projects.
  A claimed file is named `<dataset-key>.png` and stays here through inventory,
  authoring, crop work, fidelity review, sealing, and close-out, unless an
  explicit operator completion signal relocates the whole processing batch.
- `processed/` contains stable reference images used by dataset verifiers;
  they are not app/runtime assets. The entire archive is Git-ignored and kept
  on the local machine; never force-add a processed Source.
- `icon-crop-specs/` contains dataset-specific JSON specs for extracting
  validated icon reference crops into `data/assets/icon-references/`.

Before naming one selected PNG, run the candidate guard:

```bash
pnpm check:pending -- --file input/pending/<file>.png
```

After choosing the final key and Adapter, rerun the guard with that key, then
record the immutable Source identity and claim it:

```bash
pnpm check:pending -- --file input/pending/<file>.png --key <dataset-key>
pnpm record:intake -- input/pending/<file>.png --key <dataset-key> \
  --adapter <income-statement|revenue-metric> \
  --availability <published|local-only|restricted>
```

After the selected guard passes, `record:intake` immediately moves the Source
to `input/processing/<dataset-key>.png` with no-clobber semantics. If that
destination already exists, intake stops rather than overwriting it. Keep the
Source in `processing/` until the Build has passed accepted, fresh close-out
or the operator explicitly says human review is complete (including
`人工审阅完毕`) or that local work was pushed and merged into `main`.
`--availability` describes Source access, not the lifecycle state `PUBLISHED`.
If a processing claim is stranded or otherwise abnormal, recover it explicitly
from its Build ID and recorded Source digest. Never overwrite it or silently
return it to `pending/`; report the recovery condition when no safe action is
available.

Omit `--file` from `check:pending` only to audit the shared discovery queue.
Unrelated pending items are not a selected Build's close-out condition.

If pending items collide with each other, a pending PNG already matches an
image in `processing/` or `processed/`, or its candidate dataset key would
overwrite an existing claimed or processed image, stop before moving the image
or changing dataset files. If the final dataset key differs from the script's
candidate key, check the final key in
`processing/`, `processed/`, `data/datasets/`, `data/income-statements/`, and
`data/dataset-manifest.js` before continuing.

Authored references, including `meta.referenceImage` and SSOT Source fields,
always use the final stable path `input/processed/<dataset-key>.png`. While the
Build is active, local tools may resolve that missing final path to the
same-key claim in `input/processing/`.

Run an icon crop spec with:

```bash
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
```

The script outputs:

- crops in `data/assets/icon-references/<company>/crops/`, with solid
  crop-background pixels made transparent by default;
- validation sheets in
  `data/assets/icon-references/<company>/validation-sheets/`;
- a `crop-report.json` with geometry and validation metrics.

The only current relocation authority is the user's explicit statement that
human review is complete, or that local work was pushed and merged into
`main`. On either signal, enumerate the whole processing batch, fail safely if
any same-name processed destination exists, then directly move every current
processing PNG to `processed/`. Without a signal, Sources stay in
`processing/` even when Build close-out passes. This locator change creates no
Build receipt and is not M4 Publication. A non-empty processing directory does
not fail the global `pnpm check`.
This operator-directed batch relocation needs no Build ID or close-out receipt,
and it must not be reported as Build closure or Publication.

Because `processing/` is tracked and `processed/` is ignored, a confirmed
relocation appears to Git as removal from the shared processing queue. Commit
that queue removal with the close-out changes, while leaving the archived PNG
only on the local machine.

Processed filenames must be stable and match the dataset key:

```text
<dataset-key>.png
```

Example:

```text
salesforce-q1-fy27.png
nvidia-q1-fy27.png
```

After a processed filename is materialized, never rename or overwrite it. If
the company or period changes, create a new dataset key and a new processed
file.

Icon reference crops are conversion references only. They must not be used as
runtime d3 images or overlays.
