import { workspaceOverlay } from './workspace-storage.mjs';
// Preview-only digest cache. Every pass enumerates files and checks filesystem
// identity; lifecycle verification continues to use uncached byte manifests.
import path from 'node:path';
import { lstatSync } from 'node:fs';
import { readdir, lstat, readFile, realpath } from 'node:fs/promises';
import { CANONICAL_ROOTS, inside, bytesDigest, isSnapshotCachePath } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';

export function createPreviewManifest() {
  const cache = new Map();
  let hashedFiles = 0;
  const identity = (s) => `${s.dev}:${s.ino}:${s.size}:${s.mtimeNs}:${s.ctimeNs}`;
  async function manifest(root, roots = CANONICAL_ROOTS) {
    const files = new Map();
    async function visit(relative) {
      if (isSnapshotCachePath(relative)) return;
      const file = inside(root, relative);
      const info = await lstat(file).catch((error) => { if (error.code !== 'ENOENT') throw error; });
      if (!info) return;
      if (info.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${relative}`);
      if (info.isDirectory()) await directory(relative);
      else if (info.isFile()) files.set(relative, file);
    }
    async function directory(relative) {
      for (const item of await readdir(inside(root, relative), { withFileTypes: true })) {
        const name = `${relative}/${item.name}`;
        if (isSnapshotCachePath(name)) continue;
        if (item.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${name}`);
        if (item.isDirectory()) await directory(name);
        else if (item.isFile()) files.set(name, path.resolve(root, name));
      }
    }
    for (const relative of roots) await visit(relative);
    // A compacted workspace reads unchanged files from its shared base. Cache
    // them under the base path, so every Build on one base hashes it once.
    const overlay = workspaceOverlay(root), inherited = new Set();
    for (const relative of overlay?.files.keys() || []) {
      if (files.has(relative) || !roots.some((entry) => relative === entry || relative.startsWith(entry + '/'))) continue;
      files.set(relative, inside(overlay.baseRoot, relative)); inherited.add(relative);
    }
    const baseReal = inherited.size ? await realpath(overlay.baseRoot) : null;
    const ordered = [...files.keys()].sort(), entries = new Array(ordered.length);
    let cursor = 0;
    const reads = await Promise.allSettled(Array.from({ length: Math.min(16, ordered.length) }, async () => {
      while (cursor < ordered.length) {
        const index = cursor++, relative = ordered[index], file = files.get(relative);
        const before = await lstat(file, { bigint: true });
        if (!before.isFile()) throw new Error(`Preview input changed type: ${relative}`);
        const stamp = identity(before), prior = cache.get(file);
        let digest = prior?.stamp === stamp ? prior.digest : null;
        if (!digest) {
          if (inherited.has(relative) && await realpath(file) !== path.join(baseReal, relative)) throw new Error('Inherited file may not follow symlinks');
          digest = bytesDigest(await readFile(file)); hashedFiles++;
          if (identity(await lstat(file, { bigint: true })) !== stamp) throw new Error(`Preview input changed while read: ${relative}`);
          cache.set(file, { stamp, digest });
        }
        entries[index] = { path: relative, digest };
      }
    }));
    const failed = reads.find((result) => result.status === 'rejected');
    if (failed) throw failed.reason;
    // Bound memory even when many historical workspaces are inspected.
    if (cache.size > 200000) cache.clear();
    return { entries, digest: digestValue(entries) };
  }
  // True only while a file keeps the identity this cache last hashed. Watch
  // events for such a file (APFS clones report one per source) change nothing.
  manifest.unchanged = (file) => {
    const prior = cache.get(path.resolve(file));
    if (!prior) return false;
    try { return identity(lstatSync(file, { bigint: true })) === prior.stamp; } catch { return false; }
  };
  manifest.statistics = () => ({ hashedFiles, cachedFiles: cache.size });
  return manifest;
}
