import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const { SankeyEngine } = loadClassicScripts(['src/sankey-engine.js']);
const {
  deepMerge,
  formatValue,
  trimFixed,
  percentOf,
  nodeHoverDenominator,
  nodeMagnitude,
  linkValueMagnitude,
  groupAdjacentLinks,
  distinctAdjacentNodeCount,
  nodeHoverLinkPercent,
  linkHoverPercent,
  autoSide,
  buildFixedGraph,
  taperedLinkPath,
  linkCenterlinePoint,
  referenceCanvasDefaults,
  canvasSize,
  buildLabelSpecs,
  decollideSideLabels,
} = SankeyEngine.helpers;

// vm-created objects have a different realm's prototypes, which trips
// deepStrictEqual's prototype check; a JSON round-trip normalizes them
const plain = (value) => JSON.parse(JSON.stringify(value));

test('deepMerge merges nested objects without mutating the base', () => {
  const base = { a: 1, nested: { x: 1, y: 2 }, list: [1, 2] };
  const out = deepMerge(base, { nested: { y: 3 }, list: [9] });
  assert.equal(out.a, 1);
  assert.deepEqual(plain(out.nested), { x: 1, y: 3 });
  assert.deepEqual(plain(out.list), [9], 'arrays replace, not merge');
  assert.deepEqual(base.nested, { x: 1, y: 2 }, 'base untouched');
});

test('deepMerge returns base when extra is falsy', () => {
  const base = { a: 1 };
  assert.equal(deepMerge(base, null), base);
});

test('formatValue renders currency, unit, and decimals from meta', () => {
  const meta = { currency: '€', unit: 'B', decimals: 1 };
  assert.equal(formatValue({ value: 6, type: 'source' }, meta), '€6B');
  assert.equal(formatValue({ value: 6.04, type: 'source' }, meta), '€6.0B');
});

test('formatValue parenthesizes costs and honors valueText/dv overrides', () => {
  assert.equal(formatValue({ value: 20.5, type: 'cost' }, { unit: 'B' }), '($20.5B)');
  assert.equal(formatValue({ value: 1, valueText: 'n/a' }, {}), 'n/a');
  assert.equal(formatValue({ value: 99, dv: 3, type: 'profit' }, { unit: 'B' }), '$3B', 'dv (authored display value) wins over layout value');
  assert.equal(formatValue({ value: -4.5, type: 'profit' }, { unit: 'B' }), '$4.5B', 'absolute value is rendered');
});

test('trimFixed strips trailing zeros', () => {
  assert.equal(trimFixed(1.5, 2), '1.5');
  assert.equal(trimFixed(2, 2), '2');
  assert.equal(trimFixed(1.25, 2), '1.25');
});

test('node hover denominator prefers the authored value over the graph flow sum', () => {
  assert.equal(nodeHoverDenominator({ dv: 1005, value: 1006 }), 1005);
  assert.equal(nodeHoverDenominator({ value: 130 }), 130);
  assert.equal(nodeHoverDenominator(null), 0);
  assert.equal(nodeMagnitude({ dv: -40, value: 99 }), 40, 'ratios use authored magnitudes');
  assert.equal(nodeMagnitude({ dv: 0, value: 99 }), 0, 'authored zero is not replaced by d3 flow');
  assert.equal(percentOf(1, 0, 1), '');
});

test('node hover applies singleton and split rules independently on each side', () => {
  const revenue = { id: 'revenue', dv: 1123, value: 1123 };
  const operatingProfit = { id: 'operating_profit', dv: 118, value: 118 };
  const netProfit = { id: 'net_profit', dv: 130, value: 130 };
  const tax = { id: 'tax', dv: 4, value: 4 };
  const incoming = { source: revenue, target: operatingProfit, value: 118, raw: { value: 118 } };
  const retained = { source: operatingProfit, target: netProfit, value: 114, raw: { value: 114 } };
  const taxFlow = { source: operatingProfit, target: tax, value: 4, raw: { value: 4 } };
  operatingProfit.targetLinks = [incoming];
  operatingProfit.sourceLinks = [retained, taxFlow];

  const incomingCount = distinctAdjacentNodeCount(operatingProfit, operatingProfit.targetLinks);
  const outgoingCount = distinctAdjacentNodeCount(operatingProfit, operatingProfit.sourceLinks);
  assert.equal(incomingCount, 1);
  assert.equal(outgoingCount, 2);
  assert.equal(nodeHoverLinkPercent(incoming, operatingProfit, incomingCount), '10.5%');
  assert.equal(nodeHoverLinkPercent(retained, operatingProfit, outgoingCount), '96.6%');
  assert.equal(nodeHoverLinkPercent(taxFlow, operatingProfit, outgoingCount), '3.4%');
  assert.equal(nodeHoverLinkPercent(taxFlow, tax, 1), '3.4%', 'a terminal singleton is current / upstream');
});

