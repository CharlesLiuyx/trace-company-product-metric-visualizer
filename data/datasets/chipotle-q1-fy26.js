/* Chipotle Q1 FY26 income statement ($B), measured from the Build-bound reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BROWN = '#4f0c00';
  const BROWN_LABEL = '#4e0b00';
  const BROWN_LINK = '#a98a85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2466;

  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap == null ? 8 : options.lineGap, lines });
  const card = (x, isZh, title, note) => `
    <g>
      <rect x="${x}" y="1172" width="313" height="148" rx="28" fill="${BROWN}"/>
      <text x="${x + 156.5}" y="1219" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title[0]}</text>
      <text x="${x + 156.5}" y="1258" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title[1]}</text>
      <text x="${x + 156.5}" y="1298" text-anchor="middle" font-size="25" font-weight="400" fill="#fff">${note}</text>
    </g>`;
  const annotations = (isZh) => `<g>
    <g class="sankey-interactive-annotation" data-node="in_restaurant">
      <rect x="70" y="515" width="280" height="55" fill="#fff" fill-opacity="0" pointer-events="all"/>
      <text x="210" y="555" text-anchor="middle" font-size="40" font-weight="800" fill="${BROWN_LABEL}">${isZh ? '餐厅内销售' : 'In-restaurant'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="digital_sales">
      <rect x="80" y="870" width="260" height="60" fill="#fff" fill-opacity="0" pointer-events="all"/>
      <text x="210" y="918" text-anchor="middle" font-size="40" font-weight="800" fill="${BROWN_LABEL}">${isZh ? '数字销售' : 'Digital sales'}</text>
    </g>
    ${card(105, isZh, isZh ? ['同店', '餐厅销售额'] : ['Comparable', 'restaurant sales'], isZh ? '同比 +0.5%' : '+0.5% Y/Y')}
    ${card(429, isZh, isZh ? ['平均', '餐厅销售额'] : ['Average', 'restaurant sales'], isZh ? '$3.1M，同比 +1%' : '$3.1M +1% Y/Y')}
  </g>`;

  const labels = {
    in_restaurant: { blocks: [
      block(410, 289, [line('$value', 39, { color: BROWN_LABEL }), line('+2% Y/Y', 29, { color: NOTE })]),
    ] },
    digital_sales: { blocks: [
      block(413, 710, [line('$value', 39, { color: BROWN_LABEL }), line('+17% Y/Y', 29, { color: NOTE })]),
    ] },
    food_beverage: { blocks: [block(880, 354, [line('Food & Beverage', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('+7% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    delivery: { blocks: [block(880, 916, [line('Delivery', 39, { weight: 800, color: BROWN_LABEL }), line('$16M', 38, { color: BROWN_LABEL }), line('+1% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    revenue: { blocks: [block(1349, 495, [line('Revenue', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('+7% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_profit: { blocks: [block(1812, 312, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('13% margin', 29, { color: NOTE }), line('(4pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1812, 1082, [line('Operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 37, { color: RED_LABEL })], { lineGap: 8 })] },
    other_income: { blocks: [block(2125, 198, [line('Other', 34, { weight: 800, color: GREEN_LABEL }), line('$9M', 34, { color: GREEN_LABEL })], { lineGap: 7 })] },
    net_profit: { blocks: [block(2458, 230, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('10% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    tax: { blocks: [block(2455, 436, [line('Tax', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    food_beverage_packaging: { blocks: [block(RIGHT_X, 515, [line('Food, beverage &', 31, { weight: 800, color: RED_LABEL }), line('packaging', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    labor: { blocks: [block(RIGHT_X, 684, [line('Labor', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    other_opex: { blocks: [block(RIGHT_X, 813, [line('Other opex', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    occupancy: { blocks: [block(RIGHT_X, 933, [line('Occupancy', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_X, 1028, [line('G&A', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    da: { blocks: [block(RIGHT_X, 1123, [line('D&A', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    pre_opening: { blocks: [block(RIGHT_X, 1223, [line('Pre-opening', 31, { weight: 800, color: RED_LABEL }), line('($12M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    impairment: { blocks: [block(RIGHT_X, 1315, [line('Impairment', 31, { weight: 800, color: RED_LABEL }), line('($10M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
  };

  const zhLabels = {
    in_restaurant: { blocks: [block(410, 289, [line('$value', 39, { color: BROWN_LABEL }), line('同比 +2%', 29, { color: NOTE })])] },
    digital_sales: { blocks: [block(413, 710, [line('$value', 39, { color: BROWN_LABEL }), line('同比 +17%', 29, { color: NOTE })])] },
    food_beverage: { blocks: [block(880, 354, [line('餐饮收入', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('同比 +7%', 29, { color: NOTE })], { lineGap: 9 })] },
    delivery: { blocks: [block(880, 916, [line('配送服务', 39, { weight: 800, color: BROWN_LABEL }), line('$16M', 38, { color: BROWN_LABEL }), line('同比 +1%', 29, { color: NOTE })], { lineGap: 9 })] },
    revenue: { blocks: [block(1349, 495, [line('收入', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('同比 +7%', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_profit: { blocks: [block(1812, 312, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('利润率 13%', 29, { color: NOTE }), line('同比 (4 个百分点)', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1812, 1082, [line('运营费用', 38, { weight: 800, color: RED_LABEL }), line('$value', 37, { color: RED_LABEL })], { lineGap: 8 })] },
    other_income: { blocks: [block(2125, 198, [line('其他收入', 34, { weight: 800, color: GREEN_LABEL }), line('$9M', 34, { color: GREEN_LABEL })], { lineGap: 7 })] },
    net_profit: { blocks: [block(2458, 230, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('利润率 10%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })], { lineGap: 9 })] },
    tax: { blocks: [block(2455, 436, [line('税费', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    food_beverage_packaging: { blocks: [block(RIGHT_X, 515, [line('食品、饮料及', 29, { weight: 800, color: RED_LABEL }), line('包装', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    labor: { blocks: [block(RIGHT_X, 684, [line('人工', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    other_opex: { blocks: [block(RIGHT_X, 813, [line('其他运营费用', 29, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    occupancy: { blocks: [block(RIGHT_X, 933, [line('占用成本', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_X, 1028, [line('一般及行政', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    da: { blocks: [block(RIGHT_X, 1123, [line('折旧与摊销', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    pre_opening: { blocks: [block(RIGHT_X, 1223, [line('开业前费用', 31, { weight: 800, color: RED_LABEL }), line('($12M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    impairment: { blocks: [block(RIGHT_X, 1315, [line('减值', 31, { weight: 800, color: RED_LABEL }), line('($10M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chipotle-q1-fy26',
    name: 'Chipotle · Q1 FY26',
    company: 'Chipotle',
    meta: {
      company: 'Chipotle', title: 'Chipotle Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/chipotle-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2240,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BROWN, label: BROWN_LABEL }, hub: { node: BROWN, label: BROWN_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BROWN_LINK, hub: BROWN_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'chipotle-company-logo', href: 'data/assets/raster-annotations/chipotle/company-logo.png', x: 1204, y: 211, width: 255, height: 255 },
      { key: 'chipotle-in-restaurant', href: 'data/assets/raster-annotations/chipotle/business-in-restaurant.png', x: 56, y: 407, width: 305, height: 121 },
      { key: 'chipotle-digital-sales', href: 'data/assets/raster-annotations/chipotle/business-digital-sales.png', x: 118, y: 642, width: 195, height: 222 },
    ],
    layout: {
      scale: 105,
      nodes: {
        in_restaurant: { x: 379, y: 386, width: 71, height: 197 }, digital_sales: { x: 379, y: 806, width: 71, height: 124 },
        food_beverage: { x: 846, y: 497, width: 70, height: 324 }, delivery: { x: 846, y: 1059, width: 70, height: 4 }, revenue: { x: 1313, y: 639, width: 71, height: 325 },
        operating_profit: { x: 1783, y: 493, width: 70, height: 40 }, operating_expenses: { x: 1783, y: 776, width: 70, height: 284 },
        other_income: { x: 2089, y: 286, width: 73, height: 2 }, net_profit: { x: 2247, y: 296, width: 71, height: 29 }, tax: { x: 2247, y: 453, width: 71, height: 9 },
        food_beverage_packaging: { x: 2247, y: 518, width: 71, height: 95 }, labor: { x: 2247, y: 675, width: 71, height: 84 }, other_opex: { x: 2247, y: 826, width: 71, height: 49 }, occupancy: { x: 2247, y: 956, width: 71, height: 20 }, ga: { x: 2247, y: 1051, width: 71, height: 17 }, da: { x: 2247, y: 1153, width: 71, height: 8 },
        pre_opening: { x: 2247, y: 1253, width: 71, height: 3 }, impairment: { x: 2247, y: 1347, width: 71, height: 3 },
      },
      labels,
    },
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only', label: '', value: 3.088242, type: 'profit' },
      { id: 'cost_of_revenue', representation: 'data-only', label: '', value: 0, type: 'cost' },
    ],
    nodes: [
      { id: 'in_restaurant', type: 'source', label: 'In-restaurant', value: 1.88665622, notes: ['+2% Y/Y'] },
      { id: 'digital_sales', type: 'source', label: 'Digital sales', value: 1.18607378, notes: ['+17% Y/Y'] },
      { id: 'food_beverage', type: 'hub', label: 'Food & Beverage', value: 3.07273, notes: ['+7% Y/Y'] },
      { id: 'delivery', type: 'source', label: 'Delivery', value: 0.016, valueText: '$16M', notes: ['+1% Y/Y'], color: BROWN_LINK, linkTint: BROWN_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 3.088242, notes: ['+7% Y/Y'] },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.397063, notes: ['13% margin', '(4pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 2.691179 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.009, valueText: '$9M', color: GREEN_LINK, linkTint: GREEN_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.302824, notes: ['10% margin', '(3pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.102981 },
      { id: 'food_beverage_packaging', type: 'cost', label: ['Food, beverage &', 'packaging'], value: 0.913346 },
      { id: 'labor', type: 'cost', label: 'Labor', value: 0.805411 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.480643 },
      { id: 'occupancy', type: 'cost', label: 'Occupancy', value: 0.169881 },
      { id: 'ga', type: 'cost', label: 'G&A', value: 0.20372 },
      { id: 'da', type: 'cost', label: 'D&A', value: 0.096718 },
      { id: 'pre_opening', type: 'cost', label: 'Pre-opening', value: 0.012, valueText: '($12M)', color: RED_LINK, linkTint: RED_LINK },
      { id: 'impairment', type: 'cost', label: 'Impairment', value: 0.01, valueText: '($10M)', color: RED_LINK, linkTint: RED_LINK },
    ],
    links: [
      { source: 'in_restaurant', target: 'food_beverage', value: 1.88665622, sourceWidth: 197, targetWidth: 200, y0: 484.5, y1: 597, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_sales', target: 'food_beverage', value: 1.18607378, sourceWidth: 124, targetWidth: 124, y0: 868, y1: 759, sourceOrder: 0, targetOrder: 1 },
      { source: 'food_beverage', target: 'revenue', value: 3.07273, sourceWidth: 324, targetWidth: 324, y0: 659, y1: 801, sourceOrder: 0, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 0.016, sourceWidth: 4, targetWidth: 1.55, y0: 1061, y1: 963.2, sourceOrder: 0, targetOrder: 1, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.397063, sourceWidth: 41, targetWidth: 40, y0: 659.5, y1: 513, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.691179, sourceWidth: 284, targetWidth: 284, y0: 822, y1: 918, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.294082, sourceWidth: 31, targetWidth: 28, y0: 508.5, y1: 311, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.102981, sourceWidth: 9, targetWidth: 9, y0: 528.5, y1: 457.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.009, sourceWidth: 2, targetWidth: 1, y0: 287, y1: 296.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'food_beverage_packaging', value: 0.913346, targetWidth: 95, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'labor', value: 0.805411, targetWidth: 84, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.480643, targetWidth: 49, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.169881, targetWidth: 20, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.20372, targetWidth: 17, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.096718, targetWidth: 8, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'pre_opening', value: 0.012, targetWidth: 3, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'impairment', value: 0.01, targetWidth: 3, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Chipotle · 2026 财年第一季度',
        meta: { title: 'Chipotle 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleTextLength: 2200 },
        nodes: {
          in_restaurant: { label: '餐厅内销售', notes: ['同比 +2%'] }, digital_sales: { label: '数字销售', notes: ['同比 +17%'] }, food_beverage: { label: '餐饮收入', notes: ['同比 +7%'] }, delivery: { label: '配送服务', notes: ['同比 +1%'] }, revenue: { label: '收入', notes: ['同比 +7%'] }, operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 (4 个百分点)'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (3 个百分点)'] }, tax: { label: '税费' }, food_beverage_packaging: { label: '食品、饮料及包装' }, labor: { label: '人工' }, other_opex: { label: '其他运营费用' }, occupancy: { label: '占用成本' }, ga: { label: '一般及行政' }, da: { label: '折旧与摊销' }, pre_opening: { label: '开业前费用' }, impairment: { label: '减值' },
        },
        layout: { labels: zhLabels },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
