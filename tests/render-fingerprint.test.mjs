import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  RENDER_CACHE_VERSION,
  computeKeyDigest,
  computeRuntimeDigest,
  partitionByCache,
  rasterAssetRefsFromAdapterSource,
  readRenderCache,
  referenceSrcFromAdapterSource,
  writeRenderCache,
} from '../scripts/lib/render-fingerprint.mjs';
import { RENDER_RUNTIME_SCRIPTS } from '../scripts/script-sources.mjs';
import { RENDER_RUNTIME_PATHS } from '../scripts/lib/ci-plan.mjs';
import { nextCacheEntries } from '../scripts/verify-render-regression.mjs';

test('runtime script sets stay in parity between the harness and ci-plan', () => {
  assert.deepEqual([...RENDER_RUNTIME_SCRIPTS].sort(), [...RENDER_RUNTIME_PATHS].sort());
});

test('raster refs extract full literals, directory prefixes, and interpolations', () => {
  const source = `
    const RASTER = 'data/assets/raster-annotations/berkshire-hathaway/';
    href: 'data/assets/raster-annotations/nike/swoosh.png',
    href: "data/assets/raster-annotations/nike/swoosh.png",
    other: 'data/assets/icon-references/nike.png',
  `;
  assert.deepEqual(rasterAssetRefsFromAdapterSource(source), [
    'data/assets/raster-annotations/berkshire-hathaway/',
    'data/assets/raster-annotations/nike/swoosh.png',
  ]);
  assert.deepEqual(rasterAssetRefsFromAdapterSource('const x = 1;'), []);
  // Interpolated template literals truncate to the conservative directory.
  assert.deepEqual(
    rasterAssetRefsFromAdapterSource('href: `data/assets/raster-annotations/acme/${file}`'),
    ['data/assets/raster-annotations/acme/']
  );
});

test('reference src extracts both literal styles and falls back to the key convention', () => {
  assert.equal(
    referenceSrcFromAdapterSource("referenceImage: { src: 'input/processed/abbott-q4-fy25.png', width: 2667 }", 'abbott-q4-fy25'),
    'input/processed/abbott-q4-fy25.png'
  );
  assert.equal(
    referenceSrcFromAdapterSource('"src": "input/processed/nvidia-q4-fy24.png",', 'nvidia-q4-fy24'),
    'input/processed/nvidia-q4-fy24.png'
  );
  assert.equal(referenceSrcFromAdapterSource('const x = 1;', 'alpha-q1-fy26'), 'input/processed/alpha-q1-fy26.png');
});

async function fixtureProject() {
  const projectRoot = await mkdtemp(path.join(os.tmpdir(), 'render-fingerprint-'));
  await mkdir(path.join(projectRoot, 'data', 'datasets'), { recursive: true });
  await mkdir(path.join(projectRoot, 'data', 'assets', 'raster-annotations', 'alpha'), { recursive: true });
  await mkdir(path.join(projectRoot, 'input', 'processed'), { recursive: true });
  await mkdir(path.join(projectRoot, 'input', 'processing'), { recursive: true });
  await writeFile(
    path.join(projectRoot, 'data', 'datasets', 'alpha-q1-fy26.js'),
    `const RASTER = 'data/assets/raster-annotations/alpha/';
window.DATASETS.push({ meta: { referenceImage: { src: 'input/processed/alpha-q1-fy26.png' } } });
`
  );
  await writeFile(path.join(projectRoot, 'data', 'assets', 'raster-annotations', 'alpha', 'note.png'), 'png-one');
  return projectRoot;
}

test('key digest is stable and reacts to every per-key input', async () => {
  const projectRoot = await fixtureProject();
  const baselineEntry = { similarity: 0.97, mae: 7.0, width: 100, height: 50 };
  const first = await computeKeyDigest('alpha-q1-fy26', { baselineEntry, projectRoot });
  const second = await computeKeyDigest('alpha-q1-fy26', { baselineEntry, projectRoot });
  assert.equal(first.keyDigest, second.keyDigest);
  assert.equal(first.referencePresent, false);

  // Adapter source change.
  await writeFile(
    path.join(projectRoot, 'data', 'datasets', 'alpha-q1-fy26.js'),
    `const RASTER = 'data/assets/raster-annotations/alpha/';
window.DATASETS.push({ meta: { referenceImage: { src: 'input/processed/alpha-q1-fy26.png' } }, changed: true });
`
  );
  const afterAdapter = await computeKeyDigest('alpha-q1-fy26', { baselineEntry, projectRoot });
  assert.notEqual(afterAdapter.keyDigest, first.keyDigest);

  // Raster bytes behind the directory-prefix constant.
  await writeFile(path.join(projectRoot, 'data', 'assets', 'raster-annotations', 'alpha', 'note.png'), 'png-two');
  const afterRaster = await computeKeyDigest('alpha-q1-fy26', { baselineEntry, projectRoot });
  assert.notEqual(afterRaster.keyDigest, afterAdapter.keyDigest);

  // Baseline entry.
  const afterBaseline = await computeKeyDigest('alpha-q1-fy26', {
    baselineEntry: { ...baselineEntry, similarity: 0.99 },
    projectRoot,
  });
  assert.notEqual(afterBaseline.keyDigest, afterRaster.keyDigest);

  // Reference appearing via the processing fallback, then the processed copy.
  await writeFile(path.join(projectRoot, 'input', 'processing', 'alpha-q1-fy26.png'), 'ref-processing');
  const afterProcessing = await computeKeyDigest('alpha-q1-fy26', { baselineEntry, projectRoot });
  assert.equal(afterProcessing.referencePresent, true);
  assert.notEqual(afterProcessing.keyDigest, afterRaster.keyDigest);

  await writeFile(path.join(projectRoot, 'input', 'processed', 'alpha-q1-fy26.png'), 'ref-processed');
  const afterProcessed = await computeKeyDigest('alpha-q1-fy26', { baselineEntry, projectRoot });
  assert.equal(afterProcessed.referencePresent, true);
  assert.notEqual(afterProcessed.keyDigest, afterProcessing.keyDigest);
});

