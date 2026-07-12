/* Delta Q4 FY25 income statement ($B), measured from the processed source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#003d7a';
  const BLUE_LINK = '#85a0bc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2240;

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
          passenger: '客运', cargo: '货运', other: '其他', revenue: '收入', operating: '营业利润',
          expenses: ['运营', '费用'], net: '净利润', tax: '税费（$0.3B）', interest: '利息（$0.2B）',
          salaries: '薪酬与福利（$4.6B）', fuel: '航空燃油（$2.4B）', ancillary: '辅助业务（$1.6B）',
          contracted: '合同服务（$1.2B）', landing: '着陆费（$0.9B）', maintenance: '维护（$0.6B）',
          da: '折旧与摊销（$0.6B）', regional: '支线承运人（$0.5B）', otherCost: '其他（$2.1B）',
          yoy1: '同比 +1%', yoyCargo: '同比 (1)%', yoy14: '同比 +14%', yoy3: '同比 +3%',
          margin9: '利润率 9%', ppDown2: '同比 (2 个百分点)', margin8: '利润率 8%', ppUp2: '同比 +2 个百分点',
          otherIncome: '其他 $0.2B',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax ($0.3B)', interest: 'Interest ($0.2B)',
          salaries: 'Salaries & benefits ($4.6B)', fuel: 'Aircraft fuel ($2.4B)', ancillary: 'Ancillary business ($1.6B)',
          contracted: 'Contracted services ($1.2B)', landing: 'Landing fees ($0.9B)', maintenance: 'Maintenance ($0.6B)',
          da: 'D&A ($0.6B)', regional: 'Regional carrier ($0.5B)', otherCost: 'Other ($2.1B)',
          yoy1: '+1% Y/Y', yoyCargo: '(1)% Y/Y', yoy14: '+14% Y/Y', yoy3: '+3% Y/Y',
          margin9: '9% margin', ppDown2: '(2pp) Y/Y', margin8: '8% margin', ppUp2: '+2pp Y/Y',
          otherIncome: 'Other $0.2B',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [
          sourceAmount(309, 391, t.yoy1),
          block(251, 579, [name(t.passenger, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      cargo: {
        blocks: [
          sourceAmount(309, 823, t.yoyCargo),
          block(251, 906, [name(t.cargo, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      other_revenue: {
        blocks: [
          sourceAmount(309, 979, t.yoy14),
          block(251, 1081, [name(t.other, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      revenue: {
        blocks: [block(931, 482, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy3)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1554, 298, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin9), note(t.ppDown2)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1554, 1117, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      other_income: { blocks: [block(zh ? 1978 : 1968, 218, [name(t.otherIncome, 32, GREEN_LABEL)], { anchor: 'start' })] },
      net_profit: {
        blocks: [block(2351, 220, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin8), note(t.ppUp2)], { lineGap: 10 })],
      },
      tax: { blocks: [terminal(421, t.tax)] },
      interest: { blocks: [terminal(517, t.interest)] },
      salaries_benefits: { blocks: [terminal(651, t.salaries)] },
      aircraft_fuel: { blocks: [terminal(796, t.fuel)] },
      ancillary_business: { blocks: [terminal(892, t.ancillary)] },
      contracted_services: { blocks: [terminal(977, t.contracted)] },
      landing_fees: { blocks: [terminal(1055, t.landing)] },
      maintenance: { blocks: [terminal(1129, t.maintenance)] },
      depreciation_amortization: { blocks: [terminal(1197, t.da)] },
      regional_carrier: { blocks: [terminal(1263, t.regional)] },
      other_operating: { blocks: [terminal(1342, t.otherCost)] },
      gross_profit: { blocks: [] },
      cost_of_revenue: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'delta-q4-fy25',
    name: 'Delta · Q4 FY25',
    company: 'Delta Air Lines',
    meta: {
      company: 'Delta Air Lines',
      title: 'Delta Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/delta-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2055,
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
        key: 'delta-company-lockup',
        href: 'data/assets/raster-annotations/delta/company-lockup.png',
        x: 470,
        y: 270,
        width: 850,
        height: 145,
      },
    ],
    layout: {
      scale: 20.5,
      nodes: {
        passenger: { x: 271, y: 491, width: 72, height: 264.45 },
        cargo: { x: 271, y: 925, width: 72, height: 4.1 },
        other_revenue: { x: 271, y: 1078, width: 72, height: 57.4 },
        revenue: { x: 895, y: 633, width: 72, height: 328 },
        operating_profit: { x: 1518, y: 489, width: 72, height: 30.75 },
        operating_expenses: { x: 1518, y: 806, width: 72, height: 297.25 },
        other_income: { x: 2035, y: 267, width: 44, height: 4.1 },
        net_profit: { x: 2141, y: 285, width: 72, height: 24.6 },
        tax: { x: 2141, y: 435, width: 72, height: 6.15 },
        interest: { x: 2141, y: 533, width: 72, height: 4.1 },
        salaries_benefits: { x: 2141, y: 627, width: 72, height: 94.3 },
        aircraft_fuel: { x: 2141, y: 789, width: 72, height: 49.2 },
        ancillary_business: { x: 2141, y: 893, width: 72, height: 32.8 },
        contracted_services: { x: 2141, y: 983, width: 72, height: 24.6 },
        landing_fees: { x: 2141, y: 1065, width: 72, height: 18.45 },
        maintenance: { x: 2141, y: 1139, width: 72, height: 12.3 },
        depreciation_amortization: { x: 2141, y: 1210, width: 72, height: 12.3 },
        regional_carrier: { x: 2141, y: 1277, width: 72, height: 10.25 },
        other_operating: { x: 2141, y: 1338, width: 72, height: 43.05 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 12.9, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.2, notes: ['(1)% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 2.8, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 16.0, valueText: '$16.0B', notes: ['+3% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['9% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 3, order: 1, type: 'profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 2, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 3, order: 3, type: 'cost', label: 'Interest', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 4, type: 'cost', label: 'Salaries & benefits', value: 4.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 3, order: 5, type: 'cost', label: 'Aircraft fuel', value: 2.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ancillary_business', col: 3, order: 6, type: 'cost', label: 'Ancillary business', value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'contracted_services', col: 3, order: 7, type: 'cost', label: 'Contracted services', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 3, order: 8, type: 'cost', label: 'Landing fees', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 9, type: 'cost', label: 'Maintenance', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 10, type: 'cost', label: 'D&A', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional_carrier', col: 3, order: 11, type: 'cost', label: 'Regional carrier', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 12, type: 'cost', label: 'Other', value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 1, order: 2, type: 'profit', label: '', value: 16.0, color: BG },
      { id: 'cost_of_revenue', col: 1, order: 3, type: 'cost', label: '', value: 0, color: BG },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 12.9, sourceWidth: 264.45, targetWidth: 264.45, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.2, sourceWidth: 4.1, targetWidth: 4.1, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 2.8, sourceWidth: 57.4, targetWidth: 59.45, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.5, sourceWidth: 30.75, targetWidth: 30.75, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 14.5, sourceWidth: 297.25, targetWidth: 297.25, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.0, sourceWidth: 20.5, targetWidth: 20.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 4.1, targetWidth: 4.1, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 6.15, targetWidth: 6.15, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 4.1, targetWidth: 4.1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.6, sourceWidth: 94.3, targetWidth: 94.3, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 2.4, sourceWidth: 49.2, targetWidth: 49.2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ancillary_business', value: 1.6, sourceWidth: 32.8, targetWidth: 32.8, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'contracted_services', value: 1.2, sourceWidth: 24.6, targetWidth: 24.6, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.9, sourceWidth: 18.45, targetWidth: 18.45, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.6, sourceWidth: 12.3, targetWidth: 12.3, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.6, sourceWidth: 12.3, targetWidth: 12.3, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'regional_carrier', value: 0.5, sourceWidth: 10.25, targetWidth: 10.25, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.1, sourceWidth: 43.05, targetWidth: 43.05, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '达美航空 · 2025 财年第四季度',
        meta: {
          title: '达美航空 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +1%'] },
          cargo: { label: '货运', notes: ['同比 (1)%'] },
          other_revenue: { label: '其他', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +2 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          salaries_benefits: { label: '薪酬与福利' }, aircraft_fuel: { label: '航空燃油' },
          ancillary_business: { label: '辅助业务' }, contracted_services: { label: '合同服务' },
          landing_fees: { label: '着陆费' }, maintenance: { label: '维护' },
          depreciation_amortization: { label: '折旧与摊销' }, regional_carrier: { label: '支线承运人' },
          other_operating: { label: '其他' }, gross_profit: { label: '毛利润（未单列）' },
          cost_of_revenue: { label: '收入成本（未单列）' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
