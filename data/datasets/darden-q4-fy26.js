/* ====================================================================
 * Darden Restaurants - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/darden-q4-fy26.png as a fixed
 * d3-sankey layout. Brand wordmarks are validated runtime annotations.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const HUB = '#342d2c';
  const OLIVE = '#a8ad00';
  const OLIVE_LINK = '#d1d385';
  const LONGHORN = '#8b0e04';
  const LONGHORN_LINK = '#c48b87';
  const FINE_DINING = '#d57f00';
  const FINE_DINING_LINK = '#e4bd85';
  const OTHER_BUSINESS = '#7c9d6b';
  const OTHER_BUSINESS_LINK = '#bccbb4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2490;

  const name = (text, size = 31, color = RED_LABEL) => ({ text, size, weight: 800, color });
  const value = (size = 31, color = RED_LABEL) => ({ text: '$value', size, weight: 400, color });
  const note = (text, size = 28) => ({ text, size, weight: 400, color: NOTE });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });

  function labels(t) {
    return {
      olive_garden: {
        blocks: [block(428, 347, [value(39, OLIVE), note(t.oliveYy)], 9)],
      },
      longhorn: {
        blocks: [block(428, 650, [value(39, LONGHORN), note(t.longhornYy)], 9)],
      },
      fine_dining: {
        blocks: [
          block(428, 882, [value(39, FINE_DINING), note(t.fineDiningYy)], 9),
          block(235, 960, [name(t.fineDining, 40, FINE_DINING)], 6),
        ],
      },
      other_business: {
        blocks: [
          block(428, 1064, [value(39, OTHER_BUSINESS), note(t.otherBusinessYy)], 9),
          block(235, 1163, [name(t.otherBusiness, 40, OTHER_BUSINESS)], 6),
        ],
      },
      revenue: {
        blocks: [block(1051, 527, [name(t.revenue, 40, HUB), value(39, HUB), note(t.revenueYy)], 9)],
      },
      operating_profit: {
        blocks: [block(1674, 316, [name(t.operatingProfit, 40, GREEN_LABEL), value(39, GREEN_LABEL), note(t.operatingMargin), note(t.operatingPp)], 8)],
      },
      operating_expenses: {
        blocks: [block(1674, 1160, [...t.operatingExpenses.filter(Boolean).map((text) => name(text, 38)), value(36)], 8)],
      },
      net_profit: {
        blocks: [block(2490, 258, [name(t.netProfit, 40, GREEN_LABEL), value(39, GREEN_LABEL), note(t.netMargin), note(t.netPp)], 8)],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 449, [name(t.interest, 31)], 7)],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 545, [name(t.tax, 31)], 7)],
      },
      restaurant_labor: {
        blocks: [block(RIGHT_LABEL_X, 674, [name(t.restaurantLabor, 31), value(31)], 7)],
      },
      food_beverage: {
        blocks: [block(RIGHT_LABEL_X, 850, [name(t.foodBeverage, 31), value(31)], 7)],
      },
      restaurant_expenses: {
        blocks: [block(RIGHT_LABEL_X, 1002, [name(t.restaurantExpenses[0], 31), name(t.restaurantExpenses[1], 31), value(31)], 7)],
      },
      da: {
        blocks: [block(RIGHT_LABEL_X, 1137, [name(t.da, 31)], 7)],
      },
      ga: {
        blocks: [block(RIGHT_LABEL_X, 1237, [name(t.ga, 31)], 7)],
      },
      other: {
        blocks: [block(RIGHT_LABEL_X, 1330, [name(t.other, 31)], 7)],
      },
      gross_profit: { blocks: [] },
      cost_of_revenue: { blocks: [] },
    };
  }

  const enLabels = labels({
    oliveYy: '+11% Y/Y', longhornYy: '+22% Y/Y', fineDiningYy: '+11% Y/Y', otherBusinessYy: '+10% Y/Y',
    fineDining: 'Fine Dining', otherBusiness: 'Other Business', revenue: 'Revenue', revenueYy: '+14% Y/Y',
    operatingProfit: 'Operating profit', operatingMargin: '14% margin', operatingPp: '+2pp Y/Y',
    operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', netMargin: '11% margin', netPp: '+2pp Y/Y',
    interest: 'Interest ($0.1B)', tax: 'Tax ($0.1B)', restaurantLabor: 'Restaurant Labor', foodBeverage: 'Food & Beverage',
    restaurantExpenses: ['Restaurant', 'expenses'], da: 'D&A ($0.1B)', ga: 'G&A ($0.1B)', other: 'Other ($0.1B)',
  });
  const zhLabels = labels({
    oliveYy: '同比 +11%', longhornYy: '同比 +22%', fineDiningYy: '同比 +11%', otherBusinessYy: '同比 +10%',
    fineDining: '高端餐饮', otherBusiness: '其他业务', revenue: '收入', revenueYy: '同比 +14%',
    operatingProfit: '营业利润', operatingMargin: '利润率 14%', operatingPp: '同比 +2 个百分点',
    operatingExpenses: ['运营费用', ''], netProfit: '净利润', netMargin: '利润率 11%', netPp: '同比 +2 个百分点',
    interest: '利息（$0.1B）', tax: '税费（$0.1B）', restaurantLabor: '餐厅人工', foodBeverage: '食品和饮料',
    restaurantExpenses: ['餐厅费用', ''], da: '折旧与摊销（$0.1B）', ga: '一般及行政费用（$0.1B）', other: '其他（$0.1B）',
  });
  for (const id of ['interest', 'tax', 'da', 'ga', 'other']) {
    zhLabels[id].blocks[0].x = 2515;
    zhLabels[id].blocks[0].lines[0].size = 26;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'darden-q4-fy26',
    name: 'Darden Restaurants · Q4 FY26',
    company: 'Darden Restaurants',
    meta: {
      company: 'Darden Restaurants',
      title: 'Darden Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/darden-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 217,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2180,
      periodX: 1334,
      periodY: 1296,
      periodNoteY: 1340,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: ['revenue:left', 'revenue:right', 'operating_expenses:left', 'operating_expenses:right'],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: OLIVE, label: OLIVE },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: OLIVE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'darden-company-logo', href: 'data/assets/raster-annotations/darden/company-logo.png', x: 560, y: 250, width: 736, height: 190 },
      { key: 'darden-olive-garden-logo', href: 'data/assets/raster-annotations/darden/olive-garden-logo.png', x: 20, y: 375, width: 330, height: 240 },
      { key: 'darden-longhorn-logo', href: 'data/assets/raster-annotations/darden/longhorn-logo.png', x: 0, y: 650, width: 380, height: 158 },
      { key: 'darden-fine-dining-brand-cluster', href: 'data/assets/raster-annotations/darden/fine-dining-brand-cluster.png', x: 40, y: 856, width: 335, height: 104 },
      { key: 'darden-other-business-brand-cluster', href: 'data/assets/raster-annotations/darden/other-business-brand-cluster.png', x: 0, y: 1060, width: 382, height: 106 },
    ],
    nodes: [
      { id: 'olive_garden', type: 'source', label: 'Olive Garden', value: 1.538, notes: ['+11% Y/Y'], color: OLIVE, linkTint: OLIVE_LINK },
      { id: 'longhorn', type: 'source', label: 'LongHorn Steakhouse', value: 1.0165, notes: ['+22% Y/Y'], color: LONGHORN, linkTint: LONGHORN_LINK },
      { id: 'fine_dining', type: 'source', label: 'Fine Dining', value: 0.371, notes: ['+11% Y/Y'], color: FINE_DINING, linkTint: FINE_DINING_LINK },
      { id: 'other_business', type: 'source', label: 'Other Business', value: 0.7933, notes: ['+10% Y/Y'], color: OTHER_BUSINESS, linkTint: OTHER_BUSINESS_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 3.7188, notes: ['+14% Y/Y'] },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.5168, notes: ['14% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 3.202 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.4078, notes: ['11% margin', '+2pp Y/Y'] },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.0512 },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.0578 },
      { id: 'restaurant_labor', type: 'cost', label: 'Restaurant Labor', value: 1.1474 },
      { id: 'food_beverage', type: 'cost', label: 'Food & Beverage', value: 1.1193 },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 0.586 },
      { id: 'da', type: 'cost', label: 'D&A', value: 0.1463 },
      { id: 'ga', type: 'cost', label: 'G&A', value: 0.139 },
      { id: 'other', type: 'cost', label: 'Other', value: 0.064 },
      { id: 'gross_profit', type: 'profit', label: '', value: 3.7188, color: BG },
      { id: 'cost_of_revenue', type: 'cost', label: '', value: 0, color: BG },
    ],
    links: [
      { source: 'olive_garden', target: 'revenue', value: 1.538, sourceWidth: 141, targetWidth: 143, targetOrder: 0, linkTint: OLIVE_LINK },
      { source: 'longhorn', target: 'revenue', value: 1.0165, sourceWidth: 94, targetWidth: 94, targetOrder: 1, linkTint: LONGHORN_LINK },
      { source: 'fine_dining', target: 'revenue', value: 0.371, sourceWidth: 32, targetWidth: 34, targetOrder: 2, linkTint: FINE_DINING_LINK },
      { source: 'other_business', target: 'revenue', value: 0.7933, sourceWidth: 71, targetWidth: 76, targetOrder: 3, linkTint: OTHER_BUSINESS_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.5168, sourceWidth: 47, targetWidth: 46, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 3.202, sourceWidth: 300, targetWidth: 298, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4078, sourceWidth: 36, targetWidth: 36, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.0512, sourceWidth: 5, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.0578, sourceWidth: 5, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restaurant_labor', value: 1.1474, targetWidth: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'food_beverage', value: 1.1193, targetWidth: 105, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restaurant_expenses', value: 0.586, targetWidth: 52, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.1463, targetWidth: 11, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.139, targetWidth: 11, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.064, targetWidth: 4, sourceOrder: 5, targetOrder: 0 },
    ],
    layout: {
      scale: 93,
      nodes: {
        olive_garden: { x: 393, y: 448, width: 71, height: 141 },
        longhorn: { x: 393, y: 745, width: 71, height: 94 },
        fine_dining: { x: 393, y: 981, width: 71, height: 32 },
        other_business: { x: 393, y: 1162, width: 71, height: 71 },
        revenue: { x: 1015, y: 675, width: 72, height: 347 },
        operating_profit: { x: 1638, y: 512, width: 72, height: 46 },
        operating_expenses: { x: 1638, y: 849, width: 72, height: 298 },
        net_profit: { x: 2261, y: 324, width: 71, height: 36 },
        interest: { x: 2261, y: 482, width: 71, height: 1 },
        tax: { x: 2261, y: 567, width: 71, height: 3 },
        restaurant_labor: { x: 2261, y: 665, width: 71, height: 103 },
        food_beverage: { x: 2261, y: 842, width: 71, height: 105 },
        restaurant_expenses: { x: 2261, y: 1026, width: 71, height: 52 },
        da: { x: 2261, y: 1161, width: 71, height: 11 },
        ga: { x: 2261, y: 1260, width: 71, height: 11 },
        other: { x: 2261, y: 1352, width: 71, height: 4 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '达登餐饮集团 · 2026 财年第四季度',
        meta: {
          title: '达登餐饮集团 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 5 月',
          titleTextLength: 2040,
        },
        nodes: {
          olive_garden: { label: '橄榄花园', notes: ['同比 +11%'] },
          longhorn: { label: '长角牛排馆', notes: ['同比 +22%'] },
          fine_dining: { label: '高端餐饮', notes: ['同比 +11%'] },
          other_business: { label: '其他业务', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          interest: { label: '利息' }, tax: { label: '税费' }, restaurant_labor: { label: '餐厅人工' },
          food_beverage: { label: '食品和饮料' }, restaurant_expenses: { label: '餐厅费用' },
          da: { label: '折旧与摊销' }, ga: { label: '一般及行政费用' }, other: { label: '其他' },
          gross_profit: { label: '毛利润（未单列）' }, cost_of_revenue: { label: '收入成本（未单列）' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
