/* Hershey Q4 FY25 income statement ($B), measured from the processed reference. */
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
        block(475, 466, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(405, 615, [line('North America', 40, { weight: 800 }), line('Confectionery', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
        block(405, 720, [line('29% segment margin', 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    north_america_salty_snacks: {
      blocks: [
        block(475, 919, [line('$value', 40), line('+28% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(405, 967, [line('North America', 40, { weight: 800 }), line('Salty Snacks', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
        block(405, 1076, [line('21% segment margin', 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    international: {
      blocks: [
        block(475, 1161, [line('$value', 40), line('+1% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(405, 1254, [line('International', 40, { weight: 800 })], { anchor: 'end' }),
        block(405, 1317, [line('(12%) segment margin', 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(942, 591, [line('Net sales', 40, { weight: 800 }), line('$value', 40), line('+7% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 405, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('37% margin', 29, { color: NOTE }), line('(17pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_sales: { blocks: [block(1409, 1219, [line('Cost of sales', 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1876, 311, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('14% margin', 29, { color: NOTE }), line('(18pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1876, 879, [line('Selling, marketing', 40, { weight: 800 }), line('& administrative', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    net_profit: { blocks: [block(2410, 357, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('10% margin', 29, { color: NOTE }), line('(17pp) Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 714, [line('Other', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 875, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
  };

  const zhLabels = {
    north_america_confectionery: { blocks: [block(475, 466, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })], { lineGap: 12 }), block(405, 625, [line('北美糖果业务', 37, { weight: 800 })], { anchor: 'end' }), block(405, 679, [line('分部利润率 29%', 29, { color: NOTE })], { anchor: 'end' })] },
    north_america_salty_snacks: { blocks: [block(475, 920, [line('$value', 40), line('同比 +28%', 29, { color: NOTE })], { lineGap: 12 }), block(405, 977, [line('北美咸味零食业务', 34, { weight: 800 })], { anchor: 'end' }), block(405, 1027, [line('分部利润率 21%', 29, { color: NOTE })], { anchor: 'end' })] },
    international: { blocks: [block(475, 1161, [line('$value', 40), line('同比 +1%', 29, { color: NOTE })], { lineGap: 12 }), block(405, 1264, [line('国际业务', 40, { weight: 800 })], { anchor: 'end' }), block(405, 1319, [line('分部利润率 (12%)', 29, { color: NOTE })], { anchor: 'end' })] },
    revenue: { blocks: [block(942, 591, [line('净销售额', 40, { weight: 800 }), line('$value', 40), line('同比 +7%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 405, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 37%', 29, { color: NOTE }), line('同比 (17 个百分点)', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_sales: { blocks: [block(1409, 1229, [line('销售成本', 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1876, 311, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 14%', 29, { color: NOTE }), line('同比 (18 个百分点)', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1876, 889, [line('销售、营销及', 37, { weight: 800 }), line('管理费用', 37, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    net_profit: { blocks: [block(2410, 367, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 10%', 29, { color: NOTE }), line('同比 (17 个百分点)', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 724, [line('其他', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 885, [line('税费', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hershey-q4-fy25',
    name: 'Hershey · Q4 FY25',
    company: 'Hershey',
    meta: {
      company: 'Hershey', title: 'Hershey Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/hershey-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2190,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BURGUNDY, label: BURGUNDY }, hub: { node: BURGUNDY, label: BURGUNDY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/hershey/company-wordmark.png', x: 650, y: 240, width: 620, height: 270 },
      { key: 'north-america-confectionery-products', href: 'data/assets/raster-annotations/hershey/north-america-confectionery-products.png', x: 140, y: 400, width: 220, height: 210 },
      { key: 'north-america-salty-snacks-products', href: 'data/assets/raster-annotations/hershey/north-america-salty-snacks-products.png', x: 140, y: 750, width: 230, height: 210 },
      { key: 'international-products', href: 'data/assets/raster-annotations/hershey/international-products.png', x: 175, y: 1105, width: 180, height: 145 },
    ],
    layout: {
      scale: 104,
      nodes: {
        north_america_confectionery: { x: 438, y: 559, width: 72, height: 249 },
        north_america_salty_snacks: { x: 438, y: 1013, width: 72, height: 37 },
        international: { x: 438, y: 1254, width: 72, height: 29 },
        revenue: { x: 906, y: 736, width: 72, height: 312 },
        gross_profit: { x: 1373, y: 591, width: 72, height: 116 },
        cost_of_sales: { x: 1373, y: 1000, width: 72, height: 198 },
        operating_profit: { x: 1840, y: 497, width: 72, height: 43 },
        operating_expenses: { x: 1840, y: 786, width: 72, height: 71 },
        net_profit: { x: 2308, y: 390, width: 72, height: 31 },
        other: { x: 2308, y: 742, width: 72, height: 6 },
        tax: { x: 2308, y: 901, width: 72, height: 6 },
      },
      labels,
    },
    nodes: [
      { id: 'north_america_confectionery', col: 0, order: 0, type: 'source', label: ['North America', 'Confectionery'], value: 2.5, notes: ['+5% Y/Y', '29% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'north_america_salty_snacks', col: 0, order: 1, type: 'source', label: ['North America', 'Salty Snacks'], value: 0.4, notes: ['+28% Y/Y', '21% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'international', col: 0, order: 2, type: 'source', label: 'International', value: 0.3, notes: ['+1% Y/Y', '(12%) segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 3.1, notes: ['+7% Y/Y'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.1, notes: ['37% margin', '(17pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['14% margin', '(18pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Selling, marketing', '& administrative', 'expenses'], value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.3, notes: ['10% margin', '(17pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america_confectionery', target: 'revenue', value: 2.5, sourceWidth: 249, targetWidth: 246, y0: 683.5, y1: 859, sourceOrder: 0, targetOrder: 0 },
      { source: 'north_america_salty_snacks', target: 'revenue', value: 0.4, sourceWidth: 37, targetWidth: 37, y0: 1031.5, y1: 1000.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'international', target: 'revenue', value: 0.3, sourceWidth: 29, targetWidth: 29, y0: 1268.5, y1: 1033.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.1, sourceWidth: 114, targetWidth: 116, y0: 793, y1: 649, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.9, sourceWidth: 198, targetWidth: 198, y0: 949, y1: 1099, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 43, targetWidth: 43, y0: 612.5, y1: 518.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 73, targetWidth: 71, y0: 670.5, y1: 821.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, sourceWidth: 31, targetWidth: 31, y0: 512.5, y1: 405.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 6, targetWidth: 6, y0: 531, y1: 745, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 6, targetWidth: 6, y0: 537, y1: 904, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '好时 · 2025 财年第四季度',
        meta: { title: '好时 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 112, titleTextLength: 1550 },
        nodes: {
          north_america_confectionery: { label: '北美糖果业务', notes: ['同比 +5%', '分部利润率 29%'] },
          north_america_salty_snacks: { label: '北美咸味零食业务', notes: ['同比 +28%', '分部利润率 21%'] },
          international: { label: '国际业务', notes: ['同比 +1%', '分部利润率 (12%)'] },
          revenue: { label: '净销售额', notes: ['同比 +7%'] }, gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 (17 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 (18 个百分点)'] }, operating_expenses: { label: '销售、营销及管理费用' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (17 个百分点)'] }, other: { label: '其他' }, tax: { label: '税费' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
