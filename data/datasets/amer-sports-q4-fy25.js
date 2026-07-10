/* Amer Sports Q4 FY25 income statement ($M), measured from the processed reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TECHNICAL = '#0a269d';
  const TECHNICAL_LINK = '#838fc8';
  const OUTDOOR = '#455a64';
  const OUTDOOR_LINK = '#a7b0b5';
  const BALL = '#000000';
  const BALL_LINK = '#959595';
  const HUB = '#075181';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bce9a';
  const RED = '#de0000';
  const RED_LABEL = '#9c1500';
  const RED_LINK = '#df8282';
  const RIGHT_LABEL_X = 2526;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });

  const directToConsumer = (zh = false) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <path d="M1687 389 C1746 389 1814 393 1878 422.5" fill="none" stroke="#9bce9a" stroke-width="2"/>
      <path d="M945 1061 L980 1007 L1015 1061 Z" fill="#f2f2f2" stroke="#171717" stroke-width="3"/>
      <rect x="880" y="1060" width="200" height="184" rx="18" fill="#f2f2f2" stroke="#171717" stroke-width="3"/>
      <text x="980" y="1103" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '面向消费者' : 'Direct To'}</text>
      <text x="980" y="1145" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '直销' : 'Consumer'}</text>
      <text x="980" y="1188" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">38%</text>
      <text x="980" y="1221" text-anchor="middle" font-size="${zh ? 21 : 25}" font-weight="500" fill="${NOTE}">${zh ? '同比 +8 个百分点' : '(8pp) Y/Y'}</text>
    </g>`;

  const labelsEn = {
    technical_apparel: { blocks: [
      block(514, 390, [line('$value', 40, { color: TECHNICAL }), line('+34% Y/Y', 29, { color: NOTE })], { lineGap: 9 }),
      block(460, 529, [line('Technical', 40, { weight: 800, color: TECHNICAL }), line('Apparel', 40, { weight: 800, color: TECHNICAL })], { anchor: 'end', lineGap: 9 }),
    ] },
    outdoor_performance: { blocks: [
      block(514, 716, [line('$value', 40, { color: OUTDOOR }), line('+29% Y/Y', 29, { color: NOTE })], { lineGap: 9 }),
      block(460, 827, [line('Outdoor', 40, { weight: 800, color: OUTDOOR }), line('Performance', 40, { weight: 800, color: OUTDOOR })], { anchor: 'end', lineGap: 9 }),
    ] },
    ball_racquet: { blocks: [
      block(514, 989, [line('$value', 40), line('+14% Y/Y', 29, { color: NOTE })], { lineGap: 9 }),
      block(460, 1062, [line('Ball', 40, { weight: 800 }), line('& Racquet', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
    ] },
    revenue: { blocks: [block(981, 502, [line('Revenue', 40, { weight: 800, color: HUB }), line('$value', 40, { color: HUB }), line('+28% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1448, 333, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('58% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    cost_of_revenue: { blocks: [block(1448, 1121, [line('Cost of', 36, { weight: 800, color: RED_LABEL }), line('revenue', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    other: { blocks: [block(1716, 295, [line('Other', 32, { weight: 800, color: GREEN_LABEL }), line('$value', 32, { color: GREEN_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1914, 216, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('12% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1914, 905, [line('Selling, General &', 36, { weight: 800, color: RED_LABEL }), line('Administrative', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 8 })] },
    net_profit: { blocks: [block(2446, 245, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('6% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 9 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 596, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
    finance: { blocks: [block(RIGHT_LABEL_X, 761, [line('Finance', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
  };

  const labelsZh = {
    technical_apparel: { blocks: [block(514, 390, [line('$value', 40, { color: TECHNICAL }), line('同比 +34%', 29, { color: NOTE })], { lineGap: 9 }), block(460, 545, [line('技术服饰', 39, { weight: 800, color: TECHNICAL })], { anchor: 'end' })] },
    outdoor_performance: { blocks: [block(514, 716, [line('$value', 40, { color: OUTDOOR }), line('同比 +29%', 29, { color: NOTE })], { lineGap: 9 }), block(460, 842, [line('户外运动', 39, { weight: 800, color: OUTDOOR })], { anchor: 'end' })] },
    ball_racquet: { blocks: [block(514, 989, [line('$value', 40), line('同比 +14%', 29, { color: NOTE })], { lineGap: 9 }), block(460, 1078, [line('球类与球拍', 38, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(981, 502, [line('收入', 40, { weight: 800, color: HUB }), line('$value', 40, { color: HUB }), line('同比 +28%', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1448, 333, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 58%', 29, { color: NOTE }), line('同比 +2 个百分点', 27, { color: NOTE })], { lineGap: 9 })] },
    cost_of_revenue: { blocks: [block(1448, 1121, [line('收入', 36, { weight: 800, color: RED_LABEL }), line('成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    other: { blocks: [block(1716, 295, [line('其他', 32, { weight: 800, color: GREEN_LABEL }), line('$value', 32, { color: GREEN_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1914, 216, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 12%', 29, { color: NOTE }), line('同比 (1 个百分点)', 27, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1914, 923, [line('销售、一般及', 36, { weight: 800, color: RED_LABEL }), line('行政费用', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 8 })] },
    net_profit: { blocks: [block(2446, 245, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 6%', 29, { color: NOTE }), line('同比 +5 个百分点', 27, { color: NOTE })], { anchor: 'start', lineGap: 9 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 596, [line('税费', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
    finance: { blocks: [block(RIGHT_LABEL_X, 761, [line('财务费用', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amer-sports-q4-fy25',
    name: 'Amer Sports · Q4 FY25',
    company: 'Amer Sports',
    meta: {
      company: 'Amer Sports', title: 'Amer Sports Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'M', decimals: 1,
      referenceImage: { src: 'input/processed/amer-sports-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 116, titleWeight: 800, titleTextLength: 2440,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: TECHNICAL, label: TECHNICAL }, hub: { node: HUB, label: HUB }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: TECHNICAL_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: directToConsumer(),
    rasterAnnotations: [
      { key: 'amer-sports-company-logo', href: 'data/assets/raster-annotations/amer-sports/company-logo.png', x: 748, y: 250, width: 454, height: 230 },
      { key: 'technical-apparel-brands', href: 'data/assets/raster-annotations/amer-sports/technical-apparel-brands.png', x: 18, y: 460, width: 270, height: 200 },
      { key: 'outdoor-performance-salomon', href: 'data/assets/raster-annotations/amer-sports/outdoor-performance-salomon.png', x: 18, y: 782, width: 180, height: 106 },
      { key: 'outdoor-performance-atomic', href: 'data/assets/raster-annotations/amer-sports/outdoor-performance-atomic.png', x: 50, y: 895, width: 210, height: 100 },
      { key: 'ball-racquet-brands', href: 'data/assets/raster-annotations/amer-sports/ball-racquet-brands.png', x: 15, y: 1005, width: 250, height: 225 },
    ],
    layout: {
      scale: 0.17,
      nodes: {
        technical_apparel: { x: 477, y: 485, width: 73, height: 170 },
        outdoor_performance: { x: 477, y: 805, width: 73, height: 130 },
        ball_racquet: { x: 477, y: 1078, width: 73, height: 57 },
        revenue: { x: 944, y: 643, width: 73, height: 357 },
        gross_profit: { x: 1411, y: 521, width: 73, height: 206 },
        cost_of_revenue: { x: 1411, y: 950, width: 73, height: 151 },
        other: { x: 1755, y: 389, width: 0, height: 0 },
        operating_profit: { x: 1878, y: 403, width: 73, height: 39 },
        operating_expenses: { x: 1878, y: 715, width: 73, height: 168 },
        net_profit: { x: 2345, y: 281, width: 73, height: 23 },
        tax: { x: 2345, y: 623, width: 73, height: 13 },
        finance: { x: 2345, y: 793, width: 73, height: 4 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'technical_apparel', col: 0, order: 0, type: 'source', label: ['Technical', 'Apparel'], value: 999.8, valueText: '$1,000M', notes: ['+34% Y/Y'], color: TECHNICAL, labelColor: TECHNICAL, linkTint: TECHNICAL_LINK },
      { id: 'outdoor_performance', col: 0, order: 1, type: 'source', label: ['Outdoor', 'Performance'], value: 764.1, valueText: '$764M', notes: ['+29% Y/Y'], color: OUTDOOR, labelColor: OUTDOOR, linkTint: OUTDOOR_LINK },
      { id: 'ball_racquet', col: 0, order: 2, type: 'source', label: ['Ball', '& Racquet'], value: 337.2, valueText: '$337M', notes: ['+14% Y/Y'], color: BALL, labelColor: BALL, linkTint: BALL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2101.1, valueText: '$2,101M', notes: ['+28% Y/Y'], color: HUB, labelColor: HUB, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1212.1, valueText: '$1,212M', notes: ['58% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 889.0, valueText: '($889M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 4.2, valueText: '$4M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 228.0, valueText: '$228M', notes: ['12% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Selling, General &', 'Administrative', 'expenses'], value: 988.3, valueText: '($988M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 133.5, valueText: '$134M', notes: ['6% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 73.9, valueText: '($74M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 4, order: 2, type: 'cost', label: 'Finance', value: 20.6, valueText: '($21M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'technical_apparel', target: 'revenue', value: 999.8, sourceWidth: 170, targetWidth: 170, y0: 570, y1: 728, sourceOrder: 0, targetOrder: 0, linkTint: TECHNICAL_LINK },
      { source: 'outdoor_performance', target: 'revenue', value: 764.1, sourceWidth: 130, targetWidth: 130, y0: 870, y1: 878, sourceOrder: 0, targetOrder: 1, linkTint: OUTDOOR_LINK },
      { source: 'ball_racquet', target: 'revenue', value: 337.2, sourceWidth: 57, targetWidth: 57, y0: 1106.5, y1: 971.5, sourceOrder: 0, targetOrder: 2, linkTint: BALL_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1212.1, sourceWidth: 206, targetWidth: 206, y0: 746, y1: 624, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 889.0, sourceWidth: 151, targetWidth: 151, y0: 924.5, y1: 1025.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 223.8, sourceWidth: 38.046, targetWidth: 39, y0: 540.023, y1: 422.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 988.3, sourceWidth: 168.011, targetWidth: 168, y0: 643.0515, y1: 799, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'operating_profit', value: 4.2, sourceWidth: 1, targetWidth: 1, y0: 389, y1: 441.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, interactionOnly: true },
      { source: 'operating_profit', target: 'net_profit', value: 133.5, sourceWidth: 22.695, targetWidth: 22.695, y0: 414.3475, y1: 292.3475, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 73.9, sourceWidth: 12.563, targetWidth: 12.563, y0: 431.9765, y1: 629.2815, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'finance', value: 20.6, sourceWidth: 3.502, targetWidth: 3.502, y0: 440.009, y1: 794.751, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '亚玛芬体育 · 2025 财年第四季度',
        meta: { title: '亚玛芬体育 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 106, titleTextLength: 1850 },
        annotationsSvg: directToConsumer(true),
        nodes: {
          technical_apparel: { label: '技术服饰', notes: ['同比 +34%'] }, outdoor_performance: { label: '户外运动', notes: ['同比 +29%'] }, ball_racquet: { label: '球类与球拍', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] }, gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          other: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] }, operating_expenses: { label: '销售、一般及行政费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] }, tax: { label: '税费' }, finance: { label: '财务费用' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
