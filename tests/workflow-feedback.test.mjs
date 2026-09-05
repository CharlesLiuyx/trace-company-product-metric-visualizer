import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import {mkdtemp, mkdir, writeFile, rm} from 'node:fs/promises';
import {projectFeedbackPatterns} from '../scripts/lib/workflow-feedback.mjs';

async function withCasebook(contents, check) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-feedback-patterns-'));
  try {
    await mkdir(path.join(root, 'docs'));
    await writeFile(path.join(root, 'docs/fidelity-feedback-casebook.md'), contents);
    await check(root);
  } finally { await rm(root, {recursive: true, force: true}); }
}

test('feedback index retains suffixed fidelity rule IDs for recurrence lookup', async () => {
  await withCasebook('| CB-041 | incident | distorted text | rule-missing | G3d + G3 + G3d | hard-gate |', async root => {
    const result = await projectFeedbackPatterns(root);
    assert.deepEqual(result.patterns[0].ruleIds, ['G3', 'G3d']);
  });
});

test('duplicate case IDs fail instead of overwriting historical recurrence memory', async () => {
  await withCasebook('| CB-001 | old | pattern | gap | G12 |\n| CB-001 | new | different | gap | G3d |', async root => {
    await assert.rejects(projectFeedbackPatterns(root), /Duplicate fidelity feedback case ID: CB-001/);
  });
});
