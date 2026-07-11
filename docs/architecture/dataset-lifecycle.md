# Dataset Lifecycle Architecture

This document owns the target lifecycle model for turning one Source into a
validated dataset contribution. It defines the three state scopes, the
build-local `FidelityRun`, the durable objects shared between Modules, and the
Income Statement / Revenue Metric Adapter Seam. Verification and canonical
write semantics are owned by
[`verification-publication.md`](verification-publication.md).

## Scope model

### 1. DatasetBuild

`DatasetBuild` is the transaction for one stable dataset key and one immutable
Source identity.

```text
INTAKED -> AUTHORED -> CLOSED -> BASELINE_STAGED -> SEALED
```

| state | meaning | required durable result |
| --- | --- | --- |
| `INTAKED` | key, Source digest, dimensions, provenance, availability, input-type selection, and base canonical snapshot are fixed | intake record |
| `AUTHORED` | the selected Adapter accepts the inventory and authored contribution | `ArtifactManifest` |
| `CLOSED` | the required verification evidence and human decisions close with no open requirement | closure digest plus accepted `FidelityResult` references |
| `BASELINE_STAGED` | a future-regression record has been derived from the closed candidate but is not canonical | staged baseline artifact bound to the closure digest |
| `SEALED` | a fresh, read-only final verification accepts the exact build inputs and publication contribution | seal digest and `acceptedAt` |

States are append-only facts, not mutable labels. Rework records an explicit
reopen/invalidation event and retains prior evidence for audit.

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
that may finalize a build-bound `evidence-ready` archive. Manual decisions are
joined later by the Dataset Build Module rather than inferred from this run.

## Durable lifecycle objects

### ObjectInventory

`ObjectInventory` accounts for every coarsely inventoried Source object with a
stable object ID and exactly one disposition: `render`, `data-only`, or
`skip`. Render/data objects require explicit authored mappings; skipped
objects require a reason. Source features such as `centered-side-label`, text,
annotation proximity, visible short nodes, and visible interfaces compile to
required checks. Duplicate identities, duplicate mapping ownership, and a
missing mapping are hard failures before review preparation.

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

`VerificationPlan` is a versioned dependency graph, not an informal command
list. It declares:

- preflight and schema checks;
- required candidate, reference, consistency, and manual evidence;
- locales and render profiles;
- step dependencies and allowed parallelism;
- closure criteria and explicit `notApplicable` decisions;
- the fresh final-verification profile used for sealing.

Local execution and CI consume the same plan. A plan change invalidates any
closure or seal that depended on its old digest.

The implemented compiler takes the selected Adapter, `ChangeImpact`, and
`ObjectInventory`. Income Statement plans require visual/reference/manual
closure; Revenue Metric plans explicitly mark Sankey fidelity and its future
render baseline `notApplicable` rather than relying on absence.

### ReviewPacket

`ReviewPacket` is the content-addressed handoff from authored preparation to
automatic and human review. It binds `buildId`, authored digest, Verification
Plan digest, required locales, and references to the recorded inventory and
Plan. `record:build prepare-review` returns its digest as a `reviewToken`;
`finish` consumes that token (`packetDigest` remains a compatibility alias).
The token identifies the packet and cannot select a different Build.

### DatasetVerification

`DatasetVerification` is Build-bound, non-render consistency evidence produced
by `record:verification`. It runs the current dataset profile for syntax, SSOT,
strict i18n, and generated metadata with rendering skipped, then binds the pass
to the Build, Adapter, authored digest, and Verification Plan digest. A failed
check records no ready object; a Build or authored-file change during the run
invalidates the result. Income Statement and Revenue Metric closure both require
this evidence; Sankey render evidence remains an additional Income Statement
obligation.

### ArtifactManifest

`ArtifactManifest` is the immutable inventory of build inputs and outputs:

```text
build/key/input type + Adapter version
Source and inventory references
SSOT, View, company, i18n, icon, and annotation artifacts
canonical contributions and path claims
runtime, renderer, protocol, and schema dependencies
ChangeImpact and VerificationPlan digests
availability policy for every Source/evidence artifact
```

Each reference is content-addressed. A filesystem path may be a locator or a
future projection path, but never the evidence identity.

### FidelityResult

`FidelityResult` is the immutable result of one `FidelityRun`:

- subject and dependency digests;
- step-level facts and pass/fail/not-applicable disposition;
- candidate, reference, Diff, metrics, interface audit, and contact-sheet
  artifacts when applicable;
- human attestation and region decisions;
- open, accepted, skipped, and exceptional items;
- run status and result digest.

