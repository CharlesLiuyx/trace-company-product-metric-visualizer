import { createHash, randomUUID } from 'node:crypto';

export const DATASET_BUILD_PROTOCOL = 'dataset-build/v1';
export const DATASET_BUILD_STATES = Object.freeze([
  'INTAKED',
  'AUTHORED',
  'CLOSED',
  'BASELINE_STAGED',
  'SEALED',
]);
export const DATASET_ADAPTERS = Object.freeze(['income-statement', 'revenue-metric']);
export const SOURCE_AVAILABILITY = Object.freeze(['public', 'local-only', 'restricted']);
export const CHANGE_IMPACTS = Object.freeze([
  'new-dataset',
  'geometry',
  'render-engine',
  'interaction',
  'localized-layout',
  'display-text-only',
  'asset',
  'financial-data-only',
  'company-metadata-only',
  'docs-only',
]);

const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const CHANGE_IMPACT_SET = new Set(CHANGE_IMPACTS);

function invariant(condition, code, message) {
  if (condition) return;
  const error = new Error(message);
  error.code = code;
  throw error;
}

function canonicalValue(value) {
  if (Array.isArray(value)) return value.map(canonicalValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => [key, canonicalValue(value[key])])
  );
}

export function digestValue(value) {
  const source = JSON.stringify(canonicalValue(value));
  return `sha256:${createHash('sha256').update(source).digest('hex')}`;
}

function assertDigest(value, label) {
  invariant(DIGEST_RE.test(String(value || '')), 'INVALID_DIGEST', `${label} must be a sha256 digest`);
}

function assertTimestamp(value, label) {
  invariant(
    typeof value === 'string' && Number.isFinite(Date.parse(value)),
    'INVALID_TIMESTAMP',
    `${label} must be an ISO timestamp`
  );
}

function nextReceipt(build, state, payload, now) {
  const revision = build.revision + 1;
  const receipt = {
    revision,
    state,
    recordedAt: now(),
    payload,
  };
  receipt.digest = digestValue({
    protocol: DATASET_BUILD_PROTOCOL,
    buildId: build.buildId,
    previousReceipt: build.receipts.at(-1)?.digest || null,
    ...receipt,
  });
  return {
    ...build,
    revision,
    state,
    receipts: [...build.receipts, receipt],
  };
}

function normalizeSources(sources) {
  invariant(Array.isArray(sources) && sources.length > 0, 'SOURCE_REQUIRED', 'At least one Source is required');
  return sources.map((source, index) => {
    invariant(source && typeof source.uri === 'string' && source.uri, 'SOURCE_INVALID', `Source ${index} needs a uri`);
    invariant(
      SOURCE_AVAILABILITY.includes(source.availability),
      'SOURCE_INVALID',
      `Source ${index} has unsupported availability`
    );
    assertDigest(source.digest, `Source ${index} digest`);
    for (const field of ['processingUri', 'processedUri']) {
      invariant(
        source[field] == null || (typeof source[field] === 'string' && source[field]),
        'SOURCE_INVALID',
        `Source ${index} ${field} must be a non-empty string when supplied`
      );
    }
    return {
      uri: source.uri,
      availability: source.availability,
      digest: source.digest,
      role: source.role || 'primary-reference',
      ...(source.processingUri == null ? {} : { processingUri: source.processingUri }),
      ...(source.processedUri == null ? {} : { processedUri: source.processedUri }),
      ...(source.width == null ? {} : { width: source.width }),
      ...(source.height == null ? {} : { height: source.height }),
    };
  });
}

export function createDatasetBuild(input, options = {}) {
  const now = options.now || (() => new Date().toISOString());
  const id = options.id || (() => `build-${randomUUID()}`);
  invariant(input && typeof input.key === 'string' && input.key, 'KEY_REQUIRED', 'Dataset key is required');
  invariant(DATASET_ADAPTERS.includes(input.adapter), 'ADAPTER_INVALID', `Unsupported Adapter: ${input.adapter}`);
  assertDigest(input.baseCanonicalDigest, 'baseCanonicalDigest');
  const sources = normalizeSources(input.sources);
  const build = {
    schemaVersion: 1,
    protocol: DATASET_BUILD_PROTOCOL,
    kind: 'dataset-build',
    buildId: id(),
    key: input.key,
    adapter: input.adapter,
    baseCanonicalDigest: input.baseCanonicalDigest,
    revision: -1,
    state: null,
    sources,
    receipts: [],
  };
  return nextReceipt(
    build,
    'INTAKED',
    {
      sourceSetDigest: digestValue(sources),
      sourcePolicy: sources.map(({ uri, availability, role }) => ({ uri, availability, role })),
    },
    now
  );
}

