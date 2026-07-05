import test from 'node:test';
import assert from 'node:assert/strict';
import {
  scriptSources,
  dataScriptsFromIndex,
  incomeStatementScriptsFromIndex,
  companyMetadataScriptsFromIndex,
  registeredDatasetScripts,
  renderHarnessScripts,
  datasetScriptForKey,
} from '../scripts/script-sources.mjs';
import { readProjectFile } from '../scripts/lib/project.mjs';

const SAMPLE = `
<!doctype html>
<body>
  <script src="vendor/d3.min.js"></script>
  <script src="vendor/d3-sankey.min.js"></script>
  <script src="vendor/chart.umd.min.js"></script>
  <script src="src/icons.js"></script>
  <script src="src/sankey-engine.js"></script>
  <script src="src/i18n.js"></script>
  <script src="src/trace-domain.js"></script>
  <script src="data/revenue-metrics.js"></script>
  <script src="data/dataset-file-metadata.js"></script>
  <script src="data/income-statements/alpha.js"></script>
  <script src="data/income-statements/beta.js"></script>
  <script src="data/company-metadata/alpha.js"></script>
  <script src="data/datasets/alpha-q1-fy26.js"></script>
  <script src="data/datasets/beta-q2-fy26.js"></script>
  <script src="src/app/dom.js"></script>
  <script src="src/app/main.js"></script>
</body>
`;

test('scriptSources returns src attributes in document order', () => {
  const sources = scriptSources(SAMPLE);
  assert.equal(sources[0], 'vendor/d3.min.js');
  assert.equal(sources[sources.length - 1], 'src/app/main.js');
  assert.equal(sources.length, 16);
});

test('dataset/ssot family filters pick only their directories', () => {
  assert.deepEqual(dataScriptsFromIndex(SAMPLE), [
    'data/datasets/alpha-q1-fy26.js',
    'data/datasets/beta-q2-fy26.js',
  ]);
  assert.deepEqual(incomeStatementScriptsFromIndex(SAMPLE), [
    'data/income-statements/alpha.js',
    'data/income-statements/beta.js',
  ]);
  assert.deepEqual(companyMetadataScriptsFromIndex(SAMPLE), [
    'data/company-metadata/alpha.js',
  ]);
});

test('renderHarnessScripts excludes the viewer app, chart.js, and trace-domain', () => {
  const harness = renderHarnessScripts(SAMPLE);
  assert.ok(harness.includes('vendor/d3.min.js'));
  assert.ok(harness.includes('src/sankey-engine.js'));
  assert.ok(harness.includes('src/i18n.js'));
  assert.ok(harness.includes('data/income-statements/alpha.js'), 'per-company SSOT files feed the harness');
  assert.ok(harness.includes('data/datasets/alpha-q1-fy26.js'), 'fixture dataset tags still feed the harness');
  assert.ok(!harness.includes('vendor/chart.umd.min.js'));
  assert.ok(!harness.includes('src/trace-domain.js'));
  assert.ok(!harness.some((src) => src.startsWith('src/app/')), 'app modules stay out of the d3 harness');
  assert.ok(!harness.includes('data/company-metadata/alpha.js'));
  assert.ok(!harness.includes('data/dataset-manifest.js'), 'the manifest itself never loads in the harness');
});

test('datasetScriptForKey builds the stable adapter path', () => {
  assert.equal(datasetScriptForKey('nvidia-q4-fy26'), 'data/datasets/nvidia-q4-fy26.js');
});

test('the real registration surfaces parse consistently', () => {
  const html = readProjectFile('index.html');
  const all = scriptSources(html);
  const datasets = registeredDatasetScripts();
  const statements = incomeStatementScriptsFromIndex(html);
  const companies = companyMetadataScriptsFromIndex(html);
  assert.ok(datasets.length >= 100, `expected 100+ manifest datasets, got ${datasets.length}`);
  assert.ok(statements.length >= 100, `expected 100+ statement files, got ${statements.length}`);
  assert.ok(companies.length >= 100, `expected 100+ company files, got ${companies.length}`);
  assert.equal(dataScriptsFromIndex(html).length, 0, 'index.html no longer carries dataset tags');
  assert.ok(all.includes('data/dataset-manifest.js'), 'index.html loads the generated manifest');
  assert.ok(all.includes('src/dataset-registry.js'), 'index.html loads the registry before the manifest');
  assert.ok(
    all.indexOf('src/dataset-registry.js') < all.indexOf('data/dataset-manifest.js'),
    'registry precedes the manifest'
  );
  for (const script of [...statements, ...companies]) {
    assert.ok(all.includes(script));
  }
  const harness = renderHarnessScripts(html);
  assert.ok(!harness.some((src) => src.startsWith('src/app/')));
  for (const script of datasets) {
    assert.ok(harness.includes(script), `harness includes manifest dataset ${script}`);
  }
});
