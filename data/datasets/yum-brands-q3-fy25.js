/* Yum! Brands — Q3 FY25 income statement ($B), traced from the processed reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GRAY = '#858585';
  const KFC = '#71c5e8'; const KFC_LINK = '#b8dded';
  const TACO = '#00b8b0'; const TACO_LINK = '#85d7d3';
  const PIZZA = '#f9c606'; const PIZZA_LINK = '#f4dd88';
  const HABIT = '#025863'; const HABIT_LINK = '#86adb2';
  const GREEN = '#2ca02c'; const GREEN_LABEL = '#008f51'; const GREEN_LINK = '#99cd99';
  const RED = '#cc0000'; const RED_LABEL = '#941100'; const RED_LINK = '#e08585';
  const icons = window.SANKEY_BUSINESS_ICONS || {};
  const icon = (name, x, y, scale) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${icons[name] || ''}</g>`;
  const annotations = `<g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">${icon('yumCompanySpeechBubble', 610, 229, 0.91)}${icon('yumKfcLogo', 125, 444, 0.96)}${icon('yumTacoBellLogo', 136, 684, 0.91)}${icon('yumPizzaHutLogo', 148, 955, 0.87)}${icon('yumHabitLogo', 141, 1138, 0.78)}</g>`;
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });
  const labelLines = (name, value, notes, color, size = 39, valueSize = 38) => [
    ...(Array.isArray(name) ? name : [name]).map((text) => ({
      text, size, weight: 800, ...(color ? { color } : {}),
    })),
    { text: value || '$value', size: valueSize, weight: 400, ...(color ? { color } : {}) },
    ...notes.map((text) => ({ text, size: 28, weight: 400, color: NOTE })),
  ];

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'yum-brands-q3-fy25',
    name: 'Yum! Brands · Q3 FY25',
    company: 'Yum! Brands',
    meta: {
      company: 'Yum! Brands',
      title: 'Yum! Brands Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/yum-brands-q3-fy25.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 196,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2440,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: KFC, label: KFC },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: KFC_LINK,
        hub: GRAY,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 155,
      nodes: {
        kfc: { x: 400, y: 512, width: 71, height: 124 },
        taco_bell: { x: 400, y: 784, width: 71, height: 102 },
        pizza_hut: { x: 400, y: 1034, width: 71, height: 31 },
        habit: { x: 400, y: 1213, width: 71, height: 17 },
        revenue: { x: 774, y: 751, width: 70, height: 281 },
        company_sales: { x: 1148, y: 533, width: 70, height: 98 },
        franchise_property: { x: 1148, y: 874, width: 70, height: 121 },
        franchise_contributions: { x: 1148, y: 1215, width: 70, height: 59 },
        reported_revenue: { x: 1521, y: 751, width: 71, height: 281 },
        other_income: { x: 1707, y: 600, width: 71, height: 4 },
        operating_profit: { x: 1895, y: 620, width: 71, height: 92 },
        operating_expenses: { x: 1895, y: 942, width: 71, height: 189 },
        net_profit: { x: 2268, y: 491, width: 71, height: 55 },
        other: { x: 2268, y: 698, width: 71, height: 19 },
        tax: { x: 2268, y: 801, width: 71, height: 16 },
        company_restaurants: { x: 2268, y: 936, width: 71, height: 83 },
        franchise_expenses: { x: 2268, y: 1111, width: 71, height: 64 },
        ga: { x: 2268, y: 1265, width: 71, height: 38 },
        cost_of_revenue: { x: -1000, y: -1000, width: 0, height: 0 },
        gross_profit: { x: -1000, y: -1000, width: 0, height: 0 },
      },
      labels: {
        kfc: block(443, 418, [
          { text: '$value', size: 39, weight: 400, color: KFC },
          { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
        ]),
        taco_bell: block(435, 689, [
          { text: '$value', size: 39, weight: 400, color: TACO },
          { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
        ]),
        pizza_hut: block(435, 939, [
          { text: '$value', size: 39, weight: 400, color: PIZZA },
          { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE },
        ]),
        habit: block(435, 1119, [
          { text: '$value', size: 39, weight: 400, color: HABIT },
          { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
        ]),
        revenue: block(808, 606, labelLines('Revenue', '$value', ['+8% Y/Y'])),
        company_sales: block(1183, 389, labelLines('Company sales', '$value', ['+12% Y/Y']), 'middle', 9),
        franchise_property: block(1183, 673, labelLines(
          ['Franchise', '& property'], '$value', ['+7% Y/Y']
        ), 'middle', 10),
        franchise_contributions: block(1183, 1013, labelLines(
          ['Franchise', 'contributions'], '$value', ['+6% Y/Y']
        ), 'middle', 10),
        reported_revenue: block(1540, 606, labelLines('Revenue', '$value', ['+8% Y/Y'])),
        other_income: block(1740, 511, labelLines('Other', '$18M', [], GREEN_LABEL, 31, 30)),
        operating_profit: block(1930, 436, labelLines(
          'Operating profit', '$value', ['34% margin', '(0pp) Y/Y'], GREEN_LABEL, 40, 39
        ), 'middle', 9),
        operating_expenses: block(1930, 1150, labelLines(
          ['Operating', 'expenses'], '($1.3B)', [], RED_LABEL, 37, 36
        ), 'middle', 9),
        net_profit: block(2479, 451, labelLines(
          'Net profit', '$value', ['20% margin', '(1pp) Y/Y'], GREEN_LABEL, 40, 39
        ), 'middle', 9),
        other: block(2479, 670, labelLines('Other', '($0.1B)', [], RED_LABEL, 31, 30)),
        tax: block(2479, 775, labelLines('Tax', '($0.1B)', [], RED_LABEL, 31, 30)),
        company_restaurants: block(2479, 922, labelLines(
          ['Company', 'restaurants'], '($0.6B)', [], RED_LABEL, 31, 30
        )),
        franchise_expenses: block(2479, 1087, labelLines(
          ['Franchise', 'expenses'], '($0.5B)', [], RED_LABEL, 31, 30
        )),
        ga: block(2479, 1248, labelLines('G&A', '($0.3B)', [], RED_LABEL, 31, 30)),
        cost_of_revenue: { blocks: [] },
        gross_profit: { blocks: [] },
      },
    },
    nodes: [
      { id: 'kfc', col: 0, order: 0, type: 'source', label: 'KFC', value: 0.9, color: KFC, labelColor: KFC, linkTint: KFC_LINK },
      { id: 'taco_bell', col: 0, order: 1, type: 'source', label: 'Taco Bell', value: 0.7, color: TACO, labelColor: TACO, linkTint: TACO_LINK },
      { id: 'pizza_hut', col: 0, order: 2, type: 'source', label: 'Pizza Hut', value: 0.2, color: PIZZA, labelColor: PIZZA, linkTint: PIZZA_LINK },
      { id: 'habit', col: 0, order: 3, type: 'source', label: 'The Habit Burger Grill', value: 0.1, color: HABIT, labelColor: HABIT, linkTint: HABIT_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.0, valueText: '$2.0B', notes: ['+8% Y/Y'] },
      { id: 'company_sales', col: 2, order: 0, type: 'hub', label: 'Company sales', value: 0.7, notes: ['+12% Y/Y'] },
      { id: 'franchise_property', col: 2, order: 1, type: 'hub', label: ['Franchise', '& property'], value: 0.9, notes: ['+7% Y/Y'] },
      { id: 'franchise_contributions', col: 2, order: 2, type: 'hub', label: ['Franchise', 'contributions'], value: 0.4, notes: ['+6% Y/Y'] },
      { id: 'reported_revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 2.0, valueText: '$2.0B', notes: ['+8% Y/Y'] },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.018, valueText: '$18M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['34% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.3, valueText: '($1.3B)' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['20% margin', '(1pp) Y/Y'] },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)' },
      { id: 'company_restaurants', col: 6, order: 3, type: 'cost', label: ['Company', 'restaurants'], value: 0.6, valueText: '($0.6B)' },
      { id: 'franchise_expenses', col: 6, order: 4, type: 'cost', label: ['Franchise', 'expenses'], value: 0.5, valueText: '($0.5B)' },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 0.3, valueText: '($0.3B)' },
      { id: 'cost_of_revenue', col: 7, order: 0, type: 'cost', label: 'Cost of revenue', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
      { id: 'gross_profit', col: 7, order: 1, type: 'profit', label: 'Gross profit', value: 2.0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'kfc', target: 'revenue', value: 0.9, width: 124, targetOrder: 0, linkTint: { left: KFC_LINK, right: KFC_LINK } },
      { source: 'taco_bell', target: 'revenue', value: 0.7, width: 102, targetOrder: 1, linkTint: { left: TACO_LINK, right: TACO_LINK } },
      { source: 'pizza_hut', target: 'revenue', value: 0.2, width: 31, targetOrder: 2, linkTint: { left: PIZZA_LINK, right: PIZZA_LINK } },
      { source: 'habit', target: 'revenue', value: 0.1, width: 17, targetWidth: 24, targetOrder: 3, linkTint: { left: HABIT_LINK, right: HABIT_LINK } },
      { source: 'revenue', target: 'company_sales', value: 0.7, width: 98, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY, right: GRAY } },
      { source: 'revenue', target: 'franchise_property', value: 0.9, width: 121, sourceOrder: 1, targetOrder: 0, linkTint: { left: GRAY, right: GRAY } },
      { source: 'revenue', target: 'franchise_contributions', value: 0.4, width: 59, sourceWidth: 62, sourceOrder: 2, targetOrder: 0, linkTint: { left: GRAY, right: GRAY } },
      { source: 'company_sales', target: 'reported_revenue', value: 0.7, width: 98, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY, right: GRAY } },
      { source: 'franchise_property', target: 'reported_revenue', value: 0.9, width: 121, sourceOrder: 0, targetOrder: 1, linkTint: { left: GRAY, right: GRAY } },
      { source: 'franchise_contributions', target: 'reported_revenue', value: 0.4, width: 59, targetWidth: 62, sourceOrder: 0, targetOrder: 2, linkTint: { left: GRAY, right: GRAY } },
      { source: 'reported_revenue', target: 'operating_profit', value: 0.682, width: 88, sourceWidth: 92, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'reported_revenue', target: 'operating_expenses', value: 1.3, width: 189, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'other_income', target: 'operating_profit', value: 0.018, width: 4, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, width: 55, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'other', value: 0.1, width: 19, sourceWidth: 20, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 16, sourceWidth: 17, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'company_restaurants', value: 0.6, width: 83, sourceOrder: 0, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'franchise_expenses', value: 0.5, width: 64, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 38, sourceWidth: 42, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
    ],
    i18n: {
      zh: {
        name: 'Yum! Brands · 2025 财年第三季度',
        meta: {
          title: 'Yum! Brands 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          kfc: { label: 'KFC' },
          taco_bell: { label: '塔可钟' },
          pizza_hut: { label: '必胜客' },
          habit: { label: 'Habit 汉堡烤吧' },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          company_sales: { label: '公司销售额', notes: ['同比 +12%'] },
          franchise_property: { label: '特许经营及物业', notes: ['同比 +7%'] },
          franchise_contributions: { label: '特许经营贡献', notes: ['同比 +6%'] },
          reported_revenue: { label: '收入', notes: ['同比 +8%'] },
          other_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比持平'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 -1 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          company_restaurants: { label: '公司自营餐厅' },
          franchise_expenses: { label: '特许经营费用' },
          ga: { label: '管理费用' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            company_sales: block(1183, 389, [
              { text: '公司销售额', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '同比 +12%', size: 28, weight: 400, color: NOTE },
            ], 'middle', 9),
            franchise_property: block(1183, 673, [
              { text: '特许经营及', size: 39, weight: 800 },
              { text: '物业', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '同比 +7%', size: 28, weight: 400, color: NOTE },
            ], 'middle', 10),
            franchise_contributions: block(1183, 1013, [
              { text: '特许经营', size: 39, weight: 800 },
              { text: '贡献', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '同比 +6%', size: 28, weight: 400, color: NOTE },
            ], 'middle', 10),
            company_restaurants: block(2479, 922, [
              { text: '公司自营', size: 31, weight: 800, color: RED_LABEL },
              { text: '餐厅', size: 31, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ]),
            franchise_expenses: block(2479, 1087, [
              { text: '特许经营', size: 31, weight: 800, color: RED_LABEL },
              { text: '费用', size: 31, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ]),
          },
        },
      },
    },
  });
})();
