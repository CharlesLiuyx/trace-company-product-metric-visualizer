# Dynamic Dataset Workflow

Owning document for the dynamic dataset workflow — the end-to-end process for
turning a pending image into a verified dataset. It is *dynamic*, not a frozen
checklist: the fidelity loop turns every user correction into a rule,
required check, or dataset-specific decision, so these steps keep evolving. It
holds the numbered pipeline, the execution model (parallel groups and
main-agent/subagent routing), the input-type object taxonomy, operational
traps, the pre-response verification checklist, and reporting requirements.
`AGENTS.md` §Workflow gives the high-level phase overview and points here;
load it before processing a pending image in `input/pending/`.

Related owning docs: field-level dataset/SSOT format is `data/schema.md`, the
d3 fidelity loop is `docs/fidelity-loop-rules.md`, commit conventions are
`docs/commit-messages.md`, and data-adjacent asset layout is
`data/assets/README.md`.

## Operator Review-Completion Signal

The user's explicit statement that human review is complete (including
`人工审阅完毕`), or that local work was pushed to the remote and merged into
`main`, is a batch review-completion signal for the PNGs currently under
`input/processing/`. On either signal:

1. enumerate all current processing PNGs;
2. present the complete enumerated list (dataset keys and paths) to the
   operator and wait for their explicit confirmation before moving anything —
   the confirmed list is the relocation scope, so a Source the operator did
   not mean to promote (for example another Build still mid-work) is pulled
   out here instead of silently entering `processed/`;
3. fail safely if any same-name destination for a confirmed PNG already
   exists under `input/processed/`;
4. otherwise move every confirmed PNG directly to `input/processed/` and
   report the moved set.

This operator-directed relocation does not require a Build ID, structured
attestation, baseline staging, a seal, or `verify:closeout`. It is the only
current Source-relocation authority, and this section is the single owning
definition of the rule — other documents may only summarize it in one line
and point here. Without either signal, leave every Source in `processing/`.
The move is only a Source-locator update: do not create or infer DatasetBuild
lifecycle receipts, and do not report it as M4 Publication.

## Execution Model

### Parallel groups

The pipeline is not strictly serial. Dependency-wise it forms five groups:

- **E0 — serial gate (steps 1–3).** Guard, key, and Source claim. Nothing else
  may start before the guard passes and `record:intake` has no-clobber claimed
  the Source as `input/processing/<dataset-key>.png`; a stop condition ends
  the whole run.
- **E1 — parallel preparation (steps 4–7).** Everything here depends only on
  the frozen key + reference image, so the three tracks may run concurrently
  (as interleaved work or delegated subagents):
  - Track A (data): company metadata (step 5), then the financial SSOT
    record (step 6), plus their i18n fields.
  - Track B (visual): input typing + durable `ObjectInventory` (step 4), then
    the fine pre-render measurement (start of step 8).
  - Track C (icons, conditional): the crop/vector subloop (step 7). Its
    cluster scope comes from the step 4 inventory, so it starts after the
    coarse pass — still parallel to Tracks A and B.
- **E2 — serial authoring (steps 8–10).** Adapter authoring needs Track A
  values and Track B geometry; dataset i18n overlays need the adapter's
  final label text; registration follows. Icon assets from Track C plug in
  here whenever they converge.
- **E3 — verification and review (steps 11–13).** Prepare the authored
  snapshot and `ReviewPacket`, record Build-bound dataset verification and
  `fidelity-run/2` evidence, then finish human review, stage the baseline,
  and seal. Sweep stages are serial when one depends on another; candidate-
  value trials within one human iteration and independent locale evidence runs
  may run in parallel.
- **E4 — serial close-out (step 14 plus the Verification Checklist and
  Reporting below).** An operator review-completion signal moves the
  processing batch only after the operator confirms the enumerated list
  (§Operator Review-Completion Signal). Without that signal, leave the
  Sources in `processing/`. Build close-out remains a separate read-only
  audit and never authorizes relocation by itself.

### Difficulty-based executor routing

Judgment-heavy, error-cascading work stays with the main agent; mechanical,
well-scoped, independently verifiable work may be delegated to subagents.
Whoever executes, the same verifiers gate the result — delegation never
lowers the bar, and the main agent reviews and owns everything a subagent
returns.

