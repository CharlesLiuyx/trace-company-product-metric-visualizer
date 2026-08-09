/* Yum! Brands — Q2 FY26 income statement ($B), traced from the processed reference. */
(function () {
  const TITLE = '#155077'; const NOTE = '#666666'; const BLACK = '#000000'; const GRAY = '#858585';
  const KFC = '#71c5e8'; const KFC_LINK = '#b8dded'; const TACO = '#00b8b0'; const TACO_LINK = '#85d7d3';
  const PIZZA = '#f9c606'; const PIZZA_LINK = '#f4dd88'; const HABIT = '#025863'; const HABIT_LINK = '#86adb2';
  const GREEN = '#2ca02c'; const GREEN_LABEL = '#008f51'; const GREEN_LINK = '#99cd99';
  const RED = '#cc0000'; const RED_LABEL = '#941100'; const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const icon = (name, x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const annotations = `<g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">${icon('yumCompanySpeechBubble', 610, 229, 0.91)}${icon('yumKfcLogo', 125, 464, 0.96)}${icon('yumTacoBellLogo', 136, 674, 0.91)}${icon('yumPizzaHutLogo', 148, 941, 0.87)}${icon('yumHabitLogo', 141, 1117, 0.78)}</g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ blocks: [{ x, top, anchor, lineGap, lines }] });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'yum-brands-q2-fy26', name: 'Yum! Brands · Q2 FY26', company: 'Yum! Brands',
    meta: {
      company: 'Yum! Brands', title: 'Yum! Brands Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/yum-brands-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 124, titleWeight: 800, titleTextLength: 2440,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: KFC, label: KFC }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: KFC_LINK, hub: GRAY, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],
    layout: {
      scale: 128,
      nodes: {
        kfc: { x: 400, y: 538, width: 71, height: 117 }, taco_bell: { x: 400, y: 790, width: 71, height: 108 },
        pizza_hut: { x: 400, y: 1037, width: 71, height: 31 }, habit: { x: 400, y: 1198, width: 71, height: 15 },
        revenue: { x: 774, y: 744, width: 70, height: 278 }, company_sales: { x: 1148, y: 544, width: 70, height: 105 },
        franchise_property: { x: 1148, y: 883, width: 70, height: 112 }, franchise_contributions: { x: 1145, y: 1217, width: 70, height: 55 },
        reported_revenue: { x: 1521, y: 739, width: 71, height: 278 }, operating_profit: { x: 1895, y: 568, width: 71, height: 82 },
        operating_expenses: { x: 1895, y: 938, width: 71, height: 192 }, tax_benefit: { x: 2156, y: 554, width: 70, height: 40 },
        net_profit: { x: 2268, y: 422, width: 71, height: 108 }, other: { x: 2268, y: 780, width: 71, height: 14 },
        company_restaurants: { x: 2268, y: 953, width: 71, height: 87 }, franchise_expenses: { x: 2268, y: 1142, width: 71, height: 60 },
        ga: { x: 2268, y: 1296, width: 71, height: 38 },
      },
      labels: {
        kfc: block(443, 445, [line('$value', 39, 400, KFC), line('+9% Y/Y', 28, 400, NOTE)]),
        taco_bell: block(435, 696, [line('$value', 39, 400, TACO), line('+20% Y/Y', 28, 400, NOTE)]),
        pizza_hut: block(435, 943, [line('$value', 39, 400, PIZZA), line('+6% Y/Y', 28, 400, NOTE)]),
        habit: block(435, 1101, [line('$value', 39, 400, HABIT), line('+4% Y/Y', 28, 400, NOTE)]),
        revenue: block(809, 594, [line('Revenue', 39, 800), line('$value', 38), line('+12% Y/Y', 28, 400, NOTE)], 'middle', 10),
        company_sales: block(1183, 394, [line('Company sales', 39, 800), line('$value', 38), line('+25% Y/Y', 28, 400, NOTE)], 'middle', 9),
        franchise_property: block(1183, 684, [line('Franchise', 39, 800), line('& property', 39, 800), line('$value', 38), line('+7% Y/Y', 28, 400, NOTE)], 'middle', 10),
        franchise_contributions: block(1180, 1011, [line('Franchise', 39, 800), line('contributions', 39, 800), line('$value', 38), line('+2% Y/Y', 28, 400, NOTE)], 'middle', 10),
        reported_revenue: block(1557, 592, [line('Revenue', 39, 800), line('$value', 38), line('+12% Y/Y', 28, 400, NOTE)], 'middle', 10),
        operating_profit: block(1930, 382, [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('30% margin', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE)], 'middle', 9),
        tax_benefit: block(2191, 612, [line('Tax', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)]),
        net_profit: block(2479, 407, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('39% margin', 28, 400, NOTE), line('+20pp Y/Y', 28, 400, NOTE)], 'middle', 9),
        other: block(2479, 744, [line('Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
        operating_expenses: block(1930, 1142, [line('Operating', 37, 800, RED_LABEL), line('expenses', 37, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 9),
        company_restaurants: block(2479, 934, [line('Company', 31, 800, RED_LABEL), line('restaurants', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
        franchise_expenses: block(2479, 1109, [line('Franchise', 31, 800, RED_LABEL), line('expenses', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
        ga: block(2479, 1276, [line('G&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
      },
    },
    nodes: [
      { id: 'kfc', col: 0, order: 0, type: 'source', label: 'KFC', value: 0.9, color: KFC, labelColor: KFC, linkTint: KFC_LINK },
      { id: 'taco_bell', col: 0, order: 1, type: 'source', label: 'Taco Bell', value: 0.9, color: TACO, labelColor: TACO, linkTint: TACO_LINK },
      { id: 'pizza_hut', col: 0, order: 2, type: 'source', label: 'Pizza Hut', value: 0.3, color: PIZZA, labelColor: PIZZA, linkTint: PIZZA_LINK },
      { id: 'habit', col: 0, order: 3, type: 'source', label: 'The Habit Burger Grill', value: 0.1, color: HABIT, labelColor: HABIT, linkTint: HABIT_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.2, notes: ['+12% Y/Y'] },
      { id: 'company_sales', col: 2, order: 0, type: 'hub', label: 'Company sales', value: 0.8, notes: ['+25% Y/Y'] },
      { id: 'franchise_property', col: 2, order: 1, type: 'hub', label: ['Franchise', '& property'], value: 0.9, notes: ['+7% Y/Y'] },
      { id: 'franchise_contributions', col: 2, order: 2, type: 'hub', label: ['Franchise', 'contributions'], value: 0.4, notes: ['+2% Y/Y'] },
      { id: 'reported_revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 2.2, notes: ['+12% Y/Y'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['30% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.5, valueText: '($1.5B)' },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.9, notes: ['39% margin', '+20pp Y/Y'] },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'company_restaurants', col: 6, order: 2, type: 'cost', label: ['Company', 'restaurants'], value: 0.7, valueText: '($0.7B)' },
      { id: 'franchise_expenses', col: 6, order: 3, type: 'cost', label: ['Franchise', 'expenses'], value: 0.5, valueText: '($0.5B)' },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.3, valueText: '($0.3B)' },
    ],
    links: [
      { source: 'kfc', target: 'revenue', value: 0.9, width: 117, targetOrder: 0, linkTint: KFC_LINK },
      { source: 'taco_bell', target: 'revenue', value: 0.9, width: 108, targetOrder: 1, linkTint: TACO_LINK },
      { source: 'pizza_hut', target: 'revenue', value: 0.3, width: 31, targetOrder: 2, linkTint: PIZZA_LINK },
      { source: 'habit', target: 'revenue', value: 0.1, width: 15, sourceWidth: 15, targetWidth: 22, targetOrder: 3, linkTint: HABIT_LINK },
      { source: 'revenue', target: 'company_sales', value: 0.8, width: 105, sourceOrder: 0, targetOrder: 0, linkTint: GRAY },
      { source: 'revenue', target: 'franchise_property', value: 0.9, width: 112, sourceOrder: 1, targetOrder: 0, linkTint: GRAY },
      { source: 'revenue', target: 'franchise_contributions', value: 0.4, width: 55, sourceWidth: 61, targetWidth: 55, sourceOrder: 2, targetOrder: 0, linkTint: GRAY },
      { source: 'company_sales', target: 'reported_revenue', value: 0.8, width: 105, sourceOrder: 0, targetOrder: 0, linkTint: GRAY },
      { source: 'franchise_property', target: 'reported_revenue', value: 0.9, width: 112, sourceOrder: 0, targetOrder: 1, linkTint: GRAY },
      { source: 'franchise_contributions', target: 'reported_revenue', value: 0.4, width: 55, sourceWidth: 55, targetWidth: 61, sourceOrder: 0, targetOrder: 2, linkTint: GRAY },
      { source: 'reported_revenue', target: 'operating_profit', value: 0.7, width: 82, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'reported_revenue', target: 'operating_expenses', value: 1.5, width: 192, sourceWidth: 196, targetWidth: 192, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, width: 68, targetWidth: 68, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 0.1, width: 14, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 0.3, width: 40, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'company_restaurants', value: 0.7, width: 87, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'franchise_expenses', value: 0.5, width: 60, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 38, sourceWidth: 45, targetWidth: 38, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: { zh: {
      name: 'Yum! Brands · 2026 财年第二季度', meta: { title: 'Yum! Brands 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月' },
      nodes: {
        kfc: { label: 'KFC' }, taco_bell: { label: '塔可钟' }, pizza_hut: { label: '必胜客' }, habit: { label: 'Habit 汉堡烤吧' },
        revenue: { label: '收入', notes: ['同比 +12%'] }, company_sales: { label: '公司销售额', notes: ['同比 +25%'] },
        franchise_property: { label: '特许经营及物业', notes: ['同比 +7%'] }, franchise_contributions: { label: '特许经营贡献', notes: ['同比 +2%'] },
        reported_revenue: { label: '收入', notes: ['同比 +12%'] }, operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 -2 个百分点'] },
        operating_expenses: { label: '运营费用' }, tax_benefit: { label: '税收收益' }, net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +20 个百分点'] },
        other: { label: '其他' }, company_restaurants: { label: '公司自营餐厅' }, franchise_expenses: { label: '特许经营费用' }, ga: { label: '管理费用' },
      },
      nonNodeMetrics: { cost_of_revenue: { label: '收入成本' }, gross_profit: { label: '毛利润' } },
      layout: { labels: {
        company_sales: block(1183, 394, [line('公司销售额', 39, 800), line('$value', 38), line('同比 +25%', 28, 400, NOTE)], 'middle', 9),
        franchise_property: block(1183, 684, [line('特许经营及', 39, 800), line('物业', 39, 800), line('$value', 38), line('同比 +7%', 28, 400, NOTE)], 'middle', 10),
        franchise_contributions: block(1180, 1011, [line('特许经营', 39, 800), line('贡献', 39, 800), line('$value', 38), line('同比 +2%', 28, 400, NOTE)], 'middle', 10),
        tax_benefit: block(2191, 612, [line('税收收益', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)]),
        company_restaurants: block(2479, 934, [line('公司自营', 31, 800, RED_LABEL), line('餐厅', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
        franchise_expenses: block(2479, 1109, [line('特许经营', 31, 800, RED_LABEL), line('费用', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
      } },
    } },
  });
})();
