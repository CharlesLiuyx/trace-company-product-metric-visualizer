/* Zillow Q3 FY25 income statement ($M), measured from the primary Source. */
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
      ${lines.map((entry) => `<text x="${x + width / 2}" y="${entry.y}" text-anchor="middle" font-size="${entry.size}" font-weight="${entry.weight}" fill="#fff">${entry.text}</text>`).join('')}
    </g>`;

  const annotations = (language) => `
    <g>
      <line x1="1608" y1="947" x2="1682" y2="947" stroke="${RED_LINK}" stroke-width="2"/>
      ${card(81, 1194, 163, 164, language === 'zh'
        ? [
          { text: '访问次数', y: 1252, size: 27, weight: 800 },
          { text: '25 亿', y: 1289, size: 29, weight: 500 },
          { text: '同比 +4%', y: 1334, size: 27, weight: 500 },
        ]
        : [
          { text: 'Visits', y: 1252, size: 29, weight: 800 },
          { text: '2.5B', y: 1289, size: 29, weight: 500 },
          { text: '+4% Y/Y', y: 1334, size: 28, weight: 500 },
        ])}
      ${card(260, 1194, 589, 164, language === 'zh'
        ? [
          { text: '月均独立用户', y: 1249, size: 29, weight: 800 },
          { text: '2.50 亿', y: 1289, size: 29, weight: 500 },
          { text: '同比 +7%', y: 1333, size: 28, weight: 500 },
        ]
        : [
          { text: 'Average Monthly Unique Users', y: 1249, size: 29, weight: 800 },
          { text: '250M', y: 1289, size: 29, weight: 500 },
          { text: '+7% Y/Y', y: 1333, size: 28, weight: 500 },
        ])}
    </g>`;

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, anchor = 'middle', lineGap = 13) => ({ x, top, anchor, lineGap, lines });

  const labels = {
    residential: { blocks: [
      block(435, 321, [line('$value', 39, { weight: 400 }), line('+7% Y/Y', 28, { weight: 400, color: NOTE })]),
      block(337, 575, [line('Residential', 40, { weight: 800 })], 'end'),
    ] },
    rentals: { blocks: [block(435, 675, [line('$value', 39, { weight: 400 }), line('+41% Y/Y', 28, { weight: 400, color: NOTE })])] },
    home_loans: { blocks: [block(435, 885, [line('$value', 39, { weight: 400 }), line('+36% Y/Y', 28, { weight: 400, color: NOTE })])] },
    other: { blocks: [
      block(435, 1031, [line('$value', 39, { weight: 400 }), line('Flat Y/Y', 28, { weight: 400, color: NOTE })]),
      block(280, 1112, [line('Other', 40, { weight: 800 })], 'end'),
    ] },
    revenue: { blocks: [block(902, 433, [
      line('Revenue', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('+16% Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    gross_profit: { blocks: [block(1370, 292, [
      line('Gross profit', 39, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('73% margin', 28, { weight: 400, color: NOTE }), line('(3pp) Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    cost_of_revenue: { blocks: [block(1370, 1101, [
      line('Cost of', 35, { weight: 800 }), line('revenue', 35, { weight: 800 }), line('$value', 35, { weight: 400 }),
    ], 'middle', 12)] },
    operating_loss: { blocks: [block(1648, 962, [
      line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('(0%) margin', 28, { weight: 400, color: NOTE }), line('+8pp Y/Y', 28, { weight: 400, color: NOTE }),
    ])] },
    operating_expenses: { blocks: [block(1837, 414, [
      line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39, { weight: 400 }),
    ])] },
    sm: { blocks: [block(RIGHT_X, 405, [
      line('S&M', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('32% of revenue', 29, { weight: 400, color: NOTE }), line('(6pp) Y/Y', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    product: { blocks: [block(RIGHT_X, 674, [
      line('Product', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('22% of revenue', 29, { weight: 400, color: NOTE }), line('(3pp) Y/Y', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    ga: { blocks: [block(RIGHT_X, 931, [
      line('G&A', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('19% of revenue', 29, { weight: 400, color: NOTE }), line('(2pp) Y/Y', 29, { weight: 400, color: NOTE }),
    ], 'middle', 12)] },
  };

  const zhLabels = {
    residential: { blocks: [
      block(435, 321, [line('$value', 39, { weight: 400 }), line('同比 +7%', 28, { weight: 400, color: NOTE })]),
      block(337, 575, [line('住宅业务', 38, { weight: 800 })], 'end'),
    ] },
    rentals: { blocks: [block(435, 675, [line('$value', 39, { weight: 400 }), line('同比 +41%', 28, { weight: 400, color: NOTE })])] },
    home_loans: { blocks: [block(435, 885, [line('$value', 39, { weight: 400 }), line('同比 +36%', 28, { weight: 400, color: NOTE })])] },
    other: { blocks: [
      block(435, 1031, [line('$value', 39, { weight: 400 }), line('同比持平', 28, { weight: 400, color: NOTE })]),
      block(280, 1112, [line('其他', 40, { weight: 800 })], 'end'),
    ] },
    revenue: { blocks: [block(902, 433, [line('收入', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('同比 +16%', 28, { weight: 400, color: NOTE })])] },
    gross_profit: { blocks: [block(1370, 292, [
      line('毛利润', 39, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('利润率 73%', 28, { weight: 400, color: NOTE }), line('同比 (3 个百分点)', 28, { weight: 400, color: NOTE }),
    ])] },
    cost_of_revenue: { blocks: [block(1370, 1101, [line('收入', 35, { weight: 800 }), line('成本', 35, { weight: 800 }), line('$value', 35, { weight: 400 })], 'middle', 12)] },
    operating_loss: { blocks: [block(1648, 962, [
      line('营业', 40, { weight: 800 }), line('亏损', 40, { weight: 800 }), line('$value', 39, { weight: 400 }),
      line('利润率 (0%)', 28, { weight: 400, color: NOTE }), line('同比 +8 个百分点', 28, { weight: 400, color: NOTE }),
    ])] },
    operating_expenses: { blocks: [block(1837, 414, [line('运营', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 39, { weight: 400 })])] },
    sm: { blocks: [block(RIGHT_X, 405, [
      line('销售与市场', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('占收入 32%', 29, { weight: 400, color: NOTE }), line('同比 (6 个百分点)', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    product: { blocks: [block(RIGHT_X, 674, [
      line('产品', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('占收入 22%', 29, { weight: 400, color: NOTE }), line('同比 (3 个百分点)', 29, { weight: 400, color: NOTE }),
    ], 'middle', 11)] },
    ga: { blocks: [block(RIGHT_X, 931, [
      line('管理费用', 31, { weight: 800 }), line('$value', 31, { weight: 400 }),
      line('占收入 19%', 29, { weight: 400, color: NOTE }), line('同比 (2 个百分点)', 29, { weight: 400, color: NOTE }),
    ], 'middle', 12)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zillow-q3-fy25',
    name: 'Zillow · Q3 FY25',
    company: 'Zillow',
    meta: {
      company: 'Zillow', title: 'Zillow Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/zillow-q3-fy25.png', width: 2667, height: 1500 },
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
      { key: 'zillow-company-wordmark-q3-fy25', href: 'data/assets/raster-annotations/zillow/company-wordmark-q4-fy25.png', x: 553, y: 249, width: 690, height: 116 },
      { key: 'zillow-premier-agent-wordmark-q3-fy25', href: 'data/assets/raster-annotations/zillow/premier-agent-wordmark-q4-fy25.png', x: 54, y: 439, width: 340, height: 121 },
      { key: 'zillow-rentals-wordmark-q3-fy25', href: 'data/assets/raster-annotations/zillow/rentals-wordmark-q4-fy25.png', x: 89, y: 746, width: 272, height: 118 },
      { key: 'zillow-home-loans-wordmark-q3-fy25', href: 'data/assets/raster-annotations/zillow/home-loans-wordmark-q4-fy25.png', x: 77, y: 934, width: 301, height: 107 },
    ],
    layout: {
      scale: 1,
      nodes: {
        residential: { x: 400, y: 420, width: 71, height: 224 }, rentals: { x: 400, y: 775, width: 71, height: 87 },
        home_loans: { x: 400, y: 984, width: 71, height: 25 }, other: { x: 400, y: 1133, width: 71, height: 5 },
        revenue: { x: 867, y: 585, width: 70, height: 349 }, gross_profit: { x: 1334, y: 481, width: 71, height: 254 },
        cost_of_revenue: { x: 1334, y: 991, width: 71, height: 94 }, operating_loss: { x: 1610, y: 946, width: 72, height: 1 },
        operating_expenses: { x: 1802, y: 582, width: 70, height: 254 }, sm: { x: 2268, y: 416, width: 71, height: 109 },
        product: { x: 2268, y: 694, width: 71, height: 76 }, ga: { x: 2268, y: 935, width: 71, height: 65 },
      },
      labels,
    },
    nodes: [
      { id: 'residential', col: 0, order: 0, type: 'source', label: 'Residential', value: 435, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rentals', col: 0, order: 1, type: 'source', label: 'Rentals', value: 174, notes: ['+41% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'home_loans', col: 0, order: 2, type: 'source', label: 'Home Loans', value: 53, notes: ['+36% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 14, notes: ['Flat Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 676, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 491, notes: ['73% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 185, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -3, notes: ['(0%) margin', '+8pp Y/Y'], color: BACKGROUND, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 494, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 214, notes: ['32% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 5, order: 1, type: 'cost', label: 'Product', value: 151, notes: ['22% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 129, notes: ['19% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'residential', target: 'revenue', value: 435, width: 224, sourceWidth: 224, targetWidth: 224, y0: 532, y1: 697, sourceOrder: 0, targetOrder: 0 },
      { source: 'rentals', target: 'revenue', value: 174, width: 90, sourceWidth: 87, targetWidth: 90, y0: 818.5, y1: 854, sourceOrder: 0, targetOrder: 1 },
      { source: 'home_loans', target: 'revenue', value: 53, width: 28, sourceWidth: 25, targetWidth: 28, y0: 996.5, y1: 913, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 14, width: 7, sourceWidth: 5, targetWidth: 7, y0: 1135.5, y1: 930.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 491, width: 255, y0: 712.5, y1: 608, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 185, width: 95, y0: 886.5, y1: 1038, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 491, width: 255, sourceWidth: 255, targetWidth: 254, y0: 608, y1: 709, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 3, width: 1, sourceWidth: 1, targetWidth: 1, y0: 946.5, y1: 835.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1682, x1: 1802, c1x: 1730, c1y: 946.5, c2x: 1750, c2y: 835.5 } },
      { source: 'operating_expenses', target: 'sm', value: 214, width: 111, sourceWidth: 111, targetWidth: 109, y0: 637.5, y1: 470.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product', value: 151, width: 77, sourceWidth: 77, targetWidth: 76, y0: 731.5, y1: 732, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 129, width: 66, sourceWidth: 66, targetWidth: 65, y0: 803, y1: 967.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Zillow · 2025 财年第三季度',
        meta: { title: 'Zillow 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleSize: 108, titleTextLength: 1500 },
        annotationsSvg: annotations('zh'),
        nodes: {
          residential: { label: '住宅业务', notes: ['同比 +7%'] }, rentals: { label: '租赁', notes: ['同比 +41%'] },
          home_loans: { label: '住房贷款', notes: ['同比 +36%'] }, other: { label: '其他', notes: ['同比持平'] },
          revenue: { label: '收入', notes: ['同比 +16%'] }, gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (0%)', '同比 +8 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] }, sm: { label: '销售与市场', notes: ['占收入 32%', '同比 (6 个百分点)'] },
          product: { label: '产品', notes: ['占收入 22%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 19%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
