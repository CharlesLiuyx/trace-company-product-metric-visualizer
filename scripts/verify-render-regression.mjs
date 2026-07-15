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
//   pnpm compat:baseline -- <key> [...]           # mutate canonical baselines
//   pnpm verify:render-regression -- <key> --update # compatible mutation entry
//   options: --concurrency <n> (default 4), --tolerance <similarity drop>, --structure-only
//
// Baselines live in data/render-baselines.json (canonical language: en).
// Purity, canvas-size, and page-error hard gates always apply to every
// rendered dataset. Reference images under input/processed/ are local-only
// (gitignored), so similarity is compared only for keys whose reference
// exists on this machine; other keys are rendered, hard-gated, and counted
// as skipped. Baseline recording is an explicit, subset-only canonical
// mutation: at least one key is required, unselected keys are preserved, and
// the baseline file is atomically replaced only after every render and
// structure check succeeds. Keys without a local reference keep their
// previous value.
// Failing candidates and amplified diffs are written to
// output/render-regression/ for inspection.
import { mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { registeredDatasetScripts, renderHarnessScripts } from './script-sources.mjs';
import { startStaticServer } from './dev-server.mjs';
import { projectPath, readProjectFile, rootDir } from './lib/project.mjs';
import { pngMetrics } from './lib/png-diff.mjs';
import { resolveSourcePath } from './lib/source-lifecycle.mjs';
import { assertPurity } from './lib/d3-hard-gates.mjs';
import {
  assertNodePaintAudit,
  assertProjectFontsLoaded,
  assertRawSvgCanvas,
  assertTypographyAudit,
  auditNodePaint,
  datasetRenderMeta,
  openHarnessPage,
  renderDatasetForPurity,
  sizeRenderedSvgForCapture,
  typographyAudit,
} from './lib/render-harness.mjs';

const BASELINE_PATH = 'data/render-baselines.json';
const FAILURE_DIR = path.join('output', 'render-regression');
const DEFAULT_TOLERANCE = 0.003;
const LANGUAGE = 'en';

function usage() {
  console.error(`Usage:
  pnpm verify:render-regression [-- <dataset-key> ...] [--concurrency <n>] [--tolerance <similarity-drop>]
  pnpm verify:render-regression --structure-only
  pnpm compat:baseline -- <dataset-key> [...] [--concurrency <n>] [--tolerance <similarity-drop>]

Canonical mutation compatibility entry:
  pnpm verify:render-regression -- <dataset-key> [...] --update

--update records canonical baselines and therefore requires at least one explicit dataset key.`);
}

function argumentError(message) {
  const error = new Error(message);
  error.code = 'ERR_USAGE';
  return error;
}

export function parseArgs(argv) {
  const args = argv.slice(2);
  let update = false;
  let structureOnly = false;
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
    if (arg === '--structure-only') {
      structureOnly = true;
      continue;
    }
    if (arg === '--concurrency') {
      concurrency = Number(args[index + 1]);
      index += 1;
      if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 16) {
        throw argumentError('--concurrency must be an integer from 1 to 16');
      }
      continue;
    }
    if (arg === '--tolerance') {
      tolerance = Number(args[index + 1]);
      index += 1;
      if (!Number.isFinite(tolerance) || tolerance < 0 || tolerance > 1) {
        throw argumentError('--tolerance must be a number from 0 to 1');
      }
      continue;
    }
    if (arg.startsWith('--')) {
      throw argumentError(`Unknown option: ${arg}`);
    }
    keys.push(arg);
  }
  if (update && keys.length === 0) {
    throw argumentError(
      '--update is a canonical mutation and requires at least one explicit dataset key; full-catalog baseline ratchets are forbidden'
    );
  }
  if (structureOnly && (update || keys.length > 0 || tolerance != null)) {
    throw argumentError('--structure-only cannot be combined with dataset keys, --update, or --tolerance');
  }
  return { update, structureOnly, concurrency, tolerance, keys };
}

async function readBaselines() {
  const target = projectPath(BASELINE_PATH);
  if (!existsSync(target)) return null;
  return parseBaselineSource(await readFile(target, 'utf8'), BASELINE_PATH);
}

export function parseBaselineSource(source, sourceName = BASELINE_PATH) {
  let parsed;
  try {
    parsed = JSON.parse(source);
  } catch (error) {
    throw new Error(`Invalid ${sourceName}: ${error.message}`);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`Invalid ${sourceName}: expected a JSON object`);
  }
  if (!parsed.baselines || typeof parsed.baselines !== 'object' || Array.isArray(parsed.baselines)) {
    throw new Error(`Invalid ${sourceName}: baselines must be an object`);
  }
  if (
    parsed.similarityTolerance != null &&
    (!Number.isFinite(parsed.similarityTolerance) || parsed.similarityTolerance < 0 || parsed.similarityTolerance > 1)
  ) {
    throw new Error(`Invalid ${sourceName}: similarityTolerance must be a number from 0 to 1`);
  }
  return parsed;
}

