# Verification, Publication, and Release Architecture

This document owns the semantics of verification evidence, fidelity closure,
staged baselines, final sealing, canonical Publication, and Release.
Lifecycle states and durable build objects are defined in
[`dataset-lifecycle.md`](dataset-lifecycle.md).

## Operation vocabulary

The command prefix communicates the mutation class and is part of the
Interface, not a naming preference.

| prefix | permitted effect | forbidden effect |
| --- | --- | --- |
| `verify:*` | read inputs, use ephemeral scratch, return facts and diagnostics | durable evidence, baseline, metadata, registration, or canonical writes |
| `record:*` | write content-addressed build-local evidence or staging, then reference it from an auditable state event | canonical registration or published output |
| `publish:*` | compare-and-swap one fully planned canonical snapshot | authoring, new visual judgment, silent merge/rebase |
| `release:*` | build/deploy from one published digest and record a receipt | modify Build, baseline, or canonical Publication state |

Implemented `verify:*` and `record:*` commands satisfy this contract. The one
remaining canonical compatibility mutation is deliberately named
`compat:baseline`, outside these classes, for legacy direct-edit compatibility.
`publish:datasets` and `release:dataset` implement the isolated workflow in
[asset-workflow.md](../asset-workflow.md). `release:git` transports a published
digest into a reviewed commit; `record:transport-review` records that integrated
candidate’s explicit human acceptance. It does not alter Build acceptance or the
Publication pointer. See [ADR-0003](../adr/0003-shared-checkout-sessions-and-git-transport.md).
Documentation and compatibility wrappers must state whether an operation is
read-only or mutating; renaming alone does not change semantics.

## Verification sequence

For an Income Statement build, the sequence is:

```text
verify preflight (read-only)
  -> FidelityRun candidate/reference evidence (private workspace)
  -> operator acceptance
  -> record closure
  -> record staged baseline
  -> seal: re-hash inputs + Adapter final profile (reuses accepted evidence)
  -> record seal
```

Revenue Metric and Metric Observation builds use the Adapter's data-level
checklist, which contains no render step. All plans still produce a
machine-readable `FidelityResult` and a seal.

`record:workflow` exposes that ordering through the Dataset Build Module:

```text
record:workflow start     -> source-classification/v1 (PNG) or /v2 (text) + INTAKED
record:workflow continue  -> source-objects/v1 + actual authored-value reconciliation
                          -> verification-plan/v6 + review-packet/v5 reviewToken + AUTHORED
                          -> dataset-verification/v1 consistency evidence
                          -> fidelity-run/2 evidence-ready per required locale
                          -> waiting for human review
record:workflow feedback  -> feedback-note/v1 (expires the review candidate)
record:workflow accept    -> fidelity-result/v3 -> CLOSED -> BASELINE_STAGED -> SEALED
publish:datasets plan/commit -> PublicationBatch
```

`prepareBuildReview`, `finishReviewedBuild`, `stageReviewedBaseline`,
`sealReviewedBuild`, and `inspectBuildCloseout` are the deep Module Interfaces
behind those actions. The review token is the digest of the recorded
ReviewPacket; a JSON document cannot redirect an operation to another Build.
`accept` records acceptance, closure, baseline and seal in one locked manifest
transaction using the existing checks; it preserves every state-machine
receipt, leaves no partial acceptance if any transition fails, and commits each
Build in a batch independently. Historically the same Interfaces were driven
step by step through `record:intake`, `record:build`, `record:verification`,
`record:fidelity` and `verify:closeout`; those commands remain only for
historical Builds.

