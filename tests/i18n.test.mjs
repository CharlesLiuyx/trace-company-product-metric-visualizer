import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const { SANKEY_I18N } = loadClassicScripts([
  'src/icons.js',
  'src/sankey-engine.js',
  'src/i18n-dictionaries.js',
  'src/i18n.js',
]);
const zh = (value) => SANKEY_I18N.text(value, 'zh');

test('normalizeLanguage accepts exact codes, defaults everything else', () => {
  assert.equal(SANKEY_I18N.normalizeLanguage('zh'), 'zh');
  // exact-match by design: regional variants fall back to the default and
  // the outward html lang (zh -> zh-CN) is htmlLang()'s job
  assert.equal(SANKEY_I18N.normalizeLanguage('zh-CN'), SANKEY_I18N.defaultLanguage);
  assert.equal(SANKEY_I18N.normalizeLanguage('fr'), SANKEY_I18N.defaultLanguage);
  assert.equal(SANKEY_I18N.normalizeLanguage(undefined), SANKEY_I18N.defaultLanguage);
  assert.equal(SANKEY_I18N.htmlLang('zh'), 'zh-CN');
});

test('default language returns text unchanged', () => {
  assert.equal(SANKEY_I18N.text('Revenue', 'en'), 'Revenue');
});

test('exact dictionary terms translate to zh', () => {
  assert.equal(zh('Revenue'), '收入');
  assert.notEqual(zh('Gross profit'), 'Gross profit');
  assert.notEqual(zh('Cost of revenue'), 'Cost of revenue');
});

test('identity-mapped brand terms stay unchanged and count as preserved', () => {
  assert.equal(zh('YouTube'), 'YouTube');
  assert.equal(SANKEY_I18N.isPreservedTerm('YouTube', 'zh'), true);
  assert.equal(SANKEY_I18N.isPreservedTerm('Revenue', 'zh'), false, 'translated terms are not preserved');
});

test('percent change phrases translate with sign and period intact', () => {
  const up = zh('+22% Y/Y');
  assert.ok(up.includes('22%'), `expected 22% in "${up}"`);
  assert.ok(!/Y\/Y/.test(up), `expected Y/Y to be translated in "${up}"`);
  const down = zh('-5% Y/Y');
  assert.ok(down.includes('5%'), `expected 5% in "${down}"`);
});

test('period strings translate quarter and fiscal year', () => {
  const q = zh('Q1 FY26');
  assert.ok(/26/.test(q), `expected fiscal year in "${q}"`);
  assert.notEqual(q, 'Q1 FY26', 'period should change in zh');
});

test('ending-date phrases translate month names', () => {
  const ending = zh('Ending Mar. 2026');
  assert.ok(ending.includes('2026'), `expected year in "${ending}"`);
  assert.ok(/3|三/.test(ending), `expected month in "${ending}"`);
});

test('margin phrases keep their percentages', () => {
  const margin = zh('62% operating margin');
  assert.ok(margin.includes('62%'), `expected 62% in "${margin}"`);
  assert.notEqual(margin, '62% operating margin');
});

test('localizeDataset localizes name/meta/nodes and applies overlays last', () => {
  const dataset = {
    key: 'test-q1-fy26',
    name: 'TestCo · Q1 FY26',
    meta: { title: 'TestCo', period: 'Q1 FY26' },
    nodes: [
      { id: 'revenue', label: 'Revenue', value: 10, notes: ['+10% Y/Y'] },
      { id: 'gross', label: 'Gross profit', value: 6 },
    ],
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 1 },
    ],
    links: [{ source: 'revenue', target: 'gross', value: 6 }],
    i18n: {
      zh: {
        nodes: { gross: { label: '覆盖毛利' } },
        nonNodeMetrics: { interest: { label: '覆盖利息' } },
      },
    },
  };
  const localized = SANKEY_I18N.localizeDataset(dataset, 'zh');
  assert.equal(localized.nodes.find((n) => n.id === 'revenue').label, '收入', 'dictionary path');
  assert.equal(localized.nodes.find((n) => n.id === 'gross').label, '覆盖毛利', 'explicit overlay wins');
  assert.equal(localized.nonNodeMetrics[0].label, '覆盖利息', 'non-node metric overlay wins');
  assert.equal(dataset.nodes[0].label, 'Revenue', 'source dataset is not mutated');
  assert.equal(localized.links[0].value, 6, 'values never change');
});

test('localizeDataset returns the source object untouched for en', () => {
  const dataset = { key: 'k', name: 'n', nodes: [], links: [] };
  assert.equal(SANKEY_I18N.localizeDataset(dataset, 'en'), dataset);
});

