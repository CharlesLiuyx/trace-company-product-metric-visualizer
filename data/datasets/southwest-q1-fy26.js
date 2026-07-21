/* Southwest Q1 FY26 income statement ($B), measured from the processing Source. */
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
  const RIGHT_LABEL_X = 2447;

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
          expenses: ['运营', '费用'], net: '净利润', tax: '税费', salaries: ['薪酬', '与福利'],
          fuel: '燃油与石油', maintenance: '维护', landing: '着陆费', da: '折旧与摊销',
          yoy13: '同比 +13%', yoy7: '同比 +7%', margin5: '利润率 5%', margin3: '利润率 3%',
          ppUp8: '同比 +8 个百分点', ppUp5: '同比 +5 个百分点',
        }
      : {
          passenger: 'Passenger', freight: 'Freight', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', salaries: ['Salaries', '& benefits'],
          fuel: 'Fuel & Oil', maintenance: 'Maintenance', landing: 'Landing fees', da: 'D&A',
          yoy13: '+13% Y/Y', yoy7: '+7% Y/Y', margin5: '5% margin', margin3: '3% margin',
          ppUp8: '+8pp Y/Y', ppUp5: '+5pp Y/Y',
        };
    const sourceAmount = (top, yoy) => block(399, top, [amount(39, BLUE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL), amount(31, RED_LABEL)], { lineGap: 8 });
    return {
      passenger: { blocks: [sourceAmount(402, t.yoy13), block(205, 621, [name(t.passenger, 40, BLUE)])] },
      freight: { blocks: [sourceAmount(858, t.yoy7), block(236, 937, [name(t.freight, 40, BLUE)])] },
      other_revenue: { blocks: [sourceAmount(1015, t.yoy7), block(236, 1107, [name(t.other, 40, BLUE)])] },
      revenue: { blocks: [block(1021, 502, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy13)], { lineGap: 11 })] },
      operating_profit: { blocks: [block(1643, 311, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin5), note(t.ppUp8)], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1643, 1136, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 242, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin3), note(t.ppUp5)], { lineGap: 10 })] },
      tax: { blocks: [terminal(433, t.tax)] },
      other_expense: { blocks: [terminal(550, t.other)] },
      salaries_benefits: { blocks: [block(RIGHT_LABEL_X, 670, [...t.salaries.map((text) => name(text, 32, RED_LABEL)), amount(31, RED_LABEL)], { lineGap: 8 })] },
      fuel_oil: { blocks: [terminal(876, t.fuel)] },
      maintenance: { blocks: [terminal(995, t.maintenance)] },
      landing_fees: { blocks: [terminal(1102, t.landing)] },
      depreciation_amortization: { blocks: [terminal(1207, t.da)] },
      other_operating: { blocks: [terminal(1316, t.other)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'southwest-q1-fy26',
    name: 'Southwest Airlines · Q1 FY26',
    company: 'Southwest Airlines',
    meta: {
      company: 'Southwest Airlines',
      title: 'Southwest Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/southwest-q1-fy26.png', width: 2667, height: 1500 },
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
      scale: 44.9,
      nodes: {
        passenger: { x: 364, y: 500, width: 73, height: 295 },
        freight: { x: 364, y: 956, width: 73, height: 5 },
        other_revenue: { x: 364, y: 1118, width: 73, height: 27 },
        revenue: { x: 986, y: 644, width: 73, height: 325 },
        operating_profit: { x: 1609, y: 491, width: 73, height: 14 },
        operating_expenses: { x: 1609, y: 809, width: 73, height: 311 },
        net_profit: { x: 2232, y: 310, width: 73, height: 9 },
        tax: { x: 2232, y: 466, width: 73, height: 5 },
        other_expense: { x: 2232, y: 583, width: 73, height: 5 },
        salaries_benefits: { x: 2232, y: 652, width: 73, height: 148 },
        fuel_oil: { x: 2232, y: 883, width: 73, height: 59 },
        maintenance: { x: 2232, y: 1028, width: 73, height: 10 },
        landing_fees: { x: 2232, y: 1128, width: 73, height: 25 },
        depreciation_amortization: { x: 2232, y: 1237, width: 73, height: 17 },
        other_operating: { x: 2232, y: 1332, width: 73, height: 44 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only' },
      { id: 'cost_of_revenue', representation: 'data-only' },
    ],
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 6.6, notes: ['+13% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'freight', col: 0, order: 1, type: 'source', label: 'Freight', value: 0.044, valueText: '$44M', notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.6, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.2, notes: ['+13% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['5% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['3% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.045, valueText: '($45M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 4, order: 3, type: 'cost', label: 'Salaries & benefits', value: 3.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel_oil', col: 4, order: 4, type: 'cost', label: 'Fuel & Oil', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 4, order: 5, type: 'cost', label: 'Maintenance', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 4, order: 6, type: 'cost', label: 'Landing fees', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 7, type: 'cost', label: 'D&A', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 6.6, sourceWidth: 295, targetWidth: 294, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'freight', target: 'revenue', value: 0.044, sourceWidth: 5, targetWidth: 4, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.6, sourceWidth: 27, targetWidth: 27, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.3, sourceWidth: 14, targetWidth: 14, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 6.9, sourceWidth: 311, targetWidth: 311, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 8, targetWidth: 9, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 3, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.045, sourceWidth: 3, targetWidth: 5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 3.3, sourceWidth: 147, targetWidth: 148, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel_oil', value: 1.4, sourceWidth: 62, targetWidth: 59, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.3, sourceWidth: 13, targetWidth: 10, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.6, sourceWidth: 27, targetWidth: 25, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, sourceWidth: 18, targetWidth: 17, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 1.0, sourceWidth: 44, targetWidth: 44, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '西南航空 · 2026 财年第一季度',
        meta: {
          title: '西南航空 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +13%'] },
          freight: { label: '货运', notes: ['同比 +7%'] },
          other_revenue: { label: '其他', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +8 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +5 个百分点'] },
          tax: { label: '税费' }, other_expense: { label: '其他' }, salaries_benefits: { label: '薪酬与福利' },
          fuel_oil: { label: '燃油与石油' }, maintenance: { label: '维护' }, landing_fees: { label: '着陆费' },
          depreciation_amortization: { label: '折旧与摊销' }, other_operating: { label: '其他' },
        },
        nonNodeMetrics: {
          gross_profit: { label: '毛利润（未单列）' },
          cost_of_revenue: { label: '收入成本（未单列）' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
