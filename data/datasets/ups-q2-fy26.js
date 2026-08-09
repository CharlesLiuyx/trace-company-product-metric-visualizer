/* UPS Q2 FY26 income statement ($B), reconstructed as a measured fixed d3-Sankey. */
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

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2187"
      data-link-anchor-y="338">
      <path d="M2078 328H2150C2189 328 2199 349 2238 349"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2108" y="270" text-anchor="middle" font-size="30"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2108" y="310" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;

  function labels(t) {
    return {
      us_domestic_package: {
        icons: { x: 143, y: 459, names: ['package'], size: 76, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 440, [line('$value', 39), line(t.usYy, 28, 400, NOTE)], 8),
          { ...block(319, 546, [line(t.usName[0], 40, 800), line(t.usName[1], 40, 800)], 7, 'end'), semanticRole: 'reference-offset-side-label' },
          block(169, 665, [line(t.usMargin, 28, 400, NOTE)]),
        ],
      },
      international_package: {
        icons: { x: 151, y: 731, names: ['globe'], size: 72, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 777, [line('$value', 39), line(t.internationalYy, 28, 400, NOTE)], 8),
          { ...block(320, 844, [line(t.internationalName[0], 40, 800), line(t.internationalName[1], 40, 800)], 7, 'end'), semanticRole: 'reference-offset-side-label' },
          block(190, 927, [line(t.internationalMargin, 28, 400, NOTE)]),
        ],
      },
      supply_chain_solutions: {
        icons: { x: 151, y: 1002, names: ['truck'], size: 76, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 981, [line('$value', 39), line(t.supplyChainYy, 28, 400, NOTE)], 8),
          { ...block(319, 1074, [line(t.supplyChainName[0], 40, 800), line(t.supplyChainName[1], 40, 800)], 7, 'end'), semanticRole: 'reference-offset-side-label' },
          block(190, 1176, [line(t.supplyChainMargin, 28, 400, NOTE)]),
        ],
      },
      revenue: { blocks: [block(1025, 533, [line(t.revenue, 40, 800), line('$value', 39), line(t.revenueYy, 28, 400, NOTE)], 8)] },
      operating_profit: { blocks: [block(1651, 367, [line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.operatingMargin, 28, 400, NOTE), line(t.operatingYy, 28, 400, NOTE)], 8)] },
      operating_expenses: { blocks: [block(1650, 1100, [line(t.operatingExpenses[0], 36, 800, RED_LABEL), line(t.operatingExpenses[1], 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 8)] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(2446, 288, [line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netMargin, 28, 400, NOTE), line(t.netYy, 28, 400, NOTE)], 8)] },
      tax: { blocks: [block(RIGHT_LABEL_X + 10, 495, [line(t.tax, 31, 800, RED_LABEL)], 8, 'start')] },
      interest: { blocks: [block(RIGHT_LABEL_X + 10, 586, [line(t.interest, 31, 800, RED_LABEL)], 8, 'start')] },
      comp_benefits: { blocks: [block(RIGHT_LABEL_X, 698, [line(t.compBenefits, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      maintenance: { blocks: [block(RIGHT_LABEL_X, 872, [line(t.maintenance, 31, 800, RED_LABEL)], 8, 'start')] },
      depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 940, [line(t.depreciation[0], 31, 800, RED_LABEL), line(t.depreciation[1], 31, 800, RED_LABEL)], 8, 'start')] },
      purchased_transportation: { blocks: [block(RIGHT_LABEL_X, 1044, [line(t.purchased[0], 31, 800, RED_LABEL), line(t.purchased[1], 31, 800, RED_LABEL)], 8, 'start')] },
      fuel: { blocks: [block(RIGHT_LABEL_X, 1177, [line(t.fuel, 31, 800, RED_LABEL)], 8, 'start')] },
      other_occupancy: { blocks: [block(RIGHT_LABEL_X, 1244, [line(t.occupancy, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      other_operating: { blocks: [block(RIGHT_LABEL_X, 1350, [line(t.otherOperating, 31, 800, RED_LABEL)], 8, 'start')] },
    };
  }

  const enLabels = labels({
    usYy: '+6% Y/Y', usName: ['US Domestic', 'Package'], usMargin: '0% operating margin',
    internationalYy: '+12% Y/Y', internationalName: ['International', 'Package'], internationalMargin: '12% operating margin',
    supplyChainYy: '+8% Y/Y', supplyChainName: ['Supply Chain', 'Solutions'], supplyChainMargin: '10% operating margin',
    revenue: 'Revenue', revenueYy: '+8% Y/Y', operatingProfit: 'Operating profit', operatingMargin: '4% margin', operatingYy: '(5pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', netMargin: '3% margin', netYy: '(3pp) Y/Y',
    tax: 'Tax ($0.2B)', interest: 'Interest ($0.3B)', compBenefits: 'Comp & benefits', maintenance: 'Maintenance ($0.8B)',
    depreciation: ['Depreciation &', 'Amortization ($1.0B)'], purchased: ['Purchased', 'transportation ($3.2B)'], fuel: 'Fuel ($1.7B)',
    occupancy: 'Other occupancy', otherOperating: 'Other ($2.0B)',
  });
  const zhLabels = labels({
    usYy: '同比 +6%', usName: ['美国国内', '包裹'], usMargin: '营业利润率 0%',
    internationalYy: '同比 +12%', internationalName: ['国际', '包裹'], internationalMargin: '营业利润率 12%',
    supplyChainYy: '同比 +8%', supplyChainName: ['供应链', '解决方案'], supplyChainMargin: '营业利润率 10%',
    revenue: '收入', revenueYy: '同比 +8%', operatingProfit: '营业利润', operatingMargin: '利润率 4%', operatingYy: '同比 (5 个百分点)',
    operatingExpenses: ['运营', '费用'], netProfit: '净利润', netMargin: '利润率 3%', netYy: '同比 (3 个百分点)',
    tax: '税费（$0.2B）', interest: '利息（$0.3B）', compBenefits: '薪酬与福利', maintenance: '维修（$0.8B）',
    depreciation: ['折旧与', '摊销（$1.0B）'], purchased: ['外购', '运输（$3.2B）'], fuel: '燃油（$1.7B）', occupancy: '其他占用成本', otherOperating: '其他（$2.0B）',
  });
  for (const id of ['tax', 'interest', 'comp_benefits', 'maintenance', 'depreciation_amortization', 'purchased_transportation', 'fuel', 'other_occupancy', 'other_operating']) {
    zhLabels[id].blocks[0].x = 2338;
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 28); });
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ups-q2-fy26',
    name: 'UPS · Q2 FY26',
    company: 'UPS',
    meta: {
      company: 'UPS', title: 'UPS Q2 FY26 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ups-q2-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: otherIncomeGuide(false),
    layout: {
      scale: 12.42,
      routes: { other_income: { x: 2078, y: 328, width: 0, height: 2 } },
      nodes: {
        us_domestic_package: { x: 370, y: 529, width: 71, height: 185 },
        international_package: { x: 370, y: 866, width: 71, height: 62 },
        supply_chain_solutions: { x: 370, y: 1071, width: 71, height: 33 },
        revenue: { x: 992, y: 676, width: 72, height: 284 },
        operating_profit: { x: 1615, y: 549, width: 72, height: 10 },
        operating_expenses: { x: 1615, y: 804, width: 72, height: 272 },
        net_profit: { x: 2238, y: 346, width: 71, height: 6 },
        tax: { x: 2238, y: 506, width: 71, height: 1 },
        interest: { x: 2238, y: 595, width: 71, height: 1 },
        comp_benefits: { x: 2238, y: 657, width: 71, height: 157 },
        maintenance: { x: 2238, y: 881, width: 71, height: 9 },
        depreciation_amortization: { x: 2238, y: 968, width: 71, height: 10 },
        purchased_transportation: { x: 2238, y: 1058, width: 71, height: 37 },
        fuel: { x: 2238, y: 1179, width: 71, height: 19 },
        other_occupancy: { x: 2238, y: 1273, width: 71, height: 5 },
        other_operating: { x: 2238, y: 1353, width: 71, height: 24 },
      },
      labels: enLabels,
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'us_domestic_package', col: 0, order: 0, type: 'source', label: ['US Domestic', 'Package'], value: 14.9, notes: ['+6% Y/Y', '0% operating margin'], color: YELLOW, linkTint: YELLOW_LINK, icons: ['package'] },
      { id: 'international_package', col: 0, order: 1, type: 'source', label: ['International', 'Package'], value: 5.0, valueText: '$5.0B', notes: ['+12% Y/Y', '12% operating margin'], color: YELLOW, linkTint: YELLOW_LINK, icons: ['globe'] },
      { id: 'supply_chain_solutions', col: 0, order: 2, type: 'source', label: ['Supply Chain', 'Solutions'], value: 2.9, notes: ['+8% Y/Y', '10% operating margin'], color: YELLOW, linkTint: YELLOW_LINK, icons: ['truck'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 22.8, notes: ['+8% Y/Y'], color: YELLOW, linkTint: YELLOW_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '(5pp) Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.9, color: RED, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['3% margin', '(3pp) Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, linkTint: RED_LINK },
      { id: 'interest', col: 3, order: 2, type: 'cost', label: 'Interest', value: 0.3, color: RED, linkTint: RED_LINK },
      { id: 'comp_benefits', col: 3, order: 3, type: 'cost', label: 'Comp & benefits', value: 12.7, color: RED, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 4, type: 'cost', label: 'Maintenance', value: 0.8, color: RED, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 5, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 1.0, valueText: '($1.0B)', color: RED, linkTint: RED_LINK },
      { id: 'purchased_transportation', col: 3, order: 6, type: 'cost', label: ['Purchased', 'transportation'], value: 3.2, color: RED, linkTint: RED_LINK },
      { id: 'fuel', col: 3, order: 7, type: 'cost', label: 'Fuel', value: 1.7, color: RED, linkTint: RED_LINK },
      { id: 'other_occupancy', col: 3, order: 8, type: 'cost', label: 'Other occupancy', value: 0.6, color: RED, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 9, type: 'cost', label: 'Other', value: 2.0, valueText: '($2.0B)', color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_domestic_package', target: 'revenue', value: 14.9, sourceWidth: 185, targetWidth: 184, sourceOrder: 0, targetOrder: 0 },
      { source: 'international_package', target: 'revenue', value: 5.0, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 1 },
      { source: 'supply_chain_solutions', target: 'revenue', value: 2.9, sourceWidth: 33, targetWidth: 38, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'operating_profit', value: 0.9, sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 21.9, sourceWidth: 274, targetWidth: 272, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 328, y1: 346.5, sourceOrder: 0, targetOrder: 0, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 3, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'comp_benefits', value: 12.7, sourceWidth: 158, targetWidth: 157, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.8, sourceWidth: 10, targetWidth: 9, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 1.0, sourceWidth: 12, targetWidth: 10, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'purchased_transportation', value: 3.2, sourceWidth: 40, targetWidth: 37, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel', value: 1.7, sourceWidth: 21, targetWidth: 19, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_occupancy', value: 0.6, sourceWidth: 7, targetWidth: 5, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.0, sourceWidth: 24, targetWidth: 24, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '联合包裹 · 2026 财年第二季度',
        meta: { title: '联合包裹 2026 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 1910 },
        annotationsSvg: otherIncomeGuide(true),
        nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          us_domestic_package: { label: ['美国国内', '包裹'], notes: ['同比 +6%', '营业利润率 0%'] },
          international_package: { label: ['国际', '包裹'], notes: ['同比 +12%', '营业利润率 12%'] },
          supply_chain_solutions: { label: ['供应链', '解决方案'], notes: ['同比 +8%', '营业利润率 10%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] }, operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (3 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, comp_benefits: { label: '薪酬与福利' }, maintenance: { label: '维修' },
          depreciation_amortization: { label: ['折旧与', '摊销'] }, purchased_transportation: { label: ['外购', '运输'] }, fuel: { label: '燃油' },
          other_occupancy: { label: '其他占用成本' }, other_operating: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
