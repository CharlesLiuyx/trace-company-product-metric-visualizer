#!/usr/bin/env node
// Regenerate (or --check) the generated rule-catalog section of
// docs/fidelity-loop-rules.md from scripts/lib/fidelity-rules-catalog.mjs.
import { readFile, writeFile } from 'node:fs/promises';
import {
  replaceGeneratedSection,
  validateFidelityRulesDocument,
} from './lib/fidelity-rules-doc.mjs';
import { projectPath } from './lib/project.mjs';

const DOC_PATH = 'docs/fidelity-loop-rules.md';

async function main() {
  const checkOnly = process.argv.includes('--check');
  const source = await readFile(projectPath(DOC_PATH), 'utf8');
  if (checkOnly) {
    const { ruleCount } = validateFidelityRulesDocument(source);
    console.log(`${DOC_PATH} is current (${ruleCount} rules)`);
    return;
  }
  const next = replaceGeneratedSection(source);
  if (next === source) {
    console.log(`${DOC_PATH} already current`);
    return;
  }
  await writeFile(projectPath(DOC_PATH), next);
  console.log(`${DOC_PATH} regenerated`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
