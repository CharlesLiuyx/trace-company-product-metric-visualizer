/* Coca-Cola — Q1 FY23 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q1-fy23.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/coca-cola.js. */
(function () {
  const BLACK = '#000000';
  const BLACK_LABEL = '#111111';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2505;

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
          emea: '欧洲、中东和非洲', latam: '拉美', ucan: '美国和加拿大', apac: '亚太',
          globalVentures: '全球创投业务', bottling: '装瓶投资业务', other: '其他',
          revenue: '收入', eliminations: '抵销', grossProfit: '毛利润',
          costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费',
          interest: '利息', sga: '销售及管理费用', yoy0: '同比 (3%)', yoy21: '同比 +14%',
          yoy8: '同比 +9%', yoy10: '同比 +10%', yoyMinus2: '同比 (5%)', yoy6: '同比 +5%',
          margin59: '利润率 61%', pp2: '同比 +0 个百分点', margin20: '利润率 31%',
          ppMinus1: '同比 (2 个百分点)', margin21: '利润率 28%', pp17: '同比 +2 个百分点',
          revenueShare28: '占收入 29%', revenueShare11: '占收入 1%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments', other: 'Other',
          revenue: 'Revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy0: '(3%) Y/Y', yoy21: '+14% Y/Y',
          yoy8: '+9% Y/Y', yoy10: '+10% Y/Y', yoyMinus2: '(5%) Y/Y', yoy6: '+5% Y/Y',
          margin59: '61% margin', pp2: '+0pp Y/Y', margin20: '31% margin',
          ppMinus1: '(2pp) Y/Y', margin21: '28% margin', pp17: '+2pp Y/Y',
          revenueShare28: '29% of revenue', revenueShare11: '1% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(482, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 421, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(214, zh ? 322.5 : 316.5, t.emea, t.yoy10, { nameSize: zh ? 27 : 36, nameX: 408 }),
      latam: source(394, 491, t.latam, t.yoy21, { nameX: 402, nameSize: 32 }),
      ucan: source(563, 697, t.ucan, t.yoy8, { nameSize: zh ? 30 : 36 }),
      apac: source(808, 900, t.apac, t.yoy0, { nameX: 408 }),
      global_ventures: source(979, zh ? 1062 : 1057, t.globalVentures, t.yoy0, { nameSize: zh ? 32 : 36, nameX: 397, valueGap: 6 }),
      bottling_investments: source(1116, 1210, t.bottling, t.yoyMinus2, { nameSize: zh ? 34 : 36, nameX: 389, valueGap: 6 }),
      other_revenue: {
        blocks: [
          block(406, 1325, [line(t.other, zh ? 34 : 40, 400)], 8, 'end'),
          block(433, 1325, [line('$value', 40)], 8, 'start'),
        ],
      },
      revenue: {
        blocks: [block(1233, 509, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy6, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1233, 1164, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1607, 408, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin59, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1600.5, 1095, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1981, 312, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin20, 29, 400, NOTE), line(t.ppMinus1, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1981, 903, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 372, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin21, 29, 400, NOTE), line(t.pp17, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2242, 537, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(2522, 683, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(2525.5, 785, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(2524.5 + (zh ? 12 : 0), 933, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare28, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(2522.5 + (zh ? 12 : 0), 1133, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare11, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q1-fy23',
    name: 'Coca-Cola · Q1 FY23',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 210,
      titleSize: 150,
      titleWeight: 800,
      titleTextLength: 2326,
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 264, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 290, width: 96, height: 92, pairedNode: 'emea', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 464.5, width: 98, height: 92, pairedNode: 'latam', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 667.5, width: 96, height: 98, pairedNode: 'ucan', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 875, width: 92, height: 90, pairedNode: 'apac', pairedTarget: 'label', pairedSide: 'left' },
    ],
    layout: {
      scale: 29.45,
      nodes: {
        emea: { x: 449, y: 310, width: 71, height: 58 },
        latam: { x: 449, y: 491, width: 71, height: 39 },
        ucan: { x: 449, y: 659, width: 71, height: 114 },
        apac: { x: 449, y: 902, width: 71, height: 38 },
        global_ventures: { x: 449, y: 1072, width: 71, height: 19 },
        bottling_investments: { x: 449, y: 1207, width: 71, height: 56 },
        other_revenue: { x: 449, y: 1384, width: 71, height: 5 },
        gross_revenue: { x: 823, y: 616, width: 70, height: 334 },
        revenue: { x: 1197, y: 656, width: 70, height: 324 },
        eliminations: { x: 1197, y: 1139, width: 70, height: 9 },
        gross_profit: { x: 1571, y: 596, width: 70, height: 196 },
        cost_of_revenue: { x: 1571, y: 950, width: 70, height: 127 },
        operating_profit: { x: 1942, y: 503, width: 70, height: 97 },
        operating_expenses: { x: 1944, y: 789, width: 71, height: 95 },
        other_income: { x: 2207, y: 503, width: 70, height: 23 },
        net_profit: { x: 2317, y: 367, width: 71, height: 91 },
        tax: { x: 2317, y: 711, width: 71, height: 27 },
        interest: { x: 2317, y: 824, width: 71, height: 4 },
        sga: { x: 2317, y: 937, width: 71, height: 92 },
        other_opex: { x: 2317, y: 1181, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.0, valueText: '$2.0B', notes: ['+10% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.4, notes: ['+14% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 3.9, notes: ['+9% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.4, notes: ['(3%) Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.7, notes: ['(3%) Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 1.9, notes: ['(5%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.025, valueText: '$25M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 11.325 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.0, valueText: '$11.0B', notes: ['+5% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.4, valueText: '($0.4B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.7, notes: ['61% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.3, valueText: '($4.3B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.4, notes: ['31% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.3, valueText: '($3.3B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.9, valueText: '$0.9B', labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.1, notes: ['28% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.9, valueText: '($0.9B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2, valueText: '($0.2B)' },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.2, valueText: '($3.2B)', notes: ['29% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.0, sourceWidth: 58, targetWidth: 58, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.4, sourceWidth: 39, targetWidth: 39, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 3.9, sourceWidth: 114, targetWidth: 114, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.4, sourceWidth: 38, targetWidth: 38, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.7, sourceWidth: 19, targetWidth: 19, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.9, sourceWidth: 56, targetWidth: 56, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.025, sourceWidth: 5, targetWidth: 10, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 11.0, sourceWidth: 324, targetWidth: 324, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 6.7, sourceWidth: 196, targetWidth: 196, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.3, sourceWidth: 127, targetWidth: 127, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.4, sourceWidth: 97, targetWidth: 97, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, sourceWidth: 99, targetWidth: 95, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.2, sourceWidth: 66, targetWidth: 68, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.9, sourceWidth: 27, targetWidth: 27, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 4, targetWidth: 4, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.9, sourceWidth: 23, targetWidth: 23, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.2, sourceWidth: 94, targetWidth: 92, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2023 财年第一季度',
        meta: {
          title: '可口可乐 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +10%'] }, latam: { label: 'LATAM', notes: ['同比 +14%'] },
          ucan: { label: 'UCAN', notes: ['同比 +9%'] }, apac: { label: 'APAC', notes: ['同比 (3%)'] },
          global_ventures: { label: '全球创投业务', notes: ['同比 (3%)'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (5%)'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +5%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +2 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售及管理费用', notes: ['占收入 29%'] },
          other_opex: { label: '其他', notes: ['占收入 1%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
