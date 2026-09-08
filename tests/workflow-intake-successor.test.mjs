import test from 'node:test';
import assert from 'node:assert/strict';
import { createDatasetBuild } from '../scripts/lib/dataset-build.mjs';
import { createSourceClassification } from '../scripts/lib/source-coverage.mjs';
import { successorClassification } from '../scripts/lib/workflow-intake-successor.mjs';
const digest = 'sha256:' + 'a'.repeat(64);
const classification = createSourceClassification({datasetKey:'example-q1',adapter:'income-statement',signals:['income-statement-values','sankey-flow-topology'],reviewMethod:'full-source-type-gate',source:{locator:'input/pending/example.png',digest,width:10,height:10},fullImageBBox:[0,0,10,10]});
const build = createDatasetBuild({key:'example-q1',adapter:'income-statement',baseCanonicalDigest:digest,sourceClassification:classification,sources:[{uri:'input/pending/example.png',digest,width:10,height:10,role:'primary-reference',availability:'local-only'}]});
const facts={protocol:'source-facts/v1',signals:[...classification.signals,'supplemental-operating-metrics'],questions:[]};
test('successor preserves source identity and immutable predecessor',()=>{const before=JSON.stringify(build);const next=successorClassification(build,facts);assert.deepEqual(next.source,classification.source);assert.notEqual(next.classificationDigest,classification.classificationDigest);assert.equal(JSON.stringify(build),before);});
test('successor permits an authored draft without transferring its old evidence', () => {
  const authored = { ...build, state: 'AUTHORED', receipts: [...build.receipts, { state: 'AUTHORED', payload: { reviewToken: digest } }] };
  const before = JSON.stringify(authored);
  const next = successorClassification(authored, facts);
  assert.deepEqual(next.source, classification.source);
  assert.equal(next.reviewToken, undefined);
  assert.equal(JSON.stringify(authored), before);
});
test('successor refuses any acceptance history, wrong type and unresolved questions', () => {
  for (const state of ['CLOSED', 'BASELINE_STAGED', 'SEALED']) {
    assert.throws(() => successorClassification({ ...build, state }, facts), /never-accepted/);
    assert.throws(() => successorClassification({ ...build, state: 'AUTHORED', receipts: [...build.receipts, { state }] }, facts), /never-accepted/);
  }
  assert.throws(() => successorClassification({ ...build, review: { status: 'accepted' } }, facts), /never-accepted/);
  assert.throws(() => successorClassification(build, { ...facts, signals: ['metric-observations'] }));
  assert.throws(() => successorClassification(build, { ...facts, questions: ['ARR?'] }));
  assert.throws(() => successorClassification(build, { ...facts, signals: classification.signals }));
});
