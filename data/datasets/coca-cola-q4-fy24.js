/* Coca-Cola — Q4 FY24 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q4-fy24.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/coca-cola.js. */
(function () {
  const BLACK = '#000000';
  const BLACK_LABEL = '#111111';
  const GRAY_LINK = '#858585';
  const SHORT_GRAY = '#aaaaaa';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2518;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });

  const labels = (zh) => {
    const t = zh
      ? {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: '全球创投业务', bottling: '装瓶投资业务', other: '其他',
          revenue: '净收入', eliminations: '抵销', grossProfit: '毛利润',
          costOfGoodsSold: ['销售', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费',
          interest: '利息', sga: '销售及管理费用', yoy6: '同比 +6%', yoy10: '同比 +10%',
          yoy16: '同比 +16%', yoy9: '同比 +9%', yoy5: '同比 +5%', yoyDown23: '同比 (23%)',
          margin60: '利润率 60%', pp3: '同比 +3 个百分点', margin23: '利润率 23%',
          margin19: '利润率 19%', pp1: '同比 +1 个百分点', revenueShare35: '占收入 35%',
          revenueShare2: '占收入 2%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments', other: 'Other',
          revenue: 'Net revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfGoodsSold: ['Cost of', 'goods sold'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy6: '+6% Y/Y', yoy10: '+10% Y/Y',
          yoy16: '+16% Y/Y', yoy9: '+9% Y/Y', yoy5: '+5% Y/Y', yoyDown23: '(23%) Y/Y',
          margin60: '60% margin', pp3: '+3pp Y/Y', margin23: '23% margin',
          margin19: '19% margin', pp1: '+1pp Y/Y', revenueShare35: '35% of revenue',
          revenueShare2: '2% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(options.valueX || 486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(238, 337, t.emea, t.yoy6),
      latam: source(397, 493, t.latam, t.yoy10, { valueX: 478.5, nameX: 416.5 }),
      ucan: source(554, 690, t.ucan, t.yoy16),
      apac: source(787, 879, t.apac, t.yoy9),
      global_ventures: source(942, 1030, t.globalVentures, t.yoy5, { valueX: 474.5, nameX: 412.5, nameSize: zh ? 30 : 36 }),
      bottling_investments: source(1089.5, 1182.5, t.bottling, t.yoyDown23, { valueX: 473, nameX: 411, nameSize: zh ? 34 : 36 }),
      other_revenue: {
        blocks: [
          block(482, 1256, [line('$value', 40)]),
          block(411, 1294.5, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1226.5, 524, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy6, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1233, 1099, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1607, 377.5, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin60, 29, 400, NOTE), line(t.pp3, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1597.5, 1093, [
          ...t.costOfGoodsSold.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1981, 266.5, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin23, 29, 400, NOTE), line(t.pp3, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1981, 836, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(2509, 281, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin19, 29, 400, NOTE), line(t.pp1, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2249, 435, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(2508, 531, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(2508.5, 640, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(2508, 800, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare35, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(2508, 1031, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare2, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q4-fy24',
    name: 'Coca-Cola · Q4 FY24',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 210,
      titleSize: 150,
      titleWeight: 800,
      titleTextLength: 2328,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK_LABEL },
        hub: { node: BLACK, label: BLACK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 314, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 468, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 663, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 855, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 25,
      nodes: {
        emea: { x: 446, y: 338, width: 72, height: 43 },
        latam: { x: 446, y: 494, width: 72, height: 40 },
        ucan: { x: 446, y: 654, width: 72, height: 116 },
        apac: { x: 448, y: 885, width: 72, height: 29 },
        global_ventures: { x: 446, y: 1043, width: 72, height: 19 },
        bottling_investments: { x: 446, y: 1186, width: 72, height: 36 },
        other_revenue: { x: 446, y: 1316, width: 72, height: 2 },
        gross_revenue: { x: 820, y: 574, width: 72, height: 294 },
        revenue: { x: 1194, y: 668, width: 72, height: 288 },
        eliminations: { x: 1194, y: 1082, width: 72, height: 2 },
        gross_profit: { x: 1568, y: 566, width: 72, height: 172 },
        cost_of_revenue: { x: 1565, y: 969, width: 72, height: 114 },
        operating_profit: { x: 1944, y: 453, width: 72, height: 65 },
        operating_expenses: { x: 1941, y: 719, width: 72, height: 104 },
        other_income: { x: 2209, y: 418, width: 72, height: 5 },
        net_profit: { x: 2314, y: 326, width: 72, height: 53 },
        tax: { x: 2314, y: 559, width: 72, height: 12 },
        interest: { x: 2314, y: 669, width: 72, height: 4 },
        sga: { x: 2314, y: 807, width: 72, height: 100 },
        other_opex: { x: 2314, y: 1077, width: 72, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 1.8, notes: ['+6% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.6, notes: ['+10% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.7, notes: ['+16% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.2, notes: ['+9% Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, notes: ['+5% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 1.6, notes: ['(23%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.022, valueText: '$22M', color: SHORT_GRAY, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 11.722 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net revenue', value: 11.5, notes: ['+6% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.2, valueText: '($0.2B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.9, notes: ['60% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 4.6, valueText: '($4.6B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['23% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.2, valueText: '($4.2B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.3, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['19% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.6, valueText: '($0.6B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2, valueText: '($0.2B)' },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 4.0, valueText: '($4.0B)', notes: ['35% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)', notes: ['2% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 1.8, sourceWidth: 43, targetWidth: 45, y0: 359.5, y1: 596.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.6, sourceWidth: 40, targetWidth: 40, y0: 514, y1: 639, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.7, sourceWidth: 116, targetWidth: 117, y0: 712, y1: 717.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.2, sourceWidth: 29, targetWidth: 30, y0: 899.5, y1: 791, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, sourceWidth: 19, targetWidth: 20, y0: 1052.5, y1: 816, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.6, sourceWidth: 36, targetWidth: 40, y0: 1204, y1: 846, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.022, sourceWidth: 2, targetWidth: 2, y0: 1317, y1: 867, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 11.5, sourceWidth: 288, targetWidth: 288, y0: 718, y1: 812, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.2, sourceWidth: 6, targetWidth: 2, y0: 865, y1: 1083, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 6.9, sourceWidth: 174, targetWidth: 172, y0: 755, y1: 652, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.6, sourceWidth: 114, targetWidth: 114, y0: 899, y1: 1026, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 66, targetWidth: 65, y0: 599, y1: 485.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.2, sourceWidth: 106, targetWidth: 104, y0: 685, y1: 771, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 45, targetWidth: 45, y0: 475.5, y1: 348.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 15, targetWidth: 12, y0: 505.5, y1: 565, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 5, targetWidth: 4, y0: 515.5, y1: 671, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.3, sourceWidth: 5, targetWidth: 8, y0: 420.5, y1: 375, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 4.0, sourceWidth: 100, targetWidth: 100, y0: 769, y1: 857, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 4, targetWidth: 2, y0: 821, y1: 1078, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2024 财年第四季度',
        meta: {
          title: '可口可乐 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +6%'] },
          latam: { label: 'LATAM', notes: ['同比 +10%'] },
          ucan: { label: 'UCAN', notes: ['同比 +16%'] },
          apac: { label: 'APAC', notes: ['同比 +9%'] },
          global_ventures: { label: '全球创投业务', notes: ['同比 +5%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (23%)'] },
          other_revenue: { label: '其他' },
          revenue: { label: '净收入', notes: ['同比 +6%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 60%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +3 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 35%'] },
          other_opex: { label: '其他', notes: ['占收入 2%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
