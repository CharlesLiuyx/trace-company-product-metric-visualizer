# ADR-0001: Separate Dataset Build, Publication, and Release Transactions

- Status: Accepted
- Date: 2026-07-10
- Owners: repository architecture maintainers

## Context

The current workflow distributes one dataset's state across a shared pending
queue, ignored processed images, canonical SSOT/View files, fidelity scratch
and archives, a global render-baseline file, generated registration/metadata,
and standalone output. Several commands mix candidate generation with
canonical mutation. Failures can therefore leave durable artifacts that look
accepted, and a single Build can accidentally publish unrelated work found on
disk.

The workflow also has two materially different input types: Income Statement
sources require a Sankey View and a manual d3 fidelity loop, while Revenue
Metric sources stop at data-level verification. Adding more branches directly
to every caller would reduce Locality and make the workflow increasingly
Shallow.

## Decision

Adopt three explicit state scopes:

1. `DatasetBuild`: `INTAKED -> AUTHORED -> CLOSED -> BASELINE_STAGED -> SEALED`.
2. `PublicationBatch`: `PLANNED -> PUBLISHED | CONFLICTED`.
3. `ReleaseAttempt`: `PENDING -> RELEASED | RELEASE_FAILED`.

Use a build-local `FidelityRun` for immutable candidate/reference/manual
evidence. It is not canonical state and cannot publish directly.

Deepen the architecture into Dataset Build Transaction, Fidelity Run,
Publication, and Release Modules. Their Interfaces own ordering, invariants,
idempotency, recovery, and observable results; their Implementation details
remain behind those Seams.

Define Income Statement and Revenue Metric as the first two Adapters at the
input-type Seam. Adapters own their inventory and verification contracts, but
they contribute semantic records and assets rather than writing canonical
files or global projections.

Make these durable objects explicit and versioned:

- `ChangeImpact`;
- `VerificationPlan`;
- `ArtifactManifest`;
- `FidelityResult`.

Adopt operation semantics:

- `verify:*` is read-only;
- `record:*` writes only build-local evidence or staging;
- `publish:*` is the sole canonical mutation;
- `release:*` acts only on published content.

A staged baseline is marked `future-regression` and cannot contribute to the
acceptance verdict of the Build that created it. `SEALED` binds the exact
Source, authored, verification, staged-baseline, projection, and
`baseCanonicalDigest` inputs. A changed digest invalidates the seal.

Publication materializes and verifies a complete planned canonical result,
then performs compare-and-swap against `baseCanonicalDigest`. A real CAS
conflict terminates the old plan and requires replan plus reseal; it is not a
retryable transient error. Release has a separate receipt and failure state,
so release failure never rolls back Publication. A failed Release Attempt is
terminal; retry creates a new Attempt for the same published digest.

Record `acceptedAt` when sealing succeeds. It is stable lifecycle data and
does not depend on a future Git commit timestamp or filesystem mtime.

The detailed contracts live in:

- [`dataset-lifecycle.md`](../architecture/dataset-lifecycle.md)
- [`verification-publication.md`](../architecture/verification-publication.md)

## Consequences

### Positive

- Per-item Builds can proceed in parallel without publishing one another's
  unfinished files.
- Failed fidelity work is auditable but cannot masquerade as accepted
  previous evidence.
- Baseline, canonical Publication, and external Release have separate
  correctness and retry rules.
- A new input type adds an Adapter instead of duplicating the lifecycle.
- Tests exercise the same Deep Module Interfaces as callers, increasing
  Leverage and preserving Locality through internal refactors.

### Costs

- Event/state schemas, content digests, staging storage, idempotency, and
  recovery require new Implementation work.
- True multi-file atomic visibility requires an immutable-tree/pointer or
  equivalent canonical-store Adapter; sequential worktree writes are
  insufficient.
- CAS conflicts require resealing, although ChangeImpact may permit a fast
  reseal without repeating unrelated fidelity work.
- Existing scripts and docs need a staged migration and temporary shadow
  comparison; target names must not be advertised as available commands
  before they are implemented.

## Alternatives considered

### Add only a final verifier

Rejected. A final verifier could detect some stale output but would not make
early canonical writes, shared scratch, baseline mutation, manifest/metadata
updates, or release failure transactional.

### Keep one global workflow state

Rejected. Build, canonical Publication, and external Release have different
parallelism, authority, and retry semantics. A global state would either
serialize independent work or permit ambiguous partial completion.

### Let each input type own a complete workflow

Rejected. It would duplicate intake, evidence, sealing, Publication, and
recovery rules. The Adapter Seam keeps variation real while the deep lifecycle
Modules retain shared invariants.

### Treat the new baseline as the final acceptance gate

Rejected. That is circular evidence: the candidate would define the standard
used to prove itself. The staged baseline is only for future regression.

## Rollout

The migration is incremental:

- M0: record the architecture, vocabulary, owners, and this ADR.
- M1: isolate and atomically finalize `FidelityRun` evidence.
- M2: introduce per-item `DatasetBuild` plus the two input-type Adapters.
- M3: add machine-readable closure, non-self-proving baseline staging, and
  fresh sealing.
- M4: add pure global projections and canonical CAS Publication.
- M5: separate Release and add generated architecture/contract checks.

The authoritative milestone table and current-versus-target summary are in
the [`architecture index`](../architecture/README.md).
