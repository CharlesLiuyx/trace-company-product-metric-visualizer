import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { PNG } from 'pngjs';
import { parseArgs, recordIntake } from '../scripts/record-intake.mjs';
import { claimPendingSource as claimSource } from '../scripts/lib/source-lifecycle.mjs';

async function intakeFixture(t) {
  const projectRoot = await mkdtemp(path.join(os.tmpdir(), 'record-intake-test-'));
  t.after(() => rm(projectRoot, { recursive: true, force: true }));
  const buildRoot = path.join(projectRoot, 'output', 'builds');
  const pendingPath = path.join(projectRoot, 'input', 'pending', 'acme.png');
  await mkdir(path.dirname(pendingPath), { recursive: true });
  const png = new PNG({ width: 2, height: 3 });
  png.data.fill(255);
  const bytes = PNG.sync.write(png);
  await writeFile(pendingPath, bytes);
  return {
    projectRoot,
    buildRoot,
    pendingPath,
    processingPath: path.join(projectRoot, 'input', 'processing', 'acme-q4-fy25.png'),
    bytes,
  };
}

function intakeOptions() {
  return {
    source: 'input/pending/acme.png',
    key: 'acme-q4-fy25',
    adapter: 'income-statement',
    signals: ['income-statement-values', 'sankey-flow-topology'],
    availability: 'local-only',
    json: false,
  };
}

function intakeDependencies(fixture, overrides = {}) {
  return {
    projectRoot: fixture.projectRoot,
    buildRoot: fixture.buildRoot,
    canonicalDataDigest: async () => `sha256:${'a'.repeat(64)}`,
    runPendingGuard: async () => ({ status: 0, stdout: '', stderr: '' }),
    ...overrides,
  };
}

test('record:intake parses one selected Source and explicit Adapter', () => {
  assert.deepEqual(
    parseArgs([
      'node',
      'record-intake.mjs',
      'input/pending/acme.png',
      '--key',
      'acme-q4-fy25',
      '--adapter',
      'income-statement',
      '--signal',
      'sankey-flow-topology',
      '--signal',
      'income-statement-values',
      '--availability',
      'public',
      '--json',
    ]),
    {
      source: 'input/pending/acme.png',
      key: 'acme-q4-fy25',
      adapter: 'income-statement',
      signals: ['income-statement-values', 'sankey-flow-topology'],
      availability: 'public',
      json: true,
    }
  );
});

test('record:intake normalizes the legacy published availability alias to public', () => {
  const parsed = parseArgs([
    'node',
    'record-intake.mjs',
    'input/pending/acme.png',
    '--key',
    'acme-q4-fy25',
    '--adapter',
    'income-statement',
    '--signal',
    'income-statement-values',
    '--signal',
    'sankey-flow-topology',
    '--availability',
    'published',
  ]);
  assert.equal(parsed.availability, 'public');
});

test('record:intake defaults Source availability to local-only', () => {
  const parsed = parseArgs([
    'node',
    'record-intake.mjs',
    'input/pending/acme.png',
    '--key',
    'acme-arr-2026',
    '--adapter',
    'revenue-metric',
    '--signal',
    'revenue-metric-definition',
    '--signal',
    'time-series-observations',
  ]);
  assert.equal(parsed.availability, 'local-only');
});

test('record:intake rejects ambiguous or malformed identity', () => {
  assert.throws(
    () => parseArgs(['node', 'record-intake.mjs', 'input/pending/acme.png', '--key', 'Acme Q4', '--adapter', 'income-statement']),
    /lowercase kebab case/
  );
  assert.throws(
    () => parseArgs(['node', 'record-intake.mjs', 'input/pending/acme.png', '--key', 'acme-q4', '--adapter', 'unknown']),
    /Unsupported --adapter/
  );
  assert.throws(
    () => parseArgs([
      'node',
      'record-intake.mjs',
      'input/pending/acme.png',
      '--key',
      'acme-q4',
      '--adapter',
      'revenue-metric',
      '--signal',
      'income-statement-values',
      '--signal',
      'sankey-flow-topology',
    ]),
    /select income-statement, not requested Adapter revenue-metric/
  );
});

test('record:intake records the Build and claims pending Source in processing', async (t) => {
  const fixture = await intakeFixture(t);
  const result = await recordIntake(intakeOptions(), intakeDependencies(fixture));

  assert.equal(result.build.state, 'INTAKED');
  assert.equal(result.build.sources[0].uri, 'input/pending/acme.png');
  assert.equal(result.build.sources[0].processingUri, 'input/processing/acme-q4-fy25.png');
  assert.equal(result.build.sources[0].processedUri, 'input/processed/acme-q4-fy25.png');
  assert.equal(result.build.sources[0].width, 2);
  assert.equal(result.build.sources[0].height, 3);
  assert.equal(result.build.sourceClassification.adapter, 'income-statement');
  assert.deepEqual(result.build.sourceClassification.signals, ['income-statement-values', 'sankey-flow-topology']);
  assert.equal(result.build.sourceClassification.source.digest, result.build.sources[0].digest);
  assert.deepEqual(result.claim, {
    originUri: 'input/pending/acme.png',
    processingUri: 'input/processing/acme-q4-fy25.png',
    processedUri: 'input/processed/acme-q4-fy25.png',
    recoveredDuplicate: false,
  });
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
  assert.match(result.manifestPath, /^output\/builds\/build-[^/]+\/manifest\.json$/);
  assert.equal(existsSync(path.join(fixture.projectRoot, result.manifestPath)), true);
});

