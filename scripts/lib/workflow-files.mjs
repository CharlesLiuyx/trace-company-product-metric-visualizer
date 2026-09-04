import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile, rename, rm, copyFile, lstat, open } from 'node:fs/promises';
import { existsSync } from 'node:fs';
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
    await copyFile(inside(from, file), destination);
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
export async function withFileLock(file, work) {
  await mkdir(path.dirname(file), { recursive: true });
  const handle = await open(file, 'wx').catch((error) => {
    if (error.code === 'EEXIST') throw Object.assign(new Error(`Another operation owns ${file}; inspect the owner before recovering a stale lock`), { code: 'WORKFLOW_LOCKED' });
    throw error;
  });
  try {
    await handle.writeFile(JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }));
    return await work();
  } finally { await handle.close(); await rm(file, { force: true }); }
}
