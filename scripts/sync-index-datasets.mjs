#!/usr/bin/env node
// Keeps the index.html data <script> registration blocks in sync with the
// data script directories on disk (Sankey dataset adapters, per-company
// income-statement SSOT files, company-metadata SSOT files), closing the
// "file on disk but never registered" authoring gap before verify:ssot
// fails on it. Existing registration order is preserved because dataset
// load order can matter when a dataset reuses another: missing scripts are
// appended (alphabetically) after the last registered tag of their family,
// and tags whose files were deleted are removed. `--check` reports drift
// without writing. UNREGISTERED_DATASET_SCRIPTS entries stay untouched.
import { existsSync, writeFileSync } from 'node:fs';
import {
  COMPANY_METADATA_SCRIPT_DIR,
  DATASET_SCRIPT_DIR,
  INCOME_STATEMENT_SCRIPT_DIR,
  UNREGISTERED_DATASET_SCRIPTS,
  companyMetadataScriptsFromIndex,
  dataScriptsFromIndex,
  incomeStatementScriptsFromIndex,
} from './script-sources.mjs';
import { listScripts, projectPath, readProjectFile } from './lib/project.mjs';

const FAMILIES = [
  {
    label: 'dataset',
    dir: DATASET_SCRIPT_DIR,
    registeredFromIndex: dataScriptsFromIndex,
    exemptions: UNREGISTERED_DATASET_SCRIPTS,
  },
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

  const drift = appended + removed;
  if (check) {
    const totalRegistered = FAMILIES.reduce((total, family) => total + family.registeredFromIndex(html).length, 0);
    if (inSync === totalRegistered) {
      console.log(`index.html data script registration is in sync (${totalRegistered} script(s)).`);
      return;
    }
    console.error('index.html data script registration is out of sync. Run pnpm sync:index-datasets.');
    process.exit(1);
  }

  if (!drift) {
    console.log(`index.html data script registration is in sync (${inSync} script(s)).`);
    return;
  }

  writeFileSync(projectPath('index.html'), html);
  console.log(
    `updated index.html: +${appended} appended, -${removed} removed. ` +
      'Review dataset load order if a new dataset reuses another, then run pnpm update:dataset-file-metadata.'
  );
}

main();
