import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/mcdonald-s-q2-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'mcdonald-s-q2-fy24');
}

test("McDonald's Q2 FY24 preserves the Source-painted hairlines and zero-face Other flow", () => {
  const current = dataset();
  const nodeIds = new Set(current.nodes.map((node) => node.id));
  const otherMetric = current.nonNodeMetrics.find((metric) => metric.id === 'other_income');
  const otherLink = current.links.find((link) => link.sourceRoute === 'other_income');

  assert.equal(nodeIds.has('other_income'), false);
  assert.deepEqual(JSON.parse(JSON.stringify(otherMetric)), {
    id: 'other_income', representation: 'flow', label: 'Other', value: 0.009,
    valueText: '$9M', type: 'profit', labelColor: '#008f51',
  });
  assert.equal(otherLink.target, 'net_profit');
  assert.equal(otherLink.targetOrder, 1);
  assert.equal(otherLink.interactionOnly, true);
  assert.match(current.annotationsSvg, /class="sankey-interactive-annotation"/);
  assert.match(current.annotationsSvg, /data-node="other_income"/);

  assert.equal(current.layout.nodes.other_revenue.height, 3);
  assert.equal(current.layout.nodes.depreciation_amortization.height, 4);
  assert.equal(current.layout.nodes.other_operating_expense.height, 3);
  assert.equal(current.render.interfaceAudit.mode, 'error');
  assert.match(current.meta.title, /Q2 FY24/);
  assert.equal(current.meta.hidePeriodStamp, true);
});

test("McDonald's Q2 FY24 preserves Source face order at every multi-link interface", () => {
  const current = dataset();
  const byPair = new Map(current.links.map((link) => [`${link.source || link.sourceRoute}->${link.target}`, link]));

  assert.equal(byPair.get('company_owned_restaurants->revenue').targetOrder, 0);
  assert.equal(byPair.get('franchised_restaurants->revenue').targetOrder, 1);
  assert.equal(byPair.get('other_revenue->revenue').targetOrder, 2);
  assert.equal(byPair.get('revenue->gross_profit').sourceOrder, 0);
  assert.equal(byPair.get('revenue->restaurant_expenses').sourceOrder, 1);
  assert.equal(byPair.get('gross_profit->operating_profit').sourceOrder, 0);
  assert.equal(byPair.get('gross_profit->operating_expenses').sourceOrder, 1);
  assert.equal(byPair.get('operating_profit->net_profit').sourceOrder, 0);
  assert.equal(byPair.get('other_income->net_profit').targetOrder, 1);
  assert.equal(byPair.get('operating_profit->tax').sourceOrder, 1);
  assert.equal(byPair.get('operating_profit->interest').sourceOrder, 2);
  assert.equal(byPair.get('operating_expenses->other_sga').sourceOrder, 0);
  assert.equal(byPair.get('operating_expenses->depreciation_amortization').sourceOrder, 1);
  assert.equal(byPair.get('operating_expenses->other_operating_expense').sourceOrder, 2);
});

test("McDonald's Q2 FY24 pins every Source-painted node face to native geometry", () => {
  const current = dataset();
  assert.deepEqual(JSON.parse(JSON.stringify(current.layout.nodes)), {
    company_owned_restaurants: { x: 385, y: 433, width: 71, height: 132 },
    franchised_restaurants: { x: 385, y: 735, width: 71, height: 212 },
    other_revenue: { x: 385, y: 1127, width: 71, height: 3 },
    revenue: { x: 852, y: 683, width: 70, height: 351 },
    gross_profit: { x: 1319, y: 585, width: 71, height: 200 },
    restaurant_expenses: { x: 1319, y: 990, width: 71, height: 149 },
    operating_profit: { x: 1794, y: 506, width: 70, height: 156 },
    operating_expenses: { x: 1794, y: 852, width: 70, height: 42 },
    net_profit: { x: 2253, y: 436, width: 71, height: 107 },
    tax: { x: 2253, y: 736, width: 71, height: 27 },
    interest: { x: 2253, y: 856, width: 71, height: 19 },
    other_sga: { x: 2253, y: 981, width: 71, height: 30 },
    depreciation_amortization: { x: 2253, y: 1131, width: 71, height: 4 },
    other_operating_expense: { x: 2253, y: 1241, width: 71, height: 3 },
  });
});
