/* Celsius Q1 FY26 income statement ($M), reconstructed against the supplied
 * 2667×1500 reference. Customer concentration is shown before the reported
 * North America / International geographic split, then the income waterfall. */
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
  const RIGHT_LABEL_X = 2477;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 10, lines });

  const footnote = (zh = false) => `
    <g fill="${NOTE}" font-family="'Noto Sans', Arial, sans-serif" font-size="29" font-weight="400" text-anchor="middle">
      ${zh
        ? '<text x="2477" y="1328">* 销售、一般及行政费用</text>'
        : '<text x="2477" y="1318">* Selling, General and</text><text x="2477" y="1358">Administrative</text>'}
    </g>`;

  const labels = {
    pepsico: { blocks: [block(424, 536, [line('$value', 40, { color: ORANGE }), line('+143% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    amazon: { blocks: [block(424, 892, [line('$value', 40, { color: ORANGE }), line('+65% Y/Y', 29, { color: NOTE })], { lineGap: 13 })] },
    all_others: {
      blocks: [
        block(424, 1048, [line('$value', 40, { color: ORANGE }), line('+156% Y/Y', 29, { color: NOTE })], { lineGap: 13 }),
        block(282, 1188, [line('All Others', 40, { weight: 800, color: ORANGE })], { anchor: 'end' }),
      ],
    },
    revenue_by_customer: { blocks: [block(734, 633, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+138% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    north_america: { blocks: [block(1047, 552, [line('North America', 40, { weight: 800 }), line('$value', 40), line('+144% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    international: { blocks: [block(1047, 1232, [line('International', 40, { weight: 800 }), line('$value', 40), line('+55% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    revenue: { blocks: [block(1355, 633, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+138% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1669, 500, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('48% margin', 29, { color: NOTE }), line('(4pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1669, 1193, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('revenue', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1983, 414, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('18% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1983, 955, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 473, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('14% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 681, [line('Tax', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    other_nonoperating: { blocks: [block(RIGHT_LABEL_X, 779, [line('Other', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 891, [line('SG&A * expenses', 35, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('30% of revenue', 29, { color: NOTE }), line('+8pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    other_opex: { blocks: [block(RIGHT_LABEL_X, 1080, [line('Other', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }), line('1% of revenue', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
  };

  const zhLabels = {
    pepsico: { blocks: [block(424, 536, [line('$value', 40, { color: ORANGE }), line('同比 +143%', 29, { color: NOTE })], { lineGap: 13 })] },
    amazon: { blocks: [block(424, 892, [line('$value', 40, { color: ORANGE }), line('同比 +65%', 29, { color: NOTE })], { lineGap: 13 })] },
    all_others: { blocks: [block(424, 1048, [line('$value', 40, { color: ORANGE }), line('同比 +156%', 29, { color: NOTE })], { lineGap: 13 }), block(282, 1191, [line('其他所有客户', 35, { weight: 800, color: ORANGE })], { anchor: 'end' })] },
    revenue_by_customer: { blocks: [block(734, 633, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +138%', 29, { color: NOTE })], { lineGap: 12 })] },
    north_america: { blocks: [block(1047, 552, [line('北美', 40, { weight: 800 }), line('$value', 40), line('同比 +144%', 29, { color: NOTE })], { lineGap: 12 })] },
    international: { blocks: [block(1047, 1232, [line('国际', 40, { weight: 800 }), line('$value', 40), line('同比 +55%', 29, { color: NOTE })], { lineGap: 12 })] },
    revenue: { blocks: [block(1355, 633, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +138%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1669, 500, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 48%', 29, { color: NOTE }), line('同比 (4 个百分点)', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1669, 1193, [line('收入', 40, { weight: 800, color: RED_LABEL }), line('成本', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1983, 414, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 18%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1983, 955, [line('营业费用', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 12 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 473, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 14%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 681, [line('税费', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    other_nonoperating: { blocks: [block(RIGHT_LABEL_X, 779, [line('其他', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 891, [line('销售、一般及', 35, { weight: 800, color: RED_LABEL }), line('行政费用 *', 35, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('占收入 30%', 29, { color: NOTE }), line('同比 +8 个百分点', 29, { color: NOTE })], { lineGap: 4 })] },
    other_opex: { blocks: [block(RIGHT_LABEL_X, 1080, [line('其他', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }), line('占收入 1%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'celsius-q1-fy26',
    name: 'Celsius · Q1 FY26',
    company: 'Celsius',
    meta: {
      company: 'Celsius',
      title: 'Celsius Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 31, 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/celsius-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
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
      { key: 'pepsico-wordmark', href: 'data/assets/raster-annotations/celsius/pepsico-wordmark.png', x: 15, y: 685, width: 330, height: 90 },
      { key: 'amazon-wordmark', href: 'data/assets/raster-annotations/celsius/amazon-wordmark.png', x: 10, y: 955, width: 340, height: 125 },
    ],
    annotationsSvg: footnote(),
    layout: {
      scale: 0.4,
      nodes: {
        pepsico: { x: 389, y: 635, width: 71, height: 184 },
        amazon: { x: 389, y: 992, width: 71, height: 25 },
        all_others: { x: 389, y: 1153, width: 71, height: 100 },
        revenue_by_customer: { x: 700, y: 781, width: 71, height: 312 },
        north_america: { x: 1011, y: 698, width: 72, height: 299 },
        international: { x: 1011, y: 1204, width: 72, height: 12 },
        revenue: { x: 1323, y: 780, width: 71, height: 313 },
        gross_profit: { x: 1634, y: 690, width: 72, height: 149 },
        cost_of_revenue: { x: 1634, y: 1014, width: 72, height: 160 },
        operating_profit: { x: 1946, y: 600, width: 71, height: 53 },
        operating_expenses: { x: 1946, y: 819, width: 71, height: 93 },
        net_profit: { x: 2257, y: 521, width: 71, height: 42 },
        tax: { x: 2257, y: 720, width: 71, height: 9 },
        other_nonoperating: { x: 2257, y: 817, width: 71, height: 4 },
        sga: { x: 2257, y: 916, width: 71, height: 93 },
        other_opex: { x: 2257, y: 1113, width: 71, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'pepsico', col: 0, order: 0, type: 'source', label: 'PepsiCo', value: 462, notes: ['+143% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'amazon', col: 0, order: 1, type: 'source', label: 'Amazon', value: 66, notes: ['+65% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 2, type: 'source', label: 'All Others', value: 255, notes: ['+156% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue_by_customer', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 783, notes: ['+138% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'north_america', col: 2, order: 0, type: 'hub', label: 'North America', value: 747, notes: ['+144% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'international', col: 2, order: 1, type: 'hub', label: 'International', value: 35, notes: ['+55% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 783, notes: ['+138% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 378, notes: ['48% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 405, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 139, notes: ['18% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 239, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 110, notes: ['14% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 27, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 6, order: 2, type: 'cost', label: 'Other', value: 1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A * expenses', value: 235, notes: ['30% of revenue', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 6, order: 4, type: 'cost', label: 'Other', value: 4, notes: ['1% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'pepsico', target: 'revenue_by_customer', value: 462, sourceWidth: 184, targetWidth: 184, y0: 727, y1: 873, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'amazon', target: 'revenue_by_customer', value: 66, sourceWidth: 25, targetWidth: 26, y0: 1004.5, y1: 978, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'all_others', target: 'revenue_by_customer', value: 255, sourceWidth: 100, targetWidth: 102, y0: 1203, y1: 1042, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'revenue_by_customer', target: 'north_america', value: 747, sourceWidth: 300, targetWidth: 299, y0: 931, y1: 847.5, sourceOrder: 0, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'revenue_by_customer', target: 'international', value: 35, sourceWidth: 12, targetWidth: 12, y0: 1087, y1: 1210, sourceOrder: 1, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'north_america', target: 'revenue', value: 747, sourceWidth: 299, targetWidth: 300, y0: 847.5, y1: 930, sourceOrder: 0, targetOrder: 0, linkTint: HUB_LINK },
      { source: 'international', target: 'revenue', value: 35, sourceWidth: 12, targetWidth: 13, y0: 1210, y1: 1086.5, sourceOrder: 0, targetOrder: 1, linkTint: HUB_LINK },
      { source: 'revenue', target: 'gross_profit', value: 378, sourceWidth: 150, targetWidth: 149, y0: 855, y1: 764.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 405, sourceWidth: 163, targetWidth: 160, y0: 1011.5, y1: 1094, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 139, sourceWidth: 55, targetWidth: 53, y0: 717.5, y1: 626.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 239, sourceWidth: 94, targetWidth: 93, y0: 792, y1: 865.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 110, sourceWidth: 42, targetWidth: 42, y0: 621, y1: 542, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 27, sourceWidth: 9, targetWidth: 9, y0: 646.5, y1: 724.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_nonoperating', value: 1, sourceWidth: 2, targetWidth: 2, y0: 652, y1: 819.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 235, sourceWidth: 91, targetWidth: 93, y0: 864.5, y1: 962.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 4, sourceWidth: 2, targetWidth: 2, y0: 910.5, y1: 1115.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Celsius · 2026 财年第一季度',
        meta: { title: 'Celsius 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日', titleSize: 112, titleTextLength: 1730 },
        nodes: {
          pepsico: { label: '百事公司', notes: ['同比 +143%'] }, amazon: { label: '亚马逊', notes: ['同比 +65%'] }, all_others: { label: '其他所有客户', notes: ['同比 +156%'] },
          revenue_by_customer: { label: '收入', notes: ['同比 +138%'] }, north_america: { label: '北美', notes: ['同比 +144%'] }, international: { label: '国际', notes: ['同比 +55%'] }, revenue: { label: '收入', notes: ['同比 +138%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 (4 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] }, operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +1 个百分点'] }, tax: { label: '税费' }, other_nonoperating: { label: '其他' }, sga: { label: '销售、一般及行政费用 *', notes: ['占收入 30%', '同比 +8 个百分点'] }, other_opex: { label: '其他', notes: ['占收入 1%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
        annotationsSvg: footnote(true),
      },
    },
  });
})();
