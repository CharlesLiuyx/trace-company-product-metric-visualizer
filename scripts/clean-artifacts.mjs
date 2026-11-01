#!/usr/bin/env node
import path from 'node:path';
import { rootDir } from './lib/project.mjs';
import { cleanupArtifacts } from './lib/artifact-cleanup.mjs';
const USAGE = 'Usage: pnpm clean:artifacts -- [--completed | --derived | --gc] [--dry-run] [--json] [--root <checkout> (only with --gc --dry-run)]';
const args = process.argv.slice(2).filter((arg) => arg !== '--');
const mib = (bytes) => `${(bytes / 1024 ** 2).toFixed(1)} MiB`;
try {
  // --root measures another checkout read-only; it never deletes there.
  const rootAt = args.indexOf('--root');
  const root = rootAt >= 0 ? path.resolve(args.splice(rootAt, 2)[1] || '') : rootDir;
  const modes = ['--completed', '--derived', '--gc'].filter((mode) => args.includes(mode));
  if (args.some((arg) => !['--completed', '--derived', '--gc', '--dry-run', '--json'].includes(arg)) || modes.length > 1
    || rootAt >= 0 && !(args.includes('--gc') && args.includes('--dry-run'))) throw new Error(USAGE);
  if (args.includes('--gc')) {
    // Fixed garbage collection (docs/artifact-retention.md); safe while pnpm dev or another Session runs.
    const { runGarbageCollection } = await import('./lib/workflow-retention.mjs');
    const result = await runGarbageCollection(root, { dryRun: args.includes('--dry-run') });
    const size = (item) => Array.isArray(item.removed) ? item.removed.length : item.removed;
    console.log(args.includes('--json') ? JSON.stringify({ retention: result }, null, 2)
      : `${result.dryRun ? 'Would remove' : 'Removed'} ${mib(result.bytes)}: ${Object.entries(result.gc).map(([name, item]) => `${name} ${size(item)} (${mib(item.bytes || 0)})`).join(', ')}.`);
  } else if (args.includes('--derived')) {
    // Regenerable artifacts only (docs/artifact-retention.md); safe while pnpm dev or another Session runs.
    const { sweepDerivedArtifacts } = await import('./lib/workflow-retention.mjs');
    const result = await sweepDerivedArtifacts(root, { dryRun: args.includes('--dry-run') });
    console.log(args.includes('--json') ? JSON.stringify(result, null, 2)
      : `${result.dryRun ? 'Would remove' : 'Removed'} ${result.removed.length} derived artifact path(s) (${mib(result.bytes)})${result.removed.length ? `: ${result.removed.map((item) => item.path).join(', ')}` : ''}.`);
  } else {
    const result = await cleanupArtifacts(root, { completed: args.includes('--completed'), dryRun: args.includes('--dry-run') || !args.includes('--completed') });
    console.log(args.includes('--json') ? JSON.stringify(result, null, 2)
      : `${result.dryRun ? 'Inventory (cleanup requires completed work):' : 'Removed'} ${result.files} files (${(result.bytes / 1024 ** 3).toFixed(2)} GiB). Retained ${result.buildCount} historical Build summaries in output/meta/.${result.dryRun ? ' Use --completed after all local work and artifact delivery are finished.' : ''}`);
  }
} catch (error) { console.error(error.message); process.exitCode = 1; }
