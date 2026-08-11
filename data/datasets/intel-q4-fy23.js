/* Intel Q4 FY23 income statement ($B), measured from the active Build source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LABEL = '#006abb';
  const BLUE_LINK = '#859db7';
  const CLIENT = '#003870';
  const CLIENT_LINK = '#859db7';
  const PURPLE = '#775bbe';
  const PURPLE_LINK = '#bbaedb';
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

  const line = (text, size, weight, color, extra = {}) => ({ text, size, weight, ...(color ? { color } : {}), ...extra });
  const block = (x, top, anchor, lines, lineGap = 8, semanticRole = '') => ({
    x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
  });
  const amount = (x, top, note, color) => block(x, top, 'middle', [
    line('$value', 39, 400, color),
    ...(note ? [line(note, 29, 400, NOTE)] : []),
  ], 8);
  const side = (x, top, lines, margin, color) => block(x, top, 'end', [
    ...lines.map((text) => line(text, 31, 800, color)),
    ...(margin ? [line(margin, 28, 400, NOTE)] : []),
  ], 7);

  const intelLogo = `
    <g fill="none" stroke="${BLUE_LABEL}" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/><path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/><path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/><path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g><rect x="18" y="18" width="44" height="44" rx="0" fill="#00c7fd"/>`;

  const mobileyeBrand = `
    <g transform="translate(78 1063)" fill="${MOBILEYE}" data-typography-role="brand">
      <path d="M0 10h18v12l12-12h18v42H30V34L18 46v6H0z"/>
      <text x="58" y="43" font-family="Noto Sans, sans-serif" font-size="43" font-weight="500">mobileye</text>
    </g>`;

  const labels = {
    client_computing: { blocks: [
      amount(419.8, 344.5, '+33% Y/Y', CLIENT),
      side(354.8, 456.5, ['Client', 'Computing'], '33% operating margin', CLIENT),
    ] },
    datacenter_ai: { blocks: [
      amount(411.6, 640, '(10%) Y/Y', PURPLE),
      side(346.6, 744, ['Datacenter & AI'], '2% operating margin', PURPLE),
    ] },
    network_edge: { blocks: [
      amount(415.6, 837, '(24%) Y/Y', NETWORK),
      side(350.6, 922, ['Network & Edge'], '(1%) operating margin', NETWORK),
    ] },
    mobileye: { blocks: [
      amount(417.4, 998, '+13% Y/Y', MOBILEYE),
      block(349.4, 1148, 'end', [line('38% operating margin', 28, 400, NOTE)]),
    ] },
    intel_foundry: { blocks: [
      amount(433, 1133.5, '+63% Y/Y', FOUNDRY),
      side(357.2, 1239.5, ['Intel Foundry'], '(39%) operating margin', FOUNDRY),
    ] },
    other: { blocks: [
      amount(433, 1264, '(42%) Y/Y', BLUE_LABEL),
      side(258.6, 1359, ['Other'], '', BLUE_LABEL),
    ] },
    revenue: { blocks: [block(904, 559, 'middle', [
      line('Revenue', 39, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+10% Y/Y', 29, 400, NOTE),
    ], 9)] },
    gross_profit: { blocks: [block(1363, 444, 'middle', [
      line('Gross profit', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('46% margin', 29, 400, NOTE), line('+7pp Y/Y', 29, 400, NOTE),
    ], 9)] },
    cost_of_sales: { blocks: [block(1364, 1107, 'middle', [
      line('Cost of sales', 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL),
    ], 9)] },
    restructuring: { blocks: [block(1619, 917, 'middle', [
      line('Restructuring', 30, 800, GREEN_LABEL), line('$1.1B', 30, 400, GREEN_LABEL),
    ], 7)] },
    operating_profit: { blocks: [block(1842, 321, 'middle', [
      line('Operating profit', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('17% margin', 29, 400, NOTE), line('+25pp Y/Y', 29, 400, NOTE),
    ], 9)] },
    operating_expenses: { blocks: [block(1842, 900, 'middle', [
      line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL),
    ], 8)] },
    other_income: { blocks: [block(2165, 511, 'middle', [
      line('Other', 30, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7)] },
    net_profit: { blocks: [block(2484, 354, 'middle', [
      line('Net profit', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('17% margin', 29, 400, NOTE), line('+23pp Y/Y', 29, 400, NOTE),
    ], 9)] },
    tax: { blocks: [block(2485, 648, 'middle', [
      line('Tax', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL),
    ], 7)] },
    rnd: { blocks: [block(2475, 928, 'middle', [
      line('Research &', 31, 800, RED_LABEL), line('Development', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
      line('26% of revenue', 28, 400, NOTE), line('(6pp) Y/Y', 28, 400, NOTE),
    ], 8)] },
    marketing_ga: { blocks: [block(2475.5, 1149, 'middle', [
      line('Marketing,', 31, 800, RED_LABEL), line('G&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
      line('10% of revenue', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE),
    ], 8)] },
  };

  const zhLabels = JSON.parse(JSON.stringify(labels));
  const replaceBlock = (id, blockIndex, lines) => { zhLabels[id].blocks[blockIndex].lines.forEach((entry, index) => { if (lines[index] !== undefined) entry.text = lines[index]; }); };
  const replace = (id, lines) => replaceBlock(id, zhLabels[id].blocks.length - 1, lines);
  replaceBlock('client_computing', 0, ['$value', '同比 +33%']);
  replaceBlock('datacenter_ai', 0, ['$value', '同比 (10%)']);
  replaceBlock('network_edge', 0, ['$value', '同比 (24%)']);
  replaceBlock('mobileye', 0, ['$value', '同比 +13%']);
  replaceBlock('intel_foundry', 0, ['$value', '同比 +63%']);
  replaceBlock('other', 0, ['$value', '同比 (42%)']);
  zhLabels.client_computing.blocks[1].lines = [
    line('客户端计算', 31, 800, CLIENT), line('营业利润率 33%', 28, 400, NOTE),
  ];
  replace('datacenter_ai', ['数据中心与 AI', '营业利润率 2%']);
  replace('network_edge', ['网络与边缘', '营业利润率 (1%)']);
  replace('mobileye', ['营业利润率 38%']);
  replace('intel_foundry', ['英特尔代工', '营业利润率 (39%)']);
  replace('other', ['其他']);
  replace('revenue', ['收入', '$value', '同比 +10%']);
  replace('gross_profit', ['毛利润', '$value', '利润率 46%', '同比 +7 个百分点']);
  replace('cost_of_sales', ['销售成本', '$value']);
  replace('restructuring', ['重组', '$1.1B']);
  replace('operating_profit', ['营业利润', '$value', '利润率 17%', '同比 +25 个百分点']);
  replace('operating_expenses', ['营业', '费用', '$value']);
  replace('other_income', ['其他', '$value']);
  replace('net_profit', ['净利润', '$value', '利润率 17%', '同比 +23 个百分点']);
  replace('tax', ['税费', '$value']);
  zhLabels.rnd.blocks[0].lines = [
    line('研究与', 31, 800, RED_LABEL), line('开发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
    line('占收入 26%', 28, 400, NOTE), line('同比 (6 个百分点)', 28, 400, NOTE),
  ];
  replace('marketing_ga', ['营销及', '一般行政', '$value', '占收入 10%', '同比 (2 个百分点)']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q4-fy23',
    name: 'Intel · Q4 FY23',
    company: 'Intel',
    meta: {
      company: 'Intel', title: 'Intel Q4 FY23 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/intel-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 112, titleWeight: 800, titleTextLength: 2005,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 430, logoHeight: 165, logoY: 272, logoViewBox: '0 0 490 175', logoSvg: intelLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 31, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: mobileyeBrand,
    layout: {
      scale: 1,
      nodes: {
        client_computing: { x: 397, y: 432, width: 72, height: 170 },
        datacenter_ai: { x: 397, y: 732, width: 72, height: 77 },
        network_edge: { x: 397, y: 936, width: 72, height: 31 },
        mobileye: { x: 397, y: 1086, width: 72, height: 15 },
        intel_foundry: { x: 397, y: 1222, width: 72, height: 8 },
        other: { x: 397, y: 1352, width: 72, height: 5 },
        revenue: { x: 867, y: 713, width: 72, height: 296 },
        gross_profit: { x: 1326, y: 627, width: 72, height: 137 },
        cost_of_sales: { x: 1328, y: 936, width: 72, height: 161 },
        restructuring: { x: 1582, y: 884, width: 72, height: 24 },
        operating_profit: { x: 1806, y: 512, width: 72, height: 52 },
        operating_expenses: { x: 1806, y: 778, width: 72, height: 110 },
        other_income: { x: 2129, y: 493, width: 72, height: 1 },
        net_profit: { x: 2265, y: 392, width: 72, height: 52 },
        tax: { x: 2265, y: 686, width: 72, height: 2 },
        rnd: { x: 2265, y: 928, width: 72, height: 78 },
        marketing_ga: { x: 2265, y: 1211, width: 72, height: 33 },
      },
      labels,
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 8.8, notes: ['+33% Y/Y', '33% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 4.0, valueText: '$4.0B', notes: ['(10%) Y/Y', '2% operating margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.5, notes: ['(24%) Y/Y', '(1%) operating margin'], color: NETWORK, labelColor: NETWORK, linkTint: NETWORK_LINK },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.6, notes: ['+13% Y/Y', '38% operating margin'], color: MOBILEYE, labelColor: MOBILEYE, linkTint: MOBILEYE_LINK },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 0.3, notes: ['+63% Y/Y', '(39%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.2, notes: ['(42%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.4, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.0, valueText: '$7.0B', notes: ['46% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 8.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 3, order: 1, type: 'profit', label: 'Restructuring', value: -1.1, valueText: '($1.1B)', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['17% margin', '+25pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.7, notes: ['17% margin', '+23pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'Research & Development', value: 4.0, valueText: '($4.0B)', notes: ['26% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 6, order: 3, type: 'cost', label: 'Marketing, G&A', value: 1.6, valueText: '($1.6B)', notes: ['10% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'revenue', value: 8.8, sourceWidth: 170, targetWidth: 170, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'revenue', value: 4.0, sourceWidth: 77, targetWidth: 77, targetOrder: 1 },
      { source: 'network_edge', target: 'revenue', value: 1.5, sourceWidth: 31, targetWidth: 29, targetOrder: 2 },
      { source: 'mobileye', target: 'revenue', value: 0.6, sourceWidth: 13, targetWidth: 11, targetOrder: 3 },
      { source: 'intel_foundry', target: 'revenue', value: 0.3, sourceWidth: 8, targetWidth: 6, targetOrder: 4 },
      { source: 'other', target: 'revenue', value: 0.2, sourceWidth: 5, targetWidth: 3, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 7.0, sourceWidth: 137, targetWidth: 137, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.4, sourceWidth: 159, targetWidth: 161, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 51, targetWidth: 52, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.4, sourceWidth: 86, targetWidth: 86, sourceOrder: 1, targetOrder: 0 },
      { source: 'restructuring', target: 'operating_expenses', value: 1.1, sourceWidth: 24, targetWidth: 24, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, sourceWidth: 50, targetWidth: 48, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 1, targetWidth: 4, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 4.0, sourceWidth: 78, targetWidth: 78, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.6, sourceWidth: 32, targetWidth: 33, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['mobileye'],
      zh: {
        name: 'Intel · 2023 财年第四季度',
        meta: { title: '英特尔 2023 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 1770 },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 +33%', '营业利润率 33%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (10%)', '营业利润率 2%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (24%)', '营业利润率 (1%)'] },
          mobileye: { label: 'Mobileye', notes: ['同比 +13%', '营业利润率 38%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +63%', '营业利润率 (39%)'] },
          other: { label: '其他', notes: ['同比 (42%)'] }, revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +7 个百分点'] }, cost_of_sales: { label: '销售成本' },
          restructuring: { label: '重组' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +25 个百分点'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +23 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 (6 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 10%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
