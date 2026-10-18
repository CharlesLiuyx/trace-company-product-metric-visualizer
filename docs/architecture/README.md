# Architecture Context

This directory is the fast-loading architecture index for dataset ingestion,
fidelity verification, canonical publication, and release. It describes the
current implementation; the milestone table below is the dated record of how
it was reached.

## Read order

1. [`CONTEXT.md`](../../CONTEXT.md) — domain and architecture vocabulary.
2. [`dataset-lifecycle.md`](dataset-lifecycle.md) — the three state scopes,
   build objects, input-type Adapters, and hash invalidation.
3. [`verification-publication.md`](verification-publication.md) — evidence,
   baseline, command semantics, CAS publication, and release.
4. [`lifecycle-contract.json`](lifecycle-contract.json) — machine-readable
   protocol names, states, transitions, Adapters, and invariants.
5. [`ADR-0001`](../adr/0001-dataset-build-transactions.md) — accepted decision,
   alternatives, and consequences.
6. Operational owners when doing current work:
   [`asset-workflow.md`](../asset-workflow.md),
   [`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md) and
   [`fidelity-loop-rules.md`](../fidelity-loop-rules.md).

## Same-checkout implementation

[ADR-0003](../adr/0003-shared-checkout-sessions-and-git-transport.md) adds Build
folder ownership, typed SSOT merging, a local workbench and reviewed Git
transport; [local-environments.md](../local-environments.md) owns their
behaviour, commands and recovery. None of them adds publication state or write
authority; the three lifecycle scopes and Publication pointer CAS are unchanged.

## Architecture summary

Three state scopes have different ownership and retry rules:

```text
DatasetBuild
  INTAKED -> AUTHORED -> CLOSED -> BASELINE_STAGED -> SEALED

PublicationBatch
  PLANNED -> PUBLISHED
          -> CONFLICTED -> new plan + reseal

ReleaseAttempt
  PENDING -> RELEASED
          -> RELEASE_FAILED -> new attempt for the same published digest
```

A `FidelityRun` is an immutable, build-local evidence transaction. It may be
retried or replaced without changing canonical data. Only a fresh `SEALED`
build can enter a `PublicationBatch`; only a `PUBLISHED` canonical digest can
start a `ReleaseAttempt`.

`pending/`, `processing/`, and `processed/` are Source locators, not additional
states; both media formats use digest-bound Source claims. Publication fixes
Source locators and digests with the canonical data. Git tracks `pending/` and
`processing/` as a shared queue and ignores the machine-local `processed/`
archive; local relocation follows the operator signal owned by
[asset-workflow.md](../asset-workflow.md) §7 (ADR-0002).

Four Deep Modules carry the lifecycle:

| Module | Interface responsibility | Implementation hidden behind the Seam |
| --- | --- | --- |
| Dataset Build Transaction | advance one Source-derived build through explicit states | whole-Source Type Gate, intake and working-Source claim, flat Source-object validation, actual authored-value reconciliation, fixed per-Adapter Plan, acceptance-based review closure, staging, freshness, invalidation |
| Fidelity Run | produce immutable automatic evidence for one authored digest | private workspace, rendering, Diff, gates, evidence-ready archive finalization |
| Publication | plan and atomically publish a set of sealed contributions | global projections, path claims, baseline ledger, metadata, CAS and recovery |
| Release | build or deploy one published digest | standalone build, hosted release, retries and receipts |

Callers get high Leverage from small lifecycle operations, while ordering,
recovery, and correctness retain Locality inside the owning Module. Income
Statement, Revenue Metric and Metric Observation are the Adapters at the
input-type Seam; a future input type adds an Adapter instead of branching
through every caller.

`record:workflow` drives the Build path: `source-classification/v1` (PNG) or
`/v2` (text) at intake, then the author's flat `source-objects/v1` list plus
actual SSOT/View reconciliation, a fixed per-Adapter `verification-plan/v6`,
and `review-packet/v5`. Review closes on the operator's acceptance recorded in
`fidelity-result/v3` together with the per-locale render evidence and the
consistency evidence; operator feedback is a `feedback-note/v1` that expires
the current review candidate. Every value node is expected painted at render
(B15); geometry without a Source face is modeled as a non-node metric, flow, or
annotation. Publication consumes the resulting fresh seals.

## Non-negotiable invariants

- `verify:*` is read-only; `record:*` writes only build-local evidence or
  staging; `publish:*` is the only canonical mutation; `release:*` acts on an
  already-published digest.
- Automatic evidence is necessary but cannot stand in for the operator's
  acceptance, and a review never records a pending or rejected result: problems
  are feedback, and only an explicit acceptance closes a Build.
- Fresh intake requires a whole-Source Type Gate whose signals derive exactly
  one Adapter (and agree with any explicitly requested Adapter).
- A new review Plan requires the flat Source object list. `Other` / `All
  Other` cannot be classified as non-semantic residual, and every Source value
  must reconcile against the actually loaded Adapter-owned SSOT/View (one SSOT
  field and, for Income Statement, one node or non-node metric) before
  `AUTHORED`.
- Every rendered node in a Build-bound run must paint a face of at least 3px;
  a genuinely thinner Source face is declared in `shortNodes`. Candidate
  disappearance is not evidence of Source absence.
- A staged baseline is future regression evidence. It cannot prove the build
  that produced it is correct.
- `SEALED` binds exact source, authored, renderer, protocol, locale, closure,
  staged-baseline, projection, and base-canonical digests. A changed input
  invalidates the seal.
- Source location is not Source identity: claiming or relocating identical bytes
  does not add a `DatasetBuild` state or change their digest. A missing or
  mismatched working locator is a recovery/freshness failure, never an implied
  transition.
- Publication uses compare-and-swap against `baseCanonicalDigest`. A genuine
  conflict is not retried or silently rebased; it requires a new plan and a
  new seal against the new base.
- Release failure never rolls back a successful Publication.

## Current implementation

The Pages runtime uses a light catalog plus versioned company/family JSON
details. Its data readiness, complete Table/CSV behavior, offline compatibility,
and deployment retention are owned by [runtime-data.md](runtime-data.md).
This read projection does not change the dataset lifecycle or canonical storage.

Income Statement also supports supplemental operating cards through typed
`operatingMetrics`; they retain their own units and comparisons without
entering financial sums or creating Sankey faces. The lifecycle owner describes
the optional Source signal and complete reconciliation.

New Sources use [asset-workflow.md](../asset-workflow.md). PNG, TXT and Markdown
are supported; the media format is separate from the Adapter (text Sources use
Metric Observation). Metric Observation keeps exact decimal strings, explicit
units/basis, real Source anchors and a viewer library.

Build workspaces isolate data authoring. Preparation derives ArtifactManifest,
semantic contributions, the source objects and the Plan, generates review
sheets, and records timings. New Sankey Builds (`review-candidate/v1`) render
one all-locale review candidate and close on human acceptance; historical
Builds prepared under `fidelity-checkpoints/v1` keep their digest-bound stage
checkpoints and are not silently upgraded.

Publication composes owned data paths in a private candidate, runs shared
projectors and checks, verifies fresh seals and performs one immutable-tree
pointer CAS. Different writes to the same owned path conflict explicitly.
Readers pin the digest before fetching HTML and assets. The working tree is
still available for code development and legacy direct-edit data; it is not
claimed to become atomic through a series of file copies.

Drafts shown by the workbench are visibly pending human review and add no
canonical or evidence state; delivery and production checks are command/HTTP
only, and the operator, not the executor, views the page
([local-environments.md](../local-environments.md)).

Release attempts build and verify Pages or standalone output from a published
digest and retain their own success/error receipt. No external deployment is
implicit. Canonical Source metadata is published with the data.

## Migration milestones

Dated record of the migration; status as of 2026-10-18:

| milestone | implementation status | outcome |
| --- | --- | --- |
| M0 — record the decision | implemented | architecture owners, vocabulary, invariants, and ADR exist |
| M1 — isolate FidelityRun | implemented with operation separation and `fidelity-run/2` review identity | `verify:d3` remains ephemeral/read-only; `record:fidelity` alone finalizes durable automatic evidence, with legacy v1 archives explicitly non-closure |
| M2 — introduce DatasetBuild | implemented for the new workflow | isolated authoring workspace, existing ledger, PNG/text identity, facts compilation and derived dependencies; historical direct-edit Builds remain readable |
| M3 — close and stage | implemented | source objects, consistency, one per-locale review candidate and operator acceptance (historical checkpoint Builds keep stage freezes); baseline and final seal remain separate |
| M4 — publish atomically | implemented for local dataset publication | private combined candidate, pure-in-candidate shared projections, owned-path conflicts, fresh seal check, immutable tree and pointer CAS, digest-qualified reader, idempotent recovery |
| M5 — separate Release | implemented for local site/standalone artifacts | published-digest input, independent attempt/error receipts and retries; external hosted deployment remains an explicit separate operation |

`pnpm verify:architecture` keeps the machine-readable contract, executable
protocol constants, Adapter/ChangeImpact values, command semantics, context
routes, and local architecture-document links in sync. It is part of
`pnpm check`.

## Ownership

- This index owns loading order, the architecture synopsis, and milestones.
- [`dataset-lifecycle.md`](dataset-lifecycle.md) owns lifecycle objects,
  states, transitions, Adapter responsibilities, and seal invalidation.
- [`verification-publication.md`](verification-publication.md) owns evidence
  semantics, baseline restrictions, canonical publication, retry rules, and
  Release separation.
- Operational step-by-step instructions live in
  [asset-workflow.md](../asset-workflow.md) and the fidelity documents.
