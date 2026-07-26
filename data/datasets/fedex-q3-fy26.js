/* FedEx — Q3 FY26 income statement ($B).
 * Reconstructed from input/processed/fedex-q3-fy26.png. The source is a
 * direct revenue-to-operating-expenses waterfall: it does not depict a
 * gross-profit/cost-of-revenue stage. */
(function () {
  const TITLE = '#155077';
  const PURPLE = '#4d148c';
  const PURPLE_LINK = '#a88ec4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const fedexWordmark = (x, y, size, scaleX = 1, scaleY = 1, suffix = null) => `
    <g data-typography-role="brand">
      <g transform="translate(${x} ${y}) scale(${scaleX} ${scaleY}) translate(${-x} ${-y})" font-family="Arial Black,Arial,sans-serif" font-weight="900" letter-spacing="-7">
        <text x="${x}" y="${y}" font-size="${size}" fill="${PURPLE}">Fed</text>
        <text x="${x + size * 1.78}" y="${y}" font-size="${size}" fill="#ff6600">Ex</text>
      </g>
      ${suffix ? `<text x="${suffix.x}" y="${suffix.y}" font-size="${suffix.size}" font-family="Georgia,serif" font-weight="400" fill="${PURPLE}">${suffix.text}</text>` : ''}
    </g>`;

  const annotations = `
    ${fedexWordmark(742, 440, 190, 0.895, 0.85)}
    ${fedexWordmark(83, 655, 62, 1.13, 1.35, { text: 'Express', x: 207, y: 692, size: 32 })}
    ${fedexWordmark(88, 972, 62, 1.22, 1.37, { text: 'Freight', x: 214, y: 1004, size: 31 })}`;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 8,
    lines,
  });
  const inlineTerminal = (top, nameText, nameX, valueX, nameSize = 32) => ({
    blocks: [
      block(nameX, top, [line(nameText, nameSize, 800, RED_LABEL)], { anchor: 'start' }),
      block(valueX, top, [line('$value', 32, 400, RED_LABEL)], { anchor: 'start' }),
    ],
  });

  const labels = (zh = false) => {
    const t = zh
      ? {
          expressYoy: '同比 +10%',
          expressMargin: '营业利润率 7%',
          expressPp: '同比 +1 个百分点',
          freightYoy: '同比 (5%)',
          freightMargin: '营业利润率 0%',
          freightPp: '同比 (12 个百分点)',
          otherYoy: '同比 (4%)',
          other: '其他',
          revenue: '收入',
          revenueYoy: '同比 +8%',
          operatingProfit: '营业利润',
          margin6: '利润率 6%',
          pp0: '同比 (0 个百分点)',
          expenses: ['运营', '费用'],
          netProfit: '净利润',
          margin4: '利润率 4%',
          netPp0: '同比 +0 个百分点',
          tax: '税费',
          otherExpense: '其他',
          salaries: '薪酬与福利',
          purchased: ['外购', '运输'],
          rentals: '租赁费用',
          depreciation: '折旧与摊销',
          fuel: '燃油',
          maintenance: '维修',
          realignment: '业务重组',
          otherOperating: '其他',
        }
      : {
          expressYoy: '+10% Y/Y',
          expressMargin: '7% operating margin',
          expressPp: '+1pp Y/Y',
          freightYoy: '(5%) Y/Y',
          freightMargin: '0% operating margin',
          freightPp: '(12pp) Y/Y',
          otherYoy: '(4%) Y/Y',
          other: 'Other',
          revenue: 'Revenue',
          revenueYoy: '+8% Y/Y',
          operatingProfit: 'Operating profit',
          margin6: '6% margin',
          pp0: '(0pp) Y/Y',
          expenses: ['Operating', 'expenses'],
          netProfit: 'Net profit',
          margin4: '4% margin',
          netPp0: '+0pp Y/Y',
          tax: 'Tax',
          otherExpense: 'Other',
          salaries: 'Salaries & benefits',
          purchased: ['Purchased', 'transportation'],
          rentals: 'Rentals',
          depreciation: 'Depreciation & Amortization',
          fuel: 'Fuel',
          maintenance: 'Maintenance',
          realignment: 'Business realignment',
          otherOperating: 'Other',
        };

    const rightInline = zh
      ? {
          tax: inlineTerminal(427, t.tax, 2398, 2462),
          otherExpense: inlineTerminal(497, t.otherExpense, 2388, 2471),
          rentals: inlineTerminal(869, t.rentals, 2358, 2490),
          fuel: inlineTerminal(1029, t.fuel, 2398, 2465),
          maintenance: inlineTerminal(1120, t.maintenance, 2375, 2470),
          realignment: inlineTerminal(1180, t.realignment, 2345, 2480),
          otherOperating: inlineTerminal(1301, t.otherOperating, 2388, 2471),
        }
      : {
          tax: inlineTerminal(427, t.tax, 2386, 2444),
          otherExpense: inlineTerminal(497, t.otherExpense, 2369, 2466),
          rentals: inlineTerminal(869, t.rentals, 2355, 2479),
          fuel: inlineTerminal(1029, t.fuel, 2376, 2450),
          maintenance: inlineTerminal(1120, t.maintenance, 2325, 2524, 30),
          realignment: {
            blocks: [
              block(2465, 1180, [line('Business', 32, 800, RED_LABEL)]),
              block(2321, 1222, [line('realignment', 30, 800, RED_LABEL)], { anchor: 'start' }),
              block(2510, 1222, [line('$value', 32, 400, RED_LABEL)], { anchor: 'start' }),
            ],
          },
          otherOperating: inlineTerminal(1301, t.otherOperating, 2369, 2466),
        };

    return {
      express: {
        blocks: [
          block(390, 436, [line('$value', 38, 400), line(t.expressYoy, 28, 400, NOTE)]),
          block(190, 704, [line(t.expressMargin, 28, 400, NOTE), line(t.expressPp, 28, 400, NOTE)]),
        ],
      },
      freight: {
        blocks: [
          block(393, 897, [line('$value', 38, 400), line(t.freightYoy, 28, 400, NOTE)]),
          block(190, 1025, [line(t.freightMargin, 28, 400, NOTE), line(t.freightPp, 28, 400, NOTE)]),
        ],
      },
      other_revenue: {
        blocks: [
          block(393, 1099, [line('$value', 38, 400), line(t.otherYoy, 28, 400, NOTE)]),
          block(248, 1177, [line(t.other, 34, 800, PURPLE)]),
        ],
      },
      revenue: {
        blocks: [
          block(1013, 557, [
            line(t.revenue, 40, 800),
            line('$value', 38, 400),
            line(t.revenueYoy, 28, 400, NOTE),
          ]),
        ],
      },
      operating_profit: {
        blocks: [
          block(1641, 324, [
            line(t.operatingProfit, 40, 800, GREEN_LABEL),
            line('$value', 38, 400, GREEN_LABEL),
            line(t.margin6, 28, 400, NOTE),
            line(t.pp0, 28, 400, NOTE),
          ]),
        ],
      },
      operating_expenses: {
        blocks: [
          block(1638, 1182, [
            ...t.expenses.map((text) => line(text, 36, 800, RED_LABEL)),
            line('$value', 34, 400, RED_LABEL),
          ]),
        ],
      },
      net_profit: {
        blocks: [
          block(2466, 227, [
            line(t.netProfit, 40, 800, GREEN_LABEL),
            line('$value', 38, 400, GREEN_LABEL),
            line(t.margin4, 28, 400, NOTE),
            line(t.netPp0, 28, 400, NOTE),
          ]),
        ],
      },
      tax: rightInline.tax,
      other_expense: rightInline.otherExpense,
      salaries_benefits: {
        blocks: [block(2465, 589, [line(t.salaries, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)])],
      },
      purchased_transportation: {
        blocks: [
          block(2465, 729, [
            ...t.purchased.map((text) => line(text, 32, 800, RED_LABEL)),
            line('$value', 32, 400, RED_LABEL),
          ]),
        ],
      },
      rentals: rightInline.rentals,
      depreciation_amortization: zh
        ? inlineTerminal(965, t.depreciation, 2325, 2515)
        : {
            blocks: [
              block(2465, 923, [line('Depreciation &', 32, 800, RED_LABEL)]),
              block(2316, 965, [line('Amortization', 30, 800, RED_LABEL)], { anchor: 'start' }),
              block(2521, 965, [line('$value', 32, 400, RED_LABEL)], { anchor: 'start' }),
            ],
          },
      fuel: rightInline.fuel,
      maintenance: rightInline.maintenance,
      business_realignment: rightInline.realignment,
      other_operating: rightInline.otherOperating,
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fedex-q3-fy26',
    name: 'FedEx · Q3 FY26',
    company: 'FedEx',
    meta: {
      company: 'FedEx',
      title: 'FedEx Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/fedex-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 200,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2078,
      periodX: 177,
      periodY: 342,
      periodNoteY: 385,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 34, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 1,
      nodes: {
        express: { x: 356, y: 531, width: 71, height: 290 },
        freight: { x: 356, y: 994, width: 71, height: 25 },
        other_revenue: { x: 356, y: 1194, width: 71, height: 10 },
        revenue: { x: 978, y: 702, width: 72, height: 330 },
        operating_profit: { x: 1601, y: 507, width: 72, height: 16 },
        operating_expenses: { x: 1601, y: 851, width: 72, height: 311 },
        net_profit: { x: 2224, y: 321, width: 71, height: 11 },
        tax: { x: 2224, y: 437, width: 71, height: 4 },
        other_expense: { x: 2224, y: 510, width: 71, height: 3 },
        salaries_benefits: { x: 2224, y: 566, width: 71, height: 120 },
        purchased_transportation: { x: 2224, y: 741, width: 71, height: 81 },
        rentals: { x: 2224, y: 874, width: 71, height: 13 },
        depreciation_amortization: { x: 2224, y: 951, width: 71, height: 13 },
        fuel: { x: 2224, y: 1039, width: 71, height: 10 },
        maintenance: { x: 2224, y: 1129, width: 71, height: 8 },
        business_realignment: { x: 2224, y: 1216, width: 71, height: 3 },
        other_operating: { x: 2224, y: 1283, width: 71, height: 48 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],
    nodes: [
      { id: 'express', col: 0, order: 0, type: 'source', label: 'FedEx Express', value: 21.2, notes: ['+10% Y/Y', '7% operating margin', '+1pp Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'freight', col: 0, order: 1, type: 'source', label: 'FedEx Freight', value: 2.0, valueText: '$2.0B', notes: ['(5%) Y/Y', '0% operating margin', '(12pp) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.9, notes: ['(4%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 24.0, valueText: '$24.0B', notes: ['+8% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.3, notes: ['6% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 22.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['4% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 3, order: 2, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 3, type: 'cost', label: 'Salaries & benefits', value: 8.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'purchased_transportation', col: 3, order: 4, type: 'cost', label: ['Purchased', 'transportation'], value: 6.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rentals', col: 3, order: 5, type: 'cost', label: 'Rentals', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 6, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel', col: 3, order: 7, type: 'cost', label: 'Fuel', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 8, type: 'cost', label: 'Maintenance', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'business_realignment', col: 3, order: 9, type: 'cost', label: ['Business', 'realignment'], value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 10, type: 'cost', label: 'Other', value: 3.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'express', target: 'revenue', value: 21.2, sourceWidth: 290, targetWidth: 290, y0: 676, y1: 847, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'freight', target: 'revenue', value: 2.0, sourceWidth: 25, targetWidth: 27, y0: 1006.5, y1: 1005.5, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.9, sourceWidth: 10, targetWidth: 13, y0: 1199, y1: 1025.5, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.3, sourceWidth: 16, targetWidth: 16, y0: 710, y1: 515, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 22.7, sourceWidth: 314, targetWidth: 311, y0: 875, y1: 1006.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 11, targetWidth: 11, y0: 512.5, y1: 326.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 4, y0: 520.5, y1: 439, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 1, targetWidth: 3, y0: 522.5, y1: 511.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 8.8, sourceWidth: 120.56, targetWidth: 120, sourceOrder: 0, targetOrder: 0, y1: 626, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'purchased_transportation', value: 6.1, sourceWidth: 83.57, targetWidth: 81, sourceOrder: 1, targetOrder: 0, y1: 781.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rentals', value: 1.2, sourceWidth: 16.44, targetWidth: 13, sourceOrder: 2, targetOrder: 0, y1: 880.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 1.1, sourceWidth: 15.07, targetWidth: 13, sourceOrder: 3, targetOrder: 0, y1: 957.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fuel', value: 0.9, sourceWidth: 12.33, targetWidth: 10, sourceOrder: 4, targetOrder: 0, y1: 1044, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'maintenance', value: 0.8, sourceWidth: 10.96, targetWidth: 8, sourceOrder: 5, targetOrder: 0, y1: 1133, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'business_realignment', value: 0.1, sourceWidth: 1.37, targetWidth: 3, sourceOrder: 6, targetOrder: 0, y1: 1217.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 3.7, sourceWidth: 50.7, targetWidth: 48, sourceOrder: 7, targetOrder: 0, y1: 1307, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Fed', 'Ex', 'Express', 'Freight'],
      zh: {
        name: '联邦快递 · 2026 财年第三季度',
        meta: {
          title: '联邦快递 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          titleTextLength: 1740,
        },
        nodes: {
          express: { label: 'FedEx Express', notes: ['同比 +10%', '营业利润率 7%', '同比 +1 个百分点'] },
          freight: { label: 'FedEx Freight', notes: ['同比 (5%)', '营业利润率 0%', '同比 (12 个百分点)'] },
          other_revenue: { label: '其他', notes: ['同比 (4%)'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          salaries_benefits: { label: '薪酬与福利' },
          purchased_transportation: { label: ['外购', '运输'] },
          rentals: { label: '租赁费用' },
          depreciation_amortization: { label: '折旧与摊销' },
          fuel: { label: '燃油' },
          maintenance: { label: '维修' },
          business_realignment: { label: '业务重组' },
          other_operating: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
