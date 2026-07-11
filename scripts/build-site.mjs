#!/usr/bin/env node

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PROJECT_FONT_FAMILIES,
  fontFileName,
  fontPackageRelativePath,
} from './lib/local-fonts.mjs';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const outputDir = path.join(rootDir, '_site');
const bundleDir = path.join(outputDir, 'assets');
const bundleSources = Object.freeze({
  foundation: 'assets/foundation.js',
  catalog: 'assets/catalog.js',
  app: 'assets/app.js',
});
const deferredRuntimeAssets = Object.freeze({
  chart: Object.freeze({
    source: 'vendor/chart.umd.min.js',
    output: 'assets/chart.js',
  }),
});
function projectPath(relativePath) {
  const absolutePath = path.resolve(rootDir, relativePath);
  if (absolutePath !== rootDir && !absolutePath.startsWith(`${rootDir}${path.sep}`)) {
    throw new Error(`Path must stay inside the project: ${relativePath}`);
  }
  return absolutePath;
}

function scriptSource(tag) {
  const match = /\bsrc\s*=\s*(["'])([^"']+)\1/i.exec(tag);
  return match?.[2] || '';
}

function scriptType(tag) {
  const match = /\btype\s*=\s*(["'])([^"']+)\1/i.exec(tag);
  return match?.[2].trim().toLowerCase() || '';
}

function externalClassicScripts(html) {
  const scripts = [];
  const scriptTagRe = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
  let match;

  while ((match = scriptTagRe.exec(html))) {
    const src = scriptSource(match[0]);
    if (!src) continue;
    const type = scriptType(match[0]);
    if (type && type !== 'text/javascript' && type !== 'application/javascript') {
      throw new Error(`Unsupported external script type ${JSON.stringify(type)}: ${src}`);
    }
    if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('/') || src.includes('?') || src.includes('#')) {
      throw new Error(`External scripts must use plain project-relative paths: ${src}`);
    }

    const normalized = path.posix.normalize(src);
    if (normalized !== src || normalized === '..' || normalized.startsWith('../')) {
      throw new Error(`External script path is not normalized: ${src}`);
    }

    scripts.push({
      src,
      start: match.index,
      end: scriptTagRe.lastIndex,
    });
  }

  return scripts;
}

function classifyScripts(scripts) {
  const firstDataIndex = scripts.findIndex(({ src }) => src.startsWith('data/'));
  if (firstDataIndex < 0) throw new Error('index.html has no data/* script boundary');

  const groups = {
    foundation: [],
    catalog: [],
    app: [],
  };

  scripts.forEach(({ src }, index) => {
    if (src === deferredRuntimeAssets.chart.source) return;
    if (index < firstDataIndex) {
      groups.foundation.push(src);
      return;
    }
    if (src.startsWith('data/datasets/')) {
      // Dataset adapters remain individual files. The manifest-driven loader
      // fetches only the selected adapters or explicit user-intent prefetches.
      return;
    }
    if (src.startsWith('data/')) {
      groups.catalog.push(src);
      return;
    }
    if (src.startsWith('src/app/')) {
      groups.app.push(src);
      return;
    }
    throw new Error(`Cannot place script after the data boundary: ${src}`);
  });

  Object.entries(groups).forEach(([name, sources]) => {
    if (!sources.length) throw new Error(`The ${name} bundle has no source files`);
  });
  const chartSourceCount = scripts.filter(({ src }) => src === deferredRuntimeAssets.chart.source).length;
  if (chartSourceCount !== 1) {
    throw new Error(`Expected one ${deferredRuntimeAssets.chart.source} script, found ${chartSourceCount}`);
  }
  return groups;
}

function productionIndex(sourceHtml, scripts) {
  if (!scripts.length) throw new Error('index.html has no external classic scripts');

  const first = scripts[0];
  const last = scripts.at(-1);
  const withoutSourceScripts = `${sourceHtml.slice(0, first.start)}${sourceHtml.slice(last.end)}`;
  const withoutExternalFonts = withoutSourceScripts
    .replace(/\s*<link\b[^>]*href=["']https:\/\/fonts\.(?:googleapis|gstatic)\.com[^>]*>/gi, '');
  const appStylesheet = '<link rel="stylesheet" href="src/app.css" />';
  if (!withoutExternalFonts.includes(appStylesheet)) throw new Error('index.html has no src/app.css stylesheet link');
  const fontPreloads = PROJECT_FONT_FAMILIES.map(({ slug, weights }) => {
    const weight = weights.includes(400) ? 400 : weights[0];
    return `<link rel="preload" href="assets/fonts/${fontFileName(slug, weight)}" as="font" type="font/woff2" crossorigin />`;
  });
  const withRuntimeFonts = withoutExternalFonts.replace(appStylesheet, [
    ...fontPreloads,
    '<link rel="stylesheet" href="assets/fonts.css" />',
    appStylesheet,
  ].join('\n    '));
  const bundleTags = Object.values(bundleSources)
    .map((src) => `    <script defer src="${src}"></script>`)
    .join('\n');
  const generatedBlock = [
    '    <!-- Generated production bundles: download in parallel, execute in source order. -->',
    `    <script>window.__TRACE_RUNTIME_ASSETS__ = { chart: '${deferredRuntimeAssets.chart.output}' };</script>`,
    bundleTags,
  ].join('\n');

  if (!/<\/head>/i.test(withRuntimeFonts)) throw new Error('index.html has no closing head tag');
  const output = withRuntimeFonts.replace(/\s*<\/head>/i, `\n${generatedBlock}\n  </head>`);
  const banner = [
    '<!--',
    '  Generated by scripts/build-site.mjs. Edit source files, not this artifact.',
    '  Dataset adapters remain separate and are loaded on demand from data/datasets/.',
    '-->',
  ].join('\n');
  return output.replace(/<!doctype html>/i, (doctype) => `${doctype}\n${banner}`);
}

async function bundle(name, sources) {
  const sections = [
    '/* Generated by scripts/build-site.mjs. Do not edit this artifact. */',
  ];

  for (const source of sources) {
    if (source.includes('*/')) throw new Error(`Unsafe source path for bundle comment: ${source}`);
    const contents = await readFile(projectPath(source), 'utf8');
    sections.push(`;\n/* source: ${source} */\n${contents.trimEnd()}\n;`);
  }

  const destination = path.join(outputDir, bundleSources[name]);
  await writeFile(destination, `${sections.join('\n')}\n`);
}

async function copyRuntimeFiles() {
  const copies = [
    [deferredRuntimeAssets.chart.source, deferredRuntimeAssets.chart.output],
    ['src/app.css', 'src/app.css'],
    ['data/datasets', 'data/datasets'],
    ['data/assets/raster-annotations', 'data/assets/raster-annotations'],
  ];

  for (const [source, destination] of copies) {
    await mkdir(path.dirname(path.join(outputDir, destination)), { recursive: true });
    await cp(projectPath(source), path.join(outputDir, destination), {
      recursive: true,
      force: true,
    });
  }
}

async function emitRuntimeFonts() {
  const fontDir = path.join(bundleDir, 'fonts');
  await mkdir(fontDir, { recursive: true });
  const faces = [];
  for (const family of PROJECT_FONT_FAMILIES) {
    for (const weight of family.weights) {
      const file = fontFileName(family.slug, weight);
      const source = projectPath(fontPackageRelativePath(family.slug, weight));
      await cp(source, path.join(fontDir, file), { force: true });
      faces.push([
        '@font-face {',
        `  font-family: '${family.family}';`,
        '  font-style: normal;',
        '  font-display: swap;',
        `  font-weight: ${weight};`,
        `  src: url('./fonts/${file}') format('woff2');`,
        '}',
      ].join('\n'));
    }
  }
  await writeFile(path.join(bundleDir, 'fonts.css'), `${faces.join('\n\n')}\n`);
}

function bytesLabel(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1024 ** 2).toFixed(1)} MiB`;
}

async function main() {
  const sourceHtml = await readFile(projectPath('index.html'), 'utf8');
  const scripts = externalClassicScripts(sourceHtml);
  const groups = classifyScripts(scripts);
  const html = productionIndex(sourceHtml, scripts);

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(bundleDir, { recursive: true });
  await Promise.all([
    ...Object.entries(groups).map(([name, sources]) => bundle(name, sources)),
    copyRuntimeFiles(),
    emitRuntimeFonts(),
  ]);
  await writeFile(path.join(outputDir, 'index.html'), html);

  const emittedSources = externalClassicScripts(html).map(({ src }) => src);
  if (JSON.stringify(emittedSources) !== JSON.stringify(Object.values(bundleSources))) {
    throw new Error(`Unexpected production script list: ${emittedSources.join(', ')}`);
  }

  console.log(`built ${path.relative(rootDir, outputDir)}/`);
  for (const [name, sources] of Object.entries(groups)) {
    const contents = await readFile(path.join(outputDir, bundleSources[name]));
    console.log(`  ${bundleSources[name]}: ${sources.length} sources, ${bytesLabel(contents.byteLength)}`);
  }
  console.log('  dataset adapters: copied as on-demand scripts');
  console.log(`  ${deferredRuntimeAssets.chart.output}: copied for on-demand loading`);
  console.log('  assets/fonts.css: self-hosted WOFF2 with font-display: swap');
  console.log('  input/processed: excluded from the site artifact');
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
