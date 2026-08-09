/* Delta Q2 FY26 income statement ($B), measured from the Build-bound Source. */
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
          expenses: ['运营', '费用'], net: '净利润', taxInterest: '税费与利息（$0.5B）',
          salaries: '薪酬与福利（$4.8B）', fuel: '航空燃油（$4.1B）', ancillary: '辅助业务（$2.1B）',
          contracted: '合同服务（$1.3B）', landing: '着陆费（$1.0B）', maintenance: '维护（$0.7B）',
          da: '折旧与摊销（$0.7B）', regional: '支线承运人（$0.7B）', otherCost: '其他（$2.7B）',
          yoyPassenger: '同比 +13%', yoyCargo: '同比 +39%', yoyOther: '同比 +50%', yoyRevenue: '同比 +19%',
          margin9: '利润率 9%', ppDown3: '同比 (3 个百分点)', margin8: '利润率 8%', ppDown5: '同比 (5 个百分点)',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], net: 'Net profit', taxInterest: 'Tax & interest ($0.5B)',
          salaries: 'Salaries & benefits ($4.8B)', fuel: 'Aircraft fuel ($4.1B)', ancillary: 'Ancillary business ($2.1B)',
          contracted: 'Contracted services ($1.3B)', landing: 'Landing fees ($1.0B)', maintenance: 'Maintenance ($0.7B)',
          da: 'D&A ($0.7B)', regional: 'Regional carrier ($0.7B)', otherCost: 'Other ($2.7B)',
          yoyPassenger: '+13% Y/Y', yoyCargo: '+39% Y/Y', yoyOther: '+50% Y/Y', yoyRevenue: '+19% Y/Y',
          margin9: '9% margin', ppDown3: '(3pp) Y/Y', margin8: '8% margin', ppDown5: '(5pp) Y/Y',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text, x = RIGHT_LABEL_X) => block(x, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    const taxInterestLine = {
      ...name(t.taxInterest, 32, RED_LABEL),
      ...(zh ? {} : { textLength: 288 }),
    };
    return {
      passenger: {
        blocks: [
          sourceAmount(309, 408, t.yoyPassenger),
          block(251, 588, [name(t.passenger, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      cargo: {
        blocks: [
          sourceAmount(307, 821, t.yoyCargo),
          block(215, 893, [name(t.cargo, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      other_revenue: {
        blocks: [
          sourceAmount(307, 994, t.yoyOther),
          block(215, 1089, [name(t.other, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      revenue: {
        blocks: [block(931, 512, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoyRevenue)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1551.5, 292, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin9), note(t.ppDown3)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1555, 1044, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      other_income: {
        blocks: [block(2039, 199, [name(t.other, 32, GREEN_LABEL), amount(32, GREEN_LABEL)], { lineGap: 8 })],
      },
      net_profit: {
        blocks: [block(2398, 216, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin8), note(t.ppDown5)], { lineGap: 10 })],
      },
      tax_interest: { blocks: [block(zh ? RIGHT_LABEL_X : 2242, 416, [taxInterestLine], { anchor: 'start', lineGap: 8 })] },
      salaries_benefits: { blocks: [terminal(558, t.salaries, 2229)] },
      aircraft_fuel: { blocks: [terminal(686, t.fuel, 2233)] },
      ancillary_business: { blocks: [terminal(804, t.ancillary, 2232)] },
      contracted_services: { blocks: [terminal(901, t.contracted, 2231)] },
      landing_fees: { blocks: [terminal(1000, t.landing)] },
      maintenance: { blocks: [terminal(1085, t.maintenance)] },
      depreciation_amortization: { blocks: [terminal(1165, t.da)] },
      regional_carrier: { blocks: [terminal(1250, t.regional, 2234)] },
      other_operating: { blocks: [terminal(1344, t.otherCost)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'delta-q2-fy26',
    name: 'Delta · Q2 FY26',
    company: 'Delta Air Lines',
    meta: {
      company: 'Delta Air Lines',
      title: 'Delta Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/delta-q2-fy26.png', width: 2667, height: 1500 },
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
        passenger: { x: 271, y: 505, width: 72, height: 212 },
        cargo: { x: 271, y: 919, width: 72, height: 2 },
        other_revenue: { x: 271, y: 1090, width: 72, height: 52 },
        revenue: { x: 895, y: 659, width: 72, height: 270 },
        operating_profit: { x: 1518, y: 471, width: 72, height: 24 },
        operating_expenses: { x: 1518, y: 784, width: 72, height: 244 },
        other_income: { x: 2004, y: 285, width: 72, height: 2 },
        net_profit: { x: 2141, y: 292, width: 72, height: 20 },
        tax_interest: { x: 2141, y: 432, width: 72, height: 5 },
        salaries_benefits: { x: 2141, y: 541, width: 72, height: 64 },
        aircraft_fuel: { x: 2141, y: 674, width: 72, height: 55 },
        ancillary_business: { x: 2141, y: 805, width: 72, height: 28 },
        contracted_services: { x: 2141, y: 911, width: 72, height: 15 },
        landing_fees: { x: 2141, y: 1011, width: 72, height: 12 },
        maintenance: { x: 2141, y: 1097, width: 72, height: 7 },
        depreciation_amortization: { x: 2141, y: 1178, width: 72, height: 7 },
        regional_carrier: { x: 2141, y: 1262, width: 72, height: 7 },
        other_operating: { x: 2141, y: 1344, width: 72, height: 34 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 15.6, notes: ['+13% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.3, notes: ['+39% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 3.9, notes: ['+50% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 19.8, notes: ['+19% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, notes: ['9% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['8% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_interest', col: 4, order: 1, type: 'cost', label: 'Tax & interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 4, order: 2, type: 'cost', label: 'Salaries & benefits', value: 4.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 4, order: 3, type: 'cost', label: 'Aircraft fuel', value: 4.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ancillary_business', col: 4, order: 4, type: 'cost', label: 'Ancillary business', value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'contracted_services', col: 4, order: 5, type: 'cost', label: 'Contracted services', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 4, order: 6, type: 'cost', label: 'Landing fees', value: 1.0, valueText: '$1.0B', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 4, order: 7, type: 'cost', label: 'Maintenance', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 8, type: 'cost', label: 'D&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional_carrier', col: 4, order: 9, type: 'cost', label: 'Regional carrier', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 10, type: 'cost', label: 'Other', value: 2.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only', value: 19.8, type: 'profit' },
      { id: 'cost_of_revenue', representation: 'data-only', value: 0, type: 'cost' },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 15.6, sourceWidth: 212, targetWidth: 212, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.3, sourceWidth: 2, targetWidth: 3, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 3.9, sourceWidth: 52, targetWidth: 55, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.9, sourceWidth: 26, targetWidth: 24, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 17.9, sourceWidth: 244, targetWidth: 244, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.3, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_interest', value: 0.5, sourceWidth: 6, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.8, sourceWidth: 65, targetWidth: 64, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 4.1, sourceWidth: 55, targetWidth: 55, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ancillary_business', value: 2.1, sourceWidth: 28, targetWidth: 28, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'contracted_services', value: 1.3, sourceWidth: 18, targetWidth: 15, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 1.0, sourceWidth: 14, targetWidth: 12, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.7, sourceWidth: 10, targetWidth: 7, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.7, sourceWidth: 9, targetWidth: 7, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'regional_carrier', value: 0.7, sourceWidth: 9, targetWidth: 7, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.7, sourceWidth: 36, targetWidth: 34, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '达美航空 · 2026 财年第二季度',
        meta: {
          title: '达美航空 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +13%'] },
          cargo: { label: '货运', notes: ['同比 +39%'] },
          other_revenue: { label: '其他', notes: ['同比 +50%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (5 个百分点)'] },
          tax_interest: { label: '税费与利息' },
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
