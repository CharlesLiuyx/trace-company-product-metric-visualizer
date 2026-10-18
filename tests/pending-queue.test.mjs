import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  checkPendingQueue,
  datasetKeyFromFileName,
  pendingCheckReport,
} from '../scripts/lib/pending-queue.mjs';

async function queueFixture(t, { registered = [] } = {}) {
  const projectRoot = await mkdtemp(path.join(os.tmpdir(), 'pending-queue-test-'));
  t.after(() => rm(projectRoot, { recursive: true, force: true }));
  for (const dir of ['input/pending', 'input/processing', 'input/processed', 'data/datasets', 'data/income-statements', 'data/metric-observations']) {
    await mkdir(path.join(projectRoot, dir), { recursive: true });
  }
  const manifest = { datasets: registered.map((key) => ({ key, src: `data/datasets/${key}.js` })) };
  await writeFile(
    path.join(projectRoot, 'data', 'dataset-manifest.js'),
    `(function () { window.__DATASET_MANIFEST__ = ${JSON.stringify(manifest)}; })();\n`
  );
  const write = (relativePath, bytes) => writeFile(path.join(projectRoot, relativePath), bytes);
  return { projectRoot, write };
}

test('datasetKeyFromFileName strips page prefixes and income-statement suffixes', () => {
  assert.equal(datasetKeyFromFileName('Page 3 - Acme Q4 FY25 income statement.png'), 'acme-q4-fy25');
  assert.equal(datasetKeyFromFileName('nvidia-q4-fy26.txt'), 'nvidia-q4-fy26');
});

test('an empty queue passes without reading any registration', async (t) => {
  const { projectRoot } = await queueFixture(t);
  const result = checkPendingQueue({ projectRoot });
  assert.deepEqual(result, { scope: 'queue', pending: 0, blocked: [], fresh: [] });
  assert.equal(pendingCheckReport(result).ok, true);
});

test('fresh pending Sources report their candidate keys', async (t) => {
  const { projectRoot, write } = await queueFixture(t);
  await write('input/pending/acme-q4-fy25.png', 'acme bytes');
  await write('input/pending/notes.md', '# metric notes\n');
  const result = checkPendingQueue({ projectRoot });
  assert.equal(result.pending, 2);
  assert.deepEqual(result.blocked, []);
  assert.deepEqual(result.fresh, [
    { pendingPath: 'input/pending/acme-q4-fy25.png', key: 'acme-q4-fy25' },
    { pendingPath: 'input/pending/notes.md', key: 'notes' },
  ]);
  const report = pendingCheckReport(result);
  assert.equal(report.ok, true);
  assert.match(report.lines[0], /^Pending check passed for queue: 2 new Source file\(s\)/);
});

test('a pending Source whose bytes are already claimed is blocked', async (t) => {
  const { projectRoot, write } = await queueFixture(t);
  await write('input/pending/upload.png', 'same bytes');
  await write('input/processing/acme-q4-fy25.png', 'same bytes');
  const result = checkPendingQueue({ projectRoot });
  assert.equal(result.blocked.length, 1);
  assert.equal(result.blocked[0].type, 'already-processing');
  assert.deepEqual(result.blocked[0].matches.map((match) => match.relativePath), ['input/processing/acme-q4-fy25.png']);
  assert.equal(result.blocked[0].matches[0].status.processingImage, true);
  const report = pendingCheckReport(result);
  assert.equal(report.ok, false);
  assert.match(report.lines.join('\n'), /input\/pending\/upload\.png matches existing claimed Source file/);
  assert.match(report.lines.at(-1), /Do not claim/);
});

test('a candidate key that already owns a dataset artifact or registration is a key collision', async (t) => {
  const { projectRoot, write } = await queueFixture(t, { registered: ['gamma-q1-fy26'] });
  await write('input/pending/beta-q1-fy26.png', 'beta bytes');
  await write('data/datasets/beta-q1-fy26.js', 'window.__DATASETS__ = [];\n');
  await write('input/pending/gamma-q1-fy26.png', 'gamma bytes');
  await write('input/pending/delta-q1-fy26.png', 'delta bytes');
  await write('data/income-statements/delta.js', "({ key: 'delta-q1-fy26' })\n");
  const result = checkPendingQueue({ projectRoot });
  assert.deepEqual(
    result.blocked.map((item) => [item.type, item.key, item.status.datasetScript, item.status.indexRegistration, item.status.ssotRecord]),
    [
      ['key-collision', 'beta-q1-fy26', true, false, false],
      ['key-collision', 'delta-q1-fy26', false, false, true],
      ['key-collision', 'gamma-q1-fy26', false, true, false],
    ]
  );
  assert.deepEqual(result.fresh, []);
});

test('two pending items with the same bytes or key collide with each other', async (t) => {
  const { projectRoot, write } = await queueFixture(t);
  await write('input/pending/one.png', 'twin bytes');
  await write('input/pending/two.png', 'twin bytes');
  const result = checkPendingQueue({ projectRoot });
  assert.deepEqual(result.blocked.map((item) => [item.type, item.pendingPath]), [
    ['pending-collision', 'input/pending/one.png'],
    ['pending-collision', 'input/pending/two.png'],
  ]);
  assert.deepEqual(result.blocked[0].sameHash, ['input/pending/one.png', 'input/pending/two.png']);
});

test('a selected file with a final key checks only that item under that key', async (t) => {
  const { projectRoot, write } = await queueFixture(t);
  await write('input/pending/Page 1 - Acme.png', 'acme bytes');
  await write('input/pending/other.png', 'other bytes');
  await write('input/processed/other-old.png', 'other bytes');
  const result = checkPendingQueue({ files: ['input/pending/Page 1 - Acme.png'], key: 'acme-q4-fy25', projectRoot });
  assert.equal(result.scope, 'selected item(s)');
  assert.deepEqual(result.blocked, []);
  assert.deepEqual(result.fresh, [{ pendingPath: 'input/pending/Page 1 - Acme.png', key: 'acme-q4-fy25' }]);

  assert.throws(() => checkPendingQueue({ files: ['input/processing/x.png'], projectRoot }), /directly under input\/pending\//);
  assert.throws(() => checkPendingQueue({ files: ['input/pending/missing.png'], projectRoot }), (error) => error.code === 'PENDING_SOURCE_MISSING');
  assert.throws(() => checkPendingQueue({ files: ['input/pending/other.png'], key: 'Other Key', projectRoot }), /normalized lowercase kebab case/);
  assert.throws(() => checkPendingQueue({ key: 'acme-q4-fy25', projectRoot }), /exactly one pending Source/);
});
