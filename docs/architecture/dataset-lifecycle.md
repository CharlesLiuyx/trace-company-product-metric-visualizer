# Dataset Lifecycle Architecture

## Logical objects and local storage

`trace-record-list/v1` is a local storage encoding for large file-entry and
artifact arrays. The store resolves digest-addressed chunks and verifies the
reconstructed array before exposing a Build or object. The logical JSON,
receipt chain, object digests and lifecycle protocols are unchanged. Plain
historical JSON remains readable; frozen toolchains without the codec keep
writing plain JSON until explicitly refreshed.

`workspace-storage/v1` represents a complete canonical workspace using its
immutable base plus ordinary, independently writable local changes. Inherited
paths are explicit indices into the digest-verified base manifest. Enumeration
and verification use the complete logical tree and hash actual bytes. External
authoring materializes independent files first, including before deletion;
workflow operations use the existing owner/generation and operation lock.
Storage compaction does not accept, close, seal, publish or relocate a Source.
The operational and retention owners remain `docs/local-environments.md` and
`docs/artifact-retention.md`.

This document owns the target lifecycle model for turning one Source into a
validated dataset contribution. It defines the three state scopes, the
build-local `FidelityRun`, the durable objects shared between Modules, and the
Income Statement / Revenue Metric Adapter Seam. Verification and canonical
write semantics are owned by
[`verification-publication.md`](verification-publication.md).

Current entry point: [asset-workflow.md](../asset-workflow.md). New isolated
Builds add derived dependencies and a single review candidate to the existing state machine;
Metric Observation keeps real text/image anchors in its metric record and
derives the same flat Source object list.
Historical protocol readers and the legacy direct-edit description below remain
explicit compatibility paths.

## Scope model

### 1. DatasetBuild

`DatasetBuild` is the transaction for one stable dataset key and one immutable
Source identity.

```text
INTAKED -> AUTHORED -> CLOSED -> BASELINE_STAGED -> SEALED
```

| state | meaning | required durable result |
| --- | --- | --- |
| `INTAKED` | key, Source digest, dimensions, provenance, availability, whole-Source Type Gate, selected Adapter, and base canonical snapshot are fixed; the current compatibility implementation also claims the working Source locator | intake record with `SourceClassification` |
| `AUTHORED` | the selected Adapter accepts the Source objects and authored contribution | `ArtifactManifest` |
| `CLOSED` | every check of the Adapter's fixed Plan has current evidence and the operator accepted the authored snapshot | closure digest plus the accepted `FidelityResult` reference |
| `BASELINE_STAGED` | a future-regression record has been derived from the closed candidate but is not canonical | staged baseline artifact bound to the closure digest |
| `SEALED` | a fresh, read-only final verification accepts the exact build inputs and publication contribution | seal digest and `acceptedAt` |

States are append-only facts, not mutable labels. Rework records a new
`AUTHORED` receipt with `reopenedFrom` when it follows `CLOSED`,
`BASELINE_STAGED`, or `SEALED`; it retains the prior evidence and seal for
audit, while making that earlier closure ineligible for the new authored
snapshot.

### Source identity, working locator, and projection

The Source digest identifies immutable bytes. A filesystem path locates or
projects those bytes; moving an exact digest does not create a lifecycle state,
rewrite Source identity, or invalidate evidence by itself.

The current compatibility workflow uses three directory roles:

- `input/pending/` is the unclaimed discovery queue and is Git-tracked so new
  work can be shared across project checkouts;
- `input/processing/` is the Build-local working locator and filesystem lease.
  After the guard, key, and input-type selection succeed, `record:intake`
  durably fixes Source identity and claims the selected file here before
  authoring begins. These active claims are also Git-tracked;
- `input/processed/` is the stable compatibility locator and a Git-ignored,
  machine-local archive. An explicit operator completion signal — confirmed
  against the enumerated processing batch — is
  the only current relocation authority (owning rule:
  [`asset-workflow.md`](../asset-workflow.md)
  §7 Operator Review-Completion Signal); passing Build close-out
  alone does not move files, and relocation records no Build transition or
  receipt.

Git visibility is collaboration transport, not lifecycle authority. A Git
add, rename, or deletion for one of these locators neither advances a Build nor
replaces the digest and no-clobber checks owned by the lifecycle interfaces.

