import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOperatingObservation } from '../scripts/lib/operating-metrics.mjs';

test('source-scaled counts retain exact quantity and original literal', () => {
  for (const [literal, value] of [['112M', '112000000'], ['1.12M', '1120000'], ['9,007,199,254,740,993', '9007199254740993'], ['0.001K', '1']]) {
    const observation = { literal, value, unit: 'count', currency: null, comparison: 'eq' };
    assert.deepEqual(normalizeOperatingObservation(observation), observation);
  }
});

test('counts accept exact Source decimals such as per-account ratios', () => {
  for (const [literal, value] of [['59.4', '59.4'], ['60.6', '60.6'], ['0.5', '0.5'], ['1.25K', '1250'], ['0.0001K', '0.1']]) {
    const observation = { literal, value, unit: 'count', currency: null, comparison: 'eq' };
    assert.deepEqual(normalizeOperatingObservation(observation), observation);
  }
  for (const [literal, value] of [['59.4', '59'], ['59.4', '594'], ['59.4', '59.40001'], ['0.0001K', '0']]) {
    assert.throws(() => normalizeOperatingObservation({ literal, value, unit: 'count', currency: null, comparison: 'eq' }));
  }
});

test('counts reject false scale, currency, negative values and lost inequalities', () => {
  const observation = { literal: '112M', value: '112000000', unit: 'count', currency: null, comparison: 'eq' };
  for (const update of [{ value: '112' }, { literal: '$112M' }, { currency: 'USD' }, { literal: '0.0001K', value: '0' }, { comparison: 'gt' }, { literal: '-112M' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...observation, ...update }));
  }
});
