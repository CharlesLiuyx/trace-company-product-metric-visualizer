#!/usr/bin/env node
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { rootDir } from './lib/project.mjs';
import { readJson, fileManifest, CANONICAL_ROOTS, inside, bytesDigest } from './lib/workflow-files.mjs';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { verifySiteIdentity } from './lib/site-release-identity.mjs';
try {
  const release = await verifySiteIdentity(path.join(rootDir, '_site'));
  const message = execFileSync('git', ['show', '-s', '--format=%B', 'HEAD'], { cwd: rootDir, encoding: 'utf8' });
  const id = /^Trace-Transport: (transport-[a-f0-9-]+)$/m.exec(message)?.[1];
  if (id) {
    const mapping = await readJson(path.join(rootDir, 'docs/releases/current.json'));
    if (mapping.id !== id || mapping.approval?.accepted !== true || mapping.approval.candidateDigest !== mapping.candidateDigest || mapping.approval.planDigest !== mapping.planDigest) throw new Error('Commit is missing its exact human review mapping');
    if (execFileSync('git', ['rev-parse', 'HEAD^'], { cwd: rootDir, encoding: 'utf8' }).trim() !== mapping.baseHead) throw new Error('Transport commit has an unexpected parent');
    for (const entry of mapping.paths) {
      const file = inside(rootDir, entry.path);
      const actual = existsSync(file) ? bytesDigest(await readFile(file)) : null;
      if (actual !== entry.digest) throw new Error(`Transported bytes changed: ${entry.path}`);
    }
    if ((await fileManifest(rootDir, [...CANONICAL_ROOTS, 'scripts', 'package.json', 'pnpm-lock.yaml'])).digest !== mapping.candidateDigest) throw new Error('Committed inputs differ from the reviewed candidate');
    await verifySiteIdentity(path.join(rootDir, '_site'), mapping.release);
  }
  if (process.env.GITHUB_SHA && release.sourceCommit !== process.env.GITHUB_SHA) throw new Error('Pages manifest source commit differs from CI commit');
  console.log(`Release bytes verified${id ? ` against reviewed ${id}` : ' (no transport mapping on this commit)'}`);
} catch (error) { console.error(error.stack || error.message); process.exitCode = 1; }
