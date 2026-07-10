// G12 interface-fidelity audit for rendered Sankey SVGs. Candidate endpoint
// geometry comes from the bound graph data on each rendered path; reference
// fidelity is measured independently as a binary non-background occupancy
// union in a narrow probe band immediately outside each node face.
//
// The binary-union pass is intentionally colour-agnostic: adjacent links of
// different colours are still one continuous occupied interval. Per-link
// candidate intervals remain in the report for human review, but reference
// pixels are never assigned to a link by colour alone.
import { existsSync } from 'node:fs';
import { readPng } from './png-diff.mjs';

export const INTERFACE_AUDIT_THRESHOLDS = Object.freeze({
  antiAliasTolerance: 1,
  realGapMin: 2,
  endpointEdgeMaxDelta: 0.5,
  tangentYMaxDelta: 0.5,
  nodeContainmentMaxDelta: 0.5,
  backgroundChannelDelta: 12,
  probeStart: 1,
  probeDepth: 3,
  scanPadding: 8,
});

const round = (value, digits = 3) => {
  const factor = 10 ** digits;
  return Math.round(Number(value) * factor) / factor;
};

function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

export function normalizeInterfaceAuditMode(value) {
  const raw = typeof value === 'object' && value ? value.mode : value;
  if (raw === 'error' || raw === 'warning' || raw === 'off') return raw;
  return 'warning';
}

export function mergeIntervals(intervals, gapTolerance = INTERFACE_AUDIT_THRESHOLDS.antiAliasTolerance) {
  const sorted = (intervals || [])
    .map((interval) => ({ top: finite(interval.top), bottom: finite(interval.bottom) }))
    .filter((interval) => interval.bottom > interval.top)
    .sort((a, b) => a.top - b.top || a.bottom - b.bottom);
  const merged = [];
  for (const interval of sorted) {
    const previous = merged.at(-1);
    if (!previous || interval.top - previous.bottom > gapTolerance) {
      merged.push({ ...interval });
      continue;
    }
    previous.bottom = Math.max(previous.bottom, interval.bottom);
  }
  return merged.map((interval) => ({ top: round(interval.top), bottom: round(interval.bottom) }));
}

export function intervalsFromMask(mask, startY = 0, closeGap = INTERFACE_AUDIT_THRESHOLDS.antiAliasTolerance) {
  const intervals = [];
  let runStart = -1;
  for (let index = 0; index <= mask.length; index += 1) {
    const occupied = index < mask.length && Boolean(mask[index]);
    if (occupied && runStart < 0) runStart = index;
    if (!occupied && runStart >= 0) {
      intervals.push({ top: startY + runStart, bottom: startY + index });
      runStart = -1;
    }
  }
  return mergeIntervals(intervals, closeGap);
}

function intervalGaps(intervals) {
  const sorted = (intervals || []).slice().sort((a, b) => a.top - b.top || a.bottom - b.bottom);
  const gaps = [];
  for (let index = 1; index < sorted.length; index += 1) {
    const size = sorted[index].top - sorted[index - 1].bottom;
    if (size > 0) {
      gaps.push({
        top: round(sorted[index - 1].bottom),
        bottom: round(sorted[index].top),
        size: round(size),
      });
    }
  }
  return gaps;
}

function intervalOverlaps(intervals) {
  const sorted = (intervals || []).slice().sort((a, b) => a.top - b.top || a.bottom - b.bottom);
  const overlaps = [];
  for (let index = 1; index < sorted.length; index += 1) {
    const size = sorted[index - 1].bottom - sorted[index].top;
    if (size > 0) {
      overlaps.push({
        top: round(sorted[index].top),
        bottom: round(Math.min(sorted[index - 1].bottom, sorted[index].bottom)),
        size: round(size),
      });
    }
  }
  return overlaps;
}

function rgbAt(png, x, y) {
  const index = (y * png.width + x) * 4;
  return [png.data[index], png.data[index + 1], png.data[index + 2], png.data[index + 3]];
}

function rgbKey(color) {
  return `${color[0]},${color[1]},${color[2]}`;
}

