import test from 'node:test';
import assert from 'node:assert/strict';
import { loadBrowserData } from '../scripts/lib/browser-data-loader.mjs';
import {
  PROJECT_FONT_FAMILIES,
  fontFileName,
  fontPackageRelativePath,
} from '../scripts/lib/local-fonts.mjs';
import { readProjectFile } from '../scripts/lib/project.mjs';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function cssProperty(source, name) {
  const match = new RegExp(`${name}\\s*:\\s*([^;]+);`).exec(source);
  assert.ok(match, `missing CSS property ${name}`);
  return match[1].trim();
}

function firstFontFamily(value) {
  return String(value).split(',')[0].trim().replace(/^(['"])(.*)\1$/, '$2');
}

function ruleBody(source, selectorPattern) {
  const match = new RegExp(`${selectorPattern}\\s*\\{([^}]*)\\}`, 's').exec(source);
  assert.ok(match, `missing CSS rule ${selectorPattern}`);
  return match[1];
}

test('App Chrome and View panes use semantic typography tokens', () => {
  const css = readProjectFile('src/app.css');
  assert.equal(firstFontFamily(cssProperty(css, '--font-ui-chrome')), 'Montserrat');
  assert.equal(firstFontFamily(cssProperty(css, '--font-view')), 'Noto Sans');
  assert.equal(firstFontFamily(cssProperty(css, '--font-view-number')), 'Roboto');
  assert.match(ruleBody(css, 'html\\s*,\\s*body'), /font-family\s*:\s*var\(--font-ui-chrome\)/);
  assert.match(ruleBody(css, '\\.view-pane'), /font-family\s*:\s*var\(--font-view\)/);
});

test('chartTheme is the only App Canvas font-family source', () => {
  const context = loadClassicScripts(['src/app/util.js', 'src/app/chart-theme.js']);
  context.document = { documentElement: {} };
  context.getComputedStyle = () => ({
    getPropertyValue: (name) => name === '--font-view' ? "'Noto Sans', Arial, sans-serif" : '',
  });
  assert.equal(firstFontFamily(context.chartTheme().fontFamily), 'Noto Sans');

  const chartThemeSource = readProjectFile('src/app/chart-theme.js');
  assert.match(chartThemeSource, /fontFamily\s*:\s*cssVar\(\s*['"]--font-view['"]/);
  assert.doesNotMatch(chartThemeSource, /Montserrat/i);
  assert.doesNotMatch(readProjectFile('src/app/trend.js'), /Montserrat/i);
  assert.doesNotMatch(readProjectFile('src/app/comparison-metric-trend.js'), /Montserrat/i);
});

test('Sankey defaults keep product, amount, numeric note, and tooltip roles stable', () => {
  const context = loadClassicScripts(['src/sankey-engine.js']);
  const defaults = context.SankeyEngine.DEFAULTS;
  assert.equal(firstFontFamily(defaults.fontFamily), 'Noto Sans');
  assert.equal(firstFontFamily(defaults.amountFontFamily), 'Noto Sans');
  assert.equal(firstFontFamily(defaults.valueFontFamily), 'Roboto');
  assert.equal(firstFontFamily(defaults.interaction.tooltip.fontFamily), 'Roboto');
});

test('project font manifest owns the complete hosted family and weight inventory', () => {
  assert.deepEqual(
    PROJECT_FONT_FAMILIES.map(({ family, slug, weights }) => ({ family, slug, weights: [...weights] })),
    [
      { family: 'Montserrat', slug: 'montserrat', weights: [400, 500, 600, 700, 800] },
      { family: 'Noto Sans', slug: 'noto-sans', weights: [300, 400, 500, 600, 700, 800] },
      { family: 'Roboto', slug: 'roboto', weights: [300, 400, 500] },
    ]
  );
  assert.equal(PROJECT_FONT_FAMILIES.reduce((count, family) => count + family.weights.length, 0), 14);
  assert.equal(fontFileName('noto-sans', 600), 'noto-sans-latin-600-normal.woff2');
  assert.equal(
    fontPackageRelativePath('roboto', 500),
    'node_modules/@fontsource/roboto/files/roboto-latin-500-normal.woff2'
  );
});

test('development Google Fonts request stays fresh with the project manifest', () => {
  const html = readProjectFile('index.html');
  const href = html.match(/href="(https:\/\/fonts\.googleapis\.com\/css2\?[^"<>]+)"/)?.[1];
  assert.ok(href, 'index.html has no Google Fonts css2 request');
  const url = new URL(href.replaceAll('&amp;', '&'));
  const expectedFamilies = PROJECT_FONT_FAMILIES.map(
    ({ family, weights }) => `${family}:wght@${weights.join(';')}`
  );
  assert.deepEqual(url.searchParams.getAll('family'), expectedFamilies);
  assert.equal(url.searchParams.get('display'), 'swap');
});

const LABEL_FONT_FIELDS = new Set([
  'fontFamily',
  'valueFontFamily',
  'amountFontFamily',
  'font',
  'valueFont',
  'noteFont',
]);

function collectMontserratFields(value, path, violations) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectMontserratFields(item, `${path}[${index}]`, violations));
    return;
  }
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    const childPath = `${path}.${key}`;
    if (LABEL_FONT_FIELDS.has(key) && typeof child === 'string' && /Montserrat/i.test(child)) {
      violations.push(`${childPath}=${JSON.stringify(child)}`);
    }
    collectMontserratFields(child, childPath, violations);
  }
}

test('dataset product-text font overrides never select Montserrat', () => {
  const { datasets } = loadBrowserData();
  const violations = [];
  for (const dataset of datasets) {
    const variants = [
      ['base', dataset],
      ...Object.entries(dataset.i18n || {}).map(([language, overlay]) => [`i18n.${language}`, overlay]),
    ];
    for (const [variantName, variant] of variants) {
      collectMontserratFields(
        variant?.render,
        `${dataset.key}.${variantName}.render`,
        violations
      );
      collectMontserratFields(
        variant?.layout?.labels,
        `${dataset.key}.${variantName}.layout.labels`,
        violations
      );
    }
  }
  assert.deepEqual(violations, []);
});
