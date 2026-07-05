#!/usr/bin/env node
// Batch visual-regression gate for the d3 renders: renders every registered
// dataset (or the given keys) through the shared harness, computes the pixel
// similarity against each dataset's meta.referenceImage, and fails when any
// dataset drops below its recorded baseline by more than the tolerance.
//
// This is the protection layer for engine-wide changes (src/sankey-engine.js,
// src/i18n.js, src/icons.js, vendor upgrades): verify:d3 scores one dataset
// per run and never fails on similarity, so without this gate an engine edit
// could silently regress any of the 100+ tuned datasets.
//
// Usage:
//   pnpm verify:render-regression                 # gate all registered keys
//   pnpm verify:render-regression -- <key> [...]  # gate a subset
//   pnpm verify:render-regression -- --update     # re-record baselines
//   options: --concurrency <n> (default 4), --tolerance <similarity drop>
//
// Baselines live in data/render-baselines.json (canonical language: en).
// Purity, canvas-size, and page-error hard gates always apply to every
// rendered dataset. Reference images under input/processed/ are local-only
// (gitignored), so similarity is compared only for keys whose reference
// exists on this machine; other keys are rendered, hard-gated, and counted
// as skipped. --update never erases a baseline recorded elsewhere: keys
// without a local reference keep their previous value.
// Failing candidates and amplified diffs are written to
// output/render-regression/ for inspection.
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';
import { dataScriptsFromIndex, renderHarnessScripts } from './script-sources.mjs';
import { startStaticServer } from './dev-server.mjs';
import { projectPath, readProjectFile, rootDir } from './lib/project.mjs';
import { pngMetrics } from './lib/png-diff.mjs';
import { assertPurity } from './lib/d3-hard-gates.mjs';
import {
  assertProjectFontsLoaded,
  datasetRenderMeta,
  openHarnessPage,
  renderDatasetForPurity,
} from './lib/render-harness.mjs';

const BASELINE_PATH = 'data/render-baselines.json';
const FAILURE_DIR = path.join('output', 'render-regression');
const DEFAULT_TOLERANCE = 0.003;
const LANGUAGE = 'en';

function usage() {
  console.error(
    'Usage: pnpm verify:render-regression [-- <dataset-key> ...] [--update] [--concurrency <n>] [--tolerance <similarity-drop>]'
  );
}

function parseArgs(argv) {
  const args = argv.slice(2);
  let update = false;
  let concurrency = 4;
  let tolerance = null;
  const keys = [];
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--') continue;
    if (arg === '--update') {
      update = true;
      continue;
    }
    if (arg === '--concurrency') {
      concurrency = Number(args[index + 1]);
      index += 1;
      if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 16) {
        usage();
        process.exit(2);
      }
      continue;
    }
    if (arg === '--tolerance') {
      tolerance = Number(args[index + 1]);
      index += 1;
      if (!Number.isFinite(tolerance) || tolerance < 0 || tolerance > 1) {
        usage();
        process.exit(2);
      }
      continue;
    }
    if (arg.startsWith('--')) {
      usage();
      process.exit(2);
    }
    keys.push(arg);
  }
  return { update, concurrency, tolerance, keys };
}

async function readBaselines() {
  const target = projectPath(BASELINE_PATH);
  if (!existsSync(target)) return null;
  return JSON.parse(await readFile(target, 'utf8'));
}

function renderBaselineSource(results, previousBaselines, tolerance) {
  const baselines = {};
  for (const result of results.slice().sort((a, b) => a.key.localeCompare(b.key))) {
    if (result.similarity != null) {
      baselines[result.key] = {
        similarity: Number(result.similarity.toFixed(6)),
        mae: Number(result.mae.toFixed(4)),
        width: result.width,
        height: result.height,
      };
    } else if (previousBaselines[result.key]?.similarity != null) {
      // The reference image is local-only and absent here; keep the baseline
      // recorded on a machine that has it instead of erasing it.
      baselines[result.key] = previousBaselines[result.key];
    } else {
      baselines[result.key] = {
        similarity: null,
        note: 'reference image not present when recorded; re-run --update on a machine with input/processed/',
        width: result.width,
        height: result.height,
      };
    }
  }
  return `${JSON.stringify(
    {
      generatedBy: 'pnpm verify:render-regression -- --update',
      language: LANGUAGE,
      similarityTolerance: tolerance,
      baselines,
    },
    null,
    2
  )}\n`;
}

async function renderDataset(page, pageErrors, key, scratchDir) {
  const errorsBefore = pageErrors.length;
  const meta = await datasetRenderMeta(page, key, LANGUAGE);
  await page.setViewportSize({ width: meta.width, height: meta.height });
  const purity = await renderDatasetForPurity(page, key, LANGUAGE);
  assertPurity(purity);
  if (purity.width !== meta.width || purity.height !== meta.height) {
    throw new Error(`SVG size mismatch: expected ${meta.width}x${meta.height}, got ${purity.width}x${purity.height}`);
  }
  if (pageErrors.length > errorsBefore) {
    throw new Error(`Page errors during render:\n${pageErrors.slice(errorsBefore).join('\n')}`);
  }
  const referencePath = path.join(rootDir, meta.referenceSrc);
  if (!existsSync(referencePath)) {
    // Reference images are local-only inputs (gitignored); render + hard
    // gates still ran, but there is nothing to score against here.
    return { key, similarity: null, mae: null, width: meta.width, height: meta.height, skippedReason: 'reference image not present' };
  }
  const candidatePath = path.join(scratchDir, `${key}-d3.png`);
  await page.locator('#chart > svg').screenshot({ path: candidatePath });
  const metrics = await pngMetrics(referencePath, candidatePath);
  return {
    key,
    similarity: metrics.full.similarity,
    mae: metrics.full.mae,
    width: meta.width,
    height: meta.height,
    candidatePath,
    referencePath,
  };
}

