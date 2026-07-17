// Read-only compatibility for immutable ObjectInventory v3 archives.
// Current authoring must never import these values as supported features.
export const LEGACY_HIDDEN_ANCHOR_FEATURE = 'hidden-anchor';
export const LEGACY_HIDDEN_ANCHOR_CLASSIFICATION_CLAIM = 'no-visible-node-face-observed';
export const LEGACY_HIDDEN_ANCHOR_INSPECTION_METHOD = 'native-scale-crop-and-pixel-scan';

export function assertLegacyHiddenAnchorEvidence(object, evidence, invariant) {
  invariant(evidence?.reason, 'OBJECT_FEATURE_EVIDENCE_REQUIRED', `Legacy hidden anchor ${object.id} needs an evidence reason`);
  invariant(
    evidence?.locator?.includes('#'),
    'HIDDEN_ANCHOR_REFERENCE_CROP_REQUIRED',
    `Legacy hidden anchor ${object.id} needs a reference crop locator with a stable fragment`
  );
  invariant(
    evidence?.referenceBBox,
    'HIDDEN_ANCHOR_REFERENCE_BBOX_REQUIRED',
    `Legacy hidden anchor ${object.id} needs a native-pixel referenceBBox`
  );
  invariant(
    evidence?.digest,
    'HIDDEN_ANCHOR_SOURCE_DIGEST_REQUIRED',
    `Legacy hidden anchor ${object.id} needs the immutable Source digest`
  );
  invariant(
    evidence?.inspectionMethod === LEGACY_HIDDEN_ANCHOR_INSPECTION_METHOD,
    'HIDDEN_ANCHOR_INSPECTION_REQUIRED',
    `Legacy hidden anchor ${object.id} must use inspectionMethod ${LEGACY_HIDDEN_ANCHOR_INSPECTION_METHOD}`
  );
  invariant(
    evidence?.classificationClaim === LEGACY_HIDDEN_ANCHOR_CLASSIFICATION_CLAIM,
    'HIDDEN_ANCHOR_CLASSIFICATION_CLAIM_REQUIRED',
    `Legacy hidden anchor ${object.id} must explicitly claim ${LEGACY_HIDDEN_ANCHOR_CLASSIFICATION_CLAIM}`
  );
}
