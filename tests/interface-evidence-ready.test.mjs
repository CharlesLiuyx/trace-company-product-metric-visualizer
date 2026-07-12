import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertInterfaceEvidenceReady,
  digestInterfaceReferenceCrop,
  interfaceEvidenceProblems,
} from '../scripts/lib/interface-fidelity.mjs';

function passingAudit(overrides = {}) {
  return {
    version: 3,
    gate: 'G12',
    mode: 'error',
    status: 'passed',
    enforcementStatus: 'passed',
    candidateStatus: 'passed',
    referenceStatus: 'passed',
    expectedInterfaceIds: ['revenue:right'],
    auditedInterfaceIds: ['revenue:right'],
    summary: {
      expectedInterfaces: 1,
      auditedInterfaces: 1,
      passedInterfaces: 1,
      failedInterfaces: 0,
      documentedExceptions: 0,
      pendingInterfaces: 0,
      notScoredInterfaces: 0,
    },
    ...overrides,
  };
}

test('fully enforced G12 evidence is eligible for a Build', () => {
  const report = passingAudit();
  assert.deepEqual(interfaceEvidenceProblems(report), []);
  assert.doesNotThrow(() => assertInterfaceEvidenceReady(report));
});

test('warning and off G12 diagnostics cannot become Build evidence', () => {
  for (const mode of ['warning', 'off']) {
    const report = passingAudit({ mode, enforcementStatus: mode === 'warning' ? 'warning' : 'not-enforced' });
    assert.throws(() => assertInterfaceEvidenceReady(report), new RegExp(`mode=${mode}`));
  }
});

test('failed, pending, or not-scored interfaces cannot be hidden by a passing top-level status', () => {
  const failed = passingAudit({
    summary: {
      ...passingAudit().summary,
      passedInterfaces: 0,
      failedInterfaces: 1,
    },
  });
  assert.throws(() => assertInterfaceEvidenceReady(failed), /failed-interfaces/);

  const pending = passingAudit({
    summary: {
      ...passingAudit().summary,
      passedInterfaces: 0,
      pendingInterfaces: 1,
    },
  });
  assert.throws(() => assertInterfaceEvidenceReady(pending), /pending-interfaces/);

  const notScored = passingAudit({
    summary: {
      ...passingAudit().summary,
      passedInterfaces: 0,
      notScoredInterfaces: 1,
    },
  });
  assert.throws(() => assertInterfaceEvidenceReady(notScored), /not-scored-interfaces/);
});

test('expected and audited interface identity sets must match', () => {
  const report = passingAudit({ auditedInterfaceIds: ['tax:left'] });
  assert.throws(() => assertInterfaceEvidenceReady(report), /interface-id-mismatch/);
});

test('Interface Matrix reference-crop digest binds the actual side-local pixels', () => {
  const png = { width: 12, height: 12, data: new Uint8Array(12 * 12 * 4) };
  const geometry = {
    face: 'right',
    nodeBox: { left: 2, right: 6, top: 3, bottom: 9 },
  };
  const first = digestInterfaceReferenceCrop(png, geometry, 2);
  assert.deepEqual(first.bbox, { x: 4, y: 1, width: 5, height: 10 });

  png.data[(5 * png.width + 7) * 4] = 255;
  const changedInside = digestInterfaceReferenceCrop(png, geometry, 2);
  assert.notEqual(changedInside.digest, first.digest);

  png.data[(5 * png.width + 7) * 4] = 0;
  png.data[(11 * png.width + 11) * 4] = 255;
  const changedOutside = digestInterfaceReferenceCrop(png, geometry, 2);
  assert.equal(changedOutside.digest, first.digest);
});
