import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile, readFile, rm, readdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { encodeRecord, decodeRecord, supportsIndex, chunkKey, RECORD_STORAGE_PROTOCOL, RECORD_STORAGE_INDEX_MARKER } from '../scripts/lib/record-storage.mjs';
import { digestValue } from '../scripts/lib/dataset-build.mjs';

const toolSource = fileURLToPath(new URL('../scripts/lib/record-storage.mjs', import.meta.url));
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function build(t, frozen = 'current') {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-record-storage-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const tool = path.join(root, 'output/builds/build-a/workspace/scripts/lib/record-storage.mjs');
  await mkdir(path.dirname(tool), { recursive: true });
  if (frozen === 'current') await copyFile(toolSource, tool);
  else if (frozen != null) await writeFile(tool, frozen);
  return { root, tool, file: path.join(root, 'output/builds/build-a/manifest.json'), store: path.join(root, 'output/storage/lists') };
}
// Sorted like real manifests: per company a crops/ subdirectory then top-level files.
function artifacts(companies, perCompany = 3) {
  const list = [];
  for (const company of companies) {
    for (let n = 0; n < perCompany; n += 1) list.push({ path: `data/assets/icon-references/${company}/crops/c-${n}.png`, digest: `sha256:${hash(`${company}/${n}`)}`, role: 'asset' });
    list.push({ path: `data/assets/icon-references/${company}/sheet.png`, digest: `sha256:${hash(company)}`, role: 'asset' });
  }
  return list.sort((a, b) => a.path.localeCompare(b.path));
}
const companies = (count) => Array.from({ length: count }, (_, n) => `company-${String(n).padStart(2, '0')}`);
const chunksOf = async (store, stub) => stub.chunks || JSON.parse(await readFile(path.join(store, `${stub.index}.json`), 'utf8'));

test('chunk keys truncate directories to four path segments', () => {
  assert.equal(chunkKey('data/datasets/x.js'), 'data/datasets');
  assert.equal(chunkKey('data/assets/icon-references/acme/crops/a.png'), 'data/assets/icon-references/acme');
  assert.equal(chunkKey('data/assets/raster-annotations/acme/a.png'), 'data/assets/raster-annotations/acme');
  assert.equal(chunkKey('index.html'), '.');
});

test('index stubs round-trip to the exact logical value and digest', async (t) => {
  const { file, store } = await build(t);
  const value = { receipts: [{ digest: 'receipt-digest', payload: { artifacts: artifacts(companies(40)) } }], entries: artifacts(companies(2)).slice(0, 8) };
  const encoded = await encodeRecord(file, value);
  const stub = encoded.receipts[0].payload.artifacts;
  assert.deepEqual(Object.keys(stub).sort(), ['$traceList', 'digest', 'index', 'length']);
  assert.equal(stub.$traceList, RECORD_STORAGE_PROTOCOL);
  assert.equal(stub.length, 160);
  assert.ok(JSON.stringify(stub).length < 300, 'a large list leaves a constant-size stub');
  assert.equal((await chunksOf(store, stub)).length, 40, 'one chunk per company, crops included');
  assert.ok(Array.isArray(encoded.entries), 'short lists stay inline');
  const decoded = await decodeRecord(file, encoded);
  assert.deepEqual(decoded, value);
  assert.equal(digestValue(decoded), digestValue(value));
  const files = (await readdir(store)).length;
  assert.deepEqual(await encodeRecord(file, value), encoded, 'encoding is deterministic');
  assert.equal((await readdir(store)).length, files, 'identical chunks and index are reused');
});

test('small chunk lists keep the inline chunks form', async (t) => {
  const { file } = await build(t);
  const value = { artifacts: artifacts(companies(16)) };
  const encoded = await encodeRecord(file, value);
  assert.equal(encoded.artifacts.chunks.length, 16);
  assert.equal('index' in encoded.artifacts, false);
  assert.deepEqual(await decodeRecord(file, encoded), value);
});

test('legacy per-directory chunks stubs still decode', async (t) => {
  const { file, store } = await build(t);
  const value = artifacts(companies(20));
  // The previous encoder split on every dirname (crops/ separate from its company).
  const chunks = [];
  let group = [], directory;
  const flush = async () => {
    if (!group.length) return;
    const bytes = JSON.stringify(group), digest = hash(bytes);
    await mkdir(store, { recursive: true }); await writeFile(path.join(store, `${digest}.json`), bytes);
    chunks.push(digest); group = [];
  };
  for (const entry of value) { const next = path.posix.dirname(entry.path); if (next !== directory) await flush(); directory = next; group.push(entry); }
  await flush();
  assert.equal(chunks.length, 40);
  const legacy = { receipts: [{ payload: { artifacts: { $traceList: RECORD_STORAGE_PROTOCOL, length: value.length, digest: hash(JSON.stringify(value)), chunks } } }] };
  assert.deepEqual(await decodeRecord(file, legacy), { receipts: [{ payload: { artifacts: value } }] });
});

