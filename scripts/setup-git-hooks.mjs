#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import {
  hooksPathSetupDecision,
  REPOSITORY_HOOKS_PATH,
} from './lib/git-hook-policy.mjs';
import { rootDir } from './lib/project.mjs';

function parseArgs(argv) {
  const allowed = new Set(['--if-unset']);
  const unknown = argv.slice(2).filter((arg) => !allowed.has(arg));
  if (unknown.length) throw new Error(`Unknown argument(s): ${unknown.join(' ')}`);
  return { ifUnset: argv.includes('--if-unset') };
}

function git(args) {
  return spawnSync('git', args, { cwd: rootDir, encoding: 'utf8' });
}

function gitFailure(result, action) {
  return `${action} failed: ${(result.stderr || result.stdout || `exit ${result.status}`).trim()}`;
}

function main() {
  const { ifUnset } = parseArgs(process.argv);
  const topLevel = git(['rev-parse', '--show-toplevel']);
  if (topLevel.status !== 0) {
    if (ifUnset) {
      console.log('git hooks setup skipped: package is not installed from a Git checkout');
      return;
    }
    throw new Error(gitFailure(topLevel, 'git rev-parse'));
  }
  if (path.resolve(topLevel.stdout.trim()) !== rootDir) {
    throw new Error(`Git top-level mismatch: expected ${rootDir}, got ${topLevel.stdout.trim()}`);
  }

  const configured = git(['config', '--local', '--get', 'core.hooksPath']);
  if (configured.status !== 0 && configured.status !== 1) {
    throw new Error(gitFailure(configured, 'reading core.hooksPath'));
  }
  const decision = hooksPathSetupDecision(configured.stdout, { ifUnset });
  if (decision.action === 'preserve') {
    console.warn(
      `git hooks setup preserved existing core.hooksPath=${decision.existing}; ` +
      `integrate ${REPOSITORY_HOOKS_PATH}/post-commit and pre-push manually or run pnpm setup:git-hooks after resolving it`
    );
    return;
  }
  if (decision.action === 'conflict') {
    throw new Error(
      `Refusing to overwrite existing core.hooksPath=${decision.existing}. ` +
      `Integrate the repository hooks manually, or unset the custom path before rerunning pnpm setup:git-hooks.`
    );
  }

  const installed = git(['config', '--local', 'core.hooksPath', REPOSITORY_HOOKS_PATH]);
  if (installed.status !== 0) throw new Error(gitFailure(installed, 'configuring core.hooksPath'));
  console.log(`configured Git hooks from ${REPOSITORY_HOOKS_PATH}`);
}

try {
  main();
} catch (error) {
  console.error(error.stack || error.message);
  process.exit(1);
}
