/* UPS Q1 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const TITLE = '#155077';
  const DARK = '#341b14';
  const NOTE = '#666666';
  const YELLOW = '#ffb406';
  const YELLOW_LINK = '#f7d688';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ICON = '#777777';
  const RIGHT_LABEL_X = 2324;

  const upsShield = `
    <g>
      <path d="M120 2C168 2 204 9 228 22v105c0 61-41 110-108 143C53 237 12 188 12 127V22C36 9 72 2 120 2Z" fill="#ffb406"/>
      <path d="M120 25c40 0 71 5 91 15v87c0 52-35 94-91 125-56-31-91-73-91-125V40c20-10 51-15 91-15Z" fill="#341b14"/>
      <path d="M29 40c20-10 51-15 91-15s71 5 91 15v24H29Z" fill="#ffb406"/>
      <text x="120" y="173" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="104" font-weight="900" letter-spacing="-12" fill="#ffb406">UPS</text>
      <text x="192" y="247" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" fill="#ffb406">®</text>
    </g>`;

  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });
  const line = (text, size, weight = 400, color = DARK) => ({ text, size, weight, color });

  function labels(t) {
    return {
      us_domestic_package: {
        icons: { x: 143, y: 484, names: ['package'], size: 76, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 429, [line('$value', 39), line(t.usYy, 28, 400, NOTE)], 8),
          block(319, 571, [line(t.usName[0], 40, 800), line(t.usName[1], 40, 800)], 7, 'end'),
          block(169, 690, [line(t.usMargin, 28, 400, NOTE)]),
        ],
      },
      international_package: {
        icons: { x: 151, y: 767, names: ['globe'], size: 72, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 806, [line('$value', 39), line(t.internationalYy, 28, 400, NOTE)], 8),
          block(320, 880, [line(t.internationalName[0], 40, 800), line(t.internationalName[1], 40, 800)], 7, 'end'),
          block(190, 963, [line(t.internationalMargin, 28, 400, NOTE)]),
        ],
      },
      supply_chain_solutions: {
        icons: { x: 151, y: 1020, names: ['truck'], size: 76, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 1036, [line('$value', 39), line(t.supplyChainYy, 28, 400, NOTE)], 8),
          block(319, 1092, [line(t.supplyChainName[0], 40, 800), line(t.supplyChainName[1], 40, 800)], 7, 'end'),
          block(190, 1195, [line(t.supplyChainMargin, 28, 400, NOTE)]),
        ],
      },
      revenue: { blocks: [block(1025, 532, [line(t.revenue, 40, 800), line('$value', 39), line(t.revenueYy, 28, 400, NOTE)], 8)] },
      operating_profit: { blocks: [block(1646, 379, [line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.operatingMargin, 28, 400, NOTE), line(t.operatingYy, 28, 400, NOTE)], 8)] },
      operating_expenses: { blocks: [block(1650, 1135, [line(t.operatingExpenses[0], 36, 800, RED_LABEL), line(t.operatingExpenses[1], 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 8)] },
      other_income: { blocks: [block(2112, 255, [line(t.otherIncome, 30, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)] },
      net_profit: { blocks: [block(2446, 273, [line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netMargin, 28, 400, NOTE), line(t.netYy, 28, 400, NOTE)], 8)] },
      tax: { blocks: [block(RIGHT_LABEL_X + 10, 464, [line(t.tax, 31, 800, RED_LABEL)], 8, 'start')] },
      interest: { blocks: [block(RIGHT_LABEL_X + 10, 561, [line(t.interest, 31, 800, RED_LABEL)], 8, 'start')] },
      comp_benefits: { blocks: [block(RIGHT_LABEL_X, 670, [line(t.compBenefits, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      maintenance: { blocks: [block(RIGHT_LABEL_X, 825, [line(t.maintenance, 31, 800, RED_LABEL)], 8, 'start')] },
      depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 901, [line(t.depreciation[0], 31, 800, RED_LABEL), line(t.depreciation[1], 31, 800, RED_LABEL)], 8, 'start')] },
      purchased_transportation: { blocks: [block(RIGHT_LABEL_X, 1008, [line(t.purchased[0], 31, 800, RED_LABEL), line(t.purchased[1], 31, 800, RED_LABEL)], 8, 'start')] },
      fuel: { blocks: [block(RIGHT_LABEL_X, 1149, [line(t.fuel, 31, 800, RED_LABEL)], 8, 'start')] },
      other_occupancy: { blocks: [block(RIGHT_LABEL_X, 1230, [line(t.occupancy, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      other_operating: { blocks: [block(RIGHT_LABEL_X, 1350, [line(t.otherOperating, 31, 800, RED_LABEL)], 8, 'start')] },
    };
  }

  const enLabels = labels({
    usYy: '(2%) Y/Y', usName: ['US Domestic', 'Package'], usMargin: '4% operating margin',
    internationalYy: '+4% Y/Y', internationalName: ['International', 'Package'], internationalMargin: '12% operating margin',
    supplyChainYy: '(6%) Y/Y', supplyChainName: ['Supply Chain', 'Solutions'], supplyChainMargin: '8% operating margin',
    revenue: 'Revenue', revenueYy: '(2%) Y/Y', operatingProfit: 'Operating profit', operatingMargin: '6% margin', operatingYy: '(2pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'], otherIncome: 'Other', netProfit: 'Net profit', netMargin: '4% margin', netYy: '(1pp) Y/Y',
    tax: 'Tax ($0.3B)', interest: 'Interest ($0.3B)', compBenefits: 'Comp & benefits', maintenance: 'Maintenance ($0.8B)',
    depreciation: ['Depreciation &', 'Amortization ($1.0B)'], purchased: ['Purchased', 'transportation ($2.8B)'], fuel: 'Fuel ($1.1B)',
    occupancy: 'Other occupancy', otherOperating: 'Other ($2.1B)',
  });
  const zhLabels = labels({
    usYy: '同比 (2%)', usName: ['美国国内', '包裹'], usMargin: '营业利润率 4%',
    internationalYy: '同比 +4%', internationalName: ['国际', '包裹'], internationalMargin: '营业利润率 12%',
    supplyChainYy: '同比 (6%)', supplyChainName: ['供应链', '解决方案'], supplyChainMargin: '营业利润率 8%',
    revenue: '收入', revenueYy: '同比 (2%)', operatingProfit: '营业利润', operatingMargin: '利润率 6%', operatingYy: '同比 (2 个百分点)',
    operatingExpenses: ['运营', '费用'], otherIncome: '其他', netProfit: '净利润', netMargin: '利润率 4%', netYy: '同比 (1 个百分点)',
    tax: '税费（$0.3B）', interest: '利息（$0.3B）', compBenefits: '薪酬与福利', maintenance: '维修（$0.8B）',
    depreciation: ['折旧与', '摊销（$1.0B）'], purchased: ['外购', '运输（$2.8B）'], fuel: '燃油（$1.1B）', occupancy: '其他占用成本', otherOperating: '其他（$2.1B）',
  });
  for (const id of ['tax', 'interest', 'comp_benefits', 'maintenance', 'depreciation_amortization', 'purchased_transportation', 'fuel', 'other_occupancy', 'other_operating']) {
    zhLabels[id].blocks[0].x = 2338;
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 28); });
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ups-q1-fy26',
    name: 'UPS · Q1 FY26',
    company: 'UPS',
    meta: {
      company: 'UPS', title: 'UPS Q1 FY26 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ups-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 1990,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 230, logoHeight: 270, logoY: 265, logoViewBox: '0 0 240 280', logoSvg: upsShield,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: YELLOW, label: DARK }, hub: { node: YELLOW, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: YELLOW_LINK, hub: YELLOW_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 14.36,
      nodes: {
        us_domestic_package: { x: 370, y: 518, width: 71, height: 202 },
        international_package: { x: 370, y: 896, width: 71, height: 64 },
        supply_chain_solutions: { x: 370, y: 1125, width: 71, height: 35 },
        revenue: { x: 992, y: 672, width: 72, height: 304 },
        operating_profit: { x: 1615, y: 558, width: 72, height: 17 },
        operating_expenses: { x: 1615, y: 825, width: 72, height: 286 },
        other_income: { x: 2078, y: 339, width: 71, height: 1 },
        net_profit: { x: 2238, y: 348, width: 71, height: 10 },
        tax: { x: 2238, y: 473, width: 71, height: 3 },
        interest: { x: 2238, y: 572, width: 71, height: 1 },
        comp_benefits: { x: 2238, y: 618, width: 71, height: 166 },
        maintenance: { x: 2238, y: 832, width: 71, height: 9 },
        depreciation_amortization: { x: 2238, y: 927, width: 71, height: 12 },
        purchased_transportation: { x: 2238, y: 1020, width: 71, height: 39 },
        fuel: { x: 2238, y: 1154, width: 71, height: 14 },
        other_occupancy: { x: 2238, y: 1259, width: 71, height: 7 },
        other_operating: { x: 2238, y: 1348, width: 71, height: 27 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'us_domestic_package', col: 0, order: 0, type: 'source', label: ['US Domestic', 'Package'], value: 14.1, notes: ['(2%) Y/Y', '4% operating margin'], color: YELLOW, linkTint: YELLOW_LINK, icons: ['package'] },
      { id: 'international_package', col: 0, order: 1, type: 'source', label: ['International', 'Package'], value: 4.5, notes: ['+4% Y/Y', '12% operating margin'], color: YELLOW, linkTint: YELLOW_LINK, icons: ['globe'] },
      { id: 'supply_chain_solutions', col: 0, order: 2, type: 'source', label: ['Supply Chain', 'Solutions'], value: 2.5, notes: ['(6%) Y/Y', '8% operating margin'], color: YELLOW, linkTint: YELLOW_LINK, icons: ['truck'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 21.2, notes: ['(2%) Y/Y'], color: YELLOW, linkTint: YELLOW_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.3, notes: ['6% margin', '(2pp) Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 19.9, color: RED, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 3, order: 1, type: 'profit', label: 'Net profit', value: 0.9, notes: ['4% margin', '(1pp) Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 2, type: 'cost', label: 'Tax', value: 0.3, color: RED, linkTint: RED_LINK },
      { id: 'interest', col: 3, order: 3, type: 'cost', label: 'Interest', value: 0.3, color: RED, linkTint: RED_LINK },
      { id: 'comp_benefits', col: 3, order: 4, type: 'cost', label: 'Comp & benefits', value: 11.5, color: RED, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 5, type: 'cost', label: 'Maintenance', value: 0.8, color: RED, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 6, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 1.0, valueText: '($1.0B)', color: RED, linkTint: RED_LINK },
      { id: 'purchased_transportation', col: 3, order: 7, type: 'cost', label: ['Purchased', 'transportation'], value: 2.8, color: RED, linkTint: RED_LINK },
      { id: 'fuel', col: 3, order: 8, type: 'cost', label: 'Fuel', value: 1.1, color: RED, linkTint: RED_LINK },
      { id: 'other_occupancy', col: 3, order: 9, type: 'cost', label: 'Other occupancy', value: 0.7, color: RED, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 10, type: 'cost', label: 'Other', value: 2.1, color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_domestic_package', target: 'revenue', value: 14.1, sourceWidth: 202, targetWidth: 202, sourceOrder: 0, targetOrder: 0 },
      { source: 'international_package', target: 'revenue', value: 4.5, sourceWidth: 64, targetWidth: 64, sourceOrder: 0, targetOrder: 1 },
      { source: 'supply_chain_solutions', target: 'revenue', value: 2.5, sourceWidth: 35, targetWidth: 38, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'operating_profit', value: 1.3, sourceWidth: 17, targetWidth: 17, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 19.9, sourceWidth: 286, targetWidth: 286, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 9, targetWidth: 9, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 4, targetWidth: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 4, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'comp_benefits', value: 11.5, sourceWidth: 165, targetWidth: 166, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.8, sourceWidth: 11, targetWidth: 9, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 1.0, sourceWidth: 14, targetWidth: 12, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'purchased_transportation', value: 2.8, sourceWidth: 40, targetWidth: 39, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel', value: 1.1, sourceWidth: 16, targetWidth: 14, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_occupancy', value: 0.7, sourceWidth: 10, targetWidth: 7, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.1, sourceWidth: 30, targetWidth: 27, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '联合包裹 · 2026 财年第一季度',
        meta: { title: '联合包裹 2026 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 1910 },
        nodes: {
          us_domestic_package: { label: ['美国国内', '包裹'], notes: ['同比 (2%)', '营业利润率 4%'] },
          international_package: { label: ['国际', '包裹'], notes: ['同比 +4%', '营业利润率 12%'] },
          supply_chain_solutions: { label: ['供应链', '解决方案'], notes: ['同比 (6%)', '营业利润率 8%'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] }, operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, comp_benefits: { label: '薪酬与福利' }, maintenance: { label: '维修' },
          depreciation_amortization: { label: ['折旧与', '摊销'] }, purchased_transportation: { label: ['外购', '运输'] }, fuel: { label: '燃油' },
          other_occupancy: { label: '其他占用成本' }, other_operating: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