function authoredPayload(build, command) {
  invariant(Array.isArray(command.artifacts) && command.artifacts.length > 0, 'ARTIFACTS_REQUIRED', 'Authored artifacts are required');
  const artifacts = command.artifacts
    .map((artifact, index) => {
      invariant(artifact && typeof artifact.path === 'string' && artifact.path, 'ARTIFACT_INVALID', `Artifact ${index} needs a path`);
      assertDigest(artifact.digest, `Artifact ${index} digest`);
      return { path: artifact.path, digest: artifact.digest, role: artifact.role || 'authored' };
    })
    .sort((left, right) => left.path.localeCompare(right.path));
  invariant(command.inventory && typeof command.inventory === 'object', 'INVENTORY_REQUIRED', 'Object inventory is required');
  const inventoryDigest = command.inventory.inventoryDigest || command.inventory.digest;
  assertDigest(inventoryDigest, 'Inventory digest');
  const changeImpact = [...new Set(command.changeImpact || [])].sort();
  invariant(changeImpact.length > 0, 'CHANGE_IMPACT_REQUIRED', 'At least one ChangeImpact is required');
  for (const impact of changeImpact) {
    invariant(CHANGE_IMPACT_SET.has(impact), 'CHANGE_IMPACT_INVALID', `Unsupported ChangeImpact: ${impact}`);
  }
  let verificationPlan = null;
  if (command.verificationPlan) {
    const planDigest = command.verificationPlan.planDigest || command.verificationPlan.digest;
    assertDigest(planDigest, 'VerificationPlan digest');
    invariant(
      command.verificationPlan.datasetKey === build.key,
      'VERIFICATION_PLAN_INVALID',
      'VerificationPlan dataset key does not match the Build'
    );
    invariant(
      command.verificationPlan.adapter === build.adapter,
      'VERIFICATION_PLAN_INVALID',
      'VerificationPlan Adapter does not match the Build'
    );
    invariant(
      Array.isArray(command.verificationPlan.requiredLocales) && command.verificationPlan.requiredLocales.length > 0,
      'VERIFICATION_PLAN_INVALID',
      'VerificationPlan requires at least one locale'
    );
    invariant(
      Array.isArray(command.verificationPlan.changeImpact),
      'VERIFICATION_PLAN_INVALID',
      'VerificationPlan ChangeImpact is required'
    );
    invariant(
      digestValue([...command.verificationPlan.changeImpact].sort()) === digestValue(changeImpact),
      'VERIFICATION_PLAN_INVALID',
      'VerificationPlan ChangeImpact does not match the authored command'
    );
    verificationPlan = { ...command.verificationPlan, digest: planDigest };
  }
  const snapshot = {
    artifacts,
    inventory: { ...command.inventory, digest: inventoryDigest },
    changeImpact,
    ...(verificationPlan ? { verificationPlan } : {}),
  };
  return {
    ...snapshot,
    ...(build.state !== 'INTAKED' ? { reopenedFrom: build.state } : {}),
    ...(verificationPlan ? { verificationPlanDigest: verificationPlan.digest } : {}),
    snapshotDigest: digestValue(snapshot),
  };
}

