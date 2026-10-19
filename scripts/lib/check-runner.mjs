import { spawn } from 'node:child_process';

// timeoutMs bounds a step: a hung child (e.g. a test awaiting a promise that
// never settles) fails with timedOut instead of blocking prepare forever.
export function runCheckProcess(command, args, { timeoutMs = 0, ...options } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { ...options, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '', timedOut = false, kill;
    const timer = timeoutMs > 0 ? setTimeout(() => {
      timedOut = true; child.kill('SIGTERM');
      kill = setTimeout(() => child.kill('SIGKILL'), 5000);
    }, timeoutMs) : null;
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', (error) => { clearTimeout(timer); clearTimeout(kill); reject(error); });
    child.on('close', (status, signal) => { clearTimeout(timer); clearTimeout(kill); resolve({ status, signal, stdout, stderr, timedOut }); });
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
