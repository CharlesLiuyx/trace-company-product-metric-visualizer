/* AMD Q1 FY24 income statement ($B), measured from the native Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DATA_CENTER = '#4a8397';
  const DATA_CENTER_LINK = '#a6c0c9';
  const CLIENT = '#e26301';
  const CLIENT_LINK = '#eab285';
  const GAMING = '#b2002a';
  const GAMING_LINK = '#d48598';
  const EMBEDDED = '#0b5366';
  const EMBEDDED_LINK = '#8aaab3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox, overflow = 'visible') => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="${overflow}">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 38, 407, 185, 145, '0 0 197 145', 'hidden')}
      ${svgIcon('amdRyzenWordmark', 29, 684, 205, 123, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 54, 957, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 35, 1194, 205, 69, '0 0 226 76')}
    </g>`;

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });

  const labels = {
    data_center: {
      blocks: [
        { x: 568, top: 318, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+80% Y/Y', 28, 400, NOTE),
        ] },
        { x: 512, top: 440, anchor: 'end', lineGap: 9, lines: [
          line('Data Center', 40, 800), line('23% operating margin', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 568, top: 632, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+85% Y/Y', 28, 400, NOTE),
        ] },
        { x: 501, top: 730, anchor: 'end', lineGap: 9, lines: [
          line('Client', 40, 800), line('6% operating margin', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 568, top: 883, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(48%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 513, top: 984, anchor: 'end', lineGap: 9, lines: [
          line('Gaming', 40, 800), line('16% operating margin', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 568, top: 1114, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(46%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 519, top: 1217, anchor: 'end', lineGap: 9, lines: [
          line('Embedded', 40, 800), line('40% operating margin', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1003, 516, 'middle', [
      line('Revenue', 40, 800), line('$value', 39), line('+2% Y/Y', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1439, 364, 'middle', [
      line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('47% margin', 28, 400, NOTE), line('+3pp Y/Y', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1436, 1109, 'middle', [
      line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 35),
    ]),
    operating_profit: block(1869, 300, 'middle', [
      line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('1% margin', 28, 400, NOTE), line('+3pp Y/Y', 28, 400, NOTE),
    ], 9),
    operating_expenses: block(1879, 860, 'middle', [
      line('Operating', 38, 800), line('expenses', 38, 800), line('$value', 37),
    ]),
    other: block(2168, 286, 'middle', [
      line('Other', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    tax_benefit: block(2180, 543, 'middle', [
      line('Tax benefit', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    net_profit: block(2464, 364, 'middle', [
      line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('2% margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE),
    ], 9),
    rnd: block(2380, 759, 'start', [
      line('Research &', 31, 800), line('Development', 31, 800), line('$value', 30),
      line('28% of revenue', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE),
    ]),
    sga: block(2373, 975, 'start', [
      line('Sales, General', 31, 800), line('& Admin', 31, 800), line('$value', 30),
      line('11% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE),
    ]),
    amortization: block(2377, 1181, 'start', [
      line('Amortization', 31, 800), line('of intangibles', 31, 800), line('$value', 30),
      line('7% of revenue', 28, 400, NOTE), line('(3pp) Y/Y', 28, 400, NOTE),
    ]),
  };

  const zhLabels = {
    data_center: {
      blocks: [
        { x: 568, top: 318, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +80%', 28, 400, NOTE),
        ] },
        { x: 512, top: 440, anchor: 'end', lineGap: 9, lines: [
          line('数据中心', 40, 800), line('营业利润率 23%', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 568, top: 632, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +85%', 28, 400, NOTE),
        ] },
        { x: 501, top: 730, anchor: 'end', lineGap: 9, lines: [
          line('客户端', 40, 800), line('营业利润率 6%', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 568, top: 883, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (48%)', 28, 400, NOTE),
        ] },
        { x: 513, top: 984, anchor: 'end', lineGap: 9, lines: [
          line('游戏', 40, 800), line('营业利润率 16%', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 568, top: 1114, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (46%)', 28, 400, NOTE),
        ] },
        { x: 519, top: 1217, anchor: 'end', lineGap: 9, lines: [
          line('嵌入式', 40, 800), line('营业利润率 40%', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1003, 516, 'middle', [
      line('收入', 40, 800), line('$value', 39), line('同比 +2%', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1439, 364, 'middle', [
      line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 47%', 28, 400, NOTE), line('同比 +3 个百分点', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1436, 1109, 'middle', [
      line('收入', 36, 800), line('成本', 36, 800), line('$value', 35),
    ]),
    operating_profit: block(1869, 300, 'middle', [
      line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 1%', 28, 400, NOTE), line('同比 +3 个百分点', 28, 400, NOTE),
    ], 9),
    operating_expenses: block(1879, 860, 'middle', [
      line('营业', 38, 800), line('费用', 38, 800), line('$value', 37),
    ]),
    other: block(2168, 286, 'middle', [
      line('其他', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    tax_benefit: block(2180, 543, 'middle', [
      line('税收收益', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    net_profit: block(2464, 364, 'middle', [
      line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 2%', 28, 400, NOTE), line('同比 +5 个百分点', 28, 400, NOTE),
    ], 9),
    rnd: block(2380, 759, 'start', [
      line('研究与', 31, 800), line('开发', 31, 800), line('$value', 30),
      line('占收入 28%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE),
    ]),
    sga: block(2373, 975, 'start', [
      line('销售、一般及行政', 31, 800), line('$value', 30),
      line('占收入 11%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE),
    ]),
    amortization: block(2377, 1181, 'start', [
      line('无形资产摊销', 31, 800), line('$value', 30),
      line('占收入 7%', 28, 400, NOTE), line('同比 (3 个百分点)', 28, 400, NOTE),
    ]),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q1-fy24',
    name: 'AMD · Q1 FY24',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2030,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 277,
      logoViewBox: '0 0 468 138',
      logoSvg: BUSINESS_ICONS.amdCompanyWordmark || '',
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
        source: { node: DATA_CENTER, label: DATA_CENTER },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: DATA_CENTER_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 62,
      nodes: {
        data_center: { x: 535, y: 407, width: 66, height: 144 },
        client: { x: 535, y: 721, width: 66, height: 83 },
        gaming: { x: 535, y: 975, width: 66, height: 55 },
        embedded: { x: 535, y: 1206, width: 66, height: 51 },
        revenue: { x: 971, y: 662, width: 65, height: 339 },
        gross_profit: { x: 1406, y: 546, width: 66, height: 159 },
        cost_of_revenue: { x: 1403, y: 906, width: 67, height: 180 },
        operating_profit: { x: 1836, y: 480, width: 66, height: 2 },
        operating_expenses: { x: 1847, y: 679, width: 65, height: 157 },
        other: { x: 2136, y: 368, width: 65, height: 2 },
        tax_benefit: { x: 2148, y: 520, width: 65, height: 2 },
        net_profit: { x: 2277, y: 410, width: 66, height: 4 },
        rnd: { x: 2277, y: 784, width: 66, height: 94 },
        sga: { x: 2277, y: 1034, width: 66, height: 38 },
        amortization: { x: 2277, y: 1233, width: 66, height: 22 },
      },
      labels,
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 2.337, notes: ['+80% Y/Y', '23% operating margin'], color: DATA_CENTER, labelColor: DATA_CENTER, linkTint: DATA_CENTER_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 1.368, notes: ['+85% Y/Y', '6% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.922, notes: ['(48%) Y/Y', '16% operating margin'], color: GAMING, labelColor: GAMING, linkTint: GAMING_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.846, notes: ['(46%) Y/Y', '40% operating margin'], color: EMBEDDED, labelColor: EMBEDDED, linkTint: EMBEDDED_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.473, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.560, notes: ['47% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.913 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.036, valueText: '$36M', notes: ['1% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.524 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.035, valueText: '$35M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_benefit', col: 4, order: 1, type: 'profit', label: 'Tax benefit', value: 0.052, valueText: '$52M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.123, notes: ['2% margin', '+5pp Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: ['Research &', 'Development'], value: 1.525, notes: ['28% of revenue', '+2pp Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.620, notes: ['11% of revenue', '+0pp Y/Y'] },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.392, notes: ['7% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 2.337, sourceWidth: 144, targetWidth: 145, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 1.368, sourceWidth: 83, targetWidth: 85, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.922, sourceWidth: 55, targetWidth: 57, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.846, sourceWidth: 51, targetWidth: 52, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.560, sourceWidth: 159, targetWidth: 159, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.913, sourceWidth: 180, targetWidth: 180, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.036, sourceWidth: 2, targetWidth: 2, y0: 547, y1: 481, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.524, sourceWidth: 157, targetWidth: 157, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.035, sourceWidth: 2, targetWidth: 1, y0: 369, y1: 410.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.036, sourceWidth: 2, targetWidth: 1, y0: 481, y1: 411.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 0.052, sourceWidth: 2, targetWidth: 2, y0: 521, y1: 413, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.525, sourceWidth: 95, targetWidth: 94, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.620, sourceWidth: 40, targetWidth: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.392, sourceWidth: 22, targetWidth: 22, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2024 财年第一季度',
        meta: {
          title: 'AMD 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          titleTextLength: 2030,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +80%', '营业利润率 23%'] },
          client: { label: '客户端', notes: ['同比 +85%', '营业利润率 6%'] },
          gaming: { label: '游戏', notes: ['同比 (48%)', '营业利润率 16%'] },
          embedded: { label: '嵌入式', notes: ['同比 (46%)', '营业利润率 40%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +3 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +5 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 +2 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 +0 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 7%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