function closurePayload(build, command) {
  const authored = [...build.receipts].reverse().find((receipt) => receipt.state === 'AUTHORED')?.payload;
  invariant(authored, 'AUTHORED_REQUIRED', 'Closure requires an authored snapshot');
  invariant(command.snapshotDigest === authored.snapshotDigest, 'STALE_SNAPSHOT', 'Closure evidence does not match the authored snapshot');
  let fidelityResult = null;
  if (authored.verificationPlan) {
    invariant(command.fidelityResult && typeof command.fidelityResult === 'object', 'FIDELITY_RESULT_REQUIRED', 'Versioned closure requires a FidelityResult');
  }
  if (command.fidelityResult) {
    const result = command.fidelityResult;
    assertDigest(result.resultDigest, 'FidelityResult digest');
    invariant(result.status === 'accepted', 'FIDELITY_RESULT_NOT_ACCEPTED', 'FidelityResult must be accepted before Build closure');
    invariant(result.subject?.buildId === build.buildId, 'FIDELITY_RESULT_MISMATCH', 'FidelityResult Build does not match');
    invariant(result.subject?.key === build.key, 'FIDELITY_RESULT_MISMATCH', 'FidelityResult dataset key does not match');
    invariant(result.subject?.authoredDigest === authored.snapshotDigest, 'STALE_FIDELITY_RESULT', 'FidelityResult authored digest is stale');
    invariant(
      !authored.verificationPlanDigest || result.subject?.verificationPlanDigest === authored.verificationPlanDigest,
      'STALE_FIDELITY_RESULT',
      'FidelityResult VerificationPlan digest is stale'
    );
    fidelityResult = {
      resultDigest: result.resultDigest,
      status: result.status,
      subject: result.subject,
    };
  }
  let reviewObjects = null;
  if (authored.verificationPlan) {
    invariant(command.reviewObjects && typeof command.reviewObjects === 'object', 'REVIEW_OBJECTS_REQUIRED', 'Versioned closure requires review object references');
    const expectedKinds = {
      fidelityResult: 'fidelity-result',
      feedbackLedger: 'feedback-ledger',
    };
    reviewObjects = {};
    for (const [field, kind] of Object.entries(expectedKinds)) {
      const reference = command.reviewObjects[field];
      invariant(reference?.kind === kind, 'REVIEW_OBJECTS_INVALID', `${field} must reference a ${kind} object`);
      assertDigest(reference.digest, `${field} object digest`);
      invariant(typeof reference.path === 'string' && reference.path, 'REVIEW_OBJECTS_INVALID', `${field} object path is required`);
      reviewObjects[field] = { kind, digest: reference.digest, path: reference.path };
    }
    const feedbackRecords = command.reviewObjects.feedbackRecords || [];
    invariant(Array.isArray(feedbackRecords), 'REVIEW_OBJECTS_INVALID', 'feedbackRecords must be an array');
    reviewObjects.feedbackRecords = feedbackRecords.map((reference, index) => {
      invariant(reference?.kind === 'feedback-record', 'REVIEW_OBJECTS_INVALID', `feedbackRecords[${index}] must reference a feedback-record object`);
      assertDigest(reference.digest, `feedbackRecords[${index}] digest`);
      invariant(typeof reference.path === 'string' && reference.path, 'REVIEW_OBJECTS_INVALID', `feedbackRecords[${index}] path is required`);
      return { kind: reference.kind, digest: reference.digest, path: reference.path };
    });
  }
  const evidence = command.evidence || {};
  const requiredAxes = ['candidate', 'reference', 'process', 'human'];
  for (const axis of requiredAxes) {
    const item = evidence[axis];
    invariant(item && typeof item === 'object', 'CLOSURE_INVALID', `Closure evidence is missing the ${axis} axis`);
    assertDigest(item.digest, `${axis} evidence digest`);
    const allowed = build.adapter === 'revenue-metric' && axis === 'reference'
      ? ['passed', 'not-applicable']
      : ['passed'];
    invariant(allowed.includes(item.status), 'CLOSURE_INVALID', `${axis} evidence must be ${allowed.join(' or ')}`);
  }
  const payload = {
    snapshotDigest: authored.snapshotDigest,
    evidence,
    ...(fidelityResult ? { fidelityResult } : {}),
    ...(reviewObjects ? { reviewObjects } : {}),
  };
  return { ...payload, closureDigest: digestValue(payload) };
}