test('dataset i18n overlays reject semantic and unknown paths by default', () => {
  const base = {
    key: 'deny-by-default',
    name: 'Test',
    meta: { title: 'Test', currency: '$', unit: 'B' },
    nodes: [{ id: 'revenue', label: 'Revenue', value: 10, valueText: '$10B' }],
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 1, valueText: '$1B' },
    ],
    links: [],
  };
  for (const overlay of [
    { meta: { currency: '€' } },
    { nodes: { revenue: { value: 999 } } },
    { nodes: { revenue: { valueText: '$999T' } } },
    { nonNodeMetrics: { other: { valueText: '$999T' } } },
    { layout: { nodes: { revenue: { height: 1 } } } },
    { comparisonScale: { anchorNodeId: 'gross_profit' } },
    { name: null },
    { name: {} },
    { meta: { title: null } },
    { meta: { titleSize: null } },
    { meta: { hidePeriodStamp: null } },
    { nodes: { revenue: { label: null } } },
    { nodes: { revenue: { label: { bad: 'x' } } } },
    { nodes: { revenue: { notes: null } } },
    { nonNodeMetrics: { other: { label: ['其他'] } } },
  ]) {
    assert.throws(
      () => SANKEY_I18N.localizeDataset({ ...base, i18n: { zh: overlay } }, 'zh'),
      /not display-only/
    );
  }
});

test('dataset i18n cannot replace renderer value bindings or forge literal annotation amounts', () => {
  const base = {
    key: 'visible-amount-binding',
    name: 'Test',
    meta: { title: 'Test', currency: '$', unit: 'B' },
    nodes: [{ id: 'revenue', label: 'Revenue', value: 10 }],
    links: [],
    layout: {
      labels: {
        revenue: {
          blocks: [{
            x: 100,
            top: 100,
            lines: [
              { text: 'Revenue', weight: 700 },
              { text: '$value', weight: 400 },
            ],
          }],
        },
      },
    },
    annotationsSvg: '<g><text>$10B</text></g>',
  };
  const maliciousOverlays = [
    { nodes: { revenue: { notes: ['+999% Y/Y'] } } },
    {
      layout: {
        labels: {
          revenue: {
            blocks: [{
              lines: [
                { text: '收入', weight: 700 },
                { text: '$999T', weight: 400 },
              ],
            }],
          },
        },
      },
    },
    { annotationsSvg: '<g><text>$999T</text></g>' },
    { annotationsSvg: '<g><text>€10B</text></g>' },
    { annotationsSvg: '<g><text>999T</text></g>' },
  ];
  for (const overlay of maliciousOverlays) {
    assert.throws(
      () => SANKEY_I18N.localizeDataset({ ...base, i18n: { zh: overlay } }, 'zh'),
      /visibleAmountBinding.*not display-only/
    );
  }
});

