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
   [`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md) and
   [`fidelity-loop-rules.md`](../fidelity-loop-rules.md).

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
states. The current compatibility implementation has `record:intake` claim a
selected Source into the Build-local `processing/` locator and lease. The only
current relocation authority is an explicit operator review-completion
signal, confirmed against the enumerated processing batch before the move
(owning rule: [`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md)
§Operator Review-Completion Signal); it creates no lifecycle receipts.
Moving the same bytes does not change their digest identity. M4 replaces this
transitional relocation with a Publication-owned Source projection.

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
the owning Module. Income Statement and Revenue Metric are real Adapters at
the input-type Seam; future input types add an Adapter instead of branching
through every caller.

The implemented M3 Build path uses `source-classification/v1` before fresh
intake, then `source-coverage/v2` plus actual SSOT/View reconciliation to
compile `node-face-policy/v2`, `verification-plan/v5`, and
`review-packet/v4`. Every current semantic node is expected painted; geometry
without a Source face is modeled as flow or annotation. These are current
build-local guards, not M4 Publication.

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

## Current versus target

| concern | current Implementation | accepted target |
| --- | --- | --- |
| intake | `record:intake` requires explicit Source signals, records a whole-image `source-classification/v1` whose derived Adapter must match `--adapter`, then records per-item Source/base digests and claims the selected file from `pending/` into the Build-local `processing/` working locator and lease | full isolated `DatasetBuild` workspace with the same digest-bound Type Gate and claim semantics |
| Source projection | an explicit, batch-confirmed operator completion signal is the only relocation authority; the confirmed no-clobber move implies no Build closure or M4 Publication | Publication alone materializes the stable processed Source projection as part of the planned canonical result |
| authoring and Plan | canonical paths are still edited directly; `prepare-review` records `source-coverage/v2`, reconciles Source amounts against the loaded SSOT and exactly one mapped Income Statement node or non-node metric, pixel-checks any claimed zero-paint non-node slot, records a typed `ObjectInventory`, compiles a visible-only NodeFacePolicy-bearing `verification-plan/v5`, hashes authored files, and returns a content-addressed `review-packet/v4` token | isolated build workspace plus complete `ArtifactManifest` and Adapter execution |
| verification and fidelity | `record:verification` records Build-bound non-render consistency evidence; `verify:d3` is read-only diagnostic execution; `record:fidelity` alone may archive durable `fidelity-run/2` `evidence-ready` artifacts bound to Build/authored/Plan digests and evaluated against the Plan's node-face policy; legacy unbound archives remain compatibility-only | typed automatic evidence plus the complete Adapter verification profile |
| human closure | `record:build finish` consumes the Review token, automatic evidence, `ManualAttestation`, `RegionDecision`, risk/Matrix facts, and `FeedbackLedger`; only an accepted `FidelityResult` records `CLOSED` | the same deep Interface as the sole operational closure path |
| baseline | the Build chain records true build-local `BASELINE_STAGED`; `compat:baseline` (renamed from `record:baseline`, outside the command classes) remains a subset-only, failure-atomic compatibility mutation of the canonical ledger | publish the staged baseline with the sealed contribution |
| seal and inspection | `record:build seal` recomputes current authored-file freshness and reruns the read-only Adapter final profile (non-render consistency plus per-locale render hard gates for Income Statement) without caller-supplied pass JSON, recording each run in `finalProfiles`. `inspect` reports historical and effective state | implemented — matches the target for Build scope; the canonical projection remains M4 |
| reporting | inspection generates `CloseoutReport`, Task information, and Loop Fidelity Summary as pure Views | stable Views over immutable published/build-local facts |
| registration and metadata | multiple generators mutate shared files | pure projections inside one `PublicationBatch` |
| standalone | build no longer refreshes tracked metadata, but still reads the live worktree | isolated Release from an immutable published digest |

The current column remains executable until the matching milestone below is
implemented. Target terminology must not be presented as an available CLI
before then.

## Migration milestones

| milestone | implementation status | outcome |
| --- | --- | --- |
| M0 — record the decision | implemented | architecture owners, vocabulary, invariants, and ADR exist |
| M1 — isolate FidelityRun | implemented with operation separation and `fidelity-run/2` review identity | `verify:d3` remains ephemeral/read-only; `record:fidelity` alone finalizes durable automatic evidence, with legacy v1 archives explicitly non-closure |
| M2 — introduce DatasetBuild | foundation implemented | per-item `record:intake` with a whole-Source Type Gate plus a Build-local working-Source claim, versioned state/storage, content-addressed objects, and historical/effective freshness exist; isolated authoring workspace remains pending |
| M3 — close and stage | implemented — primary close-out path | `SourceClassification -> ObjectInventory + SourceCoverage -> actual authored-value reconciliation -> NodeFacePolicy + VerificationPlan v5 -> ReviewPacket v4 -> DatasetVerification + FidelityResult -> CLOSED -> BASELINE_STAGED -> SEALED`, plus inspection/Views; the seal reruns the complete Adapter final profile (non-render consistency + per-locale render hard gates). Canonical writes remain direct-edit until M4 |
| M4 — publish atomically | pending | pure projectors, `baseCanonicalDigest`, path claims, CAS, conflict/replan/reseal |
| M5 — separate Release | partial | standalone no longer mutates metadata and the base architecture contract checker is active; immutable published-input Release, attempt receipts, generated views, and Release-specific contract checks remain pending |

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