| step | difficulty | executor |
| --- | --- | --- |
| 1–3 guard / key / Source claim | low | either — script output decides; main agent confirms stop conditions, the final key, and the no-clobber `processing/` claim |
| 4 input typing + object inventory | medium | main agent — misclassification cascades into every later step |
| 5 company metadata | medium | subagent OK (web research, field filling); main agent reviews sources |
| 6 financial SSOT record | high | main agent — financial semantics, rounding, currency contract |
| 7 icon crops: script runs | low | subagent OK |
| 7 icon crops: spec boxes + acceptance | high | main agent — visual acceptance judgment feeds runtime assets |
| 8 fine measurement + adapter authoring | high | main agent |
| 9 i18n overlays: first draft | low–medium | subagent OK; main agent re-checks high-risk strings (`R&D`, `SG&A`, money suffixes, mixed-script brand names) |
| 10 registration / `sync:index-datasets` | low | either |
| 11 prepare review (`ObjectInventory` → `VerificationPlan` / `ReviewPacket`) | medium | main agent — the durable inventory, impacts, locales, and authored mappings define every later obligation |
| 12 fidelity loop: triage, fixes, RegionDecision / feedback decisions | high | main agent |
| 12 dataset verification and fidelity evidence collection | low | subagent OK — use `record:verification` for consistency and `record:fidelity` for render evidence; `verify:d3` remains diagnostic |
| 13 finish review, stage baseline, fresh seal | medium | main agent |
| 14 close-out verification, operator-authorized Source relocation, commits, reporting | medium | main agent |

## New Dataset Pipeline

### Phase P1 — Intake & guard (E0, serial)

1. Select one pending PNG and guard that item with
   `pnpm check:pending -- --file input/pending/<file>.png --key <dataset-key>`
   once the final key is known (the initial candidate-only pass may omit
   `--key`; ignore `.gitkeep`). Running `pnpm check:pending` without `--file` audits the
   whole discovery queue, but an unrelated pending item is not the
   transaction state or close-out condition for the selected Build. An exact
   content match in `processing/` or `processed/`, a pending-to-pending
   collision, or a candidate-key collision for the selected item is a stop
   condition — report it and do not move, create, update, crop, or verify
   anything for that image. If the final key differs from the script's
   candidate key, name the file accordingly; `record:intake` reruns the
   definitive selected-item guard with `--key` internally, so a manual
   `--key` rerun before intake is an optional fast-fail, not a required step.
2. Key: lowercase kebab case, company plus period, e.g. `nvidia-q4-fy26`.
3. Type-only intake: inspect the whole image only far enough to select the
   `income-statement` or `revenue-metric` Adapter, then record and claim the
   per-item Source:

       pnpm record:intake -- input/pending/<file>.png --key <dataset-key> \
         --adapter <income-statement|revenue-metric> \
         --availability <public|local-only|restricted>

   `--availability` is Source-access policy (`published` remains a legacy
   input alias for `public`).
   After its selected-item guard passes, `record:intake` writes an ignored
   Build manifest under `output/builds/`, including Source hash/dimensions and
   `baseCanonicalDigest`, and immediately makes a no-clobber claim by moving
   the PNG to `input/processing/<dataset-key>.png`. A successful intake must
   leave no selected copy in `pending/`; an existing processing destination
   is a stop condition and must never be overwritten. Preserve the reported
   Build ID, manifest path, and processing path in the durable review working
   record. This is a local compatibility claim, not canonical Publication.

### Phase P2 — Source inventory & data SSOTs (E1, parallel tracks)

