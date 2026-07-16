import assert from 'node:assert/strict';
import test from 'node:test';
import {
  LABEL_POSITION_CENTER_TOLERANCE,
  MIN_VISIBLE_FACE_PX,
  assertNodePaintAudit,
  assertPlannedRenderAudits,
  assertRawSvgCanvas,
  classifyLabelLayoutAudit,
  classifyLabelPositionAudit,
  classifyNodePaintAudit,
  classifySemanticAnnotationAudit,
  labelPositionExpectationsFromPlan,
  nodeFaceExpectationsFromPlan,
} from '../scripts/lib/render-harness.mjs';

function node(id, overrides = {}) {
  return {
    id,
    bbox: { x: 10, y: 20, width: 18, height: 4 },
    fill: 'rgb(20, 30, 40)',
    fillOpacity: '1',
    stroke: 'none',
    strokeOpacity: '1',
    strokeWidth: 0,
    opacity: '1',
    display: 'inline',
    visibility: 'visible',
    ...overrides,
  };
}

function classify(nodes) {
  return classifyNodePaintAudit({
    dataset: 'example-fy25',
    language: 'en',
    background: 'rgb(239, 239, 239)',
    nodes,
  });
}

test('G2 accepts an exact raw viewBox with responsive or exact pixel width', () => {
  assert.doesNotThrow(() => assertRawSvgCanvas({ viewBox: '0 0 2400 1350', widthAttribute: '100%' }, {
    width: 2400,
    height: 1350,
  }));
  assert.doesNotThrow(() => assertRawSvgCanvas({
    viewBox: '0,0,2400,1350',
    widthAttribute: '2400px',
    heightAttribute: '1350',
  }, { width: 2400, height: 1350 }));
});

test('G2 rejects a renderer-authored wrong viewBox or numeric SVG size', () => {
  assert.throws(
    () => assertRawSvgCanvas({ viewBox: '0 0 1200 675', widthAttribute: '100%' }, { width: 2400, height: 1350 }),
    /Raw SVG viewBox mismatch/
  );
  assert.throws(
    () => assertRawSvgCanvas({ viewBox: '0 0 2400 1350', widthAttribute: '1200', heightAttribute: '1350' }, { width: 2400, height: 1350 }),
    /Raw SVG width mismatch/
  );
  assert.throws(
    () => assertRawSvgCanvas({ viewBox: '0 0 2400 1350', widthAttribute: '100%', heightAttribute: '675' }, { width: 2400, height: 1350 }),
    /Raw SVG height mismatch/
  );
  assert.throws(
    () => assertRawSvgCanvas({ viewBox: '0 0 2400 1350', widthAttribute: null, heightAttribute: null }, { width: 2400, height: 1350 }),
    /Raw SVG width is missing/
  );
  assert.throws(
    () => assertRawSvgCanvas({ viewBox: '0 0 2400 1350', widthAttribute: '100%', heightAttribute: 'auto' }, { width: 2400, height: 1350 }),
    /Unsupported responsive SVG height/
  );
});

test('node paint audit accepts either a contrasting fill or a visible stroke', () => {
  const audit = classify([
    node('filled'),
    node('stroked', {
      fill: 'rgb(239, 239, 239)',
      stroke: 'rgb(0, 0, 0)',
      strokeWidth: 2,
    }),
  ]);

  assert.deepEqual(audit.visibleNodeIds, ['filled', 'stroked']);
  assert.equal(audit.nodes.find((item) => item.id === 'filled').fillAlpha, 1);
  assert.equal(audit.nodes.find((item) => item.id === 'stroked').effectiveStrokeAlpha, 1);
  assert.doesNotThrow(() => assertNodePaintAudit(audit, { visible: ['filled', 'stroked'] }));
});

