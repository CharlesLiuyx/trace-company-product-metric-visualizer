import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { PNG } from 'pngjs';
import { createObjectInventory } from '../scripts/lib/object-inventory.mjs';
import {
  SOURCE_CLASSIFICATION_REVIEW_METHOD,
  SOURCE_COVERAGE_SCAN_PASSES,
  createSourceClassification,
  createSourceCoverage,
} from '../scripts/lib/source-coverage.mjs';
import {
  ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
  ZERO_PAINT_NODE_SLOT_FEATURE,
  ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
  assertZeroPaintNodeSlots,
  scanHorizontalFaceBands,
} from '../scripts/lib/source-face-observation.mjs';

const SOURCE_DIGEST = `sha256:${'f'.repeat(64)}`;

function solidPng(width = 100, height = 80) {
  const png = new PNG({ width, height });
  for (let index = 0; index < png.data.length; index += 4) {
    png.data[index] = 242;
    png.data[index + 1] = 242;
    png.data[index + 2] = 242;
    png.data[index + 3] = 255;
  }
  return png;
}

function paint(png, [x, y, width, height], color = [210, 35, 15]) {
  for (let row = y; row < y + height; row += 1) {
    for (let column = x; column < x + width; column += 1) {
      const index = (row * png.width + column) * 4;
      png.data[index] = color[0];
      png.data[index + 1] = color[1];
      png.data[index + 2] = color[2];
      png.data[index + 3] = 255;
    }
  }
  return png;
}

function sourceFacts() {
  const datasetKey = 'face-observation-q3-fy26';
  const source = {
    locator: `input/processing/${datasetKey}.png`,
    digest: SOURCE_DIGEST,
    width: 100,
    height: 80,
  };
  const inventory = createObjectInventory({
    datasetKey,
    objects: [
      {
        id: 'node:revenue',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.revenue.total' },
          { role: 'render', target: 'nodes.revenue' },
        ],
        features: ['visible-node-face'],
      },
      {
        id: 'metric:restructuring',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.costs.operatingExpenses.items.restructuring' },
          { role: 'render', target: 'nonNodeMetrics.restructuring' },
        ],
        features: [ZERO_PAINT_NODE_SLOT_FEATURE],
        featureEvidence: {
          [ZERO_PAINT_NODE_SLOT_FEATURE]: {
            source: 'same-column-node-slot',
            locator: `${source.locator}#restructuring-node-slot`,
            digest: SOURCE_DIGEST,
            referenceBBox: [20, 40, 40, 20],
            inspectionMethod: ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
            classificationClaim: ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
            reason: 'The native Source slot has no painted node face.',
          },
        },
      },
    ],
  });
  const classification = createSourceClassification({
    datasetKey,
    adapter: 'income-statement',
    signals: ['income-statement-values', 'sankey-flow-topology'],
    reviewMethod: SOURCE_CLASSIFICATION_REVIEW_METHOD,
    source,
    fullImageBBox: [0, 0, 100, 80],
  });
  const sourceCoverage = createSourceCoverage({
    classification,
    source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [
      {
        sourceId: 'source:revenue',
        sourceClass: 'financial-value',
        sourceLabel: 'Revenue',
        contentBBox: [10, 5, 70, 25],
        inventoryObjectIds: ['node:revenue'],
        amount: { literal: '$1B', value: '1', unit: 'B', resolution: '1' },
        ssotRef: { family: 'income-statement', path: 'revenue.total', id: 'revenue' },
        face: {
          searchBBox: [15, 5, 50, 20],
          observedBBox: [20, 10, 40, 8],
        },
      },
      {
        sourceId: 'source:restructuring',
        sourceClass: 'financial-value',
        sourceLabel: 'Restructuring',
        contentBBox: [20, 40, 40, 20],
        inventoryObjectIds: ['metric:restructuring'],
        amount: { literal: '$5M', value: '5', unit: 'M', resolution: '1' },
        ssotRef: {
          family: 'income-statement',
          path: 'costs.operatingExpenses.items',
          id: 'restructuring',
        },
      },
    ],
  }, { inventory, adapter: 'income-statement' });
  return { inventory, sourceCoverage };
}

test('native slot scan catches a two-pixel horizontal face but ignores a short link segment', () => {
  const png = solidPng();
  paint(png, [20, 46, 20, 2]);
  assert.deepEqual(scanHorizontalFaceBands(png, [20, 40, 40, 20]).bands, []);

  paint(png, [20, 46, 40, 2]);
  assert.deepEqual(
    scanHorizontalFaceBands(png, [20, 40, 40, 20]).bands,
    [{ top: 46, bottom: 48, maxRun: 40 }]
  );
});

test('slot-local background ignores a contrasting outer frame and supports narrow faces', () => {
  const framed = solidPng();
  paint(framed, [0, 0, 100, 4], [26, 26, 26]);
  paint(framed, [0, 76, 100, 4], [26, 26, 26]);
  paint(framed, [0, 0, 4, 80], [26, 26, 26]);
  paint(framed, [96, 0, 4, 80], [26, 26, 26]);
  const empty = scanHorizontalFaceBands(framed, [20, 20, 40, 20]);
  assert.deepEqual(empty.background, [242, 242, 242]);
  assert.deepEqual(empty.bands, []);

  paint(framed, [20, 30, 6, 1]);
  const narrow = scanHorizontalFaceBands(framed, [20, 28, 6, 5]);
  assert.equal(narrow.requiredRun, 6);
  assert.deepEqual(narrow.bands, [{ top: 30, bottom: 31, maxRun: 6 }]);
});

test('zero-paint evidence passes an empty slot and rejects the same slot once a face is painted', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'source-face-observation-test-'));
  const sourcePath = path.join(root, 'source.png');
  t.after(() => rm(root, { recursive: true, force: true }));
  const facts = sourceFacts();
  const png = solidPng();

  await writeFile(sourcePath, PNG.sync.write(png));
  assert.deepEqual(
    assertZeroPaintNodeSlots({ ...facts, sourcePath }),
    {
      checked: 1,
      claims: [{
        objectId: 'metric:restructuring',
        sourceId: 'source:restructuring',
        slotBBox: [20, 40, 40, 20],
        requiredRun: 30,
      }],
    }
  );

  const shifted = structuredClone(sourceFacts());
  shifted.inventory.objects
    .find((object) => object.id === 'metric:restructuring')
    .featureEvidence[ZERO_PAINT_NODE_SLOT_FEATURE]
    .referenceBBox = [20, 48, 40, 12];
  assert.throws(
    () => assertZeroPaintNodeSlots({ ...shifted, sourcePath }),
    (error) => error.code === 'SOURCE_FACE_SLOT_BBOX_MISMATCH'
  );

  paint(png, [20, 46, 40, 2]);
  await writeFile(sourcePath, PNG.sync.write(png));
  assert.throws(
    () => assertZeroPaintNodeSlots({ ...facts, sourcePath }),
    (error) =>
      error.code === 'SOURCE_FACE_PRESENT_FOR_NON_NODE' &&
      error.details.detectedBands[0].bottom - error.details.detectedBands[0].top === 2
  );
});
