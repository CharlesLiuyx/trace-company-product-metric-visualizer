/* Intel Q3 FY25 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLUE = '#0068b5';
  const BLUE_LABEL = '#006abb';
  const BLUE_LINK = '#85b4d6';
  const CYAN = '#00c7fd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2456;

  const intelLogo = `
    <g fill="none" stroke="${BLUE}" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="${CYAN}"/>`;

  const textLine = (text, size, weight, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, lines, lineGap = 5) => ({
    blocks: [{ x, top, anchor: 'middle', lineGap, lines }],
  });

  const equityGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="equity"
      data-link-numerator="equity"
      data-link-denominator="net_profit"
      data-link-anchor-x="2202"
      data-link-anchor-y="549">
      <path d="M2131 549H2202" fill="none" stroke="${GREEN}" stroke-width="2"/>
      <text x="2167" y="596" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '权益法收益' : 'Equity'}</text>
      <text x="2167" y="636" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.2B</text>
    </g>`;

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        {
          x: 396, top: 423, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +5%' : '+5% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 194, top: 551, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '客户端计算' : 'Client', 30, 800),
            ...(zh ? [] : [textLine('Computing', 30, 800)]),
            textLine(zh ? '营业利润率 32%' : '32% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 396, top: 752, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (1%)' : '(1%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 194, top: 850, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
            textLine(zh ? '营业利润率 23%' : '23% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    intel_products: block(708, 455, [
      textLine(zh ? '英特尔产品' : 'Intel Products', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 +3%' : '+3% Y/Y', 29, 400, NOTE),
    ]),
    intel_foundry: {
      blocks: [
        {
          x: 708, top: 914, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (2%)' : '(2%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 482, top: 1008, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
            textLine(zh ? '营业利润率 (55%)' : '(55%) operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 708, top: 1169, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +3%' : '+3% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 497, top: 1239, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '其他' : 'Other', 30, 800),
            textLine(zh ? '营业利润率 10%' : '10% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    revenue: block(1330, 543, [
      textLine(zh ? '净收入' : 'Net revenue', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 +3%' : '+3% Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1330, 1117, [
      textLine(zh ? '内部抵销' : 'Eliminations', 30, 800),
      textLine('$value', 39, 400),
    ]),
    gross_profit: block(1649, 405, [
      textLine(zh ? '毛利润' : 'Gross', 30, 800),
      ...(zh ? [] : [textLine('profit', 30, 800)]),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 38%' : '38% margin', 29, 400, NOTE),
      textLine(zh ? '同比 +23 个百分点' : '+23pp Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1642, 1015, [
      textLine(zh ? '销售' : 'Cost', 30, 800),
      textLine(zh ? '成本' : 'of sales', 30, 800),
      textLine('$value', 39, 400),
    ]),
    operating_profit: block(1954, 349, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '利润' : 'profit', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 5%' : '5% margin', 29, 400, NOTE),
      textLine(zh ? '同比 +73 个百分点' : '+73pp Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1953, 838, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '费用' : 'expenses', 30, 800),
      textLine('$value', 39, 400),
    ]),
    other_income: block(2146, 302, [
      textLine(zh ? '其他收益' : 'Other', 30, 800),
      textLine('$value', 39, 400),
    ]),
    net_profit: block(RIGHT_LABEL_X, 418, [
      textLine(zh ? '净利润' : 'Net profit', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 31%' : '31% margin', 29, 400, NOTE),
      textLine(zh ? '同比 +159 个百分点' : '+159pp Y/Y', 29, 400, NOTE),
    ]),
    tax: block(2448, 640, [
      textLine(zh ? '税费' : 'Tax', 31, 800),
      textLine('$value', 31, 400),
    ], 8),
    rnd: block(RIGHT_LABEL_X, 819, [
      textLine(zh ? '研发' : 'R&D', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 24%' : '24% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(RIGHT_LABEL_X, 986, [
      textLine(zh ? '营销及一般行政' : 'Marketing, G&A', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 8%' : '8% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(RIGHT_LABEL_X, 1153, [
      textLine(zh ? '重组' : 'Restructuring', 31, 800),
      textLine(zh ? '及其他' : '', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 1%' : '1% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (41 个百分点)' : '(41pp) Y/Y', 29, 400, NOTE),
    ].filter((line) => line.text), 8),
    equity: { blocks: [] },
    seg_hub: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q3-fy25',
    name: 'Intel · Q3 FY25',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q3 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2000,
      logoWidth: 430,
      logoHeight: 165,
      logoY: 282,
      logoViewBox: '0 0 490 175',
      logoSvg: intelLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    annotationsSvg: equityGuide(false),
    layout: {
      routes: { equity: { x: 2202, y: 549, width: 0, height: 2 } },
      nodes: {
        client_computing: { x: 364, y: 516, width: 71, height: 162 },
        datacenter_ai: { x: 364, y: 839, width: 71, height: 76 },
        intel_products: { x: 678, y: 593, width: 71, height: 240 },
        intel_foundry: { x: 675, y: 1005, width: 71, height: 79 },
        other: { x: 675, y: 1254, width: 71, height: 18 },
        seg_hub: { x: 989, y: 645, width: 71, height: 340 },
        revenue: { x: 1298, y: 686, width: 71, height: 259 },
        eliminations: { x: 1298, y: 1017, width: 71, height: 78 },
        gross_profit: { x: 1609, y: 640, width: 72, height: 98 },
        cost_of_sales: { x: 1609, y: 833, width: 72, height: 159 },
        operating_profit: { x: 1921, y: 565, width: 71, height: 11 },
        operating_expenses: { x: 1921, y: 733, width: 71, height: 84 },
        other_income: { x: 2111, y: 392, width: 71, height: 68 },
        net_profit: { x: 2232, y: 415, width: 71, height: 80 },
        tax: { x: 2232, y: 678, width: 71, height: 3, color: RED },
        rnd: { x: 2227, y: 837, width: 71, height: 60 },
        marketing_ga: { x: 2232, y: 1023, width: 71, height: 19 },
        restructuring: { x: 2232, y: 1165, width: 71, height: 2, color: RED },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'equity', representation: 'flow', label: 'Equity', value: 0.2,
        valueText: '$0.2B', type: 'profit', labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 8.5, notes: ['+5% Y/Y', '32% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 4.1, notes: ['(1%) Y/Y', '23% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'intel_products', col: 1, order: 0, type: 'source', label: 'Intel Products', value: 12.7, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'intel_foundry', col: 1, order: 1, type: 'source', label: 'Intel Foundry', value: 4.2, notes: ['(2%) Y/Y', '(55%) operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other', col: 1, order: 2, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['+3% Y/Y', '10% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'seg_hub', col: 2, order: 0, type: 'hub', label: '', value: 17.9, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Net revenue', value: 13.7, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 3, order: 1, type: 'cost', label: 'Eliminations', value: -4.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 5.2, notes: ['38% margin', '+23pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 8.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['5% margin', '+73pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: 'Operating expenses', value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 6, order: 0, type: 'profit', label: 'Other', value: 3.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 4.3, notes: ['31% margin', '+159pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 2, type: 'cost', label: 'R&D', value: 3.2, notes: ['24% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 7, order: 3, type: 'cost', label: 'Marketing, G&A', value: 1.1, notes: ['8% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 7, order: 4, type: 'cost', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '(41pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'intel_products', value: 8.5, sourceWidth: 162, targetWidth: 162, y0: 597, y1: 674, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'intel_products', value: 4.1, sourceWidth: 76, targetWidth: 78, y0: 877, y1: 794, targetOrder: 1 },
      { source: 'intel_products', target: 'seg_hub', value: 12.7, sourceWidth: 240, targetWidth: 240, y0: 713, y1: 765, targetOrder: 0 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.2, sourceWidth: 79, targetWidth: 82, y0: 1044.5, y1: 926, targetOrder: 1 },
      { source: 'other', target: 'seg_hub', value: 1.0, sourceWidth: 18, targetWidth: 18, y0: 1263, y1: 976, targetOrder: 2 },
      { source: 'seg_hub', target: 'revenue', value: 13.7, sourceWidth: 262, targetWidth: 259, y0: 776, y1: 815.5, sourceOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.2, sourceWidth: 78, targetWidth: 78, y0: 946, y1: 1056, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 5.2, sourceWidth: 98, targetWidth: 98, y0: 735, y1: 689, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.4, sourceWidth: 161, targetWidth: 159, y0: 864.5, y1: 912.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, sourceWidth: 11, targetWidth: 11, y0: 645.5, y1: 570.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.5, sourceWidth: 87, targetWidth: 84, y0: 694.5, y1: 775, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 3.7, sourceWidth: 68, targetWidth: 68, y0: 426, y1: 449, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 8, targetWidth: 12, y0: 569, y1: 489, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { sourceRoute: 'equity', target: 'net_profit', value: 0.2, sourceWidth: 2, targetWidth: 5, y0: 549, y1: 492.5, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 3, targetWidth: 3, y0: 574.5, y1: 679.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.2, sourceWidth: 60, targetWidth: 60, y0: 763, y1: 867, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.1, sourceWidth: 20, targetWidth: 19, y0: 803, y1: 1032.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 4, targetWidth: 2, y0: 815, y1: 1166, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2025 财年第三季度',
        meta: { title: '英特尔 2025 财年第三季度利润表', titleSize: 116, titleTextLength: 1720 },
        annotationsSvg: equityGuide(true),
        nonNodeMetrics: { equity: { label: '权益法收益' } },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 +5%', '营业利润率 32%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (1%)', '营业利润率 23%'] },
          intel_products: { label: '英特尔产品', notes: ['同比 +3%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 (2%)', '营业利润率 (55%)'] },
          other: { label: '其他', notes: ['同比 +3%', '营业利润率 10%'] },
          revenue: { label: '净收入', notes: ['同比 +3%'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 +23 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +73 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +159 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (7 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 8%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组及其他', notes: ['占收入 1%', '同比 (41 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
