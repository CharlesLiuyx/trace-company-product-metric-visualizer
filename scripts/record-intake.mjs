#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { PNG } from 'pngjs';
import {
  DATASET_ADAPTERS,
  SOURCE_AVAILABILITY,
  createDatasetBuild,
} from './lib/dataset-build.mjs';
import { initializeDatasetBuild } from './lib/dataset-build-store.mjs';
import { projectPath, rootDir } from './lib/project.mjs';

const BUILD_ROOT = projectPath('output', 'builds');

function usage() {
  console.error(`Usage:
  pnpm record:intake -- <input/pending/source.png> --key <dataset-key> \\
    --adapter <income-statement|revenue-metric> \\
    [--availability <published|local-only|restricted>] [--json]

This records an INTAKED Dataset Build. It does not move the Source or write canonical data.`);
}

function usageError(message) {
  const error = new Error(message);
  error.code = 'ERR_USAGE';
  return error;
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const positional = [];
  let key = '';
  let adapter = '';
  let availability = 'local-only';
  let json = false;
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--json') {
      json = true;
      continue;
    }
    if (arg === '--key' || arg === '--adapter' || arg === '--availability') {
      const value = args[index + 1];
      index += 1;
      if (!value || value.startsWith('--')) throw usageError(`${arg} requires a value`);
      if (arg === '--key') key = value;
      if (arg === '--adapter') adapter = value;
      if (arg === '--availability') availability = value;
      continue;
    }
    if (arg.startsWith('--')) throw usageError(`Unknown option: ${arg}`);
    positional.push(arg);
  }
  if (positional.length !== 1) throw usageError('Exactly one pending Source path is required');
  if (!key) throw usageError('--key is required');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) throw usageError('--key must be lowercase kebab case');
  if (!DATASET_ADAPTERS.includes(adapter)) throw usageError(`Unsupported --adapter: ${adapter}`);
  if (!SOURCE_AVAILABILITY.includes(availability)) throw usageError(`Unsupported --availability: ${availability}`);
  return { source: positional[0], key, adapter, availability, json };
}

async function canonicalFiles(entryPath) {
  const info = await stat(entryPath);
  if (!info.isDirectory()) return [entryPath];
  const entries = await readdir(entryPath, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((entry) => entry.name !== '.DS_Store')
      .sort((left, right) => left.name.localeCompare(right.name))
      .map((entry) => canonicalFiles(path.join(entryPath, entry.name)))
  );
  return nested.flat();
}

export async function canonicalDataDigest() {
  const roots = [projectPath('data'), projectPath('index.html')].filter(existsSync);
  const files = (await Promise.all(roots.map(canonicalFiles))).flat().sort();
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(path.relative(rootDir, file).split(path.sep).join('/'));
    hash.update('\0');
    hash.update(await readFile(file));
    hash.update('\0');
  }
  return `sha256:${hash.digest('hex')}`;
}

function sourcePath(requested) {
  const absolute = path.resolve(rootDir, requested);
  if (path.dirname(absolute) !== projectPath('input', 'pending') || !/\.png$/i.test(absolute)) {
    throw usageError('Source must be a PNG directly under input/pending/');
  }
  if (!existsSync(absolute)) throw usageError(`Source does not exist: ${requested}`);
  return absolute;
}

async function activeBuildForKey(key) {
  if (!existsSync(BUILD_ROOT)) return null;
  const entries = await readdir(BUILD_ROOT, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const manifestPath = path.join(BUILD_ROOT, entry.name, 'manifest.json');
    if (!existsSync(manifestPath)) continue;
    try {
      const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
      if (manifest.key === key && manifest.state !== 'ABANDONED') return { manifest, manifestPath };
    } catch (cause) {
      const error = new Error(`Cannot inspect local Build manifest ${path.relative(rootDir, manifestPath)}: ${cause.message}`);
      error.code = 'BUILD_MANIFEST_INVALID';
      throw error;
    }
  }
  return null;
}

export async function recordIntake(options) {
  const absoluteSource = sourcePath(options.source);
  const relativeSource = path.relative(rootDir, absoluteSource).split(path.sep).join('/');
  const guard = spawnSync(
    process.execPath,
    [projectPath('scripts', 'check-pending-processed.mjs'), '--file', relativeSource, '--key', options.key],
    { cwd: rootDir, encoding: 'utf8' }
  );
  if (guard.status !== 0) {
    const error = new Error((guard.stdout + guard.stderr).trim() || 'Pending Source guard failed');
    error.code = 'INTAKE_GUARD_FAILED';
    throw error;
  }
  const active = await activeBuildForKey(options.key);
  if (active) {
    const error = new Error(`Dataset key is already leased by ${active.manifest.buildId}: ${options.key}`);
    error.code = 'KEY_LEASED';
    throw error;
  }
  const bytes = await readFile(absoluteSource);
  const png = PNG.sync.read(bytes);
  const build = createDatasetBuild({
    key: options.key,
    adapter: options.adapter,
    baseCanonicalDigest: await canonicalDataDigest(),
    sources: [{
      uri: relativeSource,
      availability: options.availability,
      role: 'primary-reference',
      digest: `sha256:${createHash('sha256').update(bytes).digest('hex')}`,
      width: png.width,
      height: png.height,
    }],
  });
  const { manifestPath } = await initializeDatasetBuild(build, { buildRoot: BUILD_ROOT });
  return { build, manifestPath: path.relative(rootDir, manifestPath).split(path.sep).join('/') };
}

async function main() {
  const options = parseArgs(process.argv);
  const result = await recordIntake(options);
  if (options.json) {
    console.log(JSON.stringify({ ...result.build, manifestPath: result.manifestPath }, null, 2));
    return;
  }
  console.log(`recorded Dataset Build ${result.build.buildId}`);
  console.log(`state: ${result.build.state}`);
  console.log(`key: ${result.build.key}`);
  console.log(`source: ${result.build.sources[0].uri} (${result.build.sources[0].width}x${result.build.sources[0].height})`);
  console.log(`base canonical: ${result.build.baseCanonicalDigest}`);
  console.log(`manifest: ${result.manifestPath}`);
  console.log('Source remains in input/pending/ until a future Publication projects its canonical path.');
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main().catch((error) => {
    if (error.code === 'ERR_USAGE') usage();
    console.error(error.stack || error.message);
    process.exit(error.code === 'ERR_USAGE' ? 2 : 1);
  });
}
