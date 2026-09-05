#!/usr/bin/env node
// Zero-dependency static file server for local development and the viewer
// smoke test. CLI: `node scripts/dev-server.mjs [--port 8000]` (pnpm dev).
// Programmatic: `startStaticServer({ port: 0 })` returns { url, close }.
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rootDir } from './lib/project.mjs';
import { resolveSourcePath } from './lib/source-lifecycle.mjs';

const __filename = fileURLToPath(import.meta.url);

const MIME_BY_EXT = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

function resolveRequestPath(root, requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const resolved = path.normalize(path.join(root, pathname));
  if (resolved !== root && !resolved.startsWith(root + path.sep)) return null;
  if (existsSync(resolved) && statSync(resolved).isDirectory()) {
    return path.join(resolved, 'index.html');
  }
  if (!existsSync(resolved) && path.resolve(root) === rootDir) {
    return resolveSourcePath(resolved, { projectRoot: root });
  }
  return resolved;
}

export function startStaticServer({ root = rootDir, port = 0, published = false, handler } = {}) {
  const server = createServer(async (request, response) => {
    try {
    if (handler && await handler(request, response)) return;
    if (/(?:^|\/)\.(?:git|codex|agents)(?:\/|$)/.test(decodeURIComponent(new URL(request.url, 'http://localhost').pathname))) { response.writeHead(403); response.end('Private project path'); return; }
    let requestRoot = root;
    let requestUrl = request.url || '/';
    if (published && (published !== 'auto' || requestUrl === '/' || requestUrl.startsWith('/index.html') || requestUrl.startsWith('/snapshots/'))) {
      const prefix = /^\/snapshots\/([a-f0-9]{64})(\/.*)?$/.exec(requestUrl.split('?')[0]);
      if (prefix) { requestRoot = path.join(root, 'output/publications/trees', prefix[1]); requestUrl = prefix[2] || '/'; }
      else {
        const pointerPath = path.join(root, 'output/publications/current.json');
        if (existsSync(pointerPath)) {
          const pointer = JSON.parse(readFileSync(pointerPath, 'utf8'));
          if (!/^sha256:[a-f0-9]{64}$/.test(pointer.publishedDigest)) { response.writeHead(503); response.end('Invalid publication pointer'); return; }
          response.writeHead(302, { Location: `/snapshots/${pointer.publishedDigest.slice(7)}/`, 'Cache-Control': 'no-store' }); response.end(); return;
        }
        if (published !== 'auto') { response.writeHead(404); response.end('No published snapshot'); return; }
      }
    }
    let filePath;
    try { filePath = resolveRequestPath(requestRoot, requestUrl); } catch { response.writeHead(400); response.end('Invalid path'); return; }
    if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }
    response.writeHead(200, {
      'Content-Type': MIME_BY_EXT[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      // dev server: always serve fresh files so edits show on plain refresh
      'Cache-Control': 'no-store',
    });
    createReadStream(filePath).pipe(response);
    } catch (error) { if (!response.headersSent) response.writeHead(500); response.end('Local request failed'); }
  });
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => {
      const boundPort = server.address().port;
      resolve({
        server,
        port: boundPort,
        url: `http://127.0.0.1:${boundPort}/`,
        close: () => new Promise((done) => server.close(done)),
      });
    });
  });
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === __filename;
async function main() {
  const args = process.argv.slice(2);
  const portIndex = args.indexOf('--port');
  const port = portIndex >= 0 ? Number(args[portIndex + 1]) : Number(process.env.PORT) || 8000;
  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    console.error(`Invalid port: ${portIndex >= 0 ? args[portIndex + 1] : process.env.PORT}`);
    process.exit(1);
  }
  async function existingWorkbench() {
    if (!port || args.includes('--draft') || args.includes('--published')) return null;
    try {
      const response = await fetch(`http://127.0.0.1:${port}/__trace/health`, { signal: AbortSignal.timeout(1000) });
      const health = await response.json();
      return health.schema === 'trace-workbench-health/v1' && health.root === rootDir ? health : null;
    } catch { return null; }
  }
  let running = await existingWorkbench();
  if (!running) {
    try {
      running = args.includes('--draft') || args.includes('--published')
        ? await startStaticServer({ port, published: args.includes('--published') })
        : await (await import('./lib/workbench-server.mjs')).startWorkbench({ root: rootDir, port });
    } catch (error) {
      running = error.code === 'EADDRINUSE' ? await existingWorkbench() : null;
      if (!running) throw error;
    }
  }
  const { url } = running;
  if (running.close) {
    let stopping = false;
    const stop = async () => {
      if (stopping) return;
      stopping = true;
      try { await running.close(); process.exitCode = 0; }
      catch (error) { console.error(error.message); process.exitCode = 1; }
    };
    process.once('SIGINT', stop);
    process.once('SIGTERM', stop);
  }
  console.log(`Serving ${rootDir}`);
  console.log(`Viewer: ${url}`);
}

if (isCli) main().catch((error) => { console.error(error.message); process.exitCode = 1; });
