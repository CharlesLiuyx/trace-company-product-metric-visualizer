import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { runChecks, runCheckProcess } from '../scripts/lib/check-runner.mjs';
import { rootDir } from '../scripts/lib/project.mjs';

test('independent checks overlap within the limit and drain all failures', async () => {
  let active = 0, peak = 0;
  const results = await runChecks([0, 1, 2, 3, 4].map((i) => [String(i), async () => {
    active++; peak = Math.max(peak, active);
    await new Promise((resolve) => setTimeout(resolve, 10));
    active--;
    if (i === 1 || i === 3) throw new Error(`failure ${i}`);
    return i;
  }]), 2);
  assert.equal(peak, 2);
  assert.equal(active, 0);
  assert.deepEqual(results.map((result) => result.passed), [true, false, true, false, true]);
  await assert.rejects(runCheckProcess('/trace-nonexistent-executable', []), /ENOENT/);
});

test('a hung check process is terminated at its timeout instead of blocking forever', async () => {
  const started = Date.now();
  const result = await runCheckProcess(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { timeoutMs: 200 });
  assert.equal(result.timedOut, true);
  assert.notEqual(result.status, 0);
  assert.ok(Date.now() - started < 5000);
  const quick = await runCheckProcess(process.execPath, ['-e', 'process.stdout.write("ok")'], { timeoutMs: 5000 });
  assert.equal(quick.timedOut, false); assert.equal(quick.stdout, 'ok');
});

test('batch syntax parsing matches node --check for module grammar without executing code', async (t) => {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'trace-syntax-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const samples = [
    ['valid.mjs', 'import x from "missing-package"; export const y = await Promise.resolve(1); throw new Error("must not execute");', true],
    ['attributes.mjs', 'import x from "./x.json" with { type: "json" };', true],
    ['duplicate.mjs', 'export const x = 1; const x = 2;', false],
    ['missing-export.mjs', 'export { missing };', false],
    ['bad.js', 'const x = ;', false],
  ];
  for (const [name, source, valid] of samples) {
    const file = path.join(dir, name); await writeFile(file, source);
    const original = await runCheckProcess(process.execPath, ['--check', file]);
    const batch = await runCheckProcess(process.execPath, ['--experimental-vm-modules', path.join(rootDir, 'scripts/check-syntax.mjs'), file]);
    assert.equal(original.status === 0, valid, name);
    assert.equal(batch.status === 0, valid, `${name}: ${batch.stderr}`);
  }
});
