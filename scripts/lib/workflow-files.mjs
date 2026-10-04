import { workspaceOverlay, readInside, resolveWorkspaceRead } from './workspace-storage.mjs';
import { encodeRecord, decodeRecord } from './record-storage.mjs';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile, rename, rm, copyFile, lstat, open } from 'node:fs/promises';
import { existsSync, constants } from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { digestValue } from './dataset-build.mjs';

const execFileAsync = promisify(execFile);

export const CANONICAL_ROOTS = Object.freeze(['index.html', 'src', 'data', 'vendor', 'input/icon-crop-specs']);
export const TOOL_ROOTS = Object.freeze(['scripts', 'tests', 'docs', 'AGENTS.md', 'CONTEXT.md', 'README.md', 'input/README.md', 'package.json', 'pnpm-lock.yaml', '.gitignore', '.githooks', '.node-version', '.nvmrc']);
export function inside(root, relative) {
  const result = path.resolve(root, relative);
  if (!relative || path.isAbsolute(relative) || result === path.resolve(root) || !result.startsWith(path.resolve(root) + path.sep)) throw new Error(`Path outside workspace: ${relative}`);
  return result;
}
export const bytesDigest = (bytes) => `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
// These host-generated files never travel with Git and are not authored inputs.
// Keep ordinary and cached preview manifests on the same exclusion policy.
export const isSnapshotCachePath = (relative) => relative.split('/').some((name) =>
  name === '.DS_Store' || name === '__pycache__' || /\.py[co]$/.test(name)
);
export async function filesUnder(root, roots) {
  const files = [];
  async function visit(relative) {
    if (isSnapshotCachePath(relative)) return;
    const file = inside(root, relative);
    if (!existsSync(file)) return;
    const stat = await lstat(file);
    if (stat.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${relative}`);
    if (stat.isDirectory()) {
      await directory(relative);
    } else if (stat.isFile()) files.push(relative);
  }
  async function directory(relative) {
    for (const item of await readdir(inside(root, relative), { withFileTypes: true })) {
      const name = `${relative}/${item.name}`;
      if (isSnapshotCachePath(name)) continue;
      if (item.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${name}`);
      if (item.isDirectory()) await directory(name);
      else if (item.isFile()) files.push(name);
    }
  }
  for (const entry of roots) await visit(entry);
  for (const file of workspaceOverlay(root)?.files.keys() || []) if (roots.some((entry) => file === entry || file.startsWith(entry + '/'))) files.push(file);
  return [...new Set(files)].sort();
}
export async function fileManifest(root, roots = CANONICAL_ROOTS) {
  const files = await filesUnder(root, roots);
  const entries = new Array(files.length);
  let cursor = 0;
  const reads = await Promise.allSettled(Array.from({ length: Math.min(16, files.length) }, async () => {
    while (cursor < files.length) {
      const index = cursor++, file = files[index];
      entries[index] = { path: file, digest: bytesDigest(await readFile(readInside(root, file))) };
    }
  }));
  const failed = reads.find((result) => result.status === 'rejected');
  if (failed) throw failed.reason;
  return { entries, digest: digestValue(entries) };
}
const copyCounts = { clonedFiles: 0, fallbackFiles: 0 };
export const copyStatistics = () => ({ ...copyCounts });
export async function copyFiles(from, to, files) {
  for (const file of files) {
    const destination = inside(to, file);
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(readInside(from, file), destination, constants.COPYFILE_FICLONE);
  }
}
// Node's COPYFILE_FICLONE does not clone on macOS (a full byte copy was
// measured), so whole-tree copies use APFS clonefile(2) through `cp -c`: a
// clone costs no data blocks until one side changes. Other platforms, or a
// batch that cannot be cloned, fall back to the ordinary byte copy.
export async function cloneFiles(from, to, files) {
  if (process.platform !== 'darwin') { copyCounts.fallbackFiles += files.length; return copyFiles(from, to, files); }
  const groups = new Map();
  for (const file of files) {
    const directory = path.dirname(inside(to, file));
    if (!groups.has(directory)) groups.set(directory, []);
    groups.get(directory).push(file);
  }
  const batches = [];
  for (const [directory, group] of groups) {
    for (let index = 0; index < group.length; index += 200) batches.push([directory, group.slice(index, index + 200)]);
  }
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(8, batches.length) }, async () => {
    while (cursor < batches.length) {
      const [directory, batch] = batches[cursor++];
      await mkdir(directory, { recursive: true });
      try { await execFileAsync('/bin/cp', ['-c', ...batch.map((file) => readInside(from, file)), `${directory}/`]); copyCounts.clonedFiles += batch.length; }
      catch { copyCounts.fallbackFiles += batch.length; await copyFiles(from, to, batch); }
    }
  }));
}
export async function syncTree(root, files) {
  const directories = new Set([root]);
  for (const relative of files) {
    const file = inside(root, relative);
    const handle = await open(file, 'r');
    try { await handle.sync(); } finally { await handle.close(); }
    let directory = path.dirname(file);
    while (directory.startsWith(root + path.sep)) { directories.add(directory); directory = path.dirname(directory); }
  }
  for (const directory of [...directories].sort((a, b) => b.length - a.length)) {
    const handle = await open(directory, 'r');
    try { await handle.sync(); } finally { await handle.close(); }
  }
}
export async function atomicJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  const temporary = `${file}.${randomUUID()}.tmp`;
  let handle;
  try {
    handle = await open(temporary, 'wx');
    await handle.writeFile(`${JSON.stringify(await encodeRecord(file, value), null, 2)}\n`);
    await handle.sync();
    await handle.close(); handle = null;
    await rename(temporary, file);
    // fsync the containing directory makes the committed rename durable.
    const directory = await open(path.dirname(file), 'r');
    try { await directory.sync(); } finally { await directory.close(); }
  } finally {
    await handle?.close();
    await rm(temporary, { force: true });
  }
}
export async function readJson(file) { return decodeRecord(file, JSON.parse(await readFile(resolveWorkspaceRead(file), 'utf8'))); }
export async function withFileLock(file, work, { timeoutMs = 30000, pollMs = 40 } = {}) {
  await mkdir(path.dirname(file), { recursive: true });
  const started = Date.now();
  let handle;
  while (!handle) {
    try { handle = await open(file, 'wx'); }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      if (Date.now() - started >= timeoutMs) throw Object.assign(new Error(`Timed out waiting for ${file}; inspect its owner before recovery`), { code: 'WORKFLOW_LOCKED' });
      await new Promise((resolve) => setTimeout(resolve, pollMs));
    }
  }
  const token = randomUUID();
  try {
    await handle.writeFile(JSON.stringify({ token, pid: process.pid, startedAt: new Date().toISOString() }));
    await handle.sync();
    return await work();
  } finally {
    await handle.close();
    if ((await readJson(file).catch(() => null))?.token === token) await rm(file, { force: true });
  }
}

// Never steal on elapsed time: render/verification operations can be long.
export async function recoverFileLock(file, expectedToken) {
  return withFileLock(`${file}.recovery`, async () => {
    const owner = await readJson(file);
    if (!expectedToken || owner.token !== expectedToken || !Number.isInteger(owner.pid)) throw new Error('Recovery requires the exact lock token and a recorded PID');
    try { process.kill(owner.pid, 0); throw new Error('Lock owner is still alive; recovery refused'); }
    catch (error) { if (error.code !== 'ESRCH') throw error; }
    if ((await readJson(file)).token !== expectedToken) throw new Error('Lock owner changed');
    await rm(file);
    return { recovered: true, owner };
  });
}

export async function freezeSnapshot(snapshot, root) {
  // A published tree is already immutable and digest-verified by
  // canonicalSnapshot; only the mutable working tree needs a frozen copy.
  if (snapshot.published) return snapshot;
  const destination = inside(root, `output/workflow-bases/${snapshot.digest.slice(7)}`);
  if (!existsSync(destination)) {
    const temporary = `${destination}.${randomUUID()}.tmp`;
    try {
      await mkdir(temporary, { recursive: true });
      await cloneFiles(snapshot.root, temporary, snapshot.entries.map((entry) => entry.path));
      if ((await fileManifest(temporary)).digest !== snapshot.digest) throw new Error('Base changed during snapshot copy; retry with a stable base');
      try { await rename(temporary, destination); }
      catch (error) { if (!['EEXIST', 'ENOTEMPTY'].includes(error.code)) throw error; }
    } finally { await rm(temporary, { recursive: true, force: true }); }
  }
  if ((await fileManifest(destination)).digest !== snapshot.digest) throw new Error('Immutable workflow base changed');
  return { ...snapshot, root: destination };
}