function baselinePayload(build, command) {
  const closure = [...build.receipts].reverse().find((receipt) => receipt.state === 'CLOSED')?.payload;
  invariant(closure, 'CLOSURE_REQUIRED', 'Baseline staging requires closure');
  invariant(command.closureDigest === closure.closureDigest, 'STALE_CLOSURE', 'Baseline claim does not match the current closure');
  if (build.adapter === 'revenue-metric') {
    invariant(command.disposition === 'not-applicable', 'BASELINE_INVALID', 'Revenue Metric baseline must be not-applicable');
    invariant(command.reason === 'revenue-metric-data-only', 'BASELINE_INVALID', 'Revenue Metric baseline needs the data-only reason');
    return {
      closureDigest: closure.closureDigest,
      disposition: 'not-applicable',
      reason: command.reason,
    };
  }
  invariant(command.disposition === 'recorded', 'BASELINE_INVALID', 'Income Statement baseline must be recorded');
  invariant(command.use === 'future-regression-only', 'BASELINE_SELF_REFERENCE', 'A staged baseline is for future regression only');
  invariant(command.metrics && typeof command.metrics === 'object', 'BASELINE_INVALID', 'Baseline metrics are required');
  const claim = {
    closureDigest: closure.closureDigest,
    disposition: 'recorded',
    use: command.use,
    metrics: command.metrics,
  };
  return { ...claim, claimDigest: digestValue(claim) };
}

function sealPayload(build, command) {
  const authored = [...build.receipts].reverse().find((receipt) => receipt.state === 'AUTHORED')?.payload;
  const closure = [...build.receipts].reverse().find((receipt) => receipt.state === 'CLOSED')?.payload;
  const baselineReceipt = [...build.receipts].reverse().find((receipt) => receipt.state === 'BASELINE_STAGED');
  invariant(authored && closure && baselineReceipt, 'SEAL_PRECONDITION', 'Seal requires authored, closure, and staged-baseline receipts');
  invariant(command.status === 'passed', 'SEAL_VERIFICATION_FAILED', 'Fresh final verification must pass');
  invariant(command.snapshotDigest === authored.snapshotDigest, 'STALE_SNAPSHOT', 'Seal snapshot is stale');
  invariant(command.closureDigest === closure.closureDigest, 'STALE_CLOSURE', 'Seal closure is stale');
  invariant(command.baseCanonicalDigest === build.baseCanonicalDigest, 'CANONICAL_CONFLICT', 'Seal canonical base changed');
  assertTimestamp(command.acceptedAt, 'acceptedAt');
  invariant(Array.isArray(command.verdictInputDigests), 'SEAL_INVALID', 'verdictInputDigests are required');
  const verdictInputs = new Set(command.verdictInputDigests);
  for (const digest of verdictInputs) assertDigest(digest, 'Verdict input');
  invariant(
    !verdictInputs.has(baselineReceipt.digest) && !verdictInputs.has(baselineReceipt.payload.claimDigest),
    'BASELINE_SELF_REFERENCE',
    'The current staged baseline cannot participate in its own SEALED verdict'
  );
  for (const axis of Object.values(closure.evidence)) {
    invariant(verdictInputs.has(axis.digest), 'SEAL_INVALID', 'SEALED verdict must include every closure evidence digest');
  }
  let finalProfiles = null;
  if (command.finalProfiles !== undefined && command.finalProfiles !== null) {
    invariant(
      Array.isArray(command.finalProfiles) && command.finalProfiles.length > 0,
      'SEAL_INVALID',
      'finalProfiles must be a non-empty array'
    );
    finalProfiles = command.finalProfiles.map((profile, index) => {
      invariant(profile && typeof profile === 'object', 'SEAL_INVALID', `finalProfiles[${index}] must be an object`);
      invariant(typeof profile.profile === 'string' && profile.profile, 'SEAL_INVALID', `finalProfiles[${index}].profile is required`);
      invariant(profile.status === 'passed', 'SEAL_VERIFICATION_FAILED', 'Seal final profile must pass');
      assertDigest(profile.outputDigest, `finalProfiles[${index}] output`);
      assertTimestamp(profile.checkedAt, `finalProfiles[${index}].checkedAt`);
      if (profile.locale !== undefined && profile.locale !== null) {
        invariant(typeof profile.locale === 'string' && profile.locale, 'SEAL_INVALID', `finalProfiles[${index}].locale must be a locale code`);
      }
      return {
        profile: profile.profile,
        status: 'passed',
        outputDigest: profile.outputDigest,
        checkedAt: profile.checkedAt,
        ...(profile.locale ? { locale: profile.locale } : {}),
      };
    });
  }
  const payload = {
    status: 'passed',
    snapshotDigest: authored.snapshotDigest,
    closureDigest: closure.closureDigest,
    baselineReceiptDigest: baselineReceipt.digest,
    verdictInputDigests: [...verdictInputs].sort(),
    acceptedAt: command.acceptedAt,
    baseCanonicalDigest: build.baseCanonicalDigest,
    ...(finalProfiles ? { finalProfiles } : {}),
  };
  return { ...payload, sealDigest: digestValue(payload) };
}

