import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import os from 'node:os';
import { existsSync } from 'node:fs';
import { mkdtemp, mkdir, writeFile, rm, symlink } from 'node:fs/promises';
import { sweepDerivedArtifacts } from '../scripts/lib/workflow-retention.mjs';

const CURRENT = 'a'.repeat(64), OLDER = 'b'.repeat(64), OLDEST = 'c'.repeat(64);
const SWEPT = ['_site/index.html', '_site/releases/x/app.js', 'output/trace-company-product-metric-visualizer.html',
  'output/site-benchmark/results.json', `output/site-releases/${OLDER}/assets/app.js`, `output/site-releases/${OLDEST}/index.js`,
  '.playwright-cli/console.log', 'scripts/__pycache__/x.pyc', '.DS_Store', 'output/.DS_Store'];
const KEPT = [`output/site-releases/${CURRENT}/assets/app.js`, 'output/site-releases/releases.json', 'output/site-releases/notes.txt',
  'output/render-regression/alpha.png', 'output/storage/lists/x.json', 'output/builds/build-a/manifest.json', 'output/builds/build-a/.DS_Store',
  'output/publications/current.json', 'output/git-transports/transport-a/receipt.json', 'output/workbench/servers/a.json',
  'output/meta/history.json', 'input/processed/a.png', 'input/.DS_Store', 'data/datasets/a.js', 'compare/.gitkeep',
  'scripts/build-site.mjs', 'output/site-benchmark-notes.txt'];

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-derived-sweep-'));
  for (const file of [...SWEPT, ...KEPT]) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), file === 'output/site-releases/releases.json' ? JSON.stringify([CURRENT, OLDER, OLDEST]) : `bytes:${file}`);
  }
  return root;
}

test('the derived sweep removes exactly the fixed list and keeps the current site release', async (t) => {
  const root = await fixture();
  t.after(() => rm(root, { recursive: true, force: true }));
  const preview = await sweepDerivedArtifacts(root, { dryRun: true });
  assert.ok(SWEPT.every((file) => existsSync(path.join(root, file))), 'dry run deletes nothing');
  const result = await sweepDerivedArtifacts(root);
  assert.deepEqual(result.removed, preview.removed);
  assert.deepEqual(result.removed.map((item) => item.path).sort(), ['.DS_Store', '.playwright-cli', '_site', 'output/.DS_Store',
    `output/site-releases/${OLDER}`, `output/site-releases/${OLDEST}`, 'output/site-benchmark', 'output/trace-company-product-metric-visualizer.html', 'scripts/__pycache__'].sort());
  assert.equal(result.bytes, SWEPT.reduce((sum, file) => sum + Buffer.byteLength(`bytes:${file}`), 0));
  for (const file of SWEPT) assert.equal(existsSync(path.join(root, file)), false, file);
  for (const file of KEPT) assert.equal(existsSync(path.join(root, file)), true, file);
  assert.deepEqual((await sweepDerivedArtifacts(root)).removed, [], 'a second sweep is a no-op');
});

test('the derived sweep keeps every site release without a readable releases.json', async (t) => {
  const root = await fixture();
  t.after(() => rm(root, { recursive: true, force: true }));
  await writeFile(path.join(root, 'output/site-releases/releases.json'), 'not json');
  await sweepDerivedArtifacts(root);
  for (const id of [CURRENT, OLDER, OLDEST]) assert.equal(existsSync(path.join(root, 'output/site-releases', id)), true, id);
});

test('the derived sweep never follows symlinks', async (t) => {
  const root = await fixture(), outside = await mkdtemp(path.join(os.tmpdir(), 'trace-derived-outside-'));
  t.after(() => Promise.all([rm(root, { recursive: true, force: true }), rm(outside, { recursive: true, force: true })]));
  await writeFile(path.join(outside, 'keep.txt'), 'outside');
  await rm(path.join(root, '_site'), { recursive: true });
  await symlink(outside, path.join(root, '_site'));
  await symlink(outside, path.join(root, 'output/site-benchmark/linked'));
  const result = await sweepDerivedArtifacts(root);
  assert.deepEqual(result.skipped, [{ path: '_site', reason: 'not a regular file or directory' }]);
  assert.equal(existsSync(path.join(outside, 'keep.txt')), true);
  assert.equal(existsSync(path.join(root, 'output/site-benchmark')), false);
});
