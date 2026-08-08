/* Intel Q2 FY26 income statement ($B), measured from the 2667×1500 Source. */
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

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        {
          x: 396, top: 477, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +13%' : '+13% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 194, top: 569, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '客户端计算' : 'Client', 30, 800),
            ...(zh ? [] : [textLine('Computing', 30, 800)]),
            textLine(zh ? '营业利润率 26%' : '26% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 396, top: 769, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +69%' : '+69% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 194, top: 880, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
            textLine(zh ? '营业利润率 40%' : '40% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    intel_products: block(708, 536, [
      textLine(zh ? '英特尔产品' : 'Intel Products', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 +28%' : '+28% Y/Y', 29, 400, NOTE),
    ]),
    intel_foundry: {
      blocks: [
        {
          x: 708, top: 967, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +31%' : '+31% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 482, top: 1068, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
            textLine(zh ? '营业利润率 (36%)' : '(36%) operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 708, top: 1208, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (33%)' : '(33%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 497, top: 1260, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '其他' : 'Other', 30, 800),
            textLine(zh ? '营业利润率 16%' : '16% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    revenue: block(1330, 530, [
      textLine(zh ? '净收入' : 'Net revenue', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 +25%' : '+25% Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1330, 1139, [
      textLine(zh ? '内部抵销' : 'Eliminations', 30, 800),
      textLine('$value', 39, 400),
    ]),
    gross_profit: block(1642, 378, [
      textLine(zh ? '毛利润' : 'Gross', 30, 800),
      ...(zh ? [] : [textLine('profit', 30, 800)]),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 40%' : '40% margin', 29, 400, NOTE),
      textLine(zh ? '同比 +13 个百分点' : '+13pp Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1642, 948, [
      textLine(zh ? '销售' : 'Cost', 30, 800),
      textLine(zh ? '成本' : 'of sales', 30, 800),
      textLine('$value', 39, 400),
    ]),
    operating_profit: block(1954, 326, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '利润' : 'profit', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 11%' : '11% margin', 29, 400, NOTE),
      textLine(zh ? '同比 +36 个百分点' : '+36pp Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1953, 769, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '费用' : 'expenses', 30, 800),
      textLine('$value', 39, 400),
    ]),
    net_loss: block(2144, 281, [
      textLine(zh ? '净亏损' : 'Net loss', 30, 800),
      textLine('$value', 39, 400),
    ]),
    interest_other_costs: block(RIGHT_LABEL_X, 418, [
      textLine(zh ? '利息及' : 'Interest &', 30, 800),
      textLine(zh ? '其他成本' : 'other costs', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '18A 代工' : '18A Foundry', 29, 400, NOTE),
      textLine(zh ? '转型成本' : 'transition costs', 29, 400, NOTE),
    ]),
    rnd: block(RIGHT_LABEL_X, 711, [
      textLine(zh ? '研发' : 'R&D', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 21%' : '21% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (8 个百分点)' : '(8pp) Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(RIGHT_LABEL_X, 925, [
      textLine(zh ? '营销及一般行政' : 'Marketing, G&A', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 7%' : '7% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(RIGHT_LABEL_X, 1120, [
      textLine(zh ? '重组及' : 'Restructuring', 31, 800),
      textLine(zh ? '其他' : 'and other', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 1%' : '1% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (14 个百分点)' : '(14pp) Y/Y', 29, 400, NOTE),
    ], 8),
    seg_hub: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q2-fy26',
    name: 'Intel · Q2 FY26',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q2 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q2-fy26.png', width: 2667, height: 1500 },
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
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    layout: {
      nodes: {
        client_computing: { x: 361, y: 568, width: 71, height: 115 },
        datacenter_ai: { x: 361, y: 860, width: 71, height: 80 },
        intel_products: { x: 672, y: 672, width: 71, height: 199 },
        intel_foundry: { x: 672, y: 1057, width: 71, height: 74 },
        other: { x: 672, y: 1304, width: 71, height: 7 },
        seg_hub: { x: 983, y: 732, width: 72, height: 285 },
        revenue: { x: 1295, y: 667, width: 71, height: 213 },
        eliminations: { x: 1295, y: 1046, width: 71, height: 71 },
        gross_profit: { x: 1606, y: 592, width: 72, height: 84 },
        cost_of_sales: { x: 1606, y: 813, width: 72, height: 126 },
        operating_profit: { x: 1918, y: 541, width: 71, height: 21 },
        operating_expenses: { x: 1918, y: 686, width: 71, height: 60 },
        net_loss: { x: 2108, y: 386, width: 71, height: 118 },
        interest_other_costs: { x: 2229, y: 396, width: 71, height: 142 },
        rnd: { x: 2229, y: 748, width: 71, height: 43 },
        marketing_ga: { x: 2229, y: 969, width: 71, height: 13 },
        restructuring: { x: 2229, y: 1163, width: 71, height: 3, color: RED_LINK },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 8.9, notes: ['+13% Y/Y', '26% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 6.3, notes: ['+69% Y/Y', '40% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'intel_products', col: 1, order: 0, type: 'source', label: 'Intel Products', value: 15.1, notes: ['+28% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'intel_foundry', col: 1, order: 1, type: 'source', label: 'Intel Foundry', value: 5.8, notes: ['+31% Y/Y', '(36%) operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other', col: 1, order: 2, type: 'source', label: 'Other', value: 0.7, notes: ['(33%) Y/Y', '16% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'seg_hub', col: 2, order: 0, type: 'hub', label: '', value: 21.6, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Net revenue', value: 16.1, notes: ['+25% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 3, order: 1, type: 'cost', label: 'Eliminations', value: -5.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 6.5, notes: ['40% margin', '+13pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 9.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['11% margin', '+36pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: 'Operating expenses', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 6, order: 0, type: 'cost', label: 'Net loss', value: -10.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_other_costs', col: 7, order: 0, type: 'cost', label: 'Interest & other costs', value: 12.6, notes: ['18A Foundry transition costs'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 3.4, notes: ['21% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 7, order: 2, type: 'cost', label: 'Marketing, G&A', value: 1.2, notes: ['7% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 7, order: 3, type: 'cost', label: 'Restructuring and other', value: 0.2, notes: ['1% of revenue', '(14pp) Y/Y'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'intel_products', value: 8.9, sourceWidth: 115, targetWidth: 115, y0: 625.5, y1: 729.5, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'intel_products', value: 6.3, sourceWidth: 80, targetWidth: 84, y0: 900, y1: 829, targetOrder: 1 },
      { source: 'intel_products', target: 'seg_hub', value: 15.1, sourceWidth: 199, targetWidth: 199, y0: 771.5, y1: 831.5, targetOrder: 0 },
      { source: 'intel_foundry', target: 'seg_hub', value: 5.8, sourceWidth: 74, targetWidth: 79, y0: 1094, y1: 970.5, targetOrder: 1 },
      { source: 'other', target: 'seg_hub', value: 0.7, sourceWidth: 7, targetWidth: 7, y0: 1307.5, y1: 1013.5, targetOrder: 2 },
      { source: 'seg_hub', target: 'revenue', value: 16.1, sourceWidth: 213, targetWidth: 213, y0: 838.5, y1: 773.5, sourceOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 5.5, sourceWidth: 71, targetWidth: 71, y0: 981.5, y1: 1081.5, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 6.5, sourceWidth: 84, targetWidth: 84, y0: 709, y1: 634, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 9.6, sourceWidth: 129, targetWidth: 126, y0: 815.5, y1: 876, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 21, targetWidth: 21, y0: 602.5, y1: 551.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.7, sourceWidth: 63, targetWidth: 60, y0: 644.5, y1: 716, sourceOrder: 1 },
      { source: 'net_loss', target: 'interest_other_costs', value: 10.8, sourceWidth: 118, targetWidth: 120, y0: 445, y1: 456, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other_costs', value: 1.8, sourceWidth: 21, targetWidth: 22, y0: 551.5, y1: 527, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.4, sourceWidth: 43, targetWidth: 43, y0: 707.5, y1: 769.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.2, sourceWidth: 13, targetWidth: 13, y0: 735.5, y1: 975.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 744.5, y1: 1164.5, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2026 财年第二季度',
        meta: {
          title: '英特尔 2026 财年第二季度利润表',
          titleSize: 116,
          titleTextLength: 1720,
        },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 +13%', '营业利润率 26%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +69%', '营业利润率 40%'] },
          intel_products: { label: '英特尔产品', notes: ['同比 +28%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +31%', '营业利润率 (36%)'] },
          other: { label: '其他', notes: ['同比 (33%)', '营业利润率 16%'] },
          revenue: { label: '净收入', notes: ['同比 +25%'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +13 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +36 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_loss: { label: '净亏损' },
          interest_other_costs: { label: '利息及其他成本', notes: ['18A 代工转型成本'] },
          rnd: { label: '研发', notes: ['占收入 21%', '同比 (8 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 7%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组及其他', notes: ['占收入 1%', '同比 (14 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
