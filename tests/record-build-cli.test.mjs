import test from 'node:test';
import assert from 'node:assert/strict';
import {
  bindCliBuildId,
  parseArgs as parseRecordArgs,
  runRecordBuild,
} from '../scripts/record-build.mjs';
import {
  closeoutVerdict,
  parseArgs as parseVerifyArgs,
} from '../scripts/verify-closeout.mjs';

const argv = (...args) => ['node', 'script.mjs', ...args];

test('record-build parses and routes every close-out command', () => {
  assert.deepEqual(
    parseRecordArgs(argv('prepare-review', 'build-alpha', '--input', 'prepare.json', '--json')),
    { command: 'prepare-review', buildId: 'build-alpha', inputPath: 'prepare.json', json: true }
  );
  assert.deepEqual(
    parseRecordArgs(argv('finish', 'build-alpha', '--review', 'review.json')),
    { command: 'finish', buildId: 'build-alpha', inputPath: 'review.json', json: false }
  );
  assert.equal(parseRecordArgs(argv('stage-baseline', 'build-alpha', '--input', 'baseline.json')).command, 'stage-baseline');
  assert.deepEqual(
    parseRecordArgs(argv('seal', 'build-alpha')),
    { command: 'seal', buildId: 'build-alpha', json: false }
  );
  assert.deepEqual(
    parseRecordArgs(argv('inspect', 'build-alpha', '--json')),
    { command: 'inspect', buildId: 'build-alpha', json: true }
  );
});

test('record-build rejects wrong options, missing JSON, and a JSON Build override', () => {
  assert.throws(
    () => parseRecordArgs(argv('finish', 'build-alpha', '--input', 'review.json')),
    (error) => error.code === 'ERR_USAGE'
  );
  assert.throws(
    () => parseRecordArgs(argv('seal', 'build-alpha', '--input', 'seal.json')),
    (error) => error.code === 'ERR_USAGE'
  );
  assert.throws(
    () => bindCliBuildId({ buildId: 'build-beta' }, 'build-alpha'),
    (error) => error.code === 'BUILD_ID_MISMATCH'
  );
});

test('record-build seal derives freshness itself and accepts no caller pass verdict', async () => {
  const calls = [];
  const result = await runRecordBuild(
    { command: 'seal', buildId: 'build-alpha', json: false },
    {
      sealReviewedBuild: async (input) => {
        calls.push(input);
        return { state: 'SEALED' };
      },
    }
  );
  assert.deepEqual(result, { state: 'SEALED' });
  assert.deepEqual(calls, [{ buildId: 'build-alpha' }]);
});

test('runRecordBuild injects the CLI Build id and calls only the selected Module operation', async () => {
  const calls = [];
  const result = await runRecordBuild(
    { command: 'finish', buildId: 'build-alpha', inputPath: 'review.json', json: false },
    {
      readJson: async () => ({ packetDigest: 'sha256:packet' }),
      finishReviewedBuild: async (input) => {
        calls.push({ operation: 'finish', input });
        return { routed: true };
      },
      prepareBuildReview: async () => calls.push({ operation: 'prepare' }),
      stageReviewedBaseline: async () => calls.push({ operation: 'baseline' }),
      sealReviewedBuild: async () => calls.push({ operation: 'seal' }),
    }
  );

  assert.deepEqual(result, { routed: true });
  assert.deepEqual(calls, [{
    operation: 'finish',
    input: { packetDigest: 'sha256:packet', buildId: 'build-alpha' },
  }]);
});

test('verify-closeout parses one Build and closeoutVerdict requires all four conditions', () => {
  assert.deepEqual(
    parseVerifyArgs(argv('build-alpha', '--json')),
    { buildId: 'build-alpha', json: true }
  );
  assert.deepEqual(closeoutVerdict({
    historicalState: 'SEALED',
    effectiveState: 'SEALED',
    fresh: true,
    reviewStatus: 'accepted',
  }), { ok: true, reasons: [] });

  const failed = closeoutVerdict({
    historicalState: 'BASELINE_STAGED',
    effectiveState: 'AUTHORED',
    fresh: false,
    reasons: ['authored-artifact-stale'],
    reviewStatus: 'review-pending',
  });
  assert.equal(failed.ok, false);
  assert.equal(failed.reasons.length, 4);
  assert.match(failed.reasons.join('\n'), /historical state is BASELINE_STAGED/);
  assert.match(failed.reasons.join('\n'), /effective state is AUTHORED/);
  assert.match(failed.reasons.join('\n'), /authored-artifact-stale/);
  assert.match(failed.reasons.join('\n'), /review status is review-pending/);
});
