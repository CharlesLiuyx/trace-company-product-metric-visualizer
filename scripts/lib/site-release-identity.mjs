import path from 'node:path';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
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
