#!/usr/bin/env node
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { datasetScriptForKey, dataScriptsFromIndex, renderHarnessScripts } from './script-sources.mjs';
import { startStaticServer } from './dev-server.mjs';
import { rootDir } from './lib/project.mjs';
import { PROJECT_FONT_FAMILIES, localFontFaces } from './lib/local-fonts.mjs';
import { formatDiffBoundingBox, pngMetrics } from './lib/png-diff.mjs';
import { archiveCompare, cleanCompare, compareDir, createArchivePlan } from './lib/compare-workspace.mjs';
import { assertPurity } from './lib/d3-hard-gates.mjs';

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

function toUrl(baseUrl, src) {
  return new URL(src, `${baseUrl}/`).toString();
}

function harnessFontFaces() {
  return localFontFaces(PROJECT_FONT_FAMILIES);
}

function harnessHtml(baseUrl, scripts) {
  const scriptTags = scripts
    .map((src) => `<script src="${toUrl(baseUrl, src)}"></script>`)
    .join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <base href="${baseUrl}/" />
  <style>
    ${harnessFontFaces()}
    html, body { margin: 0; padding: 0; background: #efefef; }
    #chart { margin: 0; padding: 0; overflow: hidden; }
    #chart svg { display: block; }
  </style>
</head>
<body>
  <div id="chart"></div>
  ${scriptTags}
</body>
</html>`;
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
      `  horizontal ${item.node}#${item.labelIndex} ${item.side}: edgeGap=${formatPx(item.gap)} overlap=${formatPx(item.overlap)} verticalOverlap=${formatPx(item.verticalOverlap)}`
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
  const datasetScripts = dataScriptsFromIndex(indexHtml);
  if (!datasetScripts.includes(datasetScript)) {
    throw new Error(`Dataset script is not registered in index.html: ${datasetScript}`);
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
    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.setContent(harnessHtml(baseUrl, scripts), { waitUntil: 'load' });

    const meta = await page.evaluate(({ key, requestedLanguage }) => {
      const dataset = window.DATASETS?.find((item) => item.key === key);
      if (!dataset) throw new Error(`Dataset not found: ${key}`);
      const i18n = window.SANKEY_I18N;
      const language = i18n?.normalizeLanguage ? i18n.normalizeLanguage(requestedLanguage) : requestedLanguage || 'en';
      const renderDataset =
        language && language !== 'en'
          ? i18n?.localizeDataset?.(dataset, language)
          : dataset;
      if (!renderDataset) throw new Error(`Dataset localization failed: ${key}, language=${language}`);
      const ref = renderDataset.meta?.referenceImage;
      if (!ref || typeof ref !== 'object' || !ref.src || !ref.width || !ref.height) {
        throw new Error(`Dataset ${key} must define meta.referenceImage { src, width, height }`);
      }
      return { referenceSrc: ref.src, width: ref.width, height: ref.height, language };
    }, { key: datasetKey, requestedLanguage: language });

    await page.setViewportSize({ width: meta.width, height: meta.height });
    const purity = await page.evaluate(async ({ key, requestedLanguage }) => {
      const dataset = window.DATASETS.find((item) => item.key === key);
      const i18n = window.SANKEY_I18N;
      const language = i18n?.normalizeLanguage ? i18n.normalizeLanguage(requestedLanguage) : requestedLanguage || 'en';
      const renderDataset =
        language && language !== 'en'
          ? i18n?.localizeDataset?.(dataset, language)
          : dataset;
      if (!renderDataset) throw new Error(`Dataset localization failed: ${key}, language=${language}`);
      const chart = document.querySelector('#chart');
      chart.style.width = `${renderDataset.meta.referenceImage.width}px`;
      chart.style.height = `${renderDataset.meta.referenceImage.height}px`;
      window.SankeyEngine.render('#chart', renderDataset);
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');
      svg.setAttribute('width', String(renderDataset.meta.referenceImage.width));
      svg.setAttribute('height', String(renderDataset.meta.referenceImage.height));
      svg.style.width = `${renderDataset.meta.referenceImage.width}px`;
      svg.style.height = `${renderDataset.meta.referenceImage.height}px`;
      const images = Array.from(svg.querySelectorAll('image'));
      const imageHrefs = images.map(
        (image) =>
          image.getAttribute('href') ||
          image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
          image.href?.baseVal ||
          ''
      );
      const expectedRasterHrefs = (Array.isArray(renderDataset.rasterAnnotations)
        ? renderDataset.rasterAnnotations
        : renderDataset.rasterAnnotations
          ? [renderDataset.rasterAnnotations]
          : []
      )
        .filter(Boolean)
        .map((item) => item.href || item.src || '')
        .filter(Boolean);
      const forbiddenElements = Array.from(
        chart.querySelectorAll('canvas,picture,video,iframe,object,embed,foreignObject')
      ).map((element) => element.tagName.toLowerCase());
      const backgroundImageElements = Array.from(chart.querySelectorAll('*'))
        .filter((element) => {
          const value = window.getComputedStyle(element).backgroundImage;
          return value && value !== 'none';
        })
        .map((element) => {
          const tag = element.tagName.toLowerCase();
          const cls = element.getAttribute('class');
          const id = element.getAttribute('id');
          return `${tag}${id ? `#${id}` : ''}${cls ? `.${String(cls).replace(/\s+/g, '.')}` : ''}`;
        });
      await Promise.all(
        imageHrefs
          .filter(Boolean)
          .map(
            (href) =>
              new Promise((resolve, reject) => {
                const probe = new Image();
                probe.onload = resolve;
                probe.onerror = () => reject(new Error(`Failed to load SVG image: ${href}`));
                probe.src = href;
              })
          )
      );
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return {
        imageCount: images.length,
        imageHrefs,
        expectedRasterHrefs,
        rasterAllowed: renderDataset.render?.allowRasterAnnotations === true,
        chartImgCount: document.querySelectorAll('#chart img').length,
        forbiddenElements,
        backgroundImageElements,
        viewBox: svg.getAttribute('viewBox'),
        width: Math.round(svg.getBoundingClientRect().width),
        height: Math.round(svg.getBoundingClientRect().height),
      };
    }, { key: datasetKey, requestedLanguage: language });
    const fontStatus = await page.evaluate(async (requiredFonts) => {
      // Explicitly load every project face: data-URI @font-face rules stay
      // "unloaded" until some text uses them, so a pure fonts.check() would
      // fail for families/weights the current dataset happens not to use.
      await Promise.all(
        requiredFonts.flatMap(({ family, weights }) =>
          weights.map((weight) => document.fonts.load(`${weight} 16px "${family}"`))
        )
      );
      await document.fonts.ready;
      const loaded = Object.fromEntries(
        requiredFonts.map(({ family }) => [family, document.fonts.check(`16px "${family}"`)])
      );
      return {
        loaded,
        allLoaded: Object.values(loaded).every(Boolean),
        faces: Array.from(document.fonts).map((font) => ({
          family: font.family,
          weight: font.weight,
          status: font.status,
        })),
      };
    }, PROJECT_FONT_FAMILIES.map(({ family, weights }) => ({ family, weights })));
    if (!fontStatus.allLoaded) {
      throw new Error(
        `Local fonts did not load; refusing to score fallback-font render: ${JSON.stringify(fontStatus)}`
      );
    }

    const labelLayoutAudit = await page.evaluate(() => {
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');

      const round = (value) => Math.round(value * 10) / 10;
      const boxFor = (element) => {
        const box = element.getBBox();
        return {
          x: round(box.x),
          y: round(box.y),
          width: round(box.width),
          height: round(box.height),
          left: round(box.x),
          top: round(box.y),
          right: round(box.x + box.width),
          bottom: round(box.y + box.height),
          centerX: round(box.x + box.width / 2),
          centerY: round(box.y + box.height / 2),
        };
      };

      const nodeBoxes = new Map(
        Array.from(svg.querySelectorAll('.sankey-node[data-node]')).map((element) => {
          const id = element.getAttribute('data-node');
          return [id, boxFor(element)];
        })
      );

      const labelBoxes = Array.from(svg.querySelectorAll('.sankey-label[data-node]:not(.sankey-icon)'))
        .map((element, index) => ({
          node: element.getAttribute('data-node'),
          labelIndex: index,
          box: boxFor(element),
        }))
        .filter((item) => item.node && item.box.width > 0 && item.box.height > 0);

      const horizontalOverlap = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left);
      const verticalOverlap = (a, b) => Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      const stackedLabelMinGap = 4;
      const shortNodeCenterMaxDelta = 4;
      const verticalStacks = [];
      const horizontalSideLabels = [];
      const byNode = new Map();

      labelBoxes.forEach((label) => {
        const node = nodeBoxes.get(label.node);
        if (!node) return;

        if (!byNode.has(label.node)) byNode.set(label.node, []);
        byNode.get(label.node).push(label);

        const overlapX = horizontalOverlap(label.box, node);
        const centerDelta = Math.abs(label.box.centerX - node.centerX);
        const sameAxisTolerance = Math.max(12, Math.min(40, node.width / 2));
        const verticalOverlapPx = verticalOverlap(label.box, node);
        const sideAdjacent = label.box.centerX < node.left || label.box.centerX > node.right;
        if (verticalOverlapPx > 0 && sideAdjacent) {
          const overlap = overlapX;
          if (label.box.right <= node.left) {
            horizontalSideLabels.push({
              node: label.node,
              labelIndex: label.labelIndex,
              side: 'left-of-node',
              gap: round(node.left - label.box.right),
              overlap: 0,
              verticalOverlap: round(verticalOverlapPx),
            });
          } else if (label.box.left >= node.right) {
            horizontalSideLabels.push({
              node: label.node,
              labelIndex: label.labelIndex,
              side: 'right-of-node',
              gap: round(label.box.left - node.right),
              overlap: 0,
              verticalOverlap: round(verticalOverlapPx),
            });
          } else if (overlap > 0) {
            horizontalSideLabels.push({
              node: label.node,
              labelIndex: label.labelIndex,
              side: label.box.centerX < node.centerX ? 'left-overlap' : 'right-overlap',
              gap: round(-overlap),
              overlap: round(overlap),
              verticalOverlap: round(verticalOverlapPx),
            });
          }
        }

        const shortNode = node.height <= 12 || node.width <= 12;
        const verticallySeparated = label.box.bottom <= node.top || label.box.top >= node.bottom;
        const sameAxis = overlapX > 0 && (centerDelta <= sameAxisTolerance || (shortNode && verticallySeparated));
        if (!sameAxis) return;

        const above = label.box.centerY <= node.centerY;
        const gap = above ? node.top - label.box.bottom : label.box.top - node.bottom;

        verticalStacks.push({
          node: label.node,
          labelIndex: label.labelIndex,
          direction: above ? 'above-node' : 'below-node',
          centerDelta: round(centerDelta),
          gap: round(gap),
          overlap: round(Math.max(0, -gap)),
          horizontalOverlap: round(overlapX),
          shortNode,
        });
      });

      const adjacentLabelGaps = [];
      byNode.forEach((labels, node) => {
        const sorted = labels.slice().sort((a, b) => a.box.top - b.box.top);
        for (let i = 1; i < sorted.length; i += 1) {
          const upper = sorted[i - 1];
          const lower = sorted[i];
          const gap = round(lower.box.top - upper.box.bottom);
          if (gap < 0 || horizontalOverlap(upper.box, lower.box) <= 0) continue;
          adjacentLabelGaps.push({
            node,
            upperLabelIndex: upper.labelIndex,
            lowerLabelIndex: lower.labelIndex,
            gap,
          });
        }
      });

      const horizontalViolations = horizontalSideLabels.filter((item) => item.overlap > 0);
      const verticalViolations = verticalStacks.filter((item) => item.gap < stackedLabelMinGap);
      const centerViolations = verticalStacks.filter((item) => item.shortNode && item.centerDelta > shortNodeCenterMaxDelta);

      return { verticalStacks, verticalViolations, centerViolations, adjacentLabelGaps, horizontalSideLabels, horizontalViolations };
    });

    const renderedRegions = await page.evaluate(() => {
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');

      const svgBox = svg.getBoundingClientRect();
      const width = Math.round(svgBox.width);
      const height = Math.round(svgBox.height);
      const regions = [];
      const seen = new Set();
      const round = (value) => Math.round(value * 10) / 10;
      const addBox = (region, element, note = '') => {
        if (!element || typeof element.getBBox !== 'function') return;
        let box;
        try {
          box = element.getBBox();
        } catch {
          return;
        }
        if (!box || box.width <= 0 || box.height <= 0) return;
        const x = Math.max(0, Math.floor(box.x));
        const y = Math.max(0, Math.floor(box.y));
        const right = Math.min(width, Math.ceil(box.x + box.width));
        const bottom = Math.min(height, Math.ceil(box.y + box.height));
        if (right <= x || bottom <= y) return;
        const key = `${region}:${x}:${y}:${right - x}:${bottom - y}`;
        if (seen.has(key)) return;
        seen.add(key);
        regions.push({
          region,
          x,
          y,
          width: right - x,
          height: bottom - y,
          note,
        });
      };
      const addRect = (region, x, y, w, h, note = '') => {
        const left = Math.max(0, Math.floor(x));
        const top = Math.max(0, Math.floor(y));
        const right = Math.min(width, Math.ceil(x + w));
        const bottom = Math.min(height, Math.ceil(y + h));
        if (right <= left || bottom <= top) return;
        const key = `${region}:${left}:${top}:${right - left}:${bottom - top}`;
        if (seen.has(key)) return;
        seen.add(key);
        regions.push({ region, x: left, y: top, width: right - left, height: bottom - top, note });
      };

      addRect('edge:top', 0, 0, width, Math.min(80, height), 'canvas boundary sentinel');
      addRect('edge:bottom', 0, Math.max(0, height - 80), width, Math.min(80, height), 'canvas boundary sentinel');
      addRect('edge:left', 0, 0, Math.min(80, width), height, 'canvas boundary sentinel');
      addRect('edge:right', Math.max(0, width - 80), 0, Math.min(80, width), height, 'canvas boundary sentinel');

      Array.from(svg.querySelectorAll('.sankey-node[data-node]')).forEach((element) => {
        addBox(`node:${element.getAttribute('data-node')}`, element, 'rendered node bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-link')).forEach((element, index) => {
        let box;
        try {
          box = element.getBBox();
        } catch {
          return;
        }
        const strokeWidth = Number(element.getAttribute('stroke-width')) || 0;
        const pad = Math.ceil(strokeWidth / 2) + 2;
        addRect(
          `link:${element.getAttribute('data-source')}->${element.getAttribute('data-target')}#${index}`,
          box.x - pad,
          box.y - pad,
          box.width + pad * 2,
          box.height + pad * 2,
          `rendered path bbox padded by ${pad}px`
        );
      });
      Array.from(svg.querySelectorAll('.sankey-label[data-node]:not(.sankey-icon)')).forEach((element, index) => {
        addBox(`label:${element.getAttribute('data-node')}#${index}`, element, 'rendered label bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-label.sankey-icon[data-node]')).forEach((element, index) => {
        addBox(`icon:${element.getAttribute('data-node')}#${index}`, element, 'rendered vector icon bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-annotations')).forEach((element, index) => {
        addBox(`annotation:${index}`, element, 'annotationsSvg group bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-raster-annotations image')).forEach((element, index) => {
        const key = element.getAttribute('data-key') || index;
        addBox(`raster:${key}`, element, 'approved runtime raster annotation bbox');
      });
      Array.from(svg.children).forEach((element, index) => {
        const tag = element.tagName.toLowerCase();
        const cls = element.getAttribute('class') || '';
        if (tag === 'text') addBox(`direct-text:${index}`, element, 'title or period text bbox');
        if (tag === 'g' && !cls) addBox(`direct-group:${index}`, element, 'unclassified top-level SVG group bbox');
      });

      return regions.map((region) => ({
        ...region,
        x: round(region.x),
        y: round(region.y),
        width: round(region.width),
        height: round(region.height),
      }));
    });

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
