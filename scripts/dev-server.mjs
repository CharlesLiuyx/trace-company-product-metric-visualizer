#!/usr/bin/env node
// Zero-dependency static file server for local development and the viewer
// smoke test. CLI: `node scripts/dev-server.mjs [--port 8000]` (pnpm dev).
// Programmatic: `startStaticServer({ port: 0 })` returns { url, close }.
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rootDir } from './lib/project.mjs';

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
  return resolved;
}

export function startStaticServer({ root = rootDir, port = 0 } = {}) {
  const server = createServer((request, response) => {
    const filePath = resolveRequestPath(root, request.url || '/');
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
if (isCli) {
  const args = process.argv.slice(2);
  const portIndex = args.indexOf('--port');
  const port = portIndex >= 0 ? Number(args[portIndex + 1]) : Number(process.env.PORT) || 8000;
  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    console.error(`Invalid port: ${portIndex >= 0 ? args[portIndex + 1] : process.env.PORT}`);
    process.exit(1);
  }
  const { url } = await startStaticServer({ port });
  console.log(`Serving ${rootDir}`);
  console.log(`Viewer: ${url}`);
}