Directory existence is never authoritative state. A crash may leave a locator
and Build record temporarily out of sync; recovery reconciles them by Build ID,
key, and digest without inferring a transition or overwriting another file. A
missing working file, a destination collision, or changed bytes is a hard
recovery/freshness failure.

Publication owns the canonical Source locator/digest projection. The local
processed archive remains operator-controlled, as clarified by ADR-0002;
it is not a canonical visibility boundary.

### 2. PublicationBatch

`PublicationBatch` owns one atomic change to the canonical namespace. It may
contain one or several fresh sealed builds.

```text
PLANNED -> PUBLISHED
        -> CONFLICTED
```

`CONFLICTED` is terminal for that plan. The caller reads the new canonical
snapshot, creates a new plan, and reseals affected builds against the new base.
The old plan is never silently rebased.

### 3. ReleaseAttempt

`ReleaseAttempt` owns building or deploying an external artifact from one
published canonical digest.

```text
PENDING -> RELEASED
        -> RELEASE_FAILED
```

Release is intentionally outside Publication. `RELEASED` and
`RELEASE_FAILED` are terminal for one Attempt. Retrying a failed standalone
build or deployment creates a new `ReleaseAttempt` with `retryOf` pointing to
the failed Attempt and the same published digest; it never changes the
`PUBLISHED` state.

## Build-local FidelityRun

A `FidelityRun` is a child transaction of one `AUTHORED` snapshot, not a
fourth global state scope.

```text
OPEN -> EVIDENCE_READY -> REVIEWED -> ACCEPTED
                              |----> REJECTED
OPEN --------------------------------> ABORTED
```

Every run pins `buildId`, `authoredDigest`, Source/reference digests,
renderer digest, protocol digest, required locales, and Verification Plan
digest. Evidence from different authored digests or plan versions cannot be
combined. Multiple runs may exist, but `CLOSED` names the exact accepted run
or compatible accepted evidence set it consumes.

The current review-evidence protocol is `fidelity-run/2`. Its durable
automatic terminal is `EVIDENCE_READY`, not human acceptance. `verify:d3`
uses only ephemeral diagnostic scratch; `record:fidelity` is the operation
that may finalize a build-bound `evidence-ready` archive, and only after every
gate of that run passed. The operator acceptance is joined later by the Dataset
Build Module rather than inferred from this run.

## Durable lifecycle objects

New protocol identifiers use `<name>/v<n>`. The existing `fidelity-run/1` and
`fidelity-run/2` strings predate this convention and stay unchanged: renaming
a recorded protocol identity would invalidate existing archives for no
semantic gain.

### SourceClassification

`source-classification/v1` is the pre-intake Type Gate for a fresh
`record:intake`. It is an explicit, Source-bound classification record, not a
claim that a vision model inferred the input type. It binds the complete
native image bbox, locator, digest, dimensions, stable dataset key, confirmed
status, review method, positive signals, and derived Adapter.

The current Adapter signatures are deliberately mutually exclusive:

| Adapter | required Source signals | forbidden Source signals |
| --- | --- | --- |
| Income Statement | `income-statement-values`, `sankey-flow-topology` | `revenue-metric-definition`, `time-series-observations` |
| Revenue Metric | `revenue-metric-definition`, `time-series-observations` | `income-statement-values`, `sankey-flow-topology` |

Income Statement optionally accepts `supplemental-operating-metrics` when the
Source includes separate operating cards. This signal is forbidden for the
other Adapters and alone cannot select an Adapter. Each card is one `value`
Source object bound to `operatingMetrics` on the same SSOT record; see
`data/schema.md` for fields. They are excluded from accounting sums and node
faces, while requiring one dedicated value text in each locale. Preparation
reconciles their exact values, comparison operators, labels and quotes against
the loaded SSOT/View. Existing states and financial precision obligations
remain unchanged.

The signals must select exactly one supported Adapter and that result must
match the requested `--adapter`. Otherwise intake fails before a Build is
initialized or the Source is claimed. Fresh CLI intakes require this record;
legacy Builds without one remain inspectable, but cannot prepare new Source
objects. Changing an intake
classification requires a successor Build with a new immutable intake fact.

### SourceObjects

