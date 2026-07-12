/* American Airlines Q4 FY25 income statement ($B), measured from the processed source. */
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

  const guides = () => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="tax" data-link-numerator="tax" data-link-denominator="operating_profit" data-link-anchor-x="1889" data-link-anchor-y="493" style="cursor:pointer">
        <path d="M1578 498 C1760 498 1940 493 2200 493" fill="none" stroke="${RED_LINK}" stroke-width="2"/>
        <path d="M1578 498 C1760 498 1940 493 2200 493" fill="none" stroke="transparent" stroke-width="18" style="pointer-events:stroke"/>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh
      ? {
          passenger: '客运', cargo: '货运', otherRevenue: '其他', revenue: '收入', operating: '营业利润',
          expenses: ['运营', '费用'], otherIncome: '其他', net: '净利润', interest: '利息（$0.4B）',
          tax: '税费（$42M）', salaries: ['薪酬与福利', '（$4.5B）'], fuel: '航空燃油（$2.7B）',
          regional: '支线业务（$1.4B）', maintenance: '维护（$1.0B）', landing: '着陆费（$0.8B）',
          rent: '飞机租赁（$0.3B）', selling: '销售费用（$0.5B）', da: '折旧与摊销（$0.5B）',
          otherCost: '其他（$1.8B）', yoy2: '同比 +2%', yoy3: '同比 +3%', yoy8: '同比 +8%',
          margin3: '利润率 3%', margin1: '利润率 1%', ppDown5: '同比 (5 个百分点)', ppDown4: '同比 (4 个百分点)',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', otherRevenue: 'Other', revenue: 'Revenue', operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], otherIncome: 'Other', net: 'Net profit', interest: 'Interest ($0.4B)',
          tax: 'Tax ($42M)', salaries: ['Salaries & benefits', '($4.5B)'], fuel: 'Aircraft fuel ($2.7B)',
          regional: 'Regional ($1.4B)', maintenance: 'Maintenance ($1.0B)', landing: 'Landing fees ($0.8B)',
          rent: 'Aircraft rent ($0.3B)', selling: 'Selling expenses ($0.5B)', da: 'D&A ($0.5B)',
          otherCost: 'Other ($1.8B)', yoy2: '+2% Y/Y', yoy3: '+3% Y/Y', yoy8: '+8% Y/Y',
          margin3: '3% margin', margin1: '1% margin', ppDown5: '(5pp) Y/Y', ppDown4: '(4pp) Y/Y',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [sourceAmount(303, 391, t.yoy2), block(230, 590, [name(t.passenger, 40, TITLE)], { anchor: 'end' })],
      },
      cargo: {
        blocks: [sourceAmount(296.5, 849, t.yoy3), block(230, 922, [name(t.cargo, 40, TITLE)], { anchor: 'end' })],
      },
      other_revenue: {
        blocks: [sourceAmount(303, 1008, t.yoy8), block(230, 1086, [name(t.otherRevenue, 40, TITLE)], { anchor: 'end' })],
      },
      revenue: {
        blocks: [block(919, 509, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy2)], { lineGap: 11 })],
      },
      operating_profit: {
        blocks: [block(1542, 309, [name(t.operating, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin3), note(t.ppDown5)], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1542, 1130, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      other_income: {
        blocks: [block(2039.5, 206, [name(t.otherIncome, 32, GREEN_LABEL), amount(31, GREEN_LABEL)], { lineGap: 8 })],
      },
      net_profit: {
        blocks: [block(2354, 212, [name(t.net, 40, GREEN_LABEL), amount(39, GREEN_LABEL), note(t.margin1), note(t.ppDown4)], { lineGap: 10 })],
      },
      interest: { blocks: [terminal(404, t.interest)] },
      tax: { blocks: [terminal(476, t.tax)] },
      salaries_benefits: {
        blocks: [block(RIGHT_LABEL_X, 563, t.salaries.map((text) => name(text, 32, RED_LABEL)), { anchor: 'start', lineGap: 8 })],
      },
      aircraft_fuel: { blocks: [terminal(708, t.fuel)] },
      regional: { blocks: [terminal(810, t.regional)] },
      maintenance: { blocks: [terminal(906, t.maintenance)] },
      landing_fees: { blocks: [terminal(1003, t.landing)] },
      aircraft_rent: { blocks: [terminal(1085, t.rent)] },
      selling_expenses: { blocks: [terminal(1167, t.selling)] },
      depreciation_amortization: { blocks: [terminal(1257, t.da)] },
      other_operating: { blocks: [terminal(1332, t.otherCost)] },
      gross_profit: { blocks: [] },
      cost_of_revenue: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'american-q4-fy25',
    name: 'American Airlines · Q4 FY25',
    company: 'American Airlines',
    meta: {
      company: 'American Airlines',
      title: 'American Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/american-q4-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: guides(),
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
      scale: 22,
      nodes: {
        passenger: { x: 261, y: 482, width: 71, height: 280 },
        cargo: { x: 261, y: 941, width: 71, height: 2 },
        other_revenue: { x: 261, y: 1098, width: 71, height: 23 },
        revenue: { x: 883, y: 653, width: 72, height: 309 },
        operating_profit: { x: 1506, y: 490, width: 72, height: 8 },
        operating_expenses: { x: 1506, y: 814, width: 72, height: 299 },
        other_income: { x: 2004, y: 294, width: 71, height: 2 },
        net_profit: { x: 2129, y: 302, width: 71, height: 3 },
        interest: { x: 2129, y: 422, width: 71, height: 6 },
        tax: { x: 2200, y: 493, width: 0, height: 0 },
        salaries_benefits: { x: 2129, y: 549, width: 71, height: 99 },
        aircraft_fuel: { x: 2129, y: 698, width: 71, height: 58 },
        regional: { x: 2129, y: 814, width: 71, height: 29 },
        maintenance: { x: 2129, y: 912, width: 71, height: 20 },
        landing_fees: { x: 2129, y: 1008, width: 71, height: 18 },
        aircraft_rent: { x: 2129, y: 1100, width: 71, height: 5 },
        selling_expenses: { x: 2129, y: 1176, width: 71, height: 10 },
        depreciation_amortization: { x: 2129, y: 1260, width: 71, height: 8 },
        other_operating: { x: 2129, y: 1335, width: 71, height: 38 },
        gross_profit: { x: -1000, y: -1000, width: 0, height: 0 },
        cost_of_revenue: { x: -1000, y: -1000, width: 0, height: 0 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 12.7, notes: ['+2% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.2, notes: ['+3% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.1, notes: ['+8% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.0, notes: ['+2% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, notes: ['3% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 13.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.04, valueText: '$40M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 3, order: 1, type: 'profit', label: 'Net profit', value: 0.1, notes: ['1% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 3, order: 2, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 3, order: 3, type: 'cost', label: 'Tax', value: 0.042, valueText: '($42M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 4, type: 'cost', label: 'Salaries & benefits', value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 3, order: 5, type: 'cost', label: 'Aircraft fuel', value: 2.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional', col: 3, order: 6, type: 'cost', label: 'Regional', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 7, type: 'cost', label: 'Maintenance', value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 3, order: 8, type: 'cost', label: 'Landing fees', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_rent', col: 3, order: 9, type: 'cost', label: 'Aircraft rent', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_expenses', col: 3, order: 10, type: 'cost', label: 'Selling expenses', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 11, type: 'cost', label: 'D&A', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 12, type: 'cost', label: 'Other', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 1, order: 2, type: 'profit', label: '', value: 14.0, color: BG },
      { id: 'cost_of_revenue', col: 1, order: 3, type: 'cost', label: '', value: 0, color: BG },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 12.7, sourceWidth: 280, targetWidth: 280, y0: 622, y1: 793, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 4, y0: 942, y1: 935, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.1, sourceWidth: 23, targetWidth: 23, y0: 1109.5, y1: 949.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.5, sourceWidth: 8, targetWidth: 8, y0: 657, y1: 494, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 13.5, sourceWidth: 301, targetWidth: 299, y0: 811.5, y1: 963.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.058, sourceWidth: 3, targetWidth: 2, y0: 491.5, y1: 303.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.04, sourceWidth: 2, targetWidth: 1, y0: 295, y1: 302.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 5, targetWidth: 6, y0: 495.5, y1: 425, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.042, sourceWidth: 1, targetWidth: 1, y0: 497.5, y1: 493, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, interactionOnly: true },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.5, sourceWidth: 99, targetWidth: 99, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK, y1: 598.5 },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 2.7, sourceWidth: 59, targetWidth: 58, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y1: 727 },
      { source: 'operating_expenses', target: 'regional', value: 1.4, sourceWidth: 31, targetWidth: 29, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, y1: 828.5 },
      { source: 'operating_expenses', target: 'maintenance', value: 1.0, sourceWidth: 22, targetWidth: 20, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK, y1: 922 },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.8, sourceWidth: 18, targetWidth: 18, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK, y1: 1017 },
      { source: 'operating_expenses', target: 'aircraft_rent', value: 0.3, sourceWidth: 7, targetWidth: 5, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK, y1: 1102.5 },
      { source: 'operating_expenses', target: 'selling_expenses', value: 0.5, sourceWidth: 11, targetWidth: 10, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK, y1: 1181 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.5, sourceWidth: 11, targetWidth: 8, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK, y1: 1264 },
      { source: 'operating_expenses', target: 'other_operating', value: 1.8, sourceWidth: 40, targetWidth: 38, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK, y1: 1354 },
    ],
    i18n: {
      zh: {
        name: '美国航空 · 2025 财年第四季度',
        meta: {
          title: '美国航空 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +2%'] },
          cargo: { label: '货运', notes: ['同比 +3%'] },
          other_revenue: { label: '其他', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 (4 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          salaries_benefits: { label: '薪酬与福利' },
          aircraft_fuel: { label: '航空燃油' },
          regional: { label: '支线业务' },
          maintenance: { label: '维护' },
          landing_fees: { label: '着陆费' },
          aircraft_rent: { label: '飞机租赁' },
          selling_expenses: { label: '销售费用' },
          depreciation_amortization: { label: '折旧与摊销' },
          other_operating: { label: '其他' },
          gross_profit: { label: '毛利润（未单列）' },
          cost_of_revenue: { label: '收入成本（未单列）' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
