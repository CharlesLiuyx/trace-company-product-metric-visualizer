import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertNodePaintAudit,
  assertPlannedRenderAudits,
  assertRawSvgCanvas,
  classifyLabelLayoutAudit,
  classifyNodePaintAudit,
  classifySemanticAnnotationAudit,
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
    /background=not-painted, transparent=not-painted/
  );
});

test('node paint audit requires hidden anchors to exist but remain unpainted', () => {
  const hidden = classify([node('anchor', { fill: 'none' })]);
  assert.doesNotThrow(() => assertNodePaintAudit(hidden, { hidden: ['anchor'] }));

  const painted = classify([node('anchor')]);
  assert.throws(
    () => assertNodePaintAudit(painted, { hidden: ['anchor'] }),
    /anchor=unexpected-paint/
  );
  assert.throws(
    () => assertNodePaintAudit(classify([]), { hidden: ['anchor'] }),
    /anchor=missing/
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
    /unplanned=unclassified/
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
