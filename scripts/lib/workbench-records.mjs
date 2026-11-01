// Workbench server records of exited processes are stale, and so is every
// preview when no live server remains: sites are served only by the process
// that built them. Shared by workbench startup and the garbage collector; the
// collector runs it under output/workbench/start.lock so it never races a
// starting server that has not written its record yet.
import path from 'node:path';
import { readdir, rm } from 'node:fs/promises';
import { readJson, treeStats } from './workflow-files.mjs';

function alive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try { process.kill(pid, 0); return true; } catch (error) { return error.code !== 'ESRCH'; }
}

export async function sweepStaleWorkbenchRecords(root, { dryRun = false, measure = false } = {}) {
  const folder = path.join(root, 'output/workbench/servers');
  const removed = [];
  let live = 0, bytes = 0;
  for (const name of await readdir(folder).catch(() => [])) {
    const record = await readJson(path.join(folder, name)).catch(() => null);
    if (alive(record?.pid)) { live++; continue; }
    const file = path.join(folder, name);
    if (measure) bytes += (await treeStats(file)).bytes;
    if (!dryRun) await rm(file, { recursive: true, force: true });
    removed.push(`output/workbench/servers/${name}`);
  }
  if (!live) {
    const previews = path.join(root, 'output/workbench/previews');
    const size = measure || dryRun ? (await treeStats(previews)).bytes : 0;
    if (!dryRun) await rm(previews, { recursive: true, force: true });
    if (size) { bytes += size; removed.push('output/workbench/previews'); }
  }
  return { dryRun, removed, live, bytes };
}
