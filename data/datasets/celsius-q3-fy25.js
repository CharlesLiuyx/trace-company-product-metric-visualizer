/* Celsius Q3 FY25 income statement ($M), reconstructed against the supplied
 * 2667×1500 reference. Customer concentration is followed by the reported
 * North America / International split and the operating-loss waterfall. */
(function () {
  const ORANGE = '#f6780d';
  const ORANGE_LINK = '#f3bb8b';
  const HUB = '#000000';
  const HUB_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2456;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 10, lines });

  const footnote = (zh = false) => `
    <g fill="${NOTE}" font-family="'Noto Sans', Arial, sans-serif" font-size="29" font-weight="400" text-anchor="middle">
      ${zh
        ? '<text x="2456" y="1192">* 销售、一般及</text><text x="2456" y="1232">行政费用</text>'
        : '<text x="2456" y="1192">* Selling, General and</text><text x="2456" y="1232">Administrative</text>'}
    </g>`;

  const labels = {
    pepsico: { blocks: [block(402, 531, [line('$value', 40, { color: ORANGE }), line('+106% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    costco: { blocks: [block(402, 750, [line('$value', 40, { color: ORANGE }), line('+103% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    amazon: { blocks: [block(402, 907, [line('$value', 40, { color: ORANGE }), line('+47% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    all_others: {
      blocks: [
        block(402, 1037, [line('$value', 40, { color: ORANGE }), line('+369% Y/Y', 29, { color: NOTE })], { lineGap: 13 }),
        block(291, 1180, [line('All Others', 40, { weight: 800, color: ORANGE })], { anchor: 'end' }),
      ],
    },
    revenue_by_customer: { blocks: [block(712, 637, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+173% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    north_america: { blocks: [block(1025, 555, [line('North America', 40, { weight: 800 }), line('$value', 40), line('+184% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    international: { blocks: [block(1025, 1242, [line('International', 40, { weight: 800 }), line('$value', 40), line('+24% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    revenue: { blocks: [block(1333, 637, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+173% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1648, 522, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('51% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1648, 1189, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('revenue', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    operating_loss: { blocks: [block(1825, 1042, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('loss', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL }), line('(11%) margin', 29, { color: NOTE }), line('(10pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 })] },
    operating_expenses: { blocks: [block(1960, 632, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    distributor_termination_fees: { blocks: [block(RIGHT_LABEL_X, 647, [line('Distributor', 40, { weight: 800, color: RED_LABEL }), line('termination fees', 35, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL }), line('34% of revenue', 29, { color: NOTE }), line('+34pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 975, [line('SG&A * expenses', 35, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('28% of revenue', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
  };

  const zhLabels = {
    pepsico: { blocks: [block(402, 531, [line('$value', 40, { color: ORANGE }), line('同比 +106%', 29, { color: NOTE })], { lineGap: 13 })] },
    costco: { blocks: [block(402, 750, [line('$value', 40, { color: ORANGE }), line('同比 +103%', 29, { color: NOTE })], { lineGap: 13 })] },
    amazon: { blocks: [block(402, 907, [line('$value', 40, { color: ORANGE }), line('同比 +47%', 29, { color: NOTE })], { lineGap: 13 })] },
    all_others: {
      blocks: [
        block(402, 1037, [line('$value', 40, { color: ORANGE }), line('同比 +369%', 29, { color: NOTE })], { lineGap: 13 }),
        block(291, 1181, [line('其他所有客户', 35, { weight: 800, color: ORANGE })], { anchor: 'end' }),
      ],
    },
    revenue_by_customer: { blocks: [block(712, 637, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +173%', 29, { color: NOTE })], { lineGap: 12 })] },
    north_america: { blocks: [block(1025, 555, [line('北美', 40, { weight: 800 }), line('$value', 40), line('同比 +184%', 29, { color: NOTE })], { lineGap: 12 })] },
    international: { blocks: [block(1025, 1242, [line('国际', 40, { weight: 800 }), line('$value', 40), line('同比 +24%', 29, { color: NOTE })], { lineGap: 12 })] },
    revenue: { blocks: [block(1333, 637, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +173%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1648, 522, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 51%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1648, 1189, [line('收入', 40, { weight: 800, color: RED_LABEL }), line('成本', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    operating_loss: { blocks: [block(1825, 1042, [line('营业亏损', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL }), line('利润率 (11%)', 29, { color: NOTE }), line('同比 (10 个百分点)', 29, { color: NOTE })], { lineGap: 10 })] },
    operating_expenses: { blocks: [block(1960, 632, [line('营业费用', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 12 })] },
    distributor_termination_fees: { blocks: [block(RIGHT_LABEL_X, 647, [line('经销商终止费', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL }), line('占收入 34%', 29, { color: NOTE }), line('同比 +34 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 975, [line('销售、一般及', 35, { weight: 800, color: RED_LABEL }), line('行政费用 *', 35, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('占收入 28%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })], { lineGap: 4 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'celsius-q3-fy25',
    name: 'Celsius · Q3 FY25',
    company: 'Celsius',
    meta: {
      company: 'Celsius',
      title: 'Celsius Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/celsius-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2165,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: ORANGE, label: ORANGE }, hub: { node: HUB, label: HUB }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: ORANGE_LINK, hub: HUB_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 10 },
    },
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/celsius/company-logo.png', x: 565, y: 275, width: 760, height: 255 },
      { key: 'celsius-product-cluster', href: 'data/assets/raster-annotations/celsius/celsius-product-cluster.png', x: 15, y: 385, width: 345, height: 245 },
      { key: 'pepsico-wordmark', href: 'data/assets/raster-annotations/celsius/pepsico-wordmark.png', x: 15, y: 640, width: 330, height: 90 },
      { key: 'costco-wordmark', href: 'data/assets/raster-annotations/celsius/costco-wordmark.png', x: 20, y: 795, width: 330, height: 110 },
      { key: 'amazon-wordmark', href: 'data/assets/raster-annotations/celsius/amazon-wordmark.png', x: 10, y: 955, width: 340, height: 125 },
    ],
    annotationsSvg: footnote(),
    layout: {
      scale: 0.39,
      nodes: {
        pepsico: { x: 367, y: 625, width: 71, height: 98 },
        costco: { x: 367, y: 843, width: 71, height: 29 },
        amazon: { x: 367, y: 1000, width: 71, height: 13 },
        all_others: { x: 367, y: 1134, width: 71, height: 133 },
        revenue_by_customer: { x: 678, y: 785, width: 71, height: 280 },
        north_america: { x: 989, y: 703, width: 72, height: 270 },
        international: { x: 989, y: 1214, width: 72, height: 7 },
        revenue: { x: 1301, y: 785, width: 71, height: 280 },
        gross_profit: { x: 1612, y: 708, width: 72, height: 142 },
        cost_of_revenue: { x: 1612, y: 1047, width: 72, height: 135 },
        operating_loss: { x: 1790, y: 990, width: 71, height: 29 },
        operating_expenses: { x: 1924, y: 788, width: 71, height: 174 },
        distributor_termination_fees: { x: 2235, y: 676, width: 71, height: 94 },
        sga: { x: 2235, y: 999, width: 71, height: 78 },
      },
      labels,
    },
    nodes: [
      { id: 'pepsico', col: 0, order: 0, type: 'source', label: 'PepsiCo', value: 257, notes: ['+106% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'costco', col: 0, order: 1, type: 'source', label: 'Costco', value: 80, notes: ['+103% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'amazon', col: 0, order: 2, type: 'source', label: 'Amazon', value: 40, notes: ['+47% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 3, type: 'source', label: 'All Others', value: 348, notes: ['+369% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue_by_customer', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 725.106, notes: ['+173% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'north_america', col: 2, order: 0, type: 'hub', label: 'North America', value: 701.990, notes: ['+184% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'international', col: 2, order: 1, type: 'hub', label: 'International', value: 23.116, notes: ['+24% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 725.106, notes: ['+173% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 372.279, notes: ['51% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 352.827, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -79.999, notes: ['(11%) margin', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 452.278, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'distributor_termination_fees', col: 7, order: 0, type: 'cost', label: ['Distributor', 'termination fees'], value: 246.707, notes: ['34% of revenue', '+34pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 7, order: 1, type: 'cost', label: 'SG&A * expenses', value: 205.571, notes: ['28% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'pepsico', target: 'revenue_by_customer', value: 257, sourceWidth: 98, targetWidth: 99, y0: 674, y1: 834.5, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'costco', target: 'revenue_by_customer', value: 80, sourceWidth: 29, targetWidth: 31, y0: 857.5, y1: 899.5, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'amazon', target: 'revenue_by_customer', value: 40, sourceWidth: 13, targetWidth: 15, y0: 1006.5, y1: 922.5, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'all_others', target: 'revenue_by_customer', value: 348, sourceWidth: 133, targetWidth: 135, y0: 1200.5, y1: 997.5, sourceOrder: 0, targetOrder: 3, linkTint: ORANGE_LINK },
      { source: 'revenue_by_customer', target: 'north_america', value: 701.990, sourceWidth: 271, targetWidth: 270, y0: 920.5, y1: 838, sourceOrder: 0, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'revenue_by_customer', target: 'international', value: 23.116, sourceWidth: 9, targetWidth: 7, y0: 1060.5, y1: 1217.5, sourceOrder: 1, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'north_america', target: 'revenue', value: 701.990, sourceWidth: 270, targetWidth: 271, y0: 838, y1: 920.5, sourceOrder: 0, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'international', target: 'revenue', value: 23.116, sourceWidth: 7, targetWidth: 9, y0: 1217.5, y1: 1060.5, sourceOrder: 0, targetOrder: 1, linkTint: HUB_LINK },
      { source: 'revenue', target: 'gross_profit', value: 372.279, sourceWidth: 143, targetWidth: 142, y0: 856.5, y1: 779, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 352.827, sourceWidth: 137, targetWidth: 135, y0: 996.5, y1: 1114.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 372.279, sourceWidth: 142, targetWidth: 143, y0: 779, y1: 859.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 79.999, sourceWidth: 29, targetWidth: 31, y0: 1004.5, y1: 946.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distributor_termination_fees', value: 246.707, sourceWidth: 95, targetWidth: 94, y0: 835.5, y1: 723, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 205.571, sourceWidth: 79, targetWidth: 78, y0: 922.5, y1: 1038, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Celsius · 2025 财年第三季度',
        meta: { title: 'Celsius 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月 30 日的季度', titleSize: 112, titleTextLength: 1730 },
        nodes: {
          pepsico: { label: '百事公司', notes: ['同比 +106%'] }, costco: { label: '开市客', notes: ['同比 +103%'] }, amazon: { label: '亚马逊', notes: ['同比 +47%'] }, all_others: { label: '其他所有客户', notes: ['同比 +369%'] },
          revenue_by_customer: { label: '收入', notes: ['同比 +173%'] }, north_america: { label: '北美', notes: ['同比 +184%'] }, international: { label: '国际', notes: ['同比 +24%'] }, revenue: { label: '收入', notes: ['同比 +173%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +5 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (11%)', '同比 (10 个百分点)'] }, operating_expenses: { label: '营业费用' },
          distributor_termination_fees: { label: '经销商终止费', notes: ['占收入 34%', '同比 +34 个百分点'] }, sga: { label: '销售、一般及行政费用 *', notes: ['占收入 28%', '同比 +5 个百分点'] },
        },
        layout: { labels: zhLabels },
        annotationsSvg: footnote(true),
      },
    },
  });
})();