test('Toast/Alibaba short-node paint regression rejects transparent, background-coloured, zero-opacity, and hidden faces', () => {
  const audit = classify([
    node('none', { fill: 'none' }),
    node('transparent', { fill: 'rgba(20, 30, 40, 0)' }),
    node('background', { fill: 'rgb(239, 239, 239)' }),
    node('element-opacity', { opacity: '0' }),
    node('fill-opacity', { fillOpacity: '0' }),
    node('display', { display: 'none' }),
    node('visibility', { visibility: 'hidden' }),
    node('zero-box', { bbox: { x: 10, y: 20, width: 18, height: 0 } }),
  ]);

  assert.equal(audit.visibleNodeIds.length, 0);
  assert.equal(audit.invisibleNodeIds.length, 8);
  assert.equal(audit.nodes.find((item) => item.id === 'transparent').fillAlpha, 0);
  assert.equal(audit.nodes.find((item) => item.id === 'fill-opacity').effectiveFillAlpha, 0);
  assert.equal(audit.nodes.find((item) => item.id === 'background').fillMatchesBackground, true);
  assert.throws(
    () => assertNodePaintAudit(audit, { visible: ['background', 'transparent'] }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['visible:background']?.status === 'failed' &&
      error.assessment?.checks['visible:transparent']?.status === 'failed'
  );
});

test('T21 flags faceVisible nodes rendering below the shared MIN_VISIBLE_FACE_PX floor', () => {
  assert.equal(MIN_VISIBLE_FACE_PX, 3);
  const audit = classify([
    node('tall', { bbox: { x: 10, y: 20, width: 18, height: 12 } }),
    node('at-floor', { bbox: { x: 10, y: 20, width: 18, height: 3 } }),
    node('subpixel', { bbox: { x: 10, y: 20, width: 18, height: 0.57 } }),
    node('hairline', { bbox: { x: 10, y: 20, width: 18, height: 1 } }),
  ]);

  assert.equal(audit.minVisibleFacePx, 3);
  assert.deepEqual(audit.belowVisibilityFloorNodeIds, ['hairline', 'subpixel']);
  assert.equal(audit.nodes.find((item) => item.id === 'subpixel').faceHeight, 0.57);
  assert.equal(audit.nodes.find((item) => item.id === 'at-floor').faceBelowVisibilityFloor, false);
  assert.equal(audit.nodes.find((item) => item.id === 'tall').faceBelowVisibilityFloor, false);

  // An invisible face (alpha 0) is not double-counted as a floor breach; it is
  // already an invisibleNodeId, and B15/faceVisible owns that failure.
  const invisible = classify([node('gone', { fill: 'none', bbox: { x: 10, y: 20, width: 18, height: 0.4 } })]);
  assert.deepEqual(invisible.belowVisibilityFloorNodeIds, []);
  assert.deepEqual(invisible.invisibleNodeIds, ['gone']);

  assert.throws(
    () => assertNodePaintAudit(audit, { visible: ['hairline'] }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['visible:hairline']?.message.includes('no Source-bound exception')
  );
  assert.doesNotThrow(
    () => assertNodePaintAudit(audit, {}, { enforceUnboundFloor: false }),
    'catalog regression records below-floor faces but cannot adjudicate Plan-bound exceptions'
  );
});

test('node paint audit requires hidden anchors to exist but remain unpainted', () => {
  const hidden = classify([node('anchor', { fill: 'none' })]);
  assert.doesNotThrow(() => assertNodePaintAudit(hidden, { hidden: ['anchor'] }));

  const painted = classify([node('anchor')]);
  assert.throws(
    () => assertNodePaintAudit(painted, { hidden: ['anchor'] }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['hidden:anchor']?.message.includes('observed painted')
  );
  assert.throws(
    () => assertNodePaintAudit(classify([]), { hidden: ['anchor'] }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['hidden:anchor']?.message.includes('observed missing')
  );
});

test('node paint audit rejects duplicate semantic node IDs', () => {
  const audit = classify([node('tax'), node('tax')]);
  assert.deepEqual(audit.duplicateNodeIds, ['tax']);
  assert.throws(() => assertNodePaintAudit(audit), /duplicate semantic IDs: tax/);
});

test('node face expectations are compiled from v3 intent and legacy short-node checks', () => {
  const expectations = nodeFaceExpectationsFromPlan({
    protocol: 'verification-plan/v3',
    requiredChecks: [
      { id: 'feature:visible-node-face', evidenceTargets: ['nodes.revenue', 'nodes.tax'] },
      { id: 'feature:visible-short-node', evidenceTargets: ['nodes.tax', 'nodes.interest'] },
      { id: 'feature:hidden-anchor', evidenceTargets: ['nodes.balance-anchor'] },
    ],
  });

  assert.deepEqual(expectations, {
    visible: ['interest', 'revenue', 'tax'],
    hidden: ['balance-anchor'],
    complete: true,
  });
});

test('v3 node paint audit rejects every rendered node omitted from inventory intent', () => {
  const audit = classify([node('revenue'), node('unplanned')]);
  assert.throws(
    () => assertNodePaintAudit(audit, { visible: ['revenue'], hidden: [], complete: true }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.violations.some((item) =>
        item.code === 'unclassified-node' && item.nodeId === 'unplanned'
      )
  );
});

function labelAudit(labelBox, nodeBox = { x: 100, y: 100, width: 20, height: 4 }) {
  return classifyLabelLayoutAudit({
    nodes: [{ id: 'tax', box: nodeBox }],
    labels: [{ node: 'tax', labelIndex: 0, box: labelBox }],
  });
}

test('G8 uses 5px as the target and 4px as the inclusive hard boundary', () => {
  const target = labelAudit({ x: 100, y: 85, width: 20, height: 10 });
  assert.equal(target.thresholds.stackedLabelTargetGap, 5);
  assert.equal(target.verticalStacks[0].gap, 5);
  assert.deepEqual(target.verticalViolations, []);

  const boundary = labelAudit({ x: 100, y: 86, width: 20, height: 10 });
  assert.equal(boundary.verticalStacks[0].gap, 4);
  assert.deepEqual(boundary.verticalViolations, []);

  const failure = labelAudit({ x: 100, y: 86.1, width: 20, height: 10 });
  assert.equal(failure.verticalStacks[0].gap, 3.9);
  assert.equal(failure.verticalViolations.length, 1);
});

test('G9 accepts a 4px short-node center delta and rejects 4.1px', () => {
  const boundary = labelAudit({ x: 104, y: 86, width: 20, height: 10 });
  assert.equal(boundary.verticalStacks[0].centerDelta, 4);
  assert.deepEqual(boundary.centerViolations, []);

  const failure = labelAudit({ x: 104.1, y: 86, width: 20, height: 10 });
  assert.equal(failure.verticalStacks[0].centerDelta, 4.1);
  assert.equal(failure.centerViolations.length, 1);
});

test('G10 reports the 5px side target and fails only positive overlap', () => {
  const target = labelAudit(
    { x: 75, y: 105, width: 20, height: 10 },
    { x: 100, y: 100, width: 20, height: 20 }
  );
  assert.equal(target.thresholds.sideLabelTargetGap, 5);
  assert.equal(target.horizontalSideLabels[0].gap, 5);
  assert.deepEqual(target.horizontalViolations, []);

  const boundary = labelAudit(
    { x: 80, y: 105, width: 20, height: 10 },
    { x: 100, y: 100, width: 20, height: 20 }
  );
  assert.equal(boundary.horizontalSideLabels[0].gap, 0);
  assert.deepEqual(boundary.horizontalViolations, []);

  const failure = labelAudit(
    { x: 80.1, y: 105, width: 20, height: 10 },
    { x: 100, y: 100, width: 20, height: 20 }
  );
  assert.equal(failure.horizontalSideLabels[0].overlap, 0.1);
  assert.equal(failure.horizontalViolations.length, 1);
});

test('B3/T7 infer centered-side-label from a separate amount block and side name block', () => {
  const geometry = (sideY) => classifyLabelLayoutAudit({
    nodes: [{ id: 'region', box: { x: 100, y: 100, width: 20, height: 40 } }],
    labels: [
      {
        node: 'region',
        labelIndex: 0,
        text: '$0.2B +18% Y/Y',
        box: { x: 100, y: 75, width: 20, height: 20 },
      },
      {
        node: 'region',
        labelIndex: 1,
        text: 'LATAM',
        box: { x: 50, y: sideY, width: 40, height: 20 },
      },
    ],
  });

  const passing = geometry(110);
  assert.equal(passing.inferredCenteredSideLabels.length, 1);
  assert.deepEqual(passing.inferredCenteredSideLabelViolations, []);

  const failure = geometry(100);
  assert.equal(failure.inferredCenteredSideLabelViolations.length, 1);
  assert.equal(failure.inferredCenteredSideLabelViolations[0].verticalCenterDelta, 10);
});

test('Build-bound render evidence cannot archive a failed planned text, annotation, or centered-label gate', () => {
  const plan = {
    requiredChecks: [
      {
        id: 'feature:centered-side-label',
        enforcement: 'conditional-gate',
        evidenceKind: 'label-layout-audit',
        evidenceTargets: ['layout.labels.revenue'],
        objectIds: ['label:revenue'],
      },
      {
        id: 'feature:text',
        enforcement: 'conditional-gate',
        evidenceKind: 'text-layout-audit',
        objectIds: ['label:revenue'],
      },
      {
        id: 'feature:annotation-near-label',
        enforcement: 'conditional-gate',
        evidenceKind: 'annotation-layout-audit',
        objectIds: ['annotation:margin'],
      },
    ],
  };
  const passing = {
    labelLayoutAudit: { horizontalSideLabels: [{ node: 'revenue', verticalCenterDelta: 4 }] },
    textLayoutAudit: { checkedTexts: 1, overflowViolations: [] },
    annotationLayoutAudit: { checkedAnnotationTexts: 1, overlapViolations: [] },
  };
  assert.doesNotThrow(() => assertPlannedRenderAudits(plan, passing));

  assert.throws(
    () => assertPlannedRenderAudits(plan, {
      labelLayoutAudit: { horizontalSideLabels: [{ node: 'revenue', verticalCenterDelta: 4.1 }] },
      textLayoutAudit: { checkedTexts: 1, overflowViolations: [{ identity: 'label:revenue#0' }] },
      annotationLayoutAudit: { checkedAnnotationTexts: 0, overlapViolations: [] },
    }),
    /center-delta.*overflow.*no-rendered-annotation/
  );
});

test('T18 pairs plan reference measurements with rendered label groups by node', () => {
  const plan = {
    objectCoverage: [
      {
        objectId: 'node:tax',
        mapping: ['render:layout.labels.tax', 'render:nodes.tax'],
        featureEvidence: {
          'measured-label-position': {
            source: 'reference-measurement',
            locator: 'input/processing/example-fy25.png#tax-label-group',
            digest: `sha256:${'c'.repeat(64)}`,
            referenceBBox: [100, 200, 80, 40],
            inspectionMethod: 'native-scale-reference-measurement',
          },
        },
      },
      { objectId: 'asset:tax-icon', mapping: ['render:layout.labels.tax.icons'] },
      { objectId: 'node:revenue', mapping: ['render:nodes.revenue'] },
    ],
  };
  assert.deepEqual(labelPositionExpectationsFromPlan(plan), [{
    objectId: 'node:tax',
    node: 'tax',
    referenceBBox: [100, 200, 80, 40],
  }]);
});

test('T18 gates the source-language center deltas and only measures other locales', () => {
  const expectations = [{ objectId: 'node:tax', node: 'tax', referenceBBox: [100, 200, 80, 40] }];
  const centered = { labels: [{ node: 'tax', labelIndex: 0, box: { x: 102, y: 203, width: 80, height: 40 } }] };
  const shifted = { labels: [{ node: 'tax', labelIndex: 0, box: { x: 100, y: 222, width: 80, height: 40 } }] };

  const pass = classifyLabelPositionAudit(centered, expectations, { locale: 'en' });
  assert.equal(pass.enforced, true);
  assert.equal(pass.tolerance, LABEL_POSITION_CENTER_TOLERANCE);
  assert.deepEqual(pass.violations, []);
  assert.equal(pass.measurements[0].deltaX, 2);
  assert.equal(pass.measurements[0].deltaY, 3);

  const fail = classifyLabelPositionAudit(shifted, expectations, { locale: 'en' });
  assert.deepEqual(fail.violations.map((item) => item.code), ['center-y-delta']);

  const localized = classifyLabelPositionAudit(shifted, expectations, { locale: 'zh' });
  assert.equal(localized.enforced, false);
  assert.deepEqual(localized.violations, [], 'localized layout acceptance is owned by Z2/Z5/Z6');

  const missing = classifyLabelPositionAudit({ labels: [] }, expectations, { locale: 'zh' });
  assert.deepEqual(missing.violations.map((item) => item.code), ['missing-label-group'], 'every locale must render each measured group');
});

test('T18 uses an explicitly approved user target while retaining the Source measurement', () => {
  const plan = {
    objectCoverage: [{
      objectId: 'node:tax',
      mapping: ['render:layout.labels.tax', 'render:nodes.tax'],
      featureEvidence: {
        'measured-label-position': {
          referenceBBox: [100, 200, 80, 40],
          approvedTargetBBox: [60, 200, 80, 40],
          approvedTargetAuthority: 'user-directed-layout-correction',
          approvedTargetReason: 'Move the label left to clear the adjacent flow.',
        },
      },
    }],
  };
  const [expectation] = labelPositionExpectationsFromPlan(plan);
  assert.deepEqual(expectation, {
    objectId: 'node:tax',
    node: 'tax',
    referenceBBox: [60, 200, 80, 40],
    sourceReferenceBBox: [100, 200, 80, 40],
    approvedTargetAuthority: 'user-directed-layout-correction',
    approvedTargetReason: 'Move the label left to clear the adjacent flow.',
  });
  const audit = classifyLabelPositionAudit({ labels: [{ node: 'tax', labelIndex: 0, box: { x: 60, y: 200, width: 80, height: 40 } }] }, [expectation]);
  assert.deepEqual(audit.violations, []);
  assert.deepEqual(audit.measurements[0].sourceReferenceBBox, [100, 200, 80, 40]);
});

test('Build-bound render evidence cannot archive a failed planned label-position gate', () => {
  const plan = {
    requiredChecks: [{
      id: 'feature:measured-label-position',
      enforcement: 'conditional-gate',
      evidenceKind: 'label-position-audit',
      objectIds: ['node:tax'],
    }],
  };
  assert.doesNotThrow(() => assertPlannedRenderAudits(plan, {
    labelPositionAudit: { violations: [] },
  }));
  assert.throws(
    () => assertPlannedRenderAudits(plan, {
      labelPositionAudit: { violations: [{ node: 'tax', code: 'center-y-delta', delta: 19 }] },
    }),
    /tax:center-y-delta/
  );
  assert.throws(() => assertPlannedRenderAudits(plan, {}), /missing-audit/);
});

test('semantic annotations require a bound node, text, and renderer hitbox', () => {
  const passingAudit = classifySemanticAnnotationAudit({
    expectedNodeIds: ['other_income'],
    annotations: [{
      nodeId: 'other_income',
      interactive: true,
      nodeExists: true,
      textCount: 2,
      hasHitbox: true,
    }],
  });
  assert.deepEqual(passingAudit.violations, []);

  const plan = {
    requiredChecks: [{
      id: 'feature:semantic-annotation',
      enforcement: 'conditional-gate',
      evidenceKind: 'annotation-semantics-audit',
      objectIds: ['node:other-income'],
    }],
  };
  assert.doesNotThrow(() => assertPlannedRenderAudits(plan, { semanticAnnotationAudit: passingAudit }));

  const failedAudit = classifySemanticAnnotationAudit({
    expectedNodeIds: ['other_income'],
    annotations: [{
      nodeId: 'other_income',
      interactive: true,
      nodeExists: true,
      textCount: 2,
      hasHitbox: false,
    }],
    unboundNodeLikeTexts: [{ nodeId: 'other_income', text: 'Other' }],
  });
  assert.deepEqual(
    failedAudit.violations.map((item) => item.code),
    ['missing-annotation-hitbox', 'unbound-node-like-text']
  );
  assert.throws(
    () => assertPlannedRenderAudits(plan, { semanticAnnotationAudit: failedAudit }),
    /other_income:missing-annotation-hitbox.*other_income:unbound-node-like-text/
  );
});