4. Confirmed input typing & coarse object inventory (Track B; do this first — it
   seeds the other tracks): look at the whole image coarsely before any
   fine measurement or file authoring.
   - Classify the input type against §Object Taxonomy: income-statement
     Sankey infographic (standard, `-by-segment`, or `-by-bu` variant),
     revenue-metric time series (e.g. ARR tables/charts), or an
     unrecognized new type (see the taxonomy's new-type rule).
   - The type picks the branch: income-statement inputs run the full
     pipeline below; revenue-metric inputs write company metadata plus a
     `data/revenue-metrics.js` record (per `data/schema.md`) with i18n,
     then stop at data-level verification — no Sankey adapter, no icon
     subloop, no d3 fidelity loop (`verify:dataset` skips render for
     revenue-metric keys).
   - Enumerate every object instance against that type's checklist and persist
     it as `ObjectInventory` (`object-inventory/v3`): stable lowercase object
     ID, kind, `render` / `data-only` / `skip` disposition, authored mapping,
     required locales, render-risk features, source evidence, and a reason for
     every skip. A prose list or only three counts is not durable inventory.
     Every Sankey-node object must choose exactly one node-face intent:
     `visible-node-face` or `hidden-anchor`; `visible-short-node` additionally
     marks short visible faces, while `specified-label-weight` records a
     source-backed heading weight. Every render object that maps a fixed
     `layout.labels.*` group must declare `measured-label-position` with the
     persisted native reference measurement — the Plan refuses to compile
     without it (T18/T19). A label whose slot or grouping reads ambiguously in
     the reference declares `ambiguous-label-slot` instead of guessing: T20
     requires the operator's slot decision before the text stage freezes, so
     ask with the reference crop up front rather than rendering one
     interpretation and waiting for review to correct it. Before choosing `annotationsSvg`, classify
     each nearby text group from the reference: node name/value/note copy uses
     `layout.labels` by default; a genuine bespoke node callout/guide must be
     recorded on its `node:*` object as `semantic-annotation` with native-pixel
     source evidence and an interactive `data-node` surface. The full
     feature/evidence contract lives in
     `docs/fidelity-loop-rules.md` §2; do not restate its visual tests here.
     Treat `visible-node-face` as the conservative default. `hidden-anchor` is
     an exception that must satisfy the structured native-pixel confirmation
     contract and compile both candidate-paint automation and an independent
     global manual source-confirmation check.
     The inventory drives SSOT
     completeness (step 6 cross-check), icon crop scope (step 7), label
     grouping (step 8), i18n coverage (step 9), and the skip list — record
     it so the final report can state that every object is accounted for.
   - Only after the inventory is complete move to fine, per-object
     measurement (step 8 / `docs/fidelity-loop-rules.md` §2).
   - Keep the selected Source at `input/processing/<dataset-key>.png` for the
     entire inventory, authoring, crop, fidelity, and close-out workflow. Do
     not promote it early merely because inventory or authoring is complete.
     The Build manifest plus Source digest is the recovery identity; directory
     presence alone is not acceptance.
5. Company (Track A; first dataset for a company): create
   `data/company-metadata/<company-key>.js` — description, sector, industry,
   founded, headquarters, fiscal year end, website, ticker/exchange, market
   cap with as-of/source, and source URLs — plus localized profile fields
   for every non-default language, and register it in `index.html`. Field
   details: `data/schema.md`.
6. SSOT (Track A): add the record to
   `data/income-statements/<company-key>.js`
   (create the file and register it in `index.html` for a new company) —
   comparable reported totals, line items, notes, currency, unit, period,
   and source image only. Cross-check line items against the step 4
   inventory so no segment or cost object is silently dropped. Author every
   durable Source reference with its final stable path,
   `input/processed/<dataset-key>.png`, even while the bytes remain under
   `input/processing/`; local tools may resolve that missing final path to the
   same-key processing claim for the active Build.
7. Icons (Track C; when the step 4 inventory lists company or
   business/segment icon clusters): author
   `input/icon-crop-specs/<dataset-key>.json` and run
   `python3 scripts/extract_icon_crops.py --spec <that file>`; it removes the
   solid crop background and writes transparent reference crops plus
   validation sheets and `crop-report.json` under
   `data/assets/icon-references/<company>/`. Accept a crop only when the
   subject is complete, visually centered, and free of unrelated content;
   re-crop until that holds and record acceptance in `model-validation.md`.
   Extract every semantically relevant cluster (skip watermarks, attribution,
   and icon-less segments such as "Others"). Reuse existing SVG/vector assets
   when the source icon is materially similar; use `src/icons.js` Lucide
   icons for generic semantics. Prefer vector conversion; raster embedding is
   allowed only for validated clusters written through `runtimeOutputDir`.
   Keep authored crop/source references on the final `input/processed/` path;
   during the active Build, the crop tooling may use the same-key local
   fallback to `input/processing/`.
   Crop/vector iteration and raster whitelist rules:
   `docs/fidelity-loop-rules.md`; folder layout: `data/assets/README.md`.

### Phase P3 — Adapter & i18n (E2, serial)

8. Adapter: first run the preflight measurement in
   `docs/fidelity-loop-rules.md` §2, walking the step 4 inventory object by
   object. Persist the measured node, link/socket, label, annotation and
   Interface Matrix inputs required there; label-group measurements land as
   `measured-label-position` featureEvidence bound to this Build's Source
   digest — prepare-review rejects coordinates measured on another period's
   image, and the T18 audit replays the comparison on every evidence run.
   After the first candidate render,
   collect its candidate-side Matrix rows and `nodePaintAudit`. Then author
   `data/datasets/<dataset-key>.js` per
   `data/schema.md` as a high-fidelity adapter with explicit `nodes`,
   `links`, `layout.nodes`, and `layout.labels` tuned against the source
   image. Keep each semantic label unit (name, value, notes, margin, Y/Y)
   grouped under one node/label intent before splitting into blocks or
   lines; preserve source values and notes; keep costs positive
   (`type: 'cost'` renders parenthesized); treat publisher watermarks,
   creator branding, URLs, and attribution blocks as intentional skipped
   residuals, not render targets; set `meta.logoSvg` when the source shows
   a vector-representable company logo. Node-face classification and paint
   acceptance are owned by the fidelity rules; this workflow only requires
   their Plan checks and evidence to be present. Set `meta.referenceImage.src` to the final
   `input/processed/<dataset-key>.png` path and use the exact intake
   dimensions; diagnostic and fidelity tools may read the active Build's
   same-key `processing/` claim while that final path is not yet materialized. New or
   materially changed fixed-layout datasets must declare
   `render.interfaceAudit: { mode: 'error' }`. A `fullFaceIds` entry is valid
   only with the matching `interface-matrix/v1` row and provenance described
   by `data/schema.md`; interface artifacts do not belong in the financial SSOT.
9. i18n: English is canonical. Add `i18n.<language>` overlays — never
   parallel dataset files — for every non-default language in
   `window.SANKEY_I18N.languageCodes`, covering dataset `name`, `meta`
   fields, node labels/notes, and every fixed `layout.labels` or annotation
   line that changes in translation, plus the matching SSOT labels/notes and
   company profile. Overlays are display-only: never change values, links,
   node geometry, financial totals, source images, or verification semantics.
10. Register: run `pnpm sync:index-datasets` — it appends the dataset to the
    generated `data/dataset-manifest.js` (the registration SSOT; adapters no
    longer get `index.html` tags). When the dataset reuses another, keep it
    after its dependency in manifest order. Declare untranslated sub-brand
    annotation words in the dataset's `i18n.preservedAnnotationText` (see
    Traps).

