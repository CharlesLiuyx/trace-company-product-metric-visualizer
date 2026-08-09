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
  classifySideLabelColumnAlignment,
  classifyNodePaintAudit,
  classifySemanticAnnotationAudit,
  labelPositionExpectationsFromPlan,
  nodeFaceExpectationsFromPlan,
} from '../scripts/lib/render-harness.mjs';

test('T6 measures a shared rendered side-label edge across a column', () => {
  const passing = classifySideLabelColumnAlignment([
    { node: 'a', side: 'left-of-node', nodeEdge: 477, labelEdge: 450, gap: 27 },
    { node: 'b', side: 'left-of-node', nodeEdge: 477, labelEdge: 449.5, gap: 27.5 },
  ], ['a', 'b']);
  assert.equal(passing.labelEdgeSpread, 0.5);
  assert.deepEqual(passing.violations, []);

  const failing = classifySideLabelColumnAlignment([
    { node: 'a', side: 'left-of-node', nodeEdge: 477, labelEdge: 450, gap: 27 },
    { node: 'b', side: 'left-of-node', nodeEdge: 477, labelEdge: 430, gap: 47 },
  ], ['a', 'b']);
  assert.deepEqual(failing.violations.map((item) => item.code), ['label-edge-spread']);
});

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

test('the current node paint policy has no invisible semantic-node category', () => {
  const invisible = classify([node('anchor', { fill: 'none' })]);
  assert.throws(
    () => assertNodePaintAudit(invisible, {
      visible: ['anchor'],
      hidden: [],
      complete: true,
      protocol: 'node-face-policy/v2',
    }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['visible:anchor']?.message.includes('not-painted') &&
      !Object.hasOwn(error.assessment?.summary || {}, 'expectedHidden')
  );
});

test('node paint audit rejects duplicate semantic node IDs', () => {
  const audit = classify([node('tax'), node('tax')]);
  assert.deepEqual(audit.duplicateNodeIds, ['tax']);
  assert.throws(() => assertNodePaintAudit(audit), /duplicate semantic IDs: tax/);
});

test('node face expectations compile every v5 semantic node as visible', () => {
  const expectations = nodeFaceExpectationsFromPlan({
    protocol: 'verification-plan/v5',
    requiredChecks: [
      { id: 'feature:visible-node-face', evidenceTargets: ['nodes.revenue', 'nodes.tax'] },
      { id: 'feature:visible-short-node', evidenceTargets: ['nodes.tax', 'nodes.interest'] },
    ],
  });

  assert.deepEqual(expectations, {
    visible: ['interest', 'revenue', 'tax'],
    hidden: [],
    complete: true,
    protocol: 'node-face-policy/v2',
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

test('B3/T7 recognizes Brazilian real amounts when inferring centered side labels', () => {
  const audit = classifyLabelLayoutAudit({
    nodes: [{ id: 'transaction_services', box: { x: 100, y: 100, width: 20, height: 40 } }],
    labels: [
      {
        node: 'transaction_services',
        labelIndex: 0,
        text: 'R$0.5B (32%) Y/Y',
        box: { x: 100, y: 75, width: 20, height: 20 },
      },
      {
        node: 'transaction_services',
        labelIndex: 1,
        text: 'Transaction & services',
        box: { x: 20, y: 110, width: 70, height: 20 },
      },
    ],
  });

  assert.deepEqual(
    audit.inferredCenteredSideLabels.map((item) => item.text),
    ['Transaction & services']
  );
  assert.deepEqual(audit.inferredCenteredSideLabelViolations, []);
});

test('B3/T7 inferred side-name centering excludes side notes and margin text', () => {
  const audit = classifyLabelLayoutAudit({
    nodes: [{ id: 'subscription', box: { x: 100, y: 100, width: 20, height: 100 } }],
    labels: [
      {
        node: 'subscription',
        labelIndex: 0,
        text: '$2,040M +14% Y/Y',
        box: { x: 100, y: 65, width: 20, height: 25 },
      },
      {
        node: 'subscription',
        labelIndex: 1,
        text: 'Subscriptions and support',
        box: { x: 20, y: 140, width: 70, height: 20 },
      },
      {
        node: 'subscription',
        labelIndex: 2,
        text: '73% gross margin',
        box: { x: 20, y: 175, width: 70, height: 20 },
      },
    ],
  });

  assert.deepEqual(
    audit.inferredCenteredSideLabels.map((item) => item.text),
    ['Subscriptions and support']
  );
  assert.deepEqual(audit.inferredCenteredSideLabelViolations, []);
});

test('B3/T7 audits an explicitly centered combined side label', () => {
  const audit = classifyLabelLayoutAudit({
    nodes: [{ id: 'cloud_software', box: { x: 100, y: 100, width: 20, height: 80 } }],
    labels: [{
      node: 'cloud_software',
      labelIndex: 0,
      text: 'Cloud & Software ($4.8B) 68% gross margin',
      semanticRole: 'centered-side-label',
      box: { x: 130, y: 103, width: 180, height: 74 },
    }],
  });

  assert.deepEqual(
    audit.inferredCenteredSideLabels.map((item) => item.node),
    ['cloud_software']
  );
  assert.deepEqual(audit.inferredCenteredSideLabelViolations, []);
});

test('B3/T7 inferred side-name centering respects explicit fixed-block semantic roles', () => {
  const audit = classifyLabelLayoutAudit({
    nodes: [{ id: 'segment', box: { x: 100, y: 100, width: 20, height: 40 } }],
    labels: [
      {
        node: 'segment',
        labelIndex: 0,
        text: '$11.7B (8%) Y/Y',
        semanticRole: 'amount',
        box: { x: 100, y: 70, width: 20, height: 20 },
      },
      {
        node: 'segment',
        labelIndex: 1,
        text: 'Building Materials',
        semanticRole: 'name',
        box: { x: 20, y: 110, width: 70, height: 20 },
      },
      {
        node: 'segment',
        labelIndex: 2,
        text: 'Electrical/Lighting, Lumber, Millwork, and Plumbing',
        semanticRole: 'note',
        box: { x: 5, y: 125, width: 85, height: 35 },
      },
    ],
  });

  assert.deepEqual(
    audit.inferredCenteredSideLabels.map((item) => item.text),
    ['Building Materials']
  );
  assert.deepEqual(audit.inferredCenteredSideLabelViolations, []);
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

test('Build-bound T6 evidence rejects a drifting side-label column', () => {
  const plan = {
    requiredChecks: [{
      id: 'feature:aligned-side-label-column',
      enforcement: 'quantified-audit',
      evidenceKind: 'label-layout-audit',
      evidenceTargets: ['layout.labels.a', 'layout.labels.b'],
      objectIds: ['label:a', 'label:b'],
      ruleIds: ['T6'],
    }],
  };
  const aligned = {
    labelLayoutAudit: { horizontalSideLabels: [
      { node: 'a', side: 'left-of-node', nodeEdge: 477, labelEdge: 450, gap: 27 },
      { node: 'b', side: 'left-of-node', nodeEdge: 477, labelEdge: 450, gap: 27 },
    ] },
  };
  assert.doesNotThrow(() => assertPlannedRenderAudits(plan, aligned));
  aligned.labelLayoutAudit.horizontalSideLabels[1].labelEdge = 440;
  assert.throws(() => assertPlannedRenderAudits(plan, aligned), /label-edge-spread/);
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

test('I12 paired-node annotation evidence requires every planned cluster and <=4px center delta', () => {
  const plan = {
    requiredChecks: [{
      id: 'feature:paired-node-annotation',
      enforcement: 'quantified-audit',
      evidenceKind: 'annotation-pairing-audit',
      evidenceTargets: ['annotations.product-icon'],
      objectIds: ['asset:product-icon'],
    }],
  };
  const passing = {
    annotationPairingAudit: {
      measurements: [{ annotationId: 'product-icon', nodeId: 'product', centerDeltaY: 4 }],
      violations: [],
    },
  };
  assert.doesNotThrow(() => assertPlannedRenderAudits(plan, passing));
  assert.throws(() => assertPlannedRenderAudits(plan, {
    annotationPairingAudit: {
      measurements: [{ annotationId: 'product-icon', nodeId: 'product', centerDeltaY: 5 }],
      violations: [{ annotationId: 'product-icon', nodeId: 'product', code: 'center-y-delta' }],
    },
  }), /product-icon:center-y-delta/);
  assert.throws(() => assertPlannedRenderAudits(plan, {
    annotationPairingAudit: { measurements: [], violations: [] },
  }), /product-icon=missing-pair/);
});

test('semantic annotations require a bound metric, text, and renderer hitbox', () => {
  const passingAudit = classifySemanticAnnotationAudit({
    expectedNodeIds: ['other_income'],
    annotations: [{
      nodeId: 'other_income',
      interactive: true,
      metricExists: true,
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
      metricExists: true,
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
