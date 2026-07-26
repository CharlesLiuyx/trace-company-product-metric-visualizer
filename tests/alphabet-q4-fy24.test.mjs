import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function alphabetDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/alphabet-q4-fy24.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'alphabet-q4-fy24');
}

test('Alphabet Q4 FY24 audits clearance for every Google business mark', () => {
  const dataset = alphabetDataset();
  const ids = [...dataset.annotationsSvg.matchAll(/data-annotation-clearance="([^"]+)"/g)]
    .map((match) => match[1])
    .sort();

  assert.deepEqual(
    ids,
    [
      'googleAdMobWordmark',
      'googleCloudWordmark',
      'googlePlayWordmark',
      'googleWordmark',
      'youtubeWordmark',
    ]
  );
});

test('Alphabet Q4 FY24 keeps the Google Cloud mark in its Source-sized clear slot', () => {
  const dataset = alphabetDataset();

  assert.match(
    dataset.annotationsSvg,
    /data-annotation-clearance="googleCloudWordmark" transform="translate\(400 1179\.4\) scale\(0\.67 0\.58\)"/
  );
});
