import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { buildClaimedSourceIndex } from '../scripts/check-pending-processed.mjs';
import {
  claimPendingSource,
  resolveSourcePath,
  restorePendingSource,
  sourceDigest,
  sourceLifecyclePaths,
} from '../scripts/lib/source-lifecycle.mjs';

async function sourceFixture(t, key = 'acme-q4-fy25') {
  const projectRoot = await mkdtemp(path.join(os.tmpdir(), 'source-lifecycle-test-'));
  t.after(() => rm(projectRoot, { recursive: true, force: true }));
  await Promise.all([
    mkdir(path.join(projectRoot, 'input', 'pending'), { recursive: true }),
    mkdir(path.join(projectRoot, 'input', 'processing'), { recursive: true }),
    mkdir(path.join(projectRoot, 'input', 'processed'), { recursive: true }),
  ]);
  const pendingPath = path.join(projectRoot, 'input', 'pending', 'upload.png');
  const bytes = Buffer.from('immutable source bytes');
  await writeFile(pendingPath, bytes);
  const expectedDigest = await sourceDigest(pendingPath);
  return {
    projectRoot,
    key,
    bytes,
    expectedDigest,
    pendingPath,
    ...sourceLifecyclePaths(key, { projectRoot }),
  };
}

test('claimPendingSource moves pending to processing without clobbering', async (t) => {
  const fixture = await sourceFixture(t);
  const claim = await claimPendingSource({
    source: 'input/pending/upload.png',
    key: fixture.key,
    expectedDigest: fixture.expectedDigest,
    projectRoot: fixture.projectRoot,
  });

  assert.equal(claim.originUri, 'input/pending/upload.png');
  assert.equal(claim.processingUri, `input/processing/${fixture.key}.png`);
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.equal(existsSync(fixture.processingPath), true);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
  assert.equal(await sourceDigest(fixture.processingPath), fixture.expectedDigest);
});

test('claimPendingSource preserves both files when the processing lease already exists', async (t) => {
  const fixture = await sourceFixture(t);
  const leasedBytes = Buffer.from('another build owns this key');
  await writeFile(fixture.processingPath, leasedBytes);

  await assert.rejects(
    claimPendingSource({
      source: 'input/pending/upload.png',
      key: fixture.key,
      expectedDigest: fixture.expectedDigest,
      projectRoot: fixture.projectRoot,
    }),
    (error) => error.code === 'PROCESSING_SOURCE_COLLISION'
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.deepEqual(await readFile(fixture.processingPath), leasedBytes);
});

test('claimPendingSource recovers an exact duplicate left by an interrupted claim', async (t) => {
  const fixture = await sourceFixture(t);
  await writeFile(fixture.processingPath, fixture.bytes);

  const claim = await claimPendingSource({
    source: 'input/pending/upload.png',
    key: fixture.key,
    expectedDigest: fixture.expectedDigest,
    projectRoot: fixture.projectRoot,
  });
  assert.equal(claim.recoveredDuplicate, true);
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
});

test('buildClaimedSourceIndex indexes processing and processed images by content hash', async (t) => {
  const fixture = await sourceFixture(t);
  await Promise.all([
    writeFile(fixture.processingPath, fixture.bytes),
    writeFile(fixture.processedPath, fixture.bytes),
  ]);

  const index = buildClaimedSourceIndex(fixture.projectRoot);
  assert.deepEqual(index.get(fixture.expectedDigest.slice('sha256:'.length)), [
    {
      key: fixture.key,
      state: 'processing',
      relativePath: `input/processing/${fixture.key}.png`,
    },
    {
      key: fixture.key,
      state: 'processed',
      relativePath: `input/processed/${fixture.key}.png`,
    },
  ]);
});

test('claimPendingSource rolls back its copy when digest verification fails', async (t) => {
  const fixture = await sourceFixture(t);
  const wrongDigest = `sha256:${'0'.repeat(64)}`;

  await assert.rejects(
    claimPendingSource({
      source: 'input/pending/upload.png',
      key: fixture.key,
      expectedDigest: wrongDigest,
      projectRoot: fixture.projectRoot,
    }),
    (error) => error.code === 'SOURCE_DIGEST_MISMATCH'
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.equal(existsSync(fixture.processingPath), false);
});

test('restorePendingSource recovers a claimed Source without overwriting its origin', async (t) => {
  const fixture = await sourceFixture(t);
  const claim = await claimPendingSource({
    source: 'input/pending/upload.png',
    key: fixture.key,
    expectedDigest: fixture.expectedDigest,
    projectRoot: fixture.projectRoot,
  });

  await restorePendingSource(claim, {
    expectedDigest: fixture.expectedDigest,
    projectRoot: fixture.projectRoot,
  });
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.equal(existsSync(fixture.processingPath), false);

  await writeFile(fixture.processingPath, fixture.bytes);
  await assert.rejects(
    restorePendingSource(claim, {
      expectedDigest: fixture.expectedDigest,
      projectRoot: fixture.projectRoot,
    }),
    (error) => error.code === 'SOURCE_DESTINATION_EXISTS'
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
});

test('resolveSourcePath falls back from processed to processing and prefers the final projection', async (t) => {
  const fixture = await sourceFixture(t);
  await writeFile(fixture.processingPath, fixture.bytes);
  const stableUri = `input/processed/${fixture.key}.png`;

  assert.equal(
    resolveSourcePath(stableUri, { projectRoot: fixture.projectRoot }),
    fixture.processingPath
  );
  assert.equal(
    resolveSourcePath(fixture.processedPath, { projectRoot: fixture.projectRoot }),
    fixture.processingPath
  );

  const processedBytes = Buffer.from('stable projection');
  await writeFile(fixture.processedPath, processedBytes);
  assert.equal(
    resolveSourcePath(stableUri, { projectRoot: fixture.projectRoot }),
    fixture.processedPath
  );
});
