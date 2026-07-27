/* Celsius FY25 income statement ($M), reconstructed against the supplied
 * 2667×1500 reference. Customer concentration is followed by the reported
 * North America / International split and the annual income waterfall. */
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
  const NOTE = '#797979';
  const RIGHT_LABEL_X = 2477;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 10, lines });

  const footnote = (zh = false) => `
    <g fill="${NOTE}" font-family="'Noto Sans', Arial, sans-serif" font-size="29" font-weight="400" text-anchor="middle">
      ${zh
        ? '<text x="2477" y="1348">* 销售、一般及</text><text x="2477" y="1388">行政费用</text>'
        : '<text x="2477" y="1348">* Selling, General and</text><text x="2477" y="1388">Administrative</text>'}
    </g>`;

  const labels = {
    pepsico: { blocks: [block(429, 539, [line('$value', 40, { color: ORANGE }), line('+47% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    costco: { blocks: [block(424, 792, [line('$value', 40, { color: ORANGE }), line('+73% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    all_others: {
      blocks: [
        block(424, 957, [line('$value', 40, { color: ORANGE }), line('+153% Y/Y', 29, { color: NOTE })], { lineGap: 13 }),
        block(291, 1093, [line('All Others', 40, { weight: 800, color: ORANGE })], { anchor: 'end' }),
      ],
    },
    revenue_by_customer: { blocks: [block(737, 643, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+86% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    north_america: { blocks: [block(1051, 569, [line('North America', 40, { weight: 800 }), line('$value', 40), line('+89% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    international: { blocks: [block(1047, 1162, [line('International', 40, { weight: 800 }), line('$value', 40), line('+24% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    revenue: { blocks: [block(1357, 649, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+86% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1675, 526, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('50% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1669, 1148, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('revenue', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1958, 467, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('6% margin', 29, { color: NOTE }), line('(6pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1978, 944, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    net_profit: { blocks: [block(2484, 517, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('4% margin', 29, { color: NOTE }), line('(6pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    tax_and_other: { blocks: [block(2483, 724, [line('Tax & Other', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    sga: { blocks: [block(2488, 886, [line('SG&A * expenses', 35, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('32% of revenue', 29, { color: NOTE }), line('+9pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    distributor_termination_fees: {
      blocks: [block(2483, 1106, [
        line('Distribution', 35, { weight: 800, color: RED_LABEL }),
        line('termination fees', 35, { weight: 800, color: RED_LABEL }),
        line('$value', 35, { color: RED_LABEL }),
        line('13% of revenue', 29, { color: NOTE }),
        line('+13pp Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
  };

  const zhLabels = {
    pepsico: { blocks: [block(429, 539, [line('$value', 40, { color: ORANGE }), line('同比 +47%', 29, { color: NOTE })], { lineGap: 13 })] },
    costco: { blocks: [block(424, 792, [line('$value', 40, { color: ORANGE }), line('同比 +73%', 29, { color: NOTE })], { lineGap: 13 })] },
    all_others: { blocks: [block(424, 957, [line('$value', 40, { color: ORANGE }), line('同比 +153%', 29, { color: NOTE })], { lineGap: 13 }), block(291, 1095, [line('其他所有客户', 35, { weight: 800, color: ORANGE })], { anchor: 'end' })] },
    revenue_by_customer: { blocks: [block(737, 643, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +86%', 29, { color: NOTE })], { lineGap: 12 })] },
    north_america: { blocks: [block(1051, 569, [line('北美', 40, { weight: 800 }), line('$value', 40), line('同比 +89%', 29, { color: NOTE })], { lineGap: 12 })] },
    international: { blocks: [block(1047, 1162, [line('国际', 40, { weight: 800 }), line('$value', 40), line('同比 +24%', 29, { color: NOTE })], { lineGap: 12 })] },
    revenue: { blocks: [block(1357, 649, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +86%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1675, 526, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 50%', 29, { color: NOTE }), line('同比 +0 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1669, 1148, [line('收入', 40, { weight: 800, color: RED_LABEL }), line('成本', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1958, 467, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 6%', 29, { color: NOTE }), line('同比 (6 个百分点)', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1978, 944, [line('营业费用', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 12 })] },
    net_profit: { blocks: [block(2484, 517, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 4%', 29, { color: NOTE }), line('同比 (6 个百分点)', 29, { color: NOTE })], { lineGap: 12 })] },
    tax_and_other: { blocks: [block(2483, 724, [line('税费及其他', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    sga: { blocks: [block(2488, 886, [line('销售、一般及', 35, { weight: 800, color: RED_LABEL }), line('行政费用 *', 35, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('占收入 32%', 29, { color: NOTE }), line('同比 +9 个百分点', 29, { color: NOTE })], { lineGap: 4 })] },
    distributor_termination_fees: {
      blocks: [block(2483, 1106, [
        line('经销商终止费', 35, { weight: 800, color: RED_LABEL }),
        line('$value', 35, { color: RED_LABEL }),
        line('占收入 13%', 29, { color: NOTE }),
        line('同比 +13 个百分点', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'celsius-fy25',
    name: 'Celsius · FY25',
    company: 'Celsius',
    meta: {
      company: 'Celsius',
      title: 'Celsius FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/celsius-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 1965,
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
      { key: 'celsius-product-cluster', href: 'data/assets/raster-annotations/celsius/celsius-product-cluster.png', x: 8, y: 385, width: 345, height: 245 },
      { key: 'pepsico-wordmark', href: 'data/assets/raster-annotations/celsius/pepsico-wordmark.png', x: 5, y: 653, width: 330, height: 90 },
      { key: 'costco-wordmark', href: 'data/assets/raster-annotations/celsius/costco-wordmark.png', x: 20, y: 855, width: 330, height: 110 },
    ],
    annotationsSvg: footnote(),
    layout: {
      scale: 0.104,
      nodes: {
        pepsico: { x: 389, y: 639, width: 71, height: 112 },
        costco: { x: 389, y: 895, width: 71, height: 27 },
        all_others: { x: 389, y: 1060, width: 71, height: 119 },
        revenue_by_customer: { x: 700, y: 796, width: 71, height: 262 },
        north_america: { x: 1011, y: 720, width: 72, height: 252 },
        international: { x: 1011, y: 1138, width: 72, height: 7 },
        revenue: { x: 1323, y: 800, width: 71, height: 262 },
        gross_profit: { x: 1634, y: 715, width: 72, height: 130 },
        cost_of_revenue: { x: 1634, y: 1005, width: 72, height: 128 },
        operating_profit: { x: 1946, y: 656, width: 71, height: 13 },
        operating_expenses: { x: 1946, y: 818, width: 71, height: 116 },
        net_profit: { x: 2257, y: 576, width: 71, height: 9 },
        tax_and_other: { x: 2257, y: 761, width: 71, height: 2 },
        sga: { x: 2257, y: 895, width: 71, height: 82 },
        distributor_termination_fees: { x: 2257, y: 1150, width: 71, height: 33 },
      },
      labels,
    },
    nodes: [
      { id: 'pepsico', col: 0, order: 0, type: 'source', label: 'PepsiCo', value: 1087, notes: ['+47% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'costco', col: 0, order: 1, type: 'source', label: 'Costco', value: 272, notes: ['+73% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 2, type: 'source', label: 'All Others', value: 1157, notes: ['+153% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue_by_customer', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2515.269, notes: ['+86% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'north_america', col: 2, order: 0, type: 'hub', label: 'North America', value: 2423, notes: ['+89% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'international', col: 2, order: 1, type: 'hub', label: 'International', value: 93, notes: ['+24% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 2515.269, notes: ['+86% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1267.333, notes: ['50% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1247.936, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 141.062, notes: ['6% margin', '(6pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1126.271, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 108.002, notes: ['4% margin', '(6pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_and_other', col: 6, order: 1, type: 'cost', label: 'Tax & Other', value: 33.060, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A * expenses', value: 798.810, notes: ['32% of revenue', '+9pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'distributor_termination_fees', col: 6, order: 3, type: 'cost', label: ['Distribution', 'termination fees'], value: 328, notes: ['13% of revenue', '+13pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'pepsico', target: 'revenue_by_customer', value: 1087, sourceWidth: 112, targetWidth: 113, y0: 695, y1: 852.5, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'costco', target: 'revenue_by_customer', value: 272, sourceWidth: 27, targetWidth: 28, y0: 908.5, y1: 923, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'all_others', target: 'revenue_by_customer', value: 1157, sourceWidth: 119, targetWidth: 121, y0: 1119.5, y1: 997.5, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'revenue_by_customer', target: 'north_america', value: 2423, sourceWidth: 255, targetWidth: 252, y0: 923.5, y1: 846, sourceOrder: 0, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'revenue_by_customer', target: 'international', value: 93, sourceWidth: 7, targetWidth: 7, y0: 1054.5, y1: 1141.5, sourceOrder: 1, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'north_america', target: 'revenue', value: 2423, sourceWidth: 252, targetWidth: 254, y0: 846, y1: 927, sourceOrder: 0, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'international', target: 'revenue', value: 93, sourceWidth: 7, targetWidth: 8, y0: 1141.5, y1: 1058, sourceOrder: 0, targetOrder: 1, linkTint: HUB_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1267.333, sourceWidth: 132, targetWidth: 130, y0: 866, y1: 780, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1247.936, sourceWidth: 130, targetWidth: 128, y0: 997, y1: 1069, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 141.062, sourceWidth: 14, targetWidth: 13, y0: 722, y1: 662.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1126.271, sourceWidth: 116, targetWidth: 116, y0: 787, y1: 876, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 108.002, sourceWidth: 10, targetWidth: 9, y0: 661, y1: 580.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_and_other', value: 33.060, sourceWidth: 3, targetWidth: 2, y0: 667.5, y1: 762, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 798.810, sourceWidth: 82, targetWidth: 82, y0: 859, y1: 936, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distributor_termination_fees', value: 328, sourceWidth: 34, targetWidth: 33, y0: 917, y1: 1166.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Celsius · 2025 财年',
        meta: { title: 'Celsius 2025 财年利润表', period: '2025 财年', periodNote: '截至 2025 年 12 月 31 日的年度', titleSize: 112, titleTextLength: 1405 },
        nodes: {
          pepsico: { label: '百事公司', notes: ['同比 +47%'] }, costco: { label: '开市客', notes: ['同比 +73%'] }, all_others: { label: '其他所有客户', notes: ['同比 +153%'] },
          revenue_by_customer: { label: '收入', notes: ['同比 +86%'] }, north_america: { label: '北美', notes: ['同比 +89%'] }, international: { label: '国际', notes: ['同比 +24%'] }, revenue: { label: '收入', notes: ['同比 +86%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +0 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (6 个百分点)'] }, operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 (6 个百分点)'] }, tax_and_other: { label: '税费及其他' },
          sga: { label: '销售、一般及行政费用 *', notes: ['占收入 32%', '同比 +9 个百分点'] }, distributor_termination_fees: { label: '经销商终止费', notes: ['占收入 13%', '同比 +13 个百分点'] },
        },
        layout: { labels: zhLabels },
        annotationsSvg: footnote(true),
      },
    },
  });
})();
