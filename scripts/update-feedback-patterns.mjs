#!/usr/bin/env node
import { updateFeedbackPatterns } from './lib/workflow-feedback.mjs';
import { rootDir } from './lib/project.mjs';
if (process.argv.slice(2).some((arg) => arg !== '--check')) throw new Error('Usage: update:feedback-patterns [--check]');
const index = await updateFeedbackPatterns(rootDir, { check: process.argv.includes('--check') });
console.log(`feedback patterns: ${index.patterns.length} Source-bound historical cases`);
