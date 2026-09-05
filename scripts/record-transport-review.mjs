#!/usr/bin/env node
import path from 'node:path';
import { rootDir } from './lib/project.mjs';
import { readJson } from './lib/workflow-files.mjs';
import { reviewGitTransport } from './lib/git-transport.mjs';
try {
  const [id, flag, file, ...extra] = process.argv.slice(2).filter((arg) => arg !== '--');
  if (flag !== '--input' || !file || extra.length) throw new Error('Usage: record:transport-review -- <transport-id> --input <human-review.json>');
  console.log(JSON.stringify(await reviewGitTransport(id, await readJson(path.resolve(file)), rootDir), null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