### Phase P4 — Verify and review (E3)

11. Prepare review from the completed `ObjectInventory`, authored artifact
    paths, `ChangeImpact`, and required locales:

        pnpm record:build -- prepare-review <build-id> --input <review-input.json>

    This records the `AUTHORED` snapshot, compiles `verification-plan/v3`,
    verifies every Source-bound feature measurement against the Build Source
    digest (T19), and emits a content-addressed `ReviewPacket` plus its
    printed `reviewToken`. Keep that token: the finish JSON must cite it
    (`packetDigest` remains compatibility input only). The Plan expands
    ObjectInventory features into mandatory checks with enforcement, object
    and locale scope; callers cannot omit a hit or invent `notApplicable`.
    Historical v1/v2 inventories and Plans, plus historical Packets and Results,
    remain inspectable, but an unfinished v1/v2 review must rerun this step to
    create v3 inventory and Plan inputs before `finish`; there is no lenient
    close-out path.
12. Record Build-bound consistency evidence and keep the returned object
    reference for finish:

        pnpm record:verification -- <build-id> --json

    It runs the non-render dataset profile (syntax, SSOT, strict i18n,
    generated metadata), so a separate upfront `verify:dataset` pass adds no
    coverage. Use `verify:dataset` / `verify:d3` only when a read-only
    diagnostic is wanted without recording evidence: neither writes a durable
    review archive, and an automatic pass is never human acceptance.
    For Income Statement, run the manual loop next. Every
    durable evidence run uses the Build and Packet identity:

        pnpm record:fidelity -- <dataset-key> --build <build-id> \
          --focus <direction> [--language <code>] [--round <n>]

    A successful command records `fidelity-run/2` `evidence-ready` artifacts;
    it does **not** record `accepted`. Repeat after every authored change and
    for every required locale, per `docs/fidelity-loop-rules.md`. Each run
    supplies scoped automatic results, including `nodePaintAudit` and the
    candidate interface layer; the complete Interface Matrix and genuinely
    manual checks are reconciled during review.
