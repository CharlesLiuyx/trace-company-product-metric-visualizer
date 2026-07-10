import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  cleanupFidelityRun,
  createFidelityRun,
  finalizeFidelityRun,
  findPreviousAcceptedRun,
  markFidelityRunFailed,
  planFidelityRun,
} from '../scripts/lib/compare-workspace.mjs';

const baseIdentity = Object.freeze({
  dataset: 'example-fy25',
  language: 'en',
  runKind: 'fidelity',
  referenceHash: 'reference-a',
  protocolVersion: 'protocol-v1',
  datasetHash: 'dataset-a',
  renderHash: 'render-a',
  i18nHash: 'i18n-a',
});

async function testRoot(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'fidelity-run-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

async function createRun(root, identity = {}) {
  return createFidelityRun({
    identity: { ...baseIdentity, ...identity },
    scratchRoot: path.join(root, 'compare'),
    outputRoot: path.join(root, 'output', 'compare'),
    projectRoot: root,
  });
}

async function seedArtifacts(run, marker) {
  await Promise.all([
    writeFile(run.artifacts.reference, 'same-reference'),
    writeFile(run.artifacts.candidate, `candidate-${marker}`),
    writeFile(run.artifacts.diff, `diff-${marker}`),
    writeFile(run.artifacts.interfaceAudit, JSON.stringify({ marker })),
    writeFile(run.artifacts.interfaceContactSheet, `contact-${marker}`),
  ]);
}

function finalizationOptions(similarity, round = 1) {
  return {
    focus: 'parallel safety',
    fullMetrics: { similarity },
    metricsDocument: {
      dataset: baseIdentity.dataset,
      full: { similarity },
    },
    round,
  };
}

test('parallel fidelity runs keep private scratch and finalize without cross-archive contamination', async (t) => {
  const root = await testRoot(t);
  const [left, right] = await Promise.all([createRun(root), createRun(root)]);
  assert.notEqual(left.scratchDir, right.scratchDir);

  await Promise.all([seedArtifacts(left, 'left'), seedArtifacts(right, 'right')]);
  await Promise.all([
    writeFile(path.join(left.scratchDir, 'undeclared-left.txt'), 'must not archive'),
    writeFile(path.join(right.scratchDir, 'undeclared-right.txt'), 'must not archive'),
  ]);
  const occupiedArchive = path.join(
    root,
    'output',
    'compare',
    'example-fy25',
    '01-baseline-parallel-safety'
  );
  await mkdir(occupiedArchive, { recursive: true });
  await writeFile(path.join(occupiedArchive, 'sentinel.txt'), 'do not replace');

  const [leftArchive, rightArchive] = await Promise.all([
    finalizeFidelityRun(left, finalizationOptions(0.9)),
    finalizeFidelityRun(right, finalizationOptions(0.91)),
  ]);

  assert.notEqual(leftArchive.dir, rightArchive.dir);
  assert.equal(
    [leftArchive.name, rightArchive.name].includes('01-baseline-parallel-safety-2'),
    true
  );
  assert.equal(await readFile(path.join(occupiedArchive, 'sentinel.txt'), 'utf8'), 'do not replace');
  const leftArchiveDir = path.join(root, leftArchive.dir);
  const rightArchiveDir = path.join(root, rightArchive.dir);
  const expectedFiles = [
    'example-fy25-d3.png',
    'example-fy25-interface-audit.json',
    'example-fy25-interface-contact-sheet.png',
    'example-fy25-metrics.json',
    'example-fy25-pixel-diff-x4.png',
    'example-fy25-reference.png',
    'fidelity-run.json',
  ];
  assert.deepEqual((await readdir(leftArchiveDir)).sort(), expectedFiles);
  assert.deepEqual((await readdir(rightArchiveDir)).sort(), expectedFiles);
  assert.equal(await readFile(path.join(leftArchiveDir, 'example-fy25-d3.png'), 'utf8'), 'candidate-left');
  assert.equal(await readFile(path.join(rightArchiveDir, 'example-fy25-d3.png'), 'utf8'), 'candidate-right');

  const [leftManifest, rightManifest] = await Promise.all([
    readFile(path.join(leftArchiveDir, 'fidelity-run.json'), 'utf8').then(JSON.parse),
    readFile(path.join(rightArchiveDir, 'fidelity-run.json'), 'utf8').then(JSON.parse),
  ]);
  assert.equal(leftManifest.status, 'accepted');
  assert.equal(rightManifest.status, 'accepted');
  assert.equal(leftManifest.runId, left.runId);
  assert.equal(rightManifest.runId, right.runId);
  assert.equal(
    leftManifest.artifacts.reference,
    `${leftArchive.dir}/example-fy25-reference.png`
  );
  const leftMetrics = JSON.parse(
    await readFile(path.join(leftArchiveDir, 'example-fy25-metrics.json'), 'utf8')
  );
  assert.equal(leftMetrics.candidate, `${leftArchive.dir}/example-fy25-d3.png`);
  assert.equal(leftMetrics.diff, `${leftArchive.dir}/example-fy25-pixel-diff-x4.png`);

  await cleanupFidelityRun(left);
  await assert.rejects(stat(left.scratchDir), { code: 'ENOENT' });
  assert.equal((await stat(right.scratchDir)).isDirectory(), true);
});

test('failed fidelity run remains private and is never promoted as previous', async (t) => {
  const root = await testRoot(t);
  const failed = await createRun(root);
  await seedArtifacts(failed, 'failed');
  await rm(failed.artifacts.interfaceContactSheet);
  const gateError = new Error('G12 failed');
  await assert.rejects(
    finalizeFidelityRun(failed, finalizationOptions(0.91)),
    /Missing declared fidelity artifact: interfaceContactSheet/
  );
  await markFidelityRunFailed(failed, gateError);

  const failedManifest = JSON.parse(await readFile(failed.manifestPath, 'utf8'));
  assert.equal(failedManifest.status, 'failed');
  assert.equal(await findPreviousAcceptedRun(failed), null);

  const next = await createRun(root);
  await seedArtifacts(next, 'next');
  const plan = await planFidelityRun(next, finalizationOptions(0.92));
  assert.equal(plan.previousArchive, null);
  assert.equal(plan.improvement, 'baseline');

  const accepted = await finalizeFidelityRun(next, finalizationOptions(0.92));
  assert.equal(accepted.previousArchive, null);
  assert.equal(accepted.improvement, 'baseline');
});

test('previous comparison requires matching dataset, language, run kind, reference, and protocol', async (t) => {
  const root = await testRoot(t);
  const acceptedRun = await createRun(root);
  await seedArtifacts(acceptedRun, 'accepted');
  await finalizeFidelityRun(acceptedRun, finalizationOptions(0.93));

  const mismatches = [
    { dataset: 'other-fy25' },
    { language: 'zh' },
    { runKind: 'smoke' },
    { referenceHash: 'reference-b' },
    { protocolVersion: 'protocol-v2' },
  ];
  for (const mismatch of mismatches) {
    const run = await createRun(root, mismatch);
    assert.equal(
      await findPreviousAcceptedRun(run),
      null,
      `identity mismatch should not compare: ${JSON.stringify(mismatch)}`
    );
  }

  const changedEvidence = await createRun(root, {
    datasetHash: 'dataset-b',
    renderHash: 'render-b',
    i18nHash: 'i18n-b',
  });
  const previous = await findPreviousAcceptedRun(changedEvidence);
  assert.ok(previous);
  assert.equal(previous.manifest.identity.datasetHash, 'dataset-a');
  assert.equal(previous.manifest.identity.renderHash, 'render-a');
  assert.equal(previous.manifest.identity.i18nHash, 'i18n-a');
});
