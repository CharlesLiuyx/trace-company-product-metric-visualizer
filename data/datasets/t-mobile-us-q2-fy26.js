/* T-Mobile US Q2 FY26 income statement ($B), measured from the Build-bound source. */
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
  const RIGHT_LABEL_X = 2473;

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
          interestOther: ['利息及', '其他'],
          tax: '税费',
          sga: ['销售、一般及', '管理费用'],
          da: ['折旧与', '摊销'],
          postpaidNote: '同比 +13%',
          prepaidNote: '同比 (6%)',
          wholesaleNote: '同比 (8%)',
          servicesNote: '同比 +9%',
          equipmentNote: '同比 +2%',
          otherNote: '同比 +11%',
          revenueNote: '同比 +8%',
          margin65: '利润率 65%',
          margin24: '利润率 24%',
          margin14: '利润率 14%',
          ppFlat: '同比 (0 个百分点)',
          ppDown1: '同比 (1 个百分点)',
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
          interestOther: ['Interest', '& other'],
          tax: 'Tax',
          sga: ['SG&A'],
          da: ['Depreciation &', 'Amortization'],
          postpaidNote: '+13% Y/Y',
          prepaidNote: '(6%) Y/Y',
          wholesaleNote: '(8%) Y/Y',
          servicesNote: '+9% Y/Y',
          equipmentNote: '+2% Y/Y',
          otherNote: '+11% Y/Y',
          revenueNote: '+8% Y/Y',
          margin65: '65% margin',
          margin24: '24% margin',
          margin14: '14% margin',
          ppFlat: '(0pp) Y/Y',
          ppDown1: '(1pp) Y/Y',
        };
    const amount = (x, top, note) =>
      block(x, top, [line('$value', 39), line(note, 29, { color: NOTE })], { lineGap: 11 });
    const center = (x, top, rows, options = {}) => block(x, top, rows, options);
    const terminal = (top, rows) =>
      block(RIGHT_LABEL_X, top, rows, { anchor: 'middle', lineGap: 9 });
    return {
      postpaid: {
        blocks: [
          amount(442, 411, t.postpaidNote),
          center(229, 570, [line(t.postpaid[0], 40, { weight: 800 }), line(t.postpaid[1], 40, { weight: 800 })], { lineGap: 12 }),
        ],
      },
      prepaid: {
        blocks: [
          amount(447, 827, t.prepaidNote),
          center(228, 884, [line(t.prepaid[0], 40, { weight: 800 }), line(t.prepaid[1], 40, { weight: 800 })], { lineGap: 12 }),
        ],
      },
      wholesale_other: {
        blocks: [
          amount(447, 1010, t.wholesaleNote),
          center(229, 1054, [line(t.wholesale[0], 40, { weight: 800 }), line(t.wholesale[1], 40, { weight: 800 })], { lineGap: 12 }),
        ],
      },
      services: {
        blocks: [center(818, 460, [line(t.services, 40, { weight: 800 }), line('$value', 39), line(t.servicesNote, 29, { color: NOTE })], { lineGap: 12 })],
      },
      equipment: {
        blocks: [center(822, 959, [line(t.equipment, 40, { weight: 800 }), line('$value', 39), line(t.equipmentNote, 29, { color: NOTE })], { lineGap: 12 })],
      },
      other_revenue: {
        blocks: [center(821, 1181, [line(t.other, 40, { weight: 800 }), line('$value', 39), line(t.otherNote, 29, { color: NOTE })], { lineGap: 12 })],
      },
      revenue: {
        blocks: [center(1192, 550, [line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.revenueNote, 29, { color: NOTE })], { lineGap: 12 })],
      },
      gross_profit: {
        blocks: [center(1571, 424, [line(t.gross, 40, { weight: 800 }), line('$value', 39), line(t.margin65, 29, { color: NOTE }), line(t.ppFlat, 29, { color: NOTE })], { lineGap: 10 })],
      },
      cost_of_revenue: {
        blocks: [center(1565, 1144, [line(t.cost[0], 37, { weight: 800 }), line(t.cost[1], 37, { weight: 800 }), line('$value', 37)], { lineGap: 10 })],
      },
      operating_profit: {
        blocks: [center(1940, 334, [line(t.operating, 40, { weight: 800 }), line('$value', 39), line(t.margin24, 29, { color: NOTE }), line(t.ppDown1, 29, { color: NOTE })], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [center(1939, 939, [line(t.expenses[0], 38, { weight: 800 }), line(t.expenses[1], 38, { weight: 800 }), line('$value', 38)], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [terminal(384, [line(t.net, 40, { weight: 800 }), line('$value', 39), line(t.margin14, 29, { color: NOTE }), line(t.ppDown1, 29, { color: NOTE })])],
      },
      other_expense: {
        blocks: [terminal(614, [line(t.interestOther[0], 32, { weight: 800 }), line(t.interestOther[1], 32, { weight: 800 }), line('$value', 31)])],
      },
      tax: {
        blocks: [terminal(781, [line(t.tax, 32, { weight: 800 }), line('$value', 31)])],
      },
      sga: {
        blocks: [block(2473, 992, [...t.sga.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)], { anchor: 'middle', lineGap: 9 })],
      },
      depreciation_amortization: {
        blocks: [block(2473, 1177, [line(t.da[0], 32, { weight: 800 }), line(t.da[1], 32, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 9 })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 't-mobile-us-q2-fy26',
    name: 'T-Mobile US · Q2 FY26',
    company: 'T-Mobile US',
    meta: {
      company: 'T-Mobile US',
      title: 'T-Mobile US Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/t-mobile-us-q2-fy26.png',
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
        postpaid: { x: 409, y: 502, width: 71, height: 237 },
        prepaid: { x: 409, y: 917, width: 71, height: 35 },
        wholesale_other: { x: 409, y: 1101, width: 71, height: 7 },
        services: { x: 783, y: 604, width: 70, height: 285 },
        equipment: { x: 783, y: 1103, width: 70, height: 52 },
        other_revenue: { x: 783, y: 1325, width: 70, height: 2 },
        revenue: { x: 1157, y: 694, width: 70, height: 343 },
        gross_profit: { x: 1530, y: 604, width: 71, height: 220 },
        cost_of_revenue: { x: 1530, y: 1007, width: 71, height: 119 },
        operating_profit: { x: 1904, y: 514, width: 71, height: 80 },
        operating_expenses: { x: 1904, y: 784, width: 71, height: 138 },
        net_profit: { x: 2277, y: 420, width: 71, height: 45 },
        other_expense: { x: 2277, y: 657, width: 71, height: 16 },
        tax: { x: 2277, y: 804, width: 71, height: 15 },
        sga: { x: 2277, y: 979, width: 71, height: 87 },
        depreciation_amortization: { x: 2277, y: 1205, width: 71, height: 50 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'postpaid', col: 0, order: 0, type: 'source', label: ['Postpaid', 'revenues'], value: 15.9, notes: ['+13% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'prepaid', col: 0, order: 1, type: 'source', label: ['Prepaid', 'revenues'], value: 2.4, notes: ['(6%) Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'wholesale_other', col: 0, order: 2, type: 'source', label: ['Wholesale', '& Other'], value: 0.7, notes: ['(8%) Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'services', col: 1, order: 0, type: 'source', label: 'Services', value: 19.0, valueText: '$19.0B', notes: ['+9% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'equipment', col: 1, order: 1, type: 'source', label: 'Equipment', value: 3.5, notes: ['+2% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.3, notes: ['+11% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenues', value: 22.8, notes: ['+8% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.8, notes: ['65% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.0, valueText: '($8.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.5, notes: ['24% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 9.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.2, notes: ['14% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_expense', col: 5, order: 1, type: 'cost', label: ['Interest', '& other'], value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 5.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 5, order: 4, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 3.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'postpaid', target: 'services', value: 15.9, sourceWidth: 237, targetWidth: 239, y0: 620.5, y1: 723.5, sourceOrder: 0, targetOrder: 0, linkTint: PINK_LINK },
      { source: 'prepaid', target: 'services', value: 2.4, sourceWidth: 35, targetWidth: 36, y0: 934.5, y1: 861, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'wholesale_other', target: 'services', value: 0.7, sourceWidth: 7, targetWidth: 10, y0: 1104.5, y1: 884, sourceOrder: 0, targetOrder: 2, linkTint: PINK_LINK },
      { source: 'services', target: 'revenue', value: 19.0, sourceWidth: 285, targetWidth: 286, y0: 746.5, y1: 837, sourceOrder: 0, targetOrder: 0, linkTint: PINK_LINK },
      { source: 'equipment', target: 'revenue', value: 3.5, sourceWidth: 52, targetWidth: 53, y0: 1129, y1: 1006.5, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 2, targetWidth: 4, y0: 1326, y1: 1035, sourceOrder: 0, targetOrder: 2, linkTint: PINK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 14.8, sourceWidth: 223, targetWidth: 220, y0: 805.5, y1: 714, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.0, sourceWidth: 120, targetWidth: 119, y0: 977, y1: 1066.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 5.5, sourceWidth: 82, targetWidth: 80, y0: 645, y1: 554, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.3, sourceWidth: 138, targetWidth: 138, y0: 755, y1: 853, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.2, sourceWidth: 47, targetWidth: 45, y0: 537.5, y1: 442.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 1.2, sourceWidth: 17, targetWidth: 16, y0: 569.5, y1: 665, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.1, sourceWidth: 16, targetWidth: 15, y0: 586, y1: 811.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 5.8, sourceWidth: 87, targetWidth: 87, y0: 827.5, y1: 1022.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 3.4, sourceWidth: 51, targetWidth: 50, y0: 896.5, y1: 1230, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Mobile'],
      zh: {
        name: '美国 T-Mobile · 2026 财年第二季度',
        meta: {
          title: '美国 T-Mobile 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleSize: 112,
          titleTextLength: 1860,
        },
        nodes: {
          postpaid: { label: ['后付费', '收入'], notes: ['同比 +13%'] },
          prepaid: { label: ['预付费', '收入'], notes: ['同比 (6%)'] },
          wholesale_other: { label: ['批发及', '其他'], notes: ['同比 (8%)'] },
          services: { label: '服务收入', notes: ['同比 +9%'] },
          equipment: { label: '设备', notes: ['同比 +2%'] },
          other_revenue: { label: '其他', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
          other_expense: { label: ['利息及', '其他'] },
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
