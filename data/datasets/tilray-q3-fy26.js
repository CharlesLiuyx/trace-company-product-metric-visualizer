/* Tilray Brands — Q3 FY26 income statement ($M), measured from the reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#686868';
  const BLUE = '#113da3';
  const SOURCE_LIGHT = '#7098cc';
  const GREEN = '#2fa32a';
  const GREEN_LABEL = '#00934d';
  const GREEN_LINK = '#9bd096';
  const RED = '#d90000';
  const RED_LABEL = '#a51c09';
  const RED_LINK = '#df8585';
  const RIGHT_X = 2450;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const tilraySymbol = `
    <g data-typography-role="brand" aria-label="Tilray Brands mark">
      <circle cx="642" cy="359" r="85" fill="#0d3ba4"/>
      <path d="M556 403 L621 275 L665 344 L641 377 Z" fill="#6f9fd1"/>
      <path d="M642 275 L701 347 L665 344 L621 275 Z" fill="#ffffff"/>
      <path d="M594 430 L665 344 L695 432 C665 449 622 449 594 430 Z" fill="#008b05"/>
    </g>`;

  const labels = {
    beverage_alcohol: { blocks: [
      block(428, 341, [line('$value', 40), line('(24%) Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 429, [line('Beverage', 39, { weight: 800 }), line('alcohol', 39, { weight: 800 })], { lineGap: 7 }),
      block(238, 531, [line('32% gross margin', 28, { color: NOTE })]),
    ] },
    cannabis: { blocks: [
      block(428, 588, [line('$value', 40, { color: GREEN_LABEL }), line('+19% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 720, [line('Cannabis', 39, { weight: 800, color: '#008b05' })]),
      block(238, 803, [line('40% gross margin', 28, { color: NOTE })]),
    ] },
    distribution: { blocks: [
      block(428, 880, [line('$value', 40), line('+35% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1029, [line('Distribution', 39, { weight: 800 })]),
      block(238, 1075, [line('12% gross margin', 28, { color: NOTE })]),
    ] },
    wellness: { blocks: [
      block(428, 1180, [line('$value', 40), line('+16% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1266, [line('Wellness', 39, { weight: 800 })]),
      block(238, 1300, [line('33% gross margin', 28, { color: NOTE })]),
    ] },
    revenue: { blocks: [block(894, 524, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+11% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1362, 332, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('27% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_goods_sold: { blocks: [block(1362, 1211, [line('Cost of', 36, { weight: 800, color: RED_LABEL }), line('goods sold', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    operating_loss: { blocks: [block(1605, 989, [line('Operating', 39, { weight: 800, color: RED_LABEL }), line('loss', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL }), line('(13%) margin', 28, { color: NOTE }), line('+396pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1832, 515, [line('Operating', 39, { weight: 800, color: RED_LABEL }), line('expenses', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_X, 390, [line('G&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('24% of revenue', 28, { color: NOTE }), line('+3pp Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    selling: { blocks: [block(RIGHT_X, 619, [line('Selling', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('5% of revenue', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    marketing: { blocks: [block(RIGHT_X, 818, [line('Marketing', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('4% of revenue', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    amortization: { blocks: [block(RIGHT_X, 1016, [line('Amortization', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('2% of revenue', 28, { color: NOTE }), line('(10pp) Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_X, 1214, [line('Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('3% of revenue', 28, { color: NOTE }), line('(13pp) Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
  };

  const zhLabels = {
    beverage_alcohol: { blocks: [
      block(428, 341, [line('$value', 40), line('同比 (24%)', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 450, [line('酒精饮料', 39, { weight: 800 })]),
      block(238, 531, [line('毛利率 32%', 28, { color: NOTE })]),
    ] },
    cannabis: { blocks: [
      block(428, 588, [line('$value', 40, { color: GREEN_LABEL }), line('同比 +19%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 720, [line('大麻', 39, { weight: 800, color: '#008b05' })]),
      block(238, 803, [line('毛利率 40%', 28, { color: NOTE })]),
    ] },
    distribution: { blocks: [
      block(428, 880, [line('$value', 40), line('同比 +35%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1029, [line('分销', 39, { weight: 800 })]),
      block(238, 1075, [line('毛利率 12%', 28, { color: NOTE })]),
    ] },
    wellness: { blocks: [
      block(428, 1180, [line('$value', 40), line('同比 +16%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1266, [line('健康产品', 39, { weight: 800 })]),
      block(238, 1300, [line('毛利率 33%', 28, { color: NOTE })]),
    ] },
    revenue: { blocks: [block(894, 524, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +11%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1362, 332, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 27%', 29, { color: NOTE }), line('同比 (1 个百分点)', 27, { color: NOTE })], { lineGap: 12 })] },
    cost_of_goods_sold: { blocks: [block(1362, 1221, [line('销售成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    operating_loss: { blocks: [block(1605, 998, [line('营业亏损', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL }), line('利润率 (13%)', 28, { color: NOTE }), line('同比 +396 个百分点', 27, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1832, 525, [line('营业费用', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_X, 390, [line('一般及行政费用', 30, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 24%', 28, { color: NOTE }), line('同比 +3 个百分点', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    selling: { blocks: [block(RIGHT_X, 619, [line('销售费用', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 5%', 28, { color: NOTE }), line('同比 (2 个百分点)', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    marketing: { blocks: [block(RIGHT_X, 818, [line('市场营销', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 4%', 28, { color: NOTE }), line('同比 +1 个百分点', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    amortization: { blocks: [block(RIGHT_X, 1016, [line('摊销', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 2%', 28, { color: NOTE }), line('同比 (10 个百分点)', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_X, 1214, [line('其他', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 3%', 28, { color: NOTE }), line('同比 (13 个百分点)', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tilray-q3-fy26',
    name: 'Tilray Brands · Q3 FY26',
    company: 'Tilray Brands',
    meta: {
      company: 'Tilray Brands',
      title: 'Tilray Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tilray-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2170,
      periodX: 894,
      periodY: 1284,
      periodNoteY: 1327,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LIGHT, hub: SOURCE_LIGHT, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 40, note: 28, lineGap: 9 },
    },
    annotationsSvg: tilraySymbol,
    rasterAnnotations: [
      { key: 'tilray-brands-wordmark', href: 'data/assets/raster-annotations/tilray/tilray-brands-wordmark.png', x: 735, y: 270, width: 460, height: 175 },
      { key: 'tilray-beverage-can', href: 'data/assets/raster-annotations/tilray/beverage-can.png', x: 190, y: 288, width: 94, height: 142 },
      { key: 'tilray-cannabis-leaf', href: 'data/assets/raster-annotations/tilray/cannabis-leaf.png', x: 135, y: 580, width: 205, height: 142 },
    ],
    layout: {
      scale: 1,
      nodes: {
        beverage_alcohol: { x: 393, y: 433, width: 71, height: 81 },
        cannabis: { x: 393, y: 681, width: 71, height: 124 },
        distribution: { x: 393, y: 972, width: 71, height: 160 },
        wellness: { x: 393, y: 1274, width: 71, height: 30 },
        revenue: { x: 860, y: 669, width: 70, height: 402 },
        gross_profit: { x: 1327, y: 518, width: 71, height: 105 },
        cost_of_goods_sold: { x: 1327, y: 893, width: 71, height: 294 },
        operating_loss: { x: 1575, y: 908, width: 71, height: 49 },
        operating_expenses: { x: 1795, y: 674, width: 70, height: 157 },
        ga: { x: 2261, y: 396, width: 71, height: 96 },
        selling: { x: 2261, y: 651, width: 71, height: 17 },
        marketing: { x: 2261, y: 853, width: 71, height: 15 },
        amortization: { x: 2261, y: 1055, width: 71, height: 7 },
        other: { x: 2261, y: 1241, width: 71, height: 11 },
      },
      labels,
    },
    nodes: [
      { id: 'beverage_alcohol', col: 0, order: 0, type: 'source', label: ['Beverage', 'alcohol'], value: 43, notes: ['(24%) Y/Y', '32% gross margin'], color: SOURCE_LIGHT, labelColor: SOURCE_LIGHT, linkTint: '#a7bed7' },
      { id: 'cannabis', col: 0, order: 1, type: 'source', label: 'Cannabis', value: 65, notes: ['+19% Y/Y', '40% gross margin'], color: '#008b05', labelColor: '#008b05', linkTint: '#91ba8e' },
      { id: 'distribution', col: 0, order: 2, type: 'source', label: 'Distribution', value: 83, notes: ['+35% Y/Y', '12% gross margin'], color: BLUE, labelColor: BLUE, linkTint: '#839bc9' },
      { id: 'wellness', col: 0, order: 3, type: 'source', label: 'Wellness', value: 16, notes: ['+16% Y/Y', '33% gross margin'], color: BLUE, labelColor: BLUE, linkTint: '#839bc9' },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 207, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: SOURCE_LIGHT },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 55, notes: ['27% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_goods_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 152, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -26, valueText: '($26M)', notes: ['(13%) margin', '+396pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 81, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 0, type: 'cost', label: 'G&A', value: 50, notes: ['24% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling', col: 5, order: 1, type: 'cost', label: 'Selling', value: 11, notes: ['5% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 2, type: 'cost', label: 'Marketing', value: 9, notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: 'Amortization', value: 5, notes: ['2% of revenue', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 4, type: 'cost', label: 'Other', value: 7, notes: ['3% of revenue', '(13pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'beverage_alcohol', target: 'revenue', value: 43, sourceWidth: 81, targetWidth: 81, y0: 473.5, y1: 709.5, sourceOrder: 0, targetOrder: 0, linkTint: '#a7bed7' },
      { source: 'cannabis', target: 'revenue', value: 65, sourceWidth: 124, targetWidth: 124, y0: 743, y1: 812, sourceOrder: 0, targetOrder: 1, linkTint: '#91ba8e' },
      { source: 'distribution', target: 'revenue', value: 83, sourceWidth: 160, targetWidth: 160, y0: 1052, y1: 954, sourceOrder: 0, targetOrder: 2, linkTint: '#839bc9' },
      { source: 'wellness', target: 'revenue', value: 16, sourceWidth: 30, targetWidth: 37, y0: 1289, y1: 1052.5, sourceOrder: 0, targetOrder: 3, linkTint: '#839bc9' },
      { source: 'revenue', target: 'gross_profit', value: 55, sourceWidth: 108, targetWidth: 105, y0: 723, y1: 570.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 152, sourceWidth: 294, targetWidth: 294, y0: 924, y1: 1040, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 55, sourceWidth: 105, targetWidth: 108, y0: 570.5, y1: 728, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 26, sourceWidth: 49, targetWidth: 49, y0: 932.5, y1: 806.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1646, x1: 1795, c1x: 1696, c1y: 932.5, c2x: 1745, c2y: 806.5 } },
      { source: 'operating_expenses', target: 'ga', value: 50, sourceWidth: 96, targetWidth: 96, y0: 722, y1: 444, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 11, sourceWidth: 21, targetWidth: 17, y0: 780.5, y1: 659.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 9, sourceWidth: 17, targetWidth: 15, y0: 799.5, y1: 860.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 5, sourceWidth: 10, targetWidth: 7, y0: 813, y1: 1058.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 7, sourceWidth: 13, targetWidth: 11, y0: 824.5, y1: 1246.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Tilray Brands · 2026 财年第三季度',
        meta: {
          title: 'Tilray 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nodes: {
          beverage_alcohol: { label: ['酒精', '饮料'], notes: ['同比 (24%)', '毛利率 32%'] },
          cannabis: { label: '大麻', notes: ['同比 +19%', '毛利率 40%'] },
          distribution: { label: '分销', notes: ['同比 +35%', '毛利率 12%'] },
          wellness: { label: '健康产品', notes: ['同比 +16%', '毛利率 33%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          cost_of_goods_sold: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (13%)', '同比 +396 个百分点'] },
          operating_expenses: { label: '营业费用' },
          ga: { label: '一般及行政费用', notes: ['占收入 24%', '同比 +3 个百分点'] },
          selling: { label: '销售费用', notes: ['占收入 5%', '同比 (2 个百分点)'] },
          marketing: { label: '市场营销', notes: ['占收入 4%', '同比 +1 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 2%', '同比 (10 个百分点)'] },
          other: { label: '其他', notes: ['占收入 3%', '同比 (13 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
