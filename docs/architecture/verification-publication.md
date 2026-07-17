# Verification, Publication, and Release Architecture

This document owns target semantics for verification evidence, fidelity
closure, staged baselines, final sealing, canonical Publication, and Release.
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
`compat:baseline`, outside these classes, until M4 Publication replaces it;
`publish:*` and `release:*` remain unimplemented target vocabulary.
Documentation and compatibility wrappers must state whether an operation is
read-only or mutating; renaming alone does not change semantics.

## Verification sequence

For an Income Statement build, the target sequence is:

```text
verify preflight (read-only)
  -> FidelityRun candidate/reference evidence (private workspace)
  -> manual attestation
  -> record closure
  -> record staged baseline
  -> verify final seal profile (fresh and read-only)
  -> record seal
```

Revenue Metric builds use the Adapter's data-level Verification Plan and may
mark render/fidelity steps `notApplicable`. All plans still produce a
machine-readable `FidelityResult` or equivalent verification result and a
fresh seal.

The implemented M3 lane — the primary Build close-out path — exposes the same
ordering through the Dataset Build Module:

```text
record:intake --signal ...  -> source-classification/v1 + INTAKED
record:build prepare-review -> source-coverage/v2
                            -> actual authored-value reconciliation
                            -> node-face-policy/v2 + verification-plan/v5
                            -> review-packet/v4 reviewToken + AUTHORED
record:verification          -> dataset-verification/v1 consistency evidence
record:fidelity --build ... -> fidelity-run/2 evidence-ready
record:build finish         -> review-pending, or accepted FidelityResult -> CLOSED
record:build stage-baseline -> BASELINE_STAGED
record:build seal           -> re-hash + Adapter final profile + SEALED
record:build inspect / verify:closeout
```

`prepareBuildReview`, `finishReviewedBuild`, `stageReviewedBaseline`,
`sealReviewedBuild`, and `inspectBuildCloseout` are the deep Module
Interfaces behind that CLI. The review token is the digest of the recorded
ReviewPacket; a JSON document cannot redirect an operation to another Build.
This lane is the primary Build close-out workflow; canonical publication
itself remains M4.

The intake Type Gate is a current M3 guard, not a target command: explicit
whole-Source signals must derive exactly one Adapter and agree with
`--adapter` before Build initialization or the working-Source claim. During
review preparation, Source Coverage must own every inventory object exactly
once. The Build Module then reads the actual loaded SSOT and, for Income
Statement node mappings, the Sankey View Adapter values. A mismatch fails
before the new authored snapshot, Plan, or packet can become review input.
These are build-local validation and recording operations; they neither
publish canonical files nor materialize a stable Source projection.

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
Diffs, metrics, interface audit, and contact sheet are provisional until all
automatic steps for that run have resolved. Human region decisions, feedback,
attention closure, and the final attestation belong to the subsequent Build
review, not to automatic rendering.

Finalization order is:

1. Produce provisional artifacts in the private workspace.
2. Run page-error, purity, size, label, interface, localization, and other
   plan gates.
3. In a `record:*` operation, atomically promote the automatic artifacts with
   an unambiguous `evidence-ready` or failed status.
4. Separately record manual evidence where required.
5. Build and hash the complete `FidelityResult`.
6. Only an accepted result may contribute to Build closure.

A failed run may retain diagnostic artifacts, but its status and archive must
unambiguously say failed. It cannot become the previous accepted round merely
because files were written.

Current review evidence uses `fidelity-run/2`. `verify:d3` is strictly
read-only diagnostic execution: it may use ephemeral scratch but does not
promote any archive, even when automatic page, purity, size, label, text,
annotation, and Interface audits complete. `record:fidelity` is the only fidelity
operation that may archive durable evidence. With `--build`, the archive is
bound to Build, authored, and Verification Plan digests and is finalized as
`evidence-ready (human review required)`. Unbound legacy manual archives retain
the v1 compatibility identity and explicitly do not imply Build closure.

`evidence-ready` is not `ACCEPTED` and is not `DatasetBuild.CLOSED`.
`record:verification` first records the non-render dataset consistency profile
against the current Build/authored/Plan identity. `finishReviewedBuild` requires
that reference, re-hashes the fidelity evidence artifacts, and reconciles required
locales, attestation, regions, risk checks, Interface Matrix, attention status,
and the `FeedbackLedger`, then creates the deterministic `FidelityResult`.
Missing attestation or any open obligation produces `review-pending` rather
than inferred success.

VerificationPlan v5 also carries two Source-derived closure boundaries. The
automatic `source-coverage` check cites the recorded coverage digest; the
global manual coverage decision must cite both that digest and the immutable
Source digest. Its embedded `node-face-policy/v2` converts every semantic
node mapping into an expected-visible locale render check. Expected-visible
small nodes therefore cannot disappear merely because their candidate face is
below the normal visibility floor; only a Source-bound exception compiled by
the policy is admissible. The fidelity rules document remains the owner of
rule semantics and thresholds.

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
Build and are rejected by the current CLI. Until M4,
`compat:baseline -- <key> [...]` (renamed from `record:baseline`; it mutates
the canonical ledger, so it sits deliberately outside the `record:*` class)
is a subset-only compatibility mutation: it writes atomically only after all
selected render/structure checks pass, but it is not build-local staging.
Batch baseline changes require their own explicit scope and Verification
Plan.

