import path from 'node:path';
import { readFile, rm, mkdir, copyFile, unlink } from 'node:fs/promises';
import { constants, existsSync } from 'node:fs';
import { rootDir } from './project.mjs';
import { buildContext, canonicalSnapshot, prepareAsset, showAsset } from './asset-workflow.mjs';
import { recordDatasetBuildCommand } from './dataset-build-store.mjs';
import { digestValue } from './dataset-build.mjs';
import { fileManifest, filesUnder, copyFiles, TOOL_ROOTS, readJson, inside, atomicJson, bytesDigest, withFileLock } from './workflow-files.mjs';

export async function refreshAssetWorkspace(buildId, root = rootDir) {
  const initial = await buildContext(buildId, root);
  await withFileLock(path.join(initial.buildRoot, initial.build.buildId, '.workflow-operation.lock'), async () => {
    const context = await buildContext(buildId, root);
    if (!context.build.authoringRoot) throw new Error('Refresh requires an isolated Build');
    const oldBase = await readJson(inside(context.projectRoot, 'output/workflow/base.json'));
    const current = await canonicalSnapshot(root);
    const draft = await fileManifest(context.projectRoot);
    const before = new Map(oldBase.entries.map((entry) => [entry.path, entry.digest]));
    const after = new Map(current.entries.map((entry) => [entry.path, entry.digest]));
    const generated = new Set(['index.html', 'data/dataset-manifest.js', 'data/metric-observations.js', 'data/dataset-file-metadata.js', 'data/render-baselines.json', 'data/assets/catalog.json']);
    const owned = draft.entries.filter((entry) => before.get(entry.path) !== entry.digest && !generated.has(entry.path));
    for (const entry of owned) {
      if (!entry.path.startsWith('data/') && !/^input\/icon-crop-specs\/[^/]+\.json$/.test(entry.path)) throw new Error(`Unexpected draft application edit: ${entry.path}`);
      if (after.get(entry.path) !== before.get(entry.path) && after.get(entry.path) !== entry.digest) throw new Error(`Resolve concurrent edits before refreshing: ${entry.path}`);
    }
    const ownedPaths = new Set(owned.map((entry) => entry.path));
    await copyFiles(current.root, context.projectRoot, current.entries.filter((entry) => !ownedPaths.has(entry.path)).map((entry) => entry.path));
    for (const entry of oldBase.entries) if (!after.has(entry.path) && !ownedPaths.has(entry.path)) await rm(inside(context.projectRoot, entry.path), { force: true });
    await copyFiles(root, context.projectRoot, await filesUnder(root, TOOL_ROOTS));
    await atomicJson(inside(context.projectRoot, 'output/workflow/base.json'), current);
    await recordDatasetBuildCommand(buildId, { type: 'rebase-canonical', expectedRevision: context.build.revision, baseCanonicalDigest: current.digest }, context);
  });
  await prepareAsset(buildId, null, root);
  return showAsset(buildId, root);
}
export async function processingSourceList(root = rootDir) {
  const entries = [];
  for (const file of await filesUnder(root, ['input/processing'])) {
    if (!/\.(png|txt|md)$/i.test(file)) continue;
    entries.push({ path: file, digest: bytesDigest(await readFile(inside(root, file))) });
  }
  return { protocol: 'source-relocation-list/v1', entries, digest: digestValue(entries) };
}
export async function archiveProcessingSources(signal, root = rootDir) {
  if (!['review-completed', 'pushed-and-merged-main'].includes(signal?.kind) || signal.confirmed !== true || !signal.operator?.trim()) throw new Error('Archive requires an explicit operator completion signal and confirmed concrete Source list');
  return withFileLock(path.join(root, 'output/source-relocation.lock'), async () => {
    const list = await processingSourceList(root);
    if (signal.sourceListDigest !== list.digest) throw new Error('Processing list changed; enumerate and confirm the current complete list');
    const moved = [];
    // Preflight every destination before moving any entry. The local archive
    // is not canonical Publication; interrupted relocations can be retried.
    for (const item of list.entries) {
      const destination = inside(root, item.path.replace('input/processing/', 'input/processed/'));
      if (existsSync(destination) && bytesDigest(await readFile(destination)) !== item.digest) throw new Error(`Archive collision: ${destination}`);
    }
    for (const item of list.entries) {
      const destination = inside(root, item.path.replace('input/processing/', 'input/processed/'));
      await mkdir(path.dirname(destination), { recursive: true });
      if (!existsSync(destination)) await copyFile(inside(root, item.path), destination, constants.COPYFILE_EXCL);
      if (bytesDigest(await readFile(destination)) !== item.digest) throw new Error('Archive copy changed');
      await unlink(inside(root, item.path)); moved.push(item);
    }
    const receipt = { protocol: 'source-relocation/v1', signal, moved, completedAt: new Date().toISOString() };
    await atomicJson(path.join(root, 'output/source-relocations', `${list.digest.slice(7)}.json`), receipt);
    return receipt;
  });
}
