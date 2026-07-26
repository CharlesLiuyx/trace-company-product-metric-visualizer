/* ====================================================================
 * Darden Restaurants - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/darden-q3-fy26.png as a fixed
 * d3-sankey layout. Q3-specific crops preserve the complete Darden and
 * LongHorn marks; the other validated Darden brand assets are reused.
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
        blocks: [
          block(426, 312, [value(39, OLIVE), note(t.oliveYy)], 9),
          block(206, 621, [note(t.oliveMargin)], 6),
        ],
      },
      longhorn: {
        blocks: [
          block(425.6, 621, [value(39, LONGHORN), note(t.longhornYy)], 9),
          block(206.6, 804, [note(t.longhornMargin)], 6),
        ],
      },
      fine_dining: {
        blocks: [
          block(424.5, 872, [value(39, FINE_DINING), note(t.fineDiningYy)], 9),
          block(228.5, 968, [name(t.fineDining, 40, FINE_DINING), note(t.fineDiningMargin)], 8),
        ],
      },
      other_business: {
        blocks: [
          block(430.5, 1061, [value(39, OTHER_BUSINESS), note(t.otherBusinessYy)], 9),
          block(228.5, 1169, [name(t.otherBusiness, 40, OTHER_BUSINESS), note(t.otherBusinessMargin)], 8),
        ],
      },
      revenue: {
        blocks: [block(1049, 490, [name(t.revenue, 40, HUB), value(39, HUB), note(t.revenueYy)], 9)],
      },
      operating_profit: {
        blocks: [block(1674, 332, [name(t.operatingProfit, 40, GREEN_LABEL), value(39, GREEN_LABEL), note(t.operatingMargin), note(t.operatingPp)], 8)],
      },
      operating_expenses: {
        blocks: [block(1674.5, 1095.5, [...t.operatingExpenses.filter(Boolean).map((text) => name(text, 38)), value(36)], 8)],
      },
      net_profit: {
        blocks: [block(2474.5, 285.5, [name(t.netProfit, 40, GREEN_LABEL), value(39, GREEN_LABEL), note(t.netMargin), note(t.netPp)], 8)],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X - 10.5, 465.5, [name(t.interest, 31)], 7)],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X - 16.5, 545.5, [name(t.tax, 31)], 7)],
      },
      restaurant_labor: {
        blocks: [block(RIGHT_LABEL_X - 7, 653.5, [name(t.restaurantLabor, 31), value(31)], 7)],
      },
      food_beverage: {
        blocks: [block(RIGHT_LABEL_X - 10.5, 791.5, [name(t.foodBeverage, 31), value(31)], 7)],
      },
      restaurant_expenses: {
        blocks: [block(RIGHT_LABEL_X - 4, 903.5, [name(t.restaurantExpenses[0], 31), name(t.restaurantExpenses[1], 31), value(31)], 7)],
      },
      da: {
        blocks: [block(RIGHT_LABEL_X - 10, 1038.5, [name(t.da, 31)], 7)],
      },
      ga: {
        blocks: [block(RIGHT_LABEL_X - 11, 1137.5, [name(t.ga, 31)], 7)],
      },
      marketing: {
        blocks: [block(RIGHT_LABEL_X + 11.5, 1241, [name(t.marketing, 31)], 7)],
      },
      other: {
        blocks: [block(RIGHT_LABEL_X + 8, 1332.5, [name(t.other, 31)], 7)],
      },
    };
  }

  const enLabels = labels({
    oliveYy: '+5% Y/Y',
    oliveMargin: '23% segment margin',
    longhornYy: '+11% Y/Y',
    longhornMargin: '19% segment margin',
    fineDiningYy: '+4% Y/Y',
    fineDining: 'Fine Dining',
    fineDiningMargin: '22% segment margin',
    otherBusinessYy: '+3% Y/Y',
    otherBusiness: 'Other Business',
    otherBusinessMargin: '16% segment margin',
    revenue: 'Revenue',
    revenueYy: '+6% Y/Y',
    operatingProfit: 'Operating profit',
    operatingMargin: '12% margin',
    operatingPp: '(1pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'],
    netProfit: 'Net profit',
    netMargin: '9% margin',
    netPp: '(1pp) Y/Y',
    interest: 'Interest ($50M)',
    tax: 'Tax ($46M)',
    restaurantLabor: 'Restaurant Labor',
    foodBeverage: 'Food & Beverage',
    restaurantExpenses: ['Restaurant', 'expenses'],
    da: 'D&A ($0.1B)',
    ga: 'G&A ($0.1B)',
    marketing: 'Marketing ($39M)',
    other: 'Other ($33M)',
  });

  const zhLabels = labels({
    oliveYy: '同比 +5%',
    oliveMargin: '分部利润率 23%',
    longhornYy: '同比 +11%',
    longhornMargin: '分部利润率 19%',
    fineDiningYy: '同比 +4%',
    fineDining: '高端餐饮',
    fineDiningMargin: '分部利润率 22%',
    otherBusinessYy: '同比 +3%',
    otherBusiness: '其他业务',
    otherBusinessMargin: '分部利润率 16%',
    revenue: '收入',
    revenueYy: '同比 +6%',
    operatingProfit: '营业利润',
    operatingMargin: '利润率 12%',
    operatingPp: '同比下降 1 个百分点',
    operatingExpenses: ['运营费用', ''],
    netProfit: '净利润',
    netMargin: '利润率 9%',
    netPp: '同比下降 1 个百分点',
    interest: '利息（$50M）',
    tax: '税费（$46M）',
    restaurantLabor: '餐厅人工',
    foodBeverage: '食品和饮料',
    restaurantExpenses: ['餐厅费用', ''],
    da: '折旧与摊销（$0.1B）',
    ga: '一般及行政费用（$0.1B）',
    marketing: '营销费用（$39M）',
    other: '其他（$33M）',
  });
  for (const id of ['interest', 'tax', 'da', 'ga', 'marketing', 'other']) {
    zhLabels[id].blocks[0].x = 2515;
    zhLabels[id].blocks[0].lines[0].size = 26;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'darden-q3-fy26',
    name: 'Darden Restaurants · Q3 FY26',
    company: 'Darden Restaurants',
    meta: {
      company: 'Darden Restaurants',
      title: 'Darden Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/darden-q3-fy26.png', width: 2667, height: 1500 },
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
        // The Source paints both sides of the Revenue hub as continuous
        // node-backed interfaces. Preserve that full-face topology while
        // retaining the measured widths at each outer node.
        fullFaceIds: ['revenue:left', 'revenue:right'],
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
      { key: 'darden-company-logo-q3-fy26', href: 'data/assets/raster-annotations/darden/company-logo-q3-fy26.png', x: 650, y: 250, width: 720, height: 190 },
      { key: 'darden-olive-garden-logo', href: 'data/assets/raster-annotations/darden/olive-garden-logo.png', x: 20, y: 375, width: 330, height: 240 },
      { key: 'darden-longhorn-logo-q3-fy26', href: 'data/assets/raster-annotations/darden/longhorn-logo-q3-fy26.png', x: 0, y: 660, width: 370, height: 140 },
      { key: 'darden-fine-dining-brand-cluster', href: 'data/assets/raster-annotations/darden/fine-dining-brand-cluster.png', x: 40, y: 856, width: 335, height: 104 },
      { key: 'darden-other-business-brand-cluster', href: 'data/assets/raster-annotations/darden/other-business-brand-cluster.png', x: 0, y: 1060, width: 382, height: 106 },
    ],
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],
    nodes: [
      { id: 'olive_garden', type: 'source', label: 'Olive Garden', value: 1.393, notes: ['+5% Y/Y', '23% segment margin'], color: OLIVE, linkTint: OLIVE_LINK },
      { id: 'longhorn', type: 'source', label: 'LongHorn Steakhouse', value: 0.8542, notes: ['+11% Y/Y', '19% segment margin'], color: LONGHORN, linkTint: LONGHORN_LINK },
      { id: 'fine_dining', type: 'source', label: 'Fine Dining', value: 0.402, notes: ['+4% Y/Y', '22% segment margin'], color: FINE_DINING, linkTint: FINE_DINING_LINK },
      { id: 'other_business', type: 'source', label: 'Other Business', value: 0.6961, notes: ['+3% Y/Y', '16% segment margin'], color: OTHER_BUSINESS, linkTint: OTHER_BUSINESS_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 3.3453, notes: ['+6% Y/Y'] },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.4064, notes: ['12% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 2.9389 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.3106, notes: ['9% margin', '(1pp) Y/Y'] },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.0496, valueText: '($49.6M)' },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.0462, valueText: '($46.2M)' },
      { id: 'restaurant_labor', type: 'cost', label: 'Restaurant Labor', value: 1.0469 },
      { id: 'food_beverage', type: 'cost', label: 'Food & Beverage', value: 1.0267 },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 0.5287 },
      { id: 'da', type: 'cost', label: 'D&A', value: 0.1418 },
      { id: 'ga', type: 'cost', label: 'G&A', value: 0.1215 },
      { id: 'marketing', type: 'cost', label: 'Marketing', value: 0.0394, valueText: '($39.4M)' },
      { id: 'other', type: 'cost', label: 'Other', value: 0.033, valueText: '($33M)' },
    ],
    links: [
      { source: 'olive_garden', target: 'revenue', value: 1.393, sourceWidth: 152, targetWidth: 152, y0: 482, y1: 709, targetOrder: 0, linkTint: OLIVE_LINK },
      { source: 'longhorn', target: 'revenue', value: 0.8542, sourceWidth: 93, targetWidth: 94, y0: 760.5, y1: 832, targetOrder: 1, linkTint: LONGHORN_LINK },
      { source: 'fine_dining', target: 'revenue', value: 0.402, sourceWidth: 42, targetWidth: 45, y0: 983, y1: 901.5, targetOrder: 2, linkTint: FINE_DINING_LINK },
      { source: 'other_business', target: 'revenue', value: 0.6961, sourceWidth: 75, targetWidth: 76, y0: 1190.5, y1: 962, targetOrder: 3, linkTint: OTHER_BUSINESS_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.4064, sourceWidth: 43, targetWidth: 42, y0: 654.5, y1: 534, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.9389, sourceWidth: 324, targetWidth: 322, y0: 838, y1: 917.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.3106, sourceWidth: 32, targetWidth: 33, y0: 529, y1: 372.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.0496, sourceWidth: 4, targetWidth: 4, y0: 547.5, y1: 480.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.0462, sourceWidth: 5, targetWidth: 2, y0: 552, y1: 564.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restaurant_labor', value: 1.0469, sourceWidth: 115, targetWidth: 114, y0: 814.5, y1: 687.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'food_beverage', value: 1.0267, sourceWidth: 112, targetWidth: 111, y0: 928, y1: 829.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restaurant_expenses', value: 0.5287, sourceWidth: 58, targetWidth: 56, y0: 1013, y1: 956, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.1418, sourceWidth: 16, targetWidth: 15, y0: 1049.5, y1: 1057.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.1215, sourceWidth: 13, targetWidth: 11, y0: 1064.5, y1: 1158.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.0394, sourceWidth: 4, targetWidth: 2, y0: 1073, y1: 1256.5, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.033, sourceWidth: 4, targetWidth: 1, y0: 1076.5, y1: 1352, sourceOrder: 6, targetOrder: 0 },
    ],
    layout: {
      scale: 110,
      nodes: {
        olive_garden: { x: 393, y: 406, width: 71, height: 152 },
        longhorn: { x: 393, y: 714, width: 71, height: 93 },
        fine_dining: { x: 393, y: 962, width: 71, height: 42 },
        other_business: { x: 393, y: 1153, width: 71, height: 75 },
        revenue: { x: 1015, y: 633, width: 72, height: 367 },
        operating_profit: { x: 1638, y: 513, width: 72, height: 42 },
        operating_expenses: { x: 1638, y: 756, width: 72, height: 323 },
        net_profit: { x: 2261, y: 356, width: 71, height: 33 },
        interest: { x: 2261, y: 479, width: 71, height: 4 },
        tax: { x: 2261, y: 564, width: 71, height: 2 },
        restaurant_labor: { x: 2261, y: 631, width: 71, height: 114 },
        food_beverage: { x: 2261, y: 774, width: 71, height: 111 },
        restaurant_expenses: { x: 2261, y: 928, width: 71, height: 56 },
        da: { x: 2261, y: 1050, width: 71, height: 15 },
        ga: { x: 2261, y: 1153, width: 71, height: 11 },
        marketing: { x: 2261, y: 1256, width: 71, height: 2 },
        other: { x: 2261, y: 1352, width: 71, height: 1 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '达登餐饮集团 · 2026 财年第三季度',
        meta: {
          title: '达登餐饮集团 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          titleTextLength: 2040,
        },
        nodes: {
          olive_garden: { label: '橄榄花园', notes: ['同比 +5%', '分部利润率 23%'] },
          longhorn: { label: '长角牛排馆', notes: ['同比 +11%', '分部利润率 19%'] },
          fine_dining: { label: '高端餐饮', notes: ['同比 +4%', '分部利润率 22%'] },
          other_business: { label: '其他业务', notes: ['同比 +3%', '分部利润率 16%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比下降 1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比下降 1 个百分点'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          restaurant_labor: { label: '餐厅人工' },
          food_beverage: { label: '食品和饮料' },
          restaurant_expenses: { label: '餐厅费用' },
          da: { label: '折旧与摊销' },
          ga: { label: '一般及行政费用' },
          marketing: { label: '营销费用' },
          other: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
