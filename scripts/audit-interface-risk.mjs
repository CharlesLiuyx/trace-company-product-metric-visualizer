#!/usr/bin/env node
// Non-rendering inventory for Sankey interface risks. This deliberately does
// not decide fidelity: reference images may contain intentional gaps,
// overlaps, or overflow. It only identifies fixed-layout interfaces that
// deserve an occupancy comparison in the d3 fidelity loop.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadBrowserData } from './lib/browser-data-loader.mjs';
import { loadClassicScripts } from './lib/vm-browser.mjs';
import { DATASET_MANIFEST_SCRIPT, registeredDatasetScripts } from './script-sources.mjs';

const __filename = fileURLToPath(import.meta.url);
const EPSILON = 1e-6;
const DISCLAIMER =
  'Inventory only: width-sum differences, multi-link nodes, and incomplete endpoint fields are risk signals, not fidelity failures.';

function finite(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function rounded(value) {
  return finite(value) ? Math.round(value * 1e6) / 1e6 : null;
}

function endpointId(endpoint) {
  if (endpoint && typeof endpoint === 'object') return endpoint.id;
  return endpoint;
}

function hasNumericField(object, field) {
  return Object.hasOwn(object, field) && finite(object[field]);
}

function linkName(link, index) {
  return `${endpointId(link.source)}→${endpointId(link.target)}#${index}`;
}

function sideRecord(nodeId, side, nodeHeight, links) {
  const widthField = side === 'source' ? 'sourceWidth' : 'targetWidth';
  const effectiveWidths = links.map(({ link }) =>
    finite(link[widthField]) ? link[widthField] : finite(link.width) ? link.width : null
  );
  const measuredLinkCount = effectiveWidths.filter(finite).length;
  const complete = measuredLinkCount === links.length;
  const widthSum = rounded(effectiveWidths.filter(finite).reduce((sum, width) => sum + width, 0));
  const difference = complete ? rounded(widthSum - nodeHeight) : null;

  return {
    nodeId,
    side,
    nodeHeight: rounded(nodeHeight),
    linkCount: links.length,
    measuredLinkCount,
    complete,
    widthSum,
    difference,
    uncovered: complete ? rounded(nodeHeight - widthSum) : null,
    links: links.map(({ link, index }) => linkName(link, index)),
  };
}

export function auditDatasetInterfaceRisk(dataset, { script = null } = {}) {
  const fixedNodes = dataset?.layout?.nodes;
  const links = Array.isArray(dataset?.links) ? dataset.links : [];
  if (!fixedNodes || typeof fixedNodes !== 'object') {
    return {
      key: dataset?.key || '(unknown)',
      script,
      fixedLayout: false,
      fixedNodeCount: 0,
      manualWidthLinkCount: 0,
      interfaces: [],
      mismatchInterfaces: [],
      multiLinkNodes: [],
      highRiskLinks: [],
      flagged: false,
    };
  }

  const incident = new Map(
    Object.keys(fixedNodes).map((nodeId) => [nodeId, { incoming: [], outgoing: [] }])
  );
  const normalizedLinks = links.map((link, index) => ({
    link,
    index,
    sourceId: endpointId(link.source),
    targetId: endpointId(link.target),
  }));

  for (const entry of normalizedLinks) {
    incident.get(entry.sourceId)?.outgoing.push(entry);
    incident.get(entry.targetId)?.incoming.push(entry);
  }

  const interfaces = [];
  const multiLinkNodes = [];
  for (const [nodeId, sides] of incident) {
    const nodeHeight = fixedNodes[nodeId]?.height;
    if (finite(nodeHeight)) {
      if (sides.outgoing.length) interfaces.push(sideRecord(nodeId, 'source', nodeHeight, sides.outgoing));
      if (sides.incoming.length) interfaces.push(sideRecord(nodeId, 'target', nodeHeight, sides.incoming));
    }
    if (sides.incoming.length > 1 || sides.outgoing.length > 1) {
      multiLinkNodes.push({
        nodeId,
        incomingCount: sides.incoming.length,
        outgoingCount: sides.outgoing.length,
        multiInput: sides.incoming.length > 1,
        multiOutput: sides.outgoing.length > 1,
      });
    }
  }

  const manualWidthLinks = normalizedLinks.filter(({ link }) =>
    ['width', 'sourceWidth', 'targetWidth'].some((field) => hasNumericField(link, field))
  );
  const highRiskLinks = [];
  for (const entry of manualWidthLinks) {
    const missingFields = [];
    if (incident.has(entry.sourceId)) {
      if (!hasNumericField(entry.link, 'sourceWidth')) missingFields.push('sourceWidth');
      if (!hasNumericField(entry.link, 'y0')) missingFields.push('y0');
    }
    if (incident.has(entry.targetId)) {
      if (!hasNumericField(entry.link, 'targetWidth')) missingFields.push('targetWidth');
      if (!hasNumericField(entry.link, 'y1')) missingFields.push('y1');
    }
    if (missingFields.length) {
      highRiskLinks.push({
        link: linkName(entry.link, entry.index),
        source: entry.sourceId,
        target: entry.targetId,
        missingFields,
      });
    }
  }

  const mismatchInterfaces = interfaces.filter(
    (item) => item.complete && Math.abs(item.difference) > EPSILON
  );
  const flagged = Boolean(
    mismatchInterfaces.length || multiLinkNodes.length || highRiskLinks.length
  );

  return {
    key: dataset.key,
    script,
    fixedLayout: true,
    fixedNodeCount: Object.keys(fixedNodes).length,
    manualWidthLinkCount: manualWidthLinks.length,
    interfaces,
    mismatchInterfaces,
    multiLinkNodes,
    highRiskLinks,
    flagged,
  };
}

export function buildInterfaceRiskReport(datasets, { sourceByKey = new Map() } = {}) {
  const results = datasets
    .map((dataset) => auditDatasetInterfaceRisk(dataset, { script: sourceByKey.get(dataset.key) || null }))
    .sort((a, b) => {
      const byMismatch = b.mismatchInterfaces.length - a.mismatchInterfaces.length;
      if (byMismatch) return byMismatch;
      const byIncomplete = b.highRiskLinks.length - a.highRiskLinks.length;
      if (byIncomplete) return byIncomplete;
      const byMulti = b.multiLinkNodes.length - a.multiLinkNodes.length;
      return byMulti || a.key.localeCompare(b.key);
    });

  const summary = {
    datasetCount: results.length,
    fixedLayoutDatasetCount: results.filter((item) => item.fixedLayout).length,
    flaggedDatasetCount: results.filter((item) => item.flagged).length,
    fixedNodeCount: results.reduce((sum, item) => sum + item.fixedNodeCount, 0),
    manualWidthLinkCount: results.reduce((sum, item) => sum + item.manualWidthLinkCount, 0),
    mismatchInterfaceCount: results.reduce((sum, item) => sum + item.mismatchInterfaces.length, 0),
    multiLinkNodeCount: results.reduce((sum, item) => sum + item.multiLinkNodes.length, 0),
    highRiskLinkCount: results.reduce((sum, item) => sum + item.highRiskLinks.length, 0),
  };

  return { schemaVersion: 1, disclaimer: DISCLAIMER, summary, datasets: results };
}

function detailLines(dataset) {
  const lines = [];
  if (dataset.mismatchInterfaces.length) {
    lines.push('  Width-sum differences (sum - node.height):');
    for (const item of dataset.mismatchInterfaces) {
      lines.push(
        `    ${item.nodeId}/${item.side}: height=${item.nodeHeight}, sum=${item.widthSum}, difference=${item.difference}, links=${item.linkCount}`
      );
    }
  }
  const incompleteInterfaces = dataset.interfaces.filter((item) => !item.complete);
  if (incompleteInterfaces.length) {
    lines.push('  Interfaces without a complete effective-width sum:');
    for (const item of incompleteInterfaces) {
      lines.push(
        `    ${item.nodeId}/${item.side}: measured=${item.measuredLinkCount}/${item.linkCount}`
      );
    }
  }
  if (dataset.multiLinkNodes.length) {
    lines.push('  Multi-link nodes:');
    for (const item of dataset.multiLinkNodes) {
      lines.push(`    ${item.nodeId}: incoming=${item.incomingCount}, outgoing=${item.outgoingCount}`);
    }
  }
  if (dataset.highRiskLinks.length) {
    lines.push('  Manual-width links with incomplete endpoint geometry:');
    for (const item of dataset.highRiskLinks) {
      lines.push(`    ${item.link}: missing ${item.missingFields.join(', ')}`);
    }
  }
  if (!lines.length) lines.push('  No static interface-risk findings.');
  return lines;
}

export function formatInterfaceRiskReport(report, { detailed = false } = {}) {
  const { summary } = report;
  const lines = [
    'Sankey interface risk inventory',
    DISCLAIMER,
    '',
    `Datasets: ${summary.datasetCount} scanned, ${summary.fixedLayoutDatasetCount} fixed-layout, ${summary.flaggedDatasetCount} flagged`,
    `Inventory: ${summary.fixedNodeCount} fixed nodes, ${summary.manualWidthLinkCount} manual-width links`,
    `Signals: ${summary.mismatchInterfaceCount} width-sum differences, ${summary.multiLinkNodeCount} multi-link nodes, ${summary.highRiskLinkCount} incomplete endpoint-geometry links`,
  ];

  const flagged = report.datasets.filter((item) => item.flagged);
  if (flagged.length) {
    lines.push('', 'Flagged datasets (risk-ranked):');
    for (const item of flagged) {
      lines.push(
        `  ${item.key}: differences=${item.mismatchInterfaces.length}, multi=${item.multiLinkNodes.length}, incomplete=${item.highRiskLinks.length}`
      );
      if (detailed) lines.push(...detailLines(item));
    }
  } else {
    lines.push('', 'No static interface-risk findings.');
  }

  if (!detailed && report.datasets.length > 1) {
    lines.push('', 'Run with one or more dataset keys for details; add --json for the complete machine-readable inventory.');
  }
  return `${lines.join('\n')}\n`;
}

export function parseArgs(args) {
  const normalized = args.filter((arg) => arg !== '--');
  const json = normalized.includes('--json');
  const help = normalized.includes('--help') || normalized.includes('-h');
  const unknownOptions = normalized.filter(
    (arg) => arg.startsWith('-') && !['--json', '--help', '-h'].includes(arg)
  );
  if (unknownOptions.length) throw new Error(`Unknown option(s): ${unknownOptions.join(', ')}`);
  return {
    json,
    help,
    keys: normalized.filter((arg) => !arg.startsWith('-')),
  };
}

function usage() {
  return 'Usage: pnpm audit:interface-risk -- [dataset-key ...] [--json]';
}

export function main(args = process.argv.slice(2)) {
  const options = parseArgs(args);
  if (options.help) {
    process.stdout.write(`${usage()}\n`);
    return;
  }

  const datasetScripts = registeredDatasetScripts();
  const manifest = loadClassicScripts([DATASET_MANIFEST_SCRIPT]).__DATASET_MANIFEST__?.datasets || [];
  const sourceByKey = new Map(manifest.map((entry) => [entry.key, entry.src]));
  const { datasets } = loadBrowserData({ datasetScripts });
  const datasetByKey = new Map(datasets.map((dataset) => [dataset.key, dataset]));
  const unknownKeys = options.keys.filter((key) => !datasetByKey.has(key));
  if (unknownKeys.length) throw new Error(`Unknown registered dataset key(s): ${unknownKeys.join(', ')}`);
  const selected = options.keys.length ? options.keys.map((key) => datasetByKey.get(key)) : datasets;
  const report = buildInterfaceRiskReport(selected, { sourceByKey });
  process.stdout.write(
    options.json
      ? `${JSON.stringify(report, null, 2)}\n`
      : formatInterfaceRiskReport(report, { detailed: options.keys.length > 0 })
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  try {
    main();
  } catch (error) {
    console.error(`interface risk audit failed: ${error.message}`);
    process.exitCode = 2;
  }
}
