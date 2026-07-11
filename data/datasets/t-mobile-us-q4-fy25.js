/* T-Mobile US Q4 FY25 income statement ($B), measured from the processed source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const PINK = '#e20074';
  const PINK_LINK = '#ea85b8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2478;

  // The source centres this wordmark above the source-to-hub span, not above
  // the Revenue node. It is therefore an annotation rather than meta.logoSvg.
  const tMobileWordmark = `
    <g transform="translate(607 249)" fill="${PINK}" data-typography-role="brand">
      <path d="M0 0H114V34H79V142H35V34H0Z"/>
      <rect x="10" y="68" width="22" height="27"/><rect x="82" y="68" width="22" height="27"/>
      <text x="150" y="139" font-family="Georgia,Times New Roman,serif" font-size="143" font-weight="400" letter-spacing="-7" textLength="525" lengthAdjust="spacingAndGlyphs">Mobile</text>
      <text x="678" y="69" font-family="Montserrat,Arial,sans-serif" font-size="18" font-weight="700">TM</text>
    </g>`;

  const line = (text, size, options = {}) => ({ text, size, weight: options.weight ?? 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 10,
    lines,
  });

  const labels = (zh) => {
    const t = zh
      ? {
          postpaid: ['后付费', '收入'], prepaid: ['预付费', '收入'], wholesale: ['批发及', '其他'], services: '服务收入', equipment: '设备', other: '其他', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'], net: '净利润', tax: '税费', sga: ['销售、一般及', '管理费用'], da: ['折旧与', '摊销'],
          yoy14: '同比 +14%', yoyDown4: '同比 (4%)', flat: '同比持平', yoy10: '同比 +10%', yoy9: '同比 +9%', yoy11: '同比 +11%', margin58: '利润率 58%', margin15: '利润率 15%', margin9: '利润率 9%', ppDown2: '同比 (2 个百分点)', ppDown6: '同比 (6 个百分点)', ppDown5: '同比 (5 个百分点)',
        }
      : {
          postpaid: ['Postpaid', 'revenues'], prepaid: ['Prepaid', 'revenues'], wholesale: ['Wholesale', '& Other'], services: 'Services', equipment: 'Equipment', other: 'Other', revenue: 'Revenues', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', sga: ['SG&A'], da: ['Depreciation &', 'Amortization'],
          yoy14: '+14% Y/Y', yoyDown4: '(4%) Y/Y', flat: 'Flat Y/Y', yoy10: '+10% Y/Y', yoy9: '+9% Y/Y', yoy11: '+11% Y/Y', margin58: '58% margin', margin15: '15% margin', margin9: '9% margin', ppDown2: '(2pp) Y/Y', ppDown6: '(6pp) Y/Y', ppDown5: '(5pp) Y/Y',
        };
    const amount = (x, top, note) => block(x, top, [line('$value', 39), line(note, 29, { color: NOTE })], { lineGap: 11 });
    const center = (x, top, rows, options = {}) => block(x, top, rows, options);
    const terminal = (top, rows) => block(RIGHT_LABEL_X, top, rows, { anchor: 'middle', lineGap: 9 });
    return {
      postpaid: { blocks: [amount(442, 448, t.yoy14), center(229, 608, [line(t.postpaid[0], 40, { weight: 800 }), line(t.postpaid[1], 40, { weight: 800 })], { lineGap: 12 })] },
      prepaid: { blocks: [amount(447, 826, t.yoyDown4), center(228, 898, [line(t.prepaid[0], 40, { weight: 800 }), line(t.prepaid[1], 40, { weight: 800 })], { lineGap: 12 })] },
      wholesale_other: { blocks: [amount(447, 995, t.flat), center(229, 1054, [line(t.wholesale[0], 40, { weight: 800 }), line(t.wholesale[1], 40, { weight: 800 })], { lineGap: 12 })] },
      services: { blocks: [center(818, 483, [line(t.services, 40, { weight: 800 }), line('$value', 39), line(t.yoy10, 29, { color: NOTE })], { lineGap: 12 })] },
      equipment: { blocks: [center(822, 970, [line(t.equipment, 40, { weight: 800 }), line('$value', 39), line(t.yoy14, 29, { color: NOTE })], { lineGap: 12 })] },
      other_revenue: { blocks: [center(821, 1211, [line(t.other, 40, { weight: 800 }), line('$value', 39), line(t.yoy9, 29, { color: NOTE })], { lineGap: 12 })] },
      revenue: { blocks: [center(1192, 590, [line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.yoy11, 29, { color: NOTE })], { lineGap: 12 })] },
      gross_profit: { blocks: [center(1571, 443, [line(t.gross, 40, { weight: 800 }), line('$value', 39), line(t.margin58, 29, { color: NOTE }), line(t.ppDown2, 29, { color: NOTE })], { lineGap: 10 })] },
      cost_of_revenue: { blocks: [center(1565, 1214, [line(t.cost[0], 37, { weight: 800 }), line(t.cost[1], 37, { weight: 800 }), line('$value', 37)], { lineGap: 10 })] },
      operating_profit: { blocks: [center(1949, 371, [line(t.operating, 40, { weight: 800 }), line('$value', 39), line(t.margin15, 29, { color: NOTE }), line(t.ppDown6, 29, { color: NOTE })], { lineGap: 10 })] },
      operating_expenses: { blocks: [center(1939, 961, [line(t.expenses[0], 38, { weight: 800 }), line(t.expenses[1], 38, { weight: 800 }), line('$value', 38)], { lineGap: 10 })] },
      net_profit: { blocks: [terminal(423, [line(t.net, 40, { weight: 800 }), line('$value', 39), line(t.margin9, 29, { color: NOTE }), line(t.ppDown5, 29, { color: NOTE })])] },
      other_expense: { blocks: [terminal(658, [line(t.other, 32, { weight: 800 }), line('$value', 31)])] },
      tax: { blocks: [terminal(782, [line(t.tax, 32, { weight: 800 }), line('$value', 31)])] },
      sga: { blocks: [block(2483, 981, [...t.sga.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)], { anchor: 'middle', lineGap: 9 })] },
      depreciation_amortization: { blocks: [block(2483, 1183, [line(t.da[0], 32, { weight: 800 }), line(t.da[1], 32, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 9 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 't-mobile-us-q4-fy25',
    name: 'T-Mobile US · Q4 FY25',
    company: 'T-Mobile US',
    meta: {
      company: 'T-Mobile US',
      title: 'T-Mobile US Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/t-mobile-us-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2470,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PINK, label: PINK },
        hub: { node: PINK, label: PINK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PINK_LINK, hub: PINK_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    annotationsSvg: tMobileWordmark,
    layout: {
      nodes: {
        postpaid: { x: 409, y: 547, width: 71, height: 226 },
        prepaid: { x: 409, y: 925, width: 71, height: 36 },
        wholesale_other: { x: 409, y: 1096, width: 71, height: 9 },
        services: { x: 783, y: 636, width: 70, height: 275 },
        equipment: { x: 783, y: 1123, width: 70, height: 78 },
        other_revenue: { x: 783, y: 1365, width: 70, height: 6 },
        revenue: { x: 1157, y: 743, width: 70, height: 359 },
        gross_profit: { x: 1530, y: 633, width: 71, height: 208 },
        cost_of_revenue: { x: 1530, y: 1050, width: 71, height: 150 },
        operating_profit: { x: 1904, y: 561, width: 71, height: 52 },
        operating_expenses: { x: 1904, y: 796, width: 71, height: 151 },
        net_profit: { x: 2277, y: 478, width: 71, height: 29 },
        other_expense: { x: 2277, y: 691, width: 71, height: 13 },
        tax: { x: 2277, y: 817, width: 71, height: 6 },
        sga: { x: 2277, y: 975, width: 71, height: 95 },
        depreciation_amortization: { x: 2277, y: 1219, width: 71, height: 53 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'postpaid', col: 0, order: 0, type: 'source', label: ['Postpaid', 'revenues'], value: 15.4, notes: ['+14% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'prepaid', col: 0, order: 1, type: 'source', label: ['Prepaid', 'revenues'], value: 2.6, notes: ['(4%) Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'wholesale_other', col: 0, order: 2, type: 'source', label: ['Wholesale', '& Other'], value: 0.7, notes: ['Flat Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'services', col: 1, order: 0, type: 'source', label: 'Services', value: 18.7, notes: ['+10% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'equipment', col: 1, order: 1, type: 'source', label: 'Equipment', value: 5.4, notes: ['+14% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.3, notes: ['+9% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenues', value: 24.3, notes: ['+11% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.1, notes: ['58% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 10.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.7, notes: ['15% margin', '(6pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 10.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.1, notes: ['9% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_expense', col: 5, order: 1, type: 'cost', label: 'Other', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 6.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 5, order: 4, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 3.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'postpaid', target: 'services', value: 15.4, sourceWidth: 226, targetWidth: 226, y0: 660, y1: 749, sourceOrder: 0, targetOrder: 0, linkTint: PINK_LINK },
      { source: 'prepaid', target: 'services', value: 2.6, sourceWidth: 36, targetWidth: 38, y0: 943, y1: 881, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'wholesale_other', target: 'services', value: 0.7, sourceWidth: 9, targetWidth: 11, y0: 1100.5, y1: 905.5, sourceOrder: 0, targetOrder: 2, linkTint: PINK_LINK },
      { source: 'services', target: 'revenue', value: 18.7, sourceWidth: 275, targetWidth: 275, y0: 773.5, y1: 880.5, sourceOrder: 0, targetOrder: 0, linkTint: PINK_LINK },
      { source: 'equipment', target: 'revenue', value: 5.4, sourceWidth: 78, targetWidth: 78, y0: 1162, y1: 1057, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 6, targetWidth: 6, y0: 1368, y1: 1099, sourceOrder: 0, targetOrder: 2, linkTint: PINK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 14.1, sourceWidth: 208, targetWidth: 208, y0: 847, y1: 737, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 10.3, sourceWidth: 151, targetWidth: 150, y0: 1026.5, y1: 1125, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.7, sourceWidth: 52, targetWidth: 52, y0: 659, y1: 587, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.3, sourceWidth: 156, targetWidth: 151, y0: 763, y1: 871.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.1, sourceWidth: 29, targetWidth: 29, y0: 575.5, y1: 492.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 1.1, sourceWidth: 16, targetWidth: 13, y0: 598, y1: 697.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 7, targetWidth: 6, y0: 609.5, y1: 820, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 6.6, sourceWidth: 97, targetWidth: 95, y0: 844.5, y1: 1022.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 3.8, sourceWidth: 54, targetWidth: 53, y0: 920, y1: 1245.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Mobile'],
      zh: {
        name: '美国 T-Mobile · 2025 财年第四季度',
        meta: {
          title: '美国 T-Mobile 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1860,
        },
        nodes: {
          postpaid: { label: ['后付费', '收入'], notes: ['同比 +14%'] },
          prepaid: { label: ['预付费', '收入'], notes: ['同比 (4%)'] },
          wholesale_other: { label: ['批发及', '其他'], notes: ['同比持平'] },
          services: { label: '服务收入', notes: ['同比 +10%'] },
          equipment: { label: '设备', notes: ['同比 +14%'] },
          other_revenue: { label: '其他', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (6 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (5 个百分点)'] },
          other_expense: { label: '其他' },
          tax: { label: '税费' },
          sga: { label: ['销售、一般及', '管理费用'] },
          depreciation_amortization: { label: ['折旧与', '摊销'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: tMobileWordmark,
      },
    },
  });
})();
