import test from 'node:test';
import assert from 'node:assert/strict';
import { isUnreportedNetProfit, validNetProfit } from '../scripts/lib/net-profit-availability.mjs';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const missing = { availability: 'not-reported', value: null, label: 'Net result not reported', notes: ['Source ends at operating loss.'] };

test('an absent net result is distinct from reported zero or an operating-loss substitute', () => {
  assert.equal(isUnreportedNetProfit(missing), true);
  assert.equal(validNetProfit(missing), true);
  assert.equal(validNetProfit({ value: 0 }), true);
  assert.equal(isUnreportedNetProfit({ value: 0 }), false);
  assert.equal(validNetProfit({ ...missing, value: -97 }), false);
  assert.equal(validNetProfit({ ...missing, id: 'operating_loss' }), false);
});

test('missing net results require explicit Source context and do not excuse malformed values', () => {
  for (const value of [null, undefined, { value: null }, { value: NaN }, { value: Infinity }, { value: '-97' }, { ...missing, notes: [] }, { ...missing, label: '' }, { ...missing, availability: 'unknown' }]) {
    assert.equal(validNetProfit(value), false);
  }
});

test('viewer numeric paths keep missing net results out of currency totals and display', () => {
  const context = loadClassicScripts(['src/trace-domain.js', 'src/app/util.js']);
  assert.equal(context.TraceDomain.finiteNumber(missing.value), null);
  assert.equal(context.TraceDomain.amountValueUsd(missing.value, '$', 'M'), null);
  assert.equal(context.formatAmount({ currency: '$', unit: 'M', decimals: 0 }, missing.value), '');
  assert.equal(context.formatAmount({ currency: '$', unit: 'M', decimals: 0 }, 0), '$0M');
});
