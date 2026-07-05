// Shared project-path and assertion helpers for the scripts/ toolchain.
// Every script previously re-derived rootDir from import.meta.url and
// re-declared readProjectFile/assert; this module is the single owner.
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function projectPath(...segments) {
  return path.join(rootDir, ...segments);
}

export function readProjectFile(relativePath) {
  return readFileSync(projectPath(relativePath), 'utf8');
}

// With an errors array the failure is collected (verifier style); without
// one it throws immediately (smoke-test style).
export function assert(condition, message, errors) {
  if (condition) return;
  if (errors) errors.push(message);
  else throw new Error(message);
}
