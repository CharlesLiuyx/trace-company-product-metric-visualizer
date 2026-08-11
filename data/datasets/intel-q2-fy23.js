/* Intel Q2 FY23 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LINK = '#859db7';
  const CLIENT = '#003870';
  const CLIENT_LINK = '#859db7';
  const DATACENTER = '#775bbe';
  const DATACENTER_LINK = '#bbaedb';
  const NETWORK = '#66a61e';
  const NETWORK_LINK = '#b3cf93';
  const MOBILEYE = '#1f2eb8';
  const MOBILEYE_LINK = '#8796bd';
  const FOUNDRY = '#3aaadc';
  const FOUNDRY_LINK = '#8fcae5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const intelLogo = `
    <g fill="none" stroke="#0068b5" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="#00c7fd"/>`;

  const mobileyeWordmark = `
    <g data-typography-role="brand" aria-label="Mobileye wordmark">
      <path d="M82 1055v-13h13v13h-13zm0 0h13v29H82zm18-13h14v42h-14zm19 13h13v29h-13zm18 0h13v29h-13z" fill="${MOBILEYE}"/>
      <text x="157" y="1081" font-family="Noto Sans,Arial,sans-serif" font-size="38" font-weight="500" fill="${MOBILEYE}">mobileye™</text>
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 5) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        { x: 436, top: 335, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (12%)' : '(12%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 221, top: 455, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '客户端计算' : 'Client', 30, 800),
          ...(zh ? [] : [line('Computing', 30, 800)]),
          line(zh ? '营业利润率 15%' : '15% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    datacenter_ai: {
      blocks: [
        { x: 425, top: 606, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (15%)' : '(15%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 209, top: 717, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
          line(zh ? '营业利润率 4%' : '4% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    network_edge: {
      blocks: [
        { x: 425, top: 815, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (38%)' : '(38%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 205, top: 890, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
          line(zh ? '营业利润率 14%' : '14% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    mobileye: {
      blocks: [
        { x: 436, top: 978, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (1%)' : '(1%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 220, top: 1095, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '营业利润率 28%' : '28% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    intel_foundry: {
      blocks: [
        { x: 436, top: 1123, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 +307%' : '+307% Y/Y', 29, 400, NOTE),
        ] },
        { x: 208, top: 1178, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
          line(zh ? '营业利润率 (62%)' : '(62%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    other: {
      blocks: [
        { x: 436, top: 1255, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (48%)' : '(48%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 219, top: 1324, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '其他' : 'Other', 30, 800),
        ] },
      ],
    },
    revenue: block(904, 520, [
      line(zh ? '收入' : 'Revenue', 30, 800),
      line('$value', 39, 400),
      line(zh ? '同比 (15%)' : '(15%) Y/Y', 29, 400, NOTE),
    ]),
    gross_profit: block(1373, 364, [
      line(zh ? '毛利润' : 'Gross profit', 30, 800),
      line('$value', 39, 400),
      line(zh ? '利润率 36%' : '36% margin', 29, 400, NOTE),
      line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1373, 1065, [
      line(zh ? '销售成本' : 'Cost of sales', 30, 800),
      line('$value', 39, 400),
    ]),
    operating_loss: block(1640, 970, [
      line(zh ? '营业亏损' : 'Operating loss', 30, 800),
      line('$value', 39, 400),
      line(zh ? '利润率 (8%)' : '(8%) margin', 29, 400, NOTE),
      line(zh ? '同比 (3 个百分点)' : '(3pp) Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1840, 542, [
      line(zh ? '营业费用' : 'Operating', 30, 800),
      ...(zh ? [] : [line('expenses', 30, 800)]),
      line('$value', 39, 400),
    ]),
    rnd: block(2487, 618, [
      line(zh ? '研究与' : 'Research &', 31, 800),
      line(zh ? '开发' : 'Development', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 32%' : '32% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
    marketing_ga: block(2484, 860, [
      line(zh ? '营销及一般行政' : 'Marketing,', 31, 800),
      ...(zh ? [] : [line('G&A', 31, 800)]),
      line('$value', 31, 400),
      line(zh ? '占收入 11%' : '11% of revenue', 29, 400, NOTE),
      line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
    restructuring: block(2482, 1116, [
      line(zh ? '重组' : 'Restructuring', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 2%' : '2% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q2-fy23',
    name: 'Intel · Q2 FY23',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q2 FY23 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1335,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    layout: {
      nodes: {
        client_computing: { x: 401, y: 420, width: 71, height: 151 },
        datacenter_ai: { x: 401, y: 703, width: 71, height: 88 },
        network_edge: { x: 401, y: 915, width: 71, height: 29 },
        mobileye: { x: 401, y: 1078, width: 71, height: 8 },
        intel_foundry: { x: 401, y: 1219, width: 71, height: 4 },
        other: { x: 401, y: 1341, width: 71, height: 2 },
        revenue: { x: 868, y: 665, width: 70, height: 290 },
        gross_profit: { x: 1337, y: 536, width: 72, height: 103 },
        cost_of_sales: { x: 1337, y: 855, width: 72, height: 185 },
        operating_loss: { x: 1605, y: 918, width: 71, height: 21 },
        operating_expenses: { x: 1805, y: 684, width: 70, height: 126 },
        rnd: { x: 2269, y: 603, width: 71, height: 90 },
        marketing_ga: { x: 2269, y: 877, width: 71, height: 28 },
        restructuring: { x: 2269, y: 1127, width: 71, height: 2, color: RED_LINK },
      },
      labels: labels(false),
    },
    annotationsSvg: mobileyeWordmark,
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 6.8, valueText: '$6.8B', notes: ['(12%) Y/Y', '15% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 4.0, valueText: '$4.0B', notes: ['(15%) Y/Y', '4% operating margin'], color: DATACENTER, labelColor: DATACENTER, linkTint: DATACENTER_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.4, valueText: '$1.4B', notes: ['(38%) Y/Y', '14% operating margin'], color: NETWORK, labelColor: NETWORK, linkTint: NETWORK_LINK },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.5, valueText: '$0.5B', notes: ['(1%) Y/Y', '28% operating margin'], color: MOBILEYE, labelColor: MOBILEYE, linkTint: MOBILEYE_LINK },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 0.2, valueText: '$0.2B', notes: ['+307% Y/Y', '(62%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.1, valueText: '$0.1B', notes: ['(48%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.9, valueText: '$12.9B', notes: ['(15%) Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.6, valueText: '$4.6B', notes: ['36% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 8.3, valueText: '($8.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -1.0, valueText: '($1.0B)', notes: ['(8%) margin', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 5.7, valueText: '($5.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & Development', value: 4.1, valueText: '($4.1B)', notes: ['32% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 5, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.4, valueText: '($1.4B)', notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 2, type: 'cost', label: 'Restructuring', value: 0.2, valueText: '($0.2B)', notes: ['2% of revenue', '+1pp Y/Y'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'revenue', value: 6.8, sourceWidth: 151, targetWidth: 152, y0: 495.5, y1: 741, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'revenue', value: 4.0, sourceWidth: 88, targetWidth: 89, y0: 747, y1: 861.5, targetOrder: 1 },
      { source: 'network_edge', target: 'revenue', value: 1.4, sourceWidth: 29, targetWidth: 31, y0: 929.5, y1: 921.5, targetOrder: 2 },
      { source: 'mobileye', target: 'revenue', value: 0.5, sourceWidth: 8, targetWidth: 11, y0: 1082, y1: 942.5, targetOrder: 3 },
      { source: 'intel_foundry', target: 'revenue', value: 0.2, sourceWidth: 4, targetWidth: 5, y0: 1221, y1: 950.5, targetOrder: 4 },
      { source: 'other', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 1342, y1: 954, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 4.6, sourceWidth: 103, targetWidth: 103, y0: 716.5, y1: 587.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.3, sourceWidth: 187, targetWidth: 185, y0: 861.5, y1: 947.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.6, sourceWidth: 103, targetWidth: 105, y0: 587.5, y1: 736.5, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 1.0, sourceWidth: 21, targetWidth: 21, y0: 928.5, y1: 799.5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 4.1, sourceWidth: 91, targetWidth: 90, y0: 729.5, y1: 648, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.4, sourceWidth: 31, targetWidth: 28, y0: 790.5, y1: 891, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 4, targetWidth: 2, y0: 808, y1: 1128, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['mobileye™'],
      zh: {
        name: 'Intel · 2023 财年第二季度',
        meta: { title: '英特尔 2023 财年第二季度利润表', titleSize: 116, titleTextLength: 1720 },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (12%)', '营业利润率 15%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (15%)', '营业利润率 4%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (38%)', '营业利润率 14%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 (1%)', '营业利润率 28%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +307%', '营业利润率 (62%)'] },
          other: { label: '其他', notes: ['同比 (48%)'] },
          revenue: { label: '收入', notes: ['同比 (15%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (3 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 32%', '同比 +3 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 2%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
