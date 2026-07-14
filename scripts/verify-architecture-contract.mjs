#!/usr/bin/env node
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import {
  CHANGE_IMPACTS,
  DATASET_ADAPTERS,
  DATASET_BUILD_PROTOCOL,
  DATASET_BUILD_STATES,
  SOURCE_AVAILABILITY,
} from './lib/dataset-build.mjs';
import { FIDELITY_PROTOCOL_VERSION } from './lib/compare-workspace.mjs';
import { DATASET_VERIFICATION_PROTOCOL } from './lib/dataset-verification.mjs';
import { REVIEW_PACKET_PROTOCOL } from './lib/dataset-build-closeout.mjs';
import {
  FIDELITY_RESULT_PROTOCOL,
  INTERFACE_MATRIX_PROTOCOL,
} from './lib/fidelity-result.mjs';
import {
  FIDELITY_RULE_CONTRACT,
  assertNoSecondaryFidelityRuleDefinitions,
  extractFidelityRuleReferences,
  validateFidelityRuleDocument,
} from './lib/fidelity-rule-contract.mjs';
import { projectPath, rootDir } from './lib/project.mjs';
import { OBJECT_INVENTORY_PROTOCOL } from './lib/object-inventory.mjs';
import { FEATURE_REQUIRED_CHECKS, VERIFICATION_PLAN_PROTOCOL } from './lib/verification-plan.mjs';

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

function isGitIgnored(relativePath) {
  const result = spawnSync(
    'git',
    ['-c', 'core.excludesFile=/dev/null', 'check-ignore', '--no-index', '--quiet', relativePath],
    { cwd: rootDir, encoding: 'utf8' }
  );
  assert.ok(
    result.status === 0 || result.status === 1,
    `git check-ignore failed for ${relativePath}: ${(result.stderr || result.stdout || '').trim()}`
  );
  return result.status === 0;
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

async function executableScriptPaths(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await executableScriptPaths(absolute));
    else if (entry.isFile() && entry.name.endsWith('.mjs')) paths.push(absolute);
  }
  return paths;
}

async function verifyFidelityRuleContract({ workflow, flowchart }) {
  const source = await readFile(projectPath('docs/fidelity-loop-rules.md'), 'utf8');
  const document = validateFidelityRuleDocument(source);
  assert.match(source, /REG-001/, 'fidelity rules must reserve the region namespace');
  assert.match(source, /FB-001/, 'fidelity rules must reserve the feedback namespace');

  assertNoSecondaryFidelityRuleDefinitions(workflow, 'docs/dynamic-dataset-workflow.md');
  assertNoSecondaryFidelityRuleDefinitions(flowchart, 'docs/workflow-flowchart.zh-CN.html');
  for (const [label, secondarySource] of [
    ['docs/dynamic-dataset-workflow.md', workflow],
    ['docs/workflow-flowchart.zh-CN.html', flowchart],
  ]) {
    const unknown = extractFidelityRuleReferences(secondarySource).filter(
      (id) => !(id in FIDELITY_RULE_CONTRACT.enforcements) && !(id in FIDELITY_RULE_CONTRACT.aliases)
    );
    assert.deepEqual(unknown, [], `${label} references unknown fidelity rule IDs`);
  }

  const featureMappings = Object.fromEntries(
    Object.entries(FEATURE_REQUIRED_CHECKS)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([feature, configured]) => {
        const checks = Array.isArray(configured) ? configured : [configured];
        return [feature, checks.flatMap((check) => check.ruleIds).sort((left, right) => left.localeCompare(right))];
      })
  );
  assert.deepEqual(
    featureMappings,
    FIDELITY_RULE_CONTRACT.featureMappings,
    'ObjectInventory feature-to-rule mapping drift'
  );

  const excluded = new Set([
    projectPath('scripts/lib/fidelity-rule-contract.mjs'),
    projectPath('scripts/verify-architecture-contract.mjs'),
  ]);
  const declaredCodeIds = new Set(FIDELITY_RULE_CONTRACT.codeRuleIds);
  const usedCodeIds = new Set();
  const undeclaredCodeIds = new Map();
  for (const scriptPath of await executableScriptPaths(projectPath('scripts'))) {
    if (excluded.has(scriptPath)) continue;
    const scriptSource = await readFile(scriptPath, 'utf8');
    for (const id of extractFidelityRuleReferences(scriptSource)) {
      usedCodeIds.add(id);
      if (declaredCodeIds.has(id)) continue;
      const locations = undeclaredCodeIds.get(id) || [];
      locations.push(path.relative(rootDir, scriptPath));
      undeclaredCodeIds.set(id, locations);
    }
  }
  assert.deepEqual(
    [...undeclaredCodeIds].map(([id, locations]) => `${id}:${[...new Set(locations)].join(',')}`),
    [],
    'executable scripts use fidelity rule IDs outside FIDELITY_CODE_RULE_IDS'
  );
  assert.deepEqual(
    [...usedCodeIds].sort((left, right) => left.localeCompare(right)),
    FIDELITY_RULE_CONTRACT.codeRuleIds,
    'FIDELITY_CODE_RULE_IDS must exactly match executable script references'
  );
  return document.definitions.length;
}

