/* ====================================================================
 * AMD - Q4 FY23 income statement ($B)
 * Reconstructed from input/processed/amd-q4-fy23.png as a fixed
 * d3-sankey layout with reusable SVG AMD annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#e26301';
  const ORANGE_LINK = '#eab285';
  const MAGENTA = '#b2002a';
  const MAGENTA_LINK = '#d48598';
  const TEAL = '#0b5366';
  const TEAL_LINK = '#8aaab3';
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
      ${svgIcon('amdDataCenterCluster', 42, 428, 192, 150, '0 0 197 150', 'hidden')}
      ${svgIcon('amdRyzenWordmark', 29, 690, 205, 123, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 54, 966, 166, 136, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 38, 1207, 193, 65, '0 0 226 76')}
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
        { x: 576, top: 339, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+38% Y/Y', 28, 400, NOTE),
        ] },
        { x: 521, top: 467, anchor: 'end', lineGap: 9, lines: [
          line('Data Center', 40, 800), line('29% operating margin', 30, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 576, top: 640, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+62% Y/Y', 28, 400, NOTE),
        ] },
        { x: 521, top: 734, anchor: 'end', lineGap: 9, lines: [
          line('Client', 40, 800), line('4% operating margin', 31, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 576, top: 888, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(17%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 521, top: 988, anchor: 'end', lineGap: 9, lines: [
          line('Gaming', 40, 800), line('16% operating margin', 30, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 576, top: 1141, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(24%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 521, top: 1230, anchor: 'end', lineGap: 9, lines: [
          line('Embedded', 40, 800), line('44% operating margin', 30, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1005, 544, 'middle', [
      line('Revenue', 40, 800), line('$value', 39), line('+10% Y/Y', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1439, 413, 'middle', [
      line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('47% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1439, 1183, 'middle', [
      line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 35),
    ]),
    operating_profit: block(1876, 330, 'middle', [
      line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('6% margin', 28, 400, NOTE), line('+8pp Y/Y', 28, 400, NOTE),
    ], 9),
    operating_expenses: block(1876, 889, 'middle', [
      line('Operating', 38, 800), line('expenses', 38, 800), line('$value', 37),
    ]),
    other: block(2182.5, 287, 'middle', [
      line('Other', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    tax_benefit: block(2174, 550, 'middle', [
      line('Tax benefit', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    net_profit: block(2371, 383, 'start', [
      line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('11% margin', 28, 400, NOTE), line('+10pp Y/Y', 28, 400, NOTE),
    ], 9),
    rnd: block(2380, 781, 'start', [
      line('Research &', 31, 800), line('Development', 31, 800), line('$value', 30),
      line('24% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE),
    ]),
    sga: block(2373, 996, 'start', [
      line('Sales, General', 31, 800), line('& Admin', 31, 800), line('$value', 30),
      line('10% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE),
    ]),
    amortization: block(2377, 1205, 'start', [
      line('Amortization', 31, 800), line('of intangibles', 31, 800), line('$value', 30),
      line('7% of revenue', 28, 400, NOTE), line('(4pp) Y/Y', 28, 400, NOTE),
    ]),
  };

  const zhLabels = {
    data_center: {
      blocks: [
        { x: 576, top: 339, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +38%', 28, 400, NOTE),
        ] },
        { x: 521, top: 467, anchor: 'end', lineGap: 9, lines: [
          line('数据中心', 40, 800), line('营业利润率 29%', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 576, top: 640, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +62%', 28, 400, NOTE),
        ] },
        { x: 521, top: 734, anchor: 'end', lineGap: 9, lines: [
          line('客户端', 40, 800), line('营业利润率 4%', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 576, top: 888, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (17%)', 28, 400, NOTE),
        ] },
        { x: 521, top: 988, anchor: 'end', lineGap: 9, lines: [
          line('游戏', 40, 800), line('营业利润率 16%', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 576, top: 1141, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (24%)', 28, 400, NOTE),
        ] },
        { x: 521, top: 1230, anchor: 'end', lineGap: 9, lines: [
          line('嵌入式', 40, 800), line('营业利润率 44%', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1005, 544, 'middle', [
      line('收入', 40, 800), line('$value', 39), line('同比 +10%', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1439, 413, 'middle', [
      line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 47%', 28, 400, NOTE), line('同比 +4 个百分点', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1439, 1183, 'middle', [
      line('收入', 36, 800), line('成本', 36, 800), line('$value', 35),
    ]),
    operating_profit: block(1876, 330, 'middle', [
      line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 6%', 28, 400, NOTE), line('同比 +8 个百分点', 28, 400, NOTE),
    ], 9),
    operating_expenses: block(1876, 889, 'middle', [
      line('营业', 38, 800), line('费用', 38, 800), line('$value', 37),
    ]),
    other: block(2182.5, 287, 'middle', [
      line('其他', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    tax_benefit: block(2174, 550, 'middle', [
      line('税收收益', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL),
    ], 7),
    net_profit: block(2371, 383, 'start', [
      line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 11%', 28, 400, NOTE), line('同比 +10 个百分点', 28, 400, NOTE),
    ], 9),
    rnd: block(2380, 781, 'start', [
      line('研究与', 31, 800), line('开发', 31, 800), line('$value', 30),
      line('占收入 24%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE),
    ]),
    sga: block(2373, 996, 'start', [
      line('销售、一般及行政', 31, 800), line('$value', 30),
      line('占收入 10%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE),
    ]),
    amortization: block(2377, 1205, 'start', [
      line('无形资产摊销', 31, 800), line('$value', 30),
      line('占收入 7%', 28, 400, NOTE), line('同比 (4 个百分点)', 28, 400, NOTE),
    ]),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q4-fy23',
    name: 'AMD · Q4 FY23',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2021,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 305,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 57.75,
      nodes: {
        data_center: { x: 538, y: 429, width: 67, height: 131 },
        client: { x: 538, y: 731, width: 67, height: 84 },
        gaming: { x: 538, y: 981, width: 67, height: 78 },
        embedded: { x: 538, y: 1234, width: 67, height: 59 },
        revenue: { x: 973, y: 688, width: 65, height: 358 },
        gross_profit: { x: 1406, y: 598, width: 66, height: 167 },
        cost_of_revenue: { x: 1406, y: 974, width: 66, height: 187 },
        operating_profit: { x: 1840, y: 509, width: 65, height: 20 },
        operating_expenses: { x: 1843, y: 720, width: 65, height: 148 },
        other: { x: 2149, y: 369, width: 67, height: 2 },
        tax_benefit: { x: 2133, y: 514, width: 65, height: 15 },
        net_profit: { x: 2273, y: 408, width: 67, height: 37 },
        rnd: { x: 2273, y: 771, width: 67, height: 86 },
        sga: { x: 2273, y: 1025, width: 67, height: 36 },
        amortization: { x: 2273, y: 1255, width: 67, height: 22 },
      },
      labels,
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 2.282, notes: ['+38% Y/Y', '29% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 1.461, notes: ['+62% Y/Y', '4% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.368, notes: ['(17%) Y/Y', '16% operating margin'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.057, notes: ['(24%) Y/Y', '44% operating margin'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.168, notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.911, notes: ['47% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.257 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.342, notes: ['6% margin', '+8pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.575 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.028, valueText: '$28M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_benefit', col: 4, order: 1, type: 'profit', label: 'Tax benefit', value: 0.297, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['11% margin', '+10pp Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: ['Research &', 'Development'], value: 1.511, notes: ['24% of revenue', '(0pp) Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.644, notes: ['10% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.42, notes: ['7% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 2.282, sourceWidth: 131, targetWidth: 133, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 1.461, sourceWidth: 84, targetWidth: 85, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.368, sourceWidth: 78, targetWidth: 79, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.057, sourceWidth: 59, targetWidth: 61, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.911, sourceWidth: 169, targetWidth: 167, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.257, sourceWidth: 188, targetWidth: 187, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.342, sourceWidth: 18, targetWidth: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.575, sourceWidth: 148, targetWidth: 148, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.342, sourceWidth: 20, targetWidth: 20, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.028, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.297, sourceWidth: 15, targetWidth: 15, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 1.511, sourceWidth: 87, targetWidth: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.644, sourceWidth: 37, targetWidth: 36, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.42, sourceWidth: 24, targetWidth: 22, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2023 财年第四季度',
        meta: {
          title: 'AMD 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          titleTextLength: 2021,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +38%', '营业利润率 29%'] },
          client: { label: '客户端', notes: ['同比 +62%', '营业利润率 4%'] },
          gaming: { label: '游戏', notes: ['同比 (17%)', '营业利润率 16%'] },
          embedded: { label: '嵌入式', notes: ['同比 (24%)', '营业利润率 44%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +8 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +10 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (0 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 7%', '同比 (4 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
