// Machine-local viewer selection. This is a derived UI preference, never evidence.
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { readFile, writeFile, mkdir, rename, rm } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { inside, readJson, withFileLock, atomicJson } from './workflow-files.mjs';

const relative = 'output/local-view/selection.js';
export async function readLocalView(root) {
  try {
    const source = await readFile(inside(root, relative), 'utf8');
    return JSON.parse(source.slice('window.TRACE_LOCAL_VIEW_SELECTION = '.length).trim().replace(/;$/, ''));
  } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}
async function writeSelection(root, selection) {
  const file = inside(root, relative), temp = `${file}.${randomUUID()}.tmp`;
  await mkdir(path.dirname(file), { recursive: true });
  try {
    await writeFile(temp, `window.TRACE_LOCAL_VIEW_SELECTION = ${JSON.stringify({ ...selection, entryUrl: pathToFileURL(path.join(root, 'index.html')).href }).replace(/</g, '\\u003c')};\n`, { flag: 'wx' });
    await rename(temp, file);
  } finally { await rm(temp, { force: true }); }
  return selection;
}
export async function selectBuildPreview(root, { buildId, key, workspace, reviewToken }) {
  const target = path.relative(root, path.join(workspace, 'index.html')).split(path.sep).join('/');
  if (!/^output\/builds\/build-[a-f0-9-]+\/workspace\/index\.html$/.test(target) || !reviewToken) throw new Error('Preview requires an isolated prepared Build');
  return withFileLock(inside(root, 'output/local-view/.lock'), async () => {
    const selection = { mode: 'review-pending', buildId, key, target, revision: reviewToken };
    await mkdir(inside(root, 'output/local-view/builds'), { recursive: true });
    await atomicJson(inside(root, `output/local-view/builds/${buildId}.json`), selection);
    const previous = await readLocalView(root);
    // Publish task availability without stealing a different selected review.
    if (previous?.mode === 'review-pending' && previous.buildId !== buildId) return selection;
    return writeSelection(root, selection);
  });
}
export async function selectPublishedView(root, plan = null) {
  return withFileLock(inside(root, 'output/local-view/.lock'), async () => {
    // Read the authoritative pointer even on retry of an older publication.
    const current = await readJson(inside(root, 'output/publications/current.json'));
    if (!/^sha256:[a-f0-9]{64}$/.test(current.publishedDigest)) throw new Error('Invalid publication pointer');
    const previous = await readLocalView(root);
    if (plan && previous?.mode === 'review-pending' && !plan.builds.some((build) => build.buildId === previous.buildId)) return previous;
    return writeSelection(root, { mode: 'published', key: previous?.key || plan?.builds[0]?.key || '',
      target: `output/publications/trees/${current.publishedDigest.slice(7)}/index.html`, revision: current.publishedDigest });
  });
}
