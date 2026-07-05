// Compare/archive workspace for the d3 fidelity loop, extracted verbatim
// from scripts/verify-d3.mjs: the scratch compare/ directory lifecycle and
// the per-round archive naming/copy under output/compare/<dataset-key>/
// (round number, similarity improvement vs the previous round, focus).
import { copyFile, cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { rootDir } from './project.mjs';

export const compareDir = path.join(rootDir, 'compare');
export const outputCompareDir = path.join(rootDir, 'output', 'compare');

export async function cleanCompare() {
  if (!existsSync(compareDir)) return;
  const entries = await readdir(compareDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.name !== '.gitkeep')
      .map((entry) => rm(path.join(compareDir, entry.name), { recursive: true, force: true }))
  );
  await writeFile(path.join(compareDir, '.gitkeep'), '');
}

async function filesEqual(leftPath, rightPath) {
  if (!existsSync(rightPath)) return false;
  const [left, right] = await Promise.all([readFile(leftPath), readFile(rightPath)]);
  return left.equals(right);
}

async function copyFileIfDifferent(sourcePath, outputPath) {
  if (await filesEqual(sourcePath, outputPath)) return false;
  await copyFile(sourcePath, outputPath);
  return true;
}

export function archiveSegment(value, fallback) {
  const segment = String(value || '')
    .trim()
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\\/]/g, '-')
    .replace(/[:*?"<>|]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return (segment || fallback).slice(0, 96).replace(/-+$/g, '') || fallback;
}

function roundSegment(round) {
  return String(round).padStart(2, '0');
}

export function improvementSegment(previousFull, currentFull) {
  if (!previousFull || typeof previousFull.similarity !== 'number') return 'baseline';
  const delta = currentFull.similarity - previousFull.similarity;
  const sign = delta >= 0 ? '+' : '';
  return `sim${sign}${delta.toFixed(6)}`;
}

async function existingArchiveDirs(datasetCompareDir) {
  if (!existsSync(datasetCompareDir)) return [];
  const entries = await readdir(datasetCompareDir, { withFileTypes: true });
  const dirs = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const dirPath = path.join(datasetCompareDir, entry.name);
        const info = await stat(dirPath);
        return { name: entry.name, path: dirPath, mtimeMs: info.mtimeMs };
      })
  );
  return dirs.sort((a, b) => b.mtimeMs - a.mtimeMs || b.name.localeCompare(a.name));
}

async function readJson(filePath) {
  try {
    return JSON.parse(await readFile(filePath, 'utf8'));
  } catch {
    return null;
  }
}

async function latestPreviousMetrics(archiveDirs, language) {
  for (const dir of archiveDirs) {
    let files = [];
    try {
      files = await readdir(dir.path, { withFileTypes: true });
    } catch {
      continue;
    }

    const metricsFiles = files
      .filter((entry) => entry.isFile() && entry.name.endsWith('-metrics.json'))
      .map((entry) => path.join(dir.path, entry.name));

    for (const metricsFile of metricsFiles) {
      const metrics = await readJson(metricsFile);
      if (!metrics?.full) continue;
      if (language && metrics.language && metrics.language !== language) continue;
      return {
        archive: path.relative(rootDir, dir.path),
        full: metrics.full,
      };
    }
  }
  return null;
}

async function uniqueArchiveDir(datasetCompareDir, archiveName) {
  let candidate = path.join(datasetCompareDir, archiveName);
  if (!existsSync(candidate)) return candidate;

  for (let suffix = 2; suffix < 1000; suffix += 1) {
    candidate = path.join(datasetCompareDir, `${archiveName}-${suffix}`);
    if (!existsSync(candidate)) return candidate;
  }

  throw new Error(`Could not create unique archive directory for ${archiveName}`);
}

export async function createArchivePlan(datasetKey, options) {
  const datasetCompareDir = path.join(outputCompareDir, datasetKey);
  const existingDirs = await existingArchiveDirs(datasetCompareDir);
  const previous = await latestPreviousMetrics(existingDirs, options.language);
  const round = options.round || existingDirs.length + 1;
  const roundName = roundSegment(round);
  const improvement = improvementSegment(previous?.full, options.fullMetrics);
  const focus = archiveSegment(options.focus, 'unspecified');
  const archiveName = `${roundName}-${improvement}-${focus}`;
  const archiveDir = await uniqueArchiveDir(datasetCompareDir, archiveName);

  return {
    datasetCompareDir,
    archiveDir,
    archiveName: path.basename(archiveDir),
    round: roundName,
    improvement,
    focus,
    previousArchive: previous?.archive || null,
  };
}

export async function archiveCompare(datasetKey, archivePlan) {
  const datasetCompareDir = archivePlan.datasetCompareDir;
  const archiveDir = archivePlan.archiveDir;
  const referenceName = `${datasetKey}-reference.png`;
  await mkdir(archiveDir, { recursive: true });
  const entries = await readdir(compareDir, { withFileTypes: true });
  const archived = [];
  let reference = null;
  let referenceChanged = false;

  for (const entry of entries) {
    if (entry.name === '.gitkeep') continue;
    const sourcePath = path.join(compareDir, entry.name);

    if (!entry.isDirectory() && entry.name === referenceName) {
      const outputPath = path.join(datasetCompareDir, entry.name);
      referenceChanged = await copyFileIfDifferent(sourcePath, outputPath);
      reference = path.relative(rootDir, outputPath);
      continue;
    }

    const outputPath = path.join(archiveDir, entry.name);

    if (entry.isDirectory()) {
      await cp(sourcePath, outputPath, { recursive: true });
    } else {
      await copyFile(sourcePath, outputPath);
    }

    archived.push(path.relative(rootDir, outputPath));
  }

  return {
    dir: path.relative(rootDir, archiveDir),
    name: archivePlan.archiveName,
    round: archivePlan.round,
    improvement: archivePlan.improvement,
    focus: archivePlan.focus,
    previousArchive: archivePlan.previousArchive,
    files: archived,
    reference,
    referenceChanged,
  };
}
