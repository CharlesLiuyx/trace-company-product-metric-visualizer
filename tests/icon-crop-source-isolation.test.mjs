import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function fixturePng() {
  const png = new PNG({ width: 12, height: 12 });
  for (let y = 0; y < png.height; y += 1) {
    for (let x = 0; x < png.width; x += 1) {
      const offset = (y * png.width + x) * 4;
      const foreground = x >= 4 && x < 8 && y >= 4 && y < 8;
      const value = foreground ? 0 : 242;
      png.data[offset] = value;
      png.data[offset + 1] = value;
      png.data[offset + 2] = value;
      png.data[offset + 3] = 255;
    }
  }
  return PNG.sync.write(png);
}

function runExtractor(specPath) {
  return spawnSync('python3', ['scripts/extract_icon_crops.py', '--spec', specPath, '--no-compress'], {
    cwd: root,
    encoding: 'utf8',
  });
}

test('crop source-isolation bands quantify clean separators and reject foreground', () => {
  const dir = mkdtempSync(path.join(root, 'tests', '.tmp-icon-crop-'));
  try {
    const sourcePath = path.join(dir, 'source.png');
    const specPath = path.join(dir, 'spec.json');
    writeFileSync(sourcePath, fixturePng());

    const spec = {
      source: path.relative(root, sourcePath),
      outputDir: path.relative(root, path.join(dir, 'out')),
      runtimeOutputDir: path.relative(root, path.join(dir, 'runtime')),
      report: 'report.json',
      background: [242, 242, 242],
      crops: [{
        key: 'fixture-subject',
        output: 'crop.png',
        searchBox: { x: 3, y: 3, width: 6, height: 6 },
        cropBox: { x: 2, y: 2, width: 8, height: 8 },
        threshold: 18,
        minComponentArea: 1,
        validation: {
          borderBand: 0,
          maxCenterOffset: 0.5,
          maxForbiddenForegroundPixels: 0,
          sourceIsolationBands: [{
            id: 'clean-separator', x: 4, y: 2, width: 4, height: 1, maxForegroundPixels: 0,
          }],
        },
      }],
    };
    writeFileSync(specPath, `${JSON.stringify(spec, null, 2)}\n`);

    const clean = runExtractor(specPath);
    assert.equal(clean.status, 0, clean.stderr || clean.stdout);
    const report = JSON.parse(readFileSync(path.join(dir, 'out', 'report.json'), 'utf8'));
    assert.deepEqual(report.crops[0].validation.sourceIsolationBands, [{
      id: 'clean-separator',
      bbox: { x0: 4, y0: 2, x1: 8, y1: 3 },
      foregroundPixels: 0,
      maxForegroundPixels: 0,
      passes: true,
    }]);

    spec.crops[0].validation.sourceIsolationBands[0] = {
      id: 'contaminated-separator', x: 4, y: 4, width: 4, height: 1, maxForegroundPixels: 0,
    };
    writeFileSync(specPath, `${JSON.stringify(spec, null, 2)}\n`);
    const contaminated = runExtractor(specPath);
    assert.notEqual(contaminated.status, 0);
    assert.match(`${contaminated.stdout}\n${contaminated.stderr}`, /Crop validation failed: fixture-subject/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