test('runtime digest is deterministic and reacts to order and environment', async () => {
  const scripts = [...RENDER_RUNTIME_SCRIPTS];
  const asIndexHtml = (order) => order.map((src) => `<script src="${src}"></script>`).join('\n');
  const first = await computeRuntimeDigest({ indexHtml: asIndexHtml(scripts), browserSignature: 'chromium-a' });
  const second = await computeRuntimeDigest({ indexHtml: asIndexHtml(scripts), browserSignature: 'chromium-a' });
  assert.equal(first, second);

  const reordered = await computeRuntimeDigest({
    indexHtml: asIndexHtml([...scripts].reverse()),
    browserSignature: 'chromium-a',
  });
  assert.notEqual(reordered, first);

  const otherBrowser = await computeRuntimeDigest({ indexHtml: asIndexHtml(scripts), browserSignature: 'chromium-b' });
  assert.notEqual(otherBrowser, first);
});

test('cache file roundtrips and tolerates missing or corrupt content', async () => {
  const projectRoot = await mkdtemp(path.join(os.tmpdir(), 'render-cache-'));
  assert.equal(await readRenderCache({ projectRoot }), null);

  const cache = {
    version: RENDER_CACHE_VERSION,
    runtimeDigest: 'sha256:abc',
    tolerance: 0.003,
    entries: { 'alpha-q1-fy26': { keyDigest: 'sha256:def', referencePresent: true, similarity: 0.97, verifiedAt: 't' } },
  };
  await writeRenderCache(cache, { projectRoot });
  assert.deepEqual(await readRenderCache({ projectRoot }), cache);

  await writeFile(path.join(projectRoot, 'output', 'render-regression', 'cache.json'), '{corrupt');
  assert.equal(await readRenderCache({ projectRoot }), null);
  await writeFile(path.join(projectRoot, 'output', 'render-regression', 'cache.json'), '["not-an-object"]');
  assert.equal(await readRenderCache({ projectRoot }), null);
});

test('partition skips only digest-matching entries and only when reading from cache', () => {
  const keyDigests = new Map([
    ['hit', { keyDigest: 'sha256:same' }],
    ['stale', { keyDigest: 'sha256:new' }],
    ['uncached', { keyDigest: 'sha256:any' }],
  ]);
  const entries = {
    hit: { keyDigest: 'sha256:same' },
    stale: { keyDigest: 'sha256:old' },
  };
  assert.deepEqual(
    partitionByCache({ targetKeys: ['hit', 'stale', 'uncached'], readFromCache: true, entries, keyDigests }),
    { skippedKeys: ['hit'], renderTargets: ['stale', 'uncached'] }
  );
  assert.deepEqual(
    partitionByCache({ targetKeys: ['hit'], readFromCache: false, entries, keyDigests }),
    { skippedKeys: [], renderTargets: ['hit'] }
  );
});

test('next cache entries carry passes, drop failures and improvements, prune stale keys', () => {
  const registeredSet = new Set(['kept', 'rendered', 'failed', 'improved', 'outside-run']);
  const keyDigests = new Map([
    ['kept', { keyDigest: 'sha256:kept', referencePresent: true }],
    ['rendered', { keyDigest: 'sha256:rendered', referencePresent: true }],
    ['failed', { keyDigest: 'sha256:failed', referencePresent: false }],
    ['improved', { keyDigest: 'sha256:improved', referencePresent: true }],
    ['changed-not-rendered', { keyDigest: 'sha256:new', referencePresent: true }],
  ]);
  const previousEntries = {
    kept: { keyDigest: 'sha256:kept', referencePresent: true, similarity: 0.97, verifiedAt: 'old' },
    unregistered: { keyDigest: 'sha256:gone', referencePresent: true, similarity: 0.9, verifiedAt: 'old' },
    'outside-run': { keyDigest: 'sha256:outside', referencePresent: true, similarity: 0.95, verifiedAt: 'old' },
    'changed-not-rendered': { keyDigest: 'sha256:old', referencePresent: true, similarity: 0.94, verifiedAt: 'old' },
    improved: { keyDigest: 'sha256:improved', referencePresent: true, similarity: 0.9, verifiedAt: 'old' },
  };
  const entries = nextCacheEntries({
    previousEntries,
    keyDigests,
    results: [
      { key: 'rendered', similarity: 0.98 },
      { key: 'failed', similarity: null },
      { key: 'improved', similarity: 0.99 },
    ],
    failures: [{ key: 'failed', reason: 'boom' }],
    improvedKeys: new Set(['improved']),
    registeredSet,
    now: () => 'now',
  });
  assert.deepEqual(entries, {
    kept: previousEntries.kept,
    'outside-run': previousEntries['outside-run'],
    rendered: { keyDigest: 'sha256:rendered', referencePresent: true, similarity: 0.98, verifiedAt: 'now' },
  });
});