13. After the final authored change, prepare a fresh Packet if its digest is
    stale, rerun `record:verification` plus every affected locale evidence,
    and finish with a review JSON containing the `reviewToken`, returned
    `verificationReference`, `ManualAttestation`, `manualCheckDecisions`,
    stable `RegionDecision` records, attention status (open red-box digest or
    closed closure note), the Adapter-required `interface-matrix/v1`, and any
    `FeedbackRecord` entries:

        pnpm record:build -- finish <build-id> --review <review.json>

    Finish must consume each global Plan check once and each locale-scoped
    check once per required locale, producing `FidelityResult` v2
    `checkResults`; missing/duplicate/wrong-scope evidence is a blocker. Only
    an `accepted` `FidelityResult` can move the Build to
    `CLOSED`; machine
    green with no attestation remains `review-pending`. Then stage the
    future-regression baseline build-locally and seal:

        pnpm record:build -- stage-baseline <build-id> --input <baseline.json>
        pnpm record:build -- seal <build-id>

    `seal` takes no caller verification JSON: it recomputes current authored
    artifact freshness and reruns the Adapter final profile itself — the
    non-render consistency profile plus, for Income Statement, the d3 render
    hard gates for every required Plan locale (the Source reference must
    still resolve through the processing claim or processed path) — and
    records the seal only when everything passes with the exact inputs
    still valid; a manual pre-seal `verify:dataset` run is not part of
    the pipeline. The staged baseline cannot prove its producing Build. The
    canonical `pnpm compat:baseline -- <dataset-key>` command (renamed from
    `record:baseline` so the `record:*` class stays build-local) remains only
    for an explicitly declared legacy compatibility operation; it is not a
    normal new-Build close-out path. M4 atomic Publication is still pending.

    Close-out requirement policy (owning definition): pushing or merging a
    new or materially changed dataset to `main` requires an accepted
    `FidelityResult` (Build `CLOSED`). Baseline staging, `seal`, and
    `verify:closeout` are the recommended complete close-out and are
    mandatory whenever a formal Build audit is requested; until M4
    Publication lands, merging without them is permitted only when the final
    report explicitly names the skipped steps and the reason.

### Phase P5 — Close out (E4)

14. Apply §Operator Review-Completion Signal when its trigger is present:
    enumerate every current processing PNG, present the complete list for the
    operator's confirmation, and only after confirmation no-clobber move the
    confirmed batch to `input/processed/` and report the moved set. Without a
    signal, leave all Sources in `processing/` and report that no relocation
    was authorized. Independently, the read-only Build audit remains
    available per the step 13 close-out requirement policy:

        pnpm verify:closeout -- <build-id>

    It requires historical and effective `SEALED`, fresh inputs, and accepted
    review, but passing it does not move a Source. Never rename a processed
    image. Operator relocation is a transitional compatibility operation; it
    is not atomic M4 Publication and must not be reported as `PUBLISHED`. Then
    satisfy the Verification Checklist and Reporting sections below.

## Object Taxonomy

Owned here; step 4 classifies against it, and the fine measurement of
`docs/fidelity-loop-rules.md` §2 refines the same object list rather
than re-deriving it. When user review adjusts this taxonomy, update this
section — not per-dataset notes — so the next run inherits the lesson.

### Type A — income-statement Sankey infographic

Variants seen so far: standard income statement, `-by-segment` (e.g.
`disney-q2-fy26-by-segment`), `-by-bu` (e.g. `microsoft-q3-fy26-by-bu`).
Same object families, different flow semantics (segment operating profit and
eliminations instead of the full cost waterfall).

Object checklist, grouped by render intent:

- Chart structure (nodes + links): revenue segment source bars (with
  optional sub-segment children), the central revenue hub, intermediate
  profit bars (gross/operating), cost bars (cost of revenue, opex split
  such as R&D / S&M / G&A, tax), terminal profit/loss bars, short auxiliary
  bars (interest, other income, investments, eliminations), flow ribbons
  (endpoint-tinted gradients, waterfall adjustment area, bypass ribbons,
  multi-entry stacked sockets), and invisible anchor nodes for
  guide-line-only flows.
