/* T-Mobile US Q1 FY26 income statement ($B), measured from the Build-bound source. */
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

  const tMobileWordmark = `
    <g transform="translate(607 249)" fill="${PINK}" data-typography-role="brand">
      <path d="M0 0H114V34H79V142H35V34H0Z"/>
      <rect x="10" y="68" width="22" height="27"/><rect x="82" y="68" width="22" height="27"/>
      <text x="150" y="139" font-family="Georgia,Times New Roman,serif" font-size="143" font-weight="400" letter-spacing="-7" textLength="525" lengthAdjust="spacingAndGlyphs">Mobile</text>
      <text x="678" y="69" font-family="Montserrat,Arial,sans-serif" font-size="18" font-weight="700">TM</text>
    </g>`;

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

  const labels = (zh) => {
    const t = zh
      ? {
          postpaid: ['后付费', '收入'],
          prepaid: ['预付费', '收入'],
          wholesale: ['批发及', '其他'],
          services: '服务收入',
          equipment: '设备',
          other: '其他',
          revenue: '收入',
          gross: '毛利润',
          cost: ['收入', '成本'],
          operating: '营业利润',
          expenses: ['运营', '费用'],
          net: '净利润',
          tax: '税费',
          sga: ['销售、一般及', '管理费用'],
          da: ['折旧与', '摊销'],
          yoy15: '同比 +15%',
          yoyDown5: '同比 (5%)',
          flat: '同比持平',
          yoy11: '同比 +11%',
          yoy8: '同比 +8%',
          yoy9: '同比 +9%',
          margin62: '利润率 62%',
          margin19: '利润率 19%',
          margin11: '利润率 11%',
          ppDown3: '同比 (3 个百分点)',
          ppDown4: '同比 (4 个百分点)',
        }
      : {
          postpaid: ['Postpaid', 'revenues'],
          prepaid: ['Prepaid', 'revenues'],
          wholesale: ['Wholesale', '& Other'],
          services: 'Services',
          equipment: 'Equipment',
          other: 'Other',
          revenue: 'Revenues',
          gross: 'Gross profit',
          cost: ['Cost of', 'revenue'],
          operating: 'Operating profit',
          expenses: ['Operating', 'expenses'],
          net: 'Net profit',
          tax: 'Tax',
          sga: ['SG&A'],
          da: ['Depreciation &', 'Amortization'],
          yoy15: '+15% Y/Y',
          yoyDown5: '(5%) Y/Y',
          flat: 'Flat Y/Y',
          yoy11: '+11% Y/Y',
          yoy8: '+8% Y/Y',
          yoy9: '+9% Y/Y',
          margin62: '62% margin',
          margin19: '19% margin',
          margin11: '11% margin',
          ppDown3: '(3pp) Y/Y',
          ppDown4: '(4pp) Y/Y',
        };
    const amount = (x, top, note) =>
      block(x, top, [line('$value', 39), line(note, 29, { color: NOTE })], { lineGap: 11 });
    const center = (x, top, rows, options = {}) => block(x, top, rows, options);
    const terminal = (top, rows) =>
      block(RIGHT_LABEL_X, top, rows, { anchor: 'middle', lineGap: 9 });
    return {
      postpaid: {
        blocks: [
          amount(442, 434, t.yoy15),
          center(229, 613, [line(t.postpaid[0], 40, { weight: 800 }), line(t.postpaid[1], 40, { weight: 800 })], { lineGap: 12 }),
        ],
      },
      prepaid: {
        blocks: [
          amount(447, 865, t.yoyDown5),
          center(228, 937, [line(t.prepaid[0], 40, { weight: 800 }), line(t.prepaid[1], 40, { weight: 800 })], { lineGap: 12 }),
        ],
      },
      wholesale_other: {
        blocks: [
          amount(447, 1066, t.flat),
          center(229, 1121, [line(t.wholesale[0], 40, { weight: 800 }), line(t.wholesale[1], 40, { weight: 800 })], { lineGap: 12 }),
        ],
      },
      services: {
        blocks: [center(818, 497, [line(t.services, 40, { weight: 800 }), line('$value', 39), line(t.yoy11, 29, { color: NOTE })], { lineGap: 12 })],
      },
      equipment: {
        blocks: [center(822, 1003, [line(t.equipment, 40, { weight: 800 }), line('$value', 39), line(t.yoy8, 29, { color: NOTE })], { lineGap: 12 })],
      },
      other_revenue: {
        blocks: [center(821, 1241, [line(t.other, 40, { weight: 800 }), line('$value', 39), line(t.yoy9, 29, { color: NOTE })], { lineGap: 12 })],
      },
      revenue: {
        blocks: [center(1192, 590, [line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.yoy11, 29, { color: NOTE })], { lineGap: 12 })],
      },
      gross_profit: {
        blocks: [center(1571, 456, [line(t.gross, 40, { weight: 800 }), line('$value', 39), line(t.margin62, 29, { color: NOTE }), line(t.ppDown3, 29, { color: NOTE })], { lineGap: 10 })],
      },
      cost_of_revenue: {
        blocks: [center(1565, 1245, [line(t.cost[0], 37, { weight: 800 }), line(t.cost[1], 37, { weight: 800 }), line('$value', 37)], { lineGap: 10 })],
      },
      operating_profit: {
        blocks: [center(1949, 378, [line(t.operating, 40, { weight: 800 }), line('$value', 39), line(t.margin19, 29, { color: NOTE }), line(t.ppDown4, 29, { color: NOTE })], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [center(1939, 999, [line(t.expenses[0], 38, { weight: 800 }), line(t.expenses[1], 38, { weight: 800 }), line('$value', 38)], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [terminal(426, [line(t.net, 40, { weight: 800 }), line('$value', 39), line(t.margin11, 29, { color: NOTE }), line(t.ppDown3, 29, { color: NOTE })])],
      },
      other_expense: {
        blocks: [terminal(638, [line(t.other, 32, { weight: 800 }), line('$value', 31)])],
      },
      tax: {
        blocks: [terminal(754, [line(t.tax, 32, { weight: 800 }), line('$value', 31)])],
      },
      sga: {
        blocks: [block(2483, 915, [...t.sga.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)], { anchor: 'middle', lineGap: 9 })],
      },
      depreciation_amortization: {
        blocks: [block(2483, 1099, [line(t.da[0], 32, { weight: 800 }), line(t.da[1], 32, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 9 })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 't-mobile-us-q1-fy26',
    name: 'T-Mobile US · Q1 FY26',
    company: 'T-Mobile US',
    meta: {
      company: 'T-Mobile US',
      title: 'T-Mobile US Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/t-mobile-us-q1-fy26.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2470,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      hidePeriodStamp: true,
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
      linkTint: {
        source: PINK_LINK,
        hub: PINK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    annotationsSvg: tMobileWordmark,
    layout: {
      nodes: {
        postpaid: { x: 409, y: 534, width: 71, height: 265 },
        prepaid: { x: 409, y: 967, width: 71, height: 41 },
        wholesale_other: { x: 409, y: 1166, width: 71, height: 10 },
        services: { x: 783, y: 649, width: 70, height: 322 },
        equipment: { x: 783, y: 1157, width: 70, height: 66 },
        other_revenue: { x: 783, y: 1397, width: 70, height: 3 },
        revenue: { x: 1157, y: 742, width: 70, height: 394 },
        gross_profit: { x: 1530, y: 645, width: 71, height: 243 },
        cost_of_revenue: { x: 1530, y: 1082, width: 71, height: 150 },
        operating_profit: { x: 1904, y: 568, width: 71, height: 75 },
        operating_expenses: { x: 1904, y: 822, width: 71, height: 165 },
        net_profit: { x: 2277, y: 475, width: 71, height: 39 },
        other_expense: { x: 2277, y: 673, width: 71, height: 19 },
        tax: { x: 2277, y: 787, width: 71, height: 12 },
        sga: { x: 2277, y: 907, width: 71, height: 100 },
        depreciation_amortization: { x: 2277, y: 1112, width: 71, height: 63 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'postpaid', col: 0, order: 0, type: 'source', label: ['Postpaid', 'revenues'], value: 15.6, notes: ['+15% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'prepaid', col: 0, order: 1, type: 'source', label: ['Prepaid', 'revenues'], value: 2.5, notes: ['(5%) Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'wholesale_other', col: 0, order: 2, type: 'source', label: ['Wholesale', '& Other'], value: 0.7, notes: ['Flat Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'services', col: 1, order: 0, type: 'source', label: 'Services', value: 18.8, notes: ['+11% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'equipment', col: 1, order: 1, type: 'source', label: 'Equipment', value: 4.0, valueText: '$4.0B', notes: ['+8% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.3, notes: ['+9% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenues', value: 23.1, notes: ['+11% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.3, notes: ['62% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.5, notes: ['19% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 9.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['11% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_expense', col: 5, order: 1, type: 'cost', label: 'Other', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 6.0, valueText: '($6.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 5, order: 4, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 3.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'postpaid', target: 'services', value: 15.6, sourceWidth: 265, targetWidth: 266, y0: 666.5, y1: 782, sourceOrder: 0, targetOrder: 0, linkTint: PINK_LINK },
      { source: 'prepaid', target: 'services', value: 2.5, sourceWidth: 41, targetWidth: 41, y0: 987.5, y1: 935.5, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'wholesale_other', target: 'services', value: 0.7, sourceWidth: 10, targetWidth: 15, y0: 1171, y1: 963.5, sourceOrder: 0, targetOrder: 2, linkTint: PINK_LINK },
      { source: 'services', target: 'revenue', value: 18.8, sourceWidth: 322, targetWidth: 320, y0: 810, y1: 902, sourceOrder: 0, targetOrder: 0, linkTint: PINK_LINK },
      { source: 'equipment', target: 'revenue', value: 4.0, sourceWidth: 66, targetWidth: 68, y0: 1190, y1: 1096, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 3, targetWidth: 6, y0: 1398.5, y1: 1133, sourceOrder: 0, targetOrder: 2, linkTint: PINK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 14.3, sourceWidth: 242, targetWidth: 243, y0: 863, y1: 766.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.8, sourceWidth: 152, targetWidth: 150, y0: 1060, y1: 1157, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.5, sourceWidth: 75, targetWidth: 75, y0: 682.5, y1: 605.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.8, sourceWidth: 168, targetWidth: 165, y0: 804, y1: 904.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, sourceWidth: 39, targetWidth: 39, y0: 587.5, y1: 494.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 1.1, sourceWidth: 19, targetWidth: 19, y0: 616.5, y1: 682.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 17, targetWidth: 12, y0: 634.5, y1: 793, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 6.0, sourceWidth: 100, targetWidth: 100, y0: 872, y1: 957, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 3.8, sourceWidth: 64, targetWidth: 63, y0: 955, y1: 1143.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Mobile'],
      zh: {
        name: '美国 T-Mobile · 2026 财年第一季度',
        meta: {
          title: '美国 T-Mobile 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1860,
        },
        nodes: {
          postpaid: { label: ['后付费', '收入'], notes: ['同比 +15%'] },
          prepaid: { label: ['预付费', '收入'], notes: ['同比 (5%)'] },
          wholesale_other: { label: ['批发及', '其他'], notes: ['同比持平'] },
          services: { label: '服务收入', notes: ['同比 +11%'] },
          equipment: { label: '设备', notes: ['同比 +8%'] },
          other_revenue: { label: '其他', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 62%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (3 个百分点)'] },
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
