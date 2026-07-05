#!/usr/bin/env node
// Keeps the index.html dataset <script> registration block in sync with
// data/datasets/ on disk, closing the "file on disk but never registered"
// authoring gap before verify:ssot fails on it. Existing registration order
// is preserved because load order can matter when a dataset reuses another:
// missing datasets are appended (alphabetically) after the last registered
// dataset tag, and tags whose files were deleted are removed. `--check`
// reports drift without writing. UNREGISTERED_DATASET_SCRIPTS entries stay
// untouched.
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import {
  DATASET_SCRIPT_DIR,
  UNREGISTERED_DATASET_SCRIPTS,
  dataScriptsFromIndex,
} from './script-sources.mjs';
import { projectPath, readProjectFile } from './lib/project.mjs';

function parseArgs(argv) {
  const allowed = new Set(['--check']);
  const unknown = argv.slice(2).filter((arg) => !allowed.has(arg));
  if (unknown.length) throw new Error(`Unknown argument(s): ${unknown.join(' ')}`);
  return { check: argv.includes('--check') };
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function datasetScriptsOnDisk() {
  return readdirSync(projectPath(DATASET_SCRIPT_DIR))
    .filter((name) => name.endsWith('.js'))
    .map((name) => `${DATASET_SCRIPT_DIR}/${name}`)
    .sort();
}

function removeStaleTags(html, stale) {
  let output = html;
  for (const script of stale) {
    const tagRe = new RegExp(`[ \\t]*<script src="${escapeRegex(script)}"></script>\\r?\\n`, 'g');
    output = output.replace(tagRe, '');
  }
  return output;
}

function appendMissingTags(html, anchorScript, missing) {
  const anchor = `<script src="${anchorScript}"></script>`;
  if (!html.includes(anchor)) {
    throw new Error(`Could not find registration anchor tag for ${anchorScript} in index.html`);
  }
  const insertion = missing.map((script) => `\n    <script src="${script}"></script>`).join('');
  return html.replace(anchor, `${anchor}${insertion}`);
}

function main() {
  const { check } = parseArgs(process.argv);
  const html = readProjectFile('index.html');
  const registered = dataScriptsFromIndex(html);
  const onDisk = new Set(
    datasetScriptsOnDisk().filter((script) => !UNREGISTERED_DATASET_SCRIPTS.has(script))
  );
  const stale = registered.filter((script) => !existsSync(projectPath(script)));
  const kept = registered.filter((script) => !stale.includes(script));
  const missing = [...onDisk].filter((script) => !registered.includes(script)).sort();

  if (!stale.length && !missing.length) {
    console.log(`index.html dataset registration is in sync (${registered.length} dataset script(s)).`);
    return;
  }

  for (const script of stale) console.log(`stale registration (file missing): ${script}`);
  for (const script of missing) console.log(`unregistered dataset script: ${script}`);

  if (check) {
    console.error('index.html dataset registration is out of sync. Run pnpm sync:index-datasets.');
    process.exit(1);
  }

  if (!kept.length) {
    throw new Error('No registered dataset scripts remain to anchor new registrations; update index.html manually.');
  }

  let output = removeStaleTags(html, stale);
  if (missing.length) output = appendMissingTags(output, kept[kept.length - 1], missing);
  writeFileSync(projectPath('index.html'), output);
  console.log(
    `updated index.html: +${missing.length} appended, -${stale.length} removed. ` +
      'Review dataset load order if a new dataset reuses another, then run pnpm update:dataset-file-metadata.'
  );
}

main();
