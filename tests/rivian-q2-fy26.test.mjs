import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function rivianDataset() {
  const context = loadClassicScripts(['data/datasets/rivian-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'rivian-q2-fy26');
}

function link(dataset, source, target) {
  return dataset.links.find((item) => item.source === source && item.target === target);
}

function interval(center, width) {
  return [center - width / 2, center + width / 2];
}

test('Rivian Q2 multi-link faces preserve measured identity order and continuous occupancy', () => {
  const dataset = rivianDataset();
  const automotive = link(dataset, 'automotive', 'revenue');
  const software = link(dataset, 'software_services', 'revenue');
  const gross = link(dataset, 'revenue', 'gross_profit');
  const cost = link(dataset, 'revenue', 'cost_of_revenue');
  const grossToOpex = link(dataset, 'gross_profit', 'operating_expenses');
  const lossToOpex = link(dataset, 'operating_loss', 'operating_expenses');
  const opexToRnd = link(dataset, 'operating_expenses', 'rnd');
  const opexToSga = link(dataset, 'operating_expenses', 'sga');

  assert.deepEqual(
    [automotive, software].map((item) => [item.source, item.targetOrder]),
    [['automotive', 0], ['software_services', 1]]
  );
  assert.deepEqual(
    [gross, cost].map((item) => [item.target, item.sourceOrder]),
    [['gross_profit', 0], ['cost_of_revenue', 1]]
  );
  assert.deepEqual(
    [grossToOpex, lossToOpex].map((item) => [item.source, item.targetOrder]),
    [['gross_profit', 0], ['operating_loss', 1]]
  );
  assert.deepEqual(
    [opexToRnd, opexToSga].map((item) => [item.target, item.sourceOrder]),
    [['rnd', 0], ['sga', 1]]
  );

  assert.deepEqual(interval(automotive.y1, automotive.targetWidth), [661, 949]);
  assert.deepEqual(interval(software.y1, software.targetWidth), [949, 1076]);
  assert.deepEqual(interval(gross.y0, gross.sourceWidth), [661, 706]);
  assert.deepEqual(interval(cost.y0, cost.sourceWidth), [706, 1076]);
  assert.deepEqual(interval(grossToOpex.y1, grossToOpex.targetWidth), [674, 720]);
  assert.deepEqual(interval(lossToOpex.y1, lossToOpex.targetWidth), [720, 928]);
  assert.deepEqual(interval(opexToRnd.y0, opexToRnd.sourceWidth), [674, 791]);
  assert.deepEqual(interval(opexToSga.y0, opexToSga.sourceWidth), [791, 928]);
});

test('Rivian Q2 reuses the validated vehicle cluster at the Source-measured offset', () => {
  const dataset = rivianDataset();
  assert.deepEqual(JSON.parse(JSON.stringify(dataset.rasterAnnotations)), [
    {
      key: 'rivian-automotive-vehicles',
      href: 'data/assets/raster-annotations/rivian/automotive-vehicles.png',
      x: 50,
      y: 674,
      width: 320,
      height: 188,
    },
  ]);
});
