import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { prepareGitTransport, reviewGitTransport, commitGitTransport } from '../scripts/lib/git-transport.mjs';
import { atomicJson, fileManifest, copyFiles, bytesDigest } from '../scripts/lib/workflow-files.mjs';
import { digestValue } from '../scripts/lib/dataset-build.mjs';
import { siteContentDigest } from '../scripts/lib/site-release-identity.mjs';
const git = (root, args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-git-transport-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, 'data/metric-observations'), { recursive: true });
  await writeFile(path.join(root, '.gitignore'), 'output/\n_site/\n');
  await writeFile(path.join(root, 'index.html'), '<!doctype html>fixture');
  await writeFile(path.join(root, 'notes.md'), 'existing unrelated note');
  git(root, ['init', '-b', 'main']); git(root, ['config', 'user.name', 'Fixture']); git(root, ['config', 'user.email', 'fixture@example.test']); git(root, ['add', '.']); git(root, ['commit', '-m', 'test: base']);
  const base = await fileManifest(root), candidate = path.join(root, 'output/candidate');
  await copyFiles(root, candidate, base.entries.map((item) => item.path));
  const file = 'data/metric-observations/example.json', value = '{"value":42}\n';
  await mkdir(path.join(candidate, 'data/metric-observations'), { recursive: true }); await writeFile(path.join(candidate, file), value);
  const published = await fileManifest(candidate), tree = path.join(root, 'output/publications/trees', published.digest.slice(7));
  await copyFiles(candidate, tree, published.entries.map((item) => item.path));
  let planDigest;
  const buildId = 'build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
  await atomicJson(path.join(root, `output/builds/${buildId}/manifest.json`), { sources: [] });
  const publication = { projectedTreeDigest: published.digest, baseCanonicalDigest: base.digest, builds: [{ buildId, key: 'example', sealDigest: 'fixture' }], contributions: [{ path: file, digest: bytesDigest(value), baseDigest: null, buildId }] };
  planDigest = digestValue(publication);
  await atomicJson(path.join(root, `output/publications/plans/${planDigest.slice(7)}/plan.json`), { ...publication, planDigest });
  await atomicJson(path.join(root, 'output/publications/current.json'), { publishedDigest: published.digest, planDigest, previousDigest: base.digest });
  async function validate(workspace) {
    const version = 'c'.repeat(64), site = path.join(workspace, '_site');
    await mkdir(path.join(site, `releases/${version}`), { recursive: true });
    await writeFile(path.join(site, 'index.html'), '<!doctype html>fixture42');
    await writeFile(path.join(site, `releases/${version}/app.js`), 'window.value=42;');
    await atomicJson(path.join(site, 'site-release.json'), { schema: 'trace-site-release/v1', version, contentDigest: await siteContentDigest(site, version) });
  }
  const prepare = () => prepareGitTransport(published.digest, root, { validate });
  return { root, file, prepare };
}
async function approve(plan, root) { return reviewGitTransport(plan.id, { operator: 'test fixture', accepted: true, candidateDigest: plan.candidateDigest }, root); }
test('transport stages only accepted paths, preserves unrelated work and recovers an interrupted commit exactly once', async (t) => {
  const { root, file, prepare } = await fixture(t), plan = await prepare();
  assert.equal(git(root, ['status', '--porcelain']), '');
  await assert.rejects(commitGitTransport(plan.id, root), /ENOENT/);
  await approve(plan, root);
  await writeFile(path.join(root, 'notes.md'), 'another Session is still writing');
  await assert.rejects(commitGitTransport(plan.id, root, { afterCommit() { throw new Error('simulated crash after commit'); } }), /simulated crash/);
  const committed = git(root, ['rev-parse', 'HEAD']);
  const result = await commitGitTransport(plan.id, root);
  assert.equal(result.commit, committed); assert.equal(git(root, ['rev-list', '--count', 'HEAD']), '2');
  assert.equal(await readFile(path.join(root, file), 'utf8'), '{"value":42}\n');
  assert.equal(git(root, ['diff', '--cached', '--name-only']), '');
  assert.equal(git(root, ['status', '--porcelain']), 'M notes.md');
  assert.deepEqual(await commitGitTransport(plan.id, root), result);
});
test('staged or overlapping user work blocks before mutation; a competing prepared candidate cannot reuse old HEAD', async (t) => {
  const { root, file, prepare } = await fixture(t), a = await prepare(), b = await prepare();
  await approve(a, root); await approve(b, root);
  await writeFile(path.join(root, 'notes.md'), 'staged by another Session'); git(root, ['add', 'notes.md']);
  await assert.rejects(commitGitTransport(a.id, root), /staged changes/);
  git(root, ['reset', '-q', 'HEAD', '--', 'notes.md']);
  await mkdir(path.dirname(path.join(root, file)), { recursive: true }); await writeFile(path.join(root, file), 'unowned draft');
  await assert.rejects(commitGitTransport(a.id, root), /Unowned working change/);
  assert.equal(await readFile(path.join(root, file), 'utf8'), 'unowned draft'); await rm(path.join(root, file));
  await commitGitTransport(a.id, root);
  await assert.rejects(commitGitTransport(b.id, root), /HEAD changed/);
});
test('an interrupted application is resumable and an edited approved candidate is rejected', async (t) => {
  const { root, prepare } = await fixture(t), plan = await prepare(); await approve(plan, root);
  await assert.rejects(commitGitTransport(plan.id, root, { afterApply() { throw new Error('simulated copy interruption'); } }), /simulated copy/);
  assert.equal(git(root, ['rev-list', '--count', 'HEAD']), '1');
  await commitGitTransport(plan.id, root); assert.equal(git(root, ['rev-list', '--count', 'HEAD']), '2');
});
