/* Southwest Q4 FY25 income statement ($B), measured from the processed source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#304cb2';
  const BLUE_LINK = '#9ba6d4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2465;

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
          passenger: '客运', freight: '货运', other: '其他', revenue: '收入', operating: '营业利润',
          expenses: ['运营', '费用'], net: '净利润', tax: '税费', interest: '利息', salaries: ['薪酬', '与福利'],
          fuel: '燃油与石油', maintenance: '维护', landing: '着陆费', da: '折旧与摊销',
          yoy8: '同比 +8%', yoyFreight: '同比 (4)%', yoy6: '同比 +6%', yoy7: '同比 +7%',
          margin5: '利润率 5%', margin4: '利润率 4%', ppUp1: '同比 +1 个百分点',
        }
      : {
          passenger: 'Passenger', freight: 'Freight', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', interest: 'Interest', salaries: ['Salaries', '& benefits'],
          fuel: 'Fuel & Oil', maintenance: 'Maintenance', landing: 'Landing fees', da: 'D&A',
          yoy8: '+8% Y/Y', yoyFreight: '(4)% Y/Y', yoy6: '+6% Y/Y', yoy7: '+7% Y/Y',
          margin5: '5% margin', margin4: '4% margin', ppUp1: '+1pp Y/Y',
        };
    const sourceAmount = (top, yoy) => block(399, top, [amount(39, BLUE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL), amount(31, RED_LABEL)], { lineGap: 8 });
    return {
      passenger: { blocks: [sourceAmount(393, t.yoy8), block(205, 612, [name(t.passenger, 40, BLUE)])] },
      freight: { blocks: [sourceAmount(858, t.yoyFreight), block(236, 937, [name(t.freight, 40, BLUE)])] },
      other_revenue: { blocks: [sourceAmount(1015, t.yoy6), block(236, 1107, [name(t.other, 40, BLUE)])] },
      revenue: { blocks: [block(1021, 504, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy7)], { lineGap: 11 })] },
      operating_profit: { blocks: [block(1645, 300, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin5), note(t.ppUp1)], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1645, 1151, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })] },
      other_income: { blocks: [block(2135, 420, [name(t.other, 32, GREEN_LABEL), amount(31, GREEN_LABEL)], { lineGap: 8 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 300, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin4), note(t.ppUp1)], { lineGap: 10 })] },
      tax: { blocks: [terminal(491, t.tax)] },
      interest: { blocks: [terminal(574, t.interest)] },
      salaries_benefits: { blocks: [block(RIGHT_LABEL_X, 689, [...t.salaries.map((text) => name(text, 32, RED_LABEL)), amount(31, RED_LABEL)], { lineGap: 8 })] },
      fuel_oil: { blocks: [terminal(885, t.fuel)] },
      maintenance: { blocks: [terminal(995, t.maintenance)] },
      landing_fees: { blocks: [terminal(1105, t.landing)] },
      depreciation_amortization: { blocks: [terminal(1207, t.da)] },
      other_operating: { blocks: [terminal(1319, t.other)] },
      gross_profit: { blocks: [] },
      cost_of_revenue: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'southwest-q4-fy25',
    name: 'Southwest Airlines · Q4 FY25',
    company: 'Southwest Airlines',
    meta: {
      company: 'Southwest Airlines',
      title: 'Southwest Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/southwest-q4-fy25.png', width: 2667, height: 1500 },
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
        source: { node: BLUE, label: BLUE },
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
        key: 'southwest-company-lockup',
        href: 'data/assets/raster-annotations/southwest/company-lockup.png',
        x: 600,
        y: 295,
        width: 800,
        height: 130,
      },
    ],
    layout: {
      scale: 43.65,
      nodes: {
        passenger: { x: 363, y: 484, width: 73, height: 294 },
        freight: { x: 363, y: 948, width: 73, height: 3 },
        other_revenue: { x: 363, y: 1106, width: 73, height: 28 },
        revenue: { x: 985, y: 646, width: 73, height: 323 },
        operating_profit: { x: 1609, y: 478, width: 73, height: 19 },
        operating_expenses: { x: 1609, y: 824, width: 73, height: 307 },
        other_income: { x: 2100, y: 397, width: 73, height: 4 },
        net_profit: { x: 2231, y: 346, width: 73, height: 15 },
        tax: { x: 2231, y: 519, width: 73, height: 8 },
        interest: { x: 2231, y: 604, width: 73, height: 4 },
        salaries_benefits: { x: 2231, y: 667, width: 73, height: 147 },
        fuel_oil: { x: 2231, y: 887, width: 73, height: 59 },
        maintenance: { x: 2231, y: 1018, width: 73, height: 14 },
        landing_fees: { x: 2231, y: 1123, width: 73, height: 24 },
        depreciation_amortization: { x: 2231, y: 1232, width: 73, height: 18 },
        other_operating: { x: 2231, y: 1329, width: 73, height: 50 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 6.8, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'freight', col: 0, order: 1, type: 'source', label: 'Freight', value: 0.043, valueText: '$43M', notes: ['(4)% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.6, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.4, notes: ['+7% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.415, notes: ['5% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.033, valueText: '$33M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.3, notes: ['4% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.048, valueText: '($48M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 4, order: 3, type: 'cost', label: 'Salaries & benefits', value: 3.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel_oil', col: 4, order: 4, type: 'cost', label: 'Fuel & Oil', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 4, order: 5, type: 'cost', label: 'Maintenance', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 4, order: 6, type: 'cost', label: 'Landing fees', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 7, type: 'cost', label: 'D&A', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 1, order: 2, type: 'profit', label: '', value: 7.4, color: BG },
      { id: 'cost_of_revenue', col: 1, order: 3, type: 'cost', label: '', value: 0, color: BG },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 6.8, sourceWidth: 294, targetWidth: 293, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'freight', target: 'revenue', value: 0.043, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.6, sourceWidth: 28, targetWidth: 27, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.415, sourceWidth: 18, targetWidth: 17, y1: 488.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 7.1, sourceWidth: 305, targetWidth: 307, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 4, targetWidth: 8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.048, sourceWidth: 2, targetWidth: 4, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.033, sourceWidth: 4, targetWidth: 2, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 3.4, sourceWidth: 145, targetWidth: 147, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel_oil', value: 1.3, sourceWidth: 57, targetWidth: 59, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.3, sourceWidth: 13, targetWidth: 14, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.5, sourceWidth: 23, targetWidth: 24, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, sourceWidth: 17, targetWidth: 18, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 1.1, sourceWidth: 52, targetWidth: 50, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '西南航空 · 2025 财年第四季度',
        meta: {
          title: '西南航空 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +8%'] },
          freight: { label: '货运', notes: ['同比 (4)%'] },
          other_revenue: { label: '其他', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, salaries_benefits: { label: '薪酬与福利' },
          fuel_oil: { label: '燃油与石油' }, maintenance: { label: '维护' }, landing_fees: { label: '着陆费' },
          depreciation_amortization: { label: '折旧与摊销' }, other_operating: { label: '其他' },
          gross_profit: { label: '毛利润（未单列）' }, cost_of_revenue: { label: '收入成本（未单列）' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
