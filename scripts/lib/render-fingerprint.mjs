// Content-hash fingerprints for the render-regression cache: a key is skipped
// only when every byte that can influence its rendered pixels or gate verdicts
// is identical to the last verified pass. Two layers compose the fingerprint:
// a shared runtimeDigest (engine/i18n/icons/vendor scripts in index.html load
// order, inlined font bytes, the render/gate pipeline code itself, and the
// browser/OS signature) and a per-key keyDigest (adapter source, referenced
// raster-annotation assets, the resolved reference image, and the key's
// canonical baseline entry). Other dataset adapters and income-statement SSOT
// scripts are deliberately excluded: they load into the harness page but are
// not pixel inputs, and including them would invalidate the whole cache on
// every new dataset. Backstops for that approximation: new/changed keys are
// always cache misses, pnpm check syntax-sweeps every script, and CI runs
// cold (no output/ persistence) so its full render never consults a cache.
import { createHash, randomUUID } from 'node:crypto';
import { existsSync, statSync } from 'node:fs';
import { mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { rootDir } from './project.mjs';
import { resolveSourcePath } from './source-lifecycle.mjs';
import { PROJECT_FONT_FAMILIES, fontPackageRelativePath } from './local-fonts.mjs';
import { RENDER_RUNTIME_SCRIPTS, scriptSources } from '../script-sources.mjs';

export const RENDER_CACHE_VERSION = 1;
export const RENDER_CACHE_PATH = 'output/render-regression/cache.json';

// Every script whose behavior shapes a render or a gate verdict. Editing any
// of these invalidates the whole cache via the runtime digest.
export const RENDER_PIPELINE_CODE_PATHS = Object.freeze([
  'scripts/script-sources.mjs',
  'scripts/verify-render-regression.mjs',
  'scripts/lib/d3-hard-gates.mjs',
  'scripts/lib/local-fonts.mjs',
  'scripts/lib/node-face-policy.mjs',
  'scripts/lib/png-diff.mjs',
  'scripts/lib/render-fingerprint.mjs',
  'scripts/lib/render-harness.mjs',
]);

const RASTER_REF_RE = /['"`](data\/assets\/raster-annotations\/[^'"`\s]*)['"`]/g;
const REFERENCE_SRC_RE = /['"`](input\/processed\/[^'"`\s]+\.png)['"`]/i;

// Raster-annotation locators mentioned by an adapter. Adapters reference
// assets either as full file literals or as a directory-prefix constant
// (berkshire style: const RASTER = 'data/assets/raster-annotations/x/');
// directory refs are hashed recursively, which can only over-invalidate.
// Template-literal interpolation truncates to the directory before the
// first `${`, again falling back to the conservative directory hash.
export function rasterAssetRefsFromAdapterSource(source) {
  const refs = new Set();
  for (const match of source.matchAll(RASTER_REF_RE)) {
    let ref = match[1];
    const interpolation = ref.indexOf('${');
    if (interpolation !== -1) {
      ref = ref.slice(0, ref.lastIndexOf('/', interpolation) + 1);
    }
    if (ref.length > 'data/assets/raster-annotations/'.length - 1) refs.add(ref);
  }
  return [...refs].sort();
}

export function referenceSrcFromAdapterSource(source, key) {
  const match = source.match(REFERENCE_SRC_RE);
  return match ? match[1] : `input/processed/${key}.png`;
}

function updateHash(hash, label, contents) {
  hash.update(label);
  hash.update('\0');
  hash.update(contents);
  hash.update('\0');
}

function slashPath(value) {
  return value.split(path.sep).join('/');
}

async function listFilesRecursive(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) files.push(...(await listFilesRecursive(fullPath)));
    else if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

async function hashRasterRef(hash, ref, projectRoot) {
  const absolute = path.join(projectRoot, ref);
  if (!existsSync(absolute)) {
    updateHash(hash, `raster-missing:${ref}`, '');
    return;
  }
  if (statSync(absolute).isDirectory()) {
    for (const filePath of await listFilesRecursive(absolute)) {
      updateHash(hash, `raster:${slashPath(path.relative(projectRoot, filePath))}`, await readFile(filePath));
    }
    return;
  }
  updateHash(hash, `raster:${ref}`, await readFile(absolute));
}

// Baseline entries are small flat objects; a sorted-key stringify is enough
// for a stable digest input.
function stableJson(value) {
  return JSON.stringify(value, Object.keys(value).sort());
}

async function playwrightVersion(projectRoot) {
  try {
    const raw = await readFile(path.join(projectRoot, 'node_modules', 'playwright', 'package.json'), 'utf8');
    return JSON.parse(raw).version || 'unknown';
  } catch {
    return 'unknown';
  }
}

// Shared inputs: any difference discards every cache entry. The runtime
// scripts hash in index.html load order (order itself is an input); the
// environment line guards against browser/OS raster changes that repaint
// text without any repo diff.
export async function computeRuntimeDigest({ indexHtml, browserSignature = '', projectRoot = rootDir } = {}) {
  const hash = createHash('sha256');
  const runtimeScripts = scriptSources(indexHtml).filter((src) => RENDER_RUNTIME_SCRIPTS.has(src));
  updateHash(hash, 'runtime-order', runtimeScripts.join(','));
  for (const src of runtimeScripts) {
    updateHash(hash, src, await readFile(path.join(projectRoot, src)));
  }
  for (const codePath of RENDER_PIPELINE_CODE_PATHS) {
    updateHash(hash, codePath, await readFile(path.join(projectRoot, codePath)));
  }
  for (const { slug, weights } of PROJECT_FONT_FAMILIES) {
    for (const weight of weights) {
      const relativePath = fontPackageRelativePath(slug, weight);
      updateHash(hash, relativePath, await readFile(path.join(projectRoot, relativePath)));
    }
  }
  updateHash(
    hash,
    'environment',
    [`playwright@${await playwrightVersion(projectRoot)}`, browserSignature, process.platform, os.release(), process.arch].join('|')
  );
  return `sha256:${hash.digest('hex')}`;
}

// Per-key inputs. The reference image resolves through the same
// processed→processing fallback the render uses, so a mid-Build reference
// under input/processing/ fingerprints as the file actually scored against.
export async function computeKeyDigest(key, { baselineEntry = null, projectRoot = rootDir } = {}) {
  const hash = createHash('sha256');
  const adapterRelative = `data/datasets/${key}.js`;
  const adapterSource = await readFile(path.join(projectRoot, adapterRelative), 'utf8');
  updateHash(hash, `adapter:${adapterRelative}`, adapterSource);

  for (const ref of rasterAssetRefsFromAdapterSource(adapterSource)) {
    await hashRasterRef(hash, ref, projectRoot);
  }

  const referenceSrc = referenceSrcFromAdapterSource(adapterSource, key);
  const referencePath = resolveSourcePath(referenceSrc, { projectRoot });
  const referencePresent = existsSync(referencePath);
  if (referencePresent) {
    updateHash(hash, `reference:${slashPath(path.relative(projectRoot, referencePath))}`, await readFile(referencePath));
  } else {
    updateHash(hash, 'reference:absent', '');
  }

  updateHash(hash, 'baseline', baselineEntry ? stableJson(baselineEntry) : 'none');

  return { keyDigest: `sha256:${hash.digest('hex')}`, referencePresent };
}

// Missing, corrupt, or malformed caches read as null; the caller falls back
// to a full render. The cache must never fail a verify.
export async function readRenderCache({ projectRoot = rootDir } = {}) {
  try {
    const parsed = JSON.parse(await readFile(path.join(projectRoot, RENDER_CACHE_PATH), 'utf8'));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
    if (!parsed.entries || typeof parsed.entries !== 'object' || Array.isArray(parsed.entries)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export async function writeRenderCache(cache, { projectRoot = rootDir } = {}) {
  const targetPath = path.join(projectRoot, RENDER_CACHE_PATH);
  await mkdir(path.dirname(targetPath), { recursive: true });
  const temporaryPath = path.join(
    path.dirname(targetPath),
    `.${path.basename(targetPath)}.${process.pid}.${randomUUID()}.tmp`
  );
  try {
    await writeFile(temporaryPath, `${JSON.stringify(cache, null, 2)}\n`, { flag: 'wx' });
    await rename(temporaryPath, targetPath);
  } finally {
    await rm(temporaryPath, { force: true });
  }
}

// Pure partition of the target keys into cache hits and render targets.
// Reading from the cache is the caller's decision (default all-keys mode
// only); with readFromCache false everything renders.
export function partitionByCache({ targetKeys, readFromCache, entries = {}, keyDigests }) {
  const skippedKeys = [];
  const renderTargets = [];
  for (const key of targetKeys) {
    const digest = keyDigests.get(key);
    const entry = entries ? entries[key] : null;
    if (readFromCache && digest && entry && entry.keyDigest === digest.keyDigest) skippedKeys.push(key);
    else renderTargets.push(key);
  }
  return { skippedKeys, renderTargets };
}
