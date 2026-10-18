import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { defaultSessionGeneration, resolveSessionGeneration, parseWorkflowArgs } from '../scripts/record-workflow.mjs';
import { assertBuildSession } from '../scripts/lib/workflow-session.mjs';

const BUILD = 'build-generation-default-1';

async function fixture(lease) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-generation-default-'));
  await mkdir(path.join(root, 'output/builds', BUILD), { recursive: true });
  if (lease) await writeFile(path.join(root, 'output/builds', BUILD, 'session.json'), JSON.stringify({ protocol: 'workflow-session/v1', updatedAt: new Date().toISOString(), ...lease }));
  return root;
}

test('an omitted --generation adopts the owning unreleased Session generation', async (t) => {
  const root = await fixture({ owner: 'session-a', generation: 'gen-1', released: false });
  t.after(() => rm(root, { recursive: true, force: true }));
  const input = parseWorkflowArgs(['continue', BUILD, '--session', 'session-a']);
  const generation = await resolveSessionGeneration(root, input, {});
  assert.equal(generation, 'gen-1');
  // The fence still runs on the defaulted value and accepts only the recorded owner.
  assert.equal((await assertBuildSession(root, BUILD, { session: 'session-a', generation })).generation, 'gen-1');
  await assert.rejects(assertBuildSession(root, BUILD, { session: 'session-b', generation }), { code: 'BUILD_SESSION_OWNED' });
});

test('a foreign, released or missing lease keeps the original fence error', async (t) => {
  for (const lease of [{ owner: 'session-b', generation: 'gen-1', released: false }, { owner: 'session-a', generation: 'gen-1', released: true }, null]) {
    const root = await fixture(lease);
    t.after(() => rm(root, { recursive: true, force: true }));
    assert.equal(await defaultSessionGeneration(root, BUILD, 'session-a'), null);
    const generation = await resolveSessionGeneration(root, parseWorkflowArgs(['refresh', BUILD, '--session', 'session-a']), {});
    assert.equal(generation, null);
    if (lease) await assert.rejects(assertBuildSession(root, BUILD, { session: 'session-a', generation: undefined }), { code: 'BUILD_SESSION_OWNED' });
  }
});

test('explicit generations, recovery and Session-less calls are never defaulted', async (t) => {
  const root = await fixture({ owner: 'session-a', generation: 'gen-1', released: false });
  t.after(() => rm(root, { recursive: true, force: true }));
  assert.equal(await resolveSessionGeneration(root, parseWorkflowArgs(['continue', BUILD, '--session', 'session-a', '--generation', 'gen-stale']), {}), null);
  await assert.rejects(assertBuildSession(root, BUILD, { session: 'session-a', generation: 'gen-stale' }), { code: 'BUILD_SESSION_OWNED' });
  assert.equal(await resolveSessionGeneration(root, parseWorkflowArgs(['continue', BUILD, '--session', 'session-a']), { TRACE_SESSION_GENERATION: 'gen-env' }), null);
  assert.equal(await resolveSessionGeneration(root, parseWorkflowArgs(['continue', BUILD]), {}), null);
  // The env identity the fence itself uses stands in for --session (Codex passes CODEX_THREAD_ID only).
  assert.equal(await resolveSessionGeneration(root, parseWorkflowArgs(['continue', BUILD]), { CODEX_THREAD_ID: 'session-a' }), 'gen-1');
  assert.equal(await resolveSessionGeneration(root, parseWorkflowArgs(['continue', BUILD]), { CODEX_THREAD_ID: 'session-b' }), null);
  for (const command of ['recover-session', 'session', 'release-session']) assert.equal(await resolveSessionGeneration(root, parseWorkflowArgs([command, BUILD, '--session', 'session-a']), {}), null);
  assert.equal(await defaultSessionGeneration(root, '../escape', 'session-a'), null);
});
