/* Delta Q1 FY26 income statement ($B), measured from the Build-bound Source. */
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
          expenses: ['运营', '费用'], net: '净亏损',
          salaries: '薪酬与福利（$4.5B）', fuel: '航空燃油（$2.7B）', ancillary: '辅助业务（$1.7B）',
          contracted: '合同服务（$1.2B）', landing: '着陆费（$0.9B）', maintenance: '维护（$0.7B）',
          da: '折旧与摊销（$0.6B）', regional: '支线承运人（$0.6B）', otherCost: '其他（$2.3B）',
          yoyPassenger: '同比 +7%', yoyCargo: '同比 +9%', yoyOther: '同比 +41%', yoyRevenue: '同比 +13%',
          margin3: '利润率 3%', ppDown1: '同比 (1 个百分点)', otherNonoperating: '其他（$0.8B）',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net loss',
          salaries: 'Salaries & benefits ($4.5B)', fuel: 'Aircraft fuel ($2.7B)', ancillary: 'Ancillary business ($1.7B)',
          contracted: 'Contracted services ($1.2B)', landing: 'Landing fees ($0.9B)', maintenance: 'Maintenance ($0.7B)',
          da: 'D&A ($0.6B)', regional: 'Regional carrier ($0.6B)', otherCost: 'Other ($2.3B)',
          yoyPassenger: '+7% Y/Y', yoyCargo: '+9% Y/Y', yoyOther: '+41% Y/Y', yoyRevenue: '+13% Y/Y',
          margin3: '3% margin', ppDown1: '(1pp) Y/Y', otherNonoperating: 'Other ($0.8B)',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text, x = RIGHT_LABEL_X) => block(x, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [
          sourceAmount(309, 391, t.yoyPassenger),
          block(251, 576, [name(t.passenger, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      cargo: {
        blocks: [
          sourceAmount(311, 826, t.yoyCargo),
          block(251, 897, [name(t.cargo, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      other_revenue: {
        blocks: [
          sourceAmount(311, 990, t.yoyOther),
          block(251, 1092, [name(t.other, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      revenue: {
        blocks: [block(931, 498, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoyRevenue)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1558, 350, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin3), note(t.ppDown1)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1555, 1101, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      net_loss: {
        blocks: [block(2071, 224, [name(t.net, 40, RED_LABEL), amount(39, RED_LABEL)], { lineGap: 10 })],
      },
      other_nonoperating: { blocks: [block(2230, 340, [name(t.otherNonoperating, 32, RED_LABEL)], { anchor: 'start' })] },
      salaries_benefits: { blocks: [terminal(492, t.salaries, 2229)] },
      aircraft_fuel: { blocks: [terminal(625, t.fuel, 2233)] },
      ancillary_business: { blocks: [terminal(749, t.ancillary, 2232)] },
      contracted_services: { blocks: [terminal(860, t.contracted, 2231)] },
      landing_fees: { blocks: [terminal(961, t.landing)] },
      maintenance: { blocks: [terminal(1058, t.maintenance)] },
      depreciation_amortization: { blocks: [terminal(1154, t.da)] },
      regional_carrier: { blocks: [terminal(1250, t.regional, 2234)] },
      other_operating: { blocks: [terminal(1344, t.otherCost)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'delta-q1-fy26',
    name: 'Delta · Q1 FY26',
    company: 'Delta Air Lines',
    meta: {
      company: 'Delta Air Lines',
      title: 'Delta Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/delta-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1338,
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
      nodes: {
        passenger: { x: 271, y: 488, width: 72, height: 222 },
        cargo: { x: 271, y: 923, width: 72, height: 1 },
        other_revenue: { x: 271, y: 1087, width: 72, height: 59 },
        revenue: { x: 895, y: 645, width: 72, height: 288 },
        operating_profit: { x: 1518, y: 538, width: 72, height: 7 },
        operating_expenses: { x: 1518, y: 807, width: 72, height: 277 },
        net_loss: { x: 2034, y: 332, width: 72, height: 4 },
        other_nonoperating: { x: 2141, y: 354, width: 72, height: 12 },
        salaries_benefits: { x: 2141, y: 468, width: 72, height: 81 },
        aircraft_fuel: { x: 2141, y: 619, width: 72, height: 47 },
        ancillary_business: { x: 2141, y: 752, width: 72, height: 27 },
        contracted_services: { x: 2141, y: 867, width: 72, height: 18 },
        landing_fees: { x: 2141, y: 970, width: 72, height: 15 },
        maintenance: { x: 2141, y: 1070, width: 72, height: 9 },
        depreciation_amortization: { x: 2141, y: 1167, width: 72, height: 10 },
        regional_carrier: { x: 2141, y: 1262, width: 72, height: 10 },
        other_operating: { x: 2141, y: 1342, width: 72, height: 40 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 12.3, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.2, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 3.3, notes: ['+41% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.9, notes: ['+13% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, notes: ['3% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 3, order: 0, type: 'cost', label: 'Net loss', value: -0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 4, order: 0, type: 'cost', label: 'Other', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 1, type: 'cost', label: 'Salaries & benefits', value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 3, order: 2, type: 'cost', label: 'Aircraft fuel', value: 2.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ancillary_business', col: 3, order: 3, type: 'cost', label: 'Ancillary business', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'contracted_services', col: 3, order: 4, type: 'cost', label: 'Contracted services', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 3, order: 5, type: 'cost', label: 'Landing fees', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 6, type: 'cost', label: 'Maintenance', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 7, type: 'cost', label: 'D&A', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional_carrier', col: 3, order: 8, type: 'cost', label: 'Regional carrier', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 9, type: 'cost', label: 'Other', value: 2.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only', value: 15.9, type: 'profit' },
      { id: 'cost_of_revenue', representation: 'data-only', value: 0, type: 'cost' },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 12.3, sourceWidth: 222, targetWidth: 222, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.2, sourceWidth: 1, targetWidth: 4, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 3.3, sourceWidth: 59, targetWidth: 62, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.5, sourceWidth: 9, targetWidth: 7, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 15.4, sourceWidth: 279, targetWidth: 277, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.5, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other_nonoperating', value: 0.3, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.5, sourceWidth: 81, targetWidth: 81, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 2.7, sourceWidth: 49, targetWidth: 47, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ancillary_business', value: 1.7, sourceWidth: 31, targetWidth: 27, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'contracted_services', value: 1.2, sourceWidth: 22, targetWidth: 18, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.9, sourceWidth: 16, targetWidth: 15, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.7, sourceWidth: 13, targetWidth: 9, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.6, sourceWidth: 11, targetWidth: 10, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'regional_carrier', value: 0.6, sourceWidth: 11, targetWidth: 10, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.3, sourceWidth: 43, targetWidth: 40, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '达美航空 · 2026 财年第一季度',
        meta: {
          title: '达美航空 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +7%'] },
          cargo: { label: '货运', notes: ['同比 +9%'] },
          other_revenue: { label: '其他', notes: ['同比 +41%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损' },
          other_nonoperating: { label: '其他' },
          salaries_benefits: { label: '薪酬与福利' },
          aircraft_fuel: { label: '航空燃油' },
          ancillary_business: { label: '辅助业务' },
          contracted_services: { label: '合同服务' },
          landing_fees: { label: '着陆费' },
          maintenance: { label: '维护' },
          depreciation_amortization: { label: '折旧与摊销' },
          regional_carrier: { label: '支线承运人' },
          other_operating: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
