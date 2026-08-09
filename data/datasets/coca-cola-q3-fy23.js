/* Coca-Cola — Q3 FY23 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q3-fy23.png as a measured,
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
          interest: '利息', sga: '销售及管理费用', yoy10: '同比 +10%',
          yoy24: '同比 +24%', yoy6: '同比 +6%', yoyMinus2: '同比 (2%)',
          yoy15: '同比 +15%', yoy4: '同比 +4%', yoy8: '同比 +8%',
          margin61: '利润率 61%', pp2: '同比 +2 个百分点', margin27: '利润率 27%',
          ppMinus1: '同比 (1 个百分点)', margin26: '利润率 26%', pp0: '同比 +0 个百分点',
          revenueShare31: '占收入 31%', revenueShare3: '占收入 3%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments', other: 'Other',
          revenue: 'Revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy10: '+10% Y/Y', yoy24: '+24% Y/Y',
          yoy6: '+6% Y/Y', yoyMinus2: '(2%) Y/Y', yoy15: '+15% Y/Y', yoy4: '+4% Y/Y',
          yoy8: '+8% Y/Y', margin61: '61% margin', pp2: '+2pp Y/Y', margin27: '27% margin',
          ppMinus1: '(1pp) Y/Y', margin26: '26% margin', pp0: '+0pp Y/Y',
          revenueShare31: '31% of revenue', revenueShare3: '3% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(216, 331, t.emea, t.yoy10, { nameSize: zh ? 27 : 36, nameX: 411 }),
      latam: source(396, 501, t.latam, t.yoy24, { nameX: 424, nameSize: 39 }),
      ucan: source(565, 709, t.ucan, t.yoy6, { nameSize: zh ? 30 : 36 }),
      apac: source(810, 916, t.apac, t.yoyMinus2, { nameX: 411 }),
      global_ventures: source(973, 1066, t.globalVentures, t.yoy15, {
        nameSize: zh ? 32 : 40,
        nameX: 424,
      }),
      bottling_investments: source(1114, zh ? 1222 : 1221, t.bottling, t.yoy4, {
        nameSize: zh ? 34 : 36,
        nameX: 392,
        valueGap: 6,
      }),
      other_revenue: {
        blocks: [
          block(486, 1339, [line('$value', 34)]),
          block(398, 1339, [line(t.other, 34, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1233, 520, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy8, 29, 400, NOTE),
        ], 0)],
      },
      eliminations: {
        blocks: [block(1233, 1117, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1606, 389, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin61, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1604, 1079, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1980, 310, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin27, 29, 400, NOTE), line(t.ppMinus1, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1979, 890, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 373, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin26, 29, 400, NOTE), line(t.pp0, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2236, 537, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 663, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 768, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 960, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare31, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(RIGHT_LABEL_X, 1182, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare3, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q3-fy23',
    name: 'Coca-Cola · Q3 FY23',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q3-fy23.png', width: 2667, height: 1500 },
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 305, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 477, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 681, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 894, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 26.9,
      nodes: {
        emea: { x: 450, y: 322, width: 72, height: 58 },
        latam: { x: 450, y: 503, width: 72, height: 41 },
        ucan: { x: 450, y: 670, width: 72, height: 120 },
        apac: { x: 450, y: 920, width: 72, height: 37 },
        global_ventures: { x: 450, y: 1078, width: 72, height: 19 },
        bottling_investments: { x: 450, y: 1222, width: 72, height: 49 },
        other_revenue: { x: 450, y: 1390, width: 72, height: 4 },
        gross_revenue: { x: 824, y: 625, width: 72, height: 334 },
        revenue: { x: 1197, y: 666, width: 72, height: 326 },
        eliminations: { x: 1197, y: 1096, width: 72, height: 6 },
        gross_profit: { x: 1563, y: 584, width: 72, height: 198 },
        cost_of_revenue: { x: 1568, y: 944, width: 72, height: 125 },
        operating_profit: { x: 1944, y: 503, width: 72, height: 87 },
        operating_expenses: { x: 1949, y: 773, width: 72, height: 109 },
        other_income: { x: 2200, y: 521, width: 72, height: 8 },
        net_profit: { x: 2317, y: 371, width: 72, height: 83 },
        tax: { x: 2317, y: 698, width: 72, height: 10 },
        interest: { x: 2317, y: 815, width: 72, height: 2 },
        sga: { x: 2317, y: 960, width: 72, height: 98 },
        other_opex: { x: 2317, y: 1239, width: 72, height: 8 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.2, notes: ['+10% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.6, notes: ['+24% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.5, notes: ['+6% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.4, notes: ['(2%) Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, notes: ['+15% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 1.9, notes: ['+4% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.04, valueText: '$40M', color: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.3 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.0, valueText: '$12.0B', notes: ['+8% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.3, notes: ['61% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.3, notes: ['27% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.4, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.1, notes: ['26% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.7, notes: ['31% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.4, notes: ['3% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.2, sourceWidth: 58, targetWidth: 59, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.6, sourceWidth: 41, targetWidth: 43, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.5, sourceWidth: 120, targetWidth: 121, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.4, sourceWidth: 37, targetWidth: 38, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, sourceWidth: 19, targetWidth: 21, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.9, sourceWidth: 49, targetWidth: 51, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.04, sourceWidth: 4, targetWidth: 1, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 12.0, sourceWidth: 326, targetWidth: 326, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 8, targetWidth: 6, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.3, sourceWidth: 198, targetWidth: 198, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 128, targetWidth: 125, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.3, sourceWidth: 87, targetWidth: 87, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 111, targetWidth: 109, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.7, sourceWidth: 75, targetWidth: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 10, targetWidth: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.4, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.7, sourceWidth: 100, targetWidth: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.4, sourceWidth: 9, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2023 财年第三季度',
        meta: {
          title: '可口可乐 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +10%'] }, latam: { label: 'LATAM', notes: ['同比 +24%'] },
          ucan: { label: 'UCAN', notes: ['同比 +6%'] }, apac: { label: 'APAC', notes: ['同比 (2%)'] },
          global_ventures: { label: '全球创投业务', notes: ['同比 +15%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 +4%'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +8%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 +0 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 31%'] }, other_opex: { label: '其他', notes: ['占收入 3%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
