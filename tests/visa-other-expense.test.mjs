import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function visaRecordsAndDatasets() {
  const context = loadClassicScripts([
    'data/income-statements/visa.js',
    'data/datasets/visa-q1-fy26.js',
    'data/datasets/visa-q2-fy26.js',
  ]);
  const recordByKey = new Map(context.INCOME_STATEMENT_SSOT.records.map((record) => [record.key, record]));
  const datasetByKey = new Map(context.DATASETS.map((dataset) => [dataset.key, dataset]));
  return { recordByKey, datasetByKey };
}

test('Visa FY26 Q1 and Q2 retain exact expense reconciliation and visible Other terminals', () => {
  const { recordByKey, datasetByKey } = visaRecordsAndDatasets();
  const expected = new Map([
    ['visa-q1-fy26', { other: 0.011, text: '($0.01B)' }],
    ['visa-q2-fy26', { other: 0.060, text: '($0.06B)' }],
  ]);

  for (const [key, expectation] of expected) {
    const record = recordByKey.get(key);
    const dataset = datasetByKey.get(key);
    assert.ok(record, `${key} SSOT record exists`);
    assert.ok(dataset, `${key} Sankey adapter exists`);

    const opexSum = record.costs.operatingExpenses.items.reduce((total, item) => total + item.value, 0);
    assert.ok(Math.abs(opexSum - record.costs.operatingExpenses.total) < 1e-9, `${key} exact opex components reconcile`);
    assert.equal(record.otherExpenses.total, expectation.other, `${key} exact non-operating Other total`);
    assert.equal(record.otherExpenses.items[0].value, expectation.other, `${key} exact non-operating Other item`);

    const node = dataset.nodes.find((item) => item.id === 'other_ded');
    const link = dataset.links.find((item) => item.source === 'operating_profit' && item.target === 'other_ded');
    assert.equal(node.value, expectation.other);
    assert.equal(node.valueText, expectation.text);
    assert.notEqual(node.color, '#f2f2f2', `${key} Other node has a painted face`);
    assert.equal(dataset.layout.nodes.other_ded.height, 6, `${key} Other node has a six-pixel visible floor`);
    assert.equal(link.sourceWidth, 6, `${key} Other flow meets its visible source face`);
    assert.equal(link.targetWidth, 6, `${key} Other flow meets its visible target face`);
    assert.deepEqual(Array.from(dataset.render.interfaceAudit.fullFaceIds), ['other_ded:left']);
    assert.equal(dataset.layout.labels.other_ded.blocks[0].lines.at(-1).text, expectation.text);

    const opexSourceWidth = dataset.links
      .filter((item) => item.source === 'operating_expenses')
      .reduce((total, item) => total + (item.sourceWidth ?? item.width), 0);
    assert.equal(opexSourceWidth, dataset.layout.nodes.operating_expenses.height, `${key} Opex parent face is continuous`);
  }
});
