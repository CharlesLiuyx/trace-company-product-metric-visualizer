// Pending-queue guard for the shared input/pending/ discovery queue. It only
// inspects: a pending Source is blocked when its bytes already sit in
// processing/ or processed/, when its candidate key already owns a dataset
// artifact, or when two pending items collide on bytes or key. It never moves
// a Source. `pnpm check` runs the whole queue in-process and
// `record:workflow start` runs the selected item before claiming it.
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { INCOME_STATEMENT_SCRIPT_DIR, datasetScriptForKey, registeredDatasetScripts } from '../script-sources.mjs';
import { rootDir } from './project.mjs';

const SOURCE_FILE_RE = /\.(png|txt|md)$/i;
const SOURCE_EXTENSIONS = ['.png', '.txt', '.md'];

function queueError(message, code = 'PENDING_QUEUE_INPUT_INVALID') {
  const error = new Error(message);
  error.code = code;
  return error;
}

function relativeProjectPath(...segments) {
  return path.join(...segments).split(path.sep).join('/');
}

function sourceFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && SOURCE_FILE_RE.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function fileHash(relativePath, projectRoot) {
  return createHash('sha256').update(readFileSync(path.join(projectRoot, relativePath))).digest('hex');
}

export function normalizeDatasetKey(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function datasetKeyFromFileName(fileName) {
  const stem = path.basename(fileName, path.extname(fileName));
  const cleaned = stem.replace(/^page[-_\s]*\d+[-_\s]*/i, '').replace(/[-_\s]*income[-_\s]*statement$/i, '');
  return normalizeDatasetKey(cleaned) || normalizeDatasetKey(stem);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function incomeStatementSource(projectRoot) {
  const dir = path.join(projectRoot, INCOME_STATEMENT_SCRIPT_DIR);
  if (!existsSync(dir)) return '';
  return readdirSync(dir)
    .filter((name) => name.endsWith('.js'))
    .sort()
    .map((name) => readFileSync(path.join(dir, name), 'utf8'))
    .join('\n');
}

function datasetStatus(key, registeredScripts, incomeStatements, projectRoot) {
  const datasetScript = datasetScriptForKey(key);
  const ssotKeyRe = new RegExp(`\\bkey\\s*:\\s*['"]${escapeRegex(key)}['"]`);
  const ssotImageRe = new RegExp(`\\bsourceImage\\s*:\\s*['"]input/processed/${escapeRegex(key)}\\.png['"]`);
  const hasSource = (state) => SOURCE_EXTENSIONS.some((ext) => existsSync(path.join(projectRoot, 'input', state, `${key}${ext}`)));
  return {
    processingImage: hasSource('processing'),
    processedImage: hasSource('processed'),
    datasetScript: existsSync(path.join(projectRoot, datasetScript)),
    indexRegistration: registeredScripts.has(datasetScript),
    ssotRecord: existsSync(path.join(projectRoot, 'data', 'metric-observations', `${key}.json`))
      || ssotKeyRe.test(incomeStatements)
      || ssotImageRe.test(incomeStatements),
  };
}

function statusText(status) {
  return [
    `processing=${status.processingImage ? 'yes' : 'no'}`,
    `processed=${status.processedImage ? 'yes' : 'no'}`,
    `dataset=${status.datasetScript ? 'yes' : 'no'}`,
    `index=${status.indexRegistration ? 'yes' : 'no'}`,
    `ssot=${status.ssotRecord ? 'yes' : 'no'}`,
  ].join(', ');
}

function hasExistingArtifact(status) {
  return status.processingImage || status.processedImage || status.datasetScript || status.indexRegistration || status.ssotRecord;
}

/** Content hash → every processing/processed Source that carries those bytes. */
export function buildClaimedSourceIndex(projectRoot = rootDir) {
  const byHash = new Map();
  for (const state of ['processing', 'processed']) {
    for (const fileName of sourceFiles(path.join(projectRoot, 'input', state))) {
      const relativePath = relativeProjectPath('input', state, fileName);
      const hash = fileHash(relativePath, projectRoot);
      const key = datasetKeyFromFileName(fileName);
      const matches = byHash.get(hash) || [];
      matches.push({ key, state, relativePath });
      byHash.set(hash, matches);
    }
  }
  return byHash;
}

function selectedPendingNames(requestedFiles, availableNames, projectRoot) {
  if (!requestedFiles.length) return new Set(availableNames);
  const pendingRoot = path.join(projectRoot, 'input', 'pending');
  const selected = new Set();
  for (const requested of requestedFiles) {
    const absolute = path.resolve(projectRoot, requested);
    if (path.dirname(absolute) !== pendingRoot || !SOURCE_FILE_RE.test(absolute)) {
      throw queueError(`A pending Source must be a PNG, TXT or Markdown file directly under input/pending/: ${requested}`);
    }
    const name = path.basename(absolute);
    // macOS filesystems can retain decomposed Unicode filenames while shell
    // expansion normalizes the argument. Compare canonically, then retain the
    // on-disk spelling for subsequent filesystem reads.
    const matchedName = availableNames.find((availableName) => availableName.normalize('NFC') === name.normalize('NFC'));
    if (!matchedName) throw queueError(`Pending Source does not exist: ${requested}`, 'PENDING_SOURCE_MISSING');
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

/**
 * Inspect the pending queue (or the selected `files`, optionally with the
 * final dataset `key` for exactly one file). Returns the blocked and fresh
 * items without touching the filesystem.
 */
export function checkPendingQueue({ files = [], key = '', projectRoot = rootDir } = {}) {
  const requestedFiles = Array.isArray(files) ? files : [files];
  if (key && requestedFiles.length !== 1) throw queueError('A final dataset key applies to exactly one pending Source');
  if (key && normalizeDatasetKey(key) !== key) throw queueError(`Dataset key must be normalized lowercase kebab case: ${key}`);
  const scope = requestedFiles.length ? 'selected item(s)' : 'queue';
  const pendingFiles = sourceFiles(path.join(projectRoot, 'input', 'pending'));
  if (!pendingFiles.length) return { scope, pending: 0, blocked: [], fresh: [] };

  const selectedNames = selectedPendingNames(requestedFiles, pendingFiles, projectRoot);
  const registeredScripts = new Set(registeredDatasetScripts(projectRoot));
  const incomeStatements = incomeStatementSource(projectRoot);
  const claimedByHash = buildClaimedSourceIndex(projectRoot);
  const blocked = [];
  const fresh = [];

  const pendingRecords = pendingFiles.map((fileName) => {
    const pendingPath = relativeProjectPath('input', 'pending', fileName);
    return { fileName, pendingPath, pendingHash: fileHash(pendingPath, projectRoot), candidateKey: datasetKeyFromFileName(fileName) };
  });
  const pendingByHash = groupBy(pendingRecords, (record) => record.pendingHash);
  const pendingByKey = groupBy(pendingRecords, (record) => record.candidateKey);

  for (const record of pendingRecords) {
    if (!selectedNames.has(record.fileName)) continue;
    const { pendingPath, pendingHash } = record;
    const candidateKey = key || record.candidateKey;
    const exactMatches = claimedByHash.get(pendingHash) || [];
    const candidateStatus = datasetStatus(candidateKey, registeredScripts, incomeStatements, projectRoot);

    const sameHashPending = pendingByHash.get(pendingHash) || [];
    const sameKeyPending = key
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
        type: exactMatches.some((match) => match.state === 'processing') ? 'already-processing' : 'already-processed',
        pendingPath,
        matches: exactMatches.map((match) => ({ ...match, status: datasetStatus(match.key, registeredScripts, incomeStatements, projectRoot) })),
      });
      continue;
    }
    if (hasExistingArtifact(candidateStatus)) {
      blocked.push({ type: 'key-collision', pendingPath, key: candidateKey, status: candidateStatus });
      continue;
    }
    fresh.push({ pendingPath, key: candidateKey || '<manual-key-required>' });
  }
  return { scope, pending: pendingFiles.length, blocked, fresh };
}

/** Human-readable report; `ok` is false whenever any selected item is blocked. */
export function pendingCheckReport(result) {
  if (!result.pending) return { ok: true, lines: ['Pending check passed: no Source files in input/pending/.'] };
  if (result.blocked.length) {
    const lines = ['Pending check stopped the workflow before processing:'];
    for (const item of result.blocked) {
      if (item.type === 'already-processed' || item.type === 'already-processing') {
        const label = item.type === 'already-processing' ? 'claimed Source file(s)' : 'processed Source file(s)';
        lines.push(`- ${item.pendingPath} matches existing ${label}:`);
        for (const match of item.matches) lines.push(`  - ${match.relativePath} (${statusText(match.status)})`);
      } else if (item.type === 'key-collision') {
        lines.push(`- ${item.pendingPath} maps to existing dataset key "${item.key}" with different Source content (${statusText(item.status)})`);
      } else {
        lines.push(`- ${item.pendingPath} collides with another pending item for key "${item.key}":`);
        if (item.sameHash.length > 1) lines.push(`  same content: ${item.sameHash.join(', ')}`);
        if (item.sameKey.length > 1) lines.push(`  same candidate key: ${item.sameKey.join(', ')}`);
      }
    }
    lines.push('Do not claim, overwrite, or update dataset files for these pending item(s).');
    return { ok: false, lines };
  }
  return {
    ok: true,
    lines: [
      `Pending check passed for ${result.scope}: ${result.fresh.length} new Source file(s) ready for processing.`,
      ...result.fresh.map((item) => `- ${item.pendingPath} -> candidate key: ${item.key}`),
    ],
  };
}
