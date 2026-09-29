#!/usr/bin/env node
import path from 'node:path';
import { rootDir } from './lib/project.mjs';
import { readJson } from './lib/workflow-files.mjs';
import { prepareGitTransport, inspectGitTransport, commitGitTransport, pushGitTransport } from './lib/git-transport.mjs';
const args = process.argv.slice(2).filter((arg) => arg !== '--');
const full = args.includes('--full');
const [action, id, ...extra] = args.filter((arg) => arg !== '--full');
try {
  if (extra.length || !['prepare', 'inspect', 'commit', 'push'].includes(action) || (full && action !== 'prepare')) throw new Error('Usage: release:git -- prepare <published-digest> [--full] | inspect|commit|push <transport-id>');
  const result = action === 'prepare' ? await prepareGitTransport(id, rootDir, { full }) : await ({ inspect: inspectGitTransport, commit: commitGitTransport, push: pushGitTransport })[action](id, rootDir);
  console.log(JSON.stringify(result, null, 2));
} catch (error) { console.error(error.stack || error.message); process.exitCode = 1; }