test('dataset identity/meta copy preserves periods and cannot smuggle word-form money', () => {
  const base = {
    key: 'visible-meta-binding',
    name: 'Test · Q1 FY26',
    meta: {
      title: 'Test',
      subtitle: 'Revenue overview',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
    },
    nodes: [],
    links: [],
  };
  const maliciousOverlays = [
    { name: '测试 · Q4 FY99' },
    { meta: { title: 'Revenue was 999 billion dollars' } },
    { meta: { subtitle: 'Revenue was 999 trillion dollars' } },
    { meta: { period: 'Q4 FY99' } },
    { meta: { periodNote: 'Ending Apr. 2027' } },
    {
      rasterAnnotations: [{
        key: 'logo',
        href: 'data:image/png;base64,forged',
        x: 0,
        y: 0,
        width: 999,
        height: 999,
      }],
    },
  ];
  for (const overlay of maliciousOverlays) {
    assert.throws(
      () => SANKEY_I18N.localizeDataset({ ...base, i18n: { zh: overlay } }, 'zh'),
      /not display-only/
    );
  }

  assert.doesNotThrow(() => SANKEY_I18N.localizeDataset({
    ...base,
    i18n: {
      zh: {
        name: '测试 · 2026 财年第一季度',
        meta: {
          title: '测试',
          subtitle: '收入概览',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
      },
    },
  }, 'zh'));
});

test('dataset meta and layout-label projection rejects hidden/off-canvas localized copy', () => {
  const base = {
    key: 'typed-layout-overlay',
    name: 'Test · Q1 FY26',
    meta: {
      title: 'Test Q1 FY26',
      period: 'Q1 FY26',
      titleSize: 100,
      titleTextLength: 1200,
      periodX: 900,
      hidePeriodStamp: false,
    },
    render: {
      width: 2667,
      height: 1500,
      palette: { source: { node: '#000000', label: '#155077' } },
    },
    nodes: [{ id: 'revenue', label: 'Revenue', value: 10 }],
    links: [],
    layout: {
      labels: {
        revenue: {
          blocks: [{
            x: 900,
            top: 400,
            anchor: 'middle',
            lineGap: 8,
            lines: [
              { text: 'Revenue', size: 40, weight: 800, color: '#000000' },
              { text: '$value', size: 40, weight: 400, color: '#000000' },
            ],
          }],
        },
      },
    },
  };
  const maliciousOverlays = [
    { meta: { titleSize: 0 } },
    { meta: { titleTextLength: 0 } },
    { meta: { periodX: 1e99 } },
    { meta: { hidePeriodStamp: true } },
    {
      layout: {
        labels: {
          revenue: {
            blocks: [{
              x: 1e99,
              top: 1e99,
              anchor: 'middle',
              lineGap: 8,
              lines: [
                { text: '收入', size: 40, weight: 800, color: '#000000' },
                { text: '$value', size: 40, weight: 400, color: '#000000' },
              ],
            }],
          },
        },
      },
    },
    {
      layout: {
        labels: {
          revenue: {
            blocks: [{
              x: 900,
              top: 400,
              anchor: 'middle',
              lineGap: 8,
              lines: [
                { text: '收入', size: 0, weight: 800, color: 'transparent' },
                { text: '$value', size: 0, weight: 400, color: 'transparent' },
              ],
            }],
          },
        },
      },
    },
    {
      layout: {
        labels: {
          revenue: {
            blocks: [{
              x: 900,
              top: 400,
              anchor: 'middle',
              lineGap: 8,
              injected: true,
              lines: [
                { text: '收入', size: 40, weight: 800, color: '#000000' },
                { text: '$value', size: 40, weight: 400, color: '#000000' },
              ],
            }],
          },
        },
      },
    },
  ];
  for (const overlay of maliciousOverlays) {
    assert.throws(
      () => SANKEY_I18N.localizeDataset({ ...base, i18n: { zh: overlay } }, 'zh'),
      /not display-only/
    );
  }

  const localized = SANKEY_I18N.localizeDataset({
    ...base,
    i18n: {
      zh: {
        meta: {
          title: '测试 2026 财年第一季度',
          period: '2026 财年第一季度',
          titleSize: 90,
          titleTextLength: 900,
          periodX: 850,
          hidePeriodStamp: false,
        },
        layout: {
          labels: {
            revenue: {
              blocks: [{
                x: 900,
                top: 410,
                anchor: 'middle',
                lineGap: 8,
                lines: [
                  { text: '收入', size: 38, weight: 800, color: '#155077' },
                  { text: '$value', size: 38, weight: 400, color: '#155077' },
                ],
              }],
            },
          },
        },
      },
    },
  }, 'zh');
  assert.equal(localized.layout.labels.revenue.blocks[0].lines[0].color, '#155077');
  assert.equal(localized.layout.labels.revenue.blocks[0].lines[1].color, '#155077');
});

test('real dataset layout overlays cannot use the effective canvas background as text', () => {
  const keys = [
    'coca-cola-q1-fy26',
    'reddit-q4-fy25',
    'circle-q4-fy25',
  ];
  const context = loadClassicScripts([
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n-dictionaries.js',
    'src/i18n.js',
    ...keys.map((key) => `data/datasets/${key}.js`),
  ]);
  for (const [key, nodeId] of [
    ['coca-cola-q1-fy26', 'other_opex'],
    ['reddit-q4-fy25', 'ga'],
    ['circle-q4-fy25', 'marketing_other'],
  ]) {
    const source = context.DATASETS.find((dataset) => dataset.key === key);
    const malicious = context.SANKEY_I18N.clone(source);
    malicious.i18n.zh.layout.labels[nodeId].blocks[0].lines[0].color =
      malicious.render.background;
    assert.throws(
      () => context.SANKEY_I18N.localizeDataset(malicious, 'zh'),
      new RegExp(`layout\\.labels\\.${nodeId}.*color.*not display-only`),
      key
    );
  }

  const shorthandBackground = {
    key: 'shorthand-background',
    name: 'Test',
    meta: { title: 'Test' },
    render: {
      background: '#fff',
      palette: { source: { node: '#000', label: '#ffffff' } },
    },
    nodes: [{ id: 'revenue', label: 'Revenue', value: 1 }],
    links: [],
    layout: {
      labels: {
        revenue: {
          blocks: [{
            x: 100,
            top: 100,
            lines: [{ text: 'Revenue', size: 40, color: '#000' }],
          }],
        },
      },
    },
    i18n: {
      zh: {
        layout: {
          labels: {
            revenue: {
              blocks: [{
                x: 100,
                top: 100,
                lines: [{ text: '收入', size: 40, color: '#ffffff' }],
              }],
            },
          },
        },
      },
    },
  };
  assert.throws(
    () => context.SANKEY_I18N.localizeDataset(shorthandBackground, 'zh'),
    /layout\.labels\.revenue.*color.*not display-only/
  );
});

test('real localized layout patches preserve source geometry and cannot anchor text off-canvas', () => {
  const keys = [
    'novo-nordisk-q4-fy25',
    'adobe-q2-fy26',
    'coca-cola-q1-fy26',
    'uber-q1-fy26',
  ];
  const context = loadClassicScripts([
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n-dictionaries.js',
    'src/i18n.js',
    ...keys.map((key) => `data/datasets/${key}.js`),
  ]);

  const novo = context.DATASETS.find(
    (dataset) => dataset.key === 'novo-nordisk-q4-fy25'
  );
  const localizedNovo = context.SANKEY_I18N.localizeDataset(novo, 'zh');
  const sourceNovoBlock = novo.layout.labels.net_profit.blocks[0];
  const localizedNovoBlock = localizedNovo.layout.labels.net_profit.blocks[0];
  assert.equal(localizedNovoBlock.x, sourceNovoBlock.x);
  assert.equal(localizedNovoBlock.top, sourceNovoBlock.top);
  assert.equal(localizedNovoBlock.anchor, sourceNovoBlock.anchor);
  assert.equal(localizedNovoBlock.lineGap, sourceNovoBlock.lineGap);

  for (const [key, nodeId] of [
    ['adobe-q2-fy26', 'net_profit'],
    ['coca-cola-q1-fy26', 'net_profit'],
  ]) {
    const source = context.DATASETS.find((dataset) => dataset.key === key);
    const malicious = context.SANKEY_I18N.clone(source);
    const block = malicious.i18n.zh.layout.labels[nodeId].blocks[0];
    block.x = context.SankeyEngine.helpers.canvasSize(malicious).width;
    block.anchor = 'start';
    assert.throws(
      () => context.SANKEY_I18N.localizeDataset(malicious, 'zh'),
      new RegExp(`layout\\.labels\\.${nodeId}.*visibleOrigin.*not display-only`),
      key
    );
  }

  const uber = context.DATASETS.find((dataset) => dataset.key === 'uber-q1-fy26');
  const verticalAttack = context.SANKEY_I18N.clone(uber);
  verticalAttack.i18n.zh.layout.labels.da.blocks[0].top += 6;
  assert.throws(
    () => context.SANKEY_I18N.localizeDataset(verticalAttack, 'zh'),
    /layout\.labels\.da.*visibleBounds.*not display-only/
  );
});

test('real annotation overlays cannot combine x and text-anchor to leave the canvas', () => {
  const context = loadClassicScripts([
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n-dictionaries.js',
    'src/i18n.js',
    'data/datasets/disney-q2-fy26-by-segment.js',
  ]);
  const source = context.DATASETS.find(
    (dataset) => dataset.key === 'disney-q2-fy26-by-segment'
  );
  const malicious = context.SANKEY_I18N.clone(source);
  malicious.i18n.zh.annotationsSvg = malicious.i18n.zh.annotationsSvg.replace(
    '<text x="2560" y="476"',
    '<text x="2667" y="476" text-anchor="start"'
  );
  assert.throws(
    () => context.SANKEY_I18N.localizeDataset(malicious, 'zh'),
    /annotationsSvg\.textLayout\.visibleBounds.*not display-only/
  );
});

test('annotation overlays enforce the corpus-derived passive SVG allowlist', () => {
  const base = {
    key: 'safe-annotation-overlay',
    name: 'Test',
    meta: { title: 'Test' },
    nodes: [],
    links: [],
    annotationsSvg: '<g><defs><linearGradient id="safe"><stop offset="0"/></linearGradient></defs><rect fill="url(#safe)"/><text>Test</text></g>',
  };
  const maliciousMarkup = [
    '<foreignObject><div>Test</div></foreignObject>',
    '<style>text { display:none }</style><text>Test</text>',
    '<script>throw 1</script><text>Test</text>',
    '<use href="#safe"/>',
    '<animate attributeName="x"/>',
    '<g onload="throw 1"><text>Test</text></g>',
    '<g o&#x6e;load="throw 1"><text>Test</text></g>',
    '<rect fill="url(https://example.com/a.svg#x)"/><text>Test</text>',
    '<text href="javascript:throw 1">Test</text>',
  ];
  for (const annotationsSvg of maliciousMarkup) {
    assert.throws(
      () => SANKEY_I18N.localizeDataset({
        ...base,
        i18n: { zh: { annotationsSvg } },
      }, 'zh'),
      /safeMarkup.*not display-only/
    );
  }

  for (const annotationsSvg of [
    '<g><defs><linearGradient id="safe"><stop offset="0"/></linearGradient></defs><rect fill="url(#safe)"/><rect class="sankey-node" width="9999"/><text>测试</text></g>',
    '<g transform="scale(100)"><defs><linearGradient id="safe"><stop offset="0"/></linearGradient></defs><rect fill="url(#safe)"/><text>测试</text></g>',
    '<g opacity="0"><defs><linearGradient id="safe"><stop offset="0"/></linearGradient></defs><rect fill="url(#safe)"/><text>测试</text></g>',
    '<g><defs><linearGradient id="safe"><stop offset="0"/></linearGradient></defs><rect fill="url(#safe)"/><text font-size="9999">测试</text></g>',
  ]) {
    assert.throws(
      () => SANKEY_I18N.localizeDataset({
        ...base,
        i18n: { zh: { annotationsSvg } },
      }, 'zh'),
      /annotationsSvg\.(?:structure|textLayout\.[\w-]+).*not display-only/
    );
  }
});

test('annotation projection preserves every direct/tspan text slot and only typed text layout', () => {
  const source = [
    '<g transform="translate(10 20)">',
    '<text x="10" y="20" font-size="24" fill="#000">A',
    '<tspan dx="9" font-weight="700">B</tspan></text>',
    '<text x="30" y="40" textLength="408" lengthAdjust="spacing">Second</text>',
    '</g>',
  ].join('');
  const localized = [
    '<g transform="translate(10 20)">',
    '<text x="12" y="22" font-size="20" fill="#000">甲',
    '<tspan dx="4" font-weight="700">乙</tspan></text>',
    '<text x="30" y="40"></text>',
    '</g>',
  ].join('');
  const projected = SANKEY_I18N.canonicalizeAnnotationText(source, localized, {
    width: 100,
    height: 100,
  });

  assert.match(projected, />甲<tspan dx="4" font-weight="700">乙<\/tspan><\/text>/);
  assert.match(projected, /<text x="12" y="22" font-size="20" fill="#000">/);
  assert.match(projected, /<text x="30" y="40"><\/text>/);
  assert.doesNotMatch(projected, /textLength|lengthAdjust/);
  assert.match(projected, /<g transform="translate\(10 20\)">/);

  assert.throws(
    () => SANKEY_I18N.canonicalizeAnnotationText(
      source,
      localized.replace('transform="translate(10 20)"', 'transform="scale(100)"'),
      { width: 100, height: 100 }
    ),
    /annotationsSvg\.structure.*not display-only/
  );
  assert.throws(
    () => SANKEY_I18N.canonicalizeAnnotationText(
      source,
      localized.replace('font-size="20"', 'font-size="9999"'),
      { width: 100, height: 100 }
    ),
    /annotationsSvg\.textLayout\.font-size.*not display-only/
  );
  for (const hiddenLayout of [
    localized
      .replace('x="12"', 'x="-100"')
      .replace('y="22"', 'y="-100"')
      .replace('font-size="20"', 'font-size=".0001"'),
    localized
      .replace('x="12"', 'x="200"')
      .replace('y="22"', 'y="200"')
      .replace('font-size="20"', 'font-size="256"'),
  ]) {
    assert.throws(
      () => SANKEY_I18N.canonicalizeAnnotationText(
        source,
        hiddenLayout,
        { width: 100, height: 100 }
      ),
      /annotationsSvg\.textLayout\.(?:x|y|font-size).*not display-only/
    );
  }
  assert.throws(
    () => SANKEY_I18N.canonicalizeAnnotationText(
      '<g><text x="10" y="20">A</text></g>',
      '<g><text x="10" y="20" textLength=".0001">甲</text></g>',
      { width: 100, height: 100 }
    ),
    /annotationsSvg\.textLayout\.textlength.*not display-only/
  );
  assert.throws(
    () => SANKEY_I18N.canonicalizeAnnotationText(
      source,
      localized.replace('<tspan dx="4" font-weight="700">乙</tspan>', '乙'),
      { width: 100, height: 100 }
    ),
    /annotationsSvg\.structure.*not display-only/
  );
});

test('annotation projection validates final text geometry and gives tspan minimum authority', () => {
  const attacks = [
    [
      '<text x="95" y="50" font-size="20"><tspan dx="0">Revenue</tspan></text>',
      '<text x="95" y="50" font-size="20"><tspan dx="16">收入</tspan></text>',
    ],
    [
      '<text x="-32" y="50" font-size="20"><tspan dx="20">Revenue</tspan></text>',
      '<text x="-32" y="50" font-size="20"><tspan dx="4">收入</tspan></text>',
    ],
    [
      '<text x="95" y="50" font-size="8">Revenue</text>',
      '<text x="95" y="50" font-size="10">收入</text>',
    ],
    [
      '<text x="50" y="20" font-size="20">Revenue</text>',
      '<text x="50" y="0" font-size="20">收入</text>',
    ],
    [
      '<text x="5" y="50" font-size="20"><tspan>Revenue</tspan></text>',
      '<text x="5" y="50" font-size="20"><tspan text-anchor="end">收入</tspan></text>',
    ],
    [
      '<text x="50" y="50" font-size="20"><tspan y="20">Revenue</tspan></text>',
      '<text x="50" y="50" font-size="20"><tspan y="0">收入</tspan></text>',
    ],
    [
      '<g transform="translate(80 0)"><text x="0" y="50" font-size="20">Revenue</text></g>',
      '<g transform="translate(80 0)"><text x="20" y="50" font-size="20">收入</text></g>',
    ],
    [
      '<g style="transform:translate(90px,0px)"><text x="5" y="50" font-size="20">Revenue</text></g>',
      '<g style="transform:translate(90px,0px)"><text x="15" y="50" font-size="20">收入</text></g>',
    ],
    [
      '<svg x="90" y="0" width="100" height="100"><text x="5" y="50" font-size="20">Revenue</text></svg>',
      '<svg x="90" y="0" width="100" height="100"><text x="15" y="50" font-size="20">收入</text></svg>',
    ],
    [
      '<g transform-origin="50px 50px" transform="scale(2)"><text x="25" y="25" font-size="20">Revenue</text></g>',
      '<g transform-origin="50px 50px" transform="scale(2)"><text x="5" y="25" font-size="20">收入</text></g>',
    ],
    [
      '<g clip-path="url(#narrow)"><text x="5" y="50" font-size="20">Revenue</text></g>',
      '<g clip-path="url(#narrow)"><text x="50" y="50" font-size="20">收入</text></g>',
    ],
    [
      '<g opacity="0"><text x="5" y="50" font-size="20">Revenue</text></g>',
      '<g opacity="0"><text x="50" y="50" font-size="20">收入</text></g>',
    ],
    [
      '<g visibility="hidden"><text x="5" y="50" font-size="20">Revenue</text></g>',
      '<g visibility="hidden"><text x="50" y="50" font-size="20">收入</text></g>',
    ],
    [
      '<g style="fill:#111"><text x="5" y="50" font-size="20">Revenue</text></g>',
      '<g style="fill:#111"><text x="50" y="50" font-size="20">收入</text></g>',
    ],
    [
      '<g class="future-transform"><text x="5" y="50" font-size="20">Revenue</text></g>',
      '<g class="future-transform"><text x="50" y="50" font-size="20">收入</text></g>',
    ],
  ];
  for (const [source, localized] of attacks) {
    assert.throws(
      () => SANKEY_I18N.canonicalizeAnnotationText(
        source,
        localized,
        { width: 100, height: 100 }
      ),
      /annotationsSvg\.textLayout\.(?:dx|y|text-anchor|font-size|visibleBounds).*not display-only/
    );
  }
});

test('annotation projection preserves corpus tspan/empty-slot layouts and Citigroup textLength removal', () => {
  const keys = [
    'amc-q3-fy25',
    'cloudflare-q1-fy26',
    'nike-q4-fy26',
    'zscaler-q3-fy26',
    'citigroup-q1-fy26',
  ];
  const context = loadClassicScripts([
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n-dictionaries.js',
    'src/i18n.js',
    ...keys.map((key) => `data/datasets/${key}.js`),
  ]);
  const localized = Object.fromEntries(keys.map((key) => {
    const dataset = context.DATASETS.find((candidate) => candidate.key === key);
    return [key, context.SANKEY_I18N.localizeDataset(dataset, 'zh')];
  }));

  assert.match(
    localized['amc-q3-fy25'].annotationsSvg,
    /<text x="329\.5" y="914" font-size="39"><\/text>/,
    'an intentionally empty locale text slot stays empty'
  );
  assert.match(
    localized['nike-q4-fy26'].annotationsSvg,
    /中国<tspan fill="#cc0000" font-weight="700"> 同比 \(12%\)<\/tspan>/
  );
  assert.match(
    localized['zscaler-q3-fy26'].annotationsSvg,
    /<tspan font-weight="800">&gt; \$100K<\/tspan><tspan>\s*：4,003，同比 \+19%<\/tspan>/
  );
  assert.doesNotMatch(
    localized['citigroup-q1-fy26'].annotationsSvg,
    /textLength="408"|lengthAdjust="spacing"/,
    'Chinese segment title is not stretched with the English text length'
  );
  assert.match(localized['cloudflare-q1-fy26'].annotationsSvg, /DBNR/);
});

test('visible amount signatures normalize units, periods, rate basis, and word-form money', () => {
  const source = SANKEY_I18N.visibleAmountSignature([
    '($0.1B)',
    '(2pp) Y/Y',
    'Flat Y/Y',
    '$1.394B',
  ]);
  const localized = SANKEY_I18N.visibleAmountSignature([
    '（1 亿美元）',
    '同比（2 个百分点）',
    '同比持平',
    '$1.394B',
  ]);
  assert.equal(JSON.stringify(localized), JSON.stringify(source));

  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['Revenue was 999 billion dollars']),
    SANKEY_I18N.visibleAmountSignature(['Revenue was $999B'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['Q1 FY26', 'Ending Mar. 2026']),
    SANKEY_I18N.visibleAmountSignature(['2026 财年第一季度', '截至 2026 年 3 月'])
  );
  assert.notDeepEqual(
    SANKEY_I18N.visibleAmountSignature(['+10% Y/Y']),
    SANKEY_I18N.visibleAmountSignature(['+10% Q/Q'])
  );
  assert.notDeepEqual(
    SANKEY_I18N.visibleAmountSignature(['62% operating margin']),
    SANKEY_I18N.visibleAmountSignature(['62% of revenue'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['USD 999 billion', '999 billion dollar']),
    SANKEY_I18N.visibleAmountSignature(['$999B', '$999B'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['2 percentage points Y/Y', '35 basis points Q/Q']),
    SANKEY_I18N.visibleAmountSignature(['同比 2 个百分点', '环比 35 个基点'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['Ending Mar. 31, 2026']),
    SANKEY_I18N.visibleAmountSignature(['截至 2026 年 3 月 31 日'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['2026-03-31']),
    SANKEY_I18N.visibleAmountSignature(['截至 2026 年 3 月 31 日'])
  );
  assert.notDeepEqual(
    SANKEY_I18N.visibleAmountSignature(['-$5M']),
    SANKEY_I18N.visibleAmountSignature(['$5M'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['−$5M']),
    SANKEY_I18N.visibleAmountSignature(['-$5M'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['Revenue: $87.1B (+18% Y/Y)']),
    SANKEY_I18N.visibleAmountSignature(['收入：$87.1B 同比 +18%'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['CET1 = Common Equity Tier 1']),
    SANKEY_I18N.visibleAmountSignature(['CET1 = 普通股一级资本'])
  );
  assert.notDeepEqual(
    SANKEY_I18N.visibleAmountSignature(['$999B']),
    SANKEY_I18N.visibleAmountSignature(['收入 ９９９ 亿美元'])
  );
  assert.notDeepEqual(
    SANKEY_I18N.visibleAmountSignature(['$999B']),
    SANKEY_I18N.visibleAmountSignature(['收入 九百九十九 亿美元'])
  );
  assert.deepEqual(
    SANKEY_I18N.visibleAmountSignature(['$999B']),
    SANKEY_I18N.visibleAmountSignature(['收入 九千九百九十亿美元'])
  );
  for (const [negative, positive] of [
    ['- 10%', '+ 10%'],
    ['↓10%', '↑10%'],
    ['10% decrease', '10% increase'],
    ['down 10%', 'up 10%'],
    ['negative 10% margin', 'positive 10% margin'],
    ['下降 10%', '上升 10%'],
  ]) {
    assert.notDeepEqual(
      SANKEY_I18N.visibleAmountSignature([negative]),
      SANKEY_I18N.visibleAmountSignature([positive])
    );
  }
  assert.notDeepEqual(
    SANKEY_I18N.visibleAmountSignature(['+10%']),
    SANKEY_I18N.visibleAmountSignature(['+ 10% decrease']),
    'conflicting explicit sign and direction is not accepted as the source polarity'
  );
  for (const [sourceText, forgedText] of [
    ['USD 999 billion', 'USD 999 million'],
    ['999 billion dollar', '999 million dollar'],
    ['Ending Mar. 31, 2026', 'Ending Mar. 30, 2026'],
    ['Revenue 10', 'Revenue 999'],
    ['10 employees', '999 employees'],
    ['10x', '999x'],
    ['Top10', 'Top999'],
  ]) {
    assert.notDeepEqual(
      SANKEY_I18N.visibleAmountSignature([sourceText]),
      SANKEY_I18N.visibleAmountSignature([forgedText])
    );
  }
});

test('financial i18n overlays cannot change money dimensions or authored values', () => {
  const base = {
    key: 'financial-deny-by-default',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    revenue: { total: 10, items: [{ id: 'product', label: 'Product', value: 10 }] },
    costs: { costOfRevenue: null, operatingExpenses: { items: [] }, tax: null },
    otherIncome: { items: [] },
    otherExpenses: { items: [] },
    profit: {},
  };
  for (const overlay of [
    { currency: '€' },
    { unit: 'M' },
    { period: 'Q4 FY99' },
    { periodNote: 'Ending Apr. 2027' },
    { revenue: { total: 999 } },
    { revenue: { items: [{ id: 'product', value: 999 }] } },
    { revenue: { notes: ['+999% Y/Y'] } },
    { revenue: '收入' },
    { revenue: { items: ['产品'] } },
    { costs: null },
  ]) {
    assert.throws(
      () => SANKEY_I18N.localizeFinancialRecord({ ...base, i18n: { zh: overlay } }, 'zh'),
      /not display-only/
    );
  }
});

test('underspecified unchanged rates accept an explicit locale basis without weakening explicit basis checks', () => {
  const context = loadClassicScripts([
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n-dictionaries.js',
    'src/i18n.js',
    'data/income-statements/amazon.js',
  ]);
  const source = context.INCOME_STATEMENT_SSOT.records.find(
    (record) => record.key === 'amazon-q3-fy22'
  );
  const localized = context.SANKEY_I18N.localizeFinancialRecord(source, 'zh');
  assert.equal(
    localized.costs.operatingExpenses.items[0].notes[1],
    '同比持平',
    'the locale may make an underspecified source basis explicit'
  );

  for (const [sourceNote, matchingLocale, forgedLocale] of [
    ['Flat Y/Y', '同比持平', '环比持平'],
    ['Unchanged Y/Y', '同比持平', '环比持平'],
    ['No change Q/Q', '环比持平', '同比持平'],
    ['Unchanged year-over-year', '同比持平', '环比持平'],
    ['No change quarter over quarter', '环比持平', '同比持平'],
    ['Unchanged, Y/Y', '同比持平', '环比持平'],
    ['Unchanged (Y/Y)', '同比持平', '环比持平'],
    ['No change: Q/Q', '环比持平', '同比持平'],
  ]) {
    const explicit = JSON.parse(JSON.stringify(source));
    explicit.costs.operatingExpenses.items[0].notes[1] = sourceNote;
    explicit.i18n.zh.costs.operatingExpenses.items[0].notes[1] = matchingLocale;
    assert.doesNotThrow(
      () => context.SANKEY_I18N.localizeFinancialRecord(explicit, 'zh'),
      `${sourceNote} keeps its explicit basis`
    );

    explicit.i18n.zh.costs.operatingExpenses.items[0].notes[1] = forgedLocale;
    assert.throws(
      () => context.SANKEY_I18N.localizeFinancialRecord(explicit, 'zh'),
      /visibleAmountBinding.*not display-only/,
      `${sourceNote} must never change comparison basis`
    );
  }

  const unknownQualifier = JSON.parse(JSON.stringify(source));
  unknownQualifier.costs.operatingExpenses.items[0].notes[1] =
    'Unchanged on a rolling basis';
  unknownQualifier.i18n.zh.costs.operatingExpenses.items[0].notes[1] =
    '同比持平';
  assert.throws(
    () => context.SANKEY_I18N.localizeFinancialRecord(unknownQualifier, 'zh'),
    /visibleAmountBinding.*not display-only/,
    'an unknown non-empty qualifier is never granted wildcard authority'
  );
});

test('labels-only financial item arrays merge by index without deleting SSOT identity or values', () => {
  const record = {
    key: 'financial-positional-overlay',
    company: 'Test',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    revenue: {
      total: 10,
      items: [
        { id: 'product', label: 'Product', value: 7 },
        { id: 'service', label: 'Service', value: 3 },
      ],
    },
    costs: { costOfRevenue: null, operatingExpenses: { items: [] }, tax: null },
    otherIncome: { items: [] },
    otherExpenses: { items: [] },
    profit: {},
    i18n: {
      zh: {
        revenue: {
          items: [{ label: '产品' }],
        },
      },
    },
  };
  const localized = SANKEY_I18N.localizeFinancialRecord(record, 'zh');
  assert.deepEqual(
    localized.revenue.items.map(({ id, value, label }) => ({ id, value, label })),
    [
      { id: 'product', value: 7, label: '产品' },
      { id: 'service', value: 3, label: 'Service' },
    ]
  );
  assert.equal(record.revenue.items[0].label, 'Product', 'source record stays immutable');
});

test('financial object-array overlays reject append and duplicate-id topology changes', () => {
  const base = {
    key: 'financial-array-topology',
    period: 'Q1 FY26',
    currency: '$',
    unit: 'B',
    revenue: {
      total: 10,
      items: [
        { id: 'product', label: 'Product', value: 7 },
        { id: 'service', label: 'Service', value: 3 },
      ],
    },
    costs: { costOfRevenue: null, operatingExpenses: { items: [] }, tax: null },
    otherIncome: { items: [] },
    otherExpenses: { items: [] },
    profit: {},
  };
  for (const items of [
    [{ label: '产品' }, { label: '服务' }, { label: '幽灵' }],
    [{ id: 'product', label: '产品' }, { id: 'product', label: '重复' }],
    [{ id: 'missing', label: '幽灵' }],
  ]) {
    assert.throws(
      () => SANKEY_I18N.localizeFinancialRecord({
        ...base,
        i18n: { zh: { revenue: { items } } },
      }, 'zh'),
      /not display-only/
    );
  }
});

test('UI string lookup falls back to the default language', () => {
  const key = 'metricRevenue';
  assert.ok(SANKEY_I18N.t(key, undefined, 'zh'));
  assert.ok(SANKEY_I18N.t(key, undefined, 'en'));
  assert.equal(SANKEY_I18N.t('missing-key-xyz', undefined, 'zh'), 'missing-key-xyz');
});
