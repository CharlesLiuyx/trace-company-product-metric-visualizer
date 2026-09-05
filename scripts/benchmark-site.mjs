#!/usr/bin/env node
// Controlled A/B diagnostic, not a flaky CI wall-clock gate. Both immutable
// site directories are served with identical gzip, latency and CPU settings.
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const baseline = option('--baseline', '');
if (!baseline) throw new Error('Usage: node scripts/benchmark-site.mjs --baseline <previous-site-directory> [--runs 10]');
const runs = Number(option('--runs', '10'));
if (!Number.isInteger(runs) || runs < 1 || runs > 100) throw new Error('runs must be between 1 and 100');
const roots = { before: path.resolve(baseline), after: path.resolve(option('--candidate', '_site')) };
const output = path.resolve(option('--output', 'output/site-benchmark/results.json'));
const cached = new Map();
const mime = { '.js': 'text/javascript', '.json': 'application/json', '.html': 'text/html', '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  try {
    const [variant, ...parts] = new URL(req.url, 'http://localhost').pathname.slice(1).split('/');
    const root = roots[variant];
    if (!root) { res.writeHead(404).end(); return; }
    const file = path.resolve(root, decodeURIComponent(parts.join('/')) || 'index.html');
    if (!file.startsWith(`${root}${path.sep}`) || !(await stat(file)).isFile()) { res.writeHead(404).end(); return; }
    if (!cached.has(file)) {
      const bytes = await readFile(file);
      cached.set(file, { bytes, gzip: gzipSync(bytes) });
    }
    const cachedFile = cached.get(file);
    const compressed = /\b gzip\b|\bgzip\b/.test(req.headers['accept-encoding'] || '') && /\.(js|json|html|css|svg)$/.test(file);
    const bytes = compressed ? cachedFile.gzip : cachedFile.bytes;
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Content-Length': bytes.length, 'Cache-Control': 'public, max-age=600', ...(compressed ? { 'Content-Encoding': 'gzip' } : {}) });
    res.end(bytes);
  } catch { res.writeHead(404).end(); }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
const samples = [];
try {
  for (let run = 0; run < runs; run++) {
    for (const variant of (run % 2 ? ['after', 'before'] : ['before', 'after'])) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      try {
        const page = await context.newPage();
        const cdp = await context.newCDPSession(page);
        await cdp.send('Network.enable');
        await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
        await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
        await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 100, downloadThroughput: 200000, uploadThroughput: 100000 });
        await page.addInitScript(() => {
          window.__benchmarkLongTasks = [];
          new PerformanceObserver((list) => window.__benchmarkLongTasks.push(...list.getEntries().map((entry) => entry.duration))).observe({ type: 'longtask', buffered: true });
          const observer = new MutationObserver(() => {
            if (document.querySelector('#chart svg .sankey-node')) {
              window.__benchmarkFirstSvg = performance.now(); observer.disconnect();
            }
          });
          observer.observe(document, { childList: true, subtree: true });
        });
        await page.goto(`${origin}/${variant}/`, { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(() => window.__benchmarkFirstSvg > 0);
        const boot = await page.evaluate(() => ({
          firstSvgMs: window.__benchmarkFirstSvg,
          longTaskMs: window.__benchmarkLongTasks.reduce((sum, value) => sum + value, 0),
          encodedBytes: performance.getEntriesByType('resource').reduce((sum, entry) => sum + entry.encodedBodySize, 0),
          dataBytes: performance.getEntriesByType('resource').filter((entry) => /\/assets\/catalog\.js$|\/data\/companies\/.*\.json$/.test(entry.name)).reduce((sum, entry) => sum + entry.encodedBodySize, 0),
        }));
        async function switchCompany(company) {
          await page.evaluate((name) => {
            window.__benchmarkOldSvg = chartHost.querySelector('svg');
            window.__benchmarkSwitchStart = performance.now();
            selectCompanyGroup(groups.find((group) => group.company === name));
          }, company);
          await page.waitForFunction(() => chartHost.querySelector('svg .sankey-node') && chartHost.querySelector('svg') !== window.__benchmarkOldSvg);
          return page.evaluate(() => performance.now() - window.__benchmarkSwitchStart);
        }
        const coldSwitchMs = await switchCompany('Abbott');
        const coldSwitchResources = await page.evaluate(() => performance.getEntriesByType('resource')
          .filter((entry) => entry.startTime >= window.__benchmarkSwitchStart)
          .map((entry) => ({ path: new URL(entry.name).pathname.replace(/releases\/[a-f0-9]{64}\//, ''), startMs: entry.startTime - window.__benchmarkSwitchStart, durationMs: entry.duration, encodedBytes: entry.encodedBodySize })));
        await switchCompany('Salesforce');
        const warmSwitchMs = await switchCompany('Abbott');
        samples.push({ variant, run, ...boot, coldSwitchMs, coldSwitchResources, warmSwitchMs });
        console.log(`${variant} ${run + 1}/${runs}: first ${Math.round(boot.firstSvgMs)}ms, switch ${Math.round(coldSwitchMs)}ms, warm ${Math.round(warmSwitchMs)}ms`);
      } finally { await context.close(); }
    }
  }
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
const quantile = (values, q) => {
  const sorted = [...values].sort((a, b) => a - b);
  const position = (sorted.length - 1) * q;
  const lower = Math.floor(position);
  return sorted[lower] + (sorted[Math.ceil(position)] - sorted[lower]) * (position - lower);
};
const summary = Object.fromEntries(Object.keys(roots).map((variant) => {
  const rows = samples.filter((row) => row.variant === variant);
  return [variant, Object.fromEntries(['firstSvgMs', 'coldSwitchMs', 'warmSwitchMs', 'longTaskMs', 'encodedBytes', 'dataBytes'].map((key) => [key, { median: quantile(rows.map((row) => row[key]), .5), p90: quantile(rows.map((row) => row[key]), .9) }]))];
}));
const result = { measuredAt: new Date().toISOString(), conditions: { runs, cpuSlowdown: 4, downloadBytesPerSecond: 200000, latencyMs: 100, browserCache: 'disabled', serverCompression: 'gzip', order: 'alternating', quantiles: 'linear interpolation at q*(n-1)', firstSvg: 'first Sankey node inserted in DOM' }, roots, summary, samples };
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(result, null, 2));
console.log(JSON.stringify(summary, null, 2));
console.log(`saved ${output}`);
