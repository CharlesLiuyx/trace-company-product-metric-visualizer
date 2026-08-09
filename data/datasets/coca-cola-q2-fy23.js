/* Coca-Cola — Q2 FY23 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q2-fy23.png as a measured,
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
          emea: 'EMEA', latam: '拉美', ucan: 'UCAN', apac: '亚太',
          globalVentures: '全球创投业务', bottling: '装瓶投资业务', other: '其他',
          revenue: '收入', eliminations: '抵销', grossProfit: '毛利润',
          costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费',
          interest: '利息', sga: '销售及管理费用', yoy0: '同比 +0%', yoy21: '同比 +21%',
          yoy8: '同比 +8%', yoy10: '同比 +10%', yoyMinus2: '同比 (2%)', yoy6: '同比 +6%',
          margin59: '利润率 59%', pp2: '同比 +2 个百分点', margin20: '利润率 20%',
          ppMinus1: '同比 (1 个百分点)', margin21: '利润率 21%', pp17: '同比 +17 个百分点',
          revenueShare28: '占收入 28%', revenueShare11: '占收入 11%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments', other: 'Other',
          revenue: 'Revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy0: '+0% Y/Y', yoy21: '+21% Y/Y',
          yoy8: '+8% Y/Y', yoy10: '+10% Y/Y', yoyMinus2: '(2%) Y/Y', yoy6: '+6% Y/Y',
          margin59: '59% margin', pp2: '+2pp Y/Y', margin20: '20% margin',
          ppMinus1: '(1pp) Y/Y', margin21: '21% margin', pp17: '+17pp Y/Y',
          revenueShare28: '28% of revenue', revenueShare11: '11% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(482, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 421, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(207, zh ? 313 : 305, t.emea, t.yoy0, { nameSize: zh ? 27 : 36, nameX: 408 }),
      latam: source(388, 477, t.latam, t.yoy21, { nameX: 402, nameSize: 32 }),
      ucan: source(554, 686, t.ucan, t.yoy8, { nameSize: zh ? 30 : 36 }),
      apac: source(788, 882, t.apac, t.yoy0, { nameX: 408 }),
      global_ventures: source(965, 1048, t.globalVentures, t.yoy10, { nameSize: zh ? 32 : 36, nameX: 397, valueGap: 6 }),
      bottling_investments: source(1112, 1209, t.bottling, t.yoyMinus2, { nameSize: zh ? 34 : 36, nameX: 389, valueGap: 6 }),
      other_revenue: {
        blocks: [
          block(482, 1327, [line('$value', 40)]),
          block(395, 1337, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1230, 512, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy6, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1230, 1088, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1601, 382, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin59, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
        ], 8)],
      },
      cost_of_revenue: {
        blocks: [block(1606, 1049, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1981, 298, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin20, 29, 400, NOTE), line(t.ppMinus1, 29, 400, NOTE),
        ], 8)],
      },
      operating_expenses: {
        blocks: [block(1981, 850, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 369, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin21, 29, 400, NOTE), line(t.pp17, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2241, 503, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 635, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 738, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 905, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare28, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 22 : 10), 1125, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare11, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q2-fy23',
    name: 'Coca-Cola · Q2 FY23',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q2-fy23.png', width: 2667, height: 1500 },
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 747, y: 274, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 203, y: 282, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 195, y: 454, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 208, y: 656, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 214, y: 860, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 24.75,
      nodes: {
        emea: { x: 446, y: 300, width: 72, height: 55 },
        latam: { x: 446, y: 483, width: 72, height: 33 },
        ucan: { x: 446, y: 650, width: 72, height: 109 },
        apac: { x: 446, y: 885, width: 72, height: 39 },
        global_ventures: { x: 446, y: 1058, width: 72, height: 17 },
        bottling_investments: { x: 446, y: 1207, width: 72, height: 50 },
        other_revenue: { x: 446, y: 1391, width: 72, height: 2 },
        gross_revenue: { x: 820, y: 606, width: 72, height: 308 },
        revenue: { x: 1194, y: 653, width: 72, height: 298 },
        eliminations: { x: 1194, y: 1058, width: 72, height: 9 },
        gross_profit: { x: 1565, y: 556, width: 72, height: 177 },
        cost_of_revenue: { x: 1570, y: 915, width: 72, height: 122 },
        operating_profit: { x: 1939, y: 474, width: 72, height: 60 },
        operating_expenses: { x: 1946, y: 724, width: 72, height: 115 },
        other_income: { x: 2202, y: 476, width: 72, height: 15 },
        net_profit: { x: 2314, y: 374, width: 72, height: 62 },
        tax: { x: 2314, y: 674, width: 72, height: 9 },
        interest: { x: 2314, y: 773, width: 72, height: 2 },
        sga: { x: 2314, y: 909, width: 72, height: 82 },
        other_opex: { x: 2314, y: 1162, width: 72, height: 33 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.2, notes: ['+0% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.4, notes: ['+21% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.4, notes: ['+8% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.6, notes: ['+0% Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, notes: ['+10% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 2.0, valueText: '$2.0B', notes: ['(2%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.03, valueText: '$30M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.43 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.0, valueText: '$12.0B', notes: ['+6% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.4, valueText: '($0.4B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.1, notes: ['59% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.9, valueText: '($4.9B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.4, notes: ['20% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.7, valueText: '($4.7B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.6, valueText: '$0.6B', labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['21% margin', '+17pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, valueText: '($0.4B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2, valueText: '($0.2B)' },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.3, valueText: '($3.3B)', notes: ['28% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 1.3, valueText: '($1.3B)', notes: ['11% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.2, sourceWidth: 55, targetWidth: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.4, sourceWidth: 33, targetWidth: 35, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.4, sourceWidth: 109, targetWidth: 109, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.6, sourceWidth: 39, targetWidth: 40, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, sourceWidth: 17, targetWidth: 20, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 2.0, sourceWidth: 50, targetWidth: 49, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.03, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 12.0, sourceWidth: 299, targetWidth: 298, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.1, sourceWidth: 176, targetWidth: 177, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.9, sourceWidth: 122, targetWidth: 122, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.4, sourceWidth: 60, targetWidth: 60, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.7, sourceWidth: 117, targetWidth: 115, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 49, targetWidth: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.6, sourceWidth: 15, targetWidth: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.3, sourceWidth: 82, targetWidth: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 1.3, sourceWidth: 33, targetWidth: 33, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2023 财年第二季度',
        meta: {
          title: '可口可乐 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +0%'] }, latam: { label: 'LATAM', notes: ['同比 +21%'] },
          ucan: { label: 'UCAN', notes: ['同比 +8%'] }, apac: { label: 'APAC', notes: ['同比 +0%'] },
          global_ventures: { label: '全球创投业务', notes: ['同比 +10%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (2%)'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +6%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +17 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售及管理费用', notes: ['占收入 28%'] },
          other_opex: { label: '其他', notes: ['占收入 11%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
