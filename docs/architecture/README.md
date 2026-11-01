# Architecture Context

This directory is the fast-loading architecture index for dataset ingestion,
fidelity verification, canonical publication, and release. It describes the
current implementation only; the dated migration record is
[archived](../archive/migration-milestones.md).

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

`pending/`, `processing/`, and `processed/` are Source locators, not states; see
[Source identity and working locator](dataset-lifecycle.md#source-identity-and-working-locator).

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

`record:workflow` drives the Build path; its protocol chain is owned by
[verification-publication.md](verification-publication.md#verification-sequence).
Publication consumes the resulting fresh seals.

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
- Node paint and the face floor follow
  [`fidelity-loop-rules.md`](../fidelity-loop-rules.md#rule-b15) B15.
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

Current behaviour lives with its owners: the Pages read projection in
[runtime-data.md](runtime-data.md), Source and Adapter rules in
[dataset-lifecycle.md](dataset-lifecycle.md), the process in
[asset-workflow.md](../asset-workflow.md), and the workbench and Git transport
in [local-environments.md](../local-environments.md).

`pnpm verify:architecture` keeps the machine-readable contract, executable
protocol constants, Adapter/ChangeImpact values, command semantics, context
routes, and local architecture-document links in sync. It is part of
`pnpm check`.

## Ownership

- This index owns loading order and the architecture synopsis.
- [`dataset-lifecycle.md`](dataset-lifecycle.md) owns lifecycle objects,
  states, transitions, Adapter responsibilities, and seal invalidation.
- [`verification-publication.md`](verification-publication.md) owns evidence
  semantics, baseline restrictions, canonical publication, retry rules, and
  Release separation.
- Operational step-by-step instructions live in
  [asset-workflow.md](../asset-workflow.md) and the fidelity documents.
