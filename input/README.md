# Input Assets

Use these folders to keep Source working locations separate from stable
verification references. The directories are operational locators, not
`DatasetBuild` states.

- `pending/` contains newly added source images that still need processing.
- `processing/` contains Sources claimed by active Dataset Builds. A claimed
  file is named `<dataset-key>.png` and stays here through inventory,
  authoring, crop work, fidelity review, sealing, and close-out.
- `processed/` contains stable reference images used by dataset verifiers;
  they are not app/runtime assets.
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
Source in `processing/` until the Build has passed accepted, fresh close-out.
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
same-key claim in `input/processing/`; `complete:source` performs the final
digest check before promotion.

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

After an accepted, fresh sealed Build passes the read-only close-out gate,
promote its claimed Source:

```bash
pnpm verify:closeout -- <build-id>
pnpm complete:source -- <build-id>
```

`complete:source` rechecks the intake digest and refuses to overwrite an
existing destination before moving the Source from `processing/` to
`processed/`. This is the current compatibility Source-promotion path, not M4
Publication. Other active files may remain in `processing/`; a non-empty
processing directory does not fail the global `pnpm check`.

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
