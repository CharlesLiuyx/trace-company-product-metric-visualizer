import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function sonyDataset() {
  const context = loadClassicScripts(['data/datasets/sony-q1-fy23.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'sony-q1-fy23');
}

test('Sony Q1 FY23 keeps Other income last on the Operating profit target face', () => {
  const dataset = sonyDataset();
  const node = dataset.layout.nodes.operating_profit;
  const incoming = dataset.links
    .filter((link) => link.target === 'operating_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(Array.from(incoming, (link) => link.source), ['gross_profit', 'other_income']);
  assert.deepEqual(Array.from(dataset.render.interfaceAudit.fullFaceIds), ['operating_profit:left']);
  assert.equal(incoming[1].interactionOnly, undefined);
  assert.deepEqual(
    Array.from(incoming, (link) => [link.y1 - link.targetWidth / 2, link.y1 + link.targetWidth / 2]),
    [[node.y, node.y + 23], [node.y + 23, node.y + node.height]],
  );
});

test('Sony Q1 FY23 keeps the three user-corrected value labels 5px above their bars', () => {
  const dataset = sonyDataset();

  assert.equal(dataset.layout.labels.music.blocks[0].top, 487);
  assert.equal(dataset.layout.labels.pictures.blocks[0].top, 636);
  assert.equal(dataset.layout.labels.imaging_sensing.blocks[0].top, 940);
});

test('Sony Q1 FY23 aligns the Financial services & other label with its bar', () => {
  const dataset = sonyDataset();
  const node = dataset.layout.nodes.financial_services_other;
  const label = dataset.layout.labels.financial_services_other.blocks[0];

  assert.equal(label.top, 1094);
  assert.equal(node.y, label.top);
  assert.equal(dataset.i18n.zh.layout.labels.financial_services_other.blocks[0].top, label.top);
});