export function estimateBackgroundColor(png) {
  const counts = new Map();
  let sampleCount = 0;
  const add = (x, y) => {
    if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
    const color = rgbAt(png, x, y);
    if (color[3] === 0) return;
    const key = rgbKey(color);
    counts.set(key, (counts.get(key) || 0) + 1);
    sampleCount += 1;
  };
  const xStep = Math.max(1, Math.floor(png.width / 1200));
  const yStep = Math.max(1, Math.floor(png.height / 800));
  for (let x = 0; x < png.width; x += xStep) {
    add(x, 0);
    add(x, png.height - 1);
  }
  for (let y = 0; y < png.height; y += yStep) {
    add(0, y);
    add(png.width - 1, y);
  }
  let bestKey = '255,255,255';
  let bestCount = 0;
  for (const [key, count] of counts) {
    if (count > bestCount) {
      bestKey = key;
      bestCount = count;
    }
  }
  const rgb = bestKey.split(',').map(Number);
  return {
    rgb,
    hex: `#${rgb.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`,
    confidence: sampleCount ? round(bestCount / sampleCount, 4) : 0,
    samples: sampleCount,
  };
}

function isNonBackground(color, background, threshold) {
  if (color[3] === 0) return false;
  return Math.max(
    Math.abs(color[0] - background[0]),
    Math.abs(color[1] - background[1]),
    Math.abs(color[2] - background[2])
  ) > threshold;
}

export function scanInterfaceOccupancy(
  png,
  interfaceGeometry,
  options = {}
) {
  const thresholds = { ...INTERFACE_AUDIT_THRESHOLDS, ...options };
  const background = options.background || estimateBackgroundColor(png).rgb;
  const node = interfaceGeometry.nodeBox;
  const union = interfaceGeometry.candidateUnion || [];
  const unionTop = union.length ? Math.min(...union.map((interval) => interval.top)) : node.top;
  const unionBottom = union.length ? Math.max(...union.map((interval) => interval.bottom)) : node.bottom;
  const startY = Math.max(0, Math.floor(Math.min(node.top, unionTop) - thresholds.scanPadding));
  const endY = Math.min(png.height, Math.ceil(Math.max(node.bottom, unionBottom) + thresholds.scanPadding));
  const direction = interfaceGeometry.face === 'left' ? -1 : 1;
  const edgeX = interfaceGeometry.nodeEdgeX;
  const xs = [];
  for (let offset = thresholds.probeStart; offset < thresholds.probeStart + thresholds.probeDepth; offset += 1) {
    const x = Math.round(edgeX + direction * offset);
    if (x >= 0 && x < png.width) xs.push(x);
  }
  const requiredVotes = Math.max(1, Math.ceil(xs.length / 2));
  const mask = [];
  for (let y = startY; y < endY; y += 1) {
    let votes = 0;
    for (const x of xs) {
      if (isNonBackground(rgbAt(png, x, y), background, thresholds.backgroundChannelDelta)) votes += 1;
    }
    mask.push(votes >= requiredVotes);
  }
  const rawIntervals = intervalsFromMask(mask, startY, 0);
  const intervals = mergeIntervals(rawIntervals, thresholds.antiAliasTolerance);
  return {
    probe: { xs, startY, endY, requiredVotes },
    background: { rgb: background },
    rawIntervals,
    intervals,
    gaps: intervalGaps(intervals),
  };
}

export function compareOccupancyIntervals(candidateIntervals, referenceIntervals, options = {}) {
  const thresholds = { ...INTERFACE_AUDIT_THRESHOLDS, ...options };
  const candidate = mergeIntervals(candidateIntervals, thresholds.antiAliasTolerance);
  const reference = mergeIntervals(referenceIntervals, thresholds.antiAliasTolerance);
  const violations = [];
  if (candidate.length !== reference.length) {
    violations.push({
      code: 'interface-topology-mismatch',
      message: `candidate has ${candidate.length} occupied interval(s), reference has ${reference.length}`,
      candidateCount: candidate.length,
      referenceCount: reference.length,
    });
    return { passed: false, candidate, reference, boundaryDeltas: [], violations };
  }
  const boundaryDeltas = candidate.map((interval, index) => {
    const expected = reference[index];
    const top = round(interval.top - expected.top);
    const bottom = round(interval.bottom - expected.bottom);
    return { index, top, bottom };
  });
  boundaryDeltas.forEach((delta) => {
    if (
      Math.abs(delta.top) > thresholds.antiAliasTolerance ||
      Math.abs(delta.bottom) > thresholds.antiAliasTolerance
    ) {
      violations.push({
        code: 'interface-boundary-mismatch',
        message: `interval ${delta.index} boundary delta top=${delta.top}px bottom=${delta.bottom}px exceeds ±${thresholds.antiAliasTolerance}px`,
        ...delta,
      });
    }
  });
  return { passed: violations.length === 0, candidate, reference, boundaryDeltas, violations };
}

