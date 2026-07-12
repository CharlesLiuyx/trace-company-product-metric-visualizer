/* United Q4 FY25 income statement ($B), measured from the processed source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#063bb2';
  const BLUE_LINK = '#8399cc';
  const GREEN = '#1fa72c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bd49b';
  const RED = '#e00000';
  const RED_LABEL = '#9f1200';
  const RED_LINK = '#e18083';
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
          expenses: ['运营', '费用'], net: '净利润', tax: '税费（$0.3B）', interest: '利息（$0.1B）',
          salaries: '薪酬与福利（$4.5B）', fuel: '航空燃油（$2.9B）', distribution: '分销（$0.6B）',
          landing: '着陆费（$1.0B）', rent: '飞机租赁（$0.1B）', da: '折旧与摊销（$0.7B）',
          regional: '支线承运人（$0.7B）', maintenance: '维护（$0.9B）', otherCost: '其他（$2.6B）',
          yoy5: '同比 +5%', yoyCargo: '同比 (6)%', yoy9: '同比 +9%', margin9: '利润率 9%',
          ppDown1: '同比 (1 个百分点)', margin7: '利润率 7%', ppFlat: '同比 +0 个百分点',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax ($0.3B)', interest: 'Interest ($0.1B)',
          salaries: 'Salaries & benefits ($4.5B)', fuel: 'Aircraft fuel ($2.9B)', distribution: 'Distribution ($0.6B)',
          landing: 'Landing fees ($1.0B)', rent: 'Aircraft rent ($0.1B)', da: 'D&A ($0.7B)',
          regional: 'Regional carrier ($0.7B)', maintenance: 'Maintenance ($0.9B)', otherCost: 'Other ($2.6B)',
          yoy5: '+5% Y/Y', yoyCargo: '(6)% Y/Y', yoy9: '+9% Y/Y', margin9: '9% margin',
          ppDown1: '(1pp) Y/Y', margin7: '7% margin', ppFlat: '+0pp Y/Y',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [
          sourceAmount(303, 457, t.yoy5),
          block(230, 640, [name(t.passenger, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      cargo: {
        blocks: [
          sourceAmount(303, 837, t.yoyCargo),
          block(201, 922, [name(t.cargo, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      other_revenue: {
        blocks: [
          sourceAmount(303, 992, t.yoy9),
          block(201, 1078, [name(t.other, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      revenue: {
        blocks: [block(925, 564, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy5)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1556, 352, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin9), note(t.ppDown1)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1557, 1128, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [block(2374, 241, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin7), note(t.ppFlat)], { lineGap: 10 })],
      },
      tax: { blocks: [terminal(440, t.tax)] },
      interest: { blocks: [terminal(519, t.interest)] },
      salaries_benefits: { blocks: [terminal(600, t.salaries)] },
      aircraft_fuel: { blocks: [terminal(718, t.fuel)] },
      distribution: { blocks: [terminal(814, t.distribution)] },
      landing_fees: { blocks: [terminal(895, t.landing)] },
      aircraft_rent: { blocks: [terminal(976, t.rent)] },
      depreciation_amortization: { blocks: [terminal(1053, t.da)] },
      regional_carrier: { blocks: [terminal(1135, t.regional)] },
      maintenance: { blocks: [terminal(1215, t.maintenance)] },
      other_operating: { blocks: [terminal(1302, t.otherCost)] },
      gross_profit: { blocks: [] },
      cost_of_revenue: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'united-q4-fy25',
    name: 'United Airlines · Q4 FY25',
    company: 'United Airlines',
    meta: {
      company: 'United Airlines',
      title: 'United Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/united-q4-fy25.png', width: 2667, height: 1500 },
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
        key: 'united-company-lockup',
        href: 'data/assets/raster-annotations/united/company-lockup.png',
        x: 500,
        y: 295,
        width: 860,
        height: 165,
      },
    ],
    layout: {
      scale: 16,
      nodes: {
        passenger: { x: 267, y: 547, width: 70, height: 222.4 },
        cargo: { x: 267, y: 929, width: 70, height: 8 },
        other_revenue: { x: 267, y: 1084, width: 70, height: 17 },
        revenue: { x: 890, y: 707, width: 70, height: 246.4 },
        operating_profit: { x: 1519, y: 534, width: 70, height: 22.4 },
        operating_expenses: { x: 1519, y: 882, width: 70, height: 224 },
        net_profit: { x: 2145, y: 304, width: 70, height: 16 },
        tax: { x: 2145, y: 449, width: 70, height: 4.8 },
        interest: { x: 2145, y: 531, width: 70, height: 1.6 },
        salaries_benefits: { x: 2145, y: 581, width: 70, height: 72 },
        aircraft_fuel: { x: 2145, y: 708, width: 70, height: 46.4 },
        distribution: { x: 2145, y: 820, width: 70, height: 9.6 },
        landing_fees: { x: 2145, y: 899, width: 70, height: 16 },
        aircraft_rent: { x: 2145, y: 987, width: 70, height: 1.6 },
        depreciation_amortization: { x: 2145, y: 1060, width: 70, height: 11.2 },
        regional_carrier: { x: 2145, y: 1140, width: 70, height: 11.2 },
        maintenance: { x: 2145, y: 1220, width: 70, height: 14.4 },
        other_operating: { x: 2145, y: 1298, width: 70, height: 41.6 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 13.9, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.5, notes: ['(6)% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.0, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.4, notes: ['+5% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['9% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 1.0, notes: ['7% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 3, order: 2, type: 'cost', label: 'Interest', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 3, type: 'cost', label: 'Salaries & benefits', value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 3, order: 4, type: 'cost', label: 'Aircraft fuel', value: 2.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'distribution', col: 3, order: 5, type: 'cost', label: 'Distribution', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 3, order: 6, type: 'cost', label: 'Landing fees', value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_rent', col: 3, order: 7, type: 'cost', label: 'Aircraft rent', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 8, type: 'cost', label: 'D&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional_carrier', col: 3, order: 9, type: 'cost', label: 'Regional carrier', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 10, type: 'cost', label: 'Maintenance', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 11, type: 'cost', label: 'Other', value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 1, order: 2, type: 'profit', label: '', value: 15.4, color: BG },
      { id: 'cost_of_revenue', col: 1, order: 3, type: 'cost', label: '', value: 0, color: BG },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 13.9, sourceWidth: 222.4, targetWidth: 222.4, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.5, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.0, sourceWidth: 17, targetWidth: 16, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.4, sourceWidth: 22.4, targetWidth: 22.4, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 14.0, sourceWidth: 224, targetWidth: 224, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.0, sourceWidth: 16, targetWidth: 16, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 4.8, targetWidth: 4.8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 1.6, targetWidth: 1.6, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.5, sourceWidth: 72, targetWidth: 72, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 2.9, sourceWidth: 46.4, targetWidth: 46.4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distribution', value: 0.6, sourceWidth: 9.6, targetWidth: 9.6, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 1.0, sourceWidth: 16, targetWidth: 16, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_rent', value: 0.1, sourceWidth: 1.6, targetWidth: 1.6, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.7, sourceWidth: 11.2, targetWidth: 11.2, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'regional_carrier', value: 0.7, sourceWidth: 11.2, targetWidth: 11.2, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.9, sourceWidth: 14.4, targetWidth: 14.4, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.6, sourceWidth: 41.6, targetWidth: 41.6, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '联合航空 · 2025 财年第四季度',
        meta: {
          title: '联合航空 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +5%'] },
          cargo: { label: '货运', notes: ['同比 (6)%'] },
          other_revenue: { label: '其他', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          salaries_benefits: { label: '薪酬与福利' }, aircraft_fuel: { label: '航空燃油' },
          distribution: { label: '分销' }, landing_fees: { label: '着陆费' }, aircraft_rent: { label: '飞机租赁' },
          depreciation_amortization: { label: '折旧与摊销' }, regional_carrier: { label: '支线承运人' },
          maintenance: { label: '维护' }, other_operating: { label: '其他' },
          gross_profit: { label: '毛利润（未单列）' }, cost_of_revenue: { label: '收入成本（未单列）' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
