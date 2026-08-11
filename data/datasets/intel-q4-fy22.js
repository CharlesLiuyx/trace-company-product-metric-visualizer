/* Intel Q4 FY22 income statement ($B), fixed to the 2667×1500 Source. */
(function () {
  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LABEL = '#006abb';
  const BLUE_LINK = '#859db8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2460;

  const colors = {
    client: { node: '#003870', link: '#859db8', label: '#003870' },
    datacenter: { node: '#775bbe', link: '#bbaedb', label: '#775bbe' },
    network: { node: '#66a61e', link: '#b3cf93', label: '#66a61e' },
    mobileye: { node: '#05267e', link: '#8796bd', label: '#05267e' },
    foundry: { node: '#169bd7', link: '#8fcae5', label: '#63badf' },
    other: { node: '#127cc1', link: '#8dbcdc', label: '#127cc1' },
  };

  const intelLogo = `
    <g fill="none" stroke="${BLUE}" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="#00c7fd"/>`;

  const mobileyeWordmark = `
    <g transform="translate(78 1015)" data-typography-role="brand" fill="#1f2eb8">
      <path d="M0 8h18v9c7-7 16-11 27-11 17 0 29 8 29 22v20H55V30c0-7-5-11-14-11-12 0-22 7-22 17v12H0V8Z"/>
      <path d="M0 8 18 0v8H0Z" fill="#3050d8"/>
      <text x="82" y="39" font-family="Arial,sans-serif" font-size="40" font-weight="400"
        textLength="205" lengthAdjust="spacingAndGlyphs">mobileye</text>
      <text x="274" y="20" font-family="Arial,sans-serif" font-size="15">™</text>
    </g>`;

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
          x: 436, top: 330, anchor: 'middle', lineGap: 5,
          lines: [textLine('$value', 39, 400), textLine(zh ? '同比 (36%)' : '(36%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 209, top: 441, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '客户端计算' : 'Client', 30, 800),
            ...(zh ? [] : [textLine('Computing', 30, 800)]),
            textLine(zh ? '营业利润率 11%' : '11% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 436, top: 603, anchor: 'middle', lineGap: 5,
          lines: [textLine('$value', 39, 400), textLine(zh ? '同比 (33%)' : '(33%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 196, top: 708, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
            textLine(zh ? '营业利润率 9%' : '9% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    network_edge: {
      blocks: [
        {
          x: 436, top: 813, anchor: 'middle', lineGap: 5,
          lines: [textLine('$value', 39, 400), textLine(zh ? '同比 (1%)' : '(1%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 196, top: 879, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
            textLine(zh ? '营业利润率 3%' : '3% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    mobileye: {
      blocks: [
        {
          x: 436, top: 965, anchor: 'middle', lineGap: 5,
          lines: [textLine('$value', 39, 400), textLine(zh ? '同比 +59%' : '+59% Y/Y', 29, 400, NOTE)],
        },
        {
          x: 208, top: 1067, anchor: 'middle', lineGap: 5,
          lines: [textLine(zh ? '营业利润率 37%' : '37% operating margin', 29, 400, NOTE)],
        },
      ],
    },
    intel_foundry: {
      blocks: [
        {
          x: 436, top: 1084, anchor: 'middle', lineGap: 5,
          lines: [textLine('$value', 39, 400), textLine(zh ? '同比 +30%' : '+30% Y/Y', 29, 400, NOTE)],
        },
        {
          x: 216, top: 1158, anchor: 'middle', lineGap: 5,
          lines: [
            textLine(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
            textLine(zh ? '营业利润率 (10%)' : '(10%) operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    other: {
      blocks: [
        { x: 436, top: 1252, anchor: 'middle', lines: [textLine('$value', 39, 400)] },
        { x: 224, top: 1292, anchor: 'middle', lines: [textLine(zh ? '其他' : 'Other', 30, 800)] },
      ],
    },
    revenue: block(902, 529, [
      textLine(zh ? '收入' : 'Revenue', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '同比 (32%)' : '(32%) Y/Y', 29, 400, NOTE),
    ]),
    gross_profit: block(1371, 395, [
      textLine(zh ? '毛利润' : 'Gross profit', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 39%' : '39% margin', 29, 400, NOTE),
      textLine(zh ? '同比 (14 个百分点)' : '(14pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1373, 1089, [
      textLine(zh ? '销售成本' : 'Cost of sales', 30, 800),
      textLine('$value', 39, 400),
    ]),
    operating_expenses: block(1849, 494, [
      textLine(zh ? '营业' : 'Operating', 30, 800),
      textLine(zh ? '费用' : 'expenses', 30, 800),
      textLine('$value', 39, 400),
    ]),
    operating_loss: block(1688, 1001, [
      textLine(zh ? '营业亏损' : 'Operating loss', 30, 800),
      textLine('$value', 39, 400),
      textLine(zh ? '利润率 (8%)' : '(8%) margin', 29, 400, NOTE),
      textLine(zh ? '同比 (32 个百分点)' : '(32pp) Y/Y', 29, 400, NOTE),
    ]),
    rnd: block(zh ? RIGHT_LABEL_X + 5 : RIGHT_LABEL_X, 489, [
      textLine(zh ? '研究与' : 'Research &', 31, 800),
      textLine(zh ? '开发' : 'Development', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 32%' : '32% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +12 个百分点' : '+12pp Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(RIGHT_LABEL_X, 777, [
      textLine(zh ? '营销及' : 'Marketing,', 31, 800),
      textLine(zh ? '一般行政' : 'G&A', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 12%' : '12% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(RIGHT_LABEL_X, 1037, [
      textLine(zh ? '重组' : 'Restructuring', 31, 800),
      textLine('$value', 31, 400),
      textLine(zh ? '占收入 3%' : '3% of revenue', 29, 400, NOTE),
      textLine(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
    ], 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q4-fy22',
    name: 'Intel · Q4 FY22',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q4 FY22 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 201,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2000,
      logoWidth: 430,
      logoHeight: 165,
      logoY: 273,
      logoViewBox: '0 0 490 175',
      logoSvg: intelLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      noteColor: NOTE,
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
    annotationsSvg: mobileyeWordmark,
    layout: {
      nodes: {
        client_computing: { x: 401, y: 415, width: 71, height: 149 },
        datacenter_ai: { x: 401, y: 690, width: 71, height: 96 },
        network_edge: { x: 401, y: 898, width: 71, height: 45 },
        mobileye: { x: 401, y: 1061, width: 71, height: 12 },
        intel_foundry: { x: 401, y: 1194, width: 71, height: 5 },
        other: { x: 401, y: 1309, width: 71, height: 3 },
        revenue: { x: 868, y: 659, width: 70, height: 317 },
        gross_profit: { x: 1335, y: 562, width: 71, height: 124 },
        cost_of_sales: { x: 1337, y: 875, width: 72, height: 193 },
        operating_loss: { x: 1653, y: 945, width: 71, height: 23 },
        operating_expenses: { x: 1815, y: 636, width: 70, height: 149 },
        rnd: { x: 2269, y: 475, width: 71, height: 100 },
        marketing_ga: { x: 2269, y: 791, width: 71, height: 38 },
        restructuring: { x: 2269, y: 1070, width: 71, height: 9 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 6.6, notes: ['(36%) Y/Y', '11% operating margin'], color: colors.client.node, labelColor: colors.client.label, linkTint: colors.client.link },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 4.3, notes: ['(33%) Y/Y', '9% operating margin'], color: colors.datacenter.node, labelColor: colors.datacenter.label, linkTint: colors.datacenter.link },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 2.1, notes: ['(1%) Y/Y', '3% operating margin'], color: colors.network.node, labelColor: colors.network.label, linkTint: colors.network.link },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.6, notes: ['+59% Y/Y', '37% operating margin'], color: colors.mobileye.node, labelColor: colors.mobileye.label, linkTint: colors.mobileye.link },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 0.3, notes: ['+30% Y/Y', '(10%) operating margin'], color: colors.foundry.node, labelColor: colors.foundry.label, linkTint: colors.foundry.link },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.2, notes: [], color: colors.other.node, labelColor: colors.other.label, linkTint: colors.other.link },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.0, notes: ['(32%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.5, notes: ['39% margin', '(14pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 8.5, notes: [], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -1.1, notes: ['(8%) margin', '(32pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 6.6, notes: [], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & Development', value: 4.4, notes: ['32% of revenue', '+12pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 5, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.7, notes: ['12% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 2, type: 'cost', label: 'Restructuring', value: 0.5, notes: ['3% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'revenue', value: 6.6, sourceWidth: 149, targetWidth: 149, targetOrder: 0, linkTint: colors.client.link },
      { source: 'datacenter_ai', target: 'revenue', value: 4.3, sourceWidth: 96, targetWidth: 96, targetOrder: 1, linkTint: colors.datacenter.link },
      { source: 'network_edge', target: 'revenue', value: 2.1, sourceWidth: 45, targetWidth: 45, targetOrder: 2, linkTint: colors.network.link },
      { source: 'mobileye', target: 'revenue', value: 0.6, sourceWidth: 12, targetWidth: 12, targetOrder: 3, linkTint: colors.mobileye.link },
      { source: 'intel_foundry', target: 'revenue', value: 0.3, sourceWidth: 5, targetWidth: 10, targetOrder: 4, linkTint: colors.foundry.link },
      { source: 'other', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 5, targetOrder: 5, linkTint: colors.other.link },
      { source: 'revenue', target: 'gross_profit', value: 5.5, sourceWidth: 124, targetWidth: 124, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.5, sourceWidth: 193, targetWidth: 193, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.5, sourceWidth: 124, targetWidth: 125, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 1.1, sourceWidth: 23, targetWidth: 24, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 4.4, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.7, sourceWidth: 38, targetWidth: 38, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.5, sourceWidth: 11, targetWidth: 9, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Mobileye'],
      zh: {
        name: 'Intel · 2022 财年第四季度',
        meta: { title: '英特尔 2022 财年第四季度利润表', titleSize: 116, titleTextLength: 1720 },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (36%)', '营业利润率 11%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (33%)', '营业利润率 9%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (1%)', '营业利润率 3%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 +59%', '营业利润率 37%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +30%', '营业利润率 (10%)'] },
          other: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (32%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 (14 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (32 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 32%', '同比 +12 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 12%', '同比 +3 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 3%', '同比 +3 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
