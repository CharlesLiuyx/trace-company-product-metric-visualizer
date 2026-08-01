/* ASML — FY23 income statement (€B).
 * Reconstructed from input/processed/asml-fy23.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/asml.js. */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8c95c4';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f7bda4';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#92bce8';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#9cd49c';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const LIGHT_BLUE = '#86cef4';
  const LIGHT_BLUE_LINK = '#c1e1f2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#797979';

  const otherGainsGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other"
      data-link-numerator="other"
      data-link-denominator="net_profit"
      data-link-anchor-x="2250"
      data-link-anchor-y="548">
      <path d="M2180 578H2251C2278 578 2272 506 2289 506"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2215" y="625" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收益' : 'Other gains'}</text>
      <text x="2215" y="666" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">€41M</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1210" y="386" text-anchor="middle" font-family="Arial Black,Arial,sans-serif"
        font-size="162" font-weight="900" textLength="438" lengthAdjust="spacingAndGlyphs"
        fill="${NAVY}">ASML</text>
    </g>
    ${otherGainsGuide(zh)}`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 10,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });

  const labels = (zh) => {
    const text = zh
      ? {
          euv: 'EUV', euvNote: '极紫外', arfi: 'ArFi', arfiNote: '氟化氩浸没式',
          arfDry: 'ArF Dry', arfDryNote: '氟化氩干式', krf: 'KrF', krfNote: '氟化氪',
          iLine: 'I-line', metrology: ['量测', '与检测'], netSystem: ['系统净', '销售额'],
          installedBase: ['装机基础', '管理'], netSales: '净销售额', grossProfit: '毛利润',
          costOfSales: ['销售', '成本'], operatingProfit: '营业利润', operatingExpenses: ['运营', '费用'],
          netProfit: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及行政',
          yoy30: '同比 +30%', yoy71: '同比 +71%', yoy42: '同比 +42%', yoy29: '同比 +29%',
          yoyNeg29: '同比 (29%)', yoy2: '同比 (2%)', margin51: '利润率 51%',
          margin33: '利润率 33%', margin28: '利润率 28%', pp1: '同比 +1 个百分点',
          pp2: '同比 +2 个百分点', eps: '每股收益 €19.89',
        }
      : {
          euv: 'EUV', euvNote: 'Extreme Ultraviolet', arfi: 'ArFi', arfiNote: 'Argon Fluoride immersion',
          arfDry: 'ArF Dry', arfDryNote: 'Argon Fluoride Dry', krf: 'KrF', krfNote: 'Krypton Fluoride',
          iLine: 'I-line', metrology: ['Metrology', '& Inspection'], netSystem: ['Net system', 'sales'],
          installedBase: ['Installed base', 'management'], netSales: 'Net sales', grossProfit: 'Gross profit',
          costOfSales: ['Cost of', 'sales'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
          netProfit: 'Net profit', tax: 'Tax', rnd: 'R&D', sga: 'SG&A',
          yoy30: '+30% Y/Y', yoy71: '+71% Y/Y', yoy42: '+42% Y/Y', yoy29: '+29% Y/Y',
          yoyNeg29: '(29%) Y/Y', yoy2: '(2%) Y/Y', margin51: '51% margin',
          margin33: '33% margin', margin28: '28% margin', pp1: '+1pp Y/Y', pp2: '+2pp Y/Y',
          eps: 'EPS €19.89',
        };

    const sourceLabel = (valueTop, nameTop, nodeName, nodeNote, yoy, options = {}) => ({
      blocks: [
        block(456, valueTop, [line('$value', 39), line(yoy, 29, { color: NOTE })], { lineGap: 0 }),
        block(options.nameX || 380, nameTop, [
          ...[].concat(nodeName).map((item) => line(item, options.nameSize || 39, { weight: 800 })),
          ...(nodeNote ? [line(nodeNote, options.noteSize || 29, { color: NOTE })] : []),
        ], { anchor: 'end', lineGap: options.nameGap ?? 10, semanticRole: 'reference-offset-side-label' }),
      ],
    });

    return {
      euv: sourceLabel(336, 460, text.euv, text.euvNote, text.yoy30, { nameX: 366, nameGap: 0 }),
      arfi: sourceLabel(580, 702, text.arfi, text.arfiNote, text.yoy71, { nameX: 376, nameGap: 0, noteSize: zh ? 27 : 29 }),
      arf_dry: sourceLabel(826, 881, text.arfDry, text.arfDryNote, text.yoy42, { nameX: 372, nameGap: 20 }),
      krf: sourceLabel(969, 1023, text.krf, text.krfNote, text.yoy29, { nameX: 365, nameGap: 30 }),
      i_line: sourceLabel(1118, 1171, text.iLine, null, text.yoy42, { nameX: 375, nameSize: 39 }),
      metrology_inspection: sourceLabel(1248, 1292, text.metrology, null, text.yoyNeg29, { nameX: 371, nameGap: 0 }),
      net_system_sales: {
        blocks: [block(832, 427, [
          ...text.netSystem.map((item) => line(item, 41, { weight: 800 })),
          line('$value', 39), line(text.yoy42, 29, { color: NOTE }),
        ])],
      },
      installed_base_management: {
        blocks: [block(830, 1183, [
          ...text.installedBase.map((item) => line(item, 39, { weight: 800, color: YELLOW_LABEL })),
          line('$value', 39, { color: YELLOW_LABEL }), line(text.yoy2, 29, { color: NOTE }),
        ])],
      },
      revenue: {
        blocks: [block(1202, 548, [
          line(text.netSales, 42, { weight: 800 }), line('$value', 39),
          line(text.yoy30, 29, { color: NOTE }),
        ])],
      },
      gross_profit: {
        blocks: [block(1571, 444, [
          line(text.grossProfit, 40, { weight: 800 }), line('$value', 39),
          line(text.margin51, 29, { color: NOTE }), line(text.pp1, 29, { color: NOTE }),
        ])],
      },
      cost_of_sales: {
        blocks: [block(1572, 1147, [
          ...text.costOfSales.map((item) => line(item, 38, { weight: 800 })),
          line('$value', 36),
        ], { lineGap: 8 })],
      },
      operating_profit: {
        blocks: [block(1952, 331, [
          line(text.operatingProfit, 39, { weight: 800 }), line('$value', 38),
          line(text.margin33, 29, { color: NOTE }), line(text.pp2, 29, { color: NOTE }),
        ])],
      },
      operating_expenses: {
        blocks: [block(1952, 930, [
          ...text.operatingExpenses.map((item) => line(item, 38, { weight: 800 })),
          line('$value', 36),
        ], { lineGap: 8 })],
      },
      net_profit: {
        blocks: [block(2382, 394, [
          line(text.netProfit, 39, { weight: 800 }), line('$value', 38),
          line(text.margin28, 29, { color: NOTE }), line(text.pp1, 29, { color: NOTE }),
          line(text.eps, 29, { color: NOTE }),
        ], { anchor: 'start' })],
      },
      tax: { blocks: [block(2475, 672, [line(text.tax, 31, { weight: 800 }), line('$value', 30)], { lineGap: 8 })] },
      rnd: { blocks: [block(2481, 949, [line(text.rnd, 31, { weight: 800 }), line('$value', 30)], { lineGap: 8 })] },
      sga: { blocks: [block(2481, 1196, [line(text.sga, zh ? 27 : 31, { weight: 800 }), line('$value', 30)], { lineGap: 8 })] },
      other: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-fy23',
    name: 'ASML · FY23',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML FY23 Income Statement',
      period: 'FY23',
      periodNote: 'Year ending Dec. 2023',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 1865,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 12.5,
      routes: { other: { x: 2180, y: 578, width: 0, height: 1 } },
      nodes: {
        euv: { x: 421, y: 421, width: 71, height: 115 },
        arfi: { x: 421, y: 665, width: 71, height: 113 },
        arf_dry: { x: 421, y: 914, width: 71, height: 9 },
        krf: { x: 421, y: 1055, width: 71, height: 26 },
        i_line: { x: 421, y: 1204, width: 71, height: 3 },
        metrology_inspection: { x: 421, y: 1337, width: 71, height: 3 },
        net_system_sales: { x: 797, y: 629, width: 70, height: 276 },
        installed_base_management: { x: 795, y: 1091, width: 70, height: 69 },
        revenue: { x: 1167, y: 702, width: 71, height: 349 },
        gross_profit: { x: 1535, y: 626, width: 70, height: 178 },
        cost_of_sales: { x: 1538, y: 961, width: 70, height: 168 },
        operating_profit: { x: 1916, y: 514, width: 72, height: 113 },
        operating_expenses: { x: 1916, y: 848, width: 71, height: 62 },
        net_profit: { x: 2289, y: 412, width: 71, height: 95 },
        tax: { x: 2289, y: 702, width: 71, height: 17 },
        rnd: { x: 2289, y: 956, width: 71, height: 49 },
        sga: { x: 2289, y: 1219, width: 71, height: 13 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other gains', value: 0.041, valueText: '€41M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 9.2, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 9.0, valueText: '€9.0B', notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.9, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 2.2, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.2, color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.4, color: LIGHT_BLUE, labelColor: LIGHT_BLUE, linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 21.9, notes: ['+42% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 5.6, notes: ['(2%) Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 27.6, notes: ['+30% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.1, notes: ['51% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 13.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 9.0, valueText: '€9.0B', notes: ['33% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 7.6, notes: ['28% margin', '+1pp Y/Y', 'EPS €19.89'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 4.0, valueText: '(€4.0B)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.1 },
    ],
    links: [
      { source: 'euv', target: 'net_system_sales', value: 9.2, sourceWidth: 115, targetWidth: 115, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'arfi', target: 'net_system_sales', value: 9.0, sourceWidth: 113, targetWidth: 115, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.9, sourceWidth: 9, targetWidth: 12, targetOrder: 2, linkTint: DRY_LINK },
      { source: 'krf', target: 'net_system_sales', value: 2.2, sourceWidth: 26, targetWidth: 27, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'i_line', target: 'net_system_sales', value: 0.2, sourceWidth: 3, targetWidth: 2, targetOrder: 4, linkTint: YELLOW_LINK },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.4, sourceWidth: 3, targetWidth: 5, targetOrder: 5, linkTint: LIGHT_BLUE_LINK },
      { source: 'net_system_sales', target: 'revenue', value: 21.9, sourceWidth: 276, targetWidth: 279, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 5.6, sourceWidth: 69, targetWidth: 70, sourceOrder: 0, targetOrder: 1, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 14.1, sourceWidth: 178, targetWidth: 178, y0: 791, y1: 715, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 13.4, sourceWidth: 171, targetWidth: 168, y0: 965.5, y1: 1045, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 9.0, sourceWidth: 113, targetWidth: 113, y0: 682.5, y1: 570.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.1, sourceWidth: 65, targetWidth: 62, y0: 771.5, y1: 879, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 7.6, sourceWidth: 95, targetWidth: 94, y0: 561.5, y1: 459, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.4, sourceWidth: 18, targetWidth: 17, y0: 618, y1: 710.5, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other', target: 'net_profit', value: 0.041, sourceWidth: 2, targetWidth: 1, y0: 578, y1: 506.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 4.0, sourceWidth: 48, targetWidth: 49, y0: 872, y1: 980.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.1, sourceWidth: 14, targetWidth: 13, y0: 903, y1: 1225.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'ASML · 2023 财年',
        meta: { title: 'ASML 2023 财年利润表', period: '2023 财年', periodNote: '截至 2023 年 12 月' },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other: { label: '其他收益' } },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] },
          krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' },
          metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +42%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 (2%)'] },
          revenue: { label: '净销售额', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +1 个百分点', '每股收益 €19.89'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
