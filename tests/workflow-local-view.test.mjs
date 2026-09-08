import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, access } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { atomicJson } from '../scripts/lib/workflow-files.mjs';
import { selectBuildPreview, selectPublishedView, readLocalView, retireBuildPreview } from '../scripts/lib/workflow-local-view.mjs';

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

test('successor retirement removes only its predecessor advertisement and is retry-safe', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-local-retirement-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const draft = (buildId) => ({ buildId, key: buildId, workspace: path.join(root, 'output/builds', buildId, 'workspace'), reviewToken: 'sha256:' + 'a'.repeat(64) });
  const first = draft('build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee');
  const second = draft('build-bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee');
  await selectBuildPreview(root, first);
  await selectBuildPreview(root, second);
  await retireBuildPreview(root, second.buildId);
  assert.equal((await readLocalView(root)).buildId, first.buildId);
  await assert.rejects(access(path.join(root, 'output/local-view/builds', second.buildId + '.json')), { code: 'ENOENT' });
  await retireBuildPreview(root, first.buildId);
  assert.equal(await readLocalView(root), null);
  await selectBuildPreview(root, second);
  await retireBuildPreview(root, first.buildId);
  assert.equal((await readLocalView(root)).buildId, second.buildId);
});
