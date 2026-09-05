import { spawn } from 'node:child_process';

export function runCheckProcess(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { ...options, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', (status, signal) => resolve({ status, signal, stdout, stderr }));
  });
}

// Keep independent checks bounded, drain failures, and preserve output order.
export async function runChecks(steps, concurrency = 2, report = () => {}) {
  if (!Number.isInteger(concurrency) || concurrency < 1) throw new Error('Invalid check concurrency');
  const results = new Array(steps.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, steps.length) }, async () => {
    while (next < steps.length) {
      const index = next++, [name, run] = steps[index], startedAt = Date.now();
      try { results[index] = { name, passed: true, summary: await run(), elapsedMs: Date.now() - startedAt }; }
      catch (error) { results[index] = { name, passed: false, error: error.message, elapsedMs: Date.now() - startedAt }; }
      report(results[index]);
    }
  }));
  return results;
}