test('node hover shows each source as a share of a multi-source bar', () => {
  const operatingProfit = { id: 'operating_profit', dv: 118 };
  const otherIncome = { id: 'other_income', dv: 16 };
  const netProfit = { id: 'net_profit', dv: 130 };
  const retained = { source: operatingProfit, target: netProfit, value: 114, raw: { value: 114 } };
  const other = { source: otherIncome, target: netProfit, value: 16, raw: { value: 16 } };
  const incoming = [retained, other];
  const count = distinctAdjacentNodeCount(netProfit, incoming);

  assert.equal(count, 2);
  assert.equal(nodeHoverLinkPercent(retained, netProfit, count), '87.7%');
  assert.equal(nodeHoverLinkPercent(other, netProfit, count), '12.3%');
});

test('node hover counts distinct opposite bars rather than duplicate links', () => {
  const source = { id: 'source', dv: 100 };
  const hovered = { id: 'hovered', dv: 50 };
  const links = [20, 30].map((value) => ({
    source,
    target: hovered,
    value,
    raw: { value },
  }));

  const groups = groupAdjacentLinks(hovered, links);
  assert.equal(distinctAdjacentNodeCount(hovered, links), 1);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].links.reduce((sum, link) => sum + linkValueMagnitude(link), 0), 50);
  assert.equal(nodeHoverLinkPercent(links[0], hovered, 1), '50%');
});

test('node hover can resolve a singleton hidden-bridge expansion against its visible target', () => {
  const hovered = { id: 'revenue', dv: 100 };
  const hidden = { id: 'hidden', dv: 80 };
  const visibleTarget = { id: 'profit', dv: 40 };
  const expandedLink = { source: hidden, target: visibleTarget, value: 40, raw: { value: 40 } };

  assert.equal(
    nodeHoverLinkPercent(expandedLink, hovered, 1, 1, visibleTarget),
    '250%',
    'the visible target remains the singleton denominator after bridge expansion'
  );
});

test('direct link hover is smaller endpoint / larger endpoint', () => {
  const source = { id: 'source', dv: 118 };
  const target = { id: 'target', dv: 130 };
  const link = { source, target, value: 114, raw: { value: 114, percentText: '96.6%' } };

  assert.equal(linkHoverPercent(link), '90.8%', 'link value and authored percent do not override endpoints');
  assert.equal(linkValueMagnitude({ value: -4, raw: {} }), 4);
  assert.equal(linkHoverPercent({ source: { dv: -40 }, target: { dv: 100 } }), '40%');
  assert.equal(linkHoverPercent({ source: { dv: 50 }, target: { dv: 50 } }), '100%');
  assert.equal(linkHoverPercent({ source: { dv: 0 }, target: { dv: 100 } }), '0%');
  assert.equal(linkHoverPercent({ source: { dv: 0 }, target: { dv: 0 } }), '');
});

test('contribution links use their amount over the receiving bar on every hover surface', () => {
  const operatingProfit = { id: 'operating_profit', dv: 2.5 };
  const otherIncome = { id: 'other_income', dv: 0.6 };
  const netProfit = { id: 'net_profit', dv: 2.5 };
  const contribution = {
    source: operatingProfit,
    target: netProfit,
    value: 1.9,
    raw: { value: 1.9, hoverPercentMode: 'contribution' },
  };
  const otherContribution = {
    source: otherIncome,
    target: netProfit,
    value: 0.6,
    raw: { value: 0.6, hoverPercentMode: 'contribution' },
  };

  assert.equal(nodeHoverLinkPercent(contribution, operatingProfit, 1), '76%', 'source node hover keeps the result-bar denominator');
  assert.equal(nodeHoverLinkPercent(contribution, netProfit, 1), '76%', 'target node hover keeps the result-bar denominator');
  assert.equal(nodeHoverLinkPercent(otherContribution, otherIncome, 1), '24%', 'a one-to-one source contribution is not 100%');
  assert.equal(nodeHoverLinkPercent(otherContribution, netProfit, 1), '24%');
  assert.equal(linkHoverPercent(contribution), '76%', 'direct hover normalizes contribution to target');
  assert.equal(linkHoverPercent(otherContribution), '24%');
});

