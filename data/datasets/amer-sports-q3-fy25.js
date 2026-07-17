/* Amer Sports Q3 FY25 income statement ($M), measured from the active Build reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TECHNICAL = '#011892';
  const TECHNICAL_LINK = '#8590c6';
  const OUTDOOR = '#42555f';
  const OUTDOOR_LINK = '#a3abaf';
  const BALL = '#000000';
  const BALL_LINK = '#858585';
  const HUB = '#004276';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2541;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });

  const directToConsumer = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <path d="M945 1061 L980 1007 L1015 1061 Z" fill="#f2f2f2" stroke="#171717" stroke-width="3"/>
      <rect x="880" y="1060" width="210" height="183" rx="18" fill="#f2f2f2" stroke="#171717" stroke-width="3"/>
      <text x="985" y="1103" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '直面消费者' : 'Direct To'}</text>
      <text x="985" y="1145" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '销售' : 'Consumer'}</text>
      <text x="985" y="1188" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">41%</text>
      <text x="985" y="1221" text-anchor="middle" font-size="${zh ? 21 : 25}" font-weight="500" fill="${NOTE}">${zh ? '同比 +7 个百分点' : '+7pp Y/Y'}</text>
    </g>`;

  const labelsEn = {
    technical_apparel: { blocks: [
      block(514, 378, [line('$value', 40, { color: TECHNICAL }), line('+31% Y/Y', 29, { color: NOTE })]),
      block(460, 498, [line('Technical', 40, { weight: 800, color: TECHNICAL }), line('Apparel', 40, { weight: 800, color: TECHNICAL })], { anchor: 'end' }),
    ] },
    outdoor_performance: { blocks: [
      block(514, 687, [line('$value', 40, { color: OUTDOOR }), line('+36% Y/Y', 29, { color: NOTE })]),
      block(460, 809, [line('Outdoor', 40, { weight: 800, color: OUTDOOR }), line('Performance', 40, { weight: 800, color: OUTDOOR })], { anchor: 'end' }),
    ] },
    ball_racquet: { blocks: [
      block(514, 987, [line('$value', 40), line('+16% Y/Y', 29, { color: NOTE })]),
      block(460, 1073, [line('Ball', 40, { weight: 800 }), line('& Racket', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    revenue: { blocks: [block(981, 497, [line('Revenue', 40, { weight: 800, color: HUB }), line('$value', 40, { color: HUB }), line('+30% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1448, 336, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('57% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1448, 1134, [line('Cost of', 36, { weight: 800, color: RED_LABEL }), line('revenue', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })])] },
    operating_profit: { blocks: [block(1914, 219, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('12% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1914, 855, [line('Operating', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })])] },
    net_profit: { blocks: [block(2446, 245, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('8% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 469, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    finance: { blocks: [block(RIGHT_LABEL_X, 572, [line('Finance', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 811, [line('S&M', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    other: { blocks: [block(RIGHT_LABEL_X, 1048, [line('Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
  };

  const labelsZh = {
    technical_apparel: { blocks: [
      block(514, 378, [line('$value', 40, { color: TECHNICAL }), line('同比 +31%', 29, { color: NOTE })]),
      block(460, 524, [line('技术服饰', 39, { weight: 800, color: TECHNICAL })], { anchor: 'end' }),
    ] },
    outdoor_performance: { blocks: [
      block(514, 687, [line('$value', 40, { color: OUTDOOR }), line('同比 +36%', 29, { color: NOTE })]),
      block(460, 834, [line('户外运动', 39, { weight: 800, color: OUTDOOR })], { anchor: 'end' }),
    ] },
    ball_racquet: { blocks: [
      block(514, 987, [line('$value', 40), line('同比 +16%', 29, { color: NOTE })]),
      block(460, 1099, [line('球类与球拍', 38, { weight: 800 })], { anchor: 'end' }),
    ] },
    revenue: { blocks: [block(981, 497, [line('收入', 40, { weight: 800, color: HUB }), line('$value', 40, { color: HUB }), line('同比 +30%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1448, 336, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 57%', 29, { color: NOTE }), line('同比 +2 个百分点', 27, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1448, 1134, [line('收入', 36, { weight: 800, color: RED_LABEL }), line('成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })])] },
    operating_profit: { blocks: [block(1914, 219, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 12%', 29, { color: NOTE }), line('同比 (1 个百分点)', 27, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1914, 873, [line('营业费用', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })])] },
    net_profit: { blocks: [block(2446, 245, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 8%', 29, { color: NOTE }), line('同比 +4 个百分点', 27, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 469, [line('税费', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    finance: { blocks: [block(RIGHT_LABEL_X, 572, [line('财务费用', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 811, [line('销售与营销', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    other: { blocks: [block(RIGHT_LABEL_X, 1048, [line('其他', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amer-sports-q3-fy25',
    name: 'Amer Sports · Q3 FY25',
    company: 'Amer Sports',
    meta: {
      company: 'Amer Sports',
      title: 'Amer Sports Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/amer-sports-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 116,
      titleWeight: 800,
      titleTextLength: 2440,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: TECHNICAL, label: TECHNICAL },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TECHNICAL_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: directToConsumer(),
    rasterAnnotations: [
      { key: 'amer-sports-company-logo', href: 'data/assets/raster-annotations/amer-sports/company-logo.png', x: 748, y: 250, width: 454, height: 230 },
      { key: 'technical-apparel-brands', href: 'data/assets/raster-annotations/amer-sports/technical-apparel-brands.png', x: 18, y: 432, width: 270, height: 200 },
      { key: 'outdoor-performance-salomon', href: 'data/assets/raster-annotations/amer-sports/outdoor-performance-salomon.png', x: 18, y: 770, width: 180, height: 106 },
      { key: 'outdoor-performance-atomic', href: 'data/assets/raster-annotations/amer-sports/outdoor-performance-atomic.png', x: 50, y: 882, width: 210, height: 100 },
      { key: 'ball-racquet-brands', href: 'data/assets/raster-annotations/amer-sports/ball-racquet-brands.png', x: 15, y: 1016, width: 250, height: 225 },
    ],
    layout: {
      scale: 0.2,
      nodes: {
        technical_apparel: { x: 477, y: 475, width: 73, height: 137 },
        outdoor_performance: { x: 477, y: 782, width: 73, height: 144 },
        ball_racquet: { x: 477, y: 1084, width: 73, height: 68 },
        revenue: { x: 944, y: 645, width: 73, height: 353 },
        gross_profit: { x: 1411, y: 522, width: 73, height: 198 },
        cost_of_revenue: { x: 1411, y: 966, width: 73, height: 150 },
        operating_profit: { x: 1878, y: 405, width: 73, height: 42 },
        operating_expenses: { x: 1878, y: 678, width: 73, height: 156 },
        net_profit: { x: 2345, y: 293, width: 73, height: 27 },
        tax: { x: 2345, y: 503, width: 73, height: 9 },
        finance: { x: 2345, y: 610, width: 73, height: 2 },
        sales_marketing: { x: 2345, y: 777, width: 73, height: 154 },
        other: { x: 2345, y: 1088, width: 73, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'technical_apparel', col: 0, order: 0, type: 'source', label: ['Technical', 'Apparel'], value: 683, valueText: '$683M', notes: ['+31% Y/Y'], color: TECHNICAL, labelColor: TECHNICAL, linkTint: TECHNICAL_LINK },
      { id: 'outdoor_performance', col: 0, order: 1, type: 'source', label: ['Outdoor', 'Performance'], value: 724, valueText: '$724M', notes: ['+36% Y/Y'], color: OUTDOOR, labelColor: OUTDOOR, linkTint: OUTDOOR_LINK },
      { id: 'ball_racquet', col: 0, order: 2, type: 'source', label: ['Ball', '& Racket'], value: 350, valueText: '$350M', notes: ['+16% Y/Y'], color: BALL, labelColor: BALL, linkTint: BALL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1756, valueText: '$1,756M', notes: ['+30% Y/Y'], color: HUB, labelColor: HUB, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 998, valueText: '$998M', notes: ['57% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 758, valueText: '($758M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 216, valueText: '$216M', notes: ['12% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 782, valueText: '($782M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 146, valueText: '$146M', notes: ['8% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 51, valueText: '($51M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 4, order: 2, type: 'cost', label: 'Finance', value: 18, valueText: '($18M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 3, type: 'cost', label: 'S&M', value: 777, valueText: '($777M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 4, type: 'cost', label: 'Other', value: 6, valueText: '($6M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'technical_apparel', target: 'revenue', value: 683, sourceWidth: 137, targetWidth: 137, y0: 543.5, y1: 713.5, sourceOrder: 0, targetOrder: 0, linkTint: TECHNICAL_LINK },
      { source: 'outdoor_performance', target: 'revenue', value: 724, sourceWidth: 144, targetWidth: 148, y0: 854, y1: 856, sourceOrder: 0, targetOrder: 1, linkTint: OUTDOOR_LINK },
      { source: 'ball_racquet', target: 'revenue', value: 350, sourceWidth: 68, targetWidth: 68, y0: 1118, y1: 964, sourceOrder: 0, targetOrder: 2, linkTint: BALL_LINK },
      { source: 'revenue', target: 'gross_profit', value: 998, sourceWidth: 198, targetWidth: 198, y0: 744, y1: 621, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 758, sourceWidth: 155, targetWidth: 150, y0: 920.5, y1: 1041, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 216, sourceWidth: 42, targetWidth: 42, y0: 543, y1: 426, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 782, sourceWidth: 156, targetWidth: 156, y0: 642, y1: 756, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 146, sourceWidth: 28, targetWidth: 27, y0: 419, y1: 306.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 51, sourceWidth: 10, targetWidth: 9, y0: 438, y1: 507.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'finance', value: 18, sourceWidth: 4, targetWidth: 2, y0: 445, y1: 611, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 777, sourceWidth: 154, targetWidth: 154, y0: 755, y1: 854, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 6, sourceWidth: 2, targetWidth: 2, y0: 833, y1: 1089, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '亚玛芬体育 · 2025 财年第三季度',
        meta: {
          title: '亚玛芬体育 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 106,
          titleTextLength: 1850,
        },
        annotationsSvg: directToConsumer(true),
        nodes: {
          technical_apparel: { label: '技术服饰', notes: ['同比 +31%'] },
          outdoor_performance: { label: '户外运动', notes: ['同比 +36%'] },
          ball_racquet: { label: '球类与球拍', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          finance: { label: '财务费用' },
          sales_marketing: { label: '销售与营销' },
          other: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
