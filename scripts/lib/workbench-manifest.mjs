// Preview-only digest cache. Every pass enumerates files and checks filesystem
// identity; lifecycle verification continues to use uncached byte manifests.
import path from 'node:path';
import { readdir, lstat, readFile } from 'node:fs/promises';
import { CANONICAL_ROOTS, inside, bytesDigest, isSnapshotCachePath } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';

export function createPreviewManifest() {
  const cache = new Map();
  const identity = (s) => `${s.dev}:${s.ino}:${s.size}:${s.mtimeNs}:${s.ctimeNs}`;
  return async function manifest(root, roots = CANONICAL_ROOTS) {
    const files = new Set();
    async function visit(relative) {
      if (isSnapshotCachePath(relative)) return;
      const file = inside(root, relative);
      const info = await lstat(file).catch((error) => { if (error.code !== 'ENOENT') throw error; });
      if (!info) return;
      if (info.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${relative}`);
      if (info.isDirectory()) await directory(relative);
      else if (info.isFile()) files.add(relative);
    }
    async function directory(relative) {
      for (const item of await readdir(inside(root, relative), { withFileTypes: true })) {
        const name = `${relative}/${item.name}`;
        if (isSnapshotCachePath(name)) continue;
        if (item.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${name}`);
        if (item.isDirectory()) await directory(name);
        else if (item.isFile()) files.add(name);
      }
    }
    for (const relative of roots) await visit(relative);
    const ordered = [...files].sort(), entries = new Array(ordered.length);
    let cursor = 0;
    const reads = await Promise.allSettled(Array.from({ length: Math.min(16, ordered.length) }, async () => {
      while (cursor < ordered.length) {
        const index = cursor++, relative = ordered[index], file = path.resolve(root, relative);
        const before = await lstat(file, { bigint: true });
        if (!before.isFile()) throw new Error(`Preview input changed type: ${relative}`);
        const stamp = identity(before), prior = cache.get(file);
        let digest = prior?.stamp === stamp ? prior.digest : null;
        if (!digest) {
          digest = bytesDigest(await readFile(file));
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
  };
}
