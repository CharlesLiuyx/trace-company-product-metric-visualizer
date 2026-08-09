/* Southwest Q2 FY26 income statement ($B), measured from the processing Source. */
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
          expenses: ['运营', '费用'], net: '净利润', salaries: ['薪酬', '与福利'], fuel: '燃油与石油',
          maintenance: '维护', landing: '着陆费', da: '折旧与摊销', yoy17: '同比 +17%',
          yoy14: '同比 +14%', yoy11: '同比 +11%', yoy16: '同比 +16%', margin3: '利润率 3%',
          ppFlat: '同比 +0 个百分点', ppFlatParen: '同比（0 个百分点）',
        }
      : {
          passenger: 'Passenger', freight: 'Freight', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', salaries: ['Salaries', '& benefits'], fuel: 'Fuel & Oil',
          maintenance: 'Maintenance', landing: 'Landing fees', da: 'D&A', yoy17: '+17% Y/Y', yoy14: '+14% Y/Y',
          yoy11: '+11% Y/Y', yoy16: '+16% Y/Y', margin3: '3% margin', ppFlat: '+0pp Y/Y', ppFlatParen: '(0pp) Y/Y',
        };
    const sourceAmount = (top, yoy) => block(399, top, [amount(39, BLUE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL), amount(31, RED_LABEL)], { lineGap: 8 });
    return {
      passenger: { blocks: [sourceAmount(410, t.yoy17), block(205, 641, [name(t.passenger, 40, BLUE)])] },
      freight: { blocks: [sourceAmount(878, t.yoy14), block(236, 957, [name(t.freight, 40, BLUE)])] },
      other_revenue: { blocks: [sourceAmount(1015, t.yoy11), block(236, 1107, [name(t.other, 40, BLUE)])] },
      revenue: { blocks: [block(1021, 512, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy16)], { lineGap: 11 })] },
      operating_profit: { blocks: [block(1643, 327, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin3), note(t.ppFlat)], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1643, 1156, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 268, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin3), note(t.ppFlatParen)], { lineGap: 10 })] },
      other_expense: { blocks: [terminal(453, t.other)] },
      salaries_benefits: { blocks: [block(RIGHT_LABEL_X, 575, [...t.salaries.map((text) => name(text, 32, RED_LABEL)), amount(31, RED_LABEL)], { lineGap: 8 })] },
      fuel_oil: { blocks: [terminal(795, t.fuel)] },
      maintenance: { blocks: [terminal(926, t.maintenance)] },
      landing_fees: { blocks: [terminal(1044, t.landing)] },
      depreciation_amortization: { blocks: [terminal(1155, t.da)] },
      other_operating: { blocks: [terminal(1264, t.other)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'southwest-q2-fy26',
    name: 'Southwest Airlines · Q2 FY26',
    company: 'Southwest Airlines',
    meta: {
      company: 'Southwest Airlines',
      title: 'Southwest Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/southwest-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 40.95,
      nodes: {
        passenger: { x: 363, y: 508, width: 73, height: 318 },
        freight: { x: 363, y: 979, width: 73, height: 3 },
        other_revenue: { x: 363, y: 1121, width: 73, height: 25 },
        revenue: { x: 985, y: 662, width: 73, height: 344 },
        operating_profit: { x: 1608, y: 511, width: 73, height: 11 },
        operating_expenses: { x: 1608, y: 811, width: 73, height: 333 },
        net_profit: { x: 2231, y: 341, width: 73, height: 7 },
        other_expense: { x: 2231, y: 496, width: 73, height: 4 },
        salaries_benefits: { x: 2231, y: 556, width: 73, height: 142 },
        fuel_oil: { x: 2231, y: 786, width: 73, height: 90 },
        maintenance: { x: 2231, y: 955, width: 73, height: 11 },
        landing_fees: { x: 2231, y: 1061, width: 73, height: 25 },
        depreciation_amortization: { x: 2231, y: 1175, width: 73, height: 16 },
        other_operating: { x: 2231, y: 1280, width: 73, height: 45 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only' },
      { id: 'cost_of_revenue', representation: 'data-only' },
    ],
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 7.7, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'freight', col: 0, order: 1, type: 'source', label: 'Freight', value: 0.05, valueText: '$50M', notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.6, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.4, notes: ['+16% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['3% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['3% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_expense', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 4, order: 2, type: 'cost', label: 'Salaries & benefits', value: 3.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel_oil', col: 4, order: 3, type: 'cost', label: 'Fuel & Oil', value: 2.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 4, order: 4, type: 'cost', label: 'Maintenance', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 4, order: 5, type: 'cost', label: 'Landing fees', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 6, type: 'cost', label: 'D&A', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 7, type: 'cost', label: 'Other', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 7.7, sourceWidth: 318, targetWidth: 317, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'freight', target: 'revenue', value: 0.05, sourceWidth: 3, targetWidth: 2, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.6, sourceWidth: 25, targetWidth: 25, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.3, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 8.1, sourceWidth: 333, targetWidth: 333, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 3.5, sourceWidth: 144, targetWidth: 142, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel_oil', value: 2.2, sourceWidth: 90, targetWidth: 90, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.3, sourceWidth: 12, targetWidth: 11, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.6, sourceWidth: 25, targetWidth: 25, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, sourceWidth: 17, targetWidth: 16, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 1.1, sourceWidth: 45, targetWidth: 45, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '西南航空 · 2026 财年第二季度',
        meta: {
          title: '西南航空 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +17%'] },
          freight: { label: '货运', notes: ['同比 +14%'] },
          other_revenue: { label: '其他', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比（0 个百分点）'] },
          other_expense: { label: '其他' }, salaries_benefits: { label: '薪酬与福利' },
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
