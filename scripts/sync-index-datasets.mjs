#!/usr/bin/env node
// Keeps every data registration surface in sync with the data script
// directories on disk, closing the "file on disk but never registered"
// authoring gap before verify:ssot fails on it:
//
// - per-company SSOT files (income statements, company metadata) register as
//   index.html <script> tags: missing tags are appended (alphabetically)
//   after the last registered tag of their family, deleted files' tags are
//   removed;
// - Sankey dataset adapters register in the generated
//   data/dataset-manifest.js — this script delegates to
//   scripts/update-dataset-manifest.mjs, which preserves existing manifest
//   order (dataset load order can matter when a dataset reuses another) and
//   appends new files. UNREGISTERED_DATASET_SCRIPTS entries stay untouched.
//
// `--check` reports drift without writing.
import { existsSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  COMPANY_METADATA_SCRIPT_DIR,
  INCOME_STATEMENT_SCRIPT_DIR,
  companyMetadataScriptsFromIndex,
  incomeStatementScriptsFromIndex,
} from './script-sources.mjs';
import { listScripts, projectPath, readProjectFile } from './lib/project.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FAMILIES = [
  {
    label: 'income-statement SSOT',
    dir: INCOME_STATEMENT_SCRIPT_DIR,
    registeredFromIndex: incomeStatementScriptsFromIndex,
    exemptions: new Set(),
  },
  {
    label: 'company-metadata SSOT',
    dir: COMPANY_METADATA_SCRIPT_DIR,
    registeredFromIndex: companyMetadataScriptsFromIndex,
    exemptions: new Set(),
  },
];

function parseArgs(argv) {
  const allowed = new Set(['--check']);
  const unknown = argv.slice(2).filter((arg) => !allowed.has(arg));
  if (unknown.length) throw new Error(`Unknown argument(s): ${unknown.join(' ')}`);
  return { check: argv.includes('--check') };
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function familyDrift(html, family) {
  const registered = family.registeredFromIndex(html);
  const onDisk = new Set(listScripts(family.dir).filter((script) => !family.exemptions.has(script)));
  const stale = registered.filter((script) => !existsSync(projectPath(script)));
  const kept = registered.filter((script) => !stale.includes(script));
  const missing = [...onDisk].filter((script) => !registered.includes(script)).sort();
  return { registered, stale, kept, missing };
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

function syncDatasetManifest(check) {
  const args = [path.join(__dirname, 'update-dataset-manifest.mjs')];
  if (check) args.push('--check');
  const result = spawnSync(process.execPath, args, { cwd: projectPath(), encoding: 'utf8' });
  const output = `${result.stdout}${result.stderr}`.trim();
  if (output) console.log(output);
  return result.status === 0;
}

function main() {
  const { check } = parseArgs(process.argv);
  let html = readProjectFile('index.html');
  let appended = 0;
  let removed = 0;
  let inSync = 0;

  for (const family of FAMILIES) {
    const { registered, stale, kept, missing } = familyDrift(html, family);
    if (!stale.length && !missing.length) {
      inSync += registered.length;
      continue;
    }

    for (const script of stale) console.log(`stale ${family.label} registration (file missing): ${script}`);
    for (const script of missing) console.log(`unregistered ${family.label} script: ${script}`);

    if (check) continue;

    if (missing.length && !kept.length) {
      throw new Error(`No registered ${family.label} scripts remain to anchor new registrations; update index.html manually.`);
    }
    html = removeStaleTags(html, stale);
    if (missing.length) html = appendMissingTags(html, kept[kept.length - 1], missing);
    appended += missing.length;
    removed += stale.length;
  }

  const manifestOk = syncDatasetManifest(check);

  const drift = appended + removed;
  if (check) {
    const totalRegistered = FAMILIES.reduce((total, family) => total + family.registeredFromIndex(html).length, 0);
    if (inSync === totalRegistered && manifestOk) {
      console.log(`data registration is in sync (${totalRegistered} index.html SSOT script(s); manifest current).`);
      return;
    }
    console.error('data registration is out of sync. Run pnpm sync:index-datasets.');
    process.exit(1);
  }

  if (!manifestOk) {
    throw new Error('Dataset manifest regeneration failed; see output above.');
  }

  if (!drift) {
    console.log(`index.html SSOT registration is in sync (${inSync} script(s)); dataset manifest refreshed.`);
    return;
  }

  writeFileSync(projectPath('index.html'), html);
  console.log(
    `updated index.html: +${appended} appended, -${removed} removed. ` +
      'Review dataset load order if a new dataset reuses another (manifest order), then run pnpm update:dataset-file-metadata.'
  );
}

main();
