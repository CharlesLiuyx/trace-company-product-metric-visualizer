// Shared vocabulary for Build-bound fidelity evidence. The review candidate is
// owned by docs/asset-workflow.md; this module is the machine enum so evidence
// archives stay queryable instead of free-form focus strings.
// `review-candidate` is the single all-locale run of review-candidate/v1
// Builds. The three sweep stages remain for historical fidelity-checkpoints/v1
// Builds and as an optional repair order.
export const SWEEP_STAGES = Object.freeze(['structure', 'text', 'polish-l10n']);

export const STAGE_FOCUS_VALUES = Object.freeze([
  'review-candidate',
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
