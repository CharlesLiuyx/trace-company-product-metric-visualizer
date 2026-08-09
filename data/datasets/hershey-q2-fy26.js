/* Hershey Q2 FY26 income statement ($B), measured from the processed reference. */
(function () {
  const BURGUNDY = '#36000e';
  const GRAY_LINK = '#9d858b';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap || 9,
    semanticRole: options.semanticRole,
    lines,
  });

  const labels = {
    north_america_confectionery: {
      blocks: [
        block(475, 484, [line('$value', 40), line('+4% Y/Y', 29, { color: NOTE })], { lineGap: 12, semanticRole: 'amount' }),
        block(405, 597, [line('North America', 40, { weight: 800 }), line('Confectionery', 40, { weight: 800 })], { anchor: 'end', lineGap: 9, semanticRole: 'top-aligned-side-label' }),
        block(405, 702, [line('32% segment margin', 29, { color: NOTE })], { anchor: 'end', semanticRole: 'note' }),
      ],
    },
    north_america_salty_snacks: {
      blocks: [
        block(475, 929, [line('$value', 40), line('+23% Y/Y', 29, { color: NOTE })], { lineGap: 12, semanticRole: 'amount' }),
        block(405, 962, [line('North America', 40, { weight: 800 }), line('Salty Snacks', 40, { weight: 800 })], { anchor: 'end', lineGap: 9, semanticRole: 'top-aligned-side-label' }),
        block(405, 1067, [line('16% segment margin', 29, { color: NOTE })], { anchor: 'end', semanticRole: 'note' }),
      ],
    },
    international: {
      blocks: [
        block(475, 1160, [line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })], { lineGap: 12, semanticRole: 'amount' }),
        block(405, 1243, [line('International', 40, { weight: 800 })], { anchor: 'end', semanticRole: 'name' }),
        block(405, 1300, [line('(2%) segment margin', 29, { color: NOTE })], { anchor: 'end', semanticRole: 'note' }),
      ],
    },
    revenue: { blocks: [block(942, 595, [line('Net sales', 40, { weight: 800 }), line('$value', 40), line('+7% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1405, 410, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('45% margin', 29, { color: NOTE }), line('+15pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_sales: { blocks: [block(1405, 1212, [line('Cost of sales', 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1876, 273, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('23% margin', 29, { color: NOTE }), line('+16pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1876, 926, [line('Selling, marketing', 40, { weight: 800 }), line('& administrative', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    net_profit: { blocks: [block(2404, 314, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('16% margin', 29, { color: NOTE }), line('+14pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    tax: { blocks: [block(2448, 659, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    other: { blocks: [block(2448, 813, [line('Other', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
  };

  const zhLabels = {
    north_america_confectionery: { blocks: [block(475, 484, [line('$value', 40), line('同比 +4%', 29, { color: NOTE })], { lineGap: 12, semanticRole: 'amount' }), block(405, 607, [line('北美糖果业务', 37, { weight: 800 })], { anchor: 'end', semanticRole: 'top-aligned-side-label' }), block(405, 661, [line('分部利润率 32%', 29, { color: NOTE })], { anchor: 'end', semanticRole: 'note' })] },
    north_america_salty_snacks: { blocks: [block(475, 929, [line('$value', 40), line('同比 +23%', 29, { color: NOTE })], { lineGap: 12, semanticRole: 'amount' }), block(405, 972, [line('北美咸味零食业务', 34, { weight: 800 })], { anchor: 'end', semanticRole: 'top-aligned-side-label' }), block(405, 1022, [line('分部利润率 16%', 29, { color: NOTE })], { anchor: 'end', semanticRole: 'note' })] },
    international: { blocks: [block(475, 1160, [line('$value', 40), line('同比 +6%', 29, { color: NOTE })], { lineGap: 12, semanticRole: 'amount' }), block(405, 1243, [line('国际业务', 40, { weight: 800 })], { anchor: 'end', semanticRole: 'name' }), block(405, 1300, [line('分部利润率 (2%)', 29, { color: NOTE })], { anchor: 'end', semanticRole: 'note' })] },
    revenue: { blocks: [block(942, 595, [line('净销售额', 40, { weight: 800 }), line('$value', 40), line('同比 +7%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1405, 410, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 45%', 29, { color: NOTE }), line('同比 +15 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_sales: { blocks: [block(1405, 1212, [line('销售成本', 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1876, 273, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 23%', 29, { color: NOTE }), line('同比 +16 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1876, 936, [line('销售、营销及', 37, { weight: 800 }), line('管理费用', 37, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    net_profit: { blocks: [block(2404, 324, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 16%', 29, { color: NOTE }), line('同比 +14 个百分点', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    tax: { blocks: [block(2448, 669, [line('税费', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    other: { blocks: [block(2448, 823, [line('其他', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hershey-q2-fy26',
    name: 'Hershey · Q2 FY26',
    company: 'Hershey',
    meta: {
      company: 'Hershey', title: 'Hershey Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 28, 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/hershey-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'q2-fy26-company-wordmark', href: 'data/assets/raster-annotations/hershey/q1-fy26-company-wordmark.png', x: 650, y: 250, width: 620, height: 240 },
      { key: 'q2-fy26-north-america-confectionery-products', href: 'data/assets/raster-annotations/hershey/q1-fy26-north-america-confectionery-products.png', x: 140, y: 348, width: 220, height: 230 },
      { key: 'q2-fy26-north-america-salty-snacks-products', href: 'data/assets/raster-annotations/hershey/q1-fy26-north-america-salty-snacks-products.png', x: 140, y: 774, width: 230, height: 164 },
      { key: 'q2-fy26-international-products', href: 'data/assets/raster-annotations/hershey/q1-fy26-international-products.png', x: 177, y: 1112, width: 186, height: 125 },
    ],
    layout: {
      scale: 104,
      nodes: {
        north_america_confectionery: { x: 435, y: 576, width: 72, height: 247 },
        north_america_salty_snacks: { x: 435, y: 1021, width: 72, height: 42 },
        international: { x: 435, y: 1252, width: 72, height: 24 },
        revenue: { x: 903, y: 739, width: 72, height: 317 },
        gross_profit: { x: 1370, y: 596, width: 72, height: 144 },
        cost_of_sales: { x: 1370, y: 1025, width: 72, height: 172 },
        operating_profit: { x: 1837, y: 459, width: 72, height: 72 },
        operating_expenses: { x: 1837, y: 843, width: 72, height: 69 },
        net_profit: { x: 2304, y: 339, width: 72, height: 51 },
        tax: { x: 2304, y: 684, width: 72, height: 14 },
        other: { x: 2304, y: 847, width: 72, height: 5 },
      },
      labels,
    },
    nodes: [
      { id: 'north_america_confectionery', col: 0, order: 0, type: 'source', label: ['North America', 'Confectionery'], value: 2.2, notes: ['+4% Y/Y', '32% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'north_america_salty_snacks', col: 0, order: 1, type: 'source', label: ['North America', 'Salty Snacks'], value: 0.4, notes: ['+23% Y/Y', '16% segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'international', col: 0, order: 2, type: 'source', label: 'International', value: 0.2, notes: ['+6% Y/Y', '(2%) segment margin'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 2.8, notes: ['+7% Y/Y'], color: BURGUNDY, labelColor: BURGUNDY, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.3, notes: ['45% margin', '+15pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['23% margin', '+16pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Selling, marketing', '& administrative', 'expenses'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.5, notes: ['16% margin', '+14pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america_confectionery', target: 'revenue', value: 2.2, sourceWidth: 247, targetWidth: 251, y0: 699.5, y1: 864.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'north_america_salty_snacks', target: 'revenue', value: 0.4, sourceWidth: 42, targetWidth: 42, y0: 1042, y1: 1011, sourceOrder: 0, targetOrder: 1 },
      { source: 'international', target: 'revenue', value: 0.2, sourceWidth: 24, targetWidth: 24, y0: 1264, y1: 1044, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.3, sourceWidth: 143, targetWidth: 143, y0: 810.5, y1: 668.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.5, sourceWidth: 174, targetWidth: 172, y0: 969, y1: 1111, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, sourceWidth: 72, targetWidth: 72, y0: 632, y1: 495, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.6, sourceWidth: 72, targetWidth: 69, y0: 704, y1: 877.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 51, targetWidth: 51, y0: 484.5, y1: 364.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 16, targetWidth: 14, y0: 518, y1: 691, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 528.5, y1: 849.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '好时 · 2026 财年第二季度',
        meta: { title: '好时 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月 28 日', titleSize: 112, titleTextLength: 1650 },
        nodes: {
          north_america_confectionery: { label: '北美糖果业务', notes: ['同比 +4%', '分部利润率 32%'] },
          north_america_salty_snacks: { label: '北美咸味零食业务', notes: ['同比 +23%', '分部利润率 16%'] },
          international: { label: '国际业务', notes: ['同比 +6%', '分部利润率 (2%)'] },
          revenue: { label: '净销售额', notes: ['同比 +7%'] }, gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +15 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +16 个百分点'] }, operating_expenses: { label: '销售、营销及管理费用' }, net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +14 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
