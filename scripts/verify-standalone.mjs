#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from 'node:fs';
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

function primaryFontFamily(value) {
  return String(value || '').split(',')[0].trim().replace(/^(['"])(.*)\1$/, '$2');
}

function parseArgs(argv) {
  const args = argv.slice(2);
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

function assertProcessedImagesNotInlined(html) {
  const processedDir = path.join(rootDir, 'input/processed');
  if (!existsSync(processedDir)) return;
  for (const fileName of readdirSync(processedDir)) {
    if (!/\.(?:png|jpe?g|webp)$/i.test(fileName)) continue;
    const filePath = path.join(processedDir, fileName);
    const ext = path.extname(fileName).toLowerCase();
    const mimeType = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${readFileSync(filePath).toString('base64')}`;
    assert(!html.includes(dataUri), `Standalone HTML inlined processed reference image: ${fileName}`);
  }
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
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 });
  const pageErrors = [];
  const externalRequests = [];
  const documentUrl = pathToFileURL(filePath).toString();

  page.on('pageerror', (err) => pageErrors.push(err.message));
  page.on('request', (request) => {
    const url = request.url();
    if (url.startsWith('http://') || url.startsWith('https://')) externalRequests.push(url);
    if (url.startsWith('file:') && url !== documentUrl) externalRequests.push(url);
  });

  try {
    await page.goto(documentUrl, { waitUntil: 'load' });
    await page.waitForSelector('#chart svg', { timeout: 10000 });
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

    const rasterResults = [];
    for (const { key, expected } of rasterDatasets) {
      await page.goto(`${documentUrl}#${key}`, { waitUntil: 'load' });
      await page.waitForSelector('#chart svg', { timeout: 10000 });
      const images = await waitForSvgImages(page);
      assert(
        images.count === expected,
        `${key} should render ${expected} raster annotation image(s), got ${images.count}`
      );
      assert(
        images.hrefs.every((href) => /^data:image\/(?:png|jpeg|webp|svg\+xml);base64,/.test(href)),
        `${key} raster annotation(s) were not inlined:\n${images.hrefs.join('\n')}`
      );
      rasterResults.push({ key, count: images.count });
    }

    await page.goto(`${documentUrl}#apple-q2-fy26`, { waitUntil: 'load' });
    await page.waitForSelector('#chart svg', { timeout: 10000 });
    const comparisonCount = await selectAllIncomeStatementPeriods(page, 'Apple');
    assert(comparisonCount === 15, `standalone Apple fixture has ${comparisonCount} periods, expected 15`);
    await waitForCalibratedComparison(page, comparisonCount);
    const comparisonSnapshot = await comparisonMoneyScaleSnapshot(page);
    assertComparisonMoneyScale(
      comparisonSnapshot,
      comparisonCount,
      'standalone Apple all-periods'
    );

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
