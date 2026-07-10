#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { INCOME_STATEMENT_SCRIPT_DIR, datasetScriptForKey, registeredDatasetScripts } from './script-sources.mjs';
import { listScripts, projectPath, rootDir } from './lib/project.mjs';

function usage() {
  console.error('Usage: pnpm check:pending [-- --file input/pending/<file>.png [--key <final-dataset-key>]]');
}

function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const files = [];
  let key = '';
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg !== '--file' && arg !== '--key') {
      usage();
      process.exit(2);
    }
    const value = args[index + 1];
    index += 1;
    if (!value || value.startsWith('--')) {
      usage();
      process.exit(2);
    }
    if (arg === '--file') files.push(value);
    else key = value;
  }
  if (key && files.length !== 1) {
    usage();
    process.exit(2);
  }
  if (key && normalizeDatasetKey(key) !== key) {
    usage();
    process.exit(2);
  }
  return { files, key };
}

function relativeProjectPath(...segments) {
  return path.join(...segments).split(path.sep).join('/');
}

function pngFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.png$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function fileHash(relativePath) {
  return createHash('sha256').update(readFileSync(projectPath(relativePath))).digest('hex');
}

function normalizeDatasetKey(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function datasetKeyFromFileName(fileName) {
  const stem = path.basename(fileName, path.extname(fileName));
  const cleaned = stem.replace(/^page[-_\s]*\d+[-_\s]*/i, '').replace(/[-_\s]*income[-_\s]*statement$/i, '');
  return normalizeDatasetKey(cleaned) || normalizeDatasetKey(stem);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function loadRegisteredDatasetScripts() {
  return new Set(registeredDatasetScripts());
}

function loadIncomeStatementSource() {
  return listScripts(INCOME_STATEMENT_SCRIPT_DIR)
    .map((script) => readFileSync(projectPath(script), 'utf8'))
    .join('\n');
}

function datasetStatus(key, registeredScripts, incomeStatementSource) {
  const processedImage = relativeProjectPath('input', 'processed', `${key}.png`);
  const datasetScript = datasetScriptForKey(key);
  const ssotKeyRe = new RegExp(`\\bkey\\s*:\\s*['"]${escapeRegex(key)}['"]`);
  const ssotImageRe = new RegExp(
    `\\bsourceImage\\s*:\\s*['"]input/processed/${escapeRegex(key)}\\.png['"]`
  );

  return {
    processedImage: existsSync(projectPath(processedImage)),
    datasetScript: existsSync(projectPath(datasetScript)),
    indexRegistration: registeredScripts.has(datasetScript),
    ssotRecord: ssotKeyRe.test(incomeStatementSource) || ssotImageRe.test(incomeStatementSource),
  };
}

function statusText(status) {
  return [
    `processed=${status.processedImage ? 'yes' : 'no'}`,
    `dataset=${status.datasetScript ? 'yes' : 'no'}`,
    `index=${status.indexRegistration ? 'yes' : 'no'}`,
    `ssot=${status.ssotRecord ? 'yes' : 'no'}`,
  ].join(', ');
}

function hasExistingArtifact(status) {
  return status.processedImage || status.datasetScript || status.indexRegistration || status.ssotRecord;
}

function buildProcessedIndex() {
  const byHash = new Map();
  for (const fileName of pngFiles(projectPath('input', 'processed'))) {
    const relativePath = relativeProjectPath('input', 'processed', fileName);
    const hash = fileHash(relativePath);
    const key = datasetKeyFromFileName(fileName);
    const matches = byHash.get(hash) || [];
    matches.push({ key, relativePath });
    byHash.set(hash, matches);
  }
  return byHash;
}

function selectedPendingNames(requestedFiles, availableNames) {
  if (!requestedFiles.length) return new Set(availableNames);
  const pendingRoot = projectPath('input', 'pending');
  const selected = new Set();
  for (const requested of requestedFiles) {
    const absolute = path.resolve(rootDir, requested);
    if (path.dirname(absolute) !== pendingRoot || !/\.png$/i.test(absolute)) {
      throw new Error(`--file must name a PNG directly under input/pending/: ${requested}`);
    }
    const name = path.basename(absolute);
    // macOS filesystems can retain decomposed Unicode filenames while shell
    // expansion normalizes the argument. Compare canonically, then retain the
    // on-disk spelling for subsequent filesystem reads.
    const matchedName = availableNames.find((availableName) => availableName.normalize('NFC') === name.normalize('NFC'));
    if (!matchedName) throw new Error(`Pending PNG does not exist: ${requested}`);
    selected.add(matchedName);
  }
  return selected;
}

function groupBy(records, keyForRecord) {
  const groups = new Map();
  for (const record of records) {
    const key = keyForRecord(record);
    const group = groups.get(key) || [];
    group.push(record);
    groups.set(key, group);
  }
  return groups;
}

function main() {
  const { files: requestedFiles, key: finalKey } = parseArgs(process.argv);
  const pendingFiles = pngFiles(projectPath('input', 'pending'));
  if (!pendingFiles.length) {
    console.log('Pending check passed: no PNG files in input/pending/.');
    return;
  }

  const selectedNames = selectedPendingNames(requestedFiles, pendingFiles);

  const registeredScripts = loadRegisteredDatasetScripts();
  const incomeStatementSource = loadIncomeStatementSource();
  const processedByHash = buildProcessedIndex();
  const blocked = [];
  const fresh = [];

  const pendingRecords = pendingFiles.map((fileName) => {
    const pendingPath = relativeProjectPath('input', 'pending', fileName);
    return {
      fileName,
      pendingPath,
      pendingHash: fileHash(pendingPath),
      candidateKey: datasetKeyFromFileName(fileName),
    };
  });
  const pendingByHash = groupBy(pendingRecords, (record) => record.pendingHash);
  const pendingByKey = groupBy(pendingRecords, (record) => record.candidateKey);

  for (const record of pendingRecords) {
    if (!selectedNames.has(record.fileName)) continue;
    const { pendingPath, pendingHash } = record;
    const candidateKey = finalKey || record.candidateKey;
    const exactMatches = processedByHash.get(pendingHash) || [];
    const candidateStatus = datasetStatus(candidateKey, registeredScripts, incomeStatementSource);

    const sameHashPending = pendingByHash.get(pendingHash) || [];
    const sameKeyPending = finalKey
      ? [record, ...pendingRecords.filter((item) => item.fileName !== record.fileName && item.candidateKey === candidateKey)]
      : (pendingByKey.get(candidateKey) || []);
    if (sameHashPending.length > 1 || sameKeyPending.length > 1) {
      blocked.push({
        type: 'pending-collision',
        pendingPath,
        key: candidateKey,
        sameHash: sameHashPending.map((item) => item.pendingPath),
        sameKey: sameKeyPending.map((item) => item.pendingPath),
      });
      continue;
    }

    if (exactMatches.length) {
      blocked.push({
        type: 'already-processed',
        pendingPath,
        matches: exactMatches.map((match) => ({
          ...match,
          status: datasetStatus(match.key, registeredScripts, incomeStatementSource),
        })),
      });
      continue;
    }

    if (hasExistingArtifact(candidateStatus)) {
      blocked.push({
        type: 'key-collision',
        pendingPath,
        key: candidateKey,
        status: candidateStatus,
      });
      continue;
    }

    fresh.push({ pendingPath, key: candidateKey || '<manual-key-required>' });
  }

  if (blocked.length) {
    console.error('Pending check stopped the workflow before processing:');
    for (const item of blocked) {
      if (item.type === 'already-processed') {
        console.error(`- ${item.pendingPath} matches existing processed image(s):`);
        for (const match of item.matches) {
          console.error(`  - ${match.relativePath} (${statusText(match.status)})`);
        }
      } else if (item.type === 'key-collision') {
        console.error(
          `- ${item.pendingPath} maps to existing dataset key "${item.key}" with different PNG content (${statusText(
            item.status
          )})`
        );
      } else {
        console.error(`- ${item.pendingPath} collides with another pending item for key "${item.key}":`);
        if (item.sameHash.length > 1) console.error(`  same content: ${item.sameHash.join(', ')}`);
        if (item.sameKey.length > 1) console.error(`  same candidate key: ${item.sameKey.join(', ')}`);
      }
    }
    console.error('Do not move, overwrite, or update dataset files for these pending image(s).');
    process.exit(1);
  }

  const scope = requestedFiles.length ? 'selected item(s)' : 'queue';
  console.log(`Pending check passed for ${scope}: ${fresh.length} new PNG file(s) ready for processing.`);
  for (const item of fresh) console.log(`- ${item.pendingPath} -> candidate key: ${item.key}`);
}

main();
