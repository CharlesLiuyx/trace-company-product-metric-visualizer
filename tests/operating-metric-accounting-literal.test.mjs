import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOperatingObservation } from '../scripts/lib/operating-metrics.mjs';
test('supplemental monetary losses preserve Source accounting parentheses', () => {
  const raw = { value: '-0.2', unit: 'B', currency: 'USD', comparison: 'eq', literal: '($0.2B)' };
  assert.deepEqual(normalizeOperatingObservation(raw), raw);
  assert.throws(() => normalizeOperatingObservation({ ...raw, value: '0.2' }), /value disagrees/);
  assert.throws(() => normalizeOperatingObservation({ ...raw, literal: '($0.3B)' }), /value disagrees/);
  assert.throws(() => normalizeOperatingObservation({ ...raw, literal: '(€0.2B)' }), /unit\/currency disagrees/);
});
