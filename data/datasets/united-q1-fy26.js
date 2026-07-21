/* United Q1 FY26 income statement ($B), measured from the Build-bound Source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const AMOUNT = '#003d79';
  const BLUE = '#0030a4';
  const BLUE_LINK = '#859bce';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2238;

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
          expenses: ['运营', '费用'], net: '净利润', tax: '税费（$0.2B）', interest: '利息（$0.1B）',
          salaries: '薪酬与福利（$4.6B）', fuel: '航空燃油（$3.0B）', distribution: '分销（$0.5B）',
          rent: '飞机租赁（$0.1B）', landing: '着陆费（$0.9B）', da: '折旧与摊销（$0.8B）',
          regional: '支线承运人（$0.7B）', maintenance: '维护（$0.9B）', otherCost: '其他（$2.2B）',
          yoy11: '同比 +11%', yoyCargo: '同比 (2)%', margin7: '利润率 7%', pp2: '同比 +2 个百分点',
          margin5: '利润率 5%',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax ($0.2B)', interest: 'Interest ($0.1B)',
          salaries: 'Salaries & benefits ($4.6B)', fuel: 'Aircraft fuel ($3.0B)', distribution: 'Distribution ($0.5B)',
          rent: 'Aircraft rent ($0.1B)', landing: 'Landing fees ($0.9B)', da: 'D&A ($0.8B)',
          regional: 'Regional carrier ($0.7B)', maintenance: 'Maintenance ($0.9B)', otherCost: 'Other ($2.2B)',
          yoy11: '+11% Y/Y', yoyCargo: '(2)% Y/Y', margin7: '7% margin', pp2: '+2pp Y/Y', margin5: '5% margin',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, AMOUNT), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [
          sourceAmount(303, 402, t.yoy11),
          block(230, 600, [name(t.passenger, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      cargo: {
        blocks: [
          sourceAmount(303, 857, t.yoyCargo),
          block(230, 935, [name(t.cargo, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      other_revenue: {
        blocks: [
          sourceAmount(303, 1026, t.yoy11),
          block(230, 1109, [name(t.other, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      revenue: {
        blocks: [block(921, 554, [name(t.revenue, 40, AMOUNT), amount(39, AMOUNT), note(t.yoy11)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1550, 342, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin7), note(t.pp2)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1550, 1135, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [block(2355.5, 227, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin5), note(t.pp2)], { lineGap: 10 })],
      },
      tax: { blocks: [block(2271, 420, [name(t.tax, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 })] },
      interest: { blocks: [terminal(509, t.interest)] },
      salaries_benefits: { blocks: [terminal(625, t.salaries)] },
      aircraft_fuel: { blocks: [terminal(759, t.fuel)] },
      distribution: { blocks: [terminal(853, t.distribution)] },
      aircraft_rent: { blocks: [terminal(930, t.rent)] },
      landing_fees: { blocks: [terminal(1010, t.landing)] },
      depreciation_amortization: { blocks: [terminal(1092, t.da)] },
      regional_carrier: { blocks: [terminal(1172, t.regional)] },
      maintenance: { blocks: [terminal(1252, t.maintenance)] },
      other_operating: { blocks: [terminal(1342, t.otherCost)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'united-q1-fy26',
    name: 'United Airlines · Q1 FY26',
    company: 'United Airlines',
    meta: {
      company: 'United Airlines',
      title: 'United Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/united-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 202,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2150,
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
        hub: { node: BLUE, label: AMOUNT },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    rasterAnnotations: [
      {
        key: 'united-company-lockup',
        href: 'data/assets/raster-annotations/united/company-lockup.png',
        x: 500,
        y: 295,
        width: 860,
        height: 165,
      },
    ],
    layout: {
      scale: 1,
      nodes: {
        passenger: { x: 269, y: 493, width: 71, height: 262 },
        cargo: { x: 269, y: 952, width: 71, height: 7 },
        other_revenue: { x: 269, y: 1128, width: 71, height: 17 },
        revenue: { x: 891, y: 695, width: 71, height: 289 },
        operating_profit: { x: 1514, y: 523, width: 72, height: 18 },
        operating_expenses: { x: 1514, y: 849, width: 72, height: 269 },
        net_profit: { x: 2137, y: 304, width: 71, height: 12 },
        tax: { x: 2137, y: 429, width: 71, height: 4 },
        interest: { x: 2137, y: 519, width: 71, height: 3 },
        salaries_benefits: { x: 2137, y: 596, width: 71, height: 89 },
        aircraft_fuel: { x: 2137, y: 742, width: 71, height: 59 },
        distribution: { x: 2137, y: 862, width: 71, height: 8 },
        aircraft_rent: { x: 2137, y: 941, width: 71, height: 3 },
        landing_fees: { x: 2137, y: 1016, width: 71, height: 17 },
        depreciation_amortization: { x: 2137, y: 1099, width: 71, height: 12 },
        regional_carrier: { x: 2137, y: 1179, width: 71, height: 12 },
        maintenance: { x: 2137, y: 1256, width: 71, height: 15 },
        other_operating: { x: 2137, y: 1335, width: 71, height: 40 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 13.2, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.4, notes: ['(2)% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.6, notes: ['+11% Y/Y'], color: BLUE, labelColor: AMOUNT, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.0, valueText: '$1.0B', notes: ['7% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 13.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 0.7, notes: ['5% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 3, order: 2, type: 'cost', label: 'Interest', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 3, type: 'cost', label: 'Salaries & benefits', value: 4.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 3, order: 4, type: 'cost', label: 'Aircraft fuel', value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'distribution', col: 3, order: 5, type: 'cost', label: 'Distribution', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_rent', col: 3, order: 6, type: 'cost', label: 'Aircraft rent', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 3, order: 7, type: 'cost', label: 'Landing fees', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 8, type: 'cost', label: 'D&A', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional_carrier', col: 3, order: 9, type: 'cost', label: 'Regional carrier', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 10, type: 'cost', label: 'Maintenance', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 11, type: 'cost', label: 'Other', value: 2.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 13.2, sourceWidth: 262, targetWidth: 262, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.4, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.0, sourceWidth: 17, targetWidth: 20, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.0, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 13.6, sourceWidth: 271, targetWidth: 269, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 3, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.6, sourceWidth: 90.36, targetWidth: 89, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 3.0, sourceWidth: 58.91, targetWidth: 59, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distribution', value: 0.5, sourceWidth: 9.82, targetWidth: 8, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_rent', value: 0.1, sourceWidth: 1.96, targetWidth: 3, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.9, sourceWidth: 17.67, targetWidth: 17, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.8, sourceWidth: 15.71, targetWidth: 12, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'regional_carrier', value: 0.7, sourceWidth: 13.75, targetWidth: 12, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.9, sourceWidth: 17.67, targetWidth: 15, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.2, sourceWidth: 43.15, targetWidth: 40, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '联合航空 · 2026 财年第一季度',
        meta: {
          title: '联合航空 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +11%'] },
          cargo: { label: '货运', notes: ['同比 (2)%'] },
          other_revenue: { label: '其他', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +2 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          salaries_benefits: { label: '薪酬与福利' }, aircraft_fuel: { label: '航空燃油' },
          distribution: { label: '分销' }, aircraft_rent: { label: '飞机租赁' }, landing_fees: { label: '着陆费' },
          depreciation_amortization: { label: '折旧与摊销' }, regional_carrier: { label: '支线承运人' },
          maintenance: { label: '维护' }, other_operating: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