It contains facts and decisions, not canonical mutations.

The current result joins `fidelity-run/2` automatic evidence with a
`ManualAttestation`, stable `RegionDecision` records, derived risk checks,
Interface Matrix facts, attention/red-box closure, and a `FeedbackLedger`.
Machine-green evidence without the required attestation remains
`review-pending`; open regions, open feedback, incomplete Matrix coverage, or
a required recurrence upgrade prevent `accepted`.

### ManualAttestation, RegionDecision, and FeedbackLedger

`ManualAttestation` binds reviewer, decision, authored digest, and Plan digest.
It is the explicit human judgment boundary. Each `RegionDecision` uses a
stable `REG-###` identity, disposition, rules, and evidence digests.
`FeedbackRecord` uses stable feedback/region/rule identities and records
cause, before/after evidence, remedy, and automation disposition. The
`FeedbackLedger` is a deterministic projection across build-local records;
the second cross-Build execution-gap occurrence requires an automation
disposition. These objects remain build-local and do not mutate canonical
data.

## Input-type Adapter Seam

Input type is the real extension Seam. There are already two Adapters, so the
Seam is not hypothetical.

| Adapter | authoring contribution | verification profile |
| --- | --- | --- |
| Income Statement | company record, financial SSOT, Sankey View, i18n, optional icon/raster assets | data consistency, all required language renders, d3 hard gates, reference fidelity, manual closure |
| Revenue Metric | company record and revenue Metric observations with source, definition, conditions, confidence, and lineage | data/schema/source/i18n checks; no Sankey or d3 fidelity unless a later View requires it |

An Adapter owns classification support, inventory contract, authored
validation, Verification Plan contribution, and semantic canonical
contributions. It must not write canonical files, update global manifests, or
declare a build sealed. Those rules remain inside the deep Build and
Publication Modules, which preserves Locality.

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
Source + inventory + ArtifactManifest
Adapter/schema + renderer/runtime + protocol/rules
required locales + closure + staged baseline
canonical contributions/path claims + baseCanonicalDigest
```

Invalidation is explicit:

| changed input | effective recovery point |
| --- | --- |
| Source bytes, key, or availability identity | create a successor build; do not mutate the old Source |
| inventory or authored contribution | `AUTHORED`; rerun closure, baseline staging, and seal |
| Adapter/schema, renderer, protocol, required locale, or Verification Plan | `AUTHORED`; existing authored artifacts may be reused only if the new Adapter accepts them |
| accepted closure | `CLOSED`; restage baseline and reseal |
| staged baseline content or policy | `BASELINE_STAGED`; reseal without using it as proof |
| canonical base before publish | Publication becomes `CONFLICTED`; replan and reseal against the new base |

Queries must report both the historical state and effective freshness. A
historical `SEALED` label with mismatched current digests is stale and cannot
be published.

This distinction is implemented for authored files: inspection re-hashes the
current bytes. If any recorded artifact is missing or its digest changes, the
historical `SEALED` receipt remains auditable while `effectiveState` becomes
`AUTHORED` and `fresh` becomes false.

## Transition invariants

- One Build is serial by version; different Builds may run in parallel.
- Every state-changing operation has an idempotency identity and an expected
  aggregate version.
- Artifacts are stored and hash-verified before a state event references
  them; failed state recording may leave garbage-collectable blobs, not a
  partial canonical change.
- Build-local evidence never writes canonical state.
- `CLOSED` requires all plan axes or an explicit Adapter-owned
  `notApplicable`; absence is not success.
- `SEALED` is fresh only for its exact digest set.
- Only fresh sealed contributions enter Publication.

## Current Implementation note

The M3 shadow/compatibility path is now executable through the deep
`prepareBuildReview`, `finishReviewedBuild`, `stageReviewedBaseline`,
`sealReviewedBuild`, and `inspectBuildCloseout` Interfaces, surfaced by
`record:build`. Together with `record:verification`, it records content-addressed
inventory, Plan, ReviewPacket, DatasetVerification, FidelityResult,
FeedbackLedger, closure, staged baseline, and seal objects
under the per-Build store. `inspect` also produces `CloseoutReport`, Task
information, and Loop Fidelity Summary as pure Views over those objects.

This is not M4. Authored canonical paths are still edited directly, the old
canonical baseline command remains a compatibility path, and no atomic
Publication or path-claim CAS exists. The current seal operation re-hashes
authored files and requires an accepted closure before recording `SEALED`; it
does not yet rerun the complete Adapter final-verification profile required by
the target. See the live status table in [`README.md`](README.md).
