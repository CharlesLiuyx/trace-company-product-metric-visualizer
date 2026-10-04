// Storage encoding only: callers always receive the original logical JSON,
// including the original receipt/object digests. Never rewrite lifecycle history.
import path from 'node:path';
import { existsSync, realpathSync } from 'node:fs';
import { mkdir, readFile, open, link, rm } from 'node:fs/promises';
import { createHash, randomUUID } from 'node:crypto';

export const RECORD_STORAGE_PROTOCOL = 'trace-record-list/v1';
const protocol = RECORD_STORAGE_PROTOCOL;
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
export function recordStore(file) {
  const match = /^(.*\/output\/builds\/build-[a-z0-9-]+)\//.exec(path.resolve(file));
  return match ? path.resolve(realpathSync(match[1]), '../..', 'storage/lists') : null;
}
function supportsStorage(file) {
  const match = /^(.*\/output\/builds\/build-[a-z0-9-]+)\//.exec(path.resolve(file));
  return match && existsSync(path.join(match[1], 'workspace/scripts/lib/record-storage.mjs'));
}
export async function encodeRecord(file, value) {
  const store = recordStore(file);
  if (!store || !supportsStorage(file)) return value;
  async function visit(value, key = '') {
    if (!value || typeof value !== 'object') return value;
    if (['artifacts', 'entries'].includes(key) && Array.isArray(value) && value.length >= 64 && value.every((x) => x && typeof x.path === 'string' && typeof x.digest === 'string')) {
      // Directory runs have stable boundaries when a file is added to another
      // company. The ordered chunk list preserves even historical sort order.
      const chunks = []; let group = [], directory;
      async function flush() {
        if (!group.length) return;
        const bytes = JSON.stringify(group), digest = hash(bytes), target = path.join(store, `${digest}.json`);
        await mkdir(store, { recursive: true });
        if (existsSync(target)) {
          if (await readFile(target, 'utf8') !== bytes) throw new Error('Shared record chunk changed');
        } else {
          const temp = `${target}.${randomUUID()}.tmp`;
          try {
            const handle = await open(temp, 'wx');
            try { await handle.writeFile(bytes); await handle.sync(); } finally { await handle.close(); }
            try { await link(temp, target); }
            catch (error) { if (error.code !== 'EEXIST') throw error; if (await readFile(target, 'utf8') !== bytes) throw new Error('Shared record chunk changed'); }
            const directory = await open(store, 'r');
            try { await directory.sync(); } finally { await directory.close(); }
          } finally { await rm(temp, { force: true }); }
        }
        chunks.push(digest); group = [];
      }
      for (const entry of value) {
        const next = path.posix.dirname(entry.path);
        if (next !== directory || group.length >= 256) await flush();
        directory = next; group.push(entry);
      }
      await flush();
      return { $traceList: protocol, length: value.length, digest: hash(JSON.stringify(value)), chunks };
    }
    if (Array.isArray(value)) return Promise.all(value.map((x) => visit(x)));
    return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await visit(v, k)])));
  }
  return visit(value);
}
export async function decodeRecord(file, value) {
  const store = recordStore(file), cache = new Map();
  async function visit(value) {
    if (!value || typeof value !== 'object') return value;
    if (value.$traceList != null) {
      if (!store || value.$traceList !== protocol || !Array.isArray(value.chunks) || !Number.isSafeInteger(value.length) || value.length < 0 || value.length > 1000000 || value.chunks.length > 100000) throw new Error('Invalid shared record reference');
      const result = [];
      for (const digest of value.chunks) {
        if (!/^[a-f0-9]{64}$/.test(digest)) throw new Error('Invalid shared record digest');
        if (!cache.has(digest)) cache.set(digest, readFile(path.join(store, `${digest}.json`), 'utf8').then((bytes) => {
          if (hash(bytes) !== digest) throw new Error('Shared record chunk changed');
          const chunk = JSON.parse(bytes);
          if (!Array.isArray(chunk) || chunk.length > 256) throw new Error('Invalid shared record chunk');
          return chunk;
        }));
        result.push(...await cache.get(digest));
      }
      if (result.length !== value.length || hash(JSON.stringify(result)) !== value.digest) throw new Error('Shared record list changed');
      return result;
    }
    if (Array.isArray(value)) return Promise.all(value.map(visit));
    return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await visit(v)])));
  }
  return visit(value);
}
