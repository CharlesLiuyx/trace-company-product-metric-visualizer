import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceDatasetBuild,
  createDatasetBuild,
  digestValue,
  planPublicationBatch,
} from '../scripts/lib/dataset-build.mjs';

const digest = (value) => digestValue({ value });
const now = () => '2026-07-10T12:00:00.000Z';

function intake(adapter = 'income-statement', key = 'example-q4-fy25') {
  return createDatasetBuild(
    {
      key,
      adapter,
      baseCanonicalDigest: digest('canonical-v1'),
      sources: [{
        uri: `input/pending/${key}.png`,
        availability: 'local-only',
        digest: digest(`${key}-source`),
      }],
    },
    { now, id: () => `build-${key}` }
  );
}

function authored(build) {
  return advanceDatasetBuild(build, {
    type: 'record-authored',
    expectedRevision: build.revision,
    artifacts: [
      { path: `data/datasets/${build.key}.js`, digest: digest(`${build.key}-adapter`) },
      { path: 'data/income-statements/example.js', digest: digest(`${build.key}-ssot`) },
    ],
    inventory: { digest: digest(`${build.key}-inventory`), rendered: 8, dataOnly: 1, skipped: 2 },
    changeImpact: ['new-dataset', 'geometry'],
  }, { now });
}

function closed(build) {
  const snapshot = build.receipts.at(-1).payload;
  return advanceDatasetBuild(build, {
    type: 'record-closed',
    expectedRevision: build.revision,
    snapshotDigest: snapshot.snapshotDigest,
    evidence: {
      candidate: { status: 'passed', digest: digest(`${build.key}-candidate`) },
      reference: { status: 'passed', digest: digest(`${build.key}-reference`) },
      process: { status: 'passed', digest: digest(`${build.key}-process`) },
      human: { status: 'passed', digest: digest(`${build.key}-human`) },
    },
  }, { now });
}

function baselineStaged(build) {
  const closure = build.receipts.at(-1).payload;
  return advanceDatasetBuild(build, {
    type: 'stage-baseline',
    expectedRevision: build.revision,
    closureDigest: closure.closureDigest,
    disposition: 'recorded',
    use: 'future-regression-only',
    metrics: { similarity: 0.95, mae: 2.1, width: 1200, height: 800 },
  }, { now });
}

function sealed(build) {
  const authoredReceipt = build.receipts.findLast((receipt) => receipt.state === 'AUTHORED').payload;
  const closure = build.receipts.findLast((receipt) => receipt.state === 'CLOSED').payload;
  return advanceDatasetBuild(build, {
    type: 'seal',
    expectedRevision: build.revision,
    status: 'passed',
    snapshotDigest: authoredReceipt.snapshotDigest,
    closureDigest: closure.closureDigest,
    baseCanonicalDigest: build.baseCanonicalDigest,
    acceptedAt: '2026-07-10T12:30:00.000Z',
    verdictInputDigests: Object.values(closure.evidence).map((item) => item.digest),
  }, { now });
}

test('income-statement Build reaches SEALED without using its staged baseline as verdict input', () => {
  const build = sealed(baselineStaged(closed(authored(intake()))));
  assert.equal(build.state, 'SEALED');
  assert.equal(build.revision, 4);
  assert.match(build.receipts.at(-1).payload.sealDigest, /^sha256:/);
  assert.equal(build.receipts.find((receipt) => receipt.state === 'BASELINE_STAGED').payload.use, 'future-regression-only');
});

test('SEALED rejects a verdict that cites the current staged baseline', () => {
  const build = baselineStaged(closed(authored(intake())));
  const authoredReceipt = build.receipts.findLast((receipt) => receipt.state === 'AUTHORED').payload;
  const closure = build.receipts.findLast((receipt) => receipt.state === 'CLOSED').payload;
  const baseline = build.receipts.at(-1);
  assert.throws(
    () => advanceDatasetBuild(build, {
      type: 'seal',
      expectedRevision: build.revision,
      status: 'passed',
      snapshotDigest: authoredReceipt.snapshotDigest,
      closureDigest: closure.closureDigest,
      baseCanonicalDigest: build.baseCanonicalDigest,
      acceptedAt: '2026-07-10T12:30:00.000Z',
      verdictInputDigests: [
        ...Object.values(closure.evidence).map((item) => item.digest),
        baseline.digest,
      ],
    }, { now }),
    (error) => error.code === 'BASELINE_SELF_REFERENCE'
  );
});

test('revenue-metric Adapter records baseline as explicitly not applicable', () => {
  let build = authored(intake('revenue-metric', 'example-arr-2026'));
  const snapshot = build.receipts.at(-1).payload;
  build = advanceDatasetBuild(build, {
    type: 'record-closed',
    expectedRevision: build.revision,
    snapshotDigest: snapshot.snapshotDigest,
    evidence: {
      candidate: { status: 'passed', digest: digest('revenue-candidate') },
      reference: { status: 'not-applicable', digest: digest('revenue-reference-disposition') },
      process: { status: 'passed', digest: digest('revenue-process') },
      human: { status: 'passed', digest: digest('revenue-human') },
    },
  }, { now });
  const closure = build.receipts.at(-1).payload;
  build = advanceDatasetBuild(build, {
    type: 'stage-baseline',
    expectedRevision: build.revision,
    closureDigest: closure.closureDigest,
    disposition: 'not-applicable',
    reason: 'revenue-metric-data-only',
  }, { now });
  assert.equal(build.state, 'BASELINE_STAGED');
  assert.equal(build.receipts.at(-1).payload.disposition, 'not-applicable');
});

test('Build revision is an item-level CAS', () => {
  const build = intake();
  assert.throws(
    () => advanceDatasetBuild(build, {
      type: 'record-authored',
      expectedRevision: 9,
      artifacts: [],
      inventory: {},
      changeImpact: ['new-dataset'],
    }, { now }),
    (error) => error.code === 'STALE_REVISION'
  );
});

test('Publication Batch plans one shared base and conflicts instead of retrying a stale plan', () => {
  const left = sealed(baselineStaged(closed(authored(intake('income-statement', 'alpha-q1-fy26')))));
  const right = sealed(baselineStaged(closed(authored(intake('income-statement', 'beta-q1-fy26')))));
  const planned = planPublicationBatch([left, right], digest('canonical-v1'));
  assert.equal(planned.state, 'PLANNED');
  assert.match(planned.planDigest, /^sha256:/);

  const conflicted = planPublicationBatch([left, right], digest('canonical-v2'));
  assert.equal(conflicted.state, 'CONFLICTED');
  assert.equal(conflicted.recovery, 'replan-reverify-reseal');
});
