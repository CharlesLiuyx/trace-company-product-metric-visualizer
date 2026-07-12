/* Hershey Q1 FY26 income statement ($B), measured from the processed reference.
 * The raw infographic title says FY256; the operator confirmed FY26. Official
 * results cover the quarter ended Mar. 29, 2026. */
(function () {
  const BURGUNDY = '#38000f';
  const GRAY_LINK = '#a69299';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bce9a';
  const RED = '#df0800';
  const RED_LABEL = '#a31700';
  const RED_LINK = '#df8585';
  const TITLE = '#155077';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2410;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });

  const labels = {
    north_america_confectionery: {
      blocks: [
        block(475, 492, [line('$value', 40), line('+8% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(405, 655, [line('North America', 40, { weight: 800 }), line('Confectionery', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
        block(405, 760, [line('32% segment margin', 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    north_america_salty_snacks: {
      blocks: [
        block(475, 945, [line('$value', 40), line('+26% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(405, 982, [line('North America', 40, { weight: 800 }), line('Salty Snacks', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
        block(405, 1090, [line('10% segment margin', 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    international: {
      blocks: [
        block(475, 1163, [line('$value', 40), line('+16% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(405, 1260, [line('International', 40, { weight: 800 })], { anchor: 'end' }),
        block(405, 1314, [line('6% segment margin', 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(942, 581, [line('Net sales', 40, { weight: 800 }), line('$value', 40), line('+11% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 395, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('39% margin', 29, { color: NOTE }), line('+6pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_sales: { blocks: [block(1409, 1172, [line('Cost of sales', 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1876, 281, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('21% margin', 29, { color: NOTE }), line('+7pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1876, 884, [line('Selling, marketing', 40, { weight: 800 }), line('& administrative', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 309, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('14% margin', 29, { color: NOTE }), line('+6pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 685, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 848, [line('Other', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
  };

  const zhLabels = {
    north_america_confectionery: { blocks: [block(475, 492, [line('$value', 40), line('同比 +8%', 29, { color: NOTE })], { lineGap: 12 }), block(405, 665, [line('北美糖果业务', 37, { weight: 800 })], { anchor: 'end' }), block(405, 719, [line('分部利润率 32%', 29, { color: NOTE })], { anchor: 'end' })] },
    north_america_salty_snacks: { blocks: [block(475, 945, [line('$value', 40), line('同比 +26%', 29, { color: NOTE })], { lineGap: 12 }), block(405, 992, [line('北美咸味零食业务', 34, { weight: 800 })], { anchor: 'end' }), block(405, 1042, [line('分部利润率 10%', 29, { color: NOTE })], { anchor: 'end' })] },
    international: { blocks: [block(475, 1163, [line('$value', 40), line('同比 +16%', 29, { color: NOTE })], { lineGap: 12 }), block(405, 1270, [line('国际业务', 40, { weight: 800 })], { anchor: 'end' }), block(405, 1320, [line('分部利润率 6%', 29, { color: NOTE })], { anchor: 'end' })] },
    revenue: { blocks: [block(942, 581, [line('净销售额', 40, { weight: 800 }), line('$value', 40), line('同比 +11%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 395, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 39%', 29, { color: NOTE }), line('同比 +6 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_sales: { blocks: [block(1409, 1182, [line('销售成本', 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1876, 281, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 21%', 29, { color: NOTE }), line('同比 +7 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1876, 894, [line('销售、营销及', 37, { weight: 800 }), line('管理费用', 37, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 319, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 14%', 29, { color: NOTE }), line('同比 +6 个百分点', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 695, [line('税费', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 858, [line('其他', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hershey-q1-fy26',
    name: 'Hershey · Q1 FY26',
    company: 'Hershey',
    meta: {
      company: 'Hershey', title: 'Hershey Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 29, 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/hershey-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2330,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BURGUNDY, label: BURGUNDY }, hub: { node: BURGUNDY, label: BURGUNDY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    rasterAnnotations: [
      { key: 'q1-fy26-company-wordmark', href: 'data/assets/raster-annotations/hershey/q1-fy26-company-wordmark.png', x: 650, y: 250, width: 620, height: 240 },
      { key: 'q1-fy26-north-america-confectionery-products', href: 'data/assets/raster-annotations/hershey/q1-fy26-north-america-confectionery-products.png', x: 140, y: 400, width: 220, height: 230 },
      { key: 'q1-fy26-north-america-salty-snacks-products', href: 'data/assets/raster-annotations/hershey/q1-fy26-north-america-salty-snacks-products.png', x: 140, y: 790, width: 230, height: 170 },
      { key: 'q1-fy26-international-products', href: 'data/assets/raster-annotations/hershey/q1-fy26-international-products.png', x: 175, y: 1115, width: 180, height: 135 },
    ],
    layout: {
      scale: 104,
      nodes: {
        north_america_confectionery: { x: 438, y: 584, width: 72, height: 254 },
        north_america_salty_snacks: { x: 438, y: 1038, width: 72, height: 35 },
        international: { x: 438, y: 1256, width: 72, height: 25 },
        revenue: { x: 906, y: 726, width: 72, height: 318 },
        gross_profit: { x: 1373, y: 581, width: 72, height: 124 },
        cost_of_sales: { x: 1373, y: 953, width: 72, height: 192 },
        operating_profit: { x: 1840, y: 466, width: 72, height: 65 },
        operating_expenses: { x: 1840, y: 802, width: 72, height: 58 },
        net_profit: { x: 2308, y: 351, width: 72, height: 44 },
        tax: { x: 2308, y: 710, width: 72, height: 15 },
        other: { x: 2308, y: 877, width: 72, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'north_america_confectionery', col: 0, order: 0, type: 'source', label: ['North America', 'Confectionery'], value: 2.5, notes: ['+8% Y/Y', '32% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'north_america_salty_snacks', col: 0, order: 1, type: 'source', label: ['North America', 'Salty Snacks'], value: 0.4, notes: ['+26% Y/Y', '10% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'international', col: 0, order: 2, type: 'source', label: 'International', value: 0.3, notes: ['+16% Y/Y', '6% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 3.1, notes: ['+11% Y/Y'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.2, notes: ['39% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['21% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Selling, marketing', '& administrative', 'expenses'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['14% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.048, valueText: '($48M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america_confectionery', target: 'revenue', value: 2.5, sourceWidth: 254, targetWidth: 257, y0: 711, y1: 854.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'north_america_salty_snacks', target: 'revenue', value: 0.4, sourceWidth: 35, targetWidth: 35, y0: 1055.5, y1: 1000.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'international', target: 'revenue', value: 0.3, sourceWidth: 25, targetWidth: 26, y0: 1268.5, y1: 1031, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.2, sourceWidth: 124, targetWidth: 124, y0: 788, y1: 643, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.9, sourceWidth: 194, targetWidth: 192, y0: 947, y1: 1049, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, sourceWidth: 65, targetWidth: 65, y0: 613.5, y1: 498.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.6, sourceWidth: 59, targetWidth: 58, y0: 675.5, y1: 831, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 44, targetWidth: 44, y0: 488, y1: 373, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 17, targetWidth: 15, y0: 518.5, y1: 717.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.048, sourceWidth: 4, targetWidth: 4, y0: 529, y1: 879, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '好时 · 2026 财年第一季度',
        meta: { title: '好时 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 29 日', titleSize: 112, titleTextLength: 1650 },
        nodes: {
          north_america_confectionery: { label: '北美糖果业务', notes: ['同比 +8%', '分部利润率 32%'] },
          north_america_salty_snacks: { label: '北美咸味零食业务', notes: ['同比 +26%', '分部利润率 10%'] },
          international: { label: '国际业务', notes: ['同比 +16%', '分部利润率 6%'] },
          revenue: { label: '净销售额', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +6 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +7 个百分点'] }, operating_expenses: { label: '销售、营销及管理费用' }, net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +6 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
