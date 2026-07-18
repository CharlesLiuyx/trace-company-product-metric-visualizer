import { readPng } from './png-diff.mjs';

export const ZERO_PAINT_NODE_SLOT_FEATURE = 'zero-paint-node-slot';
export const ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD = 'native-scale-node-slot-pixel-scan';
export const ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM = 'no-painted-node-face-observed';

export const SOURCE_FACE_SCAN_THRESHOLDS = Object.freeze({
  backgroundChannelDelta: 12,
  minimumRunRatio: 0.75,
  minimumRunPixels: 8,
});

function observationError(code, message, details = undefined) {
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  return error;
}

function rgbaAt(png, x, y) {
  const index = (y * png.width + x) * 4;
  return [
    png.data[index],
    png.data[index + 1],
    png.data[index + 2],
    png.data[index + 3],
  ];
}

function colorKey(color) {
  return `${color[0]},${color[1]},${color[2]}`;
}

export function estimateSlotBackground(png, rawBBox) {
  const [x, y, width, height] = normalizeBBox(rawBBox, png);
  const counts = new Map();
  for (let row = y; row < y + height; row += 1) {
    for (let column = x; column < x + width; column += 1) {
      const color = rgbaAt(png, column, row);
      if (color[3] < 32) continue;
      const key = colorKey(color);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  let best = null;
  let bestCount = 0;
  for (const [key, count] of counts) {
    if (count <= bestCount) continue;
    best = key.split(',').map(Number);
    bestCount = count;
  }
  return best || [255, 255, 255];
}

function isPainted(color, background, channelDelta) {
  if (color[3] < 32) return false;
  return Math.max(
    Math.abs(color[0] - background[0]),
    Math.abs(color[1] - background[1]),
    Math.abs(color[2] - background[2])
  ) >= channelDelta;
}

function normalizeBBox(raw, png) {
  if (
    !Array.isArray(raw) ||
    raw.length !== 4 ||
    !raw.every(Number.isInteger)
  ) {
    throw observationError(
      'SOURCE_FACE_SCAN_INVALID',
      'Source face scan needs an integer bbox [x, y, width, height]'
    );
  }
  const [x, y, width, height] = raw;
  if (
    x < 0 ||
    y < 0 ||
    width <= 0 ||
    height <= 0 ||
    x + width > png.width ||
    y + height > png.height
  ) {
    throw observationError(
      'SOURCE_FACE_SCAN_INVALID',
      `Source face scan bbox ${raw.join(',')} exceeds the PNG dimensions`
    );
  }
  return [x, y, width, height];
}

export function scanHorizontalFaceBands(png, rawBBox, options = {}) {
  const bbox = normalizeBBox(rawBBox, png);
  const thresholds = { ...SOURCE_FACE_SCAN_THRESHOLDS, ...options };
  const background = options.background || estimateSlotBackground(png, bbox);
  const [x, y, width, height] = bbox;
  const requiredRun = Math.min(
    width,
    Math.max(
      thresholds.minimumRunPixels,
      Math.ceil(width * thresholds.minimumRunRatio)
    )
  );
  const rows = [];
  for (let row = y; row < y + height; row += 1) {
    let currentRun = 0;
    let longestRun = 0;
    for (let column = x; column < x + width; column += 1) {
      if (isPainted(
        rgbaAt(png, column, row),
        background,
        thresholds.backgroundChannelDelta
      )) {
        currentRun += 1;
        longestRun = Math.max(longestRun, currentRun);
      } else {
        currentRun = 0;
      }
    }
    if (longestRun >= requiredRun) rows.push({ y: row, longestRun });
  }

  const bands = [];
  for (const row of rows) {
    const previous = bands.at(-1);
    if (previous && row.y === previous.bottom) {
      previous.bottom += 1;
      previous.maxRun = Math.max(previous.maxRun, row.longestRun);
    } else {
      bands.push({
        top: row.y,
        bottom: row.y + 1,
        maxRun: row.longestRun,
      });
    }
  }
  return {
    bbox,
    background,
    requiredRun,
    bands,
  };
}

function containsBBox(outer, inner) {
  return (
    inner[0] >= outer[0] &&
    inner[1] >= outer[1] &&
    inner[0] + inner[2] <= outer[0] + outer[2] &&
    inner[1] + inner[3] <= outer[1] + outer[3]
  );
}

function sameColumn(left, right) {
  return (
    Math.abs(left[0] - right[0]) <= 1 &&
    Math.abs(left[2] - right[2]) <= 1
  );
}

export function assertZeroPaintNodeSlots({
  sourceCoverage,
  inventory,
  sourcePath,
}) {
  const objectById = new Map(
    (inventory?.objects || []).map((object) => [object.id, object])
  );
  const claims = (sourceCoverage?.items || [])
    .filter((item) => item.sourceClass === 'financial-value' && item.nodeTargets.length === 0)
    .flatMap((item) => item.inventoryObjectIds
      .map((objectId) => objectById.get(objectId))
      .filter((object) => object?.features?.includes(ZERO_PAINT_NODE_SLOT_FEATURE))
      .map((object) => ({
        item,
        object,
        evidence: object.featureEvidence[ZERO_PAINT_NODE_SLOT_FEATURE],
      })));
  if (claims.length === 0) return { checked: 0, claims: [] };

  let png;
  try {
    png = readPng(sourcePath);
  } catch (cause) {
    throw observationError(
      'SOURCE_FACE_SCAN_INVALID',
      `Cannot read the Build Source PNG for zero-paint verification: ${sourcePath}`,
      { cause: cause.message }
    );
  }
  if (
    png.width !== sourceCoverage.source.width ||
    png.height !== sourceCoverage.source.height
  ) {
    throw observationError(
      'SOURCE_FACE_SCAN_INVALID',
      `Build Source PNG dimensions ${png.width}x${png.height} do not match Source Coverage ${sourceCoverage.source.width}x${sourceCoverage.source.height}`
    );
  }

  const visibleFaces = (sourceCoverage.items || [])
    .map((item) => item.face?.observedBBox)
    .filter(Boolean);
  const results = [];
  for (const { item, object, evidence } of claims) {
    const slotBBox = evidence.referenceBBox;
    if (!containsBBox(item.contentBBox, slotBBox)) {
      throw observationError(
        'SOURCE_FACE_SLOT_BBOX_MISMATCH',
        `${object.id} zero-paint slot must be contained by ${item.sourceId} contentBBox`,
        { objectId: object.id, sourceId: item.sourceId, slotBBox, contentBBox: item.contentBBox }
      );
    }
    const peerFace = visibleFaces.find((faceBBox) => sameColumn(faceBBox, slotBBox));
    if (!peerFace) {
      throw observationError(
        'SOURCE_FACE_SLOT_PEER_MISMATCH',
        `${object.id} zero-paint slot x/width must match a measured visible node face in the same Source column`,
        { objectId: object.id, sourceId: item.sourceId, slotBBox }
      );
    }
    const expectedSlotBBox = [
      peerFace[0],
      item.contentBBox[1],
      peerFace[2],
      item.contentBBox[3],
    ];
    if (!slotBBox.every((value, index) => value === expectedSlotBBox[index])) {
      throw observationError(
        'SOURCE_FACE_SLOT_BBOX_MISMATCH',
        `${object.id} zero-paint slot must scan the full Source observation height at the measured peer x/width`,
        {
          objectId: object.id,
          sourceId: item.sourceId,
          slotBBox,
          expectedSlotBBox,
        }
      );
    }
    const scan = scanHorizontalFaceBands(png, slotBBox);
    if (scan.bands.length > 0) {
      throw observationError(
        'SOURCE_FACE_PRESENT_FOR_NON_NODE',
        `${item.sourceId} is mapped as a non-node metric, but its claimed zero-paint slot contains a horizontal painted face`,
        {
          objectId: object.id,
          sourceId: item.sourceId,
          slotBBox,
          detectedBands: scan.bands,
          requiredRun: scan.requiredRun,
        }
      );
    }
    results.push({
      objectId: object.id,
      sourceId: item.sourceId,
      slotBBox,
      requiredRun: scan.requiredRun,
    });
  }
  return { checked: results.length, claims: results };
}
