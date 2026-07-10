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

Current command names do not yet satisfy this target uniformly. During
migration, documentation and compatibility wrappers must state whether an
operation is read-only or mutating; renaming alone does not change semantics.

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
Diffs, metrics, interface audit, contact sheet, red-box image, and Task
information are provisional until all automatic steps for that run have
resolved.

Finalization order is:

1. Produce provisional artifacts in the private workspace.
2. Run page-error, purity, size, label, interface, localization, and other
   plan gates.
3. Record manual evidence where required.
4. Build and hash the complete `FidelityResult`.
5. Atomically record an accepted, rejected, blocked, or aborted result.
6. Only then expose an archive as accepted previous evidence.

A failed run may retain diagnostic artifacts, but its status and archive must
unambiguously say failed. It cannot become the previous accepted round merely
because files were written.

Current M1 Implementation uses protocol `fidelity-run/1`. `verify:d3` keeps
its compatibility name, writes only to a private run workspace, and promotes
an `accepted` archive after the currently enforced automatic page, purity,
size, label, and Interface gates pass. That run-level `accepted` status is not
`DatasetBuild.CLOSED`: manual attestation, reconciled Matrix completeness, and
feedback closure remain Build-level obligations until M3 records them in a
`FidelityResult`. Changing the run identity or acceptance semantics requires
a protocol-version bump.

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
Build and are rejected by the current CLI. During M1–M3,
`record:baseline -- <key> [...]` is a subset-only compatibility mutation: it
writes atomically only after all selected render/structure checks pass, but
it is not yet true build-local staging. Batch baseline changes require their
own explicit scope and Verification Plan.

## SEALED final verification

Sealing is a fresh, non-mutating check after closure and baseline staging. It
recomputes the build's seal-input digest, validates every ArtifactManifest
reference, reruns the Adapter's final profile, and verifies that no open
manual or automatic requirement remains.

The seal verifier must not repair registration, regenerate metadata, update a
baseline, archive a provisional run, or build a release artifact. If any
input differs, it returns a stale-input result; the Build reopens at the
recovery point defined in the lifecycle document.

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
- move run artifacts to private workspaces and make result finalization
  atomic;
- introduce build objects and staged baselines without changing canonical
  output;
- turn manifest, registration, baseline, and metadata writers into pure
  projectors;
- add canonical CAS and only then route mutations through `publish:*`;
- make standalone build/read verification a Release Adapter;
- delete old Shallow orchestration once tests at the new Module Interfaces
  cover the same behavior.

Until each replacement lands, the current operational commands in
[`dynamic-dataset-workflow.md`](../dynamic-dataset-workflow.md) remain the
executable instructions, including their known transitional limitations.
