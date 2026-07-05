// Pure PNG comparison math extracted from scripts/verify-d3.mjs: full-frame
// and per-region MAE/similarity metrics plus an amplified diff image. No
// browser dependency — only pngjs and the filesystem.
import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { PNG } from 'pngjs';

export function readPng(filePath) {
  return PNG.sync.read(readFileSync(filePath));
}

function emptyDiffBoundingBox() {
  return null;
}

export function formatDiffBoundingBox(box) {
  return box ? `${box.x},${box.y},${box.width},${box.height}` : 'none';
}

function clippedBox(raw, width, height) {
  const rawX = Number(raw.x) || 0;
  const rawY = Number(raw.y) || 0;
  const rawWidth = Number(raw.width) || 0;
  const rawHeight = Number(raw.height) || 0;
  const x = Math.max(0, Math.floor(rawX));
  const y = Math.max(0, Math.floor(rawY));
  const right = Math.min(width, Math.ceil(rawX + rawWidth));
  const bottom = Math.min(height, Math.ceil(rawY + rawHeight));
  return {
    x,
    y,
    width: Math.max(0, right - x),
    height: Math.max(0, bottom - y),
  };
}

export function boxMetrics(reference, candidate, rawBox) {
  const box = clippedBox(rawBox, reference.width, reference.height);
  const pixels = box.width * box.height;
  if (!pixels) {
    return {
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height,
      mae: 0,
      similarity: 1,
      maxChannelDiff: 0,
      samePixelRatio: 1,
      changedPixelRatio: 0,
      diffBoundingBox: emptyDiffBoundingBox(),
    };
  }

  let total = 0;
  let same = 0;
  let max = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;

  for (let y = box.y; y < box.y + box.height; y += 1) {
    for (let x = box.x; x < box.x + box.width; x += 1) {
      const i = (y * reference.width + x) * 4;
      const dr = Math.abs(reference.data[i] - candidate.data[i]);
      const dg = Math.abs(reference.data[i + 1] - candidate.data[i + 1]);
      const db = Math.abs(reference.data[i + 2] - candidate.data[i + 2]);
      total += dr + dg + db;
      if (dr === 0 && dg === 0 && db === 0) {
        same += 1;
      } else {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
      max = Math.max(max, dr, dg, db);
    }
  }

  const mae = total / (pixels * 3);
  return {
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    mae,
    similarity: 1 - mae / 255,
    maxChannelDiff: max,
    samePixelRatio: same / pixels,
    changedPixelRatio: 1 - same / pixels,
    diffBoundingBox:
      maxX >= 0
        ? { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
        : emptyDiffBoundingBox(),
  };
}

export async function pngMetrics(referencePath, candidatePath, diffPath = null, regions = []) {
  const reference = readPng(referencePath);
  const candidate = readPng(candidatePath);

  if (reference.width !== candidate.width || reference.height !== candidate.height) {
    throw new Error(
      `PNG size mismatch: reference ${reference.width}x${reference.height}, candidate ${candidate.width}x${candidate.height}`
    );
  }

  let total = 0;
  let same = 0;
  let max = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;
  const pixels = reference.width * reference.height;
  const diff = diffPath ? new PNG({ width: reference.width, height: reference.height }) : null;
  for (let i = 0; i < reference.data.length; i += 4) {
    const dr = Math.abs(reference.data[i] - candidate.data[i]);
    const dg = Math.abs(reference.data[i + 1] - candidate.data[i + 1]);
    const db = Math.abs(reference.data[i + 2] - candidate.data[i + 2]);
    total += dr + dg + db;
    if (dr === 0 && dg === 0 && db === 0) {
      same += 1;
    } else {
      const pixelIndex = i / 4;
      const x = pixelIndex % reference.width;
      const y = Math.floor(pixelIndex / reference.width);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
    max = Math.max(max, dr, dg, db);
    if (diff) {
      diff.data[i] = Math.min(255, dr * 4);
      diff.data[i + 1] = Math.min(255, dg * 4);
      diff.data[i + 2] = Math.min(255, db * 4);
      diff.data[i + 3] = 255;
    }
  }
  if (diff) {
    await writeFile(diffPath, PNG.sync.write(diff));
  }
  const mae = total / (pixels * 3);
  const full = {
    width: reference.width,
    height: reference.height,
    mae,
    similarity: 1 - mae / 255,
    maxChannelDiff: max,
    samePixelRatio: same / pixels,
    changedPixelRatio: 1 - same / pixels,
    diffBoundingBox:
      maxX >= 0
        ? { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
        : emptyDiffBoundingBox(),
    rgbMae: mae,
    maeSimilarity: 1 - mae / 255,
    maxChannelDifference: max,
  };
  const regionMetrics = regions.map((region) => ({
    region: region.region,
    note: region.note || '',
    ...boxMetrics(reference, candidate, region),
  }));
  return { full, regions: regionMetrics };
}
