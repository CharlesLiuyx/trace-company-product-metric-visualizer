import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const { SankeyEngine } = loadClassicScripts(['src/sankey-engine.js']);
const {
  deepMerge,
  formatValue,
  hoverShare,
  groupAdjacentLinks,
  distinctAdjacentNodeCount,
  autoSide,
  prepareGraphInput,
  buildFixedGraph,
  taperedLinkPath,
  linkCenterlinePoint,
  referenceCanvasDefaults,
  canvasSize,
  assertSafeSvgFragments,
  buildLabelSpecs,
  decollideSideLabels,
} = SankeyEngine.helpers;

// vm-created objects have a different realm's prototypes, which trips
// deepStrictEqual's prototype check; a JSON round-trip normalizes them
const plain = (value) => JSON.parse(JSON.stringify(value));
const oppositeEnd = (link, hoveredNode) => (
  link.source === hoveredNode ? link.target : link.source
);
const nodeShare = (link, hoveredNode, distinctOppositeCount, oppositeNode = oppositeEnd(link, hoveredNode)) => (
  hoverShare.forNode({ link, hoveredNode, oppositeNode, distinctOppositeCount })
);
const linkShare = (link, decimals = 1) => hoverShare.forLink(link, decimals);

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

test('renderer accepts only the reviewed passive annotationsSvg vocabulary', () => {
  assert.doesNotThrow(() => assertSafeSvgFragments(`
    <svg><defs>
      <linearGradient id="lg"><stop offset="0"/></linearGradient>
      <radialGradient id="rg"><stop offset="1"/></radialGradient>
      <clipPath id="clip"><rect width="10" height="10"/></clipPath>
    </defs><!-- passive provenance note --><g clip-path="url(#clip)">
      <circle/><ellipse/><line/><path/><polygon/><rect fill="url(#lg)"/>
      <text>Safe<tspan> text</tspan></text>
    </g></svg>
  `));

  for (const markup of [
    '<foreignObject><div>unsafe</div></foreignObject>',
    '<style>text{display:none}</style>',
    '<script>throw 1</script>',
    '<use href="#logo"/>',
    '<animate attributeName="x"/>',
    '<image href="data:image/png;base64,x"/>',
    '<g onload="throw 1"/>',
    '<g o&#x6e;load="throw 1"/>',
    '<rect fill="url(https://example.com/a.svg#x)"/>',
    '<text href="java&#x73;cript:throw 1">unsafe</text>',
  ]) {
    assert.throws(() => assertSafeSvgFragments(markup), /Sankey SVG annotations/);
  }
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

test('hover share formatting strips trailing zeros and rejects a zero denominator', () => {
  assert.equal(hoverShare.format(1.5, 1, 2), '150%');
  assert.equal(hoverShare.format(1.25, 1, 2), '125%');
  assert.equal(hoverShare.format(1, 0, 1), '');
});

test('Hover Share regression prefers authored endpoint magnitudes', () => {
  assert.equal(hoverShare.nodeAmount({ dv: -40, value: 99 }), 40);
  assert.equal(hoverShare.nodeAmount({ dv: 0, value: 99 }), 0, 'authored zero is not replaced by d3 flow');
  assert.equal(hoverShare.nodeAmount({ value: -130 }), 130);
  assert.equal(hoverShare.nodeAmount(null), 0);
  assert.equal(hoverShare.linkAmount({ value: -4, raw: {} }), 4);
  assert.equal(hoverShare.linkAmount({ value: 99, raw: { value: -7 } }), 7);
});

test('node hover uses endpoint ratios for singleton and split relationships', () => {
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
  assert.equal(nodeShare(incoming, operatingProfit, incomingCount), '10.5%');
  assert.equal(nodeShare(retained, operatingProfit, outgoingCount), '90.8%');
  assert.equal(nodeShare(taxFlow, operatingProfit, outgoingCount), '3.4%');
  assert.equal(nodeShare(taxFlow, tax, 1), '3.4%', 'a terminal singleton is current / upstream');
});

test('node hover uses endpoint ratios for every source of a multi-source bar', () => {
  const operatingProfit = { id: 'operating_profit', dv: 118 };
  const otherIncome = { id: 'other_income', dv: 16 };
  const netProfit = { id: 'net_profit', dv: 130 };
  const retained = { source: operatingProfit, target: netProfit, value: 114, raw: { value: 114 } };
  const other = { source: otherIncome, target: netProfit, value: 16, raw: { value: 16 } };
  const incoming = [retained, other];
  const count = distinctAdjacentNodeCount(netProfit, incoming);

  assert.equal(count, 2);
  assert.equal(nodeShare(retained, netProfit, count), '90.8%');
  assert.equal(nodeShare(other, netProfit, count), '12.3%');
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
  assert.equal(groups[0].links.reduce((sum, link) => sum + hoverShare.linkAmount(link), 0), 50);
  assert.equal(nodeShare(links[0], hovered, 1), '50%');
});

test('node hover requires a real opposite endpoint and at least one relationship', () => {
  const hovered = { id: 'revenue', dv: 100 };
  const link = { source: hovered, target: null, value: 40, raw: { value: 40 } };
  assert.equal(nodeShare(link, hovered, 0, null), '');
});

test('direct link hover is smaller endpoint / larger endpoint', () => {
  const source = { id: 'source', dv: 118 };
  const target = { id: 'target', dv: 130 };
  const link = { source, target, value: 114, raw: { value: 114 } };

  assert.equal(linkShare(link), '90.8%', 'link value does not override endpoint amounts');
  assert.equal(linkShare({ source: { dv: -40 }, target: { dv: 100 } }), '40%');
  assert.equal(linkShare({ source: { dv: 50 }, target: { dv: 50 } }), '100%');
  assert.equal(linkShare({ source: { dv: 0 }, target: { dv: 100 } }), '0%');
  assert.equal(linkShare({ source: { dv: 0 }, target: { dv: 0 } }), '');
});

test('node and link hover use the same endpoint-ratio formula', () => {
  const operatingProfit = { id: 'operating_profit', dv: 2.5 };
  const otherIncome = { id: 'other_income', dv: 0.6 };
  const netProfit = { id: 'net_profit', dv: 2.5 };
  const retained = {
    source: operatingProfit,
    target: netProfit,
    value: 1.9,
    raw: { value: 1.9 },
  };
  const other = {
    source: otherIncome,
    target: netProfit,
    value: 0.6,
    raw: { value: 0.6 },
  };

  assert.equal(nodeShare(retained, operatingProfit, 1), '100%');
  assert.equal(nodeShare(retained, netProfit, 2), '100%');
  assert.equal(nodeShare(other, otherIncome, 1), '24%');
  assert.equal(nodeShare(other, netProfit, 2), '24%');
  assert.equal(linkShare(retained), '100%', 'direct hover compares endpoint bars, not link amount');
  assert.equal(linkShare(other), '24%');
});

test('node shares use smaller endpoint over larger endpoint regardless of direction', () => {
  const operatingProfit = { id: 'operating_profit', dv: 0.008 };
  const other = { id: 'other', dv: -0.034 };
  const bridge = {
    source: operatingProfit,
    target: other,
    value: 0.034,
    raw: { value: 0.034 },
  };

  assert.equal(nodeShare(bridge, operatingProfit, 1), '23.5%');
  assert.equal(nodeShare(bridge, other, 1), '23.5%');
  assert.equal(linkShare(bridge), '23.5%');
});

test('the same relationship has one share across node and link hover', () => {
  const operatingProfit = { id: 'operating_profit', dv: 9 };
  const netProfit = { id: 'net_profit', dv: 47 };
  const resultFlow = {
    source: operatingProfit,
    target: netProfit,
    value: 9,
    raw: { value: 9 },
  };

  assert.equal(nodeShare(resultFlow, operatingProfit, 2), '19.1%');
  assert.equal(nodeShare(resultFlow, netProfit, 2), '19.1%');
  assert.equal(linkShare(resultFlow, 1), '19.1%');
});

test('small residual flows follow the same generic surface rules', () => {
  const operatingProfit = { id: 'operating_profit', dv: 0.3 };
  const netProfit = { id: 'net_profit', dv: 0.01 };
  const residual = {
    source: operatingProfit,
    target: netProfit,
    value: 0.01,
    raw: { value: 0.01 },
  };

  assert.equal(nodeShare(residual, operatingProfit, 3), '3.3%');
  assert.equal(nodeShare(residual, netProfit, 1), '3.3%');
  assert.equal(linkShare(residual, 1), '3.3%');
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

test('Tooltip centerline regression anchors tapered ribbons at the cubic midpoint', () => {
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

test('link-owned routes participate in geometry without becoming semantic nodes', () => {
  const data = {
    nodes: [
      { id: 'revenue', value: 100, col: 0 },
      { id: 'expense', value: 40, col: 2, type: 'cost' },
    ],
    nonNodeMetrics: [
      { id: 'cost_bridge', representation: 'flow', value: 40, type: 'cost' },
    ],
    links: [
      { source: 'revenue', targetRoute: 'cost_bridge', value: 40 },
      { sourceRoute: 'cost_bridge', target: 'expense', value: 40 },
    ],
    layout: {
      scale: 2,
      nodes: {
        revenue: { x: 100, y: 50, width: 80, height: 200 },
        expense: { x: 500, y: 200, width: 80, height: 80 },
      },
      routes: {
        cost_bridge: { x: 300, y: 200, width: 0, height: 80 },
      },
    },
  };
  const prepared = prepareGraphInput(data);
  assert.deepEqual(
    plain(prepared.nodes.filter((node) => node.routeOnly).map((node) => node.id)),
    ['cost_bridge']
  );
  assert.equal(data.nodes.length, 2, 'route expansion does not mutate adapter nodes');

  const graph = buildFixedGraph(
    prepared.nodes,
    prepared.links,
    data,
    { margin: { left: 0, top: 0 }, nodeWidth: 80 }
  );
  const route = graph.nodes.find((node) => node.id === 'cost_bridge');
  assert.equal(route.routeOnly, true);
  assert.equal(route.x0, 300);
  assert.equal(route.x1, 300);
  assert.equal(graph.links[0].target, route);
  assert.equal(graph.links[1].source, route);
  const labels = buildLabelSpecs(
    graph,
    {
      layout: {
        labels: {
          cost_bridge: {
            blocks: [{ x: 300, top: 120, lines: [{ text: '$value' }] }],
          },
        },
      },
    },
    SankeyEngine.DEFAULTS,
    { currency: '$', unit: 'B', decimals: 1 },
    3
  );
  const routeLabels = labels.specs.filter((spec) => spec.n.id === 'cost_bridge');
  assert.equal(routeLabels.length, 1, 'a flow route may own a label without owning a node face');
  assert.equal(routeLabels[0].lines[0].t, '($40B)');
});

test('link-owned routes reject ambiguous or missing endpoints', () => {
  assert.throws(
    () => prepareGraphInput({
      nodes: [{ id: 'revenue', value: 1 }],
      links: [{ source: 'revenue', sourceRoute: 'bridge', target: 'revenue', value: 1 }],
      layout: { nodes: { revenue: {} }, routes: { bridge: { x: 1, y: 1 } } },
    }),
    /exactly one of source or sourceRoute/
  );
  assert.throws(
    () => prepareGraphInput({
      nodes: [{ id: 'revenue', value: 1 }],
      links: [{ sourceRoute: 'missing', target: 'revenue', value: 1 }],
      layout: { nodes: { revenue: {} }, routes: {} },
    }),
    /unknown sourceRoute/
  );
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
        gross: { blocks: [{ x: 10, top: 100, anchor: 'end', lineGap: 4, lines: [{ text: 'Gross', textLength: 120 }, { text: '$value' }] }] },
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
  assert.equal(spec.lines[0].textLength, 120, 'custom line width reaches the render pass');
  assert.equal(spec.lines[0].lengthAdjust, 'spacingAndGlyphs');
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