async function keepFailureArtifacts(result) {
  const failureDir = projectPath(FAILURE_DIR);
  await mkdir(failureDir, { recursive: true });
  const keptCandidate = path.join(failureDir, `${result.key}-d3.png`);
  const diffPath = path.join(failureDir, `${result.key}-pixel-diff-x4.png`);
  // Recompute with a diff image only for failures; the bulk pass skips it.
  await pngMetrics(result.referencePath, result.candidatePath, diffPath);
  await writeFile(keptCandidate, await readFile(result.candidatePath));
  return { candidate: path.relative(rootDir, keptCandidate), diff: path.relative(rootDir, diffPath) };
}

function fmtSim(value) {
  return value.toFixed(6);
}

async function main() {
  const { update, concurrency, tolerance: toleranceOverride, keys } = parseArgs(process.argv);
  const indexHtml = readProjectFile('index.html');
  const harnessScripts = renderHarnessScripts(indexHtml);
  const registeredKeys = dataScriptsFromIndex(indexHtml).map((script) => path.basename(script, '.js'));
  const registeredSet = new Set(registeredKeys);

  for (const key of keys) {
    if (!registeredSet.has(key)) throw new Error(`Dataset key is not registered in index.html: ${key}`);
  }
  const targetKeys = keys.length ? keys : registeredKeys;

  const baselineFile = await readBaselines();
  if (!update && !baselineFile) {
    throw new Error(`Missing ${BASELINE_PATH}. Run pnpm verify:render-regression -- --update to record baselines.`);
  }
  const tolerance = toleranceOverride ?? baselineFile?.similarityTolerance ?? DEFAULT_TOLERANCE;
  const baselines = baselineFile?.baselines || {};

  const structureErrors = [];
  if (!update) {
    for (const key of targetKeys) {
      if (!baselines[key]) structureErrors.push(`missing baseline for registered dataset: ${key}`);
    }
    if (!keys.length) {
      for (const key of Object.keys(baselines)) {
        if (!registeredSet.has(key)) structureErrors.push(`stale baseline for unregistered dataset: ${key}`);
      }
    }
  }

  const server = await startStaticServer({ port: 0 });
  const baseUrl = server.url.replace(/\/+$/, '');
  const scratchDir = await mkdtemp(path.join(os.tmpdir(), 'render-regression-'));
  let browser;
  const results = [];
  const failures = [];
  const startedAt = Date.now();

  try {
    browser = await chromium.launch({ headless: true });
    const queue = [...targetKeys];
    const workerCount = Math.min(concurrency, queue.length);
    const workers = Array.from({ length: workerCount }, async () => {
      const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
      const { page, pageErrors } = await openHarnessPage(context, { baseUrl, scripts: harnessScripts });
      await assertProjectFontsLoaded(page);
      for (;;) {
        const key = queue.shift();
        if (!key) break;
        try {
          results.push(await renderDataset(page, pageErrors, key, scratchDir));
        } catch (error) {
          failures.push({ key, reason: error.message });
        }
      }
      await context.close();
    });
    await Promise.all(workers);

    results.sort((a, b) => a.key.localeCompare(b.key));

    if (update) {
      const source = renderBaselineSource(results, baselines, tolerance);
      await writeFile(projectPath(BASELINE_PATH), source);
      const scored = results.filter((result) => result.similarity != null).length;
      console.log(
        `wrote ${BASELINE_PATH}: ${results.length} baseline(s) (${scored} scored locally), tolerance ${tolerance}`
      );
    } else {
      for (const result of results) {
        const baseline = baselines[result.key];
        if (!baseline) continue; // already reported as a structure error
        if (result.similarity == null || baseline.similarity == null) continue; // reference/baseline unavailable
        const delta = result.similarity - baseline.similarity;
        if (delta < -tolerance) {
          const artifacts = await keepFailureArtifacts(result);
          failures.push({
            key: result.key,
            reason:
              `similarity ${fmtSim(result.similarity)} dropped ${fmtSim(-delta)} below baseline ` +
              `${fmtSim(baseline.similarity)} (tolerance ${tolerance}); ` +
              `candidate: ${artifacts.candidate}, diff: ${artifacts.diff}`,
          });
        } else if (delta > tolerance) {
          console.log(
            `note ${result.key}: similarity ${fmtSim(result.similarity)} improved ${fmtSim(delta)} over baseline ` +
              `${fmtSim(baseline.similarity)} — ratchet it in with pnpm verify:render-regression -- --update`
          );
        }
      }
    }
  } finally {
    if (browser) await browser.close();
    await server.close();
    await rm(scratchDir, { recursive: true, force: true });
  }

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
  const scored = results.filter((result) => result.similarity != null).length;
  const skipped = results.length - scored;
  const problems = [...structureErrors, ...failures.map((failure) => `${failure.key}: ${failure.reason}`)];
  if (problems.length) {
    console.error(`render regression FAILED (${results.length} rendered, ${problems.length} problem(s), ${elapsed}s):`);
    for (const problem of problems) console.error(`- ${problem}`);
    process.exit(1);
  }
  console.log(
    `render regression passed: ${results.length} dataset(s) rendered, ${scored} ${update ? 'recorded' : 'within tolerance'}` +
      `${skipped ? `, ${skipped} without a local reference image (hard gates only)` : ''} in ${elapsed}s (tolerance ${tolerance}, language ${LANGUAGE}).`
  );
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});
