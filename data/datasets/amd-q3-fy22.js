/* ====================================================================
 * AMD - Q3 FY22 income statement ($B)
 * Reconstructed from input/processed/amd-q3-fy22.png as a fixed
 * d3-sankey layout with reusable SVG AMD annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DATA_CENTER = '#76b7b2';
  const DATA_CENTER_LABEL = '#009192';
  const DATA_CENTER_LINK = '#bad7d4';
  const CLIENT = '#f28e2c';
  const CLIENT_LABEL = '#ff9300';
  const CLIENT_LINK = '#f2c599';
  const GAMING = '#e15759';
  const GAMING_LABEL = '#ff7d78';
  const GAMING_LINK = '#e9abad';
  const EMBEDDED = '#7570b3';
  const EMBEDDED_LABEL = '#521b92';
  const EMBEDDED_LINK = '#bab8d6';
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
      ${svgIcon('amdDataCenterCluster', 70, 398, 210, 165, '0 0 180 150', 'hidden')}
      ${svgIcon('amdRyzenWordmark', 45, 642, 245, 147, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 72, 856, 192, 158, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 68, 1162, 212, 71, '0 0 226 76')}
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
        { x: 572, top: 338, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+45% Y/Y', 28, 400, NOTE),
        ] },
        { x: 512, top: 443, anchor: 'end', lineGap: 9, lines: [
          line('Data', 40, 800), line('Center', 40, 800),
          line('31% Op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 572, top: 601, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(40%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 512, top: 699, anchor: 'end', lineGap: 9, lines: [
          line('Client', 40, 800), line('(3%) op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 564, top: 807, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+14% Y/Y', 28, 400, NOTE),
        ] },
        { x: 504, top: 920, anchor: 'end', lineGap: 9, lines: [
          line('Gaming', 40, 800), line('9% op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 579, top: 1070, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+1,549% Y/Y', 28, 400, NOTE),
        ] },
        { x: 519, top: 1168, anchor: 'end', lineGap: 9, lines: [
          line('Embedded', 40, 800), line('49% op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1115, 511, 'middle', [
      line('Revenue', 40, 800), line('$value', 39), line('+29% Y/Y', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1553, 376, 'middle', [
      line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('42% margin', 28, 400, NOTE), line('(6pp) Y/Y', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1558, 1158, 'middle', [
      line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 35),
    ]),
    operating_expenses: block(1940, 505, 'middle', [
      line('Operating', 38, 800), line('expenses', 38, 800), line('$value', 37),
    ]),
    operating_loss: block(1790, 1052, 'middle', [
      line('Operating', 38, 800), line('loss', 38, 800), line('$value', 37),
      line('(1%) margin', 28, 400, NOTE), line('(23pp) Y/Y', 28, 400, NOTE),
    ]),
    rnd: block(2369, 758, 'start', [
      line('Research &', 31, 800), line('Development', 31, 800), line('$value', 30),
    ]),
    sga: block(2369, 947, 'start', [
      line('Sales, General', 31, 800), line('& Admin', 31, 800), line('$value', 30),
    ]),
    amortization: block(2369, 1125, 'start', [
      line('Amortization', 31, 800), line('of intangibles', 31, 800), line('$value', 30),
    ]),
  };

  const zhLabels = {
    data_center: {
      blocks: [
        { x: 572, top: 338, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +45%', 28, 400, NOTE),
        ] },
        { x: 512, top: 463, anchor: 'end', lineGap: 9, lines: [
          line('数据中心', 40, 800), line('营业利润率 31%', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 572, top: 601, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (40%)', 28, 400, NOTE),
        ] },
        { x: 512, top: 699, anchor: 'end', lineGap: 9, lines: [
          line('客户端', 40, 800), line('营业利润率 (3%)', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 564, top: 807, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +14%', 28, 400, NOTE),
        ] },
        { x: 504, top: 920, anchor: 'end', lineGap: 9, lines: [
          line('游戏', 40, 800), line('营业利润率 9%', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 579, top: 1070, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +1,549%', 28, 400, NOTE),
        ] },
        { x: 519, top: 1168, anchor: 'end', lineGap: 9, lines: [
          line('嵌入式', 40, 800), line('营业利润率 49%', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1115, 511, 'middle', [
      line('收入', 40, 800), line('$value', 39), line('同比 +29%', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1553, 376, 'middle', [
      line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 42%', 28, 400, NOTE), line('同比 (6 个百分点)', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1558, 1158, 'middle', [
      line('收入', 36, 800), line('成本', 36, 800), line('$value', 35),
    ]),
    operating_expenses: block(1940, 505, 'middle', [
      line('营业', 38, 800), line('费用', 38, 800), line('$value', 37),
    ]),
    operating_loss: block(1790, 1052, 'middle', [
      line('营业', 38, 800), line('亏损', 38, 800), line('$value', 37),
      line('利润率 (1%)', 28, 400, NOTE), line('同比 (23 个百分点)', 28, 400, NOTE),
    ]),
    rnd: block(2369, 758, 'start', [
      line('研究与', 31, 800), line('开发', 31, 800), line('$value', 30),
    ]),
    sga: block(2369, 947, 'start', [
      line('销售、一般及行政', 31, 800), line('$value', 30),
    ]),
    amortization: block(2369, 1125, 'start', [
      line('无形资产摊销', 31, 800), line('$value', 30),
    ]),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q3-fy22',
    name: 'AMD · Q3 FY22',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q3-fy22.png', width: 2667, height: 1500 },
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
      logoY: 309,
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
        source: { node: DATA_CENTER, label: DATA_CENTER_LABEL },
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
      scale: 68.2,
      nodes: {
        data_center: { x: 539, y: 429, width: 67, height: 116 },
        client: { x: 539, y: 689, width: 67, height: 73 },
        gaming: { x: 539, y: 896, width: 67, height: 118 },
        embedded: { x: 539, y: 1160, width: 67, height: 93 },
        revenue: { x: 1082, y: 653, width: 66, height: 408 },
        gross_profit: { x: 1520, y: 560, width: 67, height: 171 },
        cost_of_revenue: { x: 1524, y: 902, width: 68, height: 233 },
        operating_loss: { x: 1753, y: 1035, width: 67, height: 4 },
        operating_expenses: { x: 1907, y: 653, width: 66, height: 177 },
        rnd: { x: 2284, y: 752, width: 67, height: 92 },
        sga: { x: 2284, y: 960, width: 67, height: 41 },
        amortization: { x: 2284, y: 1132, width: 67, height: 38 },
      },
      labels,
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 1.6, notes: ['+45% Y/Y', '31% Op. margin'], color: DATA_CENTER, labelColor: DATA_CENTER_LABEL, linkTint: DATA_CENTER_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 1.0, notes: ['(40%) Y/Y', '(3%) op. margin'], color: CLIENT, labelColor: CLIENT_LABEL, linkTint: CLIENT_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.6, notes: ['+14% Y/Y', '9% op. margin'], color: GAMING, labelColor: GAMING_LABEL, linkTint: GAMING_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.3, notes: ['+1,549% Y/Y', '49% op. margin'], color: EMBEDDED, labelColor: EMBEDDED_LABEL, linkTint: EMBEDDED_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.6, notes: ['+29% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.4, notes: ['42% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.2 },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -0.1, notes: ['(1%) margin', '(23pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2.4 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: ['Research &', 'Development'], value: 1.3 },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.6 },
      { id: 'amortization', col: 5, order: 2, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.6 },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.6, sourceWidth: 116, targetWidth: 118, y0: 487, y1: 712, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 1.0, sourceWidth: 73, targetWidth: 76, y0: 725.5, y1: 809, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.6, sourceWidth: 118, targetWidth: 120, y0: 955, y1: 907, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.3, sourceWidth: 93, targetWidth: 94, y0: 1206.5, y1: 1014, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.4, sourceWidth: 173, targetWidth: 171, y0: 739.5, y1: 645.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.2, sourceWidth: 235, targetWidth: 233, y0: 943.5, y1: 1018, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, sourceWidth: 171, targetWidth: 173, y0: 645.5, y1: 739.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 1037, y1: 828, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, sourceWidth: 95, targetWidth: 92, y0: 700.5, y1: 798, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 44, targetWidth: 41, y0: 770, y1: 980.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.6, sourceWidth: 38, targetWidth: 38, y0: 811, y1: 1151, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2022 财年第三季度',
        meta: {
          title: 'AMD 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          titleTextLength: 2030,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +45%', '营业利润率 31%'] },
          client: { label: '客户端', notes: ['同比 (40%)', '营业利润率 (3%)'] },
          gaming: { label: '游戏', notes: ['同比 +14%', '营业利润率 9%'] },
          embedded: { label: '嵌入式', notes: ['同比 +1,549%', '营业利润率 49%'] },
          revenue: { label: '收入', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 42%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (23 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研究与开发' },
          sga: { label: '销售、一般及行政' },
          amortization: { label: '无形资产摊销' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