function clipIntervalsToNode(intervals, nodeBox, gapTolerance) {
  return mergeIntervals(
    (intervals || [])
      .map((interval) => ({
        top: Math.max(finite(interval.top), finite(nodeBox.top)),
        bottom: Math.min(finite(interval.bottom), finite(nodeBox.bottom)),
      }))
      .filter((interval) => interval.bottom > interval.top),
    gapTolerance
  );
}

function candidateInterfaceRecord(rawInterface, thresholds) {
  const links = rawInterface.links || [];
  const perLinkIntervals = links
    .map((endpoint) => ({
      link: endpoint.link,
      role: endpoint.role,
      top: round(endpoint.interval.top),
      bottom: round(endpoint.interval.bottom),
      center: round(endpoint.center),
      width: round(endpoint.width),
    }))
    .sort((a, b) => a.top - b.top || a.bottom - b.bottom || a.link.localeCompare(b.link));
  const union = mergeIntervals(perLinkIntervals, thresholds.antiAliasTolerance);
  const gaps = intervalGaps(perLinkIntervals).filter((gap) => gap.size >= thresholds.realGapMin);
  const overlaps = intervalOverlaps(perLinkIntervals);
  const overflow = perLinkIntervals.filter(
    (interval) =>
      interval.top < rawInterface.nodeBox.top - thresholds.nodeContainmentMaxDelta ||
      interval.bottom > rawInterface.nodeBox.bottom + thresholds.nodeContainmentMaxDelta
  );
  return {
    ...rawInterface,
    links,
    perLinkIntervals,
    candidateUnion: union,
    candidateTopology: {
      kind: overlaps.length ? 'overlap' : gaps.length ? 'gapped' : 'continuous',
      gaps,
      overlaps,
      overflow: overflow.map((interval) => ({
        link: interval.link,
        top: interval.top,
        bottom: interval.bottom,
        topDelta: round(Math.min(0, interval.top - rawInterface.nodeBox.top)),
        bottomDelta: round(Math.max(0, interval.bottom - rawInterface.nodeBox.bottom)),
      })),
    },
  };
}

function candidateGeometryViolations(candidate, thresholds) {
  const violations = [];
  for (const endpoint of candidate.links) {
    const prefix = `${candidate.id} ${endpoint.link} ${endpoint.role}`;
    if (!Number.isFinite(endpoint.width) || endpoint.width <= 0) {
      violations.push({ code: 'invalid-interface-width', interface: candidate.id, link: endpoint.link, message: `${prefix} has invalid width ${endpoint.width}` });
    }
    if (Math.abs(endpoint.edgeDelta) > thresholds.endpointEdgeMaxDelta) {
      violations.push({
        code: 'endpoint-node-edge-mismatch',
        interface: candidate.id,
        link: endpoint.link,
        message: `${prefix} endpoint is ${round(endpoint.edgeDelta)}px from the node face`,
        delta: round(endpoint.edgeDelta),
      });
    }
    if (Math.abs(endpoint.tangentDeltaY) > thresholds.tangentYMaxDelta) {
      violations.push({
        code: 'non-horizontal-interface-tangent',
        interface: candidate.id,
        link: endpoint.link,
        message: `${prefix} control-point y delta is ${round(endpoint.tangentDeltaY)}px`,
        delta: round(endpoint.tangentDeltaY),
      });
    }
    if (endpoint.requiresRibbon && endpoint.pathKind !== 'ribbon') {
      violations.push({
        code: 'endpoint-width-model-mismatch',
        interface: candidate.id,
        link: endpoint.link,
        message: `${prefix} has different source/target widths but is rendered as ${endpoint.pathKind}`,
      });
    }
    const topDelta = endpoint.interval.top - candidate.nodeBox.top;
    const bottomDelta = endpoint.interval.bottom - candidate.nodeBox.bottom;
    if (
      topDelta < -thresholds.nodeContainmentMaxDelta ||
      bottomDelta > thresholds.nodeContainmentMaxDelta
    ) {
      violations.push({
        code: 'interface-node-vertical-overflow',
        phase: 'candidate',
        interface: candidate.id,
        link: endpoint.link,
        message: `${prefix} interval ${round(endpoint.interval.top)}..${round(endpoint.interval.bottom)} exceeds node ${round(candidate.nodeBox.top)}..${round(candidate.nodeBox.bottom)}`,
        topDelta: round(Math.min(0, topDelta)),
        bottomDelta: round(Math.max(0, bottomDelta)),
      });
    }
  }
  return violations;
}

