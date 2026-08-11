/* Intel Q4 FY24 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LABEL = '#127cc1';
  const BLUE_LINK = '#8dbcdB';
  const CLIENT = '#003870';
  const CLIENT_LINK = '#859db7';
  const PURPLE = '#775bbe';
  const PURPLE_LINK = '#bbaedb';
  const SEGMENT_GREEN = '#66a61e';
  const SEGMENT_GREEN_LINK = '#b3cf93';
  const FOUNDRY = '#169bd7';
  const FOUNDRY_LINK = '#8fcae5';
  const CYAN = '#00cbff';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
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
          x: 430, top: 305, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (9%)' : '(9%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 226, top: 428, anchor: 'middle', lineGap: 5,
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
          x: 430, top: 603, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (3%)' : '(3%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 226, top: 692, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
            textLine(zh ? '营业利润率 7%' : '7% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    network_edge: {
      blocks: [
        {
          x: 430, top: 816, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 +10%' : '+10% Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 226, top: 882, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
            textLine(zh ? '营业利润率 28%' : '28% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    intel_foundry: {
      blocks: [
        {
          x: 430, top: 979, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (13%)' : '(13%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 226, top: 1074, anchor: 'middle', lineGap: 5,
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
          x: 430, top: 1201, anchor: 'middle', lineGap: 5,
          lines: [
            textLine('$value', 39, 400),
            textLine(zh ? '同比 (20%)' : '(20%) Y/Y', 29, 400, NOTE),
          ],
        },
        {
          x: 228, top: 1282, anchor: 'middle', lineGap: 5,
          lines: [textLine(zh ? '其他' : 'Other', 30, 800)],
        },
      ],
    },
    revenue: block(1178, 524, [
      textLine(zh ? '收入' : 'Revenue', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 (7%)' : '(7%) Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1173, 1209, [
      textLine(zh ? '内部抵销' : 'Eliminations', 30, 800),
      textLine('$value', 31, 400),
    ]),
    gross_profit: block(1552, 361, [
      textLine(zh ? '毛利润' : 'Gross', 30, 800),
      ...(zh ? [] : [textLine('profit', 30, 800)]),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 39%' : '39% margin', 29, 400, NOTE),
      textLine(zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', 29, 400, NOTE),
    ], 9),
    cost_of_sales: block(1554, 1046, [
      textLine(zh ? '销售成本' : 'Cost of sales', 30, 800),
      textLine('$value', 31, 400),
    ]),
    operating_profit: block(1920, 304, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '利润' : 'profit', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 3%' : '3% margin', 29, 400, NOTE),
      textLine(zh ? '同比 (14 个百分点)' : '(14pp) Y/Y', 29, 400, NOTE),
    ], 8),
    operating_expenses: block(1921, 774, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '费用' : 'expenses', 30, 800),
      textLine('$value', 31, 400),
    ], 3),
    net_loss: block(2180, 243, [
      textLine(zh ? '净亏损' : 'Net loss', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 (1%)' : '(1%) margin', 29, 400, NOTE),
      textLine(zh ? '同比 (18 个百分点)' : '(18pp) Y/Y', 29, 400, NOTE),
    ], 7),
    tax_other: block(2481, 424, [
      textLine(zh ? '税费及其他' : 'Tax & Other', 30, 800),
      textLine('$value', 31, 400),
    ]),
    rnd: block(2485, 674, [
      textLine(zh ? '研究与' : 'Research &', 31, 800),
      textLine(zh ? '开发' : 'Development', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 27%' : '27% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(2491, 908, [
      textLine(zh ? '营销及一般行政' : 'Marketing, G&A', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 9%' : '9% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(2483, 1102, [
      textLine(zh ? '重组' : 'Restructuring', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 0%' : '0% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', 29, 400, NOTE),
    ], 8),
    segment_hub: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q4-fy24',
    name: 'Intel · Q4 FY24',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q4 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2010,
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
        client_computing: { x: 395, y: 392, width: 71, height: 166 },
        datacenter_ai: { x: 395, y: 692, width: 71, height: 70 },
        network_edge: { x: 395, y: 906, width: 71, height: 32 },
        intel_foundry: { x: 395, y: 1067, width: 71, height: 93 },
        other: { x: 395, y: 1295, width: 71, height: 19 },
        segment_hub: { x: 769, y: 583, width: 70, height: 389 },
        revenue: { x: 1143, y: 663, width: 70, height: 298 },
        eliminations: { x: 1138, y: 1095, width: 70, height: 89 },
        gross_profit: { x: 1517, y: 593, width: 70, height: 115 },
        cost_of_sales: { x: 1519, y: 840, width: 70, height: 180 },
        operating_profit: { x: 1885, y: 529, width: 70, height: 7 },
        operating_expenses: { x: 1893, y: 642, width: 70, height: 106 },
        net_loss: { x: 2146, y: 417, width: 70, height: 1 },
        tax_other: { x: 2261, y: 451, width: 71, height: 10 },
        rnd: { x: 2263, y: 694, width: 71, height: 79 },
        marketing_ga: { x: 2263, y: 950, width: 71, height: 23 },
        restructuring: { x: 2263, y: 1136, width: 71, height: 2, color: '#b32d2d' },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 8.0, valueText: '$8.0B', notes: ['(9%) Y/Y', '31% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 3.4, notes: ['(3%) Y/Y', '7% operating margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.6, notes: ['+10% Y/Y', '28% operating margin'], color: SEGMENT_GREEN, labelColor: SEGMENT_GREEN, linkTint: SEGMENT_GREEN_LINK },
      { id: 'intel_foundry', col: 0, order: 3, type: 'source', label: 'Intel Foundry', value: 4.5, notes: ['(13%) Y/Y', '(50%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 4, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['(20%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'segment_hub', col: 1, order: 0, type: 'hub', label: '', value: 18.5, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'source', label: 'Revenue', value: 14.3, notes: ['(7%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -4.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, notes: ['39% margin', '(7pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 8.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['3% margin', '(14pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 5.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: 'Net loss', value: -0.2, notes: ['(1%) margin', '(18pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_other', col: 6, order: 0, type: 'cost', label: 'Tax & Other', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'Research & Development', value: 3.9, notes: ['27% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 6, order: 2, type: 'cost', label: 'Marketing, G&A', value: 1.2, notes: ['9% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 3, type: 'cost', label: 'Restructuring', value: 0.1, notes: ['0% of revenue', '(7pp) Y/Y'], color: '#b32d2d', labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'segment_hub', value: 8.0, sourceWidth: 166, targetWidth: 166, y0: 475, y1: 666, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'segment_hub', value: 3.4, sourceWidth: 70, targetWidth: 72, y0: 727, y1: 785, targetOrder: 1 },
      { source: 'network_edge', target: 'segment_hub', value: 1.6, sourceWidth: 32, targetWidth: 34, y0: 922, y1: 838, targetOrder: 2 },
      { source: 'intel_foundry', target: 'segment_hub', value: 4.5, sourceWidth: 93, targetWidth: 96, y0: 1113.5, y1: 903, targetOrder: 3 },
      { source: 'other', target: 'segment_hub', value: 1.0, sourceWidth: 19, targetWidth: 21, y0: 1304.5, y1: 961.5, targetOrder: 4 },
      { source: 'segment_hub', target: 'revenue', value: 14.3, sourceWidth: 299, targetWidth: 298, y0: 732.5, y1: 812, sourceOrder: 0 },
      { source: 'segment_hub', target: 'eliminations', value: 4.3, sourceWidth: 90, targetWidth: 89, y0: 927, y1: 1139.5, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 5.6, sourceWidth: 115, targetWidth: 115, y0: 720.5, y1: 650.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.7, sourceWidth: 183, targetWidth: 180, y0: 869.5, y1: 930, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 7, targetWidth: 7, y0: 596.5, y1: 532.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.2, sourceWidth: 108, targetWidth: 106, y0: 654, y1: 695, sourceOrder: 1 },
      { source: 'net_loss', target: 'tax_other', value: 0.2, sourceWidth: 1, targetWidth: 3, y0: 417.5, y1: 452.5, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax_other', value: 0.4, sourceWidth: 7, targetWidth: 7, y0: 532.5, y1: 457.5, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.9, sourceWidth: 80, targetWidth: 79, y0: 682, y1: 733.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.2, sourceWidth: 24, targetWidth: 23, y0: 734, y1: 961.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 747, y1: 1137, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2024 财年第四季度',
        meta: {
          title: '英特尔 2024 财年第四季度利润表',
          titleSize: 116,
          titleTextLength: 1720,
        },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (9%)', '营业利润率 31%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (3%)', '营业利润率 7%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 +10%', '营业利润率 28%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 (13%)', '营业利润率 (50%)'] },
          other: { label: '其他', notes: ['同比 (20%)'] },
          revenue: { label: '收入', notes: ['同比 (7%)'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 (7 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (14 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          net_loss: { label: '净亏损', notes: ['利润率 (1%)', '同比 (18 个百分点)'] },
          tax_other: { label: '税费及其他' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 +1 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 9%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 0%', '同比 (7 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
