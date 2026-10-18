#!/usr/bin/env node
// Process entry for the `record` fidelity operation class: it renders the
// review candidate and archives Build-bound evidence. `record:workflow
// continue` spawns it inside the Build workspace (scripts/lib/asset-workflow.mjs);
// it has no pnpm script and is not an operator command. `verify:d3` is the
// read-only sibling that never archives evidence.
import { main } from './verify-d3.mjs';

main(process.argv, { operation: 'record' }).catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