- Hover Share semantics: inventory authored endpoints and semantic
  relationships only. The renderer-owned formula and surface grouping are
  defined once in `CONTEXT.md`; Adapters must not provide percentage overrides.
- Label units (`layout.labels`): chart title, period stamp
  (period + periodNote), per-node label groups — name, value, notes,
  margin, Y/Y kept as one semantic unit — side labels for dense terminal
  columns, and short-bar top/bottom centered value blocks.
- Annotation containers (`annotationsSvg`): KPI/stat cards, black capsules,
  legend boxes, badges, footnote cards, rounded callout pills that break out
  small values (e.g. Disney's `SVOD $0.6B / Other $0.7B`), and horizontal
  guide lines for tiny profit add-ins. Annotation text is product text by
  default. Wrap only a true Logo, wordmark, trademark lockup, or brand
  illustration in the smallest complete
  `<g data-typography-role="brand">`; never mark the mixed annotation container.
  A node-like name/value is not automatically an annotation: classify it
  against the reference first. Prefer `layout.labels`; only a true bespoke
  node callout/guide uses `semantic-annotation`, which requires an interactive
  `sankey-interactive-annotation[data-node]` group and source-backed evidence.
- Icon/brand assets: company logo (vector `meta.logoSvg`), brand wordmarks
  drawn as annotations, segment/business icon clusters (validated crops →
  vector conversion, or whitelisted runtime raster via
  `data/assets/raster-annotations/`), and generic Lucide icons
  (`src/icons.js`). `meta.logoSvg` receives the brand typography role from the
  renderer. Every `SANKEY_BUSINESS_ICONS` placement in `annotationsSvg` must
  mark its own dataset wrapper explicitly; the shared fragment is not an
  implicit exemption.
- Intentionally skipped (never render targets, never crop targets):
  publisher watermarks, creator/account branding (e.g. the
  "HOW THEY MAKE MONEY" mark, `appeconomyinsights.com`, App Economy
  Insights wordmark), website URLs, social badges, attribution blocks,
  decorative residue, and icon-less `Others` segments.

### Type B — revenue-metric time series (e.g. ARR)

Source images are tables or charts of third-party revenue estimates (current
examples: YipitData annualized ARR / revenue run-rate for Anthropic and
OpenAI; images intentionally local-only). No Sankey adapter, no render loop —
objects land in `data/revenue-metrics.js` only, and the viewer draws its own
trend chart.

Object checklist:

- Metric identity: `displayName`, `metricFamily`, `metricName`, subject
  company (`subjectType`/`subjectId`).
- Time frame: period range, `periodNote`, observation `frequency`.
- Observations: per-date value rows/points with `momGrowthPct`, plus the
  latest-value summary block.
- Event flags on specific dates (rendered as observation `notes`, e.g.
  "coding capability breakthrough", "Agent AI surge", "YEP half-year").
- Methodology caveats (systematic under/over-statement notes) — attach to
  every affected observation.
- Definition & conditions: geography, basis, time grain, consolidation.
- Units & currency (must satisfy the same FX-coverage contract).
- Source identity: provider name/url/type and `sourceImage` — recorded as
  data, never rendered; provider branding follows the same skip rules as
  Type A watermarks.
- Confidence and lineage (how values were transcribed or inferred).

### Unrecognized input type

If the coarse pass matches neither type: stop fine work, define the new
type's object checklist first, extend this taxonomy (and, when it is a new
metric family or SSOT, backfill `AGENTS.md` and
`docs/trace-specification.zh-CN.md` per the architecture rules), then
proceed with the pipeline using the new checklist.

## Traps and Hard Constraints

- The canonical G/B/R/L/T/A/Z/I definitions, thresholds and evidence semantics
  live only in `docs/fidelity-loop-rules.md`. This workflow invokes those
  checks; it must not duplicate or reinterpret them.
- Every Plan-required automatic or manual check must produce a scoped
  `checkResults` entry. Missing audit fields and missing manual decisions remain
  open; they are never silently treated as pass.
- `verify:i18n --strict` proves overlay coverage, not visual validity. For
  every non-default language, collect durable review evidence with
  `pnpm record:fidelity -- <dataset-key> --build <build-id> --focus polish-l10n-sweep --language <code>`
  (use `verify:d3` only for an earlier diagnostic) and
  inspect all Plan-required layout checks. Detailed acceptance criteria are in
  `docs/fidelity-loop-rules.md` §5.
