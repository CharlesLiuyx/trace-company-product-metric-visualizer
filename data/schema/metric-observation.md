# Metric Observation records

This file owns the `metric-observations/v1` record format of
`data/metric-observations/<source-key>.json`: company or product metrics from
text or a plain image, without a Sankey. The generated
`data/metric-observations.js` (`pnpm update:metric-catalog`) is a viewer
projection, not another editable SSOT. Authoring facts are compiled from
`source-facts/v1` ([example](../../docs/examples/source-facts.example.json)).

Each record retains `key`, `subject { type, id, name }`, Source-stated
`period`, `basis`, `source { locator, digest, availability,
format/width/height/charLength }`, `metrics`, Source `context`, explicit
`exclusions`, `questions` and a content digest. Each metric has `id`, `name`,
exact decimal-string `value`, `unit`, explicit ISO `currency` or null, original
`literal`, `quote` and `anchor`; a metric may state its own `period` and
`basis`. A missing basis is `unspecified`, never an invented accounting
definition. Visual coordinates live only in the Source anchor.

Text anchors use UTF-16 `[start,end)` ranges into the decoded original; PNG
anchors use native pixel `[x,y,width,height]` boxes. Non-whitespace Source text
must be accounted for, and the full image still requires human completeness
review. `pnpm verify:metrics` checks quotes, values, units, currency,
provenance, registration and record identities. Different Sources with the same
subject/time/metric/basis need explicit reconciliation before registration; the
same identity never creates a second record automatically.
