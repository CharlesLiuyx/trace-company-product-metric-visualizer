import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { rootDir } from './project.mjs';
import { digestValue } from './dataset-build.mjs';
import { extractFidelityRuleReferences } from './fidelity-rule-contract.mjs';
import { createFeedbackRecord } from './feedback-ledger.mjs';
import { recordBuildObject } from './dataset-build-store.mjs';
import { readJson, inside, filesUnder, atomicJson } from './workflow-files.mjs';

export async function projectFeedbackPatterns(root = rootDir) {
  const source = await readFile(path.join(root, 'docs/fidelity-feedback-casebook.md'), 'utf8');
  const cases = new Map();
  for (const line of source.split('\n')) {
    const id = line.match(/^\|\s*(CB-\d+)\s*\|/)?.[1];
    if (!id) continue;
    if (cases.has(id)) throw new Error(`Duplicate fidelity feedback case ID: ${id}`);
    const columns = line.split('|').slice(1, -1).map((value) => value.trim());
    cases.set(id, { id, source: 'docs/fidelity-feedback-casebook.md', pattern: columns[2], rootCause: columns[3], ruleIds: extractFidelityRuleReferences(line), defense: columns[4], recurrenceAction: columns.slice(5).join(' | ') });
  }
  return { protocol: 'feedback-pattern-index/v1', sourceDigest: digestValue(source), patterns: [...cases.values()].sort((a, b) => a.id.localeCompare(b.id)) };
}
export async function updateFeedbackPatterns(root = rootDir, { check = false } = {}) {
  const value = await projectFeedbackPatterns(root);
  const contents = JSON.stringify(value, null, 2) + '\n';
  const file = path.join(root, 'data/feedback-patterns.json');
  if (check) { if (await readFile(file, 'utf8') !== contents) throw new Error('Feedback pattern index stale: pnpm update:feedback-patterns'); }
  else await writeFile(file, contents);
  return value;
}
export async function recordWorkflowFeedback(buildId, input, options) {
  const record = createFeedbackRecord({ ...input, buildId });
  const reference = await recordBuildObject(buildId, 'feedback-record', record, options);
  if (options.build?.authoringRoot) await atomicJson(inside(options.projectRoot, 'output/workflow/review-context.json'), { kind: 'feedback-update', reference });
  const batchPeers = new Set();
  for (const file of await filesUnder(options.repositoryRoot || rootDir, ['output/batches'])) {
    if (!file.endsWith('.json')) continue;
    const batch = await readJson(inside(options.repositoryRoot || rootDir, file));
    if (batch.sources.some((item) => item.buildId === buildId)) for (const item of batch.sources) if (item.buildId !== buildId && item.buildId) batchPeers.add(item.buildId);
  }
  return { reference, batchSweepRequired: [...batchPeers].sort(), note: 'Inspect peers for the same pattern and record each disposition; this list does not assert that they passed.' };
}
