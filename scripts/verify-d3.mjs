#!/usr/bin/env node
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { datasetScriptForKey, registeredDatasetScripts, renderHarnessScripts } from './script-sources.mjs';
import { startStaticServer } from './dev-server.mjs';
import { rootDir } from './lib/project.mjs';
import { formatDiffBoundingBox, pngMetrics } from './lib/png-diff.mjs';
import { archiveCompare, cleanCompare, compareDir, createArchivePlan } from './lib/compare-workspace.mjs';
import { assertPurity } from './lib/d3-hard-gates.mjs';
import {
  assertProjectFontsLoaded,
  auditLabelLayout,
  collectRenderedRegions,
  datasetRenderMeta,
  openHarnessPage,
  renderDatasetForPurity,
} from './lib/render-harness.mjs';

function usage() {
  console.error(
    'Usage: pnpm verify:d3 -- <dataset-key> [--keep] [--language <code>] [--round <n>] [--focus <main-check-direction>]'
  );
}

function parseArgs(argv) {
  const args = argv.slice(2);
  let keep = false;
  let language = 'en';
  let round = null;
  let focus = 'unspecified';
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
    positional.push(arg);
  }

  const datasetKey = positional[0];
  if (!datasetKey || positional.length > 1) {
    usage();
    process.exit(2);
  }
  return { datasetKey, keep, language, round, focus };
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

async function main() {
  const { datasetKey, keep, language, round, focus } = parseArgs(process.argv);
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

  await cleanCompare();

  const server = await startStaticServer({ port: 0 });
  const baseUrl = server.url.replace(/\/+$/, '');
  let browser;
  const referenceComparePath = path.join(compareDir, `${datasetKey}-reference.png`);
  const localizedSuffix = language && language !== 'en' ? `-${language}` : '';
  const candidatePath = path.join(compareDir, `${datasetKey}${localizedSuffix}-d3.png`);
  const diffPath = path.join(compareDir, `${datasetKey}${localizedSuffix}-pixel-diff-x4.png`);
  const metricsPath = path.join(compareDir, `${datasetKey}${localizedSuffix}-metrics.json`);

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
    const { page, pageErrors } = await openHarnessPage(context, { baseUrl, scripts });

    const meta = await datasetRenderMeta(page, datasetKey, language);
    await page.setViewportSize({ width: meta.width, height: meta.height });
    const purity = await renderDatasetForPurity(page, datasetKey, language);
    const fontStatus = await assertProjectFontsLoaded(page);

    const labelLayoutAudit = await auditLabelLayout(page);

    const renderedRegions = await collectRenderedRegions(page);

    assertPurity(purity);
    if (purity.width !== meta.width || purity.height !== meta.height) {
      throw new Error(`SVG size mismatch: expected ${meta.width}x${meta.height}, got ${purity.width}x${purity.height}`);
    }

    await page.locator('#chart > svg').screenshot({ path: candidatePath });

    const referencePath = path.join(rootDir, meta.referenceSrc);
    await copyFile(referencePath, referenceComparePath);
    const metrics = await pngMetrics(referencePath, candidatePath, diffPath, renderedRegions);
    const archivePlan = await createArchivePlan(datasetKey, {
      focus,
      fullMetrics: metrics.full,
      language: meta.language,
      round,
    });
    await writeFile(
      metricsPath,
      `${JSON.stringify(
        {
          dataset: datasetKey,
          language: meta.language,
          reference: path.relative(rootDir, referencePath),
          candidate: path.relative(rootDir, candidatePath),
          diff: path.relative(rootDir, diffPath),
          purity,
          full: metrics.full,
          regions: metrics.regions,
          labelLayoutAudit,
          archive: {
            dir: path.relative(rootDir, archivePlan.archiveDir),
            name: archivePlan.archiveName,
            round: archivePlan.round,
            improvement: archivePlan.improvement,
            focus: archivePlan.focus,
            previousArchive: archivePlan.previousArchive,
          },
        },
        null,
        2
      )}\n`
    );
    const archive = await archiveCompare(datasetKey, archivePlan);
    if (pageErrors.length) {
      throw new Error(`Page errors during render; comparison artifacts archived at ${archive.dir}:\n${pageErrors.join('\n')}`);
    }

    console.log(`dataset: ${datasetKey}`);
    console.log(`language: ${meta.language}`);
    console.log(`reference: ${keep ? path.relative(rootDir, referenceComparePath) : path.relative(rootDir, referencePath)}`);
    console.log(`candidate: ${keep ? path.relative(rootDir, candidatePath) : '(scratch cleaned)'}`);
    console.log(`diff: ${keep ? path.relative(rootDir, diffPath) : '(scratch cleaned)'}`);
    console.log(`metrics: ${keep ? path.relative(rootDir, metricsPath) : '(scratch cleaned)'}`);
    console.log(`archive: ${archive.dir}`);
    console.log(`archive round: ${archive.round}`);
    console.log(`archive improvement: ${archive.improvement}${archive.previousArchive ? ` vs ${archive.previousArchive}` : ' (baseline)'}`);
    console.log(`archive focus: ${archive.focus}`);
    if (archive.reference) {
      console.log(`shared reference: ${archive.reference}${archive.referenceChanged ? '' : ' (unchanged)'}`);
    }
    console.log(
      `font: ${Object.entries(fontStatus.loaded)
        .map(([family, loaded]) => `${family} loaded=${loaded}`)
        .join(', ')}`
    );
    console.log(
      `purity: imageCount=${purity.imageCount} expectedRasterAnnotations=${purity.expectedRasterHrefs.length} chartImgCount=${purity.chartImgCount} rasterAllowed=${purity.rasterAllowed}`
    );
    logLabelLayoutAudit(labelLayoutAudit);
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
    if (labelLayoutAudit.verticalViolations.length) {
      const details = labelLayoutAudit.verticalViolations
        .slice(0, 5)
        .map((item) => `${item.node}#${item.labelIndex} ${item.direction} edgeGap=${formatPx(item.gap)}`)
        .join(', ');
      throw new Error(`Label-node vertical gap failed: ${details}`);
    }
    if (labelLayoutAudit.centerViolations.length) {
      const details = labelLayoutAudit.centerViolations
        .slice(0, 5)
        .map((item) => `${item.node}#${item.labelIndex} ${item.direction} centerDelta=${formatPx(item.centerDelta)}`)
        .join(', ');
      throw new Error(`Label-node short-node center alignment failed: ${details}`);
    }
    if (labelLayoutAudit.horizontalViolations.length) {
      const details = labelLayoutAudit.horizontalViolations
        .slice(0, 5)
        .map((item) => `${item.node}#${item.labelIndex} ${item.side} overlap=${formatPx(item.overlap)}`)
        .join(', ');
      throw new Error(`Label-node horizontal overlap failed: ${details}`);
    }
  } finally {
    if (browser) await browser.close();
    await server.close();
    if (!keep) await cleanCompare();
  }
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});
