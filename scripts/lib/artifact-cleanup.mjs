// Completed-work housekeeping. Summaries are historical metadata, never
// replacement evidence, a publication pointer, or resumable Build state.
import path from 'node:path';
import { lstat, readdir, readFile, rm, mkdir, writeFile } from 'node:fs/promises';
import { atomicJson, bytesDigest, readJson, withFileLock } from './workflow-files.mjs';

const HISTORY = 'output/meta/history.json';
async function entries(directory) {
  try {
    const info = await lstat(directory);
    if (!info.isDirectory() || info.isSymbolicLink()) throw new Error(`Cleanup requires a real directory: ${directory}`);
    return await readdir(directory, { withFileTypes: true });
  }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
}
async function optionalJson(file) {
  try {
    const info = await lstat(file);
    if (!info.isFile() || info.isSymbolicLink()) throw new Error(`Cleanup metadata must be a regular file: ${file}`);
    return await readJson(file);
  }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}
async function assertDirectory(file) {
  try {
    const info = await lstat(file);
    if (!info.isDirectory() || info.isSymbolicLink()) throw new Error(`Cleanup requires a real directory: ${file}`);
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
function alive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return true;
  try { process.kill(pid, 0); return true; }
  catch (error) { return error.code !== 'ESRCH'; }
}
async function inventory(root, relative) {
  const files = [];
  async function visit(name) {
    const file = path.join(root, name), info = await lstat(file);
    // Unlink nested symlinks without following their targets (node_modules,
    // historical .git links, or an accidental link outside the workspace).
    if (info.isDirectory() && !info.isSymbolicLink()) {
      for (const entry of await entries(file)) await visit(`${name}/${entry.name}`);
    } else files.push({ path: name, bytes: info.size });
  }
  for (const entry of await entries(path.join(root, relative))) await visit(`${relative}/${entry.name}`);
  return files;
}
function mergeRecords(previous = [], current = [], key) {
  return [...new Map([...previous, ...current].map((item) => [item[key], item])).values()]
    .sort((a, b) => String(a[key]).localeCompare(String(b[key])));
}
async function collectHistory(root) {
  const previous = await optionalJson(path.join(root, HISTORY));
  if (previous && previous.protocol !== 'artifact-history/v1') throw new Error('Unknown cleanup history protocol');
  const builds = [], publications = [], transports = [];
  for (const entry of await entries(path.join(root, 'output/builds'))) {
    if (!entry.isDirectory() || !/^build-[a-z0-9-]+$/.test(entry.name)) continue;
    const file = path.join(root, 'output/builds', entry.name, 'manifest.json');
    const manifest = await optionalJson(file);
    if (!manifest) continue;
    const last = manifest.receipts?.at(-1);
    builds.push({ buildId: manifest.buildId || entry.name, key: manifest.key, adapter: manifest.adapter,
      historicalState: manifest.state, revision: manifest.revision, reviewStatus: manifest.review?.status || null,
      manifestDigest: bytesDigest(await readFile(file)), lastReceiptDigest: last?.digest || null,
      lastRecordedAt: last?.recordedAt || null,
      sources: (manifest.sources || []).map(({ uri, processingUri, processedUri, digest }) => ({ uri, processingUri, processedUri, digest })) });
  }
  for (const entry of await entries(path.join(root, 'output/publications/receipts'))) {
    if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
    const receipt = await readJson(path.join(root, 'output/publications/receipts', entry.name));
    publications.push(receipt);
  }
  const pointer = await optionalJson(path.join(root, 'output/publications/current.json'));
  if (pointer) publications.push({ ...pointer, state: 'PUBLISHED' });
  for (const entry of await entries(path.join(root, 'output/git-transports'))) {
    if (!entry.isDirectory() || !/^transport-[a-z0-9-]+$/.test(entry.name)) continue;
    const receipt = await optionalJson(path.join(root, 'output/git-transports', entry.name, 'receipt.json'));
    if (receipt) transports.push(receipt);
  }
  return { protocol: 'artifact-history/v1', historicalOnly: true, evidenceRetained: false,
    builds: mergeRecords(previous?.builds, builds, 'buildId'),
    publications: mergeRecords(previous?.publications, publications, 'planDigest'),
    transports: mergeRecords(previous?.transports, transports, 'id') };
}

export async function cleanupArtifacts(root, { completed = false, dryRun = !completed } = {}) {
  root = path.resolve(root);
  // This is deliberately an explicit operator closeout, not an inference from
  // SEALED, a timer, a successful render, or a single published Build.
  if (!dryRun && !completed) throw new Error('Full cleanup requires --completed: all local work and artifact delivery are finished');
  for (const name of ['output', 'compare', 'output/meta']) await assertDirectory(path.join(root, name));
  const inspect = async () => {
    // Metadata traversal must not follow a symlink in an intermediate component.
    for (const name of ['output/builds', 'output/publications', 'output/publications/receipts',
      'output/git-transports', 'output/workbench', 'output/workbench/servers']) {
      await assertDirectory(path.join(root, name));
    }
    const files = [...await inventory(root, 'output'), ...await inventory(root, 'compare')];
    const locks = files.filter(({ path: file }) => /(?:\.lock|\.recovery)$/.test(file));
    if (locks.length) throw new Error(`Finish/recover operations before cleanup: ${locks.map((item) => item.path).join(', ')}`);
    for (const entry of await entries(path.join(root, 'output/workbench/servers'))) {
      const server = await optionalJson(path.join(root, 'output/workbench/servers', entry.name));
      if (server && alive(server.pid)) throw new Error('Stop pnpm dev before completed-work cleanup');
    }
    const history = await collectHistory(root);
    const removable = files.filter(({ path: file }) => ![HISTORY, 'output/meta/cleanup.json', 'compare/.gitkeep'].includes(file));
    return { history, report: { protocol: 'artifact-cleanup/v1', completed, dryRun,
      files: removable.length, bytes: removable.reduce((sum, item) => sum + item.bytes, 0),
      buildCount: history.builds.length, publicationCount: history.publications.length, transportCount: history.transports.length,
      retained: [HISTORY, 'output/meta/cleanup.json', 'compare/.gitkeep'] } };
  };
  if (dryRun) return (await inspect()).report;
  // Outside the two deletion roots, so no cleanup can remove another cleaner's lock.
  return withFileLock(path.join(root, '.artifact-cleanup.lock'), async () => {
    const { history, report } = await inspect();
    // Write metadata first. An interrupted deletion can be safely retried;
    // prior summaries are merged even if their old manifests were already removed.
    await atomicJson(path.join(root, HISTORY), history);
    await atomicJson(path.join(root, 'output/meta/cleanup.json'), { ...report, status: 'cleaning' });
    for (const name of ['output', 'compare']) {
      for (const entry of await entries(path.join(root, name))) {
        if (name === 'output' && entry.name === 'meta' || name === 'compare' && entry.name === '.gitkeep') continue;
        await rm(path.join(root, name, entry.name), { recursive: true, force: true });
      }
    }
    for (const entry of await entries(path.join(root, 'output/meta'))) {
      if (!['history.json', 'cleanup.json'].includes(entry.name)) await rm(path.join(root, 'output/meta', entry.name), { recursive: true, force: true });
    }
    await mkdir(path.join(root, 'compare'), { recursive: true });
    await writeFile(path.join(root, 'compare/.gitkeep'), '');
    const result = { ...report, status: 'cleaned', completedAt: new Date().toISOString() };
    await atomicJson(path.join(root, 'output/meta/cleanup.json'), result);
    return result;
  });
}