- `annotationsSvg` brand text: whole segments matching the company's name,
  legal name, or alias words are exempted automatically from i18n fallback
  checks; other intentionally untranslated words (sub-brands like `aws`)
  must be declared in the dataset's `i18n.preservedAnnotationText`. Do not
  extend the frozen legacy list in `scripts/verify-i18n.mjs`. This translation
  exemption is independent from typography: the rendered SVG still needs the
  explicit nearest `data-typography-role="brand"` ancestor when the text is a
  visual brand asset.
- Brand and product terms that stay untranslated everywhere (YouTube,
  iPhone, `Microsoft 365`…) are declared once as identity mappings in the
  `EXACT_ZH` dictionary (`src/i18n-dictionaries.js`); `verify:i18n` treats
  an identity-mapped term as translated on every path — labels, notes,
  layout lines, and annotations.
- Registration parity is enforced by `verify:ssot`: every file in
  `data/datasets/` must be registered in the generated
  `data/dataset-manifest.js` unless listed in
  `UNREGISTERED_DATASET_SCRIPTS` (`scripts/script-sources.mjs`); run
  `pnpm sync:index-datasets` to repair drift.
- Crops under `data/assets/icon-references/` are reference/conversion assets
  only and must never be referenced from d3 runtime output; runtime rasters
  live under `data/assets/raster-annotations/<company>/`.
- Keep an active Build's Source in `input/processing/<dataset-key>.png` until
  an operator review-completion signal — confirmed against the enumerated
  batch — relocates it. Passing
  accepted, fresh close-out alone does not move it. Authored references still name the final
  `input/processed/<dataset-key>.png`; local tooling may fall back to that
  Build's same-key `processing/` claim.
- Treat an abnormal or stranded processing claim as a recovery condition, not
  a queue item. Inspect it through the Build ID and recorded Source digest;
  never overwrite it or silently move it back to `pending/`. If explicit safe
  recovery is unavailable, stop and report the condition rather than inventing
  an unimplemented abandon/requeue command.
- Never rename or overwrite a processed image after its dataset key is
  assigned. The operator review-completion rule is the only current relocation
  authority; it enumerates the full processing batch and moves the subset the
  operator confirms.
- The renderer draws the chart title noticeably lower (~16px) than the raw
  authored `titleY` suggests (baseline vs. top-of-text). Calibrate the title
  and other free-standing text against their rendered bboxes, not by copying
  the reference y coordinate into the layout directly.
- Exact-integer amounts lose their decimal in default formatting (`3.0` →
  `€3B`). When the source shows the decimal, set the label's `valueText`
  override (`data/schema.md`) to force `€3.0B`; check every integer-valued
  node when transcribing.
- Runtime raster annotations draw above labels, and an opaque segment patch
  clips wider localized notes (zh `同比` Y/Y lines). Left-anchor the note
  clear of the patch edge; per-locale raster moves follow Z6a and keep href,
  size, and node/link geometry unchanged.
- Interim reporting spans (`3M`, `6M`, `9M`, `H1`, `H2`, `YTD`) share the
  fiscal-year bucket with the annual record but must use the span as their
  viewer variant label unless explicitly overridden; never let them fall back
  to `Main`. An explicit dataset variant may also rename the annual/default
  record (for example `YTD`) while an interim record retains `9M`. After adding
  one, verify every chip's intended label, left-to-right order, and active state.
- A shareable final HTML artifact must be `pnpm build:standalone` output:
  fully self-contained, no sibling CSS/JS/font/data/PNG files at runtime.

## Verification Checklist

Always, before the final response:

- `pnpm check` passes (repo-wide JS syntax/tests, pending guard, architecture
  and app-global contracts, manifest and render-baseline structure freshness,
  SSOT parity, i18n coverage, dataset-file-metadata freshness). `pnpm check` is
  reproducible: it must be fully green on any working copy, including fresh
  clones, cloud agents, and CI — see Environment Notes. A non-empty
  `input/processing/` is valid evidence of active work and must not make this
  global check fail.
- When an operator completion signal was given and the enumerated batch was
  confirmed, every confirmed Source is present at its final processed path;
  report the signal, the confirmed list, and the moved paths, with no
  inferred lifecycle receipt. Without a signal, report that no relocation was
  authorized and Sources remain in processing. Unrelated pending items may
  remain.