test('autoSide picks label side from column and type', () => {
  assert.equal(autoSide({ col: 0 }, 3), 'left');
  assert.equal(autoSide({ col: 2 }, 3), 'right');
  assert.equal(autoSide({ col: 1, type: 'cost' }, 3), 'below');
  assert.equal(autoSide({ col: 1, type: 'profit' }, 3), 'above');
});

test('referenceCanvasDefaults uses meta.referenceImage dimensions', () => {
  assert.deepEqual(
    plain(referenceCanvasDefaults({ meta: { referenceImage: { src: 'x.png', width: 2667, height: 1500 } } })),
    { width: 2667, height: 1500 }
  );
});

test('referenceCanvasDefaults is empty without a usable reference image', () => {
  assert.deepEqual(plain(referenceCanvasDefaults({})), {});
  assert.deepEqual(plain(referenceCanvasDefaults({ meta: { referenceImage: 'x.png' } })), {});
  assert.deepEqual(plain(referenceCanvasDefaults({ meta: { referenceImage: { src: 'x.png', width: 0, height: 10 } } })), {});
});

test('canvas precedence: render size beats reference image beats DEFAULTS', () => {
  const data = { meta: { referenceImage: { src: 'x.png', width: 2667, height: 1500 } }, render: { width: 3000 } };
  const cfg = deepMerge(
    deepMerge(deepMerge(SankeyEngine.DEFAULTS, referenceCanvasDefaults(data)), data.render),
    null
  );
  assert.equal(cfg.width, 3000, 'explicit render.width wins');
  assert.equal(cfg.height, 1500, 'reference image height fills the gap');
});

test('canvasSize resolves the effective canvas under the render precedence', () => {
  const data = { meta: { referenceImage: { src: 'x.png', width: 2667, height: 1500 } }, render: { width: 3000 } };
  assert.deepEqual(plain(canvasSize(data)), { width: 3000, height: 1500 });
  assert.deepEqual(
    plain(canvasSize({ meta: { referenceImage: { src: 'x.png', width: 2667, height: 1500 } } })),
    { width: 2667, height: 1500 },
    'reference image dimensions win over DEFAULTS'
  );
  assert.deepEqual(
    plain(canvasSize({})),
    { width: SankeyEngine.DEFAULTS.width, height: SankeyEngine.DEFAULTS.height },
    'DEFAULTS canvas is the final fallback'
  );
});

function fixtureGraph({ layout, links: linkSpecs }) {
  // mirrors render()'s preprocessing: indexed node copies and raw link refs
  const nodes = [
    { id: 'revenue', value: 100, col: 0 },
    { id: 'gross', value: 60, col: 1 },
    { id: 'cost', value: 40, col: 1, type: 'cost' },
  ].map((n, i) => ({ ...n, index: i }));
  const rawLinks = linkSpecs || [
    { source: 'revenue', target: 'gross', value: 60 },
    { source: 'revenue', target: 'cost', value: 40 },
  ];
  const links = rawLinks.map((raw) => ({ value: raw.value, raw }));
  const cfg = { margin: { left: 100, top: 50 }, nodeWidth: 80 };
  return buildFixedGraph(nodes, links, { layout }, cfg);
}

test('buildFixedGraph derives the value scale from the tightest fixed node', () => {
  const graph = fixtureGraph({
    layout: { nodes: { revenue: { x: 100, y: 50, height: 200 } } },
  });
  const revenue = graph.nodes.find((n) => n.id === 'revenue');
  // scale = 200px / 100 value = 2 px per unit
  assert.equal(revenue.y1 - revenue.y0, 200);
  const gross = graph.nodes.find((n) => n.id === 'gross');
  assert.equal(gross.y1 - gross.y0, 120, 'unfixed node height = value * derived scale');
  const grossLink = graph.links.find((l) => l.raw.target === 'gross');
  assert.equal(grossLink.width, 120, 'link width = value * scale');
});

