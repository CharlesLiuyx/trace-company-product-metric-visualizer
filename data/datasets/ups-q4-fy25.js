/* ====================================================================
 * UPS - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/ups-q4-fy25.png as a fixed d3-Sankey
 * layout. The UPS shield and segment icons are pure SVG; no reference pixels
 * are used at runtime.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#3a221b';
  const NOTE = '#666666';
  const YELLOW = '#ffb500';
  const YELLOW_LINK = '#f8d78a';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9dce9b';
  const RED = '#d40000';
  const RED_LABEL = '#9c1707';
  const RED_LINK = '#df8585';
  const ICON = '#777777';
  const RIGHT_LABEL_X = 2324;

  const upsShield = `
    <g>
      <path d="M120 2C168 2 204 9 228 22v105c0 61-41 110-108 143C53 237 12 188 12 127V22C36 9 72 2 120 2Z" fill="#ffb500"/>
      <path d="M120 25c40 0 71 5 91 15v87c0 52-35 94-91 125-56-31-91-73-91-125V40c20-10 51-15 91-15Z" fill="#351b14"/>
      <path d="M29 40c20-10 51-15 91-15s71 5 91 15v24H29Z" fill="#ffb500"/>
      <text x="120" y="173" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="104" font-weight="900" letter-spacing="-12" fill="#ffb500">UPS</text>
      <text x="192" y="247" text-anchor="middle" font-family="Arial, sans-serif" font-size="23" fill="#ffb500">®</text>
    </g>`;

  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });
  const line = (text, size, weight = 400, color = DARK) => ({ text, size, weight, color });
  function labels(t) {
    return {
      us_domestic_package: {
        icons: { x: 143, y: 440, names: ['package'], size: 76, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 379, [line('$value', 39), line(t.usYy, 28, 400, NOTE)], 8),
          block(299, 535, [line(t.usName[0], 40, 800), line(t.usName[1], 40, 800)], 7, 'end'),
          block(191, 642, [line(t.usMargin, 28, 400, NOTE)], 8),
        ],
      },
      international_package: {
        icons: { x: 151, y: 758, names: ['globe'], size: 72, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 790, [line('$value', 39), line(t.internationalYy, 28, 400, NOTE)], 8),
          block(299, 845, [line(t.internationalName[0], 40, 800), line(t.internationalName[1], 40, 800)], 7, 'end'),
          block(191, 949, [line(t.internationalMargin, 28, 400, NOTE)], 8),
        ],
      },
      supply_chain_solutions: {
        icons: { x: 151, y: 1019, names: ['truck'], size: 76, color: ICON, strokeWidth: 2.1 },
        blocks: [
          block(403, 1027, [line('$value', 39), line(t.supplyChainYy, 28, 400, NOTE)], 8),
          block(299, 1083, [line(t.supplyChainName[0], 40, 800), line(t.supplyChainName[1], 40, 800)], 7, 'end'),
          block(191, 1191, [line(t.supplyChainMargin, 28, 400, NOTE)], 8),
        ],
      },
      revenue: { blocks: [block(1025, 547, [line(t.revenue, 40, 800), line('$value', 39), line(t.revenueYy, 28, 400, NOTE)], 8)] },
      operating_profit: { blocks: [block(1649, 348, [line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.operatingMargin, 28, 400, NOTE), line(t.operatingYy, 28, 400, NOTE)], 8)] },
      operating_expenses: { blocks: [block(1649, 1132, [line(t.operatingExpenses[0], 36, 800, RED_LABEL), line(t.operatingExpenses[1], 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 8)] },
      // Keep this on the standard label path: it supplies the semantic
      // data-node binding and its transparent label hitbox, while the
      // explicit baselines reproduce the source's compact Other callout.
      other_income: { blocks: [block(2121, 234, [line(t.otherIncome, 30, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)] },
      net_profit: { blocks: [block(2456, 267, [line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netMargin, 28, 400, NOTE), line(t.netYy, 28, 400, NOTE)], 8)] },
      tax: { blocks: [block(RIGHT_LABEL_X, 465, [line(t.tax, 31, 800, RED_LABEL)], 8, 'start')] },
      interest: { blocks: [block(RIGHT_LABEL_X, 544, [line(t.interest, 31, 800, RED_LABEL)], 8, 'start')] },
      comp_benefits: { blocks: [block(RIGHT_LABEL_X - 11, 650, [line(t.compBenefits, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      maintenance: { blocks: [block(RIGHT_LABEL_X, 818, [line(t.maintenance, 31, 800, RED_LABEL)], 8, 'start')] },
      depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 898, [line(t.depreciation[0], 31, 800, RED_LABEL), line(t.depreciation[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      purchased_transportation: { blocks: [block(RIGHT_LABEL_X, 1005, [line(t.purchased[0], 31, 800, RED_LABEL), line(t.purchased[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      fuel: { blocks: [block(RIGHT_LABEL_X, 1136, [line(t.fuel, 31, 800, RED_LABEL)], 8, 'start')] },
      other_occupancy: { blocks: [block(RIGHT_LABEL_X, 1211, [line(t.occupancy[0], 31, 800, RED_LABEL), line(t.occupancy[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
      other_operating: { blocks: [block(RIGHT_LABEL_X, 1327, [line(t.otherOperating, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8, 'start')] },
    };
  }

  const enLabels = labels({
    usYy: '(3%) Y/Y', usName: ['US Domestic', 'Package'], usMargin: '9% operating margin',
    internationalYy: '+2% Y/Y', internationalName: ['International', 'Package'], internationalMargin: '18% operating margin',
    supplyChainYy: '(13%) Y/Y', supplyChainName: ['Supply Chain', 'Solutions'], supplyChainMargin: '10% operating margin',
    revenue: 'Revenue', revenueYy: '(3%) Y/Y', operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingYy: '(1pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'], otherIncome: 'Other', netProfit: 'Net profit', netMargin: '7% margin', netYy: '+1pp Y/Y',
    tax: 'Tax ($0.6B)', interest: 'Interest ($0.3B)', compBenefits: 'Comp & benefits', maintenance: 'Maintenance',
    depreciation: ['Depreciation &', 'Amortization'], purchased: ['Purchased', 'transportation'], fuel: 'Fuel', occupancy: ['Other occupancy', '($0.6B)'], otherOperating: 'Other',
  });
  const zhLabels = labels({
    usYy: '同比 (3%)', usName: ['美国国内', '包裹'], usMargin: '营业利润率 9%',
    internationalYy: '同比 +2%', internationalName: ['国际', '包裹'], internationalMargin: '营业利润率 18%',
    supplyChainYy: '同比 (13%)', supplyChainName: ['供应链', '解决方案'], supplyChainMargin: '营业利润率 10%',
    revenue: '收入', revenueYy: '同比 (3%)', operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYy: '同比 (1 个百分点)',
    operatingExpenses: ['运营', '费用'], otherIncome: '其他', netProfit: '净利润', netMargin: '利润率 7%', netYy: '同比 +1 个百分点',
    tax: '税费（$0.6B）', interest: '利息（$0.3B）', compBenefits: '薪酬与福利', maintenance: '维修',
    depreciation: ['折旧与', '摊销'], purchased: ['外购', '运输'], fuel: '燃油', occupancy: ['其他占用成本', '（$0.6B）'], otherOperating: '其他',
  });
  for (const id of ['tax', 'interest', 'comp_benefits', 'maintenance', 'depreciation_amortization', 'purchased_transportation', 'fuel', 'other_occupancy', 'other_operating']) {
    zhLabels[id].blocks[0].x = 2338;
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 28); });
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ups-q4-fy25',
    name: 'UPS · Q4 FY25',
    company: 'UPS',
    meta: {
      company: 'UPS',
      title: 'UPS Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ups-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1990,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 230,
      logoHeight: 270,
      logoY: 265,
      logoViewBox: '0 0 240 280',
      logoSvg: upsShield,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: YELLOW, label: DARK },
        hub: { node: YELLOW, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: YELLOW_LINK, hub: YELLOW_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 12.62,
      nodes: {
        us_domestic_package: { x: 367, y: 474, width: 72, height: 212 },
        international_package: { x: 367, y: 885, width: 72, height: 63 },
        supply_chain_solutions: { x: 367, y: 1122, width: 72, height: 34 },
        revenue: { x: 989, y: 693, width: 72, height: 309 },
        operating_profit: { x: 1613, y: 534, width: 72, height: 34 },
        operating_expenses: { x: 1613, y: 840, width: 72, height: 276 },
        other_income: { x: 2088, y: 323, width: 72, height: 4 },
        net_profit: { x: 2236, y: 329, width: 72, height: 23 },
        tax: { x: 2236, y: 476, width: 72, height: 8 },
        interest: { x: 2236, y: 559, width: 72, height: 4 },
        comp_benefits: { x: 2236, y: 603, width: 72, height: 164 },
        maintenance: { x: 2236, y: 830, width: 72, height: 10 },
        depreciation_amortization: { x: 2236, y: 925, width: 72, height: 13 },
        purchased_transportation: { x: 2236, y: 1028, width: 72, height: 37 },
        fuel: { x: 2236, y: 1142, width: 72, height: 14 },
        other_occupancy: { x: 2236, y: 1240, width: 72, height: 9 },
        other_operating: { x: 2236, y: 1327, width: 72, height: 33 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'us_domestic_package', col: 0, order: 0, type: 'source', label: ['US Domestic', 'Package'], value: 16.8, notes: ['(3%) Y/Y', '9% operating margin'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK, icons: ['package'] },
      { id: 'international_package', col: 0, order: 1, type: 'source', label: ['International', 'Package'], value: 5.0, notes: ['+2% Y/Y', '18% operating margin'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK, icons: ['globe'] },
      { id: 'supply_chain_solutions', col: 0, order: 2, type: 'source', label: ['Supply Chain', 'Solutions'], value: 2.7, notes: ['(13%) Y/Y', '10% operating margin'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK, icons: ['truck'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 24.5, notes: ['(3%) Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['11% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 3, order: 1, type: 'profit', label: 'Net profit', value: 1.8, notes: ['7% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 2, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 3, order: 3, type: 'cost', label: 'Interest', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'comp_benefits', col: 3, order: 4, type: 'cost', label: 'Comp & benefits', value: 13.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 5, type: 'cost', label: 'Maintenance', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 6, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'purchased_transportation', col: 3, order: 7, type: 'cost', label: ['Purchased', 'transportation'], value: 2.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel', col: 3, order: 8, type: 'cost', label: 'Fuel', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_occupancy', col: 3, order: 9, type: 'cost', label: 'Other occupancy', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 10, type: 'cost', label: 'Other', value: 2.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_domestic_package', target: 'revenue', value: 16.8, width: 212, sourceOrder: 0, targetOrder: 0 },
      { source: 'international_package', target: 'revenue', value: 5.0, width: 63, sourceOrder: 0, targetOrder: 1 },
      { source: 'supply_chain_solutions', target: 'revenue', value: 2.7, width: 34, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'operating_profit', value: 2.6, width: 33, targetWidth: 34, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 21.9, width: 276, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 22, targetWidth: 21, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, width: 1, sourceWidth: 4, targetWidth: 1, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.3, width: 4, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'comp_benefits', value: 13.0, width: 164, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.8, width: 10, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 1.0, width: 13, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'purchased_transportation', value: 2.9, width: 37, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel', value: 1.1, width: 14, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_occupancy', value: 0.6, sourceWidth: 8, targetWidth: 9, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 2.5, sourceWidth: 30, targetWidth: 33, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '联合包裹 · 2025 财年第四季度',
        meta: {
          title: '联合包裹 2025 财年第四季度利润表',
          period: '',
          periodNote: '',
          titleTextLength: 1910,
        },
        nodes: {
          us_domestic_package: { label: ['美国国内', '包裹'], notes: ['同比 (3%)', '营业利润率 9%'] },
          international_package: { label: ['国际', '包裹'], notes: ['同比 +2%', '营业利润率 18%'] },
          supply_chain_solutions: { label: ['供应链', '解决方案'], notes: ['同比 (13%)', '营业利润率 10%'] },
          revenue: { label: '收入', notes: ['同比 (3%)'] },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +1 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, comp_benefits: { label: '薪酬与福利' }, maintenance: { label: '维修' },
          depreciation_amortization: { label: ['折旧与', '摊销'] }, purchased_transportation: { label: ['外购', '运输'] }, fuel: { label: '燃油' },
          other_occupancy: { label: '其他占用成本' }, other_operating: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