### Environment Notes (fresh checkouts, cloud, CI)

`pnpm check` is designed to be green on any checkout; CI runs it on every
push. Two mechanisms keep it reproducible — do not undo them:

- Source screenshots that are intentionally local-only and never committed
  (currently the YipitData-sourced ARR revenue-metric datasets) declare
  `sourceImage.localOnly: true` on their revenue SSOT source entry, which
  skips the existence check. Never fabricate or commit these images; declare
  new local-only evidence the same way.
- `data/dataset-file-metadata.js` records git author times, not filesystem
  mtimes, so regeneration is deterministic on every machine. A dataset file
  falls back to its mtime only until its first commit; after committing a
  new or materially edited dataset, rerun `pnpm update:dataset-file-metadata`
  and commit the refreshed metadata so `--check` stays green.

For viewer changes (`src/app/`, `index.html` script order, `src/app.css`):

- `pnpm verify:app` passes — it is the load-order and cross-module wiring
  regression gate for the shared-top-level-scope module split.

For a new or materially changed dataset:

- The dataset profile is green through recorded evidence: Build-bound
  `dataset-verification/v1` consistency evidence (recorded by
  `record:verification` and rerun inside `seal`) plus the per-language render
  evidence below. A separate `pnpm verify:dataset -- <dataset-key>` run
  remains an optional read-only diagnostic, not a required step.
- The durable `ObjectInventory` v3, `VerificationPlan` v3, `ReviewPacket`, and
  `dataset-verification/v1` evidence match the current authored digest. Income
  Statement required locales also have `fidelity-run/2` `evidence-ready`
  records created by `record:fidelity`; Revenue Metric render/manual axes are
  Adapter-owned `notApplicable` and must not receive Sankey evidence.
- The manual loop finished with an accepted `FidelityResult` v2 whose
  `checkResults` consume every global Plan check once and every locale-scoped
  check once per required locale, with closed attention,
  Plan-required complete `interface-matrix/v1`, no open Feedback Ledger item, no pending
  recurrence upgrade, and no failed/open check. `verify:d3` diagnostic output
  alone satisfies none of these.
- Per non-default language, the rendered SVG was visually inspected — the
  aggregate command does not replace this step.
- `pnpm verify:closeout -- <build-id>` passes after baseline staging and the
  fresh seal per the step 13 close-out requirement policy (an accepted
  `FidelityResult` is the merge floor; skipped staging/seal/closeout must be
  named in the report with the reason), but it never relocates a Source. Only
  the operator review-completion rule moves the confirmed batch to
  `input/processed/`; that move is not M4 Publication.

If icon assets were extracted: the crop script passes, `crop-report.json`
shows every crop `passes: true`, validation sheets were reviewed,
`model-validation.md` records acceptance, and every relevant cluster is
extracted or documented as skipped.

If a standalone artifact is requested: `pnpm build:standalone` then
`pnpm verify:standalone` pass.

## Reporting

In the final response, include:

- Files changed, and whether the pure data SSOTs were updated.
- For new datasets: the input type, `ObjectInventory` digest and
  rendered/data-only/skipped summary, confirming every object is mapped or has
  an explicit skip reason, plus the Build ID/manifest path from intake.
- For the selected Source: report the operator completion signal, the
  confirmed enumerated list, and every directly moved path. If no signal was
  given, report that relocation was not authorized and identify the retained
  processing paths or any stop/recovery condition.
- Icon assets extracted, and whether all relevant clusters were accounted for.
- For dataset or renderer changes: use
  `pnpm record:build -- inspect <build-id>` and
  report its `CloseoutReport`-derived Task information and Loop Fidelity
  Summary, including historical/effective state and red-box status. Their
  status/confidence are derived from review, blockers, freshness, and state;
  never hand-fill or override them.
- Whether user-feedback lessons changed `docs/fidelity-loop-rules.md` or were
  recorded as dataset-specific exceptions.
- For dataset or renderer work containing short nodes: report expected visible
  face count, confirmed visible face count, T12 hidden-anchor count, and
  unclassified count per required locale. For every nonzero hidden-anchor
  count, also report the bound native-pixel evidence and the independent
  source-confirmation decision. Any mismatch or nonzero
  unclassified count must be reported as open, not converged.
- Any commands that could not be run.