test('buildFixedGraph honors an explicit layout.scale', () => {
  const graph = fixtureGraph({ layout: { scale: 1.5, nodes: {} } });
  const gross = graph.nodes.find((n) => n.id === 'gross');
  assert.equal(gross.y1 - gross.y0, 90);
});

test('buildFixedGraph stacks link endpoints in order down each node face', () => {
  const graph = fixtureGraph({
    layout: { nodes: { revenue: { x: 100, y: 50, height: 200 } } },
  });
  const [toGross, toCost] = graph.links;
  // revenue's source face: first link centered at half its width, second below
  assert.equal(toGross.y0, 50 + 120 / 2);
  assert.equal(toCost.y0, 50 + 120 + 80 / 2);
});

test('buildFixedGraph honors sourceOrder and explicit y overrides', () => {
  const graph = fixtureGraph({
    layout: { nodes: { revenue: { x: 100, y: 50, height: 200 } } },
    links: [
      { source: 'revenue', target: 'gross', value: 60, sourceOrder: 2 },
      { source: 'revenue', target: 'cost', value: 40, sourceOrder: 1, y1: 777 },
    ],
  });
  const toCost = graph.links.find((l) => l.raw.target === 'cost');
  const toGross = graph.links.find((l) => l.raw.target === 'gross');
  assert.ok(toCost.y0 < toGross.y0, 'sourceOrder reorders the stacking');
  assert.equal(toCost.y1, 777, 'raw y1 override wins');
});

test('buildFixedGraph stacks endpoint-specific widths independently', () => {
  const graph = fixtureGraph({
    layout: {
      nodes: {
        revenue: { x: 100, y: 50, height: 200 },
        gross: { x: 500, y: 300, height: 120 },
        cost: { x: 500, y: 500, height: 80 },
      },
    },
    links: [
      { source: 'revenue', target: 'gross', value: 60, width: 120, sourceWidth: 125, targetWidth: 122 },
      { source: 'revenue', target: 'cost', value: 40, width: 80, sourceWidth: 75, targetWidth: 84 },
    ],
  });
  const [toGross, toCost] = graph.links;
  assert.equal(toGross.y0, 50 + 125 / 2);
  assert.equal(toCost.y0, 50 + 125 + 75 / 2);
  assert.equal(toGross.y1, 300 + 122 / 2);
  assert.equal(toCost.y1, 500 + 84 / 2);
  assert.equal(toGross.width, 120, 'authored width remains available as the semantic fallback');
  assert.equal(toGross.sourceWidth, 125);
  assert.equal(toGross.targetWidth, 122);
});

test('taperedLinkPath builds closed source/target-width boundaries', () => {
  const path = taperedLinkPath({
    source: { x1: 100 },
    target: { x0: 300 },
    y0: 80,
    y1: 160,
    sourceWidth: 40,
    targetWidth: 20,
    raw: {},
  });
  assert.equal(
    path,
    'M100,60C200,60,200,150,300,150L300,170C200,170,200,100,100,100Z'
  );
});

test('linkCenterlinePoint anchors tapered ribbons at the cubic centerline midpoint', () => {
  const link = {
    source: { x1: 100 },
    target: { x0: 300 },
    y0: 80,
    y1: 160,
    sourceWidth: 40,
    targetWidth: 20,
    raw: {},
  };
  assert.deepEqual(plain(linkCenterlinePoint(link)), [200, 120]);
});

test('linkCenterlinePoint follows authored custom curve geometry', () => {
  const link = {
    source: { x1: 100 },
    target: { x0: 400 },
    y0: 100,
    y1: 220,
    raw: {
      curve: { x0: 120, x1: 380, c1x: 160, c2x: 320, c1y: 80, c2y: 260 },
    },
  };
  assert.deepEqual(plain(linkCenterlinePoint(link)), [242.5, 167.5]);
});