In parallel, the M3 lane has true build-local staging:
`stageReviewedBaseline` consumes the exact closure digest, records Income
Statement metrics with `future-regression-only`, and records the Revenue
Metric baseline as explicitly `not-applicable`. It does not update the
canonical baseline ledger. The compatibility command and the build-local
staging object must not be described as one transaction.

## SEALED final verification

Sealing is a fresh, non-mutating check after closure and baseline staging. It
recomputes the build's seal-input digest, validates every ArtifactManifest
reference, reruns the Adapter's final profile, and verifies that no open
manual or automatic requirement remains.

The seal verifier must not repair registration, regenerate metadata, update a
baseline, archive a provisional run, or build a release artifact. If any
input differs, it returns a stale-input result; the Build reopens at the
recovery point defined in the lifecycle document.

The implemented `sealReviewedBuild` takes no caller pass JSON: it internally
inspects and re-hashes the authored files, reruns the read-only Adapter final
profile — the non-render dataset consistency profile plus, for Income
Statement, the d3 render hard gates for every required Plan locale — requires
the Build to be `BASELINE_STAGED` with an accepted closure, and only then
records `SEALED`. The receipt stores each profile run in `finalProfiles`.
Manual decisions are consumed from the accepted closure rather than
re-executed, and the staged baseline stays excluded from the verdict. The
Source classification, Coverage, and node-face policy remain bound through
their authored/Plan digests; sealing does not reinterpret the Source. If a
loaded SSOT or View artifact changed after preparation, artifact freshness
fails and a new preparation must reconcile the new values. The
remaining gap is M4-owned: a complete `ArtifactManifest` and the canonical
projection arrive with the isolated authoring workspace and Publication, not
with the seal.

After sealing, inspection preserves both truths. `historicalState=SEALED`
records what happened; if an authored file is missing or its bytes change,
`effectiveState=AUTHORED` and `fresh=false`. `verify:closeout` succeeds only
when historical and effective states are both `SEALED`, freshness is true,
and review status is `accepted`.

## Reporting Views

`inspectBuildCloseout` may join the recorded `FidelityResult` and
`FeedbackLedger` into a deterministic `CloseoutReport`, then render Task
information and Loop Fidelity Summary. These are pure Views: status and
confidence are derived from structured facts, and the rendered text is never
fed back as evidence, attestation, or a state-transition input.

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

The Implementation must provide all-or-none canonical visibility and an
idempotent receipt for the plan digest. Writing several shared files in
sequence is not atomic. A target Implementation may use an immutable tree plus
pointer swap, a Git tree/ref CAS, or another Adapter that satisfies the same
Interface; tests use an in-memory Adapter.

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
| Type Gate or Source Coverage/authored-value reconciliation failure | no new intake/authored receipt for the failed operation | correct the classification or authored mapping, then rerun the same current M3 operation |
| provisional render/gate failure | Build stays `AUTHORED`; run rejected or blocked | fix/retry in a new or continued FidelityRun |
| missing human decision | run stays review-pending | add attestation; do not infer pass |
| closure dependency changed | closure stale; effective state `AUTHORED` | run affected plan steps again |
| baseline staging failure | Build stays `CLOSED` | retry recording with the same closed digest |
| final seal failure | Build stays `BASELINE_STAGED` or reopens per invalidation | fix or refresh evidence, then reseal |
| Publication CAS conflict | Publication is `CONFLICTED` | new plan + reseal; never retry old plan |
| Publication outcome unknown | no guessed state | inspect receipt by plan digest |
| Release failure | Publication remains `PUBLISHED` | retry Release independently |

## Current-to-target migration

Migration milestones are owned by the
[`architecture index`](README.md#migration-milestones). The important
compatibility rule is replace, not layer indefinitely:

- first wrap existing render and data verifiers as evidence-producing
  Adapters in shadow mode;
- keep `verify:d3` read-only and route durable automatic evidence through
  `record:fidelity`;
- record SourceClassification at fresh intake, then SourceCoverage,
  ObjectInventory, NodeFacePolicy-bearing Plan v5, ReviewPacket v4, human
  decisions, FeedbackLedger, and FidelityResult through the Build Module;
- exercise closure, build-local baseline staging, freshness inspection, and
  sealing without changing canonical output (implemented; now the primary
  close-out path);
- replace the freshness-only seal check with the complete Adapter
  final-verification profile (implemented: non-render consistency plus
  per-locale render hard gates);
- turn manifest, registration, baseline, and metadata writers into pure
  projectors;
- add canonical CAS and only then route mutations through `publish:*`;
- make standalone build/read verification a Release Adapter;
- delete old Shallow orchestration once tests at the new Module Interfaces
  cover the same behavior.

Until each replacement lands, the current operational commands in
[`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md) remain the
executable instructions, including their known transitional limitations.
