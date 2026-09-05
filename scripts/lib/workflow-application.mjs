// A Build uses the current application's code with its canonical data base.
// Registration lines are generated from each workspace's own SSOT files.
import path from 'node:path';
import { readFile, rm } from 'node:fs/promises';
import { fileManifest, bytesDigest, atomicJson, copyFiles, filesUnder } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';

export const isApplicationPath = (file) => file.startsWith('src/') || file.startsWith('vendor/');
export async function applicationManifest(root) {
  const { entries } = await fileManifest(root, ['src', 'vendor']);
  const html = (await readFile(path.join(root, 'index.html'), 'utf8'))
    .replace(/<script\s+src=(["'])data\/(?:income-statements|company-metadata)\/[^"']+\.js\1\s*>\s*<\/script>/g, '')
    .replace(/^[ \t]*\r?\n/gm, '');
  entries.push({ path: 'index.html', digest: bytesDigest(html) });
  return { protocol: 'workflow-application/v1', entries, digest: digestValue(entries) };
}
export async function adoptApplication(root, workspace) {
  const before = await applicationManifest(root);
  const files = await filesUnder(root, ['index.html', 'src', 'vendor']);
  const kept = new Set(files);
  for (const file of await filesUnder(workspace, ['src', 'vendor'])) if (!kept.has(file)) await rm(path.join(workspace, file));
  await copyFiles(root, workspace, files);
  if ((await applicationManifest(workspace)).digest !== before.digest) throw new Error('Application changed while copied; retry from stable code');
  await atomicJson(path.join(workspace, 'output/workflow/application-base.json'), before);
  return before;
}
