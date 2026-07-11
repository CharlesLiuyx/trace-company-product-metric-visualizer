import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createDatasetBuild, digestValue } from '../scripts/lib/dataset-build.mjs';
import {
  initializeDatasetBuild,
  inspectDatasetBuild,
  readDatasetBuild,
  recordBuildObject,
  recordDatasetBuildCommand,
} from '../scripts/lib/dataset-build-store.mjs';

const now = () => '2026-07-11T04:00:00.000Z';
const digest = (value) => digestValue({ value });
const fileDigest = (contents) => `sha256:${createHash('sha256').update(contents).digest('hex')}`;

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-build-store-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const artifactPath = path.join(root, 'data', 'datasets', 'example-q4-fy25.js');
  await mkdir(path.dirname(artifactPath), { recursive: true });
  await writeFile(artifactPath, 'export const marker = 1;\n');
  const build = createDatasetBuild({
    key: 'example-q4-fy25',
    adapter: 'income-statement',
    baseCanonicalDigest: digest('canonical-v1'),
    sources: [{
      uri: 'input/pending/example.png',
      availability: 'local-only',
      digest: digest('source'),
    }],
  }, { now, id: () => 'build-example' });
  await initializeDatasetBuild(build, { buildRoot });
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, buildRoot, artifactPath, build };
}

test('Dataset Build store persists revision-checked state transitions and content-addressed objects', async (t) => {
  const { root, buildRoot, artifactPath, build } = await fixture(t);
  const contents = await readFile(artifactPath);
  const authored = await recordDatasetBuildCommand(build.buildId, {
    type: 'record-authored',
    expectedRevision: build.revision,
    artifacts: [{
      path: 'data/datasets/example-q4-fy25.js',
      digest: fileDigest(contents),
      role: 'view-adapter',
    }],
    inventory: { digest: digest('inventory'), rendered: 1, dataOnly: 0, skipped: 0 },
    changeImpact: ['new-dataset', 'geometry'],
  }, { buildRoot, now });
  assert.equal(authored.state, 'AUTHORED');
  assert.equal((await readDatasetBuild(build.buildId, { buildRoot })).revision, 1);

  const reference = await recordBuildObject(build.buildId, 'review-packet', {
    buildId: build.buildId,
    authoredDigest: authored.receipts.at(-1).payload.snapshotDigest,
  }, { buildRoot, projectRoot: root });
  assert.match(reference.digest, /^sha256:/);
  assert.match(reference.path, /objects\/review-packet/);
});

test('Dataset Build store rejects stale revisions without changing the manifest', async (t) => {
  const { buildRoot, build } = await fixture(t);
  await assert.rejects(
    recordDatasetBuildCommand(build.buildId, {
      type: 'record-authored',
      expectedRevision: 99,
      artifacts: [],
      inventory: {},
      changeImpact: ['new-dataset'],
    }, { buildRoot, now }),
    (error) => error.code === 'STALE_REVISION'
  );
  assert.equal((await readDatasetBuild(build.buildId, { buildRoot })).revision, 0);
});

test('inspect reports effective AUTHORED when an authored artifact changes', async (t) => {
  const { root, buildRoot, artifactPath, build } = await fixture(t);
  const original = await readFile(artifactPath);
  await recordDatasetBuildCommand(build.buildId, {
    type: 'record-authored',
    expectedRevision: build.revision,
    artifacts: [{
      path: 'data/datasets/example-q4-fy25.js',
      digest: fileDigest(original),
      role: 'view-adapter',
    }],
    inventory: { digest: digest('inventory'), rendered: 1, dataOnly: 0, skipped: 0 },
    changeImpact: ['geometry'],
  }, { buildRoot, now });

  assert.equal((await inspectDatasetBuild(build.buildId, { buildRoot, projectRoot: root })).fresh, true);
  await writeFile(artifactPath, 'export const marker = 2;\n');
  const inspection = await inspectDatasetBuild(build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.effectiveState, 'AUTHORED');
  assert.equal(inspection.fresh, false);
  assert.equal(inspection.staleArtifacts[0].reason, 'digest-mismatch');
});
