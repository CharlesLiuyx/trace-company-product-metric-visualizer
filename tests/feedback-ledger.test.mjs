import test from 'node:test';
import assert from 'node:assert/strict';
import {
  assertFeedbackLedgerClosable,
  assertNoOpenFeedback,
  createFeedbackRecord,
  digestFeedbackValue,
  projectFeedbackLedger,
} from '../scripts/lib/feedback-ledger.mjs';

const evidence = (value) => digestFeedbackValue({ value });

function feedback(overrides = {}) {
  return createFeedbackRecord({
    buildId: 'build-alpha',
    feedbackId: 'FB-001',
    regionId: 'REG-001',
    ruleIds: ['T7'],
    cause: 'execution-gap',
    status: 'closed',
    beforeEvidenceDigests: [evidence('before')],
    afterEvidenceDigests: [evidence('after')],
    remedy: 'Aligned the side label to the node centre.',
    ...overrides,
  });
}

test('the second cross-Build execution-gap occurrence requires an automation upgrade', () => {
  const first = feedback();
  const second = feedback({
    buildId: 'build-beta',
    feedbackId: 'FB-001',
    regionId: 'REG-002',
    beforeEvidenceDigests: [evidence('before-beta')],
    afterEvidenceDigests: [evidence('after-beta')],
  });
  const ledger = projectFeedbackLedger([second, first]);
  const rule = ledger.byRule.find((item) => item.ruleId === 'T7');

  assert.equal(rule.occurrenceCount, 2);
  assert.equal(rule.executionGapOccurrenceCount, 2);
  assert.equal(rule.automationUpgradeRequired, true);
  assert.throws(
    () => assertFeedbackLedgerClosable(ledger),
    (error) => error.code === 'AUTOMATION_UPGRADE_REQUIRED'
  );
});

test('a recorded automation disposition closes the repeated execution-gap obligation', () => {
  const first = feedback();
  const second = feedback({
    buildId: 'build-beta',
    feedbackId: 'FB-001',
    regionId: 'REG-002',
    beforeEvidenceDigests: [evidence('before-beta')],
    afterEvidenceDigests: [evidence('after-beta')],
    automationDisposition: 'hard-gate',
  });
  const left = projectFeedbackLedger([first, second]);
  const right = projectFeedbackLedger([second, first]);

  assert.equal(left.byRule[0].automationUpgradeRequired, false);
  assert.equal(assertFeedbackLedgerClosable(left), left);
  assert.equal(left.digest, right.digest, 'projection digest must not depend on input order');
});

test('open active feedback blocks accepted closure', () => {
  const open = feedback({
    status: 'open',
    afterEvidenceDigests: [],
    remedy: null,
  });
  const ledger = projectFeedbackLedger([open]);

  assert.throws(
    () => assertNoOpenFeedback(ledger),
    (error) => error.code === 'OPEN_FEEDBACK' && error.details[0].feedbackId === 'FB-001'
  );
});

test('duplicate Feedback IDs within one Build are rejected while IDs may repeat across Builds', () => {
  const first = feedback();
  const duplicate = feedback({
    regionId: 'REG-002',
    beforeEvidenceDigests: [evidence('duplicate-before')],
    afterEvidenceDigests: [evidence('duplicate-after')],
  });
  assert.throws(
    () => projectFeedbackLedger([first, duplicate]),
    (error) => error.code === 'DUPLICATE_FEEDBACK_ID'
  );

  const otherBuild = feedback({
    buildId: 'build-beta',
    beforeEvidenceDigests: [evidence('other-before')],
    afterEvidenceDigests: [evidence('other-after')],
  });
  assert.equal(projectFeedbackLedger([first, otherBuild]).activeFeedback.length, 2);
});

test('two successors of one FeedbackRecord are rejected as a supersession fork', () => {
  const root = feedback({ status: 'open', afterEvidenceDigests: [], remedy: null });
  const firstSuccessor = feedback({
    supersedes: root.digest,
    beforeEvidenceDigests: root.beforeEvidenceDigests,
  });
  const secondSuccessor = feedback({
    status: 'open',
    supersedes: root.digest,
    beforeEvidenceDigests: root.beforeEvidenceDigests,
    afterEvidenceDigests: [],
    remedy: null,
    automationDisposition: 'quantified-audit',
  });

  assert.throws(
    () => projectFeedbackLedger([secondSuccessor, root, firstSuccessor]),
    (error) => error.code === 'SUPERSESSION_FORK'
  );
});
