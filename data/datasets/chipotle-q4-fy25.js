/* Chipotle Q4 FY25 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#15527a';
  const NOTE = '#6d6d6d';
  const BROWN = '#5c1605';
  const BROWN_LINK = '#b49b97';
  const GREEN = '#2da428';
  const GREEN_LABEL = '#008f4a';
  const GREEN_LINK = '#9bd49a';
  const RED = '#e00000';
  const RED_LABEL = '#9b1303';
  const RED_LINK = '#e58182';
  const RIGHT_X = 2480;

  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap == null ? 8 : options.lineGap, lines });
  const card = (x, width, isZh, title, note) => `
    <g>
      <rect x="${x}" y="1163" width="${width}" height="147" rx="28" fill="${BROWN}"/>
      <text x="${x + width / 2}" y="1209" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title[0]}</text>
      <text x="${x + width / 2}" y="1248" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title[1]}</text>
      <text x="${x + width / 2}" y="1285" text-anchor="middle" font-size="25" font-weight="400" fill="#fff">${note}</text>
    </g>`;
  const annotations = (isZh) => `<g font-family="Montserrat,Arial,sans-serif">
    <g text-anchor="middle">
      <text x="879" y="1007" font-size="39" font-weight="800" fill="${BROWN}">${isZh ? '配送服务' : 'Delivery'}</text>
      <text x="879" y="1059" font-size="38" font-weight="400" fill="${BROWN}">$14M</text>
      <text x="879" y="1097" font-size="29" font-weight="400" fill="${NOTE}">${isZh ? '同比 (8%)' : '(8%) Y/Y'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="other_income">
      <rect x="2080" y="196" width="180" height="118" fill="#fff" fill-opacity="0" pointer-events="all"/>
      <path d="M2118 302H2205" fill="none" stroke="${GREEN_LINK}" stroke-width="1.3324" stroke-linecap="butt"/>
      <text x="2150" y="239" text-anchor="middle" font-size="34" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他收入' : 'Other'}</text>
      <text x="2150" y="281" text-anchor="middle" font-size="34" font-weight="400" fill="${GREEN_LABEL}">$13M</text>
    </g>
    ${card(105, 315, isZh, isZh ? ['同店', '餐厅销售额'] : ['Comparable', 'restaurant sales'], isZh ? '同比 (3%)' : '(3%) Y/Y')}
    ${card(429, 315, isZh, isZh ? ['平均', '餐厅销售额'] : ['Average', 'restaurant sales'], isZh ? '$3.1M，同比 (3%)' : '$3.1M (3%) Y/Y')}
  </g>`;

  const labels = {
    in_restaurant: { blocks: [
      block(410, 343, [line('$value', 39, { color: BROWN }), line('+2% Y/Y', 29, { color: NOTE })]),
      block(205, 562, [line('In-restaurant', 40, { weight: 800, color: BROWN })]),
    ] },
    digital_sales: { blocks: [
      block(410, 741, [line('$value', 39, { color: BROWN }), line('+11% Y/Y', 29, { color: NOTE })]),
      block(205, 886, [line('Digital sales', 40, { weight: 800, color: BROWN })]),
    ] },
    food_beverage: { blocks: [block(879, 397, [line('Food & Beverage', 40, { weight: 800, color: BROWN }), line('$value', 39, { color: BROWN }), line('+5% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    delivery: { blocks: [] },
    revenue: { blocks: [block(1345, 518, [line('Revenue', 40, { weight: 800, color: BROWN }), line('$value', 39, { color: BROWN }), line('+5% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_profit: { blocks: [block(1812, 360, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('14% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1812, 1098, [line('Operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 37, { color: RED_LABEL })], { lineGap: 8 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2447, 227, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('11% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    tax: { blocks: [block(2477, 406, [line('Tax', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    food_beverage_packaging: { blocks: [block(RIGHT_X, 501, [line('Food, beverage &', 31, { weight: 800, color: RED_LABEL }), line('packaging', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    labor: { blocks: [block(RIGHT_X, 662, [line('Labor', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    other_opex: { blocks: [block(RIGHT_X, 797, [line('Other opex', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    occupancy: { blocks: [block(RIGHT_X, 914, [line('Occupancy', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_X, 1026, [line('G&A', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    da: { blocks: [block(RIGHT_X, 1133, [line('D&A', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    pre_opening: { blocks: [block(RIGHT_X, 1232, [line('Pre-opening', 31, { weight: 800, color: RED_LABEL }), line('($17M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    impairment: { blocks: [block(RIGHT_X, 1323, [line('Impairment', 31, { weight: 800, color: RED_LABEL }), line('($9M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
  };

  const zhLabels = {
    in_restaurant: { blocks: [block(410, 343, [line('$value', 39, { color: BROWN }), line('同比 +2%', 29, { color: NOTE })]), block(205, 571, [line('餐厅内销售', 39, { weight: 800, color: BROWN })])] },
    digital_sales: { blocks: [block(410, 741, [line('$value', 39, { color: BROWN }), line('同比 +11%', 29, { color: NOTE })]), block(205, 895, [line('数字销售', 39, { weight: 800, color: BROWN })])] },
    food_beverage: { blocks: [block(879, 403, [line('餐饮收入', 40, { weight: 800, color: BROWN }), line('$value', 39, { color: BROWN }), line('同比 +5%', 29, { color: NOTE })], { lineGap: 9 })] },
    delivery: { blocks: [] },
    revenue: { blocks: [block(1345, 524, [line('收入', 40, { weight: 800, color: BROWN }), line('$value', 39, { color: BROWN }), line('同比 +5%', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_profit: { blocks: [block(1812, 364, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('利润率 14%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1812, 1108, [line('运营费用', 38, { weight: 800, color: RED_LABEL }), line('$value', 37, { color: RED_LABEL })], { lineGap: 8 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2447, 237, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('利润率 11%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 9 })] },
    tax: { blocks: [block(2477, 416, [line('税费', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    food_beverage_packaging: { blocks: [block(RIGHT_X, 501, [line('食品、饮料及', 29, { weight: 800, color: RED_LABEL }), line('包装', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    labor: { blocks: [block(RIGHT_X, 672, [line('人工', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    other_opex: { blocks: [block(RIGHT_X, 807, [line('其他运营费用', 29, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    occupancy: { blocks: [block(RIGHT_X, 924, [line('占用成本', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_X, 1036, [line('一般及行政', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    da: { blocks: [block(RIGHT_X, 1143, [line('折旧与摊销', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    pre_opening: { blocks: [block(RIGHT_X, 1242, [line('开业前费用', 31, { weight: 800, color: RED_LABEL }), line('($17M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    impairment: { blocks: [block(RIGHT_X, 1333, [line('减值', 31, { weight: 800, color: RED_LABEL }), line('($9M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chipotle-q4-fy25',
    name: 'Chipotle · Q4 FY25',
    company: 'Chipotle',
    meta: {
      company: 'Chipotle', title: 'Chipotle Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/chipotle-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2290,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BROWN, label: BROWN }, hub: { node: BROWN, label: BROWN }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BROWN_LINK, hub: BROWN_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'chipotle-company-logo', href: 'data/assets/raster-annotations/chipotle/company-logo.png', x: 1200, y: 226, width: 285, height: 285 },
      { key: 'chipotle-in-restaurant', href: 'data/assets/raster-annotations/chipotle/business-in-restaurant.png', x: 56, y: 430, width: 305, height: 121 },
      { key: 'chipotle-digital-sales', href: 'data/assets/raster-annotations/chipotle/business-digital-sales.png', x: 118, y: 642, width: 195, height: 222 },
    ],
    nodes: [
      { id: 'in_restaurant', type: 'source', label: 'In-restaurant', value: 1.869, notes: ['+2% Y/Y'] },
      { id: 'digital_sales', type: 'source', label: 'Digital sales', value: 1.100211, notes: ['+11% Y/Y'] },
      { id: 'food_beverage', type: 'hub', label: 'Food & Beverage', value: 2.969211, notes: ['+5% Y/Y'] },
      { id: 'delivery', type: 'source', label: 'Delivery', value: 0.0143, valueText: '$14M', notes: ['(8%) Y/Y'], color: BG },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 2.983511, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: '', value: 2.983511, color: BG },
      { id: 'cost_of_revenue', type: 'cost', label: '', value: 0, color: BG },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.420319, notes: ['14% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 2.563192 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.013324, valueText: '$13M', color: BG, linkTint: GREEN_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.330932, notes: ['11% margin', '(1pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.102711 },
      { id: 'food_beverage_packaging', type: 'cost', label: ['Food, beverage &', 'packaging'], value: 0.900155 },
      { id: 'labor', type: 'cost', label: 'Labor', value: 0.760524 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.461567 },
      { id: 'occupancy', type: 'cost', label: 'Occupancy', value: 0.162493 },
      { id: 'ga', type: 'cost', label: 'G&A', value: 0.160341 },
      { id: 'da', type: 'cost', label: 'D&A', value: 0.092702 },
      { id: 'pre_opening', type: 'cost', label: 'Pre-opening', value: 0.016946, valueText: '($17M)' },
      { id: 'impairment', type: 'cost', label: 'Impairment', value: 0.008464, valueText: '($9M)' },
    ],
    links: [
      { source: 'in_restaurant', target: 'food_beverage', value: 1.869, targetOrder: 0 },
      { source: 'digital_sales', target: 'food_beverage', value: 1.100211, targetOrder: 1 },
      { source: 'food_beverage', target: 'revenue', value: 2.969211, sourceOrder: 0, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 0.0143, sourceOrder: 0, targetOrder: 1, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.420319, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.563192, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.317608, targetWidth: 31.6576, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.102711, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.013324, targetWidth: 1.3324, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'food_beverage_packaging', value: 0.900155, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'labor', value: 0.760524, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.461567, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.162493, targetWidth: 15, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.160341, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.092702, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'pre_opening', value: 0.016946, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'impairment', value: 0.008464, sourceOrder: 7, targetOrder: 0 },
    ],
    layout: {
      scale: 100,
      nodes: {
        in_restaurant: { x: 375, y: 432, width: 73, height: 186.9 }, digital_sales: { x: 375, y: 829, width: 73, height: 110.0211 },
        food_beverage: { x: 842, y: 541, width: 73, height: 296.9211 }, delivery: { x: 842, y: 1120, width: 1, height: 1.43 },
        revenue: { x: 1309, y: 662, width: 73, height: 298.3511 }, operating_profit: { x: 1776, y: 540, width: 73, height: 42.0319 }, operating_expenses: { x: 1776, y: 815, width: 73, height: 256.3192 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 }, cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        other_income: { x: 2118, y: 302, width: 87, height: 1.3324 }, net_profit: { x: 2244, y: 311, width: 72, height: 32.99 }, tax: { x: 2244, y: 432, width: 72, height: 10.2711 },
        food_beverage_packaging: { x: 2244, y: 501, width: 72, height: 90.0155 }, labor: { x: 2244, y: 657, width: 72, height: 76.0524 }, other_opex: { x: 2244, y: 806, width: 72, height: 46.1567 }, occupancy: { x: 2244, y: 940, width: 72, height: 15 }, ga: { x: 2244, y: 1052, width: 72, height: 16.0341 }, da: { x: 2244, y: 1159, width: 72, height: 9.2702 }, pre_opening: { x: 2244, y: 1265, width: 72, height: 1.6946 }, impairment: { x: 2244, y: 1355, width: 72, height: 0.8464 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: 'Chipotle · 2025 财年第四季度',
        meta: { title: 'Chipotle 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleTextLength: 2240 },
        nodes: {
          in_restaurant: { label: '餐厅内销售', notes: ['同比 +2%'] }, digital_sales: { label: '数字销售', notes: ['同比 +11%'] }, food_beverage: { label: '餐饮收入', notes: ['同比 +5%'] }, delivery: { label: '配送服务', notes: ['同比 (8%)'] }, revenue: { label: '收入', notes: ['同比 +5%'] }, operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 (1 个百分点)'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (1 个百分点)'] }, tax: { label: '税费' }, food_beverage_packaging: { label: '食品、饮料及包装' }, labor: { label: '人工' }, other_opex: { label: '其他运营费用' }, occupancy: { label: '占用成本' }, ga: { label: '一般及行政' }, da: { label: '折旧与摊销' }, pre_opening: { label: '开业前费用' }, impairment: { label: '减值' },
        },
        layout: { labels: zhLabels },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
