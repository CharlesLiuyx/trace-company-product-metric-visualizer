/* American Airlines Q4 FY25 operating-loss income statement ($B). */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#465a6b';
  const BLUE_LINK = '#a5aeb4';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2221;

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

  const operatingLossAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="operating_loss"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <rect x="1190" y="1060" width="276" height="260" fill="transparent"/>
      <text x="1328" y="1115" font-size="40" font-weight="800" fill="${RED_LABEL}">${zh ? '营业' : 'Operating'}</text>
      <text x="1328" y="1168" font-size="40" font-weight="800" fill="${RED_LABEL}">${zh ? '亏损' : 'loss'}</text>
      <text x="1328" y="1218" font-size="39" font-weight="400" fill="${RED_LABEL}">($41M)</text>
      <text x="1328" y="1261" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '利润率 (0%)' : '(0%) margin'}</text>
      <text x="1328" y="1300" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '同比 +2 个百分点' : '+2pp Y/Y'}</text>
    </g>`;

  const passengerNameAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="passenger"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="end">
      <rect x="35" y="590" width="220" height="60" fill="transparent"/>
      <text x="241" y="639" font-size="40" font-weight="800" fill="${TITLE}">${zh ? '客运' : 'Passenger'}</text>
    </g>`;

  const labels = (zh) => {
    const t = zh
      ? {
          passenger: '客运', cargo: '货运', otherRevenue: '其他', revenue: '收入',
          operatingLoss: ['营业', '亏损'], expenses: ['运营', '费用'],
          salaries: ['薪酬与福利', '（$4.7B）'], fuel: '航空燃油（$2.9B）',
          regional: '支线业务（$1.4B）', maintenance: '维护（$1.0B）',
          landing: '着陆费（$0.9B）', rent: '飞机租赁（$0.3B）',
          selling: '销售费用（$0.5B）', da: '折旧与摊销（$0.5B）', otherCost: '其他（$1.8B）',
          yoy10: '同比 +10%', yoy13: '同比 +13%', yoy24: '同比 +24%', yoy11: '同比 +11%',
          margin0: '利润率 (0%)', ppUp2: '同比 +2 个百分点',
        }
      : {
          passenger: 'Passenger', cargo: 'Cargo', otherRevenue: 'Other', revenue: 'Revenue',
          operatingLoss: ['Operating', 'loss'], expenses: ['Operating', 'expenses'],
          salaries: ['Salaries & benefits', '($4.7B)'], fuel: 'Aircraft fuel ($2.9B)',
          regional: 'Regional ($1.4B)', maintenance: 'Maintenance ($1.0B)',
          landing: 'Landing fees ($0.9B)', rent: 'Aircraft rent ($0.3B)',
          selling: 'Selling expenses ($0.5B)', da: 'D&A ($0.5B)', otherCost: 'Other ($1.8B)',
          yoy10: '+10% Y/Y', yoy13: '+13% Y/Y', yoy24: '+24% Y/Y', yoy11: '+11% Y/Y',
          margin0: '(0%) margin', ppUp2: '+2pp Y/Y',
        };
    const sourceAmount = (x, top, yoy) => block(x, top, [amount(39, TITLE), note(yoy)], { lineGap: 11 });
    const terminal = (top, text) => block(RIGHT_LABEL_X, top, [name(text, 32, RED_LABEL)], { anchor: 'start', lineGap: 8 });
    return {
      passenger: {
        blocks: [sourceAmount(296, 417, t.yoy10)],
      },
      cargo: {
        blocks: [sourceAmount(296, 871, t.yoy13), block(241, 940, [name(t.cargo, 40, TITLE)], { anchor: 'end' })],
      },
      other_revenue: {
        blocks: [sourceAmount(296, 1027, t.yoy24), block(241, 1110, [name(t.otherRevenue, 40, TITLE)], { anchor: 'end' })],
      },
      revenue: {
        blocks: [block(915, 498, [name(t.revenue, 40, TITLE), amount(39, TITLE), note(t.yoy11)], { lineGap: 11 })],
      },
      operating_loss: {
        blocks: [],
      },
      operating_expenses: {
        blocks: [block(1535, 427, [...t.expenses.map((text) => name(text, 38, RED_LABEL)), amount(38, RED_LABEL)], { lineGap: 10 })],
      },
      salaries_benefits: {
        blocks: [block(RIGHT_LABEL_X, 371, t.salaries.map((text) => name(text, 32, RED_LABEL)), { anchor: 'start', lineGap: 8 })],
      },
      aircraft_fuel: { blocks: [terminal(543, t.fuel)] },
      regional: { blocks: [block(2209, 674, [name(t.regional, 32, RED_LABEL)], { anchor: 'start' })] },
      maintenance: { blocks: [terminal(793, t.maintenance)] },
      landing_fees: { blocks: [terminal(887, t.landing)] },
      aircraft_rent: { blocks: [terminal(984, t.rent)] },
      selling_expenses: { blocks: [block(2213, 1087, [name(t.selling, 32, RED_LABEL)], { anchor: 'start' })] },
      depreciation_amortization: { blocks: [terminal(1178, t.da)] },
      other_operating: { blocks: [block(2212, 1294, [name(t.otherCost, 32, RED_LABEL)], { anchor: 'start' })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'american-q4-fy25-operating-loss',
    name: 'American Airlines · Q4 FY25 · Operating loss',
    company: 'American Airlines',
    meta: {
      company: 'American Airlines',
      title: 'American Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Operating-loss source variant',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/american-q4-fy25-operating-loss.png', width: 2667, height: 1500 },
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
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    annotationsSvg: `${passengerNameAnnotation(false)}${operatingLossAnnotation(false)}`,
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
      scale: 24.2,
      nodes: {
        passenger: { x: 261, y: 513, width: 71, height: 303 },
        cargo: { x: 261, y: 965, width: 71, height: 3 },
        other_revenue: { x: 261, y: 1120, width: 71, height: 27 },
        revenue: { x: 883, y: 652, width: 72, height: 338 },
        operating_loss: { x: 1280, y: 1053, width: 72, height: 2 },
        operating_expenses: { x: 1506, y: 577, width: 72, height: 339 },
        salaries_benefits: { x: 2129, y: 352, width: 71, height: 111 },
        aircraft_fuel: { x: 2129, y: 528, width: 71, height: 69 },
        regional: { x: 2129, y: 678, width: 71, height: 33 },
        maintenance: { x: 2129, y: 795, width: 71, height: 22 },
        landing_fees: { x: 2129, y: 896, width: 71, height: 20 },
        aircraft_rent: { x: 2129, y: 1000, width: 71, height: 6 },
        selling_expenses: { x: 2129, y: 1097, width: 71, height: 10 },
        depreciation_amortization: { x: 2129, y: 1195, width: 71, height: 10 },
        other_operating: { x: 2129, y: 1284, width: 71, height: 41 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
      { id: 'tax', representation: 'data-only' },
    ],
    nodes: [
      { id: 'passenger', col: 0, order: 0, type: 'source', label: 'Passenger', value: 12.5, notes: ['+10% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'cargo', col: 0, order: 1, type: 'source', label: 'Cargo', value: 0.2, notes: ['+13% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.2, notes: ['+24% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.9, notes: ['+11% Y/Y'], color: BLUE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'operating_loss', col: 2, order: 0, type: 'cost', label: 'Operating loss', value: -0.041, valueText: '($41M)', notes: ['(0%) margin', '+2pp Y/Y'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 14.0, valueText: '($14.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 4, order: 0, type: 'cost', label: 'Salaries & benefits', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_fuel', col: 4, order: 1, type: 'cost', label: 'Aircraft fuel', value: 2.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'regional', col: 4, order: 2, type: 'cost', label: 'Regional', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 4, order: 3, type: 'cost', label: 'Maintenance', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'landing_fees', col: 4, order: 4, type: 'cost', label: 'Landing fees', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'aircraft_rent', col: 4, order: 5, type: 'cost', label: 'Aircraft rent', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_expenses', col: 4, order: 6, type: 'cost', label: 'Selling expenses', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 7, type: 'cost', label: 'D&A', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'passenger', target: 'revenue', value: 12.5, sourceWidth: 303, targetWidth: 303, y0: 664.5, y1: 803.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'cargo', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 966.5, y1: 956.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.2, sourceWidth: 27, targetWidth: 32, y0: 1133.5, y1: 974, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 13.9, sourceWidth: 338, targetWidth: 338, y0: 821, y1: 746, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 0.041,
        sourceWidth: 2, targetWidth: 1, y0: 1054, y1: 915.5,
        sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1352, x1: 1506, c1x: 1415, c1y: 1054, c2x: 1454, c2y: 915.5 },
      },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 4.7, sourceWidth: 114, targetWidth: 111, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK, y1: 407.5 },
      { source: 'operating_expenses', target: 'aircraft_fuel', value: 2.9, sourceWidth: 70, targetWidth: 69, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y1: 562.5 },
      { source: 'operating_expenses', target: 'regional', value: 1.4, sourceWidth: 34, targetWidth: 33, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, y1: 694.5 },
      { source: 'operating_expenses', target: 'maintenance', value: 1.0, sourceWidth: 24, targetWidth: 22, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK, y1: 806 },
      { source: 'operating_expenses', target: 'landing_fees', value: 0.9, sourceWidth: 22, targetWidth: 20, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK, y1: 906 },
      { source: 'operating_expenses', target: 'aircraft_rent', value: 0.3, sourceWidth: 7, targetWidth: 6, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK, y1: 1003 },
      { source: 'operating_expenses', target: 'selling_expenses', value: 0.5, sourceWidth: 12, targetWidth: 10, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK, y1: 1102 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.5, sourceWidth: 12, targetWidth: 10, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK, y1: 1200 },
      { source: 'operating_expenses', target: 'other_operating', value: 1.8, sourceWidth: 44, targetWidth: 41, sourceOrder: 8, targetOrder: 0, linkTint: RED_LINK, y1: 1304.5 },
    ],
    i18n: {
      zh: {
        name: '美国航空 · 2025 财年第四季度 · 营业亏损',
        meta: {
          title: '美国航空 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '营业亏损来源版本',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          passenger: { label: '客运', notes: ['同比 +10%'] },
          cargo: { label: '货运', notes: ['同比 +13%'] },
          other_revenue: { label: '其他', notes: ['同比 +24%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          salaries_benefits: { label: '薪酬与福利' },
          aircraft_fuel: { label: '航空燃油' },
          regional: { label: '支线业务' },
          maintenance: { label: '维护' },
          landing_fees: { label: '着陆费' },
          aircraft_rent: { label: '飞机租赁' },
          selling_expenses: { label: '销售费用' },
          depreciation_amortization: { label: '折旧与摊销' },
          other_operating: { label: '其他' },
        },
        nonNodeMetrics: {
          cost_of_revenue: { label: '收入成本（未单列）' },
          gross_profit: { label: '毛利润（未单列）' },
          tax: { label: '税费（未单列）' },
        },
        annotationsSvg: `${passengerNameAnnotation(true)}${operatingLossAnnotation(true)}`,
        layout: { labels: labels(true) },
      },
    },
  });
})();
