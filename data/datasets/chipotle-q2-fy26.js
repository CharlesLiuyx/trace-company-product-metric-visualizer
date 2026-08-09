/* Chipotle Q2 FY26 income statement ($B), measured from the Build-bound reference. */
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
      <rect x="${x}" y="1176" width="313" height="148" rx="28" fill="${BROWN}"/>
      <text x="${x + 156.5}" y="1223" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title[0]}</text>
      <text x="${x + 156.5}" y="1262" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title[1]}</text>
      <text x="${x + 156.5}" y="1302" text-anchor="middle" font-size="25" font-weight="400" fill="#fff">${note}</text>
    </g>`;
  const annotations = (isZh) => `<g>
    <g class="sankey-interactive-annotation" data-node="in_restaurant">
      <rect x="70" y="522" width="280" height="55" fill="#fff" fill-opacity="0" pointer-events="all"/>
      <text x="210" y="562" text-anchor="middle" font-size="40" font-weight="800" fill="${BROWN_LABEL}">${isZh ? '餐厅内销售' : 'In-restaurant'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="digital_sales">
      <rect x="80" y="898" width="260" height="60" fill="#fff" fill-opacity="0" pointer-events="all"/>
      <text x="210" y="946" text-anchor="middle" font-size="40" font-weight="800" fill="${BROWN_LABEL}">${isZh ? '数字销售' : 'Digital sales'}</text>
    </g>
    ${card(105, isZh, isZh ? ['同店', '餐厅销售额'] : ['Comparable', 'restaurant sales'], isZh ? '同比 +2.2%' : '+2.2% Y/Y')}
    ${card(429, isZh, isZh ? ['平均', '餐厅销售额'] : ['Average', 'restaurant sales'], isZh ? '$3.1M，同比 (1%)' : '$3.1M (1%) Y/Y')}
  </g>`;

  const labels = {
    in_restaurant: { blocks: [
      block(410, 294, [line('$value', 39, { color: BROWN_LABEL }), line('+5% Y/Y', 29, { color: NOTE })]),
    ] },
    digital_sales: { blocks: [
      block(413, 731, [line('$value', 39, { color: BROWN_LABEL }), line('+18% Y/Y', 29, { color: NOTE })]),
    ] },
    food_beverage: { blocks: [block(880, 374, [line('Food & Beverage', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('+9% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    delivery: { blocks: [block(880, 974, [line('Delivery', 39, { weight: 800, color: BROWN_LABEL }), line('$16M', 38, { color: BROWN_LABEL }), line('+1% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    revenue: { blocks: [block(1349, 521, [line('Revenue', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('+9% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_profit: { blocks: [block(1812, 338, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('16% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1812, 1162, [line('Operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 37, { color: RED_LABEL })], { lineGap: 8 })] },
    other_income: { blocks: [block(2164, 201, [line('Other', 34, { weight: 800, color: GREEN_LABEL }), line('$8M', 34, { color: GREEN_LABEL })], { lineGap: 7 })] },
    net_profit: { blocks: [block(2458, 241, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('12% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    tax: { blocks: [block(2455, 420, [line('Tax', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    food_beverage_packaging: { blocks: [block(RIGHT_X, 514, [line('Food, beverage &', 31, { weight: 800, color: RED_LABEL }), line('packaging', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    labor: { blocks: [block(RIGHT_X, 700, [line('Labor', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    other_opex: { blocks: [block(RIGHT_X, 837, [line('Other opex', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_X, 950, [line('G&A', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    occupancy: { blocks: [block(RIGHT_X, 1048, [line('Occupancy', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    da: { blocks: [block(RIGHT_X, 1145, [line('D&A', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    pre_opening: { blocks: [block(RIGHT_X, 1241, [line('Pre-opening', 31, { weight: 800, color: RED_LABEL }), line('($16M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    impairment: { blocks: [block(RIGHT_X, 1324, [line('Impairment', 31, { weight: 800, color: RED_LABEL }), line('($14M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
  };

  const zhLabels = {
    in_restaurant: { blocks: [block(410, 294, [line('$value', 39, { color: BROWN_LABEL }), line('同比 +5%', 29, { color: NOTE })])] },
    digital_sales: { blocks: [block(413, 731, [line('$value', 39, { color: BROWN_LABEL }), line('同比 +18%', 29, { color: NOTE })])] },
    food_beverage: { blocks: [block(880, 374, [line('餐饮收入', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('同比 +9%', 29, { color: NOTE })], { lineGap: 9 })] },
    delivery: { blocks: [block(880, 974, [line('配送服务', 39, { weight: 800, color: BROWN_LABEL }), line('$16M', 38, { color: BROWN_LABEL }), line('同比 +1%', 29, { color: NOTE })], { lineGap: 9 })] },
    revenue: { blocks: [block(1349, 521, [line('收入', 40, { weight: 800, color: BROWN_LABEL }), line('$value', 39, { color: BROWN_LABEL }), line('同比 +9%', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_profit: { blocks: [block(1812, 338, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('利润率 16%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1812, 1162, [line('运营费用', 38, { weight: 800, color: RED_LABEL }), line('$value', 37, { color: RED_LABEL })], { lineGap: 8 })] },
    other_income: { blocks: [block(2164, 201, [line('其他收入', 34, { weight: 800, color: GREEN_LABEL }), line('$8M', 34, { color: GREEN_LABEL })], { lineGap: 7 })] },
    net_profit: { blocks: [block(2458, 241, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('利润率 12%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { lineGap: 9 })] },
    tax: { blocks: [block(2455, 420, [line('税费', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    food_beverage_packaging: { blocks: [block(RIGHT_X, 514, [line('食品、饮料及', 29, { weight: 800, color: RED_LABEL }), line('包装', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    labor: { blocks: [block(RIGHT_X, 700, [line('人工', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    other_opex: { blocks: [block(RIGHT_X, 837, [line('其他运营费用', 29, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_X, 950, [line('一般及行政', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    occupancy: { blocks: [block(RIGHT_X, 1048, [line('占用成本', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    da: { blocks: [block(RIGHT_X, 1145, [line('折旧与摊销', 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    pre_opening: { blocks: [block(RIGHT_X, 1241, [line('开业前费用', 31, { weight: 800, color: RED_LABEL }), line('($16M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
    impairment: { blocks: [block(RIGHT_X, 1324, [line('减值', 31, { weight: 800, color: RED_LABEL }), line('($14M)', 31, { color: RED_LABEL })], { lineGap: 7 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chipotle-q2-fy26',
    name: 'Chipotle · Q2 FY26',
    company: 'Chipotle',
    meta: {
      company: 'Chipotle', title: 'Chipotle Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Quarter ended June 30, 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/chipotle-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'chipotle-company-logo', href: 'data/assets/raster-annotations/chipotle/company-logo.png', x: 1200, y: 226, width: 285, height: 285 },
      { key: 'chipotle-in-restaurant', href: 'data/assets/raster-annotations/chipotle/business-in-restaurant.png', x: 56, y: 407, width: 305, height: 121 },
      { key: 'chipotle-digital-sales', href: 'data/assets/raster-annotations/chipotle/business-digital-sales.png', x: 118, y: 654, width: 195, height: 222 },
    ],
    layout: {
      scale: 103.083,
      nodes: {
        in_restaurant: { x: 380, y: 390, width: 71, height: 211 }, digital_sales: { x: 380, y: 827, width: 71, height: 131 },
        food_beverage: { x: 847, y: 516, width: 70, height: 344 }, delivery: { x: 847, y: 1117, width: 70, height: 3 }, revenue: { x: 1314, y: 664, width: 71, height: 346 },
        operating_profit: { x: 1782, y: 518, width: 70, height: 52 }, operating_expenses: { x: 1782, y: 852, width: 70, height: 291 },
        other_income: { x: 2130, y: 295, width: 73, height: 2 }, net_profit: { x: 2248, y: 304, width: 71, height: 40 }, tax: { x: 2248, y: 449, width: 71, height: 11 },
        food_beverage_packaging: { x: 2248, y: 519, width: 71, height: 101 }, labor: { x: 2248, y: 693, width: 71, height: 85 }, other_opex: { x: 2248, y: 847, width: 71, height: 50 }, ga: { x: 2248, y: 972, width: 71, height: 17 }, occupancy: { x: 2248, y: 1073, width: 71, height: 16 }, da: { x: 2248, y: 1172, width: 71, height: 9 },
        pre_opening: { x: 2248, y: 1271, width: 71, height: 3 }, impairment: { x: 2248, y: 1356, width: 71, height: 3 },
      },
      labels,
    },
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only', label: '', value: 3.348562, type: 'profit' },
      { id: 'cost_of_revenue', representation: 'data-only', label: '', value: 0, type: 'cost' },
    ],
    nodes: [
      { id: 'in_restaurant', type: 'source', label: 'In-restaurant', value: 2.056332664, notes: ['+5% Y/Y'] },
      { id: 'digital_sales', type: 'source', label: 'Digital sales', value: 1.276459336, notes: ['+18% Y/Y'] },
      { id: 'food_beverage', type: 'hub', label: 'Food & Beverage', value: 3.332792, notes: ['+9% Y/Y'] },
      { id: 'delivery', type: 'source', label: 'Delivery', value: 0.016, valueText: '$16M', notes: ['+1% Y/Y'], color: BROWN_LINK, linkTint: BROWN_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 3.348562, notes: ['+9% Y/Y'] },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.525595, notes: ['16% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 2.822967 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.008, valueText: '$8M', color: GREEN_LINK, linkTint: GREEN_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.403547, notes: ['12% margin', '(2pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.129725 },
      { id: 'food_beverage_packaging', type: 'cost', label: ['Food, beverage &', 'packaging'], value: 0.993573 },
      { id: 'labor', type: 'cost', label: 'Labor', value: 0.83645 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.499764 },
      { id: 'ga', type: 'cost', label: 'G&A', value: 0.190471 },
      { id: 'occupancy', type: 'cost', label: 'Occupancy', value: 0.17421 },
      { id: 'da', type: 'cost', label: 'D&A', value: 0.098327 },
      { id: 'pre_opening', type: 'cost', label: 'Pre-opening', value: 0.016, valueText: '($16M)', color: RED_LINK, linkTint: RED_LINK },
      { id: 'impairment', type: 'cost', label: 'Impairment', value: 0.014, valueText: '($14M)', color: RED_LINK, linkTint: RED_LINK },
    ],
    links: [
      { source: 'in_restaurant', target: 'food_beverage', value: 2.056332664, sourceWidth: 211, targetWidth: 214, y0: 495.5, y1: 623, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_sales', target: 'food_beverage', value: 1.276459336, sourceWidth: 131, targetWidth: 130, y0: 892.5, y1: 795, sourceOrder: 0, targetOrder: 1 },
      { source: 'food_beverage', target: 'revenue', value: 3.332792, sourceWidth: 344, targetWidth: 344, y0: 688, y1: 836, sourceOrder: 0, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 0.016, sourceWidth: 3, targetWidth: 2, y0: 1118.5, y1: 1009, sourceOrder: 0, targetOrder: 1, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.525595, sourceWidth: 52, targetWidth: 52, y0: 690, y1: 544, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.822967, sourceWidth: 294, targetWidth: 291, y0: 863, y1: 997.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.39587, sourceWidth: 39, targetWidth: 39, y0: 537.5, y1: 324.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.129725, sourceWidth: 13, targetWidth: 11, y0: 563.5, y1: 454.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.008, sourceWidth: 2, targetWidth: 1, y0: 296, y1: 304.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'food_beverage_packaging', value: 0.993573, sourceWidth: 102.44, targetWidth: 101, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'labor', value: 0.83645, sourceWidth: 86.22, targetWidth: 85, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.499764, sourceWidth: 51.52, targetWidth: 50, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.190471, sourceWidth: 19.63, targetWidth: 17, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.17421, sourceWidth: 17.96, targetWidth: 16, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.098327, sourceWidth: 10.14, targetWidth: 9, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'pre_opening', value: 0.016, sourceWidth: 1.67, targetWidth: 3, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'impairment', value: 0.014, sourceWidth: 1.42, targetWidth: 3, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Chipotle · 2026 财年第二季度',
        meta: { title: 'Chipotle 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月 30 日的季度', titleTextLength: 2200 },
        nodes: {
          in_restaurant: { label: '餐厅内销售', notes: ['同比 +5%'] }, digital_sales: { label: '数字销售', notes: ['同比 +18%'] }, food_beverage: { label: '餐饮收入', notes: ['同比 +9%'] }, delivery: { label: '配送服务', notes: ['同比 +1%'] }, revenue: { label: '收入', notes: ['同比 +9%'] }, operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 (3 个百分点)'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (2 个百分点)'] }, tax: { label: '税费' }, food_beverage_packaging: { label: '食品、饮料及包装' }, labor: { label: '人工' }, other_opex: { label: '其他运营费用' }, ga: { label: '一般及行政' }, occupancy: { label: '占用成本' }, da: { label: '折旧与摊销' }, pre_opening: { label: '开业前费用' }, impairment: { label: '减值' },
        },
        layout: { labels: zhLabels },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
