#!/usr/bin/env node
import { rootDir } from './lib/project.mjs';
import { updateMetricCatalog } from './lib/metric-catalog.mjs';
if (process.argv.slice(2).some((arg) => arg !== '--check')) throw new Error('Usage: update:metric-catalog [--check]');
const records = await updateMetricCatalog(rootDir, { check: process.argv.includes('--check') });
console.log(`metric catalog: ${records.length} Sources`);
