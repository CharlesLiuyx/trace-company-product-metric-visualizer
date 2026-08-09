import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function loadSony() {
  return loadClassicScripts([
    'data/income-statements/sony.js',
    'data/datasets/sony-fy23.js',
  ]);
}

test('Sony FY23 retains the user-approved official net-profit correction', () => {
  const context = loadSony();
  const record = context.INCOME_STATEMENT_SSOT.records.find((entry) => entry.key === 'sony-fy23');
  const dataset = context.DATASETS.find((entry) => entry.key === 'sony-fy23');
  const node = dataset.nodes.find((entry) => entry.id === 'net_profit');

  assert.equal(record.profit.net.value, 970.6);
  assert.match(record.profit.net.notes[2], /¥368B/);
  assert.match(record.profit.net.notes[2], /¥970\.6B/);
  assert.equal(node.value, 970.6);
  assert.equal(node.valueText, undefined);
  assert.equal(dataset.meta.decimals, 0, 'the corrected official value renders as the approved ¥971B display');
});

test('Sony FY23 preserves Source-painted Other and Tax faces', () => {
  const { DATASETS } = loadSony();
  const dataset = DATASETS.find((entry) => entry.key === 'sony-fy23');

  assert.deepEqual(
    { ...dataset.layout.nodes.other_revenue },
    { x: 430, y: 1365, width: 71, height: 21 },
  );
  assert.deepEqual(
    { ...dataset.layout.nodes.tax },
    { x: 2298, y: 627, width: 71, height: 3 },
  );
});

test('Sony FY23 fixes the measured multi-link face order', () => {
  const { DATASETS } = loadSony();
  const dataset = DATASETS.find((entry) => entry.key === 'sony-fy23');
  const incomingRevenue = Array.from(dataset.links)
    .filter((entry) => entry.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((entry) => entry.source);
  const outgoingOperatingExpenses = Array.from(dataset.links)
    .filter((entry) => entry.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((entry) => entry.target);

  assert.deepEqual(incomingRevenue, [
    'game_network', 'music', 'pictures', 'technology',
    'imaging_sensing', 'financial_services', 'other_revenue',
  ]);
  assert.deepEqual(outgoingOperatingExpenses, ['sga', 'financial_services_other']);
});

test('Sony FY23 keeps the three corrected value labels 5px above their bars', () => {
  const { DATASETS } = loadSony();
  const dataset = DATASETS.find((entry) => entry.key === 'sony-fy23');

  assert.equal(dataset.layout.labels.game_network.blocks[0].top, 285);
  assert.equal(dataset.layout.labels.financial_services.blocks[0].top, 1124);
  assert.equal(dataset.layout.labels.other_revenue.blocks[0].top, 1274);
});

test('Sony FY23 keeps Imaging & Sensing clear of the Financial services value label', () => {
  const { DATASETS } = loadSony();
  const dataset = DATASETS.find((entry) => entry.key === 'sony-fy23');

  assert.equal(dataset.layout.labels.imaging_sensing.blocks[1].x, 380);
  assert.equal(dataset.layout.labels.financial_services.blocks[0].x, 465);
});
