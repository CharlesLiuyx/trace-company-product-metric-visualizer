#!/usr/bin/env node

import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PROJECT_FONT_FAMILIES,
  fontFileName,
  fontPackageRelativePath,
} from './lib/local-fonts.mjs';
import { buildSiteData } from './lib/site-data.mjs';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const outputDir = path.join(rootDir, '_site');
let runtimePrefix = '';
let runtimeDir = outputDir;
let bundleDir = path.join(outputDir, 'assets');
const cacheDir = path.join(rootDir, 'output/site-releases');
const RETAINED_PREVIOUS_RELEASES = 2;
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

  // Scripts need not be contiguous (the local file entry runs in <head>).
  // Remove each tag, never the document between the first and last script.
  const withoutSourceScripts = [...scripts].reverse().reduce(
    (html, script) => `${html.slice(0, script.start)}${html.slice(script.end)}`, sourceHtml,
  );
  const withoutExternalFonts = withoutSourceScripts
    .replace(/\s*<link\b[^>]*href=["']https:\/\/fonts\.(?:googleapis|gstatic)\.com[^>]*>/gi, '');
  const appStylesheet = '<link rel="stylesheet" href="src/app.css" />';
  if (!withoutExternalFonts.includes(appStylesheet)) throw new Error('index.html has no src/app.css stylesheet link');
  const fontPreloads = PROJECT_FONT_FAMILIES.map(({ slug, weights }) => {
    const weight = weights.includes(400) ? 400 : weights[0];
    return `<link rel="preload" href="${runtimePrefix}/assets/fonts/${fontFileName(slug, weight)}" as="font" type="font/woff2" crossorigin />`;
  });
  const withRuntimeFonts = withoutExternalFonts.replace(appStylesheet, [
    ...fontPreloads,
    `<link rel="stylesheet" href="${runtimePrefix}/assets/fonts.css" />`,
    `<link rel="stylesheet" href="${runtimePrefix}/src/app.css" />`,
  ].join('\n    '));
  const bundleTags = Object.values(bundleSources)
    .map((src) => `    <script defer src="${runtimePrefix}/${src}"></script>`)
    .join('\n');
  const generatedBlock = [
    '    <!-- Generated production bundles: download in parallel, execute in source order. -->',
    `    <script>window.__TRACE_RUNTIME_ASSETS__ = { chart: '${runtimePrefix}/${deferredRuntimeAssets.chart.output}', version: '${runtimePrefix.split('/').at(-1)}' };</script>`,
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

  const destination = path.join(runtimeDir, bundleSources[name]);
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
    await mkdir(path.dirname(path.join(runtimeDir, destination)), { recursive: true });
    await cp(projectPath(source), path.join(runtimeDir, destination), {
      recursive: true,
      force: true,
    });
  }
  // Adapter-owned raster paths are document-relative. Bind those references
  // to the same immutable runtime as the Adapter, not the latest deployment.
  for (const file of await readdir(path.join(runtimeDir, 'data/datasets'))) {
    if (!file.endsWith('.js')) continue;
    const target = path.join(runtimeDir, 'data/datasets', file);
    const source = await readFile(target, 'utf8');
    await writeFile(target, source.replaceAll('data/assets/raster-annotations/', `${runtimePrefix}/data/assets/raster-annotations/`));
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

async function filesWithin(relativeDir) {
  const result = [];
  for (const entry of await readdir(projectPath(relativeDir), { withFileTypes: true })) {
    const file = `${relativeDir}/${entry.name}`;
    if (entry.isDirectory()) result.push(...await filesWithin(file));
    else if (entry.isFile()) result.push(file);
  }
  return result;
}

async function runtimeVersion(scripts) {
  const files = [...new Set([
    'index.html', 'scripts/build-site.mjs', 'scripts/lib/site-data.mjs', 'scripts/lib/local-fonts.mjs',
    ...scripts.map(({ src }) => src), 'src/app.css',
    ...await filesWithin('data/datasets'),
    ...await filesWithin('data/assets/raster-annotations'),
    ...PROJECT_FONT_FAMILIES.flatMap(({ slug, weights }) => weights.map((weight) => fontPackageRelativePath(slug, weight))),
  ])].sort();
  const hash = createHash('sha256');
  for (const file of files) {
    const bytes = await readFile(projectPath(file));
    hash.update(`${file}\0${bytes.length}\0`).update(bytes);
  }
  return hash.digest('hex');
}

async function retainReleases(version) {
  await mkdir(cacheDir, { recursive: true });
  let previous = [];
  try { previous = JSON.parse(await readFile(path.join(cacheDir, 'releases.json'), 'utf8')); } catch { /* Cold checkout/cache miss. */ }
  const candidates = Array.isArray(previous) ? previous.filter((id) => /^[a-f0-9]{64}$/.test(id) && id !== version) : [];
  const retained = [];
  for (const id of candidates.slice(0, RETAINED_PREVIOUS_RELEASES)) {
    try {
      await cp(path.join(cacheDir, id), path.join(outputDir, 'releases', id), { recursive: true });
      retained.push(id);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  await cp(runtimeDir, path.join(cacheDir, version), { recursive: true, force: true });
  const versions = [version, ...retained];
  await writeFile(path.join(cacheDir, 'releases.json'), JSON.stringify(versions));
  for (const entry of await readdir(cacheDir)) {
    if (/^[a-f0-9]{64}$/.test(entry) && !versions.includes(entry)) await rm(path.join(cacheDir, entry), { recursive: true, force: true });
  }
  await writeFile(path.join(outputDir, 'site-release.json'), JSON.stringify({ schema: 'trace-site-release/v1', version, retained, prefix: runtimePrefix }));
}

async function main() {
  const sourceHtml = await readFile(projectPath('index.html'), 'utf8');
  const scripts = externalClassicScripts(sourceHtml);
  const groups = classifyScripts(scripts);
  const version = await runtimeVersion(scripts);
  runtimePrefix = `releases/${version}`;
  runtimeDir = path.join(outputDir, runtimePrefix);
  bundleDir = path.join(runtimeDir, 'assets');
  const data = buildSiteData({ root: rootDir, sources: groups.catalog, version, assetPrefix: runtimePrefix });
  const html = productionIndex(sourceHtml, scripts);

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(bundleDir, { recursive: true });
  await Promise.all([
    ...Object.entries(groups).filter(([name]) => name !== 'catalog').map(([name, sources]) => bundle(name, sources)),
    copyRuntimeFiles(),
    emitRuntimeFonts(),
  ]);
  await writeFile(path.join(bundleDir, 'catalog.js'), data.source);
  for (const [relativePath, contents] of data.chunks) {
    const destination = path.join(outputDir, relativePath);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, contents);
  }
  await writeFile(path.join(outputDir, 'index.html'), html);

  const emittedSources = externalClassicScripts(html).map(({ src }) => src);
  if (JSON.stringify(emittedSources) !== JSON.stringify(Object.values(bundleSources).map((src) => `${runtimePrefix}/${src}`))) {
    throw new Error(`Unexpected production script list: ${emittedSources.join(', ')}`);
  }
  if (await runtimeVersion(scripts) !== version) throw new Error('Runtime inputs changed during build; rebuild from a stable checkout');
  await retainReleases(version);

  console.log(`built ${path.relative(rootDir, outputDir)}/`);
  for (const [name, sources] of Object.entries(groups)) {
    const contents = await readFile(path.join(runtimeDir, bundleSources[name]));
    console.log(`  ${bundleSources[name]}: ${sources.length} sources, ${bytesLabel(contents.byteLength)}`);
  }
  console.log('  dataset adapters: copied as on-demand scripts');
  console.log(`  data details: ${data.chunks.size} version-bound JSON chunks`);
  console.log(`  runtime version: ${version}`);
  console.log(`  ${deferredRuntimeAssets.chart.output}: copied for on-demand loading`);
  console.log('  assets/fonts.css: self-hosted WOFF2 with font-display: swap');
  console.log('  input/processed: excluded from the site artifact');
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
