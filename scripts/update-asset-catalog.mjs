#!/usr/bin/env node
import { updateAssetCatalog } from './lib/workflow-assets.mjs';
import { rootDir } from './lib/project.mjs';
if (process.argv.slice(2).some((arg) => arg !== '--check')) throw new Error('Usage: update:asset-catalog [--check]');
const catalog = await updateAssetCatalog(rootDir, { check: process.argv.includes('--check') });
console.log(`asset catalog: ${catalog.entries.length} runtime assets, ${catalog.recipes.length} crop recipes`);
