import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, copyFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { rootDir } from './project.mjs';
import { atomicJson } from './workflow-files.mjs';
import { selectBuildPreview, selectPublishedView } from './workflow-local-view.mjs';

export async function verifyLocalFileEntry(browser) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-file-entry-'));
  const context = await browser.newContext();
  try {
    await mkdir(path.join(root, 'src'));
    await copyFile(path.join(rootDir, 'src/local-view-entry.js'), path.join(root, 'src/local-view-entry.js'));
    await writeFile(path.join(root, 'index.html'), '<!doctype html><meta charset="utf-8"><script src="src/local-view-entry.js"></script><title>Root</title><body>Working tree</body>');
    const page = await context.newPage();
    const errors = []; page.on('pageerror', (error) => errors.push(error.message));
    const entry = pathToFileURL(path.join(root, 'index.html')).href;
    await page.goto(entry);
    assert.equal(await page.evaluate(() => window.TRACE_LOCAL_VIEW_READY), false);
    const buildId = 'build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
    const workspace = path.join(root, 'output/builds', buildId, 'workspace');
    await mkdir(workspace, { recursive: true });
    await writeFile(path.join(workspace, 'index.html'), '<!doctype html><body><h1>Draft 1</h1></body>');
    await selectBuildPreview(root, { buildId, key: 'example', workspace, reviewToken: 'first' });
    await page.frameLocator('#trace-local-view iframe').locator('h1').filter({ hasText: 'Draft 1' }).waitFor();
    assert.equal(page.url(), entry);
    assert.match(await page.locator('#trace-local-view [role=status]').textContent(), /待人工审阅/);
    await writeFile(path.join(workspace, 'index.html'), '<!doctype html><body><h1>Draft 2</h1></body>');
    await selectBuildPreview(root, { buildId, key: 'example', workspace, reviewToken: 'second' });
    await page.frameLocator('#trace-local-view iframe').locator('h1').filter({ hasText: 'Draft 2' }).waitFor();
    const digest = 'd'.repeat(64), published = path.join(root, 'output/publications/trees', digest);
    await mkdir(published, { recursive: true });
    await writeFile(path.join(published, 'index.html'), '<!doctype html><body><h1>Accepted result</h1></body>');
    await atomicJson(path.join(root, 'output/publications/current.json'), { publishedDigest: 'sha256:' + digest });
    await selectPublishedView(root, { builds: [{ buildId, key: 'example' }] });
    await page.frameLocator('#trace-local-view iframe').locator('h1').filter({ hasText: 'Accepted result' }).waitFor();
    assert.equal(page.url(), entry);
    assert.match(await page.locator('#trace-local-view [role=status]').textContent(), /已审阅通过/);
    await page.evaluate(() => { location.hash = 'another'; });
    await page.waitForFunction(() => document.querySelector('#trace-local-view iframe').src.endsWith('#another'));
    assert.deepEqual(errors, []);
    console.log('ok   local file entry: fallback, live draft update, approved publication, stable address and hash routing');
  } finally { await context.close(); await rm(root, { recursive: true, force: true }); }
}