export function auditInterfaceGeometry(geometry, options = {}) {
  const thresholds = { ...INTERFACE_AUDIT_THRESHOLDS, ...options };
  const interfaces = (geometry.interfaces || []).map((item) => candidateInterfaceRecord(item, thresholds));
  const violations = interfaces.flatMap((item) => candidateGeometryViolations(item, thresholds));
  return { interfaces, violations, thresholds };
}

export function buildInterfaceAuditFromPngs({
  geometry,
  candidatePng = null,
  referencePng = null,
  thresholds: thresholdOverrides = {},
}) {
  const { interfaces, violations: geometryViolations, thresholds } = auditInterfaceGeometry(
    geometry,
    thresholdOverrides
  );
  const candidateBackground = candidatePng ? estimateBackgroundColor(candidatePng) : null;
  const referenceBackground = referencePng ? estimateBackgroundColor(referencePng) : null;
  const violations = [...geometryViolations];
  const auditedInterfaces = interfaces.map((item) => {
    const candidateRaster = candidatePng
      ? scanInterfaceOccupancy(candidatePng, item, { ...thresholds, background: candidateBackground.rgb })
      : null;
    const renderedComparison = candidateRaster
      ? {
          ...compareOccupancyIntervals(
            item.candidateUnion,
            clipIntervalsToNode(
              candidateRaster.intervals,
              item.nodeBox,
              thresholds.antiAliasTolerance
            ),
            thresholds
          ),
          normalization: {
            mode: 'clip-candidate-raster-halo-to-node-bbox',
            nodeTop: item.nodeBox.top,
            nodeBottom: item.nodeBox.bottom,
            candidateRawIntervals: candidateRaster.intervals,
          },
        }
      : null;
    if (renderedComparison && !renderedComparison.passed) {
      renderedComparison.violations.forEach((violation) => {
        violations.push({ ...violation, code: `rendered-${violation.code}`, phase: 'candidate', interface: item.id });
      });
    }

    const reference = referencePng
      ? scanInterfaceOccupancy(referencePng, item, { ...thresholds, background: referenceBackground.rgb })
      : null;
    const referenceComparison = reference
      ? {
          ...compareOccupancyIntervals(
            clipIntervalsToNode(
              candidateRaster?.intervals || item.candidateUnion,
              item.nodeBox,
              thresholds.antiAliasTolerance
            ),
            clipIntervalsToNode(reference.intervals, item.nodeBox, thresholds.antiAliasTolerance),
            thresholds
          ),
          normalization: {
            mode: 'clip-raster-halo-to-node-bbox',
            nodeTop: item.nodeBox.top,
            nodeBottom: item.nodeBox.bottom,
            candidateRawIntervals: candidateRaster?.intervals || item.candidateUnion,
            referenceRawIntervals: reference.intervals,
          },
        }
      : null;
    if (referenceComparison && !referenceComparison.passed) {
      referenceComparison.violations.forEach((violation) => {
        violations.push({ ...violation, phase: 'reference', interface: item.id });
      });
    }
    return {
      ...item,
      candidateRaster,
      renderedComparison,
      reference,
      referenceComparison,
      result:
        [...violations].some((violation) => violation.interface === item.id)
          ? 'fail'
          : referencePng
            ? 'pass'
            : 'not-scored',
    };
  });

  const mode = normalizeInterfaceAuditMode(geometry.mode);
  const enforced = mode === 'error';
  geometryViolations.forEach((violation) => {
    if (!violation.phase) violation.phase = 'candidate';
  });
  const candidateViolations = violations.filter((violation) => violation.phase === 'candidate');
  const referenceViolations = violations.filter((violation) => violation.phase === 'reference');
  const candidateStatus = candidateViolations.length ? 'failed' : 'passed';
  const referenceStatus = !referencePng ? 'not-scored' : referenceViolations.length ? 'failed' : 'passed';
  const status =
    candidateStatus === 'failed' || referenceStatus === 'failed'
      ? 'failed'
      : referenceStatus === 'not-scored'
        ? 'not-scored'
        : 'passed';
  const enforcementStatus =
    mode === 'off'
      ? 'not-enforced'
      : status === 'failed'
        ? mode === 'error'
          ? 'failed'
          : 'warning'
        : status === 'not-scored'
          ? 'not-scored'
          : mode === 'error'
            ? 'passed'
            : 'warning';
  const expectedInterfaceIds = auditedInterfaces.map((item) => item.id);
  const auditedInterfaceIds = expectedInterfaceIds.slice();
  const passedInterfaces = auditedInterfaces.filter((item) => item.result === 'pass').length;
  const failedInterfaces = auditedInterfaces.filter((item) => item.result === 'fail').length;
  const notScoredInterfaces = auditedInterfaces.filter((item) => item.result === 'not-scored').length;
  const documentedExceptions = 0;
  const pendingInterfaces = 0;
  return {
    version: 2,
    gate: 'G12',
    mode,
    enforced,
    status,
    candidateStatus,
    referenceStatus,
    enforcementStatus,
    thresholds,
    candidateBackground,
    referenceBackground,
    summary: {
      expectedInterfaces: expectedInterfaceIds.length,
      auditedInterfaces: auditedInterfaceIds.length,
      passedInterfaces,
      failedInterfaces,
      documentedExceptions,
      pendingInterfaces,
      notScoredInterfaces,
      interfaces: auditedInterfaces.length,
      links: geometry.links?.length || 0,
      passed: auditedInterfaces.filter((item) => item.result === 'pass').length,
      failed: auditedInterfaces.filter((item) => item.result === 'fail').length,
      notScored: auditedInterfaces.filter((item) => item.result === 'not-scored').length,
      violations: violations.length,
    },
    expectedInterfaceIds,
    auditedInterfaceIds,
    coverageBasis: 'candidate-rendered-visible-interfaces',
    manualCoverageRequired: true,
    interfaces: auditedInterfaces,
    violations,
  };
}

