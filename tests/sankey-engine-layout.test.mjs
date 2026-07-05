import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const { SankeyEngine } = loadClassicScripts(['src/sankey-engine.js']);
const {
  deepMerge,
  formatValue,
  trimFixed,
  autoSide,
  buildFixedGraph,
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
