import path from 'node:path';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
export const PRODUCTION_URL = 'https://charlesliuyx.github.io/trace-company-product-metric-visualizer/';
const hex = (bytes) => createHash('sha256').update(bytes).digest('hex');

export async function siteContentDigest(site, version) {
  if (!/^[a-f0-9]{64}$/.test(version || '')) throw new Error('Invalid site version');
  const entries = [];
  async function visit(relative) {
    for (const item of await readdir(path.join(site, relative), { withFileTypes: true })) {
      const file = path.posix.join(relative, item.name);
      if (file === 'site-release.json' || file === 'releases') continue;
      if (item.isDirectory()) await visit(file);
      else if (item.isFile()) entries.push([file, hex(await readFile(path.join(site, file)))]);
      else throw new Error('Site release may not contain symlinks');
    }
  }
  await visit('');
  await visit(`releases/${version}`);
  if (!entries.some(([file]) => file === 'index.html')) throw new Error('Site entry is missing');
  entries.sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
  return `sha256:${hex(JSON.stringify(entries))}`;
}
export async function verifySiteIdentity(site, expected = null) {
  const release = JSON.parse(await readFile(path.join(site, 'site-release.json'), 'utf8'));
  if (release.schema !== 'trace-site-release/v1' || release.contentDigest !== await siteContentDigest(site, release.version)) throw new Error('Site bytes do not match the release manifest');
  if (expected && (release.version !== expected.version || release.contentDigest !== expected.contentDigest)) throw new Error('Build does not match the reviewed Git transport candidate');
  return release;
}

// HTTP-only production check: the deployed manifest names the expected commit
// and each new dataset Adapter is served from that release. No browser.
export async function verifyOnlineRelease({ commit, keys = [], baseUrl = PRODUCTION_URL, fetchImpl = fetch } = {}) {
  const response = await fetchImpl(new URL(`site-release.json?t=${Date.now()}`, baseUrl), { cache: 'no-store', signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Production manifest returned HTTP ${response.status}`);
  const release = await response.json();
  if (release.schema !== 'trace-site-release/v1' || !/^[a-f0-9]{64}$/.test(release.version || '')) throw new Error('Invalid production release manifest');
  if (commit && release.sourceCommit !== commit) throw new Error(`Production serves ${release.sourceCommit || 'an unknown commit'}, expected ${commit}`);
  const missing = [];
  for (const key of keys) {
    if (!/^[a-z0-9-]+$/.test(key)) throw new Error(`Invalid dataset key: ${key}`);
    const asset = await fetchImpl(new URL(`releases/${release.version}/data/datasets/${key}.js`, baseUrl), { method: 'HEAD', signal: AbortSignal.timeout(15000) });
    if (!asset.ok) missing.push(`${key} (HTTP ${asset.status})`);
  }
  if (missing.length) throw new Error(`Production release ${release.version} lacks: ${missing.join(', ')}`);
  return { version: release.version, sourceCommit: release.sourceCommit, keys };
}
