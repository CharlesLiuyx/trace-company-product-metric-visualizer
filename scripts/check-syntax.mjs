#!/usr/bin/env node
// One native Node parser process for the complete source tree; no evaluation.
// SourceTextModule uses the same V8 module grammar as node --check.
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { rootDir } from './lib/project.mjs';

function filesIn(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return ['node_modules', '__pycache__', 'assets'].includes(entry.name) ? [] : filesIn(file);
    return /\.(js|mjs)$/.test(file) ? [file] : [];
  });
}

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['src', 'data', 'scripts', 'tests'].flatMap((dir) => filesIn(path.join(rootDir, dir)));
let failed = false;
for (const file of files) {
  try {
    const source = readFileSync(file, 'utf8');
    if (file.endsWith('.mjs')) new vm.SourceTextModule(source, { identifier: file });
    else new vm.Script(source, { filename: file });
  } catch (error) {
    failed = true;
    console.error(`${path.relative(rootDir, file)}: ${error.message}`);
  }
}
if (failed) process.exitCode = 1;
else console.log(`${files.length} JS files parsed`);
