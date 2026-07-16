import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  baselineStructureProblems,
  parseArgs,
  recordBaselineUpdate,
  renderBaselineSource,
} from '../scripts/verify-render-regression.mjs';

test('--update rejects a full-catalog baseline ratchet without explicit keys', () => {
  assert.throws(
    () => parseArgs(['node', 'verify-render-regression.mjs', '--update']),
    /requires at least one explicit dataset key; full-catalog baseline ratchets are forbidden/
  );
  assert.deepEqual(
    parseArgs(['node', 'verify-render-regression.mjs', '--update', 'alpha-q1-fy26']).keys,
    ['alpha-q1-fy26']
  );
});

test('--structure-only is read-only and rejects incompatible render options', () => {
  assert.equal(
    parseArgs(['node', 'verify-render-regression.mjs', '--structure-only']).structureOnly,
    true
  );
  assert.throws(
    () => parseArgs(['node', 'verify-render-regression.mjs', '--structure-only', 'alpha-q1-fy26']),
    /cannot be combined/
  );
});

test('--no-cache forces a full render and stays out of --structure-only', () => {
  assert.equal(parseArgs(['node', 'verify-render-regression.mjs']).noCache, false);
  assert.equal(parseArgs(['node', 'verify-render-regression.mjs', '--no-cache']).noCache, true);
  assert.throws(
    () => parseArgs(['node', 'verify-render-regression.mjs', '--structure-only', '--no-cache']),
    /cannot be combined/
  );
});

test('baseline structure fails before rendering for missing and stale entries', () => {
  assert.deepEqual(
    baselineStructureProblems({
      targetKeys: ['alpha-q1-fy26', 'beta-q2-fy26'],
      registeredKeys: ['alpha-q1-fy26', 'beta-q2-fy26'],
      baselines: {
        'alpha-q1-fy26': { similarity: 0.9 },
        'stale-q4-fy25': { similarity: 0.8 },
      },
      fullCatalog: true,
    }),
    [
      'missing baseline for registered dataset: beta-q2-fy26',
      'stale baseline for unregistered dataset: stale-q4-fy25',
    ]
  );
});

test('recordBaselineUpdate leaves the canonical file untouched when the run has failures', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'render-baseline-test-'));
  const targetPath = path.join(directory, 'render-baselines.json');
  const original = '{"version":"original"}\n';
  await writeFile(targetPath, original);

  await assert.rejects(
    recordBaselineUpdate({
      targetPath,
      source: '{"version":"partial-failed-run"}\n',
      problems: ['alpha-q1-fy26: render failed'],
    }),
    /Refusing to record canonical baselines/
  );

  assert.equal(await readFile(targetPath, 'utf8'), original);
  assert.deepEqual(await readdir(directory), ['render-baselines.json']);
});

test('subset baseline recording replaces selected results and preserves every other key', () => {
  const previous = {
    'alpha-q1-fy26': { similarity: 0.91, mae: 4, width: 1200, height: 800 },
    'beta-q2-fy26': { similarity: 0.92, mae: 3, width: 1100, height: 700 },
  };
  const source = renderBaselineSource(
    [{ key: 'alpha-q1-fy26', similarity: 0.9754321, mae: 1.23456, width: 1280, height: 720 }],
    previous,
    0.003
  );
  const recorded = JSON.parse(source);

  assert.deepEqual(recorded.baselines['alpha-q1-fy26'], {
    similarity: 0.975432,
    mae: 1.2346,
    width: 1280,
    height: 720,
  });
  assert.deepEqual(recorded.baselines['beta-q2-fy26'], previous['beta-q2-fy26']);
});
