// Shared project-path and assertion helpers for the scripts/ toolchain.
// Every script previously re-derived rootDir from import.meta.url and
// re-declared readProjectFile/assert; this module is the single owner.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function projectPath(...segments) {
  return path.join(rootDir, ...segments);
}

export function readProjectFile(relativePath) {
  return readFileSync(projectPath(relativePath), 'utf8');
}

// Sorted repo-relative paths of the .js files directly inside a directory.
export function listScripts(relativeDir) {
  if (!existsSync(projectPath(relativeDir))) return [];
  return readdirSync(projectPath(relativeDir))
    .filter((name) => name.endsWith('.js'))
    .sort()
    .map((name) => `${relativeDir}/${name}`);
}

// With an errors array the failure is collected (verifier style); without
// one it throws immediately (smoke-test style).
export function assert(condition, message, errors) {
  if (condition) return;
  if (errors) errors.push(message);
  else throw new Error(message);
}

export function buildProjectRoot(build, requested) {
  if (requested) return requested;
  if (!build?.authoringRoot || existsSync(projectPath('output/workflow/base.json'))) return rootDir;
  return projectPath(build.authoringRoot);
}
