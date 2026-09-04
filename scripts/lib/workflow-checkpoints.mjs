import { readBuildObject, recordBuildObject, DEFAULT_BUILD_ROOT } from './dataset-build-store.mjs';
import { digestValue } from './dataset-build.mjs';
import { SWEEP_STAGES } from './fidelity-stages.mjs';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { readJson, inside, bytesDigest, atomicJson } from './workflow-files.mjs';
import { CHECKPOINT_PROTOCOL } from './workflow-dependencies.mjs';

async function durableCheckpoints(buildId, options) {
  const directory = path.join(options.buildRoot || DEFAULT_BUILD_ROOT, buildId, 'objects/fidelity-checkpoint');
  if (!existsSync(directory)) return [];
  const records = await Promise.all((await readdir(directory)).filter((name) => /^[a-f0-9]{64}\.json$/.test(name)).map((name) => readBuildObject(buildId, { kind: 'fidelity-checkpoint', digest: `sha256:${name.slice(0, -5)}` }, options)));
  return records.sort((a, b) => (a.sequence || 0) - (b.sequence || 0) || a.recordedAt.localeCompare(b.recordedAt));
}

export async function recordCheckpoint(build, plan, input, options) {
  if (plan.checkpointProtocol !== CHECKPOINT_PROTOCOL || !SWEEP_STAGES.includes(input.stage)) throw new Error('Checkpoint requires an applicable versioned stage');
  if (!['frozen', 'reopened'].includes(input.status) || !input.reviewer?.trim() || !input.note?.trim()) throw new Error('Checkpoint needs status, reviewer and a concrete review note');
  const prior = await durableCheckpoints(build.buildId, options);
  const sequence = Math.max(0, ...prior.map((item) => item.sequence || 0)) + 1;
  if (input.status === 'reopened') {
    const reference = await recordBuildObject(build.buildId, 'fidelity-checkpoint', {
    protocol: CHECKPOINT_PROTOCOL, buildId: build.buildId, stage: input.stage, status: input.status,
    reviewer: input.reviewer, note: input.note, inputDigest: plan.dependencyScopes[input.stage],
    evidence: [], sequence, recordedAt: new Date().toISOString(),
    }, options);
    if (build.authoringRoot) await atomicJson(inside(options.projectRoot, 'output/workflow/review-context.json'), { kind: 'stage-reopened', reference });
    return reference;
  }
  if (input.status === 'frozen') {
    for (const stage of SWEEP_STAGES.slice(0, SWEEP_STAGES.indexOf(input.stage))) {
      const latest = prior.filter((value) => value.stage === stage).at(-1);
      if (latest?.status !== 'frozen' || latest.inputDigest !== plan.dependencyScopes[stage]) throw new Error(`Freeze ${stage} against current inputs first`);
    }
  }
  if (!input.evidenceManifests?.length) throw new Error('Checkpoint must bind recorded visual evidence');
  const languages = new Set();
  const evidence = [];
  for (const locator of input.evidenceManifests) {
    const manifest = await readJson(inside(options.projectRoot, locator));
    const authored = build.receipts.filter((receipt) => receipt.state === 'AUTHORED').at(-1)?.payload;
    if (manifest.identity?.buildId !== build.buildId || manifest.identity?.dataset !== build.key || manifest.identity?.authoredDigest !== authored?.snapshotDigest || manifest.identity?.verificationPlanDigest !== plan.planDigest || manifest.archive?.focus !== `${input.stage}-sweep` || manifest.status !== 'evidence-ready') throw new Error('Checkpoint evidence is foreign, stale or from another stage');
    const { evidenceFromManifest } = await import('./dataset-build-closeout.mjs');
    await evidenceFromManifest(locator, { buildId: build.buildId, key: build.key, authoredDigest: authored.snapshotDigest, verificationPlanDigest: plan.planDigest, projectRoot: options.projectRoot });
    if (!manifest.artifacts?.metrics || !manifest.artifacts?.candidate) throw new Error('Checkpoint has no rendered evidence');
    const artifactDigests = {};
    for (const [kind, file] of Object.entries(manifest.artifacts)) artifactDigests[kind] = bytesDigest(await readFile(inside(options.projectRoot, file)));
    languages.add(manifest.identity.language);
    evidence.push({ locator, digest: digestValue(manifest), artifactDigests });
  }
  if (input.stage === 'polish-l10n' && plan.requiredLocales.some((locale) => !languages.has(locale))) throw new Error('Polish checkpoint requires evidence for every required locale');
  const value = { protocol: CHECKPOINT_PROTOCOL, buildId: build.buildId, stage: input.stage, status: input.status, reviewer: input.reviewer, note: input.note, inputDigest: plan.dependencyScopes[input.stage], evidence, sequence, recordedAt: new Date().toISOString() };
  return recordBuildObject(build.buildId, 'fidelity-checkpoint', value, options);
}
export async function validateCheckpointClosure(build, plan, references, options) {
  // Read the authoritative history so an old caller cannot omit a reopen.
  const records = await durableCheckpoints(build.buildId, options);
  const supplied = new Set(references.map((reference) => reference.digest));
  for (const stage of SWEEP_STAGES) {
    const latest = records.filter((record) => record.stage === stage).at(-1);
    if (latest?.protocol !== CHECKPOINT_PROTOCOL || latest.buildId !== build.buildId || latest.status !== 'frozen' || latest.inputDigest !== plan.dependencyScopes[stage]) throw new Error(`Stage ${stage} is not frozen against its current dependencies`);
    if (!supplied.has(digestValue(latest))) throw new Error(`Review must cite the latest ${stage} checkpoint`);
    for (const entry of latest.evidence) {
      const manifest = await readJson(inside(options.projectRoot, entry.locator));
      if (digestValue(manifest) !== entry.digest || manifest.identity?.buildId !== build.buildId) throw new Error(`Checkpoint evidence changed: ${entry.locator}`);
      const receipt = build.receipts.find((receipt) => receipt.state === 'AUTHORED' && receipt.payload.snapshotDigest === manifest.identity.authoredDigest);
      if (receipt?.payload.verificationPlan?.dependencyScopes?.[stage] !== latest.inputDigest) throw new Error('Checkpoint lacks matching historical dependency proof');
      for (const [kind, expected] of Object.entries(entry.artifactDigests)) if (bytesDigest(await readFile(inside(options.projectRoot, manifest.artifacts[kind]))) !== expected) throw new Error('Checkpoint artifact changed');
    }
  }
}
