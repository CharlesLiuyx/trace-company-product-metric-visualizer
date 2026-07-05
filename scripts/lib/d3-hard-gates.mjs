// SVG purity / raster-whitelist hard gates for the d3 fidelity loop,
// extracted verbatim from scripts/verify-d3.mjs. Gate semantics are owned by
// docs/fidelity-loop-rules.md §自动硬门槛 — keep failures byte-compatible.
import { existsSync } from 'node:fs';
import path from 'node:path';
import { rootDir } from './project.mjs';

export function rasterHrefPath(href) {
  return String(href || '').split(/[?#]/)[0];
}

export function isApprovedRasterHref(href) {
  const clean = rasterHrefPath(href);
  return /^data\/assets\/raster-annotations\/[^?#]+\.(?:png|jpe?g|webp|svg)$/i.test(clean);
}

function assertRasterFilesExist(hrefs) {
  const missing = hrefs
    .map(rasterHrefPath)
    .filter((href) => isApprovedRasterHref(href) && !existsSync(path.join(rootDir, href)));
  if (missing.length) {
    throw new Error(`Missing runtime raster annotation file(s): ${missing.join(', ')}`);
  }
}

export function assertPurity(purity) {
  const failures = [];
  if (purity.chartImgCount !== 0) {
    failures.push(`chartImgCount=${purity.chartImgCount}`);
  }
  if (purity.forbiddenElements.length) {
    failures.push(`forbiddenElements=${purity.forbiddenElements.join(',')}`);
  }
  if (purity.backgroundImageElements.length) {
    failures.push(`backgroundImageElements=${purity.backgroundImageElements.slice(0, 5).join(',')}`);
  }

  const expected = purity.expectedRasterHrefs.map(rasterHrefPath);
  const actual = purity.imageHrefs.map(rasterHrefPath);
  if (actual.length && !purity.rasterAllowed) {
    failures.push(`imageCount=${actual.length} but rasterAllowed=false`);
  }
  if (actual.length !== expected.length) {
    failures.push(`imageCount=${actual.length} expectedRasterAnnotations=${expected.length}`);
  }
  const unexpected = actual.filter((href) => !expected.includes(href));
  const missing = expected.filter((href) => !actual.includes(href));
  const unapproved = actual.filter((href) => !isApprovedRasterHref(href));
  if (unexpected.length) failures.push(`unexpectedRasterHrefs=${unexpected.join(',')}`);
  if (missing.length) failures.push(`missingRasterHrefs=${missing.join(',')}`);
  if (unapproved.length) failures.push(`unapprovedRasterHrefs=${unapproved.join(',')}`);

  if (failures.length) {
    throw new Error(`Purity failed: ${failures.join('; ')}`);
  }
  assertRasterFilesExist(actual);
}
