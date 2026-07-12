/* Amer Sports Q1 FY26 income statement ($M), measured from the active Build reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TECHNICAL = '#011892';
  const TECHNICAL_LINK = '#8590c6';
  const OUTDOOR = '#41545e';
  const OUTDOOR_LINK = '#a3abaf';
  const BALL = '#000000';
  const BALL_LINK = '#858585';
  const HUB = '#004176';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2526;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });

  const directToConsumer = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="operating_profit" data-link-anchor-x="1818" data-link-anchor-y="516" style="cursor:pointer">
        <path d="M1760 516 H1828 C1848 516 1848 468 1879 468" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <path d="M1760 516 H1828 C1848 516 1848 468 1879 468" fill="none" stroke="transparent" stroke-width="18" style="pointer-events:stroke"/>
      </g>
      <path d="M945 1144 L980 1090 L1015 1144 Z" fill="#f2f2f2" stroke="#171717" stroke-width="3"/>
      <rect x="880" y="1143" width="200" height="184" rx="18" fill="#f2f2f2" stroke="#171717" stroke-width="3"/>
      <text x="980" y="1186" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '直面消费者' : 'Direct To'}</text>
      <text x="980" y="1228" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '销售' : 'Consumer'}</text>
      <text x="980" y="1271" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">51%</text>
      <text x="980" y="1304" text-anchor="middle" font-size="${zh ? 21 : 25}" font-weight="500" fill="${NOTE}">${zh ? '同比 +6 个百分点' : '+6pp Y/Y'}</text>
    </g>`;

  const labelsEn = {
    technical_apparel: { blocks: [
      block(514, 400, [line('$value', 40, { color: TECHNICAL }), line('+33% Y/Y', 29, { color: NOTE })]),
      block(460, 540, [line('Technical', 40, { weight: 800, color: TECHNICAL }), line('Apparel', 40, { weight: 800, color: TECHNICAL })], { anchor: 'end' }),
    ] },
    outdoor_performance: { blocks: [
      block(514, 757, [line('$value', 40, { color: OUTDOOR }), line('+42% Y/Y', 29, { color: NOTE })]),
      block(460, 878, [line('Outdoor', 40, { weight: 800, color: OUTDOOR }), line('Performance', 40, { weight: 800, color: OUTDOOR })], { anchor: 'end' }),
    ] },
    ball_racquet: { blocks: [
      block(514, 1048, [line('$value', 40), line('+13% Y/Y', 29, { color: NOTE })]),
      block(460, 1129, [line('Ball', 40, { weight: 800 }), line('& Racquet', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    revenue: { blocks: [block(981, 519, [line('Revenue', 40, { weight: 800, color: HUB }), line('$value', 40, { color: HUB }), line('+32% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1448, 334, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('60% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1448, 1199, [line('Cost of', 36, { weight: 800, color: RED_LABEL }), line('revenue', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    other: { blocks: [block(1798, 532, [line('Other', 32, { weight: 800, color: GREEN_LABEL }), line('$value', 32, { color: GREEN_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1914, 215, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('17% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1914, 933, [line('Operating', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    net_profit: { blocks: [block(2446, 258, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('9% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    finance: { blocks: [block(RIGHT_LABEL_X, 538, [line('Finance', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 650, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 907, [line('Sales &', 32, { weight: 800, color: RED_LABEL }), line('Marketing', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
  };

  const labelsZh = {
    technical_apparel: { blocks: [block(514, 400, [line('$value', 40, { color: TECHNICAL }), line('同比 +33%', 29, { color: NOTE })]), block(460, 566, [line('技术服饰', 39, { weight: 800, color: TECHNICAL })], { anchor: 'end' })] },
    outdoor_performance: { blocks: [block(514, 757, [line('$value', 40, { color: OUTDOOR }), line('同比 +42%', 29, { color: NOTE })]), block(460, 906, [line('户外运动', 39, { weight: 800, color: OUTDOOR })], { anchor: 'end' })] },
    ball_racquet: { blocks: [block(514, 1048, [line('$value', 40), line('同比 +13%', 29, { color: NOTE })]), block(460, 1159, [line('球类与球拍', 38, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(981, 519, [line('收入', 40, { weight: 800, color: HUB }), line('$value', 40, { color: HUB }), line('同比 +32%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1448, 334, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 60%', 29, { color: NOTE }), line('同比 +2 个百分点', 27, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1448, 1199, [line('收入', 36, { weight: 800, color: RED_LABEL }), line('成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })])] },
    other: { blocks: [block(1798, 532, [line('其他', 32, { weight: 800, color: GREEN_LABEL }), line('$value', 32, { color: GREEN_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1914, 215, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 17%', 29, { color: NOTE }), line('同比 +2 个百分点', 27, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1914, 951, [line('营业费用', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })])] },
    net_profit: { blocks: [block(2446, 258, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 9%', 29, { color: NOTE }), line('同比 (1 个百分点)', 27, { color: NOTE })], { anchor: 'start' })] },
    finance: { blocks: [block(RIGHT_LABEL_X, 538, [line('财务费用', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 650, [line('税费', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 907, [line('销售与', 32, { weight: 800, color: RED_LABEL }), line('营销', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amer-sports-q1-fy26',
    name: 'Amer Sports · Q1 FY26',
    company: 'Amer Sports',
    meta: {
      company: 'Amer Sports', title: 'Amer Sports Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'M', decimals: 1,
      referenceImage: { src: 'input/processed/amer-sports-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 116, titleWeight: 800, titleTextLength: 2440,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error', fullFaceIds: ['revenue:left', 'gross_profit:right', 'operating_profit:left', 'operating_profit:right'] },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: TECHNICAL, label: TECHNICAL }, hub: { node: HUB, label: HUB }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: TECHNICAL_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: directToConsumer(),
    rasterAnnotations: [
      { key: 'amer-sports-company-logo', href: 'data/assets/raster-annotations/amer-sports/company-logo.png', x: 748, y: 264, width: 454, height: 230 },
      { key: 'technical-apparel-brands', href: 'data/assets/raster-annotations/amer-sports/technical-apparel-brands.png', x: 18, y: 477, width: 270, height: 200 },
      { key: 'outdoor-performance-salomon', href: 'data/assets/raster-annotations/amer-sports/outdoor-performance-salomon.png', x: 18, y: 839, width: 180, height: 106 },
      { key: 'outdoor-performance-atomic', href: 'data/assets/raster-annotations/amer-sports/outdoor-performance-atomic.png', x: 50, y: 952, width: 210, height: 100 },
      { key: 'ball-racquet-brands', href: 'data/assets/raster-annotations/amer-sports/ball-racquet-brands.png', x: 15, y: 1079, width: 250, height: 225 },
    ],
    layout: {
      scale: 0.207,
      nodes: {
        technical_apparel: { x: 477, y: 494, width: 73, height: 184 },
        outdoor_performance: { x: 477, y: 852, width: 73, height: 148 },
        ball_racquet: { x: 477, y: 1143, width: 73, height: 71 },
        revenue: { x: 944, y: 667, width: 73, height: 408 },
        gross_profit: { x: 1411, y: 521, width: 73, height: 242 },
        cost_of_revenue: { x: 1411, y: 1021, width: 73, height: 161 },
        other: { x: 1760, y: 516, width: 0, height: 0 },
        operating_profit: { x: 1878, y: 402, width: 73, height: 66 },
        operating_expenses: { x: 1878, y: 737, width: 73, height: 179 },
        net_profit: { x: 2345, y: 307, width: 73, height: 33 },
        finance: { x: 2345, y: 571, width: 73, height: 15 },
        tax: { x: 2345, y: 679, width: 73, height: 13 },
        sales_marketing: { x: 2345, y: 855, width: 73, height: 178 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'technical_apparel', col: 0, order: 0, type: 'source', label: ['Technical', 'Apparel'], value: 885, valueText: '$885M', notes: ['+33% Y/Y'], color: TECHNICAL, labelColor: TECHNICAL, linkTint: TECHNICAL_LINK },
      { id: 'outdoor_performance', col: 0, order: 1, type: 'source', label: ['Outdoor', 'Performance'], value: 714, valueText: '$714M', notes: ['+42% Y/Y'], color: OUTDOOR, labelColor: OUTDOOR, linkTint: OUTDOOR_LINK },
      { id: 'ball_racquet', col: 0, order: 2, type: 'source', label: ['Ball', '& Racquet'], value: 347, valueText: '$347M', notes: ['+13% Y/Y'], color: BALL, labelColor: BALL, linkTint: BALL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1946, valueText: '$1,946M', notes: ['+32% Y/Y'], color: HUB, labelColor: HUB, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1165, valueText: '$1,165M', notes: ['60% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 780, valueText: '($780M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 12, valueText: '$12M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 321, valueText: '$321M', notes: ['17% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 856, valueText: '($856M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 170, valueText: '$170M', notes: ['9% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'finance', col: 4, order: 1, type: 'cost', label: 'Finance', value: 81, valueText: '($81M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 71, valueText: '($71M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 3, type: 'cost', label: ['Sales &', 'Marketing'], value: 856, valueText: '($856M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'technical_apparel', target: 'revenue', value: 885, sourceWidth: 184, targetWidth: 184, y0: 586, y1: 759, sourceOrder: 0, targetOrder: 0, linkTint: TECHNICAL_LINK },
      { source: 'outdoor_performance', target: 'revenue', value: 714, sourceWidth: 148, targetWidth: 151, y0: 926, y1: 926.5, sourceOrder: 0, targetOrder: 1, linkTint: OUTDOOR_LINK },
      { source: 'ball_racquet', target: 'revenue', value: 347, sourceWidth: 71, targetWidth: 73, y0: 1178.5, y1: 1038.5, sourceOrder: 0, targetOrder: 2, linkTint: BALL_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1165, sourceWidth: 244, targetWidth: 242, y0: 789, y1: 642, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 780, sourceWidth: 163, targetWidth: 161, y0: 993.5, y1: 1101.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 309, sourceWidth: 62, targetWidth: 66, y0: 552, y1: 435, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 856, sourceWidth: 180, targetWidth: 179, y0: 673, y1: 826.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'operating_profit', value: 12, sourceWidth: 2, targetWidth: 2.5, y0: 516, y1: 466.75, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, interactionOnly: true },
      { source: 'operating_profit', target: 'net_profit', value: 170, sourceWidth: 33, targetWidth: 33, y0: 418.5, y1: 323.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'finance', value: 81, sourceWidth: 15, targetWidth: 15, y0: 442.5, y1: 578.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 71, sourceWidth: 18, targetWidth: 13, y0: 459, y1: 685.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 856, sourceWidth: 179, targetWidth: 178, y0: 826.5, y1: 944, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '亚玛芬体育 · 2026 财年第一季度',
        meta: { title: '亚玛芬体育 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleSize: 106, titleTextLength: 1850 },
        annotationsSvg: directToConsumer(true),
        nodes: {
          technical_apparel: { label: '技术服饰', notes: ['同比 +33%'] }, outdoor_performance: { label: '户外运动', notes: ['同比 +42%'] }, ball_racquet: { label: '球类与球拍', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +32%'] }, gross_profit: { label: '毛利润', notes: ['利润率 60%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          other: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] }, operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (1 个百分点)'] }, finance: { label: '财务费用' }, tax: { label: '税费' }, sales_marketing: { label: '销售与营销' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
