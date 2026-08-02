import test from 'node:test';
import assert from 'node:assert/strict';
import {
  auditTextAndAnnotationLayout,
  classifyTextAndAnnotationLayout,
} from '../scripts/lib/render-harness.mjs';

const item = (identity, text, x, y, width, height) => ({
  identity,
  text,
  bbox: { x, y, width, height },
});

test('localization-bbox regression catches rendered text beyond the 0.5px canvas tolerance', () => {
  const left = item('label:left', 'Revenue', -0.6, 10, 20, 8);
  const right = item('period:right', 'FY25', 90, 20, 10.6, 8);
  const result = classifyTextAndAnnotationLayout({
    width: 100,
    height: 80,
    texts: [left, right],
    annotations: [],
    protectedTexts: [left, right],
  });

  assert.equal(result.textLayoutAudit.overflowViolations.length, 2);
  assert.deepEqual(
    result.textLayoutAudit.overflowViolations.map((violation) => violation.identity),
    ['label:left', 'period:right']
  );
  assert.equal(result.textLayoutAudit.overflowViolations[0].text, 'Revenue');
  assert.deepEqual(result.textLayoutAudit.overflowViolations[0].bbox, left.bbox);
});

test('accepts normal text and subpixel edge drift within tolerance', () => {
  const result = classifyTextAndAnnotationLayout({
    width: 100,
    height: 80,
    texts: [
      item('title', 'Income Statement', 10, 5, 80, 12),
      item('edge-tolerance', 'FY25', -0.5, 70, 20, 10.5),
    ],
    annotations: [],
    protectedTexts: [],
  });

  assert.equal(result.textLayoutAudit.checkedTexts, 2);
  assert.deepEqual(result.textLayoutAudit.overflowViolations, []);
});

test('annotation-overlap regression reports intersection with protected label/title/period text', () => {
  const annotation = item('annotation:kpi', '$4.2B', 10, 10, 30, 12);
  const label = item('label:revenue', 'Revenue', 35, 15, 30, 12);
  const result = classifyTextAndAnnotationLayout({
    width: 100,
    height: 80,
    texts: [annotation, label],
    annotations: [annotation],
    protectedTexts: [label],
  });

  assert.equal(result.annotationLayoutAudit.overlapViolations.length, 1);
  assert.equal(result.annotationLayoutAudit.overlapViolations[0].annotation.identity, 'annotation:kpi');
  assert.equal(result.annotationLayoutAudit.overlapViolations[0].protectedText.identity, 'label:revenue');
  assert.deepEqual(result.annotationLayoutAudit.overlapViolations[0].intersection, {
    x: 35,
    y: 15,
    width: 5,
    height: 7,
  });
});

test('does not treat adjacent annotation and protected text boxes as overlapping', () => {
  const annotation = item('annotation:legend', 'Legend', 10, 10, 20, 10);
  const title = item('title', 'Title', 30, 10, 20, 10);
  const result = classifyTextAndAnnotationLayout({
    width: 100,
    height: 80,
    texts: [annotation, title],
    annotations: [annotation],
    protectedTexts: [title],
  });

  assert.deepEqual(result.annotationLayoutAudit.overlapViolations, []);
});

test('annotation-overlap audit includes explicitly marked graphic annotations', () => {
  const graphic = item('annotation-graphic:services#0', '[graphic annotation]', 10, 10, 30, 20);
  const label = item('label:wearables', 'Accessories', 35, 15, 30, 12);
  const result = classifyTextAndAnnotationLayout({
    width: 100,
    height: 80,
    texts: [label],
    annotations: [],
    annotationGraphics: [graphic],
    protectedTexts: [label],
  });

  assert.equal(result.annotationLayoutAudit.checkedAnnotationTexts, 0);
  assert.equal(result.annotationLayoutAudit.checkedAnnotationGraphics, 1);
  assert.equal(result.annotationLayoutAudit.checkedAnnotations, 1);
  assert.equal(result.annotationLayoutAudit.overlapViolations.length, 1);
  assert.equal(result.annotationLayoutAudit.overlapViolations[0].annotation.identity, graphic.identity);
});

test('browser audit delegates collected getBBox geometry to the pure classifier', async () => {
  const annotation = item('annotation:note', 'Note', 10, 10, 20, 10);
  const period = item('period#2', 'FY25', 29, 10, 20, 10);
  const page = {
    evaluate: async () => ({
      width: 100,
      height: 80,
      texts: [annotation, period],
      annotations: [annotation],
      protectedTexts: [period],
    }),
  };
  const result = await auditTextAndAnnotationLayout(page);
  assert.equal(result.annotationLayoutAudit.overlapViolations.length, 1);
});

test('paired annotation audit quantifies center alignment against its semantic node', () => {
  const result = classifyTextAndAnnotationLayout({
    width: 200,
    height: 120,
    pairedNodeAnnotations: [
      {
        annotationId: 'product-icon',
        nodeId: 'product',
        annotationBBox: { x: 10, y: 40, width: 20, height: 20 },
        nodeBBox: { x: 100, y: 30, width: 30, height: 40 },
      },
      {
        annotationId: 'misaligned-icon',
        nodeId: 'other',
        annotationBBox: { x: 10, y: 5, width: 20, height: 20 },
        nodeBBox: { x: 100, y: 40, width: 30, height: 20 },
      },
    ],
  });

  assert.equal(result.annotationPairingAudit.measuredPairs, 2);
  assert.equal(result.annotationPairingAudit.measurements[0].centerDeltaY, 0);
  assert.deepEqual(
    result.annotationPairingAudit.violations.map((item) => `${item.annotationId}:${item.code}`),
    ['misaligned-icon:center-y-delta']
  );
});

test('paired annotation audit can target a side label instead of the node face', () => {
  const result = classifyTextAndAnnotationLayout({
    width: 200,
    height: 120,
    pairedNodeAnnotations: [{
      annotationId: 'business-brand',
      nodeId: 'business',
      targetKind: 'label',
      annotationBBox: { x: 10, y: 40, width: 20, height: 20 },
      nodeBBox: { x: 150, y: 20, width: 20, height: 20 },
      targetBBox: { x: 60, y: 35, width: 70, height: 30 },
    }],
  });

  assert.equal(result.annotationPairingAudit.measuredPairs, 1);
  assert.equal(result.annotationPairingAudit.measurements[0].targetKind, 'label');
  assert.equal(result.annotationPairingAudit.measurements[0].centerDeltaY, 0);
  assert.deepEqual(result.annotationPairingAudit.violations, []);
});
