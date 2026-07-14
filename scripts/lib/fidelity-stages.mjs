// Shared vocabulary for the three-sweep fidelity loop. Stage semantics are
// owned by docs/fidelity-loop-rules.md §4; this module is the machine enum so
// Build-bound evidence archives stay queryable by stage instead of free-form
// focus strings.
export const SWEEP_STAGES = Object.freeze(['structure', 'text', 'polish-l10n']);

export const STAGE_FOCUS_VALUES = Object.freeze([
  'structure-sweep',
  'text-sweep',
  'polish-l10n-sweep',
  'closeout-refresh',
]);

export function isStageFocus(value) {
  return STAGE_FOCUS_VALUES.includes(value);
}

export function assertStageFocus(value) {
  if (isStageFocus(value)) return value;
  throw new Error(
    `Build-bound fidelity evidence requires --focus to be one of ${STAGE_FOCUS_VALUES.join(', ')}; got ${JSON.stringify(value)}`
  );
}
