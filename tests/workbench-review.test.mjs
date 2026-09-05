import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { atomicJson, fileManifest, copyFiles, freezeSnapshot, bytesDigest } from '../scripts/lib/workflow-files.mjs';
import { composeReviewData, bindReviewMembers, assertReviewMembersFresh, readReviewPreview } from '../scripts/lib/workbench-review.mjs';
import { parseSsotRecords } from '../scripts/lib/workflow-merge.mjs';

const file = 'data/revenue-metrics.js';
const ssot = (records) => `(function(global) { global.REVENUE_METRIC_SSOT = ${JSON.stringify({ schemaVersion: 1, records })}; })(window);`;
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-combined-review-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, 'data'), { recursive: true });
  await writeFile(path.join(root, 'index.html'), '<!doctype html><h1>Current app</h1>');
  await writeFile(path.join(root, file), ssot([{ key: 'original', value: 1 }]));
  const base = await freezeSnapshot({ root, ...await fileManifest(root) }, root);
  async function task(key, records, revision = key + '-token') {
    const buildId = 'build-' + key, workspace = path.join(root, `output/builds/${buildId}/workspace`);
    await copyFiles(base.root, workspace, base.entries.map((entry) => entry.path));
    await writeFile(path.join(workspace, file), ssot(records));
    await atomicJson(path.join(workspace, 'output/workflow/base.json'), base);
    await atomicJson(path.join(root, `output/builds/${buildId}/manifest.json`), { key, adapter: 'revenue-metric', receipts: [] });
    await atomicJson(path.join(root, `output/local-view/builds/${buildId}.json`), { revision });
    return { buildId, key, revision, selectable: true, reviewPending: true, workspace };
  }
  async function snapshot(name) {
    const target = path.join(root, `output/${name}`);
    const current = await fileManifest(root);
    await copyFiles(root, target, current.entries.map((entry) => entry.path));
    return target;
  }
  return { root, task, snapshot };
}

test('one review combines different records with current project data without writing any source', async (t) => {
  const { root, task, snapshot } = await fixture(t);
  const original = { key: 'original', value: 1 };
  const a = await task('alpha', [original, { key: 'alpha', value: 2 }]);
  const b = await task('beta', [original, { key: 'beta', value: 3 }]);
  await writeFile(path.join(root, file), ssot([original, { key: 'project-only', value: 4 }]));
  const before = await Promise.all([root, a.workspace, b.workspace].map((dir) => fileManifest(dir)));
  const target = await snapshot('joined');
  const members = await composeReviewData(root, target, [b, a, { ...a, revision: null }]);
  assert.deepEqual(parseSsotRecords(await readFile(path.join(target, file), 'utf8'), file).map((record) => record.key), ['original', 'project-only', 'alpha', 'beta']);
  assert.deepEqual(members.map((member) => member.key), ['alpha', 'beta']);
  assert.deepEqual(await Promise.all([root, a.workspace, b.workspace].map((dir) => fileManifest(dir))), before);
  const bound = await bindReviewMembers(root, target, members, async (id) => ({ fresh: true, reviewToken: id.slice(6) + '-token' }));
  assert.deepEqual(bound.map((member) => member.reviewToken), ['alpha-token', 'beta-token']);
  await assertReviewMembersFresh(root, members);
  await writeFile(path.join(b.workspace, file), ssot([original, { key: 'beta', value: 30 }]));
  await assert.rejects(assertReviewMembersFresh(root, members), /beta.*更新/);
  assert.equal(parseSsotRecords(await readFile(path.join(target, file), 'utf8'), file).find((r) => r.key === 'beta').value, 3, 'the prior review remains immutable');
});

test('overlapping fields, missing base bytes and deletions stop composition instead of hiding a draft', async (t) => {
  const { root, task, snapshot } = await fixture(t);
  const a = await task('alpha', [{ key: 'original', value: 2 }]);
  const b = await task('beta', [{ key: 'original', value: 3 }]);
  await assert.rejects(composeReviewData(root, await snapshot('conflict'), [a, b]), /beta.*conflict.*value/);
  await assert.rejects(composeReviewData(root, await snapshot('duplicate'), [a, { ...b, key: 'alpha' }]), /重复数据/);
  await rm(path.join(a.workspace, file));
  await assert.rejects(composeReviewData(root, await snapshot('deletion'), [a]), /删除/);
  const base = JSON.parse(await readFile(path.join(b.workspace, 'output/workflow/base.json')));
  await writeFile(path.join(base.root, file), 'changed base');
  await assert.rejects(composeReviewData(root, await snapshot('base-changed'), [b]), /文件已变化/);
});

test('a combined view binds only identical semantic content and application with a fresh review token', async (t) => {
  const { root, task, snapshot } = await fixture(t);
  const a = await task('alpha', [{ key: 'original', value: 1 }, { key: 'alpha', value: 2 }]);
  const target = await snapshot('review');
  const members = await composeReviewData(root, target, [a]);
  await mkdir(path.join(target, 'data/assets'), { recursive: true });
  await writeFile(path.join(target, 'data/assets/logo.svg'), '<svg/>');
  members[0].build.receipts = [{ state: 'AUTHORED', payload: { artifacts: [
    { path: 'data/assets/catalog.json', role: 'asset', digest: 'derived-catalog-for-this-draft' },
    { path: 'data/assets/logo.svg', role: 'asset', digest: bytesDigest('<svg/>') },
  ] } }];
  const inspect = async () => ({ fresh: true, reviewToken: a.revision });
  assert.equal((await bindReviewMembers(root, target, members, inspect))[0].reviewToken, a.revision);
  await writeFile(path.join(target, 'data/assets/logo.svg'), '<svg>changed</svg>');
  assert.equal((await bindReviewMembers(root, target, members, inspect))[0].reviewToken, null, 'real assets remain review-bound, unlike the derived global catalog');
  await writeFile(path.join(target, 'data/assets/logo.svg'), '<svg/>');
  assert.equal((await bindReviewMembers(root, target, members, async () => ({ fresh: false, reviewToken: a.revision })))[0].reviewToken, null);
  await writeFile(path.join(target, 'index.html'), '<h1>Different application</h1>');
  assert.equal((await bindReviewMembers(root, target, members, inspect))[0].reviewToken, null);
  await writeFile(path.join(target, 'index.html'), await readFile(path.join(root, 'index.html')));
  await writeFile(path.join(target, file), ssot([{ key: 'alpha', value: 200 }]));
  assert.equal((await bindReviewMembers(root, target, members, inspect))[0].reviewToken, null);
});

test('CLI review resolves a displayed combined receipt only for its exact Build binding', async (t) => {
  const { root } = await fixture(t);
  const id = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
  const receipt = { id, source: 'review', members: [{ buildId: 'build-alpha', reviewToken: 'alpha-token', sourceDigest: 'alpha-digest' }] };
  const location = path.join(root, `output/workbench/previews/review/${id}/candidate.json`);
  await atomicJson(location, receipt);
  const { preview, member } = await readReviewPreview(root, 'build-alpha', id);
  assert.equal(preview.source, 'review'); assert.equal(member.reviewToken, 'alpha-token');
  await assert.rejects(readReviewPreview(root, 'build-beta', id), /no current review binding/);
  await atomicJson(location, { ...receipt, id: 'other' });
  await assert.rejects(readReviewPreview(root, 'build-alpha', id), /identity/);
});
