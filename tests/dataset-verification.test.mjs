import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createDatasetBuild, digestValue } from '../scripts/lib/dataset-build.mjs';
import { prepareBuildReview } from '../scripts/lib/dataset-build-closeout.mjs';
import { initializeDatasetBuild, readBuildObject } from '../scripts/lib/dataset-build-store.mjs';
import { recordDatasetVerification } from '../scripts/lib/dataset-verification.mjs';
import { parseArgs, runRecordVerification } from '../scripts/record-verification.mjs';

const now = () => '2026-07-11T08:00:00.000Z';
const digest = (value) => digestValue({ value });

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-verification-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const artifact = 'data/datasets/example-q4-fy25.js';
  await mkdir(path.join(root, 'data', 'datasets'), { recursive: true });
  await writeFile(path.join(root, artifact), 'export const marker = 1;\n');
  const build = createDatasetBuild({
    key: 'example-q4-fy25',
    adapter: 'income-statement',
    baseCanonicalDigest: digest('canonical'),
    sources: [{ uri: 'input/pending/example.png', availability: 'local-only', digest: digest('source') }],
  }, { id: () => 'build-example-q4-fy25', now });
  await initializeDatasetBuild(build, { buildRoot });
  const prepared = await prepareBuildReview({
    buildId: build.buildId,
    inventory: {
      datasetKey: build.key,
      objects: [{
        id: 'label:revenue',
        kind: 'label',
        disposition: 'render',
        mapping: [{ role: 'render', target: 'layout.labels.revenue' }],
        features: ['text'],
      }],
    },
    artifacts: [{ path: artifact }],
    changeImpact: ['display-text-only'],
    requiredLocales: ['en'],
  }, { buildRoot, projectRoot: root, now });
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, buildRoot, artifact, prepared };
}

test('record:verification stores Build-bound consistency evidence after a passing verifier', async (t) => {
  const { root, buildRoot, prepared } = await fixture(t);
  const result = await recordDatasetVerification(prepared.build.buildId, {
    buildRoot,
    projectRoot: root,
    now,
    runVerifier: async () => ({ status: 0, stdout: 'all consistency checks passed\n', stderr: '' }),
  });
  assert.equal(result.manifest.status, 'evidence-ready');
  assert.equal(result.manifest.identity.authoredDigest, prepared.packet.authoredDigest);
  assert.equal(result.reference.kind, 'dataset-verification');
  assert.deepEqual(result.verificationReference, result.reference);
  assert.deepEqual(
    await readBuildObject(prepared.build.buildId, result.reference, { buildRoot }),
    result.manifest
  );
});

test('record:verification records nothing when the consistency verifier fails', async (t) => {
  const { root, buildRoot, prepared } = await fixture(t);
  await assert.rejects(
    recordDatasetVerification(prepared.build.buildId, {
      buildRoot,
      projectRoot: root,
      now,
      runVerifier: async () => ({ status: 1, stdout: '', stderr: 'SSOT mismatch' }),
    }),
    (error) => error.code === 'DATASET_VERIFICATION_FAILED'
  );
});

test('record:verification rejects a pass if authored bytes changed during the run', async (t) => {
  const { root, buildRoot, artifact, prepared } = await fixture(t);
  await assert.rejects(
    recordDatasetVerification(prepared.build.buildId, {
      buildRoot,
      projectRoot: root,
      now,
      runVerifier: async () => {
        await writeFile(path.join(root, artifact), 'export const marker = 2;\n');
        return { status: 0, stdout: 'passed old inputs', stderr: '' };
      },
    }),
    (error) => error.code === 'VERIFICATION_INPUT_CHANGED'
  );
});

test('record:verification CLI accepts one Build and keeps routing injectable', async () => {
  assert.deepEqual(
    parseArgs(['node', 'record-verification.mjs', '--', 'build-example', '--json']),
    { buildId: 'build-example', json: true }
  );
  const calls = [];
  const result = await runRecordVerification(
    { buildId: 'build-example', json: true },
    { recordDatasetVerification: async (buildId) => {
      calls.push(buildId);
      return { reference: { digest: 'sha256:test' } };
    } }
  );
  assert.deepEqual(calls, ['build-example']);
  assert.equal(result.reference.digest, 'sha256:test');
});
