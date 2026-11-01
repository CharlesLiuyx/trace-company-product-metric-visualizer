#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { assert, rootDir } from './lib/project.mjs';
import {
  assertProjectFontsLoaded,
  assertTypographyAudit,
  typographyAudit,
} from './lib/render-harness.mjs';
import {
  assertComparisonMoneyScale,
  comparisonMoneyScaleSnapshot,
  selectAllIncomeStatementPeriods,
  waitForCalibratedComparison,
} from './lib/comparison-scale-browser.mjs';

const defaultHtml = 'output/trace-company-product-metric-visualizer.html';
// Raster datasets are swept by up to three loaded documents at once; every
// dataset is still rendered and asserted exactly once.
const RASTER_PAGES = Math.min(3, Math.max(1, os.availableParallelism() - 1));

function primaryFontFamily(value) {
  return String(value || '').split(',')[0].trim().replace(/^(['"])(.*)\1$/, '$2');
}

function parseArgs(argv) {
  // pnpm forwards a literal `--` before script arguments.
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const html = args[0] || defaultHtml;
  if (args.length > 1) throw new Error(`Unknown argument(s): ${args.slice(1).join(' ')}`);
  return { html };
}

function inspectMarkup(filePath) {
  const html = readFileSync(filePath, 'utf8');
  const forbidden = [
    { label: 'external script tags', re: /<script\b[^>]*\bsrc=["'][^"']+["']/i },
    { label: 'stylesheet link tags', re: /<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["'][^"']+["']/i },
    { label: 'preconnect link tags', re: /<link\b[^>]*\brel=["']preconnect["']/i },
    { label: 'Google font URLs', re: /https:\/\/fonts\.(?:googleapis|gstatic)\.com/i },
    { label: 'raw processed image requests', re: /<(?:img|image)\b[^>]*\bsrc=["']input\/processed\//i },
    { label: 'raw runtime raster asset requests', re: /data\/assets\/raster-annotations\/[^"']+\.(?:png|jpe?g|webp|svg)/i },
  ];
  for (const { label, re } of forbidden) {
    assert(!re.test(html), `Standalone HTML still contains ${label}`);
  }
  assertProcessedImagesNotInlined(html);
}

// Equivalent to html.includes(`data:<mime>;base64,<payload>`) per reference
// image, but the 140MB document is scanned once: every inlined data URI is
// indexed by MIME type and its first payload characters, and only matching
// candidates are compared in full.
const DATA_URI_PREFIX_CHARS = 64;

function inlinedDataUriIndex(html) {
  const index = new Map();
  for (const match of html.matchAll(/data:(image\/(?:png|jpeg|webp));base64,/g)) {
    const start = match.index + match[0].length;
    const key = `${match[1]};${html.slice(start, start + DATA_URI_PREFIX_CHARS)}`;
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(start);
  }
  return index;
}

function assertProcessedImagesNotInlined(html) {
  const processedDir = path.join(rootDir, 'input/processed');
  if (!existsSync(processedDir)) return;
  let index;
  for (const fileName of readdirSync(processedDir)) {
    if (!/\.(?:png|jpe?g|webp)$/i.test(fileName)) continue;
    const filePath = path.join(processedDir, fileName);
    const ext = path.extname(fileName).toLowerCase();
    const mimeType = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
    const payload = readFileSync(filePath).toString('base64');
    let inlined;
    if (payload.length < DATA_URI_PREFIX_CHARS) {
      inlined = html.includes(`data:${mimeType};base64,${payload}`);
    } else {
      index ??= inlinedDataUriIndex(html);
      const starts = index.get(`${mimeType};${payload.slice(0, DATA_URI_PREFIX_CHARS)}`) || [];
      inlined = starts.some((start) => html.startsWith(payload, start));
    }
    assert(!inlined, `Standalone HTML inlined processed reference image: ${fileName}`);
  }
}

// Switch datasets inside the already-loaded document through the viewer's
// hashchange route. A same-document navigation keeps the previous #chart svg,
// so the wait is bound to the target key and to a freshly rendered svg (the
// engine replaces the svg element on every render).
async function showDatasetByHash(page, key, timeoutMs = 10000) {
  const failure = await page.evaluate(async ({ target, timeoutMs }) => {
    const chartSvg = () => document.querySelector('#chart svg');
    // An already-active target has no hashchange to wait for; its svg is current.
    const stale = currentDataset()?.key === target ? null : chartSvg();
    window.location.hash = encodeURIComponent(target);
    const deadline = performance.now() + timeoutMs;
    while (!(currentDataset()?.key === target && chartSvg() && chartSvg() !== stale)) {
      if (performance.now() > deadline) return `active ${currentDataset()?.key || 'none'}`;
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    return '';
  }, { target: key, timeoutMs });
  assert(!failure, `${key} did not render within ${timeoutMs}ms of hash navigation (${failure})`);
}

async function waitForSvgImages(page) {
  return page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('#chart svg image'));
    const hrefs = images.map(
      (image) =>
        image.href?.baseVal ||
        image.getAttribute('href') ||
        image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
        ''
    );
    await Promise.all(
      images.map(
        (image) =>
          new Promise((resolve, reject) => {
            const href =
              image.href?.baseVal ||
              image.getAttribute('href') ||
              image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
              '';
            const probe = new Image();
            probe.onload = resolve;
            probe.onerror = () => reject(new Error(`Failed to load SVG image: ${href.slice(0, 120)}`));
            probe.src = href;
          })
      )
    );
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return { count: images.length, hrefs };
  });
}

async function verifyInBrowser(filePath) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 });
  const pageErrors = [];
  const externalRequests = [];
  const documentUrl = pathToFileURL(filePath).toString();

  // Each page loads the document exactly once; the extra pages only share the
  // raster sweep and load in parallel with the first.
  const openDocument = async () => {
    const documentPage = await context.newPage();
    documentPage.on('pageerror', (err) => pageErrors.push(err.message));
    documentPage.on('request', (request) => {
      const url = request.url();
      if (url.startsWith('http://') || url.startsWith('https://')) externalRequests.push(url);
      if (url.startsWith('file:') && url !== documentUrl) externalRequests.push(url);
    });
    await documentPage.goto(documentUrl, { waitUntil: 'load' });
    await documentPage.waitForSelector('#chart svg', { timeout: 10000 });
    return documentPage;
  };

  try {
    const pages = await Promise.all(Array.from({ length: RASTER_PAGES }, openDocument));
    const [page] = pages;
    const fontStatus = await assertProjectFontsLoaded(page);
    const d3State = await page.evaluate(() => ({
      activeDataset:
        document.querySelector('#activeDatasetName')?.textContent ||
        document.querySelector('#actionTitle')?.textContent ||
        '',
      activeDatasetKey:
        (typeof currentDataset === 'function' && currentDataset()?.key) ||
        (typeof currentRecord === 'function' && currentRecord()?.dataset?.key) ||
        '',
      language:
        (typeof state !== 'undefined' && state?.language) ||
        document.documentElement.lang ||
        'en',
      hasSvg: !!document.querySelector('#chart svg'),
      hasReferenceImage: !!document.querySelector('#chart img'),
      svgButtonDisabled: document.querySelector('#svgBtn')?.disabled,
      montserratLoaded:
        document.fonts.check('16px Montserrat') || document.fonts.check('16px "Montserrat"'),
    }));
    const renderedTypographyAudit = await typographyAudit(page, {
      dataset: d3State.activeDatasetKey,
      language: d3State.language,
    // Unbound historical catalog: record proportions; Build fidelity enforces G3d.
    glyphProportionPolicy: 'audit',
    });
    assertTypographyAudit(renderedTypographyAudit);
    const fontBoundaries = await page.evaluate(() => {
      const font = (selector) => {
        const element = document.querySelector(selector);
        return element ? getComputedStyle(element).fontFamily : '';
      };
      return {
        toolbar: font('.toolbar'),
        sidebar: font('#datasetPanel'),
        actionbar: font('.view-actionbar'),
        sankeyView: font('#sankeyView'),
        chartTheme: typeof chartTheme === 'function' ? chartTheme().fontFamily : '',
      };
    });
    for (const role of ['toolbar', 'sidebar', 'actionbar']) {
      assert(
        primaryFontFamily(fontBoundaries[role]) === 'Montserrat',
        `Standalone ${role} expected Montserrat, got ${fontBoundaries[role] || 'no computed font'}`
      );
    }
    for (const role of ['sankeyView', 'chartTheme']) {
      assert(
        primaryFontFamily(fontBoundaries[role]) === 'Noto Sans',
        `Standalone ${role} expected Noto Sans, got ${fontBoundaries[role] || 'no computed font'}`
      );
    }

    assert(!pageErrors.length, `Page errors:\n${pageErrors.join('\n')}`);
    assert(!externalRequests.length, `Standalone HTML made external request(s):\n${externalRequests.join('\n')}`);
    assert(d3State.activeDataset, 'No active dataset rendered');
    assert(d3State.hasSvg, 'd3 mode did not render an SVG');
    assert(!d3State.hasReferenceImage, 'Standalone viewer should not render a reference image');
    assert(d3State.svgButtonDisabled === false, 'SVG export button should be enabled in d3 mode');
    assert(d3State.montserratLoaded, 'Inline Montserrat font did not load');

    // Raster-annotation datasets are discovered from the bundled data, not hardcoded.
    const rasterDatasets = await page.evaluate(() =>
      (window.DATASETS || [])
        .filter(
          (d) =>
            d?.render?.allowRasterAnnotations &&
            Array.isArray(d.rasterAnnotations) &&
            d.rasterAnnotations.length
        )
        .map((d) => ({ key: d.key, expected: d.rasterAnnotations.length }))
    );

    const rasterResults = new Array(rasterDatasets.length);
    await Promise.all(pages.map(async (rasterPage, worker) => {
      for (let index = worker; index < rasterDatasets.length; index += pages.length) {
        const { key, expected } = rasterDatasets[index];
        await showDatasetByHash(rasterPage, key);
        const images = await waitForSvgImages(rasterPage);
        assert(
          images.count === expected,
          `${key} should render ${expected} raster annotation image(s), got ${images.count}`
        );
        assert(
          images.hrefs.every((href) => /^data:image\/(?:png|jpeg|webp|svg\+xml);base64,/.test(href)),
          `${key} raster annotation(s) were not inlined:\n${images.hrefs.join('\n')}`
        );
        rasterResults[index] = { key, count: images.count };
      }
    }));

    await showDatasetByHash(page, 'apple-q2-fy26');
    const comparisonCount = await selectAllIncomeStatementPeriods(page, 'Apple');
    assert(comparisonCount === 16, `standalone Apple fixture has ${comparisonCount} periods, expected 16`);
    await waitForCalibratedComparison(page, comparisonCount);
    const comparisonSnapshot = await comparisonMoneyScaleSnapshot(page);
    assertComparisonMoneyScale(
      comparisonSnapshot,
      comparisonCount,
      'standalone Apple all-periods'
    );
    assert(!pageErrors.length, `Page errors:\n${pageErrors.join('\n')}`);
    assert(!externalRequests.length, `Standalone HTML made external request(s):\n${externalRequests.join('\n')}`);

    console.log(
      JSON.stringify(
        {
          d3State,
          fontStatus,
          fontBoundaries,
          typographyAudit: renderedTypographyAudit,
          rasterDatasets: rasterResults,
          comparisonScale: {
            dataset: 'Apple',
            cards: comparisonCount,
            status: comparisonSnapshot.status,
          },
        },
        null,
        2
      )
    );
  } finally {
    await browser.close();
  }
}

async function main() {
  const { html } = parseArgs(process.argv);
  const filePath = path.resolve(rootDir, html);
  if (!existsSync(filePath)) throw new Error(`Missing standalone HTML: ${html}`);
  inspectMarkup(filePath);
  await verifyInBrowser(filePath);
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});