The intake Type Gate derives exactly one Adapter from the facts' top-level
`signals` before Build initialization or the working-Source claim (rules:
[`dataset-lifecycle.md`](dataset-lifecycle.md#sourceclassification)). During
review preparation, the Build Module validates the flat Source object list,
then reads the actual loaded SSOT and, for Income Statement values, the Sankey
View Adapter node or non-node metric each value names. A mismatch fails before
the new authored snapshot, Plan, or packet can become review input. These are
build-local validation and recording operations; they neither publish
canonical files nor materialize a stable Source projection.


### Evidence purposes

Every evidence item declares one purpose:

| purpose | may influence current closure/seal verdict? |
| --- | --- |
| `candidate` | yes, through the Verification Plan |
| `reference` | yes |
| `manual` | yes; machines verify completeness and freshness, not human visual truth |
| `consistency` | yes |
| `future-regression` | no for the build that produced it |
| `diagnostic` | no |

This prevents a diagnostic metric or newly recorded baseline from becoming an
accidental acceptance gate.

## FidelityRun finalization

Each run has a private workspace and immutable run identity. Candidate images,
Diffs, metrics, and the interface audit are provisional until all automatic
steps for that run have resolved. The operator acceptance belongs to the
subsequent Build review, not to automatic rendering.

Finalization order is:

1. Produce provisional artifacts in the private workspace.
2. Run page-error, purity, size, font, node-face, label, text, interface, and
   attribute-driven gates, plus T18 when the source objects declare a label
   position, and record a per-gate summary in the metrics document. The
   interface contact sheet and region metrics are diagnostics produced only
   when a gate fails.
3. In a `record:*` operation, atomically promote the reference, candidate,
   Diff, metrics, and interface audit with an `evidence-ready` status. A run
   with a failed gate is never archived, so an archive never contains a
   contact sheet.
4. At review, join the operator acceptance with the current evidence.
5. Build and hash the accepted `FidelityResult`.
6. Only that accepted result contributes to Build closure.

A failed run keeps its diagnostics only in private scratch (`--keep`) and is
never promoted. It cannot become the previous accepted round merely because
files were written.

Current review evidence uses `fidelity-run/2`. `verify:d3` is strictly
read-only diagnostic execution: it may use ephemeral scratch but does not
promote any archive, even when automatic page, purity, size, label, text,
annotation, and Interface audits complete. The `record:fidelity` operation
(run by `record:workflow continue`) is the only fidelity operation that may
archive durable evidence. Bound to a Build, the archive is
bound to Build, authored, and Verification Plan digests and is finalized as
`evidence-ready (human review required)`. Unbound legacy manual archives retain
the v1 compatibility identity and explicitly do not imply Build closure.

`evidence-ready` is not `ACCEPTED` and is not `DatasetBuild.CLOSED`.
The consistency step of `record:workflow continue` first records the non-render
dataset consistency profile against the current Build/authored/Plan identity.
`finishReviewedBuild` requires the ReviewPacket's `reviewToken`, that
consistency reference, and,
for Income Statement, one evidence-ready run per required locale bound to the
current Build, authored digest, and Plan digest. It re-hashes each run's
artifacts, rejects a run whose recorded gate summary contains a failed gate,
and records the operator acceptance `{ reviewer, decision: "accepted", note,
reviewedAt, previewId? }` in an accepted `fidelity-result/v3`. There is no
pending or rejected result: a missing acceptance, a missing locale, or stale
evidence fails the operation and the Build stays `AUTHORED`. Problems are
recorded with `record:workflow feedback` as a `FeedbackNote`, which expires
the current review candidate.

VerificationPlan v6 binds the source-objects digest and the immutable Source
digest, and the accepted result binds the Plan digest. Each Build-bound
render expects every value node from the source objects to paint a face, and
every rendered node to reach the 3px floor unless the author declared it in
`shortNodes`. The fidelity rules document remains the owner of rule semantics
and thresholds.

## Baseline does not prove itself

`BASELINE_STAGED` is a candidate for protecting future builds; it is not
evidence that the current candidate is correct.

The staged baseline must bind:

- dataset key and language/profile;
- Source/reference, authored, renderer, and protocol digests;
- `closureDigest` and candidate metrics;
- baseline policy/tolerance version;
- a `future-regression` purpose marker.

The final seal verifier may check that the staged baseline faithfully records
the already-closed candidate. It must exclude the staged baseline from the
current pass/fail evidence set. The baseline becomes canonical only inside the
same successful Publication as its sealed build. A later build may use that
published baseline as independent historical evidence, but it cannot override
candidate, reference, interface, or manual failures.

No-key, full-catalog baseline updates are not a close-out operation for one
Build and are rejected by the current CLI. `compat:baseline -- <key> [...]`
(renamed from `record:baseline`; it mutates the canonical ledger, so it sits
deliberately outside the `record:*` class) is a subset-only legacy mutation: it
writes atomically only after all selected render/structure checks pass, but it
is not build-local staging. Batch baseline changes require their own explicit
scope and Verification Plan.

Build-local staging is separate: `stageReviewedBaseline` consumes the exact
closure digest, records Income Statement metrics with
`future-regression-only`, and records the Revenue Metric baseline as explicitly
`not-applicable`. It does not update the canonical baseline ledger; the legacy
command and the build-local staging object must not be described as one
transaction.

## SEALED final verification

Sealing is a non-mutating check after closure and baseline staging.
`sealReviewedBuild` takes no caller pass JSON: under the write lock it
re-hashes the authored files, recomputes the seal-input digest, validates every
ArtifactManifest reference, requires `BASELINE_STAGED` with an accepted
closure, completes the Adapter's final profile, and verifies that no open
requirement remains before recording `SEALED`.

By default the final profile reuses evidence instead of re-running it. The
non-render consistency proof comes from the accepted closure on the same
authored and Plan digests (`reusedEvidence: true` plus the accepted consistency
object digest). For Income Statement, the accepted FidelityResult already
proved the d3 render hard gates for every required Plan locale on the exact
authored snapshot; because the locked freshness check pins the renderer,
fonts, Adapter and semantic data, seal reuses that proof (output digest =
accepted locale evidence digest). `record:workflow seal --fresh-checks` reruns
consistency and rendering, `--fresh-render` reruns rendering, and a missing
historical proof or a locale the proof does not cover falls back to a new
check. The receipt stores each profile row in `finalProfiles`.

The seal verifier must not repair registration, regenerate metadata, update a
baseline, archive a provisional run, or build a release artifact. The operator
acceptance is consumed from the accepted closure rather than re-collected, and
the staged baseline stays excluded from the verdict. The Source classification
and source objects remain bound through their authored/Plan digests; sealing
does not reinterpret the Source. If any input differs — for example a loaded
SSOT or View artifact changed after preparation — it returns a stale-input
result and the Build reopens at the recovery point defined in the lifecycle
document, where a new preparation reconciles the new values. New Builds derive
the complete artifact set and semantic contributions at preparation and
recompute those dependencies at inspection; Publication then checks the
combined canonical projection before its pointer swap. Legacy Builds retain
the artifact lists and protocol they actually recorded.

After sealing, inspection preserves both truths. `historicalState=SEALED`
records what happened; if an authored file is missing or its bytes change,
`effectiveState=AUTHORED` and `fresh=false`. Publication accepts a Build only
when its effective state is `SEALED`, it is fresh, and its review status is
`accepted`.

## Reporting Views

`inspectBuildCloseout` may read the recorded `FidelityResult` (any version)
into a deterministic `CloseoutReport`, then render Task information and Loop
Fidelity Summary. These are pure Views: status and confidence are derived from
structured facts, and the rendered text is never fed back as evidence,
acceptance, or a state-transition input. The local review workbench is likewise
a derived View that cannot accept a review or change registration, evidence or
Build state; its behaviour is owned by
[`local-environments.md`](../local-environments.md).

## Publication planning

A `PublicationBatch` consumes only fresh `SEALED` builds. Planning is
read-only against canonical state and produces an immutable plan containing:

- `baseCanonicalDigest` and owned path preconditions;
- sorted build IDs and seal digests;
- semantic canonical contributions from each Adapter;
- global projections: dataset manifest, SSOT registrations, baseline ledger,
  stable dataset metadata, and any generated views;
- path claims and overlap/conflict results;
- complete projected-tree or patch digest;
- the read-only checks run against that projected result;
- a plan digest and idempotency identity.

Input-type Adapters contribute semantic records and assets. They do not own
global file merging. Publication projectors own those shared outputs, which
keeps global merge knowledge local to one Module.

## Atomic publish and CAS

`publish:*` is the only canonical mutation. Its Interface is conceptually:

```text
compareAndSwap(baseCanonicalDigest, planDigest, projectedTreeDigest)
```

The Implementation provides all-or-none canonical visibility and an idempotent
receipt for the plan digest; writing several shared files in sequence is not
atomic. The current Implementation is an immutable tree plus pointer swap;
another Adapter (for example a Git tree/ref CAS) may satisfy the same Interface.

Outcomes:

- Exact plan already published: return the prior success receipt.
- Transient I/O failure before commit: retry with the same plan identity.
- Outcome unknown: inspect by plan digest before retrying.
- Canonical digest mismatch: record `CONFLICTED`; never blind-retry or
  silently rebase.

After a CAS conflict:

1. Read the new canonical snapshot.
2. Create a new Publication plan with a new base digest.
3. Re-evaluate contributions, path claims, ordering, and global projections.
4. Reseal affected builds against the new base. A fast reseal is allowed when
   ChangeImpact proves no fidelity evidence must be repeated, but a new seal
   event is still required.
5. Publish the new plan. The conflicted plan remains immutable audit history.

## Release separation

Release starts only from a `publishedDigest`. Standalone HTML generation,
standalone verification, and hosted deployment belong to a Release Adapter.
Each attempt records target, Adapter/version, parameters, published digest,
idempotency identity, output digest, and receipt/error.

`RELEASE_FAILED` does not change Build, baseline, or Publication and is
terminal for that Attempt. Retrying creates a new Attempt with `retryOf` and
the same published digest; releasing newer canonical content also creates a
new Attempt, but against the newer digest.

## Failure and recovery matrix

| failure | durable state | recovery |
| --- | --- | --- |
| Type Gate or source-object/authored-value reconciliation failure | no new intake/authored receipt for the failed operation | correct the classification or authored mapping, then rerun the same operation |
| provisional render/gate failure | Build stays `AUTHORED`; the run is not archived | fix, then record a new FidelityRun |
| missing operator acceptance | Build stays `AUTHORED`; `accept` fails | deliver the review candidate and wait for acceptance; do not infer pass |
| closure dependency changed | closure stale; effective state `AUTHORED` | run affected plan steps again |
| baseline staging failure | Build stays `CLOSED` | retry recording with the same closed digest |
| final seal failure | Build stays `BASELINE_STAGED` or reopens per invalidation | fix or refresh evidence, then reseal |
| Publication CAS conflict | Publication is `CONFLICTED` | new plan + reseal; never retry old plan |
| Publication outcome unknown | no guessed state | inspect receipt by plan digest |
| Release failure | Publication remains `PUBLISHED` | retry Release independently |

## Migration record

Milestones are recorded in the
[`architecture index`](README.md#migration-milestones). The migration followed
"replace, not layer indefinitely": existing verifiers were wrapped as
evidence-producing Adapters, `verify:d3` stayed read-only, closure, staging and
sealing moved into the Build Module, writers became pure projectors behind
`publish:*` CAS, and standalone output became a Release Adapter. Old Shallow
orchestration is deleted only once tests at the new Module Interfaces cover it.

## Completed-work artifact retirement

Local workspace, evidence and publication-tree retirement is a maintenance
operation, not a lifecycle transition, and never fabricates acceptance;
[artifact-retention.md](../artifact-retention.md) owns it.
