// Session ownership is operational authority, never human acceptance.
import path from 'node:path';
import { existsSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { atomicJson, readJson, withFileLock, inside } from './workflow-files.mjs';

export function sessionIdentity() {
  return process.env.TRACE_SESSION_ID || process.env.CODEX_THREAD_ID || process.env.CLAUDE_SESSION_ID || '';
}
function leaseFile(root, buildId) {
  if (!/^build-[a-z0-9-]+$/i.test(buildId)) throw new Error('Invalid Build id');
  return inside(root, `output/builds/${buildId}/session.json`);
}
export async function readBuildSession(root, buildId) {
  const file = leaseFile(root, buildId);
  return existsSync(file) ? readJson(file) : null;
}
export async function acquireBuildSession(root, buildId, session = sessionIdentity(), { expectedGeneration, release = false, recover = false } = {}) {
  if (!session || session.length > 200) throw new Error('A stable --session identity is required');
  const file = leaseFile(root, buildId);
  return withFileLock(path.join(path.dirname(file), '.workflow-operation.lock'), () => withFileLock(path.join(path.dirname(file), '.session-write.lock'), async () => {
    const prior = await readBuildSession(root, buildId);
    if (recover && (!prior || !expectedGeneration)) throw new Error('Recovery requires the observed current generation');
    if (!recover && prior && !prior.released && prior.owner !== session) throw Object.assign(new Error(`Build belongs to Session ${prior.owner}; its owner must release it before handoff`), { code: 'BUILD_SESSION_OWNED', owner: prior.owner });
    if (expectedGeneration != null && prior?.generation !== expectedGeneration) throw new Error('Session generation changed; stale owner cannot write');
    if (release && (!prior || prior.owner !== session)) throw new Error('Only the current owner may release a Build');
    const next = { protocol: 'workflow-session/v1', owner: session, generation: prior && !prior.released && !recover ? prior.generation : randomUUID(), released: release, updatedAt: new Date().toISOString(), ...(recover ? { recoveredFrom: { owner: prior.owner, generation: prior.generation } } : {}) };
    await atomicJson(file, next);
    return next;
  }));
}
export async function assertBuildSession(root, buildId, { session = sessionIdentity(), generation = process.env.TRACE_SESSION_GENERATION } = {}) {
  const current = await readBuildSession(root, buildId);
  // Historical/programmatic builds without an owner retain their real history.
  if (!current) return null;
  if (current.released || current.owner !== session || generation !== current.generation) throw Object.assign(new Error(`Build ${buildId} requires its active Session ${current.owner} and current generation`), { code: 'BUILD_SESSION_OWNED' });
  return current;
}
