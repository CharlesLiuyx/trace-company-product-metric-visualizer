# Architecture Context

This directory is the fast-loading architecture index for dataset ingestion,
fidelity verification, canonical publication, and release. It describes the
accepted target architecture without pretending that unimplemented commands
or storage guarantees already exist.

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

[ADR-0003](../adr/0003-shared-checkout-sessions-and-git-transport.md) adds ordinary
Build folder ownership, typed SSOT merging, a local workbench and reviewed Git
transport. [Local environment operations](../local-environments.md) own commands
and recovery. The workbench defaults to one immutable combined review projection
of prepared drafts and project data, with per-Build semantic/preview bindings;
this derived view adds no publication state or write authority. These are implemented local P0/P1 features; remote staging and
automatic reuse of changed human review remain outside the implemented guarantee.
The three lifecycle scopes and Publication pointer CAS remain unchanged.

## Architecture summary

The target has three state scopes with different ownership and retry rules:

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
states. Both media formats use digest-bound Source claims. New inputs use an isolated
Build workspace and share the existing Build ledger. Publication fixes Source
locators and digests with the canonical data. Moving the local Source bytes
still requires the explicit, list-confirmed operator signal defined in
[dynamic-dataset-workflow.md](../dynamic-dataset-workflow.md); see ADR-0002.

The repository currently tracks Source files in `pending/` and `processing/`
so queue and claim changes can be shared across project checkouts. `processed/`
is a Git-ignored, machine-local archive. This transport policy is not lifecycle
authority and creates no additional state.

The target deepens four Modules:

| Module | Interface responsibility | Implementation hidden behind the Seam |
| --- | --- | --- |
| Dataset Build Transaction | advance one Source-derived build through explicit states | whole-Source Type Gate, intake and working-Source claim, exhaustive Source Coverage, actual authored-value reconciliation, typed inventory and Plan compilation, review closure, staging, freshness, invalidation |
| Fidelity Run | produce immutable automatic evidence for one authored digest | private workspace, rendering, Diff, gates, evidence-ready archive finalization |
| Publication | plan and atomically publish a set of sealed contributions | global projections, path claims, baseline ledger, metadata, CAS and recovery |
| Release | build or deploy one published digest | standalone build, hosted release, retries and receipts |

These are **Deep** Modules: callers get high Leverage from small lifecycle
operations, while ordering, recovery, and correctness retain Locality inside
the owning Module. Income Statement, Revenue Metric and Metric Observation are real Adapters at
the input-type Seam; future input types add an Adapter instead of branching
through every caller.

The implemented M3 Build path uses `source-classification/v1` before fresh
intake, then `source-coverage/v2` plus actual SSOT/View reconciliation to
compile `node-face-policy/v2`, `verification-plan/v5`, and
`review-packet/v4`. Every current semantic node is expected painted; geometry
without a Source face is modeled as flow or annotation. These remain build-local guards. Publication consumes the resulting fresh seals.

## Non-negotiable invariants

- `verify:*` is read-only; `record:*` writes only build-local evidence or
  staging; `publish:*` is the only canonical mutation; `release:*` acts on an
  already-published digest.
- Automatic evidence is necessary but cannot stand in for a human attestation,
  region decisions, or feedback closure.
- Fresh intake requires a whole-Source Type Gate whose signals derive exactly
  one Adapter and agree with the requested Adapter.
- A new review Plan requires exactly-once Source Coverage of every inventory
  object. `Other` / `All Other` cannot be classified as non-semantic residual,
  and Source values must reconcile against the actually loaded Adapter-owned
  SSOT/View before `AUTHORED`.
- An Income Statement financial value may use `nonNodeMetrics.*` only with a
  Source-bound zero-paint slot that `prepare-review` verifies from native
  pixels before Plan compilation.
- Source-visible and hidden node intent is compiled into a complete node-face
  policy. A small expected-visible face may use only a Source-bound exception;
  candidate disappearance is not evidence of Source absence.
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

New Sources use [asset-workflow.md](../asset-workflow.md). PNG, TXT and Markdown
are supported; the media format is separate from Income Statement, Revenue
Metric and the new generic Metric Observation Adapter. The latter has exact
decimal strings, explicit units/basis, real Source anchors and a viewer library.

Build workspaces isolate data authoring. Preparation derives ArtifactManifest,
semantic contributions, coverage and the Plan, generates review sheets, and
records timings. New isolated Sankey Builds require digest-bound stage
checkpoints before closure. Historical Builds are not silently upgraded.

Publication composes owned data paths in a private candidate, runs shared
projectors and checks, verifies fresh seals and performs one immutable-tree
pointer CAS. Different writes to the same owned path conflict explicitly.
Readers pin the digest before fetching HTML and assets. The working tree is
still available for code development and legacy direct-edit data; it is not
claimed to become atomic through a series of file copies.

The root file viewer embeds one selected complete draft or published tree at a time.
A machine-local selection is derived by preparation/publication and polled by the
file entry; it neither merges data into the development worktree nor changes the
canonical pointer/evidence contract. Drafts are visibly pending human review.

Release attempts build and verify Pages or standalone output from a published
digest and retain their own success/error receipt. No external deployment is
implicit. Local Source archive moves remain operator-controlled; canonical
Source metadata is published with the data.

## Migration milestones

| milestone | implementation status | outcome |
| --- | --- | --- |
| M0 — record the decision | implemented | architecture owners, vocabulary, invariants, and ADR exist |
| M1 — isolate FidelityRun | implemented with operation separation and `fidelity-run/2` review identity | `verify:d3` remains ephemeral/read-only; `record:fidelity` alone finalizes durable automatic evidence, with legacy v1 archives explicitly non-closure |
| M2 — introduce DatasetBuild | implemented for the new workflow | isolated authoring workspace, existing ledger, PNG/text identity, facts compilation and derived dependencies; historical direct-edit Builds remain readable |
| M3 — close and stage | implemented | coverage, existing full checks and human attestation; new isolated Sankey Builds also require scope-bound stage checkpoints; baseline and final seal remain separate |
| M4 — publish atomically | implemented for local dataset publication | private combined candidate, pure-in-candidate shared projections, owned-path conflicts, fresh seal check, immutable tree and pointer CAS, digest-qualified reader, idempotent recovery |
| M5 — separate Release | implemented for local site/standalone artifacts | published-digest input, independent attempt/error receipts and retries; external hosted deployment remains an explicit separate operation |

Each milestone must run in shadow or compatibility mode until its observable
results match the current verifier behavior. Do not delete an old Interface
until tests at the new Deep Module's Interface cover its behavior.

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
- Operational step-by-step instructions remain in the existing workflow and
  fidelity documents until migrated.
