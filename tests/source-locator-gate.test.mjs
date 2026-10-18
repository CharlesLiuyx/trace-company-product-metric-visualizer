import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { resolveSourcePath, workingLocatorError } from '../scripts/lib/source-lifecycle.mjs';

test('authored data must record the stable processed locator, not the working one', () => {
  assert.equal(workingLocatorError('x: sourceImage', 'input/processed/acme-q1-fy26.png'), null);
  assert.equal(workingLocatorError('x: sourceImage', { src: 'input/processed/acme-q1-fy26.png', width: 1, height: 1 }), null);
  assert.equal(workingLocatorError('x: sourceImage', undefined), null);
  assert.match(workingLocatorError('x: sourceImage', 'input/processing/acme-q1-fy26.png'), /author input\/processed\/acme-q1-fy26\.png/);
  assert.match(workingLocatorError('x: meta.referenceImage.src', { src: 'input/processing/acme-q1-fy26.txt' }), /^x: meta\.referenceImage\.src input\/processing\/acme-q1-fy26\.txt names the working locator/);
});

test('resolveSourcePath bridges the stable and working locators in both directions', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-source-locator-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const folder of ['processing', 'processed']) await mkdir(path.join(root, 'input', folder), { recursive: true });
  await writeFile(path.join(root, 'input/processing/active.png'), 'a');
  await writeFile(path.join(root, 'input/processed/archived.png'), 'b');
  assert.equal(resolveSourcePath('input/processed/active.png', { projectRoot: root }), path.join(root, 'input/processing/active.png'));
  assert.equal(resolveSourcePath('input/processing/archived.png', { projectRoot: root }), path.join(root, 'input/processed/archived.png'));
  assert.equal(resolveSourcePath('input/processed/missing.png', { projectRoot: root }), path.join(root, 'input/processed/missing.png'));
});