`source-objects/v1` is the single Source-to-authored bridge required by a new
review preparation. The author lists every independent Source object once in
`source-facts/v1` `objects[]` (field rules: `docs/dynamic-dataset-workflow.md`);
metric-observation facts are compiled into the same list. Each entry has a
stable ID and one class — `value`, `flow`, `label`, `asset`, or `residual` — and
the Build Module binds the list to `SourceClassification` and the Build Source
digest. Entries carry no Source pixel evidence; the Build records which Source
digest the facts were authored against.

`prepareBuildReview` validates the list and reconciles it against the actually
loaded registry before it records `AUTHORED`:

- every `value` entry matches its typed SSOT field, and an Income Statement
  financial value matches exactly one Adapter node or non-node metric, with no
  Adapter target claimed twice;
- the value lies within its literal's rounding interval, or carries the typed
  `precisionRecovery` (rounded-to-zero literals) or user-directed
  `authoritativeCorrection` record; a recovered non-zero value must stay
  non-zero through SSOT/View display precision;
- an `Other` object is never a residual, and an Other that displays an amount
  is a `value` entry (T22); a residual cannot display an amount;
- payment-network charts use the typed `revenue.paymentNetwork.*` paths;
  Revenue Metric values match the selected dated SSOT observation.

The object also derives `Other` identities, value node IDs, non-node metric
IDs, the smallest non-zero values, the declared `shortNodes`, and the
opt-in label groups that carry a `referenceBBox` (T18). Render-time B15
expects every value node painted and every rendered node at least 3px tall
unless listed in `shortNodes`; fidelity definitions and thresholds remain owned
by [`fidelity-loop-rules.md`](../fidelity-loop-rules.md).

### ChangeImpact

`ChangeImpact` replaces ambiguous phrases such as “new or materially
changed.” It is explicit input to Verification Plan selection.

```text
new-dataset
financial-data-only
company-metadata-only
geometry
render-engine
interaction
localized-layout
display-text-only
asset
docs-only
```

More than one impact may apply. A classifier may derive impacts from a diff,
but the accepted value is durable and reviewable. Unknown changes select the
strictest applicable plan rather than silently skipping work.

### VerificationPlan

`verification-plan/v6` is a fixed per-Adapter checklist. Income Statement
plans require `data-consistency` (G11), one `render-fidelity` evidence run per
required locale, and a global `human-review` check that only the operator
acceptance satisfies; Revenue Metric and Metric Observation plans require
`data-consistency` and `human-review`. The render check lists the always-on and
attribute-driven gates, plus T18 when the source objects declare a label
position. The Plan binds the source-objects digest, the immutable Source
digest, the required locales, and the recorded `ChangeImpact`. Plans prepared
through `record:workflow` also carry `checkpointProtocol: review-candidate/v1`
and the derived dependency scopes: one all-locale review candidate and no stage
freezes. Historical `fidelity-checkpoints/v1` Plans keep their ordered stage
freezes.

Local execution and CI consume the same plan. A plan change invalidates any
closure or seal that depended on its old digest. Builds authored under older
Plans stay readable; `record:workflow continue` or `refresh` re-prepares them
under v6 before review.

### ReviewPacket

`review-packet/v5` is the content-addressed handoff from authored preparation to
automatic and human review. It binds `buildId`, authored digest, Verification
Plan digest, source-objects digest, required locales, and references to the
recorded source objects and Plan. `record:build prepare-review` returns its
digest as a `reviewToken`; `finish` consumes that token (`packetDigest` remains
a compatibility alias). The token identifies the packet and cannot select a
different Build. Older packets must be regenerated by re-preparing the Build.

### DatasetVerification

`dataset-verification/v1` is Build-bound, non-render consistency evidence produced
by `record:verification`. It runs the current dataset profile for syntax, SSOT,
strict i18n, and generated metadata with rendering skipped, then binds the pass
to the Build, Adapter, authored digest, and Verification Plan digest. A failed
check records no ready object; a Build or authored-file change during the run
invalidates the result. Closure for every Adapter requires this evidence;
Sankey render evidence remains an additional Income Statement obligation.

### ArtifactManifest

`ArtifactManifest` is the immutable inventory of build inputs and outputs:

```text
build/key/input type + Adapter version
Source, SourceClassification, and SourceObjects references
SSOT, View, company, i18n, icon, and annotation artifacts
canonical contributions and path claims
runtime, renderer, protocol, and schema dependencies
ChangeImpact and VerificationPlan digests
availability policy for every Source/evidence artifact
```

Each reference is content-addressed. A filesystem path may be a locator or a
future projection path, but never the evidence identity. The working and stable
Source paths follow the locator/projection rules above.

