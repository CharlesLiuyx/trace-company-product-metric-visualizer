#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
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
import { FIDELITY_RESULT_PROTOCOL } from './lib/fidelity-result.mjs';
import {
  FIDELITY_RULE_CONTRACT,
  extractFidelityRuleReferences,
} from './lib/fidelity-rule-contract.mjs';
import { validateFidelityRulesDocument } from './lib/fidelity-rules-doc.mjs';
import { projectPath, rootDir } from './lib/project.mjs';
import { OPERATING_METRIC_UNITS, OPERATING_METRIC_COMPARISONS } from './lib/operating-metrics.mjs';
import {
  AUTHORITATIVE_CORRECTION_APPROVAL,
  INCOME_STATEMENT_SSOT_PATHS,
  OPERATING_METRIC_SSOT_PATH,
  SOURCE_AMOUNT_UNITS,
  SOURCE_CLASSIFICATION_PROTOCOL,
  SOURCE_CLASSIFICATION_REVIEW_METHOD,
  SOURCE_CLASSIFICATION_SIGNALS,
  SOURCE_OBJECTS_PROTOCOL,
  SOURCE_OBJECT_CLASSES,
} from './lib/source-objects.mjs';
import { VERIFICATION_PLAN_PROTOCOL } from './lib/verification-plan.mjs';
import { sourceGitIgnorePolicy } from './lib/source-git-policy.mjs';

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

