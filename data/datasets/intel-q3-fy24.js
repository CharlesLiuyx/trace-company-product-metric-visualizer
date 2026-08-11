/* Intel Q3 FY24 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LABEL = '#006abb';
  const BLUE_LINK = '#8dbcdb';
  const CLIENT = '#003870';
  const CLIENT_LINK = '#859db7';
  const DATACENTER = '#775bbe';
  const DATACENTER_LINK = '#bbaedb';
  const NETWORK = '#66a61e';
  const NETWORK_LINK = '#b3cf93';
  const MOBILEYE = '#05267e';
  const MOBILEYE_LINK = '#8796bd';
  const FOUNDRY = '#169bd7';
  const FOUNDRY_LINK = '#8fcae5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2460;

  const intelLogo = `
    <g fill="none" stroke="#0068b5" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="#00cbff"/>`;

  const annotations = () => `
    <g data-typography-role="brand" transform="translate(690 260) scale(.88)">
      ${intelLogo}
    </g>
    <g data-typography-role="brand" fill="#1f2eb8">
      <text x="76" y="969" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" textLength="295" lengthAdjust="spacingAndGlyphs">mobileye</text>
      <text x="335" y="950" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700">TM</text>
    </g>`;

  const textLine = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 5) => ({ blocks: [{ x, top, anchor: 'middle', lineGap, lines }] });

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        { x: 427, top: 275, anchor: 'middle', lineGap: 5, lines: [
          textLine('$value', 39, 400), textLine(zh ? '同比 (7%)' : '(7%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 227, top: 403, anchor: 'middle', lineGap: 5, lines: [
          textLine(zh ? '客户端计算' : 'Client', 30, 800),
          ...(zh ? [] : [textLine('Computing', 30, 800)]),
          textLine(zh ? '营业利润率 37%' : '37% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    datacenter_ai: {
      blocks: [
        { x: 428, top: 545, anchor: 'middle', lineGap: 5, lines: [
          textLine('$value', 39, 400), textLine(zh ? '同比 +9%' : '+9% Y/Y', 29, 400, NOTE),
        ] },
        { x: 229, top: 631, anchor: 'middle', lineGap: 5, lines: [
          textLine(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
          textLine(zh ? '营业利润率 10%' : '10% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    network_edge: {
      blocks: [
        { x: 432, top: 730, anchor: 'middle', lineGap: 5, lines: [
          textLine('$value', 39, 400), textLine(zh ? '同比 +4%' : '+4% Y/Y', 29, 400, NOTE),
        ] },
        { x: 220, top: 800, anchor: 'middle', lineGap: 5, lines: [
          textLine(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
          textLine(zh ? '营业利润率 18%' : '18% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    mobileye: {
      blocks: [
        { x: 432, top: 881, anchor: 'middle', lineGap: 5, lines: [
          textLine('$value', 39, 400), textLine(zh ? '同比 (8%)' : '(8%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 212, top: 982, anchor: 'middle', lineGap: 5, lines: [
          textLine(zh ? '营业利润率 16%' : '16% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    intel_foundry: {
      blocks: [
        { x: 432, top: 1006, anchor: 'middle', lineGap: 5, lines: [
          textLine('$value', 39, 400), textLine(zh ? '同比 (8%)' : '(8%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 220, top: 1090, anchor: 'middle', lineGap: 5, lines: [
          textLine(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
          textLine(zh ? '营业利润率 (134%)' : '(134%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    other: {
      blocks: [
        { x: 432, top: 1212, anchor: 'middle', lineGap: 5, lines: [
          textLine('$value', 39, 400), textLine(zh ? '同比 (40%)' : '(40%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 208, top: 1304, anchor: 'middle', lineGap: 5, lines: [textLine(zh ? '其他' : 'Other', 30, 800)] },
      ],
    },
    revenue: block(1176, 556, [
      textLine(zh ? '收入' : 'Revenue', 30, 800), textLine('$value', 39, 400),
      textLine(zh ? '同比 (6%)' : '(6%) Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1179, 1163, [
      textLine(zh ? '内部抵销' : 'Eliminations', 30, 800), textLine('$value', 39, 400),
    ]),
    gross_profit: block(1543, 444, [
      textLine(zh ? '毛利润' : 'Gross profit', 30, 800), textLine('$value', 39, 400),
      textLine(zh ? '利润率 15%' : '15% margin', 29, 400, NOTE),
      textLine(zh ? '同比 (28 个百分点)' : '(28pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1553, 1052, [
      textLine(zh ? '销售' : 'Cost', 30, 800), textLine(zh ? '成本' : 'of sales', 30, 800),
      textLine('$value', 39, 400),
    ]),
    operating_loss: block(1745, 1014, [
      textLine(zh ? '营业亏损' : 'Operating', 30, 800), ...(zh ? [] : [textLine('loss', 30, 800)]),
      textLine('$value', 39, 400), textLine(zh ? '利润率 (68%)' : '(68%) margin', 29, 400, NOTE),
      textLine(zh ? '同比 (68 个百分点)' : '(68pp) Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1934, 557, [
      textLine(zh ? '营业' : 'Operating', 30, 800), textLine(zh ? '费用' : 'expenses', 30, 800),
      textLine('$value', 39, 400),
    ]),
    restructuring: block(RIGHT_LABEL_X, 511, [
      textLine(zh ? '重组' : 'Restructuring', 30, 800), textLine('$value', 39, 400),
      textLine(zh ? '占收入 42%' : '42% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +37 个百分点' : '+37pp Y/Y', 29, 400, NOTE),
    ]),
    rnd: block(RIGHT_LABEL_X, 786, [
      textLine(zh ? '研究与' : 'Research &', 30, 800), textLine(zh ? '开发' : 'Development', 30, 800),
      textLine('$value', 39, 400), textLine(zh ? '占收入 30%' : '30% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
    ]),
    marketing_ga: block(RIGHT_LABEL_X, 1087, [
      textLine(zh ? '营销及一般行政' : 'Marketing,', 30, 800), ...(zh ? [] : [textLine('G&A', 30, 800)]),
      textLine('$value', 39, 400), textLine(zh ? '占收入 10%' : '10% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ]),
    seg_hub: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q3-fy24',
    name: 'Intel · Q3 FY24',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q3 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2010,
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
        source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    annotationsSvg: annotations(),
    layout: {
      nodes: {
        client_computing: { x: 396, y: 363, width: 71, height: 132 },
        datacenter_ai: { x: 396, y: 635, width: 71, height: 59 },
        network_edge: { x: 396, y: 821, width: 71, height: 27 },
        mobileye: { x: 396, y: 984, width: 71, height: 7 },
        intel_foundry: { x: 396, y: 1109, width: 71, height: 76 },
        other: { x: 396, y: 1320, width: 71, height: 9 },
        seg_hub: { x: 770, y: 622, width: 70, height: 319 },
        revenue: { x: 1141, y: 700, width: 70, height: 240 },
        eliminations: { x: 1144, y: 1064, width: 70, height: 76 },
        gross_profit: { x: 1508, y: 620, width: 70, height: 34 },
        cost_of_sales: { x: 1518, y: 815, width: 70, height: 204 },
        operating_loss: { x: 1710, y: 811, width: 70, height: 164 },
        operating_expenses: { x: 1899, y: 697, width: 70, height: 201 },
        restructuring: { x: 2264, y: 507, width: 71, height: 100 },
        rnd: { x: 2264, y: 805, width: 71, height: 71 },
        marketing_ga: { x: 2264, y: 1112, width: 71, height: 23 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 7.3, notes: ['(7%) Y/Y', '37% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 3.3, notes: ['+9% Y/Y', '10% operating margin'], color: DATACENTER, labelColor: DATACENTER, linkTint: DATACENTER_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.5, notes: ['+4% Y/Y', '18% operating margin'], color: NETWORK, labelColor: NETWORK, linkTint: NETWORK_LINK },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.5, notes: ['(8%) Y/Y', '16% operating margin'], color: MOBILEYE, labelColor: MOBILEYE, linkTint: MOBILEYE_LINK },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 4.4, notes: ['(8%) Y/Y', '(134%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.6, notes: ['(40%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'seg_hub', col: 1, order: 0, type: 'hub', label: '', value: 17.6, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'source', label: 'Revenue', value: 13.3, notes: ['(6%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -4.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.0, valueText: '$2.0B', notes: ['15% margin', '(28pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 11.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: 'Operating loss', value: -9.1, notes: ['(68%) margin', '(68pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: 'Operating expenses', value: 11.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 0, type: 'cost', label: 'Restructuring', value: 5.6, notes: ['42% of revenue', '+37pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'Research & Development', value: 4.0, valueText: '$4.0B', notes: ['30% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 6, order: 2, type: 'cost', label: 'Marketing, G&A', value: 1.4, notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'seg_hub', value: 7.3, sourceWidth: 132, targetWidth: 132, y0: 429, y1: 688, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'seg_hub', value: 3.3, sourceWidth: 59, targetWidth: 60, y0: 664.5, y1: 784, targetOrder: 1 },
      { source: 'network_edge', target: 'seg_hub', value: 1.5, sourceWidth: 27, targetWidth: 27, y0: 834.5, y1: 827.5, targetOrder: 2 },
      { source: 'mobileye', target: 'seg_hub', value: 0.5, sourceWidth: 7, targetWidth: 9, y0: 987.5, y1: 845.5, targetOrder: 3 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.4, sourceWidth: 76, targetWidth: 80, y0: 1147, y1: 890, targetOrder: 4 },
      { source: 'other', target: 'seg_hub', value: 0.6, sourceWidth: 9, targetWidth: 11, y0: 1324.5, y1: 935.5, targetOrder: 5 },
      { source: 'seg_hub', target: 'revenue', value: 13.3, sourceWidth: 241, targetWidth: 240, y0: 742.5, y1: 820, sourceOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.3, sourceWidth: 78, targetWidth: 76, y0: 902, y1: 1102, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.0, sourceWidth: 36, targetWidth: 34, y0: 718, y1: 637, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 11.3, sourceWidth: 204, targetWidth: 204, y0: 838, y1: 917, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 34, targetWidth: 36, y0: 637, y1: 715, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 9.1, sourceWidth: 164, targetWidth: 165, y0: 893, y1: 815.5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 5.6, sourceWidth: 102, targetWidth: 100, y0: 748, y1: 557, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 4.0, sourceWidth: 73, targetWidth: 71, y0: 835.5, y1: 840.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.4, sourceWidth: 26, targetWidth: 23, y0: 885, y1: 1123.5, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['mobileye'],
      zh: {
        name: 'Intel · 2024 财年第三季度',
        meta: { title: '英特尔 2024 财年第三季度利润表', titleSize: 116, titleTextLength: 1720 },
        annotationsSvg: annotations(),
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (7%)', '营业利润率 37%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +9%', '营业利润率 10%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 +4%', '营业利润率 18%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 (8%)', '营业利润率 16%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 (8%)', '营业利润率 (134%)'] },
          other: { label: '其他', notes: ['同比 (40%)'] },
          revenue: { label: '收入', notes: ['同比 (6%)'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 15%', '同比 (28 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (68%)', '同比 (68 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          restructuring: { label: '重组', notes: ['占收入 42%', '同比 +37 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 +3 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 10%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
