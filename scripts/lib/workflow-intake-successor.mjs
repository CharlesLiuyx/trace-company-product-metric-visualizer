// Narrow recovery for an unaccepted intake made before operating-card support.
// The original classification and receipt chain remain immutable.
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, symlink, readFile } from 'node:fs/promises';
import { createDatasetBuild } from './dataset-build.mjs';
import { createSourceClassification } from './source-coverage.mjs';
import { readDatasetBuild, initializeDatasetBuild, recordDatasetBuildCommand, recordBuildObject } from './dataset-build-store.mjs';
import { assertBuildSession, acquireBuildSession } from './workflow-session.mjs';
import { workflowOptions, canonicalSnapshot } from './asset-workflow.mjs';
import { adoptApplication } from './workflow-application.mjs';
import { prepareWorkspaceTools } from './workspace-tools.mjs';
import { retireBuildPreview } from './workflow-local-view.mjs';
import { inside, atomicJson, readJson, withFileLock, freezeSnapshot, copyFiles, bytesDigest } from './workflow-files.mjs';

export function successorClassification(build, facts) {
  const restartable = new Set(['INTAKED', 'AUTHORED']);
  if (!restartable.has(build.state) || build.receipts.some(r => !restartable.has(r.state)) || build.review?.status === 'accepted') throw new Error('Intake successor requires a never-accepted Build');
  if (facts?.protocol !== 'source-facts/v1' || facts.questions?.length || !facts.signals) throw new Error('Complete resolved Source facts are required');
  const prior = build.sourceClassification;
  const next = createSourceClassification({ ...prior, classificationDigest: undefined, signals: facts.signals });
  const expected = [...prior.signals, 'supplemental-operating-metrics'].sort();
  if (build.adapter !== 'income-statement' || prior.signals.includes('supplemental-operating-metrics') || JSON.stringify(next.signals) !== JSON.stringify(expected)) throw new Error('Recovery only adds the supplemental operating metrics signal to the same Adapter');
  return next;
}
export async function recoverIntakeSuccessor(buildId, facts, root) {
  const opts = workflowOptions(root), directory = inside(root, `output/builds/${buildId}`);
  return withFileLock(path.join(root, 'output/workflow-intake.lock'), () => withFileLock(path.join(directory, '.workflow-operation.lock'), async () => {
    const done = path.join(directory, 'successor.json');
    const build = await readDatasetBuild(buildId, opts);
    const classification = successorClassification(build, facts);
    const lease = await assertBuildSession(root, buildId, { allowSuccessorRecovery: true });
    if (!lease) throw new Error('Recovery requires an owned Session');
    const source = build.sources[0];
    if (bytesDigest(await readFile(inside(root, source.processingUri))) !== source.digest) throw new Error('Working Source bytes changed');
    if (existsSync(done)) {
      const result = await readJson(done);
      await retireBuildPreview(root, buildId);
      await atomicJson(inside(root, `output/source-claims/${source.digest.slice(7)}.json`), { key: build.key, buildId: result.buildId, sourceDigest: source.digest });
      return result;
    }
    const journal = path.join(directory, 'intake-successor.pending.json');
    const request = existsSync(journal) ? await readJson(journal) : { buildId: `build-${randomUUID()}`, classificationDigest: classification.classificationDigest };
    if (request.classificationDigest !== classification.classificationDigest) throw new Error('Recovery request differs from its pending journal');
    await atomicJson(journal, request);
    const nextId = request.buildId;
    const nextDir = inside(root, `output/builds/${nextId}`);
    const snapshot = await freezeSnapshot(await canonicalSnapshot(root), root);
    let next;
    if (existsSync(path.join(nextDir, 'manifest.json'))) next = await readDatasetBuild(nextId, opts);
    else {
      next = createDatasetBuild({ key: build.key, adapter: build.adapter, sources: build.sources, sourceClassification: classification, baseCanonicalDigest: snapshot.digest }, { id: () => nextId });
      await initializeDatasetBuild(next, opts);
    }
    if (next.baseCanonicalDigest !== snapshot.digest) throw new Error('Canonical snapshot changed during recovery; preserve the journal for explicit recovery');
    const session = await acquireBuildSession(root, nextId, lease.owner);
    const authoringRoot = `output/builds/${nextId}/workspace`, workspace = inside(root, authoringRoot);
    if (!next.authoringRoot) {
      await mkdir(workspace, { recursive: true });
      await copyFiles(snapshot.root, workspace, snapshot.entries.map(e => e.path));
      await adoptApplication(root, workspace);
      await prepareWorkspaceTools(root, workspace);
      await copyFiles(root, workspace, [source.processingUri]);
      await mkdir(path.join(workspace, 'output'), { recursive: true });
      if (!existsSync(path.join(workspace, 'output/builds'))) await symlink(opts.buildRoot, path.join(workspace, 'output/builds'), 'dir');
      await atomicJson(path.join(workspace, 'output/workflow/base.json'), snapshot);
      await atomicJson(path.join(workspace, 'output/workflow/source-facts.json'), facts);
      next = await recordDatasetBuildCommand(nextId, { type: 'isolate-workspace', expectedRevision: next.revision, authoringRoot }, { ...opts, session: session.owner, generation: session.generation });
    }
    const result = { buildId: nextId, predecessorBuildId: buildId, workspace, session, sourceDigest: source.digest, oldClassificationDigest: build.sourceClassification.classificationDigest, classificationDigest: classification.classificationDigest, reason: 'Supplemental operating card identified in the complete Source; original intake retained', next: 'prepare' };
    await recordBuildObject(nextId, 'intake-predecessor', result, { ...opts, session: session.owner, generation: session.generation });
    // This single marker commits the handoff; old writers and intake discovery
    // consult it. Source bytes never leave processing, even on interruption.
    await atomicJson(done, result);
    await retireBuildPreview(root, buildId);
    await atomicJson(inside(root, `output/source-claims/${source.digest.slice(7)}.json`), { key: build.key, buildId: nextId, sourceDigest: source.digest });
    return result;
  }));
}
