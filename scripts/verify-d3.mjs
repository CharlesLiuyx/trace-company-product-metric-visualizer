#!/usr/bin/env node
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { datasetScriptForKey, registeredDatasetScripts, renderHarnessScripts } from './script-sources.mjs';
import { startStaticServer } from './dev-server.mjs';
import { rootDir } from './lib/project.mjs';
import { formatDiffBoundingBox, pngMetrics } from './lib/png-diff.mjs';
import {
  FIDELITY_PROTOCOL_VERSION,
  LEGACY_FIDELITY_PROTOCOL_VERSION,
  cleanupFidelityRun,
  createFidelityRun,
  finalizeFidelityRun,
  hashFile,
  hashFiles,
  markFidelityRunFailed,
} from './lib/compare-workspace.mjs';
import { readDatasetBuild } from './lib/dataset-build-store.mjs';
import { resolveSourcePath } from './lib/source-lifecycle.mjs';
import { assertPurity } from './lib/d3-hard-gates.mjs';
import {
  assertInterfaceAudit,
  buildInterfaceAudit,
  collectCandidateInterfaceGeometry,
  writeInterfaceContactSheet,
} from './lib/interface-fidelity.mjs';
import {
  assertProjectFontsLoaded,
  assertTypographyAudit,
  auditLabelLayout,
  auditTextAndAnnotationLayout,
  collectRenderedRegions,
  datasetRenderMeta,
  openHarnessPage,
  renderDatasetForPurity,
  typographyAudit,
} from './lib/render-harness.mjs';

function usage() {
  console.error(
    'Usage:\n' +
      '  pnpm verify:d3 -- <dataset-key> [--keep] [--language <code>] [--focus <diagnostic-direction>]\n' +
      '  pnpm record:fidelity -- <dataset-key> --focus <review-direction> [--build <build-id>] [--keep] [--language <code>] [--round <n>]'
  );
}

export function parseArgs(argv) {
  const args = argv.slice(2);
  let keep = false;
  let language = 'en';
  let round = null;
  let focus = 'unspecified';
  let buildId = '';
  const positional = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--') continue;
    if (arg === '--keep') {
      keep = true;
      continue;
    }
    if (arg === '--language' || arg === '--lang') {
      language = args[index + 1];
      index += 1;
      if (!language || language.startsWith('--')) {
        usage();
        process.exit(2);
      }
      continue;
    }
    if (arg === '--round' || arg === '--loop-round') {
      const rawRound = args[index + 1];
      index += 1;
      if (!rawRound || rawRound.startsWith('--') || !/^\d+$/.test(rawRound) || Number(rawRound) < 1) {
        usage();
        process.exit(2);
      }
      round = Number(rawRound);
      continue;
    }
    if (arg === '--focus' || arg === '--main-check' || arg === '--direction') {
      focus = args[index + 1];
      index += 1;
      if (!focus || focus.startsWith('--')) {
        usage();
        process.exit(2);
      }
      continue;
    }
    if (arg === '--build') {
      buildId = args[index + 1];
      index += 1;
      if (!buildId || buildId.startsWith('--')) {
        usage();
        process.exit(2);
      }
      continue;
    }
    positional.push(arg);
  }

  const datasetKey = positional[0];
  if (!datasetKey || positional.length > 1) {
    usage();
    process.exit(2);
  }
  if (buildId && focus === 'unspecified') {
    throw new Error('--build records review evidence and therefore requires an explicit --focus');
  }
  return { datasetKey, keep, language, round, focus, buildId };
}

export function fidelityExecutionMode({ buildId, focus }) {
  return fidelityExecutionModeForOperation({ buildId, focus }, 'verify');
}

export function fidelityExecutionModeForOperation({ buildId, focus }, operation) {
  if (operation === 'verify') return 'diagnostic';
  if (operation !== 'record') throw new Error(`Unsupported fidelity operation class: ${operation}`);
  if (buildId) return 'review-evidence';
  if (focus && focus !== 'unspecified') return 'legacy-manual';
  throw new Error('record:fidelity requires an explicit --focus');
}

function formatPx(value) {
  return Number.isFinite(value) ? `${value.toFixed(1)}px` : 'n/a';
}