test('buildFixedGraph falls back to column-derived x and cfg margins', () => {
  const graph = fixtureGraph({ layout: { nodes: { gross: { height: 60 } } } });
  const revenue = graph.nodes.find((n) => n.id === 'revenue');
  assert.equal(revenue.x0, 100, 'margin.left for col 0');
  assert.equal(revenue.x1 - revenue.x0, 80, 'cfg.nodeWidth fallback');
  const gross = graph.nodes.find((n) => n.id === 'gross');
  assert.equal(gross.x0, 100 + 426, 'default column stride');
});

/* ---- label passes (buildLabelSpecs + decollideSideLabels) ---- */

const CFG = SankeyEngine.DEFAULTS;
const META = { currency: '$', unit: 'B', decimals: 1 };

function labelNode(overrides = {}) {
  return {
    id: 'gross',
    label: 'Gross profit',
    value: 60,
    type: 'profit',
    col: 1,
    x0: 500,
    x1: 580,
    y0: 200,
    y1: 400,
    ...overrides,
  };
}

test('buildLabelSpecs builds auto side labels with name/value/notes lines', () => {
  const n = labelNode({ notes: ['70% margin'] });
  const { specs } = buildLabelSpecs({ nodes: [n] }, {}, CFG, META, 3);
  assert.equal(specs.length, 1);
  const spec = specs[0];
  assert.equal(spec.side, 'above', 'profit in a middle column defaults to above');
  assert.equal(spec.anchor, 'middle');
  assert.deepEqual(plain(spec.lines.map((l) => l.t)), ['Gross profit', '$60B', '70% margin']);
  const blockH = CFG.type.name + CFG.type.value + CFG.type.note + CFG.type.lineGap * 2;
  assert.equal(spec.blockH, blockH);
  assert.equal(spec.top, n.y0 - 16 - blockH, 'above block sits fully above the node top');
});

test('buildLabelSpecs expands $value and honors lineGap/labelYOffset in custom blocks', () => {
  const n = labelNode();
  const data = {
    layout: {
      labels: {
        gross: { blocks: [{ x: 10, top: 100, anchor: 'end', lineGap: 4, lines: [{ text: 'Gross' }, { text: '$value' }] }] },
      },
    },
  };
  const cfg = deepMerge(CFG, { labelYOffset: 7 });
  const { specs } = buildLabelSpecs({ nodes: [n] }, data, cfg, META, 3);
  assert.equal(specs.length, 1);
  const spec = specs[0];
  assert.equal(spec.side, 'custom');
  assert.equal(spec.anchor, 'end');
  assert.equal(spec.top, 107, 'block.top + labelYOffset');
  assert.equal(spec.lineGap, 4);
  assert.deepEqual(plain(spec.lines.map((l) => l.t)), ['Gross', '$60B']);
});

test('buildLabelSpecs splits split-left labels into name and value blocks', () => {
  const n = labelNode({ labelSide: 'split-left' });
  const { specs } = buildLabelSpecs({ nodes: [n] }, {}, CFG, META, 3);
  assert.deepEqual(plain(specs.map((s) => s.side)), ['split-name', 'split-value']);
  assert.equal(specs[0].x, n.x0 - 42, 'name block hangs left of the node');
  assert.equal(specs[1].top, n.y0 - 35 - specs[1].blockH, 'value block sits above the node');
});

test('buildLabelSpecs collects custom icon layouts', () => {
  const n = labelNode({ icons: ['server'] });
  const data = { layout: { labels: { gross: { blocks: [{ lines: ['Gross'] }], icons: { x: 12, y: 34 } } } } };
  const { iconLayout } = buildLabelSpecs({ nodes: [n] }, data, CFG, META, 3);
  assert.equal(iconLayout.length, 1);
  assert.equal(iconLayout[0].x, 12);
  assert.equal(iconLayout[0].n, n);
});

test('decollideSideLabels pushes overlapping same-side labels down', () => {
  const specs = [
    { side: 'left', top: 100, blockH: 50 },
    { side: 'left', top: 120, blockH: 30 },
    { side: 'right', top: 110, blockH: 40 },
  ];
  decollideSideLabels(specs);
  assert.equal(specs[0].top, 100);
  assert.equal(specs[1].top, 100 + 50 + 11, 'second left label lands below the first plus the 11px min gap');
  assert.equal(specs[2].top, 110, 'right side is independent');
});