export function buildInterfaceAudit({ geometry, candidatePath = null, referencePath = null, thresholds = {} }) {
  const candidatePng = candidatePath && existsSync(candidatePath) ? readPng(candidatePath) : null;
  const referencePng = referencePath && existsSync(referencePath) ? readPng(referencePath) : null;
  return buildInterfaceAuditFromPngs({ geometry, candidatePng, referencePng, thresholds });
}

export function assertInterfaceAudit(report) {
  if (report.enforcementStatus !== 'failed') return;
  const details = report.violations
    .slice(0, 8)
    .map((violation) => `${violation.interface || 'unknown'}: ${violation.message}`)
    .join('; ');
  throw new Error(`G12 interface fidelity failed (${report.violations.length} violation(s)): ${details}`);
}

// Collects the actual graph geometry bound by SankeyEngine.render() to the
// rendered path elements. This avoids reparsing SVG path strings and keeps
// the audit aligned with the graph that produced the visible candidate.
export function collectCandidateInterfaceGeometry(page, datasetKey, language) {
  return page.evaluate(({ key, requestedLanguage }) => {
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');
    const sourceDataset = window.DATASETS?.find((item) => item.key === key);
    const i18n = window.SANKEY_I18N;
    const normalizedLanguage = i18n?.normalizeLanguage
      ? i18n.normalizeLanguage(requestedLanguage)
      : requestedLanguage || 'en';
    const dataset = normalizedLanguage && normalizedLanguage !== 'en'
      ? i18n?.localizeDataset?.(sourceDataset, normalizedLanguage)
      : sourceDataset;
    const auditConfig = dataset?.render?.interfaceAudit;
    const mode =
      auditConfig && typeof auditConfig === 'object'
        ? auditConfig.mode
        : typeof auditConfig === 'string'
          ? auditConfig
          : 'warning';
    const number = (value, fallback = 0) => {
      const numeric = typeof value === 'string' ? Number.parseFloat(value) : Number(value);
      return Number.isFinite(numeric) ? numeric : fallback;
    };
    const nodeById = new Map(
      Array.from(svg.querySelectorAll('.sankey-node[data-node]')).map((element) => {
        const datum = element.__data__ || {};
        const id = element.getAttribute('data-node');
        const x0 = number(datum.x0, element.x?.baseVal?.value);
        const y0 = number(datum.y0, element.y?.baseVal?.value);
        const x1 = number(datum.x1, x0 + number(element.width?.baseVal?.value));
        const y1 = number(datum.y1, y0 + number(element.height?.baseVal?.value));
        return [id, { id, x0, x1, y0, y1 }];
      })
    );

    const colourProbe = document.createElement('canvas').getContext('2d');
    const normalizeColour = (value) => {
      if (!value || value === 'none' || !colourProbe) return null;
      colourProbe.fillStyle = '#000000';
      try {
        colourProbe.fillStyle = value;
      } catch {
        return null;
      }
      const normalized = colourProbe.fillStyle;
      const match = String(normalized).match(/^#([0-9a-f]{6})$/i);
      if (match) return [0, 2, 4].map((offset) => parseInt(match[1].slice(offset, offset + 2), 16));
      const rgb = String(normalized).match(/^rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)/i);
      return rgb ? rgb.slice(1, 4).map(Number) : null;
    };
    const backgroundFill = svg.querySelector(':scope > rect')?.getAttribute('fill') || '#ffffff';
    const background = normalizeColour(backgroundFill) || [255, 255, 255];
    const colourDiff = (left, right) =>
      left && right ? Math.max(...left.map((channel, index) => Math.abs(channel - right[index]))) : Infinity;
    const paintColours = (paint) => {
      if (!paint || paint === 'none') return [];
      const urlMatch = paint.match(/url\(["']?#([^"')]+)["']?\)/);
      if (!urlMatch) return [normalizeColour(paint)].filter(Boolean);
      const gradient = svg.querySelector(`[id="${CSS.escape(urlMatch[1])}"]`);
      return gradient
        ? Array.from(gradient.querySelectorAll('stop'))
            .filter((stop) => number(getComputedStyle(stop).stopOpacity, 1) > 0)
            .map((stop) => normalizeColour(getComputedStyle(stop).stopColor))
            .filter(Boolean)
        : [];
    };
    const isVisiblePath = (element) => {
      const style = getComputedStyle(element);
      if (style.display === 'none' || style.visibility === 'hidden' || number(style.opacity, 1) <= 0) return false;
      const fillVisible = style.fill !== 'none' && number(style.fillOpacity, 1) > 0;
      const strokeVisible = style.stroke !== 'none' && number(style.strokeOpacity, 1) > 0 && number(style.strokeWidth) > 0;
      const colours = [
        ...(fillVisible ? paintColours(style.fill) : []),
        ...(strokeVisible ? paintColours(style.stroke) : []),
      ];
      return colours.some((colour) => colourDiff(colour, background) > 2);
    };

    const links = [];
    Array.from(svg.querySelectorAll('path.sankey-link')).forEach((element, index) => {
      const datum = element.__data__;
      if (!datum || !datum.source || !datum.target || !isVisiblePath(element)) return;
      const source = nodeById.get(element.getAttribute('data-source'));
      const target = nodeById.get(element.getAttribute('data-target'));
      if (!source || !target) return;
      const raw = datum.raw || {};
      const curve = raw.curve || {};
      const x0 = curve.x0 != null ? number(curve.x0) : source.x1;
      const x1 = curve.x1 != null ? number(curve.x1) : target.x0;
      const c1x = curve.c1x != null ? number(curve.c1x) : (x0 + x1) / 2;
      const c2x = curve.c2x != null ? number(curve.c2x) : (x0 + x1) / 2;
      const y0 = number(datum.y0);
      const y1 = number(datum.y1);
      const c1y = curve.c1y != null ? number(curve.c1y) : y0;
      const c2y = curve.c2y != null ? number(curve.c2y) : y1;
      const style = getComputedStyle(element);
      const fillVisible = style.fill !== 'none' && number(style.fillOpacity, 1) > 0;
      const strokeVisible = style.stroke !== 'none' && number(style.strokeOpacity, 1) > 0 && number(style.strokeWidth) > 0;
      const pathKind = fillVisible && !strokeVisible ? 'ribbon' : strokeVisible && !fillVisible ? 'stroke' : 'mixed';
      const sourceWidth = number(datum.sourceWidth, number(style.strokeWidth, datum.width));
      const targetWidth = number(datum.targetWidth, number(style.strokeWidth, datum.width));
      const link = `${source.id}->${target.id}#${index}`;
      const endpoint = (role, node, x, center, width, controlX, controlY, otherWidth) => {
        const leftDelta = x - node.x0;
        const rightDelta = x - node.x1;
        const face = Math.abs(leftDelta) <= Math.abs(rightDelta) ? 'left' : 'right';
        const nodeEdgeX = face === 'left' ? node.x0 : node.x1;
        const tangentDeltaY = role === 'source' ? controlY - center : center - controlY;
        return {
          link,
          role,
          node: node.id,
          face,
          nodeEdgeX,
          endpointX: x,
          edgeDelta: x - nodeEdgeX,
          center,
          width,
          interval: { top: center - width / 2, bottom: center + width / 2 },
          control: { x: controlX, y: controlY },
          tangentDeltaX: role === 'source' ? controlX - x : x - controlX,
          tangentDeltaY,
          pathKind,
          requiresRibbon: Math.abs(width - otherWidth) > 0.01,
          explicitEndpoint: role === 'source' ? curve.x0 != null : curve.x1 != null,
        };
      };
      links.push({
        id: link,
        source: source.id,
        target: target.id,
        pathKind,
        d: element.getAttribute('d') || '',
        sourceWidth,
        targetWidth,
        sourceEndpoint: endpoint('source', source, x0, y0, sourceWidth, c1x, c1y, targetWidth),
        targetEndpoint: endpoint('target', target, x1, y1, targetWidth, c2x, c2y, sourceWidth),
      });
    });

    const interfaceMap = new Map();
    for (const link of links) {
      for (const endpoint of [link.sourceEndpoint, link.targetEndpoint]) {
        const id = `${endpoint.node}:${endpoint.face}`;
        if (!interfaceMap.has(id)) {
          const node = nodeById.get(endpoint.node);
          interfaceMap.set(id, {
            id,
            node: endpoint.node,
            face: endpoint.face,
            nodeEdgeX: endpoint.nodeEdgeX,
            nodeBox: { left: node.x0, right: node.x1, top: node.y0, bottom: node.y1 },
            links: [],
          });
        }
        interfaceMap.get(id).links.push(endpoint);
      }
    }
    return {
      dataset: key,
      language: normalizedLanguage,
      mode,
      canvas: {
        width: number(svg.getAttribute('width'), svg.viewBox?.baseVal?.width),
        height: number(svg.getAttribute('height'), svg.viewBox?.baseVal?.height),
      },
      background: { css: backgroundFill, rgb: background },
      nodes: Array.from(nodeById.values()),
      links,
      interfaces: Array.from(interfaceMap.values()).sort((a, b) => a.node.localeCompare(b.node) || a.face.localeCompare(b.face)),
    };
  }, { key: datasetKey, requestedLanguage: language });
}