async function verifyFidelityRuleContract() {
  // The structured catalog is the rule-semantics SSOT; the Markdown catalog
  // section must be its fresh generated view.
  const document = validateFidelityRulesDocument(await readFile(projectPath('docs/fidelity-loop-rules.md'), 'utf8'));

  const excluded = new Set([
    projectPath('scripts/lib/fidelity-rule-contract.mjs'),
    projectPath('scripts/lib/fidelity-rules-catalog.mjs'),
    projectPath('scripts/lib/fidelity-rules-doc.mjs'),
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
  return document.ruleCount;
}

async function main() {
  const contract = JSON.parse(await readFile(projectPath(CONTRACT_PATH), 'utf8'));
  assert.equal(contract.protocols.datasetBuild, DATASET_BUILD_PROTOCOL, 'dataset-build protocol drift');
  assert.equal(contract.protocols.fidelityRun, FIDELITY_PROTOCOL_VERSION, 'fidelity-run protocol drift');
  assert.equal(
    contract.protocols.sourceClassification,
    SOURCE_CLASSIFICATION_PROTOCOL,
    'SourceClassification protocol drift'
  );
  assert.equal(contract.protocols.sourceObjects, SOURCE_OBJECTS_PROTOCOL, 'SourceObjects protocol drift');
  for (const retired of ['sourceCoverage', 'objectInventory', 'nodeFacePolicy', 'metricSourceCoverage']) {
    assert.equal(contract.protocols[retired], undefined, `${retired} is retired; source-objects/v1 replaces it`);
  }
  assert.equal(contract.protocols.verificationPlan, VERIFICATION_PLAN_PROTOCOL, 'VerificationPlan protocol drift');
  assert.equal(contract.protocols.reviewPacket, REVIEW_PACKET_PROTOCOL, 'ReviewPacket protocol drift');
  assert.equal(
    contract.protocols.datasetVerification,
    DATASET_VERIFICATION_PROTOCOL,
    'DatasetVerification protocol drift'
  );
  assert.equal(contract.protocols.interfaceMatrix, undefined, 'interfaceMatrix is retired; FidelityResult records acceptance plus render evidence');
  assert.equal(contract.protocols.fidelityResult, FIDELITY_RESULT_PROTOCOL, 'FidelityResult protocol drift');
  assert.deepEqual(contract.scopes.DatasetBuild.states, DATASET_BUILD_STATES, 'DatasetBuild state drift');
  assert.deepEqual(sorted(contract.adapters), sorted(DATASET_ADAPTERS), 'Adapter drift');
  assert.equal(
    contract.sourceClassification.reviewMethod,
    SOURCE_CLASSIFICATION_REVIEW_METHOD,
    'Source classification review method drift'
  );
  assert.deepEqual(
    contract.sourceClassification.signals,
    SOURCE_CLASSIFICATION_SIGNALS,
    'Source classification signal vocabulary drift'
  );
  assert.equal(
    contract.sourceClassification.requiredBeforeFreshRecordIntake,
    true,
    'fresh record:intake must require Source classification'
  );
  assert.equal(
    contract.sourceClassification.bindsWholeNativeSource,
    true,
    'Source classification must bind the whole native Source'
  );
  assert.equal(
    contract.sourceClassification.derivedAdapterMustMatchRequestedAdapter,
    true,
    'Source facts must select the requested Adapter'
  );
  const sourceObjects = contract.sourceObjects;
  assert.deepEqual(sourceObjects.objectClasses, SOURCE_OBJECT_CLASSES, 'Source object class drift');
  assert.deepEqual(sourceObjects.amountUnits, SOURCE_AMOUNT_UNITS, 'Source object amount-unit drift');
  assert.deepEqual(sourceObjects.supplementalOperatingMetrics, {
    ssotPath: OPERATING_METRIC_SSOT_PATH, viewPath: 'operatingMetrics', sourceClass: 'value',
    units: OPERATING_METRIC_UNITS, comparisons: OPERATING_METRIC_COMPARISONS,
    participatesInAccountingSums: false, dedicatedVisibleValueText: true,
  }, 'Supplemental operating metric contract drift');
  assert.deepEqual(
    sourceObjects.incomeStatementSsotPaths,
    INCOME_STATEMENT_SSOT_PATHS,
    'Source object Income Statement SSOT path drift'
  );
  assert.equal(
    sourceObjects.authoritativeCorrectionApproval,
    AUTHORITATIVE_CORRECTION_APPROVAL,
    'Source object authoritative-correction approval drift'
  );
  for (const [field, expected, message] of [
    ['amountWithinLiteralResolution', true, 'exact amounts must stay within the literal rounding interval'],
    ['otherLabelsMayBeNonSemanticResidual', false, 'Other/All Other Source objects must remain semantic'],
    ['valueBearingOtherMustBeValue', true, 'a value-bearing Other must be a value entry (T22)'],
    ['roundedNonZeroMayBeAuthoredAsZero', false, 'rounded non-zero Source values must not be authored as zero'],
    ['recoveredNonZeroMustSurviveAuthoredDisplayPrecision', true, 'recovered non-zero values must remain non-zero in authored display precision'],
    ['prepareReviewReconcilesLoadedAuthoredValues', true, 'prepare-review must reconcile Source values against loaded authored data'],
    ['sourcePixelEvidence', false, 'source objects carry no Source pixel evidence'],
  ]) {
    assert.equal(sourceObjects[field], expected, `Source objects: ${message}`);
  }
  assert.equal(
    sourceObjects.incomeStatementFinancialViewOwnership,
    'exactly-one-node-or-non-node-metric',
    'each Income Statement financial value must reach exactly one Adapter node or non-node metric'
  );
  assert.equal(sourceObjects.adapterTargetOwnership, 'exactly-once', 'an Adapter target belongs to one value entry');
  assert.equal(sourceObjects.subFloorNodeDeclaration, 'shortNodes', 'sub-floor faces are declared through shortNodes');
  assert.equal(sourceObjects.labelPositionAudit, 'opt-in-referenceBBox', 'T18 runs only for declared label positions');
  assert.deepEqual(
    sourceObjects.incomeStatementReconciliationTargets,
    ['metric-ssot', 'sankey-view-adapter'],
    'Income Statement authored reconciliation target drift'
  );
  assert.deepEqual(
    sourceObjects.revenueMetricReconciliationTargets,
    ['metric-ssot'],
    'Revenue Metric authored reconciliation target drift'
  );
  assert.equal(contract.nodeFaceExpectations.derivedFrom, SOURCE_OBJECTS_PROTOCOL, 'Node face expectation source drift');
  assert.equal(
    contract.nodeFaceExpectations.valueNodesExpectedVisible,
    true,
    'every value node must render a painted face'
  );
  assert.equal(
    contract.nodeFaceExpectations.everyRenderedNodePainted,
    true,
    'every rendered node in a Build-bound run must be painted'
  );
  assert.equal(contract.nodeFaceExpectations.subFloorExceptions, 'shortNodes', 'B15 floor exceptions come from shortNodes');
  assert.equal(
    contract.sankeyAdapter.semanticNodesRequirePaintedFaces,
    true,
    'Sankey Adapter semantic node paint invariant drift'
  );
  assert.equal(
    contract.sankeyAdapter.explicitTransparentSemanticNodesAllowed,
    false,
    'Sankey Adapter must reject explicitly transparent semantic nodes'
  );
  assert.deepEqual(
    contract.sankeyAdapter.nonNodeMetricRepresentations,
    ['annotation', 'data-only', 'flow'],
    'Sankey Adapter non-node metric representations drift'
  );
  assert.equal(
    contract.sankeyAdapter.routeGeometryOwnership,
    'link-owned',
    'Sankey route geometry ownership drift'
  );
  assert.equal(
    contract.sankeyAdapter.routesProduceNodePaintAuditRows,
    false,
    'Sankey routes must stay outside node paint audits'
  );
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
    contract.sourceLocations.operatorRelocationListBoundToSignalScope,
    true,
    'operator relocation must move exactly the Source list named by the completion signal'
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
  for (const retired of [
    'SourceCoverage',
    'ObjectInventory',
    'NodeFacePolicy',
    'ManualAttestation',
    'RegionDecision',
    'InterfaceMatrix',
    'FeedbackRecord',
    'FeedbackLedger',
  ]) {
    assert.ok(!contract.durableObjects.includes(retired), `${retired} is retired from the lifecycle contract`);
  }
  for (const objectName of [
    'SourceClassification',
    'SourceObjects',
    'VerificationPlan',
    'DatasetVerification',
    'ReviewPacket',
    'FeedbackNote',
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
  const ignored = await sourceGitIgnorePolicy(rootDir, ['pending', 'processing', 'processed'].map((folder) => `input/${folder}/__git-policy-probe__.png`));
  assert.equal(
    ignored['input/pending/__git-policy-probe__.png'],
    false,
    'input/pending Source files must remain Git-visible'
  );
  assert.equal(
    ignored['input/processing/__git-policy-probe__.png'],
    false,
    'input/processing Source claims must remain Git-visible'
  );
  assert.equal(
    ignored['input/processed/__git-policy-probe__.png'],
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
  assert.equal(
    packageJson.scripts.prepare,
    'node scripts/setup-git-hooks.mjs --if-unset',
    'pnpm install must enable repository hooks without overwriting a custom hooks path'
  );
  assert.equal(
    packageJson.scripts['setup:git-hooks'],
    'node scripts/setup-git-hooks.mjs',
    'package.json must expose explicit Git hook setup'
  );

  const [postCommitHook, prePushHook] = await Promise.all([
    readFile(projectPath('.githooks/post-commit'), 'utf8'),
    readFile(projectPath('.githooks/pre-push'), 'utf8'),
  ]);
  assert.match(postCommitHook, /git-hook-dataset-metadata\.mjs post-commit/, 'post-commit must refresh Dataset metadata');
  assert.match(prePushHook, /git-hook-dataset-metadata\.mjs pre-push/, 'pre-push must gate Dataset metadata');
  if (process.platform !== 'win32') {
    for (const hookPath of ['.githooks/post-commit', '.githooks/pre-push']) {
      const info = await stat(projectPath(hookPath));
      assert.ok((info.mode & 0o111) !== 0, `${hookPath} must be executable`);
    }
  }

  const [verifyD3, recordFidelity, recordIntake, buildCloseout] = await Promise.all([
    readFile(projectPath('scripts/verify-d3.mjs'), 'utf8'),
    readFile(projectPath('scripts/record-fidelity.mjs'), 'utf8'),
    readFile(projectPath('scripts/record-intake.mjs'), 'utf8'),
    readFile(projectPath('scripts/lib/dataset-build-closeout.mjs'), 'utf8'),
  ]);
  assert.match(verifyD3, /operation:\s*'verify'/, 'verify:d3 must enter the read-only operation class');
  assert.match(recordFidelity, /operation:\s*'record'/, 'record:fidelity must own durable review evidence');
  assert.match(verifyD3, /automatic pass is not human acceptance/, 'verify:d3 must disclaim human acceptance');
  assert.match(recordIntake, /--signal <source-classification-signal>/, 'record:intake must expose the pre-intake Type Gate');
  assert.match(recordIntake, /createSourceClassification\(\{/, 'record:intake must persist SourceClassification before claim');
  assert.match(
    buildCloseout,
    /createSourceObjects\(input\.sourceObjects/,
    'prepare-review must validate and reconcile the flat Source objects'
  );

  const [agents, mirror] = await Promise.all([
    readFile(projectPath('AGENTS.md'), 'utf8'),
    readFile(projectPath('docs/AGENTS.zh-CN.review.md'), 'utf8'),
  ]);
  for (const [name, source] of [['AGENTS.md', agents], ['docs/AGENTS.zh-CN.review.md', mirror]]) {
    assert.match(source, /CONTEXT\.md/, `${name} must route architecture context`);
    assert.match(source, /docs\/architecture\/README\.md/, `${name} must route the architecture index`);
  }
  // Minimal mirror parity: the Chinese mirror must keep the same section
  // skeleton (## heading count) and command-table row count as AGENTS.md, so
  // a section or command added on one side cannot silently vanish on the
  // other. Content-level translation stays a human duty.
  const sectionCount = (source) => source.split(/\r?\n/).filter((line) => /^## /.test(line)).length;
  const commandRowCount = (source) =>
    source.split(/\r?\n/).filter((line) => /^\|\s*`pnpm |^\|\s*`sh /.test(line)).length;
  assert.equal(
    sectionCount(mirror),
    sectionCount(agents),
    'docs/AGENTS.zh-CN.review.md must mirror the AGENTS.md section skeleton (## heading count)'
  );
  assert.equal(
    commandRowCount(mirror),
    commandRowCount(agents),
    'docs/AGENTS.zh-CN.review.md must mirror the AGENTS.md command table (row count)'
  );

  const [flowchart, workflow, processDoc, localEnvironments, inputReadme, dataReadme, context, archIndex, lifecycle, verification] = await Promise.all([
    readFile(projectPath('docs/workflow-flowchart.zh-CN.html'), 'utf8'),
    readFile(projectPath('docs/dynamic-dataset-workflow.md'), 'utf8'),
    readFile(projectPath('docs/asset-workflow.md'), 'utf8'),
    readFile(projectPath('docs/local-environments.md'), 'utf8'),
    readFile(projectPath('input/README.md'), 'utf8'),
    readFile(projectPath('data/README.md'), 'utf8'),
    readFile(projectPath('CONTEXT.md'), 'utf8'),
    readFile(projectPath('docs/architecture/README.md'), 'utf8'),
    readFile(projectPath('docs/architecture/dataset-lifecycle.md'), 'utf8'),
    readFile(projectPath('docs/architecture/verification-publication.md'), 'utf8'),
  ]);

  // The operator relocation rule has exactly one owning definition in the
  // process owner. It keeps the scope rule (stop only for Sources outside the
  // signalled scope) and the no-clobber failure; other documents only point.
  assert.match(processDoc, /## 7\. Operator Review-Completion Signal/, 'asset-workflow must own the operator relocation rule');
  assert.match(processDoc, /outside the scope the signal names/, 'operator relocation must stop for Sources outside the signalled scope');
  assert.match(processDoc, /same-name destination/, 'operator relocation must keep the no-clobber failure step');
  assert.doesNotMatch(workflow, /Operator Review-Completion Signal\n/, 'modeling rules must not redefine the operator relocation rule');
  // One process, one owner: the modeling rules and the process owner name
  // only the record:workflow entry, never the historical low-level pipeline
  // (kept in docs/archive/ and the AGENTS command table).
  for (const [name, source] of [['docs/asset-workflow.md', processDoc], ['docs/dynamic-dataset-workflow.md', workflow]]) {
    assert.doesNotMatch(source, /record:(?:intake|build|verification|fidelity)\b|verify:closeout/, `${name} must use record:workflow instead of the historical low-level pipeline`);
  }
  // The no-browser delivery rule is owned once by asset-workflow; no other
  // document may reintroduce a final browser check of the viewer.
  assert.match(processDoc, /不用浏览器查看页面/, 'asset-workflow must own the no-browser delivery rule');
  for (const [name, source] of [['AGENTS.md', agents], ['docs/AGENTS.zh-CN.review.md', mirror], ['docs/dynamic-dataset-workflow.md', workflow], ['docs/local-environments.md', localEnvironments], ['docs/fidelity-loop-rules.md', await readFile(projectPath('docs/fidelity-loop-rules.md'), 'utf8')]]) {
    assert.doesNotMatch(source, /Verify the actual file entry|inspect the root file entry|实际打开|打开对应 key|实际验证文件入口/, `${name} reintroduces a browser check of the viewer; asset-workflow owns delivery`);
  }
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

  await Promise.all(
    [...CONTEXT_DOCS, 'docs/fidelity-feedback-casebook.md'].map(verifyLocalMarkdownLinks)
  );
  const fidelityRuleCount = await verifyFidelityRuleContract();
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
