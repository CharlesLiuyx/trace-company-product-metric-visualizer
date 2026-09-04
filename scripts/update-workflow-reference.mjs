#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';
import { projectPath } from './lib/project.mjs';
import { workflowCommandReference, verifyWorkflowContract } from './lib/workflow-contract.mjs';
if (process.argv.includes('--check')) console.log(await verifyWorkflowContract());
else { await writeFile(projectPath('docs/workflow-command-reference.md'), await workflowCommandReference()); console.log('Workflow command reference updated'); }
