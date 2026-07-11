import assert from 'node:assert/strict';
import test from 'node:test';
import {
  fidelityExecutionMode,
  fidelityExecutionModeForOperation,
  parseArgs,
} from '../scripts/verify-d3.mjs';

test('verify:d3 defaults to read-only diagnostic mode', () => {
  const options = parseArgs(['node', 'verify-d3.mjs', 'example-q4-fy25']);
  assert.equal(options.focus, 'unspecified');
  assert.equal(options.buildId, '');
  assert.equal(fidelityExecutionMode(options), 'diagnostic');
});

test('verify:d3 stays read-only even when a focus is supplied', () => {
  const options = parseArgs([
    'node',
    'verify-d3.mjs',
    'example-q4-fy25',
    '--focus',
    'text sweep',
  ]);
  assert.equal(fidelityExecutionMode(options), 'diagnostic');
});

test('record:fidelity binds review evidence to a Build', () => {
  const options = parseArgs([
    'node',
    'verify-d3.mjs',
    'example-q4-fy25',
    '--focus',
    'structure sweep',
    '--build',
    'build-example',
  ]);
  assert.equal(fidelityExecutionModeForOperation(options, 'record'), 'review-evidence');
  assert.equal(options.buildId, 'build-example');
});

test('record:fidelity preserves an explicitly labelled legacy archive without a Build', () => {
  const options = parseArgs([
    'node',
    'record-fidelity.mjs',
    'example-q4-fy25',
    '--focus',
    'text sweep',
  ]);
  assert.equal(fidelityExecutionModeForOperation(options, 'record'), 'legacy-manual');
});
