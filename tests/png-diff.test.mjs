import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { PNG } from 'pngjs';
import { boxMetrics, pngMetrics, readPng, formatDiffBoundingBox } from '../scripts/lib/png-diff.mjs';

function solidPng(width, height, [r, g, b]) {
  const png = new PNG({ width, height });
  for (let i = 0; i < png.data.length; i += 4) {
    png.data[i] = r;
    png.data[i + 1] = g;
    png.data[i + 2] = b;
    png.data[i + 3] = 255;
  }
  return png;
}

function withPixel(png, x, y, [r, g, b]) {
  const i = (y * png.width + x) * 4;
  png.data[i] = r;
  png.data[i + 1] = g;
  png.data[i + 2] = b;
  return png;
}

const dir = mkdtempSync(path.join(tmpdir(), 'png-diff-test-'));
function writePng(name, png) {
  const filePath = path.join(dir, name);
  writeFileSync(filePath, PNG.sync.write(png));
  return filePath;
}

test('identical images score similarity 1 with no diff bounding box', async () => {
  const a = writePng('a.png', solidPng(8, 8, [10, 20, 30]));
  const b = writePng('b.png', solidPng(8, 8, [10, 20, 30]));
  const { full } = await pngMetrics(a, b);
  assert.equal(full.mae, 0);
  assert.equal(full.similarity, 1);
  assert.equal(full.samePixelRatio, 1);
  assert.equal(full.diffBoundingBox, null);
  assert.equal(formatDiffBoundingBox(full.diffBoundingBox), 'none');
});

test('a single changed pixel is localized by the diff bounding box', async () => {
  const a = writePng('c.png', solidPng(8, 8, [0, 0, 0]));
  const b = writePng('d.png', withPixel(solidPng(8, 8, [0, 0, 0]), 3, 5, [255, 0, 0]));
  const { full } = await pngMetrics(a, b);
  assert.deepEqual(full.diffBoundingBox, { x: 3, y: 5, width: 1, height: 1 });
  assert.equal(full.maxChannelDiff, 255);
  const expectedMae = 255 / (8 * 8 * 3);
  assert.ok(Math.abs(full.mae - expectedMae) < 1e-9);
  assert.ok(Math.abs(full.samePixelRatio - 63 / 64) < 1e-9);
});

test('size mismatch throws instead of scoring garbage', async () => {
  const a = writePng('e.png', solidPng(8, 8, [0, 0, 0]));
  const b = writePng('f.png', solidPng(4, 4, [0, 0, 0]));
  await assert.rejects(() => pngMetrics(a, b), /PNG size mismatch/);
});

test('diff image amplifies channel deltas 4x and is written to disk', async () => {
  const a = writePng('g.png', solidPng(4, 4, [100, 100, 100]));
  const b = writePng('h.png', solidPng(4, 4, [110, 100, 100]));
  const diffPath = path.join(dir, 'diff.png');
  await pngMetrics(a, b, diffPath);
  const diff = readPng(diffPath);
  assert.equal(diff.data[0], 40, 'delta 10 renders as 40');
  assert.equal(diff.data[1], 0);
  assert.equal(diff.data[3], 255, 'opaque alpha');
});

test('boxMetrics clips regions to the frame and scores only inside', () => {
  const reference = solidPng(8, 8, [0, 0, 0]);
  const candidate = withPixel(solidPng(8, 8, [0, 0, 0]), 7, 7, [30, 0, 0]);
  const inside = boxMetrics(reference, candidate, { region: 'r', x: 6, y: 6, width: 10, height: 10 });
  assert.equal(inside.width, 2, 'clipped to frame');
  assert.ok(inside.changedPixelRatio > 0);
  const outside = boxMetrics(reference, candidate, { region: 'r', x: 0, y: 0, width: 4, height: 4 });
  assert.equal(outside.changedPixelRatio, 0);
  const empty = boxMetrics(reference, candidate, { region: 'r', x: 20, y: 20, width: 4, height: 4 });
  assert.equal(empty.similarity, 1, 'zero-pixel region scores perfect');
});

test('readFileSync round trip sanity for readPng', () => {
  const file = writePng('i.png', solidPng(2, 3, [1, 2, 3]));
  const png = readPng(file);
  assert.equal(png.width, 2);
  assert.equal(png.height, 3);
  assert.equal(readFileSync(file).length > 0, true);
});
