#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { realpathSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { acquireBuildSession, assertBuildSession, sessionIdentity } from './lib/workflow-session.mjs';
import { WORKFLOW_ACTIONS } from './lib/workflow-contract.mjs';
import { rootDir } from './lib/project.mjs';
import { readJson, atomicJson, inside, recoverFileLock } from './lib/workflow-files.mjs';
import { startAsset, prepareAsset, continueAsset, checkpointAsset, reviewAsset, sealAsset, showAsset } from './lib/asset-workflow.mjs';
import { renderAssetReview } from './lib/workflow-review.mjs';

export function parseWorkflowArgs(args) {
  const values = {}; const positional = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--') continue;
    if (args[i] === '--json') { values.json = true; continue; }
    if (args[i].startsWith('--')) {
      if (!['--source', '--key', '--facts', '--input', '--availability', '--concurrency', '--session', '--generation', '--lock', '--token'].includes(args[i]) || !args[i + 1] || args[i + 1].startsWith('--')) throw new Error(`Invalid option: ${args[i]}`);
      values[args[i].slice(2)] = args[++i];
    } else positional.push(args[i]);
  }
  return { command: positional[0], buildId: positional[1], ...values };
}
export async function main(args = process.argv.slice(2)) {
  const input = parseWorkflowArgs(args);
  if (input.session) process.env.TRACE_SESSION_ID = input.session;
  if (input.generation) process.env.TRACE_SESSION_GENERATION = input.generation;
  if (!Object.hasOwn(WORKFLOW_ACTIONS, input.command)) throw new Error(`Supported actions: ${Object.keys(WORKFLOW_ACTIONS).join(', ')}`);
  let result;
  if (input.command === 'recover-lock') {
    if (!/^(?:output\/(?:workflow-intake|source-relocation)\.lock|output\/publications\/\.publish\.lock|output\/builds\/build-[a-z0-9-]+\/\.(?:workflow-operation|record|session-write)\.lock)$/.test(input.lock || '')) throw new Error('Recovery only accepts known workflow lock paths');
    result = await recoverFileLock(inside(rootDir, input.lock), input.token);
  } else if (input.command === 'start') {
    if (!input.source || !input.key || !input.facts) throw new Error('start requires --source, --key and --facts');
    process.env.TRACE_SESSION_ID ||= sessionIdentity() || `session-${randomUUID()}`;
    result = await startAsset({ source: input.source, key: input.key, availability: input.availability, facts: await readJson(path.resolve(input.facts)), session: process.env.TRACE_SESSION_ID });
  } else if (input.command === 'session' || input.command === 'release-session' || input.command === 'recover-session') {
    const { buildContext } = await import('./lib/asset-workflow.mjs');
    await buildContext(input.buildId);
    result = await acquireBuildSession(rootDir, input.buildId, sessionIdentity(), { expectedGeneration: input.generation, release: input.command === 'release-session', recover: input.command === 'recover-session' });
  } else if (input.command === 'prepare') result = await prepareAsset(input.buildId, input.facts ? await readJson(path.resolve(input.facts)) : null);
  else if (input.command === 'continue') result = await continueAsset(input.buildId);
  else if (input.command === 'show') result = await showAsset(input.buildId);
  else if (input.command === 'report') result = await renderAssetReview(input.buildId);
  else if (input.command === 'seal') result = await sealAsset(input.buildId);
  else if (input.command === 'checkpoint' || input.command === 'review') {
    if (!input.input) throw new Error(`${input.command} requires --input`);
    result = await (input.command === 'checkpoint' ? checkpointAsset : reviewAsset)(input.buildId, await readJson(path.resolve(input.input)));
  } else if (input.command === 'batch') {
    const { recordAssetBatch } = await import('./lib/workflow-batch.mjs');
    result = await recordAssetBatch(await readJson(path.resolve(input.input)), { concurrency: Number(input.concurrency || 2) });
  } else if (input.command === 'feedback') {
    const { recordWorkflowFeedback } = await import('./lib/workflow-feedback.mjs');
    const { buildContext } = await import('./lib/asset-workflow.mjs');
    await assertBuildSession(rootDir, input.buildId);
    result = await recordWorkflowFeedback(input.buildId, await readJson(path.resolve(input.input)), await buildContext(input.buildId));
  } else if (input.command === 'assets' || input.command === 'asset-version') {
    const { projectAssetCatalog, recordAssetVersion } = await import('./lib/workflow-assets.mjs');
    const { buildContext } = await import('./lib/asset-workflow.mjs');
    const context = await buildContext(input.buildId);
    if (input.command === 'asset-version' && !context.build.authoringRoot) throw new Error('Asset versions must be recorded in an isolated Build workspace');
    if (input.command === 'asset-version') await assertBuildSession(rootDir, input.buildId);
    result = input.command === 'assets' ? await projectAssetCatalog(context.projectRoot) : await recordAssetVersion(await readJson(path.resolve(input.input)), context.projectRoot);
  } else if (input.command === 'archive-list' || input.command === 'archive') {
    const { processingSourceList, archiveProcessingSources } = await import('./lib/workflow-recovery.mjs');
    result = input.command === 'archive-list' ? await processingSourceList(rootDir, input.buildId ? [input.buildId] : null) : await archiveProcessingSources(await readJson(path.resolve(input.input)));
  } else if (input.command === 'refresh') {
    const { refreshAssetWorkspace } = await import('./lib/workflow-recovery.mjs');
    result = await refreshAssetWorkspace(input.buildId);
  } else throw new Error('Usage: pnpm record:workflow -- start|prepare|continue|show|report|checkpoint|review|seal|batch|refresh [build-id] [options]');
  if (input.json) console.log(JSON.stringify(result, null, 2));
  else {
    console.log(JSON.stringify(result.path ? result : { buildId: result.buildId, workspace: result.workspace, session: result.session, state: result.state, next: result.next, actionRequired: result.actionRequired, ...(!result.buildId ? result : {}) }, null, 2));
    if (result.output) console.log(result.output);
  }
  return result;
}
if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))) main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
