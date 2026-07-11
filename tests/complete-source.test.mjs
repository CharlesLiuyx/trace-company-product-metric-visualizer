import test from 'node:test';
import assert from 'node:assert/strict';
import { completeSource, parseArgs } from '../scripts/complete-source.mjs';

const BUILD_ID = 'build-acme-123';
const KEY = 'acme-q4-fy25';
const DIGEST = `sha256:${'a'.repeat(64)}`;
const LOCATORS = Object.freeze({
  processingUri: `input/processing/${KEY}.png`,
  processedUri: `input/processed/${KEY}.png`,
});

function passingCloseout() {
  return {
    inspection: {
      historicalState: 'SEALED',
      effectiveState: 'SEALED',
      reviewStatus: 'accepted',
    },
    verdict: { ok: true, reasons: [] },
  };
}

function buildRecord(source = {}) {
  return {
    buildId: BUILD_ID,
    key: KEY,
    sources: [
      { role: 'supplemental', digest: `sha256:${'b'.repeat(64)}` },
      {
        role: 'primary-reference',
        digest: DIGEST,
        ...LOCATORS,
        ...source,
      },
    ],
  };
}

test('complete:source parses one Build id and optional JSON output', () => {
  assert.deepEqual(
    parseArgs(['node', 'complete-source.mjs', '--', BUILD_ID, '--json']),
    { buildId: BUILD_ID, json: true }
  );
  assert.throws(
    () => parseArgs(['node', 'complete-source.mjs']),
    (error) => error.code === 'ERR_USAGE'
  );
  assert.throws(
    () => parseArgs(['node', 'complete-source.mjs', 'not-a-build']),
    (error) => error.code === 'ERR_USAGE'
  );
  assert.throws(
    () => parseArgs(['node', 'complete-source.mjs', BUILD_ID, '--json', '--json']),
    (error) => error.code === 'ERR_USAGE'
  );
});

test('complete:source refuses promotion until close-out passes', async () => {
  let promotionCalled = false;
  await assert.rejects(
    completeSource(BUILD_ID, {
      verifyBuildCloseout: async () => ({
        inspection: { historicalState: 'BASELINE_STAGED' },
        verdict: { ok: false, reasons: ['historical state is BASELINE_STAGED; expected SEALED'] },
      }),
      readDatasetBuild: async () => {
        throw new Error('Build must not be read after a failed close-out gate');
      },
      promoteProcessingSource: async () => {
        promotionCalled = true;
      },
    }),
    (error) => error.code === 'SOURCE_CLOSEOUT_REQUIRED'
      && error.details.includes('historical state is BASELINE_STAGED; expected SEALED')
  );
  assert.equal(promotionCalled, false);
});

test('complete:source promotes with the Build primary Source digest', async () => {
  let promotionInput;
  const result = await completeSource(BUILD_ID, {
    verifyBuildCloseout: async () => passingCloseout(),
    readDatasetBuild: async () => buildRecord(),
    sourceLifecyclePaths: () => LOCATORS,
    promoteProcessingSource: async (input) => {
      promotionInput = input;
      return { ...LOCATORS, alreadyCompleted: false, recoveredDuplicate: false };
    },
  });

  assert.deepEqual(promotionInput, { key: KEY, expectedDigest: DIGEST });
  assert.deepEqual(result, {
    buildId: BUILD_ID,
    key: KEY,
    historicalState: 'SEALED',
    effectiveState: 'SEALED',
    reviewStatus: 'accepted',
    source: {
      ...LOCATORS,
      digest: DIGEST,
      alreadyCompleted: false,
      recoveredDuplicate: false,
    },
  });
});

test('complete:source blocks a Build whose recorded Source locator does not match its key', async () => {
  let promotionCalled = false;
  await assert.rejects(
    completeSource(BUILD_ID, {
      verifyBuildCloseout: async () => passingCloseout(),
      readDatasetBuild: async () => buildRecord({
        processingUri: 'input/processing/a-different-key.png',
      }),
      sourceLifecyclePaths: () => LOCATORS,
      promoteProcessingSource: async () => {
        promotionCalled = true;
      },
    }),
    (error) => error.code === 'BUILD_SOURCE_LOCATOR_MISMATCH'
  );
  assert.equal(promotionCalled, false);
});
