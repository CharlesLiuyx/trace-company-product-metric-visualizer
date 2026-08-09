/* United Q2 FY26 income statement ($B), measured from the Build-bound Source. */
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

  const otherIncomeAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income">
      <text x="1923" y="254" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2026" y="254" font-size="32" font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;

  const labels = (zh) => {
    const t = zh
      ? {
          passenger: '客运', cargo: '货运', other: '其他', revenue: '收入', operating: '营业利润',
          expenses: ['运营', '费用'], otherIncome: '其他', net: '净利润', tax: '税费（$0.2B）',
          interest: '利息（$0.2B）', fuel: '航空燃油（$5.1B）', salaries: '薪酬与福利（$4.7B）',
          distribution: '分销（$0.6B）', rent: '飞机租赁（$0.1B）', landing: '着陆费（$1.1B）',
          da: '折旧与摊销（$0.8B）', regional: '支线承运人（$0.7B）', maintenance: '维护（$0.9B）',
          otherCost: '其他（$2.6B）', yoy16: '同比 +16%', yoy23: '同比 +23%', yoy8: '同比 +8%',
          margin6: '利润率 6%', margin5: '利润率 5%', ppDown2: '同比 (2 个百分点)',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', other: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], otherIncome: 'Other', net: 'Net profit', tax: 'Tax ($0.2B)',
          interest: 'Interest ($0.2B)', fuel: 'Aircraft fuel ($5.1B)', salaries: 'Salaries & benefits ($4.7B)',
          distribution: 'Distribution ($0.6B)', rent: 'Aircraft rent ($0.1B)', landing: 'Landing fees ($1.1B)',
          da: 'D&A ($0.8B)', regional: 'Regional carrier ($0.7B)', maintenance: 'Maintenance ($0.9B)',
          otherCost: 'Other ($2.6B)', yoy16: '+16% Y/Y', yoy23: '+23% Y/Y', yoy8: '+8% Y/Y',
          margin6: '6% margin', margin5: '5% margin', ppDown2: '(2pp) Y/Y',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, AMOUNT), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [
          sourceAmount(303, 414, t.yoy16),
          block(230, 627, [name(t.passenger, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      cargo: {
        blocks: [
          sourceAmount(303, 858, t.yoy23),
          block(230, 944, [name(t.cargo, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      other_revenue: {
        blocks: [
          sourceAmount(299, 1013, t.yoy8),
          block(221, 1108, [name(t.other, 40, BLUE)], { anchor: 'end' }),
        ],
      },
      revenue: {
        blocks: [block(921, 543, [name(t.revenue, 40, AMOUNT), amount(39, AMOUNT), note(t.yoy16)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1550, 353, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin6), note(t.ppDown2)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1550, 1164, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      other_income: { blocks: [] },
      net_profit: {
        blocks: [block(2355.5, 219, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin5), note(t.ppDown2)], { lineGap: 10 })],
      },
      tax: { blocks: [block(2271, 416, [name(t.tax, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 })] },
      interest: { blocks: [terminal(512, t.interest)] },
      aircraft_fuel: { blocks: [terminal(615, t.fuel)] },
      salaries_benefits: { blocks: [terminal(759, t.salaries)] },
      distribution: { blocks: [terminal(871, t.distribution)] },
      aircraft_rent: { blocks: [terminal(947, t.rent)] },
      landing_fees: { blocks: [terminal(1028, t.landing)] },
      depreciation_amortization: { blocks: [terminal(1114, t.da)] },
      regional_carrier: { blocks: [terminal(1197, t.regional)] },
      maintenance: { blocks: [terminal(1277, t.maintenance)] },
      other_operating: { blocks: [terminal(1363, t.otherCost)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'united-q2-fy26',
    name: 'United Airlines · Q2 FY26',
    company: 'United Airlines',
    meta: {
      company: 'United Airlines',
      title: 'United Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/united-q2-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: otherIncomeAnnotation(false),
    layout: {
      scale: 1,
      nodes: {
        passenger: { x: 269, y: 511, width: 71, height: 281 },
        cargo: { x: 269, y: 968, width: 71, height: 7 },
        other_revenue: { x: 269, y: 1127, width: 71, height: 16 },
        revenue: { x: 891, y: 689, width: 72, height: 308 },
        operating_profit: { x: 1514, y: 536, width: 72, height: 17 },
        operating_expenses: { x: 1514, y: 859, width: 72, height: 289 },
        other_income: { x: 1961, y: 272, width: 71, height: 2 },
        net_profit: { x: 2137, y: 281, width: 71, height: 11 },
        tax: { x: 2137, y: 432, width: 71, height: 3 },
        interest: { x: 2137, y: 527, width: 71, height: 3 },
        aircraft_fuel: { x: 2137, y: 586, width: 71, height: 88 },
        salaries_benefits: { x: 2137, y: 735, width: 71, height: 80 },
        distribution: { x: 2137, y: 884, width: 71, height: 10 },
        aircraft_rent: { x: 2137, y: 961, width: 71, height: 3 },
        landing_fees: { x: 2137, y: 1038, width: 71, height: 16 },
        depreciation_amortization: { x: 2137, y: 1126, width: 71, height: 11 },
        regional_carrier: { x: 2137, y: 1207, width: 71, height: 11 },
        maintenance: { x: 2137, y: 1287, width: 71, height: 14 },
        other_operating: { x: 2137, y: 1358, width: 71, height: 43 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 16.1, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.5, notes: ['+23% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.7, notes: ['+16% Y/Y'], color: BLUE, labelColor: AMOUNT, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['6% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['5% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 4, order: 3, type: 'cost', label: 'Aircraft fuel', value: 5.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 4, order: 4, type: 'cost', label: 'Salaries & benefits', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'distribution', col: 4, order: 5, type: 'cost', label: 'Distribution', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_rent', col: 4, order: 6, type: 'cost', label: 'Aircraft rent', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 4, order: 7, type: 'cost', label: 'Landing fees', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 8, type: 'cost', label: 'D&A', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional_carrier', col: 4, order: 9, type: 'cost', label: 'Regional carrier', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 4, order: 10, type: 'cost', label: 'Maintenance', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 11, type: 'cost', label: 'Other', value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 16.1, sourceWidth: 281, targetWidth: 281, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.5, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.0, sourceWidth: 16, targetWidth: 20, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.1, sourceWidth: 17, targetWidth: 17, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 16.6, sourceWidth: 291, targetWidth: 289, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 11, targetWidth: 9, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 5.1, sourceWidth: 88.83, targetWidth: 88, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.7, sourceWidth: 81.84, targetWidth: 80, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distribution', value: 0.6, sourceWidth: 10.45, targetWidth: 10, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'aircraft_rent', value: 0.1, sourceWidth: 1.74, targetWidth: 3, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'landing_fees', value: 1.1, sourceWidth: 19.15, targetWidth: 16, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.8, sourceWidth: 13.93, targetWidth: 11, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'regional_carrier', value: 0.7, sourceWidth: 12.19, targetWidth: 11, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.9, sourceWidth: 15.67, targetWidth: 14, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.6, sourceWidth: 45.2, targetWidth: 43, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '联合航空 · 2026 财年第二季度',
        meta: {
          title: '联合航空 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +16%'] },
          cargo: { label: '货运', notes: ['同比 +23%'] },
          other_revenue: { label: '其他', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          aircraft_fuel: { label: '航空燃油' }, salaries_benefits: { label: '薪酬与福利' },
          distribution: { label: '分销' }, aircraft_rent: { label: '飞机租赁' }, landing_fees: { label: '着陆费' },
          depreciation_amortization: { label: '折旧与摊销' }, regional_carrier: { label: '支线承运人' },
          maintenance: { label: '维护' }, other_operating: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: otherIncomeAnnotation(true),
      },
    },
  });
})();
