import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { rootDir } from '../scripts/lib/project.mjs';
import { PROJECT_FONT_FAMILIES, fontPackageRelativePath } from '../scripts/lib/local-fonts.mjs';

test('Pages releases bind build dependencies, preserve HTML, retain old bytes and tolerate a cold cache', () => {
  const root = mkdtempSync(path.join(os.tmpdir(), 'trace-site-release-'));
  const file = (name) => path.join(root, name);
  const write = (name, contents) => { mkdirSync(path.dirname(file(name)), { recursive: true }); writeFileSync(file(name), contents); };
  const copy = (name) => { mkdirSync(path.dirname(file(name)), { recursive: true }); copyFileSync(path.join(rootDir, name), file(name)); };
  const build = () => {
    execFileSync(process.execPath, [file('scripts/build-site.mjs')], { cwd: root, stdio: 'pipe' });
    return JSON.parse(readFileSync(file('_site/site-release.json'), 'utf8'));
  };
  try {
    ['scripts/build-site.mjs', 'scripts/lib/site-data.mjs', 'scripts/lib/local-fonts.mjs', 'scripts/lib/project.mjs', 'src/trace-domain.js'].forEach(copy);
    for (const { slug, weights } of PROJECT_FONT_FAMILIES) {
      for (const weight of weights) write(fontPackageRelativePath(slug, weight), 'fixture font bytes');
    }
    write('src/entry.js', 'window.fixture = true;');
    write('src/app/main.js', 'window.booted = true;');
    write('src/app.css', 'body { color: red; }');
    write('vendor/chart.umd.min.js', 'window.Chart = {};');
    write('data/catalog.js', 'window.__DATASET_MANIFEST__ = { datasets: [] };');
    write('data/datasets/fixture.js', 'window.asset = "data/assets/raster-annotations/fixture.png";');
    write('data/assets/raster-annotations/fixture.png', 'fixture pixels');
    write('index.html', '<!doctype html><html><head><script src="src/entry.js"></script><title>Preserved</title><link rel="stylesheet" href="src/app.css" /></head><body><main id="fixture">Preserved body</main><script src="src/trace-domain.js"></script><script src="data/catalog.js"></script><script src="vendor/chart.umd.min.js"></script><script src="src/app/main.js"></script></body></html>');

    const first = build();
    const oldCss = readFileSync(file(`_site/${first.prefix}/assets/fonts.css`), 'utf8');
    const html = readFileSync(file('_site/index.html'), 'utf8');
    assert.ok(html.includes('<title>Preserved</title>'));
    assert.ok(html.includes('<main id="fixture">Preserved body</main>'));
    for (const legacyPath of ['assets/foundation.js', 'assets/catalog.js', 'assets/app.js', 'assets/chart.js', 'data/datasets/fixture.js']) {
      const bridge = readFileSync(file(`_site/${legacyPath}`), 'utf8');
      assert.ok(bridge.includes(first.version), `${legacyPath} must upgrade to the current runtime`);
      assert.ok(bridge.includes('window.location.replace'), `${legacyPath} must navigate, not mix runtime data`);
    }
    assert.ok(readFileSync(file(`_site/${first.prefix}/data/datasets/fixture.js`), 'utf8').includes(`${first.prefix}/data/assets/`));
    assert.equal(build().version, first.version, 'identical inputs must have stable paths');

    write('scripts/lib/local-fonts.mjs', readFileSync(file('scripts/lib/local-fonts.mjs'), 'utf8').replace("family: 'Montserrat'", "family: 'Fixture Montserrat'"));
    const second = build();
    assert.notEqual(second.version, first.version, 'a font compiler change must invalidate the URL');
    assert.ok(readFileSync(file(`_site/${second.prefix}/assets/fonts.css`), 'utf8').includes('Fixture Montserrat'));
    assert.equal(readFileSync(file(`_site/${first.prefix}/assets/fonts.css`), 'utf8'), oldCss, 'a retained URL must keep its original bytes');
    write('src/app.css', 'body { color: blue; }');
    const third = build();
    assert.deepEqual(third.retained, [second.version, first.version]);
    write('src/app.css', 'body { color: green; }');
    const fourth = build();
    assert.deepEqual(fourth.retained, [third.version, second.version]);
    assert.equal(readdirSync(file('_site/releases')).length, 3);
    rmSync(file('output/site-releases'), { recursive: true });
    const cold = build();
    assert.equal(cold.version, fourth.version);
    assert.deepEqual(cold.retained, []);
    assert.equal(readdirSync(file('_site/releases')).length, 1);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
