import { mergeSource } from './workflow-merge.mjs';
import { prepareWorkspaceTools } from './workspace-tools.mjs';
import { assertBuildSession } from './workflow-session.mjs';
import { applicationManifest, adoptApplication, isApplicationPath } from './workflow-application.mjs';
import path from 'node:path';
import { readFile, writeFile, rm, mkdir, copyFile, unlink } from 'node:fs/promises';
import { constants, existsSync } from 'node:fs';
import { rootDir } from './project.mjs';
import { buildContext, canonicalSnapshot, prepareAsset, showAsset } from './asset-workflow.mjs';
import { recordDatasetBuildCommand } from './dataset-build-store.mjs';
import { digestValue } from './dataset-build.mjs';
import { fileManifest, filesUnder, copyFiles, TOOL_ROOTS, readJson, inside, atomicJson, bytesDigest, withFileLock, freezeSnapshot } from './workflow-files.mjs';

export async function refreshAssetWorkspace(buildId, root = rootDir) {
  const initial = await buildContext(buildId, root);
  await withFileLock(path.join(initial.buildRoot, initial.build.buildId, '.workflow-operation.lock'), async () => {
    const context = await buildContext(buildId, root);
    await assertBuildSession(root, buildId);
    if (!context.build.authoringRoot) throw new Error('Refresh requires an isolated Build');
    const oldBase = await readJson(inside(context.projectRoot, 'output/workflow/base.json'));
    const current = await freezeSnapshot(await canonicalSnapshot(root), root);
    const appBaseFile = inside(context.projectRoot, 'output/workflow/application-base.json');
    if (existsSync(appBaseFile)) {
      const draftApp = (await applicationManifest(context.projectRoot)).digest;
      if (draftApp !== (await readJson(appBaseFile)).digest && draftApp !== (await applicationManifest(root)).digest) throw new Error('Draft application code changed; move and review that edit in the root before refresh');
    }
    if ((await fileManifest(oldBase.root)).digest !== oldBase.digest) throw new Error("Historical base is no longer available unchanged; explicit migration is required");
    const draft = await fileManifest(context.projectRoot);
    const before = new Map(oldBase.entries.map((entry) => [entry.path, entry.digest]));
    const after = new Map(current.entries.map((entry) => [entry.path, entry.digest]));
    const generated = new Set(['index.html', 'data/dataset-manifest.js', 'data/metric-observations.js', 'data/dataset-file-metadata.js', 'data/render-baselines.json', 'data/assets/catalog.json']);
    const present = new Set(draft.entries.map((entry) => entry.path));
    for (const entry of oldBase.entries) if (!present.has(entry.path) && !generated.has(entry.path) && !isApplicationPath(entry.path)) throw new Error(`Draft deletion needs an explicit migration: ${entry.path}`);
    const owned = draft.entries.filter((entry) => before.get(entry.path) !== entry.digest && !generated.has(entry.path) && !isApplicationPath(entry.path));
    const merged = new Map();
    for (const entry of owned) {
      if (!entry.path.startsWith('data/') && !/^input\/icon-crop-specs\/[^/]+\.json$/.test(entry.path)) throw new Error(`Unexpected draft application edit: ${entry.path}`);
      if (after.get(entry.path) !== before.get(entry.path) && after.get(entry.path) !== entry.digest) {
        const read = async (folder) => existsSync(inside(folder, entry.path)) ? readFile(inside(folder, entry.path), 'utf8') : null;
        merged.set(entry.path, mergeSource(entry.path, await read(oldBase.root), await read(current.root), await read(context.projectRoot)));
      }
    }
    const ownedPaths = new Set(owned.map((entry) => entry.path));
    await copyFiles(current.root, context.projectRoot, current.entries.filter((entry) => !ownedPaths.has(entry.path)).map((entry) => entry.path));
    for (const entry of oldBase.entries) if (!after.has(entry.path) && !ownedPaths.has(entry.path)) await rm(inside(context.projectRoot, entry.path), { force: true });
    for (const [file, source] of merged) await writeFile(inside(context.projectRoot, file), source);
    await adoptApplication(root, context.projectRoot);
    await prepareWorkspaceTools(root, context.projectRoot);
    await atomicJson(inside(context.projectRoot, 'output/workflow/base.json'), current);
    await recordDatasetBuildCommand(buildId, { type: 'rebase-canonical', expectedRevision: context.build.revision, baseCanonicalDigest: current.digest }, context);
  });
  await prepareAsset(buildId, null, root);
  return showAsset(buildId, root);
}
export async function processingSourceList(root = rootDir, buildIds = null) {
  const selected = buildIds ? new Set((await Promise.all(buildIds.map((id) => buildContext(id, root)))).flatMap(({ build }) => build.sources.map((source) => source.processingUri))) : null;
  const entries = [];
  for (const file of await filesUnder(root, ['input/processing'])) {
    if (!/\.(png|txt|md)$/i.test(file) || selected && !selected.has(file)) continue;
    entries.push({ path: file, digest: bytesDigest(await readFile(inside(root, file))) });
  }
  return { protocol: 'source-relocation-list/v1', entries, digest: digestValue(entries) };
}
export async function archiveProcessingSources(signal, root = rootDir) {
  if (!['review-completed', 'pushed-and-merged-main'].includes(signal?.kind) || signal.confirmed !== true || !signal.operator?.trim()) throw new Error('Archive requires an explicit operator completion signal and confirmed concrete Source list');
  return withFileLock(path.join(root, 'output/source-relocation.lock'), async () => {
    if (!/^sha256:[a-f0-9]{64}$/.test(signal.sourceListDigest || '')) throw new Error('Invalid Source list digest');
    const journalPath = path.join(root, 'output/source-relocations', `${signal.sourceListDigest.slice(7)}.pending.json`);
    const receiptPath = path.join(root, 'output/source-relocations', `${signal.sourceListDigest.slice(7)}.json`);
    if (existsSync(receiptPath)) return readJson(receiptPath);
    let list;
    if (existsSync(journalPath)) list = await readJson(journalPath);
    else if (signal.entries) list = { entries: signal.entries, digest: digestValue(signal.entries) };
    else list = await processingSourceList(root, signal.buildIds || null);
    if (signal.sourceListDigest !== list.digest || digestValue(list.entries) !== list.digest) throw new Error('Processing list changed; confirm the exact selected Source list');
    if (new Set(list.entries.map((item) => item.path)).size !== list.entries.length) throw new Error('Duplicate Source path');
    for (const item of list.entries) {
      if (!/^input\/processing\/[^/]+\.(png|txt|md)$/i.test(item.path) || !/^sha256:[a-f0-9]{64}$/.test(item.digest)) throw new Error('Invalid archive Source');
      const file = inside(root, item.path);
      const archive = inside(root, item.path.replace('input/processing/', 'input/processed/'));
      if (existsSync(file) ? bytesDigest(await readFile(file)) !== item.digest : !existsSync(journalPath) || !existsSync(archive) || bytesDigest(await readFile(archive)) !== item.digest) throw new Error(`Source changed or missing: ${item.path}`);
    }
    await atomicJson(journalPath, list);
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
      await rm(inside(root, item.path), { force: true }); moved.push(item);
    }
    const receipt = { protocol: 'source-relocation/v1', signal, moved, completedAt: new Date().toISOString() };
    await atomicJson(receiptPath, receipt);
    await rm(journalPath, { force: true });
    return receipt;
  });
}
