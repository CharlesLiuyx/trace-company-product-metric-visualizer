import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { humanReviewCommitSummary, prepareGitTransport, reviewGitTransport, commitGitTransport, pushGitTransport } from '../scripts/lib/git-transport.mjs';
import { atomicJson, fileManifest, copyFiles, bytesDigest, CANONICAL_ROOTS } from '../scripts/lib/workflow-files.mjs';
import { createPreviewManifest } from '../scripts/lib/workbench-manifest.mjs';
import { digestValue } from '../scripts/lib/dataset-build.mjs';
import { siteContentDigest } from '../scripts/lib/site-release-identity.mjs';
import { applicationManifest } from '../scripts/lib/workflow-application.mjs';
const git = (root, args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
async function fixture(t, { reviewedApplication = false } = {}) {
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
  await atomicJson(path.join(root, `output/builds/${buildId}/manifest.json`), { sources: [], receipts: [{ state: 'AUTHORED', payload: { artifacts: [] } }] });
  const publication = { ...(reviewedApplication ? { applicationDigest: (await applicationManifest(root)).digest } : {}), projectedTreeDigest: published.digest, baseCanonicalDigest: base.digest, builds: [{ buildId, key: 'example', sealDigest: 'fixture' }], contributions: [{ path: file, digest: bytesDigest(value), baseDigest: null, buildId }] };
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
test('a new prepare removes candidates whose base HEAD moved and keeps committed ones', async (t) => {
  const { root, prepare } = await fixture(t), a = await prepare(), b = await prepare();
  await approve(a, root); await approve(b, root);
  await commitGitTransport(a.id, root);
  const c = await prepare();
  const exists = (id, name) => existsSync(path.join(root, 'output/git-transports', id, name));
  assert.equal(exists(b.id, 'workspace'), false, 'a candidate on an old HEAD can never commit');
  assert.equal(exists(b.id, 'plan.json') && exists(b.id, 'approval.json'), true);
  assert.equal(exists(a.id, 'workspace') && exists(c.id, 'workspace'), true);
  await assert.rejects(commitGitTransport(b.id, root), /HEAD moved past its base/);
});
test('push removes the candidate workspace and keeps the hand-off record', async (t) => {
  const { root, prepare } = await fixture(t), plan = await prepare();
  const remote = path.join(root, 'output/remote.git'); git(root, ['init', '-q', '--bare', remote]); git(root, ['remote', 'add', 'origin', remote]);
  await approve(plan, root); await commitGitTransport(plan.id, root);
  const pushed = await pushGitTransport(plan.id, root);
  assert.equal(pushed.state, 'PUSHED');
  assert.deepEqual((await readdir(path.join(root, 'output/git-transports', plan.id))).sort(), ['approval.json', 'journal.json', 'plan.json', 'receipt.json']);
});
test('a failed prepare leaves no candidate folder behind', async (t) => {
  const { root } = await fixture(t);
  const published = JSON.parse(await readFile(path.join(root, 'output/publications/current.json'), 'utf8')).publishedDigest;
  await assert.rejects(prepareGitTransport(published, root, { validate: async () => { throw new Error('simulated check failure'); } }), /simulated check/);
  assert.deepEqual(await readdir(path.join(root, 'output/git-transports')), []);
});
test('contributions of a pushed publication are not re-applied over later HEAD edits', async (t) => {
  const { root, file, prepare } = await fixture(t), plan = await prepare();
  await approve(plan, root); const receipt = await commitGitTransport(plan.id, root);
  await atomicJson(path.join(root, 'output/git-transports', plan.id, 'receipt.json'), { ...receipt, state: 'PUSHED' });
  await writeFile(path.join(root, file), '{"value":43}\n'); git(root, ['commit', '-qam', 'data: later hand edit']);
  const next = await prepare();
  assert.equal(next.paths.some((item) => item.path === file), false);
  assert.equal(await readFile(path.join(next.workspace, file), 'utf8'), '{"value":43}\n');
});
test('an interrupted application is resumable and an edited approved candidate is rejected', async (t) => {
  const { root, prepare } = await fixture(t), plan = await prepare(); await approve(plan, root);
  await assert.rejects(commitGitTransport(plan.id, root, { afterApply() { throw new Error('simulated copy interruption'); } }), /simulated copy/);
  assert.equal(git(root, ['rev-list', '--count', 'HEAD']), '1');
  await commitGitTransport(plan.id, root); assert.equal(git(root, ['rev-list', '--count', 'HEAD']), '2');
});

test('reviewed transport inputs reproduce in a clean clone despite host Python caches', async (t) => {
  const { root, prepare } = await fixture(t);
  await writeFile(path.join(root, '.gitignore'), 'output/\n_site/\n__pycache__/\n*.py[co]\n.DS_Store\n');
  await mkdir(path.join(root, 'scripts'), { recursive: true });
  await writeFile(path.join(root, 'scripts/helper.py'), 'print("authored tool")\n');
  git(root, ['add', '.gitignore', 'scripts/helper.py']);
  git(root, ['commit', '-m', 'test: authored tool']);
  await mkdir(path.join(root, 'scripts/__pycache__'), { recursive: true });
  await writeFile(path.join(root, 'scripts/__pycache__/helper.cpython-313.pyc'), 'macOS cache');
  await writeFile(path.join(root, 'scripts/helper.pyc'), 'legacy bytecode');
  await writeFile(path.join(root, 'scripts/.DS_Store'), 'Finder metadata');
  const plan = await prepare();
  await approve(plan, root);
  await commitGitTransport(plan.id, root);

  const clone = path.join(root, 'output/clean-clone');
  git(root, ['clone', '--quiet', '--no-hardlinks', root, clone]);
  const roots = [...CANONICAL_ROOTS, 'scripts', 'package.json', 'pnpm-lock.yaml'];
  const original = await fileManifest(root, roots);
  assert.equal(original.digest, plan.candidateDigest);
  assert.deepEqual(await fileManifest(clone, roots), original);
  await mkdir(path.join(clone, 'scripts/__pycache__'), { recursive: true });
  await writeFile(path.join(clone, 'scripts/__pycache__/helper.cpython-312.pyc'), 'Linux cache');
  assert.deepEqual(await fileManifest(clone, roots), original);
  const preview = createPreviewManifest();
  assert.deepEqual(await preview(root, roots), original);
  assert.deepEqual(await preview(clone, roots), original);
  await writeFile(path.join(clone, 'scripts/helper.py'), 'print("changed tool")\n');
  assert.notEqual((await fileManifest(clone, roots)).digest, plan.candidateDigest);
  assert.deepEqual(await preview(clone, roots), await fileManifest(clone, roots));
});

test('Build acceptance carries over to the transport only under the reviewed application code', async (t) => {
  const legacy = await fixture(t);
  const unbound = await legacy.prepare();
  assert.equal(unbound.validation, 'standard');
  assert.equal(unbound.acceptance.inheritsBuildAcceptance, false);
  await assert.rejects(reviewGitTransport(unbound.id, { operator: 'test fixture', accepted: true, candidateDigest: unbound.candidateDigest, basis: 'inherited-build-acceptance' }, legacy.root), /does not carry over/);
  const reviewed = await fixture(t, { reviewedApplication: true });
  const bound = await reviewed.prepare();
  assert.equal(bound.acceptance.inheritsBuildAcceptance, true);
  const approval = await reviewGitTransport(bound.id, { operator: 'test fixture', accepted: true, candidateDigest: bound.candidateDigest, basis: 'inherited-build-acceptance' }, reviewed.root);
  assert.equal(approval.basis, 'inherited-build-acceptance');
  await commitGitTransport(bound.id, reviewed.root);
});


test('transport review statistics count objects once and preserve known intervention outcomes', () => {
  const summary = humanReviewCommitSummary([
    { key: 'a', intervention: false }, { key: 'b', intervention: true }, { key: 'b', intervention: true },
  ]);
  assert.match(summary, /Total items: 2/);
  assert.match(summary, /No-intervention items: 1/);
  assert.match(summary, /Human intervention rate: 1\/2 = 50.0%/);
  assert.throws(() => humanReviewCommitSummary([{ key: 'a' }]), /known object outcomes/);
});
