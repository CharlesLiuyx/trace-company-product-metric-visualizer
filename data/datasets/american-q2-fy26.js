/* American Airlines Q2 FY26 income statement ($B), measured from the Build-bound Source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#465a6b';
  const BLUE_LINK = '#a5aeb4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2258;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 10,
    lines,
  });
  const name = (text, size, color) => line(text, size, { weight: 800, color });
  const amount = (size, color) => line('$value', size, { color });
  const note = (text) => line(text, 29, { color: NOTE });

  const labels = (zh) => {
    const t = zh
      ? {
          passenger: '客运', cargo: '货运', otherRevenue: '其他', revenue: '收入', operating: '营业利润',
          expenses: ['运营', '费用'], net: '净利润', taxOther: ['税费及其他', '（$0.4B）'],
          fuel: '航空燃油（$4.9B）', salaries: ['薪酬与福利', '（$4.6B）'], regional: '支线业务（$1.4B）',
          maintenance: '维护（$1.0B）', landing: '着陆费（$1.0B）', rent: '飞机租赁（$0.3B）',
          selling: '销售费用（$0.6B）', da: '折旧与摊销（$0.5B）', otherCost: '其他（$1.9B）',
          yoy16: '同比 +16%', yoy29: '同比 +29%', yoy18: '同比 +18%', margin3: '利润率 3%',
          margin0: '利润率 0%', ppDown5: '同比 (5 个百分点)', ppDown4: '同比 (4 个百分点)',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', otherRevenue: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', taxOther: ['Tax & other', '($0.4B)'],
          fuel: 'Aircraft fuel ($4.9B)', salaries: ['Salaries & benefits', '($4.6B)'], regional: 'Regional ($1.4B)',
          maintenance: 'Maintenance ($1.0B)', landing: 'Landing fees ($1.0B)', rent: 'Aircraft rent ($0.3B)',
          selling: 'Selling expenses ($0.6B)', da: 'D&A ($0.5B)', otherCost: 'Other ($1.9B)',
          yoy16: '+16% Y/Y', yoy29: '+29% Y/Y', yoy18: '+18% Y/Y', margin3: '3% margin',
          margin0: '0% margin', ppDown5: '(5pp) Y/Y', ppDown4: '(4pp) Y/Y',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (x, top, text) => block(x, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [sourceAmount(303, 397.5, t.yoy16), block(230, 596.5, [name(t.passenger, 40, TITLE)], { anchor: 'end' })],
      },
      cargo: {
        blocks: [sourceAmount(296.5, 790, t.yoy29), block(230, 866.5, [name(t.cargo, 40, TITLE)], { anchor: 'end' })],
      },
      other_revenue: {
        blocks: [sourceAmount(303, 921, t.yoy18), block(230, 1003, [name(t.otherRevenue, 40, TITLE)], { anchor: 'end' })],
      },
      revenue: {
        blocks: [block(919, 484, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy16)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1538, 310, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin3), note(t.ppDown5)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1536, 1038, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [block(2365, 219, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin0), note(t.ppDown4)], { lineGap: 10 })],
      },
      tax_other: {
        blocks: [block(2364, 399, t.taxOther.map((text) => name(text, 32, RED_LABEL)), { lineGap: 8 })],
      },
      aircraft_fuel: { blocks: [terminal(2220.5, 517, t.fuel)] },
      salaries_benefits: {
        blocks: [block(2228.7, 633, t.salaries.map((text) => name(text, 32, RED_LABEL)), { anchor: 'start', lineGap: 8 })],
      },
      regional: { blocks: [terminal(2216.4, 770.5, t.regional)] },
      maintenance: { blocks: [terminal(2216.1, 867, t.maintenance)] },
      landing_fees: { blocks: [terminal(2218.3, 968.5, t.landing)] },
      aircraft_rent: { blocks: [terminal(2221.4, 1054, t.rent)] },
      selling_expenses: { blocks: [terminal(2211.7, 1149.5, t.selling)] },
      depreciation_amortization: { blocks: [terminal(2212.8, 1229, t.da)] },
      other_operating: { blocks: [terminal(2217.5, 1314, t.otherCost)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'american-q2-fy26',
    name: 'American Airlines · Q2 FY26',
    company: 'American Airlines',
    meta: {
      company: 'American Airlines',
      title: 'American Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/american-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2435,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: TITLE },
        hub: { node: BLUE, label: TITLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    rasterAnnotations: [
      {
        key: 'american-company-lockup',
        href: 'data/assets/raster-annotations/american/company-lockup.png',
        x: 650,
        y: 221,
        width: 630,
        height: 224,
      },
    ],
    layout: {
      nodes: {
        passenger: { x: 261, y: 493, width: 71, height: 248 },
        cargo: { x: 261, y: 886, width: 71, height: 2 },
        other_revenue: { x: 261, y: 1022, width: 71, height: 19 },
        revenue: { x: 883, y: 632, width: 72, height: 272 },
        operating_profit: { x: 1506, y: 492, width: 72, height: 5 },
        operating_expenses: { x: 1506, y: 747, width: 72, height: 266 },
        net_profit: { x: 2129, y: 267, width: 71, height: 2 },
        tax_other: { x: 2129, y: 435, width: 71, height: 4 },
        aircraft_fuel: { x: 2129, y: 499, width: 71, height: 78 },
        salaries_benefits: { x: 2129, y: 634, width: 71, height: 74 },
        regional: { x: 2129, y: 776, width: 71, height: 21 },
        maintenance: { x: 2129, y: 882, width: 71, height: 15 },
        landing_fees: { x: 2129, y: 978, width: 71, height: 14 },
        aircraft_rent: { x: 2129, y: 1077, width: 71, height: 3 },
        selling_expenses: { x: 2129, y: 1162, width: 71, height: 8 },
        depreciation_amortization: { x: 2129, y: 1248, width: 71, height: 7 },
        other_operating: { x: 2129, y: 1321, width: 71, height: 30 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 15.2, notes: ['+16% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.3, notes: ['+29% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.2, notes: ['+18% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 16.7, notes: ['+16% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['3% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 0.1, notes: ['0% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 3, order: 1, type: 'cost', label: 'Tax & other', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 3, order: 2, type: 'cost', label: 'Aircraft fuel', value: 4.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 3, type: 'cost', label: 'Salaries & benefits', value: 4.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional', col: 3, order: 4, type: 'cost', label: 'Regional', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 5, type: 'cost', label: 'Maintenance', value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 3, order: 6, type: 'cost', label: 'Landing fees', value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_rent', col: 3, order: 7, type: 'cost', label: 'Aircraft rent', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_expenses', col: 3, order: 8, type: 'cost', label: 'Selling expenses', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 9, type: 'cost', label: 'D&A', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 10, type: 'cost', label: 'Other', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only', value: 16.7, type: 'profit' },
      { id: 'cost_of_revenue', representation: 'data-only', value: 0, type: 'cost' },
      { id: 'tax', representation: 'data-only', value: 0, type: 'cost' },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 15.2, sourceWidth: 248, targetWidth: 248, y0: 617, y1: 756, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.3, sourceWidth: 2, targetWidth: 5, y0: 887, y1: 882.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.2, sourceWidth: 19, targetWidth: 19, y0: 1031.5, y1: 894.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.4, sourceWidth: 7, targetWidth: 5, y0: 635.5, y1: 494.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 16.3, sourceWidth: 265, targetWidth: 266, y0: 771.5, y1: 880, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 493, y1: 268, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 0.4, sourceWidth: 4, targetWidth: 4, y0: 495, y1: 437, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 4.9, sourceWidth: 80, targetWidth: 78, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK, y1: 538 },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.6, sourceWidth: 75, targetWidth: 74, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y1: 671 },
      { source: 'operating_expenses', target: 'regional', value: 1.4, sourceWidth: 23, targetWidth: 21, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, y1: 786.5 },
      { source: 'operating_expenses', target: 'maintenance', value: 1.0, sourceWidth: 16, targetWidth: 15, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK, y1: 889.5 },
      { source: 'operating_expenses', target: 'landing_fees', value: 1.0, sourceWidth: 16, targetWidth: 14, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK, y1: 985 },
      { source: 'operating_expenses', target: 'aircraft_rent', value: 0.3, sourceWidth: 5, targetWidth: 3, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK, y1: 1078.5 },
      { source: 'operating_expenses', target: 'selling_expenses', value: 0.6, sourceWidth: 10, targetWidth: 8, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK, y1: 1166 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.5, sourceWidth: 8, targetWidth: 7, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK, y1: 1251.5 },
      { source: 'operating_expenses', target: 'other_operating', value: 1.9, sourceWidth: 33, targetWidth: 30, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK, y1: 1336 },
    ],
    i18n: {
      zh: {
        name: '美国航空 · 2026 财年第二季度',
        meta: {
          title: '美国航空 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +16%'] },
          cargo: { label: '货运', notes: ['同比 +29%'] },
          other_revenue: { label: '其他', notes: ['同比 +18%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 0%', '同比 (4 个百分点)'] },
          tax_other: { label: '税费及其他' },
          aircraft_fuel: { label: '航空燃油' },
          salaries_benefits: { label: '薪酬与福利' },
          regional: { label: '支线业务' },
          maintenance: { label: '维护' },
          landing_fees: { label: '着陆费' },
          aircraft_rent: { label: '飞机租赁' },
          selling_expenses: { label: '销售费用' },
          depreciation_amortization: { label: '折旧与摊销' },
          other_operating: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
