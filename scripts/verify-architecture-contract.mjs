#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  CHANGE_IMPACTS,
  DATASET_ADAPTERS,
  DATASET_BUILD_PROTOCOL,
  DATASET_BUILD_STATES,
  SOURCE_AVAILABILITY,
} from './lib/dataset-build.mjs';
import { FIDELITY_PROTOCOL_VERSION } from './lib/compare-workspace.mjs';
import { projectPath, rootDir } from './lib/project.mjs';

const CONTRACT_PATH = 'docs/architecture/lifecycle-contract.json';
const CONTEXT_DOCS = [
  'CONTEXT.md',
  'docs/architecture/README.md',
  'docs/architecture/dataset-lifecycle.md',
  'docs/architecture/verification-publication.md',
  'docs/adr/0001-dataset-build-transactions.md',
];

function sorted(values) {
  return [...values].sort((left, right) => left.localeCompare(right));
}

async function verifyLocalMarkdownLinks(relativePath) {
  const source = await readFile(projectPath(relativePath), 'utf8');
  const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of source.matchAll(linkRe)) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, '');
    if (!rawTarget || rawTarget.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(rawTarget)) continue;
    const fileTarget = decodeURIComponent(rawTarget.split('#')[0]);
    const absolute = path.resolve(path.dirname(projectPath(relativePath)), fileTarget);
    assert.ok(
      absolute === rootDir || absolute.startsWith(`${rootDir}${path.sep}`),
      `${relativePath} link escapes the repository: ${rawTarget}`
    );
    assert.ok(existsSync(absolute), `${relativePath} has a missing local link: ${rawTarget}`);
  }
}

async function verifyFidelityRuleNamespaces() {
  const source = await readFile(projectPath('docs/fidelity-loop-rules.md'), 'utf8');
  const defined = new Set();
  for (const match of source.matchAll(/^\s*-\s+([GRLTAZI]\d+[a-z]?)\b/gm)) defined.add(match[1]);
  for (const match of source.matchAll(/^\|\s*(B\d+)\s*\|/gm)) defined.add(match[1]);
  const referenced = new Set([...source.matchAll(/\b([GBRLTAZI]\d+[a-z]?)\b/g)].map((match) => match[1]));
  const missing = [...referenced].filter((id) => !defined.has(id)).sort();
  assert.deepEqual(missing, [], `fidelity rules reference undefined IDs: ${missing.join(', ')}`);
  assert.match(source, /REG-001/, 'fidelity rules must reserve the region namespace');
  assert.match(source, /FB-001/, 'fidelity rules must reserve the feedback namespace');
  assert.match(source, /DEC-001/, 'fidelity rules must reserve the decision namespace');
}

async function main() {
  const contract = JSON.parse(await readFile(projectPath(CONTRACT_PATH), 'utf8'));
  assert.equal(contract.protocols.datasetBuild, DATASET_BUILD_PROTOCOL, 'dataset-build protocol drift');
  assert.equal(contract.protocols.fidelityRun, FIDELITY_PROTOCOL_VERSION, 'fidelity-run protocol drift');
  assert.deepEqual(contract.scopes.DatasetBuild.states, DATASET_BUILD_STATES, 'DatasetBuild state drift');
  assert.deepEqual(sorted(contract.adapters), sorted(DATASET_ADAPTERS), 'Adapter drift');
  assert.deepEqual(sorted(contract.sourceAvailability), sorted(SOURCE_AVAILABILITY), 'Source availability drift');
  assert.deepEqual(sorted(contract.changeImpact), sorted(CHANGE_IMPACTS), 'ChangeImpact drift');
  assert.equal(contract.invariants.baselineMayProveProducingBuild, false, 'self-baseline must stay forbidden');
  assert.equal(contract.invariants.releaseFailureRollsBackPublication, false, 'Release failure must not roll back Publication');
  assert.equal(contract.invariants.publicationConflictRetryableWithoutNewPlan, false, 'CAS conflict must require a new plan');
  assert.equal(contract.scopes.ReleaseAttempt.retryCreatesNewAttempt, true, 'Release retry must create a new Attempt');
  assert.equal(
    contract.currentImplementationStatusDocument,
    'docs/architecture/README.md#migration-milestones',
    'machine-readable target contract must route current implementation status'
  );

  const packageJson = JSON.parse(await readFile(projectPath('package.json'), 'utf8'));
  assert.ok(packageJson.scripts['record:intake'], 'package.json must expose record:intake');
  assert.ok(packageJson.scripts['record:baseline'], 'package.json must expose record:baseline');
  assert.ok(!packageJson.scripts['build:standalone'].includes('update-dataset-file-metadata'), 'build:standalone must not mutate tracked metadata');

  const [agents, mirror] = await Promise.all([
    readFile(projectPath('AGENTS.md'), 'utf8'),
    readFile(projectPath('docs/AGENTS.zh-CN.review.md'), 'utf8'),
  ]);
  for (const [name, source] of [['AGENTS.md', agents], ['docs/AGENTS.zh-CN.review.md', mirror]]) {
    assert.match(source, /CONTEXT\.md/, `${name} must route architecture context`);
    assert.match(source, /docs\/architecture\/README\.md/, `${name} must route the architecture index`);
  }

  const [flowchart, inputReadme, dataReadme] = await Promise.all([
    readFile(projectPath('docs/workflow-flowchart.zh-CN.html'), 'utf8'),
    readFile(projectPath('input/README.md'), 'utf8'),
    readFile(projectPath('data/README.md'), 'utf8'),
  ]);
  assert.match(flowchart, /辅助 View，不拥有规则/, 'workflow flowchart must disclaim rule ownership');
  assert.doesNotMatch(flowchart, /11 项自动|自动硬门槛（11|G1–G11|收敛标准 14|14 条/, 'workflow flowchart contains stale gate/closure counts');
  assert.match(inputReadme, /data\/dataset-manifest\.js/, 'input README must route dataset registration to the manifest');
  assert.match(dataReadme, /registered in\s+`data\/dataset-manifest\.js`/, 'data README must describe manifest-based dataset registration');

  await Promise.all(CONTEXT_DOCS.map(verifyLocalMarkdownLinks));
  await verifyFidelityRuleNamespaces();
  console.log(
    `architecture contract passed: ${DATASET_BUILD_STATES.length} Build states, ` +
      `${DATASET_ADAPTERS.length} Adapters, ${CHANGE_IMPACTS.length} ChangeImpact values, ${CONTEXT_DOCS.length} context docs`
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
