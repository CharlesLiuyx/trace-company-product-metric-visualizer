import test from 'node:test';
import assert from 'node:assert/strict';
import { createFeedbackNote } from '../scripts/lib/workflow-feedback.mjs';

const now = () => '2026-10-01T09:30:00.000Z';

test('feedback records only the operator note, its date and optional scope', () => {
  assert.deepEqual(createFeedbackNote({ note: ' The zh revenue label overlaps the node. ', locales: ['zh', 'zh'], objectIds: ['revenue'] }, { buildId: 'build-x', now }), {
    protocol: 'feedback-note/v1',
    kind: 'feedback-note',
    buildId: 'build-x',
    note: 'The zh revenue label overlaps the node.',
    date: '2026-10-01',
    locales: ['zh'],
    objectIds: ['revenue'],
    recordedAt: '2026-10-01T09:30:00.000Z',
  });
  assert.equal(createFeedbackNote({ note: 'n', date: '2026-09-30' }, { buildId: 'build-x', now }).date, '2026-09-30');
});

test('feedback rejects empty notes, bad dates and the retired ledger fields', () => {
  assert.throws(() => createFeedbackNote({ note: ' ' }, { buildId: 'build-x', now }), /operator note/);
  assert.throws(() => createFeedbackNote({ note: 'n', date: '30/09/2026' }, { buildId: 'build-x', now }), /YYYY-MM-DD/);
  assert.throws(() => createFeedbackNote({ note: 'n', locales: [''] }, { buildId: 'build-x', now }), /locales/);
  assert.throws(
    () => createFeedbackNote({ note: 'n', feedbackId: 'FB-001', regionId: 'REG-001', cause: 'execution-gap' }, { buildId: 'build-x', now }),
    /Unsupported feedback field\(s\): feedbackId, regionId, cause/
  );
});
