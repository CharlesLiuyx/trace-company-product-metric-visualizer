import test from 'node:test';
import assert from 'node:assert/strict';
import { linkAmountViolations } from '../scripts/lib/link-amounts.mjs';

const dataset = (nodes, links, decimals = 1) => ({ key: 'example', meta: { decimals }, nodes, links });

test('a link authored as its target total is rejected', () => {
  // airbnb-q2-fy24: every region -> Revenue link carried Revenue 2.7.
  const nodes = [{ id: 'north_america', value: 1.3 }, { id: 'emea', value: 1.4 }, { id: 'revenue', value: 2.7 }];
  const wrong = linkAmountViolations(dataset(nodes, [
    { source: 'north_america', target: 'revenue', value: 2.7 },
    { source: 'emea', target: 'revenue', value: 1.4 },
  ]));
  assert.equal(wrong.length, 1);
  assert.match(wrong[0], /north_america -> revenue value 2.7 exceeds its endpoint capacity/);
  assert.deepEqual(linkAmountViolations(dataset(nodes, [
    { source: 'north_america', target: 'revenue', value: 1.3 },
    { source: 'emea', target: 'revenue', value: 1.4 },
  ])), []);
});

test('a loss node cannot push more than its own amount', () => {
  // coreweave-q3-fy25: Net loss ($110M) -> Other expenses was authored as Other expenses 0.162.
  const nodes = [{ id: 'operating_profit', value: 0.052 }, { id: 'net_loss', value: -0.11 }, { id: 'other_expenses', value: 0.162 }];
  const links = [{ source: 'operating_profit', target: 'other_expenses', value: 0.052 }, { source: 'net_loss', target: 'other_expenses', value: 0.162 }];
  assert.equal(linkAmountViolations(dataset(nodes, links, 3)).length, 1);
  links[1].value = 0.11;
  assert.deepEqual(linkAmountViolations(dataset(nodes, links, 3)), []);
});

test('a pooling node shown net of an offset may pass its throughput', () => {
  // sony-q1-fy25: Operating expenses shows 507 net of Other income 10, and pays SG&A 515.
  const nodes = [{ id: 'gross_profit', value: 846 }, { id: 'other_income', value: 10 }, { id: 'operating_expenses', value: 507 }, { id: 'sga', value: 515 }, { id: 'other_expenses', value: 2 }];
  const links = [
    { source: 'gross_profit', target: 'operating_expenses', value: 507 },
    { source: 'other_income', target: 'operating_expenses', value: 10 },
    { source: 'operating_expenses', target: 'sga', value: 515 },
    { source: 'operating_expenses', target: 'other_expenses', value: 2 },
  ];
  assert.deepEqual(linkAmountViolations(dataset(nodes, links, 0)), []);
});

test('one display unit of source rounding is tolerated', () => {
  // ford-q1-fy25: Other 0.6 -> Net profit 0.5 after independent rounding.
  const nodes = [{ id: 'other', value: 0.6 }, { id: 'net_profit', value: 0.5 }];
  assert.deepEqual(linkAmountViolations(dataset(nodes, [{ source: 'other', target: 'net_profit', value: 0.6 }])), []);
  assert.equal(linkAmountViolations(dataset(nodes, [{ source: 'other', target: 'net_profit', value: 0.7 }])).length, 1);
});
