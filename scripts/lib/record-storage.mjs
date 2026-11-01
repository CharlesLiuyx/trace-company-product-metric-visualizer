// Storage encoding only: callers always receive the original logical JSON,
// including the original receipt/object digests. Never rewrite lifecycle history.
import path from 'node:path';
import { existsSync, realpathSync } from 'node:fs';
import { mkdir, readFile, open, link, rm } from 'node:fs/promises';
import { createHash, randomUUID } from 'node:crypto';

export const RECORD_STORAGE_PROTOCOL = 'trace-record-list/v1';
// A Build's frozen tools decode `index` stubs only when their copy of this file
// contains this quoted literal; older copies keep receiving the `chunks` form.
export const RECORD_STORAGE_INDEX_MARKER = 'trace-record-list/v1+index';
const protocol = RECORD_STORAGE_PROTOCOL;
const CHUNK_LIMIT = 256, CHUNK_KEY_SEGMENTS = 4, INDEX_THRESHOLD = 2048;
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const buildFolder = (file) => /^(.*\/output\/builds\/build-[a-z0-9-]+)\//.exec(path.resolve(file))?.[1];
const frozenTool = (file) => { const folder = buildFolder(file); return folder ? path.join(folder, 'workspace/scripts/lib/record-storage.mjs') : null; };
export function recordStore(file) {
  const folder = buildFolder(file);
  return folder ? path.resolve(realpathSync(folder), '../..', 'storage/lists') : null;
}
function supportsStorage(file) {
  const tool = frozenTool(file);
  return Boolean(tool && existsSync(tool));
}
export async function supportsIndex(file) {
  const tool = frozenTool(file);
  if (!tool || !existsSync(tool)) return false;
  return (await readFile(tool, 'utf8')).includes(`'${RECORD_STORAGE_INDEX_MARKER}'`);
}
// Chunk runs follow the directory truncated to four path segments
// (`data/assets/icon-references/<company>`), so adding a file for one company
// never changes another company's chunk digests. Decoding ignores the grouping.
export function chunkKey(file) {
  return path.posix.dirname(file).split('/').slice(0, CHUNK_KEY_SEGMENTS).join('/');
}
async function storeBytes(store, bytes) {
  const digest = hash(bytes), target = path.join(store, `${digest}.json`);
  await mkdir(store, { recursive: true });
  if (existsSync(target)) {
    if (await readFile(target, 'utf8') !== bytes) throw new Error('Shared record chunk changed');
    return digest;
  }
  const temp = `${target}.${randomUUID()}.tmp`;
  try {
    const handle = await open(temp, 'wx');
    try { await handle.writeFile(bytes); await handle.sync(); } finally { await handle.close(); }
    try { await link(temp, target); }
    catch (error) { if (error.code !== 'EEXIST') throw error; if (await readFile(target, 'utf8') !== bytes) throw new Error('Shared record chunk changed'); }
    const directory = await open(store, 'r');
    try { await directory.sync(); } finally { await directory.close(); }
  } finally { await rm(temp, { force: true }); }
  return digest;
}
export async function encodeRecord(file, value) {
  const store = recordStore(file);
  if (!store || !supportsStorage(file)) return value;
  const indexed = await supportsIndex(file);
  async function visit(value, key = '') {
    if (!value || typeof value !== 'object') return value;
    if (['artifacts', 'entries'].includes(key) && Array.isArray(value) && value.length >= 64 && value.every((x) => x && typeof x.path === 'string' && typeof x.digest === 'string')) {
      // The ordered chunk list preserves even historical sort order.
      const chunks = []; let group = [], current;
      async function flush() {
        if (!group.length) return;
        chunks.push(await storeBytes(store, JSON.stringify(group))); group = [];
      }
      for (const entry of value) {
        const next = chunkKey(entry.path);
        if (next !== current || group.length >= CHUNK_LIMIT) await flush();
        current = next; group.push(entry);
      }
      await flush();
      const stub = { $traceList: protocol, length: value.length, digest: hash(JSON.stringify(value)) };
      const list = JSON.stringify(chunks);
      return indexed && list.length > INDEX_THRESHOLD ? { ...stub, index: await storeBytes(store, list) } : { ...stub, chunks };
    }
    if (Array.isArray(value)) return Promise.all(value.map((x) => visit(x)));
    return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await visit(v, k)])));
  }
  return visit(value);
}
export async function decodeRecord(file, value) {
  const store = recordStore(file), cache = new Map();
  function load(kind, digest) {
    if (typeof digest !== 'string' || !/^[a-f0-9]{64}$/.test(digest)) throw new Error('Invalid shared record digest');
    const key = `${kind}:${digest}`;
    if (!cache.has(key)) cache.set(key, readFile(path.join(store, `${digest}.json`), 'utf8').then((bytes) => {
      if (hash(bytes) !== digest) throw new Error(`Shared record ${kind} changed`);
      const list = JSON.parse(bytes);
      if (!Array.isArray(list) || list.length > (kind === 'chunk' ? CHUNK_LIMIT : 100000)) throw new Error(`Invalid shared record ${kind}`);
      return list;
    }));
    return cache.get(key);
  }
  async function visit(value) {
    if (!value || typeof value !== 'object') return value;
    if (value.$traceList != null) {
      const hasChunks = 'chunks' in value, hasIndex = 'index' in value;
      if (!store || value.$traceList !== protocol || hasChunks === hasIndex || (hasChunks && (!Array.isArray(value.chunks) || value.chunks.length > 100000)) || !Number.isSafeInteger(value.length) || value.length < 0 || value.length > 1000000) throw new Error('Invalid shared record reference');
      const chunks = hasIndex ? await load('index', value.index) : value.chunks;
      const result = [];
      for (const digest of chunks) result.push(...await load('chunk', digest));
      if (result.length !== value.length || hash(JSON.stringify(result)) !== value.digest) throw new Error('Shared record list changed');
      return result;
    }
    if (Array.isArray(value)) return Promise.all(value.map(visit));
    return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await visit(v)])));
  }
  return visit(value);
}
