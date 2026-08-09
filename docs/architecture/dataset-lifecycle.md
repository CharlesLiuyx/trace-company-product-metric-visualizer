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
| `INTAKED` | key, Source digest, dimensions, provenance, availability, whole-Source Type Gate, selected Adapter, and base canonical snapshot are fixed; the current compatibility implementation also claims the working Source locator | intake record with `SourceClassification` |
| `AUTHORED` | the selected Adapter accepts the inventory and authored contribution | `ArtifactManifest` |
| `CLOSED` | the required verification evidence and human decisions close with no open requirement | closure digest plus accepted `FidelityResult` references |
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
  inventory or authoring begins. These active claims are also Git-tracked;
- `input/processed/` is the stable compatibility locator and a Git-ignored,
  machine-local archive. An explicit operator completion signal — confirmed
  against the enumerated processing batch — is
  the only current relocation authority (owning rule:
  [`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md)
  §Operator Review-Completion Signal); passing Build close-out
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

The processed relocation above is explicitly transitional. In the target M4
architecture, a `PublicationBatch` owns the stable Source projection together
with the rest of the planned canonical result; sealing alone has no canonical-
write authority.

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

The signals must select exactly one supported Adapter and that result must
match the requested `--adapter`. Otherwise intake fails before a Build is
initialized or the Source is claimed. Fresh CLI intakes require this record;
legacy Builds without one remain inspectable, but must supply an equivalent
classification when preparing new Source Coverage. Changing an intake
classification requires a successor Build with a new immutable intake fact.

### ObjectInventory

`object-inventory/v4` accounts for every coarsely inventoried Source object with a
stable object ID and exactly one disposition: `render`, `data-only`, or
`skip`. Render/data objects require explicit authored mappings; skipped
objects require a reason. Source features such as `centered-side-label`, text,
annotation proximity, visible short nodes, and visible interfaces compile to
required checks. Duplicate identities, duplicate mapping ownership, and a
missing mapping are hard failures before review preparation.

Every Sankey-node mapping implies a painted semantic face. Normally that face
must be directly observed in the Source; visible short nodes bind Source
evidence through `visible-short-node`. The only exception is a
`design-specified` face with `user-directed-topology-restoration` authority,
an explicit reason, and a candidate target box. It records that the operator
required restoration of semantic topology absent from the raster; it cannot
be created from agent inference and does not masquerade as Source-pixel
evidence. Other geometry without a painted Source face must map to a
structural flow or semantic annotation instead of `nodes.*`. A financial
value mapped to `nonNodeMetrics.*` owns `zero-paint-node-slot` evidence for
the native candidate slot; the Build Module validates that evidence before
Plan compilation.
`specified-label-weight` binds an expected weight and provenance for manual
review. Historical v1/v2/v3 inventories remain readable, but cannot compile a
new review Plan; v3's invisible-node exception is legacy-only. ObjectInventory
alone does not
prove that the whole Source was scanned or that every Source value reached the
authored data. Those obligations belong to `SourceCoverage`; VerificationPlan
automatically compiles a paint check for every node mapping and rejects
invisible semantic nodes outright.

### SourceCoverage

`source-coverage/v2` is the exhaustive Source-to-authored bridge required by a
new review preparation. It binds `SourceClassification`, the immutable Build
Source, and `ObjectInventory`, and requires all three named passes over the
complete image: `geometry`, `residual`, and `semantic-value`.

Each independent Source observation has a stable `source:*` identity, native
pixel bbox, closed object class, label or structural description, and one or
more owned inventory object IDs. Every inventory object has exactly one Source
owner; duplicates, orphans, and omissions fail. Semantic classes must map to
the Adapter-required data/render roles. Only the closed non-semantic residual
kinds may map to `skip`, and `Other` / `All Other` is always semantic — missing
iconography cannot turn it into decorative residue.

Value-bearing observations store the literal Source text, an exact decimal
value, unit, resolution, and typed SSOT reference. During
`prepareBuildReview`, the Build Module loads the actual authored registry and
reconciles those Source amounts before it records `AUTHORED`:

If the primary Source displays zero only because its unit/decimal precision
rounded a real non-zero amount (for example, `$0.0B`), `amount.value` must hold
the recovered non-zero value and `amount.precisionRecovery` must bind
`method: 'authoritative-supplemental-source'`, an authoritative supplemental
locator, and its higher-precision literal. That literal must contain a K/M/B/T
amount which normalizes to the same value. Precision recovery is allowed only
for this rounded-to-zero case, and the recovered value must remain within the
primary literal's half-resolution rounding interval. If the value cannot be
recovered, the Build is blocked; it must not turn unknown/non-zero Source
semantics into an authored zero.

If a primary Source literal has a confirmed unit or numeric typo, the original
literal remains recorded and an optional
`amount.authoritativeCorrection` may repair only the closed `unit-typo` or
`numeric-typo` issue. `unit-typo` requires the primary suffix to differ from
the authored unit; `numeric-typo` requires the suffix to match while the
displayed magnitude conflicts. The correction must bind
`method: 'authoritative-source-correction'`, explicit
`approval: 'user-directed-source-correction'`, an authoritative locator and
literal, the approved corrected display literal, and a reason. The original
literal must actually conflict with the authored amount; the authoritative
value and corrected display must both support that amount within the declared
resolution, and the corrected unit must equal `amount.unit`. This mechanism is
for an explicit correction, not silent inference, and cannot be combined with
rounded-zero `precisionRecovery`. A zero-looking literal that is still within
its rounding interval uses precision recovery; if it conflicts with the
authoritative value outside that interval, only a user-approved `numeric-typo`
correction may proceed, and `unit-typo` remains forbidden for that case.

- Each Income Statement value must match the selected financial SSOT record
  and exactly one mapped Adapter node or non-node metric value;
- Payment-network charts use the typed `revenue.paymentNetwork.gross`,
  `revenue.paymentNetwork.grossItems`, and `revenue.paymentNetwork.rebates`
  paths so gross fee observations and positive Sankey rebate magnitudes remain
  auditable without corrupting net-revenue arithmetic or accounting signs;
- Revenue Metric values must match the selected dated SSOT observation.

A missing record or View, unit mismatch, wrong typed reference, wrong amount,
loss of the recovered non-zero value through SSOT/View display precision, or
visible zero-value face is a hard preparation failure. Every Source-observed
node face must provide an `observedBBox`; an authorized `design-specified`
face instead provides its candidate `targetBBox`. A zero-paint object cannot
target `nodes.*`.
For an Income Statement financial non-node metric, `prepareBuildReview` scans
the Source-bound slot at native scale and rejects any horizontal painted run
covering at least 75% of the measured peer-node width. This keeps a 1px or 2px
face from becoming a self-consistent non-node mapping.
The coverage summary
also records `Other` identities, the smallest non-zero observations, and the
Source-expected visible node IDs so small values stay first-class
review inputs instead of disappearing through coarse inventory or rounding.

Both current Adapters require a machine Source Coverage check and a global
manual coverage decision. That manual decision must cite both the coverage
digest and immutable Source digest.

### NodeFacePolicy

`node-face-policy/v2` is deterministically compiled from Source Coverage and
embedded, with its own digest, in the Verification Plan. It classifies every
semantic rendered node as Source-expected visible. The node-paint audit
rejects missing or unpainted expected-visible nodes and rendered nodes absent
from the complete policy. A user-directed `design-specified` face is included
in that complete visible-node policy and must pass the candidate full-face
interface audit even though no reference interface can be measured.

A visible face below the shared fidelity floor is not silently hidden. An
exception is valid only when Source Coverage records a native-scale observed
face, the `visible-short-node` inventory feature, exactly one node target, and
Source-bound crop evidence. Candidate rendering must preserve that observed
Source face within the shared raster tolerance. Fidelity rule definitions and
thresholds remain owned by
[`fidelity-loop-rules.md`](../fidelity-loop-rules.md); this lifecycle object
only binds their Source-specific inputs.

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

`verification-plan/v5` is a versioned dependency graph, not an informal command
list. It declares:

- preflight and schema checks;
- required candidate, reference, consistency, and manual evidence;
- locales and render profiles;
- step dependencies and allowed parallelism;
- closure criteria and explicit `notApplicable` decisions;
- each required check's enforcement, locale/object scope, and evidence kind;
- the fresh final-verification profile used for sealing.

Version 5 additionally binds the inventory digest, Source Coverage digest,
immutable Source digest, and compiled `node-face-policy/v2`. Both Adapters add
required automatic and manual Source Coverage checks; callers cannot omit
them or downgrade them to `notApplicable`.

Local execution and CI consume the same plan. A plan change invalidates any
closure or seal that depended on its old digest.

The implemented compiler takes the selected Adapter, `ChangeImpact`,
`ObjectInventory`, and `SourceCoverage`. Income Statement plans require visual/reference/manual
closure; Revenue Metric plans explicitly mark Sankey fidelity and its future
render baseline `notApplicable` rather than relying on absence.

Historical v3/v4 Plans remain inspectable; v4 Plans and their v3 packets may
finish an already-authored legacy Build, while review preparation always
compiles a fresh v5 Plan.

### ReviewPacket

`review-packet/v4` is the content-addressed handoff from authored preparation to
automatic and human review. It binds `buildId`, authored digest, Verification
Plan digest, Source Coverage digest, required locales, and references to the
recorded inventory, coverage, and Plan. `record:build prepare-review` returns its digest as a `reviewToken`;
`finish` consumes that token (`packetDigest` remains a compatibility alias).
The token identifies the packet and cannot select a different Build.
An unfinished v1/v2 packet must be regenerated. A v3 packet remains accepted
only for its already-authored v4 Plan; new preparation emits v4.

### DatasetVerification

`dataset-verification/v1` is Build-bound, non-render consistency evidence produced
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
Source, SourceClassification, SourceCoverage, and inventory references
SSOT, View, company, i18n, icon, and annotation artifacts
canonical contributions and path claims
runtime, renderer, protocol, and schema dependencies
ChangeImpact, NodeFacePolicy, and VerificationPlan digests
availability policy for every Source/evidence artifact
```

Each reference is content-addressed. A filesystem path may be a locator or a
future projection path, but never the evidence identity. The working and stable
Source paths follow the locator/projection rules above.

### InterfaceMatrix

`interface-matrix/v1` stores one row per reference/candidate interface identity,
including both-side geometry where present, derived deltas, endpoint/tangent
results, coverage intent, and evidence digests. Its summary is derived from the
rows. New-dataset, geometry, and render-engine review require the full Matrix;
text/localization-only review still reruns candidate interface gates without
rebuilding unaffected rows.

### FidelityResult

`fidelity-result/v2` is the immutable result of one review closure attempt:

- subject and dependency digests;
- step-level facts and pass/fail/not-applicable disposition;
- candidate, reference, Diff, metrics, interface audit, and contact-sheet
  artifacts when applicable;
- human attestation and region decisions;
- open, accepted, skipped, and exceptional items;
- run status and result digest.
- one `checkResults` entry for every Plan-required global or locale-scoped check.

It contains facts and decisions, not canonical mutations.

The current result joins `fidelity-run/2` automatic evidence with a
`ManualAttestation`, stable `RegionDecision` records, derived risk checks,
Interface Matrix facts, attention/red-box closure, and a `FeedbackLedger`.
Machine-green evidence without the required attestation remains
`review-pending`; open regions, open feedback, incomplete Matrix coverage, or
a required recurrence upgrade prevent `accepted`.

Closed/sealed v1 results remain inspectable and are never rewritten. Only a
fresh `FidelityResult` v2 closure using VerificationPlan v5 and ReviewPacket
v4 may enter the current finish path; v4/v3 objects remain finish-readable
only for Builds authored before this migration.

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

An Adapter owns classification signatures, Source Coverage roles and typed
SSOT references, inventory contract, authored validation, Verification Plan
contribution, and semantic canonical contributions. It must not write
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
Source + SourceClassification + SourceCoverage + inventory + ArtifactManifest
Adapter/schema + renderer/runtime + protocol/rules
required locales + closure + staged baseline
canonical contributions/path claims + baseCanonicalDigest
```

Invalidation is explicit:

| changed input | effective recovery point |
| --- | --- |
| Source bytes, key, availability identity, or intake classification | create a successor build; do not mutate the old Source/intake fact |
| Source Coverage, inventory, or authored contribution | `AUTHORED`; prepare a fresh v4 Plan/v3 packet, then rerun closure, baseline staging, and seal |
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
- A new `AUTHORED` review snapshot requires complete Source Coverage and
  successful reconciliation against the actually loaded authored SSOT/View;
  declared intent cannot substitute for the authored values.
- `CLOSED` requires all plan axes or an explicit Adapter-owned
  `notApplicable`; absence is not success.
- `SEALED` is fresh only for its exact digest set.
- Only fresh sealed contributions enter Publication.

## Current Implementation note

The M3 build-local chain is the primary close-out path, exposed through the
deep `prepareBuildReview`, `finishReviewedBuild`, `stageReviewedBaseline`,
`sealReviewedBuild`, and `inspectBuildCloseout` Interfaces, surfaced by
`record:build`. Together with `record:verification`, it records content-addressed
Source Coverage, inventory, NodeFacePolicy-bearing Plan, ReviewPacket,
DatasetVerification, FidelityResult, FeedbackLedger, closure, staged baseline, and seal objects
under the per-Build store. `inspect` also produces `CloseoutReport`, Task
information, and Loop Fidelity Summary as pure Views over those objects.

At current intake, `record:intake` first records `source-classification/v1`
from the whole-Source Type Gate, then claims the selected Source from
`pending/` to the Build-local, Git-tracked `processing/` locator. At review
preparation, actual SSOT/View reconciliation, Source Coverage, Plan v5, and
ReviewPacket v4 are current M3 behavior. The operator
review-completion signal (owning rule:
[`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md)
§Operator Review-Completion Signal) is the only current authority to relocate
Sources from `processing/` to `processed/`, and it moves only the batch the
operator has confirmed. The destination is a Git-ignored local archive, so the
repository records removal from the shared processing queue rather than the
archived PNG. Passing Build close-out alone does not move a Source.
Neither filesystem move adds or infers a DatasetBuild state.

This is not M4. Authored canonical paths are still edited directly,
`compat:baseline` remains the canonical-baseline compatibility path, and no
atomic Publication or path-claim CAS exists; the processed Source move is
likewise a compatibility projection rather than Publication. The current seal operation re-hashes
authored files and reruns the Adapter final-verification profile — the
non-render consistency profile plus, for Income Statement, per-locale d3
render hard gates — before recording `SEALED` against an accepted closure.
See the live status table in [`README.md`](README.md).
