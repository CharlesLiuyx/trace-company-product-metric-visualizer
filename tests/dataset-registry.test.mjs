import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const MANIFEST = {
  datasets: [
    {
      key: 'alpha-q1-fy26',
      src: 'data/datasets/alpha-q1-fy26.js',
      data: {
        name: 'Alpha · Q1 FY26',
        company: 'Alpha',
        meta: { title: 'Alpha Q1 FY26 Income Statement', period: 'Q1 FY26' },
        i18n: { zh: { name: 'Alpha · 2026 财年第一季度' } },
      },
    },
    {
      key: 'beta-q2-fy26',
      src: 'data/datasets/beta-q2-fy26.js',
      data: { name: 'Beta · Q2 FY26', company: 'Beta', meta: { period: 'Q2 FY26' } },
    },
  ],
};

function freshRegistry() {
  const context = loadClassicScripts(['src/dataset-registry.js']);
  return { context, registry: context.TraceDatasetRegistry, datasets: context.DATASETS };
}

test('installManifest pushes one navigable stub per entry', () => {
  const { registry, datasets } = freshRegistry();
  registry.installManifest(MANIFEST);
  assert.equal(datasets.length, 2);
  assert.equal(datasets[0].key, 'alpha-q1-fy26');
  assert.equal(datasets[0].name, 'Alpha · Q1 FY26');
  assert.equal(datasets[0].company, 'Alpha');
  assert.equal(datasets[0].meta.period, 'Q1 FY26');
  assert.ok(datasets[0].__datasetStub);
  assert.equal(registry.isLoaded('alpha-q1-fy26'), false);
  assert.equal(registry.isKnown('alpha-q1-fy26'), true);
  assert.equal(registry.srcForKey('beta-q2-fy26'), 'data/datasets/beta-q2-fy26.js');
  assert.deepEqual([...registry.pendingKeys()], ['alpha-q1-fy26', 'beta-q2-fy26']);
});

test('a later adapter push upgrades its stub in place (same object identity)', () => {
  const { registry, datasets } = freshRegistry();
  registry.installManifest(MANIFEST);
  const stub = datasets[0];
  const full = {
    key: 'alpha-q1-fy26',
    name: 'Alpha · Q1 FY26',
    meta: { title: 'Alpha Q1 FY26 Income Statement', period: 'Q1 FY26', currency: '$', unit: 'B' },
    nodes: [{ id: 'revenue', value: 10 }],
    links: [],
    layout: { nodes: {} },
    i18n: { zh: { name: 'Alpha · 2026 财年第一季度', nodes: { revenue: { label: '收入' } } } },
  };
  datasets.push(full);
  assert.equal(datasets.length, 2, 'no duplicate entry appended');
  assert.equal(datasets[0], stub, 'stub object identity preserved');
  assert.equal(stub.__datasetStub, undefined);
  assert.equal(stub.nodes.length, 1, 'full adapter fields land on the stub');
  assert.equal(stub.meta.currency, '$');
  assert.equal(stub.company, 'Alpha', 'manifest-derived company survives the upgrade');
  assert.equal(stub.i18n.zh.nodes.revenue.label, '收入', 'full i18n replaces the display-only overlay');
  assert.equal(registry.isLoaded('alpha-q1-fy26'), true);
});

test('whenLoaded resolves once every requested known key has loaded', async () => {
  const { registry, datasets } = freshRegistry();
  registry.installManifest(MANIFEST);
  let resolved = false;
  const wait = registry.whenLoaded(['alpha-q1-fy26', 'unknown-key']).then(() => {
    resolved = true;
  });
  assert.equal(resolved, false);
  datasets.push({ key: 'alpha-q1-fy26', nodes: [], links: [] });
  await wait;
  assert.equal(resolved, true);
  await registry.whenLoaded(['alpha-q1-fy26']);
});

test('datasets loaded before the manifest never get stubbed', () => {
  const { registry, datasets } = freshRegistry();
  datasets.push({ key: 'alpha-q1-fy26', name: 'Full', nodes: [], links: [] });
  registry.installManifest(MANIFEST);
  assert.equal(datasets.length, 2, 'full alpha + beta stub');
  assert.equal(datasets[0].name, 'Full');
  assert.equal(datasets[0].__datasetStub, undefined);
  assert.equal(registry.isLoaded('alpha-q1-fy26'), true);
});

test('pushes without a manifest behave natively', () => {
  const { registry, datasets } = freshRegistry();
  datasets.push({ key: 'gamma-q1-fy26', nodes: [] });
  datasets.push({ key: 'gamma-q1-fy26', nodes: [] });
  assert.equal(datasets.length, 2, 'no stub merging without manifest entries');
  assert.equal(registry.hasManifest(), false);
});