// Merges a subset run over previous baselines. Baselines for keys outside the
// run — and keys whose local reference image is absent — are preserved.
export function renderBaselineSource(results, previousBaselines, tolerance) {
  const baselines = { ...previousBaselines };
  for (const result of results) {
    if (result.similarity != null) {
      baselines[result.key] = {
        similarity: Number(result.similarity.toFixed(6)),
        mae: Number(result.mae.toFixed(4)),
        width: result.width,
        height: result.height,
      };
    } else if (baselines[result.key]?.similarity == null) {
      baselines[result.key] = {
        similarity: null,
        note: 'reference image not present when recorded; re-run --update on a machine with input/processed/',
        width: result.width,
        height: result.height,
      };
    }
  }
  const sorted = Object.fromEntries(
    Object.keys(baselines)
      .sort((a, b) => a.localeCompare(b))
      .map((key) => [key, baselines[key]])
  );
  return `${JSON.stringify(
    {
      generatedBy: 'pnpm compat:baseline -- <dataset-key> [...]',
      language: LANGUAGE,
      similarityTolerance: tolerance,
      baselines: sorted,
    },
    null,
    2
  )}\n`;
}

// The caller must pass the complete problem set for the run. This keeps the
// safety condition adjacent to the only canonical write path, so a future
// caller cannot accidentally publish a partial/failed render batch.
export async function recordBaselineUpdate({ targetPath, source, problems }) {
  if (!Array.isArray(problems)) {
    throw new TypeError('recordBaselineUpdate requires the complete problems array');
  }
  if (problems.length) {
    throw new Error(`Refusing to record canonical baselines with ${problems.length} unresolved problem(s)`);
  }
  const temporaryPath = path.join(
    path.dirname(targetPath),
    `.${path.basename(targetPath)}.${process.pid}.${randomUUID()}.tmp`
  );
  try {
    await writeFile(temporaryPath, source, { flag: 'wx' });
    await rename(temporaryPath, targetPath);
  } finally {
    await rm(temporaryPath, { force: true });
  }
}

async function renderLanguageForGates(page, pageErrors, key, language) {
  const errorsBefore = pageErrors.length;
  const meta = await datasetRenderMeta(page, key, language);
  await page.setViewportSize({ width: meta.width, height: meta.height });
  const purity = await renderDatasetForPurity(page, key, language);
  assertPurity(purity);
  assertRawSvgCanvas(purity, meta);
  const captureSize = await sizeRenderedSvgForCapture(page, meta.width, meta.height);
  if (captureSize.width !== meta.width || captureSize.height !== meta.height) {
    throw new Error(
      `SVG capture size mismatch: expected ${meta.width}x${meta.height}, got ${captureSize.width}x${captureSize.height}`
    );
  }
  const nodePaintAudit = await auditNodePaint(page, { dataset: key, language: meta.language });
  // Catalog regression has no Build-local inventory, but still rejects
  // ambiguous duplicate semantic IDs and records every face for inspection.
  // Catalog regression has no Build-bound Source Coverage or node-face
  // policy. Validate audit integrity here, while leaving T21 exception
  // adjudication to Plan-bound fidelity and seal runs.
  assertNodePaintAudit(nodePaintAudit, {}, { enforceUnboundFloor: false });
  const renderedTypographyAudit = await typographyAudit(page, {
    dataset: key,
    language: meta.language,
  });
  assertTypographyAudit(renderedTypographyAudit);
  if (pageErrors.length > errorsBefore) {
    throw new Error(`Page errors during ${meta.language} render:\n${pageErrors.slice(errorsBefore).join('\n')}`);
  }
  return { meta, purity, captureSize, nodePaintAudit, typographyAudit: renderedTypographyAudit };
}