function logLabelLayoutAudit(audit) {
  console.log(
    `label-node layout audit: sameAxisLabelNodes=${audit.verticalStacks.length} verticalViolations=${audit.verticalViolations.length} centerViolations=${audit.centerViolations.length} adjacentLabelGaps=${audit.adjacentLabelGaps.length} horizontalSideLabels=${audit.horizontalSideLabels.length} horizontalViolations=${audit.horizontalViolations.length} rule=same-axis vertical gap target 5px/min 4px; short-node centerDelta max 4px; horizontal overlap forbidden (docs/fidelity-loop-rules.md)`
  );

  const maxRows = 12;
  audit.verticalStacks.slice(0, maxRows).forEach((item) => {
    console.log(
      `  same-axis ${item.node}#${item.labelIndex} ${item.direction}: centerDelta=${formatPx(item.centerDelta)} edgeGap=${formatPx(item.gap)} overlap=${formatPx(item.overlap)}`
    );
  });
  if (audit.verticalStacks.length > maxRows) {
    console.log(`  same-axis ... ${audit.verticalStacks.length - maxRows} more`);
  }

  audit.adjacentLabelGaps.slice(0, maxRows).forEach((item) => {
    console.log(
      `  label-gap ${item.node}#${item.upperLabelIndex}->#${item.lowerLabelIndex}: gap=${formatPx(item.gap)}`
    );
  });
  if (audit.adjacentLabelGaps.length > maxRows) {
    console.log(`  label-gap ... ${audit.adjacentLabelGaps.length - maxRows} more`);
  }

  audit.horizontalSideLabels.slice(0, maxRows).forEach((item) => {
    console.log(
      `  horizontal ${item.node}#${item.labelIndex} ${item.side}: edgeGap=${formatPx(item.gap)} overlap=${formatPx(item.overlap)} verticalCenterDelta=${formatPx(item.verticalCenterDelta)} verticalOverlap=${formatPx(item.verticalOverlap)}`
    );
  });
  if (audit.horizontalSideLabels.length > maxRows) {
    console.log(`  horizontal ... ${audit.horizontalSideLabels.length - maxRows} more`);
  }
}

function assertLabelLayoutAudit(audit) {
  if (audit.verticalViolations.length) {
    const details = audit.verticalViolations
      .slice(0, 5)
      .map((item) => `${item.node}#${item.labelIndex} ${item.direction} edgeGap=${formatPx(item.gap)}`)
      .join(', ');
    throw new Error(`Label-node vertical gap failed: ${details}`);
  }
  if (audit.centerViolations.length) {
    const details = audit.centerViolations
      .slice(0, 5)
      .map((item) => `${item.node}#${item.labelIndex} ${item.direction} centerDelta=${formatPx(item.centerDelta)}`)
      .join(', ');
    throw new Error(`Label-node short-node center alignment failed: ${details}`);
  }
  if (audit.horizontalViolations.length) {
    const details = audit.horizontalViolations
      .slice(0, 5)
      .map((item) => `${item.node}#${item.labelIndex} ${item.side} overlap=${formatPx(item.overlap)}`)
      .join(', ');
    throw new Error(`Label-node horizontal overlap failed: ${details}`);
  }
}

