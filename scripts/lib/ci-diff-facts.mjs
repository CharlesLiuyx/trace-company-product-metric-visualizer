// Narrow exceptions need complete, validated before/after content. Missing
// facts deliberately leave the path on ci-plan's conservative full route.
import { isDeepStrictEqual } from 'node:util';

export function dataRegistrationOnly(before, after) {
  if (typeof before !== 'string' || typeof after !== 'string') return false;
  // Keep each registration block's position relative to runtime scripts.
  // Moving data below app boot is not a generated-only registration change.
  const strip = (html) => ['income-statements', 'company-metadata'].reduce((result, family) =>
    result.replace(new RegExp(`(?:^[ \\t]*<script src="data/${family}/[a-z0-9-]+\\.js"><\\/script>\\r?\\n)+`, 'gm'), `<!-- ${family} registration -->\n`), html);
  return before !== after && strip(before) === strip(after);
}

export function changedBaselineKeys(before, after) {
  try {
    const a = JSON.parse(before), b = JSON.parse(after);
    const valid = (value) => value && typeof value === 'object' && !Array.isArray(value);
    if (!valid(a) || !valid(b) || !valid(a.baselines) || !valid(b.baselines)) return null;
    const { baselines: oldValues, ...oldPolicy } = a, { baselines: newValues, ...newPolicy } = b;
    if (!isDeepStrictEqual(oldPolicy, newPolicy)) return null;
    const keys = [...new Set([...Object.keys(oldValues), ...Object.keys(newValues)])];
    if (keys.some((key) => !/^[a-z0-9-]+$/.test(key))) return null;
    return keys.filter((key) => !isDeepStrictEqual(oldValues[key], newValues[key])).sort();
  } catch { return null; }
}

export function assetConsumers(before, after) {
  try {
    const catalogs = [before, after].map((source) => JSON.parse(source));
    const result = new Map();
    for (const catalog of catalogs) {
      if (catalog.protocol !== 'asset-catalog/v1' || !Array.isArray(catalog.entries)) return null;
      for (const entry of catalog.entries) {
        if (typeof entry.path !== 'string' || !Array.isArray(entry.consumers)
          || entry.consumers.some((key) => typeof key !== 'string' || !/^[a-z0-9-]+$/.test(key))) return null;
        result.set(entry.path, [...new Set([...(result.get(entry.path) || []), ...entry.consumers])].sort());
      }
    }
    return result;
  } catch { return null; }
}

// Only a successful ancestor from this main workflow can cover prior work.
// A failed push stays in the next diff even if the next edit is only a test.
export async function lastSuccessfulMain({ repository, head, token, apiUrl = 'https://api.github.com', fetchRun = fetch, isAncestor }) {
  if (!repository || !token) throw new Error('Missing CI history credentials');
  const response = await fetchRun(`${apiUrl}/repos/${repository}/actions/workflows/ci.yml/runs?branch=main&event=push&status=success&per_page=100`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`CI history unavailable (${response.status})`);
  const { workflow_runs: runs } = await response.json();
  if (!Array.isArray(runs)) throw new Error('Invalid CI history');
  for (const run of runs) {
    if (run.conclusion !== 'success' || run.head_branch !== 'main' || run.event !== 'push'
      || !/^[a-f0-9]{40}$/.test(run.head_sha) || run.head_sha === head) continue;
    if (await isAncestor(run.head_sha, head)) return run.head_sha;
  }
  throw new Error('No successful main ancestor found');
}
