import path from 'node:path';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import vm from 'node:vm';
import { bytesDigest, filesUnder, inside } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';
import { PROJECT_FONT_FAMILIES, fontPackageRelativePath } from './local-fonts.mjs';

export const ARTIFACT_MANIFEST_PROTOCOL = 'artifact-manifest/v1';
export const CHECKPOINT_PROTOCOL = 'fidelity-checkpoints/v1';

export async function loadWorkspaceData(root) {
  const context = { console }; context.window = context; context.document = undefined;
  vm.createContext(context);
  const ssots = await filesUnder(root, ['data/income-statements', 'data/company-metadata']);
  const html = await readFile(inside(root, 'index.html'), 'utf8');
  const scripts = ['src/icons.js', ...ssots.filter((file) => file.endsWith('.js')), 'data/revenue-metrics.js', 'data/metric-observations.js', 'data/dataset-file-metadata.js', ...Array.from(html.matchAll(/<script src="(data\/datasets\/[^"<>]+)"/g), (match) => match[1])];
  for (const script of scripts) if (existsSync(inside(root, script))) vm.runInContext(await readFile(inside(root, script), 'utf8'), context, { filename: script, timeout: 5000 });
  return { context, records: context.INCOME_STATEMENT_SSOT?.records || [], companies: context.COMPANY_METADATA?.companies || [], revenueRecords: context.REVENUE_METRIC_SSOT?.records || [], metricRecords: context.METRIC_OBSERVATIONS || [], datasets: context.DATASETS || [] };
}
async function datasetAt(root, key, loaded) {
  const adapter = `data/datasets/${key}.js`;
  if (!existsSync(inside(root, adapter))) return null;
  // Follow explicitly named sibling adapter dependencies conservatively.
  const context = loaded.context;
  const selected = await readFile(inside(root, adapter), 'utf8');
  for (const file of await filesUnder(root, ['data/datasets'])) {
    if (!file.endsWith('.js') || file.endsWith('example-saas-fy25.js')) continue;
    if (file === adapter) continue;
    // Only load siblings when the selected adapter actually references them.
    if (selected.includes(path.basename(file, '.js'))) vm.runInContext(await readFile(inside(root, file), 'utf8'), context, { filename: file, timeout: 5000 });
  }
  vm.runInContext(await readFile(inside(root, adapter), 'utf8'), context, { filename: adapter, timeout: 5000 });
  loaded.datasets = context.DATASETS || [];
  return loaded.datasets.find((item) => item.key === key);
}
// The same semantic slice binds isolated authoring and a combined review view.
export async function readSemanticContribution(build, root, loaded = null) {
  loaded ||= await loadWorkspaceData(root);
  const dataset = build.adapter === 'income-statement' ? await datasetAt(root, build.key, loaded) : null;
  const record = (build.adapter === 'metric-observation' ? loaded.metricRecords : build.adapter === 'income-statement' ? loaded.records : loaded.revenueRecords).find((item) => item.key === build.key);
  if (!record) throw new Error(`Missing authored record: ${build.key}`);
  if (build.adapter === 'income-statement' && !dataset) throw new Error(`Missing View Adapter: ${build.key}`);
  const company = loaded.companies.find((item) => item.name === record.company || item.key === record.subject?.id) || null;
  const displayTime = loaded.context.DATASET_FILE_METADATA?.files?.[build.adapter === 'revenue-metric' ? 'data/revenue-metrics.js' : build.key] || null;
  return { key: build.key, adapter: build.adapter, record, company, dataset, displayTime };
}
export async function deriveArtifactManifest(build, root, { writeProjection = true } = {}) {
  const artifacts = [];
  const add = async (file, role) => {
    if (!existsSync(inside(root, file))) throw new Error(`Required dependency missing: ${file}`);
    if (!artifacts.some((item) => item.path === file)) artifacts.push({ path: file, role, digest: bytesDigest(await readFile(inside(root, file))) });
  };
  const loaded = await loadWorkspaceData(root);
  const contribution = await readSemanticContribution(build, root, loaded);
  const { dataset, record } = contribution;
  const sources = build.sources.map((source) => ({ path: [source.processingUri, source.processedUri].find((file) => file && existsSync(inside(root, file))), role: source.format === 'text' ? 'reference-text' : 'reference-image' }));
  for (const source of sources) await add(source.path, source.role);
  // These are complete verifier/runtime inputs. Unknown executable dependencies
  // remain conservative; scoped reuse is limited to the semantic slices below.
  for (const file of await filesUnder(root, ['src', 'scripts', 'vendor', 'package.json', 'pnpm-lock.yaml'])) await add(file, 'runtime-or-rule');
  // Hash the installed font bytes as well as the dependency lock. Synthetic
  // data-only fixtures may omit node_modules; real Sankey builds may not.
  for (const { slug, weights } of PROJECT_FONT_FAMILIES) for (const weight of weights) {
    const file = fontPackageRelativePath(slug, weight);
    if (dataset || existsSync(inside(root, file))) await add(file, 'runtime-or-rule');
  }
  for (const file of await filesUnder(root, ['data/assets'])) await add(file, 'asset');
  for (const file of await filesUnder(root, ['input/icon-crop-specs'])) if (file.endsWith('.json')) await add(file, 'asset-recipe');
  if (existsSync(inside(root, 'output/workflow/source-facts.json'))) await add('output/workflow/source-facts.json', 'source-facts');
  if (existsSync(inside(root, 'output/workflow/review-context.json'))) await add('output/workflow/review-context.json', 'review-context');
  if (dataset) await add(`data/datasets/${build.key}.js`, 'view-adapter');
  if (build.adapter === 'metric-observation') await add(`data/metric-observations/${build.key}.json`, 'metric-ssot');
  // Shared registries and company files are checked by the final consistency
  // profile. Their semantic contribution is pinned here, so unrelated additions
  // cannot invalidate this Build. Publication still owns their global merge.
  const projectionPath = 'output/workflow/semantic-inputs.json';
  const semanticBytes = JSON.stringify(contribution, null, 2) + '\n';
  if (writeProjection) {
    await mkdir(path.dirname(inside(root, projectionPath)), { recursive: true });
    await writeFile(inside(root, projectionPath), semanticBytes);
  }
  artifacts.push({ path: projectionPath, role: 'semantic-inputs', digest: bytesDigest(semanticBytes) });
  const toolInputs = artifacts.filter((item) => item.role === 'runtime-or-rule').map(({ path: file, digest }) => ({ path: file, digest }));
  const dataDigest = digestValue({ record, source: build.sources.map((source) => source.digest), tools: toolInputs });
  const structure = dataset ? { nodes: dataset.nodes, links: dataset.links, layout: { ...dataset.layout, labels: undefined }, meta: { ...dataset.meta, i18n: undefined } } : null;
  const scopes = {
    data: dataDigest,
    structure: digestValue({ dataDigest, structure, tools: toolInputs }),
    text: digestValue({ dataDigest, structure, labels: dataset?.layout?.labels, i18n: dataset?.i18n, tools: toolInputs }),
    'polish-l10n': digestValue({ contribution, artifacts }),
  };
  const value = { protocol: ARTIFACT_MANIFEST_PROTOCOL, key: build.key, artifacts: artifacts.sort((a, b) => a.path.localeCompare(b.path)), scopes, globalProjections: ['index.html', 'data/dataset-manifest.js', 'data/metric-observations.js', 'data/dataset-file-metadata.js', 'data/render-baselines.json'] };
  return { manifest: { ...value, digest: digestValue(value) }, loaded };
}
export function nextCheckpoint(manifest, checkpoints = []) {
  for (const stage of ['structure', 'text', 'polish-l10n']) {
    const latest = checkpoints.filter((item) => item.stage === stage).at(-1);
    if (!latest || latest.status !== 'frozen' || latest.inputDigest !== manifest.scopes[stage]) return stage;
  }
  return null;
}

export async function inspectDerivedArtifacts(build, root, artifacts) {
  if (!artifacts.some((item) => item.role === 'semantic-inputs')) return [];
  const current = await deriveArtifactManifest(build, root, { writeProjection: false });
  const old = new Map(artifacts.map((item) => [item.path, item.digest]));
  return current.manifest.artifacts.filter((item) => old.get(item.path) !== item.digest).map((item) => ({ path: item.path, reason: 'dependency-changed', expected: old.get(item.path) || null, actual: item.digest }));
}
