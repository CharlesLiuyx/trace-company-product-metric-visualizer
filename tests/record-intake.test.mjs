import test from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs } from '../scripts/record-intake.mjs';

test('record:intake parses one selected Source and explicit Adapter', () => {
  assert.deepEqual(
    parseArgs([
      'node',
      'record-intake.mjs',
      'input/pending/acme.png',
      '--key',
      'acme-q4-fy25',
      '--adapter',
      'income-statement',
      '--availability',
      'published',
      '--json',
    ]),
    {
      source: 'input/pending/acme.png',
      key: 'acme-q4-fy25',
      adapter: 'income-statement',
      availability: 'published',
      json: true,
    }
  );
});

test('record:intake defaults Source availability to local-only', () => {
  const parsed = parseArgs([
    'node',
    'record-intake.mjs',
    'input/pending/acme.png',
    '--key',
    'acme-arr-2026',
    '--adapter',
    'revenue-metric',
  ]);
  assert.equal(parsed.availability, 'local-only');
});

test('record:intake rejects ambiguous or malformed identity', () => {
  assert.throws(
    () => parseArgs(['node', 'record-intake.mjs', 'input/pending/acme.png', '--key', 'Acme Q4', '--adapter', 'income-statement']),
    /lowercase kebab case/
  );
  assert.throws(
    () => parseArgs(['node', 'record-intake.mjs', 'input/pending/acme.png', '--key', 'acme-q4', '--adapter', 'unknown']),
    /Unsupported --adapter/
  );
});
