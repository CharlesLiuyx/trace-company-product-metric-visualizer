#!/usr/bin/env node
import { rootDir } from './lib/project.mjs';
import { cleanupArtifacts } from './lib/artifact-cleanup.mjs';
const args = process.argv.slice(2).filter((arg) => arg !== '--');
try {
  if (args.some((arg) => !['--completed', '--derived', '--dry-run', '--json'].includes(arg)) || args.includes('--completed') && args.includes('--derived')) throw new Error('Usage: pnpm clean:artifacts -- [--completed | --derived] [--dry-run] [--json]');
  if (args.includes('--derived')) {
    // Regenerable artifacts only (docs/artifact-retention.md); safe while pnpm dev or another Session runs.
    const { sweepDerivedArtifacts } = await import('./lib/workflow-retention.mjs');
    const result = await sweepDerivedArtifacts(rootDir, { dryRun: args.includes('--dry-run') });
    console.log(args.includes('--json') ? JSON.stringify(result, null, 2)
      : `${result.dryRun ? 'Would remove' : 'Removed'} ${result.removed.length} derived artifact path(s) (${(result.bytes / 1024 ** 2).toFixed(1)} MiB)${result.removed.length ? `: ${result.removed.map((item) => item.path).join(', ')}` : ''}.`);
  } else {
    const result = await cleanupArtifacts(rootDir, { completed: args.includes('--completed'), dryRun: args.includes('--dry-run') || !args.includes('--completed') });
    console.log(args.includes('--json') ? JSON.stringify(result, null, 2)
      : `${result.dryRun ? 'Inventory (cleanup requires completed work):' : 'Removed'} ${result.files} files (${(result.bytes / 1024 ** 3).toFixed(2)} GiB). Retained ${result.buildCount} historical Build summaries in output/meta/.${result.dryRun ? ' Use --completed after all local work and artifact delivery are finished.' : ''}`);
  }
} catch (error) { console.error(error.message); process.exitCode = 1; }
