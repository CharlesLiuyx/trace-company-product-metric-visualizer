import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile, rename, rm, copyFile, lstat, open } from 'node:fs/promises';
import { existsSync, constants } from 'node:fs';
import path from 'node:path';
import { digestValue } from './dataset-build.mjs';

export const CANONICAL_ROOTS = Object.freeze(['index.html', 'src', 'data', 'vendor', 'input/icon-crop-specs']);
export const TOOL_ROOTS = Object.freeze(['scripts', 'tests', 'docs', 'AGENTS.md', 'CONTEXT.md', 'package.json', 'pnpm-lock.yaml', '.gitignore']);
export function inside(root, relative) {
  const result = path.resolve(root, relative);
  if (!relative || path.isAbsolute(relative) || result === path.resolve(root) || !result.startsWith(path.resolve(root) + path.sep)) throw new Error(`Path outside workspace: ${relative}`);
  return result;
}
export const bytesDigest = (bytes) => `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
export async function filesUnder(root, roots) {
  const files = [];
  async function visit(relative) {
    const file = inside(root, relative);
    if (!existsSync(file)) return;
    const stat = await lstat(file);
    if (stat.isSymbolicLink()) throw new Error(`Snapshot may not follow symlinks: ${relative}`);
    if (stat.isDirectory()) {
      for (const name of (await readdir(file)).sort()) if (name !== '.DS_Store') await visit(`${relative}/${name}`);
    } else if (stat.isFile()) files.push(relative);
  }
  for (const entry of roots) await visit(entry);
  return [...new Set(files)].sort();
}
export async function fileManifest(root, roots = CANONICAL_ROOTS) {
  const files = await filesUnder(root, roots);
  const entries = [];
  for (const file of files) entries.push({ path: file, digest: bytesDigest(await readFile(inside(root, file))) });
  return { entries, digest: digestValue(entries) };
}
export async function copyFiles(from, to, files) {
  for (const file of files) {
    const destination = inside(to, file);
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(inside(from, file), destination, constants.COPYFILE_FICLONE);
  }
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
    await handle.writeFile(`${JSON.stringify(value, null, 2)}\n`);
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
export async function readJson(file) { return JSON.parse(await readFile(file, 'utf8')); }
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
  const destination = inside(root, `output/workflow-bases/${snapshot.digest.slice(7)}`);
  if (!existsSync(destination)) {
    const temporary = `${destination}.${randomUUID()}.tmp`;
    try {
      await mkdir(temporary, { recursive: true });
      await copyFiles(snapshot.root, temporary, snapshot.entries.map((entry) => entry.path));
      if ((await fileManifest(temporary)).digest !== snapshot.digest) throw new Error('Base changed during snapshot copy; retry with a stable base');
      try { await rename(temporary, destination); }
      catch (error) { if (!['EEXIST', 'ENOTEMPTY'].includes(error.code)) throw error; }
    } finally { await rm(temporary, { recursive: true, force: true }); }
  }
  if ((await fileManifest(destination)).digest !== snapshot.digest) throw new Error('Immutable workflow base changed');
  return { ...snapshot, root: destination };
}
