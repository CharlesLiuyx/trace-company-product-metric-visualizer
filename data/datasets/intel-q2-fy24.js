/* Intel Q2 FY24 income statement ($B), reconstructed from the Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#127cc1';
  const BLUE_LINK = '#8dbcdB';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const COLORS = {
    client_computing: ['#003870', '#003870', '#859db7'],
    datacenter_ai: ['#775bbe', '#775bbe', '#bbaedb'],
    network_edge: ['#66a61e', '#66a61e', '#b3cf93'],
    mobileye: ['#05267e', '#05267e', '#8796bd'],
    intel_foundry: ['#169bd7', '#169bd7', '#8fcae5'],
    other: [BLUE, BLUE, BLUE_LINK],
  };

  const intelLogo = `
    <text x="18" y="190" fill="#006abb" font-family="Arial Black, Arial, sans-serif"
      font-size="180" font-weight="900" letter-spacing="-14">intel</text>
    <rect x="31" y="42" width="34" height="34" fill="#00cbff"/>`;

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 6) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });
  const twoBlocks = (valueX, valueTop, nameX, nameTop, valueLines, nameLines) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 6, lines: valueLines },
      { x: nameX, top: nameTop, anchor: 'middle', lineGap: 6, lines: nameLines },
    ],
  });

  const labels = {
    client_computing: twoBlocks(432, 352, 221, 466,
      [line('$value', 39), line('+9% Y/Y', 29, 400, NOTE)],
      [line('Client', 30, 800), line('Computing', 30, 800), line('34% operating margin', 29, 400, NOTE)]),
    datacenter_ai: twoBlocks(432, 578, 211, 678,
      [line('$value', 39), line('(3%) Y/Y', 29, 400, NOTE)],
      [line('Datacenter & AI', 30, 800), line('9% operating margin', 29, 400, NOTE)]),
    network_edge: twoBlocks(432, 746, 212, 831,
      [line('$value', 39), line('(1%) Y/Y', 29, 400, NOTE)],
      [line('Network & Edge', 30, 800), line('10% operating margin', 29, 400, NOTE)]),
    mobileye: twoBlocks(432, 919, 215, 986,
      [line('$value', 39), line('(3%) Y/Y', 29, 400, NOTE)],
      [line('mobileye™', 40, 400), line('16% operating margin', 29, 400, NOTE)]),
    intel_foundry: twoBlocks(432, 1054, 218, 1146,
      [line('$value', 39), line('+4% Y/Y', 29, 400, NOTE)],
      [line('Intel Foundry', 30, 800), line('(66%) operating margin', 29, 400, NOTE)]),
    other: twoBlocks(432, 1264, 228, 1342,
      [line('$value', 39), line('(45%) Y/Y', 29, 400, NOTE)],
      [line('Other', 30, 800)]),
    seg_hub: { blocks: [] },
    revenue: block(1174, 638, 'middle', [
      line('Revenue', 30, 800), line('$value', 39), line('(1%) Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1174, 1293, 'middle', [
      line('Eliminations', 30, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL),
    ]),
    gross_profit: block(1543, 512, 'middle', [
      line('Gross profit', 30, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('35% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1553, 1121, 'middle', [
      line('Cost', 30, 800, RED_LABEL), line('of sales', 30, 800, RED_LABEL),
      line('$value', 39, 400, RED_LABEL),
    ]),
    operating_expenses: block(1931, 647, 'middle', [
      line('Operating', 30, 800, RED_LABEL), line('expenses', 30, 800, RED_LABEL),
      line('$value', 39, 400, RED_LABEL),
    ]),
    operating_loss: block(1769, 1054, 'middle', [
      line('Operating', 30, 800, RED_LABEL), line('loss', 30, 800, RED_LABEL),
      line('$value', 39, 400, RED_LABEL), line('(15%) margin', 29, 400, NOTE),
      line('(7pp) Y/Y', 29, 400, NOTE),
    ]),
    rnd: block(2464, 564, 'middle', [
      line('Research &', 31, 800, RED_LABEL), line('Development', 31, 800, RED_LABEL),
      line('$value', 31, 400, RED_LABEL), line('33% of revenue', 29, 400, NOTE),
      line('+2pp Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(2464, 835, 'middle', [
      line('Marketing,', 31, 800, RED_LABEL), line('G&A', 31, 800, RED_LABEL),
      line('$value', 31, 400, RED_LABEL), line('10% of revenue', 29, 400, NOTE),
      line('(0pp) Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(2464, 1081, 'middle', [
      line('Restructuring', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
      line('7% of revenue', 29, 400, NOTE), line('+6pp Y/Y', 29, 400, NOTE),
    ], 8),
  };

  const zhLabels = {
    client_computing: twoBlocks(432, 352, 221, 488,
      [line('$value', 39), line('同比 +9%', 29, 400, NOTE)],
      [line('客户端计算', 30, 800), line('营业利润率 34%', 29, 400, NOTE)]),
    datacenter_ai: twoBlocks(432, 578, 211, 678,
      [line('$value', 39), line('同比 (3%)', 29, 400, NOTE)],
      [line('数据中心与 AI', 30, 800), line('营业利润率 9%', 29, 400, NOTE)]),
    network_edge: twoBlocks(432, 746, 212, 831,
      [line('$value', 39), line('同比 (1%)', 29, 400, NOTE)],
      [line('网络与边缘', 30, 800), line('营业利润率 10%', 29, 400, NOTE)]),
    mobileye: twoBlocks(432, 919, 215, 986,
      [line('$value', 39), line('同比 (3%)', 29, 400, NOTE)],
      [line('Mobileye', 36, 400), line('营业利润率 16%', 29, 400, NOTE)]),
    intel_foundry: twoBlocks(432, 1054, 218, 1146,
      [line('$value', 39), line('同比 +4%', 29, 400, NOTE)],
      [line('英特尔代工', 30, 800), line('营业利润率 (66%)', 29, 400, NOTE)]),
    other: twoBlocks(432, 1264, 228, 1342,
      [line('$value', 39), line('同比 (45%)', 29, 400, NOTE)],
      [line('其他', 30, 800)]),
    seg_hub: { blocks: [] },
    revenue: block(1174, 638, 'middle', [line('收入', 30, 800), line('$value', 39), line('同比 (1%)', 29, 400, NOTE)]),
    eliminations: block(1174, 1293, 'middle', [line('内部抵销', 30, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    gross_profit: block(1543, 512, 'middle', [line('毛利润', 30, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 35%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)]),
    cost_of_sales: block(1553, 1121, 'middle', [line('销售', 30, 800, RED_LABEL), line('成本', 30, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    operating_expenses: block(1931, 647, 'middle', [line('营业', 30, 800, RED_LABEL), line('费用', 30, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    operating_loss: block(1769, 1054, 'middle', [line('营业', 30, 800, RED_LABEL), line('亏损', 30, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL), line('利润率 (15%)', 29, 400, NOTE), line('同比 (7 个百分点)', 29, 400, NOTE)]),
    rnd: block(2464, 564, 'middle', [line('研究与', 31, 800, RED_LABEL), line('开发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 33%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 8),
    marketing_ga: block(2464, 855, 'middle', [line('营销及一般行政', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 10%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 8),
    restructuring: block(2464, 1081, 'middle', [line('重组', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 7%', 29, 400, NOTE), line('同比 +6 个百分点', 29, 400, NOTE)], 8),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q2-fy24',
    name: 'Intel · Q2 FY24',
    company: 'Intel',
    meta: {
      company: 'Intel', title: 'Intel Q2 FY24 Income Statement',
      period: 'Q2 FY24', periodNote: 'Ending Jun. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/intel-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 200, titleSize: 112, titleWeight: 800, titleTextLength: 2000,
      hidePeriodStamp: true,
      logoWidth: 450, logoHeight: 230, logoY: 210, logoViewBox: '0 0 490 220', logoSvg: intelLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 30, value: 39, note: 29, lineGap: 6 },
    },
    layout: {
      nodes: {
        client_computing: { x: 396, y: 438, width: 71, height: 124 },
        datacenter_ai: { x: 396, y: 689, width: 71, height: 50 },
        network_edge: { x: 396, y: 866, width: 71, height: 21 },
        mobileye: { x: 396, y: 1023, width: 71, height: 5 },
        intel_foundry: { x: 396, y: 1152, width: 71, height: 73 },
        other: { x: 396, y: 1358, width: 71, height: 7 },
        seg_hub: { x: 772, y: 683, width: 70, height: 291 },
        revenue: { x: 1139, y: 778, width: 70, height: 219 },
        eliminations: { x: 1139, y: 1200, width: 70, height: 70 },
        gross_profit: { x: 1508, y: 678, width: 70, height: 76 },
        cost_of_sales: { x: 1518, y: 966, width: 70, height: 140 },
        operating_loss: { x: 1735, y: 1001, width: 70, height: 31 },
        operating_expenses: { x: 1896, y: 794, width: 71, height: 110 },
        rnd: { x: 2264, y: 587, width: 71, height: 71 },
        marketing_ga: { x: 2264, y: 871, width: 71, height: 20 },
        restructuring: { x: 2264, y: 1118, width: 71, height: 14 },
      },
      labels,
    },
    nodes: [
      ['client_computing', 0, 0, 'source', 'Client Computing', 7.4, ['+9% Y/Y', '34% operating margin']],
      ['datacenter_ai', 0, 1, 'source', 'Datacenter & AI', 3.0, ['(3%) Y/Y', '9% operating margin']],
      ['network_edge', 0, 2, 'source', 'Network & Edge', 1.3, ['(1%) Y/Y', '10% operating margin']],
      ['mobileye', 0, 3, 'source', 'Mobileye', 0.4, ['(3%) Y/Y', '16% operating margin']],
      ['intel_foundry', 0, 4, 'source', 'Intel Foundry', 4.3, ['+4% Y/Y', '(66%) operating margin']],
      ['other', 0, 5, 'source', 'Other', 0.5, ['(45%) Y/Y']],
    ].map(([id, col, order, type, label, value, notes]) => ({
      id, col, order, type, label, value, notes,
      color: COLORS[id][0], labelColor: COLORS[id][1], linkTint: COLORS[id][2],
    })).concat([
      { id: 'seg_hub', col: 1, order: 0, type: 'hub', label: '', value: 17.1, color: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.8, notes: ['(1%) Y/Y'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -4.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.5, notes: ['35% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 8.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 0, type: 'cost', label: 'Operating loss', value: -2.0, valueText: '($2.0B)', notes: ['(15%) margin', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: 'Operating expenses', value: 6.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 0, type: 'cost', label: 'Research & Development', value: 4.2, notes: ['33% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 6, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.3, notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 2, type: 'cost', label: 'Restructuring', value: 0.9, notes: ['7% of revenue', '+6pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ]),
    links: [
      { source: 'client_computing', target: 'seg_hub', value: 7.4, sourceWidth: 124, targetWidth: 128, sourceOrder: 0, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'seg_hub', value: 3.0, sourceWidth: 50, targetWidth: 52, sourceOrder: 0, targetOrder: 1 },
      { source: 'network_edge', target: 'seg_hub', value: 1.3, sourceWidth: 21, targetWidth: 24, sourceOrder: 0, targetOrder: 2 },
      { source: 'mobileye', target: 'seg_hub', value: 0.4, sourceWidth: 5, targetWidth: 6, sourceOrder: 0, targetOrder: 3 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.3, sourceWidth: 73, targetWidth: 74, sourceOrder: 0, targetOrder: 4 },
      { source: 'other', target: 'seg_hub', value: 0.5, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 5 },
      { source: 'seg_hub', target: 'revenue', value: 12.8, sourceWidth: 219, targetWidth: 219, sourceOrder: 0, targetOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.3, sourceWidth: 72, targetWidth: 70, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 4.5, sourceWidth: 79, targetWidth: 76, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.3, sourceWidth: 140, targetWidth: 140, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.5, sourceWidth: 76, targetWidth: 79, y0: 716, y1: 833.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 2.0, sourceWidth: 31, targetWidth: 31, y0: 1016.5, y1: 888.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 4.2, sourceWidth: 74, targetWidth: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.3, sourceWidth: 23, targetWidth: 20, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.9, sourceWidth: 13, targetWidth: 14, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2024 财年第二季度',
        meta: { title: '英特尔 2024 财年第二季度利润表', titleSize: 116, titleTextLength: 1720, period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月' },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 +9%', '营业利润率 34%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (3%)', '营业利润率 9%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (1%)', '营业利润率 10%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 (3%)', '营业利润率 16%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +4%', '营业利润率 (66%)'] },
          other: { label: '其他', notes: ['同比 (45%)'] }, revenue: { label: '收入', notes: ['同比 (1%)'] },
          eliminations: { label: '内部抵销' }, gross_profit: { label: '毛利润', notes: ['利润率 35%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (15%)', '同比 (7 个百分点)'] },
          operating_expenses: { label: '营业费用' }, rnd: { label: '研发', notes: ['占收入 33%', '同比 +2 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 7%', '同比 +6 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