export async function main(argv = process.argv, runtime = {}) {
  const operation = runtime.operation || 'verify';
  const options = parseArgs(argv);
  if (operation === 'verify' && options.buildId) {
    throw new Error('--build is only valid with record:fidelity; verify:d3 is read-only');
  }
  const { datasetKey, keep, language, round, focus, buildId } = options;
  const executionMode = fidelityExecutionModeForOperation(options, operation);
  const datasetScript = datasetScriptForKey(datasetKey);
  const datasetPath = path.join(rootDir, datasetScript);
  if (!existsSync(datasetPath)) {
    throw new Error(`Missing dataset file: ${datasetScript}`);
  }

  const indexHtml = await readFile(path.join(rootDir, 'index.html'), 'utf8');
  const scripts = renderHarnessScripts(indexHtml);
  const datasetScripts = registeredDatasetScripts();
  if (!datasetScripts.includes(datasetScript)) {
    throw new Error(`Dataset script is not registered in the dataset manifest: ${datasetScript} (run pnpm sync:index-datasets)`);
  }

  const i18nScripts = new Set(['src/i18n-dictionaries.js', 'src/i18n.js']);
  const renderIdentityPaths = scripts
    .filter((script) => !script.startsWith('data/') && !i18nScripts.has(script))
    .map((script) => path.join(rootDir, script));
  const i18nIdentityPaths = scripts
    .filter((script) => i18nScripts.has(script))
    .map((script) => path.join(rootDir, script));
  const [datasetHash, renderHash, i18nHash] = await Promise.all([
    hashFile(datasetPath),
    hashFiles(renderIdentityPaths),
    hashFiles(i18nIdentityPaths),
  ]);
  let reviewIdentity = {};
  if (executionMode === 'review-evidence') {
    const build = await readDatasetBuild(buildId);
    if (build.key !== datasetKey) {
      throw new Error(`Dataset Build ${buildId} belongs to ${build.key}, not ${datasetKey}`);
    }
    const authored = [...(build.receipts || [])].reverse().find((receipt) => receipt.state === 'AUTHORED');
    if (!authored) {
      throw new Error(`Dataset Build ${buildId} must be AUTHORED before recording fidelity review evidence`);
    }
    const verificationPlanDigest =
      authored.payload?.verificationPlan?.digest || authored.payload?.verificationPlanDigest;
    if (!verificationPlanDigest) {
      throw new Error(`Dataset Build ${buildId} has no versioned VerificationPlan; record the authored snapshot first`);
    }
    reviewIdentity = {
      buildId,
      authoredDigest: authored.payload.snapshotDigest,
      verificationPlanDigest,
    };
  }
  const server = await startStaticServer({ port: 0 });
  const baseUrl = server.url.replace(/\/+$/, '');
  let browser;
  let run;
  let completed = false;

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
    const { page, pageErrors } = await openHarnessPage(context, { baseUrl, scripts });

    const meta = await datasetRenderMeta(page, datasetKey, language);
    const referencePath = resolveSourcePath(meta.referenceSrc);
    run = await createFidelityRun({
      identity: {
        dataset: datasetKey,
        language: meta.language,
        runKind:
          executionMode === 'review-evidence'
            ? 'fidelity-review'
            : executionMode === 'legacy-manual'
              ? 'fidelity'
              : 'diagnostic',
        referenceHash: await hashFile(referencePath),
        protocolVersion:
          executionMode === 'legacy-manual'
            ? LEGACY_FIDELITY_PROTOCOL_VERSION
            : FIDELITY_PROTOCOL_VERSION,
        datasetHash,
        renderHash,
        i18nHash,
        ...reviewIdentity,
      },
    });
    const {
      reference: referenceComparePath,
      candidate: candidatePath,
      diff: diffPath,
      metrics: metricsPath,
      interfaceAudit: interfaceAuditPath,
      interfaceContactSheet: interfaceContactSheetPath,
    } = run.artifacts;

    await page.setViewportSize({ width: meta.width, height: meta.height });
    const fontStatus = await assertProjectFontsLoaded(page);
    const purity = await renderDatasetForPurity(page, datasetKey, language);
    const labelLayoutAudit = await auditLabelLayout(page);
    const { textLayoutAudit, annotationLayoutAudit } = await auditTextAndAnnotationLayout(page);
    const renderedTypographyAudit = await typographyAudit(page, {
      dataset: datasetKey,
      language: meta.language,
    });
    const renderedRegions = await collectRenderedRegions(page);
    const interfaceGeometry = await collectCandidateInterfaceGeometry(page, datasetKey, language);

    assertPurity(purity);
    if (purity.width !== meta.width || purity.height !== meta.height) {
      throw new Error(`SVG size mismatch: expected ${meta.width}x${meta.height}, got ${purity.width}x${purity.height}`);
    }

    await page.locator('#chart > svg').screenshot({ path: candidatePath });
    await copyFile(referencePath, referenceComparePath);
    const interfaceAudit = buildInterfaceAudit({
      geometry: interfaceGeometry,
      candidatePath,
      referencePath,
    });
    await writeFile(interfaceAuditPath, `${JSON.stringify(interfaceAudit, null, 2)}\n`);
    const contactPage = await context.newPage();
    try {
      const urlForProjectPath = (filePath) =>
        `${baseUrl}/${path.relative(rootDir, filePath).split(path.sep).map(encodeURIComponent).join('/')}`;
      await writeInterfaceContactSheet(contactPage, {
        report: interfaceAudit,
        referenceUrl: urlForProjectPath(referencePath),
        candidateUrl: urlForProjectPath(candidatePath),
        outputPath: interfaceContactSheetPath,
      });
    } finally {
      await contactPage.close();
    }
    const metrics = await pngMetrics(referencePath, candidatePath, diffPath, renderedRegions);
    const metricsDocument = {
      dataset: datasetKey,
      language: meta.language,
      reference: meta.referenceSrc,
      candidate: path.relative(rootDir, candidatePath),
      diff: path.relative(rootDir, diffPath),
      purity,
      fontStatus,
      typographyAudit: renderedTypographyAudit,
      full: metrics.full,
      regions: metrics.regions,
      labelLayoutAudit,
      textLayoutAudit,
      annotationLayoutAudit,
      interfaceAudit: {
        path: path.relative(rootDir, interfaceAuditPath),
        contactSheet: path.relative(rootDir, interfaceContactSheetPath),
        mode: interfaceAudit.mode,
        status: interfaceAudit.status,
        enforcementStatus: interfaceAudit.enforcementStatus,
        candidateStatus: interfaceAudit.candidateStatus,
        referenceStatus: interfaceAudit.referenceStatus,
        summary: interfaceAudit.summary,
      },
    };
    // Keep failed-run evidence private. finalizeFidelityRun overwrites this
    // draft with the accepted archive identity only after every gate passes.
    await writeFile(metricsPath, `${JSON.stringify(metricsDocument, null, 2)}\n`);

    if (pageErrors.length) {
      throw new Error(`Page errors during render; no comparison archive accepted:\n${pageErrors.join('\n')}`);
    }
    assertTypographyAudit(renderedTypographyAudit);
    assertLabelLayoutAudit(labelLayoutAudit);
    assertInterfaceAudit(interfaceAudit);

    const archive =
      executionMode === 'diagnostic'
        ? null
        : await finalizeFidelityRun(run, {
            focus,
            fullMetrics: metrics.full,
            metricsDocument,
            round,
            status: executionMode === 'review-evidence' ? 'evidence-ready' : 'accepted',
          });
    completed = true;

    console.log(`dataset: ${datasetKey}`);
    console.log(`language: ${meta.language}`);
    console.log(`execution mode: ${executionMode}`);
    console.log(`run id: ${run.runId}`);
    console.log(`reference: ${keep ? path.relative(rootDir, referenceComparePath) : path.relative(rootDir, referencePath)}`);
    console.log(`candidate: ${keep ? path.relative(rootDir, candidatePath) : '(scratch cleaned)'}`);
    console.log(`diff: ${keep ? path.relative(rootDir, diffPath) : '(scratch cleaned)'}`);
    console.log(`metrics: ${keep ? path.relative(rootDir, metricsPath) : '(scratch cleaned)'}`);
    if (archive) {
      console.log(`archive: ${archive.dir}`);
      console.log(`archive status: ${executionMode === 'review-evidence' ? 'evidence-ready (human review required)' : 'legacy accepted (not Build closure)'}`);
      console.log(`archive round: ${archive.round}`);
      console.log(`archive improvement: ${archive.improvement}${archive.previousArchive ? ` vs ${archive.previousArchive}` : ' (baseline)'}`);
      console.log(`archive focus: ${archive.focus}`);
      if (archive.sharedReferenceError) {
        console.log(`shared reference mirror: failed (${archive.sharedReferenceError}); archived reference: ${archive.reference}`);
      } else if (archive.reference) {
        console.log(`shared reference: ${archive.reference}${archive.referenceChanged ? '' : ' (unchanged)'}`);
      }
    } else {
      console.log('archive: none (read-only diagnostic; automatic pass is not human acceptance)');
    }
    console.log(
      `font: ${Object.entries(fontStatus.loaded)
        .map(([family, loaded]) => `${family} loaded=${loaded}`)
        .join(', ')}`
    );
    console.log(
      `typography audit: status=${renderedTypographyAudit.status} product=${renderedTypographyAudit.productTextCount} brand=${renderedTypographyAudit.brandTextCount} runs=${renderedTypographyAudit.checkedTextRuns} violations=${renderedTypographyAudit.violations.length} rule=G3`
    );
    console.log(
      `purity: imageCount=${purity.imageCount} expectedRasterAnnotations=${purity.expectedRasterHrefs.length} chartImgCount=${purity.chartImgCount} rasterAllowed=${purity.rasterAllowed}`
    );
    logLabelLayoutAudit(labelLayoutAudit);
    console.log(
      `text layout audit: checked=${textLayoutAudit.checkedTexts} overflow=${textLayoutAudit.overflowViolations.length} tolerance=${textLayoutAudit.tolerance}px`
    );
    console.log(
      `annotation clearance audit: annotations=${annotationLayoutAudit.checkedAnnotationTexts} protected=${annotationLayoutAudit.checkedProtectedTexts} overlaps=${annotationLayoutAudit.overlapViolations.length} tolerance=${annotationLayoutAudit.tolerance}px`
    );
    console.log(
      `G12 interface audit: mode=${interfaceAudit.mode} status=${interfaceAudit.status} enforcement=${interfaceAudit.enforcementStatus} candidate=${interfaceAudit.candidateStatus} reference=${interfaceAudit.referenceStatus} expected=${interfaceAudit.summary.expectedInterfaces} audited=${interfaceAudit.summary.auditedInterfaces} passed=${interfaceAudit.summary.passedInterfaces} failed=${interfaceAudit.summary.failedInterfaces} pending=${interfaceAudit.summary.pendingInterfaces} exceptions=${interfaceAudit.summary.documentedExceptions} notScored=${interfaceAudit.summary.notScoredInterfaces} violations=${interfaceAudit.summary.violations}`
    );
    console.log(
      `interface report: ${archive ? `${archive.dir}/${path.basename(interfaceAuditPath)}` : keep ? path.relative(rootDir, interfaceAuditPath) : '(diagnostic scratch cleaned)'}`
    );
    console.log(
      `interface contact sheet: ${archive ? `${archive.dir}/${path.basename(interfaceContactSheetPath)}` : keep ? path.relative(rootDir, interfaceContactSheetPath) : '(diagnostic scratch cleaned)'}`
    );
    console.log(`viewport: ${metrics.full.width}x${metrics.full.height}`);
    console.log(`RGB MAE: ${metrics.full.mae.toFixed(4)}`);
    console.log(`MAE similarity: ${metrics.full.similarity.toFixed(6)}`);
    console.log(`max channel difference: ${metrics.full.maxChannelDiff}`);
    console.log(`same-pixel ratio: ${metrics.full.samePixelRatio.toFixed(6)}`);
    console.log(`changed-pixel ratio: ${metrics.full.changedPixelRatio.toFixed(6)}`);
    console.log(`diff bounding box: ${formatDiffBoundingBox(metrics.full.diffBoundingBox)}`);
    console.log(`region metrics: ${metrics.regions.length} region(s)`);
    metrics.regions
      .slice()
      .sort((a, b) => b.changedPixelRatio - a.changedPixelRatio || b.mae - a.mae)
      .slice(0, 8)
      .forEach((region) => {
        console.log(
          `  region ${region.region}: mae=${region.mae.toFixed(4)} similarity=${region.similarity.toFixed(6)} changed=${region.changedPixelRatio.toFixed(6)} box=${region.x},${region.y},${region.width},${region.height}`
        );
      });
  } catch (error) {
    if (run && !completed) {
      try {
        await markFidelityRunFailed(run, error);
      } catch (manifestError) {
        console.error(`Could not record failed fidelity run: ${manifestError.message}`);
      }
    }
    throw error;
  } finally {
    if (browser) await browser.close();
    await server.close();
    if (run) {
      if (keep) {
        console.log(`run scratch: ${path.relative(rootDir, run.scratchDir)}`);
      } else {
        await cleanupFidelityRun(run);
      }
    }
  }
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main(process.argv, { operation: 'verify' }).catch((err) => {
    console.error(err.stack || err.message);
    process.exit(1);
  });
}
