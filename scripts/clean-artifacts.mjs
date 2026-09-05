#!/usr/bin/env node
import { rootDir } from './lib/project.mjs';
import { cleanupArtifacts } from './lib/artifact-cleanup.mjs';
const args = process.argv.slice(2).filter((arg) => arg !== '--');
try {
  if (args.some((arg) => !['--completed', '--dry-run', '--json'].includes(arg))) throw new Error('Usage: pnpm clean:artifacts -- [--completed] [--dry-run] [--json]');
  const result = await cleanupArtifacts(rootDir, { completed: args.includes('--completed'), dryRun: args.includes('--dry-run') || !args.includes('--completed') });
  console.log(args.includes('--json') ? JSON.stringify(result, null, 2)
    : `${result.dryRun ? 'Would remove' : 'Removed'} ${result.files} files (${(result.bytes / 1024 ** 3).toFixed(2)} GiB). Retained ${result.buildCount} historical Build summaries in output/meta/.${result.dryRun ? ' Use --completed after all local work and artifact delivery are finished.' : ''}`);
} catch (error) { console.error(error.message); process.exitCode = 1; }