export function advanceDatasetBuild(build, command, options = {}) {
  const now = options.now || (() => new Date().toISOString());
  invariant(build?.protocol === DATASET_BUILD_PROTOCOL, 'BUILD_INVALID', 'Unsupported Dataset Build record');
  invariant(Number.isInteger(command?.expectedRevision), 'REVISION_REQUIRED', 'expectedRevision is required');
  invariant(command.expectedRevision === build.revision, 'STALE_REVISION', 'Dataset Build revision changed');

  if (command.type === 'record-authored') {
    invariant(['INTAKED', 'AUTHORED', 'CLOSED', 'BASELINE_STAGED', 'SEALED'].includes(build.state), 'STATE_PRECONDITION', 'Cannot author from the current state');
    return nextReceipt(build, 'AUTHORED', authoredPayload(build, command), now);
  }
  if (command.type === 'record-closed') {
    invariant(build.state === 'AUTHORED', 'STATE_PRECONDITION', 'Closure requires AUTHORED state');
    return nextReceipt(build, 'CLOSED', closurePayload(build, command), now);
  }
  if (command.type === 'stage-baseline') {
    invariant(build.state === 'CLOSED', 'STATE_PRECONDITION', 'Baseline staging requires CLOSED state');
    return nextReceipt(build, 'BASELINE_STAGED', baselinePayload(build, command), now);
  }
  if (command.type === 'seal') {
    invariant(build.state === 'BASELINE_STAGED', 'STATE_PRECONDITION', 'Seal requires BASELINE_STAGED state');
    return nextReceipt(build, 'SEALED', sealPayload(build, command), now);
  }
  invariant(false, 'COMMAND_INVALID', `Unsupported Dataset Build command: ${command.type}`);
}

export function planPublicationBatch(builds, currentCanonicalDigest) {
  invariant(Array.isArray(builds) && builds.length > 0, 'BUILDS_REQUIRED', 'Publication needs at least one Dataset Build');
  assertDigest(currentCanonicalDigest, 'currentCanonicalDigest');
  const ids = new Set();
  const bases = new Set();
  const sealed = builds.map((build) => {
    invariant(build?.state === 'SEALED', 'UNSEALED_BUILD', `Build ${build?.buildId || '<unknown>'} is not SEALED`);
    invariant(!ids.has(build.buildId), 'DUPLICATE_BUILD', `Build ${build.buildId} appears twice`);
    ids.add(build.buildId);
    bases.add(build.baseCanonicalDigest);
    const seal = build.receipts.at(-1)?.payload;
    return { buildId: build.buildId, key: build.key, sealDigest: seal.sealDigest };
  });
  invariant(bases.size === 1, 'MIXED_BASE', 'All SEALED builds in a batch must share one canonical base');
  const [baseCanonicalDigest] = bases;
  if (baseCanonicalDigest !== currentCanonicalDigest) {
    return {
      kind: 'publication-batch',
      state: 'CONFLICTED',
      baseCanonicalDigest,
      currentCanonicalDigest,
      builds: sealed,
      recovery: 'replan-reverify-reseal',
    };
  }
  const plan = {
    protocol: 'dataset-publication/v1',
    baseCanonicalDigest,
    builds: sealed.sort((left, right) => left.key.localeCompare(right.key)),
  };
  return {
    kind: 'publication-batch',
    state: 'PLANNED',
    ...plan,
    planDigest: digestValue(plan),
  };
}