test('corrupted index, chunk or stub fails closed', async (t) => {
  const { file, store } = await build(t);
  const value = { artifacts: artifacts(companies(40)) };
  const encoded = await encodeRecord(file, value), stub = encoded.artifacts;
  const indexFile = path.join(store, `${stub.index}.json`), indexBytes = await readFile(indexFile, 'utf8');
  const chunkFile = path.join(store, `${JSON.parse(indexBytes)[3]}.json`), chunkBytes = await readFile(chunkFile, 'utf8');
  await writeFile(indexFile, JSON.stringify(JSON.parse(indexBytes).slice(1)));
  await assert.rejects(decodeRecord(file, encoded), /Shared record index changed/);
  await writeFile(indexFile, indexBytes);
  await writeFile(chunkFile, '[]');
  await assert.rejects(decodeRecord(file, encoded), /Shared record chunk changed/);
  await writeFile(chunkFile, chunkBytes);
  assert.deepEqual(await decodeRecord(file, encoded), value);
  await rm(indexFile);
  await assert.rejects(decodeRecord(file, encoded), /ENOENT/);
  await writeFile(indexFile, indexBytes);
  await assert.rejects(decodeRecord(file, { artifacts: { ...stub, chunks: [] } }), /Invalid shared record reference/);
  await assert.rejects(decodeRecord(file, { artifacts: { ...stub, index: '../escape' } }), /Invalid shared record digest/);
  await assert.rejects(decodeRecord(file, { artifacts: { ...stub, length: stub.length + 1 } }), /Shared record list changed/);
  await assert.rejects(decodeRecord(file, { artifacts: { ...stub, digest: hash('other') } }), /Shared record list changed/);
  const bogus = JSON.stringify([{ path: 'x', digest: 'y' }]), bogusIndex = JSON.stringify(Array.from({ length: 1 }, () => 'z'.repeat(64)));
  await writeFile(path.join(store, `${hash(bogusIndex)}.json`), bogusIndex);
  await assert.rejects(decodeRecord(file, { artifacts: { ...stub, index: hash(bogusIndex) } }), /Invalid shared record digest/);
  const oversized = JSON.stringify(Array.from({ length: 257 }, () => JSON.parse(bogus)[0]));
  await writeFile(path.join(store, `${hash(oversized)}.json`), oversized);
  await assert.rejects(decodeRecord(file, { artifacts: { ...stub, index: undefined, chunks: [hash(oversized)] } }), /Invalid shared record reference/, 'a stub carrying both keys is rejected');
  const { index: _index, ...chunked } = stub;
  await assert.rejects(decodeRecord(file, { artifacts: { ...chunked, chunks: [hash(oversized)] } }), /Invalid shared record chunk/);
});

test('adding a file for one company leaves other companies chunk digests unchanged', async (t) => {
  const { file, store } = await build(t);
  const before = artifacts(['alpha', 'bravo', 'charlie'], 300);
  const after = [...before, { path: 'data/assets/icon-references/bravo/crops/z-new.png', digest: `sha256:${hash('new')}`, role: 'asset' }].sort((a, b) => a.path.localeCompare(b.path));
  const chunkMap = async (list) => {
    const chunks = await chunksOf(store, (await encodeRecord(file, { artifacts: list })).artifacts);
    const map = {};
    for (const digest of chunks) {
      const entries = JSON.parse(await readFile(path.join(store, `${digest}.json`), 'utf8'));
      assert.ok(entries.length <= 256);
      assert.equal(new Set(entries.map((e) => chunkKey(e.path))).size, 1, 'a chunk never spans companies');
      (map[entries[0].path.split('/')[3]] ||= []).push(digest);
    }
    return map;
  };
  const one = await chunkMap(before), two = await chunkMap(after);
  assert.equal(one.alpha.length, 2, '301 alpha entries split at the 256 limit');
  assert.deepEqual(two.alpha, one.alpha);
  assert.deepEqual(two.charlie, one.charlie);
  assert.notDeepEqual(two.bravo, one.bravo);
});

test('index stubs are written only when the frozen tool copy carries the marker', async (t) => {
  const value = { artifacts: artifacts(companies(40)) };
  const legacy = await build(t, '// supported');
  assert.equal(await supportsIndex(legacy.file), false);
  const old = await encodeRecord(legacy.file, value);
  assert.equal(old.artifacts.chunks.length, 40);
  assert.equal('index' in old.artifacts, false);
  assert.deepEqual(await decodeRecord(legacy.file, old), value);
  const unquoted = await build(t, `// mentions ${RECORD_STORAGE_INDEX_MARKER} only in a comment`);
  assert.equal(await supportsIndex(unquoted.file), false);
  const marked = await build(t, `export const RECORD_STORAGE_INDEX_MARKER = '${RECORD_STORAGE_INDEX_MARKER}';\n`);
  assert.equal(await supportsIndex(marked.file), true);
  assert.equal(typeof (await encodeRecord(marked.file, value)).artifacts.index, 'string');
  const current = await build(t);
  assert.equal(await supportsIndex(current.file), true, 'the shipped tool carries its own marker');
  const none = await build(t, null);
  assert.equal(await supportsIndex(none.file), false);
  assert.deepEqual(await encodeRecord(none.file, value), value, 'Builds without frozen storage tools keep plain JSON');
  assert.equal(await supportsIndex(path.join(none.root, 'elsewhere/manifest.json')), false);
});
