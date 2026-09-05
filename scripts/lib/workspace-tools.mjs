import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile, mkdir, lstat, rm, symlink } from 'node:fs/promises';
import { filesUnder, TOOL_ROOTS, copyFiles, atomicJson } from './workflow-files.mjs';

// Ordinary Build folders must never inherit a writable parent Git index.
export async function prepareWorkspaceTools(root, workspace) {
  await copyFiles(root, workspace, await filesUnder(root, TOOL_ROOTS));
  const git = path.join(workspace, '.git');
  const stat = await lstat(git).catch((error) => { if (error.code !== 'ENOENT') throw error; });
  if (stat?.isSymbolicLink()) await rm(git);
  else if (stat?.isDirectory()) throw new Error('Refusing to replace a real Git directory in a Build workspace');
  await writeFile(git, 'gitdir: .trace-git-disabled\n');
  const modules = path.join(workspace, 'node_modules');
  if (existsSync(path.join(root, 'node_modules')) && !existsSync(modules)) await symlink(path.join(root, 'node_modules'), modules, 'dir');
  await mkdir(path.join(workspace, 'output/workflow'), { recursive: true });
  const metadata = path.join(workspace, 'data/dataset-file-metadata.js');
  if (existsSync(metadata)) {
    // Keep already generated times fixed; don't read a changing shared Git log.
    await writeFile(path.join(workspace, 'output/workflow/frozen-metadata.js'), await readFile(metadata));
  }
  const contextFile = path.join(workspace, 'output/workflow/tool-context.json');
  const prior = existsSync(contextFile) ? JSON.parse(await readFile(contextFile, 'utf8')) : null;
  await atomicJson(contextFile, { protocol: 'workspace-tools/v1', git: 'disabled', preparedAt: prior?.preparedAt || new Date().toISOString() });
}