async function main() {
  const contract = JSON.parse(await readFile(projectPath(CONTRACT_PATH), 'utf8'));
  assert.equal(contract.protocols.datasetBuild, DATASET_BUILD_PROTOCOL, 'dataset-build protocol drift');
  assert.equal(contract.protocols.fidelityRun, FIDELITY_PROTOCOL_VERSION, 'fidelity-run protocol drift');
  assert.equal(contract.protocols.objectInventory, OBJECT_INVENTORY_PROTOCOL, 'ObjectInventory protocol drift');
  assert.equal(contract.protocols.verificationPlan, VERIFICATION_PLAN_PROTOCOL, 'VerificationPlan protocol drift');
  assert.equal(contract.protocols.reviewPacket, REVIEW_PACKET_PROTOCOL, 'ReviewPacket protocol drift');
  assert.equal(
    contract.protocols.datasetVerification,
    DATASET_VERIFICATION_PROTOCOL,
    'DatasetVerification protocol drift'
  );
  assert.equal(contract.protocols.interfaceMatrix, INTERFACE_MATRIX_PROTOCOL, 'Interface Matrix protocol drift');
  assert.equal(contract.protocols.fidelityResult, FIDELITY_RESULT_PROTOCOL, 'FidelityResult protocol drift');
  assert.deepEqual(contract.scopes.DatasetBuild.states, DATASET_BUILD_STATES, 'DatasetBuild state drift');
  assert.deepEqual(sorted(contract.adapters), sorted(DATASET_ADAPTERS), 'Adapter drift');
  assert.deepEqual(sorted(contract.sourceAvailability), sorted(SOURCE_AVAILABILITY), 'Source availability drift');
  assert.equal(contract.sourceLocations.pending, 'unclaimed', 'pending Source location semantics drift');
  assert.equal(
    contract.sourceLocations.processing,
    'build-local-working-locator',
    'processing Source location semantics drift'
  );
  assert.equal(
    contract.sourceLocations.processed,
    'operator-managed-stable-locator',
    'processed Source location semantics drift'
  );
  assert.equal(contract.sourceLocations.processingIsDatasetBuildState, false, 'processing must not become a Build state');
  assert.deepEqual(
    contract.sourceLocations.operatorCompletionSignals,
    ['human-review-complete', 'pushed-and-merged-to-main'],
    'operator completion signal contract drift'
  );
  assert.equal(
    contract.sourceLocations.operatorSignalAppliesToAllProcessing,
    true,
    'operator completion signal must cover all current processing Sources'
  );
  assert.equal(
    contract.sourceLocations.operatorRelocationRequiresPreMoveListConfirmation,
    true,
    'operator relocation must present the enumerated batch for confirmation before moving'
  );
  assert.equal(
    contract.sourceLocations.operatorSignalIsOnlyRelocationTrigger,
    true,
    'operator completion signal must be the only processing relocation trigger'
  );
  assert.equal(
    contract.sourceLocations.operatorRelocationMustNotClobber,
    true,
    'operator relocation must remain no-clobber'
  );
  assert.deepEqual(sorted(contract.changeImpact), sorted(CHANGE_IMPACTS), 'ChangeImpact drift');
  assert.equal(contract.invariants.baselineMayProveProducingBuild, false, 'self-baseline must stay forbidden');
  assert.equal(contract.invariants.releaseFailureRollsBackPublication, false, 'Release failure must not roll back Publication');
  assert.equal(contract.invariants.publicationConflictRetryableWithoutNewPlan, false, 'CAS conflict must require a new plan');
  assert.equal(contract.invariants.automaticEvidenceMayCloseBuild, false, 'automatic evidence must not close a Build');
  assert.equal(contract.invariants.humanAttestationRequiredForIncomeStatement, true, 'Income Statement closure must require human attestation');
  assert.equal(contract.invariants.verifyCommandsWriteDurableEvidence, false, 'verify:* must remain read-only');
  assert.equal(contract.invariants.sourceRelocationChangesIdentity, false, 'Source relocation must preserve digest identity');
  for (const objectName of [
    'ObjectInventory',
    'VerificationPlan',
    'DatasetVerification',
    'ReviewPacket',
    'ManualAttestation',
    'RegionDecision',
    'InterfaceMatrix',
    'FeedbackRecord',
    'FeedbackLedger',
    'FidelityResult',
  ]) {
    assert.ok(contract.durableObjects.includes(objectName), `lifecycle contract must include ${objectName}`);
  }
  assert.equal(contract.scopes.ReleaseAttempt.retryCreatesNewAttempt, true, 'Release retry must create a new Attempt');
  assert.equal(
    contract.currentImplementationStatusDocument,
    'docs/architecture/README.md#migration-milestones',
    'machine-readable target contract must route current implementation status'
  );

  const packageJson = JSON.parse(await readFile(projectPath('package.json'), 'utf8'));
  assert.ok(packageJson.scripts['record:intake'], 'package.json must expose record:intake');
  assert.ok(!packageJson.scripts['complete:source'], 'formal complete:source command must remain removed');
  assert.ok(!existsSync(projectPath('scripts', 'complete-source.mjs')), 'formal complete-source script must remain removed');
  assert.ok(existsSync(projectPath('input', 'processing', '.gitkeep')), 'input/processing must be a stable workspace directory');
  assert.equal(
    isGitIgnored('input/pending/__git-policy-probe__.png'),
    false,
    'input/pending Source files must remain Git-visible'
  );
  assert.equal(
    isGitIgnored('input/processing/__git-policy-probe__.png'),
    false,
    'input/processing Source claims must remain Git-visible'
  );
  assert.equal(
    isGitIgnored('input/processed/__git-policy-probe__.png'),
    true,
    'input/processed Source archives must remain local-only'
  );
  assert.ok(packageJson.scripts['record:fidelity'], 'package.json must expose record:fidelity');
  assert.ok(packageJson.scripts['record:verification'], 'package.json must expose record:verification');
  assert.ok(packageJson.scripts['record:build'], 'package.json must expose record:build');
  assert.ok(packageJson.scripts['compat:baseline'], 'package.json must expose compat:baseline');
  assert.ok(!packageJson.scripts['record:baseline'], 'record:baseline must stay renamed to compat:baseline so record:* remains build-local');
  assert.ok(packageJson.scripts['verify:closeout'], 'package.json must expose verify:closeout');
  assert.ok(!packageJson.scripts['build:standalone'].includes('update-dataset-file-metadata'), 'build:standalone must not mutate tracked metadata');

  const [verifyD3, recordFidelity] = await Promise.all([
    readFile(projectPath('scripts/verify-d3.mjs'), 'utf8'),
    readFile(projectPath('scripts/record-fidelity.mjs'), 'utf8'),
  ]);
  assert.match(verifyD3, /operation:\s*'verify'/, 'verify:d3 must enter the read-only operation class');
  assert.match(recordFidelity, /operation:\s*'record'/, 'record:fidelity must own durable review evidence');
  assert.match(verifyD3, /automatic pass is not human acceptance/, 'verify:d3 must disclaim human acceptance');

  const [agents, mirror] = await Promise.all([
    readFile(projectPath('AGENTS.md'), 'utf8'),
    readFile(projectPath('docs/AGENTS.zh-CN.review.md'), 'utf8'),
  ]);
  for (const [name, source] of [['AGENTS.md', agents], ['docs/AGENTS.zh-CN.review.md', mirror]]) {
    assert.match(source, /CONTEXT\.md/, `${name} must route architecture context`);
    assert.match(source, /docs\/architecture\/README\.md/, `${name} must route the architecture index`);
  }

  const [flowchart, workflow, inputReadme, dataReadme, context, archIndex, lifecycle, verification] = await Promise.all([
    readFile(projectPath('docs/workflow-flowchart.zh-CN.html'), 'utf8'),
    readFile(projectPath('docs/dynamic-dataset-workflow.md'), 'utf8'),
    readFile(projectPath('input/README.md'), 'utf8'),
    readFile(projectPath('data/README.md'), 'utf8'),
    readFile(projectPath('CONTEXT.md'), 'utf8'),
    readFile(projectPath('docs/architecture/README.md'), 'utf8'),
    readFile(projectPath('docs/architecture/dataset-lifecycle.md'), 'utf8'),
    readFile(projectPath('docs/architecture/verification-publication.md'), 'utf8'),
  ]);

  // The operator relocation rule has exactly one owning definition. The owner
  // must keep the operational steps (pre-move confirmation, no-clobber
  // failure); every other context document may only summarize and point.
  assert.match(workflow, /## Operator Review-Completion Signal/, 'workflow must own the operator relocation rule');
  assert.match(workflow, /wait for their explicit confirmation/, 'operator relocation must require pre-move batch confirmation');
  assert.match(workflow, /same-name destination/, 'operator relocation must keep the no-clobber failure step');
  for (const [name, source] of [
    ['CONTEXT.md', context],
    ['AGENTS.md', agents],
    ['docs/architecture/README.md', archIndex],
    ['docs/architecture/dataset-lifecycle.md', lifecycle],
    ['docs/architecture/verification-publication.md', verification],
  ]) {
    assert.doesNotMatch(
      source,
      /same-name/,
      `${name} restates operator relocation details owned by docs/dynamic-dataset-workflow.md`
    );
  }
  assert.match(flowchart, /辅助 View，不拥有规则/, 'workflow flowchart must disclaim rule ownership');
  assert.doesNotMatch(flowchart, /11 项自动|自动硬门槛（11|G1–G11|收敛标准 14|14 条/, 'workflow flowchart contains stale gate/closure counts');
  assert.match(inputReadme, /data\/dataset-manifest\.js/, 'input README must route dataset registration to the manifest');
  assert.match(dataReadme, /registered in\s+`data\/dataset-manifest\.js`/, 'data README must describe manifest-based dataset registration');

  await Promise.all(CONTEXT_DOCS.map(verifyLocalMarkdownLinks));
  const fidelityRuleCount = await verifyFidelityRuleContract({ workflow, flowchart });
  console.log(
    `architecture contract passed: ${DATASET_BUILD_STATES.length} Build states, ` +
      `${DATASET_ADAPTERS.length} Adapters, ${CHANGE_IMPACTS.length} ChangeImpact values, ` +
      `${fidelityRuleCount} fidelity rules, ${CONTEXT_DOCS.length} context docs`
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