The `AUTHORED` receipt does not embed the SourceObjects or the VerificationPlan.
Each is recorded once as a build-local object, and the receipt keeps
`{ digest, protocol, object: { kind, digest, path } }`; recording fails unless
the object reference matches the content digest. Readers resolve the reference
and re-check the object digest. Receipts recorded before this format embedded
the content inline and remain readable as recorded.

### FidelityResult

`fidelity-result/v3` is the immutable record of one accepted review closure:

- `subject`: Build ID, dataset key, Adapter, authored digest, and Verification
  Plan digest;
- `acceptance`: the operator's `{ reviewer, decision: "accepted", note,
  reviewedAt, previewId? }`;
- `evidence`: for Income Statement, one entry per required locale with the run
  manifest locator, evidence digest, candidate PNG digest, full-image
  similarity/MAE/size, and the per-gate summary that run recorded;
- `automatic`: the dataset-consistency digest and the per-locale gate verdicts;
- `resultDigest`.

It contains facts and one human decision, not canonical mutations.
`finishReviewedBuild` creates it only from an explicit acceptance on fresh
inputs and never records a pending or rejected result. A missing acceptance, a
required locale without evidence-ready render evidence on the current authored
snapshot, a recorded failed gate, or missing or stale consistency evidence
fails the operation and leaves the Build `AUTHORED`. Render gates decided
pass/fail when the run was recorded, so the result does not re-judge them;
everything outside the machine gates is covered by the operator's acceptance,
not by per-check entries.

Closed or sealed v1/v2 results are never rewritten. They stay inspectable and
sealable because one read model surfaces their status, subject, consistency, and
per-locale evidence. A new closure requires VerificationPlan v6 and
ReviewPacket v5; Builds authored under older protocols are re-prepared first.

### FeedbackNote

`feedback-note/v1` records what the operator said about the current review
candidate: `{ note, date, locales?, objectIds? }` plus the Build ID and record
time. `record:workflow feedback` stores it as a build-local object, expires the
current review candidate (the review context is a semantic input of the Build
workspace, so the next `continue` re-prepares and re-renders), and lists the
other Builds of the same batch for a same-pattern sweep. A note carries no
disposition, recurrence count, or escalation state; closure later depends only
on a new candidate and a new acceptance. Whether a defect also lands a machine
gate follows the feedback protocol in
[`fidelity-loop-rules.md`](../fidelity-loop-rules.md) §4.

## Input-type Adapter Seam

Input type is the real extension Seam. There are already three Adapters, so
the Seam is not hypothetical.

| Adapter | authoring contribution | verification profile |
| --- | --- | --- |
| Income Statement | company record, financial SSOT, Sankey View, i18n, optional icon/raster assets | data consistency, one evidence-ready render per required locale that passes the d3 gates, operator acceptance |
| Revenue Metric | company record and revenue Metric observations with source, definition, conditions, confidence, and lineage | data/schema/source/i18n consistency and operator acceptance; no Sankey or d3 fidelity unless a later View requires it |
| Metric Observation | company/product metric observations with exact decimal values, units/basis, and real Source anchors | data consistency and operator acceptance; no Sankey render |

An Adapter owns classification signatures, the Source object classes and typed
SSOT references it accepts, authored validation, its fixed Verification Plan
checklist, and semantic canonical contributions. It must not write
canonical files, update global manifests, or declare a build sealed. Those
rules remain inside the deep Build and Publication Modules, which preserves
Locality.

A future input type adds an Adapter plus its schemas and verification profile;
it does not add a parallel workflow or branch every caller.

## Hashes, time, and invalidation

`acceptedAt` is recorded once when a seal succeeds and is stable lifecycle
data. It replaces commit-time/mtime feedback loops in authoring closure.
Commit history may still be displayed separately, but it cannot determine
whether a build is complete.

`baseCanonicalDigest` identifies the canonical snapshot against which the
build was authored and sealed. The seal binds at least:

```text
Source + SourceClassification + SourceObjects + ArtifactManifest
Adapter/schema + renderer/runtime + protocol/rules
required locales + closure + staged baseline
canonical contributions/path claims + baseCanonicalDigest
```

Invalidation is explicit:

| changed input | effective recovery point |
| --- | --- |
| Source bytes, key, availability identity, or intake classification | create a successor build; do not mutate the old Source/intake fact |
| Source objects or authored contribution | `AUTHORED`; prepare a fresh v6 Plan/v5 packet, then rerun closure, baseline staging, and seal |
| Adapter/schema, renderer, protocol, required locale, or Verification Plan | `AUTHORED`; existing authored artifacts may be reused only if the new Adapter accepts them |
| accepted closure | `CLOSED`; restage baseline and reseal |
| staged baseline content or policy | `BASELINE_STAGED`; reseal without using it as proof |
| canonical base before publish | Publication becomes `CONFLICTED`; replan and reseal against the new base |

Relocating the exact Source bytes from `pending/` to `processing/`, or from
`processing/` to the stable projection, is not a changed input. The Build keeps
the intake digest identity; every claim and recovery must verify
the bytes against it. A digest mismatch follows the Source-bytes row above.

Queries must report both the historical state and effective freshness. A
historical `SEALED` label with mismatched current digests is stale and cannot
be published.

This distinction is implemented for authored files: inspection re-hashes the
current bytes. If any recorded artifact is missing or its digest changes, the
historical `SEALED` receipt remains auditable while `effectiveState` becomes
`AUTHORED` and `fresh` becomes false.

## Transition invariants

- One Build is serial by version; different Builds may run in parallel.
- The `processing/` locator is a per-key working lease, not a state transition;
  intake claims are no-clobber and digest-checked. Its only current relocation
  authority is the explicit, batch-confirmed operator completion signal, which
  moves the confirmed set no-clobber without lifecycle receipt synthesis.
- Every state-changing operation has an idempotency identity and an expected
  aggregate version.
- Artifacts are stored and hash-verified before a state event references
  them; failed state recording may leave garbage-collectable blobs, not a
  partial canonical change.
- Build-local evidence never writes canonical state.
- A new `AUTHORED` review snapshot requires the complete flat Source object
  list and successful reconciliation against the actually loaded authored SSOT/View;
  declared intent cannot substitute for the authored values.
- `CLOSED` requires current evidence for every check in the Adapter's fixed
  Plan plus the operator acceptance; absence is not success.
- `SEALED` is fresh only for its exact digest set.
- Only fresh sealed contributions enter Publication.

## Current Implementation note

The M3 build-local chain is the primary close-out path, exposed through the
deep `prepareBuildReview`, `finishReviewedBuild`, `stageReviewedBaseline`,
`sealReviewedBuild`, and `inspectBuildCloseout` Interfaces, surfaced by
`record:build`. Together with `record:verification`, it records content-addressed
SourceObjects, VerificationPlan, ReviewPacket, DatasetVerification,
FidelityResult, FeedbackNote, closure, staged baseline, and seal objects under
the per-Build store. `inspect` also produces `CloseoutReport`, Task
information, and Loop Fidelity Summary as pure Views over the recorded
`FidelityResult`. Closures recorded before `fidelity-result/v3` may still
reference a feedback-ledger object; it is no longer read.

At current intake, `record:intake` first records `source-classification/v1`
from the whole-Source Type Gate, then claims the selected Source from
`pending/` to the Build-local, Git-tracked `processing/` locator. At review
preparation, SourceObjects with actual SSOT/View reconciliation, Plan v6, and
ReviewPacket v5 are current M3 behavior. The operator
review-completion signal (owning rule:
[`asset-workflow.md`](../asset-workflow.md)
§7 Operator Review-Completion Signal) is the only current authority to relocate
Sources from `processing/` to `processed/`, and it moves only the batch the
operator has confirmed. The destination is a Git-ignored local archive, so the
repository records removal from the shared processing queue rather than the
archived PNG. Passing Build close-out alone does not move a Source.
Neither filesystem move adds or infers a DatasetBuild state.

The preceding path describes legacy direct-edit compatibility. New isolated Builds use `docs/asset-workflow.md`;
`compat:baseline` remains only the legacy baseline writer. New isolated Builds
use immutable-tree Publication and path-claim CAS. The local Source archive
move remains separate from that canonical publication boundary. The current seal operation re-hashes
authored files and reuses the accepted non-render consistency evidence and, for
Income Statement, per-locale d3 render proof on the same authored snapshot
(`--fresh-checks` reruns both; `--fresh-render` reruns rendering) before recording `SEALED`
against an accepted closure.
See the live status table in [`README.md`](README.md).
