import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function klaDataset() {
  const context = loadClassicScripts(['data/datasets/kla-q3-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'kla-q3-fy26');
}

test('KLA Other income owns one visible guide and a centerline-bound hover tag', () => {
  const dataset = klaDataset();
  const link = dataset.links.find(
    (item) => item.sourceRoute === 'other_income' && item.target === 'net_profit'
  );
  const annotationVariants = [
    dataset.annotationsSvg,
    dataset.i18n.zh.annotationsSvg,
  ];

  assert.ok(link, 'Other income semantic relationship is present');
  assert.equal(
    link.interactionOnly,
    true,
    'the annotation owns the only visible guide; the graph link is semantic-only'
  );

  for (const markup of annotationVariants) {
    assert.equal(
      (markup.match(/<path\b/g) || []).length,
      1,
      'each locale renders exactly one Other income guide path'
    );
    assert.match(markup, /data-link-anchor-x="2269"/);
    assert.match(markup, /data-link-anchor-y="472\.5"/);
    assert.match(
      markup,
      /<text x="2254" y="544"[^>]*font-weight="800"/,
      'the Other heading stays left of and vertically close to the target column'
    );
    assert.match(
      markup,
      /<text x="2254" y="586"[^>]*font-weight="400"/,
      'the value moves with the heading as one semantic label group'
    );
  }

  const route = dataset.layout.routes.other_income;
  const target = dataset.layout.nodes.net_profit;
  const operatingProfitLink = dataset.links.find(
    (item) => item.source === 'operating_profit' && item.target === 'net_profit'
  );
  const sourceCenter = route.y + link.sourceWidth / 2;
  const targetCenter = target.y + operatingProfitLink.targetWidth + link.targetWidth / 2;
  const centerlineMidpoint = {
    x: (route.x + target.x) / 2,
    y: (sourceCenter + targetCenter) / 2,
  };

  assert.deepEqual(centerlineMidpoint, { x: 2269, y: 472.5 });
});
