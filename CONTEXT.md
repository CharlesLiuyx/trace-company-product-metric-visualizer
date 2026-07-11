# Trace Context

Trace turns a **Source** into auditable **Metric** SSOT records and optional
high-fidelity **View** artifacts. A dataset change is handled by three scopes:
`DatasetBuild`, `PublicationBatch`, and `ReleaseAttempt`; a `FidelityRun` is
build-local evidence, not publication state.

Within a Sankey View, **Hover Share（所占比例）** is renderer-owned rather
than Adapter-configurable. Its Interface has two surface rules: node hover
derives a directional share from that node's distinct incoming/outgoing
relationships, while link hover compares the smaller authored endpoint amount
with the larger. All amounts use absolute authored magnitudes.

Architecture vocabulary is **Module**, **Interface**, **Implementation**,
**Depth**, **Deep/Shallow**, **Seam**, **Adapter**, **Leverage**, and
**Locality**. The two current input-type Adapters are Income Statement and
Revenue Metric.

The current M3 shadow/compatibility safety slice now exercises this build-local
chain end to end:

```text
ObjectInventory -> VerificationPlan -> ReviewPacket
  -> dataset-verification/v1 consistency evidence
  -> fidelity-run/2 EVIDENCE_READY
  -> ManualAttestation + RegionDecision + FeedbackLedger
  -> FidelityResult -> CLOSED -> BASELINE_STAGED -> fresh SEALED
```

`verify:d3` is read-only diagnostic execution and never records durable
evidence. `record:fidelity` owns durable automatic evidence; its
`evidence-ready` result still requires human review and cannot close a Build.
`record:build` exposes the deep prepare-review, finish-reviewed, stage, seal,
and inspect operations. A stored `SEALED` receipt is historical fact, while
inspection computes effective freshness: changing an authored file makes a
historical `SEALED` Build effectively `AUTHORED`. `CloseoutReport`, Task
information, and Loop Fidelity Summary are generated Views over structured
Build objects, not acceptance inputs.

Load context in this order:

1. [Architecture index](docs/architecture/README.md)
2. [Dataset lifecycle](docs/architecture/dataset-lifecycle.md)
3. [Verification and publication](docs/architecture/verification-publication.md)
4. [Machine-readable lifecycle contract](docs/architecture/lifecycle-contract.json)
5. [ADR-0001](docs/adr/0001-dataset-build-transactions.md)

The architecture documents distinguish **current Implementation** from the
accepted **target architecture**. Until a migration milestone is implemented,
the current commands and operational rules remain authoritative.
