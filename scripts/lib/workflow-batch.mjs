import { sessionIdentity } from './workflow-session.mjs';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { rootDir } from './project.mjs';
import { startAsset } from './asset-workflow.mjs';
import { atomicJson, readJson } from './workflow-files.mjs';

export async function recordAssetBatch(input, { root = rootDir, concurrency = 2 } = {}) {
  if (!Array.isArray(input.sources) || !input.sources.length || !Number.isInteger(concurrency) || concurrency < 1 || concurrency > 4) throw new Error('Batch needs Sources and concurrency 1–4');
  if (new Set(input.sources.map((source) => source.key)).size !== input.sources.length) throw new Error('Duplicate keys in batch');
  const batch = { protocol: 'batch-manifest/v1', batchId: `batch-${randomUUID()}`, createdAt: new Date().toISOString(), sources: [], results: [] };
  const file = path.join(root, 'output/batches', `${batch.batchId}.json`);
  // Membership is durable before execution; this is a task grouping, not an
  // additional lifecycle state or acceptance authority.
  for (const source of input.sources) {
    try {
      const facts = typeof source.facts === 'string' ? await readJson(path.resolve(root, source.facts)) : source.facts;
      batch.sources.push(await startAsset({ ...source, facts, session: source.session || sessionIdentity() || `batch-session-${batch.batchId}` }, root));
    } catch (error) { batch.sources.push({ key: source.key, error: error.message }); }
    await atomicJson(file, batch);
  }
  let cursor = 0;
  async function worker() {
    while (cursor < batch.sources.length) {
      const source = batch.sources[cursor++];
      if (!source.buildId) continue;
      const result = await new Promise((resolve) => {
        const child = spawn(process.execPath, [path.join(root, 'scripts/record-workflow.mjs'), 'continue', source.buildId, '--json', ...(source.session ? ['--session', source.session.owner, '--generation', source.session.generation] : [])], { cwd: root });
        let stdout = '', stderr = '';
        child.stdout.on('data', (chunk) => { stdout += chunk; }); child.stderr.on('data', (chunk) => { stderr += chunk; });
        child.once('error', (error) => resolve({ buildId: source.buildId, error: error.message }));
        child.once('close', (code) => {
          try { resolve({ buildId: source.buildId, exitCode: code, ...(code ? { error: stderr || stdout || `Process exited ${code}` } : { result: JSON.parse(stdout) }) }); }
          catch (error) { resolve({ buildId: source.buildId, exitCode: code, error: `Invalid worker result: ${error.message}` }); }
        });
      });
      batch.results.push(result);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, batch.sources.length) }, worker));
  await atomicJson(file, batch);
  return { ...batch, manifestPath: file };
}
