/* Intel Q1 FY23 income statement ($B), measured from the 2667×1500 Source. */
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
    <rect x="18" y="18" width="44" height="44" rx="2" fill="#00c7fd"/>`;

  const mobileyeWordmark = `
    <g data-typography-role="brand" aria-label="Mobileye wordmark">
      <path d="M82 1024v-10h12v10H82zm0 0h12v28H82zm17-10h13v38H99zm18 10h12v28h-12zm17 0h12v28h-12z" fill="${MOBILEYE}"/>
      <text x="156" y="1051" font-family="Noto Sans,Arial,sans-serif" font-size="38" font-weight="500" fill="${MOBILEYE}">mobileye™</text>
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 5) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        { x: 436, top: 328, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (38%)' : '(38%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 228, top: 442, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '客户端计算' : 'Client', 30, 800),
          ...(zh ? [] : [line('Computing', 30, 800)]),
          line(zh ? '营业利润率 9%' : '9% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    datacenter_ai: {
      blocks: [
        { x: 436, top: 590, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (39%)' : '(39%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 220, top: 696, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
          line(zh ? '营业利润率 (14%)' : '(14%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    network_edge: {
      blocks: [
        { x: 436, top: 797, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (30%)' : '(30%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 216, top: 877, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
          line(zh ? '营业利润率 (20%)' : '(20%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    mobileye: {
      blocks: [
        { x: 436, top: 930, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 +16%' : '+16% Y/Y', 29, 400, NOTE),
        ] },
        { x: 221, top: 1072, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '营业利润率 27%' : '27% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    intel_foundry: {
      blocks: [
        { x: 436, top: 1093, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
          line(zh ? '同比 (24%)' : '(24%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 216, top: 1147, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
          line(zh ? '营业利润率 (119%)' : '(119%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    other: {
      blocks: [
        { x: 436, top: 1225, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400),
        ] },
        { x: 226, top: 1285, anchor: 'middle', lineGap: 5, semanticRole: 'side-description', lines: [
          line(zh ? '其他' : 'Other', 30, 800),
        ] },
      ],
    },
    revenue: block(904, 529, [
      line(zh ? '收入' : 'Revenue', 30, 800),
      line('$value', 39, 400),
      line(zh ? '同比 (36%)' : '(36%) Y/Y', 29, 400, NOTE),
    ]),
    gross_profit: block(1355, 395, [
      line(zh ? '毛利润' : 'Gross profit', 30, 800),
      line('$value', 39, 400),
      line(zh ? '利润率 34%' : '34% margin', 29, 400, NOTE),
      line(zh ? '同比 (26 个百分点)' : '(26pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1363, 1034, [
      line(zh ? '销售成本' : 'Cost of sales', 30, 800),
      line('$value', 39, 400),
    ]),
    operating_loss: block(1639, 967, [
      line(zh ? '营业亏损' : 'Operating loss', 30, 800),
      line('$value', 39, 400),
      line(zh ? '利润率 (13%)' : '(13%) margin', 29, 400, NOTE),
      line(zh ? '同比 (36 个百分点)' : '(36pp) Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1819, 519, [
      line(zh ? '营业费用' : 'Operating', 30, 800),
      ...(zh ? [] : [line('expenses', 30, 800)]),
      line('$value', 39, 400),
    ]),
    rnd: block(2459, 510, [
      line(zh ? '研发' : 'Research &', 31, 800),
      line(zh ? '' : 'Development', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 35%' : '35% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +11 个百分点' : '+11pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
    marketing_ga: block(2462, 765, [
      line(zh ? '营销及一般行政' : 'Marketing,', 31, 800),
      ...(zh ? [] : [line('G&A', 31, 800)]),
      line('$value', 31, 400),
      line(zh ? '占收入 11%' : '11% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +2 个百分点' : '+2pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
    restructuring: block(2470, 1008, [
      line(zh ? '重组' : 'Restructuring', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 1%' : '1% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +0 个百分点' : '+0pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q1-fy23',
    name: 'Intel · Q1 FY23',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q1-fy23.png', width: 2667, height: 1500 },
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
      hidePeriodStamp: true,
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
        client_computing: { x: 401, y: 413, width: 71, height: 137 },
        datacenter_ai: { x: 401, y: 680, width: 71, height: 86 },
        network_edge: { x: 401, y: 886, width: 71, height: 34 },
        mobileye: { x: 401, y: 1050, width: 71, height: 9 },
        intel_foundry: { x: 401, y: 1199, width: 71, height: 3 },
        other: { x: 401, y: 1323, width: 71, height: 2 },
        revenue: { x: 868, y: 660, width: 70, height: 277 },
        gross_profit: { x: 1320, y: 566, width: 71, height: 94 },
        cost_of_sales: { x: 1327, y: 828, width: 72, height: 182 },
        operating_loss: { x: 1603, y: 899, width: 71, height: 33 },
        operating_expenses: { x: 1785, y: 661, width: 70, height: 127 },
        rnd: { x: 2269, y: 522, width: 71, height: 96 },
        marketing_ga: { x: 2269, y: 793, width: 71, height: 29 },
        restructuring: { x: 2269, y: 1021, width: 71, height: 3, color: RED_LINK },
      },
      labels: labels(false),
    },
    annotationsSvg: mobileyeWordmark,
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 5.7, valueText: '$5.7B', notes: ['(38%) Y/Y', '9% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 3.7, valueText: '$3.7B', notes: ['(39%) Y/Y', '(14%) operating margin'], color: DATACENTER, labelColor: DATACENTER, linkTint: DATACENTER_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.5, valueText: '$1.5B', notes: ['(30%) Y/Y', '(20%) operating margin'], color: NETWORK, labelColor: NETWORK, linkTint: NETWORK_LINK },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.5, valueText: '$0.5B', notes: ['+16% Y/Y', '27% operating margin'], color: MOBILEYE, labelColor: MOBILEYE, linkTint: MOBILEYE_LINK },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 0.1, valueText: '$0.1B', notes: ['(24%) Y/Y', '(119%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.2, valueText: '$0.2B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.7, valueText: '$11.7B', notes: ['(36%) Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.0, valueText: '$4.0B', notes: ['34% margin', '(26pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.7, valueText: '($7.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -1.5, valueText: '($1.5B)', notes: ['(13%) margin', '(36pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 5.5, valueText: '($5.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & Development', value: 4.1, valueText: '($4.1B)', notes: ['35% of revenue', '+11pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 5, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.3, valueText: '($1.3B)', notes: ['11% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 2, type: 'cost', label: 'Restructuring', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue', '+0pp Y/Y'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'revenue', value: 5.7, sourceWidth: 137, targetWidth: 135, y0: 481.5, y1: 727.5, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'revenue', value: 3.7, sourceWidth: 86, targetWidth: 88, y0: 723, y1: 840, targetOrder: 1 },
      { source: 'network_edge', target: 'revenue', value: 1.5, sourceWidth: 34, targetWidth: 35, y0: 903, y1: 902.5, targetOrder: 2 },
      { source: 'mobileye', target: 'revenue', value: 0.5, sourceWidth: 9, targetWidth: 9, y0: 1054.5, y1: 925.5, targetOrder: 3 },
      { source: 'intel_foundry', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 1200.5, y1: 932.5, targetOrder: 4 },
      { source: 'other', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 3, y0: 1324, y1: 935.5, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 4.0, sourceWidth: 94, targetWidth: 94, y0: 707, y1: 613, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.7, sourceWidth: 183, targetWidth: 182, y0: 845.5, y1: 919, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 94, targetWidth: 95, y0: 613, y1: 708.5, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 1.5, sourceWidth: 32, targetWidth: 32, y0: 915, y1: 772, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 4.1, sourceWidth: 96, targetWidth: 96, y0: 709, y1: 570, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.3, sourceWidth: 29, targetWidth: 29, y0: 771.5, y1: 807.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 787, y1: 1022.5, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['mobileye™'],
      zh: {
        name: 'Intel · 2023 财年第一季度',
        meta: { title: '英特尔 2023 财年第一季度利润表', titleSize: 116, titleTextLength: 1720 },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (38%)', '营业利润率 9%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (39%)', '营业利润率 (14%)'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (30%)', '营业利润率 (20%)'] },
          mobileye: { label: 'Mobileye', notes: ['同比 +16%', '营业利润率 27%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 (24%)', '营业利润率 (119%)'] },
          other: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (36%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 34%', '同比 (26 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (13%)', '同比 (36 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 35%', '同比 +11 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 11%', '同比 +2 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
