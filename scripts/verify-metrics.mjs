#!/usr/bin/env node
import { rootDir } from './lib/project.mjs';
import { verifyMetricRecords } from './lib/metric-catalog.mjs';
const args = process.argv.slice(2).filter((arg) => arg !== '--');
if (args.length > 1 || args.some((arg) => arg.startsWith('-'))) throw new Error('Usage: verify:metrics [key]');
console.log(JSON.stringify(await verifyMetricRecords(rootDir, args[0])));
