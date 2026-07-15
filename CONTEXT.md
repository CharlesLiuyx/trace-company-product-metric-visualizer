# Trace Context

Trace turns a **Source** into auditable **Metric** SSOT records and optional
high-fidelity **View** artifacts. A dataset change is handled by three scopes:
`DatasetBuild`, `PublicationBatch`, and `ReleaseAttempt`; a `FidelityRun` is
build-local evidence, not publication state.

Source folders are operational locators, not a fourth lifecycle scope.
`record:intake` fixes the Source digest and claims the selected file from
`input/pending/` into the Build-local `input/processing/` working locator and
lease. The Source remains there until an explicit operator review-completion
signal; after the operator confirms the enumerated processing batch, the
confirmed PNGs move no-clobber to `input/processed/`. That signal is the only
current relocation trigger, changes no Source digest identity, and fabricates
no Build state; its owning definition is `docs/dynamic-dataset-workflow.md`
§Operator Review-Completion Signal. In the target M4 architecture,
Publication replaces this transitional operation and owns the stable
processed Source projection.

Git transport is separate from lifecycle state: `input/pending/` and
`input/processing/` are tracked so multiple project checkouts can exchange
queue and active-claim changes, while `input/processed/` is ignored and kept
as a complete local archive. Tracking or ignoring a locator does not create a
Build transition or change Source identity.

Within a Sankey View, **Hover Share（所占比例）** is renderer-owned rather
than Adapter-configurable. Every semantic relationship uses one formula on
every hover surface (node, node label, link, or endpoint-declared guide):
`min(|source authored value|, |target authored value|) /
max(|source authored value|, |target authored value|)`. It is direction-
independent, ignores the d3-computed node value and `link.value`, and shows no
card when the larger endpoint is zero.

On node or node-label hover, incoming and outgoing sides are still grouped
independently by **distinct opposite semantic node**. That grouping controls
only how many Tags are shown and de-duplicates matching graph-link and SVG-
annotation surfaces; it never changes the formula. Parallel links to the same
opposite node are one semantic relationship. Adapters provide authored
amounts and topology only and cannot override the percentage.

Architecture vocabulary is **Module**, **Interface**, **Implementation**,
**Depth**, **Deep/Shallow**, **Seam**, **Adapter**, **Leverage**, and
**Locality**. The two current input-type Adapters are Income Statement and
Revenue Metric.

The **CI Verification Plan Module** derives a conservative check set from a
Git diff using the same `ChangeImpact` language. Its Interface returns fast,
app, site, render scope/keys, standalone, and site-projection
facts. Unknown executable impact and missing diff identity select the complete
suite; they never select an empty plan.

The current M3 build-local chain is the primary close-out authority and runs
end to end. Fresh intake first records a whole-Source Type Gate; authored
review then records exhaustive Source Coverage and reconciles Source amounts
against the actually loaded SSOT (and mapped Sankey nodes for Income
Statement) before a Plan can exist:

```text
SourceClassification v1 -> INTAKED
  -> ObjectInventory v3 + SourceCoverage v1
  -> actual authored-value reconciliation
  -> NodeFacePolicy v1 + VerificationPlan v4 -> ReviewPacket v3
  -> dataset-verification/v1 consistency evidence
  -> fidelity-run/2 EVIDENCE_READY
  -> ManualAttestation + RegionDecision + FeedbackLedger
  -> FidelityResult v2 + checkResults -> CLOSED -> BASELINE_STAGED -> fresh SEALED
```

`verify:d3` is read-only diagnostic execution and never records durable
evidence. `record:fidelity` owns durable automatic evidence; its
`evidence-ready` result still requires human review and cannot close a Build.
The Plan's Source Coverage review is also human-bound: its decision cites both
the immutable Source digest and the coverage digest. The embedded node-face
policy converts Source-visible/hidden classifications into render obligations,
including Source-bound handling for genuinely sub-floor visible faces; neither
an omitted small value nor an `Other` label can be accepted as decorative
residue. A primary zero-looking literal that masks a real non-zero amount must
bind authoritative higher-precision recovery and remain non-zero in the
authored SSOT/View; without that recovery, the Build stops rather than writing
zero.
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
