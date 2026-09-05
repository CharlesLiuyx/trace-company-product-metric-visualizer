import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { atomicJson } from '../scripts/lib/workflow-files.mjs';
import { selectBuildPreview, selectPublishedView, readLocalView } from '../scripts/lib/workflow-local-view.mjs';

test('local selection preserves an unrelated review and never rewinds publication on retry', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-local-selection-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const buildId = 'build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
  const draft = { buildId, key: 'example', workspace: path.join(root, 'output/builds', buildId, 'workspace'), reviewToken: 'sha256:' + 'a'.repeat(64) };
  await selectBuildPreview(root, draft);
  const newer = 'sha256:' + 'b'.repeat(64);
  await atomicJson(path.join(root, 'output/publications/current.json'), { publishedDigest: newer });
  await selectPublishedView(root, { builds: [{ buildId: 'another-build' }] });
  assert.equal((await readLocalView(root)).mode, 'review-pending');
  await selectPublishedView(root, { builds: [{ buildId }] });
  assert.equal((await readLocalView(root)).revision, newer);
  const newest = 'sha256:' + 'c'.repeat(64);
  await atomicJson(path.join(root, 'output/publications/current.json'), { publishedDigest: newest });
  await selectPublishedView(root, { builds: [{ buildId }] });
  assert.equal((await readLocalView(root)).revision, newest);
  await assert.rejects(selectBuildPreview(root, { ...draft, workspace: '/tmp/elsewhere' }), /isolated prepared Build/);
  assert.equal((await readLocalView(root)).revision, newest);
});
