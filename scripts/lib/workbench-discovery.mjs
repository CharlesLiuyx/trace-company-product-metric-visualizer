import path from 'node:path';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { readJson, withFileLock } from './workflow-files.mjs';

export async function findWorkbench(root, port) {
  const urls = new Set(port ? [`http://127.0.0.1:${port}/`] : []);
  const folder = path.join(root, 'output/workbench/servers');
  for (const name of await readdir(folder).catch(() => [])) {
    const record = await readJson(path.join(folder, name)).catch(() => null);
    if (!record || !Number.isInteger(record.pid) || !/^http:\/\/127\.0\.0\.1:\d+\/$/.test(record.url)) continue;
    try { process.kill(record.pid, 0); urls.add(record.url); } catch { /* Dead server record. */ }
  }
  for (const url of urls) {
    try {
      const response = await fetch(new URL('__trace/health', url), { signal: AbortSignal.timeout(800) });
      const health = await response.json();
      if (response.ok && health.schema === 'trace-workbench-health/v1' && health.root === root && health.url === url) return health;
    } catch { /* A stale port or another project is not this workbench. */ }
  }
  return null;
}

// One CLI workbench per checkout, even when two sessions request different ports.
export async function startOrReuseWorkbench(root, port, start) {
  return withFileLock(path.join(root, 'output/workbench/start.lock'), async () => {
    const running = await findWorkbench(root, port) || await start();
    await mkdir(path.join(root, 'output/local-view'), { recursive: true });
    await writeFile(path.join(root, 'output/local-view/workbench.js'), `window.TRACE_WORKBENCH_HINT = ${JSON.stringify({ root, url: running.url })};\n`);
    return running;
  });
}
