/* ====================================================================
 * AMD - Q4 FY22 income statement ($B)
 * Reconstructed from input/processed/amd-q4-fy22.png as a fixed
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

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g data-typography-role="brand">
      ${svgIcon('amdEpycWordmark', 82, 384, 205, 160, '0 0 185 145')}
      ${svgIcon('amdRyzenWordmark', 37, 642, 230, 138, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 920, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1218, 205, 69, '0 0 226 76')}
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
        { x: 572, top: 335, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('+42% Y/Y', 28, 400, NOTE),
        ] },
        { x: 498, top: 442, anchor: 'end', lineGap: 9, lines: [
          line('Data', 40, 800), line('Center', 40, 800),
          line('27% op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 563, top: 607, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(51%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 502, top: 710, anchor: 'end', lineGap: 9, lines: [
          line('Client', 40, 800), line('(17%) op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 567, top: 834, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('(7%) Y/Y', 28, 400, NOTE),
        ] },
        { x: 507, top: 956, anchor: 'end', lineGap: 9, lines: [
          line('Gaming', 40, 800), line('16% op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 572, top: 1148, anchor: 'middle', lineGap: 10, lines: [line('$value', 39)] },
        { x: 518, top: 1231, anchor: 'end', lineGap: 9, lines: [
          line('Embedded', 40, 800), line('50% op. margin', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1004, 522, 'middle', [
      line('Revenue', 40, 800), line('$value', 39), line('+16% Y/Y', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1436, 362, 'middle', [
      line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('43% margin', 28, 400, NOTE), line('(7pp) Y/Y', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1441, 1162, 'middle', [
      line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 35),
    ]),
    operating_expenses: block(1865, 471, 'middle', [
      line('Operating', 38, 800), line('expenses', 38, 800), line('$value', 37),
    ]),
    operating_loss: block(1707, 974, 'middle', [
      line('Operating', 38, 800), line('loss', 38, 800), line('$value', 37),
      line('(3%) margin', 28, 400, NOTE), line('(28pp) Y/Y', 28, 400, NOTE),
    ]),
    rnd: block(2373, 466, 'start', [
      line('Research &', 31, 800), line('Development', 31, 800), line('$value', 30),
      line('24% of revenue', 28, 400, NOTE), line('+8pp Y/Y', 28, 400, NOTE),
    ]),
    sga: block(2367, 766, 'start', [
      line('Sales, General', 31, 800), line('& Admin', 31, 800), line('$value', 30),
      line('11% of revenue', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE),
    ]),
    amortization: block(2370, 1045, 'start', [
      line('Amortization', 31, 800), line('of intangibles', 31, 800), line('$value', 30),
      line('11% of revenue', 28, 400, NOTE), line('+11pp Y/Y', 28, 400, NOTE),
    ]),
  };

  const zhLabels = {
    data_center: {
      blocks: [
        { x: 572, top: 335, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 +42%', 28, 400, NOTE),
        ] },
        { x: 498, top: 462, anchor: 'end', lineGap: 9, lines: [
          line('数据中心', 40, 800), line('营业利润率 27%', 28, 400, NOTE),
        ] },
      ],
    },
    client: {
      blocks: [
        { x: 563, top: 607, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (51%)', 28, 400, NOTE),
        ] },
        { x: 502, top: 710, anchor: 'end', lineGap: 9, lines: [
          line('客户端', 40, 800), line('营业利润率 (17%)', 28, 400, NOTE),
        ] },
      ],
    },
    gaming: {
      blocks: [
        { x: 567, top: 834, anchor: 'middle', lineGap: 10, lines: [
          line('$value', 39), line('同比 (7%)', 28, 400, NOTE),
        ] },
        { x: 507, top: 956, anchor: 'end', lineGap: 9, lines: [
          line('游戏', 40, 800), line('营业利润率 16%', 28, 400, NOTE),
        ] },
      ],
    },
    embedded: {
      blocks: [
        { x: 572, top: 1148, anchor: 'middle', lineGap: 10, lines: [line('$value', 39)] },
        { x: 518, top: 1231, anchor: 'end', lineGap: 9, lines: [
          line('嵌入式', 40, 800), line('营业利润率 50%', 28, 400, NOTE),
        ] },
      ],
    },
    revenue: block(1004, 522, 'middle', [
      line('收入', 40, 800), line('$value', 39), line('同比 +16%', 28, 400, NOTE),
    ], 10),
    gross_profit: block(1436, 362, 'middle', [
      line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line('利润率 43%', 28, 400, NOTE), line('同比 (7 个百分点)', 28, 400, NOTE),
    ], 9),
    cost_of_revenue: block(1441, 1162, 'middle', [
      line('收入', 36, 800), line('成本', 36, 800), line('$value', 35),
    ]),
    operating_expenses: block(1865, 471, 'middle', [
      line('营业', 38, 800), line('费用', 38, 800), line('$value', 37),
    ]),
    operating_loss: block(1707, 974, 'middle', [
      line('营业', 38, 800), line('亏损', 38, 800), line('$value', 37),
      line('利润率 (3%)', 28, 400, NOTE), line('同比 (28 个百分点)', 28, 400, NOTE),
    ]),
    rnd: block(2373, 466, 'start', [
      line('研究与', 31, 800), line('开发', 31, 800), line('$value', 30),
      line('占收入 24%', 28, 400, NOTE), line('同比 +8 个百分点', 28, 400, NOTE),
    ]),
    sga: block(2367, 766, 'start', [
      line('销售、一般及行政', 31, 800), line('$value', 30),
      line('占收入 11%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE),
    ]),
    amortization: block(2370, 1045, 'start', [
      line('无形资产摊销', 31, 800), line('$value', 30),
      line('占收入 11%', 28, 400, NOTE), line('同比 +11 个百分点', 28, 400, NOTE),
    ]),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q4-fy22',
    name: 'AMD · Q4 FY22',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q4-fy22.png', width: 2667, height: 1500 },
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
        data_center: { x: 539, y: 426, width: 66, height: 111 },
        client: { x: 539, y: 704, width: 66, height: 60 },
        gaming: { x: 539, y: 931, width: 66, height: 110 },
        embedded: { x: 539, y: 1209, width: 66, height: 93 },
        revenue: { x: 972, y: 672, width: 65, height: 382 },
        gross_profit: { x: 1403, y: 550, width: 66, height: 163 },
        cost_of_revenue: { x: 1408, y: 923, width: 66, height: 218 },
        operating_expenses: { x: 1833, y: 625, width: 65, height: 172 },
        operating_loss: { x: 1674, y: 952, width: 66, height: 8 },
        rnd: { x: 2267, y: 461, width: 66, height: 91 },
        sga: { x: 2267, y: 790, width: 66, height: 39 },
        amortization: { x: 2267, y: 1063, width: 66, height: 40 },
      },
      labels,
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 1.7, notes: ['+42% Y/Y', '27% op. margin'], color: DATA_CENTER, labelColor: DATA_CENTER_LABEL, linkTint: DATA_CENTER_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 0.9, notes: ['(51%) Y/Y', '(17%) op. margin'], color: CLIENT, labelColor: CLIENT_LABEL, linkTint: CLIENT_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.6, notes: ['(7%) Y/Y', '16% op. margin'], color: GAMING, labelColor: GAMING_LABEL, linkTint: GAMING_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.4, notes: ['50% op. margin'], color: EMBEDDED, labelColor: EMBEDDED_LABEL, linkTint: EMBEDDED_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.6, notes: ['+16% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.4, notes: ['43% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.2 },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2.6 },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -0.1, notes: ['(3%) margin', '(28pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: ['Research &', 'Development'], value: 1.4, notes: ['24% of revenue', '+8pp Y/Y'] },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.6, notes: ['11% of revenue', '+2pp Y/Y'] },
      { id: 'amortization', col: 5, order: 2, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.6, notes: ['11% of revenue', '+11pp Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.7, sourceWidth: 111, targetWidth: 116, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 0.9, sourceWidth: 60, targetWidth: 61, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.6, sourceWidth: 110, targetWidth: 111, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.4, sourceWidth: 93, targetWidth: 94, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.4, sourceWidth: 163, targetWidth: 163, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.2, sourceWidth: 218, targetWidth: 218, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, sourceWidth: 163, targetWidth: 164, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.1, sourceWidth: 8, targetWidth: 8, y0: 956, y1: 793, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 92, targetWidth: 91, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 40, targetWidth: 39, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.6, sourceWidth: 40, targetWidth: 40, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2022 财年第四季度',
        meta: {
          title: 'AMD 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          titleTextLength: 2030,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +42%', '营业利润率 27%'] },
          client: { label: '客户端', notes: ['同比 (51%)', '营业利润率 (17%)'] },
          gaming: { label: '游戏', notes: ['同比 (7%)', '营业利润率 16%'] },
          embedded: { label: '嵌入式', notes: ['营业利润率 50%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_expenses: { label: '营业费用' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (28 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 +8 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 +2 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 11%', '同比 +11 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