async function renderDataset(page, pageErrors, key, scratchDir, requiredLanguages) {
  const primary = await renderLanguageForGates(page, pageErrors, key, LANGUAGE);
  const { meta } = primary;
  const referencePath = resolveSourcePath(meta.referenceSrc);
  let result;
  if (!existsSync(referencePath)) {
    // Reference images are local-only inputs (gitignored); render + hard
    // gates still ran, but there is nothing to score against here.
    result = {
      key,
      similarity: null,
      mae: null,
      width: meta.width,
      height: meta.height,
      skippedReason: 'reference image not present',
    };
  } else {
    const candidatePath = path.join(scratchDir, `${key}-d3.png`);
    await page.locator('#chart > svg').screenshot({ path: candidatePath });
    const metrics = await pngMetrics(referencePath, candidatePath);
    result = {
      key,
      similarity: metrics.full.similarity,
      mae: metrics.full.mae,
      width: meta.width,
      height: meta.height,
      candidatePath,
      referencePath,
    };
  }

  // Pixel baselines remain canonical English only. Every other viewer locale
  // still gets the same final-DOM typography hard gate without being compared
  // against the English reference image.
  const typographyAudits = { [meta.language]: primary.typographyAudit };
  const nodePaintAudits = { [meta.language]: primary.nodePaintAudit };
  for (const language of requiredLanguages) {
    if (!language || language === LANGUAGE || typographyAudits[language]) continue;
    const localized = await renderLanguageForGates(page, pageErrors, key, language);
    typographyAudits[localized.meta.language] = localized.typographyAudit;
    nodePaintAudits[localized.meta.language] = localized.nodePaintAudit;
  }
  return { ...result, typographyAudits, nodePaintAudits };
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
  const { update, structureOnly, concurrency, tolerance: toleranceOverride, keys } = parseArgs(process.argv);
  const indexHtml = readProjectFile('index.html');
  const harnessScripts = renderHarnessScripts(indexHtml);
  const registeredKeys = registeredDatasetScripts().map((script) => path.basename(script, '.js'));
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

  const structureErrors = update
    ? []
    : baselineStructureProblems({ targetKeys, registeredKeys, baselines, fullCatalog: keys.length === 0 });
  if (structureErrors.length) {
    throw new Error(`render baseline structure failed (${structureErrors.length} problem(s)):\n${structureErrors.map((item) => `- ${item}`).join('\n')}`);
  }
  if (structureOnly) {
    console.log(`Render baseline structure passed: ${registeredKeys.length} registered dataset(s), no missing or stale entries.`);
    return;
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
      const requiredLanguages = await page.evaluate(() => {
        const languages = window.SANKEY_I18N?.languageCodes;
        return Array.isArray(languages) && languages.length ? languages : ['en'];
      });
      for (;;) {
        const key = queue.shift();
        if (!key) break;
        try {
          results.push(await renderDataset(page, pageErrors, key, scratchDir, requiredLanguages));
        } catch (error) {
          failures.push({ key, reason: error.message });
        }
      }
      await context.close();
    });
    await Promise.all(workers);

    results.sort((a, b) => a.key.localeCompare(b.key));

    if (!update) {
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
              `${fmtSim(baseline.similarity)} — record this canonical mutation with ` +
              `pnpm compat:baseline -- ${result.key}`
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
  const problems = failures.map((failure) => `${failure.key}: ${failure.reason}`);
  if (problems.length) {
    console.error(`render regression FAILED (${results.length} rendered, ${problems.length} problem(s), ${elapsed}s):`);
    for (const problem of problems) console.error(`- ${problem}`);
    process.exit(1);
  }
  if (update) {
    const source = renderBaselineSource(results, baselines, tolerance);
    await recordBaselineUpdate({ targetPath: projectPath(BASELINE_PATH), source, problems });
    console.log(
      `recorded canonical ${BASELINE_PATH}: ${results.length} rendered (${scored} scored locally), tolerance ${tolerance}`
    );
  }
  console.log(
    `render regression passed: ${results.length} dataset(s) rendered, ${scored} ${update ? 'recorded' : 'within tolerance'}` +
      `${skipped ? `, ${skipped} without a local reference image (hard gates only)` : ''} in ${elapsed}s (tolerance ${tolerance}, language ${LANGUAGE}).`
  );
}

export function baselineStructureProblems({ targetKeys, registeredKeys, baselines, fullCatalog }) {
  const registeredSet = new Set(registeredKeys);
  const problems = [];
  for (const key of targetKeys) {
    if (!baselines[key]) problems.push(`missing baseline for registered dataset: ${key}`);
  }
  if (fullCatalog) {
    for (const key of Object.keys(baselines)) {
      if (!registeredSet.has(key)) problems.push(`stale baseline for unregistered dataset: ${key}`);
    }
  }
  return problems;
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main().catch((err) => {
    if (err.code === 'ERR_USAGE') usage();
    console.error(err.stack || err.message);
    process.exit(err.code === 'ERR_USAGE' ? 2 : 1);
  });
}
