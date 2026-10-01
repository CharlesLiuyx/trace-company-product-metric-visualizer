import { rootDir } from './project.mjs';
import { recordBuildObject } from './dataset-build-store.mjs';
import { readJson, inside, filesUnder, atomicJson } from './workflow-files.mjs';

export const FEEDBACK_NOTE_PROTOCOL = 'feedback-note/v1';
const FIELDS = new Set(['note', 'date', 'locales', 'objectIds']);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function strings(values, label) {
  if (values == null) return undefined;
  if (!Array.isArray(values) || values.some((value) => typeof value !== 'string' || !value.trim())) {
    throw new Error(`${label} must be an array of non-empty strings`);
  }
  return [...new Set(values.map((value) => value.trim()))].sort();
}

/** A feedback note is what the operator said, nothing more: { note, date, locales?, objectIds? }. */
export function createFeedbackNote(input, { buildId, now = () => new Date().toISOString() } = {}) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Feedback must be a JSON object');
  const unsupported = Object.keys(input).filter((key) => !FIELDS.has(key));
  if (unsupported.length) throw new Error(`Unsupported feedback field(s): ${unsupported.join(', ')}; feedback is { note, date, locales?, objectIds? }`);
  const note = String(input.note || '').trim();
  if (!note) throw new Error('Feedback needs the operator note');
  const recordedAt = now();
  const date = input.date == null ? recordedAt.slice(0, 10) : String(input.date);
  if (!DATE_RE.test(date) || !Number.isFinite(Date.parse(date))) throw new Error('Feedback date must be YYYY-MM-DD');
  const locales = strings(input.locales, 'locales');
  const objectIds = strings(input.objectIds, 'objectIds');
  return {
    protocol: FEEDBACK_NOTE_PROTOCOL,
    kind: 'feedback-note',
    buildId,
    note,
    date,
    ...(locales ? { locales } : {}),
    ...(objectIds ? { objectIds } : {}),
    // Each note is a distinct object, so a repeated note still expires the candidate.
    recordedAt,
  };
}

// Other Builds recorded in the same batch, for a same-pattern sweep.
async function batchPeers(buildId, root) {
  const peers = new Set();
  for (const file of await filesUnder(root, ['output/batches'])) {
    if (!file.endsWith('.json')) continue;
    const batch = await readJson(inside(root, file));
    if (batch.sources?.some((item) => item.buildId === buildId)) {
      for (const item of batch.sources) if (item.buildId && item.buildId !== buildId) peers.add(item.buildId);
    }
  }
  return [...peers].sort();
}

/**
 * Record the note and expire the current review candidate: the review context
 * file is a semantic input of the Build workspace, so the next `continue`
 * re-prepares and re-renders after the fix.
 */
export async function recordWorkflowFeedback(buildId, input, options) {
  const value = createFeedbackNote(input, { buildId, now: options.now });
  const reference = await recordBuildObject(buildId, 'feedback-note', value, options);
  if (options.build?.authoringRoot) await atomicJson(inside(options.projectRoot, 'output/workflow/review-context.json'), { kind: 'feedback-update', reference });
  return { reference, batchPeers: await batchPeers(buildId, options.repositoryRoot || rootDir) };
}