test('record:intake leaves pending Source untouched when Build initialization fails', async (t) => {
  const fixture = await intakeFixture(t);
  const initializationError = Object.assign(new Error('manifest write failed'), { code: 'MANIFEST_WRITE_FAILED' });

  await assert.rejects(
    recordIntake(
      intakeOptions(),
      intakeDependencies(fixture, {
        initializeDatasetBuild: async () => {
          throw initializationError;
        },
      })
    ),
    (error) => error === initializationError
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.equal(existsSync(fixture.processingPath), false);
});

test('record:intake discards its initialized Build when the Source claim fails', async (t) => {
  const fixture = await intakeFixture(t);
  const claimError = Object.assign(new Error('claim failed'), { code: 'SOURCE_CLAIM_FAILED' });

  await assert.rejects(
    recordIntake(
      intakeOptions(),
      intakeDependencies(fixture, {
        claimPendingSource: async () => {
          throw claimError;
        },
      })
    ),
    (error) => error === claimError
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.equal(existsSync(fixture.processingPath), false);
  assert.deepEqual(await readdir(fixture.buildRoot), []);
});

test('record:intake resumes an interrupted same-digest claim after the guard reports it', async (t) => {
  const fixture = await intakeFixture(t);
  await mkdir(path.dirname(fixture.processingPath), { recursive: true });
  await writeFile(fixture.processingPath, fixture.bytes);

  const result = await recordIntake(
    intakeOptions(),
    intakeDependencies(fixture, {
      runPendingGuard: async () => ({
        status: 1,
        stdout: '',
        stderr: 'pending Source matches an existing processing claim',
      }),
    })
  );

  assert.equal(result.build.state, 'INTAKED');
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
  assert.equal(existsSync(path.join(fixture.projectRoot, result.manifestPath)), true);
});

test('record:intake reports claim plus Build rollback failure and can resume the active manifest', async (t) => {
  const fixture = await intakeFixture(t);

  await assert.rejects(
    recordIntake(
      intakeOptions(),
      intakeDependencies(fixture, {
        claimPendingSource: async () => {
          throw new Error('claim failed');
        },
        discardInitializedDatasetBuild: async () => {
          throw new Error('rollback failed');
        },
      })
    ),
    (error) => error.code === 'INTAKE_ROLLBACK_FAILED' && error.cause instanceof AggregateError
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.equal(existsSync(fixture.processingPath), false);
  assert.equal((await readdir(fixture.buildRoot)).length, 1);

  const resumed = await recordIntake(intakeOptions(), intakeDependencies(fixture));
  assert.equal(resumed.build.state, 'INTAKED');
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
});

test('record:intake resumes an active manifest whose Source claim completed before a crash', async (t) => {
  const fixture = await intakeFixture(t);
  await assert.rejects(
    recordIntake(
      intakeOptions(),
      intakeDependencies(fixture, {
        claimPendingSource: async (input) => {
          await claimSource(input);
          throw new Error('crash after claim');
        },
        discardInitializedDatasetBuild: async () => {
          throw new Error('crash before Build rollback');
        },
      })
    ),
    (error) => error.code === 'INTAKE_ROLLBACK_FAILED'
  );
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);

  const resumed = await recordIntake(intakeOptions(), intakeDependencies(fixture));
  assert.equal(resumed.build.state, 'INTAKED');
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
});

test('record:intake reconciles an active manifest with duplicate pending and processing locators', async (t) => {
  const fixture = await intakeFixture(t);
  await assert.rejects(
    recordIntake(
      intakeOptions(),
      intakeDependencies(fixture, {
        claimPendingSource: async (input) => {
          await claimSource(input);
          await writeFile(fixture.pendingPath, fixture.bytes);
          throw new Error('crash with duplicate locators');
        },
        discardInitializedDatasetBuild: async () => {
          throw new Error('crash before Build rollback');
        },
      })
    ),
    (error) => error.code === 'INTAKE_ROLLBACK_FAILED'
  );
  assert.deepEqual(await readFile(fixture.pendingPath), fixture.bytes);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);

  const resumed = await recordIntake(intakeOptions(), intakeDependencies(fixture));
  assert.equal(resumed.build.state, 'INTAKED');
  assert.equal(existsSync(fixture.pendingPath), false);
  assert.deepEqual(await readFile(fixture.processingPath), fixture.bytes);
});
