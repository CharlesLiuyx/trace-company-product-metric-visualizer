import assert from 'node:assert/strict';
import test from 'node:test';
import {
  fidelityExecutionMode,
  fidelityExecutionModeForOperation,
  main,
  parseArgs,
} from '../scripts/verify-d3.mjs';

test('verify:d3 defaults to read-only diagnostic mode', () => {
  const options = parseArgs(['node', 'verify-d3.mjs', 'example-q4-fy25']);
  assert.equal(options.focus, 'unspecified');
  assert.equal(options.buildId, '');
  assert.deepEqual(options.languages, ['en']);
  assert.equal(fidelityExecutionMode(options), 'diagnostic');
});

test('repeated --language flags render several locales in one command', () => {
  const options = parseArgs([
    'node',
    'verify-d3.mjs',
    'example-q4-fy25',
    '--language',
    'en',
    '--language',
    'zh',
    '--language',
    'zh',
  ]);
  assert.deepEqual(options.languages, ['en', 'zh']);
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

test('verify:d3 with a Build uses a non-archival plan diagnostic mode', () => {
  const options = parseArgs([
    'node',
    'verify-d3.mjs',
    'example-q4-fy25',
    '--build',
    'build-example',
    '--focus',
    'closeout-refresh',
  ]);
  const mode = fidelityExecutionModeForOperation(options, 'verify');

  assert.equal(mode, 'plan-diagnostic');
  assert.equal(new Set(['review-evidence', 'legacy-manual']).has(mode), false);
});

test('plan-bound verify is accepted by the CLI before dataset resolution', async () => {
  await assert.rejects(
    main([
      'node',
      'verify-d3.mjs',
      'definitely-missing-dataset',
      '--build',
      'build-example',
      '--focus',
      'closeout-refresh',
    ], { operation: 'verify' }),
    (error) => /Missing dataset file/.test(error.message)
  );
});

test('record:fidelity binds review evidence to a Build', () => {
  const options = parseArgs([
    'node',
    'verify-d3.mjs',
    'example-q4-fy25',
    '--focus',
    'structure-sweep',
    '--build',
    'build-example',
  ]);
  assert.equal(fidelityExecutionModeForOperation(options, 'record'), 'review-evidence');
  assert.equal(options.buildId, 'build-example');
});

test('record:fidelity accepts every canonical stage focus for Build evidence', () => {
  for (const focus of ['structure-sweep', 'text-sweep', 'polish-l10n-sweep', 'closeout-refresh']) {
    const options = parseArgs([
      'node',
      'verify-d3.mjs',
      'example-q4-fy25',
      '--focus',
      focus,
      '--build',
      'build-example',
    ]);
    assert.equal(fidelityExecutionModeForOperation(options, 'record'), 'review-evidence');
  }
});

test('record:fidelity rejects Build evidence with a free-form focus', () => {
  const options = parseArgs([
    'node',
    'verify-d3.mjs',
    'example-q4-fy25',
    '--focus',
    'structure sweep',
    '--build',
    'build-example',
  ]);
  assert.throws(
    () => fidelityExecutionModeForOperation(options, 'record'),
    /--focus to be one of structure-sweep, text-sweep, polish-l10n-sweep, closeout-refresh/
  );
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
