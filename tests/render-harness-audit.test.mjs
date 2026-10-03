import assert from 'node:assert/strict';
import test from 'node:test';
import {
  LABEL_POSITION_CENTER_TOLERANCE,
  MIN_VISIBLE_FACE_PX,
  assertNodePaintAudit,
  assertRawSvgCanvas,
  assertRenderAudits,
  classifyDeclaredSideLabelColumns,
  classifyLabelLayoutAudit,
  classifyLabelPositionAudit,
  classifySideLabelColumnAlignment,
  classifyNodePaintAudit,
  classifySemanticAnnotationAudit,
  labelPositionExpectations,
  renderAuditFailures,
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

test('B15 flags faceVisible nodes rendering below the shared MIN_VISIBLE_FACE_PX floor', () => {
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
      error.assessment?.checks['visible:hairline']?.message.includes('not declared in shortNodes')
  );
  assert.doesNotThrow(
    () => assertNodePaintAudit(audit, { visible: ['hairline'], short: ['hairline'] }),
    'a shortNodes declaration accepts the painted sub-floor face'
  );
  assert.doesNotThrow(
    () => assertNodePaintAudit(audit, {}, { enforceUnboundFloor: false }),
    'catalog regression records below-floor faces but leaves the floor to Build-bound runs'
  );
});

