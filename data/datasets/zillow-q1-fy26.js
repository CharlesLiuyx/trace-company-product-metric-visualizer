/* Zillow Q1 FY26 income statement ($M), reconstructed from the processed source. */
(function () {
  const BLUE = '#011751';
  const BLUE_LINK = '#858fa9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BACKGROUND = '#f2f2f2';
  const RIGHT_X = 2466;

  const card = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="34" fill="${BLUE}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#fff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (language) => `
    <g>
      <line x1="2263" y1="573" x2="2334" y2="573" stroke="${RED}" stroke-width="2"/>
      ${card(81, 1203, 163, 163, language === 'zh'
        ? [
          { text: '访问次数', y: 1255, size: 27, weight: 800 },
          { text: '23 亿', y: 1296, size: 29, weight: 500 },
          { text: '同比 (3%)', y: 1342, size: 27, weight: 500 },
        ]
        : [
          { text: 'Visits', y: 1255, size: 29, weight: 800 },
          { text: '2.3B', y: 1296, size: 29, weight: 500 },
          { text: '(3%) Y/Y', y: 1342, size: 28, weight: 500 },
        ])}
      ${card(260, 1203, 589, 163, language === 'zh'
        ? [
          { text: '月均独立用户', y: 1255, size: 29, weight: 800 },
          { text: '2.20 亿', y: 1296, size: 29, weight: 500 },
          { text: '同比 (3%)', y: 1342, size: 28, weight: 500 },
        ]
        : [
          { text: 'Average Monthly Unique Users', y: 1255, size: 29, weight: 800 },
          { text: '220M', y: 1296, size: 29, weight: 500 },
          { text: '(3%) Y/Y', y: 1342, size: 28, weight: 500 },
        ])}
    </g>`;

  const block = (x, top, lines, anchor = 'middle', lineGap = 13) => ({ x, top, anchor, lineGap, lines });
  const line = (text, size, options = {}) => ({ text, size, ...options });

  const layoutLabels = {
    residential: { blocks: [
      block(435, 341, [line('$value', 39, { weight: 400 }), line('+8% Y/Y', 28, { weight: 400, color: NOTE })]),
      block(337, 594, [line('Residential', 40, { weight: 800 })], 'end'),
    ] },
    rentals: { blocks: [block(435, 716, [line('$value', 39, { weight: 400 }), line('+42% Y/Y', 28, { weight: 400, color: NOTE })])] },
    home_loans: { blocks: [block(435, 930, [line('$value', 39, { weight: 400 }), line('+56% Y/Y', 28, { weight: 400, color: NOTE })])] },
    other_revenue: { blocks: [
      block(435, 1080, [line('$value', 39, { weight: 400 }), line('Flat Y/Y', 28, { weight: 400, color: NOTE })]),
      block(280, 1161, [line('Other', 40, { weight: 800 })], 'end'),
    ] },
    revenue: { blocks: [block(902, 462, [
      line('Revenue', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('+18% Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    gross_profit: { blocks: [block(1367, 318, [
      line('Gross profit', 39, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('73% margin', 28, { weight: 400, color: NOTE }), line('(3pp) Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    cost_of_revenue: { blocks: [block(1367, 1168, [
      line('Cost of', 35, { weight: 800 }), line('revenue', 35, { weight: 800 }), line('$value', 35, { weight: 400 }),
    ], 'middle', 12)] },
    operating_profit: { blocks: [block(1837, 226, [
      line('Operating profit', 39, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('5% margin', 28, { weight: 400, color: NOTE }), line('+7pp Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    operating_expenses: { blocks: [block(1837, 929, [
      line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39, { weight: 400 }),
    ])] },
    other_income: { blocks: [block(2194, 383, [line('Other', 30, { weight: 800 }), line('$value', 30, { weight: 400 })], 'middle', 11)] },
    net_profit: { blocks: [block(RIGHT_X, 273, [
      line('Net profit', 40, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('6% margin', 28, { weight: 400, color: NOTE }), line('+5pp Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    tax_interest: { blocks: [block(RIGHT_X, 537, [line('Tax & interest', 31, { weight: 800 }), line('$value', 31, { weight: 400 })], 'middle', 11)] },
    sm: { blocks: [block(RIGHT_X, 754, [
      line('S&M', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('30% of revenue', 29, { weight: 400, color: NOTE }), line('(3pp) Y/Y', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    product: { blocks: [block(RIGHT_X, 982, [
      line('Product', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('21% of revenue', 29, { weight: 400, color: NOTE }), line('(4pp) Y/Y', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    ga: { blocks: [block(RIGHT_X, 1209, [
      line('G&A', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('17% of revenue', 29, { weight: 400, color: NOTE }), line('(3pp) Y/Y', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
  };

  const zhLayoutLabels = {
    residential: { blocks: [
      block(435, 341, [line('$value', 39, { weight: 400 }), line('同比 +8%', 28, { weight: 400, color: NOTE })]),
      block(337, 594, [line('住宅业务', 38, { weight: 800 })], 'end'),
    ] },
    rentals: { blocks: [block(435, 716, [line('$value', 39, { weight: 400 }), line('同比 +42%', 28, { weight: 400, color: NOTE })])] },
    home_loans: { blocks: [block(435, 930, [line('$value', 39, { weight: 400 }), line('同比 +56%', 28, { weight: 400, color: NOTE })])] },
    other_revenue: { blocks: [
      block(435, 1080, [line('$value', 39, { weight: 400 }), line('同比持平', 28, { weight: 400, color: NOTE })]),
      block(280, 1161, [line('其他', 40, { weight: 800 })], 'end'),
    ] },
    revenue: { blocks: [block(902, 462, [line('收入', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('同比 +18%', 28, { weight: 400, color: NOTE })])] },
    gross_profit: { blocks: [block(1367, 318, [
      line('毛利润', 39, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('利润率 73%', 28, { weight: 400, color: NOTE }), line('同比 (3 个百分点)', 28, { weight: 400, color: NOTE }),
    ])] },
    cost_of_revenue: { blocks: [block(1367, 1168, [line('收入', 35, { weight: 800 }), line('成本', 35, { weight: 800 }), line('$value', 35, { weight: 400 })], 'middle', 12)] },
    operating_profit: { blocks: [block(1837, 226, [
      line('营业利润', 39, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('利润率 5%', 28, { weight: 400, color: NOTE }), line('同比 +7 个百分点', 28, { weight: 400, color: NOTE }),
    ])] },
    operating_expenses: { blocks: [block(1837, 929, [line('运营', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 39, { weight: 400 })])] },
    other_income: { blocks: [block(2194, 383, [line('其他', 30, { weight: 800 }), line('$value', 30, { weight: 400 })], 'middle', 11)] },
    net_profit: { blocks: [block(RIGHT_X, 273, [
      line('净利润', 40, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('利润率 6%', 28, { weight: 400, color: NOTE }), line('同比 +5 个百分点', 28, { weight: 400, color: NOTE }),
    ])] },
    tax_interest: { blocks: [block(RIGHT_X, 537, [line('税费及利息', 31, { weight: 800 }), line('$value', 31, { weight: 400 })], 'middle', 11)] },
    sm: { blocks: [block(RIGHT_X, 754, [
      line('销售与市场', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('占收入 30%', 29, { weight: 400, color: NOTE }), line('同比 (3 个百分点)', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    product: { blocks: [block(RIGHT_X, 982, [
      line('产品', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('占收入 21%', 29, { weight: 400, color: NOTE }), line('同比 (4 个百分点)', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    ga: { blocks: [block(RIGHT_X, 1209, [
      line('管理费用', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('占收入 17%', 29, { weight: 400, color: NOTE }), line('同比 (3 个百分点)', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zillow-q1-fy26',
    name: 'Zillow · Q1 FY26',
    company: 'Zillow',
    meta: {
      company: 'Zillow', title: 'Zillow Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/zillow-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2092, hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 }, allowRasterAnnotations: true,
    },
    annotationsSvg: annotations('en'),
    rasterAnnotations: [
      { key: 'zillow-company-wordmark-q1-fy26', href: 'data/assets/raster-annotations/zillow/company-wordmark-q1-fy26.png', x: 553, y: 276, width: 690, height: 103 },
      { key: 'zillow-premier-agent-wordmark-q1-fy26', href: 'data/assets/raster-annotations/zillow/premier-agent-wordmark-q1-fy26.png', x: 54, y: 448, width: 340, height: 121 },
      { key: 'zillow-rentals-wordmark-q1-fy26', href: 'data/assets/raster-annotations/zillow/rentals-wordmark-q1-fy26.png', x: 89, y: 775, width: 272, height: 118 },
      { key: 'zillow-home-loans-wordmark-q1-fy26', href: 'data/assets/raster-annotations/zillow/home-loans-wordmark-q1-fy26.png', x: 77, y: 965, width: 301, height: 107 },
    ],
    layout: {
      scale: 1,
      nodes: {
        residential: { x: 400, y: 432, width: 71, height: 260 }, rentals: { x: 400, y: 807, width: 71, height: 105 },
        home_loans: { x: 400, y: 1021, width: 71, height: 36 }, other_revenue: { x: 400, y: 1173, width: 71, height: 5 },
        revenue: { x: 867, y: 607, width: 70, height: 410 }, gross_profit: { x: 1333, y: 503, width: 71, height: 300 },
        cost_of_revenue: { x: 1333, y: 1036, width: 71, height: 107 }, operating_profit: { x: 1802, y: 412, width: 70, height: 18 },
        operating_expenses: { x: 1802, y: 630, width: 70, height: 281 }, other_income: { x: 2159, y: 362, width: 70, height: 7 },
        net_profit: { x: 2268, y: 301, width: 71, height: 25 }, tax_interest: { x: 2263, y: 573, width: 71, height: 1 },
        sm: { x: 2268, y: 766, width: 71, height: 120 }, product: { x: 2268, y: 993, width: 71, height: 85 }, ga: { x: 2268, y: 1216, width: 71, height: 70 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'residential', col: 0, order: 0, type: 'source', label: 'Residential', value: 450, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rentals', col: 0, order: 1, type: 'source', label: 'Rentals', value: 183, notes: ['+42% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'home_loans', col: 0, order: 2, type: 'source', label: 'Home Loans', value: 64, notes: ['+56% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 3, type: 'source', label: 'Other', value: 11, notes: ['Flat Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 708, notes: ['+18% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 519, notes: ['73% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 189, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 36, notes: ['5% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 483, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 16, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 46, notes: ['6% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_interest', col: 5, order: 1, type: 'cost', label: 'Tax & interest', value: 6, color: BACKGROUND, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 210, notes: ['30% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 5, order: 3, type: 'cost', label: 'Product', value: 150, notes: ['21% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 123, notes: ['17% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'residential', target: 'revenue', value: 450, sourceWidth: 260, targetWidth: 260, y0: 562, y1: 737, sourceOrder: 0, targetOrder: 0 },
      { source: 'rentals', target: 'revenue', value: 183, sourceWidth: 105, targetWidth: 105, y0: 859.5, y1: 919.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'home_loans', target: 'revenue', value: 64, sourceWidth: 36, targetWidth: 36, y0: 1039, y1: 990, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_revenue', target: 'revenue', value: 11, sourceWidth: 5, targetWidth: 9, y0: 1175.5, y1: 1012.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 519, sourceWidth: 300, targetWidth: 300, y0: 757, y1: 653, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 189, sourceWidth: 110, targetWidth: 107, y0: 962, y1: 1089.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 36, sourceWidth: 19, targetWidth: 18, y0: 512.5, y1: 421, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 483, sourceWidth: 281, targetWidth: 281, y0: 662.5, y1: 770.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 36, sourceWidth: 18, targetWidth: 18, y0: 421, y1: 310, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { x0: 1872, x1: 2268, c1x: 2020, c1y: 421, c2x: 2120, c2y: 310 } },
      { source: 'other_income', target: 'net_profit', value: 16, sourceWidth: 7, targetWidth: 6, y0: 365.5, y1: 323, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2229, x1: 2268, c1x: 2238, c1y: 365.5, c2x: 2253, c2y: 323 } },
      { source: 'operating_profit', target: 'tax_interest', value: 6, sourceWidth: 1, targetWidth: 1, y0: 429.5, y1: 573.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 1872, x1: 2263, c1x: 2020, c1y: 429.5, c2x: 2145, c2y: 573.5 } },
      { source: 'operating_expenses', target: 'sm', value: 210, sourceWidth: 121, targetWidth: 120, y0: 690.5, y1: 826, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product', value: 150, sourceWidth: 89, targetWidth: 85, y0: 795.5, y1: 1035.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 123, sourceWidth: 71, targetWidth: 70, y0: 875.5, y1: 1251, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Zillow · 2026 财年第一季度',
        meta: { title: 'Zillow 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleSize: 108, titleTextLength: 1500 },
        annotationsSvg: annotations('zh'),
        nodes: {
          residential: { label: '住宅业务', notes: ['同比 +8%'] }, rentals: { label: '租赁', notes: ['同比 +42%'] }, home_loans: { label: '住房贷款', notes: ['同比 +56%'] }, other_revenue: { label: '其他', notes: ['同比持平'] },
          revenue: { label: '收入', notes: ['同比 +18%'] }, gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +7 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] }, tax_interest: { label: '税费及利息' },
          sm: { label: '销售与市场', notes: ['占收入 30%', '同比 (3 个百分点)'] }, product: { label: '产品', notes: ['占收入 21%', '同比 (4 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 17%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
