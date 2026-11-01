# Architecture migration milestones (historical)

Dated record, not current rules. Moved from `docs/architecture/` on 2026-11-01;
the current implementation is described by
[the architecture index](../architecture/README.md) and its owners.

## Milestones (status as of 2026-10-18)

| milestone | implementation status | outcome |
| --- | --- | --- |
| M0 — record the decision | implemented | architecture owners, vocabulary, invariants, and ADR exist |
| M1 — isolate FidelityRun | implemented with operation separation and `fidelity-run/2` review identity | `verify:d3` remains ephemeral/read-only; the fidelity `record` operation alone finalizes durable automatic evidence, with legacy v1 archives explicitly non-closure |
| M2 — introduce DatasetBuild | implemented for the new workflow | isolated authoring workspace, existing ledger, PNG/text identity, facts compilation and derived dependencies; historical direct-edit Builds remain readable |
| M3 — close and stage | implemented | source objects, consistency, one per-locale review candidate and operator acceptance (historical checkpoint Builds keep stage freezes); baseline and final seal remain separate |
| M4 — publish atomically | implemented for local dataset publication | private combined candidate, pure-in-candidate shared projections, owned-path conflicts, fresh seal check, immutable tree and pointer CAS, digest-qualified reader, idempotent recovery |
| M5 — separate Release | implemented for local site/standalone artifacts | published-digest input, independent attempt/error receipts and retries; external hosted deployment remains an explicit separate operation |

The migration followed "replace, not layer indefinitely": existing verifiers
were wrapped as evidence-producing Adapters, `verify:d3` stayed read-only,
closure, staging and sealing moved into the Build Module, writers became pure
projectors behind `publish:*` CAS, and standalone output became a Release
Adapter. The per-step low-level Build commands were removed on 2026-10-18
([legacy workflow](legacy-direct-edit-workflow.md)); `compat:baseline` was
renamed from `record:baseline` so that `record:*` stays build-local.

## Historical protocol readers (as of 2026-11-01)

- `fidelity-run/1` and `fidelity-run/2` predate the `<name>/v<n>` convention and
  keep their strings; unbound v1 manual archives never imply Build closure.
- Plans prepared under `fidelity-checkpoints/v1` keep their ordered stage
  freezes; `record:workflow continue` or `refresh` re-prepares older Plans.
- `accept` still accepts `packetDigest` as an alias of `reviewToken`.
- `AUTHORED` receipts recorded before content-addressed object references embed
  SourceObjects and the VerificationPlan inline and remain readable.
- Closed or sealed `fidelity-result/v1`/`v2` results are never rewritten and
  stay inspectable and sealable through one read model; closures recorded before
  `fidelity-result/v3` may reference a feedback-ledger object that is no longer
  read.

## Pages migration from the unversioned site

When the Pages runtime became content-versioned, the old `assets/*.js`
bootstrap/Chart URLs and registered `data/datasets/*.js` URLs started serving
small data-free upgrade scripts, so a cached old index or an already-open tab
navigates once to the latest index. The current behaviour is owned by
[runtime-data.md](../architecture/runtime-data.md).
