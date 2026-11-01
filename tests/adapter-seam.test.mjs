// The input-type Adapter Seam is code, not prose: every Adapter difference is
// declared in scripts/lib/adapters/, and workflow code reads it through the
// registry. This suite keeps the Seam closed so a fourth input type adds one
// module instead of branching through every caller.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ADAPTER_REGISTRY,
  ADAPTER_SIGNATURES,
  DATASET_ADAPTERS,
  SOURCE_CLASSIFICATION_SIGNALS,
  adapterFor,
  adapterHasSankeyView,
  adapterRequiresRender,
} from '../scripts/lib/adapters/index.mjs';
import { SOURCE_EXTENSIONS, SOURCE_MEDIA_IDS } from '../scripts/lib/source-media.mjs';
import { ADAPTER_CHECKLISTS } from '../scripts/lib/verification-plan.mjs';
import { SSOT_FAMILY_IDS, classifySourceSignals } from '../scripts/lib/source-objects.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ADAPTER_DIR = path.join(root, 'scripts', 'lib', 'adapters');
const ID_ALTERNATION = DATASET_ADAPTERS.join('|');
// Branching on an Adapter id outside the registry reopens the Seam.
const FORBIDDEN_PATTERNS = [
  { name: 'adapter id comparison', re: /\badapter\s*(?:===|!==|==|!=)\s*['"`]/ },
  { name: 'switch on an adapter id', re: new RegExp(`case\\s+['"](?:${ID_ALTERNATION})['"]`) },
  { name: 'inline adapter id list', re: new RegExp(`['"](?:${ID_ALTERNATION})['"]\\s*,\\s*['"](?:${ID_ALTERNATION})['"]`) },
];

async function scriptFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return full === ADAPTER_DIR ? [] : scriptFiles(full);
    return /\.(?:mjs|js)$/.test(entry.name) ? [full] : [];
  }));
  return files.flat();
}

test('no workflow module branches on an Adapter id outside scripts/lib/adapters/', async () => {
  const offenders = [];
  for (const file of await scriptFiles(path.join(root, 'scripts'))) {
    const lines = (await readFile(file, 'utf8')).split('\n');
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('//')) return;
      for (const { name, re } of FORBIDDEN_PATTERNS) {
        if (re.test(line)) offenders.push(`${path.relative(root, file)}:${index + 1} (${name})`);
      }
    });
  }
  assert.deepEqual(offenders, [], 'read Adapter behaviour from the registry instead');
});

test('every Adapter module declares the complete contract', () => {
  assert.deepEqual(DATASET_ADAPTERS, Object.keys(ADAPTER_REGISTRY));
  for (const id of DATASET_ADAPTERS) {
    const adapter = adapterFor(id);
    assert.equal(adapter.id, id);
    assert.ok(adapter.label, `${id} needs a label`);
    assert.ok(adapter.media.length > 0 && adapter.media.every((media) => SOURCE_MEDIA_IDS.includes(media)), `${id} media must be registered Source media`);
    assert.ok(['flat-objects', 'metric-observations'].includes(adapter.facts), `${id} facts shape`);
    assert.deepEqual(ADAPTER_CHECKLISTS[id], adapter.checklist);
    assert.ok(adapter.checklist.includes('data-consistency') && adapter.checklist.includes('human-review'), `${id} keeps the shared checks`);
    assert.ok(adapter.requiredLocales.length > 0, `${id} needs review locales`);
    assert.ok(adapter.view === null || adapter.view === 'sankey', `${id} view`);
    assert.ok(SSOT_FAMILY_IDS.includes(adapter.ssot.family), `${id} SSOT family ${adapter.ssot.family} has no Source object rules`);
    assert.ok(Array.isArray(adapter.ssot.locations) || typeof adapter.ssot.recordPath === 'function', `${id} SSOT location`);
    assert.equal(typeof adapter.indexRegistration, 'boolean');
    for (const fn of ['records', 'artifacts', 'displayTimeKey', 'reviewRows']) assert.equal(typeof adapter[fn], 'function', `${id}.${fn}`);
    assert.ok(adapter.artifacts('sample-key').every((item) => item.path && item.role), `${id} artifacts carry path and role`);
    assert.equal(adapterRequiresRender(id), adapter.checklist.includes('render-fidelity'));
    assert.equal(adapterHasSankeyView(id), adapter.view === 'sankey');
    assert.ok(!adapterHasSankeyView(id) || adapterRequiresRender(id), `${id}: a Sankey View needs render evidence`);
  }
});

test('Type Gate signatures stay disjoint and select each Adapter by its own signals', () => {
  for (const id of DATASET_ADAPTERS) {
    const { required, optional, forbidden } = ADAPTER_SIGNATURES[id];
    assert.equal(classifySourceSignals(required).adapter, id);
    assert.equal(classifySourceSignals([...required, ...optional]).adapter, id);
    assert.deepEqual(new Set([...required, ...optional, ...forbidden]), new Set(SOURCE_CLASSIFICATION_SIGNALS), `${id} covers the whole vocabulary`);
    for (const other of DATASET_ADAPTERS) {
      if (other === id) continue;
      assert.ok(ADAPTER_SIGNATURES[other].required.some((signal) => forbidden.includes(signal)), `${id} must forbid a required signal of ${other}`);
    }
  }
  assert.throws(() => adapterFor('web-snapshot'), /Unsupported Adapter/);
});

test('the lifecycle contract lists the registered Source formats and Adapters', async () => {
  const contract = JSON.parse(await readFile(path.join(root, 'docs/architecture/lifecycle-contract.json'), 'utf8'));
  assert.deepEqual(contract.workflow.sourceFormats, SOURCE_EXTENSIONS.map((ext) => ext.slice(1)));
  assert.deepEqual(contract.adapters, DATASET_ADAPTERS);
  assert.deepEqual(contract.sourceClassification.signals, SOURCE_CLASSIFICATION_SIGNALS);
});
