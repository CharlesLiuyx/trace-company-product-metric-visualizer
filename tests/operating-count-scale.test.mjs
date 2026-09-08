import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOperatingObservation } from '../scripts/lib/operating-metrics.mjs';

const count = (literal, value) => ({ literal, value, unit: 'count', currency: null, comparison: 'eq' });
test('source count suffixes retain exact base-unit counts and original literal', () => {
  for (const [literal, value] of [['148M', '148000000'], ['1.25K', '1250'], ['1.5B', '1500000000'], ['9007.199254740993T', '9007199254740993']]) {
    assert.deepEqual(normalizeOperatingObservation(count(literal, value)), count(literal, value));
  }
});
test('count scaling rejects wrong magnitudes, fractional counts and currency', () => {
  for (const input of [count('148M', '148'), count('0.0001K', '0'), count('-1K', '-1000'), { ...count('148M', '148000000'), currency: 'USD' }, count('$148M', '148000000')]) {
    assert.throws(() => normalizeOperatingObservation(input));
  }
});