test('the node paint policy has no invisible semantic-node category', () => {
  const invisible = classify([node('anchor', { fill: 'none' })]);
  assert.throws(
    () => assertNodePaintAudit(invisible, { visible: ['anchor'], complete: true }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['visible:anchor']?.message.includes('not-painted')
  );
});

test('node paint audit rejects duplicate semantic node IDs', () => {
  const audit = classify([node('tax'), node('tax')]);
  assert.deepEqual(audit.duplicateNodeIds, ['tax']);
  assert.throws(() => assertNodePaintAudit(audit), /duplicate semantic IDs: tax/);
});

test('a Build-bound node audit checks every rendered node, not only value nodes', () => {
  const audit = classify([node('revenue'), node('unlisted', { fill: 'none' })]);
  assert.throws(
    () => assertNodePaintAudit(audit, { visible: ['revenue'], short: [], complete: true }),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['visible:unlisted']?.status === 'failed' &&
      error.assessment?.checks['visible:revenue']?.status === 'passed'
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

test('G8 accepts a 4px short-node center delta and rejects 4.1px', () => {
  const boundary = labelAudit({ x: 104, y: 86, width: 20, height: 10 });
  assert.equal(boundary.verticalStacks[0].centerDelta, 4);
  assert.deepEqual(boundary.centerViolations, []);

  const failure = labelAudit({ x: 104.1, y: 86, width: 20, height: 10 });
  assert.equal(failure.verticalStacks[0].centerDelta, 4.1);
  assert.equal(failure.centerViolations.length, 1);
});

test('G8 reports the 5px side target and fails only positive overlap', () => {
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

test('T7 infers centered-side-label from a separate amount block and side name block', () => {
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

test('T7 recognizes Brazilian real amounts when inferring centered side labels', () => {
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

test('T7 inferred side-name centering excludes side notes and margin text', () => {
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

test('T7 audits an explicitly centered combined side label', () => {
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

test('T7 inferred side-name centering respects explicit fixed-block semantic roles', () => {
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

test('B6 text overflow fails every render; A6 overlap fails only once data-annotation-clearance renders', () => {
  const clean = {
    textLayoutAudit: { checkedTexts: 1, overflowViolations: [] },
    annotationLayoutAudit: { checkedAnnotations: 0, overlapViolations: [] },
  };
  assert.deepEqual(renderAuditFailures(clean), []);
  assert.deepEqual(renderAuditFailures({}), ['B6=missing-audit']);
  assert.throws(
    () => assertRenderAudits({ ...clean, textLayoutAudit: { checkedTexts: 1, overflowViolations: [{ identity: 'label:revenue#0' }] } }),
    /B6=overflow:label:revenue#0/
  );
  const overlapViolations = [{ annotation: { identity: 'annotation#3' }, protectedText: { identity: 'label:tax#1' } }];
  assert.deepEqual(
    renderAuditFailures({ ...clean, annotationLayoutAudit: { checkedAnnotations: 1, checkedAnnotationGraphics: 0, overlapViolations } }),
    [],
    'annotation text alone does not opt a View into A6'
  );
  assert.deepEqual(
    renderAuditFailures({ ...clean, annotationLayoutAudit: { checkedAnnotations: 2, checkedAnnotationGraphics: 1, overlapViolations } }),
    ['A6=overlap:annotation#3/label:tax#1']
  );
});

test('I12 and A10 run when their attributes render', () => {
  const base = { textLayoutAudit: { checkedTexts: 1, overflowViolations: [] } };
  assert.deepEqual(renderAuditFailures({
    ...base,
    annotationPairingAudit: { expectedPairs: 1, measurements: [{ annotationId: 'product-icon', centerDeltaY: 4 }], violations: [] },
  }), []);
  assert.deepEqual(renderAuditFailures({
    ...base,
    annotationPairingAudit: {
      expectedPairs: 1,
      measurements: [],
      violations: [{ annotationId: 'product-icon', nodeId: 'product', code: 'center-y-delta' }],
    },
  }), ['I12=product-icon:center-y-delta']);
  const failedSemantic = classifySemanticAnnotationAudit({
    annotations: [{ nodeId: 'other_income', metricExists: true, textCount: 2, hasHitbox: false }],
    unboundNodeLikeTexts: [{ nodeId: 'other_income', text: 'Other' }],
  });
  assert.throws(
    () => assertRenderAudits({ ...base, semanticAnnotationAudit: failedSemantic }),
    /A10=other_income:missing-annotation-hitbox,other_income:unbound-node-like-text/
  );
});

test('T6 audits side labels that declare an aligned column', () => {
  const columns = classifyDeclaredSideLabelColumns([
    { node: 'a', side: 'left-of-node', semanticRole: 'aligned-side-label-column', nodeEdge: 477, labelEdge: 450, gap: 27 },
    { node: 'b', side: 'left-of-node', semanticRole: 'aligned-side-label-column', nodeEdge: 477, labelEdge: 449.5, gap: 27.5 },
    { node: 'c', side: 'right-of-node', semanticRole: 'name', nodeEdge: 600, labelEdge: 610, gap: 10 },
  ]);
  assert.equal(columns.length, 1);
  assert.equal(columns[0].side, 'left');
  assert.deepEqual(columns[0].violations, []);
  assert.deepEqual(classifyDeclaredSideLabelColumns([{ node: 'c', side: 'right-of-node', semanticRole: 'name' }]), []);

  const declared = (node, nodeEdge, labelEdge) => ({ node, side: 'left-of-node', semanticRole: 'aligned-side-label-column', nodeEdge, labelEdge, gap: nodeEdge - labelEdge });
  const staggered = classifyDeclaredSideLabelColumns([declared('latam', 796, 768), declared('europe', 793, 768), declared('amesa', 791, 768)]);
  assert.equal(staggered.length, 1, 'staggered faces of one Sankey column form one column');
  assert.deepEqual(staggered[0].violations, []);
  const twoColumns = classifyDeclaredSideLabelColumns([declared('a', 300, 250), declared('b', 302, 251), declared('c', 800, 700)]);
  assert.deepEqual(twoColumns.map((column) => column.expectedNodes), [['a', 'b'], ['c']]);
  assert.deepEqual(twoColumns[1].violations.map((item) => item.code), ['column-needs-multiple-labels']);

  const drifting = classifyLabelLayoutAudit({
    nodes: [
      { id: 'a', box: { x: 477, y: 100, width: 20, height: 40 } },
      { id: 'b', box: { x: 477, y: 200, width: 20, height: 40 } },
    ],
    labels: [
      { node: 'a', labelIndex: 0, text: 'A', semanticRole: 'aligned-side-label-column', box: { x: 400, y: 110, width: 50, height: 20 } },
      { node: 'b', labelIndex: 1, text: 'B', semanticRole: 'aligned-side-label-column', box: { x: 380, y: 210, width: 60, height: 20 } },
    ],
  });
  assert.deepEqual(drifting.sideLabelColumns[0].violations.map((item) => item.code), ['label-edge-spread']);
  assert.throws(
    () => assertRenderAudits({ textLayoutAudit: { checkedTexts: 2, overflowViolations: [] }, labelLayoutAudit: drifting }),
    /T6=column:label-edge-spread/
  );
});

test('T18 expectations come only from source objects that declare a referenceBBox', () => {
  const sourceObjects = {
    objects: [
      { id: 'tax-label', class: 'label', referenceBBox: [100, 200, 80, 40], labelGroup: 'tax' },
      { id: 'revenue', class: 'value', node: 'revenue' },
      { id: 'title', class: 'label' },
    ],
  };
  assert.deepEqual(labelPositionExpectations(sourceObjects), [{
    objectId: 'tax-label',
    node: 'tax',
    referenceBBox: [100, 200, 80, 40],
  }]);
  assert.deepEqual(labelPositionExpectations(null), []);
  assert.deepEqual(labelPositionExpectations({ objects: [{ id: 'title', class: 'label' }] }), []);
  const noneDeclared = classifyLabelPositionAudit({ labels: [] }, [], { locale: 'en' });
  assert.equal(noneDeclared.expectedGroups, 0);
  assert.deepEqual(noneDeclared.violations, []);
});

test('T18 gates the source-language center deltas and only measures other locales', () => {
  const expectations = [{ objectId: 'tax-label', node: 'tax', referenceBBox: [100, 200, 80, 40] }];
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
  assert.throws(
    () => assertRenderAudits({ textLayoutAudit: { checkedTexts: 1, overflowViolations: [] }, labelPositionAudit: fail }),
    /T18=tax:center-y-delta/
  );

  const localized = classifyLabelPositionAudit(shifted, expectations, { locale: 'zh' });
  assert.equal(localized.enforced, false);
  assert.deepEqual(localized.violations, [], 'localized layout is covered by B6 and human review');

  const missing = classifyLabelPositionAudit({ labels: [] }, expectations, { locale: 'zh' });
  assert.deepEqual(missing.violations.map((item) => item.code), ['missing-label-group'], 'every locale must render each declared group');
});

test('A10 derives its expectations from interactive annotation groups in the DOM', () => {
  const passing = classifySemanticAnnotationAudit({
    annotations: [{ nodeId: 'other_income', metricExists: true, textCount: 2, hasHitbox: true }],
  });
  assert.deepEqual(passing.semanticAnnotationNodeIds, ['other_income']);
  assert.deepEqual(passing.violations, []);
  assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [] }).violations, []);

  const failing = classifySemanticAnnotationAudit({
    annotations: [
      { nodeId: '', metricExists: false, textCount: 1, hasHitbox: true },
      { nodeId: 'ghost', metricExists: false, textCount: 0, hasHitbox: true },
    ],
    unboundNodeLikeTexts: [{ nodeId: 'revenue', text: 'Revenue' }],
  });
  assert.deepEqual(
    failing.violations.map((item) => `${item.nodeId}:${item.code}`),
    [':missing-data-node', 'ghost:unknown-data-node', 'ghost:missing-annotation-text'],
    'unbound text naming a node without an interactive group is not an A10 violation'
  );
});

 test('A10 rejects overlapping repeated metric text across annotation and label layers', () => {
  const annotation = { nodeId: 'operating_profit', metricExists: true, textCount: 4, hasHitbox: true };
  const failing = classifySemanticAnnotationAudit({
    annotations: [annotation],
    duplicateMetricTexts: [{ nodeId: 'operating_profit', text: 'Operating profit' }, { nodeId: 'operating_profit', text: '$19M' }],
  });
  assert.deepEqual(failing.violations.map((item) => item.code), ['duplicate-metric-text', 'duplicate-metric-text']);
  assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [annotation], duplicateMetricTexts: [] }).violations, []);
});

test('B15 requires the Lenovo operating profit horizontal face even with a shortNodes declaration', () => {
  const expected = { visible: ['operating_profit'], short: ['operating_profit'], complete: true };
  assert.throws(() => assertNodePaintAudit(classify([]), expected), (error) => error.code === 'NODE_FACE_POLICY_FAILED');
  const geometry = { bbox: { x: 1891, y: 518, width: 72, height: 1 } };
  assert.throws(() => assertNodePaintAudit(classify([node('operating_profit', { ...geometry, fill: 'none' })]), expected),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED');
  assert.doesNotThrow(() => assertNodePaintAudit(classify([node('operating_profit', { ...geometry, fill: '#249e28' })]), expected));
});

test('A10 requires resolvable hover endpoints for annotation-only metrics', () => {
  const finance = { nodeId: 'finance', metricExists: true, textCount: 2, hasHitbox: true, requiresLinkEndpoints: true };
  for (const linkEndpointsValid of [undefined, false]) {
    assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [{ ...finance, linkEndpointsValid }] }).violations.map((v) => v.code), ['missing-annotation-link-endpoints']);
  }
  assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [{ ...finance, linkEndpointsValid: true }] }).violations, []);
  assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [{ ...finance, requiresLinkEndpoints: false }] }).violations, []);
});

test('A10 rejects a repeated route metric label even when the two text boxes do not overlap', () => {
  const interest = { nodeId: 'interest', metricExists: true, textCount: 2, hasHitbox: true, hasDuplicateRouteLabel: true };
  assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [interest] }).violations.map((v) => v.code), ['duplicate-route-metric-label']);
  assert.deepEqual(classifySemanticAnnotationAudit({ annotations: [{ ...interest, hasDuplicateRouteLabel: false }] }).violations, []);
});
