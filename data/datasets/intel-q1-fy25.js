/* Intel Q1 FY25 income statement ($B), measured from the 2667x1500 Source. */
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
  const OPERATING_LOSS_FACE = '#e377c2';
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
          x: 396, top: 378, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (8%)' : '(8%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 197, top: 513, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '客户端计算' : 'Client', 30, 800),
            ...(zh ? [] : [textLine('Computing', 30, 800)]),
            textLine(zh ? '营业利润率 31%' : '31% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 396, top: 699, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +8%' : '+8% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 194, top: 805, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
            textLine(zh ? '营业利润率 14%' : '14% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    intel_products: block(708, 417, [
      textLine(zh ? '英特尔产品' : 'Intel Products', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 (3%)' : '(3%) Y/Y', 29, 400, NOTE),
    ]),
    intel_foundry: {
      blocks: [
        {
          x: 708, top: 875, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +7%' : '+7% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 483, top: 973, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
            textLine(zh ? '营业利润率 (50%)' : '(50%) operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 708, top: 1135, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +47%' : '+47% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 497, top: 1208, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '其他' : 'Other', 30, 800),
            textLine(zh ? '营业利润率 11%' : '11% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    revenue: block(1330, 550, [
      textLine(zh ? '收入' : 'Revenue', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 (0%)' : '(0%) Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1337, 1164, [
      textLine(zh ? '内部抵销' : 'Eliminations', 30, 800),
      textLine('$value', 39, 400),
    ]),
    gross_profit: block(1642, 458, [
      textLine(zh ? '毛利润' : 'Gross profit', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 37%' : '37% margin', 29, 400, NOTE),
      textLine(zh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1642, 1035, [
      textLine(zh ? '销售' : 'Cost', 30, 800),
      textLine(zh ? '成本' : 'of sales', 30, 800),
      textLine('$value', 39, 400),
    ]),
    operating_loss: block(1843, 948, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '亏损' : 'loss', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 (2%)' : '(2%) margin', 29, 400, NOTE),
      textLine(zh ? '同比 +6 个百分点' : '+6pp Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1954, 572, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '费用' : 'expenses', 30, 800),
      textLine('$value', 39, 400),
    ]),
    rnd: block(RIGHT_LABEL_X, 550, [
      textLine(zh ? '研究与' : 'Research &', 31, 800),
      textLine(zh ? '开发' : 'Development', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 29%' : '29% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (6 个百分点)' : '(6pp) Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(RIGHT_LABEL_X, 760, [
      textLine(zh ? '营销及' : 'Marketing,', 31, 800),
      textLine(zh ? '一般行政' : 'G&A', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 9%' : '9% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (3 个百分点)' : '(3pp) Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(RIGHT_LABEL_X, 969, [
      textLine(zh ? '重组' : 'Restructuring', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 1%' : '1% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE),
    ], 8),
    seg_hub: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q1-fy25',
    name: 'Intel · Q1 FY25',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q1 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2000,
      logoWidth: 430,
      logoHeight: 165,
      logoX: 969,
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
        client_computing: { x: 364, y: 466, width: 71, height: 148 },
        datacenter_ai: { x: 364, y: 789, width: 71, height: 79 },
        intel_products: { x: 675, y: 553, width: 71, height: 228 },
        intel_foundry: { x: 673, y: 967, width: 71, height: 90 },
        other: { x: 675, y: 1223, width: 71, height: 16 },
        seg_hub: { x: 981, y: 635, width: 72, height: 339 },
        revenue: { x: 1295, y: 685, width: 72, height: 247 },
        eliminations: { x: 1298, y: 1054, width: 71, height: 90 },
        gross_profit: { x: 1609, y: 629, width: 72, height: 90 },
        cost_of_sales: { x: 1609, y: 849, width: 72, height: 155 },
        operating_loss: { x: 1804, y: 905, width: 72, height: 2, color: OPERATING_LOSS_FACE },
        operating_expenses: { x: 1923, y: 715, width: 72, height: 95 },
        rnd: { x: 2232, y: 566, width: 71, height: 69 },
        marketing_ga: { x: 2232, y: 786, width: 71, height: 22 },
        restructuring: { x: 2232, y: 985, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 7.6, notes: ['(8%) Y/Y', '31% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 4.1, notes: ['+8% Y/Y', '14% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'intel_products', col: 1, order: 0, type: 'source', label: 'Intel Products', value: 11.8, notes: ['(3%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'intel_foundry', col: 1, order: 1, type: 'source', label: 'Intel Foundry', value: 4.7, notes: ['+7% Y/Y', '(50%) operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other', col: 1, order: 2, type: 'source', label: 'Other', value: 0.9, notes: ['+47% Y/Y', '11% operating margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'seg_hub', col: 2, order: 0, type: 'hub', label: '', value: 17.4, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Revenue', value: 12.7, notes: ['(0%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 3, order: 1, type: 'cost', label: 'Eliminations', value: -4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 4.7, notes: ['37% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 8.0, valueText: '($8.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 0, type: 'cost', label: 'Operating loss', value: -0.3, notes: ['(2%) margin', '+6pp Y/Y'], color: OPERATING_LOSS_FACE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: 'Operating expenses', value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 0, type: 'cost', label: 'Research & Development', value: 3.6, notes: ['29% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 7, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.2, notes: ['9% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 7, order: 2, type: 'cost', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'intel_products', value: 7.6, sourceWidth: 148, targetWidth: 148, y0: 540, y1: 627, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'intel_products', value: 4.1, sourceWidth: 79, targetWidth: 79, y0: 828.5, y1: 741.5, targetOrder: 1 },
      { source: 'intel_products', target: 'seg_hub', value: 11.8, sourceWidth: 228, targetWidth: 230, y0: 667, y1: 750, targetOrder: 0 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.7, sourceWidth: 90, targetWidth: 93, y0: 1012, y1: 911.5, targetOrder: 1 },
      { source: 'other', target: 'seg_hub', value: 0.9, sourceWidth: 16, targetWidth: 16, y0: 1231, y1: 966, targetOrder: 2 },
      { source: 'seg_hub', target: 'revenue', value: 12.7, sourceWidth: 249, targetWidth: 247, y0: 759.5, y1: 808.5, sourceOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.7, sourceWidth: 90, targetWidth: 90, y0: 929, y1: 1099, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 4.7, sourceWidth: 90, targetWidth: 90, y0: 730, y1: 674, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.0, sourceWidth: 157, targetWidth: 155, y0: 853.5, y1: 926.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.7, sourceWidth: 90, targetWidth: 93, y0: 674, y1: 761.5, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.3, sourceWidth: 2, targetWidth: 2, y0: 906, y1: 809, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 3.6, sourceWidth: 71, targetWidth: 69, y0: 750.5, y1: 600.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.2, sourceWidth: 22, targetWidth: 22, y0: 797, y1: 797, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 809, y1: 986, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2025 财年第一季度',
        meta: {
          title: '英特尔 2025 财年第一季度利润表',
          titleSize: 116,
          titleTextLength: 1720,
        },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (8%)', '营业利润率 31%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +8%', '营业利润率 14%'] },
          intel_products: { label: '英特尔产品', notes: ['同比 (3%)'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +7%', '营业利润率 (50%)'] },
          other: { label: '其他', notes: ['同比 +47%', '营业利润率 11%'] },
          revenue: { label: '收入', notes: ['同比 (0%)'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +6 个百分点'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研究与开发', notes: ['占收入 29%', '同比 (6 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 9%', '同比 (3 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 (2 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
