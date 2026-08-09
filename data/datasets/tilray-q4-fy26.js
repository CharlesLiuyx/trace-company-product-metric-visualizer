/* Tilray Brands — Q4 FY26 income statement ($M), measured from the reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#686868';
  const BLUE = '#013399';
  const SOURCE_LIGHT = '#6699cc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00934d';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
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
      block(428, 412, [line('$value', 40), line('+61% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 516, [line('Beverage', 39, { weight: 800 }), line('alcohol', 39, { weight: 800 })], { lineGap: 7 }),
      block(238, 614, [line('36% gross margin', 28, { color: NOTE })]),
    ] },
    cannabis: { blocks: [
      block(421, 663, [line('$value', 40, { color: GREEN_LABEL }), line('+5% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 776, [line('Cannabis', 39, { weight: 800, color: '#008b05' })]),
      block(238, 850, [line('40% gross margin', 28, { color: NOTE })]),
    ] },
    distribution: { blocks: [
      block(428, 898, [line('$value', 40), line('+15% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1012, [line('Distribution', 39, { weight: 800 })]),
      block(238, 1064, [line('12% gross margin', 28, { color: NOTE })]),
    ] },
    wellness: { blocks: [
      block(428, 1125, [line('$value', 40), line('+16% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1203, [line('Wellness', 39, { weight: 800 })]),
      block(238, 1255, [line('33% gross margin', 28, { color: NOTE })]),
    ] },
    revenue: { blocks: [block(886, 558, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+25% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1356, 393, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('32% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1356, 1146, [line('Cost of', 36, { weight: 800, color: RED_LABEL }), line('revenue', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    operating_loss: { blocks: [block(1649, 941, [line('Operating', 39, { weight: 800, color: RED_LABEL }), line('loss', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL }), line('(6%) margin', 28, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1826, 531, [line('Operating', 39, { weight: 800, color: RED_LABEL }), line('expenses', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_X, 410, [line('G&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('22% of revenue', 28, { color: NOTE }), line('+5pp Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    selling: { blocks: [block(RIGHT_X, 613, [line('Selling', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('5% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    marketing: { blocks: [block(RIGHT_X, 794, [line('Marketing', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('5% of revenue', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    amortization: { blocks: [block(RIGHT_X, 985, [line('Amortization', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('2% of revenue', 28, { color: NOTE }), line('(7pp) Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_X, 1160, [line('Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('4% of revenue', 28, { color: NOTE }), line('(10pp) Y/Y', 28, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
  };

  const zhLabels = {
    beverage_alcohol: { blocks: [
      block(428, 412, [line('$value', 40), line('同比 +61%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 543, [line('酒精饮料', 39, { weight: 800 })]),
      block(238, 608, [line('毛利率 36%', 28, { color: NOTE })]),
    ] },
    cannabis: { blocks: [
      block(428, 663, [line('$value', 40, { color: GREEN_LABEL }), line('同比 +5%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 772, [line('大麻', 39, { weight: 800, color: '#008b05' })]),
      block(238, 850, [line('毛利率 40%', 28, { color: NOTE })]),
    ] },
    distribution: { blocks: [
      block(428, 898, [line('$value', 40), line('同比 +15%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1016, [line('分销', 39, { weight: 800 })]),
      block(238, 1068, [line('毛利率 12%', 28, { color: NOTE })]),
    ] },
    wellness: { blocks: [
      block(428, 1125, [line('$value', 40), line('同比 +16%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1207, [line('健康产品', 39, { weight: 800 })]),
      block(238, 1259, [line('毛利率 33%', 28, { color: NOTE })]),
    ] },
    revenue: { blocks: [block(886, 558, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +25%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1356, 393, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 32%', 29, { color: NOTE }), line('同比 +2 个百分点', 27, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1356, 1146, [line('收入', 36, { weight: 800, color: RED_LABEL }), line('成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    operating_loss: { blocks: [block(1649, 950, [line('营业亏损', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL }), line('利润率 (6%)', 28, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1826, 541, [line('营业费用', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_X, 410, [line('一般及行政费用', 30, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 22%', 28, { color: NOTE }), line('同比 +5 个百分点', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    selling: { blocks: [block(RIGHT_X, 613, [line('销售费用', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 5%', 28, { color: NOTE }), line('同比 (1 个百分点)', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    marketing: { blocks: [block(RIGHT_X, 794, [line('市场营销', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 5%', 28, { color: NOTE }), line('同比 +1 个百分点', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    amortization: { blocks: [block(RIGHT_X, 985, [line('摊销', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 2%', 28, { color: NOTE }), line('同比 (7 个百分点)', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_X, 1160, [line('其他', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 4%', 28, { color: NOTE }), line('同比 (10 个百分点)', 27, { color: NOTE })], { anchor: 'middle', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tilray-q4-fy26',
    name: 'Tilray Brands · Q4 FY26',
    company: 'Tilray Brands',
    meta: {
      company: 'Tilray Brands',
      title: 'Tilray Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tilray-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2170,
      periodX: 2450,
      periodY: 302,
      periodNoteY: 347,
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
        beverage_alcohol: { x: 387, y: 506, width: 71, height: 120 },
        cannabis: { x: 387, y: 756, width: 71, height: 80 },
        distribution: { x: 387, y: 991, width: 71, height: 96 },
        wellness: { x: 387, y: 1220, width: 71, height: 20 },
        revenue: { x: 854, y: 706, width: 70, height: 324 },
        gross_profit: { x: 1321, y: 582, width: 71, height: 103 },
        cost_of_revenue: { x: 1321, y: 902, width: 71, height: 220 },
        operating_loss: { x: 1626, y: 895, width: 71, height: 16 },
        operating_expenses: { x: 1789, y: 692, width: 70, height: 121 },
        ga: { x: 2255, y: 421, width: 71, height: 68 },
        selling: { x: 2255, y: 649, width: 71, height: 14 },
        marketing: { x: 2255, y: 830, width: 71, height: 12 },
        amortization: { x: 2255, y: 1024, width: 71, height: 5 },
        other: { x: 2255, y: 1194, width: 71, height: 12 },
      },
      labels,
    },
    nodes: [
      { id: 'beverage_alcohol', col: 0, order: 0, type: 'source', label: ['Beverage', 'alcohol'], value: 106, notes: ['+61% Y/Y', '36% gross margin'], color: SOURCE_LIGHT, labelColor: SOURCE_LIGHT, linkTint: '#b3cae0' },
      { id: 'cannabis', col: 0, order: 1, type: 'source', label: 'Cannabis', value: 71, notes: ['+5% Y/Y', '40% gross margin'], color: '#006601', labelColor: '#006601', linkTint: '#85b385' },
      { id: 'distribution', col: 0, order: 2, type: 'source', label: 'Distribution', value: 85, notes: ['+15% Y/Y', '12% gross margin'], color: BLUE, labelColor: BLUE, linkTint: '#859cca' },
      { id: 'wellness', col: 0, order: 3, type: 'source', label: 'Wellness', value: 20, notes: ['+16% Y/Y', '33% gross margin'], color: BLUE, labelColor: BLUE, linkTint: '#859cca' },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 282, notes: ['+25% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: SOURCE_LIGHT },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 91, notes: ['32% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 191, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -16, valueText: '($16M)', notes: ['(6%) margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 107, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 0, type: 'cost', label: 'G&A', value: 61, notes: ['22% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling', col: 5, order: 1, type: 'cost', label: 'Selling', value: 14, notes: ['5% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 2, type: 'cost', label: 'Marketing', value: 13, notes: ['5% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: 'Amortization', value: 6, notes: ['2% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 4, type: 'cost', label: 'Other', value: 12, notes: ['4% of revenue', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'beverage_alcohol', target: 'revenue', value: 106, sourceWidth: 120, targetWidth: 122, y0: 566, y1: 767, sourceOrder: 0, targetOrder: 0, linkTint: '#b3cae0' },
      { source: 'cannabis', target: 'revenue', value: 71, sourceWidth: 80, targetWidth: 80, y0: 796, y1: 868, sourceOrder: 0, targetOrder: 1, linkTint: '#85b385' },
      { source: 'distribution', target: 'revenue', value: 85, sourceWidth: 96, targetWidth: 100, y0: 1039, y1: 958, sourceOrder: 0, targetOrder: 2, linkTint: '#859cca' },
      { source: 'wellness', target: 'revenue', value: 20, sourceWidth: 20, targetWidth: 22, y0: 1230, y1: 1019, sourceOrder: 0, targetOrder: 3, linkTint: '#859cca' },
      { source: 'revenue', target: 'gross_profit', value: 91, sourceWidth: 104, targetWidth: 103, y0: 758, y1: 633.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 191, sourceWidth: 220, targetWidth: 220, y0: 920, y1: 1012, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 91, sourceWidth: 103, targetWidth: 103, y0: 633.5, y1: 743.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 16, sourceWidth: 16, targetWidth: 18, y0: 903, y1: 804, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1697, x1: 1789, c1x: 1728, c1y: 903, c2x: 1758, c2y: 804 } },
      { source: 'operating_expenses', target: 'ga', value: 61, sourceWidth: 69, targetWidth: 68, y0: 726.5, y1: 455, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 14, sourceWidth: 16, targetWidth: 14, y0: 769, y1: 656, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 13, sourceWidth: 15, targetWidth: 12, y0: 784.5, y1: 836, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 6, sourceWidth: 7, targetWidth: 5, y0: 795.5, y1: 1026.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 12, sourceWidth: 14, targetWidth: 12, y0: 806, y1: 1200, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Tilray Brands · 2026 财年第四季度',
        meta: {
          title: 'Tilray 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 5 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nodes: {
          beverage_alcohol: { label: ['酒精', '饮料'], notes: ['同比 +61%', '毛利率 36%'] },
          cannabis: { label: '大麻', notes: ['同比 +5%', '毛利率 40%'] },
          distribution: { label: '分销', notes: ['同比 +15%', '毛利率 12%'] },
          wellness: { label: '健康产品', notes: ['同比 +16%', '毛利率 33%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 32%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (6%)'] },
          operating_expenses: { label: '营业费用' },
          ga: { label: '一般及行政费用', notes: ['占收入 22%', '同比 +5 个百分点'] },
          selling: { label: '销售费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
          marketing: { label: '市场营销', notes: ['占收入 5%', '同比 +1 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 2%', '同比 (7 个百分点)'] },
          other: { label: '其他', notes: ['占收入 4%', '同比 (10 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
