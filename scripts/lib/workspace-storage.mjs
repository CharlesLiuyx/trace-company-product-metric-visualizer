// Sparse at rest, ordinary writable files while authoring. Shared files are
// resolved only for reads; a write path must never point into the base tree.
import path from 'node:path';
import { existsSync, readFileSync, statSync, realpathSync } from 'node:fs';
import { readFile, mkdir, rm, mkdtemp, readdir, link } from 'node:fs/promises';
import { digestValue } from './dataset-build.mjs';
import { cloneFiles, atomicJson, readJson, fileManifest, bytesDigest, inside } from './workflow-files.mjs';

export const WORKSPACE_STORAGE_PROTOCOL = 'workspace-storage/v1';
const relative = 'output/workflow/storage.json';
const cache = new Map();
function baseDirectory(root, base) {
  const match = /^(.*)\/output\/builds\/build-[a-z0-9-]+\/workspace$/.exec(path.resolve(root));
  if (!match || !/^sha256:[a-f0-9]{64}$/.test(base?.digest || '')) throw new Error('Invalid workspace storage identity');
  const repo = match[1], folder = path.resolve(base.root);
  const baseMatch = /^(.*)\/output\/(workflow-bases|publications\/trees)\/([a-f0-9]{64})$/.exec(folder);
  if (!baseMatch || baseMatch[3] !== base.digest.slice(7) || realpathSync(baseMatch[1]) !== realpathSync(repo)) throw new Error('Workspace base is outside immutable storage');
  if (realpathSync(folder) !== path.join(realpathSync(repo), 'output', baseMatch[2], baseMatch[3])) throw new Error('Workspace base may not follow symlinks');
  return folder;
}
export function workspaceOverlay(root) {
  root = path.resolve(root);
  const file = path.join(root, relative);
  if (!existsSync(file)) { cache.delete(root); return null; }
  const stamp = (p) => { const s = statSync(p, { bigint: true }); return `${s.ino}:${s.size}:${s.mtimeNs}:${s.ctimeNs}`; };
  const signature = stamp(file), prior = cache.get(root);
  if (prior?.signature === signature && prior.baseSignature === stamp(prior.baseFile)) return prior;
  const meta = JSON.parse(readFileSync(file, 'utf8'));
  if (meta.protocol !== WORKSPACE_STORAGE_PROTOCOL || !Array.isArray(meta.inherited)) throw new Error('Invalid workspace storage descriptor');
  const baseRoot = baseDirectory(root, meta.base), baseFile = path.join(baseRoot, '.trace-snapshot.json');
  if (realpathSync(baseFile) !== path.join(realpathSync(baseRoot), '.trace-snapshot.json')) throw new Error('Shared base manifest may not follow symlinks');
  const entries = JSON.parse(readFileSync(baseFile, 'utf8'));
  if (!Array.isArray(entries) || digestValue(entries) !== meta.base.digest) throw new Error('Shared base manifest changed');
  const files = new Map();
  for (const index of meta.inherited) {
    if (!Number.isInteger(index) || !entries[index] || files.has(entries[index].path)) throw new Error('Invalid inherited workspace entry');
    const entry = entries[index]; inside(root, entry.path); inside(baseRoot, entry.path);
    if (!/^(?:index\.html|(?:data|src|vendor)\/.+|input\/icon-crop-specs\/.+)$/.test(entry.path) || entry.path.split('/').includes('..')) throw new Error('Invalid inherited workspace path');
    files.set(entry.path, entry);
  }
  const result = { signature, baseSignature: stamp(baseFile), baseFile, baseRoot, files, meta };
  if (cache.size > 256) cache.clear();
  cache.set(root, result); return result;
}
export function readInside(root, file) {
  const local = inside(root, file);
  const overlay = workspaceOverlay(root);
  if (!overlay || !overlay.files.has(file) || existsSync(local)) return local;
  const inherited = inside(overlay.baseRoot, file);
  if (realpathSync(inherited) !== path.join(realpathSync(overlay.baseRoot), file)) throw new Error('Inherited file may not follow symlinks');
  return inherited;
}
export function resolveWorkspaceRead(file) {
  const match = /^(.*\/output\/builds\/build-[a-z0-9-]+\/workspace)\/(.+)$/.exec(path.resolve(file));
  return match ? readInside(match[1], match[2]) : file;
}
// Caller holds the Build operation lock and has checked Session ownership.
export async function compactWorkspace(root, { assetsOnly = false } = {}) {
  const base = await readJson(path.join(root, 'output/workflow/base.json'));
  const baseRoot = baseDirectory(root, base);
  if ((await fileManifest(baseRoot)).digest !== base.digest) throw new Error('Cannot compact against a changed base');
  const snapshotFile = path.join(baseRoot, '.trace-snapshot.json');
  if (!existsSync(snapshotFile)) await atomicJson(snapshotFile, base.entries);
  else if (digestValue(JSON.parse(await readFile(snapshotFile, 'utf8'))) !== base.digest) throw new Error('Shared base manifest changed');
  const current = new Map((await fileManifest(root)).entries.map((e) => [e.path, e.digest]));
  const alreadyInherited = workspaceOverlay(root)?.files;
  const inherited = [], removals = [];
  for (let i = 0; i < base.entries.length; i++) {
    const e = base.entries[i];
    if (assetsOnly && !e.path.startsWith('data/assets/icon-references/') && !alreadyInherited?.has(e.path)) continue;
    if (current.get(e.path) !== e.digest) continue;
    inherited.push(i);
    const file = inside(root, e.path);
    if (existsSync(file)) removals.push({ file, digest: e.digest });
  }
  // Install the complete read view first. Interrupted pruning leaves harmless
  // same-byte local files, never a missing logical file.
  await atomicJson(path.join(root, relative), { protocol: WORKSPACE_STORAGE_PROTOCOL, base: { root: baseRoot, digest: base.digest }, inherited });
  let bytes = 0;
  for (const { file, digest } of removals) {
    const value = await readFile(file);
    if (bytesDigest(value) !== digest) throw new Error('Workspace changed during compaction; local edit retained');
    bytes += value.length; await rm(file);
  }
  return { mode: assetsOnly ? 'shared-assets' : 'shared-base', inheritedFiles: inherited.length, removedFiles: removals.length, logicalBytesSaved: bytes };
}
export async function materializeWorkspace(root) {
  const overlay = workspaceOverlay(root);
  if (!overlay) return { materialized: 0 };
  const directory = path.join(root, 'output/workflow');
  // Caller owns the operation lock, so leftovers belong to interrupted calls.
  for (const name of await readdir(directory)) if (name.startsWith('.materialize-')) await rm(path.join(directory, name), { recursive: true, force: true });
  const scratch = await mkdtemp(path.join(directory, '.materialize-'));
  let materialized = 0;
  try {
    const missing = [...overlay.files.keys()].filter((file) => !existsSync(inside(root, file)));
    for (const file of missing) readInside(root, file); // Reject redirected base paths before copying.
    await cloneFiles(overlay.baseRoot, scratch, missing);
    for (const file of missing) {
      const staged = inside(scratch, file), destination = inside(root, file);
      if (bytesDigest(await readFile(staged)) !== overlay.files.get(file).digest) throw new Error('Inherited file changed; materialization refused');
      await mkdir(path.dirname(destination), { recursive: true });
      // Link only this private clone, never the shared base. Exclusive creation
      // preserves an edit which appeared after enumeration; scratch is removed.
      try { await link(staged, destination); materialized++; }
      catch (error) { if (error.code !== 'EEXIST') throw error; }
    }
    await rm(path.join(root, relative)); cache.delete(path.resolve(root));
    return { materialized };
  } finally { await rm(scratch, { recursive: true, force: true }); }
}