// Generates a compact visual review sheet in a fresh Playwright page. Each
// row shows the same node-face crop from the reference and candidate and
// overlays their measured occupancy boundaries. The JSON remains the SSOT;
// this PNG is deliberately a quick human-review surface.
export async function writeInterfaceContactSheet(page, {
  report,
  referenceUrl,
  candidateUrl,
  outputPath,
}) {
  const rowHeight = 132;
  const width = 1080;
  const height = 52 + Math.max(1, report.interfaces.length) * rowHeight;
  await page.setViewportSize({ width, height: Math.min(height, 16000) });
  await page.setContent('<!doctype html><html><body style="margin:0;background:#fff"><canvas></canvas></body></html>');
  await page.evaluate(async ({ report, referenceUrl, candidateUrl, width, height, rowHeight }) => {
    const canvas = document.querySelector('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = '#17202a';
    ctx.fillText(`G12 interface audit — ${report.status}; candidate ${report.candidateStatus}; reference ${report.referenceStatus} (${report.mode}/${report.enforcementStatus})`, 18, 30);
    ctx.font = '13px sans-serif';
    ctx.fillStyle = '#5f6b76';
    ctx.fillText('reference', 210, 48);
    ctx.fillText('candidate', 730, 48);
    const load = (url) => new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
    const [reference, candidate] = await Promise.all([load(referenceUrl), load(candidateUrl)]);
    const panelX = [130, 650];
    const panelWidth = 410;
    const panelHeight = 100;
    const drawPanel = (image, item, x, y, intervals, colour) => {
      const allIntervals = [...(item.candidateUnion || []), ...(intervals || [])];
      const minTop = Math.min(item.nodeBox.top, ...allIntervals.map((interval) => interval.top));
      const maxBottom = Math.max(item.nodeBox.bottom, ...allIntervals.map((interval) => interval.bottom));
      const sourceY = Math.max(0, minTop - 8);
      const sourceHeight = Math.max(1, Math.min(image.height - sourceY, maxBottom - minTop + 16));
      const sourceX = Math.max(0, item.nodeEdgeX - (item.face === 'left' ? 58 : 22));
      const sourceWidth = Math.min(image.width - sourceX, 80);
      ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, panelWidth, panelHeight);
      const scaleX = panelWidth / sourceWidth;
      const scaleY = panelHeight / sourceHeight;
      const edgeX = x + (item.nodeEdgeX - sourceX) * scaleX;
      ctx.strokeStyle = '#00a3ff';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(edgeX, y);
      ctx.lineTo(edgeX, y + panelHeight);
      ctx.stroke();
      ctx.strokeStyle = colour;
      ctx.lineWidth = 2;
      (intervals || []).forEach((interval) => {
        for (const boundary of [interval.top, interval.bottom]) {
          const boundaryY = y + (boundary - sourceY) * scaleY;
          ctx.beginPath();
          ctx.moveTo(x, boundaryY);
          ctx.lineTo(x + panelWidth, boundaryY);
          ctx.stroke();
        }
      });
      ctx.strokeStyle = '#c8cdd2';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, panelWidth, panelHeight);
    };
    report.interfaces.forEach((item, index) => {
      const y = 56 + index * rowHeight;
      const statusColour = item.result === 'pass' ? '#14863d' : item.result === 'fail' ? '#d11b2d' : '#a66a00';
      ctx.fillStyle = statusColour;
      ctx.fillRect(0, y, 7, rowHeight - 4);
      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#17202a';
      ctx.fillText(item.id, 16, y + 24);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = statusColour;
      ctx.fillText(item.result, 16, y + 44);
      ctx.fillStyle = '#5f6b76';
      ctx.fillText(`${item.perLinkIntervals.length} link(s)`, 16, y + 64);
      drawPanel(reference, item, panelX[0], y + 8, item.reference?.intervals || [], '#ff3355');
      drawPanel(candidate, item, panelX[1], y + 8, item.candidateRaster?.intervals || item.candidateUnion, '#14863d');
    });
  }, { report, referenceUrl, candidateUrl, width, height, rowHeight });
  await page.locator('canvas').screenshot({ path: outputPath });
}
