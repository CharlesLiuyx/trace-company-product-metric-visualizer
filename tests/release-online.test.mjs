import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyOnlineRelease } from '../scripts/lib/site-release-identity.mjs';

const version = 'a'.repeat(64);
function stub(served = { 'nyt-q2-fy26': 200 }) {
  return async (url, options = {}) => {
    const href = String(url);
    if (href.includes('site-release.json')) return new Response(JSON.stringify({ schema: 'trace-site-release/v1', version, sourceCommit: 'c0ffee' }));
    const key = /datasets\/([^/]+)\.js$/.exec(href)?.[1];
    assert.equal(options.method, 'HEAD');
    return new Response(null, { status: served[key] || 404 });
  };
}

test('online release check binds the deployed commit and each served dataset over HTTP', async () => {
  const result = await verifyOnlineRelease({ commit: 'c0ffee', keys: ['nyt-q2-fy26'], baseUrl: 'https://example.test/app/', fetchImpl: stub() });
  assert.deepEqual(result, { version, sourceCommit: 'c0ffee', keys: ['nyt-q2-fy26'] });
  await assert.rejects(verifyOnlineRelease({ commit: 'other', baseUrl: 'https://example.test/app/', fetchImpl: stub() }), /expected other/);
  await assert.rejects(verifyOnlineRelease({ commit: 'c0ffee', keys: ['missing-q1'], baseUrl: 'https://example.test/app/', fetchImpl: stub() }), /lacks: missing-q1 \(HTTP 404\)/);
  await assert.rejects(verifyOnlineRelease({ keys: ['../escape'], baseUrl: 'https://example.test/app/', fetchImpl: stub() }), /Invalid dataset key/);
});
